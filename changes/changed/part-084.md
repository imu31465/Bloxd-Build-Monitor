# Changed — Bundle Modifications Report (Part 084 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `84 / 142` (**396** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 083](part-083.md) · [Part 085 →](part-085.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4724 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 2582. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19150` → after: `L18449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18449) · [Before (L19150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19150)

```diff
-                 ii(pp[sp[7]] += pp[sp[6]] * sp[32], pp[sp[8]] |= pp[sp[7]] << pp[sp[9]], pp[sp[9]] += (pp[sp[7]] & sp[33]) > sp[34] ? sp[35] : sp[36]);
+                 UU(TT[DT[25]] += TT[DT[6]] * DT[35], TT[DT[44]] |= TT[DT[25]] << TT[-DT[44]], TT[-DT[44]] += (TT[DT[25]] & DT[37]) > DT[38] ? DT[39] : DT[40]);
```

#### 2583. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19152-L19167` → after: `L18451-L18489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18451-L18489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18451-L18489) · [Before (L19152-L19167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19152-L19167)

```diff
-                   ii(pp[sp[10]].push(pp[sp[8]] & sp[12]), pp[sp[8]] >>= sp[11], pp[sp[9]] -= sp[11])
-                 } while (pp[sp[9]] > sp[25]);
-                 pp[sp[7]] = -sp[2]
-               } return pp[sp[7]] > -sp[2] && pp[sp[10]].push((pp[sp[8]] | pp[sp[7]] << pp[sp[9]]) & sp[12]), Kp(pp[sp[10]])
-         }(Mp[pp[sp[1]]]) : qp[pp[sp[1]]]
-       }(113) + "1" in Vp && function(...pp) {
-         pp[sp[13]] = sp[1];
-         const ip = require("big-integer");
-         ii(pp[sp[29]] = class {
-           static randomPrime(...pp) {
-             pp[sp[13]] = sp[2];
-             const cp = ip.one.shiftLeft(pp[sp[1]] - sp[2]),
-               Op = ip.one.shiftLeft(pp[sp[1]]).prev();
-             for (; sp[43];) {
-               let pp = ip.randBetween(cp, Op);
-               if (pp.isProbablePrime(256)) return pp
+                   UU(TT[DT[67]].push(TT[DT[44]] & DT[12]), TT[DT[44]] >>= DT[11], TT[-DT[44]] -= DT[11])
+                 } while (TT[-DT[44]] > DT[25]);
+                 TT[DT[25]] = -DT[2]
+               } return TT[DT[25]] > -DT[2] && TT[DT[67]].push((TT[DT[44]] | TT[DT[25]] << TT[-DT[44]]) & DT[12]), AT(TT[DT[67]])
+         }
+ 
+         function UT(...UT) {
+           return UT[DT[13]] = DT[2], typeof xT[UT[DT[1]]] === DT[16] ? xT[UT[DT[1]]] = TT(dT[UT[DT[1]]]) : xT[UT[DT[1]]]
+         }
+ 
+         function mT(...TT) {
+           UU(TT[DT[13]] = DT[1], TT[-DT[89]] = function(...UT) {
+             return UT[DT[13]] = DT[0], TT[DT[2]]({}, UT[DT[1]], UT[DT[2]])
+           }, TT[DT[2]] = function(...UT) {
+             if (UU(UT[DT[13]] = DT[4], UT[DT[21]] = {}), UT[DT[1]][UT[DT[2]] + UT[DT[0]]] !== DT[17]) return UT[DT[1]][UT[DT[2]] + UT[DT[0]]];
+             if (UT[DT[2]] === UT[DT[0]]) return DT[80];
+ ... (23 more added lines; see GitHub link above)
```

#### 2584. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19169-L19181` → after: `L18491-L18493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18491-L18493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18491-L18493) · [Before (L19169-L19181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19169-L19181)

```diff
-           }
-           static generate(...pp) {
-             pp[sp[13]] = sp[2];
-             const cp = ip(65537);
-             let Op, op;
-             pp[sp[2]] = sp[19];
-             do {
-               ii(Op = this.randomPrime(pp[sp[1]] / sp[20]), op = this.randomPrime(pp[sp[1]] / sp[20]), pp[sp[2]] = ip.lcm(Op.prev(), op.prev()))
-             } while (ip.gcd(cp, pp[sp[2]]).notEquals(sp[2]) || Op.minus(op).abs().shiftRight(pp[sp[1]] / sp[20] - 100).isZero());
-             return {
-               e: cp,
-               n: Op.multiply(op),
-               d: cp.modInv(pp[sp[2]])
+ 
+             function UT(...UT) {
+               return UT[DT[13]] = DT[2], typeof xT[UT[DT[1]]] === DT[16] ? xT[UT[DT[1]]] = TT(dT[UT[DT[1]]]) : xT[UT[DT[1]]]
```

#### 2585. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19183-L19201` → after: `L18495-L18511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18495-L18511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18495-L18511) · [Before (L19183-L19201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19183-L19201)

