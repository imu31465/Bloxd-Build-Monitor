# Changed — Bundle Modifications Report (Part 098 / 161)

- **Updated at**: `2026-11-27T02:05 JST`
- **Part**: `98 / 161` (**390** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 097](part-097.md) · [Part 099 →](part-099.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (4670 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 2532. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18729` → after: `L18487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18487) · [Before (L18729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18729)

```diff
-         this.bG.pT.deleteEntity(this.eId), zH.k.AX(`lifeformDisposed|${(0,SH.b)(this.eId)}`), "Player" === this.lifeformType && zH.k.AX("playerNamesUpdated"), zH.k.unsubscribe(this.canAttackSub), zH.k.unsubscribe(this.interactableSub), zH.k.unsubscribe(this.multilineTextBoxSub)
+         this.kz.DW.deleteEntity(this.eId), yB.o.tM(`lifeformDisposed|${(0,QB.b)(this.eId)}`), "Player" === this.lifeformType && yB.o.tM("playerNamesUpdated"), yB.o.unsubscribe(this.canAttackSub), yB.o.unsubscribe(this.interactableSub), yB.o.unsubscribe(this.multilineTextBoxSub)
```

#### 2533. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18733-L18734` → after: `L18491-L18492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18491-L18492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18491-L18492) · [Before (L18733-L18734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18733-L18734)

```diff
-         const BH = this.bG.pT;
-         if (BH.HAH(this.eId)) zH.k.AX(`entityNameChanged|${this.eId}`);
+         const OB = this.kz.DW;
+         if (OB.PYB(this.eId)) yB.o.tM(`entityNameChanged|${this.eId}`);
```

#### 2534. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18737` → after: `L18495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18495) · [Before (L18737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18737)

```diff
-           BH.yR(this.eId, BH.names.entityName, {
+           OB.RL(this.eId, OB.names.entityName, {
```

#### 2535. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18741` → after: `L18499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18499) · [Before (L18741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18741)

```diff
-         "Player" === this.lifeformType && zH.k.AX("playerNamesUpdated")
+         "Player" === this.lifeformType && yB.o.tM("playerNamesUpdated")
```

#### 2536. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18744-L18750` → after: `L18502-L18508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18502-L18508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18502-L18508) · [Before (L18744-L18750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18744-L18750)

```diff
-     var GH, YH, uH = LH(39002),
-       QH = LH(614),
-       WH = LH(38396),
-       MH = LH(3038),
-       xH = LH(4061),
-       vH = LH(4113),
-       PH = LH(38943);
+     var zB, lB, pB = GB(38796),
+       qB = GB(635),
+       ZB = GB(38219),
+       NB = GB(3088),
+       RB = GB(4111),
+       WB = GB(4166),
+       AB = GB(38744);
```

#### 2537. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18759-L18760` → after: `L18517-L18518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18517-L18518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18517-L18518) · [Before (L18759-L18760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18759-L18760)

```diff
-           (0, PH.setRigAiState)(this.bG, this.eId, null !== (LH = QH.o[BH]) && void 0 !== LH ? LH : null)
-         } else "armSwinging" === HH && BH && !this.bG.pT.BAH(this.eId) && (0, PH.playRigAction)(this.bG, this.eId, WH.p)
+           (0, AB.setRigAiState)(this.kz, this.eId, null !== (GB = qB.k[OB]) && void 0 !== GB ? GB : null)
+         } else "armSwinging" === BB && OB && !this.kz.DW.zYB(this.eId) && (0, AB.playRigAction)(this.kz, this.eId, ZB.o)
```

#### 2538. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18764` → after: `L18522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18522) · [Before (L18764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18764)

```diff
-         return this.bG.pT.getState(this.eId, HH.meshMetadata.type).kR
+         return this.kz.DW.getState(this.eId, BB.meshMetadata.type).uF
```

#### 2539. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18767` → after: `L18525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18525) · [Before (L18767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18767)

```diff
-         hH.d[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, HH)
+         oB.e[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, BB)
```

#### 2540. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18770` → after: `L18528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18528) · [Before (L18770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18770)

```diff
-     const UH = [2, 0, 1, 66, "c", "a", 9, 7, 50, 15, 4, 8, 255, "length", "d", 145, "undefined", void 0, "b", 69, 63, 6, "fromCodePoint", 12, "push", 3, 79, 5, !1, !0, 147, 191, 91, 64, 176, 8191, 88, 13, 14, 24, "i", 194, "j", 98, 17, "e", "h", 95, 123, "g", 174, 142, 239, 30, 1 … [truncated]
+     const SB = ["b", 0, 1, "i", 3, "a", "j", 88, "f", 6, 37, 8, 255, "length", "undefined", void 0, "c", "d", 63, "fromCodePoint", 7, 12, "push", 165, 84, 53, "h", 179, 71, 91, 5, 55, 8191, 13, 14, 134, 9, 43, 146, 233, 2, 247, 159, 58, 191, 59, 156, 33, 193, 172, 4, 131, 89, 160 … [truncated]
```

#### 2541. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18773-L18784` → after: `L18531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18531) · [Before (L18773-L18784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18773-L18784)

```diff
-       return HH[UH[13]] = UH[2], typeof GH[HH[UH[1]]] === UH[16] ? GH[HH[UH[1]]] = function(...HH) {
-         for (kH(HH[UH[13]] = UH[2], HH[UH[5]] = '&eTqZVFAkGLIpgUYKDXSdcu01^(P!){t/Q8B@x}fW"riC|jN%a=536z~MRvJ#noy,[$EO>wm]4;`h_H7:+.bl*?s92<', HH[UH[0]] = "" + (HH[UH[1]] || ""), HH[UH[4]] = HH[UH[0]].length, HH[UH[10]] = [], HH[UH[8]] = UH[1], HH[-UH[9]] = UH[1], HH[UH[7]] = -UH … [truncated]
-           if (HH[UH[6]] = HH[UH[5]].indexOf(HH[UH[0]][HH[-UH[3]]]), HH[UH[6]] !== -UH[2])
-             if (HH[UH[7]] < UH[1]) HH[UH[7]] = HH[UH[6]];
-             else {
-               kH(HH[UH[7]] += HH[UH[6]] * UH[32], HH[UH[8]] |= HH[UH[7]] << HH[-UH[9]], HH[-UH[9]] += (HH[UH[7]] & UH[35]) > UH[36] ? UH[37] : UH[38]);
-               do {
-                 kH(HH[UH[10]].push(HH[UH[8]] & UH[12]), HH[UH[8]] >>= UH[11], HH[-UH[9]] -= UH[11])
-               } while (HH[-UH[9]] > UH[7]);
-               HH[UH[7]] = -UH[2]
-             } return HH[UH[7]] > -UH[2] && HH[UH[10]].push((HH[UH[8]] | HH[UH[7]] << HH[-UH[9]]) & UH[12]), OH(HH[UH[10]])
-       }(YH[HH[UH[1]]]) : GH[HH[UH[1]]]
+       return BB[SB[13]] = SB[2], typeof mB !== SB[14] && mB ? (new mB).decode(new IB(BB[SB[1]])) : typeof FB !== SB[14] && FB ? FB.from(BB[SB[1]]).toString("utf-8") : gB(BB[SB[1]])
```

#### 2542. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18788` → after: `L18535-L18548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18535-L18548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18535-L18548) · [Before (L18788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18788)

```diff
-       return HH[UH[13]] = UH[2], typeof fH !== UH[16] && fH ? (new fH).decode(new lH(HH[UH[1]])) : typeof KH !== UH[16] && KH ? KH.from(HH[UH[1]]).toString("utf-8") : qH(HH[UH[1]])
+       if (BB[SB[13]] = SB[4], BB[SB[1]] === function(...BB) {
+           return BB[SB[13]] = SB[2], typeof zB[BB[SB[1]]] === SB[14] ? zB[BB[SB[1]]] = function(...BB) {
+             for (kB(BB[SB[13]] = SB[2], BB[SB[2]] = '1XS%C6I!mUBv"VrAdJ+Z?Qi(4l}qGx>Kh$]u.n_{pza&YL:*;OE<P,Hwbs)[7D|8yMt2/#9R@0gefj5Tc=NF3~k^W`o', BB[-SB[25]] = "" + (BB[SB[1]] || ""), BB[SB[16]] = BB[-SB[25]].length, BB[SB[17]] = [], BB[SB[30]] = SB[1], BB[-SB[31]] = SB[1], BB[S … [truncated]
+               if (BB[SB[27]] = BB[SB[2]].indexOf(BB[-SB[25]][BB[SB[26]]]), BB[SB[27]] !== -SB[2])
+                 if (BB[SB[28]] < SB[1]) BB[SB[28]] = BB[SB[27]];
+                 else {
+                   kB(BB[SB[28]] += BB[SB[27]] * SB[29], BB[SB[30]] |= BB[SB[28]] << BB[-SB[31]], BB[-SB[31]] += (BB[SB[28]] & SB[32]) > SB[7] ? SB[33] : SB[34]);
+                   do {
+                     kB(BB[SB[17]].push(BB[SB[30]] & SB[12]), BB[SB[30]] >>= SB[11], BB[-SB[31]] -= SB[11])
+                   } while (BB[-SB[31]] > SB[20]);
+                   BB[SB[28]] = -SB[2]
+                 } return BB[SB[28]] > -SB[2] && BB[SB[17]].push((BB[SB[30]] | BB[SB[28]] << BB[-SB[31]]) & SB[12]), nB(BB[SB[17]])
+           }(lB[BB[SB[1]]]) : zB[BB[SB[1]]]
+         }(SB[84])) return BB[SB[2]] + BB[SB[40]]
```

#### 2543. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18796-L18797` → after: `L18556-L18557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18556-L18557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18556-L18557) · [Before (L18796-L18797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18796-L18797)

```diff
-     kH(GH = {}, YH = ["_M2znffNnoX7Wqz!c(HAL#bR@RW", '"[45~wm5&p4!RZoBRD?mdha"|csSRKjW@R>LTlpT', "rd0h$8/,XpHYwgCfPiS_R5NRjJ,a1P,)", "rDT]QWQN$G9uWP{D`8YQ`+&", 'ec>Lu3s)"d4_@Pd!,8*=w;zT', "pjq_1RmA:Y/7:%:WezT", "8R[FGh!{|Jl_=.ViTy.5h;CpNYATo^H(kOq", 'F(jZ#%]3t#}!I./1&a3txWS"l,R_` … [truncated]
-       kH(HH[UH[13]] = UH[1], HH[UH[5]] = [function() {
+     kB(zB = {}, lB = ["%[Cn[d?6gQguc&aV=@j^N!(=S$^*o>W1tp$)P&K7mt)?c5&qR7PLFB8_ue~zA", '.kMGQw#XeQ:S8/mFa@`+Vyda,5"0zo^Fq)IK8YN7%', "<nha*+QhxeV<G>t", '#D"ynbbiW/pZ],QVD8dc>w@6rx(CjMd{5";a+NYld)*ihM2Uqx_)Z&PQd)Z|R', '+xgK9sggWxXmg%BF4$9LRF6?()![],1g{=SjR<=beQ&"JU)', "gx<)azr_4I[| … [truncated]
+       var BB, OB, GB, YB = [function() {
```

#### 2544. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18805` → after: `L18565-L18566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18565-L18566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18565-L18566) · [Before (L18805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18805)

```diff
-       }], HH[UH[2]] = UH[17], HH[UH[4]] = []);
+       }];
+       kB(BB = void 0, OB = []);
```

#### 2545. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18807` → after: `L18568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18568) · [Before (L18807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18807)

```diff
-         kH(HH[UH[2]] = Object, HH[UH[4]][UH[24]]("".__proto__.constructor.name))
+         kB(BB = Object, OB[SB[22]]("".__proto__.constructor.name))
```

#### 2546. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18809-L18812` → after: `L18570-L18574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18570-L18574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18570-L18574) · [Before (L18809-L18812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18809-L18812)

```diff
-       HH: for (HH[UH[14]] = UH[1]; HH[UH[14]] < HH[UH[5]][UH[13]]; HH[UH[14]]++) try {
-         for (HH[UH[2]] = HH[UH[5]][HH[UH[14]]](), HH[UH[15]] = UH[1]; HH[UH[15]] < HH[UH[4]][UH[13]]; HH[UH[15]]++)
-           if (typeof HH[UH[2]][HH[UH[4]][HH[UH[15]]]] === UH[16]) continue HH;
-         return HH[UH[2]]
+       BB: for (GB = SB[1]; GB < YB[SB[13]]; GB++) try {
+         var DB;
+         for (BB = YB[GB](), DB = SB[1]; DB < OB[SB[13]]; DB++)
+           if (typeof BB[OB[DB]] === SB[14]) continue BB;
+         return BB
```

#### 2547. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18814-L18816` → after: `L18576-L18578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18576-L18578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18576-L18578) · [Before (L18814-L18816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18814-L18816)

```diff
-       return HH[UH[2]] || this
-     }() || {}, fH = IH.TextDecoder, lH = IH.Uint8Array, KH = IH.rX, cH = IH.String || String, eH = IH.Array || Array, qH = function(...HH) {
-       return kH(HH[UH[13]] = UH[1], HH[UH[5]] = new eH(128), HH[UH[2]] = cH[UH[22]] || cH.fromCharCode, HH[UH[0]] = []),
+       return BB || this
+     }() || {}, mB = uB.TextDecoder, IB = uB.Uint8Array, FB = uB.BP, iB = uB.String || String, LB = uB.Array || Array, gB = function(...BB) {
+       return kB(BB[SB[13]] = SB[1], BB[-SB[23]] = new LB(SB[68]), BB[SB[24]] = iB[SB[19]] || iB.fromCharCode, BB[SB[16]] = []),
```

#### 2548. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18818-L18839` → after: `L18580-L18590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18580-L18590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18580-L18590) · [Before (L18818-L18839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18818-L18839)

```diff
-           for (kH(BH[UH[13]] = UH[2], BH[-UH[19]] = UH[17], BH[UH[18]] = UH[17], BH[UH[4]] = BH[UH[1]][UH[13]], HH[UH[0]][UH[13]] = UH[1]), BH[UH[10]] = UH[1]; BH[UH[10]] < BH[UH[4]];) kH(BH[UH[18]] = BH[UH[1]][BH[UH[10]]++], BH[UH[18]] <= 127 ? BH[-UH[19]] = BH[UH[18]] : BH[UH[1 … [truncated]
-           return HH[UH[0]].join("")
-         }
-     }()), VH(86) + UH[55] in bH && function(...HH) {
-       kH(HH[UH[13]] = UH[1], HH[UH[30]] = function(...BH) {
-         return BH[UH[13]] = UH[0], HH[UH[18]]({}, BH[UH[1]], BH[UH[2]])
-       }, HH[UH[18]] = function(...BH) {
-         if (kH(BH[UH[13]] = UH[25], BH[UH[5]] = {}), BH[UH[1]][BH[UH[2]] + BH[UH[0]]] !== UH[17]) return BH[UH[1]][BH[UH[2]] + BH[UH[0]]];
-         if (BH[UH[2]] === BH[UH[0]]) return UH[29];
-         for (BH[-UH[26]] = UH[1]; BH[-UH[26]] < BH[UH[2]].length; BH[-UH[26]]++) BH[UH[5]][BH[UH[2]][BH[-UH[26]]]] === UH[17] && (BH[UH[5]][BH[UH[2]][BH[-UH[26]]]] = UH[1]), BH[UH[5]][BH[UH[0]][BH[-UH[26]]]] === UH[17] && (BH[UH[5]][BH[UH[0]][BH[-UH[26]]]] = UH[1]), kH(BH[UH[5]][ … [truncated]
-         for (BH[UH[27]] in BH[UH[5]])
-           if (BH[UH[5]][BH[UH[27]]] !== UH[1]) return BH[UH[1]][BH[UH[2]] + BH[UH[0]]] = UH[28], UH[28];
-         for (BH[UH[14]] = UH[2]; BH[UH[14]] < BH[UH[2]].length; BH[UH[14]]++)
-           if (HH[UH[18]](BH[UH[1]], BH[UH[2]].substr(UH[1], BH[UH[14]]), BH[UH[0]].substr(UH[1], BH[UH[14]])) && HH[UH[18]](BH[UH[1]], BH[UH[2]].substr(BH[UH[14]]), BH[UH[0]].substr(BH[UH[14]])) || HH[UH[18]](BH[UH[1]], BH[UH[2]].substr(UH[1], BH[UH[14]]), BH[UH[0]].substr(BH[UH[ … [truncated]
-         return BH[UH[1]][BH[UH[2]] + BH[UH[0]]] = UH[28], UH[28]
-       }, console.log(HH[UH[30]]))
- ... (6 more removed lines; see GitHub link above)
+           for (kB(OB[SB[13]] = SB[2], OB[SB[2]] = SB[15], OB[SB[0]] = SB[15], OB[SB[16]] = OB[SB[1]][SB[13]], BB[SB[16]][SB[13]] = SB[1]), OB[SB[17]] = SB[1]; OB[SB[17]] < OB[SB[16]];) kB(OB[SB[0]] = OB[SB[1]][OB[SB[17]]++], OB[SB[0]] <= SB[65] ? OB[SB[2]] = OB[SB[0]] : OB[SB[0]] … [truncated]
+           return BB[SB[16]].join("")
+         }
+     }()), (() => {
+       function BB(...BB) {
+         return BB[SB[13]] = SB[2], typeof zB[BB[SB[1]]] === SB[14] ? zB[BB[SB[1]]] = function(BB) {
+           var OB, GB, YB, DB, QB, oB, jB;
+           for (kB(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = SB[1], QB = SB[1], oB = -SB[2]), jB = SB[1]; jB < GB; jB++) {
+             var yB = ',DC~^YuI}l5NOq7cw1WZLd)ep&_]Ji!=2z$FnK+s8Prj"v4|BEAQxR.g?S{6:%yob9VfH0m;</tT`GXUa#*[M>h@3(k'.indexOf(OB[jB]);
+             if (yB !== -SB[2])
+               if (oB < SB[1]) oB = yB;
```

#### 2549. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18841` → after: `L18592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18592) · [Before (L18841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18841)

```diff
-                 kH(HH[UH[49]] += HH[UH[6]] * UH[32], HH[UH[27]] |= HH[UH[49]] << HH[UH[21]], HH[UH[21]] += (HH[UH[49]] & UH[35]) > UH[36] ? UH[37] : UH[38]);
+                 kB(oB += yB * SB[29], DB |= oB << QB, QB += (oB & SB[32]) > SB[7] ? SB[33] : SB[34]);
```

#### 2550. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18843-L18847` → after: `L18594-L18744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18594-L18744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18594-L18744) · [Before (L18843-L18847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18843-L18847)

```diff
-                   kH(HH[-UH[50]].push(HH[UH[27]] & UH[12]), HH[UH[27]] >>= UH[11], HH[UH[21]] -= UH[11])
-                 } while (HH[UH[21]] > UH[7]);
-                 HH[UH[49]] = -UH[2]
-               } return HH[UH[49]] > -UH[2] && HH[-UH[50]].push((HH[UH[27]] | HH[UH[49]] << HH[UH[21]]) & UH[12]), OH(HH[-UH[50]])
-         }
+                   kB(YB.push(DB & SB[12]), DB >>= SB[11], QB -= SB[11])
+                 } while (QB > SB[20]);
+                 oB = -SB[2]
+               }
+           }
+           return oB > -SB[2] && YB.push((DB | oB << QB) & SB[12]), nB(YB)
+         }(lB[BB[SB[1]]]) : zB[BB[SB[1]]]
+       }
+       if ([][SB[13]] = SB[1], BB(102) + "y" in fB && function(...OB) {
+           kB(OB[SB[13]] = SB[1], OB[SB[5]] = function() {
+             var OB, GB, YB = SB[1];
+ 
+             function DB(BB) {
+               return MB(yB(qB(BB)))
+             }
+ 
+ ... (135 more added lines; see GitHub link above)
```

#### 2551. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18863-L18872` → after: `L18747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18747) · [Before (L18863-L18872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18863-L18872)

```diff
-               for (kH(HH[UH[13]] = UH[2], HH[UH[5]] = '*bYD]d|S5uxia.H?nJIcj+/{Z#0_v>o~;^Pl6s=9BA4We<@}tTKwqLFk2E718G)%MRh&:,$QC!zN`V(gpry["O3UfmX', HH[UH[51]] = "" + (HH[UH[1]] || ""), HH[UH[4]] = HH[UH[51]].length, HH[UH[10]] = [], HH[-UH[52]] = UH[1], HH[UH[54]] = UH[1], HH[UH … [truncated]
-                 if (HH[UH[6]] = HH[UH[5]].indexOf(HH[UH[51]][HH[UH[53]]]), HH[UH[6]] !== -UH[2])
-                   if (HH[UH[49]] < UH[1]) HH[UH[49]] = HH[UH[6]];
-                   else {
-                     kH(HH[UH[49]] += HH[UH[6]] * UH[32], HH[-UH[52]] |= HH[UH[49]] << HH[UH[54]], HH[UH[54]] += (HH[UH[49]] & UH[35]) > UH[36] ? UH[37] : UH[38]);
-                     do {
-                       kH(HH[UH[10]].push(HH[-UH[52]] & UH[12]), HH[-UH[52]] >>= UH[11], HH[UH[54]] -= UH[11])
-                     } while (HH[UH[54]] > UH[7]);
-                     HH[UH[49]] = -UH[2]
-                   } return HH[UH[49]] > -UH[2] && HH[UH[10]].push((HH[-UH[52]] | HH[UH[49]] << HH[UH[54]]) & UH[12]), OH(HH[UH[10]])
+               return BB[SB[13]] = SB[2], RB(BB[SB[1]], SB[9]) ^ RB(BB[SB[1]], 11) ^ RB(BB[SB[1]], 25)
```

#### 2552. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18876` → after: `L18751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18751) · [Before (L18876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18876)

```diff
-               return HH[UH[13]] = UH[2], typeof GH[HH[UH[1]]] === UH[16] ? GH[HH[UH[1]]] = BH(YH[HH[UH[1]]]) : GH[HH[UH[1]]]
+               return BB[SB[13]] = SB[2], RB(BB[SB[1]], SB[20]) ^ RB(BB[SB[1]], SB[69]) ^ WB(BB[SB[1]], SB[4])
```

#### 2553. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18878-L18891` → after: `L18753-L18817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18753-L18817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18753-L18817) · [Before (L18878-L18891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18878-L18891)

```diff
-             let rH = {
-               [VH(UH[32])]: VH(92) + AH(93),
-               [AH(94)]: AH(UH[47]),
-               [AH(96)]: AH(97) + AH(UH[43]),
-               [AH(99) + AH(100)]: AH(101) + "01",
-               [AH(102)]: AH(103),
-               [AH(104) + AH(105) + "y"]: AH(106) + AH(107) + "t",
-               u0: AH(108) + UH[4],
-               [AH(109) + AH(110)]: AH(111) + "u9",
-               [AH(UH[56])]: AH(113) + AH(114) + UH[55]
-             };
-             kH(LH = UH[29], (UH[1], xH[AH(115)])(vH.Fi, rH))
-           }
-         }), 2092), (UH[1], xH[BH(116) + BH(117)])(((...HH) => {
+ 
+             function uB(...BB) {
+               return BB[SB[13]] = SB[2], RB(BB[SB[1]], 17) ^ RB(BB[SB[1]], SB[73]) ^ WB(BB[SB[1]], SB[72])
+             }
+ 
+             function mB(...BB) {
+               var OB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB;
+               for (kB(BB[SB[13]] = SB[40], BB[SB[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), BB[SB[4]] = new Array(SB[74])), kB(BB[SB[1]][BB[SB[2]] >> SB[30]] |= SB[68] << SB[71] - BB[SB[2]] % SB[70], BB[SB[1] … [truncated]
+                 for (kB(OB = BB[SB[5]][SB[1]], YB = BB[SB[5]][SB[2]], DB = BB[SB[5]][SB[40]], QB = BB[SB[5]][SB[4]], oB = BB[SB[5]][SB[50]], jB = BB[SB[5]][SB[30]], yB = BB[SB[5]][SB[9]], JB = BB[SB[5]][SB[20]]), PB = SB[1]; PB < SB[74]; PB++) kB(BB[SB[4]][PB] = PB < SB[55] ? BB[ … [truncated]
+                 kB(BB[SB[5]][SB[1]] = IB(OB, BB[SB[5]][SB[1]]), BB[SB[5]][SB[2]] = IB(YB, BB[SB[5]][SB[2]]), BB[SB[5]][SB[40]] = IB(DB, BB[SB[5]][SB[40]]), BB[SB[5]][SB[4]] = IB(QB, BB[SB[5]][SB[4]]), BB[SB[5]][SB[50]] = IB(oB, BB[SB[5]][SB[50]]), BB[SB[5]][SB[30]] = IB(jB, BB[SB … [truncated]
+               }
+               return BB[SB[5]]
+             }
+ 
+             function IB(...BB) {
+               return kB(BB[SB[13]] = SB[40], BB[SB[40]] = (BB[SB[1]] & SB[75]) + (BB[SB[2]] & SB[75]), BB[SB[76]] = (BB[SB[1]] >> SB[55]) + (BB[SB[2]] >> SB[55]) + (BB[SB[40]] >> SB[55])), BB[SB[76]] << SB[55] | BB[SB[40]] & SB[75]
+ ... (49 more added lines; see GitHub link above)
```

#### 2554. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18894-L18897` → after: `L18820-L18823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18820-L18823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18820-L18823) · [Before (L18894-L18897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18894-L18897)

```diff
-               return HH[UH[13]] = UH[2], typeof GH[HH[UH[1]]] === UH[16] ? GH[HH[UH[1]]] = function(...HH) {
-                 for (kH(HH[UH[13]] = UH[2], HH[UH[2]] = 'vFpdbLtEDhkMOlIgiCGYjTH2m5}.34fcPau@z7;ZB_N<w)%1A$8e{0!*rV^n6S`?s>U|,J[#QR]Kx~X(&y/o=9:"Wq+', HH[-UH[56]] = "" + (HH[UH[1]] || ""), HH[UH[57]] = HH[-UH[56]].length, HH[UH[10]] = [], HH[UH[45]] = UH[1], HH[UH[58]] = UH[1], H … [truncated]
-                   if (HH[UH[6]] = HH[UH[2]].indexOf(HH[-UH[56]][HH[UH[11]]]), HH[UH[6]] !== -UH[2])
-                     if (HH[UH[49]] < UH[1]) HH[UH[49]] = HH[UH[6]];
+               return BB[SB[13]] = SB[2], typeof zB[BB[SB[1]]] === SB[14] ? zB[BB[SB[1]]] = function(...BB) {
+                 for (kB(BB[SB[13]] = SB[2], BB[SB[5]] = '>bKGWjh!Y`Rr]6{u:UdE#v~ZT,%I.2B^5fqe=z;_LCk"cO9$}/Xmyt0wP|3&7M<Qn8x@laVS1[H4iN(pD+?)Ao*JFsg', BB[SB[40]] = "" + (BB[SB[1]] || ""), BB[SB[4]] = BB[SB[40]].length, BB[SB[50]] = [], BB[-SB[82]] = SB[1], BB[SB[9]] = SB[1], BB[- … [truncated]
+                   if (BB[SB[3]] = BB[SB[5]].indexOf(BB[SB[40]][BB[SB[26]]]), BB[SB[3]] !== -SB[2])
+                     if (BB[-SB[81]] < SB[1]) BB[-SB[81]] = BB[SB[3]];
```

#### 2555. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18899` → after: `L18825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18825) · [Before (L18899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18899)

```diff
-                       kH(HH[UH[49]] += HH[UH[6]] * UH[32], HH[UH[45]] |= HH[UH[49]] << HH[UH[58]], HH[UH[58]] += (HH[UH[49]] & UH[35]) > UH[36] ? UH[37] : UH[38]);
+                       kB(BB[-SB[81]] += BB[SB[3]] * SB[29], BB[-SB[82]] |= BB[-SB[81]] << BB[SB[9]], BB[SB[9]] += (BB[-SB[81]] & SB[32]) > SB[7] ? SB[33] : SB[34]);
```

#### 2556. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18901-L18904` → after: `L18827-L18830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18827-L18830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18827-L18830) · [Before (L18901-L18904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18901-L18904)

```diff
-                         kH(HH[UH[10]].push(HH[UH[45]] & UH[12]), HH[UH[45]] >>= UH[11], HH[UH[58]] -= UH[11])
-                       } while (HH[UH[58]] > UH[7]);
-                       HH[UH[49]] = -UH[2]
-                     } return HH[UH[49]] > -UH[2] && HH[UH[10]].push((HH[UH[45]] | HH[UH[49]] << HH[UH[58]]) & UH[12]), OH(HH[UH[10]])
+                         kB(BB[SB[50]].push(BB[-SB[82]] & SB[12]), BB[-SB[82]] >>= SB[11], BB[SB[9]] -= SB[11])
+                       } while (BB[SB[9]] > SB[20]);
+                       BB[-SB[81]] = -SB[2]
+                     } return BB[-SB[81]] > -SB[2] && BB[SB[50]].push((BB[-SB[82]] | BB[-SB[81]] << BB[SB[9]]) & SB[12]), nB(BB[SB[50]])
```

#### 2557. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18906-L18908` → after: `L18832-L18881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18832-L18881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18832-L18881) · [Before (L18906-L18908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18906-L18908)

```diff
-             }(118) + "3" in bH && function(...HH) {
-               HH[UH[13]] = UH[1]
-             }(), LH = UH[28]
+             }(SB[65]) in fB && function(...BB) {
+               BB[SB[13]] = SB[1];
+               const OB = require("big-integer");
+               kB(BB[SB[86]] = class {
+                 static randomPrime(...BB) {
+                   BB[SB[13]] = SB[2];
+                   const GB = OB.one.shiftLeft(BB[SB[1]] - SB[2]),
+                     YB = OB.one.shiftLeft(BB[SB[1]]).prev();
+                   for (; SB[80];) {
+                     let BB = OB.randBetween(GB, YB);
+                     if (BB.isProbablePrime(SB[83])) return BB
+                   }
+                 }
+                 static generate(...BB) {
+                   BB[SB[13]] = SB[2];
+                   const GB = OB(65537);
+ ... (34 more added lines; see GitHub link above)
```

#### 2558. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18912-L18924` → after: `L18885-L18897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18885-L18897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18885-L18897) · [Before (L18912-L18924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18912-L18924)

```diff
-     var mH, oH, IH, fH, lH, KH, cH, eH, qH, gH = LH(39011),
-       NH = LH(39019),
-       RH = LH(38190),
-       jH = LH(38192),
-       nH = LH(38176),
-       FH = LH(39328),
-       DH = LH(3503),
-       wH = LH(3508),
-       ZH = LH(38100),
-       dH = LH(38067),
-       aH = LH(38135),
-       sH = LH(38118);
-     class JH extends gH.b {
+     var dB, KB, uB, mB, IB, FB, iB, LB, gB, rB = GB(38798),
+       XB = GB(38801),
+       wB = GB(38011),
+       EB = GB(38019),
+       cB = GB(38005),
+       hB = GB(39115),
+       aB = GB(3573),
+       eB = GB(3580),
+       TB = GB(37928),
+       bB = GB(37880),
+       CB = GB(37962),
+       HB = GB(37946);
+     class vB extends rB.e {
```

#### 2559. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18929` → after: `L18902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18902) · [Before (L18929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18929)

```diff
-           NQ: LH,
+           eq: GB,
```

#### 2560. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18936` → after: `L18909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18909) · [Before (L18936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18936)

```diff
-           } = rH[SH], hH = DH.b.getTexture(`${BH}${SH}_Atlas`, wH.k.LIFEFORM_ATLAS).url, {
+           } = DB[QB], oB = aB.c.getTexture(`${OB}${QB}_Atlas`, eB.h.LIFEFORM_ATLAS).url, {
```

#### 2561. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18938-L18940` → after: `L18911-L18913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18911-L18913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18911-L18913) · [Before (L18938-L18940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18938-L18940)

```diff
-           } = (0, ZH.b)({
-             name: `${BH}${SH}SpriteSheet`,
-             NQ: LH,
+           } = (0, TB.c)({
+             name: `${OB}${QB}SpriteSheet`,
+             eq: GB,
```

#### 2562. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18942` → after: `L18915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18915) · [Before (L18942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18942)

```diff
-               transparencyMode: dH.c.MATERIAL_ALPHATEST,
+               transparencyMode: bB.d.MATERIAL_ALPHATEST,
```

#### 2563. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18948` → after: `L18921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18921) · [Before (L18948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18948)

```diff
-                 samplingMode: aH.f.nearestNearestMipLinear,
+                 samplingMode: CB.g.nearestNearestMipLinear,
```

#### 2564. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18957` → after: `L18930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18930) · [Before (L18957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18957)

```diff
-               (0, NH.b)(BH, HH, 1, 1), (0, sH.p)(BH, RH.d), (0, jH.d)(BH, (0, MH.c)().mX), (0, nH.c)(BH), (0, sH.J)(BH)
+               (0, XB.e)(OB, BB, 1, 1), (0, HB.w)(OB, wB.c), (0, EB.e)(OB, (0, NB.g)().UP), (0, cB.d)(OB), (0, HB.K)(OB)
```

#### 2565. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18965-L18966` → after: `L18938-L18939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18938-L18939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18938-L18939) · [Before (L18965-L18966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18965-L18966)

```diff
-         const AH = (0, FH.b)(BH, LH);
-         if (!AH) return void console.error(`No texture metadata found for variation "${LH}" of mob type "${BH}"`);
+         const YB = (0, hB.d)(OB, GB);
+         if (!YB) return void console.error(`No texture metadata found for variation "${GB}" of mob type "${OB}"`);
```

#### 2566. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18982-L19001` → after: `L18955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18955) · [Before (L18982-L19001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18982-L19001)

```diff
-     const iH = [173, 0, 1, 8, 94, "a", 52, 7, 93, 47, "d", 255, "length", "undefined", void 0, 4, 3, 141, 63, 6, "fromCodePoint", 12, "push", 198, 146, 72, 101, 91, "e", 8191, 88, 13, 14, 33, 200, "g", 73, 191, "b", "h", "c", 9, "f", 75, 2, !1, 201, 147, 183, 196, 127, 128, 235,  … [truncated]
- 
-     function pH(...HH) {
-       return HH[iH[12]] = iH[2], typeof mH[HH[iH[1]]] === iH[13] ? mH[HH[iH[1]]] = function(...HH) {
-         for (LB(HH[iH[12]] = iH[2], HH[iH[5]] = 'eWfRKhakrpTCbStiDFHIAUEsQVjJgMXOPNcYZnmol;Lw#B`"7qvzd6{,.$x=[):y%5<~*2@+>}9(10]_u?|^!4/8&3G', HH[-iH[0]] = "" + (HH[iH[1]] || ""), HH[-iH[4]] = HH[-iH[0]].length, HH[iH[10]] = [], HH[iH[8]] = iH[1], HH[iH[9]] = iH[1], HH[iH[7]] = - … [truncated]
-           if (HH[iH[6]] = HH[iH[5]].indexOf(HH[-iH[0]][HH[iH[3]]]), HH[iH[6]] !== -iH[2])
-             if (HH[iH[7]] < iH[1]) HH[iH[7]] = HH[iH[6]];
-             else {
-               LB(HH[iH[7]] += HH[iH[6]] * iH[27], HH[iH[8]] |= HH[iH[7]] << HH[iH[9]], HH[iH[9]] += (HH[iH[7]] & iH[29]) > iH[30] ? iH[31] : iH[32]);
-               do {
-                 LB(HH[iH[10]].push(HH[iH[8]] & iH[11]), HH[iH[8]] >>= iH[3], HH[iH[9]] -= iH[3])
-               } while (HH[iH[9]] > iH[7]);
-               HH[iH[7]] = -iH[2]
-             } return HH[iH[7]] > -iH[2] && HH[iH[10]].push((HH[iH[8]] | HH[iH[7]] << HH[iH[9]]) & iH[11]), yH(HH[iH[10]])
-       }(oH[HH[iH[1]]]) : mH[HH[iH[1]]]
-     }
- ... (4 more removed lines; see GitHub link above)
+     const sB = ["b", 0, 1, 8, 3, 108, "i", 7, 192, 133, 53, 255, "length", "d", 19, "c", 212, "undefined", void 0, 199, 207, 158, 148, 63, 6, "fromCodePoint", 12, "push", "a", 2, "h", 235, 9, "g", 91, 5, 8191, 88, 13, 14, 4, !0, 256, 65537, 23, 100, 30, 165, 146, "e", "f", 139, 3 … [truncated]
```

#### 2567. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19004-L19017` → after: `L18958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18958) · [Before (L19004-L19017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19004-L19017)

```diff
-       if (HH[iH[12]] = iH[16], HH[iH[1]] === function(...HH) {
-           return HH[iH[12]] = iH[2], typeof mH[HH[iH[1]]] === iH[13] ? mH[HH[iH[1]]] = function(...HH) {
-             for (LB(HH[iH[12]] = iH[2], HH[iH[2]] = '5w<$1.|)4O?cKu0!D;gt>]#B%IA(TF@pJ=CmxY`k6zU[j*X"LisrveMyH+9:E2l}q,^NZdSPG{b378hoRW~_fQVa&n/', HH[-iH[25]] = "" + (HH[iH[1]] || ""), HH[iH[16]] = HH[-iH[25]].length, HH[iH[15]] = [], HH[iH[28]] = iH[1], HH[iH[19]] = iH[1], HH[iH … [truncated]
-               if (HH[-iH[26]] = HH[iH[2]].indexOf(HH[-iH[25]][HH[iH[3]]]), HH[-iH[26]] !== -iH[2])
-                 if (HH[iH[7]] < iH[1]) HH[iH[7]] = HH[-iH[26]];
-                 else {
-                   LB(HH[iH[7]] += HH[-iH[26]] * iH[27], HH[iH[28]] |= HH[iH[7]] << HH[iH[19]], HH[iH[19]] += (HH[iH[7]] & iH[29]) > iH[30] ? iH[31] : iH[32]);
-                   do {
-                     LB(HH[iH[15]].push(HH[iH[28]] & iH[11]), HH[iH[28]] >>= iH[3], HH[iH[19]] -= iH[3])
-                   } while (HH[iH[19]] > iH[7]);
-                   HH[iH[7]] = -iH[2]
-                 } return HH[iH[7]] > -iH[2] && HH[iH[15]].push((HH[iH[28]] | HH[iH[7]] << HH[iH[19]]) & iH[11]), yH(HH[iH[15]])
-           }(oH[HH[iH[1]]]) : mH[HH[iH[1]]]
-         }(123) + iH[39]) return HH[iH[2]] + HH[iH[44]]
+       return BB[sB[12]] = sB[2], typeof mB !== sB[17] && mB ? (new mB).decode(new IB(BB[sB[1]])) : typeof FB !== sB[17] && FB ? FB.from(BB[sB[1]]).toString("utf-8") : gB(BB[sB[1]])
```

#### 2568. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19025-L19150` → after: `L18966-L18989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18966-L18989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18966-L18989) · [Before (L19025-L19150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19025-L19150)

```diff
-     LB(mH = {}, oH = ['N9FaZ)?kWbqQ.=|c|a"de`*H"HP2.QgM', '6zN(e>1l(5SndJNOKjq{4N;I1t)up7~VFw>aLq"IxF', "<nnk{!%a7iLF;Des<BaNV", "bwT>M+=2w=g2FDWw2Fsd0??Mw.sFsfvo", "&CJ>DdH`USURVD:F@BJ0m}3MPbv2u>}Vqzl{*69lqH1iEh", "WPQ{T?Q9]rr5%RFj6RI>07kkrx+}B>1j&z:de>/dCAEan>8;EMf", '<*(hIv4Yb … [truncated]
-       var HH, BH, LH, AH = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }];
-       LB(HH = void 0, BH = []);
-       try {
-         LB(HH = Object, BH[iH[22]]("".__proto__.constructor.name))
-       } catch (lH) {}
-       HH: for (LH = iH[1]; LH < AH[iH[12]]; LH++) try {
-         var rH;
- ... (110 more removed lines; see GitHub link above)
+     BO(dB = {}, KB = ["u@O3[`F9sCG/(go{sjx=K<57hq0/7/,;", 'P`:hU"g7w0x|;g_', '/:#TC4TcAle}]b8|z%zjd^<"LvAkB%JM8:ITzQacO_uW*P9).4kjAEu', "mMM<H^G(h", "UMyrD`J`h,D|F/{sZ5<VT>ca", "&Da$eEsI(8lh?7v|*Z9HzQNf%,b`+^McAF1|i(#(;G*", "_@z{P9u", '@&>U;g09X1XM"zn!6]3~|7m?%Z%?om+w9u', 'pUjqIQ … [truncated]
+         BO(BB[sB[12]] = sB[1], BB[sB[15]] = [function() {
+           return globalThis
+         }, function() {
+           return global
+         }, function() {
+           return window
+         }, function() {
+           return new Function("return this")()
+         }], BB[sB[13]] = sB[18], BB[sB[14]] = []);
+         try {
+           BO(BB[sB[13]] = Object, BB[sB[14]][sB[27]]("".__proto__.constructor.name))
+         } catch (KB) {}
+         BB: for (BB[sB[4]] = sB[1]; BB[sB[4]] < BB[sB[15]][sB[12]]; BB[sB[4]]++) try {
+           for (BB[sB[13]] = BB[sB[15]][BB[sB[4]]](), BB[-sB[16]] = sB[1]; BB[-sB[16]] < BB[sB[14]][sB[12]]; BB[-sB[16]]++)
+             if (typeof BB[sB[13]][BB[sB[14]][BB[-sB[16]]]] === sB[17]) continue BB;
+ ... (8 more added lines; see GitHub link above)
```

#### 2569. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19152-L19179` → after: `L18991-L18996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18991-L18996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18991-L18996) · [Before (L19152-L19179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19152-L19179)

```diff
-           return await (async (BH, LH) => {
-             function AH(HH) {
-               var BH, LH, AH, rH, SH, hH, tH, zH = '^tH~LS3k8PypY+:Jqb?Z*;ilVw].T0eE|KzD#u@%!dm>W_s&c,"MFjrOC92g7v`$h/RxNf6XnBQU(5o1}4[){AIG=<a';
-               for (LB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = iH[1], SH = iH[1], hH = -iH[2]), tH = iH[1]; tH < LH; tH++) {
-                 var CH = zH.indexOf(BH[tH]);
-                 if (CH !== -iH[2])
-                   if (hH < iH[1]) hH = CH;
-                   else {
-                     LB(hH += CH * iH[27], rH |= hH << SH, SH += (hH & iH[29]) > iH[30] ? iH[31] : iH[32]);
-                     do {
-                       LB(AH.push(rH & iH[11]), rH >>= iH[3], SH -= iH[3])
-                     } while (SH > iH[7]);
-                     hH = -iH[2]
-                   }
-               }
-               return hH > -iH[2] && AH.push((rH | hH << SH) & iH[11]), yH(AH)
- ... (12 more removed lines; see GitHub link above)
+       }()),
+       function(...BB) {
+         return BB[sB[12]] = sB[2], typeof dB[BB[sB[1]]] === sB[17] ? dB[BB[sB[1]]] = function(...BB) {
+           for (BO(BB[sB[12]] = sB[2], BB[-sB[5]] = 'uaptPYhT}_HFIXG5OZvfl0#M?%{S|jwJUn4)s!m[xc;o*D(7:N>3<9iq8@,Ebg1`C]+k"Qy&~=V$rdW6L^/zKRB.A2e', BB[sB[0]] = "" + (BB[sB[1]] || ""), BB[sB[4]] = BB[sB[0]].length, BB[sB[10]] = [], BB[sB[8]] = sB[1], BB[-sB[9]] = sB[1], BB[sB[7]] =  … [truncated]
+             if (BB[sB[6]] = BB[-sB[5]].indexOf(BB[sB[0]][BB[sB[3]]]), BB[sB[6]] !== -sB[2])
+               if (BB[sB[7]] < sB[1]) BB[sB[7]] = BB[sB[6]];
```

#### 2570. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19181` → after: `L18998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18998) · [Before (L19181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19181)

```diff
-                 LB(HH[iH[65]] += HH[-iH[64]] * iH[27], HH[iH[66]] |= HH[iH[65]] << HH[iH[62]], HH[iH[62]] += (HH[iH[65]] & iH[29]) > iH[30] ? iH[31] : iH[32]);
+                 BO(BB[sB[7]] += BB[sB[6]] * sB[34], BB[sB[8]] |= BB[sB[7]] << BB[-sB[9]], BB[-sB[9]] += (BB[sB[7]] & sB[36]) > sB[37] ? sB[38] : sB[39]);
```

#### 2571. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19183-L19399` → after: `L19000-L19083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19000-L19083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19000-L19083) · [Before (L19183-L19399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19183-L19399)

```diff
-                   LB(HH[-iH[17]].push(HH[iH[66]] & iH[11]), HH[iH[66]] >>= iH[3], HH[iH[62]] -= iH[3])
-                 } while (HH[iH[62]] > iH[7]);
-                 HH[iH[65]] = -iH[2]
-               } return HH[iH[65]] > -iH[2] && HH[-iH[17]].push((HH[iH[66]] | HH[iH[65]] << HH[iH[62]]) & iH[11]), yH(HH[-iH[17]])
-         }
- 
-         function BH(BH) {
-           return typeof mH[BH] === iH[13] ? mH[BH] = HH(oH[BH]) : mH[BH]
-         }
-         pH(136) + iH[67] in BB && (module.exports = async (HH = (...HH) => {
-           throw HH[iH[12]] = iH[1], new Error(function(HH) {
-             if (typeof mH[HH] === iH[13]) return mH[HH] = function(...HH) {
-               for (LB(HH[iH[12]] = iH[2], HH[iH[5]] = 'cumM3na{AGYBde=_O[^9K]q%I#S,W</?j")Zs1vNrzt`|6>V}~&bL*F.gECHx2J7X$8DP(4i;okUR+p@!h5w0fT:ylQ', HH[iH[38]] = "" + (HH[iH[1]] || ""), HH[iH[16]] = HH[iH[38]].length, HH[-iH[69]] = [], HH[iH[66]] = iH[1], HH[-iH[68]] = iH[1], HH[ … [truncated]
-                 if (HH[iH[41]] = HH[iH[5]].indexOf(HH[iH[38]][HH[iH[3]]]), HH[iH[41]] !== -iH[2])
-                   if (HH[iH[7]] < iH[1]) HH[iH[7]] = HH[iH[41]];
-                   else {
- ... (201 more removed lines; see GitHub link above)
+                   BO(BB[sB[10]].push(BB[sB[8]] & sB[11]), BB[sB[8]] >>= sB[3], BB[-sB[9]] -= sB[3])
+                 } while (BB[-sB[9]] > sB[7]);
+                 BB[sB[7]] = -sB[2]
+               } return BB[sB[7]] > -sB[2] && BB[sB[10]].push((BB[sB[8]] | BB[sB[7]] << BB[-sB[9]]) & sB[11]), xB(BB[sB[10]])
+         }(KB[BB[sB[1]]]) : dB[BB[sB[1]]]
+       }(95) + "4" in tB && function(...BB) {
+         BB[sB[12]] = sB[1];
+         const OB = require("big-integer");
+         BO(BB[sB[28]] = class {
+           static randomPrime(...BB) {
+             BB[sB[12]] = sB[2];
+             const GB = OB.one.shiftLeft(BB[sB[1]] - sB[2]),
+               YB = OB.one.shiftLeft(BB[sB[1]]).prev();
+             for (; sB[41];) {
+               let BB = OB.randBetween(GB, YB);
+               if (BB.isProbablePrime(sB[42])) return BB
+ ... (68 more added lines; see GitHub link above)
```

#### 2572. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19401-L19405` → after: `L19085-L19087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19085-L19087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19085-L19087) · [Before (L19401-L19405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19401-L19405)

```diff
-               function GH(...HH) {
-                 for (LB(HH[iH[12]] = iH[2], HH[-iH[94]] = Array(HH[iH[1]].length >> iH[44])), HH[iH[44]] = iH[1]; HH[iH[44]] < HH[-iH[94]].length; HH[iH[44]]++) HH[-iH[94]][HH[iH[44]]] = iH[1];
-                 for (HH[iH[44]] = iH[1]; HH[iH[44]] < HH[iH[1]].length * iH[3]; HH[iH[44]] += iH[3]) HH[-iH[94]][HH[iH[44]] >> iH[66]] |= (HH[iH[1]].charCodeAt(HH[iH[44]] / iH[3]) & iH[11]) << iH[95] - HH[iH[44]] % iH[77];
-                 return HH[-iH[94]]
-               }
+           function GB(...BB) {
+             return BB[sB[12]] = sB[2], typeof dB[BB[sB[1]]] === sB[17] ? dB[BB[sB[1]]] = OB(KB[BB[sB[1]]]) : dB[BB[sB[1]]]
+           }
```

#### 2573. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19408-L19430` → after: `L19097-L19110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19097-L19110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19097-L19110) · [Before (L19408-L19430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19408-L19430)

```diff
-                 var BH, LH = "";
-                 for (BH = iH[1]; BH < HH.length * iH[77]; BH += iH[3]) LH += String.fromCharCode(HH[BH >> iH[66]] >>> iH[95] - BH % iH[77] & iH[11]);
-                 return LH
-               }
- 
-               function uH(HH, BH) {
-                 return HH >>> BH | HH << iH[77] - BH
-               }
- 
-               function QH(...HH) {
-                 return HH[iH[12]] = iH[44], HH[iH[1]] >>> HH[iH[2]]
-               }
- 
-               function WH(HH, BH, LH) {
-                 return HH & BH ^ ~HH & LH
-               }
- ... (7 more removed lines; see GitHub link above)
+                 var OB, GB, YB, DB, QB, oB, jB;
+                 for (BO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = sB[1], QB = sB[1], oB = -sB[2]), jB = sB[1]; jB < GB; jB++) {
+                   var yB = 'IRbl{GkQZswBW(/TCD5H`9A>;%1v}ut?Oe"MJy+ErLiFV8f!c<~mN.)=g6nK[:dp2]z|P,7UqSY#*0^Xj&4ha3_x$@o'.indexOf(OB[jB]);
+                   if (yB !== -sB[2])
+                     if (oB < sB[1]) oB = yB;
+                     else {
+                       BO(oB += yB * sB[34], DB |= oB << QB, QB += (oB & sB[36]) > sB[37] ? sB[38] : sB[39]);
+                       do {
+                         BO(YB.push(DB & sB[11]), DB >>= sB[3], QB -= sB[3])
+                       } while (QB > sB[7]);
+                       oB = -sB[2]
+                     }
+                 }
+                 return oB > -sB[2] && YB.push((DB | oB << QB) & sB[11]), xB(YB)
```

#### 2574. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19434-L19442` → after: `L19114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19114) · [Before (L19434-L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19434-L19442)

```diff
-                 return HH[iH[12]] = iH[2], uH(HH[iH[1]], iH[19]) ^ uH(HH[iH[1]], 11) ^ uH(HH[iH[1]], 25)
-               }
- 
-               function PH(HH) {
-                 return uH(HH, iH[7]) ^ uH(HH, iH[92]) ^ QH(HH, iH[16])
-               }
- 
-               function TH(HH) {
-                 return uH(HH, 17) ^ uH(HH, iH[97]) ^ QH(HH, iH[96])
+                 return OB[sB[12]] = sB[2], typeof dB[OB[sB[1]]] === sB[17] ? dB[OB[sB[1]]] = BB(KB[OB[sB[1]]]) : dB[OB[sB[1]]]
```

#### 2575. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19446-L19464` → after: `L19118-L19124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19118-L19124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19118-L19124) · [Before (L19446-L19464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19446-L19464)

```diff
-                 var LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH;
-                 for (LB(HH[iH[12]] = iH[44], HH[iH[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), HH[iH[16]] = new Array(iH[98])), LB(HH[iH[1]][HH[iH[2]] >> iH[66]] |= iH[51] << iH[95] - HH[iH[2]] % iH[77], HH[iH … [truncated]
-                   for (LB(LH = HH[iH[5]][iH[1]], AH = HH[iH[5]][iH[2]], rH = HH[iH[5]][iH[44]], SH = HH[iH[5]][iH[16]], hH = HH[iH[5]][iH[15]], tH = HH[iH[5]][iH[66]], zH = HH[iH[5]][iH[19]], CH = HH[iH[5]][iH[7]]), XH = iH[1]; XH < iH[98]; XH++) LB(HH[iH[16]][XH] = XH < iH[80] ? … [truncated]
-                   LB(HH[iH[5]][iH[1]] = VH(LH, HH[iH[5]][iH[1]]), HH[iH[5]][iH[2]] = VH(AH, HH[iH[5]][iH[2]]), HH[iH[5]][iH[44]] = VH(rH, HH[iH[5]][iH[44]]), HH[iH[5]][iH[16]] = VH(SH, HH[iH[5]][iH[16]]), HH[iH[5]][iH[15]] = VH(hH, HH[iH[5]][iH[15]]), HH[iH[5]][iH[66]] = VH(tH, H … [truncated]
-                 }
-                 return HH[iH[5]]
-               }
- 
-               function VH(HH, BH) {
-                 var LH = (HH & iH[99]) + (BH & iH[99]);
-                 return (HH >> iH[80]) + (BH >> iH[80]) + (LH >> iH[80]) << iH[80] | LH & iH[99]
-               }
-               return LB(BH[iH[12]] = iH[1], BH[iH[10]] = iH[1], BH[iH[2]] = ""), BH[iH[44]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -168007 … [truncated]
-                 hex: LH,
-                 b64: rH,
-                 any: SH,
- ... (3 more removed lines; see GitHub link above)
+                 BO(BB[sB[12]] = sB[1], BB[sB[15]] = function(...BB) {
+                   for (BO(BB[sB[12]] = sB[2], BB[sB[28]] = sB[1], BB[sB[59]] = {}, BB[sB[4]] = sB[1], BB[sB[13]] = sB[1], BB[sB[35]] = sB[1], BB[sB[50]] = BB[sB[1]].length), BB[-sB[58]] = sB[1]; BB[-sB[58]] < BB[sB[50]]; BB[-sB[58]]++) {
+                     for (BO(BB[sB[59]] = {}, BB[sB[4]] = sB[1], BB[sB[13]] = sB[2]), BB[sB[60]] = BB[-sB[58]] + sB[2]; BB[sB[60]] < BB[sB[50]]; BB[sB[60]]++) BB[sB[1]][BB[-sB[58]]].x !== BB[sB[1]][BB[sB[60]]].x || BB[sB[1]][BB[-sB[58]]].y !== BB[sB[1]][BB[sB[60]]].y ? (BB[sB[1]][ … [truncated]
+                     BO(BB[sB[4]] += BB[sB[13]], BB[sB[28]] = Math.max(BB[sB[28]], BB[sB[4]]))
+                   }
+                   return BB[sB[28]]
+                 }, console.log(BB[sB[15]]))
```

#### 2576. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19466-L19471` → after: `L19126-L19135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19126-L19135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19126-L19135) · [Before (L19466-L19471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19466-L19471)

```diff
-             }(), console.log(BH[iH[100]]))
-           }(), LH = iH[45]
-         })))
-       }
-     })();
-     var AB = LH(619);
+               OB(99) + "s" in tB && GB();
+               let YB = sB[18];
+               BO(DB = sB[41], (0, RB[OB(sB[45])])(WB.dj, YB))
+             }
+           }), 13318), (0, RB[BB(101) + GB(102)])((() => {
+             DB = sB[61]
+           })))
+         }
+       })();
+     var OO = GB(641);
```

#### 2577. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19584` → after: `L19248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19248) · [Before (L19584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19584)

```diff
-     class SB extends uH.b {
+     class YO extends pB.d {
```

#### 2578. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19586` → after: `L19250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19250) · [Before (L19586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19586)

```diff
-         if (super(HH), HH.lifeformType !== hB) throw new Error(`NPC Meshes are not supported for lifeform type "${HH.lifeformType}"`)
+         if (super(BB), BB.lifeformType !== DO) throw new Error(`NPC Meshes are not supported for lifeform type "${BB.lifeformType}"`)
```

#### 2579. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19589` → after: `L19253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19253) · [Before (L19589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19589)

```diff
-         const AH = (0, MH.c)().mX.bR.getEntityId(HH),
+         const YB = (0, NB.g)().UP.kF.getEntityId(BB),
```

#### 2580. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19610` → after: `L19274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19274) · [Before (L19610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19610)

```diff
-               hH.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", HH)
+               oB.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", BB)
```

#### 2581. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19618` → after: `L19282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19282) · [Before (L19618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19618)

```diff
-               hH.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", HH)
+               oB.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", BB)
```

#### 2582. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19626` → after: `L19290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19290) · [Before (L19626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19626)

```diff
-               hH.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", HH)
+               oB.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", BB)
```

#### 2583. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19635` → after: `L19299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19299) · [Before (L19635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19635)

```diff
-             super.onChangeClient(HH, BH), "ownerDbId" === HH && this.setCollarVisible(!(0, AB.M)(BH))
+             super.onChangeClient(BB, OB), "ownerDbId" === BB && this.setCollarVisible(!(0, OO.Q)(OB))
```

#### 2584. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19638` → after: `L19302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19302) · [Before (L19638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19638)

```diff
-             hH.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", HH)
+             oB.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", BB)
```

#### 2585. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19643` → after: `L19307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19307) · [Before (L19643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19643)

```diff
-         Player: uH.b,
+         Player: pB.d,
```

#### 2586. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19646` → after: `L19310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19310) · [Before (L19646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19646)

```diff
-       EB = Object.fromEntries(Object.entries(AH.c).map((HH => {
+       yO = Object.fromEntries(Object.entries(YB.b).map((BB => {
```

#### 2587. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19649-L19650` → after: `L19313-L19314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19313-L19314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19313-L19314) · [Before (L19649-L19650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19649-L19650)

```diff
-         const SH = (0, rH.d)(LH),
-           hH = null !== (BH = CB[LH]) && void 0 !== BH ? BH : JH,
+         const QB = (0, DB.b)(GB),
+           oB = null !== (OB = jO[GB]) && void 0 !== OB ? OB : vB,
```

#### 2588. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19664` → after: `L19328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19328) · [Before (L19664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19664)

```diff
-                 atlas: null === HH.atlasTexture ? DH.b.getArmourAtlas() : DH.b.getTexture(HH.atlasTexture, wH.k.LIFEFORM_ATLAS).url,
+                 atlas: null === BB.atlasTexture ? aB.c.getArmourAtlas() : aB.c.getTexture(BB.atlasTexture, eB.h.LIFEFORM_ATLAS).url,
```

#### 2589. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19673` → after: `L19337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19337) · [Before (L19673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19673)

```diff
-           IE: zB[AH.handler],
+           RJ: oO[YB.handler],
```

#### 2590. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19679` → after: `L19343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19343) · [Before (L19679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19679)

```diff
-   38977: (HH, BH, LH) => {
+   38780: (BB, OB, GB) => {
```

#### 2591. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19683` → after: `L19347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19347) · [Before (L19683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19683)

```diff
-     var AH = LH(38057);
+     var YB = GB(37871);
```

#### 2592. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19686` → after: `L19350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19350) · [Before (L19686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19686)

```diff
-       return null !== BH && void 0 !== BH ? BH : AH.c[HH]
+       return null !== OB && void 0 !== OB ? OB : YB.e[BB]
```

#### 2593. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19689` → after: `L19353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19353) · [Before (L19689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19689)

```diff
-   38986: (HH, BH, LH) => {
+   38786: (BB, OB, GB) => {
```

#### 2594. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19691-L19692` → after: `L19355-L19356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19355-L19356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19355-L19356) · [Before (L19691-L19692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19691-L19692)

```diff
-       e: () => AH,
-       f: () => rH
+       d: () => YB,
+       e: () => DB
```

#### 2595. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19700` → after: `L19364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19364) · [Before (L19700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19700)

```diff
-   38169: (HH, BH, LH) => {
+   37996: (BB, OB, GB) => {
```

#### 2596. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19702-L19703` → after: `L19366-L19367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19366-L19367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19366-L19367) · [Before (L19702-L19703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19702-L19703)

```diff
-       e: () => GH,
-       i: () => XH
+       b: () => zB,
+       c: () => PB
```

#### 2597. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19705-L19710` → after: `L19369-L19374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19369-L19374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19369-L19374) · [Before (L19705-L19710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19705-L19710)

```diff
-     var AH = LH(38118),
-       rH = LH(38222),
-       SH = LH(38192),
-       hH = LH(38176),
-       tH = LH(38190),
-       zH = LH(38041);
+     var YB = GB(37946),
+       DB = GB(38049),
+       QB = GB(38019),
+       oB = GB(38005),
+       jB = GB(38011),
+       yB = GB(37849);
```

#### 2598. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19715` → after: `L19379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19379) · [Before (L19715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19715)

```diff
-       return CH.get((0, zH.g)(HH, BH))
+       return JB.get((0, yB.k)(BB, OB))
```

#### 2599. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19719` → after: `L19383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19383) · [Before (L19719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19719)

```diff
-       const GH = (0, zH.g)(BH, LH);
+       const zB = (0, yB.k)(OB, GB);
```

#### 2600. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19722-L19724` → after: `L19386-L19388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19386-L19388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19386-L19388) · [Before (L19722-L19724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19722-L19724)

```diff
-         const EH = await (0, zH.i)(BH, HH.mX.NQ),
-           YH = (0, zH.f)(null !== LH && void 0 !== LH ? LH : BH, HH.mX.NQ, (BH => {
-             (0, AH.p)(BH, tH.d), (0, SH.d)(BH, HH.mX), (0, hH.c)(BH), (0, AH.J)(BH)
+         const MB = await (0, yB.n)(OB, BB.UP.eq),
+           lB = (0, yB.g)(null !== GB && void 0 !== GB ? GB : OB, BB.UP.eq, (OB => {
+             (0, YB.w)(OB, jB.c), (0, QB.e)(OB, BB.UP), (0, oB.d)(OB), (0, YB.K)(OB)
```

#### 2601. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19726` → after: `L19390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19390) · [Before (L19726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19726)

```diff
-         (0, zH.l)(EH, YH, {
+         (0, yB.r)(MB, lB, {
```

#### 2602. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19730` → after: `L19394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19394) · [Before (L19730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19730)

```diff
-             (0, rH.f)(HH) || HH.yN().gR(HH)
+             (0, DB.e)(BB) || BB.JF().sF(BB)
```

#### 2603. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19738` → after: `L19402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19402) · [Before (L19738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19738)

```diff
-   38041: (HH, BH, LH) => {
+   37849: (BB, OB, GB) => {
```

#### 2604. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19743-L19744` → after: `L19406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19406) · [Before (L19743-L19744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19743-L19744)

```diff
-       i: () => uH,
-       l: () => xH,
+       k: () => lB,
```

#### 2605. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19746` → after: `L19408-L19410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19408-L19410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19408-L19410) · [Before (L19746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19746)

```diff
-       o: () => TH
+       r: () => RB,
+       v: () => ZB,
+       x: () => VB
```

#### 2606. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19748-L19757` → after: `L19412-L19421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19412-L19421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19412-L19421) · [Before (L19748-L19757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19748-L19757)

```diff
-     var AH = LH(38048),
-       rH = LH(38062),
-       SH = LH(38071),
-       hH = LH(38067),
-       tH = LH(38135),
-       zH = LH(38118),
-       CH = LH(37961),
-       EH = LH(38077),
-       XH = LH(38100),
-       GH = LH(38157);
+     var YB = GB(37857),
+       DB = GB(37877),
+       QB = GB(37885),
+       oB = GB(37880),
+       jB = GB(37962),
+       yB = GB(37946),
+       JB = GB(37771),
+       MB = GB(37899),
+       PB = GB(37928),
+       zB = GB(37984);
```

#### 2607. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19760` → after: `L19424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19424) · [Before (L19760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19760)

```diff
-       return BH ? `${HH}|${BH}` : HH
+       return OB ? `${BB}|${OB}` : BB
```

#### 2608. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19764-L19765` → after: `L19428-L19429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19428-L19429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19428-L19429) · [Before (L19764-L19765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19764-L19765)

```diff
-       const LH = (0, AH.k)("Player", `${HH}.glb`).replace("model/gltf-binary;", "");
-       return (0, GH.h)("", BH, {
+       const GB = (0, YB.q)("Player", `${BB}.glb`).replace("model/gltf-binary;", "");
+       return (0, zB.g)("", OB, {
```

#### 2609. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19771` → after: `L19435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19435) · [Before (L19771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19771)

```diff
-       HH.position.IHH(0), HH.rotation = CH.lu.Zero(), HH.bX.IHH(1), HH.oR();
+       BB.position.uBB(0), BB.rotation = JB.Xp.Zero(), BB.SP.uBB(1), BB.mF();
```

#### 2610. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19778` → after: `L19442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19442) · [Before (L19778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19778)

```diff
-         HH.position.IHH(0), HH.rotationQuaternion ? HH.rotationQuaternion.set(0, 0, 0, 1) : HH.rotation.IHH(0), HH.bX.IHH(1), HH.oR();
+         BB.position.uBB(0), BB.rotationQuaternion ? BB.rotationQuaternion.set(0, 0, 0, 1) : BB.rotation.uBB(0), BB.SP.uBB(1), BB.mF();
```

#### 2611. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19786-L19788` → after: `L19450-L19452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19450-L19452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19450-L19452) · [Before (L19786-L19788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19786-L19788)

```diff
-       return (0, XH.b)({
-         name: `${HH}Attachment`,
-         NQ: BH,
+       return (0, PB.c)({
+         name: `${BB}Attachment`,
+         eq: OB,
```

#### 2612. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19791` → after: `L19455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19455) · [Before (L19791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19791)

```diff
-           transparencyMode: hH.c.MATERIAL_ALPHATEST,
+           transparencyMode: oB.d.MATERIAL_ALPHATEST,
```

#### 2613. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19794` → after: `L19458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19458) · [Before (L19794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19794)

```diff
-             url: (0, AH.k)("Player", `${HH}.png`),
+             url: (0, YB.q)("Player", `${BB}.png`),
```

#### 2614. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19797` → after: `L19461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19461) · [Before (L19797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19797)

```diff
-             samplingMode: tH.f.nearestNearestMipLinear,
+             samplingMode: jB.g.nearestNearestMipLinear,
```

#### 2615. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19806` → after: `L19470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19470) · [Before (L19806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19806)

```diff
-           (0, zH.p)(HH, EH.e), null === LH || void 0 === LH || LH(HH)
+           (0, yB.w)(BB, MB.d), null === GB || void 0 === GB || GB(BB)
```

#### 2616. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19818` → after: `L19482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19482) · [Before (L19818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19818)

```diff
-         if (tH.getVerticesData("uv")) tH.material = BH, (0, rH.n)(tH) || (0, rH.r)(tH, 1 / 512), vH(tH), tH.sideOrientation = null !== LH && void 0 !== LH && LH.backFaceCulling ? hH.c.ClockWiseSideOrientation : hH.c.CounterClockWiseSideOrientation, null === LH || void 0 === LH || … [truncated]
+         if (jB.getVerticesData("uv")) jB.material = OB, (0, DB.u)(jB) || (0, DB.D)(jB, 1 / 512), WB(jB), jB.sideOrientation = null !== GB && void 0 !== GB && GB.backFaceCulling ? oB.d.ClockWiseSideOrientation : oB.d.CounterClockWiseSideOrientation, null === GB || void 0 === GB || … [truncated]
```

#### 2617. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19824` → after: `L19488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19488) · [Before (L19824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19824)

```diff
-       HH.uF("aHueColour", 4), HH.kF.aHueColour = new SH.d(0, 0, 0, 0)
+       BB.BX("aHueColour", 4), BB.yX.aHueColour = new QB.e(0, 0, 0, 0)
```

#### 2618. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19834-L19835` → after: `L19498-L19499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19498-L19499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19498-L19499) · [Before (L19834-L19835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19834-L19835)

```diff
-       const LH = BH ? new SH.d(BH[0] / 255, BH[1] / 255, BH[2] / 255, 1) : new SH.d(0, 0, 0, 0);
-       for (const AH of [HH, ...HH.getChildMeshes()]) AH.kF && (AH.kF.aHueColour = LH)
+       const GB = OB ? new QB.e(OB[0] / 255, OB[1] / 255, OB[2] / 255, 1) : new QB.e(0, 0, 0, 0);
+       for (const YB of [BB, ...BB.getChildMeshes()]) YB.yX && (YB.yX.aHueColour = GB)
```

#### 2619. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19838` → after: `L19502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19502) · [Before (L19838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19838)

```diff
-   38048: (HH, BH, LH) => {
+   37857: (BB, OB, GB) => {
```

#### 2620. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19842` → after: `L19505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19505) · [Before (L19842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19842)

```diff
-       f: () => zH,
+       g: () => zB,
```

#### 2621. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19844-L19847` → after: `L19507-L19511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19507-L19511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19507-L19511) · [Before (L19844-L19847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19844-L19847)

```diff
-       k: () => tH,
-       l: () => QH,
-       o: () => CH,
-       q: () => XH
+       m: () => pB,
+       q: () => jB,
+       t: () => qB,
+       w: () => JB,
+       x: () => PB
```

#### 2622. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19849-L19852` → after: `L19513-L19516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19513-L19516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19513-L19516) · [Before (L19849-L19852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19849-L19852)

```diff
-     var AH = LH(18),
-       rH = LH(38057),
-       SH = LH(37633),
-       hH = LH(3038);
+     var YB = GB(25),
+       DB = GB(37871),
+       QB = GB(37452),
+       oB = GB(3088);
```

#### 2623. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19855` → after: `L19519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19519) · [Before (L19855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19855)

```diff
-       return LH(38055)(`./${HH}/${BH}`)
+       return GB(37863)(`./${BB}/${OB}`)
```

#### 2624. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19864` → after: `L19528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19528) · [Before (L19864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19864)

```diff
-       const SH = AH.k.subscribe(`otherEntitySettingsClientifiedEId|${BH}|multilineTextBox`, (LH => {
+       const QB = YB.o.subscribe(`otherEntitySettingsClientifiedEId|${OB}|multilineTextBox`, (GB => {
```

#### 2625. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19867` → after: `L19531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19531) · [Before (L19867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19867)

```diff
-       return EH(HH, BH, null === (LH = HH.mF[HH.lF]) || void 0 === LH || null === (rH = LH[BH]) || void 0 === rH ? void 0 : rH.multilineTextBox), SH
+       return MB(BB, OB, null === (GB = BB.FX[BB.EX]) || void 0 === GB || null === (DB = GB[OB]) || void 0 === DB ? void 0 : DB.multilineTextBox), QB
```

#### 2626. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19871-L19872` → after: `L19535-L19536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19535-L19536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19535-L19536) · [Before (L19871-L19872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19871-L19872)

```diff
-       const AH = HH.pT.aBH(BH, "entityMultilineTextBox");
-       null === LH || void 0 === LH ? AH && HH.pT.fn(BH, "entityMultilineTextBox") : AH || HH.pT.yR(BH, "entityMultilineTextBox")
+       const YB = BB.DW.YGB(OB, "entityMultilineTextBox");
+       null === GB || void 0 === GB ? YB && BB.DW.dL(OB, "entityMultilineTextBox") : YB || BB.DW.RL(OB, "entityMultilineTextBox")
```

#### 2627. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19877` → after: `L19541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19541) · [Before (L19877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19877)

```diff
-         SH = HH.pT.getState(BH, "meshRotation");
+         QB = BB.DW.getState(OB, "meshRotation");
```

#### 2628. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19882-L19883` → after: `L19546-L19547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19546-L19547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19546-L19547) · [Before (L19882-L19883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19882-L19883)

```diff
-       const BH = (0, hH.c)();
-       if (BH.mF[BH.lF][HH]) return;
+       const OB = (0, oB.g)();
+       if (OB.FX[OB.EX][BB]) return;
```

#### 2629. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19885` → after: `L19549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19549) · [Before (L19885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19885)

```diff
-       BH.mF[BH.lF][HH] = {}, BH.mF[BH.lF][LH] = {}, BH.mF[BH.JBH][HH] = {}, BH.mF[BH.JBH][LH] = {}
+       OB.FX[OB.EX][BB] = {}, OB.FX[OB.EX][GB] = {}, OB.FX[OB.QGB][BB] = {}, OB.FX[OB.QGB][GB] = {}
```

#### 2630. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19889` → after: `L19553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19553) · [Before (L19889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19889)

```diff
-       const AH = (0, hH.c)(),
+       const YB = (0, oB.g)(),
```

#### 2631. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19891` → after: `L19555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19555) · [Before (L19891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19891)

```diff
-       AH.mF[AH.lF][HH][BH] = LH, AH.mF[AH.lF][rH][BH] = LH, AH.mF[AH.JBH][HH][BH] = LH, AH.mF[AH.JBH][rH][BH] = LH, uH(HH, BH, LH)
+       YB.FX[YB.EX][BB][OB] = GB, YB.FX[YB.EX][DB][OB] = GB, YB.FX[YB.QGB][BB][OB] = GB, YB.FX[YB.QGB][DB][OB] = GB, pB(BB, OB, GB)
```

#### 2632. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19895` → after: `L19559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19559) · [Before (L19895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19895)

```diff
-       const hH = void 0 === LH ? rH.c[BH] : LH,
+       const oB = void 0 === GB ? DB.e[OB] : GB,
```

#### 2633. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19897` → after: `L19561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19561) · [Before (L19897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19897)

```diff
-       AH.k.AX(`otherEntitySettings|${BH}`, {
+       YB.o.tM(`otherEntitySettings|${OB}`, {
```

#### 2634. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19900` → after: `L19564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19564) · [Before (L19900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19900)

```diff
-       }), AH.k.AX(`otherEntitySettings|${HH}|${BH}`, hH), AH.k.AX(`otherEntitySettingsClientifiedEId|${tH}|${BH}`, hH)
+       }), YB.o.tM(`otherEntitySettings|${BB}|${OB}`, oB), YB.o.tM(`otherEntitySettingsClientifiedEId|${jB}|${OB}`, oB)
```

#### 2635. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19904-L19905` → after: `L19568-L19569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19568-L19569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19568-L19569) · [Before (L19904-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19904-L19905)

```diff
-       const AH = HH.pT.VLH(BH);
-       AH && (null !== AH.kR ? HH.mX.bR.vI(AH.kR, LH) : HH.mX.CCH(AH.mesh, LH))
+       const YB = BB.DW.iGB(OB);
+       YB && (null !== YB.uF ? BB.UP.kF.Zk(YB.uF, GB) : BB.UP.NJB(YB.mesh, GB))
```

#### 2636. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19908` → after: `L19572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19572) · [Before (L19908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19908)

```diff
-   38959: (HH, BH, LH) => {
+   38757: (BB, OB, GB) => {
```

#### 2637. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19911` → after: `L19575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19575) · [Before (L19911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19911)

```diff
-       const rH = null === (LH = HH.pT.pLH(BH)) || void 0 === LH ? void 0 : LH.pU;
+       const DB = null === (GB = BB.DW.JYB(OB)) || void 0 === GB ? void 0 : GB.cW;
```

#### 2638. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19918` → after: `L19582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19582) · [Before (L19918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19918)

```diff
-   38806: (HH, BH, LH) => {
+   38606: (BB, OB, GB) => {
```

#### 2639. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19920-L19922` → after: `L19584-L19586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19584-L19586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19584-L19586) · [Before (L19920-L19922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19920-L19922)

```diff
-       d: () => zH,
-       h: () => EH,
-       i: () => CH
+       b: () => yB,
+       e: () => MB,
+       h: () => JB
```

#### 2640. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19924-L19928` → after: `L19588-L19592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19588-L19592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19588-L19592) · [Before (L19924-L19928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19924-L19928)

```diff
-     var AH = LH(38118),
-       rH = LH(38331),
-       SH = LH(38809),
-       hH = LH(38192),
-       tH = LH(3038);
+     var YB = GB(37946),
+       DB = GB(38167),
+       QB = GB(38615),
+       oB = GB(38019),
+       jB = GB(3088);
```

#### 2641. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19931-L19933` → after: `L19595-L19597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19595-L19597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19595-L19597) · [Before (L19931-L19933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19931-L19933)

```diff
-       (0, SH.c)(HH, (HH => {
-         const BH = (0, AH.V)(HH);
-         BH && !(0, AH.s)(BH, hH.f.name) && (0, hH.d)(BH, (0, tH.c)().mX)
+       (0, QB.d)(BB, (BB => {
+         const OB = (0, YB.U)(BB);
+         OB && !(0, YB.A)(OB, oB.f.name) && (0, oB.e)(OB, (0, jB.g)().UP)
```

#### 2642. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19942` → after: `L19606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19606) · [Before (L19942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19942)

```diff
-       HH.uF("aLightLevels", 4), HH.kF.aLightLevels = (0, rH.m)()
+       BB.BX("aLightLevels", 4), BB.yX.aLightLevels = (0, DB.m)()
```

#### 2643. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19945` → after: `L19609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19609) · [Before (L19945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19945)

```diff
-   37943: (HH, BH, LH) => {
+   37761: (BB, OB, GB) => {
```

#### 2644. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19951-L19963` → after: `L19615-L19627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19615-L19627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19615-L19627) · [Before (L19951-L19963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19951-L19963)

```diff
-     var AH = LH(38331),
-       rH = LH(38229),
-       SH = LH(38067),
-       hH = LH(3038),
-       tH = LH(4061),
-       zH = LH(37633),
-       CH = LH(37945),
-       EH = LH(38450),
-       XH = LH(38464),
-       GH = LH(37961),
-       YH = LH(4617),
-       uH = LH(38470),
-       QH = LH(38026);
+     var YB = GB(38167),
+       DB = GB(38055),
+       QB = GB(37880),
+       oB = GB(3088),
+       jB = GB(4111),
+       yB = GB(37452),
+       JB = GB(37763),
+       MB = GB(38275),
+       PB = GB(38289),
+       zB = GB(37771),
+       lB = GB(4642),
+       pB = GB(38294),
+       qB = GB(37839);
```

#### 2645. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19975-L19978` → after: `L19639-L19642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19639-L19642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19639-L19642) · [Before (L19975-L19978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19975-L19978)

```diff
-           bH: LH,
-           kH: AH,
-           mH: rH
-         } = BH, SH = (0, zH.b)(LH), hH = (0, QH.b)(HH);
+           tB: GB,
+           BO: YB,
+           OO: DB
+         } = OB, QB = (0, yB.b)(GB), oB = (0, qB.c)(BB);
```

#### 2646. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19980-L19981` → after: `L19644-L19645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19644-L19645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19644-L19645) · [Before (L19980-L19981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19980-L19981)

```diff
-         const tH = HH.pT.VLH(SH);
-         if (tH && null === tH.kR) return;
+         const jB = BB.DW.iGB(QB);
+         if (jB && null === jB.uF) return;
```

#### 2647. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19987` → after: `L19651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19651) · [Before (L19987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19987)

```diff
-       for (const LH of (0, QH.b)(HH).getAttachments(BH)) PH(HH, LH)
+       for (const GB of (0, qB.c)(BB).getAttachments(OB)) AB(BB, GB)
```

#### 2648. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19991` → after: `L19655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19655) · [Before (L19991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19991)

```diff
-       (0, QH.b)((0, hH.c)()).clearAttachments((0, zH.b)(HH))
+       (0, qB.c)((0, oB.g)()).clearAttachments((0, yB.b)(BB))
```

#### 2649. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19997-L20000` → after: `L19661-L19664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19661-L19664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19661-L19664) · [Before (L19997-L20000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L19997-L20000)

```diff
-           bH: LH,
-           kH: AH,
-           mH: rH
-         } = BH, SH = (0, zH.b)(LH), hH = HH.pT.VLH(SH);
+           tB: GB,
+           BO: YB,
+           OO: DB
+         } = OB, QB = (0, yB.b)(GB), oB = BB.DW.iGB(QB);
```

#### 2650. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20002-L20004` → after: `L19666-L19668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19666-L19668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19666-L19668) · [Before (L20002-L20004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20002-L20004)

```diff
-         const tH = hH.kR;
-         if (null === tH) return console.error(`attachMeshToEntity: parent ${LH} has no thin instance - not supported`), null;
-         const CH = HH.mX.bR,
+         const jB = oB.uF;
+         if (null === jB) return console.error(`attachMeshToEntity: parent ${GB} has no thin instance - not supported`), null;
+         const JB = BB.UP.kF,
```

#### 2651. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20006` → after: `L19670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19670) · [Before (L20006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20006)

```diff
-         return null === EH ? (console.error(`Couldn't find node ${AH} on ${LH} to attach mesh ${rH}`), null) : {
+         return null === MB ? (console.error(`Couldn't find node ${YB} on ${GB} to attach mesh ${DB}`), null) : {
```

#### 2652. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20022` → after: `L19686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19686) · [Before (L20022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20022)

```diff
-       }(HH, LH), BH.mH && function(HH, BH, LH) {
+       }(BB, GB), OB.OO && function(BB, OB, GB) {
```

#### 2653. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20024-L20028` → after: `L19688-L19692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19688-L19692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19688-L19692) · [Before (L20024-L20028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20024-L20028)

```diff
-           bH: AH,
-           mH: tH,
-           kH: zH,
-           oH: CH,
-           IH: EH
+           tB: YB,
+           OO: jB,
+           BO: yB,
+           GO: JB,
+           YO: MB
```

#### 2654. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20034` → after: `L19698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19698) · [Before (L20034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20034)

```diff
-         } = BH, PH = (0, YH.u)(tH);
+         } = OB, AB = (0, lB.t)(jB);
```

#### 2655. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20039` → after: `L19703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19703) · [Before (L20039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20039)

```diff
-         } = PH, lH = (0, QH.b)(HH).bumpAttachmentGeneration(vH, zH), KH = {
+         } = AB, IB = (0, qB.c)(BB).bumpAttachmentGeneration(WB, yB), FB = {
```

#### 2656. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20042-L20043` → after: `L19706-L19707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19706-L19707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19706-L19707) · [Before (L20042-L20043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20042-L20043)

```diff
-           oH: CH,
-           IH: EH,
+           GO: JB,
+           YO: MB,
```

#### 2657. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20045` → after: `L19709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19709) · [Before (L20045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20045)

```diff
-           kH: zH,
+           BO: yB,
```

#### 2658. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20054` → after: `L19718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19718) · [Before (L20054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20054)

```diff
-           } = LH, zH = hH.f.itemsClient[rH];
+           } = GB, yB = oB.h.itemsClient[DB];
```

#### 2659. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20057` → after: `L19721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19721) · [Before (L20057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20057)

```diff
-             [EH, XH, GH] = Array.isArray(SH) ? SH : [SH, SH, SH],
+             [MB, PB, zB] = Array.isArray(QB) ? QB : [QB, QB, QB],
```

#### 2660. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20064` → after: `L19728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19728) · [Before (L20064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20064)

```diff
-             WH = uH.f.includes(tH) ? tH : void 0;
+             ZB = pB.h.includes(jB) ? jB : void 0;
```

#### 2661. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20066` → after: `L19730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19730) · [Before (L20066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20066)

```diff
-             LX: !1,
+             sJ: !1,
```

#### 2662. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20073` → after: `L19737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19737) · [Before (L20073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20073)

```diff
-         const eH = (0, hH.b)().client.meshCreator.getEntityMesh(IH, fH, (BH => {
+         const LB = (0, oB.d)().client.meshCreator.getEntityMesh(uB, mB, (OB => {
```

#### 2663. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20075` → after: `L19739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19739) · [Before (L20075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20075)

```diff
-             if (rH = LH, !("xR" in rH) || !0 !== rH.xR) return void console.error(`Box attachment ${LH.name} is not an instance`);
+             if (DB = GB, !("SF" in DB) || !0 !== DB.SF) return void console.error(`Box attachment ${GB.name} is not an instance`);
```

#### 2664. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20078` → after: `L19742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19742) · [Before (L20078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20078)

```diff
-               tH = VH(LH.bX, hH),
+               jB = nB(GB.SP, oB),
```

#### 2665. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20080-L20082` → after: `L19744-L19746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19744-L19746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19744-L19746) · [Before (L20080-L20082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20080-L20082)

```diff
-                 const rH = LH.kF.aShaderPackItem,
-                   hH = (0, XH.k)(AH),
-                   tH = `nodeAttachment|${LH.name}|${LH.uniqueId}|${hH}`;
+                 const DB = GB.yX.aShaderPackItem,
+                   oB = (0, PB.g)(YB),
+                   jB = `nodeAttachment|${GB.name}|${GB.uniqueId}|${oB}`;
```

#### 2666. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20084-L20086` → after: `L19748-L19750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19748-L19750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19748-L19750) · [Before (L20084-L20086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20084-L20086)

```diff
-                   const zH = LH.clone(`thinNodeAttachment_${LH.name}|${hH}`, null);
-                   zH.makeGeometryUnique(), AH && (zH.sideOrientation = SH.c.ClockWiseSideOrientation), BH.newObjectType(tH, zH, {
-                     aX: 4,
+                   const yB = GB.clone(`thinNodeAttachment_${GB.name}|${oB}`, null);
+                   yB.makeGeometryUnique(), YB && (yB.sideOrientation = QB.d.ClockWiseSideOrientation), OB.newObjectType(jB, yB, {
+                     CP: 4,
```

#### 2667. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20088-L20089` → after: `L19752-L19753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19752-L19753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19752-L19753) · [Before (L20088-L20089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20088-L20089)

```diff
-                     strides: rH ? oH : mH
-                   }), BH.setPickableForType(tH, !1), HH.mX.jR(zH)
+                     strides: DB ? KB : dB
+                   }), OB.setPickableForType(jB, !1), BB.UP.YL(yB)
```

#### 2668. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20094` → after: `L19758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19758) · [Before (L20094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20094)

```diff
-               }(HH, BH, LH.XSH, OH(tH, hH));
+               }(BB, OB, GB.AQB, UB(jB, oB));
```

#### 2669. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20101` → after: `L19765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19765) · [Before (L20101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20101)

```diff
-           kR: gH
+           uF: rB
```

#### 2670. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20104-L20106` → after: `L19768-L19770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19768-L19770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19768-L19770) · [Before (L20104-L20106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20104-L20106)

```diff
-         qH && !qH.mV() && (! function(HH, BH, LH, AH) {
-           (0, rH.p)(BH, LH[0], LH[1], LH[2]), BH.rotation.set(AH[0], AH[1], AH[2])
-         }(HH.mX, qH, CH, EH), GH.attachTransformNode(qH, MH, xH))
+         gB && !gB.lV() && (! function(BB, OB, GB, YB) {
+           (0, DB.s)(OB, GB[0], GB[1], GB[2]), OB.rotation.set(YB[0], YB[1], YB[2])
+         }(BB.UP, gB, JB, MB), zB.attachTransformNode(gB, NB, RB))
```

#### 2671. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20111` → after: `L19775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19775) · [Before (L20111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20111)

```diff
-       return !BH.has(LH.parentThinObjectId) || (0, QH.b)(HH).getAttachmentGeneration(LH.clientifiedAttachToEId, LH.kH) !== LH.generation
+       return !OB.has(GB.parentThinObjectId) || (0, qB.c)(BB).getAttachmentGeneration(GB.clientifiedAttachToEId, GB.BO) !== GB.generation
```

#### 2672. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20119` → after: `L19783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19783) · [Before (L20119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20119)

```diff
-       return new GH.lu(BH ? -HH.x : HH.x, HH.y, HH.z)
+       return new zB.Xp(OB ? -BB.x : BB.x, BB.y, BB.z)
```

#### 2673. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20123` → after: `L19787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19787) · [Before (L20123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20123)

```diff
-       return (0, XH.h)(HH.x * HH.y * HH.z < 0, BH)
+       return (0, PB.d)(BB.x * BB.y * BB.z < 0, OB)
```

#### 2674. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20131-L20132` → after: `L19795-L19796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19795-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19795-L19796) · [Before (L20131-L20132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20131-L20132)

```diff
-         oH: XH,
-         IH: GH,
+         GO: PB,
+         YO: zB,
```

#### 2675. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20135` → after: `L19799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19799) · [Before (L20135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20135)

```diff
-       kH(BH, LH, XH, GH), BH.setScale(LH, rH.x, rH.y, rH.z), BH.attachThinObject(LH, zH, CH), BH.set(LH, "aOpacity", (0, EH.holderAttachmentOpacity)(HH, YH)), BH.set(LH, "aLightLevels", null !== (hH = null === (tH = HH.pT.ZLH(YH)) || void 0 === tH ? void 0 : tH._lightLevels) && v … [truncated]
+       kB(OB, GB, PB, zB), OB.setScale(GB, DB.x, DB.y, DB.z), OB.attachThinObject(GB, yB, JB), OB.set(GB, "aOpacity", (0, MB.holderAttachmentOpacity)(BB, lB)), OB.set(GB, "aLightLevels", null !== (oB = null === (jB = BB.DW.YYB(lB)) || void 0 === jB ? void 0 : jB._lightLevels) && v … [truncated]
```

#### 2676. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20141` → after: `L19805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19805) · [Before (L20141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20141)

```diff
-       const HH = (0, hH.c)();
+       const BB = (0, oB.g)();
```

#### 2677. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20143-L20149` → after: `L19807-L19813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19807-L19813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19807-L19813) · [Before (L20143-L20149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20143-L20149)

```diff
-           kH: LH
-         }] of(0, QH.b)(HH).iterateAttachments()) PH(HH, {
-         bH: BH,
-         kH: LH,
-         mH: null,
-         oH: [0, 0, 0],
-         IH: [0, 0, 0]
+           BO: GB
+         }] of(0, qB.c)(BB).iterateAttachments()) AB(BB, {
+         tB: OB,
+         BO: GB,
+         OO: null,
+         GO: [0, 0, 0],
+         YO: [0, 0, 0]
```

#### 2678. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20162` → after: `L19826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19826) · [Before (L20162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20162)

```diff
-   38817: (HH, BH, LH) => {
+   38623: (BB, OB, GB) => {
```

#### 2679. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20164-L20165` → after: `L19828-L19829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19828-L19829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19828-L19829) · [Before (L20164-L20165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20164-L20165)

```diff
-       c: () => hH,
-       d: () => tH
+       e: () => oB,
+       h: () => jB
```

#### 2680. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20167-L20169` → after: `L19831-L19833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19831-L19833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19831-L19833) · [Before (L20167-L20169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20167-L20169)

```diff
-     var AH = LH(38809),
-       rH = LH(38176),
-       SH = LH(38118);
+     var YB = GB(38615),
+       DB = GB(38005),
+       QB = GB(37946);
```

#### 2681. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20173-L20175` → after: `L19837-L19839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19837-L19839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19837-L19839) · [Before (L20173-L20175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20173-L20175)

```diff
-       HH.uF("aOpacity", 1), HH.kF.aOpacity = 1, HH.material && (BH = HH.material, (0, AH.c)(BH, (HH => {
-         const BH = (0, SH.V)(HH);
-         BH && (0, rH.c)(BH, !0)
+       BB.BX("aOpacity", 1), BB.yX.aOpacity = 1, BB.material && (OB = BB.material, (0, YB.d)(OB, (BB => {
+         const OB = (0, QB.U)(BB);
+         OB && (0, DB.d)(OB, !0)
```

#### 2682. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20188` → after: `L19852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19852) · [Before (L20188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20188)

```diff
-         kF: LH
+         yX: GB
```

#### 2683. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20193` → after: `L19857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19857) · [Before (L20193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20193)

```diff
-   39325: (HH, BH, LH) => {
+   39108: (BB, OB, GB) => {
```

#### 2684. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20195` → after: `L19859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19859) · [Before (L20195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20195)

```diff
-       d: () => EH,
+       b: () => MB,
```

#### 2685. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20197` → after: `L19861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19861) · [Before (L20197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20197)

```diff
-       f: () => rH,
+       i: () => DB,
```

#### 2686. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20200` → after: `L19864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19864) · [Before (L20200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20200)

```diff
-     var AH = LH(3038);
+     var YB = GB(3088);
```

#### 2687. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20204` → after: `L19868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19868) · [Before (L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20204)

```diff
-       const BH = (0, AH.b)().client;
+       const OB = (0, YB.d)().client;
```

#### 2688. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20218` → after: `L19882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19882) · [Before (L20218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20218)

```diff
-       (hH = !1, null !== HH && void 0 !== HH && HH.isChargeable()) ? HH.clearChargingPose(): null === (LH = BH.pT.getState(BH.lF, "playerCameraAdjustment")) || void 0 === LH || LH.fovMultiplier.removeMultiplier("chargeableZoom")
+       (oB = !1, null !== BB && void 0 !== BB && BB.isChargeable()) ? BB.clearChargingPose(): null === (GB = OB.DW.getState(OB.EX, "playerCameraAdjustment")) || void 0 === GB || GB.fovMultiplier.removeMultiplier("chargeableZoom")
```

#### 2689. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20231` → after: `L19895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19895) · [Before (L20231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20231)

```diff
-       } = LH, XH = HH.pT.rAH(BH);
+       } = GB, PB = BB.DW.pYB(OB);
```

#### 2690. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20233-L20234` → after: `L19897-L19898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19897-L19898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19897-L19898) · [Before (L20233-L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20233-L20234)

```diff
-       const GH = HH.pT.pLH(BH),
-         YH = HH.pT.yLH(BH);
+       const zB = BB.DW.JYB(OB),
+         lB = BB.DW.MYB(OB);
```

#### 2691. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20238` → after: `L19902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19902) · [Before (L20238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20238)

```diff
-         GH.replayUseFirstPersonMesh = AH, HH !== AH && (null === YH || void 0 === YH || YH.OEH())
+         zB.replayUseFirstPersonMesh = YB, BB !== YB && (null === lB || void 0 === lB || lB.IMB())
```

#### 2692. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20240` → after: `L19904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19904) · [Before (L20240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20240)

```diff
-       const QH = HH.pT.ZLH(BH);
+       const qB = BB.DW.YYB(OB);
```

#### 2693. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20250` → after: `L19914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19914) · [Before (L20250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20250)

```diff
-       const LH = HH.pT.rAH(BH);
+       const GB = BB.DW.pYB(OB);
```

#### 2694. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20252-L20255` → after: `L19916-L19919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19916-L19919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19916-L19919) · [Before (L20252-L20255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20252-L20255)

```diff
-       const AH = HH.pT.pLH(BH),
-         rH = HH.pT.yLH(BH);
-       void 0 !== (null === AH || void 0 === AH ? void 0 : AH.replayUseFirstPersonMesh) && (AH.replayUseFirstPersonMesh = void 0, null === rH || void 0 === rH || rH.OEH());
-       const SH = HH.pT.ZLH(BH);
+       const YB = BB.DW.JYB(OB),
+         DB = BB.DW.MYB(OB);
+       void 0 !== (null === YB || void 0 === YB ? void 0 : YB.replayUseFirstPersonMesh) && (YB.replayUseFirstPersonMesh = void 0, null === DB || void 0 === DB || DB.IMB());
+       const QB = BB.DW.YYB(OB);
```

#### 2695. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20259` → after: `L19923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19923) · [Before (L20259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20259)

```diff
-   38163: (HH, BH, LH) => {
+   37993: (BB, OB, GB) => {
```

#### 2696. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20262` → after: `L19926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19926) · [Before (L20262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20262)

```diff
-       d: () => AH
+       f: () => YB
```

#### 2697. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20279` → after: `L19943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19943) · [Before (L20279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20279)

```diff
-   38157: (HH, BH, LH) => {
+   37984: (BB, OB, GB) => {
```

#### 2698. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20283-L20284` → after: `L19948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19948) · [Before (L20283-L20284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20283-L20284)

```diff
-       j: () => EH,
-       l: () => hH
+       k: () => oB
```

#### 2699. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20286` → after: `L19950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19950) · [Before (L20286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20286)

```diff
-     var AH = LH(38163);
+     var YB = GB(37993);
```

#### 2700. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20290` → after: `L19954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19954) · [Before (L20290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20290)

```diff
-       return rH ??= Promise.all([LH.e(227), LH.e(230)]).then((() => LH(44985))).then((HH => HH), (HH => {
+       return DB ??= Promise.all([GB.e(227), GB.e(230)]).then((() => GB(44646))).then((BB => BB), (BB => {
```

#### 2701. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20305` → after: `L19969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19969) · [Before (L20305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20305)

```diff
-         AH.d.failed++;
+         YB.f.failed++;
```

#### 2702. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20315` → after: `L19979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19979) · [Before (L20315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20315)

```diff
-         return HH.loadGlbTree(LH, BH, null !== (rH = AH.rootUrl) && void 0 !== rH ? rH : "", !1, AH.materials)
+         return BB.loadGlbTree(GB, OB, null !== (DB = YB.rootUrl) && void 0 !== DB ? DB : "", !1, YB.materials)
```

#### 2703. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20322` → after: `L19986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19986) · [Before (L20322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20322)

```diff
-         return HH.loadGlbTree(LH, BH, null !== (rH = AH.rootUrl) && void 0 !== rH ? rH : "", !0, AH.materials)
+         return BB.loadGlbTree(GB, OB, null !== (DB = YB.rootUrl) && void 0 !== DB ? DB : "", !0, YB.materials)
```

#### 2704. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20331` → after: `L19995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19995) · [Before (L20331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20331)

```diff
-         return HH.loadGlbAsset(LH, BH, null !== (rH = AH.rootUrl) && void 0 !== rH ? rH : "", SH)
+         return BB.loadGlbAsset(GB, OB, null !== (DB = YB.rootUrl) && void 0 !== DB ? DB : "", QB)
```

#### 2705. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20335` → after: `L19999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L19999) · [Before (L20335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20335)

```diff
-   38770: (HH, BH, LH) => {
+   38573: (BB, OB, GB) => {
```

#### 2706. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20337-L20338` → after: `L20001-L20002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20001-L20002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20001-L20002) · [Before (L20337-L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20337-L20338)

```diff
-       c: () => CH,
-       e: () => EH
+       e: () => JB,
+       g: () => MB
```

#### 2707. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20340-L20341` → after: `L20004-L20005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20004-L20005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20004-L20005) · [Before (L20340-L20341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20340-L20341)

```diff
-     var AH = LH(38118),
-       rH = LH(38071);
+     var YB = GB(37946),
+       DB = GB(37885);
```

#### 2708. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20352` → after: `L20016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20016) · [Before (L20352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20352)

```diff
-     var tH = LH(38141);
+     var jB = GB(37966);
```

#### 2709. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20369` → after: `L20033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20033) · [Before (L20369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20369)

```diff
-         emissiveTexture: HH.emissionColorTexture ? (0, tH.x)(HH.emissionColorTexture) : null,
+         emissiveTexture: BB.emissionColorTexture ? (0, jB.u)(BB.emissionColorTexture) : null,
```

#### 2710. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20373` → after: `L20037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20037) · [Before (L20373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20373)

```diff
-         ...null !== BH && BH !== AH.o.opaque ? {
+         ...null !== OB && OB !== YB.s.opaque ? {
```

#### 2711. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20388-L20389` → after: `L20052-L20053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20052-L20053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20052-L20053) · [Before (L20388-L20389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20388-L20389)

```diff
-           return AH && (HH.baseColor = rH.Color3.FromArray(AH), HH.geometryOpacity = AH[3]), BH.unlit ? HH.isUnlit = !0 : HH.emissionColor = BH.emissiveFactor ? rH.Color3.FromArray(BH.emissiveFactor) : new rH.Color3(0, 0, 0), BH.doubleSided && (HH.backFaceCulling = !1, HH.twoSide … [truncated]
-         }(CH, BH) : AH.o.opaque;
+           return YB && (BB.baseColor = DB.Color3.FromArray(YB), BB.geometryOpacity = YB[3]), OB.unlit ? BB.isUnlit = !0 : BB.emissionColor = OB.emissiveFactor ? DB.Color3.FromArray(OB.emissiveFactor) : new DB.Color3(0, 0, 0), OB.doubleSided && (BB.backFaceCulling = !1, BB.twoSide … [truncated]
+         }(JB, OB) : YB.s.opaque;
```

#### 2712. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20392` → after: `L20056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20056) · [Before (L20392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20392)

```diff
-         ...zH(CH, EH, LH, tH, null !== BH && void 0 !== BH && BH.pbr && BH.baseColorTexture ? HH.textureDesc(BH.baseColorTexture, EH !== AH.o.opaque) : null)
+         ...yB(JB, MB, GB, jB, null !== OB && void 0 !== OB && OB.pbr && OB.baseColorTexture ? BB.textureDesc(OB.baseColorTexture, MB !== YB.s.opaque) : null)
```

#### 2713. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20410` → after: `L20074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20074) · [Before (L20410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20410)

```diff
-   39068: (HH, BH, LH) => {
+   38851: (BB, OB, GB) => {
```

#### 2714. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20412` → after: `L20076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20076) · [Before (L20412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20412)

```diff
-       b: () => SH
+       d: () => QB
```

#### 2715. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20414` → after: `L20078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20078) · [Before (L20414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20414)

```diff
-     var AH = LH(619);
+     var YB = GB(641);
```

#### 2716. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20417` → after: `L20081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20081) · [Before (L20417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20417)

```diff
-       const AH = BH => HH.bG.bloxd.getMetaInfo(BH).rootName,
+       const YB = OB => BB.kz.bloxd.getMetaInfo(OB).rootName,
```

#### 2717. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20419` → after: `L20083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20083) · [Before (L20419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20419)

```diff
-       return rH && AH(rH.name) === AH(LH) ? rH : null
+       return DB && YB(DB.name) === YB(GB) ? DB : null
```

#### 2718. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20433` → after: `L20097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20097) · [Before (L20433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20433)

```diff
-         return !(!hH || (null !== (SH = hH.amount) && void 0 !== SH ? SH : 1) < BH) && AH.removeItem(HH, BH)
+         return !(!oB || (null !== (QB = oB.amount) && void 0 !== QB ? QB : 1) < OB) && YB.removeItem(BB, OB)
```

#### 2719. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20450` → after: `L20114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20114) · [Before (L20450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20450)

```diff
-       return SH => HH.craftItem(BH, SH.playerInventory, LH, AH, rH).ZC === rH
+       return QB => BB.craftItem(OB, QB.playerInventory, GB, YB, DB).vM === DB
```

#### 2720. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20455` → after: `L20119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20119) · [Before (L20455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20455)

```diff
-         return null !== SH && LH <= (null !== (rH = SH.amount) && void 0 !== rH ? rH : 0) && HH.salvageItem(AH.playerInventory, BH, SH.name, LH)
+         return null !== QB && GB <= (null !== (DB = QB.amount) && void 0 !== DB ? DB : 0) && BB.salvageItem(YB.playerInventory, OB, QB.name, GB)
```

#### 2721. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20470` → after: `L20134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20134) · [Before (L20470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20470)

```diff
-         return !!hH && (SH.playerInventory.setItemSlot(HH, LH, 1, null !== AH && void 0 !== AH ? AH : hH.attributes), !0)
+         return !!oB && (QB.playerInventory.setItemSlot(BB, GB, 1, null !== YB && void 0 !== YB ? YB : oB.attributes), !0)
```

#### 2722. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20476` → after: `L20140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20140) · [Before (L20476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20476)

```diff
-         return (null === tH || void 0 === tH ? void 0 : tH.name) === BH && (1 === tH.amount || null === tH.amount ? (hH.setItemSlot(HH, LH, 1, {}), !0) : !(null === rH || rH < 0 || rH >= AH.p || null !== hH.getItemAtIdx(rH)) && (hH.setItemSlot(HH, BH, tH.amount - 1, {}), hH.setIt … [truncated]
+         return (null === jB || void 0 === jB ? void 0 : jB.name) === OB && (1 === jB.amount || null === jB.amount ? (oB.setItemSlot(BB, GB, 1, {}), !0) : !(null === DB || DB < 0 || DB >= YB.t || null !== oB.getItemAtIdx(DB)) && (oB.setItemSlot(BB, OB, jB.amount - 1, {}), oB.setIt … [truncated]
```

#### 2723. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20479` → after: `L20143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20143) · [Before (L20479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20479)

```diff
-       return AH => !!rH(AH, BH, LH) && (AH.bG.bloxd.removeEatenItem(HH, AH.playerInventory, BH), !0)
+       return YB => !!DB(YB, OB, GB) && (YB.kz.bloxd.removeEatenItem(BB, YB.playerInventory, OB), !0)
```

#### 2724. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20488` → after: `L20152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20152) · [Before (L20488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20488)

```diff
-   38656: (HH, BH, LH) => {
+   38476: (BB, OB, GB) => {
```

#### 2725. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20490` → after: `L20154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20154) · [Before (L20490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20490)

```diff
-       d: () => AH
+       e: () => YB
```

#### 2726. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20497` → after: `L20161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20161) · [Before (L20497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20497)

```diff
-   38744: (HH, BH, LH) => {
+   38556: (BB, OB, GB) => {
```

#### 2727. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20499-L20501` → after: `L20163-L20165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20163-L20165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20163-L20165) · [Before (L20499-L20501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20499-L20501)

```diff
-       e: () => WH,
-       i: () => CH,
-       k: () => OH
+       b: () => ZB,
+       f: () => JB,
+       h: () => UB
```

#### 2728. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20503-L20508` → after: `L20167-L20172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20167-L20172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20167-L20172) · [Before (L20503-L20508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20503-L20508)

```diff
-     var AH = LH(186),
-       rH = LH(9940),
-       SH = LH(2036),
-       hH = LH(4061),
-       tH = LH(18),
-       zH = LH(3038);
+     var YB = GB(204),
+       DB = GB(9927),
+       QB = GB(2050),
+       oB = GB(4111),
+       jB = GB(25),
+       yB = GB(3088);
```

#### 2729. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20522-L20523` → after: `L20186-L20187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20186-L20187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20186-L20187) · [Before (L20522-L20523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20522-L20523)

```diff
-       const LH = (0, AH.d)(HH, BH);
-       return (null === LH || void 0 === LH ? void 0 : LH.name) === BH ? LH : void 0
+       const GB = (0, YB.c)(BB, OB);
+       return (null === GB || void 0 === GB ? void 0 : GB.name) === OB ? GB : void 0
```

#### 2730. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20531` → after: `L20195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20195) · [Before (L20531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20531)

```diff
-       xH(zH.f.blocksClient, HH)
+       RB(yB.h.blocksClient, BB)
```

#### 2731. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20543` → after: `L20207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20207) · [Before (L20543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20543)

```diff
-       return rH.g[HH.name].ttb
+       return DB.h[BB.name].ttb
```

#### 2732. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20547` → after: `L20211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20211) · [Before (L20547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20547)

```diff
-       if ("droppedItemScale" === HH) GH = "number" === typeof BH && isFinite(BH) ? BH : 1;
+       if ("droppedItemScale" === BB) zB = "number" === typeof OB && isFinite(OB) ? OB : 1;
```

#### 2733. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20551` → after: `L20215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20215) · [Before (L20551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20551)

```diff
-         const LH = MH(zH.f.itemsClient, HH.slice(0, -EH.length));
+         const GB = NB(yB.h.itemsClient, BB.slice(0, -MB.length));
```

#### 2734. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20554` → after: `L20218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20218) · [Before (L20554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20554)

```diff
-         const LH = MH(zH.f.blocksClient, HH.slice(0, -XH.length));
+         const GB = NB(yB.h.blocksClient, BB.slice(0, -PB.length));
```

#### 2735. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20562` → after: `L20226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20226) · [Before (L20562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20562)

```diff
-       })), tH.k.subscribe("ttbEffectMultiplier", (HH => {
+       })), jB.o.subscribe("ttbEffectMultiplier", (BB => {
```

#### 2736. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20565` → after: `L20229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20229) · [Before (L20565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20565)

```diff
-         GH = 1, YH = !1, uH = 1, QH = 1, xH(zH.f.itemsClient, (HH => {
+         zB = 1, lB = !1, pB = 1, qB = 1, RB(yB.h.itemsClient, (BB => {
```

#### 2737. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20573` → after: `L20237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20237) · [Before (L20573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20573)

```diff
-   38551: (HH, BH, LH) => {
+   38364: (BB, OB, GB) => {
```

#### 2738. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20575` → after: `L20239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20239) · [Before (L20575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20575)

```diff
-       b: () => AH
+       d: () => YB
```

#### 2739. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20675` → after: `L20339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20339) · [Before (L20675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20675)

```diff
-         const AH = Array.isArray(BH) ? BH : null !== (LH = null === BH || void 0 === BH ? void 0 : BH.transfer) && void 0 !== LH ? LH : [];
+         const YB = Array.isArray(OB) ? OB : null !== (GB = null === OB || void 0 === OB ? void 0 : OB.transfer) && void 0 !== GB ? GB : [];
```

#### 2740. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20714` → after: `L20378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20378) · [Before (L20714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20714)

```diff
-   38475: (HH, BH, LH) => {
+   38301: (BB, OB, GB) => {
```

#### 2741. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20716-L20717` → after: `L20380-L20381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20380-L20381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20380-L20381) · [Before (L20716-L20717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20716-L20717)

```diff
-       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HH.pT.GAH(BH);
-       return BH === HH.lF || (null === LH || void 0 === LH ? void 0 : LH.Xu) === HH.lF && LH.YAH
+       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.DW.nYB(OB);
+       return OB === BB.EX || (null === GB || void 0 === GB ? void 0 : GB.qp) === BB.EX && GB.UYB
```

#### 2742. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20720` → after: `L20384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20384) · [Before (L20720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20720)

```diff
-       b: () => AH
+       c: () => YB
```

#### 2743. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20723` → after: `L20387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20387) · [Before (L20723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20723)

```diff
-   38809: (HH, BH, LH) => {
+   38615: (BB, OB, GB) => {
```

#### 2744. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20725-L20726` → after: `L20389-L20390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20389-L20390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20389-L20390) · [Before (L20725-L20726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20725-L20726)

```diff
-       if ("BBH" in HH && Array.isArray(HH.BBH))
-         for (const LH of HH.BBH) LH && BH(LH);
+       if ("jOB" in BB && Array.isArray(BB.jOB))
+         for (const GB of BB.jOB) GB && OB(GB);
```

#### 2745. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20730` → after: `L20394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20394) · [Before (L20730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20730)

```diff
-       c: () => AH
+       d: () => YB
```

#### 2746. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20733` → after: `L20397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20397) · [Before (L20733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20733)

```diff
-   38062: (HH, BH, LH) => {
+   37877: (BB, OB, GB) => {
```

#### 2747. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20735` → after: `L20399-L20400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20399-L20400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20399-L20400) · [Before (L20735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20735)

```diff
-       b: () => hH,
+       D: () => PB,
+       E: () => NB,
```

#### 2748. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20738-L20739` → after: `L20403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20403) · [Before (L20738-L20739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20738-L20739)

```diff
-       h: () => WH,
-       j: () => YH,
+       g: () => pB,
```

#### 2749. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20744-L20745` → after: `L20407-L20409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20407-L20409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20407-L20409) · [Before (L20744-L20745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20744-L20745)

```diff
-       r: () => XH,
-       v: () => MH
+       u: () => zB,
+       x: () => yB,
+       z: () => JB
```

#### 2750. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20747-L20749` → after: `L20411-L20413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20411-L20413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20411-L20413) · [Before (L20747-L20749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20747-L20749)

```diff
-     var AH = LH(37961),
-       rH = LH(1962),
-       SH = LH(38067);
+     var YB = GB(37771),
+       DB = GB(1998),
+       QB = GB(37880);
```

#### 2751. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20775` → after: `L20439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20439) · [Before (L20775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20775)

```diff
-         AH = null !== LH && void 0 !== LH && LH.model ? LH : null;
+         YB = null !== GB && void 0 !== GB && GB.model ? GB : null;
```

#### 2752. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20795` → after: `L20459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20459) · [Before (L20795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20795)

```diff
-         indices: null !== (LH = null === (AH = BH.geometry.indexData) || void 0 === AH ? void 0 : AH.slice()) && void 0 !== LH ? LH : [],
+         indices: null !== (GB = null === (YB = OB.geometry.indexData) || void 0 === YB ? void 0 : YB.slice()) && void 0 !== GB ? GB : [],
```

#### 2753. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20810` → after: `L20474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20474) · [Before (L20810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20810)

```diff
-         const LH = SH.c.UVKind,
+         const GB = QB.d.UVKind,
```

#### 2754. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20812` → after: `L20476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20476) · [Before (L20812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20812)

```diff
-         tH(AH, HH.vrH(), BH), HH.setVerticesData(LH, AH)
+         jB(YB, BB.KDB(), OB), BB.setVerticesData(GB, YB)
```

#### 2755. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20818` → after: `L20482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20482) · [Before (L20818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20818)

```diff
-       return !!(null !== (BH = HH.metadata) && void 0 !== BH && null !== (LH = BH.XN) && void 0 !== LH && null !== (AH = LH.extras) && void 0 !== AH && AH.bloxdProcessed || null !== (rH = HH.parent) && void 0 !== rH && null !== (SH = rH.metadata) && void 0 !== SH && null !== (hH  … [truncated]
+       return !!(null !== (OB = BB.metadata) && void 0 !== OB && null !== (GB = OB.Im) && void 0 !== GB && null !== (YB = GB.extras) && void 0 !== YB && YB.bloxdProcessed || null !== (DB = BB.parent) && void 0 !== DB && null !== (QB = DB.metadata) && void 0 !== QB && null !== (oB  … [truncated]
```

#### 2756. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20834` → after: `L20498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20498) · [Before (L20834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20834)

```diff
-         HH.bX.set(BH, BH, BH), HH.bakeCurrentTransformIntoVertices(!1)
+         BB.SP.set(OB, OB, OB), BB.bakeCurrentTransformIntoVertices(!1)
```

#### 2757. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20840` → after: `L20504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20504) · [Before (L20840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20840)

```diff
-       return (0, rH.o)(`v${QH}|${JSON.stringify(HH)}|${BH}`)
+       return (0, DB.s)(`v${qB}|${JSON.stringify(BB)}|${OB}`)
```

#### 2758. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20861` → after: `L20525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20525) · [Before (L20861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20861)

```diff
-         }(HH)) || void 0 === LH || null === (AH = LH.extras) || void 0 === AH ? void 0 : AH.bloxdBuildHash) && void 0 !== BH ? BH : null
+         }(BB)) || void 0 === GB || null === (YB = GB.extras) || void 0 === YB ? void 0 : YB.bloxdBuildHash) && void 0 !== OB ? OB : null
```

#### 2759. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20874-L20875` → after: `L20538-L20539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20538-L20539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20538-L20539) · [Before (L20874-L20875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20874-L20875)

```diff
-         LH = AH.lu.One(),
-         rH = new AH.lu;
+         GB = YB.Xp.One(),
+         DB = new YB.Xp;
```

#### 2760. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20882` → after: `L20546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20546) · [Before (L20882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20882)

```diff
-         const HH = AH.Matrix.Compose(LH, AH.Quaternion.RotationYawPitchRoll(GH, YH, 0), new AH.lu(CH, EH, XH)),
+         const BB = YB.Matrix.Compose(GB, YB.Quaternion.RotationYawPitchRoll(zB, lB, 0), new YB.Xp(JB, MB, PB)),
```

#### 2761. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20884` → after: `L20548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20548) · [Before (L20884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20884)

```diff
-         for (let LH = 0; LH < SH.length; LH += 3) AH.lu.TransformCoordinatesFromFloatsToRef(SH[LH], SH[LH + 1], SH[LH + 2], HH, rH), BH.positions.push(rH.x, rH.y, rH.z), AH.lu.TransformNormalFromFloatsToRef(hH[LH], hH[LH + 1], hH[LH + 2], HH, rH), BH.normals.push(rH.x, rH.y, rH.z … [truncated]
+         for (let GB = 0; GB < QB.length; GB += 3) YB.Xp.TransformCoordinatesFromFloatsToRef(QB[GB], QB[GB + 1], QB[GB + 2], BB, DB), OB.positions.push(DB.x, DB.y, DB.z), YB.Xp.TransformNormalFromFloatsToRef(oB[GB], oB[GB + 1], oB[GB + 2], BB, DB), OB.normals.push(DB.x, DB.y, DB.z … [truncated]
```

#### 2762. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20891` → after: `L20555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20555) · [Before (L20891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20891)

```diff
-   38913: (HH, BH, LH) => {
+   38716: (BB, OB, GB) => {
```

#### 2763. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20893-L20896` → after: `L20557-L20560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20557-L20560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20557-L20560) · [Before (L20893-L20896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20893-L20896)

```diff
-       d: () => JB,
-       h: () => nB,
-       l: () => gB,
-       o: () => pB
+       e: () => vO,
+       f: () => cO,
+       g: () => rO,
+       j: () => xO
```

#### 2764. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20898-L20901` → after: `L20562-L20565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20562-L20565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20562-L20565) · [Before (L20898-L20901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20898-L20901)

```diff
-     var AH = LH(37912),
-       rH = LH(4061),
-       SH = LH(38646),
-       hH = LH(38921),
+     var YB = GB(37723),
+       DB = GB(4111),
+       QB = GB(38466),
+       oB = GB(38722),
```

#### 2765. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20903-L20921` → after: `L20567-L20585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20567-L20585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20567-L20585) · [Before (L20903-L20921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20903-L20921)

```diff
-       zH = LH(9940),
-       CH = LH(38886),
-       EH = LH(18),
-       XH = LH(152),
-       GH = LH(3503),
-       YH = LH(38654),
-       uH = LH(3508),
-       QH = LH(15),
-       WH = LH(3038),
-       MH = LH(4113),
-       xH = LH(38753),
-       vH = LH(38100),
-       PH = LH(38157),
-       TH = LH(37961),
-       UH = LH(38135),
-       VH = LH(38067),
- ... (3 more removed lines; see GitHub link above)
+       yB = GB(9927),
+       JB = GB(38686),
+       MB = GB(25),
+       PB = GB(162),
+       zB = GB(3573),
+       lB = GB(38470),
+       pB = GB(3580),
+       qB = GB(16),
+       ZB = GB(3088),
+       NB = GB(4166),
+       RB = GB(38563),
+       WB = GB(37928),
+       AB = GB(37984),
+       VB = GB(37771),
+       SB = GB(37962),
+       nB = GB(37880),
+ ... (3 more added lines; see GitHub link above)
```

#### 2766. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20925-L20926` → after: `L20589-L20590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20589-L20590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20589-L20590) · [Before (L20925-L20926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20925-L20926)

```diff
-       (0, kH.d)(HH);
-       const LH = GH.b.getTexture(BH, uH.k.BLOCK).url,
+       (0, kB.c)(BB);
+       const GB = zB.c.getTexture(OB, pB.h.BLOCK).url,
```

#### 2767. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20929` → after: `L20593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20593) · [Before (L20929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20929)

```diff
-       const rH = (0, UH.r)(HH, {
+       const DB = (0, SB.t)(BB, {
```

#### 2768. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20933` → after: `L20597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20597) · [Before (L20933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20933)

```diff
-           samplingMode: UH.f.nearestNearestMipLinear,
+           samplingMode: SB.g.nearestNearestMipLinear,
```

#### 2769. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20942-L20944` → after: `L20606-L20608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20606-L20608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20606-L20608) · [Before (L20942-L20944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20942-L20944)

```diff
-         } = (0, vH.b)({
-           name: `${BH}BlockModelMeshMat`,
-           NQ: HH,
+         } = (0, WB.c)({
+           name: `${OB}BlockModelMeshMat`,
+           eq: BB,
```

#### 2770. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20947` → after: `L20611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20611) · [Before (L20947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20947)

```diff
-             transparencyMode: VH.c.MATERIAL_ALPHATEST,
+             transparencyMode: nB.d.MATERIAL_ALPHATEST,
```

#### 2771. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20967` → after: `L20631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20631) · [Before (L20967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20967)

```diff
-       return (0, OH.n)((0, WH.c)().mX, HH, (0, bH.j)({
+       return (0, UB.q)((0, ZB.g)().UP, BB, (0, fB.f)({
```

#### 2772. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20982-L20983` → after: `L20646-L20647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20646-L20647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20646-L20647) · [Before (L20982-L20983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20982-L20983)

```diff
-         const LH = fH(`${BH}CstmPlnMdl1`);
-         LH.jQ = !1, LH.rotation.set(...tH.rotation), LH.bakeCurrentTransformIntoVertices();
+         const GB = mB(`${OB}CstmPlnMdl1`);
+         GB.bq = !1, GB.rotation.set(...jB.rotation), GB.bakeCurrentTransformIntoVertices();
```

#### 2773. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20987-L20988` → after: `L20651-L20652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20651-L20652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20651-L20652) · [Before (L20987-L20988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L20987-L20988)

```diff
-       const hH = (0, OH.k)(rH, SH.size > 1, !1);
-       return hH.jQ = !1, hH
+       const oB = (0, UB.o)(DB, QB.size > 1, !1);
+       return oB.bq = !1, oB
```

#### 2774. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21019` → after: `L20683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20683) · [Before (L21019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21019)

```diff
-     const eH = new TH.lu(.5, .5, .5);
+     const LB = new VB.Xp(.5, .5, .5);
```

#### 2775. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21023` → after: `L20687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20687) · [Before (L21023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21023)

```diff
-           const LH = TH.Matrix.Compose(TH.lu.One(), TH.Quaternion.RotationYawPitchRoll(HH.rotation[1], HH.rotation[0], HH.rotation[2]), TH.lu.FromArray(HH.position)),
+           const GB = VB.Matrix.Compose(VB.Xp.One(), VB.Quaternion.RotationYawPitchRoll(BB.rotation[1], BB.rotation[0], BB.rotation[2]), VB.Xp.FromArray(BB.position)),
```

#### 2776. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21027` → after: `L20691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20691) · [Before (L21027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21027)

```diff
-               bX: SH
+               SP: QB
```

#### 2777. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21032-L21034` → after: `L20696-L20698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20696-L20698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20696-L20698) · [Before (L21032-L21034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21032-L21034)

```diff
-         rH = TH.lu.TransformCoordinates(TH.lu.Zero(), AH),
-         SH = TH.lu.TransformNormal(new TH.lu(1, 0, 0), AH),
-         hH = TH.lu.TransformNormal(new TH.lu(0, 1, 0), AH),
+         DB = VB.Xp.TransformCoordinates(VB.Xp.Zero(), YB),
+         QB = VB.Xp.TransformNormal(new VB.Xp(1, 0, 0), YB),
+         oB = VB.Xp.TransformNormal(new VB.Xp(0, 1, 0), YB),
```

#### 2778. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21040` → after: `L20704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20704) · [Before (L21040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21040)

```diff
-         texture: GH.b.getTexture(BH, uH.k.BLOCK).url
+         texture: zB.c.getTexture(OB, pB.h.BLOCK).url
```

#### 2779. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21050` → after: `L20714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20714) · [Before (L21050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21050)

```diff
-           return KH("CentreCross" === LH ? IH : HH.customPlanesInfo).map((HH => {
+           return FB("CentreCross" === GB ? uB : BB.customPlanesInfo).map((BB => {
```

#### 2780. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21082` → after: `L20746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20746) · [Before (L21082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21082)

```diff
-       (0, kH.d)(HH);
+       (0, kB.c)(BB);
```

#### 2781. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21092` → after: `L20756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20756) · [Before (L21092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21092)

```diff
-       return FH(HH, BH, RH(HH, BH.name, SH.f), LH)
+       return hB(BB, OB, wB(BB, OB.name, QB.e), GB)
```

#### 2782. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21096` → after: `L20760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20760) · [Before (L21096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21096)

```diff
-       const rH = YH.b.getBlockAtlasMaterialForPlacement(HH, !!BH.transTex, !!BH.unlitStandaloneMesh),
+       const DB = lB.e.getBlockAtlasMaterialForPlacement(BB, !!OB.transTex, !!OB.unlitStandaloneMesh),
```

#### 2783. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21102` → after: `L20766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20766) · [Before (L21102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21102)

```diff
-       return SH.vI(!0), SH
+       return QB.Zk(!0), QB
```

#### 2784. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21104-L21111` → after: `L20768-L20775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20768-L20775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20768-L20775) · [Before (L21104-L21111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21104-L21111)

```diff
-     var DH = LH(9979),
-       wH = LH(1168),
-       ZH = LH(38926),
-       dH = LH(38829),
-       aH = LH(9982),
-       sH = LH(4868),
-       JH = LH(38777),
-       iH = LH(38062);
+     var aB = GB(9974),
+       eB = GB(1217),
+       TB = GB(38730),
+       bB = GB(38634),
+       CB = GB(9983),
+       HB = GB(4886),
+       vB = GB(38580),
+       sB = GB(37877);
```

#### 2785. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21115` → after: `L20779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20779) · [Before (L21115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21115)

```diff
-         Sr: LH,
+         XD: GB,
```

#### 2786. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21127` → after: `L20791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20791) · [Before (L21127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21127)

```diff
-           Sr: LH[1],
+           XD: GB[1],
```

#### 2787. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21132-L21133` → after: `L20796-L20797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20796-L20797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20796-L20797) · [Before (L21132-L21133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21132-L21133)

```diff
-       }(BH((0, aH.q)(HH.postPiece, null))), hH = TH.Matrix.Translation(-rH, -LH, -SH).multiply(TH.Matrix.Scaling(1 / AH, 1 / AH, 1 / AH)).multiply(TH.Matrix.Translation(0, -.5, 0)), tH = (HH, LH) => {
-         const AH = AH => (0, JH.i)((0, JH.d)(BH((0, aH.q)(HH, AH))), LH.m);
+       }(OB((0, CB.l)(BB.postPiece, null))), oB = VB.Matrix.Translation(-DB, -GB, -QB).multiply(VB.Matrix.Scaling(1 / YB, 1 / YB, 1 / YB)).multiply(VB.Matrix.Translation(0, -.5, 0)), jB = (BB, GB) => {
+         const YB = YB => (0, vB.g)((0, vB.b)(OB((0, CB.l)(BB, YB))), GB.m);
```

#### 2788. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21136` → after: `L20800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20800) · [Before (L21136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21136)

```diff
-           arms: aH.x.map(((HH, BH) => AH(BH)))
+           arms: CB.q.map(((BB, OB) => YB(OB)))
```

#### 2789. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21144` → after: `L20808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20808) · [Before (L21144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21144)

```diff
-           arms: zH.arms.map(((HH, BH) => (0, JH.g)([
+           arms: yB.arms.map(((BB, OB) => (0, vB.c)([
```

#### 2790. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21158` → after: `L20822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20822) · [Before (L21158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21158)

```diff
-       return (0, JH.g)([LH, ...rH].map((HH => [HH, null])))
+       return (0, vB.c)([GB, ...DB].map((BB => [BB, null])))
```

#### 2791. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21170-L21171` → after: `L20834-L20835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20834-L20835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20834-L20835) · [Before (L21170-L21171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21170-L21171)

```diff
-       if (!AH) throw new Error(`"${LH}" has no node named "${BH}"`);
-       if (!AH.length) throw new Error(`"${LH}" node "${BH}" has no mesh`);
+       if (!YB) throw new Error(`"${GB}" has no node named "${OB}"`);
+       if (!YB.length) throw new Error(`"${GB}" node "${OB}" has no mesh`);
```

#### 2792. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21173-L21174` → after: `L20837-L20838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20837-L20838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20837-L20838) · [Before (L21173-L21174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21173-L21174)

```diff
-         const LH = (0, iH.k)(HH, BH);
-         return (0, JH.i)(LH, HH.worldMatrix(BH, !1)),
+         const GB = (0, sB.q)(BB, OB);
+         return (0, vB.g)(GB, BB.worldMatrix(OB, !1)),
```

#### 2793. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21188` → after: `L20852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20852) · [Before (L21188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21188)

```diff
-       return (0, JH.g)(rH)
+       return (0, vB.c)(DB)
```

#### 2794. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21190` → after: `L20854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20854) · [Before (L21190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21190)

```diff
-     var LB = LH(38717);
+     var GO = GB(38539);
```

#### 2795. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21192` → after: `L20856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20856) · [Before (L21192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21192)

```diff
-         fence: aH.z
+         fence: CB.u
```

#### 2796. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21198-L21199` → after: `L20862-L20863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20862-L20863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20862-L20863) · [Before (L21198-L21199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21198-L21199)

```diff
-       const AH = GH.b.getModel(BH, uH.g.BLOCK).url,
-         rH = await (0, PH.j)("", HH, AH, (() => GH.b.getModelOverride(BH) ? {
+       const YB = zB.c.getModel(OB, pB.f.BLOCK).url,
+         DB = await (0, AB.h)("", BB, YB, (() => zB.c.getModelOverride(OB) ? {
```

#### 2797. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21202` → after: `L20866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20866) · [Before (L21202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21202)

```diff
-             rootUrl: GH.b.getModel(BH, uH.g.BLOCK, !0).url
+             rootUrl: zB.c.getModel(OB, pB.f.BLOCK, !0).url
```

#### 2798. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21209` → after: `L20873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20873) · [Before (L21209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21209)

```diff
-       return BH ? LH & aH.j ? HH.stackedPost : HH.post : HH.top
+       return OB ? GB & CB.g ? BB.stackedPost : BB.post : BB.top
```

#### 2799. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21214` → after: `L20878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20878) · [Before (L21214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21214)

```diff
-       const SH = zH.x[(0, sH.k)(BH.textureInfo)];
+       const QB = yB.u[(0, HB.m)(OB.textureInfo)];
```

#### 2800. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21219-L21220` → after: `L20883-L20884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20883-L20884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20883-L20884) · [Before (L21219-L21220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21219-L21220)

```diff
-         const AH = (0, LB.e)();
-         for (let rH = 1; rH < LH.length; rH += 2) LH[rH] = (0, LB.d)(BH, LH[rH], AH)
+         const YB = (0, GO.j)();
+         for (let DB = 1; DB < GB.length; DB += 2) GB[DB] = (0, GO.f)(OB, GB[DB], YB)
```

#### 2801. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21226` → after: `L20890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20890) · [Before (L21226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21226)

```diff
-         } = null !== (rH = AH.named) && void 0 !== rH ? rH : {},
+         } = null !== (DB = YB.named) && void 0 !== DB ? DB : {},
```

#### 2802. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21228` → after: `L20892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20892) · [Before (L21228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21228)

```diff
-         XH = (0, OH.n)((0, WH.c)().mX, LH, {
+         PB = (0, UB.q)((0, ZB.g)().UP, GB, {
```

#### 2803. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21233` → after: `L20897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20897) · [Before (L21233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21233)

```diff
-             color: (0, iH.j)(hH, iH.b, tH)
+             color: (0, sB.o)(oB, sB.c, jB)
```

#### 2804. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21236` → after: `L20900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20900) · [Before (L21236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21236)

```diff
-       return XH.material = YH.b.getBlockAtlasMaterialForPlacement(HH, !!BH.transTex, !!BH.unlitStandaloneMesh), XH.jQ = !1, XH
+       return PB.material = lB.e.getBlockAtlasMaterialForPlacement(BB, !!OB.transTex, !!OB.unlitStandaloneMesh), PB.bq = !1, PB
```

#### 2805. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21240` → after: `L20904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20904) · [Before (L21240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21240)

```diff
-       if (!LH) throw new Error(`"${BH.name}" has no connecting model GLB for model "${BH.model}"`);
+       if (!GB) throw new Error(`"${OB.name}" has no connecting model GLB for model "${OB.model}"`);
```

#### 2806. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21245-L21246` → after: `L20909-L20910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20909-L20910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20909-L20910) · [Before (L21245-L21246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21245-L21246)

```diff
-       }(HH, LH), rH = void 0 !== BH.attachedTop, SH = rH ? [...aH.i, ...aH.i.map((HH => HH | aH.j))] : aH.i, hH = new Map;
-       for (const tH of SH) hH.set(tH, (() => CB(HH, BH, `${BH.name}|${tH}ConnectingModel`, yH(zB(AH, rH, tH), tH))));
+       }(BB, GB), DB = void 0 !== OB.attachedTop, QB = DB ? [...CB.e, ...CB.e.map((BB => BB | CB.g))] : CB.e, oB = new Map;
+       for (const jB of QB) oB.set(jB, (() => JO(BB, OB, `${OB.name}|${jB}ConnectingModel`, tB(yO(YB, DB, jB), jB))));
```

#### 2807. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21252-L21253` → after: `L20916-L20917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20916-L20917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20916-L20917) · [Before (L21252-L21253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21252-L21253)

```diff
-       if (!LH) throw new Error(`"${HH}" variants registered before its connecting meshes were built`);
-       return LH.get((0, aH.u)(BH))
+       if (!GB) throw new Error(`"${BB}" variants registered before its connecting meshes were built`);
+       return GB.get((0, CB.o)(OB))
```

#### 2808. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21255` → after: `L20919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20919) · [Before (L21255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21255)

```diff
-     var GB = LH(9988);
+     var zO = GB(9985);
```

#### 2809. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21273` → after: `L20937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20937) · [Before (L21273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21273)

```diff
-       const [BH, LH] = GB.j.bottom.map(HH), {
+       const [OB, GB] = zO.q.bottom.map(BB), {
```

#### 2810. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21279-L21280` → after: `L20943-L20944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20943-L20944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20943-L20944) · [Before (L21279-L21280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21279-L21280)

```diff
-           left: (0, JH.i)((0, JH.d)(LH), BH.m),
-           right: (0, JH.i)((0, JH.d)(AH), BH.m)
+           left: (0, vB.g)((0, vB.b)(GB), OB.m),
+           right: (0, vB.g)((0, vB.b)(YB), OB.m)
```

#### 2811. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21282` → after: `L20946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20946) · [Before (L21282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21282)

```diff
-       }, [zH, CH] = GB.j.top.map(HH);
+       }, [yB, JB] = zO.q.top.map(BB);
```

#### 2812. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21294` → after: `L20958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20958) · [Before (L21294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21294)

```diff
-       return (0, JH.i)((0, JH.d)(HH), hH.m)
+       return (0, vB.g)((0, vB.b)(BB), oB.m)
```

#### 2813. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21303` → after: `L20967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20967) · [Before (L21303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21303)

```diff
-         hH = (0, JH.g)([
+         oB = (0, vB.c)([
```

#### 2814. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21307` → after: `L20971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20971) · [Before (L21307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21307)

```diff
-       return (0, JH.i)(hH, TH.Matrix.RotationY((BH - 1) * Math.PI / 2).m)
+       return (0, vB.g)(oB, VB.Matrix.RotationY((OB - 1) * Math.PI / 2).m)
```

#### 2815. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21314` → after: `L20978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20978) · [Before (L21314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21314)

```diff
-       return `${HH}|${BH}`
+       return `${BB}|${OB}`
```

#### 2816. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21319` → after: `L20983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20983) · [Before (L21319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21319)

```diff
-       if (!AH) throw new Error(`"${HH}" variants registered before its fence gate meshes were built`);
+       if (!YB) throw new Error(`"${BB}" variants registered before its fence gate meshes were built`);
```

#### 2817. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21322` → after: `L20986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L20986) · [Before (L21322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21322)

```diff
-     var UB = LH(38833);
+     var SO = GB(38636);
```

#### 2818. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21336` → after: `L21000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21000) · [Before (L21336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21336)

```diff
-         return (BH.endsWith(" Leaves") || LH) && (rH |= UB.d.vegetation), ("Dirt" === BH || BH.endsWith(" Dirt") || BH.endsWith(" Soil") || LH) && (rH |= UB.d.dirt), (VB.has(BH) || AH) && (rH |= UB.d.sand), (OB.has(BH) || AH || BH.endsWith(" Ore") || bB.test(BH)) && (rH |= UB.d.r … [truncated]
+         return (OB.endsWith(" Leaves") || GB) && (DB |= SO.b.vegetation), ("Dirt" === OB || OB.endsWith(" Dirt") || OB.endsWith(" Soil") || GB) && (DB |= SO.b.dirt), (nO.has(OB) || YB) && (DB |= SO.b.sand), (UO.has(OB) || YB || OB.endsWith(" Ore") || fO.test(OB)) && (DB |= SO.b.r … [truncated]
```

#### 2819. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21342` → after: `L21006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21006) · [Before (L21342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21342)

```diff
-             return UB.d.slab;
+             return SO.b.slab;
```

#### 2820. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21344` → after: `L21008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21008) · [Before (L21344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21344)

```diff
-             return UB.d.stairs
+             return SO.b.stairs
```

#### 2821. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21346` → after: `L21010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21010) · [Before (L21346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21346)

```diff
-         return LH && kB.has(LH) ? UB.d.flat | (mB.has(AH) ? 0 : UB.d.vegetation) : LH && oB.has(AH) ? UB.d.vegetation : 0
+         return GB && kO.has(GB) ? SO.b.flat | (dO.has(YB) ? 0 : SO.b.vegetation) : GB && KO.has(YB) ? SO.b.vegetation : 0
```

#### 2822. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21349-L21353` → after: `L21013-L21017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21013-L21017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21013-L21017) · [Before (L21349-L21353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21349-L21353)

```diff
-     var fB = LH(38118),
-       lB = LH(38141),
-       KB = LH(38935),
-       cB = LH(3639),
-       eB = LH(5077);
+     var mO = GB(37946),
+       IO = GB(37966),
+       FO = GB(38739),
+       iO = GB(3708),
+       LO = GB(5088);
```

#### 2823. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21357` → after: `L21021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21021) · [Before (L21357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21357)

```diff
-       return [HH.animTextures.length - 1, 1, null !== (BH = HH.animationInterval) && void 0 !== BH ? BH : 200]
+       return [BB.animTextures.length - 1, 1, null !== (OB = BB.animationInterval) && void 0 !== OB ? OB : 200]
```

#### 2824. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21361` → after: `L21025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21025) · [Before (L21361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21361)

```diff
-       (0, cB.k)(function() {
+       (0, iO.l)(function() {
```

#### 2825. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21363` → after: `L21027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21027) · [Before (L21363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21363)

```diff
-         for (const BH of [zH.g, AH.s])
+         for (const OB of [yB.h, YB.t])
```

#### 2826. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21368-L21369` → after: `L21032-L21033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21032-L21033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21032-L21033) · [Before (L21368-L21369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21368-L21369)

```diff
-         return Array.from(HH, (HH => null !== HH && void 0 !== HH ? HH : ""))
-       }()), await (0, eB.r)("block textures");
+         return Array.from(BB, (BB => null !== BB && void 0 !== BB ? BB : ""))
+       }()), await (0, LO.n)("block textures");
```

#### 2827. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21376-L21377` → after: `L21040-L21041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21040-L21041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21040-L21041) · [Before (L21376-L21377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21376-L21377)

```diff
-         xH = LH(38941);
-       MH(new window.FontFace("Jetbrains Mono", `url(${xH})`).load().then((HH => {
+         RB = GB(38741);
+       NB(new window.FontFace("Jetbrains Mono", `url(${RB})`).load().then((BB => {
```

#### 2828. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21379` → after: `L21043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21043) · [Before (L21379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21379)

```diff
-       }))), HH.pT.JLH({
+       }))), BB.DW.jYB({
```

#### 2829. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21381-L21382` → after: `L21045-L21046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21045-L21046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21045-L21046) · [Before (L21381-L21382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21381-L21382)

```diff
-       }), (0, PH.l)(), await GH.b.requiredAssetsAreGenerated();
-       const TH = GH.b.getGenerationFailure();
+       }), (0, AB.k)(), await zB.c.requiredAssetsAreGenerated();
+       const VB = zB.c.getGenerationFailure();
```

#### 2830. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21384-L21388` → after: `L21048-L21052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21048-L21052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21048-L21052) · [Before (L21384-L21388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21384-L21388)

```diff
-       await (0, eB.r)("items object"), (0, SH.s)(), await (0, eB.r)("pick helper"), WH.f.localPlayerPickActionHelper = new CH.e(HH, HH.lF), await (0, eB.r)("block atlas");
-       const VH = GH.b.getBlockAtlasArr(),
-         kH = GH.b.getBlockAtlasPixels(),
-         mH = GH.b.getBlockAtlasWidth(),
-         oH = zH.u.flatMap((HH => {
+       await (0, LO.n)("items object"), (0, QB.u)(), await (0, LO.n)("pick helper"), ZB.h.localPlayerPickActionHelper = new JB.c(BB, BB.EX), await (0, LO.n)("block atlas");
+       const nB = zB.c.getBlockAtlasArr(),
+         kB = zB.c.getBlockAtlasPixels(),
+         dB = zB.c.getBlockAtlasWidth(),
+         KB = yB.t.flatMap((BB => {
```

#### 2831. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21397-L21398` → after: `L21061-L21062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21061-L21062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21061-L21062) · [Before (L21397-L21398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21397-L21398)

```diff
-       const IH = HH.mX.SQ();
-       YH.b.setUseWebGL2(IH);
+       const uB = BB.UP.Mq();
+       lB.e.setUseWebGL2(uB);
```

#### 2832. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21401-L21402` → after: `L21065-L21066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21065-L21066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21065-L21066) · [Before (L21401-L21402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21401-L21402)

```diff
-       QH.c.get("clientEscMenuOptions").disableTexAtlas && !HH.Cu && (fH = !1, lH = "options");
-       let KH = GH.b.getImagesPerAtlas();
+       qB.c.get("clientEscMenuOptions").disableTexAtlas && !BB.zp && (mB = !1, IB = "options");
+       let FB = zB.c.getImagesPerAtlas();
```

#### 2833. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21404` → after: `L21068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21068) · [Before (L21404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21404)

```diff
-         const HH = `imagesPerAtlas = ${KH}`;
+         const BB = `imagesPerAtlas = ${FB}`;
```

#### 2834. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21407-L21409` → after: `L21071-L21073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21071-L21073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21071-L21073) · [Before (L21407-L21409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21407-L21409)

```diff
-       const cH = HH.mX.engine.getCaps().texture2DArrayMaxLayerCount;
-       fH && IH && cH < KH[0] && (fH = !1, lH = `maxLayerCount = ${cH}, layerCount = ${KH[0]}`);
-       const eH = HH.mX.engine.getCaps().maxTextureSize,
+       const iB = BB.UP.engine.getCaps().texture2DArrayMaxLayerCount;
+       mB && uB && iB < FB[0] && (mB = !1, IB = `maxLayerCount = ${iB}, layerCount = ${FB[0]}`);
+       const LB = BB.UP.engine.getCaps().maxTextureSize,
```

#### 2835. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21411-L21412` → after: `L21075-L21076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21075-L21076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21075-L21076) · [Before (L21411-L21412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21411-L21412)

```diff
-       fH && eH < qH && (fH = !1, lH = `maxTextureSize = ${eH}, textureSize = ${qH}`), console.log("Graphics backend", null !== (BH = null === (rH = HH.mX.yu) || void 0 === rH ? void 0 : rH.backendName) && void 0 !== BH ? BH : `webgl${HH.mX.engine.hQ}`, "useTexAtlas", fH, "reason" … [truncated]
-       const gH = Math.floor(Object.keys((0, wH.Z)(zH.g)).length / 50);
+       mB && LB < gB && (mB = !1, IB = `maxTextureSize = ${LB}, textureSize = ${gB}`), console.log("Graphics backend", null !== (OB = null === (DB = BB.UP.Dq) || void 0 === DB ? void 0 : DB.backendName) && void 0 !== OB ? OB : `webgl${BB.UP.engine.Pq}`, "useTexAtlas", mB, "reason" … [truncated]
+       const rB = Math.floor(Object.keys((0, eB.bb)(yB.h)).length / 50);
```

#### 2836. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21414-L21415` → after: `L21078-L21079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21078-L21079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21078-L21079) · [Before (L21414-L21415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21414-L21415)

```diff
-         RH += 1, RH % 50 === 0 && (EH.k.AX("matchmakeAndPlayStepCompleted", {
-           step: XH.h.REGISTRATION,
+         wB += 1, wB % 50 === 0 && (MB.o.tM("matchmakeAndPlayStepCompleted", {
+           step: PB.l.REGISTRATION,
```

#### 2837. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21419` → after: `L21083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21083) · [Before (L21419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21419)

```diff
-         }))), await (0, eB.r)(`block ${HH}`)
+         }))), await (0, LO.n)(`block ${BB}`)
```

#### 2838. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21422-L21423` → after: `L21086-L21087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21086-L21087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21086-L21087) · [Before (L21422-L21423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21422-L21423)

```diff
-       for (const LH in (0, wH.Z)(zH.g)) {
-         const BH = zH.g[LH],
+       for (const GB in (0, eB.bb)(yB.h)) {
+         const OB = yB.h[GB],
```

#### 2839. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21427` → after: `L21091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21091) · [Before (L21427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21427)

```diff
-           if (aB(zH.g[HH], BH)) {
+           if (CO(yB.h[BB], OB)) {
```

#### 2840. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21433` → after: `L21097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21097) · [Before (L21433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21433)

```diff
-           await (0, eB.r)(`block ${LH} model`);
+           await (0, LO.n)(`block ${GB} model`);
```

#### 2841. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21436` → after: `L21100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21100) · [Before (L21436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21436)

```diff
-               I9: await ZB(BH.model).getMesh(HH.mX.yN(), BH),
+               x_: await TO(OB.model).getMesh(BB.UP.JF(), OB),
```

#### 2842. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21439-L21445` → after: `L21103-L21109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21103-L21109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21103-L21109) · [Before (L21439-L21445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21439-L21445)

```diff
-               hW: BH.hW,
-               GV: sB(LH),
-               Uu: null !== (rH = BH.Uu) && void 0 !== rH ? rH : null,
-               tW: null !== (SH = BH.tW) && void 0 !== SH ? SH : null,
-               Vu: BH.Vu,
-               iN: IB(LH, BH.model),
-               E1: () => iB(BH, BH)
+               MZ: OB.MZ,
+               oV: HO(GB),
+               dp: null !== (DB = OB.dp) && void 0 !== DB ? DB : null,
+               PZ: null !== (QB = OB.PZ) && void 0 !== QB ? QB : null,
+               Kp: OB.Kp,
+               jF: uO(GB, OB.model),
+               E_: () => sO(OB, OB)
```

#### 2843. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21447` → after: `L21111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21111) · [Before (L21447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21447)

```diff
-             HH.YX.VJ(BH.id, hH), null !== BH.meta.metaStr && await NB(HH, LH, hH), await NH(LH)
+             BB.JP.eC(OB.id, oB), null !== OB.meta.metaStr && await XO(BB, GB, oB), await XB(GB)
```

#### 2844. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21453-L21454` → after: `L21117-L21118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21117-L21118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21117-L21118) · [Before (L21453-L21454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21453-L21454)

```diff
-             if ("number" === typeof BH.textureInfo[0]) BH.textureInfo.length > 3 && (rH = !0), HH.YX.N9(LH, {
-               Y1: [],
+             if ("number" === typeof OB.textureInfo[0]) OB.textureInfo.length > 3 && (DB = !0), BB.JP.R7(GB, {
+               h_: [],
```

#### 2845. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21456` → after: `L21120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21120) · [Before (L21456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21456)

```diff
-               U1: rH
+               e_: DB
```

#### 2846. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21463-L21470` → after: `L21127-L21134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21127-L21134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21127-L21134) · [Before (L21463-L21470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21463-L21470)

```diff
-                 const tH = `${LH}${hH}`;
-                 if (fH && void 0 !== BH.atlasIdx[hH]) HH.YX.N9(tH, {
-                   Y1: VH,
-                   W9: kH,
-                   o9: mH,
-                   R7: BH.atlasIdx[hH],
-                   U1: rH,
-                   zW: oH
+                 const jB = `${GB}${oB}`;
+                 if (mB && void 0 !== OB.atlasIdx[oB]) BB.JP.R7(jB, {
+                   h_: nB,
+                   b_: kB,
+                   v_: dB,
+                   T_: OB.atlasIdx[oB],
+                   e_: DB,
+                   zZ: KB
```

#### 2847. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21475-L21476` → after: `L21139-L21140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21139-L21140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21139-L21140) · [Before (L21475-L21476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21475-L21476)

```diff
-                       Y1: [GH.b.getTexture("string" === typeof BH ? BH : tH, uH.k.BLOCK).url],
-                       U1: rH
+                       h_: [zB.c.getTexture("string" === typeof OB ? OB : jB, pB.h.BLOCK).url],
+                       e_: DB
```

#### 2848. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21478` → after: `L21142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21142) · [Before (L21478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21478)

```diff
-                   ("string" === typeof BH ? 0 : BH.animTextures.length) > 0 && (LH.zW = qB(BH)), HH.YX.N9(tH, LH)
+                   ("string" === typeof OB ? 0 : OB.animTextures.length) > 0 && (GB.zZ = gO(OB)), BB.JP.R7(jB, GB)
```

#### 2849. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21484` → after: `L21148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21148) · [Before (L21484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21484)

```diff
-                   const BH = `${LH}${HH}`;
+                   const OB = `${GB}${BB}`;
```

#### 2850. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21490-L21493` → after: `L21154-L21157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21154-L21157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21154-L21157) · [Before (L21490-L21493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21490-L21493)

```diff
-             if (rH ||= BH.transTex, rH ||= (null === (DH = BH.textureInfo.colour) || void 0 === DH ? void 0 : DH.length) > 3, fH && void 0 !== BH.atlasIdx) HH.YX.N9(LH, {
-               Y1: VH,
-               W9: kH,
-               o9: mH,
+             if (DB ||= OB.transTex, DB ||= (null === (aB = OB.textureInfo.colour) || void 0 === aB ? void 0 : aB.length) > 3, mB && void 0 !== OB.atlasIdx) BB.JP.R7(GB, {
+               h_: nB,
+               b_: kB,
+               v_: dB,
```

#### 2851. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21495-L21498` → after: `L21159-L21162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21159-L21162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21159-L21162) · [Before (L21495-L21498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21495-L21498)

```diff
-               J9: !1,
-               R7: BH.atlasIdx[0],
-               U1: rH,
-               zW: oH
+               B5: !1,
+               T_: OB.atlasIdx[0],
+               e_: DB,
+               zZ: KB
```

#### 2852. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21501-L21503` → after: `L21165-L21167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21165-L21167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21165-L21167) · [Before (L21501-L21503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21501-L21503)

```diff
-               const AH = GH.b.getTexture(LH, uH.k.BLOCK).url;
-               HH.YX.N9(LH, {
-                 Y1: [AH],
+               const YB = zB.c.getTexture(GB, pB.h.BLOCK).url;
+               BB.JP.R7(GB, {
+                 h_: [YB],
```

#### 2853. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21505-L21507` → after: `L21169-L21171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21169-L21171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21169-L21171) · [Before (L21505-L21507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21505-L21507)

```diff
-                 J9: !1,
-                 U1: rH,
-                 zW: qB(BH.textureInfo)
+                 B5: !1,
+                 e_: DB,
+                 zZ: gO(OB.textureInfo)
```

#### 2854. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21512-L21518` → after: `L21176-L21182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21176-L21182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21176-L21182) · [Before (L21512-L21518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21512-L21518)

```diff
-             HH.YX.N9(LH, {
-               Y1: VH,
-               W9: kH,
-               o9: mH,
-               R7: AH,
-               U1: rH,
-               zW: oH
+             BB.JP.R7(GB, {
+               h_: nB,
+               b_: kB,
+               v_: dB,
+               T_: YB,
+               e_: DB,
+               zZ: KB
```

#### 2855. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21521-L21524` → after: `L21185-L21188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21185-L21188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21185-L21188) · [Before (L21521-L21524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21521-L21524)

```diff
-             const AH = GH.b.getTexture(BH.textureInfo, uH.k.BLOCK).url;
-             HH.YX.N9(LH, {
-               Y1: [AH],
-               U1: rH
+             const YB = zB.c.getTexture(OB.textureInfo, pB.h.BLOCK).url;
+             BB.JP.R7(GB, {
+               h_: [YB],
+               e_: DB
```

#### 2856. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21527-L21531` → after: `L21191-L21195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21191-L21195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21191-L21195) · [Before (L21527-L21531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21527-L21531)

```diff
-           HH.YX.VJ(BH.id, {
-             material: void 0 === AH ? LH : AH,
-             UY: BH.UY,
-             solid: null !== (jH = BH.solid) && void 0 !== jH ? jH : !BH.UY,
-             hW: BH.hW,
+           BB.JP.eC(OB.id, {
+             material: void 0 === YB ? GB : YB,
+             fl: OB.fl,
+             solid: null !== (EB = OB.solid) && void 0 !== EB ? EB : !OB.fl,
+             MZ: OB.MZ,
```

#### 2857. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21533-L21536` → after: `L21197-L21200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21197-L21200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21197-L21200) · [Before (L21533-L21536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21533-L21536)

```diff
-             Uu: null !== (nH = BH.Uu) && void 0 !== nH ? nH : null,
-             tW: null !== (FH = BH.tW) && void 0 !== FH ? FH : null,
-             Vu: BH.Vu,
-             iN: IB(LH, BH.model)
+             dp: null !== (cB = OB.dp) && void 0 !== cB ? cB : null,
+             PZ: null !== (hB = OB.PZ) && void 0 !== hB ? hB : null,
+             Kp: OB.Kp,
+             jF: uO(GB, OB.model)
```

#### 2858. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21538` → after: `L21202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21202) · [Before (L21538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21538)

```diff
-         }(0, SH.C)(LH, BH.id, HH.mX.yN(), void 0)
+         }(0, QB.G)(GB, OB.id, BB.UP.JF(), void 0)
```

#### 2859. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21540` → after: `L21204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21204) · [Before (L21540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21540)

```diff
-       for (const LH in AH.s) {
+       for (const GB in YB.t) {
```

#### 2860. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21542-L21543` → after: `L21206-L21207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21206-L21207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21206-L21207) · [Before (L21542-L21543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21542-L21543)

```diff
-         const BH = AH.s[LH];
-         await (0, eB.r)(`item ${LH}`), (0, SH.C)(LH, BH.id, HH.mX.yN(), BH.type)
+         const OB = YB.t[GB];
+         await (0, LO.n)(`item ${GB}`), (0, QB.G)(GB, OB.id, BB.UP.JF(), OB.type)
```

#### 2861. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21545` → after: `L21209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21209) · [Before (L21545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21545)

```diff
-       return await (0, eB.r)("block overlays"),
+       return await (0, LO.n)("block overlays"),
```

#### 2862. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21547` → after: `L21211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21211) · [Before (L21547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21547)

```diff
-           const BH = HH.mX.yN();
+           const OB = BB.UP.JF();
```

#### 2863. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21550` → after: `L21214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21214) · [Before (L21550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21550)

```diff
-             const rH = GH.b.getTexture(`destroy_stage_${AH}`, uH.k.BLOCK).url,
+             const DB = zB.c.getTexture(`destroy_stage_${YB}`, pB.h.BLOCK).url,
```

#### 2864. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21556` → after: `L21220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21220) · [Before (L21556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21556)

```diff
-               hH = (0, UH.r)(BH, {
+               oB = (0, SB.t)(OB, {
```

#### 2865. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21560` → after: `L21224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21224) · [Before (L21560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21560)

```diff
-                 samplingMode: UH.f.nearestNearestMipLinear,
+                 samplingMode: SB.g.nearestNearestMipLinear,
```

#### 2866. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21564` → after: `L21228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21228) · [Before (L21564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21564)

```diff
-                 transparencyMode: fB.o.alphaTest,
+                 transparencyMode: mO.s.alphaTest,
```

#### 2867. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21569-L21571` → after: `L21233-L21235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21233-L21235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21233-L21235) · [Before (L21569-L21571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21569-L21571)

```diff
-               zH = (0, vH.b)({
-                 name: `breakingBoxTexture${AH}`,
-                 NQ: BH,
+               yB = (0, WB.c)({
+                 name: `breakingBoxTexture${YB}`,
+                 eq: OB,
```

#### 2868. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21575-L21576` → after: `L21239-L21240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21239-L21240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21239-L21240) · [Before (L21575-L21576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21575-L21576)

```diff
-             null === (LH = HH.mX.yu) || void 0 === LH || LH.prepareTexture(hH);
-             const CH = (0, OH.n)(HH.mX, `breakingBox${AH}`, (0, bH.d)({
+             null === (GB = BB.UP.Dq) || void 0 === GB || GB.prepareTexture(oB);
+             const JB = (0, UB.q)(BB.UP, `breakingBox${YB}`, (0, fB.b)({
```

#### 2869. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21581` → after: `L21245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21245) · [Before (L21581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21581)

```diff
-             CH.material = zH, HH.mX.FQ(CH), CH.vI(!1), HH.mX.ZzH.push(CH)
+             JB.material = yB, BB.UP.Hq(JB), JB.Zk(!1), BB.UP.BJB.push(JB)
```

#### 2870. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21586-L21590` → after: `L21250-L21254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21250-L21254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21250-L21254) · [Before (L21586-L21590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21586-L21590)

```diff
-             NQ: BH
-           } = HH.mX, LH = (0, bH.d)({
-             width: KB.d,
-             height: KB.d,
-             depth: KB.d
+             eq: OB
+           } = BB.UP, GB = (0, fB.b)({
+             width: FO.f,
+             height: FO.f,
+             depth: FO.f
```

#### 2871. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21592-L21593` → after: `L21256-L21257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21256-L21257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21256-L21257) · [Before (L21592-L21593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21592-L21593)

```diff
-           for (let GH = 0; GH < AH; GH++) rH[4 * GH + 3] = LH.positions[3 * GH + 2] < 0 ? RB : KB.g;
-           const SH = (0, OH.n)(HH.mX, "highlight", {
+           for (let zB = 0; zB < YB; zB++) DB[4 * zB + 3] = GB.positions[3 * zB + 2] < 0 ? wO : FO.j;
+           const QB = (0, UB.q)(BB.UP, "highlight", {
```

#### 2872. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21600` → after: `L21264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21264) · [Before (L21600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21600)

```diff
-               ...lB.c,
+               ...IO.d,
```

#### 2873. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21604` → after: `L21268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21268) · [Before (L21604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21604)

```diff
-               transparencyMode: fB.o.alphaBlend
+               transparencyMode: mO.s.alphaBlend
```

#### 2874. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21606` → after: `L21270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21270) · [Before (L21606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21606)

```diff
-           SH.material = (0, vH.b)({
+           QB.material = (0, WB.c)({
```

#### 2875. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21608` → after: `L21272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21272) · [Before (L21608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21608)

```diff
-             NQ: BH,
+             eq: OB,
```

#### 2876. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21612` → after: `L21276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21276) · [Before (L21612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21612)

```diff
-           const tH = (0, vH.b)({
+           const jB = (0, WB.c)({
```

#### 2877. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21614` → after: `L21278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21278) · [Before (L21614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21614)

```diff
-               NQ: BH,
+               eq: OB,
```

#### 2878. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21617-L21618` → after: `L21281-L21282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21281-L21282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21281-L21282) · [Before (L21617-L21618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21617-L21618)

```diff
-             zH = KB.i,
-             CH = KB.m,
+             yB = FO.l,
+             JB = FO.q,
```

#### 2879. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21620` → after: `L21284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21284) · [Before (L21620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21620)

```diff
-               const hH = (0, OH.n)(HH.mX, BH, (0, bH.j)({
+               const oB = (0, UB.q)(BB.UP, OB, (0, fB.f)({
```

#### 2880. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21627-L21630` → after: `L21291-L21294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21291-L21294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21291-L21294) · [Before (L21627-L21630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21627-L21630)

```diff
-           for (const GH of XH) GH.material = tH, GH.parent = SH, GH.jQ = !1, HH.mX.FQ(GH);
-           SH.jQ = !1, SH.fu = !0, SH.cu = !0, HH.mX.FQ(SH), SH.metadata.rCH = () => {
-             (0, ZH.d)(HH, XH, SH.bX.x, SH.bX.y, KB.i, KB.m)
-           }, SH.vI(!1), HH.mX.wzH = SH
+           for (const zB of PB) zB.material = jB, zB.parent = QB, zB.bq = !1, BB.UP.Hq(zB);
+           QB.bq = !1, QB.rp = !0, QB.Ep = !0, BB.UP.Hq(QB), QB.metadata.zJB = () => {
+             (0, TB.g)(BB, PB, QB.SP.x, QB.SP.y, FO.l, FO.q)
+           }, QB.Zk(!1), BB.UP.tyB = QB
```

#### 2881. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21634-L21635` → after: `L21298-L21299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21298-L21299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21298-L21299) · [Before (L21634-L21635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21634-L21635)

```diff
-             NQ: BH
-           } = HH.mX, LH = (0, OH.n)(HH.mX, "floating", (0, bH.j)({
+             eq: OB
+           } = BB.UP, GB = (0, UB.q)(BB.UP, "floating", (0, fB.f)({
```

#### 2882. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21639` → after: `L21303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21303) · [Before (L21639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21639)

```diff
-             ...lB.c,
+             ...IO.d,
```

#### 2883. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21644` → after: `L21308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21308) · [Before (L21644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21644)

```diff
-           LH.material = (0, vH.b)({
+           GB.material = (0, WB.c)({
```

#### 2884. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21646` → after: `L21310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21310) · [Before (L21646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21646)

```diff
-             NQ: BH,
+             eq: OB,
```

#### 2885. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21649-L21650` → after: `L21313-L21314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21313-L21314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21313-L21314) · [Before (L21649-L21650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21649-L21650)

```diff
-           }).mirror, LH.rotation.set(-Math.PI / 2, 0, 0), LH.fu = !0, LH.cu = !0, HH.mX.FQ(LH), LH.jQ = !1, LH.vI(!1), HH.mX.gAH = LH
-         }(HH), EH.k.AX("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(hH), {
+           }).mirror, GB.rotation.set(-Math.PI / 2, 0, 0), GB.rp = !0, GB.Ep = !0, BB.UP.Hq(GB), GB.bq = !1, GB.Zk(!1), BB.UP.CYB = GB
+         }(BB), MB.o.tM("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(oB), {
```

#### 2886. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21657` → after: `L21321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21321) · [Before (L21657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21657)

```diff
-       const rH = zH.q[BH];
+       const DB = yB.r[OB];
```

#### 2887. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21659` → after: `L21323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21323) · [Before (L21659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21659)

```diff
-       const hH = zH.g[BH],
+       const oB = yB.h[OB],
```

#### 2888. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21665` → after: `L21329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21329) · [Before (L21665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21665)

```diff
-         const AH = zH.g[vH];
+         const YB = yB.h[WB];
```

#### 2889. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21668` → after: `L21332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21332) · [Before (L21668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21668)

```diff
-           await (0, eB.r)(`block ${vH}`);
+           await (0, LO.n)(`block ${WB}`);
```

#### 2890. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21670` → after: `L21334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21334) · [Before (L21670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21670)

```diff
-           let zH = LH.I9;
+           let yB = GB.x_;
```

#### 2891. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21676-L21677` → after: `L21340-L21341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21340-L21341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21340-L21341) · [Before (L21676-L21677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21676-L21677)

```diff
-             } = AH.meta, SH = (0, dH.k)(BH === DH.c.top, LH, null !== rH && void 0 !== rH ? rH : 1);
-             SH !== dH.g && (tH.has(SH.key) || tH.set(SH.key, (() => nH(HH.mX.yN(), hH, SH))), zH = tH.get(SH.key))
+             } = YB.meta, QB = (0, bB.q)(OB === aB.d.top, GB, null !== DB && void 0 !== DB ? DB : 1);
+             QB !== bB.i && (jB.has(QB.key) || jB.set(QB.key, (() => cB(BB.UP.JF(), oB, QB))), yB = jB.get(QB.key))
```

#### 2892. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21680-L21682` → after: `L21344-L21346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21344-L21346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21344-L21346) · [Before (L21680-L21682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21680-L21682)

```diff
-             BH !== XH && (CH.has(BH) || CH.set(BH, (() => jH(HH.mX.yN(), AH))), zH = CH.get(BH))
-           } else(0, aH.H)(hH) ? zH = XB(BH, AH.meta.metaStr) : (0, GB.s)(hH) && (zH = TB(BH, AH.meta.rot, AH.meta.open));
-           HH.YX.VJ(AH.id, {
+             OB !== PB && (JB.has(OB) || JB.set(OB, (() => EB(BB.UP.JF(), YB))), yB = JB.get(OB))
+           } else(0, CB.A)(oB) ? yB = PO(OB, YB.meta.metaStr) : (0, zO.B)(oB) && (yB = VO(OB, YB.meta.rot, YB.meta.open));
+           BB.JP.eC(YB.id, {
```

#### 2893. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21684-L21685` → after: `L21348-L21349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21348-L21349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21348-L21349) · [Before (L21684-L21685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21684-L21685)

```diff
-             I9: zH,
-             GV: rH,
+             x_: yB,
+             oV: DB,
```

#### 2894. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21687-L21693` → after: `L21351-L21357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21351-L21357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21351-L21357) · [Before (L21687-L21693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21687-L21693)

```diff
-             hW: AH.hW,
-             Uu: null !== (YH = null !== (uH = AH.Uu) && void 0 !== uH ? uH : LH.Uu) && void 0 !== YH ? YH : null,
-             tW: null !== (QH = null !== (WH = AH.tW) && void 0 !== WH ? WH : LH.tW) && void 0 !== QH ? QH : null,
-             Vu: null !== (MH = AH.Vu) && void 0 !== MH ? MH : LH.Vu,
-             iN: IB(vH, null !== (xH = AH.model) && void 0 !== xH ? xH : hH.model),
-             E1: () => iB(hH, AH)
-           }), (0, SH.C)(vH, AH.id, HH.mX.yN(), void 0)
+             MZ: YB.MZ,
+             dp: null !== (lB = null !== (pB = YB.dp) && void 0 !== pB ? pB : GB.dp) && void 0 !== lB ? lB : null,
+             PZ: null !== (qB = null !== (ZB = YB.PZ) && void 0 !== ZB ? ZB : GB.PZ) && void 0 !== qB ? qB : null,
+             Kp: null !== (NB = YB.Kp) && void 0 !== NB ? NB : GB.Kp,
+             jF: uO(WB, null !== (RB = YB.model) && void 0 !== RB ? RB : oB.model),
+             E_: () => sO(oB, YB)
+           }), (0, QB.G)(WB, YB.id, BB.UP.JF(), void 0)
```

#### 2895. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21701` → after: `L21365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21365) · [Before (L21701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21701)

```diff
-         alpha: KB.l
+         alpha: FO.o
```

#### 2896. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21706` → after: `L21370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21370) · [Before (L21706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21706)

```diff
-         mX: BH
+         UP: OB
```

#### 2897. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21708-L21712` → after: `L21372-L21376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21372-L21376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21372-L21376) · [Before (L21708-L21712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21708-L21712)

```diff
-         NQ: LH
-       } = BH, AH = (0, OH.n)(BH, "ezBridgeGhost", (0, bH.d)({
-         width: KB.d,
-         height: KB.d,
-         depth: KB.d
+         eq: GB
+       } = OB, YB = (0, UB.q)(OB, "ezBridgeGhost", (0, fB.b)({
+         width: FO.f,
+         height: FO.f,
+         depth: FO.f
```

#### 2898. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21714` → after: `L21378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21378) · [Before (L21714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21714)

```diff
-         ...lB.c,
+         ...IO.d,
```

#### 2899. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21717-L21718` → after: `L21381-L21382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21381-L21382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21381-L21382) · [Before (L21717-L21718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21717-L21718)

```diff
-         transparencyMode: fB.o.alphaBlend,
-         alpha: KB.g,
+         transparencyMode: mO.s.alphaBlend,
+         alpha: FO.j,
```

#### 2900. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21722` → after: `L21386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21386) · [Before (L21722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21722)

```diff
-       AH.material = (0, vH.b)({
+       YB.material = (0, WB.c)({
```

#### 2901. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21724` → after: `L21388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21388) · [Before (L21724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21724)

```diff
-         NQ: LH,
+         eq: GB,
```

#### 2902. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21728` → after: `L21392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21392) · [Before (L21728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21728)

```diff
-       const SH = (0, OH.n)(BH, "ezBridgeGhostOutline", (0, iH.c)((0, KB.c)().map((HH => {
+       const QB = (0, UB.q)(OB, "ezBridgeGhostOutline", (0, sB.e)((0, FO.d)().map((BB => {
```

#### 2903. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21730` → after: `L21394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21394) · [Before (L21730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21730)

```diff
-         return [(0, bH.d)({
+         return [(0, fB.b)({
```

#### 2904. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21736` → after: `L21400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21400) · [Before (L21736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21736)

```diff
-       return SH.jQ = !1, SH.fu = !0, SH.cu = !0, SH.material = (0, vH.b)({
+       return QB.bq = !1, QB.rp = !0, QB.Ep = !0, QB.material = (0, WB.c)({
```

#### 2905. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21738` → after: `L21402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21402) · [Before (L21738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21738)

```diff
-         NQ: LH,
+         eq: GB,
```

#### 2906. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21740` → after: `L21404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21404) · [Before (L21740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21740)

```diff
-       }).mirror, SH.parent = AH, BH.FQ(SH), AH.jQ = !1, AH.fu = !0, AH.cu = !0, BH.FQ(AH), AH.vI(!1), AH
+       }).mirror, QB.parent = YB, OB.Hq(QB), YB.bq = !1, YB.rp = !0, YB.Ep = !0, OB.Hq(YB), YB.Zk(!1), YB
```

#### 2907. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21742` → after: `L21406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21406) · [Before (L21742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21742)

```diff
-     const FB = wB(xH.j),
+     const hO = eO(RB.i),
```

#### 2908. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21758-L21759` → after: `L21422-L21423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21422-L21423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21422-L21423) · [Before (L21758-L21759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21758-L21759)

```diff
-                 const hH = fH(`${BH.name}BlkMdl${AH<2?1:2}`);
-                 return hH.jQ = !1, hH.rotation.set(...rH), hH.position.set(...SH), hH.bakeCurrentTransformIntoVertices(), hH.material = LH, hH
+                 const oB = mB(`${OB.name}BlkMdl${YB<2?1:2}`);
+                 return oB.bq = !1, oB.rotation.set(...DB), oB.position.set(...QB), oB.bakeCurrentTransformIntoVertices(), oB.material = GB, oB
```

#### 2909. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21761-L21762` → after: `L21425-L21426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21425-L21426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21425-L21426) · [Before (L21761-L21762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21761-L21762)

```diff
-               rH = (0, OH.k)(AH, !1, !1);
-             return rH.jQ = !1, rH
+               DB = (0, UB.o)(YB, !1, !1);
+             return DB.bq = !1, DB
```

#### 2910. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21773` → after: `L21437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21437) · [Before (L21773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21773)

```diff
-             const LH = (0, WH.b)().getMetaInfo(BH).metaStr;
+             const GB = (0, ZB.d)().getMetaInfo(OB).metaStr;
```

#### 2911. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21780-L21781` → after: `L21444-L21445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21444-L21445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21444-L21445) · [Before (L21780-L21781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21780-L21781)

```diff
-             const LH = (0, WH.b)().getMetaInfo(BH);
-             HH.rotation.y = (0, dH.l)(LH.rot, LH.stairsCorner)
+             const GB = (0, ZB.d)().getMetaInfo(OB);
+             BB.rotation.y = (0, bB.u)(GB.rot, GB.stairsCorner)
```

#### 2912. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21786` → after: `L21450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21450) · [Before (L21786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21786)

```diff
-             (0, kH.d)(HH);
+             (0, kB.c)(BB);
```

#### 2913. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21794` → after: `L21458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21458) · [Before (L21794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21794)

```diff
-             (0, kH.d)(HH);
+             (0, kB.c)(BB);
```

#### 2914. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21797` → after: `L21461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21461) · [Before (L21797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21797)

```diff
-               MB ??= tB(HH, GB.b, uB);
+               NO ??= jO(BB, zO.e, pO);
```

#### 2915. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21799` → after: `L21463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21463) · [Before (L21799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21799)

```diff
-                 AH = (0, GB.r)(BH) ? LH.gate : LH.top,
+                 YB = (0, zO.x)(OB) ? GB.gate : GB.top,
```

#### 2916. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21805` → after: `L21469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21469) · [Before (L21805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21805)

```diff
-                 of GB.e) {
+                 of zO.i) {
```

#### 2917. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21807` → after: `L21471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21471) · [Before (L21807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21807)

```diff
-                 rH.set(LH, (() => CB(HH, BH, `${BH.name}|${LH}FenceGateModel`, WB(AH, SH, hH))))
+                 DB.set(GB, (() => JO(BB, OB, `${OB.name}|${GB}FenceGateModel`, ZO(YB, QB, oB))))
```

#### 2918. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21817` → after: `L21481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21481) · [Before (L21817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21817)

```diff
-             (0, WH.b)().getMetaInfo(BH).halfblockPlacement === DH.c.top && (HH.rotation.x = Math.PI)
+             (0, ZB.d)().getMetaInfo(OB).halfblockPlacement === aB.d.top && (BB.rotation.x = Math.PI)
```

#### 2919. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21825-L21828` → after: `L21489-L21492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21489-L21492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21489-L21492) · [Before (L21825-L21828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21825-L21828)

```diff
-               SH = zH.g[BH].name,
-               hH = null !== (LH = SH.split("|")[2]) && void 0 !== LH ? LH : "rot1",
-               tH = "open" === (null !== (AH = SH.split("|")[3]) && void 0 !== AH ? AH : "closed");
-             "rot1" === hH && tH ? (HH.position.x += rH, HH.rotation.y += 3 * Math.PI / 2) : "rot1" !== hH || tH ? "rot2" === hH && tH ? HH.position.z -= rH : "rot2" !== hH || tH ? "rot3" === hH && tH ? (HH.position.x -= rH, HH.rotation.y += Math.PI / 2) : "rot3" !== hH || tH ? "r … [truncated]
+               QB = yB.h[OB].name,
+               oB = null !== (GB = QB.split("|")[2]) && void 0 !== GB ? GB : "rot1",
+               jB = "open" === (null !== (YB = QB.split("|")[3]) && void 0 !== YB ? YB : "closed");
+             "rot1" === oB && jB ? (BB.position.x += DB, BB.rotation.y += 3 * Math.PI / 2) : "rot1" !== oB || jB ? "rot2" === oB && jB ? BB.position.z -= DB : "rot2" !== oB || jB ? "rot3" === oB && jB ? (BB.position.x -= DB, BB.rotation.y += Math.PI / 2) : "rot3" !== oB || jB ? "r … [truncated]
```

#### 2920. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21835-L21836` → after: `L21499-L21500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21499-L21500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21499-L21500) · [Before (L21835-L21836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21835-L21836)

```diff
-             const AH = zH.g[BH].name,
-               rH = "open" === (null !== (LH = AH.split("|")[3]) && void 0 !== LH ? LH : "closed"),
+             const YB = yB.h[OB].name,
+               DB = "open" === (null !== (GB = YB.split("|")[3]) && void 0 !== GB ? GB : "closed"),
```

#### 2921. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21840-L21841` → after: `L21504-L21505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21504-L21505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L21504-L21505) · [Before (L21840-L21841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L21840-L21841)

```diff
-               const BH = null !== (hH = AH.split("|")[2]) && void 0 !== hH ? hH : "rot1";
-               "rot4" === BH ? (HH.position.x += SH, HH.rotation.y += 3 * Math.PI / 2) : "rot1" === BH ? HH.position.z -= SH : "rot2" === BH ? (HH.position.x -= SH, HH.rotation.y += Math.PI / 2) : "rot3" === BH && (HH.position.z += SH, HH.rotation.y += Math.PI)
+               const OB = null !== (oB = YB.split("|")[2]) && void 0 !== oB ? oB : "rot1";
+               "rot4" === OB ? (BB.position.x += QB, BB.rotation.y += 3 * Math.PI / 2) : "rot1" === OB ? BB.position.z -= QB : "rot2" === OB ? (BB.position.x -= QB, BB.rotation.y += Math.PI / 2) : "rot3" === OB && (BB.position.z += QB, BB.rotation.y += Math.PI)
```