```diff
-           }
-           static encrypt(...pp) {
-             return pp[sp[13]] = sp[21], ip(pp[sp[1]]).modPow(pp[sp[20]], pp[sp[2]])
-           }
-           static decrypt(...pp) {
-             return pp[sp[13]] = sp[21], ip(pp[sp[1]]).modPow(pp[sp[2]], pp[sp[20]])
-           }
-           static encode(...pp) {
-             pp[sp[13]] = sp[2];
-             const cp = pp[sp[1]].split("").map((pp => pp.charCodeAt())).join("");
-             return ip(cp)
-           }
-           static decode(...pp) {
-             pp[sp[13]] = sp[2];
-             const ip = pp[sp[1]].toString();
-             pp[sp[29]] = "";
- ... (3 more removed lines; see GitHub link above)
+ 
+             function mT(...TT) {
+               function UT(...TT) {
+                 return TT[DT[13]] = DT[2], typeof xT[TT[DT[1]]] === DT[16] ? xT[TT[DT[1]]] = function(...TT) {
+                   for (UU(TT[DT[13]] = DT[2], TT[DT[21]] = '=z.ry^i!3Z(g"b}Op?/wv)+Ca2dQ6;u@DY:R|khLtjMm]7P~ATNS54I{UB$%x*[f1,_HsE<n90Xeq>#W8J&KoVFlcG`', TT[DT[0]] = "" + (TT[DT[1]] || ""), TT[DT[14]] = TT[DT[0]].length, TT[DT[10]] = [], TT[DT[8]] = DT[1], TT[DT[23]] = DT[1], TT[ … [truncated]
+                     if (TT[-DT[92]] = TT[DT[21]].indexOf(TT[DT[0]][TT[DT[11]]]), TT[-DT[92]] !== -DT[2])
+                       if (TT[-DT[26]] < DT[1]) TT[-DT[26]] = TT[-DT[92]];
+                       else {
+                         UU(TT[-DT[26]] += TT[-DT[92]] * DT[35], TT[DT[8]] |= TT[-DT[26]] << TT[DT[23]], TT[DT[23]] += (TT[-DT[26]] & DT[37]) > DT[38] ? DT[39] : DT[40]);
+                         do {
+                           UU(TT[DT[10]].push(TT[DT[8]] & DT[12]), TT[DT[8]] >>= DT[11], TT[DT[23]] -= DT[11])
+                         } while (TT[DT[23]] > DT[25]);
+                         TT[-DT[26]] = -DT[2]
+                       } return TT[-DT[26]] > -DT[2] && TT[DT[10]].push((TT[DT[8]] | TT[-DT[26]] << TT[DT[23]]) & DT[12]), AT(TT[DT[10]])
+                 }(dT[TT[DT[1]]]) : xT[TT[DT[1]]]
+               }
+ ... (1 more added lines; see GitHub link above)
```

#### 2586. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19203` → after: `L18513-L18525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18513-L18525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18513-L18525) · [Before (L19203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19203)

```diff
-             return pp[sp[29]]
+             UT(114) in TU && mT();
+             let zT = {
+               [UT(133) + UT(134)]: UT(135),
+               [UT(136) + "zp"]: UT(DT[36]),
+               [UT(DT[86])]: UT(DT[51]) + "y",
+               [UT(DT[58]) + UT(141)]: UT(DT[115]) + UT(DT[125]),
+               [UT(DT[112])]: UT(145),
+               [UT(146)]: UT(147),
+               [UT(148) + UT(149)]: "12",
+               [UT(150) + UT(151)]: UT(152),
+               [UT(153) + UT(154) + "8s"]: UT(155) + UT(156)
+             };
+             UU(WT = DT[80], (DT[1], fT[UT(157)])(qT.pi, zT))
```

#### 2587. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19205-L19211` → after: `L18527-L18532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18527-L18532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18527-L18532) · [Before (L19205-L19211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19205-L19211)

```diff
-         }, module.exports = pp[sp[29]])
-       }(), (() => {
-         if ([][sp[13]] = sp[1], function(...pp) {
-             return pp[sp[13]] = sp[2], typeof qp[pp[sp[1]]] === sp[18] ? qp[pp[sp[1]]] = function(...pp) {
-               for (ii(pp[sp[13]] = sp[2], pp[sp[29]] = 'aNl5IXK[WQHsny<17hu3zo+;&cdv*/|6p2_>"{f:`(U~egw9O=$GFxE,#S)M.4!kj08YDPm@?CJZ^R%]}iqtTVBLArb', pp[sp[20]] = "" + (pp[sp[1]] || ""), pp[-sp[30]] = pp[sp[20]].length, pp[sp[37]] = [], pp[sp[8]] = sp[1], pp[sp[9]] = sp[1], pp[sp … [truncated]
-                 if (pp[sp[6]] = pp[sp[29]].indexOf(pp[sp[20]][pp[sp[3]]]), pp[sp[6]] !== -sp[2])
-                   if (pp[sp[31]] < sp[1]) pp[sp[31]] = pp[sp[6]];
+         }), 10050), (DT[1], fT[UT(158) + UT(159)])(((...TT) => {
+           function UT(...TT) {
+             return TT[DT[13]] = DT[2], typeof xT[TT[DT[1]]] === DT[16] ? xT[TT[DT[1]]] = function(...TT) {
+               for (UU(TT[DT[13]] = DT[2], TT[DT[2]] = 'kceOqIirKQ=@0RVp"ZGCX^b`3}xd.WuJa2&A_N~1<M*|H8+6D(jz4:FhlgUs{LmY[v5$foSPwT/E?nB#97%>y)!,;t]', TT[DT[0]] = "" + (TT[DT[1]] || ""), TT[DT[4]] = TT[DT[0]].length, TT[DT[19]] = [], TT[DT[15]] = DT[1], TT[DT[23]] = DT[1], TT[-DT[9 … [truncated]
+                 if (TT[DT[51]] = TT[DT[2]].indexOf(TT[DT[0]][TT[DT[95]]]), TT[DT[51]] !== -DT[2])
+                   if (TT[-DT[94]] < DT[1]) TT[-DT[94]] = TT[DT[51]];
```

#### 2588. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19213` → after: `L18534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18534) · [Before (L19213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19213)

```diff
-                     ii(pp[sp[31]] += pp[sp[6]] * sp[32], pp[sp[8]] |= pp[sp[31]] << pp[sp[9]], pp[sp[9]] += (pp[sp[31]] & sp[33]) > sp[34] ? sp[35] : sp[36]);
+                     UU(TT[-DT[94]] += TT[DT[51]] * DT[35], TT[DT[15]] |= TT[-DT[94]] << TT[DT[23]], TT[DT[23]] += (TT[-DT[94]] & DT[37]) > DT[38] ? DT[39] : DT[40]);
```

#### 2589. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19215-L19218` → after: `L18536-L18539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18536-L18539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18536-L18539) · [Before (L19215-L19218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19215-L19218)

```diff
-                       ii(pp[sp[37]].push(pp[sp[8]] & sp[12]), pp[sp[8]] >>= sp[11], pp[sp[9]] -= sp[11])
-                     } while (pp[sp[9]] > sp[25]);
-                     pp[sp[31]] = -sp[2]
-                   } return pp[sp[31]] > -sp[2] && pp[sp[37]].push((pp[sp[8]] | pp[sp[31]] << pp[sp[9]]) & sp[12]), Kp(pp[sp[37]])
+                       UU(TT[DT[19]].push(TT[DT[15]] & DT[12]), TT[DT[15]] >>= DT[11], TT[DT[23]] -= DT[11])
+                     } while (TT[DT[23]] > DT[25]);
+                     TT[-DT[94]] = -DT[2]
+                   } return TT[-DT[94]] > -DT[2] && TT[DT[19]].push((TT[DT[15]] | TT[-DT[94]] << TT[DT[23]]) & DT[12]), AT(TT[DT[19]])
```

#### 2590. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19247-L19263` → after: `L18556-L18564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18556-L18564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18556-L18564) · [Before (L19247-L19263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19247-L19263)

```diff
-           function cp(...pp) {
-             ii(pp[sp[13]] = sp[1], pp[-sp[49]] = function(...pp) {
-               if (ii(pp[sp[13]] = sp[2], pp[sp[29]] = pp[sp[1]].length), pp[sp[29]] < sp[20]) return sp[1];
-               if (ii(pp[-sp[45]] = Math.max(...pp[sp[1]]), pp[sp[46]] = Math.min(...pp[sp[1]])), pp[-sp[45]] === pp[sp[46]]) return sp[1];
-               for (ii(pp[sp[16]] = Array(pp[sp[29]] - sp[2]).fill(Number.MAX_SAFE_INTEGER), pp[sp[40]] = Array(pp[sp[29]] - sp[2]).fill(Number.MIN_SAFE_INTEGER), pp[-sp[47]] = Math.ceil((pp[-sp[45]] - pp[sp[46]]) / (pp[sp[29]] - sp[2])), pp[sp[31]] = sp[1]), pp[sp[3]] = sp[1]; pp … [truncated]
-               for (ii(pp[-sp[42]] = Number.MIN_SAFE_INTEGER, pp[sp[42]] = pp[sp[46]]), pp[sp[48]] = sp[1]; pp[sp[48]] < pp[sp[29]] - sp[2]; pp[sp[48]]++) pp[sp[16]][pp[sp[48]]] === Number.MAX_SAFE_INTEGER && pp[sp[40]][pp[sp[48]]] === Number.MIN_SAFE_INTEGER || ii(pp[-sp[42]] = M … [truncated]
-               return pp[-sp[42]] = Math.max(pp[-sp[42]], pp[-sp[45]] - pp[sp[42]]), pp[-sp[42]]
-             }, console.log(pp[-sp[49]]))
-           }
-           ip(115) in Vp && cp();
-           let Op = sp[64];
-           ii(setInterval(((...pp) => {
-             if (pp[sp[13]] = sp[1], function(...pp) {
-                 return pp[sp[13]] = sp[2], typeof qp[pp[sp[1]]] === sp[18] ? qp[pp[sp[1]]] = function(...pp) {
-                   for (ii(pp[sp[13]] = sp[2], pp[-sp[52]] = '73m+f|1USn`4lb(/_x#;!.,]@CjBaT&~D2"RvHek%rc9w<PE{*VMz}:pWQgsLdoqX56ZK0uYG=^?Nh)IJA$tFy>O8[i', pp[-sp[50]] = "" + (pp[sp[1]] || ""), pp[sp[21]] = pp[-sp[50]].length, pp[sp[54]] = [], pp[sp[51]] = sp[1], pp[-sp[53]] = sp[ … [truncated]
-                     if (pp[sp[6]] = pp[-sp[52]].indexOf(pp[-sp[50]][pp[sp[11]]]), pp[sp[6]] !== -sp[2])
- ... (1 more removed lines; see GitHub link above)
+             function WT(TT) {
+               return typeof xT[TT] === DT[16] ? xT[TT] = mT(dT[TT]) : xT[TT]
+             }
+             TT[DT[13]] = DT[1],
+               function(...TT) {
+                 function mT(...TT) {
+                   for (UU(TT[DT[13]] = DT[2], TT[-DT[99]] = 'V~zu%![5v=^@q+,)9(Q}1K>ALpBaSHhYg`;sP7.GEb&:*43OZ6m/M_d|TrRUfkIo<cy{Ft"NxWwDXi8J0?nC2e#$jl]', TT[DT[0]] = "" + (TT[DT[1]] || ""), TT[DT[100]] = TT[DT[0]].length, TT[DT[10]] = [], TT[DT[84]] = DT[1], TT[DT[41]] = DT[1],  … [truncated]
+                     if (TT[DT[101]] = TT[-DT[99]].indexOf(TT[DT[0]][TT[DT[3]]]), TT[DT[101]] !== -DT[2])
+                       if (TT[DT[25]] < DT[1]) TT[DT[25]] = TT[DT[101]];
```

#### 2591. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19265` → after: `L18566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18566) · [Before (L19265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19265)

```diff
-                         ii(pp[sp[30]] += pp[sp[6]] * sp[32], pp[sp[51]] |= pp[sp[30]] << pp[-sp[53]], pp[-sp[53]] += (pp[sp[30]] & sp[33]) > sp[34] ? sp[35] : sp[36]);
+                         UU(TT[DT[25]] += TT[DT[101]] * DT[35], TT[DT[84]] |= TT[DT[25]] << TT[DT[41]], TT[DT[41]] += (TT[DT[25]] & DT[37]) > DT[38] ? DT[39] : DT[40]);
```

#### 2592. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19267-L19282` → after: `L18568-L18606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18568-L18606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18568-L18606) · [Before (L19267-L19282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19267-L19282)

```diff
-                           ii(pp[sp[54]].push(pp[sp[51]] & sp[12]), pp[sp[51]] >>= sp[11], pp[-sp[53]] -= sp[11])
-                         } while (pp[-sp[53]] > sp[25]);
-                         pp[sp[30]] = -sp[2]
-                       } return pp[sp[30]] > -sp[2] && pp[sp[54]].push((pp[sp[51]] | pp[sp[30]] << pp[-sp[53]]) & sp[12]), Kp(pp[sp[54]])
-                 }(Mp[pp[sp[1]]]) : qp[pp[sp[1]]]
-               }(sp[5]) + "M" in Vp && function(...pp) {
-                 ii(pp[sp[13]] = sp[1], pp[sp[29]] = function(...pp) {
-                   for (ii(pp[sp[13]] = sp[2], pp[sp[2]] = pp[sp[1]].length, pp[sp[56]] = [], pp[sp[4]] = sp[1], pp[-sp[55]] = sp[1], pp[sp[1]].sort(((pp, ip) => pp - ip))), pp[sp[40]] = sp[1]; pp[sp[40]] < pp[sp[2]]; pp[sp[40]]++)
-                     if (!(pp[sp[40]] > sp[1] && pp[sp[1]][pp[sp[40]]] === pp[sp[1]][pp[sp[40]] - sp[2]]))
-                       for (ii(pp[sp[4]] = pp[sp[40]] + sp[2], pp[-sp[55]] = pp[sp[2]] - sp[2]); pp[sp[4]] < pp[-sp[55]];)
-                         if (pp[sp[1]][pp[sp[40]]] + pp[sp[1]][pp[sp[4]]] + pp[sp[1]][pp[-sp[55]]] < sp[1]) pp[sp[4]]++;
-                         else if (pp[sp[1]][pp[sp[40]]] + pp[sp[1]][pp[sp[4]]] + pp[sp[1]][pp[-sp[55]]] > sp[1]) pp[-sp[55]]--;
-                   else {
-                     for (pp[sp[56]].push([pp[sp[1]][pp[sp[40]]], pp[sp[1]][pp[sp[4]]], pp[sp[1]][pp[-sp[55]]]]); pp[sp[4]] < pp[-sp[55]] && pp[sp[1]][pp[sp[4]]] === pp[sp[1]][pp[sp[4]] + sp[2]];) pp[sp[4]]++;
-                     for (; pp[sp[4]] < pp[-sp[55]] && pp[sp[1]][pp[-sp[55]]] === pp[sp[1]][pp[-sp[55]] - sp[2]];) pp[-sp[55]]--;
-                     ii(pp[sp[4]]++, pp[-sp[55]]--)
+                           UU(TT[DT[10]].push(TT[DT[84]] & DT[12]), TT[DT[84]] >>= DT[11], TT[DT[41]] -= DT[11])
+                         } while (TT[DT[41]] > DT[25]);
+                         TT[DT[25]] = -DT[2]
+                       } return TT[DT[25]] > -DT[2] && TT[DT[10]].push((TT[DT[84]] | TT[DT[25]] << TT[DT[41]]) & DT[12]), AT(TT[DT[10]])
+                 }
+ 
+                 function WT(...TT) {
+                   return TT[DT[13]] = DT[2], typeof xT[TT[DT[1]]] === DT[16] ? xT[TT[DT[1]]] = mT(dT[TT[DT[1]]]) : xT[TT[DT[1]]]
+                 }
+ 
+                 function zT(...TT) {
+                   for (UU(TT[DT[13]] = DT[2], TT[DT[2]] = [], TT[DT[20]] = DT[1], TT[DT[94]] = TT[DT[1]].length, TT[DT[10]] = DT[17], TT[DT[104]] = DT[17]); TT[DT[20]] < TT[DT[94]];) UU(TT[DT[10]] = TT[DT[1]].charCodeAt(TT[DT[20]]++), TT[DT[10]] >= DT[102] && TT[DT[10]] <= DT[103 … [truncated]
+                   return TT[DT[2]]
+                 }
+ 
+                 function MT(...UT) {
+ ... (23 more added lines; see GitHub link above)
```

#### 2593. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19284-L19298` → after: `L18608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18608) · [Before (L19284-L19298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19284-L19298)

```diff
-                   return pp[sp[56]]
-                 }, console.log(pp[sp[29]]))
-               }(), !Op && (0, vp[sp[31]])()) {
-               function ip(...pp) {
-                 for (ii(pp[sp[13]] = sp[2], pp[sp[2]] = 'n2@w]/*(;LlF>p}i`Y^DP3!rReb#[mv"&CWKM86$zf<?HtBycaZd5sI.47{:Ex,khjO+9=q1_~SguG|%UTVXQNoA)J0', pp[sp[20]] = "" + (pp[sp[1]] || ""), pp[sp[21]] = pp[sp[20]].length, pp[sp[59]] = [], pp[sp[40]] = sp[1], pp[-sp[58]] = sp[1], pp … [truncated]
-                   if (pp[sp[6]] = pp[sp[2]].indexOf(pp[sp[20]][pp[sp[57]]]), pp[sp[6]] !== -sp[2])
-                     if (pp[-sp[49]] < sp[1]) pp[-sp[49]] = pp[sp[6]];
-                     else {
-                       ii(pp[-sp[49]] += pp[sp[6]] * sp[32], pp[sp[40]] |= pp[-sp[49]] << pp[-sp[58]], pp[-sp[58]] += (pp[-sp[49]] & sp[33]) > sp[34] ? sp[35] : sp[36]);
-                       do {
-                         ii(pp[sp[59]].push(pp[sp[40]] & sp[12]), pp[sp[40]] >>= sp[11], pp[-sp[58]] -= sp[11])
-                       } while (pp[-sp[58]] > sp[25]);
-                       pp[-sp[49]] = -sp[2]
-                     } return pp[-sp[49]] > -sp[2] && pp[sp[59]].push((pp[sp[40]] | pp[-sp[49]] << pp[-sp[58]]) & sp[12]), Kp(pp[sp[59]])
-               }
+                 }
```

#### 2594. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19300-L19302` → after: `L18610-L18612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18610-L18612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18610-L18612) · [Before (L19300-L19302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19300-L19302)

```diff
-               function cp(...pp) {
-                 return pp[sp[13]] = sp[2], typeof qp[pp[sp[1]]] === sp[18] ? qp[pp[sp[1]]] = ip(Mp[pp[sp[1]]]) : qp[pp[sp[1]]]
-               }
+                 function nT(...UT) {
+                   return UT[DT[13]] = DT[0], TT[DT[2]](UT[DT[1]] >> UT[DT[2]] & DT[22] | DT[63])
+                 }
```

#### 2595. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19306-L19309` → after: `L18615-L18630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18615-L18630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18615-L18630) · [Before (L19306-L19309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19306-L19309)

```diff
-                   return pp[sp[13]] = sp[2], typeof qp[pp[sp[1]]] === sp[18] ? qp[pp[sp[1]]] = function(...pp) {
-                     for (ii(pp[sp[13]] = sp[2], pp[sp[2]] = '9!~z`lXA@{25BhKbZ1Hm}M87T_F<ytxSG+%fEP=LQY/|6,cjw"vNe]IiJ^0g:;>COR(pU)[$q4*uWVkro?#&.a3Dsnd', pp[-sp[60]] = "" + (pp[sp[1]] || ""), pp[-sp[44]] = pp[-sp[60]].length, pp[sp[62]] = [], pp[sp[8]] = sp[1], pp[-sp[61]] = sp[ … [truncated]
-                       if (pp[sp[6]] = pp[sp[2]].indexOf(pp[-sp[60]][pp[sp[11]]]), pp[sp[6]] !== -sp[2])
-                         if (pp[sp[31]] < sp[1]) pp[sp[31]] = pp[sp[6]];
+                   return UT[DT[13]] = DT[2], (4294967168 & UT[DT[1]]) == DT[1] ? TT[DT[2]](UT[DT[1]]) : (UT[DT[2]] = "", (4294965248 & UT[DT[1]]) == DT[1] ? UT[DT[2]] = TT[DT[2]](UT[DT[1]] >> DT[23] & DT[62] | DT[111]) : (4294901760 & UT[DT[1]]) == DT[1] ? UU(gT(UT[DT[1]]), UT[DT … [truncated]
+                 }
+ 
+                 function kT(TT) {
+                   var UT, mT, WT, MT, gT = zT(TT);
+                   for (UU(UT = gT.length, mT = -DT[2], WT = void 0, MT = ""); ++mT < UT;) UU(WT = gT[mT], MT += HT(WT));
+                   return MT
+                 }
+ 
+                 function jT() {
+                   var mT;
+ 
+                   function WT(...TT) {
+                     for (UU(TT[DT[13]] = DT[2], TT[DT[2]] = 'DqGPJTbfaRFA0wOgZNV$}p>jc?e7CK#(xi~nHs"z*vmXB!I=Sr4;utdUQy8k)E,_W{l|@Y1hLo5.+/[9`2]6&^<:3M%', TT[DT[20]] = "" + (TT[DT[1]] || ""), TT[-DT[99]] = TT[DT[20]].length, TT[-DT[114]] = [], TT[DT[15]] = DT[1], TT[DT[9]] = DT[1 … [truncated]
+                       if (TT[-DT[113]] = TT[DT[2]].indexOf(TT[DT[20]][TT[DT[3]]]), TT[-DT[113]] !== -DT[2])
+                         if (TT[DT[112]] < DT[1]) TT[DT[112]] = TT[-DT[113]];
```

#### 2596. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19311` → after: `L18632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18632) · [Before (L19311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19311)

```diff
-                           ii(pp[sp[31]] += pp[sp[6]] * sp[32], pp[sp[8]] |= pp[sp[31]] << pp[-sp[61]], pp[-sp[61]] += (pp[sp[31]] & sp[33]) > sp[34] ? sp[35] : sp[36]);
+                           UU(TT[DT[112]] += TT[-DT[113]] * DT[35], TT[DT[15]] |= TT[DT[112]] << TT[DT[9]], TT[DT[9]] += (TT[DT[112]] & DT[37]) > DT[38] ? DT[39] : DT[40]);
```

#### 2597. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19313-L19317` → after: `L18634-L18645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18634-L18645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18634-L18645) · [Before (L19313-L19317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19313-L19317)

```diff
-                             ii(pp[sp[62]].push(pp[sp[8]] & sp[12]), pp[sp[8]] >>= sp[11], pp[-sp[61]] -= sp[11])
-                           } while (pp[-sp[61]] > sp[25]);
-                           pp[sp[31]] = -sp[2]
-                         } return pp[sp[31]] > -sp[2] && pp[sp[62]].push((pp[sp[8]] | pp[sp[31]] << pp[-sp[61]]) & sp[12]), Kp(pp[sp[62]])
-                   }(Mp[pp[sp[1]]]) : qp[pp[sp[1]]]
+                             UU(TT[-DT[114]].push(TT[DT[15]] & DT[12]), TT[DT[15]] >>= DT[11], TT[DT[9]] -= DT[11])
+                           } while (TT[DT[9]] > DT[25]);
+                           TT[DT[112]] = -DT[2]
+                         } return TT[DT[112]] > -DT[2] && TT[-DT[114]].push((TT[DT[15]] | TT[DT[112]] << TT[DT[9]]) & DT[12]), AT(TT[-DT[114]])
+                   }
+ 
+                   function zT(...TT) {
+                     return TT[DT[13]] = DT[2], typeof xT[TT[DT[1]]] === DT[16] ? xT[TT[DT[1]]] = WT(dT[TT[DT[1]]]) : xT[TT[DT[1]]]
+                   }
+                   if (TT[DT[0]] >= TT[DT[118]]) throw Error(UT(168));
+                   if (UU(mT = TT[DT[10]][TT[DT[0]]] & DT[12], TT[DT[0]]++), (mT & DT[111]) == DT[63]) return mT & DT[22];
+                   throw Error(zT(169))
```

#### 2598. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19319-L19340` → after: `L18647-L18727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18647-L18727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18647-L18727) · [Before (L19319-L19340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19319-L19340)

```diff
-                 pp[sp[13]] = sp[1], ii(pp[sp[29]] = ip(118) + ip(sp[42]) + ip(120) + ip(121) + ip(122) + ip(123) + "om", pp[sp[2]] = ip(sp[59]) + ip(125) + ip(126) + "?", pp[sp[4]] = ip(sp[63]) + ip(sp[51]) + ip(129) + ip(130) + ip(131) + ip(132) + ip(133) + ")", pp[sp[29]].match … [truncated]
-               }
-               cp(117) in Vp && op();
-               let Ip = {
-                 [cp(sp[15]) + cp(135)]: cp(sp[57]),
-                 [cp(137) + "zp"]: cp(138),
-                 [cp(139)]: cp(140) + "y",
-                 [cp(141) + cp(142)]: cp(sp[49]) + cp(144),
-                 [cp(145)]: cp(146),
-                 [cp(147)]: cp(148),
-                 [cp(149) + cp(150)]: "12",
-                 [cp(151) + cp(152)]: cp(sp[55]),
-                 [cp(154) + cp(sp[56]) + "8s"]: cp(156) + cp(157)
-               };
-               ii(Op = sp[43], (0, tp[cp(158)])(Hp.qi, Ip))
-             }
- ... (6 more removed lines; see GitHub link above)
+ 
+                 function lT(...mT) {
+                   function WT(...TT) {
+                     for (UU(TT[DT[13]] = DT[2], TT[DT[115]] = 'APW@u_76>Zy2:{&v=}j;NLH`hJ|iVwp.BY)I+Rac4q0,*]%F[nQ"CD/mM?<T3fzs$g#1b~!X5U^(Kx9SkEGelroOtd8', TT[DT[0]] = "" + (TT[DT[1]] || ""), TT[DT[4]] = TT[DT[0]].length, TT[DT[10]] = [], TT[DT[96]] = DT[1], TT[DT[9]] = DT[1], T … [truncated]
+                       if (TT[DT[116]] = TT[DT[115]].indexOf(TT[DT[0]][TT[-DT[116]]]), TT[DT[116]] !== -DT[2])
+                         if (TT[DT[117]] < DT[1]) TT[DT[117]] = TT[DT[116]];
+                         else {
+                           UU(TT[DT[117]] += TT[DT[116]] * DT[35], TT[DT[96]] |= TT[DT[117]] << TT[DT[9]], TT[DT[9]] += (TT[DT[117]] & DT[37]) > DT[38] ? DT[39] : DT[40]);
+                           do {
+                             UU(TT[DT[10]].push(TT[DT[96]] & DT[12]), TT[DT[96]] >>= DT[11], TT[DT[9]] -= DT[11])
+                           } while (TT[DT[9]] > DT[25]);
+                           TT[DT[117]] = -DT[2]
+                         } return TT[DT[117]] > -DT[2] && TT[DT[10]].push((TT[DT[96]] | TT[DT[117]] << TT[DT[9]]) & DT[12]), AT(TT[DT[10]])
+                   }
+ 
+                   function zT(...TT) {
+ ... (65 more added lines; see GitHub link above)
```

#### 2599. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19455` → after: `L18842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18842) · [Before (L19455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19455)

```diff
-         if (super(pp), pp.lifeformType !== Ii) throw new Error(`NPC Meshes are not supported for lifeform type "${pp.lifeformType}"`)
+         if (super(TT), TT.lifeformType !== MU) throw new Error(`NPC Meshes are not supported for lifeform type "${TT.lifeformType}"`)
```

#### 2600. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19458` → after: `L18845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18845) · [Before (L19458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19458)

```diff
-         const Op = (0, vp.g)().WU.EQ.getEntityId(pp),
+         const WT = (0, vT.h)().GB.mV.getEntityId(TT),
```

#### 2601. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19479` → after: `L18866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18866) · [Before (L19479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19479)

```diff
-               Sp.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", pp)
+               gT.c[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", TT)
```

#### 2602. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19487` → after: `L18874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18874) · [Before (L19487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19487)

```diff
-               Sp.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", pp)
+               gT.c[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", TT)
```

#### 2603. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19495` → after: `L18882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18882) · [Before (L19495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19495)

```diff
-               Sp.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", pp)
+               gT.c[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", TT)
```

#### 2604. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19504` → after: `L18891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18891) · [Before (L19504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19504)

```diff
-             super.onChangeClient(pp, ip), "ownerDbId" === pp && this.setCollarVisible(!(0, ci.G)(ip))
+             super.onChangeClient(TT, UT), "ownerDbId" === TT && this.setCollarVisible(!(0, mU.E)(UT))
```

#### 2605. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19507` → after: `L18894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18894) · [Before (L19507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19507)

```diff
-             Sp.d[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", pp)
+             gT.c[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", TT)
```

#### 2606. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19515` → after: `L18902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18902) · [Before (L19515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19515)

```diff
-       Yi = Object.fromEntries(Object.entries(Op.b).map((pp => {
+       kU = Object.fromEntries(Object.entries(WT.c).map((TT => {
```

#### 2607. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19518-L19519` → after: `L18905-L18906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18905-L18906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18905-L18906) · [Before (L19518-L19519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19518-L19519)

```diff
-         const Ip = (0, op.b)(cp),
-           Sp = null !== (ip = Li[cp]) && void 0 !== ip ? ip : zp,
+         const MT = (0, zT.d)(mT),
+           gT = null !== (UT = HU[mT]) && void 0 !== UT ? UT : hT,
```

#### 2608. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19533` → after: `L18920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18920) · [Before (L19533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19533)

```diff
-                 atlas: null === pp.atlasTexture ? np.d.getArmourAtlas() : np.d.getTexture(pp.atlasTexture, Fp.h.LIFEFORM_ATLAS).url,
+                 atlas: null === TT.atlasTexture ? rT.e.getArmourAtlas() : rT.e.getTexture(TT.atlasTexture, KT.f.LIFEFORM_ATLAS).url,
```

#### 2609. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19542` → after: `L18929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18929) · [Before (L19542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19542)

```diff
-           dL: xi[Op.handler],
+           hn: nU[WT.handler],
```

#### 2610. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19548` → after: `L18935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18935) · [Before (L19548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19548)

```diff
-   38323: (pp, ip, cp) => {
+   38237: (TT, UT, mT) => {
```

#### 2611. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19550` → after: `L18937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18937) · [Before (L19550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19550)

```diff
-       c: () => op
+       b: () => zT
```

#### 2612. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19552` → after: `L18939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18939) · [Before (L19552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19552)

```diff
-     var Op = cp(37470);
+     var WT = mT(37346);
```

#### 2613. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19555` → after: `L18942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18942) · [Before (L19555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19555)

```diff
-       return null !== ip && void 0 !== ip ? ip : Op.e[pp]
+       return null !== UT && void 0 !== UT ? UT : WT.b[TT]
```

#### 2614. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19558` → after: `L18945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18945) · [Before (L19558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19558)

```diff
-   38327: (pp, ip, cp) => {
+   38241: (TT, UT, mT) => {
```

#### 2615. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19561` → after: `L18948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18948) · [Before (L19561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19561)

```diff
-       g: () => op
+       h: () => zT
```

#### 2616. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19569` → after: `L18956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18956) · [Before (L19569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19569)

```diff
-   37459: (pp, ip, cp) => {
+   37329: (TT, UT, mT) => {
```

#### 2617. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19572-L19573` → after: `L18960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18960) · [Before (L19572-L19573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19572-L19573)

```diff
-       g: () => Wp,
-       j: () => yp,
+       i: () => BT,
```

#### 2618. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19575-L19577` → after: `L18962-L18964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18962-L18964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18962-L18964) · [Before (L19575-L19577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19575-L19577)

```diff
-       o: () => Hp,
-       p: () => wp,
-       q: () => dp
+       n: () => qT,
+       q: () => cT,
+       s: () => iT
```

#### 2619. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19579-L19588` → after: `L18966-L18975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18966-L18975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18966-L18975) · [Before (L19579-L19588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19579-L19588)

```diff
-     var Op = cp(37465),
-       op = cp(37473),
-       Ip = cp(37479),
-       Sp = cp(37475),
-       xp = cp(37448),
-       Lp = cp(37436),
-       Yp = cp(37313),
-       Dp = cp(37496),
-       Ap = cp(37505),
-       Pp = cp(37537);
+     var WT = mT(37337),
+       zT = mT(37351),
+       MT = mT(37364),
+       gT = mT(37359),
+       nT = mT(37321),
+       HT = mT(37302),
+       kT = mT(37185),
+       jT = mT(37376),
+       lT = mT(37385),
+       LT = mT(37421);
```

#### 2620. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19591` → after: `L18978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18978) · [Before (L19591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19591)

```diff
-       return ip ? `${pp}|${ip}` : pp
+       return UT ? `${TT}|${UT}` : TT
```

#### 2621. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19595-L19596` → after: `L18982-L18983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18982-L18983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18982-L18983) · [Before (L19595-L19596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19595-L19596)

```diff
-       const cp = (0, Op.n)("Player", `${pp}.glb`).replace("model/gltf-binary;", "");
-       return (0, Pp.g)("", ip, {
+       const mT = (0, WT.r)("Player", `${TT}.glb`).replace("model/gltf-binary;", "");
+       return (0, LT.d)("", UT, {
```

#### 2622. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19602` → after: `L18989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18989) · [Before (L19602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19602)

```diff
-       pp.position.E_(0), pp.rotation = Yp.Zy.Zero(), pp.ei.E_(1), pp.iJ();
+       TT.position.B3(0), TT.rotation = kT.JB.Zero(), TT.gp.B3(1), TT.HV();
```

#### 2623. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19609` → after: `L18996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R18996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L18996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L18996) · [Before (L19609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19609)

```diff
-         pp.position.E_(0), pp.rotationQuaternion ? pp.rotationQuaternion.set(0, 0, 0, 1) : pp.rotation.E_(0), pp.ei.E_(1), pp.iJ();
+         TT.position.B3(0), TT.rotationQuaternion ? TT.rotationQuaternion.set(0, 0, 0, 1) : TT.rotation.B3(0), TT.gp.B3(1), TT.HV();
```

#### 2624. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19617-L19618` → after: `L19004-L19005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19004-L19005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19004-L19005) · [Before (L19617-L19618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19617-L19618)

```diff
-         name: `${pp}Attachment`,
-         pw: ip,
+         name: `${TT}Attachment`,
+         XZ: UT,
```

#### 2625. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19621` → after: `L19008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19008) · [Before (L19621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19621)

```diff
-           transparencyMode: Sp.b.MATERIAL_ALPHATEST,
+           transparencyMode: gT.e.MATERIAL_ALPHATEST,
```

#### 2626. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19624` → after: `L19011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19011) · [Before (L19624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19624)

```diff
-             url: (0, Op.n)("Player", `${pp}.png`),
+             url: (0, WT.r)("Player", `${TT}.png`),
```

#### 2627. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19627` → after: `L19014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19014) · [Before (L19627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19627)

```diff
-             samplingMode: xp.g.nearestNearestMipLinear,
+             samplingMode: nT.k.nearestNearestMipLinear,
```

#### 2628. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19636` → after: `L19023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19023) · [Before (L19636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19636)

```diff
-           (0, Lp.n)(pp, Dp.d), null === cp || void 0 === cp || cp(pp)
+           (0, HT.m)(TT, jT.c), null === mT || void 0 === mT || mT(TT)
```

#### 2629. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19648` → after: `L19035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19035) · [Before (L19648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19648)

```diff
-         if (xp.getVerticesData("uv")) xp.material = ip, (0, op.x)(xp) || (0, op.F)(xp, 1 / 512), xp.sideOrientation = Sp.b.CounterClockWiseSideOrientation, null === cp || void 0 === cp || null === (Op = cp.onProcessedMesh) || void 0 === Op || Op.call(cp, xp);
+         if (nT.getVerticesData("uv")) nT.material = UT, (0, zT.p)(nT) || (0, zT.w)(nT, 1 / 512), nT.sideOrientation = gT.e.CounterClockWiseSideOrientation, null === mT || void 0 === mT || null === (WT = mT.onProcessedMesh) || void 0 === WT || WT.call(mT, nT);
```

#### 2630. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19654` → after: `L19041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19041) · [Before (L19654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19654)

```diff
-       pp.qJ("aHueColour", 4), pp.MJ.aHueColour = new Ip.b(0, 0, 0, 0)
+       TT.yV("aHueColour", 4), TT.XV.aHueColour = new MT.e(0, 0, 0, 0)
```

#### 2631. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19658-L19659` → after: `L19045-L19046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19045-L19046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19045-L19046) · [Before (L19658-L19659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19658-L19659)

```diff
-       const cp = ip ? new Ip.b(ip[0] / 255, ip[1] / 255, ip[2] / 255, 1) : new Ip.b(0, 0, 0, 0);
-       for (const Op of [pp, ...pp.getChildMeshes()]) void 0 !== Op.MJ && (Op.MJ.aHueColour = cp)
+       const mT = UT ? new MT.e(UT[0] / 255, UT[1] / 255, UT[2] / 255, 1) : new MT.e(0, 0, 0, 0);
+       for (const WT of [TT, ...TT.getChildMeshes()]) void 0 !== WT.XV && (WT.XV.aHueColour = mT)
```

#### 2632. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19662` → after: `L19049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19049) · [Before (L19662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19662)

```diff
-   37465: (pp, ip, cp) => {
+   37337: (TT, UT, mT) => {
```

#### 2633. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19665-L19667` → after: `L19052-L19053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19052-L19053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19052-L19053) · [Before (L19665-L19667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19665-L19667)

```diff
-       g: () => Pp,
-       j: () => Lp,
-       m: () => yp,
+       h: () => LT,
+       l: () => HT,
```

#### 2634. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19669-L19671` → after: `L19055-L19058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19055-L19058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19055-L19058) · [Before (L19669-L19671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19669-L19671)

```diff
-       p: () => Up,
-       t: () => Yp,
-       x: () => Ap
+       r: () => nT,
+       v: () => ZT,
+       w: () => kT,
+       z: () => lT
```

#### 2635. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19673-L19676` → after: `L19060-L19063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19060-L19063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19060-L19063) · [Before (L19673-L19676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19673-L19676)

```diff
-     var Op = cp(34),
-       op = cp(37470),
-       Ip = cp(36959),
-       Sp = cp(2849);
+     var WT = mT(31),
+       zT = mT(37346),
+       MT = mT(36866),
+       gT = mT(2875);
```

#### 2636. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19679` → after: `L19066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19066) · [Before (L19679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19679)

```diff
-       return cp(37468)(`./${pp}/${ip}`)
+       return mT(37342)(`./${TT}/${UT}`)
```

#### 2637. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19688` → after: `L19075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19075) · [Before (L19688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19688)

```diff
-       const Ip = Op.m.subscribe(`otherEntitySettingsClientifiedEId|${ip}|multilineTextBox`, (cp => {
+       const MT = WT.j.subscribe(`otherEntitySettingsClientifiedEId|${UT}|multilineTextBox`, (mT => {
```

#### 2638. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19691` → after: `L19078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19078) · [Before (L19691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19691)

```diff
-       return Dp(pp, ip, null === (cp = pp.QJ[pp.NJ]) || void 0 === cp || null === (op = cp[ip]) || void 0 === op ? void 0 : op.multilineTextBox), Ip
+       return jT(TT, UT, null === (mT = TT.sV[TT.VV]) || void 0 === mT || null === (zT = mT[UT]) || void 0 === zT ? void 0 : zT.multilineTextBox), MT
```

#### 2639. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19695-L19696` → after: `L19082-L19083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19082-L19083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19082-L19083) · [Before (L19695-L19696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19695-L19696)

```diff
-       const Op = pp.Yk.hpp(ip, "entityMultilineTextBox");
-       null === cp || void 0 === cp ? Op && pp.Yk.HJ(ip, "entityMultilineTextBox") : Op || pp.Yk.vJ(ip, "entityMultilineTextBox")
+       const WT = TT.pY.uTT(UT, "entityMultilineTextBox");
+       null === mT || void 0 === mT ? WT && TT.pY.JV(UT, "entityMultilineTextBox") : WT || TT.pY.YV(UT, "entityMultilineTextBox")
```

#### 2640. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19701` → after: `L19088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19088) · [Before (L19701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19701)

```diff
-         Ip = pp.Yk.getState(ip, "meshRotation");
+         MT = TT.pY.getState(UT, "meshRotation");
```

#### 2641. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19706-L19709` → after: `L19093-L19096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19093-L19096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19093-L19096) · [Before (L19706-L19709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19706-L19709)

```diff
-       const ip = (0, Sp.g)();
-       if (ip.QJ[ip.NJ][pp]) return;
-       const cp = (0, Ip.b)(pp);
-       ip.QJ[ip.NJ][pp] = {}, ip.QJ[ip.NJ][cp] = {}, ip.QJ[ip.Fpp][pp] = {}, ip.QJ[ip.Fpp][cp] = {}
+       const UT = (0, gT.h)();
+       if (UT.sV[UT.VV][TT]) return;
+       const mT = (0, MT.e)(TT);
+       UT.sV[UT.VV][TT] = {}, UT.sV[UT.VV][mT] = {}, UT.sV[UT.rTT][TT] = {}, UT.sV[UT.rTT][mT] = {}
```

#### 2642. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19713-L19715` → after: `L19100-L19102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19100-L19102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19100-L19102) · [Before (L19713-L19715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19713-L19715)

```diff
-       const Op = (0, Sp.g)(),
-         op = (0, Ip.b)(pp);
-       Op.QJ[Op.NJ][pp][ip] = cp, Op.QJ[Op.NJ][op][ip] = cp, Op.QJ[Op.Fpp][pp][ip] = cp, Op.QJ[Op.Fpp][op][ip] = cp, yp(pp, ip, cp)
+       const WT = (0, gT.h)(),
+         zT = (0, MT.e)(TT);
+       WT.sV[WT.VV][TT][UT] = mT, WT.sV[WT.VV][zT][UT] = mT, WT.sV[WT.rTT][TT][UT] = mT, WT.sV[WT.rTT][zT][UT] = mT, BT(TT, UT, mT)
```

#### 2643. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19719-L19721` → after: `L19106-L19108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19106-L19108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19106-L19108) · [Before (L19719-L19721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19719-L19721)

```diff
-       const Sp = void 0 === cp ? op.e[ip] : cp,
-         xp = (0, Ip.b)(pp);
-       Op.m.GA(`otherEntitySettings|${ip}`, {
+       const gT = void 0 === mT ? zT.b[UT] : mT,
+         nT = (0, MT.e)(TT);
+       WT.j.EZ(`otherEntitySettings|${UT}`, {
```

#### 2644. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19724` → after: `L19111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19111) · [Before (L19724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19724)

```diff
-       }), Op.m.GA(`otherEntitySettings|${pp}|${ip}`, Sp), Op.m.GA(`otherEntitySettingsClientifiedEId|${xp}|${ip}`, Sp)
+       }), WT.j.EZ(`otherEntitySettings|${TT}|${UT}`, gT), WT.j.EZ(`otherEntitySettingsClientifiedEId|${nT}|${UT}`, gT)
```

#### 2645. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19728-L19729` → after: `L19115-L19116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19115-L19116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19115-L19116) · [Before (L19728-L19729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19728-L19729)

```diff
-       const Op = pp.Yk.Rip(ip);
-       Op && (null !== Op.FQ ? pp.WU.EQ.eC(Op.FQ, cp) : pp.WU.NLp(Op.mesh, cp))
+       const WT = TT.pY.bUT(UT);
+       WT && (null !== WT.zV ? TT.GB.mV.Qy(WT.zV, mT) : TT.GB.ZHT(WT.mesh, mT))
```

#### 2646. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19732` → after: `L19119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19119) · [Before (L19732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19732)

```diff
-   38306: (pp, ip, cp) => {
+   38224: (TT, UT, mT) => {
```

#### 2647. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19735` → after: `L19122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19122) · [Before (L19735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19735)

```diff
-       const op = null === (cp = pp.Yk.Dcp(ip)) || void 0 === cp ? void 0 : cp.qm;
+       const zT = null === (mT = TT.pY.AUT(UT)) || void 0 === mT ? void 0 : mT.AY;
```

#### 2648. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19739` → after: `L19126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19126) · [Before (L19739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19739)

```diff
-       d: () => Op
+       c: () => WT
```

#### 2649. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19742` → after: `L19129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19129) · [Before (L19742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19742)

```diff
-   38142: (pp, ip, cp) => {
+   38074: (TT, UT, mT) => {
```

#### 2650. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19744-L19746` → after: `L19131-L19133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19131-L19133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19131-L19133) · [Before (L19744-L19746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19744-L19746)

```diff
-       b: () => Lp,
-       e: () => Dp,
-       f: () => Yp
+       c: () => HT,
+       g: () => jT,
+       k: () => kT
```

#### 2651. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19748-L19752` → after: `L19135-L19139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19135-L19139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19135-L19139) · [Before (L19748-L19752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19748-L19752)

```diff
-     var Op = cp(37436),
-       op = cp(37642),
-       Ip = cp(38151),
-       Sp = cp(37646),
-       xp = cp(2849);
+     var WT = mT(37302),
+       zT = mT(37526),
+       MT = mT(38079),
+       gT = mT(37531),
+       nT = mT(2875);
```

#### 2652. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19755-L19757` → after: `L19142-L19144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19142-L19144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19142-L19144) · [Before (L19755-L19757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19755-L19757)

```diff
-       (0, Ip.e)(pp, (pp => {
-         const ip = (0, Op.$)(pp);
-         ip && !(0, Op.s)(ip, Sp.i.name) && (0, Sp.e)(ip, (0, xp.g)().WU)
+       (0, MT.d)(TT, (TT => {
+         const UT = (0, WT.R)(TT);
+         UT && !(0, WT.s)(UT, gT.h.name) && (0, gT.d)(UT, (0, nT.h)().GB)
```

#### 2653. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19766` → after: `L19153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19153) · [Before (L19766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19766)

```diff
-       pp.qJ("aLightLevels", 4), pp.MJ.aLightLevels = (0, op.j)()
+       TT.yV("aLightLevels", 4), TT.XV.aLightLevels = (0, zT.l)()
```

#### 2654. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19769` → after: `L19156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19156) · [Before (L19769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19769)

```diff
-   37290: (pp, ip, cp) => {
+   37166: (TT, UT, mT) => {
```

#### 2655. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19771-L19773` → after: `L19158-L19160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19158-L19160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19158-L19160) · [Before (L19771-L19773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19771-L19773)

```diff
-       c: () => Hp,
-       f: () => vp,
-       g: () => tp
+       b: () => qT,
+       e: () => vT,
+       f: () => fT
```

#### 2656. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19775-L19787` → after: `L19162-L19174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19162-L19174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19162-L19174) · [Before (L19775-L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19775-L19787)

```diff
-     var Op = cp(37642),
-       op = cp(37676),
-       Ip = cp(37475),
-       Sp = cp(2849),
-       xp = cp(3774),
-       Lp = cp(36959),
-       Yp = cp(37298),
-       Dp = cp(37630),
-       Ap = cp(37830),
-       Pp = cp(37313),
-       Wp = cp(4341),
-       yp = cp(37837),
-       Up = cp(37387);
+     var WT = mT(37526),
+       zT = mT(37559),
+       MT = mT(37359),
+       gT = mT(2875),
+       nT = mT(3781),
+       HT = mT(36866),
+       kT = mT(37168),
+       jT = mT(37508),
+       lT = mT(37740),
+       LT = mT(37185),
+       pT = mT(4328),
+       BT = mT(37746),
+       ZT = mT(37259);
```

#### 2657. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19799-L19802` → after: `L19186-L19189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19186-L19189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19186-L19189) · [Before (L19799-L19802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19799-L19802)

```diff
-           Zi: cp,
-           zi: Op,
-           si: op
-         } = ip, Ip = (0, Lp.b)(cp), Sp = (0, Up.e)(pp);
+           XU: mT,
+           IU: WT,
+           QU: zT
+         } = UT, MT = (0, HT.e)(mT), gT = (0, ZT.d)(TT);
```

#### 2658. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19804-L19805` → after: `L19191-L19192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19191-L19192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19191-L19192) · [Before (L19804-L19805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19804-L19805)

```diff
-         const xp = pp.Yk.Rip(Ip);
-         if (xp && null === xp.FQ) return;
+         const nT = TT.pY.bUT(MT);
+         if (nT && null === nT.zV) return;
```

#### 2659. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19811` → after: `L19198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19198) · [Before (L19811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19811)

```diff
-       for (const cp of (0, Up.e)(pp).getAttachments(ip)) dp(pp, cp)
+       for (const mT of (0, ZT.d)(TT).getAttachments(UT)) iT(TT, mT)
```

#### 2660. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19815` → after: `L19202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19202) · [Before (L19815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19815)

```diff
-       (0, Up.e)((0, Sp.g)()).clearAttachments((0, Lp.b)(pp))
+       (0, ZT.d)((0, gT.h)()).clearAttachments((0, HT.e)(TT))
```

#### 2661. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19821-L19824` → after: `L19208-L19211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19208-L19211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19208-L19211) · [Before (L19821-L19824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19821-L19824)

```diff
-           Zi: cp,
-           zi: Op,
-           si: op
-         } = ip, Ip = (0, Lp.b)(cp), Sp = pp.Yk.Rip(Ip);
+           XU: mT,
+           IU: WT,
+           QU: zT
+         } = UT, MT = (0, HT.e)(mT), gT = TT.pY.bUT(MT);
```

#### 2662. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19826-L19828` → after: `L19213-L19215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19213-L19215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19213-L19215) · [Before (L19826-L19828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19826-L19828)

```diff
-         const xp = Sp.FQ;
-         if (null === xp) return console.error(`attachMeshToEntity: parent ${cp} has no thin instance - not supported`), null;
-         const Yp = pp.WU.EQ,
+         const nT = gT.zV;
+         if (null === nT) return console.error(`attachMeshToEntity: parent ${mT} has no thin instance - not supported`), null;
+         const kT = TT.GB.mV,
```

#### 2663. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19830` → after: `L19217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19217) · [Before (L19830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19830)

```diff
-         return null === Dp ? (console.error(`Couldn't find node ${Op} on ${cp} to attach mesh ${op}`), null) : {
+         return null === jT ? (console.error(`Couldn't find node ${WT} on ${mT} to attach mesh ${zT}`), null) : {
```

#### 2664. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19846` → after: `L19233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19233) · [Before (L19846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19846)

```diff
-       }(pp, cp), ip.si && function(pp, ip, cp) {
+       }(TT, mT), UT.QU && function(TT, UT, mT) {
```

#### 2665. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19848-L19852` → after: `L19235-L19239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19235-L19239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19235-L19239) · [Before (L19848-L19852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19848-L19852)

```diff
-           Zi: Op,
-           si: xp,
-           zi: Lp,
-           Ki: Yp,
-           Vi: Dp
+           XU: WT,
+           QU: nT,
+           IU: HT,
+           sU: kT,
+           FU: jT
```

#### 2666. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19858` → after: `L19245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19245) · [Before (L19858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19858)

```diff
-         } = ip, dp = (0, Wp.v)(xp);
+         } = UT, iT = (0, pT.o)(nT);
```

#### 2667. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19863` → after: `L19250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19250) · [Before (L19863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19863)

```diff
-         } = dp, lp = (0, Up.e)(pp).bumpAttachmentGeneration(Hp, Lp), Qp = {
+         } = iT, yT = (0, ZT.d)(TT).bumpAttachmentGeneration(qT, HT), XT = {
```

#### 2668. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19866-L19867` → after: `L19253-L19254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19253-L19254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19253-L19254) · [Before (L19866-L19867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19866-L19867)

```diff
-           Ki: Yp,
-           Vi: Dp,
+           sU: kT,
+           FU: jT,
```

#### 2669. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19869` → after: `L19256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19256) · [Before (L19869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19869)

```diff
-           zi: Lp,
+           IU: HT,
```

#### 2670. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19878` → after: `L19265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19265) · [Before (L19878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19878)

```diff
-           } = cp, Lp = Sp.k.itemsClient[op];
+           } = mT, HT = gT.j.itemsClient[zT];
```

#### 2671. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19881` → after: `L19268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19268) · [Before (L19881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19881)

```diff
-             [Dp, Ap, Pp] = Array.isArray(Ip) ? Ip : [Ip, Ip, Ip],
+             [jT, lT, LT] = Array.isArray(MT) ? MT : [MT, MT, MT],
```

#### 2672. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19888` → after: `L19275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19275) · [Before (L19888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19888)

```diff
-             wp = yp.e.includes(xp) ? xp : void 0;
+             cT = BT.e.includes(nT) ? nT : void 0;
```

#### 2673. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19890` → after: `L19277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19277) · [Before (L19890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19890)

```diff
-             sx: !1,
+             fn: !1,
```

#### 2674. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19899` → after: `L19286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19286) · [Before (L19899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19899)

```diff
-             if (op = cp, !("Vl" in op) || !0 !== op.Vl) return void console.error(`Box attachment ${cp.name} is not an instance`);
+             if (zT = mT, !("RP" in zT) || !0 !== zT.RP) return void console.error(`Box attachment ${mT.name} is not an instance`);
```

#### 2675. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19902` → after: `L19289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19289) · [Before (L19902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19902)

```diff
-               xp = kp(cp.ei, Sp),
+               nT = eT(mT.gp, gT),
```

#### 2676. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19904-L19906` → after: `L19291-L19293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19291-L19293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19291-L19293) · [Before (L19904-L19906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19904-L19906)

```diff
-                 const op = cp.MJ.aShaderPackItem,
-                   Sp = (0, Ap.k)(Op),
-                   xp = `nodeAttachment|${cp.name}|${cp.uniqueId}|${Sp}`;
+                 const zT = mT.XV.aShaderPackItem,
+                   gT = (0, lT.i)(WT),
+                   nT = `nodeAttachment|${mT.name}|${mT.uniqueId}|${gT}`;
```

#### 2677. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19908-L19910` → after: `L19295-L19297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19295-L19297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19295-L19297) · [Before (L19908-L19910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19908-L19910)

```diff
-                   const Lp = cp.clone(`thinNodeAttachment_${cp.name}|${Sp}`, null);
-                   Lp.makeGeometryUnique(), Op && (Lp.sideOrientation = Ip.b.ClockWiseSideOrientation), ip.newObjectType(xp, Lp, {
-                     TA: 4,
+                   const HT = mT.clone(`thinNodeAttachment_${mT.name}|${gT}`, null);
+                   HT.makeGeometryUnique(), WT && (HT.sideOrientation = MT.e.ClockWiseSideOrientation), UT.newObjectType(nT, HT, {
+                     fl: 4,
```

#### 2678. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19912-L19913` → after: `L19299-L19300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19299-L19300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19299-L19300) · [Before (L19912-L19913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19912-L19913)

```diff
-                     strides: op ? Cp : Mp
-                   }), ip.setPickableForType(xp, !1), pp.WU.LJ(Lp)
+                     strides: zT ? wT : dT
+                   }), UT.setPickableForType(nT, !1), TT.GB.fV(HT)
```

#### 2679. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19918` → after: `L19305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19305) · [Before (L19918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19918)

```diff
-               }(pp, ip, cp.aop, mp(xp, Sp));
+               }(TT, UT, mT.czT, YT(nT, gT));
```

#### 2680. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19925` → after: `L19312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19312) · [Before (L19925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19925)

```diff
-           FQ: Tp
+           zV: FT
```

#### 2681. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19928-L19930` → after: `L19315-L19317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19315-L19317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19315-L19317) · [Before (L19928-L19930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19928-L19930)

```diff
-         Np && !Np.uR() && (! function(pp, ip, cp, Op) {
-           (0, op.r)(ip, cp[0], cp[1], cp[2]), ip.rotation.set(Op[0], Op[1], Op[2])
-         }(pp.WU, Np, Yp, Dp), Pp.attachTransformNode(Np, vp, tp))
+         sT && !sT.bJ() && (! function(TT, UT, mT, WT) {
+           (0, zT.n)(UT, mT[0], mT[1], mT[2]), UT.rotation.set(WT[0], WT[1], WT[2])
+         }(TT.GB, sT, kT, jT), LT.attachTransformNode(sT, vT, fT))
```

#### 2682. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19935` → after: `L19322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19322) · [Before (L19935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19935)

```diff
-       return !ip.has(cp.parentThinObjectId) || (0, Up.e)(pp).getAttachmentGeneration(cp.clientifiedAttachToEId, cp.zi) !== cp.generation
+       return !UT.has(mT.parentThinObjectId) || (0, ZT.d)(TT).getAttachmentGeneration(mT.clientifiedAttachToEId, mT.IU) !== mT.generation
```

#### 2683. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19943` → after: `L19330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19330) · [Before (L19943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19943)

```diff
-       return new Pp.Zy(ip ? -pp.x : pp.x, pp.y, pp.z)
+       return new LT.JB(UT ? -TT.x : TT.x, TT.y, TT.z)
```

#### 2684. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19947` → after: `L19334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19334) · [Before (L19947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19947)

```diff
-       return (0, Ap.i)(pp.x * pp.y * pp.z < 0, ip)
+       return (0, lT.e)(TT.x * TT.y * TT.z < 0, UT)
```

#### 2685. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19955-L19956` → after: `L19342-L19343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19342-L19343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19342-L19343) · [Before (L19955-L19956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19955-L19956)

```diff
-         Ki: Ap,
-         Vi: Pp,
+         sU: lT,
+         FU: LT,
```

#### 2686. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19959` → after: `L19346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19346) · [Before (L19959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19959)

```diff
-       qp(ip, cp, Ap, Pp), ip.setScale(cp, op.x, op.y, op.z), ip.attachThinObject(cp, Lp, Yp), ip.set(cp, "aOpacity", (0, Dp.holderAttachmentOpacity)(pp, Wp)), ip.set(cp, "aLightLevels", null !== (Sp = null === (xp = pp.Yk.ccp(Wp)) || void 0 === xp ? void 0 : xp._lightLevels) && v … [truncated]
+       xT(UT, mT, lT, LT), UT.setScale(mT, zT.x, zT.y, zT.z), UT.attachThinObject(mT, HT, kT), UT.set(mT, "aOpacity", (0, jT.holderAttachmentOpacity)(TT, pT)), UT.set(mT, "aLightLevels", null !== (gT = null === (nT = TT.pY.GUT(pT)) || void 0 === nT ? void 0 : nT._lightLevels) && v … [truncated]
```

#### 2687. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19965` → after: `L19352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19352) · [Before (L19965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19965)

```diff
-       const pp = (0, Sp.g)();
+       const TT = (0, gT.h)();
```

#### 2688. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19967-L19973` → after: `L19354-L19360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19354-L19360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19354-L19360) · [Before (L19967-L19973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19967-L19973)

```diff
-           zi: cp
-         }] of(0, Up.e)(pp).iterateAttachments()) dp(pp, {
-         Zi: ip,
-         zi: cp,
-         si: null,
-         Ki: [0, 0, 0],
-         Vi: [0, 0, 0]
+           IU: mT
+         }] of(0, ZT.d)(TT).iterateAttachments()) iT(TT, {
+         XU: UT,
+         IU: mT,
+         QU: null,
+         sU: [0, 0, 0],
+         FU: [0, 0, 0]
```

#### 2689. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19986` → after: `L19373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19373) · [Before (L19986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19986)

```diff
-   38157: (pp, ip, cp) => {
+   38083: (TT, UT, mT) => {
```

#### 2690. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19988-L19989` → after: `L19375-L19376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19375-L19376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19375-L19376) · [Before (L19988-L19989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19988-L19989)

```diff
-       c: () => Sp,
-       g: () => xp
+       b: () => gT,
+       c: () => nT
```

#### 2691. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19991-L19993` → after: `L19378-L19380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19378-L19380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19378-L19380) · [Before (L19991-L19993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19991-L19993)

```diff
-     var Op = cp(38151),
-       op = cp(37411),
-       Ip = cp(37436);
+     var WT = mT(38079),
+       zT = mT(37273),
+       MT = mT(37302);
```

#### 2692. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19997-L19999` → after: `L19384-L19386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19384-L19386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19384-L19386) · [Before (L19997-L19999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L19997-L19999)

```diff
-       pp.qJ("aOpacity", 1), pp.MJ.aOpacity = 1, pp.material && (ip = pp.material, (0, Op.e)(ip, (pp => {
-         const ip = (0, Ip.$)(pp);
-         ip && (0, op.d)(ip, !0)
+       TT.yV("aOpacity", 1), TT.XV.aOpacity = 1, TT.material && (UT = TT.material, (0, WT.d)(UT, (TT => {
+         const UT = (0, MT.R)(TT);
+         UT && (0, zT.c)(UT, !0)
```

#### 2693. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20012` → after: `L19399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19399) · [Before (L20012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20012)

```diff
-         MJ: cp
+         XV: mT
```

#### 2694. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20017` → after: `L19404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19404) · [Before (L20017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20017)

```diff
-   38677: (pp, ip, cp) => {
+   38584: (TT, UT, mT) => {
```

#### 2695. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20019-L20020` → after: `L19406-L19407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19406-L19407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19406-L19407) · [Before (L20019-L20020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20019-L20020)

```diff
-       c: () => Dp,
-       g: () => Ap,
+       d: () => jT,
+       e: () => lT,
```

#### 2696. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20022` → after: `L19409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19409) · [Before (L20022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20022)

```diff
-       l: () => Ip
+       j: () => MT
```

#### 2697. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20024` → after: `L19411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19411) · [Before (L20024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20024)

```diff
-     var Op = cp(2849);
+     var WT = mT(2875);
```

#### 2698. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20042` → after: `L19429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19429) · [Before (L20042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20042)

```diff
-       (Sp = !1, null !== pp && void 0 !== pp && pp.isChargeable()) ? pp.clearChargingPose(): null === (cp = ip.Yk.getState(ip.NJ, "playerCameraAdjustment")) || void 0 === cp || cp.fovMultiplier.removeMultiplier("chargeableZoom")
+       (gT = !1, null !== TT && void 0 !== TT && TT.isChargeable()) ? TT.clearChargingPose(): null === (mT = UT.pY.getState(UT.VV, "playerCameraAdjustment")) || void 0 === mT || mT.fovMultiplier.removeMultiplier("chargeableZoom")
```

#### 2699. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20055` → after: `L19442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19442) · [Before (L20055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20055)

```diff
-       } = cp, Ap = pp.Yk.Ucp(ip);
+       } = mT, lT = TT.pY.WmT(UT);
```

#### 2700. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20057-L20058` → after: `L19444-L19445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19444-L19445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19444-L19445) · [Before (L20057-L20058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20057-L20058)

```diff
-       const Pp = pp.Yk.Dcp(ip),
-         Wp = pp.Yk.Acp(ip);
+       const LT = TT.pY.AUT(UT),
+         pT = TT.pY.RUT(UT);
```

#### 2701. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20062` → after: `L19449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19449) · [Before (L20062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20062)

```diff
-         Pp.replayUseFirstPersonMesh = Op, pp !== Op && (null === Wp || void 0 === Wp || Wp.KYp())
+         LT.replayUseFirstPersonMesh = WT, TT !== WT && (null === pT || void 0 === pT || pT.tkT())
```

#### 2702. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20064` → after: `L19451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19451) · [Before (L20064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20064)

```diff
-       const Up = pp.Yk.ccp(ip);
+       const ZT = TT.pY.GUT(UT);
```

#### 2703. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20074` → after: `L19461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19461) · [Before (L20074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20074)

```diff
-       const cp = pp.Yk.Ucp(ip);
+       const mT = TT.pY.WmT(UT);
```

#### 2704. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20076-L20079` → after: `L19463-L19466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19463-L19466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19463-L19466) · [Before (L20076-L20079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20076-L20079)

```diff
-       const Op = pp.Yk.Dcp(ip),
-         op = pp.Yk.Acp(ip);
-       void 0 !== (null === Op || void 0 === Op ? void 0 : Op.replayUseFirstPersonMesh) && (Op.replayUseFirstPersonMesh = void 0, null === op || void 0 === op || op.KYp());
-       const Ip = pp.Yk.ccp(ip);
+       const WT = TT.pY.AUT(UT),
+         zT = TT.pY.RUT(UT);
+       void 0 !== (null === WT || void 0 === WT ? void 0 : WT.replayUseFirstPersonMesh) && (WT.replayUseFirstPersonMesh = void 0, null === zT || void 0 === zT || zT.tkT());
+       const MT = TT.pY.GUT(UT);
```

#### 2705. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20083` → after: `L19470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19470) · [Before (L20083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20083)

```diff
-   37542: (pp, ip, cp) => {
+   37428: (TT, UT, mT) => {
```

#### 2706. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20085-L20086` → after: `L19472-L19473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19472-L19473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19472-L19473) · [Before (L20085-L20086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20085-L20086)

```diff
-       c: () => op,
-       e: () => Op
+       d: () => zT,
+       h: () => WT
```

#### 2707. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20103` → after: `L19490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19490) · [Before (L20103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20103)

```diff
-   37537: (pp, ip, cp) => {
+   37421: (TT, UT, mT) => {
```

#### 2708. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20106-L20108` → after: `L19495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19495) · [Before (L20106-L20108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20106-L20108)

```diff
-       g: () => Yp,
-       k: () => Dp,
-       l: () => Sp
+       i: () => gT
```

#### 2709. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20110` → after: `L19497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19497) · [Before (L20110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20110)

```diff
-     var Op = cp(37542);
+     var WT = mT(37428);
```

#### 2710. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20114` → after: `L19501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19501) · [Before (L20114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20114)

```diff
-       return op ??= Promise.all([cp.e(206), cp.e(209)]).then((() => cp(41741))).then((pp => pp), (pp => {
+       return zT ??= Promise.all([mT.e(206), mT.e(209)]).then((() => mT(41630))).then((TT => TT), (TT => {
```

#### 2711. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20129` → after: `L19516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19516) · [Before (L20129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20129)

```diff
-         Op.e.failed++;
+         WT.h.failed++;
```

#### 2712. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20137` → after: `L19524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19524) · [Before (L20137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20137)

```diff
-       return (0, Op.c)("importMesh"), xp(pp, cp, op, ((pp, cp, Op) => {
+       return (0, WT.d)("importMesh"), nT(TT, mT, zT, ((TT, mT, WT) => {
```

#### 2713. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20139` → after: `L19526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19526) · [Before (L20139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20139)

```diff
-         return pp.loadGlbTree(cp, ip, null !== (op = Op.rootUrl) && void 0 !== op ? op : "", !1, Op.materials)
+         return TT.loadGlbTree(mT, UT, null !== (zT = WT.rootUrl) && void 0 !== zT ? zT : "", !1, WT.materials)
```

#### 2714. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20144` → after: `L19531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19531) · [Before (L20144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20144)

```diff
-       return (0, Op.c)("assetContainer"), xp(pp, cp, op, ((pp, cp, Op) => {
+       return (0, WT.d)("assetContainer"), nT(TT, mT, zT, ((TT, mT, WT) => {
```

#### 2715. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20146` → after: `L19533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19533) · [Before (L20146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20146)

```diff
-         return pp.loadGlbTree(cp, ip, null !== (op = Op.rootUrl) && void 0 !== op ? op : "", !0, Op.materials)
+         return TT.loadGlbTree(mT, UT, null !== (zT = WT.rootUrl) && void 0 !== zT ? zT : "", !0, WT.materials)
```

#### 2716. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20151` → after: `L19538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19538) · [Before (L20151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20151)

```diff
-       return (0, Op.c)("importMesh"), xp(pp, {
+       return (0, WT.d)("importMesh"), nT(TT, {
```

#### 2717. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20155` → after: `L19542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19542) · [Before (L20155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20155)

```diff
-         return pp.loadGlbAsset(cp, ip, null !== (op = Op.rootUrl) && void 0 !== op ? op : "", Ip)
+         return TT.loadGlbAsset(mT, UT, null !== (zT = WT.rootUrl) && void 0 !== zT ? zT : "", MT)
```

#### 2718. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20159` → after: `L19546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19546) · [Before (L20159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20159)

```diff
-   38106: (pp, ip, cp) => {
+   38020: (TT, UT, mT) => {
```

#### 2719. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20161-L20162` → after: `L19548-L19549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19548-L19549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19548-L19549) · [Before (L20161-L20162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20161-L20162)

```diff
-       d: () => Yp,
-       g: () => Dp
+       b: () => kT,
+       f: () => jT
```

#### 2720. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20164-L20165` → after: `L19551-L19552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19551-L19552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19551-L19552) · [Before (L20164-L20165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20164-L20165)

```diff
-     var Op = cp(37436),
-       op = cp(37479);
+     var WT = mT(37302),
+       zT = mT(37364);
```

#### 2721. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20176` → after: `L19563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19563) · [Before (L20176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20176)

```diff
-     var xp = cp(37519);
+     var nT = mT(37397);
```

#### 2722. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20193` → after: `L19580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19580) · [Before (L20193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20193)

```diff
-         emissiveTexture: pp.emissionColorTexture ? (0, xp.B)(pp.emissionColorTexture) : null,
+         emissiveTexture: TT.emissionColorTexture ? (0, nT.A)(TT.emissionColorTexture) : null,
```

#### 2723. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20197` → after: `L19584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19584) · [Before (L20197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20197)

```diff
-         ...null !== ip && ip !== Op.k.opaque ? {
+         ...null !== UT && UT !== WT.j.opaque ? {
```

#### 2724. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20212-L20213` → after: `L19599-L19600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19599-L19600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19599-L19600) · [Before (L20212-L20213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20212-L20213)

```diff
-           return Op && (pp.baseColor = op.Color3.FromArray(Op), pp.geometryOpacity = Op[3]), ip.unlit ? pp.isUnlit = !0 : pp.emissionColor = ip.emissiveFactor ? op.Color3.FromArray(ip.emissiveFactor) : new op.Color3(0, 0, 0), ip.doubleSided && (pp.backFaceCulling = !1, pp.twoSide … [truncated]
-         }(Yp, ip) : Op.k.opaque;
+           return WT && (TT.baseColor = zT.Color3.FromArray(WT), TT.geometryOpacity = WT[3]), UT.unlit ? TT.isUnlit = !0 : TT.emissionColor = UT.emissiveFactor ? zT.Color3.FromArray(UT.emissiveFactor) : new zT.Color3(0, 0, 0), UT.doubleSided && (TT.backFaceCulling = !1, TT.twoSide … [truncated]
+         }(kT, UT) : WT.j.opaque;
```

#### 2725. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20216` → after: `L19603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19603) · [Before (L20216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20216)

```diff
-         ...Lp(Yp, Dp, cp, xp, null !== ip && void 0 !== ip && ip.pbr && ip.baseColorTexture ? pp.textureDesc(ip.baseColorTexture, Dp !== Op.k.opaque) : null)
+         ...HT(kT, jT, mT, nT, null !== UT && void 0 !== UT && UT.pbr && UT.baseColorTexture ? TT.textureDesc(UT.baseColorTexture, jT !== WT.j.opaque) : null)
```

#### 2726. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20234` → after: `L19621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19621) · [Before (L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20234)

```diff
-   38409: (pp, ip, cp) => {
+   38327: (TT, UT, mT) => {
```

#### 2727. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20236` → after: `L19623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19623) · [Before (L20236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20236)

```diff
-       d: () => Ip
+       b: () => MT
```

#### 2728. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20238` → after: `L19625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19625) · [Before (L20238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20238)

```diff
-     var Op = cp(640);
+     var WT = mT(653);
```

#### 2729. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20241` → after: `L19628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19628) · [Before (L20241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20241)

```diff
-       const Op = ip => pp.HP.bloxd.getMetaInfo(ip).rootName,
+       const WT = UT => TT.Rl.bloxd.getMetaInfo(UT).rootName,
```

#### 2730. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20243` → after: `L19630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19630) · [Before (L20243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20243)

```diff
-       return op && Op(op.name) === Op(cp) ? op : null
+       return zT && WT(zT.name) === WT(mT) ? zT : null
```

#### 2731. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20257` → after: `L19644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19644) · [Before (L20257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20257)

```diff
-         return !(!Sp || (null !== (Ip = Sp.amount) && void 0 !== Ip ? Ip : 1) < ip) && Op.removeItem(pp, ip)
+         return !(!gT || (null !== (MT = gT.amount) && void 0 !== MT ? MT : 1) < UT) && WT.removeItem(TT, UT)
```

#### 2732. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20274` → after: `L19661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19661) · [Before (L20274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20274)

```diff
-       return Ip => pp.craftItem(ip, Ip.playerInventory, cp, Op, op).gD === op
+       return MT => TT.craftItem(UT, MT.playerInventory, mT, WT, zT).Yj === zT
```

#### 2733. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20279` → after: `L19666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19666) · [Before (L20279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20279)

```diff
-         return null !== Ip && cp <= (null !== (op = Ip.amount) && void 0 !== op ? op : 0) && pp.salvageItem(Op.playerInventory, ip, Ip.name, cp)
+         return null !== MT && mT <= (null !== (zT = MT.amount) && void 0 !== zT ? zT : 0) && TT.salvageItem(WT.playerInventory, UT, MT.name, mT)
```

#### 2734. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20294` → after: `L19681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19681) · [Before (L20294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20294)

```diff
-         return !!Sp && (Ip.playerInventory.setItemSlot(pp, cp, 1, null !== Op && void 0 !== Op ? Op : Sp.attributes), !0)
+         return !!gT && (MT.playerInventory.setItemSlot(TT, mT, 1, null !== WT && void 0 !== WT ? WT : gT.attributes), !0)
```

#### 2735. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20300` → after: `L19687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19687) · [Before (L20300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20300)

```diff
-         return (null === xp || void 0 === xp ? void 0 : xp.name) === ip && (1 === xp.amount || null === xp.amount ? (Sp.setItemSlot(pp, cp, 1, {}), !0) : !(null === op || op < 0 || op >= Op.p || null !== Sp.getItemAtIdx(op)) && (Sp.setItemSlot(pp, ip, xp.amount - 1, {}), Sp.setIt … [truncated]
+         return (null === nT || void 0 === nT ? void 0 : nT.name) === UT && (1 === nT.amount || null === nT.amount ? (gT.setItemSlot(TT, mT, 1, {}), !0) : !(null === zT || zT < 0 || zT >= WT.q || null !== gT.getItemAtIdx(zT)) && (gT.setItemSlot(TT, UT, nT.amount - 1, {}), gT.setIt … [truncated]
```

#### 2736. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20303` → after: `L19690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19690) · [Before (L20303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20303)

```diff
-       return Op => !!op(Op, ip, cp) && (Op.HP.bloxd.removeEatenItem(pp, Op.playerInventory, ip), !0)
+       return WT => !!zT(WT, UT, mT) && (WT.Rl.bloxd.removeEatenItem(TT, WT.playerInventory, UT), !0)
```

#### 2737. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20312` → after: `L19699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19699) · [Before (L20312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20312)

```diff
-   38023: (pp, ip, cp) => {
+   37926: (TT, UT, mT) => {
```

#### 2738. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20314` → after: `L19701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19701) · [Before (L20314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20314)

```diff
-       e: () => Op
+       d: () => WT
```

#### 2739. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20321` → after: `L19708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19708) · [Before (L20321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20321)

```diff
-   38096: (pp, ip, cp) => {
+   37998: (TT, UT, mT) => {
```

#### 2740. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20323-L20325` → after: `L19710-L19712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19710-L19712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19710-L19712) · [Before (L20323-L20325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20323-L20325)

```diff
-       d: () => wp,
-       g: () => Yp,
-       j: () => mp
+       b: () => cT,
+       e: () => kT,
+       g: () => YT
```

#### 2741. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20327-L20332` → after: `L19714-L19719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19714-L19719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19714-L19719) · [Before (L20327-L20332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20327-L20332)

```diff
-     var Op = cp(209),
-       op = cp(9338),
-       Ip = cp(1982),
-       Sp = cp(3774),
-       xp = cp(34),
-       Lp = cp(2849);
+     var WT = mT(218),
+       zT = mT(9330),
+       MT = mT(2067),
+       gT = mT(3781),
+       nT = mT(31),
+       HT = mT(2875);
```

#### 2742. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20346-L20347` → after: `L19733-L19734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19733-L19734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19733-L19734) · [Before (L20346-L20347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20346-L20347)

```diff
-       const cp = (0, Op.e)(pp, ip);
-       return (null === cp || void 0 === cp ? void 0 : cp.name) === ip ? cp : void 0
+       const mT = (0, WT.b)(TT, UT);
+       return (null === mT || void 0 === mT ? void 0 : mT.name) === UT ? mT : void 0
```

#### 2743. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20355` → after: `L19742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19742) · [Before (L20355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20355)

```diff
-       tp(Lp.k.blocksClient, pp)
+       fT(HT.j.blocksClient, TT)
```

#### 2744. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20367` → after: `L19754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19754) · [Before (L20367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20367)

```diff
-       return op.e[pp.name].ttb
+       return zT.g[TT.name].ttb
```

#### 2745. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20371` → after: `L19758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19758) · [Before (L20371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20371)

```diff
-       if ("droppedItemScale" === pp) Pp = "number" === typeof ip && isFinite(ip) ? ip : 1;
+       if ("droppedItemScale" === TT) LT = "number" === typeof UT && isFinite(UT) ? UT : 1;
```

#### 2746. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20375` → after: `L19762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19762) · [Before (L20375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20375)

```diff
-         const cp = vp(Lp.k.itemsClient, pp.slice(0, -Dp.length));
+         const mT = vT(HT.j.itemsClient, TT.slice(0, -jT.length));
```

#### 2747. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20378` → after: `L19765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19765) · [Before (L20378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20378)

```diff
-         const cp = vp(Lp.k.blocksClient, pp.slice(0, -Ap.length));
+         const mT = vT(HT.j.blocksClient, TT.slice(0, -lT.length));
```

#### 2748. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20384` → after: `L19771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19771) · [Before (L20384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20384)

```diff
-       Ip.c.subscribeAll((pp => {
+       MT.d.subscribeAll((TT => {
```

#### 2749. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20386` → after: `L19773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19773) · [Before (L20386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20386)

```diff
-       })), xp.m.subscribe("ttbEffectMultiplier", (pp => {
+       })), nT.j.subscribe("ttbEffectMultiplier", (TT => {
```

#### 2750. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20389` → after: `L19776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19776) · [Before (L20389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20389)

```diff
-         Pp = 1, Wp = !1, yp = 1, Up = 1, tp(Lp.k.itemsClient, (pp => {
+         LT = 1, pT = !1, BT = 1, ZT = 1, fT(HT.j.itemsClient, (TT => {
```

#### 2751. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20397` → after: `L19784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19784) · [Before (L20397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20397)

```diff
-   37919: (pp, ip, cp) => {
+   37833: (TT, UT, mT) => {
```

#### 2752. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20399` → after: `L19786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19786) · [Before (L20399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20399)

```diff
-       e: () => Op
+       c: () => WT
```

#### 2753. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20499` → after: `L19886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19886) · [Before (L20499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20499)

```diff
-         const Op = Array.isArray(ip) ? ip : null !== (cp = null === ip || void 0 === ip ? void 0 : ip.transfer) && void 0 !== cp ? cp : [];
+         const WT = Array.isArray(UT) ? UT : null !== (mT = null === UT || void 0 === UT ? void 0 : UT.transfer) && void 0 !== mT ? mT : [];
```

#### 2754. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20538` → after: `L19925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19925) · [Before (L20538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20538)

```diff
-   37849: (pp, ip, cp) => {
+   37753: (TT, UT, mT) => {
```

#### 2755. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20540-L20541` → after: `L19927-L19928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19927-L19928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19927-L19928) · [Before (L20540-L20541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20540-L20541)

```diff
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp.Yk.qcp(ip);
-       return ip === pp.NJ || (null === cp || void 0 === cp ? void 0 : cp.vy) === pp.NJ && cp.Mcp
+       let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.pY.LmT(UT);
+       return UT === TT.VV || (null === mT || void 0 === mT ? void 0 : mT.UB) === TT.VV && mT.pmT
```

#### 2756. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20544` → after: `L19931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19931) · [Before (L20544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20544)

```diff
-       b: () => Op
+       d: () => WT
```

#### 2757. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20547` → after: `L19934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19934) · [Before (L20547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20547)

```diff
-   38151: (pp, ip, cp) => {
+   38079: (TT, UT, mT) => {
```

#### 2758. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20549-L20550` → after: `L19936-L19937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19936-L19937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19936-L19937) · [Before (L20549-L20550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20549-L20550)

```diff
-       if ("u9" in pp && Array.isArray(pp.u9))
-         for (const cp of pp.u9) cp && ip(cp);
+       if ("w6" in TT && Array.isArray(TT.w6))
+         for (const mT of TT.w6) mT && UT(mT);
```

#### 2759. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20554` → after: `L19941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19941) · [Before (L20554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20554)

```diff
-       e: () => Op
+       d: () => WT
```

#### 2760. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20557` → after: `L19944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19944) · [Before (L20557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20557)

```diff
-   37473: (pp, ip, cp) => {
+   37351: (TT, UT, mT) => {
```

#### 2761. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20559-L20563` → after: `L19946-L19948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19946-L19948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19946-L19948) · [Before (L20559-L20563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20559-L20563)

```diff
-       A: () => Lp,
-       B: () => Yp,
-       F: () => Ap,
-       H: () => vp,
-       e: () => Sp,
+       b: () => gT,
+       d: () => fT,
+       g: () => BT,
```

#### 2762. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20565-L20567` → after: `L19950-L19953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19950-L19953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19950-L19953) · [Before (L20565-L20567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20565-L20567)

```diff
-       j: () => yp,
-       n: () => wp,
-       r: () => Wp,
+       l: () => pT,
+       o: () => jT,
+       p: () => LT,
+       t: () => HT,
```

#### 2763. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20569` → after: `L19955-L19956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19955-L19956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19955-L19956) · [Before (L20569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20569)

```diff
-       x: () => Pp
+       w: () => lT,
+       z: () => vT
```

#### 2764. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20571-L20573` → after: `L19958-L19960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19958-L19960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19958-L19960) · [Before (L20571-L20573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20571-L20573)

```diff
-     var Op = cp(37313),
-       op = cp(1927),
-       Ip = cp(37475);
+     var WT = mT(37185),
+       zT = mT(2014),
+       MT = mT(37359);
```

#### 2765. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20599` → after: `L19986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L19986) · [Before (L20599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20599)

```diff
-         Op = null !== cp && void 0 !== cp && cp.model ? cp : null;
+         WT = null !== mT && void 0 !== mT && mT.model ? mT : null;
```

#### 2766. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20619` → after: `L20006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20006) · [Before (L20619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20619)

```diff
-         indices: null !== (cp = null === (Op = ip.geometry.indexData) || void 0 === Op ? void 0 : Op.slice()) && void 0 !== cp ? cp : [],
+         indices: null !== (mT = null === (WT = UT.geometry.indexData) || void 0 === WT ? void 0 : WT.slice()) && void 0 !== mT ? mT : [],
```

#### 2767. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20634` → after: `L20021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20021) · [Before (L20634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20634)

```diff
-         const cp = Ip.b.UVKind,
+         const mT = MT.e.UVKind,
```

#### 2768. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20636` → after: `L20023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20023) · [Before (L20636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20636)

```diff
-         xp(Op, pp.NOp(), ip), pp.setVerticesData(cp, Op)
+         nT(WT, TT.vWT(), UT), TT.setVerticesData(mT, WT)
```

#### 2769. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20642` → after: `L20029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20029) · [Before (L20642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20642)

```diff
-       return !!(null !== (ip = pp.metadata) && void 0 !== ip && null !== (cp = ip.sE) && void 0 !== cp && null !== (Op = cp.extras) && void 0 !== Op && Op.bloxdProcessed || null !== (op = pp.parent) && void 0 !== op && null !== (Ip = op.metadata) && void 0 !== Ip && null !== (Sp  … [truncated]
+       return !!(null !== (UT = TT.metadata) && void 0 !== UT && null !== (mT = UT.mF) && void 0 !== mT && null !== (WT = mT.extras) && void 0 !== WT && WT.bloxdProcessed || null !== (zT = TT.parent) && void 0 !== zT && null !== (MT = zT.metadata) && void 0 !== MT && null !== (gT  … [truncated]
```

#### 2770. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20658` → after: `L20045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20045) · [Before (L20658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20658)

```diff
-         pp.ei.set(ip, ip, ip), pp.bakeCurrentTransformIntoVertices(!1)
+         TT.gp.set(UT, UT, UT), TT.bakeCurrentTransformIntoVertices(!1)
```

#### 2771. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20664` → after: `L20051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20051) · [Before (L20664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20664)

```diff
-       return (0, op.w)(`v${Up}|${JSON.stringify(pp)}|${ip}`)
+       return (0, zT.v)(`v${ZT}|${JSON.stringify(TT)}|${UT}`)
```

#### 2772. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20685` → after: `L20072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20072) · [Before (L20685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20685)

```diff
-         }(pp)) || void 0 === cp || null === (Op = cp.extras) || void 0 === Op ? void 0 : Op.bloxdBuildHash) && void 0 !== ip ? ip : null
+         }(TT)) || void 0 === mT || null === (WT = mT.extras) || void 0 === WT ? void 0 : WT.bloxdBuildHash) && void 0 !== UT ? UT : null
```

#### 2773. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20698-L20699` → after: `L20085-L20086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20085-L20086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20085-L20086) · [Before (L20698-L20699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20698-L20699)

```diff
-         cp = Op.Zy.One(),
-         op = new Op.Zy;
+         mT = WT.JB.One(),
+         zT = new WT.JB;
```

#### 2774. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20706` → after: `L20093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20093) · [Before (L20706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20706)

```diff
-         const pp = Op.Matrix.Compose(cp, Op.Quaternion.RotationYawPitchRoll(Pp, Wp, 0), new Op.Zy(Yp, Dp, Ap)),
+         const TT = WT.Matrix.Compose(mT, WT.Quaternion.RotationYawPitchRoll(LT, pT, 0), new WT.JB(kT, jT, lT)),
```

#### 2775. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20708` → after: `L20095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20095) · [Before (L20708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20708)

```diff
-         for (let cp = 0; cp < Ip.length; cp += 3) Op.Zy.TransformCoordinatesFromFloatsToRef(Ip[cp], Ip[cp + 1], Ip[cp + 2], pp, op), ip.positions.push(op.x, op.y, op.z), Op.Zy.TransformNormalFromFloatsToRef(Sp[cp], Sp[cp + 1], Sp[cp + 2], pp, op), ip.normals.push(op.x, op.y, op.z … [truncated]
+         for (let mT = 0; mT < MT.length; mT += 3) WT.JB.TransformCoordinatesFromFloatsToRef(MT[mT], MT[mT + 1], MT[mT + 2], TT, zT), UT.positions.push(zT.x, zT.y, zT.z), WT.JB.TransformNormalFromFloatsToRef(gT[mT], gT[mT + 1], gT[mT + 2], TT, zT), UT.normals.push(zT.x, zT.y, zT.z … [truncated]
```

#### 2776. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20715` → after: `L20102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20102) · [Before (L20715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20715)

```diff
-   38268: (pp, ip, cp) => {
+   38180: (TT, UT, mT) => {
```

#### 2777. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20717-L20718` → after: `L20104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20104) · [Before (L20717-L20718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20717-L20718)

```diff
-       b: () => Vi,
-       e: () => Fi,
+       d: () => DU,
```

#### 2778. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20722-L20725` → after: `L20109-L20112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20109-L20112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20109-L20112) · [Before (L20722-L20725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20722-L20725)

```diff
-     var Op = cp(37246),
-       op = cp(3774),
-       Ip = cp(38013),
-       Sp = cp(38272),
+     var WT = mT(37125),
+       zT = mT(3781),
+       MT = mT(37911),
+       gT = mT(38184),
```

#### 2779. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20727-L20733` → after: `L20114-L20120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20114-L20120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20114-L20120) · [Before (L20727-L20733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20727-L20733)

```diff
-       Lp = cp(9338),
-       Yp = cp(38239),
-       Dp = cp(34),
-       Ap = cp(156),
-       Pp = cp(3246),
-       Wp = cp(38017),
-       yp = cp(3250),
+       HT = mT(9330),
+       kT = mT(38145),
+       jT = mT(31),
+       lT = mT(166),
+       LT = mT(3289),
+       pT = mT(37919),
+       BT = mT(3292),
```

#### 2780. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20735-L20745` → after: `L20122-L20132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20122-L20132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20122-L20132) · [Before (L20735-L20745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20735-L20745)

```diff
-       wp = cp(2849),
-       vp = cp(3837),
-       tp = cp(38100),
-       Hp = cp(37505),
-       dp = cp(37537),
-       ep = cp(37313),
-       jp = cp(37448),
-       kp = cp(37475),
-       mp = cp(38118),
-       Rp = cp(37822),
-       qp = cp(38103);
+       cT = mT(2875),
+       vT = mT(3841),
+       fT = mT(38007),
+       qT = mT(37385),
+       iT = mT(37421),
+       bT = mT(37185),
+       OT = mT(37321),
+       eT = mT(37359),
+       YT = mT(38036),
+       JT = mT(37738),
+       xT = mT(38013);
```

#### 2781. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20749-L20750` → after: `L20136-L20137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20136-L20137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20136-L20137) · [Before (L20749-L20750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20749-L20750)

```diff
-       (0, qp.d)(pp);
-       const cp = Pp.d.getTexture(ip, yp.h.BLOCK).url,
+       (0, xT.e)(TT);
+       const mT = LT.e.getTexture(UT, BT.f.BLOCK).url,
```

#### 2782. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20753` → after: `L20140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20140) · [Before (L20753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20753)

```diff
-       const op = (0, jp.t)(pp, {
+       const zT = (0, OT.z)(TT, {
```

#### 2783. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20757` → after: `L20144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20144) · [Before (L20757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20757)

```diff
-           samplingMode: jp.g.nearestNearestMipLinear,
+           samplingMode: OT.k.nearestNearestMipLinear,
```

#### 2784. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20759-L20760` → after: `L20146-L20147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20146-L20147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20146-L20147) · [Before (L20759-L20760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20759-L20760)

```diff
-             wrapU: jp.b.clamp,
-             wrapV: jp.b.clamp,
+             wrapU: OT.e.clamp,
+             wrapV: OT.e.clamp,
```

#### 2785. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20767-L20768` → after: `L20154-L20155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20154-L20155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20154-L20155) · [Before (L20767-L20768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20767-L20768)

```diff
-           name: `${ip}BlockModelMeshMat`,
-           pw: pp,
+           name: `${UT}BlockModelMeshMat`,
+           XZ: TT,
```

#### 2786. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20771` → after: `L20158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20158) · [Before (L20771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20771)

```diff
-             transparencyMode: kp.b.MATERIAL_ALPHATEST,
+             transparencyMode: eT.e.MATERIAL_ALPHATEST,
```

#### 2787. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20791` → after: `L20178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20178) · [Before (L20791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20791)

```diff
-       return (0, mp.o)((0, wp.g)().WU, pp, (0, Rp.i)({
+       return (0, YT.m)((0, cT.h)().GB, TT, (0, JT.g)({
```

#### 2788. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20806-L20807` → after: `L20193-L20194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20193-L20194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20193-L20194) · [Before (L20806-L20807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20806-L20807)

```diff
-         const cp = Xp(`${ip}CstmPlnMdl1`);
-         cp.Ow = !1, cp.rotation.set(...xp.rotation), cp.bakeCurrentTransformIntoVertices();
+         const mT = aT(`${UT}CstmPlnMdl1`);
+         mT.QZ = !1, mT.rotation.set(...nT.rotation), mT.bakeCurrentTransformIntoVertices();
```

#### 2789. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20811-L20812` → after: `L20198-L20199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20198-L20199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20198-L20199) · [Before (L20811-L20812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20811-L20812)

```diff
-       const Sp = (0, mp.k)(op, Ip.size > 1, !1);
-       return Sp.Ow = !1, Sp
+       const gT = (0, YT.l)(zT, MT.size > 1, !1);
+       return gT.QZ = !1, gT
```

#### 2790. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20843` → after: `L20230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20230) · [Before (L20843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20843)

```diff
-     const Bp = new ep.Zy(.5, .5, .5);
+     const QT = new bT.JB(.5, .5, .5);
```

#### 2791. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20847` → after: `L20234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20234) · [Before (L20847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20847)

```diff
-           const cp = ep.Matrix.Compose(ep.Zy.One(), ep.Quaternion.RotationYawPitchRoll(pp.rotation[1], pp.rotation[0], pp.rotation[2]), ep.Zy.FromArray(pp.position)),
+           const mT = bT.Matrix.Compose(bT.JB.One(), bT.Quaternion.RotationYawPitchRoll(TT.rotation[1], TT.rotation[0], TT.rotation[2]), bT.JB.FromArray(TT.position)),
```

#### 2792. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20851` → after: `L20238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20238) · [Before (L20851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20851)

```diff
-               ei: Ip
+               gp: MT
```

#### 2793. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20856-L20858` → after: `L20243-L20245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20243-L20245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20243-L20245) · [Before (L20856-L20858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20856-L20858)

```diff
-         op = ep.Zy.TransformCoordinates(ep.Zy.Zero(), Op),
-         Ip = ep.Zy.TransformNormal(new ep.Zy(1, 0, 0), Op),
-         Sp = ep.Zy.TransformNormal(new ep.Zy(0, 1, 0), Op),
+         zT = bT.JB.TransformCoordinates(bT.JB.Zero(), WT),
+         MT = bT.JB.TransformNormal(new bT.JB(1, 0, 0), WT),
+         gT = bT.JB.TransformNormal(new bT.JB(0, 1, 0), WT),
```

#### 2794. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20864` → after: `L20251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20251) · [Before (L20864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20864)

```diff
-         texture: Pp.d.getTexture(ip, yp.h.BLOCK).url
+         texture: LT.e.getTexture(UT, BT.f.BLOCK).url
```

#### 2795. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20874` → after: `L20261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20261) · [Before (L20874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20874)

```diff
-           return Qp("CentreCross" === cp ? Ep : pp.customPlanesInfo).map((pp => {
+           return XT("CentreCross" === mT ? tT : TT.customPlanesInfo).map((TT => {
```

#### 2796. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20906` → after: `L20293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20293) · [Before (L20906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20906)

```diff
-       (0, qp.d)(pp);
+       (0, xT.e)(TT);
```

#### 2797. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20920` → after: `L20307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20307) · [Before (L20920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20920)

```diff
-       const op = Wp.b.getBlockAtlasMaterialForPlacement(pp, !!ip.transTex, !!ip.unlitStandaloneMesh),
+       const zT = pT.e.getBlockAtlasMaterialForPlacement(TT, !!UT.transTex, !!UT.unlitStandaloneMesh),
```

#### 2798. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20926` → after: `L20313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20313) · [Before (L20926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20926)

```diff
-       return Ip.eC(!0), Ip
+       return MT.Qy(!0), MT
```

#### 2799. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20928-L20935` → after: `L20315-L20322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20315-L20322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20315-L20322) · [Before (L20928-L20935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20928-L20935)

```diff
-     var Fp = cp(9385),
-       gp = cp(1234),
-       Gp = cp(38276),
-       rp = cp(38171),
-       Zp = cp(9392),
-       zp = cp(4543),
-       sp = cp(38109),
-       Kp = cp(37473);
+     var KT = mT(9369),
+       ST = mT(1321),
+       GT = mT(38193),
+       NT = mT(38094),
+       ET = mT(9376),
+       hT = mT(4581),
+       DT = mT(38029),
+       oT = mT(37351);
```

#### 2800. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20939` → after: `L20326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20326) · [Before (L20939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20939)

```diff
-         UO: cp,
+         UW: mT,
```

#### 2801. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20951` → after: `L20338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20338) · [Before (L20951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20951)

```diff
-           UO: cp[1],
+           UW: mT[1],
```

#### 2802. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20956-L20957` → after: `L20343-L20344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20343-L20344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20343-L20344) · [Before (L20956-L20957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20956-L20957)

```diff
-       }(ip((0, Zp.n)(pp.postPiece, null))), Sp = ep.Matrix.Translation(-op, -cp, -Ip).multiply(ep.Matrix.Scaling(1 / Op, 1 / Op, 1 / Op)).multiply(ep.Matrix.Translation(0, -.5, 0)), xp = (pp, cp) => {
-         const Op = Op => (0, sp.i)((0, sp.d)(ip((0, Zp.n)(pp, Op))), cp.m);
+       }(UT((0, ET.o)(TT.postPiece, null))), gT = bT.Matrix.Translation(-zT, -mT, -MT).multiply(bT.Matrix.Scaling(1 / WT, 1 / WT, 1 / WT)).multiply(bT.Matrix.Translation(0, -.5, 0)), nT = (TT, mT) => {
+         const WT = WT => (0, DT.h)((0, DT.b)(UT((0, ET.o)(TT, WT))), mT.m);
```

#### 2803. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20960` → after: `L20347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20347) · [Before (L20960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20960)

```diff
-           arms: Zp.s.map(((pp, ip) => Op(ip)))
+           arms: ET.t.map(((TT, UT) => WT(UT)))
```

#### 2804. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20968` → after: `L20355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20355) · [Before (L20968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20968)

```diff
-           arms: Lp.arms.map(((pp, ip) => (0, sp.e)([
+           arms: HT.arms.map(((TT, UT) => (0, DT.d)([
```

#### 2805. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20982` → after: `L20369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20369) · [Before (L20982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20982)

```diff
-       return (0, sp.e)([cp, ...op].map((pp => [pp, null])))
+       return (0, DT.d)([mT, ...zT].map((TT => [TT, null])))
```

#### 2806. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20994-L20995` → after: `L20381-L20382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20381-L20382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20381-L20382) · [Before (L20994-L20995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20994-L20995)

```diff
-       if (!Op) throw new Error(`"${cp}" has no node named "${ip}"`);
-       if (!Op.length) throw new Error(`"${cp}" node "${ip}" has no mesh`);
+       if (!WT) throw new Error(`"${mT}" has no node named "${UT}"`);
+       if (!WT.length) throw new Error(`"${mT}" node "${UT}" has no mesh`);
```

#### 2807. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20997-L20998` → after: `L20384-L20385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20384-L20385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20384-L20385) · [Before (L20997-L20998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L20997-L20998)

```diff
-         const cp = (0, Kp.u)(pp, ip);
-         return (0, sp.i)(cp, pp.worldMatrix(ip, !1)),
+         const mT = (0, oT.o)(TT, UT);
+         return (0, DT.h)(mT, TT.worldMatrix(UT, !1)),
```

#### 2808. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21012` → after: `L20399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20399) · [Before (L21012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21012)

```diff
-       return (0, sp.e)(op)
+       return (0, DT.d)(zT)
```

#### 2809. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21014` → after: `L20401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20401) · [Before (L21014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21014)

```diff
-     var oi = cp(38077);
+     var mU = mT(37981);
```

#### 2810. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21022-L21023` → after: `L20409-L20410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20409-L20410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20409-L20410) · [Before (L21022-L21023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21022-L21023)

```diff
-       const Op = Pp.d.getModel(ip, yp.e.BLOCK).url,
-         op = await (0, dp.k)("", pp, Op, (() => Pp.d.getModelOverride(ip) ? {
+       const WT = LT.e.getModel(UT, BT.d.BLOCK).url,
+         zT = await (0, iT.e)("", TT, WT, (() => LT.e.getModelOverride(UT) ? {
```

#### 2811. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21026` → after: `L20413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20413) · [Before (L21026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21026)

```diff
-             rootUrl: Pp.d.getModel(ip, yp.e.BLOCK, !0).url
+             rootUrl: LT.e.getModel(UT, BT.d.BLOCK, !0).url
```

#### 2812. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21033` → after: `L20420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20420) · [Before (L21033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21033)

```diff
-       return ip ? cp & Zp.h ? pp.stackedPost : pp.post : pp.top
+       return UT ? mT & ET.j ? TT.stackedPost : TT.post : TT.top
```

#### 2813. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21038` → after: `L20425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20425) · [Before (L21038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21038)

```diff
-       const Ip = Lp.p[(0, zp.p)(ip.textureInfo)];
+       const MT = HT.s[(0, hT.o)(UT.textureInfo)];
```

#### 2814. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21043-L21044` → after: `L20430-L20431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20430-L20431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20430-L20431) · [Before (L21043-L21044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21043-L21044)

```diff
-         const Op = (0, oi.i)();
-         for (let op = 1; op < cp.length; op += 2) cp[op] = (0, oi.f)(ip, cp[op], Op)
+         const WT = (0, mU.h)();
+         for (let zT = 1; zT < mT.length; zT += 2) mT[zT] = (0, mU.e)(UT, mT[zT], WT)
```

#### 2815. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21050` → after: `L20437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20437) · [Before (L21050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21050)

```diff
-         } = null !== (op = Op.named) && void 0 !== op ? op : {},
+         } = null !== (zT = WT.named) && void 0 !== zT ? zT : {},
```

#### 2816. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21052` → after: `L20439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20439) · [Before (L21052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21052)

```diff
-         Ap = (0, mp.o)((0, wp.g)().WU, cp, {
+         lT = (0, YT.m)((0, cT.h)().GB, mT, {
```

#### 2817. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21057` → after: `L20444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20444) · [Before (L21057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21057)

```diff
-             color: (0, Kp.r)(Sp, Kp.e, xp)
+             color: (0, oT.l)(gT, oT.b, nT)
```

#### 2818. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21060` → after: `L20447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20447) · [Before (L21060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21060)

```diff
-       return Ap.material = Wp.b.getBlockAtlasMaterialForPlacement(pp, !!ip.transTex, !!ip.unlitStandaloneMesh), Ap.Ow = !1, Ap
+       return lT.material = pT.e.getBlockAtlasMaterialForPlacement(TT, !!UT.transTex, !!UT.unlitStandaloneMesh), lT.QZ = !1, lT
```

#### 2819. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21064` → after: `L20451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20451) · [Before (L21064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21064)

```diff
-       if (!cp) throw new Error(`"${ip.name}" has no connecting model GLB for model "${ip.model}"`);
+       if (!mT) throw new Error(`"${UT.name}" has no connecting model GLB for model "${UT.model}"`);
```

#### 2820. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21069-L21070` → after: `L20456-L20457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20456-L20457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20456-L20457) · [Before (L21069-L21070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21069-L21070)

```diff
-       }(pp, cp), op = void 0 !== ip.attachedTop, Ip = op ? [...Zp.d, ...Zp.d.map((pp => pp | Zp.h))] : Zp.d, Sp = new Map;
-       for (const xp of Ip) Sp.set(xp, (() => Ai(pp, ip, `${ip.name}|${xp}ConnectingModel`, ii(Di(Op, op, xp), xp))));
+       }(TT, mT), zT = void 0 !== UT.attachedTop, MT = zT ? [...ET.h, ...ET.h.map((TT => TT | ET.j))] : ET.h, gT = new Map;
+       for (const nT of MT) gT.set(nT, (() => kU(TT, UT, `${UT.name}|${nT}ConnectingModel`, RT(HU(WT, zT, nT), nT))));
```

#### 2821. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21076-L21077` → after: `L20463-L20464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20463-L20464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20463-L20464) · [Before (L21076-L21077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21076-L21077)

```diff
-       if (!cp) throw new Error(`"${pp}" variants registered before its connecting meshes were built`);
-       return cp.get((0, Zp.p)(ip))
+       if (!mT) throw new Error(`"${TT}" variants registered before its connecting meshes were built`);
+       return mT.get((0, ET.r)(UT))
```

#### 2822. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21079` → after: `L20466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20466) · [Before (L21079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21079)

```diff
-     var yi = cp(9399);
+     var LU = mT(9380);
```

#### 2823. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21097` → after: `L20484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20484) · [Before (L21097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21097)

```diff
-       const [ip, cp] = yi.r.bottom.map(pp), {
+       const [UT, mT] = LU.j.bottom.map(TT), {
```

#### 2824. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21103-L21104` → after: `L20490-L20491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20490-L20491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20490-L20491) · [Before (L21103-L21104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21103-L21104)

```diff
-           left: (0, sp.i)((0, sp.d)(cp), ip.m),
-           right: (0, sp.i)((0, sp.d)(Op), ip.m)
+           left: (0, DT.h)((0, DT.b)(mT), UT.m),
+           right: (0, DT.h)((0, DT.b)(WT), UT.m)
```

#### 2825. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21106` → after: `L20493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20493) · [Before (L21106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21106)

```diff
-       }, [Lp, Yp] = yi.r.top.map(pp);
+       }, [HT, kT] = LU.j.top.map(TT);
```

#### 2826. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21118` → after: `L20505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20505) · [Before (L21118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21118)

```diff
-       return (0, sp.i)((0, sp.d)(pp), Sp.m)
+       return (0, DT.h)((0, DT.b)(TT), gT.m)
```

#### 2827. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21127` → after: `L20514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20514) · [Before (L21127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21127)

```diff
-         Sp = (0, sp.e)([
+         gT = (0, DT.d)([
```

#### 2828. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21131` → after: `L20518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20518) · [Before (L21131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21131)

```diff
-       return (0, sp.i)(Sp, ep.Matrix.RotationY((ip - 1) * Math.PI / 2).m)
+       return (0, DT.h)(gT, bT.Matrix.RotationY((UT - 1) * Math.PI / 2).m)
```

#### 2829. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21138` → after: `L20525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20525) · [Before (L21138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21138)

```diff
-       return `${pp}|${ip}`
+       return `${TT}|${UT}`
```

#### 2830. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21143` → after: `L20530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20530) · [Before (L21143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21143)

```diff
-       if (!Op) throw new Error(`"${pp}" variants registered before its fence gate meshes were built`);
+       if (!WT) throw new Error(`"${TT}" variants registered before its fence gate meshes were built`);
```

#### 2831. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21146` → after: `L20533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20533) · [Before (L21146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21146)

```diff
-     var ki = cp(38178);
+     var OU = mT(38101);
```

#### 2832. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21160` → after: `L20547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20547) · [Before (L21160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21160)

```diff
-         return (ip.endsWith(" Leaves") || cp) && (op |= ki.d.vegetation), ("Dirt" === ip || ip.endsWith(" Dirt") || ip.endsWith(" Soil") || cp) && (op |= ki.d.dirt), (mi.has(ip) || Op) && (op |= ki.d.sand), (Ri.has(ip) || Op || ip.endsWith(" Ore") || qi.test(ip)) && (op |= ki.d.r … [truncated]
+         return (UT.endsWith(" Leaves") || mT) && (zT |= OU.c.vegetation), ("Dirt" === UT || UT.endsWith(" Dirt") || UT.endsWith(" Soil") || mT) && (zT |= OU.c.dirt), (eU.has(UT) || WT) && (zT |= OU.c.sand), (YU.has(UT) || WT || UT.endsWith(" Ore") || JU.test(UT)) && (zT |= OU.c.r … [truncated]
```

#### 2833. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21166` → after: `L20553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20553) · [Before (L21166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21166)

```diff
-             return ki.d.slab;
+             return OU.c.slab;
```

#### 2834. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21168` → after: `L20555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20555) · [Before (L21168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21168)

```diff
-             return ki.d.stairs
+             return OU.c.stairs
```

#### 2835. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21170` → after: `L20557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20557) · [Before (L21170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21170)

```diff
-         return cp && Mi.has(cp) ? ki.d.flat | (Ci.has(Op) ? 0 : ki.d.vegetation) : cp && Ei.has(Op) ? ki.d.vegetation : 0
+         return mT && xU.has(mT) ? OU.c.flat | (dU.has(WT) ? 0 : OU.c.vegetation) : mT && wU.has(WT) ? OU.c.vegetation : 0
```

#### 2836. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21173-L21177` → after: `L20560-L20564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20560-L20564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20560-L20564) · [Before (L21173-L21177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21173-L21177)

```diff
-     var li = cp(37436),
-       Qi = cp(37519),
-       Ji = cp(38281),
-       Bi = cp(3400),
-       Ni = cp(4754);
+     var aU = mT(37302),
+       yU = mT(37397),
+       XU = mT(38198),
+       IU = mT(3411),
+       QU = mT(4751);
```

#### 2837. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21181` → after: `L20568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20568) · [Before (L21181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21181)

```diff
-       return [pp.animTextures.length - 1, 1, null !== (ip = pp.animationInterval) && void 0 !== ip ? ip : 200]
+       return [TT.animTextures.length - 1, 1, null !== (UT = TT.animationInterval) && void 0 !== UT ? UT : 200]
```

#### 2838. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21187` → after: `L20574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20574) · [Before (L21187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21187)

```diff
-         for (const ip of [Lp.e, Op.o])
+         for (const UT of [HT.g, WT.s])
```

#### 2839. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21192-L21193` → after: `L20579-L20580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20579-L20580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20579-L20580) · [Before (L21192-L21193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21192-L21193)

```diff
-         return Array.from(pp, (pp => null !== pp && void 0 !== pp ? pp : ""))
-       }()), await (0, Ni.s)("block textures");
+         return Array.from(TT, (TT => null !== TT && void 0 !== TT ? TT : ""))
+       }()), await (0, QU.r)("block textures");
```

#### 2840. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21200-L21201` → after: `L20587-L20588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20587-L20588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20587-L20588) · [Before (L21200-L21201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21200-L21201)

```diff
-         tp = cp(38286);
-       vp(new window.FontFace("Jetbrains Mono", `url(${tp})`).load().then((pp => {
+         fT = mT(38203);
+       vT(new window.FontFace("Jetbrains Mono", `url(${fT})`).load().then((TT => {
```

#### 2841. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21203` → after: `L20590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20590) · [Before (L21203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21203)

```diff
-       }))), pp.Yk.Lcp({
+       }))), TT.pY.DUT({
```

#### 2842. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21205-L21206` → after: `L20592-L20593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20592-L20593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20592-L20593) · [Before (L21205-L21206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21205-L21206)

```diff
-       }), (0, dp.l)(), await Pp.d.requiredAssetsAreGenerated();
-       const ep = Pp.d.getGenerationFailure();
+       }), (0, iT.i)(), await LT.e.requiredAssetsAreGenerated();
+       const bT = LT.e.getGenerationFailure();
```

#### 2843. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21208-L21212` → after: `L20595-L20599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20595-L20599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20595-L20599) · [Before (L21208-L21212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21208-L21212)

```diff
-       await (0, Ni.s)("items object"), (0, Ip.r)(), await (0, Ni.s)("pick helper"), wp.k.localPlayerPickActionHelper = new Yp.d(pp, pp.NJ), await (0, Ni.s)("block atlas");
-       const kp = Pp.d.getBlockAtlasArr(),
-         qp = Pp.d.getBlockAtlasPixels(),
-         Mp = Pp.d.getBlockAtlasWidth(),
-         Cp = Lp.l.flatMap((pp => {
+       await (0, QU.r)("items object"), (0, MT.r)(), await (0, QU.r)("pick helper"), cT.j.localPlayerPickActionHelper = new kT.d(TT, TT.VV), await (0, QU.r)("block atlas");
+       const eT = LT.e.getBlockAtlasArr(),
+         xT = LT.e.getBlockAtlasPixels(),
+         dT = LT.e.getBlockAtlasWidth(),
+         wT = HT.q.flatMap((TT => {
```

#### 2844. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21221-L21222` → after: `L20608-L20609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20608-L20609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20608-L20609) · [Before (L21221-L21222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21221-L21222)

```diff
-       const Ep = pp.WU.dU();
-       Wp.b.setUseWebGL2(Ep);
+       const tT = TT.GB.RB();
+       pT.e.setUseWebGL2(tT);
```

#### 2845. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21225-L21226` → after: `L20612-L20613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20612-L20613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20612-L20613) · [Before (L21225-L21226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21225-L21226)

```diff
-       Up.c.get("clientEscMenuOptions").disableTexAtlas && !pp.Dy && (Xp = !1, lp = "options");
-       let Qp = Pp.d.getImagesPerAtlas();
+       ZT.b.get("clientEscMenuOptions").disableTexAtlas && !TT.Np && (aT = !1, yT = "options");
+       let XT = LT.e.getImagesPerAtlas();
```

#### 2846. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21228` → after: `L20615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20615) · [Before (L21228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21228)

```diff
-         const pp = `imagesPerAtlas = ${Qp}`;
+         const TT = `imagesPerAtlas = ${XT}`;
```

#### 2847. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21231-L21233` → after: `L20618-L20620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20618-L20620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20618-L20620) · [Before (L21231-L21233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21231-L21233)

```diff
-       const Jp = pp.WU.engine.getCaps().texture2DArrayMaxLayerCount;
-       Xp && Ep && Jp < Qp[0] && (Xp = !1, lp = `maxLayerCount = ${Jp}, layerCount = ${Qp[0]}`);
-       const Bp = pp.WU.engine.getCaps().maxTextureSize,
+       const IT = TT.GB.engine.getCaps().texture2DArrayMaxLayerCount;
+       aT && tT && IT < XT[0] && (aT = !1, yT = `maxLayerCount = ${IT}, layerCount = ${XT[0]}`);
+       const QT = TT.GB.engine.getCaps().maxTextureSize,
```

#### 2848. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21235-L21236` → after: `L20622-L20623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20622-L20623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20622-L20623) · [Before (L21235-L21236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21235-L21236)

```diff
-       Xp && Bp < Np && (Xp = !1, lp = `maxTextureSize = ${Bp}, textureSize = ${Np}`), console.log("Graphics backend", null !== (ip = null === (op = pp.WU.yU) || void 0 === op ? void 0 : op.backendName) && void 0 !== ip ? ip : `webgl${pp.WU.engine.eU}`, "useTexAtlas", Xp, "reason" … [truncated]
-       const Tp = Math.floor(Object.keys((0, gp.W)(Lp.e)).length / 50);
+       aT && QT < sT && (aT = !1, yT = `maxTextureSize = ${QT}, textureSize = ${sT}`), console.log("Graphics backend", null !== (UT = null === (zT = TT.GB.NB) || void 0 === zT ? void 0 : zT.backendName) && void 0 !== UT ? UT : `webgl${TT.GB.engine.TZ}`, "useTexAtlas", aT, "reason" … [truncated]
+       const FT = Math.floor(Object.keys((0, ST.eb)(HT.g)).length / 50);
```

#### 2849. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21238-L21239` → after: `L20625-L20626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20625-L20626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20625-L20626) · [Before (L21238-L21239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21238-L21239)

```diff
-         bp += 1, bp % 50 === 0 && (Dp.m.GA("matchmakeAndPlayStepCompleted", {
-           step: Ap.k.REGISTRATION,
+         VT += 1, VT % 50 === 0 && (jT.j.EZ("matchmakeAndPlayStepCompleted", {
+           step: lT.j.REGISTRATION,
```

#### 2850. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21243` → after: `L20630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20630) · [Before (L21243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21243)

```diff
-         }))), await (0, Ni.s)(`block ${pp}`)
+         }))), await (0, QU.r)(`block ${TT}`)
```

#### 2851. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21246-L21247` → after: `L20633-L20634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20633-L20634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20633-L20634) · [Before (L21246-L21247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21246-L21247)

```diff
-       for (const cp in (0, gp.W)(Lp.e)) {
-         const ip = Lp.e[cp],
+       for (const mT in (0, ST.eb)(HT.g)) {
+         const UT = HT.g[mT],
```

#### 2852. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21251` → after: `L20638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20638) · [Before (L21251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21251)

```diff
-           if (si(Lp.e[pp], ip)) {
+           if (EU(HT.g[TT], UT)) {
```

#### 2853. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21257` → after: `L20644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20644) · [Before (L21257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21257)

```diff
-           await (0, Ni.s)(`block ${cp} model`);
+           await (0, QU.r)(`block ${mT} model`);
```

#### 2854. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21260` → after: `L20647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20647) · [Before (L21260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21260)

```diff
-               T6: await Zi(ip.model).getMesh(pp.WU.Gl(), ip),
+               U1: await GU(UT.model).getMesh(TT.GB.KF(), UT),
```

#### 2855. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21263-L21269` → after: `L20650-L20656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20650-L20656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20650-L20656) · [Before (L21263-L21269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21263-L21269)

```diff
-               Ww: ip.Ww,
-               oR: Ki(cp),
-               Jy: null !== (op = ip.Jy) && void 0 !== op ? op : null,
-               yw: null !== (Ip = ip.yw) && void 0 !== Ip ? Ip : null,
-               Ny: ip.Ny,
-               Tl: Xi(cp, ip.model),
-               VV: () => pc(ip, ip)
+               oZ: UT.oZ,
+               ZJ: hU(mT),
+               vB: null !== (zT = UT.vB) && void 0 !== zT ? zT : null,
+               AZ: null !== (MT = UT.AZ) && void 0 !== MT ? MT : null,
+               fB: UT.fB,
+               uF: tU(mT, UT.model),
+               W4: () => oU(UT, UT)
```

#### 2856. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21271` → after: `L20658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20658) · [Before (L21271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21271)

```diff
-             pp.UW.vF(ip.id, Sp), null !== ip.meta.metaStr && await bi(pp, cp, Sp), await fp(cp)
+             TT.DL.nS(UT.id, gT), null !== UT.meta.metaStr && await PU(TT, mT, gT), await PT(mT)
```

#### 2857. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21277-L21278` → after: `L20664-L20665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20664-L20665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20664-L20665) · [Before (L21277-L21278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21277-L21278)

```diff
-             if ("number" === typeof ip.textureInfo[0]) ip.textureInfo.length > 3 && (op = !0), pp.UW.Z6(cp, {
-               i6: [],
+             if ("number" === typeof UT.textureInfo[0]) UT.textureInfo.length > 3 && (zT = !0), TT.DL.T_(mT, {
+               Z4: [],
```

#### 2858. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21280` → after: `L20667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20667) · [Before (L21280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21280)

```diff
-               I6: op
+               O4: zT
```

#### 2859. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21287-L21294` → after: `L20674-L20681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20674-L20681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20674-L20681) · [Before (L21287-L21294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21287-L21294)

```diff
-                 const xp = `${cp}${Sp}`;
-                 if (Xp && void 0 !== ip.atlasIdx[Sp]) pp.UW.Z6(xp, {
-                   i6: kp,
-                   R6: qp,
-                   M6: Mp,
-                   w6: ip.atlasIdx[Sp],
-                   I6: op,
-                   Uw: Cp
+                 const nT = `${mT}${gT}`;
+                 if (aT && void 0 !== UT.atlasIdx[gT]) TT.DL.T_(nT, {
+                   Z4: eT,
+                   o4: xT,
+                   A4: dT,
+                   K4: UT.atlasIdx[gT],
+                   O4: zT,
+                   RZ: wT
```

#### 2860. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21299-L21300` → after: `L20686-L20687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20686-L20687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20686-L20687) · [Before (L21299-L21300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21299-L21300)

```diff
-                       i6: [Pp.d.getTexture("string" === typeof ip ? ip : xp, yp.h.BLOCK).url],
-                       I6: op
+                       Z4: [LT.e.getTexture("string" === typeof UT ? UT : nT, BT.f.BLOCK).url],
+                       O4: zT
```

#### 2861. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21302` → after: `L20689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20689) · [Before (L21302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21302)

```diff
-                   ("string" === typeof ip ? 0 : ip.animTextures.length) > 0 && (cp.Uw = Ti(ip)), pp.UW.Z6(xp, cp)
+                   ("string" === typeof UT ? 0 : UT.animTextures.length) > 0 && (mT.RZ = sU(UT)), TT.DL.T_(nT, mT)
```

#### 2862. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21308` → after: `L20695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20695) · [Before (L21308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21308)

```diff
-                   const ip = `${cp}${pp}`;
+                   const UT = `${mT}${TT}`;
```

#### 2863. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21314-L21317` → after: `L20701-L20704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20701-L20704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20701-L20704) · [Before (L21314-L21317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21314-L21317)

```diff
-             if (op ||= ip.transTex, op ||= (null === (Fp = ip.textureInfo.colour) || void 0 === Fp ? void 0 : Fp.length) > 3, Xp && void 0 !== ip.atlasIdx) pp.UW.Z6(cp, {
-               i6: kp,
-               R6: qp,
-               M6: Mp,
+             if (zT ||= UT.transTex, zT ||= (null === (KT = UT.textureInfo.colour) || void 0 === KT ? void 0 : KT.length) > 3, aT && void 0 !== UT.atlasIdx) TT.DL.T_(mT, {
+               Z4: eT,
+               o4: xT,
+               A4: dT,
```

#### 2864. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21319-L21322` → after: `L20706-L20709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20706-L20709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20706-L20709) · [Before (L21319-L21322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21319-L21322)

```diff
-               R7: !1,
-               w6: ip.atlasIdx[0],
-               I6: op,
-               Uw: Cp
+               U_: !1,
+               K4: UT.atlasIdx[0],
+               O4: zT,
+               RZ: wT
```

#### 2865. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21325-L21327` → after: `L20712-L20714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20712-L20714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20712-L20714) · [Before (L21325-L21327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21325-L21327)

```diff
-               const Op = Pp.d.getTexture(cp, yp.h.BLOCK).url;
-               pp.UW.Z6(cp, {
-                 i6: [Op],
+               const WT = LT.e.getTexture(mT, BT.f.BLOCK).url;
+               TT.DL.T_(mT, {
+                 Z4: [WT],
```

#### 2866. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21329-L21331` → after: `L20716-L20718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20716-L20718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20716-L20718) · [Before (L21329-L21331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21329-L21331)

```diff
-                 R7: !1,
-                 I6: op,
-                 Uw: Ti(ip.textureInfo)
+                 U_: !1,
+                 O4: zT,
+                 RZ: sU(UT.textureInfo)
```

#### 2867. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21336-L21342` → after: `L20723-L20729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20723-L20729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20723-L20729) · [Before (L21336-L21342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21336-L21342)

```diff
-             pp.UW.Z6(cp, {
-               i6: kp,
-               R6: qp,
-               M6: Mp,
-               w6: Op,
-               I6: op,
-               Uw: Cp
+             TT.DL.T_(mT, {
+               Z4: eT,
+               o4: xT,
+               A4: dT,
+               K4: WT,
+               O4: zT,
+               RZ: wT
```

#### 2868. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21345-L21348` → after: `L20732-L20735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20732-L20735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20732-L20735) · [Before (L21345-L21348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21345-L21348)

```diff
-             const Op = Pp.d.getTexture(ip.textureInfo, yp.h.BLOCK).url;
-             pp.UW.Z6(cp, {
-               i6: [Op],
-               I6: op
+             const WT = LT.e.getTexture(UT.textureInfo, BT.f.BLOCK).url;
+             TT.DL.T_(mT, {
+               Z4: [WT],
+               O4: zT
```

#### 2869. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21351-L21355` → after: `L20738-L20742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20738-L20742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20738-L20742) · [Before (L21351-L21355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21351-L21355)

```diff
-           pp.UW.vF(ip.id, {
-             material: void 0 === Op ? cp : Op,
-             tW: ip.tW,
-             solid: null !== (hp = ip.solid) && void 0 !== hp ? hp : !ip.tW,
-             Ww: ip.Ww,
+           TT.DL.nS(UT.id, {
+             material: void 0 === WT ? mT : WT,
+             RL: UT.RL,
+             solid: null !== (uT = UT.solid) && void 0 !== uT ? uT : !UT.RL,
+             oZ: UT.oZ,
```

#### 2870. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21357-L21360` → after: `L20744-L20747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20744-L20747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20744-L20747) · [Before (L21357-L21360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21357-L21360)

```diff
-             Jy: null !== (ap = ip.Jy) && void 0 !== ap ? ap : null,
-             yw: null !== (np = ip.yw) && void 0 !== np ? np : null,
-             Ny: ip.Ny,
-             Tl: Xi(cp, ip.model)
+             vB: null !== (CT = UT.vB) && void 0 !== CT ? CT : null,
+             AZ: null !== (rT = UT.AZ) && void 0 !== rT ? rT : null,
+             fB: UT.fB,
+             uF: tU(mT, UT.model)
```

#### 2871. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21362` → after: `L20749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20749) · [Before (L21362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21362)

```diff
-         }(0, Ip.B)(cp, ip.id, pp.WU.Gl(), void 0)
+         }(0, MT.D)(mT, UT.id, TT.GB.KF(), void 0)
```

#### 2872. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21364` → after: `L20751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20751) · [Before (L21364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21364)

```diff
-       for (const cp in Op.o) {
+       for (const mT in WT.s) {
```

#### 2873. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21366-L21367` → after: `L20753-L20754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20753-L20754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20753-L20754) · [Before (L21366-L21367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21366-L21367)

```diff
-         const ip = Op.o[cp];
-         await (0, Ni.s)(`item ${cp}`), (0, Ip.B)(cp, ip.id, pp.WU.Gl(), ip.type)
+         const UT = WT.s[mT];
+         await (0, QU.r)(`item ${mT}`), (0, MT.D)(mT, UT.id, TT.GB.KF(), UT.type)
```

#### 2874. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21369` → after: `L20756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20756) · [Before (L21369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21369)

```diff
-       return await (0, Ni.s)("block overlays"),
+       return await (0, QU.r)("block overlays"),
```

#### 2875. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21371` → after: `L20758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20758) · [Before (L21371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21371)

```diff
-           const ip = pp.WU.Gl();
+           const UT = TT.GB.KF();
```

#### 2876. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21374` → after: `L20761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20761) · [Before (L21374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21374)

```diff
-             const op = Pp.d.getTexture(`destroy_stage_${Op}`, yp.h.BLOCK).url,
+             const zT = LT.e.getTexture(`destroy_stage_${WT}`, BT.f.BLOCK).url,
```

#### 2877. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21376-L21377` → after: `L20763-L20764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20763-L20764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20763-L20764) · [Before (L21376-L21377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21376-L21377)

```diff
-                 wrapU: jp.b.clamp,
-                 wrapV: jp.b.clamp,
+                 wrapU: OT.e.clamp,
+                 wrapV: OT.e.clamp,
```

#### 2878. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21380` → after: `L20767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20767) · [Before (L21380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21380)

```diff
-               Sp = (0, jp.t)(ip, {
+               gT = (0, OT.z)(UT, {
```

#### 2879. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21384` → after: `L20771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20771) · [Before (L21384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21384)

```diff
-                 samplingMode: jp.g.nearestNearestMipLinear,
+                 samplingMode: OT.k.nearestNearestMipLinear,
```

#### 2880. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21388` → after: `L20775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20775) · [Before (L21388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21388)

```diff
-                 transparencyMode: li.k.alphaTest,
+                 transparencyMode: aU.j.alphaTest,
```

#### 2881. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21394-L21395` → after: `L20781-L20782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20781-L20782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20781-L20782) · [Before (L21394-L21395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21394-L21395)

```diff
-                 name: `breakingBoxTexture${Op}`,
-                 pw: ip,
+                 name: `breakingBoxTexture${WT}`,
+                 XZ: UT,
```

#### 2882. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21399-L21400` → after: `L20786-L20787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20786-L20787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20786-L20787) · [Before (L21399-L21400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21399-L21400)

```diff
-             null === (cp = pp.WU.yU) || void 0 === cp || cp.prepareTexture(Sp);
-             const Yp = (0, mp.o)(pp.WU, `breakingBox${Op}`, (0, Rp.e)({
+             null === (mT = TT.GB.NB) || void 0 === mT || mT.prepareTexture(gT);
+             const kT = (0, YT.m)(TT.GB, `breakingBox${WT}`, (0, JT.b)({
```

#### 2883. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21405` → after: `L20792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20792) · [Before (L21405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21405)

```diff
-             Yp.material = Lp, pp.WU.Iw(Yp), Yp.eC(!1), pp.WU.HLp.push(Yp)
+             kT.material = HT, TT.GB.FZ(kT), kT.Qy(!1), TT.GB.AnT.push(kT)
```

#### 2884. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21410-L21414` → after: `L20797-L20801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20797-L20801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20797-L20801) · [Before (L21410-L21414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21410-L21414)

```diff
-             pw: ip
-           } = pp.WU, cp = (0, Rp.e)({
-             width: Ji.h,
-             height: Ji.h,
-             depth: Ji.h
+             XZ: UT
+           } = TT.GB, mT = (0, JT.b)({
+             width: XU.f,
+             height: XU.f,
+             depth: XU.f
```

#### 2885. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21416-L21417` → after: `L20803-L20804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20803-L20804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20803-L20804) · [Before (L21416-L21417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21416-L21417)

```diff
-           for (let Pp = 0; Pp < Op; Pp++) op[4 * Pp + 3] = cp.positions[3 * Pp + 2] < 0 ? ai : Ji.i;
-           const Ip = (0, mp.o)(pp.WU, "highlight", {
+           for (let LT = 0; LT < WT; LT++) zT[4 * LT + 3] = mT.positions[3 * LT + 2] < 0 ? VU : XU.h;
+           const MT = (0, YT.m)(TT.GB, "highlight", {
```

#### 2886. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21424` → after: `L20811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20811) · [Before (L21424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21424)

```diff
-               ...Qi.e,
+               ...yU.c,
```

#### 2887. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21428` → after: `L20815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20815) · [Before (L21428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21428)

```diff
-               transparencyMode: li.k.alphaBlend
+               transparencyMode: aU.j.alphaBlend
```

#### 2888. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21432` → after: `L20819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20819) · [Before (L21432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21432)

```diff
-             pw: ip,
+             XZ: UT,
```

#### 2889. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21438` → after: `L20825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20825) · [Before (L21438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21438)

```diff
-               pw: ip,
+               XZ: UT,
```

#### 2890. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21441-L21442` → after: `L20828-L20829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20828-L20829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20828-L20829) · [Before (L21441-L21442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21441-L21442)

```diff
-             Lp = Ji.l,
-             Yp = Ji.q,
+             HT = XU.j,
+             kT = XU.n,
```

#### 2891. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21444` → after: `L20831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20831) · [Before (L21444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21444)

```diff
-               const Sp = (0, mp.o)(pp.WU, ip, (0, Rp.i)({
+               const gT = (0, YT.m)(TT.GB, UT, (0, JT.g)({
```

#### 2892. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21451-L21454` → after: `L20838-L20841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20838-L20841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20838-L20841) · [Before (L21451-L21454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21451-L21454)

```diff
-           for (const Pp of Ap) Pp.material = xp, Pp.parent = Ip, Pp.Ow = !1, pp.WU.Iw(Pp);
-           Ip.Ow = !1, Ip.Gy = !0, Ip.sy = !0, pp.WU.Iw(Ip), Ip.metadata.XLp = () => {
-             (0, Gp.d)(pp, Ap, Ip.ei.x, Ip.ei.y, Ji.l, Ji.q)
-           }, Ip.eC(!1), pp.WU.tLp = Ip
+           for (const LT of lT) LT.material = nT, LT.parent = MT, LT.QZ = !1, TT.GB.FZ(LT);
+           MT.QZ = !1, MT.YB = !0, MT.dB = !0, TT.GB.FZ(MT), MT.metadata.jHT = () => {
+             (0, GT.g)(TT, lT, MT.gp.x, MT.gp.y, XU.j, XU.n)
+           }, MT.Qy(!1), TT.GB.onT = MT
```

#### 2893. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21458-L21459` → after: `L20845-L20846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20845-L20846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20845-L20846) · [Before (L21458-L21459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21458-L21459)

```diff
-             pw: ip
-           } = pp.WU, cp = (0, mp.o)(pp.WU, "floating", (0, Rp.i)({
+             XZ: UT
+           } = TT.GB, mT = (0, YT.m)(TT.GB, "floating", (0, JT.g)({
```

#### 2894. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21463` → after: `L20850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20850) · [Before (L21463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21463)

```diff
-             ...Qi.e,
+             ...yU.c,
```

#### 2895. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21470` → after: `L20857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20857) · [Before (L21470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21470)

```diff
-             pw: ip,
+             XZ: UT,
```

#### 2896. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21473-L21474` → after: `L20860-L20861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20860-L20861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20860-L20861) · [Before (L21473-L21474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21473-L21474)

```diff
-           }).mirror, cp.rotation.set(-Math.PI / 2, 0, 0), cp.Gy = !0, cp.sy = !0, pp.WU.Iw(cp), cp.Ow = !1, cp.eC(!1), pp.WU.pOp = cp
-         }(pp), Dp.m.GA("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(Sp), {
+           }).mirror, mT.rotation.set(-Math.PI / 2, 0, 0), mT.YB = !0, mT.dB = !0, TT.GB.FZ(mT), mT.QZ = !1, mT.Qy(!1), TT.GB.FmT = mT
+         }(TT), jT.j.EZ("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(gT), {
```

#### 2897. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21481` → after: `L20868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20868) · [Before (L21481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21481)

```diff
-       const op = Lp.k[ip];
+       const zT = HT.p[UT];
```

#### 2898. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21483` → after: `L20870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20870) · [Before (L21483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21483)

```diff
-       const Sp = Lp.e[ip],
+       const gT = HT.g[UT],
```

#### 2899. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21489` → after: `L20876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20876) · [Before (L21489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21489)

```diff
-         const Op = Lp.e[Hp];
+         const WT = HT.g[qT];
```

#### 2900. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21492` → after: `L20879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20879) · [Before (L21492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21492)

```diff
-           await (0, Ni.s)(`block ${Hp}`);
+           await (0, QU.r)(`block ${qT}`);
```

#### 2901. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21494` → after: `L20881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20881) · [Before (L21494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21494)

```diff
-           let Lp = cp.T6;
+           let HT = mT.U1;
```

#### 2902. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21500-L21501` → after: `L20887-L20888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20887-L20888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20887-L20888) · [Before (L21500-L21501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21500-L21501)

```diff
-             } = Op.meta, Ip = (0, rp.k)(ip === Fp.c.top, cp, null !== op && void 0 !== op ? op : 1);
-             Ip !== rp.g && (xp.has(Ip.key) || xp.set(Ip.key, (() => ap(pp.WU.Gl(), Sp, Ip))), Lp = xp.get(Ip.key))
+             } = WT.meta, MT = (0, NT.r)(UT === KT.d.top, mT, null !== zT && void 0 !== zT ? zT : 1);
+             MT !== NT.j && (nT.has(MT.key) || nT.set(MT.key, (() => CT(TT.GB.KF(), gT, MT))), HT = nT.get(MT.key))
```

#### 2903. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21504-L21506` → after: `L20891-L20893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20891-L20893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20891-L20893) · [Before (L21504-L21506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21504-L21506)

```diff
-             ip !== Ap && (Yp.has(ip) || Yp.set(ip, (() => hp(pp.WU.Gl(), Op))), Lp = Yp.get(ip))
-           } else(0, Zp.C)(Sp) ? Lp = Wi(ip, Op.meta.metaStr) : (0, yi.J)(Sp) && (Lp = ji(ip, Op.meta.rot, Op.meta.open));
-           pp.UW.vF(Op.id, {
+             UT !== lT && (kT.has(UT) || kT.set(UT, (() => uT(TT.GB.KF(), WT))), HT = kT.get(UT))
+           } else(0, ET.C)(gT) ? HT = lU(UT, WT.meta.metaStr) : (0, LU.x)(gT) && (HT = bU(UT, WT.meta.rot, WT.meta.open));
+           TT.DL.nS(WT.id, {
```

#### 2904. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21508-L21509` → after: `L20895-L20896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20895-L20896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20895-L20896) · [Before (L21508-L21509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21508-L21509)

```diff
-             T6: Lp,
-             oR: op,
+             U1: HT,
+             ZJ: zT,
```

#### 2905. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21511-L21517` → after: `L20898-L20904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20898-L20904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20898-L20904) · [Before (L21511-L21517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21511-L21517)

```diff
-             Ww: Op.Ww,
-             Jy: null !== (Wp = null !== (yp = Op.Jy) && void 0 !== yp ? yp : cp.Jy) && void 0 !== Wp ? Wp : null,
-             yw: null !== (Up = null !== (wp = Op.yw) && void 0 !== wp ? wp : cp.yw) && void 0 !== Up ? Up : null,
-             Ny: null !== (vp = Op.Ny) && void 0 !== vp ? vp : cp.Ny,
-             Tl: Xi(Hp, null !== (tp = Op.model) && void 0 !== tp ? tp : Sp.model),
-             VV: () => pc(Sp, Op)
-           }), (0, Ip.B)(Hp, Op.id, pp.WU.Gl(), void 0)
+             oZ: WT.oZ,
+             vB: null !== (pT = null !== (BT = WT.vB) && void 0 !== BT ? BT : mT.vB) && void 0 !== pT ? pT : null,
+             AZ: null !== (ZT = null !== (cT = WT.AZ) && void 0 !== cT ? cT : mT.AZ) && void 0 !== ZT ? ZT : null,
+             fB: null !== (vT = WT.fB) && void 0 !== vT ? vT : mT.fB,
+             uF: tU(qT, null !== (fT = WT.model) && void 0 !== fT ? fT : gT.model),
+             W4: () => oU(gT, WT)
+           }), (0, MT.D)(qT, WT.id, TT.GB.KF(), void 0)
```

#### 2906. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21525` → after: `L20912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20912) · [Before (L21525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21525)

```diff
-         alpha: Ji.o
+         alpha: XU.m
```

#### 2907. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21530` → after: `L20917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20917) · [Before (L21530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21530)

```diff
-         WU: ip
+         GB: UT
```

#### 2908. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21532-L21536` → after: `L20919-L20923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20919-L20923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20919-L20923) · [Before (L21532-L21536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21532-L21536)

```diff
-         pw: cp
-       } = ip, Op = (0, mp.o)(ip, "ezBridgeGhost", (0, Rp.e)({
-         width: Ji.h,
-         height: Ji.h,
-         depth: Ji.h
+         XZ: mT
+       } = UT, WT = (0, YT.m)(UT, "ezBridgeGhost", (0, JT.b)({
+         width: XU.f,
+         height: XU.f,
+         depth: XU.f
```

#### 2909. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21538` → after: `L20925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20925) · [Before (L21538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21538)

```diff
-         ...Qi.e,
+         ...yU.c,
```

#### 2910. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21541-L21542` → after: `L20928-L20929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20928-L20929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20928-L20929) · [Before (L21541-L21542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21541-L21542)

```diff
-         transparencyMode: li.k.alphaBlend,
-         alpha: Ji.i,
+         transparencyMode: aU.j.alphaBlend,
+         alpha: XU.h,
```

#### 2911. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21548` → after: `L20935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20935) · [Before (L21548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21548)

```diff
-         pw: cp,
+         XZ: mT,
```

#### 2912. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21552` → after: `L20939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20939) · [Before (L21552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21552)

```diff
-       const Ip = (0, mp.o)(ip, "ezBridgeGhostOutline", (0, Kp.h)((0, Ji.e)().map((pp => {
+       const MT = (0, YT.m)(UT, "ezBridgeGhostOutline", (0, oT.d)((0, XU.e)().map((TT => {
```

#### 2913. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21554` → after: `L20941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20941) · [Before (L21554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21554)

```diff
-         return [(0, Rp.e)({
+         return [(0, JT.b)({
```

#### 2914. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21560` → after: `L20947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20947) · [Before (L21560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21560)

```diff
-       return Ip.Ow = !1, Ip.Gy = !0, Ip.sy = !0, Ip.material = (0, Hp.b)({
+       return MT.QZ = !1, MT.YB = !0, MT.dB = !0, MT.material = (0, qT.b)({
```

#### 2915. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21562` → after: `L20949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20949) · [Before (L21562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21562)

```diff
-         pw: cp,
+         XZ: mT,
```

#### 2916. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21564` → after: `L20951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20951) · [Before (L21564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21564)

```diff
-       }).mirror, Ip.parent = Op, ip.Iw(Ip), Op.Ow = !1, Op.Gy = !0, Op.sy = !0, ip.Iw(Op), Op.eC(!1), Op
+       }).mirror, MT.parent = WT, UT.FZ(MT), WT.QZ = !1, WT.YB = !0, WT.dB = !0, UT.FZ(WT), WT.Qy(!1), WT
```

#### 2917. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21566` → after: `L20953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20953) · [Before (L21566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21566)

```diff
-     const gi = ri(tp.n),
+     const rU = SU(fT.k),
```

#### 2918. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21582-L21583` → after: `L20969-L20970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20969-L20970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20969-L20970) · [Before (L21582-L21583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21582-L21583)

```diff
-                 const Sp = Xp(`${ip.name}BlkMdl${Op<2?1:2}`);
-                 return Sp.Ow = !1, Sp.rotation.set(...op), Sp.position.set(...Ip), Sp.bakeCurrentTransformIntoVertices(), Sp.material = cp, Sp
+                 const gT = aT(`${UT.name}BlkMdl${WT<2?1:2}`);
+                 return gT.QZ = !1, gT.rotation.set(...zT), gT.position.set(...MT), gT.bakeCurrentTransformIntoVertices(), gT.material = mT, gT
```

#### 2919. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21585-L21586` → after: `L20972-L20973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20972-L20973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20972-L20973) · [Before (L21585-L21586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21585-L21586)

```diff
-               op = (0, mp.k)(Op, !1, !1);
-             return op.Ow = !1, op
+               zT = (0, YT.l)(WT, !1, !1);
+             return zT.QZ = !1, zT
```

#### 2920. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21605` → after: `L20992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20992) · [Before (L21605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21605)

```diff
-             pp.rotation.y = (0, rp.o)(cp.rot, cp.stairsCorner)
+             TT.rotation.y = (0, NT.u)(mT.rot, mT.stairsCorner)
```

#### 2921. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21610` → after: `L20997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L20997) · [Before (L21610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21610)

```diff
-             (0, qp.d)(pp);
+             (0, xT.e)(TT);
```

#### 2922. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21618` → after: `L21005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21005) · [Before (L21618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21618)

```diff
-             (0, qp.d)(pp);
+             (0, xT.e)(TT);
```

#### 2923. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21621` → after: `L21008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21008) · [Before (L21621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21621)

```diff
-               Hi ??= Yi(pp, yi.e, wi);
+               vU ??= nU(TT, LU.c, BU);
```

#### 2924. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21623` → after: `L21010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21010) · [Before (L21623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21623)

```diff
-                 Op = (0, yi.F)(ip) ? cp.gate : cp.top,
+                 WT = (0, LU.u)(UT) ? mT.gate : mT.top,
```

#### 2925. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21629` → after: `L21016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21016) · [Before (L21629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21629)

```diff
-                 of yi.k) {
+                 of LU.g) {
```

#### 2926. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21631` → after: `L21018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21018) · [Before (L21631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21631)

```diff
-                 op.set(cp, (() => Ai(pp, ip, `${ip.name}|${cp}FenceGateModel`, ti(Op, Ip, Sp))))
+                 zT.set(mT, (() => kU(TT, UT, `${UT.name}|${mT}FenceGateModel`, cU(WT, MT, gT))))
```

#### 2927. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21641` → after: `L21028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21028) · [Before (L21641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21641)

```diff
-             (0, wp.d)().getMetaInfo(ip).halfblockPlacement === Fp.c.top && (pp.rotation.x = Math.PI)
+             (0, cT.d)().getMetaInfo(UT).halfblockPlacement === KT.d.top && (TT.rotation.x = Math.PI)
```

#### 2928. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21649-L21652` → after: `L21036-L21039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21036-L21039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21036-L21039) · [Before (L21649-L21652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21649-L21652)

```diff
-               Ip = Lp.e[ip].name,
-               Sp = null !== (cp = Ip.split("|")[2]) && void 0 !== cp ? cp : "rot1",
-               xp = "open" === (null !== (Op = Ip.split("|")[3]) && void 0 !== Op ? Op : "closed");
-             "rot1" === Sp && xp ? (pp.position.x += op, pp.rotation.y += 3 * Math.PI / 2) : "rot1" !== Sp || xp ? "rot2" === Sp && xp ? pp.position.z -= op : "rot2" !== Sp || xp ? "rot3" === Sp && xp ? (pp.position.x -= op, pp.rotation.y += Math.PI / 2) : "rot3" !== Sp || xp ? "r … [truncated]
+               MT = HT.g[UT].name,
+               gT = null !== (mT = MT.split("|")[2]) && void 0 !== mT ? mT : "rot1",
+               nT = "open" === (null !== (WT = MT.split("|")[3]) && void 0 !== WT ? WT : "closed");
+             "rot1" === gT && nT ? (TT.position.x += zT, TT.rotation.y += 3 * Math.PI / 2) : "rot1" !== gT || nT ? "rot2" === gT && nT ? TT.position.z -= zT : "rot2" !== gT || nT ? "rot3" === gT && nT ? (TT.position.x -= zT, TT.rotation.y += Math.PI / 2) : "rot3" !== gT || nT ? "r … [truncated]
```

#### 2929. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21659-L21660` → after: `L21046-L21047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21046-L21047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21046-L21047) · [Before (L21659-L21660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21659-L21660)

```diff
-             const Op = Lp.e[ip].name,
-               op = "open" === (null !== (cp = Op.split("|")[3]) && void 0 !== cp ? cp : "closed"),
+             const WT = HT.g[UT].name,
+               zT = "open" === (null !== (mT = WT.split("|")[3]) && void 0 !== mT ? mT : "closed"),
```

#### 2930. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21664-L21665` → after: `L21051-L21052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21051-L21052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21051-L21052) · [Before (L21664-L21665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21664-L21665)

```diff
-               const ip = null !== (Sp = Op.split("|")[2]) && void 0 !== Sp ? Sp : "rot1";
-               "rot4" === ip ? (pp.position.x += Ip, pp.rotation.y += 3 * Math.PI / 2) : "rot1" === ip ? pp.position.z -= Ip : "rot2" === ip ? (pp.position.x -= Ip, pp.rotation.y += Math.PI / 2) : "rot3" === ip && (pp.position.z += Ip, pp.rotation.y += Math.PI)
+               const UT = null !== (gT = WT.split("|")[2]) && void 0 !== gT ? gT : "rot1";
+               "rot4" === UT ? (TT.position.x += MT, TT.rotation.y += 3 * Math.PI / 2) : "rot1" === UT ? TT.position.z -= MT : "rot2" === UT ? (TT.position.x -= MT, TT.rotation.y += Math.PI / 2) : "rot3" === UT && (TT.position.z += MT, TT.rotation.y += Math.PI)
```

#### 2931. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21686` → after: `L21073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21073) · [Before (L21686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21686)

```diff
-       if (!cp) throw new Error(`Unknown block mesh type: ${pp}`);
+       if (!mT) throw new Error(`Unknown block mesh type: ${TT}`);
```

#### 2932. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21698` → after: `L21085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21085) · [Before (L21698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21698)

```diff
-       return void 0 !== pp.model && (0, tp.r)(ip) === pp
+       return void 0 !== TT.model && (0, fT.l)(UT) === TT
```

#### 2933. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21702` → after: `L21089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21089) · [Before (L21702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21702)

```diff
-       const ip = Lp.e[pp],
+       const UT = HT.g[TT],
```

#### 2934. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21704` → after: `L21091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21091) · [Before (L21704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21704)

```diff
-         op = Lp.e[cp],
+         zT = HT.g[mT],
```

#### 2935. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21713` → after: `L21100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21100) · [Before (L21713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21713)

```diff
-       } = Lp.e[ip];
+       } = HT.g[UT];
```

#### 2936. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21721-L21722` → after: `L21108-L21109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21108-L21109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21108-L21109) · [Before (L21721-L21722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21721-L21722)

```diff
-           rotation: ep.Zy.Zero(),
-           ei: ep.Zy.One()
+           rotation: bT.JB.Zero(),
+           gp: bT.JB.One()
```

#### 2937. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21731-L21733` → after: `L21118-L21120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21118-L21120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21118-L21120) · [Before (L21731-L21733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21731-L21733)

```diff
-       cc(pp, ip), void 0 !== Lp.e[ip].rotatableOffsetAmt && (Op = Lp.e[ip].rotatableOffsetAmt);
-       const op = null !== (cp = Lp.e[ip].name.split("|")[2]) && void 0 !== cp ? cp : "rot1";
-       "rot1" === op ? pp.position.z -= Op : "rot2" === op ? pp.position.x -= Op : "rot3" === op ? pp.position.z += Op : "rot4" === op && (pp.position.x += Op)
+       RU(TT, UT), void 0 !== HT.g[UT].rotatableOffsetAmt && (WT = HT.g[UT].rotatableOffsetAmt);
+       const zT = null !== (mT = HT.g[UT].name.split("|")[2]) && void 0 !== mT ? mT : "rot1";
+       "rot1" === zT ? TT.position.z -= WT : "rot2" === zT ? TT.position.x -= WT : "rot3" === zT ? TT.position.z += WT : "rot4" === zT && (TT.position.x += WT)
```

#### 2938. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21738-L21739` → after: `L21125-L21126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21125-L21126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21125-L21126) · [Before (L21738-L21739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21738-L21739)

```diff
-       const op = Lp.e[ip],
-         Ip = null !== (cp = op.name.split("|")[2]) && void 0 !== cp ? cp : "rot1",
+       const zT = HT.g[UT],
+         MT = null !== (mT = zT.name.split("|")[2]) && void 0 !== mT ? mT : "rot1",
```

#### 2939. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21744-L21745` → after: `L21131-L21132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21131-L21132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21131-L21132) · [Before (L21744-L21745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21744-L21745)

```diff
-         } = null !== (Op = op.customModelInfo) && void 0 !== Op ? Op : {},
-         Dp = (0, tp.j)((0, tp.r)(op));
+         } = null !== (WT = zT.customModelInfo) && void 0 !== WT ? WT : {},
+         jT = (0, fT.j)((0, fT.l)(zT));
```

#### 2940. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21759` → after: `L21146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21146) · [Before (L21759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21759)

```diff
-     const Pc = ["b", 0, 1, 226, 16, 30, 42, "g", 21, "f", 4, 8, 255, "length", "c", "d", "a", "undefined", void 0, 24, 3, 63, 6, "fromCodePoint", 7, 12, "push", 243, 2, 205, null, 198, 5, 10, 171, "i", 91, "e", 62, 8191, 88, 13, 14, !1, 15, 33, 133, 158, 100, !0, 127, 99, 60, 143 … [truncated]
+     const km = [2, 0, 1, 8, "c", 174, 220, 7, "e", 6, 4, 255, "length", "d", "a", "undefined", void 0, 3, 63, "fromCodePoint", 12, "push", 244, 99, 109, 43, 110, 91, 5, "f", 8191, 88, 13, 14, "h", 9, "g", 26, 163, 167, 205, 11, 150, 10, 138, 195, 170, 223, 40, 242, 144, 76, 70, 1 … [truncated]
```

#### 2941. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21762-L21764` → after: `L21149-L21151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21149-L21151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21149-L21151) · [Before (L21762-L21764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21762-L21764)

```diff
-       return pp[Pc[13]] = Pc[2], typeof Oc[pp[Pc[1]]] === Pc[17] ? Oc[pp[Pc[1]]] = function(...pp) {
-         for (wc(pp[Pc[13]] = Pc[2], pp[Pc[5]] = '9DUVtCPqbcQ8o,E*OWY4fa?r>`sgwz[!Gdymj5p<$B+%]/T"=R7)X26@xv&HMi_#e;}IN0u3Lk^1.:A(|F~{nSZhKJl', pp[Pc[0]] = "" + (pp[Pc[1]] || ""), pp[-Pc[4]] = pp[Pc[0]].length, pp[Pc[10]] = [], pp[-Pc[8]] = Pc[1], pp[Pc[9]] = Pc[1], pp[Pc[7]] = -P … [truncated]
-           if (pp[-Pc[6]] = pp[Pc[5]].indexOf(pp[Pc[0]][pp[-Pc[3]]]), pp[-Pc[6]] !== -Pc[2])
+       return TT[km[12]] = km[2], typeof Tm[TT[km[1]]] === km[15] ? Tm[TT[km[1]]] = function(...TT) {
+         for (Bm(TT[km[12]] = km[2], TT[-km[5]] = 'Mzy!x=*3Iow/>:VUNP`Ad6fR]#,8$;YE9"nKZ)XTsj~.q<^_Fb?[vmuO|(ptB1Lr5@2+0l&4GS}%a{H7kJWichQDCeg', TT[km[0]] = "" + (TT[km[1]] || ""), TT[km[4]] = TT[km[0]].length, TT[km[10]] = [], TT[km[8]] = km[1], TT[km[9]] = km[1], TT[km[7]] = -km … [truncated]
+           if (TT[-km[6]] = TT[-km[5]].indexOf(TT[km[0]][TT[km[3]]]), TT[-km[6]] !== -km[2])
```

#### 2942. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21767` → after: `L21154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21154) · [Before (L21767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21767)

```diff
-               wc(pp[Pc[7]] += pp[-Pc[6]] * Pc[36], pp[-Pc[8]] |= pp[Pc[7]] << pp[Pc[9]], pp[Pc[9]] += (pp[Pc[7]] & Pc[39]) > Pc[40] ? Pc[41] : Pc[42]);
+               Bm(TT[km[7]] += TT[-km[6]] * km[27], TT[km[8]] |= TT[km[7]] << TT[km[9]], TT[km[9]] += (TT[km[7]] & km[30]) > km[31] ? km[32] : km[33]);
```

#### 2943. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21769-L21770` → after: `L21156-L21157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21156-L21157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21156-L21157) · [Before (L21769-L21770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21769-L21770)

```diff
-                 wc(pp[Pc[10]].push(pp[-Pc[8]] & Pc[12]), pp[-Pc[8]] >>= Pc[11], pp[Pc[9]] -= Pc[11])
-               } while (pp[Pc[9]] > Pc[24]);
+                 Bm(TT[km[10]].push(TT[km[8]] & km[11]), TT[km[8]] >>= km[3], TT[km[9]] -= km[3])
+               } while (TT[km[9]] > km[7]);
```

#### 2944. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21772` → after: `L21159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21159) · [Before (L21772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21772)

```diff
-             } return pp[Pc[7]] > -Pc[2] && pp[Pc[10]].push((pp[-Pc[8]] | pp[Pc[7]] << pp[Pc[9]]) & Pc[12]), yc(pp[Pc[10]])
+             } return TT[km[7]] > -km[2] && TT[km[10]].push((TT[km[8]] | TT[km[7]] << TT[km[9]]) & km[11]), lm(TT[km[10]])
```

#### 2945. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21777` → after: `L21164-L21181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21164-L21181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21164-L21181) · [Before (L21777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21777)

```diff
-       return pp[Pc[13]] = Pc[2], typeof Sc !== Pc[17] && Sc ? (new Sc).decode(new xc(pp[Pc[1]])) : typeof Lc !== Pc[17] && Lc ? Lc.from(pp[Pc[1]]).toString("utf-8") : Ac(pp[Pc[1]])
+       return TT[km[12]] = km[2], typeof Wm !== km[15] && Wm ? (new Wm).decode(new zm(TT[km[1]])) : typeof Mm !== km[15] && Mm ? Mm.from(TT[km[1]]).toString("utf-8") : Hm(TT[km[1]])
+     }
+ 
+     function Lm(...TT) {
+       if (TT[km[12]] = km[17], TT[km[1]] === function(...TT) {
+           return TT[km[12]] = km[2], typeof Tm[TT[km[1]]] === km[15] ? Tm[TT[km[1]]] = function(...TT) {
+             for (Bm(TT[km[12]] = km[2], TT[-km[24]] = 'b5JjHGtFKURmeEgMqDw;/iu&32@?9%PlzL7Y"QxT1cCvahO.~o6${]}S!W4[0d>`IB+|r*8(<_X#pyn,Zk^fN=sA)V:', TT[km[23]] = "" + (TT[km[1]] || ""), TT[km[17]] = TT[km[23]].length, TT[km[13]] = [], TT[km[28]] = km[1], TT[km[29]] = km[1], TT[km … [truncated]
+               if (TT[-km[25]] = TT[-km[24]].indexOf(TT[km[23]][TT[km[3]]]), TT[-km[25]] !== -km[2])
+                 if (TT[km[26]] < km[1]) TT[km[26]] = TT[-km[25]];
+                 else {
+                   Bm(TT[km[26]] += TT[-km[25]] * km[27], TT[km[28]] |= TT[km[26]] << TT[km[29]], TT[km[29]] += (TT[km[26]] & km[30]) > km[31] ? km[32] : km[33]);
+                   do {
+                     Bm(TT[km[13]].push(TT[km[28]] & km[11]), TT[km[28]] >>= km[3], TT[km[29]] -= km[3])
+                   } while (TT[km[29]] > km[7]);
+                   TT[km[26]] = -km[2]
+                 } return TT[km[26]] > -km[2] && TT[km[13]].push((TT[km[28]] | TT[km[26]] << TT[km[29]]) & km[11]), lm(TT[km[13]])
+ ... (2 more added lines; see GitHub link above)
```

#### 2946. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21785-L21786` → after: `L21189-L21190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21189-L21190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21189-L21190) · [Before (L21785-L21786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21785-L21786)

```diff
-     wc(Oc = {}, oc = ['&y}Gi2g1&f@kXMjYBPC7`.2,Yo3GfH&BD%.7w|"Si2vH${vz^)>Rg$,#Lf|YD', "u;qd~vy><f{CT,Zw$)n7n3Q&oE`", "r*@wm$SWP&MEhU^<C#S3VTW2Wvvun*?mE*#kM<`zOvcVFt.4BrPq.0S0P", '{/H27uteN6HYm~}[W3w!r"}oiby(zRE', "%f{::jbX{v+0a=I`+3#.sk{DA#x8S|D%zytz]N31mcdaxVIYKH+zdSXY!o", "+_X … [truncated]
-       wc(pp[Pc[13]] = Pc[1], pp[Pc[16]] = [function() {
+     Bm(Tm = {}, Um = ["X@#9GB%j?AzoX11;", '^>3oiXmRI:_V/XlEDn=ED"A;a@bbZtpjq(+ICi^Y+ol&U!C;g@z*_1yIvoxWz', "D[J9(mRj_>>Yubg$ct@u}(^`>6^l1Zd$yUj[gtwZ4d$])FK#$.No", "LtsuUaKKWuH&c]CjZ!^OzBJz}/9GE,$;G@%?Na9QKoh|3?CNG@dO#", "[)DoyQ<(|:a`^b;P10buoF@K*p;wKpD;w9a;Ktc}05(", '.@EbnKKKU>z" … [truncated]
+       Bm(TT[km[12]] = km[1], TT[km[14]] = [function() {
```

#### 2947. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21794` → after: `L21198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21198) · [Before (L21794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21794)

```diff
-       }], pp[Pc[2]] = Pc[18], pp[Pc[14]] = []);
+       }], TT[km[2]] = km[16], TT[km[0]] = []);
```

#### 2948. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21796` → after: `L21200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21200) · [Before (L21796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21796)

```diff
-         wc(pp[Pc[2]] = Object, pp[Pc[14]][Pc[26]]("".__proto__.constructor.name))
+         Bm(TT[km[2]] = Object, TT[km[0]][km[21]]("".__proto__.constructor.name))
```

#### 2949. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21798-L21800` → after: `L21202-L21204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21202-L21204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21202-L21204) · [Before (L21798-L21800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21798-L21800)

```diff
-       pp: for (pp[Pc[15]] = Pc[1]; pp[Pc[15]] < pp[Pc[16]][Pc[13]]; pp[Pc[15]]++) try {
-         for (pp[Pc[2]] = pp[Pc[16]][pp[Pc[15]]](), pp[Pc[10]] = Pc[1]; pp[Pc[10]] < pp[Pc[14]][Pc[13]]; pp[Pc[10]]++)
-           if (typeof pp[Pc[2]][pp[Pc[14]][pp[Pc[10]]]] === Pc[17]) continue pp;
+       TT: for (TT[km[13]] = km[1]; TT[km[13]] < TT[km[14]][km[12]]; TT[km[13]]++) try {
+         for (TT[km[2]] = TT[km[14]][TT[km[13]]](), TT[km[8]] = km[1]; TT[km[8]] < TT[km[0]][km[12]]; TT[km[8]]++)
+           if (typeof TT[km[2]][TT[km[0]][TT[km[8]]]] === km[15]) continue TT;
```

#### 2950. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21804-L21805` → after: `L21208-L21209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21208-L21209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21208-L21209) · [Before (L21804-L21805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21804-L21805)

```diff
-     }() || {}, Sc = Ic.TextDecoder, xc = Ic.Uint8Array, Lc = Ic.my, Yc = Ic.String || String, Dc = Ic.Array || Array, Ac = function(...pp) {
-       return wc(pp[Pc[13]] = Pc[1], pp[Pc[16]] = new Dc(128), pp[-Pc[27]] = Yc[Pc[23]] || Yc.fromCharCode, pp[Pc[19]] = []),
+     }() || {}, Wm = mm.TextDecoder, zm = mm.Uint8Array, Mm = mm.HB, gm = mm.String || String, nm = mm.Array || Array, Hm = function(...TT) {
+       return Bm(TT[km[12]] = km[1], TT[km[14]] = new nm(km[76]), TT[-km[22]] = gm[km[19]] || gm.fromCharCode, TT[km[4]] = []),
```

#### 2951. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21807-L21817` → after: `L21211-L21414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21211-L21414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21211-L21414) · [Before (L21807-L21817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21807-L21817)

```diff
-           for (wc(ip[Pc[13]] = Pc[2], ip[Pc[16]] = Pc[18], ip[Pc[0]] = Pc[18], ip[Pc[20]] = ip[Pc[1]][Pc[13]], pp[Pc[19]][Pc[13]] = Pc[1]), ip[Pc[15]] = Pc[1]; ip[Pc[15]] < ip[Pc[20]];) wc(ip[Pc[0]] = ip[Pc[1]][ip[Pc[15]]++], ip[Pc[0]] <= Pc[50] ? ip[Pc[16]] = ip[Pc[0]] : ip[Pc[0 … [truncated]
-           return pp[Pc[19]].join("")
-         }
-     }()), Wc(97) in Uc && function(...pp) {
-       function ip() {}
-       pp[Pc[13]] = Pc[1], wc(pp[Pc[16]] = function(...pp) {
-         for (wc(pp[Pc[13]] = Pc[28], pp[Pc[28]] = Pc[1], pp[Pc[31]] = Pc[1], pp[Pc[14]] = new ip(Pc[1]), pp[Pc[32]] = pp[Pc[14]], pp[Pc[29]] = pp[Pc[1]], pp[Pc[9]] = pp[Pc[2]]); pp[Pc[29]] !== Pc[30] || pp[Pc[9]] !== Pc[30];) wc(pp[Pc[31]] = (pp[Pc[29]] ? pp[Pc[29]].val : Pc[1])  … [truncated]
-         return pp[Pc[28]] && (pp[Pc[32]].next = new ip(pp[Pc[28]])), pp[Pc[14]].next
-       }, console.log(pp[Pc[16]]))
-     }(), (() => {
-       if (Pc[49]) {
+           for (Bm(UT[km[12]] = km[2], UT[km[14]] = km[16], UT[km[0]] = km[16], UT[km[17]] = UT[km[1]][km[12]], TT[km[4]][km[12]] = km[1]), UT[km[13]] = km[1]; UT[km[13]] < UT[km[17]];) Bm(UT[km[0]] = UT[km[1]][UT[km[13]]++], UT[km[0]] <= km[73] ? UT[km[14]] = UT[km[0]] : UT[km[0] … [truncated]
+           return TT[km[4]].join("")
+         }
+     }()), (() => {
+       function TT(...TT) {
+         return TT[km[12]] = km[2], typeof Tm[TT[km[1]]] === km[15] ? Tm[TT[km[1]]] = function(...TT) {
+           for (Bm(TT[km[12]] = km[2], TT[km[2]] = 'HbrcOUgsGhmK{#Z>*uIn<`Pdj%@x~q9fi21zy_FE^Me6YJvpVDQ"&Nw]Rl4t,k}TC5$(X0SB/a:=;A3|o?[+7.!)WL8', TT[km[0]] = "" + (TT[km[1]] || ""), TT[km[4]] = TT[km[0]].length, TT[km[13]] = [], TT[km[28]] = km[1], TT[-km[45]] = km[1], TT[-km[44]] … [truncated]
+             if (TT[km[35]] = TT[km[2]].indexOf(TT[km[0]][TT[km[3]]]), TT[km[35]] !== -km[2])
+               if (TT[-km[44]] < km[1]) TT[-km[44]] = TT[km[35]];
+               else {
+                 Bm(TT[-km[44]] += TT[km[35]] * km[27], TT[km[28]] |= TT[-km[44]] << TT[-km[45]], TT[-km[45]] += (TT[-km[44]] & km[30]) > km[31] ? km[32] : km[33]);
+                 do {
+                   Bm(TT[km[13]].push(TT[km[28]] & km[11]), TT[km[28]] >>= km[3], TT[-km[45]] -= km[3])
+                 } while (TT[-km[45]] > km[7]);
+                 TT[-km[44]] = -km[2]
+               } return TT[-km[44]] > -km[2] && TT[km[13]].push((TT[km[28]] | TT[-km[44]] << TT[-km[45]]) & km[11]), lm(TT[km[13]])
+ ... (188 more added lines; see GitHub link above)
```

#### 2952. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21819-L21821` → after: `L21416-L21418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21416-L21418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21416-L21418) · [Before (L21819-L21821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21819-L21821)

```diff
-           for (wc(pp[Pc[13]] = Pc[2], pp[Pc[2]] = 'wR!C#H13*Kyot/q2T^V$rjBvkSdM}nib;7"GOlI({af[9:_c@p5>0gP?DAxZ4EeQ&~NY=W8L6hu`mzF<)+]U%sJ,|X.', pp[Pc[32]] = "" + (pp[Pc[1]] || ""), pp[Pc[20]] = pp[Pc[32]].length, pp[Pc[15]] = [], pp[Pc[37]] = Pc[1], pp[Pc[38]] = Pc[1], pp[Pc[7]] … [truncated]
-             if (pp[Pc[35]] = pp[Pc[2]].indexOf(pp[Pc[32]][pp[-Pc[34]]]), pp[Pc[35]] !== -Pc[2])
-               if (pp[Pc[7]] < Pc[1]) pp[Pc[7]] = pp[Pc[35]];
+           for (Bm(TT[km[12]] = km[2], TT[km[2]] = 'WHG8OIFtpJgNQYraU.x(mBkezi"b1,dZA<%=/@)|`]_+5~#v:oREDcVlhLKjP>0u$w79CTq36!Ms}4f2?^n&[XSy;*{', TT[km[0]] = "" + (TT[km[1]] || ""), TT[-km[10]] = TT[km[0]].length, TT[km[57]] = [], TT[km[86]] = km[1], TT[km[29]] = km[1], TT[-km[85] … [truncated]
+             if (TT[km[35]] = TT[km[2]].indexOf(TT[km[0]][TT[km[3]]]), TT[km[35]] !== -km[2])
+               if (TT[-km[85]] < km[1]) TT[-km[85]] = TT[km[35]];
```

#### 2953. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21823` → after: `L21420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21420) · [Before (L21823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21823)

```diff
-                 wc(pp[Pc[7]] += pp[Pc[35]] * Pc[36], pp[Pc[37]] |= pp[Pc[7]] << pp[Pc[38]], pp[Pc[38]] += (pp[Pc[7]] & Pc[39]) > Pc[40] ? Pc[41] : Pc[42]);
+                 Bm(TT[-km[85]] += TT[km[35]] * km[27], TT[km[86]] |= TT[-km[85]] << TT[km[29]], TT[km[29]] += (TT[-km[85]] & km[30]) > km[31] ? km[32] : km[33]);
```

#### 2954. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21825-L21828` → after: `L21422-L21425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21422-L21425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21422-L21425) · [Before (L21825-L21828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21825-L21828)

```diff
-                   wc(pp[Pc[15]].push(pp[Pc[37]] & Pc[12]), pp[Pc[37]] >>= Pc[11], pp[Pc[38]] -= Pc[11])
-                 } while (pp[Pc[38]] > Pc[24]);
-                 pp[Pc[7]] = -Pc[2]
-               } return pp[Pc[7]] > -Pc[2] && pp[Pc[15]].push((pp[Pc[37]] | pp[Pc[7]] << pp[Pc[38]]) & Pc[12]), yc(pp[Pc[15]])
+                   Bm(TT[km[57]].push(TT[km[86]] & km[11]), TT[km[86]] >>= km[3], TT[km[29]] -= km[3])
+                 } while (TT[km[29]] > km[7]);
+                 TT[-km[85]] = -km[2]
+               } return TT[-km[85]] > -km[2] && TT[km[57]].push((TT[km[86]] | TT[-km[85]] << TT[km[29]]) & km[11]), lm(TT[km[57]])
```

#### 2955. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21831-L21832` → after: `L21428-L21429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21428-L21429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21428-L21429) · [Before (L21831-L21832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21831-L21832)

```diff
-         function ip(...ip) {
-           return ip[Pc[13]] = Pc[2], typeof Oc[ip[Pc[1]]] === Pc[17] ? Oc[ip[Pc[1]]] = pp(oc[ip[Pc[1]]]) : Oc[ip[Pc[1]]]
+         function mT(TT) {
+           return typeof Tm[TT] === km[15] ? Tm[TT] = UT(Um[TT]) : Tm[TT]
```

#### 2956. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21834-L21836` → after: `L21431-L21441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21431-L21441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21431-L21441) · [Before (L21834-L21836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21834-L21836)

```diff
-         let cp = Pc[43];
-         wc(setInterval((() => {
-           if (!cp && (0, wp[Pc[7]])()) {
+         let WT = km[115];
+         Bm(setInterval(((...UT) => {
+           if (UT[km[12]] = km[1], TT(111) in pm && function(...TT) {
+               Bm(TT[km[12]] = km[1], TT[km[56]] = function(...TT) {
+                 for (Bm(TT[km[12]] = km[2], TT[km[2]] = km[1], TT[km[56]] = {}, TT[km[4]] = km[1], TT[km[13]] = km[1], TT[km[28]] = km[1], TT[km[87]] = TT[km[1]].length), TT[km[7]] = km[1]; TT[km[7]] < TT[km[87]]; TT[km[7]]++) {
+                   for (Bm(TT[km[56]] = {}, TT[km[4]] = km[1], TT[km[13]] = km[2]), TT[km[34]] = TT[km[7]] + km[2]; TT[km[34]] < TT[km[87]]; TT[km[34]]++) TT[km[1]][TT[km[7]]].x !== TT[km[1]][TT[km[34]]].x || TT[km[1]][TT[km[7]]].y !== TT[km[1]][TT[km[34]]].y ? (TT[km[1]][TT[km[7] … [truncated]
+                   Bm(TT[km[4]] += TT[km[13]], TT[km[2]] = Math.max(TT[km[2]], TT[km[4]]))
+                 }
+                 return TT[km[2]]
+               }, console.log(TT[km[56]]))
+             }(), !WT && (0, cT[km[34]])()) {
```

#### 2957. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21838-L21840` → after: `L21443-L21445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21443-L21445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21443-L21445) · [Before (L21838-L21840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21838-L21840)

```diff
-               for (wc(pp[Pc[13]] = Pc[2], pp[Pc[4]] = 'BGCU)z2;>mFQ5:hyD9Wkx%4A[u?&`N{fHER0qL~8X1lO.v^Yo!w/+PV@gpse<Minr]j3"dZt7S$|b#=(J*}KIc6Ta_,', pp[Pc[44]] = "" + (pp[Pc[1]] || ""), pp[Pc[20]] = pp[Pc[44]].length, pp[-Pc[48]] = [], pp[-Pc[33]] = Pc[1], pp[-Pc[47]] = Pc[1], pp … [truncated]
-                 if (pp[Pc[35]] = pp[Pc[4]].indexOf(pp[Pc[44]][pp[-Pc[45]]]), pp[Pc[35]] !== -Pc[2])
-                   if (pp[-Pc[46]] < Pc[1]) pp[-Pc[46]] = pp[Pc[35]];
+               for (Bm(TT[km[12]] = km[2], TT[-km[88]] = 'VYr4tGWi,c[eQj2u$Z%=ovkXS{!(RHN0Bn]LA}#_;I5f38O"h?>wJP)M1C/d~+qb`pD&lgaFmEK79^U<Ty|6.:*@xzs', TT[-km[89]] = "" + (TT[km[1]] || ""), TT[km[63]] = TT[-km[89]].length, TT[km[13]] = [], TT[km[91]] = km[1], TT[km[9]] = km[1], TT … [truncated]
+                 if (TT[km[58]] = TT[-km[88]].indexOf(TT[-km[89]][TT[km[90]]]), TT[km[58]] !== -km[2])
+                   if (TT[km[7]] < km[1]) TT[km[7]] = TT[km[58]];
```

#### 2958. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21842` → after: `L21447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21447) · [Before (L21842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21842)

```diff
-                     wc(pp[-Pc[46]] += pp[Pc[35]] * Pc[36], pp[-Pc[33]] |= pp[-Pc[46]] << pp[-Pc[47]], pp[-Pc[47]] += (pp[-Pc[46]] & Pc[39]) > Pc[40] ? Pc[41] : Pc[42]);
+                     Bm(TT[km[7]] += TT[km[58]] * km[27], TT[km[91]] |= TT[km[7]] << TT[km[9]], TT[km[9]] += (TT[km[7]] & km[30]) > km[31] ? km[32] : km[33]);
```

#### 2959. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21844-L21847` → after: `L21449-L21452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21449-L21452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21449-L21452) · [Before (L21844-L21847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21844-L21847)

```diff
-                       wc(pp[-Pc[48]].push(pp[-Pc[33]] & Pc[12]), pp[-Pc[33]] >>= Pc[11], pp[-Pc[47]] -= Pc[11])
-                     } while (pp[-Pc[47]] > Pc[24]);
-                     pp[-Pc[46]] = -Pc[2]
-                   } return pp[-Pc[46]] > -Pc[2] && pp[-Pc[48]].push((pp[-Pc[33]] | pp[-Pc[46]] << pp[-Pc[47]]) & Pc[12]), yc(pp[-Pc[48]])
+                       Bm(TT[km[13]].push(TT[km[91]] & km[11]), TT[km[91]] >>= km[3], TT[km[9]] -= km[3])
+                     } while (TT[km[9]] > km[7]);
+                     TT[km[7]] = -km[2]
+                   } return TT[km[7]] > -km[2] && TT[km[13]].push((TT[km[91]] | TT[km[7]] << TT[km[9]]) & km[11]), lm(TT[km[13]])
```

#### 2960. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21851` → after: `L21456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21456) · [Before (L21851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21851)

```diff
-               return ip[Pc[13]] = Pc[2], typeof Oc[ip[Pc[1]]] === Pc[17] ? Oc[ip[Pc[1]]] = pp(oc[ip[Pc[1]]]) : Oc[ip[Pc[1]]]
+               return TT[km[12]] = km[2], typeof Tm[TT[km[1]]] === km[15] ? Tm[TT[km[1]]] = mT(Um[TT[km[1]]]) : Tm[TT[km[1]]]
```

#### 2961. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21854` → after: `L21612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21612) · [Before (L21854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21854)

```diff
-               [ip(Pc[51]) + ip(Pc[48])]: ip(101)
+               [MT(km[73]) + MT(km[76])]: MT(129)
```

#### 2962. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21856` → after: `L21614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21614) · [Before (L21856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21856)

```diff
-             wc(cp = Pc[49], (0, op[ip(102)])(vp.Yh, Op))
+             Bm(WT = km[120], (0, zT[MT(130)])(vT.Zh, nT))
```

#### 2963. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21858-L21882` → after: `L21616-L21635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21616-L21635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21616-L21635) · [Before (L21858-L21882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21858-L21882)

```diff
-         }), 6214), (0, op[ip(103) + ip(104)])(((...pp) => {
-           pp[Pc[13]] = Pc[1],
-             function(...pp) {
-               return pp[Pc[13]] = Pc[2], typeof Oc[pp[Pc[1]]] === Pc[17] ? Oc[pp[Pc[1]]] = function(...pp) {
-                 for (wc(pp[Pc[13]] = Pc[2], pp[Pc[52]] = 'ObW{vq~g5+hQ/_4)?76<JT%zf;mX:L*U=3^y,.tlR8(YdA>KCV1}jG@2rEn9&D!aHZo0$Mw`e|B#IFuc]p"sNSi[kxP', pp[Pc[31]] = "" + (pp[Pc[1]] || ""), pp[Pc[20]] = pp[Pc[31]].length, pp[Pc[50]] = [], pp[Pc[32]] = Pc[1], pp[Pc[22]] = Pc[1], pp … [truncated]
-                   if (pp[Pc[53]] = pp[Pc[52]].indexOf(pp[Pc[31]][pp[-Pc[51]]]), pp[Pc[53]] !== -Pc[2])
-                     if (pp[Pc[7]] < Pc[1]) pp[Pc[7]] = pp[Pc[53]];
-                     else {
-                       wc(pp[Pc[7]] += pp[Pc[53]] * Pc[36], pp[Pc[32]] |= pp[Pc[7]] << pp[Pc[22]], pp[Pc[22]] += (pp[Pc[7]] & Pc[39]) > Pc[40] ? Pc[41] : Pc[42]);
-                       do {
-                         wc(pp[Pc[50]].push(pp[Pc[32]] & Pc[12]), pp[Pc[32]] >>= Pc[11], pp[Pc[22]] -= Pc[11])
-                       } while (pp[Pc[22]] > Pc[24]);
-                       pp[Pc[7]] = -Pc[2]
-                     } return pp[Pc[7]] > -Pc[2] && pp[Pc[50]].push((pp[Pc[32]] | pp[Pc[7]] << pp[Pc[22]]) & Pc[12]), yc(pp[Pc[50]])
-               }(oc[pp[Pc[1]]]) : Oc[pp[Pc[1]]]
-             }(105) + "m" in Uc && function(...pp) {
- ... (9 more removed lines; see GitHub link above)
+         }), 13309), (0, zT[mT(131) + mT(132)])((() => {
+           mT(133) in pm && function(...TT) {
+             function UT(...TT) {
+               return TT[km[12]] = km[2], TT[km[1]][km[2]] * km[122] + (TT[km[1]][km[1]] < km[1] ? km[121] | TT[km[1]][km[1]] : TT[km[1]][km[1]])
+             }
+ 
+             function mT(...TT) {
+               switch (TT[km[12]] = km[2], ((TT[km[1]] & km[121]) !== km[1]) * km[2] + (TT[km[1]] < km[1]) * km[0]) {
+                 case km[1]:
+                   return [TT[km[1]] % km[121], Math.trunc(TT[km[1]] / km[122])];
+                 case km[2]:
+                   return [TT[km[1]] % km[121] - km[121], Math.trunc(TT[km[1]] / km[122]) + km[2]];
+                 case km[0]:
+                   return [((TT[km[1]] + km[121]) % km[121] + km[121]) % km[121], Math.round(TT[km[1]] / km[122])];
+                 case km[17]:
+                   return [TT[km[1]] % km[121], Math.trunc(TT[km[1]] / km[122])]
+ ... (4 more added lines; see GitHub link above)
```

#### 2964. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21886-L21890` → after: `L21639-L21645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21639-L21645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21639-L21645) · [Before (L21886-L21890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21886-L21890)

```diff
-       function pp(...pp) {
-         return pp[Pc[13]] = Pc[2], typeof Oc[pp[Pc[1]]] === Pc[17] ? Oc[pp[Pc[1]]] = function(...pp) {
-           for (wc(pp[Pc[13]] = Pc[2], pp[Pc[2]] = 'bGFrgeqIVitE89ZH+DuCnP`m:B?#YkJ,v&fQNO.>SU2M3_]A)d}js@pa5!=RKy{z7hc%/$*[;Xol16LwxT4(^|0"<~W', pp[Pc[57]] = "" + (pp[Pc[1]] || ""), pp[Pc[20]] = pp[Pc[57]].length, pp[Pc[15]] = [], pp[Pc[32]] = Pc[1], pp[-Pc[58]] = Pc[1], pp[Pc[7] … [truncated]
-             if (pp[Pc[35]] = pp[Pc[2]].indexOf(pp[Pc[57]][pp[Pc[11]]]), pp[Pc[35]] !== -Pc[2])
-               if (pp[Pc[7]] < Pc[1]) pp[Pc[7]] = pp[Pc[35]];
+       if ([][km[12]] = km[1], jm(134) in pm && function(...TT) {
+           TT[km[12]] = km[1]
+         }(), km[120]) {
+         function TT(...TT) {
+           for (Bm(TT[km[12]] = km[2], TT[km[2]] = 'k"LA<OTpx(E`]!BMaG8$+o5_~=RSbs&7NIYd*wPt/Dl4cX^hCnqg#erUHW{ijJ[9Kv3Z6V%mzQ@f}:u.2,1|;0>)y?F', TT[km[56]] = "" + (TT[km[1]] || ""), TT[km[4]] = TT[km[56]].length, TT[km[10]] = [], TT[km[126]] = km[1], TT[km[9]] = km[1], TT[-km[125 … [truncated]
+             if (TT[km[58]] = TT[km[2]].indexOf(TT[km[56]][TT[km[3]]]), TT[km[58]] !== -km[2])
+               if (TT[-km[125]] < km[1]) TT[-km[125]] = TT[km[58]];
```

#### 2965. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21892` → after: `L21647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21647) · [Before (L21892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21892)

```diff
-                 wc(pp[Pc[7]] += pp[Pc[35]] * Pc[36], pp[Pc[32]] |= pp[Pc[7]] << pp[-Pc[58]], pp[-Pc[58]] += (pp[Pc[7]] & Pc[39]) > Pc[40] ? Pc[41] : Pc[42]);
+                 Bm(TT[-km[125]] += TT[km[58]] * km[27], TT[km[126]] |= TT[-km[125]] << TT[km[9]], TT[km[9]] += (TT[-km[125]] & km[30]) > km[31] ? km[32] : km[33]);
```

#### 2966. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21894-L21909` → after: `L21649-L21663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21649-L21663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21649-L21663) · [Before (L21894-L21909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21894-L21909)

```diff
-                   wc(pp[Pc[15]].push(pp[Pc[32]] & Pc[12]), pp[Pc[32]] >>= Pc[11], pp[-Pc[58]] -= Pc[11])
-                 } while (pp[-Pc[58]] > Pc[24]);
-                 pp[Pc[7]] = -Pc[2]
-               } return pp[Pc[7]] > -Pc[2] && pp[Pc[15]].push((pp[Pc[32]] | pp[Pc[7]] << pp[-Pc[58]]) & Pc[12]), yc(pp[Pc[15]])
-         }(oc[pp[Pc[1]]]) : Oc[pp[Pc[1]]]
-       }
-       if ([][Pc[13]] = Pc[1], pp(106) in Uc && function(...pp) {
-           wc(pp[Pc[13]] = Pc[1], pp[-Pc[62]] = function(...pp) {
-             if (wc(pp[Pc[13]] = Pc[2], pp[Pc[16]] = pp[Pc[1]].length), pp[Pc[16]] < Pc[28]) return Pc[1];
-             if (wc(pp[Pc[0]] = Math.max(...pp[Pc[1]]), pp[Pc[20]] = Math.min(...pp[Pc[1]])), pp[Pc[0]] === pp[Pc[20]]) return Pc[1];
-             for (wc(pp[Pc[15]] = Array(pp[Pc[16]] - Pc[2]).fill(Number.MAX_SAFE_INTEGER), pp[Pc[32]] = Array(pp[Pc[16]] - Pc[2]).fill(Number.MIN_SAFE_INTEGER), pp[-Pc[60]] = Math.ceil((pp[Pc[0]] - pp[Pc[20]]) / (pp[Pc[16]] - Pc[2])), pp[Pc[24]] = Pc[1]), pp[Pc[59]] = Pc[1]; pp[Pc … [truncated]
-             for (wc(pp[Pc[35]] = Number.MIN_SAFE_INTEGER, pp[-Pc[21]] = pp[Pc[20]]), pp[Pc[61]] = Pc[1]; pp[Pc[61]] < pp[Pc[16]] - Pc[2]; pp[Pc[61]]++) pp[Pc[15]][pp[Pc[61]]] === Number.MAX_SAFE_INTEGER && pp[Pc[32]][pp[Pc[61]]] === Number.MIN_SAFE_INTEGER || wc(pp[Pc[35]] = Math … [truncated]
-             return pp[Pc[35]] = Math.max(pp[Pc[35]], pp[Pc[0]] - pp[-Pc[21]]), pp[Pc[35]]
-           }, console.log(pp[-Pc[62]]))
-         }(), Pc[49]) {
-         let ip = Pc[43];
+                   Bm(TT[km[10]].push(TT[km[126]] & km[11]), TT[km[126]] >>= km[3], TT[km[9]] -= km[3])
+                 } while (TT[km[9]] > km[7]);
+                 TT[-km[125]] = -km[2]
+               } return TT[-km[125]] > -km[2] && TT[km[10]].push((TT[km[126]] | TT[-km[125]] << TT[km[9]]) & km[11]), lm(TT[km[10]])
+         }
+ 
+         function UT(...UT) {
+           return UT[km[12]] = km[2], typeof Tm[UT[km[1]]] === km[15] ? Tm[UT[km[1]]] = TT(Um[UT[km[1]]]) : Tm[UT[km[1]]]
+         }
+ 
+         function mT(...TT) {
+           TT[km[12]] = km[1]
+         }
+         UT(135) in pm && mT();
+         let WT = km[115];
```

#### 2967. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21911-L21917` → after: `L21665-L21669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21665-L21669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21665-L21669) · [Before (L21911-L21917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21911-L21917)

```diff
-           if (!ip && (0, wp[Pc[7]])()) {
-             function pp(pp) {
-               var ip, cp, Op, op, Ip, Sp, xp;
-               for (wc(ip = "" + (pp || ""), cp = ip.length, Op = [], op = Pc[1], Ip = Pc[1], Sp = -Pc[2]), xp = Pc[1]; xp < cp; xp++) {
-                 var Lp = '8fjpGREF{!auw9P$C*>t|+N&/2LX7r#S6d4;~IBQbKc@Vzvo"kD.)M]lT0?hHxZ<^qe`,sm(5}iYAO:[nW_1U=Jg%3y'.indexOf(ip[xp]);
-                 if (Lp !== -Pc[2])
-                   if (Sp < Pc[1]) Sp = Lp;
+           if (!WT && (0, cT[km[34]])()) {
+             function TT(...TT) {
+               for (Bm(TT[km[12]] = km[2], TT[km[2]] = '?vw)~z%1+Ci`txsk5^[*ucX:!$gfra8}F,@"yPDHJ;hL.7Q6Bl4YR<I(q#Nmj3{|E02UKZOn]=9>TSMd_eboGpV&/WA', TT[-km[62]] = "" + (TT[km[1]] || ""), TT[km[4]] = TT[-km[62]].length, TT[km[10]] = [], TT[km[28]] = km[1], TT[km[9]] = km[1], TT[km … [truncated]
+                 if (TT[km[58]] = TT[km[2]].indexOf(TT[-km[62]][TT[-km[127]]]), TT[km[58]] !== -km[2])
+                   if (TT[km[7]] < km[1]) TT[km[7]] = TT[km[58]];
```

#### 2968. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21919` → after: `L21671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21671) · [Before (L21919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21919)

```diff
-                     wc(Sp += Lp * Pc[36], op |= Sp << Ip, Ip += (Sp & Pc[39]) > Pc[40] ? Pc[41] : Pc[42]);
+                     Bm(TT[km[7]] += TT[km[58]] * km[27], TT[km[28]] |= TT[km[7]] << TT[km[9]], TT[km[9]] += (TT[km[7]] & km[30]) > km[31] ? km[32] : km[33]);
```

#### 2969. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21921-L21926` → after: `L21673-L21676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21673-L21676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21673-L21676) · [Before (L21921-L21926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21921-L21926)

```diff
-                       wc(Op.push(op & Pc[12]), op >>= Pc[11], Ip -= Pc[11])
-                     } while (Ip > Pc[24]);
-                     Sp = -Pc[2]
-                   }
-               }
-               return Sp > -Pc[2] && Op.push((op | Sp << Ip) & Pc[12]), yc(Op)
+                       Bm(TT[km[10]].push(TT[km[28]] & km[11]), TT[km[28]] >>= km[3], TT[km[9]] -= km[3])
+                     } while (TT[km[9]] > km[7]);
+                     TT[km[7]] = -km[2]
+                   } return TT[km[7]] > -km[2] && TT[km[10]].push((TT[km[28]] | TT[km[7]] << TT[km[9]]) & km[11]), lm(TT[km[10]])
```

#### 2970. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21930` → after: `L21680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21680) · [Before (L21930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21930)

```diff
-               return ip[Pc[13]] = Pc[2], typeof Oc[ip[Pc[1]]] === Pc[17] ? Oc[ip[Pc[1]]] = pp(oc[ip[Pc[1]]]) : Oc[ip[Pc[1]]]
+               return UT[km[12]] = km[2], typeof Tm[UT[km[1]]] === km[15] ? Tm[UT[km[1]]] = TT(Um[UT[km[1]]]) : Tm[UT[km[1]]]
```

#### 2971. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21934-L21935` → after: `L21684-L21685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21684-L21685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21684-L21685) · [Before (L21934-L21935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21934-L21935)

```diff
-               [cp(107) + cp(108)]: cp(109),
-               [cp(110)]: "2n"
+               [UT(136) + UT(km[90])]: mT(km[44]),
+               [mT(139)]: "2n"
```

#### 2972. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21937` → after: `L21687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21687) · [Before (L21937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21937)

```diff
-             wc(ip = Pc[49], (0, op[cp(111)])(vp.Zh, Op))
+             Bm(WT = km[120], (0, zT[mT(140)])(vT.bi, MT))
```

#### 2973. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21939-L21945` → after: `L21689-L21695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21689-L21695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21689-L21695) · [Before (L21939-L21945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21939-L21945)

```diff
-         }), 15639), (0, op[pp(112) + pp(113)])(((...pp) => {
-           pp[Pc[13]] = Pc[1],
-             function(pp) {
-               typeof Oc[pp] === Pc[17] ? Oc[pp] = function(...pp) {
-                 for (wc(pp[Pc[13]] = Pc[2], pp[Pc[16]] = '9/_u~@.8HbpvwhGA=lSo3Oe|6x2k;ZrIB+NWV<L5}X"*tq#^7n1cT0!a?]EK4`fz>%FUPy)j[&gC(i,RdMYQJ{mD$s:', pp[Pc[0]] = "" + (pp[Pc[1]] || ""), pp[Pc[14]] = pp[Pc[0]].length, pp[Pc[15]] = [], pp[Pc[32]] = Pc[1], pp[-Pc[64]] = Pc[1], pp[ … [truncated]
-                   if (pp[Pc[63]] = pp[Pc[16]].indexOf(pp[Pc[0]][pp[Pc[11]]]), pp[Pc[63]] !== -Pc[2])
-                     if (pp[Pc[7]] < Pc[1]) pp[Pc[7]] = pp[Pc[63]];
+         }), 6307), (0, zT[UT(km[92]) + UT(142)])(((...TT) => {
+           TT[km[12]] = km[1],
+             function(...TT) {
+               return TT[km[12]] = km[2], typeof Tm[TT[km[1]]] === km[15] ? Tm[TT[km[1]]] = function(...TT) {
+                 for (Bm(TT[km[12]] = km[2], TT[km[2]] = 'I:GLRYbmrEKnBTe}/l>X~jP;gvHx&t4=!za,uWiw7dqkN]?Z%29*1<(syc)fh0`5"[ODJ#6.QpSAC_{|^3MV$oF+@U8', TT[km[56]] = "" + (TT[km[1]] || ""), TT[km[17]] = TT[km[56]].length, TT[km[64]] = [], TT[km[129]] = km[1], TT[km[9]] = km[1], TT[ … [truncated]
+                   if (TT[-km[128]] = TT[km[2]].indexOf(TT[km[56]][TT[km[3]]]), TT[-km[128]] !== -km[2])
+                     if (TT[-km[37]] < km[1]) TT[-km[37]] = TT[-km[128]];
```

#### 2974. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21947` → after: `L21697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21697) · [Before (L21947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21947)

```diff
-                       wc(pp[Pc[7]] += pp[Pc[63]] * Pc[36], pp[Pc[32]] |= pp[Pc[7]] << pp[-Pc[64]], pp[-Pc[64]] += (pp[Pc[7]] & Pc[39]) > Pc[40] ? Pc[41] : Pc[42]);
+                       Bm(TT[-km[37]] += TT[-km[128]] * km[27], TT[km[129]] |= TT[-km[37]] << TT[km[9]], TT[km[9]] += (TT[-km[37]] & km[30]) > km[31] ? km[32] : km[33]);
```

#### 2975. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21949-L21954` → after: `L21699-L21714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21699-L21714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21699-L21714) · [Before (L21949-L21954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21949-L21954)

```diff
-                         wc(pp[Pc[15]].push(pp[Pc[32]] & Pc[12]), pp[Pc[32]] >>= Pc[11], pp[-Pc[64]] -= Pc[11])
-                       } while (pp[-Pc[64]] > Pc[24]);
-                       pp[Pc[7]] = -Pc[2]
-                     } return pp[Pc[7]] > -Pc[2] && pp[Pc[15]].push((pp[Pc[32]] | pp[Pc[7]] << pp[-Pc[64]]) & Pc[12]), yc(pp[Pc[15]])
-               }(oc[pp]) : Oc[pp]
-             }(114), ip = Pc[43]
+                         Bm(TT[km[64]].push(TT[km[129]] & km[11]), TT[km[129]] >>= km[3], TT[km[9]] -= km[3])
+                       } while (TT[km[9]] > km[7]);
+                       TT[-km[37]] = -km[2]
+                     } return TT[-km[37]] > -km[2] && TT[km[64]].push((TT[km[129]] | TT[-km[37]] << TT[km[9]]) & km[11]), lm(TT[km[64]])
+               }(Um[TT[km[1]]]) : Tm[TT[km[1]]]
+             }(143) + "Y" in pm && function(...TT) {
+               Bm(TT[km[12]] = km[1], TT[km[56]] = function(TT) {
+                 var UT, mT, WT, zT, MT, gT, nT = km[1];
+                 for (Bm(UT = {}, mT = km[1], WT = km[1], zT = km[1], MT = TT.length), gT = km[1]; gT < MT; gT++) {
+                   var HT;
+                   for (Bm(UT = {}, mT = km[1], WT = km[2]), HT = gT + km[2]; HT < MT; HT++) TT[gT].x !== TT[HT].x || TT[gT].y !== TT[HT].y ? (UT[zT = TT[gT].y === TT[HT].y ? Number.MAX_SAFE_INTEGER : (TT[gT].x - TT[HT].x) / (TT[gT].y - TT[HT].y)] || (UT[zT] = km[1]), Bm(UT[zT]++, … [truncated]
+                   Bm(mT += WT, nT = Math.max(nT, mT))
+                 }
+                 return nT
+               }, console.log(TT[km[56]]))
+             }(), WT = km[115]
```

#### 2976. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21959` → after: `L21719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21719) · [Before (L21959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21959)

```diff
-   37411: (pp, ip, cp) => {
+   37273: (TT, UT, mT) => {
```

#### 2977. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21961-L21962` → after: `L21721-L21722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21721-L21722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L21721-L21722) · [Before (L21961-L21962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L21961-L21962)

```diff
-       d: () => Yp,
-       h: () => Lp
+       c: () => kT,
+       e: () => HT
```
