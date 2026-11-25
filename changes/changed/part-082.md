# Changed — Bundle Modifications Report (Part 082 / 141)

- **Updated at**: `2026-11-25T09:11 JST`
- **Part**: `82 / 141` (**348** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 081](part-081.md) · [Part 083 →](part-083.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (igzsf.a0b73a5f → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4695 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 1879. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13667` → after: `L13332-L13379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13332-L13379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13332-L13379) · [Before (L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13667)

```diff
-             return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = tV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+             BB[bB[13]] = bB[1];
+             const IB = require("big-integer");
+             cI(BB[bB[22]] = class {
+               static randomPrime(...BB) {
+                 BB[bB[13]] = bB[2];
+                 const ZB = IB.one.shiftLeft(BB[bB[1]] - bB[2]),
+                   TB = IB.one.shiftLeft(BB[bB[1]]).prev();
+                 for (; bB[183];) {
+                   let BB = IB.randBetween(ZB, TB);
+                   if (BB.isProbablePrime(bB[156])) return BB
+                 }
+               }
+               static generate(...BB) {
+                 BB[bB[13]] = bB[2];
+                 const ZB = IB(bB[214]);
+                 let TB, JB;
+ ... (32 more added lines; see GitHub link above)
```

#### 1880. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13669` → after: `L13381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13381) · [Before (L13669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13669)

```diff
-           if (tt[Bt[43]][eV(Bt[238]) + eV(397) + Bt[17]] > Bt[2]) {
+           if (IZ(328) in DB && ZZ(), BB[bB[0]][IZ(329) + IZ(330) + bB[29]] > bB[1]) {
```

#### 1881. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13671-L13673` → after: `L13383-L13385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13383-L13385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13383-L13385) · [Before (L13671-L13673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13671-L13673)

```diff
-               for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = ']DGn9kCWArlPZLVM}`;T~Fg!uhdY<v&K)>|,3^w2s.{SBEH:6(QbX4%7Umyj+/"#[$eIJNtq*o@zp8RO_=51x0ifa?c', tt[Bt[43]] = "" + (tt[Bt[2]] || ""), tt[Bt[29]] = tt[Bt[43]].length, tt[Bt[15]] = [], tt[Bt[17]] = Bt[2], tt[Bt[35]] = Bt[2], tt[Bt … [truncated]
-                 if (tt[Bt[32]] = tt[Bt[0]].indexOf(tt[Bt[43]][tt[Bt[10]]]), tt[Bt[32]] !== -Bt[0])
-                   if (tt[Bt[3]] < Bt[2]) tt[Bt[3]] = tt[Bt[32]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '|WqBpjzZ:&hDy@Y{m=Nx1(s9`7JK.V!$OM+IS^]/2}n"*4wFv[>o8bL_~?aQ5lAUCPEr6d%03gitHk#GXRu)fc<,e;T', BB[bB[49]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[49]].length, BB[bB[10]] = [], BB[-bB[3]] = bB[1], BB[bB[20]] = bB[1], BB[bB … [truncated]
+                 if (BB[bB[33]] = BB[bB[2]].indexOf(BB[bB[49]][BB[bB[31]]]), BB[bB[33]] !== -bB[2])
+                   if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[33]];
```

#### 1882. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13675` → after: `L13387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13387) · [Before (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13675)

```diff
-                     de(tt[Bt[3]] += tt[Bt[32]] * Bt[33], tt[Bt[17]] |= tt[Bt[3]] << tt[Bt[35]], tt[Bt[35]] += (tt[Bt[3]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                     cI(BB[bB[26]] += BB[bB[33]] * bB[35], BB[-bB[3]] |= BB[bB[26]] << BB[bB[20]], BB[bB[20]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1883. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13677-L13680` → after: `L13389-L13392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13389-L13392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13389-L13392) · [Before (L13677-L13680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13677-L13680)

```diff
-                       de(tt[Bt[15]].push(tt[Bt[17]] & Bt[11]), tt[Bt[17]] >>= Bt[10], tt[Bt[35]] -= Bt[10])
-                     } while (tt[Bt[35]] > Bt[24]);
-                     tt[Bt[3]] = -Bt[0]
-                   } return tt[Bt[3]] > -Bt[0] && tt[Bt[15]].push((tt[Bt[17]] | tt[Bt[3]] << tt[Bt[35]]) & Bt[11]), xt(tt[Bt[15]])
+                       cI(BB[bB[10]].push(BB[-bB[3]] & bB[12]), BB[-bB[3]] >>= bB[11], BB[bB[20]] -= bB[11])
+                     } while (BB[bB[20]] > bB[26]);
+                     BB[bB[26]] = -bB[2]
+                   } return BB[bB[26]] > -bB[2] && BB[bB[10]].push((BB[-bB[3]] | BB[bB[26]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1884. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13684` → after: `L13396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13396) · [Before (L13684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13684)

```diff
-               return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = VV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = TZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1885. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13686-L13691` → after: `L13398-L13405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13398-L13405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13398-L13405) · [Before (L13686-L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13686-L13691)

```diff
-             let qV = tt[Bt[43]][eV(398) + eV(399)];
-             if (tt[Bt[43]][eV(Bt[238]) + OV(Bt[242]) + Bt[17]] < tt[Bt[7]]) {
-               function DV(...tt) {
-                 for (de(tt[Bt[12]] = Bt[0], tt[-Bt[113]] = '&lHFbITiM9Y(+eAu{[BzL"S#KC>1rZhapE%@4/Xj]3:Nm5d^6W,Jv}kwD<8x$?*Ps2!`_oq|VGO~)7=Qgytn0Rf.U;c', tt[Bt[224]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[224]].length, tt[Bt[9]] = [], tt[Bt[7]] = Bt[2], tt[Bt[8]] = Bt[2], t … [truncated]
-                   if (tt[Bt[32]] = tt[-Bt[113]].indexOf(tt[Bt[224]][tt[Bt[239]]]), tt[Bt[32]] !== -Bt[0])
-                     if (tt[-Bt[240]] < Bt[2]) tt[-Bt[240]] = tt[Bt[32]];
+             let oZ = BB[bB[0]][IZ(331) + IZ(332)];
+             if (BB[bB[0]][JZ(bB[204]) + JZ(bB[205]) + bB[29]] < BB[bB[8]]) {
+               function GZ(BB) {
+                 var IB, ZB, TB, JB, oB, GB, vB;
+                 for (cI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = bB[1], oB = bB[1], GB = -bB[2]), vB = bB[1]; vB < ZB; vB++) {
+                   var kB = 'zngHclq+y`NBRE>For"I4U0LACie2sm!|uW_7S[;~69)#}^DQ<vtGKkdXj=3?{/*1w:Y&h]faV(.,M8@5OZTP$Jbxp%'.indexOf(IB[vB]);
+                   if (kB !== -bB[2])
+                     if (GB < bB[1]) GB = kB;
```

#### 1886. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13693` → after: `L13407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13407) · [Before (L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13693)

```diff
-                       de(tt[-Bt[240]] += tt[Bt[32]] * Bt[33], tt[Bt[7]] |= tt[-Bt[240]] << tt[Bt[8]], tt[Bt[8]] += (tt[-Bt[240]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                       cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1887. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13695-L13698` → after: `L13409-L13414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13409-L13414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13409-L13414) · [Before (L13695-L13698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13695-L13698)

```diff
-                         de(tt[Bt[9]].push(tt[Bt[7]] & Bt[11]), tt[Bt[7]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                       } while (tt[Bt[8]] > Bt[24]);
-                       tt[-Bt[240]] = -Bt[0]
-                     } return tt[-Bt[240]] > -Bt[0] && tt[Bt[9]].push((tt[Bt[7]] | tt[-Bt[240]] << tt[Bt[8]]) & Bt[11]), xt(tt[Bt[9]])
+                         cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                       } while (oB > bB[26]);
+                       GB = -bB[2]
+                     }
+                 }
+                 return GB > -bB[2] && TB.push((JB | GB << oB) & bB[12]), EB(TB)
```

#### 1888. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13702` → after: `L13418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13418) · [Before (L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13702)

```diff
-                 return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = DV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+                 return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = GZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1889. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13704` → after: `L13420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13420) · [Before (L13704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13704)

```diff
-               qV *= tt[Bt[43]][OV(Bt[241]) + mV(402) + Bt[17]] / tt[Bt[7]]
+               oZ *= BB[bB[0]][vZ(335) + vZ(336) + bB[29]] / BB[bB[8]]
```

#### 1890. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13706` → after: `L13422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13422) · [Before (L13706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13706)

```diff
-             de(dt()[OV(403)](It, Bt[2], qV, Bt[2]), tt[Bt[9]][OV(404) + OV(405)](It), tt[Bt[43]][OV(Bt[241]) + OV(Bt[242]) + Bt[17]] -= tt[Bt[7]])
+             cI(vB()[JZ(337)](MB, bB[1], oZ, bB[1]), BB[bB[52]][JZ(338) + JZ(339)](MB), BB[bB[0]][JZ(bB[204]) + JZ(bB[205]) + bB[29]] -= BB[bB[8]])
```

#### 1891. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13710-L13712` → after: `L13426-L13428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13426-L13428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13426-L13428) · [Before (L13710-L13712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13710-L13712)

```diff
-             for (de(tt[Bt[12]] = Bt[0], tt[Bt[27]] = '=DbmeTKQEtOPcJGq/nHd(02rC|I4wRa*#S`hf8>z5F_^79ZY@Bpx~k)Xu{+%s?jLW]g,;Ni1&oUVv6y.:l!"[3}$M<A', tt[Bt[13]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[13]].length, tt[Bt[15]] = [], tt[Bt[7]] = Bt[2], tt[Bt[8]] = Bt[2], tt[Bt[24 … [truncated]
-               if (tt[Bt[32]] = tt[Bt[27]].indexOf(tt[Bt[13]][tt[Bt[3]]]), tt[Bt[32]] !== -Bt[0])
-                 if (tt[Bt[24]] < Bt[2]) tt[Bt[24]] = tt[Bt[32]];
+             for (cI(BB[bB[13]] = bB[2], BB[-bB[119]] = 'ChuBvH29jlw,a?no=Ixz~Y<(tE071sV)@.AN_LK8|3k`gbm"q4Ri^GpMr:W>!#/TXD*fyUP+$]6;&eQFc%d5O{SJZ}[', BB[-bB[206]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[-bB[206]].length, BB[bB[52]] = [], BB[bB[29]] = bB[1], BB[bB[207]] = bB[1], … [truncated]
+               if (BB[bB[208]] = BB[-bB[119]].indexOf(BB[-bB[206]][BB[bB[11]]]), BB[bB[208]] !== -bB[2])
+                 if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[208]];
```

#### 1892. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13714` → after: `L13430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13430) · [Before (L13714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13714)

```diff
-                   de(tt[Bt[24]] += tt[Bt[32]] * Bt[33], tt[Bt[7]] |= tt[Bt[24]] << tt[Bt[8]], tt[Bt[8]] += (tt[Bt[24]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                   cI(BB[bB[34]] += BB[bB[208]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[207]], BB[bB[207]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1893. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13716-L13719` → after: `L13432-L13435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13432-L13435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13432-L13435) · [Before (L13716-L13719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13716-L13719)

```diff
-                     de(tt[Bt[15]].push(tt[Bt[7]] & Bt[11]), tt[Bt[7]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                   } while (tt[Bt[8]] > Bt[24]);
-                   tt[Bt[24]] = -Bt[0]
-                 } return tt[Bt[24]] > -Bt[0] && tt[Bt[15]].push((tt[Bt[7]] | tt[Bt[24]] << tt[Bt[8]]) & Bt[11]), xt(tt[Bt[15]])
+                     cI(BB[bB[52]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[207]] -= bB[11])
+                   } while (BB[bB[207]] > bB[26]);
+                   BB[bB[34]] = -bB[2]
+                 } return BB[bB[34]] > -bB[2] && BB[bB[52]].push((BB[bB[29]] | BB[bB[34]] << BB[bB[207]]) & bB[12]), EB(BB[bB[52]])
```

#### 1894. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13723` → after: `L13439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13439) · [Before (L13723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13723)

```diff
-             return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = dV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = kZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1895. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13725` → after: `L13441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13441) · [Before (L13725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13725)

```diff
-           if (de(tt[Bt[43]][jV(406) + jV(407)] = Bt[107], dt()[jV(408)](It, Bt[2], te(tt[Bt[2]], tt[Bt[0]], zt) * tt[Bt[29]][jV(Bt[243]) + jV(Bt[244]) + Bt[214]][jV(411) + jV(412) + jV(413)]() * Ht[jV(Bt[243]) + jV(Bt[244]) + Bt[214]], Bt[2]), tt[Bt[9]][jV(414) + jV(415)](It), tt … [truncated]
+           if (cI(BB[bB[0]][cZ(340) + cZ(341)] = bB[183], vB()[cZ(342)](MB, bB[1], ZI(BB[bB[1]], BB[bB[2]], XB) * BB[bB[30]][cZ(bB[209]) + cZ(bB[210]) + bB[175]][cZ(345) + cZ(346) + cZ(347) + cZ(348)]() * cB[cZ(bB[209]) + cZ(bB[210]) + bB[175]], bB[1]), BB[bB[52]][cZ(349) + cZ(350 … [truncated]
```

#### 1896. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13727-L13729` → after: `L13443-L13445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13443-L13445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13443-L13445) · [Before (L13727-L13729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13727-L13729)

```diff
-               for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = ';CIgBWTFebNLkMd&^x)XHi0UYGqR92h|}jm176scw<o`4A[D_tVl]:nZ(?%!=pf~S@$KQJa>OrEP,*#zv.53yu+"8{/', tt[Bt[108]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[108]].length, tt[Bt[9]] = [], tt[Bt[17]] = Bt[2], tt[Bt[8]] = Bt[2], tt[Bt … [truncated]
-                 if (tt[Bt[48]] = tt[Bt[0]].indexOf(tt[Bt[108]][tt[-Bt[68]]]), tt[Bt[48]] !== -Bt[0])
-                   if (tt[Bt[6]] < Bt[2]) tt[Bt[6]] = tt[Bt[48]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '^tXAFLNhWOoJfedRl*kEnQg!_19HYUybuV?&.8qB]:MC20(=s<`|%DZpT/cIK)S6>@P;7,m"G3z4vi[jaw$r#~+}5x{', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[211]] = BB[bB[14]].length, BB[bB[52]] = [], BB[bB[212]] = bB[1], BB[bB[118]] = bB[1], BB … [truncated]
+                 if (BB[bB[6]] = BB[bB[2]].indexOf(BB[bB[14]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                   if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
```

#### 1897. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13731` → after: `L13447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13447) · [Before (L13731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13731)

```diff
-                     de(tt[Bt[6]] += tt[Bt[48]] * Bt[33], tt[Bt[17]] |= tt[Bt[6]] << tt[Bt[8]], tt[Bt[8]] += (tt[Bt[6]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                     cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[bB[212]] |= BB[bB[34]] << BB[bB[118]], BB[bB[118]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1898. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13733-L13736` → after: `L13449-L13452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13449-L13452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13449-L13452) · [Before (L13733-L13736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13733-L13736)

```diff
-                       de(tt[Bt[9]].push(tt[Bt[17]] & Bt[11]), tt[Bt[17]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                     } while (tt[Bt[8]] > Bt[24]);
-                     tt[Bt[6]] = -Bt[0]
-                   } return tt[Bt[6]] > -Bt[0] && tt[Bt[9]].push((tt[Bt[17]] | tt[Bt[6]] << tt[Bt[8]]) & Bt[11]), xt(tt[Bt[9]])
+                       cI(BB[bB[52]].push(BB[bB[212]] & bB[12]), BB[bB[212]] >>= bB[11], BB[bB[118]] -= bB[11])
+                     } while (BB[bB[118]] > bB[26]);
+                     BB[bB[34]] = -bB[2]
+                   } return BB[bB[34]] > -bB[2] && BB[bB[52]].push((BB[bB[212]] | BB[bB[34]] << BB[bB[118]]) & bB[12]), EB(BB[bB[52]])
```

#### 1899. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13740` → after: `L13456-L13502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13456-L13502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13456-L13502) · [Before (L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13740)

```diff
-               return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = HV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = nZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+             }
+ 
+             function zZ(...BB) {
+               function IB(...BB) {
+                 return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = function(...BB) {
+                   for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '3eILkdVTRPFOanHNfcqDporXUZtbKmslGY{]WxA<.:M=$}h/6g>"SEJ`BCQzw,8ij^!(v+%)[10|@7_&5#y?u4;92*~', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[10]] = [], BB[-bB[213]] = bB[1], BB[bB[24]] = bB[1],  … [truncated]
+                     if (BB[bB[33]] = BB[bB[22]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[33]] !== -bB[2])
+                       if (BB[bB[84]] < bB[1]) BB[bB[84]] = BB[bB[33]];
+                       else {
+                         cI(BB[bB[84]] += BB[bB[33]] * bB[35], BB[-bB[213]] |= BB[bB[84]] << BB[bB[24]], BB[bB[24]] += (BB[bB[84]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                         do {
+                           cI(BB[bB[10]].push(BB[-bB[213]] & bB[12]), BB[-bB[213]] >>= bB[11], BB[bB[24]] -= bB[11])
+                         } while (BB[bB[24]] > bB[26]);
+                         BB[bB[84]] = -bB[2]
+                       } return BB[bB[84]] > -bB[2] && BB[bB[10]].push((BB[-bB[213]] | BB[bB[84]] << BB[bB[24]]) & bB[12]), EB(BB[bB[10]])
+ ... (31 more added lines; see GitHub link above)
```

#### 1900. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13742-L13743` → after: `L13504-L13579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13504-L13579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13504-L13579) · [Before (L13742-L13743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13742-L13743)

```diff
-             const QV = tt[Bt[29]][XV(419) + XV(420) + XV(421)];
-             if (Je && tt[Bt[29]][Bt[253]] && !QV) {
+             cZ(354) + "U" in DB && zZ();
+             const FZ = BB[bB[30]][hZ(358) + hZ(359) + hZ(360)];
+             if (dI && BB[bB[30]][bB[232]] && !FZ) {
+               function NZ(BB) {
+                 var IB, ZB, TB, JB, oB, GB, vB;
+                 for (cI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = bB[1], oB = bB[1], GB = -bB[2]), vB = bB[1]; vB < ZB; vB++) {
+                   var kB = '4rmx5@D[Sa:$iw<beKy/(Qnf7Ac)WVJXgO9%}t_d.~!,+&sN|Io?F`8j]ElTYv1Ck;RU{M6L"P>u=Z^zBH0G#*phq32'.indexOf(IB[vB]);
+                   if (kB !== -bB[2])
+                     if (GB < bB[1]) GB = kB;
+                     else {
+                       cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                       do {
+                         cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                       } while (oB > bB[26]);
+                       GB = -bB[2]
+                     }
+ ... (60 more added lines; see GitHub link above)
```

#### 1901. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13745-L13747` → after: `L13581-L13583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13581-L13583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13581-L13583) · [Before (L13745-L13747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13745-L13747)

```diff
-                 for (de(tt[Bt[12]] = Bt[0], tt[-Bt[218]] = 'DuTCZe1Y!hIsM=]Hd"90Pbm`UQ@Nf<+w}J_:r[~X6;cG&q%O$38lj>.B7k^2gz)AL|W#ta*R,inE4o/F5S{y?KVvpx(', tt[Bt[13]] = "" + (tt[Bt[2]] || ""), tt[Bt[29]] = tt[Bt[13]].length, tt[-Bt[245]] = [], tt[Bt[17]] = Bt[2], tt[Bt[8]] = Bt[2], … [truncated]
-                   if (tt[Bt[48]] = tt[-Bt[218]].indexOf(tt[Bt[13]][tt[Bt[3]]]), tt[Bt[48]] !== -Bt[0])
-                     if (tt[Bt[24]] < Bt[2]) tt[Bt[24]] = tt[Bt[48]];
+                 for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'ADh0mksFeXwrJ~lpObdvjn3ZYM$7S/t8NT9BqiK=f[?@}5<&.cRCLy^,!;|QzUa)IgPHE`oW6V{x2*"(1u4>+%]:#G_', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[-bB[109]] = BB[bB[0]].length, BB[bB[215]] = [], BB[bB[130]] = bB[1], BB[bB[82]] = bB[1], B … [truncated]
+                   if (BB[bB[79]] = BB[bB[2]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[bB[79]] !== -bB[2])
+                     if (BB[-bB[136]] < bB[1]) BB[-bB[136]] = BB[bB[79]];
```

#### 1902. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13749` → after: `L13585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13585) · [Before (L13749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13749)

```diff
-                       de(tt[Bt[24]] += tt[Bt[48]] * Bt[33], tt[Bt[17]] |= tt[Bt[24]] << tt[Bt[8]], tt[Bt[8]] += (tt[Bt[24]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                       cI(BB[-bB[136]] += BB[bB[79]] * bB[35], BB[bB[130]] |= BB[-bB[136]] << BB[bB[82]], BB[bB[82]] += (BB[-bB[136]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1903. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13751-L13754` → after: `L13587-L13590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13587-L13590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13587-L13590) · [Before (L13751-L13754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13751-L13754)

```diff
-                         de(tt[-Bt[245]].push(tt[Bt[17]] & Bt[11]), tt[Bt[17]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                       } while (tt[Bt[8]] > Bt[24]);
-                       tt[Bt[24]] = -Bt[0]
-                     } return tt[Bt[24]] > -Bt[0] && tt[-Bt[245]].push((tt[Bt[17]] | tt[Bt[24]] << tt[Bt[8]]) & Bt[11]), xt(tt[-Bt[245]])
+                         cI(BB[bB[215]].push(BB[bB[130]] & bB[12]), BB[bB[130]] >>= bB[11], BB[bB[82]] -= bB[11])
+                       } while (BB[bB[82]] > bB[26]);
+                       BB[-bB[136]] = -bB[2]
+                     } return BB[-bB[136]] > -bB[2] && BB[bB[215]].push((BB[bB[130]] | BB[-bB[136]] << BB[bB[82]]) & bB[12]), EB(BB[bB[215]])
```

#### 1904. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13758` → after: `L13594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13594) · [Before (L13758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13758)

```diff
-                 return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = lV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+                 return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = yZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1905. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13760-L13761` → after: `L13596-L13597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13596-L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13596-L13597) · [Before (L13760-L13761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13760-L13761)

```diff
-               de(tt[Bt[2]][XV(Bt[246])][EV(423)](tt[Bt[0]], tt[Bt[29]], tt[Bt[43]], tt[Bt[43]][EV(424) + EV(425)] + Bt[0]), tt[-Bt[49]] = Bt[107])
-             } else tt[Bt[2]][XV(Bt[246])][XV(426)](tt[Bt[0]], tt[Bt[29]], tt[Bt[43]], Bt[2])
+               BB[bB[1]][UZ(366)][UZ(367)](BB[bB[2]], BB[bB[30]], BB[bB[0]], bB[1])
+             }
```

#### 1906. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13764-L13766` → after: `L13600-L13602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13600-L13602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13600-L13602) · [Before (L13764-L13766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13764-L13766)

```diff
-               for (de(tt[Bt[12]] = Bt[0], tt[Bt[247]] = 'GyxzHrU}[amJ1qh7~`oC+t?3p%Pg<DRTiY(|_F)OW^=j"0SE6:{wBM;v9#kfNKne5&$4@2u/8bA]!LQ,IXVdl>*Zcs.', tt[Bt[43]] = "" + (tt[Bt[2]] || ""), tt[-Bt[131]] = tt[Bt[43]].length, tt[Bt[9]] = [], tt[Bt[7]] = Bt[2], tt[Bt[8]] = Bt[2], tt[B … [truncated]
-                 if (tt[Bt[48]] = tt[Bt[247]].indexOf(tt[Bt[43]][tt[Bt[172]]]), tt[Bt[48]] !== -Bt[0])
-                   if (tt[Bt[6]] < Bt[2]) tt[Bt[6]] = tt[Bt[48]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[218]] = 'D;FKnZu=78J]IE@<zv9XH1e?Trc$w4GM.}A!,):dsOP/q+[o#f%2R_klSh&`|gx>mCiL*3pBV~^bWy"Q0(YjUa5{Nt6', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[216]] = BB[bB[14]].length, BB[bB[220]] = [], BB[bB[8]] = bB[1], BB[bB[24]] = bB[1], BB … [truncated]
+                 if (BB[bB[219]] = BB[bB[218]].indexOf(BB[bB[14]][BB[-bB[217]]]), BB[bB[219]] !== -bB[2])
+                   if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[219]];
```

#### 1907. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13768` → after: `L13604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13604) · [Before (L13768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13768)

```diff
-                     de(tt[Bt[6]] += tt[Bt[48]] * Bt[33], tt[Bt[7]] |= tt[Bt[6]] << tt[Bt[8]], tt[Bt[8]] += (tt[Bt[6]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                     cI(BB[bB[34]] += BB[bB[219]] * bB[35], BB[bB[8]] |= BB[bB[34]] << BB[bB[24]], BB[bB[24]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1908. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13770-L13773` → after: `L13606-L13609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13606-L13609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13606-L13609) · [Before (L13770-L13773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13770-L13773)

```diff
-                       de(tt[Bt[9]].push(tt[Bt[7]] & Bt[11]), tt[Bt[7]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                     } while (tt[Bt[8]] > Bt[24]);
-                     tt[Bt[6]] = -Bt[0]
-                   } return tt[Bt[6]] > -Bt[0] && tt[Bt[9]].push((tt[Bt[7]] | tt[Bt[6]] << tt[Bt[8]]) & Bt[11]), xt(tt[Bt[9]])
+                       cI(BB[bB[220]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[24]] -= bB[11])
+                     } while (BB[bB[24]] > bB[26]);
+                     BB[bB[34]] = -bB[2]
+                   } return BB[bB[34]] > -bB[2] && BB[bB[220]].push((BB[bB[8]] | BB[bB[34]] << BB[bB[24]]) & bB[12]), EB(BB[bB[220]])
```

#### 1909. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13776-L13777` → after: `L13612-L13613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13612-L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13612-L13613) · [Before (L13776-L13777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13776-L13777)

```diff
-             function wV(tt) {
-               return typeof Lt[tt] === Bt[18] ? Lt[tt] = fV(Ft[tt]) : Lt[tt]
+             function dZ(...BB) {
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = WZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1910. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13779` → after: `L13615-L13650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13615-L13650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13615-L13650) · [Before (L13779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13779)

```diff
-             tt[Bt[43]][jV(427) + wV(428)]++, tt[Bt[9]][Bt[248]][Bt[0]] < Bt[2] && (tt[Bt[9]][Bt[248]][Bt[0]] = Bt[2])
+             BB[bB[0]][dZ(368) + dZ(369)]++, BB[bB[52]][bB[221]][bB[2]] < bB[1] && (BB[bB[52]][bB[221]][bB[2]] = bB[1])
+           }
+         }
+       } else {
+         function CZ(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[bB[27]] = 'zpiPeKOSGwREJhdl`;BF:$N%4~<MXb2,q)QsL*x=y[!j50VU1_I&^+A9YtHv3(Cc6.rD@gZaf{?"ou7W/m>k#]8|}nT', BB[bB[222]] = "" + (BB[bB[1]] || ""), BB[-bB[143]] = BB[bB[222]].length, BB[bB[52]] = [], BB[-bB[223]] = bB[1], BB[bB[20]] = bB[1], BB … [truncated]
+             if (BB[bB[6]] = BB[bB[27]].indexOf(BB[bB[222]][BB[-bB[200]]]), BB[bB[6]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
+               else {
+                 cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[-bB[223]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                 do {
+                   cI(BB[bB[52]].push(BB[-bB[223]] & bB[12]), BB[-bB[223]] >>= bB[11], BB[bB[20]] -= bB[11])
+                 } while (BB[bB[20]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[bB[52]].push((BB[-bB[223]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[52]])
+         }
+ ... (20 more added lines; see GitHub link above)
```

#### 1911. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13782-L13783` → after: `L13654-L13655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13654-L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13654-L13655) · [Before (L13782-L13783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13782-L13783)

```diff
-       } else tt[Bt[43]][et(Bt[249]) + et(429)] = Bt[92], Xe && tt[Bt[2]][et(Bt[173])][et(430)](tt[Bt[0]], tt[Bt[29]], tt[Bt[43]], Bt[2]);
-       if (tt[Bt[43]][et(Bt[250]) + Bt[6]]) {
+       }
+       if (BB[bB[0]][IB(bB[224]) + bB[34]]) {
```

#### 1912. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13785-L13787` → after: `L13657-L13659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13657-L13659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13657-L13659) · [Before (L13785-L13787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13785-L13787)

```diff
-           for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = 'GEd{F,brolPj/7aHwORQ>k}<v6SX1K(2p95Bm!.DI&;$8C+Tey:xgWn]_f#sM4[ut"Zh*i0~c@N3A%z=)`J?Y^|qUVL', tt[Bt[13]] = "" + (tt[Bt[2]] || ""), tt[Bt[131]] = tt[Bt[13]].length, tt[Bt[9]] = [], tt[-Bt[251]] = Bt[2], tt[Bt[35]] = Bt[2], tt[Bt[6 … [truncated]
-             if (tt[-Bt[219]] = tt[Bt[0]].indexOf(tt[Bt[13]][tt[Bt[3]]]), tt[-Bt[219]] !== -Bt[0])
-               if (tt[Bt[6]] < Bt[2]) tt[Bt[6]] = tt[-Bt[219]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'jUkNptVrZ!YCK7gXx=L`J0lQBRf8hMnw,ATO1HsP;I@/2)ciDoy]qv^m_bG+z>E&F}uWSad[3$4*9:~{|%.6#5e?("<', BB[-bB[101]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[-bB[101]].length, BB[bB[52]] = [], BB[bB[29]] = bB[1], BB[bB[93]] = bB[1], BB[-b … [truncated]
+             if (BB[-bB[68]] = BB[bB[2]].indexOf(BB[-bB[101]][BB[-bB[150]]]), BB[-bB[68]] !== -bB[2])
+               if (BB[-bB[108]] < bB[1]) BB[-bB[108]] = BB[-bB[68]];
```

#### 1913. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13789` → after: `L13661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13661) · [Before (L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13789)

```diff
-                 de(tt[Bt[6]] += tt[-Bt[219]] * Bt[33], tt[-Bt[251]] |= tt[Bt[6]] << tt[Bt[35]], tt[Bt[35]] += (tt[Bt[6]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                 cI(BB[-bB[108]] += BB[-bB[68]] * bB[35], BB[bB[29]] |= BB[-bB[108]] << BB[bB[93]], BB[bB[93]] += (BB[-bB[108]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1914. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13791-L13794` → after: `L13663-L13666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13663-L13666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13663-L13666) · [Before (L13791-L13794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13791-L13794)

```diff
-                   de(tt[Bt[9]].push(tt[-Bt[251]] & Bt[11]), tt[-Bt[251]] >>= Bt[10], tt[Bt[35]] -= Bt[10])
-                 } while (tt[Bt[35]] > Bt[24]);
-                 tt[Bt[6]] = -Bt[0]
-               } return tt[Bt[6]] > -Bt[0] && tt[Bt[9]].push((tt[-Bt[251]] | tt[Bt[6]] << tt[Bt[35]]) & Bt[11]), xt(tt[Bt[9]])
+                   cI(BB[bB[52]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[93]] -= bB[11])
+                 } while (BB[bB[93]] > bB[26]);
+                 BB[-bB[108]] = -bB[2]
+               } return BB[-bB[108]] > -bB[2] && BB[bB[52]].push((BB[bB[29]] | BB[-bB[108]] << BB[bB[93]]) & bB[12]), EB(BB[bB[52]])
```

#### 1915. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13798` → after: `L13670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13670) · [Before (L13798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13798)

```diff
-           return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = yV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = OZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1916. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13800-L13803` → after: `L13672-L13693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13672-L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13672-L13693) · [Before (L13800-L13803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13800-L13803)

```diff
-         tt[Bt[9]][et(Bt[176]) + et(Bt[177]) + et(Bt[178])] = Bt[2];
-         let aV = Bt[2],
-           MV = Bt[92];
-         if (tt[Bt[29]][et(Bt[217]) + Bt[6]] || tt[Bt[24]]) {
+         BB[bB[52]][YZ(374) + YZ(375) + YZ(376)] = bB[1];
+         let iZ = bB[1],
+           pZ = bB[179];
+         if (BB[bB[30]][YZ(377) + bB[34]] || BB[bB[14]]) {
+           function HZ(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[bB[227]] = ',x53u<6/#7%|0>;2$T[aEf@nWAQMZVBIC)do9O"lRgLN1}HrzY^Gi_kSm&evt?*`w:sPU4~X.cbDJ+ypK8!=({Fh]jq', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[226]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[98]] = bB[1], BB[bB[20]] = bB[1], BB[bB[ … [truncated]
+               if (BB[bB[6]] = BB[bB[227]].indexOf(BB[bB[0]][BB[-bB[225]]]), BB[bB[6]] !== -bB[2])
+                 if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
+                 else {
+                   cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[bB[98]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                   do {
+                     cI(BB[bB[10]].push(BB[bB[98]] & bB[12]), BB[bB[98]] >>= bB[11], BB[bB[20]] -= bB[11])
+                   } while (BB[bB[20]] > bB[26]);
+                   BB[bB[34]] = -bB[2]
+                 } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[98]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
+           }
+ ... (6 more added lines; see GitHub link above)
```

#### 1917. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13805-L13807` → after: `L13695-L13697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13695-L13697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13695-L13697) · [Before (L13805-L13807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13805-L13807)

```diff
-             for (de(tt[Bt[12]] = Bt[0], tt[Bt[27]] = '[hAsB)"Du({9V0eW3FY!+Z/Jp?HgPvxTiCOmd*%>G~<1fNa@=I8M2ry$:6L^jq.}cRw&,UE_X5|;QkSnK`4l]tb7oz#', tt[Bt[43]] = "" + (tt[Bt[2]] || ""), tt[Bt[29]] = tt[Bt[43]].length, tt[Bt[9]] = [], tt[-Bt[139]] = Bt[2], tt[Bt[8]] = Bt[2], tt[Bt[ … [truncated]
-               if (tt[Bt[48]] = tt[Bt[27]].indexOf(tt[Bt[43]][tt[Bt[3]]]), tt[Bt[48]] !== -Bt[0])
-                 if (tt[Bt[24]] < Bt[2]) tt[Bt[24]] = tt[Bt[48]];
+             for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '0#]+3zwc:n{SOA51U*.}iugKQb7G/8@f?xBM%Fe=lYNpX6Cjm)vP>[oZ2^T_V"9HLq4<WI&DRt`rJds!|;,Eya~$h(k', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[208]] = BB[bB[14]].length, BB[bB[217]] = [], BB[bB[29]] = bB[1], BB[-bB[89]] = bB[1], BB[b … [truncated]
+               if (BB[-bB[228]] = BB[bB[2]].indexOf(BB[bB[14]][BB[bB[31]]]), BB[-bB[228]] !== -bB[2])
+                 if (BB[bB[223]] < bB[1]) BB[bB[223]] = BB[-bB[228]];
```

#### 1918. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13809` → after: `L13699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13699) · [Before (L13809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13809)

```diff
-                   de(tt[Bt[24]] += tt[Bt[48]] * Bt[33], tt[-Bt[139]] |= tt[Bt[24]] << tt[Bt[8]], tt[Bt[8]] += (tt[Bt[24]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                   cI(BB[bB[223]] += BB[-bB[228]] * bB[35], BB[bB[29]] |= BB[bB[223]] << BB[-bB[89]], BB[-bB[89]] += (BB[bB[223]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1919. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13811-L13814` → after: `L13701-L13708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13701-L13708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13701-L13708) · [Before (L13811-L13814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13811-L13814)

```diff
-                     de(tt[Bt[9]].push(tt[-Bt[139]] & Bt[11]), tt[-Bt[139]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                   } while (tt[Bt[8]] > Bt[24]);
-                   tt[Bt[24]] = -Bt[0]
-                 } return tt[Bt[24]] > -Bt[0] && tt[Bt[9]].push((tt[-Bt[139]] | tt[Bt[24]] << tt[Bt[8]]) & Bt[11]), xt(tt[Bt[9]])
+                     cI(BB[bB[217]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[-bB[89]] -= bB[11])
+                   } while (BB[-bB[89]] > bB[26]);
+                   BB[bB[223]] = -bB[2]
+                 } return BB[bB[223]] > -bB[2] && BB[bB[217]].push((BB[bB[29]] | BB[bB[223]] << BB[-bB[89]]) & bB[12]), EB(BB[bB[217]])
+           }
+ 
+           function PZ(...BB) {
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = jZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1920. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13818-L13828` → after: `L13712-L13752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13712-L13752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13712-L13752) · [Before (L13818-L13828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13818-L13828)

```diff
-             return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = JV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
-           }
-           de(aV = Bt[0], MV = tt[Bt[24]] || !tt[Bt[43]][CV(431) + CV(432) + CV(433) + CV(434)])
-         } else tt[Bt[29]][et(Bt[297]) + et(Bt[298])] && de(aV = -Bt[0], MV = !tt[Bt[43]][et(Bt[378]) + et(Bt[379]) + et(Bt[380]) + et(Bt[381])]);
-         tt[Bt[43]][et(Bt[256]) + Bt[252]][et(442) + NV(Bt[255])] = tt[Bt[9]][Bt[248]][Bt[0]];
-         const bV = (Bt[2], vt[Bt[213]])(tt[Bt[43]][NV(Bt[254]) + Bt[252]], tt[Bt[29]][Bt[253]] !== Bt[2], aV, MV);
-         de(dt()[NV(445)](It, Bt[2], bV, Bt[2]), tt[Bt[9]][NV(446) + NV(447)](It), tt[Bt[9]][Bt[248]][Bt[0]] = tt[Bt[43]][NV(Bt[254]) + Bt[252]][NV(448) + NV(Bt[255])], tt[Bt[29]][NV(449)][NV(450) + NV(451) + NV(452)](NV(453) + NV(454) + NV(455), Bt[0] + tt[Bt[43]][NV(Bt[254]) + B … [truncated]
-       } else de(tt[Bt[43]][et(Bt[256]) + Bt[252]].reset(), tt[Bt[29]][et(Bt[299])][et(Bt[300]) + et(Bt[301]) + et(Bt[302])](et(460) + et(461) + et(Bt[329]), Bt[0]));
-       tt[Bt[100]] = Bt[92];
-       const Ce = bt[Bt[2]] || Jt[Bt[2]] && tt[Bt[9]][et(Bt[260]) + Bt[6]][Bt[2]] !== Bt[2] && (Ut > Bt[2] || Ht[et(Bt[261]) + et(Bt[262]) + et(Bt[263]) + Bt[264]] > Bt[2] && Math[et(Bt[265])](tt[Bt[43]][et(Bt[257]) + et(Bt[258]) + et(Bt[259])][Bt[2]]) >= Ht[et(468) + et(469) + et … [truncated]
-         ue = bt[Bt[43]] || Jt[Bt[43]] && tt[Bt[9]][et(Bt[260]) + Bt[6]][Bt[43]] !== Bt[2] && (Ut > Bt[2] || Ht[et(Bt[261]) + et(Bt[262]) + et(Bt[263]) + Bt[264]] > Bt[2] && Math[et(Bt[265])](tt[Bt[43]][et(Bt[257]) + et(Bt[258]) + et(Bt[259])][Bt[43]]) >= Ht[et(472) + et(473) + et … [truncated]
+             var IB;
+             cI(BB[bB[13]] = bB[1], IB = function(...BB) {
+               cI(BB[bB[13]] = bB[2], this.ah = BB[bB[1]], this.length = bB[1], this.map = {}, this.head = bB[51], this.tail = bB[51])
+             }, IB.prototype.get = function(...BB) {
+               var IB;
+               return cI(BB[bB[13]] = bB[2], IB = this.map[BB[bB[1]]]), IB ? (this.remove(IB), this.insert(IB.key, IB.val), IB.val) : -bB[2]
+             }, IB.prototype.put = function(...BB) {
+               cI(BB[bB[13]] = bB[0], this.map[BB[bB[1]]] ? (this.remove(this.map[BB[bB[1]]]), this.insert(BB[bB[1]], BB[bB[2]])) : this.length === this.ah ? (this.remove(this.head), this.insert(BB[bB[1]], BB[bB[2]])) : (this.insert(BB[bB[1]], BB[bB[2]]), this.length++))
+             }, IB.prototype.remove = function(...BB) {
+               cI(BB[bB[13]] = bB[2], BB[bB[2]] = BB[bB[1]].prev, BB[-bB[128]] = BB[bB[1]].next), BB[-bB[128]] && (BB[-bB[128]].prev = BB[bB[2]]), BB[bB[2]] && (BB[bB[2]].next = BB[-bB[128]]), this.head === BB[bB[1]] && (this.head = BB[-bB[128]]), this.tail === BB[bB[1]] && (this. … [truncated]
+             }, IB.prototype.insert = function(...BB) {
+               cI(BB[bB[13]] = bB[0], BB[-bB[229]] = new List(BB[bB[1]], BB[bB[2]]), this.tail ? (this.tail.next = BB[-bB[229]], BB[-bB[229]].prev = this.tail, this.tail = BB[-bB[229]]) : (this.tail = BB[-bB[229]], this.head = BB[-bB[229]]), this.map[BB[bB[1]]] = BB[-bB[229]])
+             }, console.log(IB))
+           }
+           PZ(384) in DB && RZ(), cI(iZ = -bB[2], pZ = !BB[bB[0]][PZ(385) + PZ(386) + PZ(387) + PZ(388)])
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 1921. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13830-L13839` → after: `L13754-L13761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13754-L13761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13754-L13761) · [Before (L13830-L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13830-L13839)

```diff
-         const uV = Bt[8],
-           KV = Bt[140],
-           hV = Bt[75];
-         if (tt[Bt[9]][Bt[281]](), Ce) {
-           function vV(tt) {
-             var et, Vt, Ot, qt, Dt, mt, dt;
-             for (de(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Bt[2], Dt = Bt[2], mt = -Bt[0]), dt = Bt[2]; dt < Vt; dt++) {
-               var jt = '9oEQDPeqVdWy)_GH62|unCm`.zsw;7:URSI53<>"kb!l/c1FT]B&#xhrZLgf?%(Y$Oa,J}~pj4A=it[K^0@*+{8MNXv'.indexOf(et[dt]);
-               if (jt !== -Bt[0])
-                 if (mt < Bt[2]) mt = jt;
+         const XZ = bB[24],
+           LZ = bB[104],
+           eZ = bB[108];
+         if (BB[bB[52]][bB[264]](), CI) {
+           function uZ(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[-bB[246]] = 'E<P=l1t^2+mN|U)jRoAOBZ4u.$g3d>WVGJIH"6{5D}FnScb*@Msi[vhzr:KC7kQ?wyL9YapX]e&q#%,f;0`x8(_!/~T', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[247]] = BB[bB[0]].length, BB[-bB[222]] = [], BB[bB[69]] = bB[1], BB[bB[20]] = bB[1], BB[ … [truncated]
+               if (BB[bB[240]] = BB[-bB[246]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[240]] !== -bB[2])
+                 if (BB[-bB[248]] < bB[1]) BB[-bB[248]] = BB[bB[240]];
```

#### 1922. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13841` → after: `L13763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13763) · [Before (L13841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13841)

```diff
-                   de(mt += jt * Bt[33], qt |= mt << Dt, Dt += (mt & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                   cI(BB[-bB[248]] += BB[bB[240]] * bB[35], BB[bB[69]] |= BB[-bB[248]] << BB[bB[20]], BB[bB[20]] += (BB[-bB[248]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1923. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13843-L13848` → after: `L13765-L13768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13765-L13768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13765-L13768) · [Before (L13843-L13848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13843-L13848)

```diff
-                     de(Ot.push(qt & Bt[11]), qt >>= Bt[10], Dt -= Bt[10])
-                   } while (Dt > Bt[24]);
-                   mt = -Bt[0]
-                 }
-             }
-             return mt > -Bt[0] && Ot.push((qt | mt << Dt) & Bt[11]), xt(Ot)
+                     cI(BB[-bB[222]].push(BB[bB[69]] & bB[12]), BB[bB[69]] >>= bB[11], BB[bB[20]] -= bB[11])
+                   } while (BB[bB[20]] > bB[26]);
+                   BB[-bB[248]] = -bB[2]
+                 } return BB[-bB[248]] > -bB[2] && BB[-bB[222]].push((BB[bB[69]] | BB[-bB[248]] << BB[bB[20]]) & bB[12]), EB(BB[-bB[222]])
```

#### 1924. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13852` → after: `L13772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13772) · [Before (L13852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13852)

```diff
-             return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = vV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = uZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1925. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13854-L13856` → after: `L13774-L13776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13774-L13776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13774-L13776) · [Before (L13854-L13856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13854-L13856)

```diff
-           const SV = tt[Bt[43]][WV(Bt[266]) + WV(Bt[267]) + WV(Bt[268])][Bt[2]] <= Bt[2] ? Bt[0] : -Bt[0],
-             cV = Math[WV(479)](hV, Math[WV(480)](tt[Bt[43]][WV(Bt[266]) + WV(Bt[267]) + WV(Bt[268])][Bt[2]]));
-           de(tt[Bt[9]][Bt[248]][Bt[2]] = SV * cV * (bt[Bt[2]] ? Bt[0] : At), me(tt[Bt[2]], bt[Bt[2]], [tt[Bt[9]][WV(481) + Bt[6]][Bt[2]], Bt[2], Bt[2]]))
+           const lZ = BB[bB[0]][IB(bB[12]) + fZ(bB[249]) + fZ(bB[250])][bB[1]] <= bB[1] ? bB[2] : -bB[2],
+             AZ = Math[fZ(418)](eZ, Math[fZ(419)](BB[bB[0]][fZ(420) + fZ(bB[249]) + fZ(bB[250])][bB[1]]));
+           cI(BB[bB[52]][bB[221]][bB[1]] = lZ * AZ * (WB[bB[1]] ? bB[2] : fB), kI(BB[bB[1]], WB[bB[1]], [BB[bB[52]][fZ(421) + bB[34]][bB[1]], bB[1], bB[1]]))
```

#### 1926. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13859-L13864` → after: `L13779-L13782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13779-L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13779-L13782) · [Before (L13859-L13864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13859-L13864)

```diff
-           function RV(tt) {
-             var et, Vt, Ot, qt, Dt, mt, dt;
-             for (de(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Bt[2], Dt = Bt[2], mt = -Bt[0]), dt = Bt[2]; dt < Vt; dt++) {
-               var jt = '2)1^u|(6`;[7}]k"<:nQMUAqa_O*l4Jb5v0FwVPoS@RLem!dfc,.8CxyrEt/Wp%h~Y$TDX3G{+i#sj>z9Bg?=NIH&KZ'.indexOf(et[dt]);
-               if (jt !== -Bt[0])
-                 if (mt < Bt[2]) mt = jt;
+           function tZ(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '9vO1eC/Pb6~jw3A#Iz!FYZ7n;x?]{Vq2fy4N)<MR0($=H>Bs&p:dQ5LuaTE^toh8_Kr%[l@UmSg"*+}`c|G,kJW.iXD', BB[bB[251]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[251]].length, BB[bB[10]] = [], BB[bB[142]] = bB[1], BB[bB[20]] = bB[1], BB[b … [truncated]
+               if (BB[bB[33]] = BB[bB[2]].indexOf(BB[bB[251]][BB[bB[11]]]), BB[bB[33]] !== -bB[2])
+                 if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[33]];
```

#### 1927. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13866` → after: `L13784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13784) · [Before (L13866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13866)

```diff
-                   de(mt += jt * Bt[33], qt |= mt << Dt, Dt += (mt & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                   cI(BB[bB[26]] += BB[bB[33]] * bB[35], BB[bB[142]] |= BB[bB[26]] << BB[bB[20]], BB[bB[20]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1928. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13868-L13873` → after: `L13786-L13789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13786-L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13786-L13789) · [Before (L13868-L13873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13868-L13873)

```diff
-                     de(Ot.push(qt & Bt[11]), qt >>= Bt[10], Dt -= Bt[10])
-                   } while (Dt > Bt[24]);
-                   mt = -Bt[0]
-                 }
-             }
-             return mt > -Bt[0] && Ot.push((qt | mt << Dt) & Bt[11]), xt(Ot)
+                     cI(BB[bB[10]].push(BB[bB[142]] & bB[12]), BB[bB[142]] >>= bB[11], BB[bB[20]] -= bB[11])
+                   } while (BB[bB[20]] > bB[26]);
+                   BB[bB[26]] = -bB[2]
+                 } return BB[bB[26]] > -bB[2] && BB[bB[10]].push((BB[bB[142]] | BB[bB[26]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1929. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13877` → after: `L13793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13793) · [Before (L13877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13877)

```diff
-             return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = RV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = tZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1930. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13879-L13898` → after: `L13795-L13797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13795-L13797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13795-L13797) · [Before (L13879-L13898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13879-L13898)

```diff
-           const PV = tt[Bt[43]][IV(Bt[269]) + IV(Bt[270]) + IV(Bt[271])][Bt[0]] <= Bt[2] ? Bt[0] : -Bt[0];
-           let ZV = Math[IV(485)](uV, Math[IV(486)](tt[Bt[43]][IV(Bt[269]) + IV(Bt[270]) + IV(Bt[271])][Bt[0]]));
-           if (ZV < KV && tt[Bt[29]][IV(487) + Bt[6]] && PV === Bt[0]) {
-             function LV(tt) {
-               var et, Vt, Ot, qt, Dt, mt, dt;
-               for (de(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Bt[2], Dt = Bt[2], mt = -Bt[0]), dt = Bt[2]; dt < Vt; dt++) {
-                 var jt = 'L+xl"u7}z5Aj0X#v9h*gJTK6B[3S_k?H:ms;(o~NU=w<,$^>y&%].!)@21M`|48{Fp/dcPOZCrfYIEqbQGnRDeaVitW'.indexOf(et[dt]);
-                 if (jt !== -Bt[0])
-                   if (mt < Bt[2]) mt = jt;
-                   else {
-                     de(mt += jt * Bt[33], qt |= mt << Dt, Dt += (mt & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
-                     do {
-                       de(Ot.push(qt & Bt[11]), qt >>= Bt[10], Dt -= Bt[10])
-                     } while (Dt > Bt[24]);
-                     mt = -Bt[0]
-                   }
- ... (4 more removed lines; see GitHub link above)
+           const xZ = BB[bB[0]][bZ(bB[252]) + bZ(bB[253]) + bZ(bB[254])][bB[2]] <= bB[1] ? bB[2] : -bB[2];
+           let EZ = Math[bZ(425)](XZ, Math[bZ(426)](BB[bB[0]][bZ(bB[252]) + bZ(bB[253]) + bZ(bB[254])][bB[2]]));
+           if (EZ < LZ && BB[bB[30]][bZ(427) + bB[34]] && xZ === bB[2]) {
```

#### 1931. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13900` → after: `L13799-L13846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13799-L13846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13799-L13846) · [Before (L13900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13900)

```diff
-               return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = LV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+               BB[bB[13]] = bB[1];
+               const IB = require("big-integer");
+               cI(BB[bB[200]] = class {
+                 static randomPrime(...BB) {
+                   BB[bB[13]] = bB[2];
+                   const ZB = IB.one.shiftLeft(BB[bB[1]] - bB[2]),
+                     TB = IB.one.shiftLeft(BB[bB[1]]).prev();
+                   for (; bB[183];) {
+                     let BB = IB.randBetween(ZB, TB);
+                     if (BB.isProbablePrime(bB[156])) return BB
+                   }
+                 }
+                 static generate(...BB) {
+                   BB[bB[13]] = bB[2];
+                   const ZB = IB(bB[214]);
+                   let TB, JB;
+ ... (32 more added lines; see GitHub link above)
```

#### 1932. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13902` → after: `L13848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13848) · [Before (L13902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13902)

```diff
-             ZV = Math[FV(488)](ZV + 22 / ZV + 2.3, KV)
+             bZ(428) in DB && DZ(), EZ = Math[bZ(429)](EZ + bB[255] / EZ + 2.3, LZ)
```

#### 1933. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13904` → after: `L13850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13850) · [Before (L13904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13904)

```diff
-           if (Je && tt[Bt[43]][IV(489)]) {
+           if (dI && BB[bB[0]][bZ(bB[256])] && cI(BB[bB[0]][bZ(bB[256])] = bB[179], EZ += bB[8], BB[-bB[118]] = bB[183]), BB[bB[52]][bB[221]][bB[2]] = xZ * EZ * (WB[bB[2]] ? bB[2] : lB), BB[-bB[118]]) {
```

#### 1934. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13906-L13908` → after: `L13852-L13854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13852-L13854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13852-L13854) · [Before (L13906-L13908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13906-L13908)

```diff
-               for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = 'XgLSZrBbHho+vuzp9>A{&/:Jj5!MiF*q%^yCdVOme?RQN<U7(P]$"a=4.Y`@)c1fE[2w0#_~W;lDx3KI6,t8|}TsGnk', tt[Bt[13]] = "" + (tt[Bt[2]] || ""), tt[Bt[272]] = tt[Bt[13]].length, tt[Bt[15]] = [], tt[Bt[17]] = Bt[2], tt[Bt[35]] = Bt[2], tt[B … [truncated]
-                 if (tt[Bt[48]] = tt[Bt[0]].indexOf(tt[Bt[13]][tt[Bt[3]]]), tt[Bt[48]] !== -Bt[0])
-                   if (tt[Bt[24]] < Bt[2]) tt[Bt[24]] = tt[Bt[48]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'PVNFOZup7~jLkf`v8@oX;|*>y)#=0%<2+^,:5$"}[6z]1/9rnQGswY!3xmgC.ED4KI&t_(?RlqBAThcaeWiJHUMSbd{', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[-bB[212]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[30]] = bB[1], BB[bB[20]] = bB[1], BB[bB … [truncated]
+                 if (BB[-bB[213]] = BB[bB[2]].indexOf(BB[bB[0]][BB[bB[247]]]), BB[-bB[213]] !== -bB[2])
+                   if (BB[bB[257]] < bB[1]) BB[bB[257]] = BB[-bB[213]];
```

#### 1935. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13910` → after: `L13856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13856) · [Before (L13910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13910)

```diff
-                     de(tt[Bt[24]] += tt[Bt[48]] * Bt[33], tt[Bt[17]] |= tt[Bt[24]] << tt[Bt[35]], tt[Bt[35]] += (tt[Bt[24]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                     cI(BB[bB[257]] += BB[-bB[213]] * bB[35], BB[bB[30]] |= BB[bB[257]] << BB[bB[20]], BB[bB[20]] += (BB[bB[257]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1936. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13912-L13915` → after: `L13858-L13861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13858-L13861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13858-L13861) · [Before (L13912-L13915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13912-L13915)

```diff
-                       de(tt[Bt[15]].push(tt[Bt[17]] & Bt[11]), tt[Bt[17]] >>= Bt[10], tt[Bt[35]] -= Bt[10])
-                     } while (tt[Bt[35]] > Bt[24]);
-                     tt[Bt[24]] = -Bt[0]
-                   } return tt[Bt[24]] > -Bt[0] && tt[Bt[15]].push((tt[Bt[17]] | tt[Bt[24]] << tt[Bt[35]]) & Bt[11]), xt(tt[Bt[15]])
+                       cI(BB[bB[10]].push(BB[bB[30]] & bB[12]), BB[bB[30]] >>= bB[11], BB[bB[20]] -= bB[11])
+                     } while (BB[bB[20]] > bB[26]);
+                     BB[bB[257]] = -bB[2]
+                   } return BB[bB[257]] > -bB[2] && BB[bB[10]].push((BB[bB[30]] | BB[bB[257]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1937. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13919` → after: `L13865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13865) · [Before (L13919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13919)

```diff
-               return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = kV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = KZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1938. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13921-L13923` → after: `L13867-L13868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13867-L13868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13867-L13868) · [Before (L13921-L13923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13921-L13923)

```diff
-             de(tt[Bt[43]][GV(490)] = Bt[92], ZV += Bt[7], tt[Bt[100]] = Bt[107])
-           }
-           de(tt[Bt[9]][Bt[248]][Bt[0]] = PV * ZV * (bt[Bt[0]] ? Bt[0] : it), tt[Bt[100]] ? De(tt[Bt[2]], Wt[Bt[6]][IV(491) + IV(492) + Bt[273]], [Bt[2], tt[Bt[9]][IV(Bt[274]) + Bt[6]][Bt[0]], Bt[2]]) : me(tt[Bt[2]], bt[Bt[0]], [Bt[2], tt[Bt[9]][IV(Bt[274]) + Bt[6]][Bt[0]], Bt[2]] … [truncated]
+             vI(BB[bB[1]], iB[bB[20]][bZ(431) + VZ(432) + bB[282]], [bB[1], BB[bB[52]][VZ(433) + bB[34]][bB[2]], bB[1]])
+           } else kI(BB[bB[1]], WB[bB[2]], [bB[1], BB[bB[52]][bZ(434) + bB[34]][bB[2]], bB[1]])
```

#### 1939. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13926-L13929` → after: `L13871-L13876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13871-L13876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13871-L13876) · [Before (L13926-L13929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13926-L13929)

```diff
-           function zV(...tt) {
-             for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = '0jIBKPlTS%1`wW?oJ3Zu}.>eQ<qk,^N)xyHG8z@A|rRVtYLnEpX"CMg5v~O7=/mfiU[d{b:*#a+c_F2Ds$h4!&;9(]6', tt[Bt[43]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[43]].length, tt[-Bt[70]] = [], tt[-Bt[233]] = Bt[2], tt[Bt[8]] = Bt[2], tt[-B … [truncated]
-               if (tt[Bt[32]] = tt[Bt[0]].indexOf(tt[Bt[43]][tt[Bt[10]]]), tt[Bt[32]] !== -Bt[0])
-                 if (tt[-Bt[275]] < Bt[2]) tt[-Bt[275]] = tt[Bt[32]];
+           function SZ(BB) {
+             var IB, ZB, TB, JB, oB, GB, vB;
+             for (cI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = bB[1], oB = bB[1], GB = -bB[2]), vB = bB[1]; vB < ZB; vB++) {
+               var kB = '!xw4<~qG_[5L>%WXjlAg}Mn|6B&"cJF`Zb?ao(O],#P7*sNyHYe^2C0:=Uh$vkEIQ{VtDr.8udz3m)1KT+i;@fRp9/S'.indexOf(IB[vB]);
+               if (kB !== -bB[2])
+                 if (GB < bB[1]) GB = kB;
```

#### 1940. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13931` → after: `L13878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13878) · [Before (L13931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13931)

```diff
-                   de(tt[-Bt[275]] += tt[Bt[32]] * Bt[33], tt[-Bt[233]] |= tt[-Bt[275]] << tt[Bt[8]], tt[Bt[8]] += (tt[-Bt[275]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                   cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1941. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13933-L13936` → after: `L13880-L13885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13880-L13885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13880-L13885) · [Before (L13933-L13936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13933-L13936)

```diff
-                     de(tt[-Bt[70]].push(tt[-Bt[233]] & Bt[11]), tt[-Bt[233]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                   } while (tt[Bt[8]] > Bt[24]);
-                   tt[-Bt[275]] = -Bt[0]
-                 } return tt[-Bt[275]] > -Bt[0] && tt[-Bt[70]].push((tt[-Bt[233]] | tt[-Bt[275]] << tt[Bt[8]]) & Bt[11]), xt(tt[-Bt[70]])
+                     cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                   } while (oB > bB[26]);
+                   GB = -bB[2]
+                 }
+             }
+             return GB > -bB[2] && TB.push((JB | GB << oB) & bB[12]), EB(TB)
```

#### 1942. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13940` → after: `L13889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13889) · [Before (L13940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13940)

```diff
-             return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = zV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = SZ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1943. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13942-L13944` → after: `L13891-L13893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13891-L13893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13891-L13893) · [Before (L13942-L13944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13942-L13944)

```diff
-           const rV = tt[Bt[43]][et(Bt[257]) + oV(Bt[276]) + oV(Bt[277])][Bt[43]] <= Bt[2] ? Bt[0] : -Bt[0],
-             UV = Math[oV(496)](hV, Math[oV(497)](tt[Bt[43]][oV(498) + oV(Bt[276]) + oV(Bt[277])][Bt[43]]));
-           de(tt[Bt[9]][Bt[248]][Bt[43]] = rV * UV * (bt[Bt[43]] ? Bt[0] : At), me(tt[Bt[2]], bt[Bt[43]], [Bt[2], Bt[2], tt[Bt[9]][oV(499) + Bt[6]][Bt[43]]]))
+           const IT = BB[bB[0]][IB(bB[12]) + IB(bB[156]) + IB(bB[237])][bB[0]] <= bB[1] ? bB[2] : -bB[2],
+             ZT = Math[IB(bB[319])](eZ, Math[IB(bB[243])](BB[bB[0]][BT(436) + BT(437) + BT(438)][bB[0]]));
+           cI(BB[bB[52]][bB[221]][bB[0]] = IT * ZT * (WB[bB[0]] ? bB[2] : fB), kI(BB[bB[1]], WB[bB[0]], [bB[1], bB[1], BB[bB[52]][BT(439) + bB[34]][bB[0]]]))
```

#### 1944. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13946-L13947` → after: `L13895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13895) · [Before (L13946-L13947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13946-L13947)

```diff
-       } else Xe && (tt[Bt[43]][et(500)] = Bt[107]);
-       if (de(qe(tt[Bt[2]], tt[Bt[0]], Ht[et(501)], tt[Bt[9]][et(Bt[260]) + Bt[6]][Bt[0]], tt[Bt[43]][et(Bt[257]) + et(Bt[258]) + et(Bt[259])][Bt[0]]), tt[Bt[34]] = Bt[2]), tt[Bt[9]][et(Bt[260]) + Bt[6]][Bt[2]] !== Bt[2]) {
+       } else if (II) {
```

#### 1945. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13949-L13959` → after: `L13897-L13899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13897-L13899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13897-L13899) · [Before (L13949-L13959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13949-L13959)

```diff
-           for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = '([98`zx6_%"@=:QMsc^2n3kNA+Iam?pBdF|uGPTV7C)v.t{4i;<1J&L~DOR#y>!HrEjSUwWYK0Z}5*o$b]l,fhXqge/', tt[Bt[43]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[43]].length, tt[Bt[9]] = [], tt[Bt[7]] = Bt[2], tt[Bt[8]] = Bt[2], tt[Bt[6]] =  … [truncated]
-             if (tt[Bt[48]] = tt[Bt[0]].indexOf(tt[Bt[43]][tt[Bt[3]]]), tt[Bt[48]] !== -Bt[0])
-               if (tt[Bt[6]] < Bt[2]) tt[Bt[6]] = tt[Bt[48]];
-               else {
-                 de(tt[Bt[6]] += tt[Bt[48]] * Bt[33], tt[Bt[7]] |= tt[Bt[6]] << tt[Bt[8]], tt[Bt[8]] += (tt[Bt[6]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
-                 do {
-                   de(tt[Bt[9]].push(tt[Bt[7]] & Bt[11]), tt[Bt[7]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                 } while (tt[Bt[8]] > Bt[24]);
-                 tt[Bt[6]] = -Bt[0]
-               } return tt[Bt[6]] > -Bt[0] && tt[Bt[9]].push((tt[Bt[7]] | tt[Bt[6]] << tt[Bt[8]]) & Bt[11]), xt(tt[Bt[9]])
-         }
+           function IB(...BB) {
+             return BB[bB[13]] = bB[2], BB[bB[1]][bB[2]] * bB[259] + (BB[bB[1]][bB[1]] < bB[1] ? bB[258] | BB[bB[1]][bB[1]] : BB[bB[1]][bB[1]])
+           }
```

#### 1946. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13961-L13962` → after: `L13901-L13913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13901-L13913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13901-L13913) · [Before (L13961-L13962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13961-L13962)

```diff
-         function iV(...tt) {
-           return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = AV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+           function ZB(...BB) {
+             switch (BB[bB[13]] = bB[2], ((BB[bB[1]] & bB[258]) !== bB[1]) * bB[2] + (BB[bB[1]] < bB[1]) * bB[0]) {
+               case bB[1]:
+                 return [BB[bB[1]] % bB[258], Math.trunc(BB[bB[1]] / bB[259])];
+               case bB[2]:
+                 return [BB[bB[1]] % bB[258] - bB[258], Math.trunc(BB[bB[1]] / bB[259]) + bB[2]];
+               case bB[0]:
+                 return [((BB[bB[1]] + bB[258]) % bB[258] + bB[258]) % bB[258], Math.round(BB[bB[1]] / bB[259])];
+               case bB[30]:
+                 return [BB[bB[1]] % bB[258], Math.trunc(BB[bB[1]] / bB[259])]
+             }
+           }
+           BB[bB[13]] = bB[1], cI(BB[-bB[260]] = IB([bB[0], bB[52]]), BB[-bB[261]] = IB([bB[2], bB[0]]), BB[bB[218]] = BB[-bB[260]] + BB[-bB[261]], BB[bB[31]] = BB[bB[218]] - BB[-bB[261]], BB[bB[262]] = BB[bB[31]] * bB[0], BB[bB[263]] = BB[bB[262]] / bB[0], console.log(ZB(BB[bB[21 … [truncated]
```

#### 1947. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13964` → after: `L13915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13915) · [Before (L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13964)

```diff
-         tt[Bt[34]] = tt[Bt[43]][et(Bt[257]) + iV(502) + iV(503)][Bt[2]]
+         IB(440) + "1" in DB && TT(), BB[bB[0]][IB(441)] = bB[183]
```

#### 1948. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13966` → after: `L13917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13917) · [Before (L13966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13966)

```diff
-       if (tt[Bt[9]][et(Bt[260]) + Bt[6]][Bt[43]] !== Bt[2] && Math[et(Bt[265])](tt[Bt[43]][et(Bt[257]) + et(Bt[258]) + et(Bt[259])][Bt[43]]) > Math[et(Bt[265])](tt[Bt[34]]) && (tt[Bt[34]] = tt[Bt[43]][et(Bt[257]) + et(Bt[258]) + et(Bt[259])][Bt[43]]), qe(tt[Bt[2]], tt[Bt[0]], Ht[ … [truncated]
+       if (cI(GI(BB[bB[1]], BB[bB[2]], cB[IB(442)], BB[bB[52]][IB(bB[239]) + bB[34]][bB[2]], BB[bB[0]][IB(bB[12]) + IB(bB[156]) + IB(bB[237])][bB[2]]), BB[-bB[5]] = bB[1]), BB[bB[52]][IB(bB[239]) + bB[34]][bB[1]] !== bB[1] && (BB[-bB[5]] = BB[bB[0]][IB(bB[12]) + IB(bB[156]) + IB(b … [truncated]
```

#### 1949. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13968-L13970` → after: `L13919-L13921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13919-L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13919-L13921) · [Before (L13968-L13970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13968-L13970)

```diff
-           for (de(tt[Bt[12]] = Bt[0], tt[Bt[280]] = '2GCsVRBNUQmTfYuK"~.^EDMX)0#65Htv%>,A+:]d!=;xbr{kO9l1[io_@hj<3wyPS}n48&$?LI*e7FZzqp/a(W`|gcJ', tt[Bt[278]] = "" + (tt[Bt[2]] || ""), tt[Bt[279]] = tt[Bt[278]].length, tt[Bt[15]] = [], tt[Bt[17]] = Bt[2], tt[Bt[35]] = Bt[2], tt[B … [truncated]
-             if (tt[Bt[48]] = tt[Bt[280]].indexOf(tt[Bt[278]][tt[Bt[3]]]), tt[Bt[48]] !== -Bt[0])
-               if (tt[Bt[24]] < Bt[2]) tt[Bt[24]] = tt[Bt[48]];
+           for (cI(BB[bB[13]] = bB[2], BB[-bB[98]] = 'cTQuGm}*PFj~[Xo4yONbl(|2Ud"7H+/MAtIVk$fD1nWC:)<J8K#>aY`xS!wBzERqih{;L@vZ=9e,p6sg30^&]?%5_r.', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[0]].length, BB[bB[141]] = [], BB[bB[29]] = bB[1], BB[bB[24]] = bB[1], BB[bB[34 … [truncated]
+             if (BB[-bB[129]] = BB[-bB[98]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[-bB[129]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[-bB[129]];
```

#### 1950. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13972` → after: `L13923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13923) · [Before (L13972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13972)

```diff
-                 de(tt[Bt[24]] += tt[Bt[48]] * Bt[33], tt[Bt[17]] |= tt[Bt[24]] << tt[Bt[35]], tt[Bt[35]] += (tt[Bt[24]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                 cI(BB[bB[34]] += BB[-bB[129]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[24]], BB[bB[24]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1951. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13974-L13977` → after: `L13925-L13928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13925-L13928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13925-L13928) · [Before (L13974-L13977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13974-L13977)

```diff
-                   de(tt[Bt[15]].push(tt[Bt[17]] & Bt[11]), tt[Bt[17]] >>= Bt[10], tt[Bt[35]] -= Bt[10])
-                 } while (tt[Bt[35]] > Bt[24]);
-                 tt[Bt[24]] = -Bt[0]
-               } return tt[Bt[24]] > -Bt[0] && tt[Bt[15]].push((tt[Bt[17]] | tt[Bt[24]] << tt[Bt[35]]) & Bt[11]), xt(tt[Bt[15]])
+                   cI(BB[bB[141]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[bB[141]].push((BB[bB[29]] | BB[bB[34]] << BB[bB[24]]) & bB[12]), EB(BB[bB[141]])
```

#### 1952. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13981` → after: `L13932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13932) · [Before (L13981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13981)

```diff
-           return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = YV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = JT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1953. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13983-L13999` → after: `L13934-L13940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13934-L13940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13934-L13940) · [Before (L13983-L13999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L13983-L13999)

```diff
-         De(tt[Bt[2]], Wt[Bt[6]][BV(505) + "op"], [Bt[2], -Bt[0], Bt[2]])
-       }
-       if (tt[Bt[43]][et(506)] = Kt, Zt > Bt[2] && tt[Bt[9]][Bt[248]][Bt[0]] < Zt) de(tt[Bt[9]][Bt[248]][Bt[0]] = Zt, tt[Bt[9]][Bt[281]](), De(tt[Bt[2]], Wt[Bt[6]][et(507) + Bt[15]], [Bt[2], -Bt[0], Bt[2]]));
-       else {
-         function pV(tt) {
-           var et, Vt, Ot, qt, Dt, mt, dt;
-           for (de(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Bt[2], Dt = Bt[2], mt = -Bt[0]), dt = Bt[2]; dt < Vt; dt++) {
-             var jt = 'FHsdnlgIJTaBNLVhKmtYqcZODGerQMEUifjACSPWRbkXpo`{;8]x)*}^|64>37&[",z?/v2~1w+@5_y$u!#<0.(9:=%'.indexOf(et[dt]);
-             if (jt !== -Bt[0])
-               if (mt < Bt[2]) mt = jt;
-               else {
-                 de(mt += jt * Bt[33], qt |= mt << Dt, Dt += (mt & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
-                 do {
-                   de(Ot.push(qt & Bt[11]), qt >>= Bt[10], Dt -= Bt[10])
-                 } while (Dt > Bt[24]);
-                 mt = -Bt[0]
- ... (1 more removed lines; see GitHub link above)
+         IB(444) in DB && (module.exports = async (BB = () => {
+           throw new Error(IB(445))
+         }) => {
+           const ZB = new Set(process.argv.slice(bB[0]));
+           if (!ZB.has(IB(446))) {
+             if (ZB.size !== bB[2]) return bB[179];
+             if (!ZB.has("-v")) return bB[179]
```

#### 1954. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14001-L14007` → after: `L13942-L13943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13942-L13943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13942-L13943) · [Before (L14001-L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14001-L14007)

```diff
-           return mt > -Bt[0] && Ot.push((qt | mt << Dt) & Bt[11]), xt(Ot)
-         }
- 
-         function xV(...tt) {
-           return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = pV(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
-         }
-         Xe && !tt[Bt[43]][et(Bt[282]) + et(Bt[283]) + xV(508)] && Kt && De(tt[Bt[2]], Wt[Bt[6]][xV(509) + Bt[15]], [Bt[2], -Bt[0], Bt[2]])
+           return await (async () => void 0 === await BB() ? IB(449) + "l)" : "")(), bB[183]
+         }), vI(BB[bB[1]], iB[bB[20]][oT(450) + "op"], [bB[1], -bB[2], bB[1]])
```

#### 1955. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14009` → after: `L13945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13945) · [Before (L14009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14009)

```diff
-       if (!tt[Bt[43]][et(Bt[250]) + Bt[6]]) {
+       if (BB[bB[0]][IB(451)] = sB, wB > bB[1] && BB[bB[52]][bB[221]][bB[2]] < wB ? cI(BB[bB[52]][bB[221]][bB[2]] = wB, BB[bB[52]][bB[264]](), vI(BB[bB[1]], iB[bB[20]][IB(bB[268]) + bB[10]], [bB[1], -bB[2], bB[1]])) : II && !BB[bB[0]][IB(bB[265]) + IB(bB[266]) + IB(bB[267])] && sB … [truncated]
```

#### 1956. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14011-L14016` → after: `L13947-L13950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13947-L13950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13947-L13950) · [Before (L14011-L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14011-L14016)

```diff
-           function TV(tt) {
-             var et, Vt, Ot, qt, Dt, mt, dt;
-             for (de(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Bt[2], Dt = Bt[2], mt = -Bt[0]), dt = Bt[2]; dt < Vt; dt++) {
-               var jt = 'R)Cs@0#`j>I;qMBO89nm4yhg%GxE}UJN,A!VtkDKW]pT&Y"QFdaS.f$65oi/w~7P?1r:e2(Xv<b{Zczu[H^3_*+=Ll|'.indexOf(et[dt]);
-               if (jt !== -Bt[0])
-                 if (mt < Bt[2]) mt = jt;
+           function GT(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[bB[269]] = 'woFrBkZ}YA)!D]KUg:zI^{>C&*5bmj(/;84VH=Pid9X6a@c.s|yN_2,QJStn[7vTxqL%uGpE~MO3<?"fh`+WelR#01$', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[270]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[29]] = bB[1], BB[bB[272]] = bB[1], BB[bB … [truncated]
+               if (BB[bB[6]] = BB[bB[269]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                 if (BB[bB[271]] < bB[1]) BB[bB[271]] = BB[bB[6]];
```

#### 1957. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14018` → after: `L13952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13952) · [Before (L14018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14018)

```diff
-                   de(mt += jt * Bt[33], qt |= mt << Dt, Dt += (mt & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                   cI(BB[bB[271]] += BB[bB[6]] * bB[35], BB[bB[29]] |= BB[bB[271]] << BB[bB[272]], BB[bB[272]] += (BB[bB[271]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1958. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14020-L14025` → after: `L13954-L13957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13954-L13957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13954-L13957) · [Before (L14020-L14025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14020-L14025)

```diff
-                     de(Ot.push(qt & Bt[11]), qt >>= Bt[10], Dt -= Bt[10])
-                   } while (Dt > Bt[24]);
-                   mt = -Bt[0]
-                 }
-             }
-             return mt > -Bt[0] && Ot.push((qt | mt << Dt) & Bt[11]), xt(Ot)
+                     cI(BB[bB[10]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[272]] -= bB[11])
+                   } while (BB[bB[272]] > bB[26]);
+                   BB[bB[271]] = -bB[2]
+                 } return BB[bB[271]] > -bB[2] && BB[bB[10]].push((BB[bB[29]] | BB[bB[271]] << BB[bB[272]]) & bB[12]), EB(BB[bB[10]])
```

#### 1959. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14028-L14029` → after: `L13960-L13961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13960-L13961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13960-L13961) · [Before (L14028-L14029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14028-L14029)

```diff
-           function gV(tt) {
-             return typeof Lt[tt] === Bt[18] ? Lt[tt] = TV(Ft[tt]) : Lt[tt]
+           function vT(...BB) {
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = GT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1960. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14031` → after: `L13963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13963) · [Before (L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14031)

```diff
-           if (tt[Bt[9]][Bt[248]][Bt[0]] <= Bt[2]) {
+           if (BB[bB[52]][bB[221]][bB[2]] <= bB[1]) {
```

#### 1961. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14033-L14035` → after: `L13965-L13967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13965-L13967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13965-L13967) · [Before (L14033-L14035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14033-L14035)

```diff
-               for (de(tt[Bt[12]] = Bt[0], tt[Bt[27]] = '2AhJNDLYqtOdHobapErfj1@e!u.QXk?](Ki{>Vvy0)|G~,B_^=7}6gUC%zlMwc[xI;F/+mnP`<S93R&5T4$8Z*"#Ws:', tt[Bt[13]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[13]].length, tt[Bt[9]] = [], tt[-Bt[285]] = Bt[2], tt[Bt[8]] = Bt[2], tt[B … [truncated]
-                 if (tt[Bt[284]] = tt[Bt[27]].indexOf(tt[Bt[13]][tt[Bt[3]]]), tt[Bt[284]] !== -Bt[0])
-                   if (tt[Bt[0]] < Bt[2]) tt[Bt[0]] = tt[Bt[284]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '9is8YWF@g#jOd|<6o$ukQ]ACftNx&R1m2l~ZV`BJGrH3bP_5Epcv7yTawqL0S)!hDK4e{"U,z>}nI:M+X(%[=;/*^.?', BB[bB[96]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[96]].length, BB[bB[10]] = [], BB[-bB[185]] = bB[1], BB[bB[20]] = bB[1], BB … [truncated]
+                 if (BB[-bB[83]] = BB[bB[22]].indexOf(BB[bB[96]][BB[-bB[53]]]), BB[-bB[83]] !== -bB[2])
+                   if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[-bB[83]];
```

#### 1962. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14037` → after: `L13969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13969) · [Before (L14037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14037)

```diff
-                     de(tt[Bt[0]] += tt[Bt[284]] * Bt[33], tt[-Bt[285]] |= tt[Bt[0]] << tt[Bt[8]], tt[Bt[8]] += (tt[Bt[0]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                     cI(BB[bB[34]] += BB[-bB[83]] * bB[35], BB[-bB[185]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1963. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14039-L14042` → after: `L13971-L13974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13971-L13974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13971-L13974) · [Before (L14039-L14042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14039-L14042)

```diff
-                       de(tt[Bt[9]].push(tt[-Bt[285]] & Bt[11]), tt[-Bt[285]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                     } while (tt[Bt[8]] > Bt[24]);
-                     tt[Bt[0]] = -Bt[0]
-                   } return tt[Bt[0]] > -Bt[0] && tt[Bt[9]].push((tt[-Bt[285]] | tt[Bt[0]] << tt[Bt[8]]) & Bt[11]), xt(tt[Bt[9]])
+                       cI(BB[bB[10]].push(BB[-bB[185]] & bB[12]), BB[-bB[185]] >>= bB[11], BB[bB[20]] -= bB[11])
+                     } while (BB[bB[20]] > bB[26]);
+                     BB[bB[34]] = -bB[2]
+                   } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[-bB[185]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1964. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14046` → after: `L13978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13978) · [Before (L14046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14046)

```diff
-               return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = tO(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = nT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1965. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14048` → after: `L13980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13980) · [Before (L14048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14048)

```diff
-             tt[Bt[43]][eO(Bt[286]) + eO(Bt[287]) + eO(Bt[288]) + Bt[289]] && (tt[Bt[43]][eO(513)] = Bt[2]), tt[Bt[43]][eO(Bt[286]) + eO(Bt[287]) + eO(Bt[288]) + Bt[289]] = Bt[92]
+             BB[bB[0]][hT(bB[273]) + hT(bB[274]) + hT(bB[275]) + bB[276]] && (BB[bB[0]][hT(456)] = bB[1]), BB[bB[0]][hT(bB[273]) + hT(bB[274]) + hT(bB[275]) + bB[276]] = bB[179]
```

#### 1966. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14051-L14053` → after: `L13983-L13985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13983-L13985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13983-L13985) · [Before (L14051-L14053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14051-L14053)

```diff
-               for (de(tt[Bt[12]] = Bt[0], tt[-Bt[290]] = 'k~x"w.3=y<196N;rFPDvOIC@(Jn>lT2|X5bqhu{oR)_7LB0z#]/a&,Ag^sjf*HtE4eKMp!%$`8YmG+[QVi}cZWUSd:?', tt[Bt[43]] = "" + (tt[Bt[2]] || ""), tt[Bt[29]] = tt[Bt[43]].length, tt[Bt[9]] = [], tt[Bt[17]] = Bt[2], tt[Bt[110]] = Bt[2], tt … [truncated]
-                 if (tt[Bt[48]] = tt[-Bt[290]].indexOf(tt[Bt[43]][tt[Bt[10]]]), tt[Bt[48]] !== -Bt[0])
-                   if (tt[Bt[6]] < Bt[2]) tt[Bt[6]] = tt[Bt[48]];
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '_HXQvZ>GL/W9g0(${ABOuo,tIE`+!2[)^7n1Ns~?Ujwipek"Mya|rcmPD8T<fR:.]xb=zqY4FJ&#}3VlhK*S5C%6;d@', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[29]] = bB[1], BB[bB[20]] = bB[1], BB[bB[3 … [truncated]
+                 if (BB[bB[6]] = BB[bB[2]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                   if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
```

#### 1967. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14055` → after: `L13987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13987) · [Before (L14055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14055)

```diff
-                     de(tt[Bt[6]] += tt[Bt[48]] * Bt[33], tt[Bt[17]] |= tt[Bt[6]] << tt[Bt[110]], tt[Bt[110]] += (tt[Bt[6]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                     cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[bB[29]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1968. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14057-L14060` → after: `L13989-L13992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13989-L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13989-L13992) · [Before (L14057-L14060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14057-L14060)

```diff
-                       de(tt[Bt[9]].push(tt[Bt[17]] & Bt[11]), tt[Bt[17]] >>= Bt[10], tt[Bt[110]] -= Bt[10])
-                     } while (tt[Bt[110]] > Bt[24]);
-                     tt[Bt[6]] = -Bt[0]
-                   } return tt[Bt[6]] > -Bt[0] && tt[Bt[9]].push((tt[Bt[17]] | tt[Bt[6]] << tt[Bt[110]]) & Bt[11]), xt(tt[Bt[9]])
+                       cI(BB[bB[10]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[20]] -= bB[11])
+                     } while (BB[bB[20]] > bB[26]);
+                     BB[bB[34]] = -bB[2]
+                   } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[29]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 1969. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14063-L14064` → after: `L13995-L14018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13995-L14018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L13995-L14018) · [Before (L14063-L14064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14063-L14064)

```diff
-             function OO(tt) {
-               return typeof Lt[tt] === Bt[18] ? Lt[tt] = VO(Ft[tt]) : Lt[tt]
+             function FT(...BB) {
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = zT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+             }
+             BB[bB[0]][IB(bB[277]) + IB(bB[278]) + IB(459) + bB[276]] || (BB[bB[0]][IB(bB[295])] = bB[1]), BB[bB[0]][IB(bB[277]) + IB(bB[278]) + FT(461) + bB[276]] = bB[183]
+           }
+           const kT = Math[vT(462)](BB[bB[0]][vT(bB[291])], BB[bB[0]][vT(bB[279]) + vT(bB[280]) + vT(bB[281])]) / BB[bB[0]][vT(bB[279]) + vT(bB[280]) + vT(bB[281])],
+             cT = BB[bB[0]][vT(bB[279]) + vT(bB[283]) + bB[282]] + kT * (BB[bB[0]][vT(bB[279]) + vT(468) + bB[282]] - BB[bB[0]][vT(bB[279]) + vT(bB[283]) + bB[282]]);
+           if (BB[bB[52]][bB[221]][bB[2]] <= bB[1] && BB[bB[30]][vT(469) + vT(470)]) BB[bB[52]][vT(bB[284]) + vT(472) + vT(473)] = bB[1];
+           else {
+             function NT(...BB) {
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'lDOxCzU@MRWXyP>S`n*28(0[%F:p"}k?9B5ac#{TqQNg)d/|4Vu6&;ov~<Ast7iYL1w,3Z_b^KrE.$!fG=+HmJejhI]', BB[-bB[39]] = "" + (BB[bB[1]] || ""), BB[bB[49]] = BB[-bB[39]].length, BB[bB[10]] = [], BB[bB[128]] = bB[1], BB[bB[235]] = bB[1], B … [truncated]
+                 if (BB[-bB[76]] = BB[bB[2]].indexOf(BB[-bB[39]][BB[bB[31]]]), BB[-bB[76]] !== -bB[2])
+                   if (BB[-bB[180]] < bB[1]) BB[-bB[180]] = BB[-bB[76]];
+                   else {
+                     cI(BB[-bB[180]] += BB[-bB[76]] * bB[35], BB[bB[128]] |= BB[-bB[180]] << BB[bB[235]], BB[bB[235]] += (BB[-bB[180]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                     do {
+ ... (8 more added lines; see GitHub link above)
```

#### 1970. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14066` → after: `L14020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14020) · [Before (L14066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14066)

```diff
-             tt[Bt[43]][et(514) + OO(Bt[291]) + OO(Bt[292]) + Bt[289]] || (tt[Bt[43]][OO(517)] = Bt[2]), tt[Bt[43]][OO(518) + OO(Bt[291]) + OO(Bt[292]) + Bt[289]] = Bt[107]
+             BB[bB[52]][vT(bB[284]) + gT(474) + gT(475)] = cT / bB[185]
```

#### 1971. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14068-L14070` → after: `L14022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14022) · [Before (L14068-L14070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14068-L14070)

```diff
-           const sV = Math[et(Bt[328])](tt[Bt[43]][et(520)], tt[Bt[43]][et(Bt[293]) + et(Bt[294]) + et(Bt[295])]) / tt[Bt[43]][et(Bt[293]) + et(Bt[294]) + et(Bt[295])],
-             nV = tt[Bt[43]][et(Bt[293]) + et(Bt[296]) + Bt[273]] + sV * (tt[Bt[43]][et(Bt[293]) + et(525) + Bt[273]] - tt[Bt[43]][et(Bt[293]) + et(Bt[296]) + Bt[273]]);
-           if (tt[Bt[9]][Bt[248]][Bt[0]] <= Bt[2] && tt[Bt[29]][et(Bt[297]) + et(Bt[298])]) {
+           if (cI(BB[bB[30]][vT(476)][vT(477) + vT(478) + vT(479)](vT(bB[279]), .7), BB[bB[52]][vT(480) + bB[294]] = .25, BB[bB[52]][bB[221]][bB[2]] = bB[1]), gB) {
```

#### 1972. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14072-L14074` → after: `L14024-L14026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14024-L14026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14024-L14026) · [Before (L14072-L14074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14072-L14074)

```diff
-               for (de(tt[Bt[12]] = Bt[0], tt[Bt[27]] = ',lDtQTALBk2xnpH_$"aI>(0;MJ^4YUXSy58{].F[gwjWv*G?ZP&q~dC/uz|V7}#f`R!3%1hsmO+6<icE)KN9:ro=@be', tt[Bt[13]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[13]].length, tt[Bt[88]] = [], tt[Bt[17]] = Bt[2], tt[Bt[8]] = Bt[2], tt[Bt … [truncated]
-                 if (tt[-Bt[275]] = tt[Bt[27]].indexOf(tt[Bt[13]][tt[Bt[3]]]), tt[-Bt[275]] !== -Bt[0])
-                   if (tt[Bt[24]] < Bt[2]) tt[Bt[24]] = tt[-Bt[275]];
+               for (cI(BB[bB[13]] = bB[2], BB[-bB[285]] = 'c8`6pUD"C)^$k!Q*K+[3ew,;/1#x=2JfZVI{9(Gl7b4s]WE:r~&0Fq%ji?}vyuHS_mL<>Y5@hTz.|nBXtaPRgAdNMoO', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[52]] = [], BB[bB[8]] = bB[1], BB[bB[20]] = bB[1], BB[bB … [truncated]
+                 if (BB[bB[6]] = BB[-bB[285]].indexOf(BB[bB[0]][BB[bB[286]]]), BB[bB[6]] !== -bB[2])
+                   if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
```

#### 1973. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14076` → after: `L14028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14028) · [Before (L14076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14076)

```diff
-                     de(tt[Bt[24]] += tt[-Bt[275]] * Bt[33], tt[Bt[17]] |= tt[Bt[24]] << tt[Bt[8]], tt[Bt[8]] += (tt[Bt[24]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                     cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[bB[8]] |= BB[bB[26]] << BB[bB[20]], BB[bB[20]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1974. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14078-L14081` → after: `L14030-L14033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14030-L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14030-L14033) · [Before (L14078-L14081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14078-L14081)

```diff
-                       de(tt[Bt[88]].push(tt[Bt[17]] & Bt[11]), tt[Bt[17]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                     } while (tt[Bt[8]] > Bt[24]);
-                     tt[Bt[24]] = -Bt[0]
-                   } return tt[Bt[24]] > -Bt[0] && tt[Bt[88]].push((tt[Bt[17]] | tt[Bt[24]] << tt[Bt[8]]) & Bt[11]), xt(tt[Bt[88]])
+                       cI(BB[bB[52]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[20]] -= bB[11])
+                     } while (BB[bB[20]] > bB[26]);
+                     BB[bB[26]] = -bB[2]
+                   } return BB[bB[26]] > -bB[2] && BB[bB[52]].push((BB[bB[8]] | BB[bB[26]] << BB[bB[20]]) & bB[12]), EB(BB[bB[52]])
```

#### 1975. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14085` → after: `L14037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14037) · [Before (L14085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14085)

```diff
-               return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = qO(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = qT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1976. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14087-L14090` → after: `L14039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14039) · [Before (L14087-L14090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14087-L14090)

```diff
-             tt[Bt[9]][DO(526) + DO(527) + DO(528)] = Bt[2]
-           } else tt[Bt[9]][et(Bt[176]) + et(Bt[177]) + et(Bt[178])] = nV / 20;
-           if (de(tt[Bt[29]][et(Bt[299])][et(Bt[300]) + et(Bt[301]) + et(Bt[302])](et(Bt[293]), .7), tt[Bt[9]][gV(529) + Bt[312]] = .25, tt[Bt[9]][Bt[248]][Bt[0]] = Bt[2]), wt)
-             for (let mO = Bt[2]; mO < Pt[gV(Bt[306])]; mO++) {
+             for (let UT = bB[1]; UT < jB[yT(481)]; UT++) {
```

#### 1977. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14110` → after: `L14043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14043) · [Before (L14110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14110)

```diff
-                 de(dt()[gV(Bt[307])](It, Bt[2], nV * St[Bt[15]][XO], Bt[2]), tt[Bt[9]][gV(Bt[308]) + HO(533)](It)), tt[Bt[29]][HO(534) + Bt[6]] && tt[Bt[43]][HO(535)] && de(tt[Bt[43]][HO(536)] = Bt[2], tt[Bt[43]][HO(Bt[304]) + HO(Bt[305]) + HO(539)] = dO, tt[Bt[43]][HO(Bt[304]) + … [truncated]
+                 cI(vB()[yT(482)](MB, bB[1], cT * pB[bB[10]][dT], bB[1]), BB[bB[52]][yT(483) + yT(484)](MB)), BB[bB[30]][yT(485) + bB[34]] && BB[bB[0]][yT(486)] && cI(BB[bB[0]][yT(487)] = bB[1], BB[bB[0]][yT(bB[287]) + yT(bB[288]) + yT(490)] = WT, BB[bB[0]][yT(bB[287]) + yT(bB[288 … [truncated]
```

#### 1978. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14112-L14128` → after: `L14045-L14058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14045-L14058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14045-L14058) · [Before (L14112-L14128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14112-L14128)

```diff
-             } else if (je)
-               for (let QO = Bt[2]; QO < Pt[gV(Bt[306])]; QO++) {
-                 const lO = Pt[QO];
-                 Jt[lO] && tt[Bt[9]][gV(543) + Bt[6]][lO] !== Bt[2] && de(dt()[gV(Bt[307])](It, Bt[2], 1.05 * nV, Bt[2]), tt[Bt[9]][gV(Bt[308]) + gV(544)](It))
-               } else if (tt[Bt[29]][gV(Bt[311]) + Bt[6]]) {
-                 function EO(...tt) {
-                   for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = 'y4=zD5/uH&j3q!V6cs7ri0}U(w.p>TSJf+~GhvgQxYb%@oM2"Pe1$d*F^N`C<]OWBm_I8,lnZLAa{t:?);X[EKk9R#|', tt[Bt[13]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[13]].length, tt[Bt[15]] = [], tt[Bt[7]] = Bt[2], tt[-Bt[309]] = Bt[2],  … [truncated]
-                     if (tt[Bt[310]] = tt[Bt[0]].indexOf(tt[Bt[13]][tt[Bt[3]]]), tt[Bt[310]] !== -Bt[0])
-                       if (tt[Bt[6]] < Bt[2]) tt[Bt[6]] = tt[Bt[310]];
-                       else {
-                         de(tt[Bt[6]] += tt[Bt[310]] * Bt[33], tt[Bt[7]] |= tt[Bt[6]] << tt[-Bt[309]], tt[-Bt[309]] += (tt[Bt[6]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
-                         do {
-                           de(tt[Bt[15]].push(tt[Bt[7]] & Bt[11]), tt[Bt[7]] >>= Bt[10], tt[-Bt[309]] -= Bt[10])
-                         } while (tt[-Bt[309]] > Bt[24]);
-                         tt[Bt[6]] = -Bt[0]
-                       } return tt[Bt[6]] > -Bt[0] && tt[Bt[15]].push((tt[Bt[7]] | tt[Bt[6]] << tt[-Bt[309]]) & Bt[11]), xt(tt[Bt[15]])
- ... (1 more removed lines; see GitHub link above)
+             }
+           } else if (VB) {
+             function CT(...BB) {
+               for (cI(BB[bB[13]] = bB[2], BB[-bB[208]] = 'z[0*$yx3)9AaB+1]FMts|CETH#w=V,:LQ^GYk6J<N?vm}p_b8WDiu>(Xqo`!;Icdfh@&rR4K5Z.Se/27lUg~"nO%j{P', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[0]].length, BB[-bB[58]] = [], BB[bB[8]] = bB[1], BB[bB[228]] = bB[1], BB[ … [truncated]
+                 if (BB[bB[6]] = BB[-bB[208]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                   if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
+                   else {
+                     cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[bB[8]] |= BB[bB[26]] << BB[bB[228]], BB[bB[228]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                     do {
+                       cI(BB[-bB[58]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[228]] -= bB[11])
+                     } while (BB[bB[228]] > bB[26]);
+                     BB[bB[26]] = -bB[2]
+                   } return BB[bB[26]] > -bB[2] && BB[-bB[58]].push((BB[bB[8]] | BB[bB[26]] << BB[bB[228]]) & bB[12]), EB(BB[-bB[58]])
+             }
```

#### 1979. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14130-L14148` → after: `L14060-L14078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14060-L14078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14060-L14078) · [Before (L14130-L14148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14130-L14148)

```diff
-                 function fO(...tt) {
-                   return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = EO(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
-                 }
-                 de(dt()[fO(546)](It, Bt[2], nV * St[Bt[15]][Mt], Bt[2]), tt[Bt[9]][fO(547) + fO(548)](It))
-               } tt[Bt[29]][gV(Bt[311]) + Bt[6]] || (tt[Bt[43]][gV(549)] = Bt[107]), tt[Bt[43]][gV(550)]++
-         } else {
-           function wO(tt) {
-             var et, Vt, Ot, qt, Dt, mt, dt;
-             for (de(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Bt[2], Dt = Bt[2], mt = -Bt[0]), dt = Bt[2]; dt < Vt; dt++) {
-               var jt = 'h(xT9k7Aby3Bn[q+D~uKGtC`]:L&fp,o@rmPN|24=sEa5;?gXdW0IR.jQFvM18lY<!Ve_w>*/i{#6%Hc$)JOS}ZUz"^'.indexOf(et[dt]);
-               if (jt !== -Bt[0])
-                 if (mt < Bt[2]) mt = jt;
-                 else {
-                   de(mt += jt * Bt[33], qt |= mt << Dt, Dt += (mt & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
-                   do {
-                     de(Ot.push(qt & Bt[11]), qt >>= Bt[10], Dt -= Bt[10])
- ... (3 more removed lines; see GitHub link above)
+             function QT(...BB) {
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = CT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+             }
+             for (let sT = bB[1]; sT < jB[QT(494)]; sT++) {
+               const wT = jB[sT];
+               dB[wT] && BB[bB[52]][QT(495) + bB[34]][wT] !== bB[1] && cI(vB()[QT(496)](MB, bB[1], 1.05 * cT, bB[1]), BB[bB[52]][QT(497) + QT(498)](MB))
+             }
+           } else if (BB[bB[30]][vT(bB[290]) + bB[34]]) {
+             function OT(...BB) {
+               for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'PyDRBx6TOe/8X@zl]|?3$9[LCrWjqhUofEHswm,pn#!`vMkI01t=S.%7_+Z;dQu4:*)Vg<i~2J{(^>&}5A"caYKFbNG', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[223]] = BB[bB[14]].length, BB[-bB[286]] = [], BB[bB[8]] = bB[1], BB[bB[24]] = bB[1], BB[ … [truncated]
+                 if (BB[-bB[129]] = BB[bB[2]].indexOf(BB[bB[14]][BB[-bB[108]]]), BB[-bB[129]] !== -bB[2])
+                   if (BB[bB[289]] < bB[1]) BB[bB[289]] = BB[-bB[129]];
+                   else {
+                     cI(BB[bB[289]] += BB[-bB[129]] * bB[35], BB[bB[8]] |= BB[bB[289]] << BB[bB[24]], BB[bB[24]] += (BB[bB[289]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                     do {
+                       cI(BB[-bB[286]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[24]] -= bB[11])
+ ... (3 more added lines; see GitHub link above)
```

#### 1980. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14153-L14154` → after: `L14081-L14084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14081-L14084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14081-L14084) · [Before (L14153-L14154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14153-L14154)

```diff
-           function yO(...tt) {
-             return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = wO(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+             function YT(...BB) {
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = OT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+             }
+             cI(vB()[YT(500)](MB, bB[1], cT * pB[bB[10]][UB], bB[1]), BB[bB[52]][YT(501) + YT(502)](MB))
```

#### 1981. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14156-L14158` → after: `L14086-L14088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14086-L14088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14086-L14088) · [Before (L14156-L14158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14156-L14158)

```diff
-           de(tt[Bt[29]][et(Bt[299])][et(Bt[300]) + et(Bt[301]) + et(Bt[302])](et(Bt[293]), Bt[0]), tt[Bt[9]][yO(551) + yO(552) + yO(553)] = rt, tt[Bt[9]][yO(554) + Bt[312]] = Xe ? Ee : fe, tt[Bt[43]][yO(555)] = Bt[92], tt[Bt[43]][yO(556)] = Bt[2])
-         }
-         if (tt[Bt[43]][et(557)] !== -Bt[0]) {
+           BB[bB[30]][vT(bB[290]) + bB[34]] || (BB[bB[0]][vT(503)] = bB[183]), BB[bB[0]][vT(bB[291])]++
+         } else cI(BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + IB(bB[303])](IB(506), bB[2]), BB[bB[52]][IB(bB[61]) + IB(bB[152]) + IB(bB[55])] = eB, BB[bB[52]][IB(bB[333]) + bB[294]] = II ? zI : FI, BB[bB[0]][IB(508)] = bB[179], BB[bB[0]][IB(bB[295])] = bB[1]);
+         if (BB[bB[0]][IB(bB[297])] !== -bB[2]) {
```

#### 1982. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14160-L14162` → after: `L14090-L14092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14090-L14092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14090-L14092) · [Before (L14160-L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14160-L14162)

```diff
-             for (de(tt[Bt[12]] = Bt[0], tt[-Bt[141]] = '9InGQjthBPkX.f/&%lCgA#NK06[(v*Z}DYa+db>Lx]E~M_$?:O^,RVi4!@U)S2=uzeqTo<"mswc`51HJ{7yp38Wr|;F', tt[Bt[313]] = "" + (tt[Bt[2]] || ""), tt[Bt[29]] = tt[Bt[313]].length, tt[Bt[9]] = [], tt[-Bt[314]] = Bt[2], tt[Bt[88]] = Bt[2], t … [truncated]
-               if (tt[Bt[32]] = tt[-Bt[141]].indexOf(tt[Bt[313]][tt[Bt[315]]]), tt[Bt[32]] !== -Bt[0])
-                 if (tt[Bt[6]] < Bt[2]) tt[Bt[6]] = tt[Bt[32]];
+             for (cI(BB[bB[13]] = bB[2], BB[bB[296]] = 'jtM2hN;{:1F%OdDa90Crq|zI^_,Qn5Z#gbW!Pcky(x[@wXBHlRf6Gvo.U+E7]TuLJm~AKp/es<$SV}8Y4=*`?)3>"&i', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[240]] = [], BB[-bB[48]] = bB[1], BB[bB[20]] = bB[1], BB[bB … [truncated]
+               if (BB[bB[6]] = BB[bB[296]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[bB[6]] !== -bB[2])
+                 if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
```

#### 1983. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14164` → after: `L14094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14094) · [Before (L14164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14164)

```diff
-                   de(tt[Bt[6]] += tt[Bt[32]] * Bt[33], tt[-Bt[314]] |= tt[Bt[6]] << tt[Bt[88]], tt[Bt[88]] += (tt[Bt[6]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                   cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[-bB[48]] |= BB[bB[26]] << BB[bB[20]], BB[bB[20]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1984. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14166-L14169` → after: `L14096-L14099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14096-L14099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14096-L14099) · [Before (L14166-L14169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14166-L14169)

```diff
-                     de(tt[Bt[9]].push(tt[-Bt[314]] & Bt[11]), tt[-Bt[314]] >>= Bt[10], tt[Bt[88]] -= Bt[10])
-                   } while (tt[Bt[88]] > Bt[24]);
-                   tt[Bt[6]] = -Bt[0]
-                 } return tt[Bt[6]] > -Bt[0] && tt[Bt[9]].push((tt[-Bt[314]] | tt[Bt[6]] << tt[Bt[88]]) & Bt[11]), xt(tt[Bt[9]])
+                     cI(BB[bB[240]].push(BB[-bB[48]] & bB[12]), BB[-bB[48]] >>= bB[11], BB[bB[20]] -= bB[11])
+                   } while (BB[bB[20]] > bB[26]);
+                   BB[bB[26]] = -bB[2]
+                 } return BB[bB[26]] > -bB[2] && BB[bB[240]].push((BB[-bB[48]] | BB[bB[26]] << BB[bB[20]]) & bB[12]), EB(BB[bB[240]])
```

#### 1985. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14172-L14173` → after: `L14102-L14103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14102-L14103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14102-L14103) · [Before (L14172-L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14172-L14173)

```diff
-           function aO(tt) {
-             return typeof Lt[tt] === Bt[18] ? Lt[tt] = NO(Ft[tt]) : Lt[tt]
+           function pT(...BB) {
+             return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = iT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1986. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14175-L14177` → after: `L14105-L14107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14105-L14107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14105-L14107) · [Before (L14175-L14177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14175-L14177)

```diff
-           const MO = tt[Bt[43]][aO(Bt[320])] / tt[Bt[43]][aO(Bt[316]) + aO(Bt[317]) + aO(561) + aO(562) + aO(563) + "ks"],
-             bO = tt[Bt[43]][aO(Bt[316]) + aO(Bt[317]) + aO(Bt[319]) + aO(Bt[318])] + MO * (tt[Bt[43]][aO(Bt[316]) + aO(Bt[317]) + aO(566) + aO(Bt[318])] - tt[Bt[43]][aO(Bt[316]) + aO(Bt[317]) + aO(Bt[319]) + aO(Bt[318])]);
-           if (dt()[aO(567)](It, Bt[2], Bt[2], Bt[2]), tt[Bt[43]][aO(Bt[320])] > Bt[2]) {
+           const aT = BB[bB[0]][IB(bB[297])] / BB[bB[0]][pT(bB[298]) + pT(bB[299]) + pT(bB[106]) + pT(513) + pT(514) + "ks"],
+             HT = BB[bB[0]][pT(bB[298]) + pT(bB[299]) + pT(515) + pT(bB[300])] + aT * (BB[bB[0]][pT(bB[298]) + pT(bB[299]) + pT(517) + pT(bB[300])] - BB[bB[0]][pT(518) + pT(519) + pT(520)]);
+           if (vB()[pT(521)](MB, bB[1], bB[1], bB[1]), BB[bB[0]][pT(bB[301])] > bB[1]) {
```

#### 1987. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14179` → after: `L14109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14109) · [Before (L14179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14179)

```diff
-             It[Bt[0]] = bO * CO
+             MB[bB[2]] = HT * jT
```

#### 1988. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14181-L14182` → after: `L14111-L14112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14111-L14112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14111-L14112) · [Before (L14181-L14182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14181-L14182)

```diff
-           const JO = bO * tt[Bt[43]][aO(Bt[321]) + aO(Bt[322]) + aO(570) + aO(571)];
-           de(It[tt[Bt[43]][aO(Bt[321]) + aO(Bt[322]) + aO(572)]] = JO, tt[Bt[9]][aO(573) + aO(574)](It)), ++tt[Bt[43]][aO(Bt[320])] > tt[Bt[43]][aO(575) + aO(576) + aO(577)] && (tt[Bt[43]][aO(Bt[320])] = -Bt[0])
+           const MT = HT * BB[bB[0]][pT(523) + pT(524) + pT(525)];
+           cI(MB[BB[bB[0]][pT(526) + pT(527) + pT(528)]] = MT, BB[bB[52]][pT(529) + pT(530)](MB)), ++BB[bB[0]][pT(bB[301])] > BB[bB[0]][pT(531) + pT(532) + pT(533)] && (BB[bB[0]][pT(bB[301])] = -bB[2])
```

#### 1989. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14186-L14188` → after: `L14116-L14118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14116-L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14116-L14118) · [Before (L14186-L14188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14186-L14188)

```diff
-             for (de(tt[Bt[12]] = Bt[0], tt[Bt[27]] = '&1?~|^AI9Lx:#VrbPTN,dGB(so5SwE$0"_Xec@C*][U;yvZM}K!j{8ahWmQ+2i%<nu=F`g/3DktO64lf>qp.)YHJR7z', tt[-Bt[154]] = "" + (tt[Bt[2]] || ""), tt[Bt[323]] = tt[-Bt[154]].length, tt[Bt[15]] = [], tt[Bt[7]] = Bt[2], tt[Bt[35]] = Bt[2], tt … [truncated]
-               if (tt[Bt[48]] = tt[Bt[27]].indexOf(tt[-Bt[154]][tt[Bt[3]]]), tt[Bt[48]] !== -Bt[0])
-                 if (tt[Bt[47]] < Bt[2]) tt[Bt[47]] = tt[Bt[48]];
+             for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = '7DHfPX+$0[5&S@cQKmiWU_Y|?8oVqC>x#vnu"%{9LR4`^MBNy*ws2gGl.};,/IThdk]OaFjzt6=<pEeJ1A3)Zb:(r!~', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[139]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[8]] = bB[1], BB[-bB[257]] = bB[1], BB[bB[3 … [truncated]
+               if (BB[bB[6]] = BB[bB[2]].indexOf(BB[bB[0]][BB[bB[31]]]), BB[bB[6]] !== -bB[2])
+                 if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
```

#### 1990. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14190` → after: `L14120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14120) · [Before (L14190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14190)

```diff
-                   de(tt[Bt[47]] += tt[Bt[48]] * Bt[33], tt[Bt[7]] |= tt[Bt[47]] << tt[Bt[35]], tt[Bt[35]] += (tt[Bt[47]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                   cI(BB[bB[34]] += BB[bB[6]] * bB[35], BB[bB[8]] |= BB[bB[34]] << BB[-bB[257]], BB[-bB[257]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1991. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14192-L14195` → after: `L14122-L14125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14122-L14125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14122-L14125) · [Before (L14192-L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14192-L14195)

```diff
-                     de(tt[Bt[15]].push(tt[Bt[7]] & Bt[11]), tt[Bt[7]] >>= Bt[10], tt[Bt[35]] -= Bt[10])
-                   } while (tt[Bt[35]] > Bt[24]);
-                   tt[Bt[47]] = -Bt[0]
-                 } return tt[Bt[47]] > -Bt[0] && tt[Bt[15]].push((tt[Bt[7]] | tt[Bt[47]] << tt[Bt[35]]) & Bt[11]), xt(tt[Bt[15]])
+                     cI(BB[bB[10]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[-bB[257]] -= bB[11])
+                   } while (BB[-bB[257]] > bB[26]);
+                   BB[bB[34]] = -bB[2]
+                 } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[8]] | BB[bB[34]] << BB[-bB[257]]) & bB[12]), EB(BB[bB[10]])
```

#### 1992. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14199` → after: `L14141-L14158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14141-L14158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14141-L14158) · [Before (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14199)

```diff
-             return typeof Lt[tt] === Bt[18] ? Lt[tt] = uO(Ft[tt]) : Lt[tt]
+             var IB, ZB, TB, JB, oB, GB, vB;
+             for (cI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = bB[1], oB = bB[1], GB = -bB[2]), vB = bB[1]; vB < ZB; vB++) {
+               var kB = '&^u`]vbA"O<w:MN,BXxU|ny)Iz07ZT.;~iJ9ro$S[+5Caf1qkDH(c=Vh6@QsELY!glWKFG*}d/2R3_m{jPp4%8e>#t?'.indexOf(IB[vB]);
+               if (kB !== -bB[2])
+                 if (GB < bB[1]) GB = kB;
+                 else {
+                   cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                   do {
+                     cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                   } while (oB > bB[26]);
+                   GB = -bB[2]
+                 }
+             }
+             return GB > -bB[2] && TB.push((JB | GB << oB) & bB[12]), EB(TB)
+           }
+ 
+ ... (2 more added lines; see GitHub link above)
```

#### 1993. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14201` → after: `L14160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14160) · [Before (L14201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14201)

```diff
-           if (de(tt[Bt[43]][et(Bt[325])] = Bt[2], tt[Bt[29]][et(Bt[299])][et(Bt[300]) + et(Bt[301]) + et(Bt[302])](KO(579), .8)), tt[Bt[29]][KO(580) + KO(581)] && mt === Dt[Bt[326]][KO(582) + Bt[327]]) {
+           if (cI(BB[bB[30]][LT(543)][LT(544) + LT(545) + LT(546)](LT(547), bB[2]), BB[bB[0]][LT(548)]++), NI && BB[bB[30]][LT(549) + bB[34]] && !II && !gB && !SB && !VB && !QB && GB === oB[bB[186]][LT(550) + bB[307]]) {
```

#### 1994. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14204-L14207` → after: `L14163-L14166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14163-L14166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14163-L14166) · [Before (L14204-L14207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14204-L14207)

```diff
-               for (de(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Bt[2], Dt = Bt[2], mt = -Bt[0]), dt = Bt[2]; dt < Vt; dt++) {
-                 var jt = '0LjVAmZGHunvREq3UDa!#lMP4^<Kgts~?z&|r}w1.8OyTk@N="doi_SY:B)I2Q`Ce9$6XJFx*[7/;](5b>hfW,cp%{+'.indexOf(et[dt]);
-                 if (jt !== -Bt[0])
-                   if (mt < Bt[2]) mt = jt;
+               for (cI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = bB[1], oB = bB[1], GB = -bB[2]), vB = bB[1]; vB < ZB; vB++) {
+                 var kB = 'GZqFJes0UMn1(<,3;xkNVWtESrdHQDbgioCBmOYLTAjhIXRPpl*w6Ky+_#]2>v~|^:@z9{4)7=%!"[.`/58$?&u}caf'.indexOf(IB[vB]);
+                 if (kB !== -bB[2])
+                   if (GB < bB[1]) GB = kB;
```

#### 1995. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14209` → after: `L14168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14168) · [Before (L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14209)

```diff
-                     de(mt += jt * Bt[33], qt |= mt << Dt, Dt += (mt & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                     cI(GB += kB * bB[35], JB |= GB << oB, oB += (GB & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 1996. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14211-L14213` → after: `L14170-L14172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14170-L14172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14170-L14172) · [Before (L14211-L14213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14211-L14213)

```diff
-                       de(Ot.push(qt & Bt[11]), qt >>= Bt[10], Dt -= Bt[10])
-                     } while (Dt > Bt[24]);
-                     mt = -Bt[0]
+                       cI(TB.push(JB & bB[12]), JB >>= bB[11], oB -= bB[11])
+                     } while (oB > bB[26]);
+                     GB = -bB[2]
```

#### 1997. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14216` → after: `L14175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14175) · [Before (L14216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14216)

```diff
-               return mt > -Bt[0] && Ot.push((qt | mt << Dt) & Bt[11]), xt(Ot)
+               return GB > -bB[2] && TB.push((JB | GB << oB) & bB[12]), EB(TB)
```

#### 1998. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14219-L14220` → after: `L14178-L14179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14178-L14179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14178-L14179) · [Before (L14219-L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14219-L14220)

```diff
-             function vO(tt) {
-               return typeof Lt[tt] === Bt[18] ? Lt[tt] = hO(Ft[tt]) : Lt[tt]
+             function uT(...BB) {
+               return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = eT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 1999. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14222-L14227` → after: `L14181-L14182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14181-L14182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14181-L14182) · [Before (L14222-L14227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14222-L14227)

```diff
-             const WO = Ve(tt[Bt[9]][Bt[248]][Bt[0]], Bt[7]);
-             de(dt()[KO(Bt[324])](It, Bt[2], -WO, Bt[2]), tt[Bt[9]][vO(584) + vO(585)](It))
-           }
-           if (tt[Bt[29]][KO(586) + Bt[6]]) {
-             const SO = Ve(tt[Bt[9]][Bt[248]][Bt[0]], Bt[29]);
-             de(dt()[KO(Bt[324])](It, Bt[2], SO, Bt[2]), tt[Bt[9]][KO(587) + KO(588)](It))
+             const fT = Math[LT(551)](bB[2], Math[LT(552)](bB[1], NI[uT(553) + uT(554)] - BB[bB[52]][bB[221]][bB[2]]));
+             cI(vB()[uT(555)](MB, bB[1], NI[uT(556)] * fT, bB[1]), BB[bB[52]][uT(557) + uT(558)](MB))
```

#### 2000. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14234` → after: `L14186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14186) · [Before (L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14234)

```diff
-       if (tt[Bt[29]][et(Bt[299])][et(Bt[300]) + et(Bt[301]) + et(Bt[302])](et(Bt[331]) + Bt[332], !tt[Bt[43]][et(Bt[250]) + Bt[6]] && ut ? .07 : Bt[0]), !ut || tt[Bt[43]][et(Bt[250]) + Bt[6]] || Xe || de(tt[Bt[9]][Bt[248]][Bt[0]] = Bt[2], tt[Bt[9]][et(Bt[176]) + et(Bt[177]) + et( … [truncated]
+       if (BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + IB(bB[303])](IB(bB[308]) + bB[309], !BB[bB[0]][IB(bB[224]) + bB[34]] && QB ? .07 : bB[2]), !QB || BB[bB[0]][IB(bB[224]) + bB[34]] || II || cI(BB[bB[52]][bB[221]][bB[2]] = bB[1], BB[bB[52]][IB(bB[61]) + IB(bB[152]) + IB … [truncated]
```

#### 2001. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14236-L14238` → after: `L14188-L14190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14188-L14190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14188-L14190) · [Before (L14236-L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14236-L14238)

```diff
-           for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = '{28#}u;v~*wx<gT%,jGEn[cWd]$`(|=/hL1f5eX7y"Y_Ik!aQprN)z&:4l03iq@.OM?P>AFB9bJoHSCZsKtUD6mV^R+', tt[Bt[13]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[13]].length, tt[-Bt[334]] = [], tt[Bt[4]] = Bt[2], tt[Bt[8]] = Bt[2], tt[Bt[6]] … [truncated]
-             if (tt[Bt[32]] = tt[Bt[0]].indexOf(tt[Bt[13]][tt[Bt[3]]]), tt[Bt[32]] !== -Bt[0])
-               if (tt[Bt[6]] < Bt[2]) tt[Bt[6]] = tt[Bt[32]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[311]] = ';kQmCctOHDZdsa0nhI&y}=94uX[8^)bL1P~qB%r35+V"K*2pM.7i{#(N_e$FxjWGAT6,Y:vw>]S`fl<?!@zoRJg|U/E', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[bB[52]] = [], BB[bB[29]] = bB[1], BB[bB[94]] = bB[1], BB[bB[26] … [truncated]
+             if (BB[bB[6]] = BB[bB[311]].indexOf(BB[bB[0]][BB[bB[11]]]), BB[bB[6]] !== -bB[2])
+               if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
```

#### 2002. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14240` → after: `L14192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14192) · [Before (L14240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14240)

```diff
-                 de(tt[Bt[6]] += tt[Bt[32]] * Bt[33], tt[Bt[4]] |= tt[Bt[6]] << tt[Bt[8]], tt[Bt[8]] += (tt[Bt[6]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                 cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[bB[29]] |= BB[bB[26]] << BB[bB[94]], BB[bB[94]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 2003. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14242-L14245` → after: `L14194-L14197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14194-L14197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14194-L14197) · [Before (L14242-L14245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14242-L14245)

```diff
-                   de(tt[-Bt[334]].push(tt[Bt[4]] & Bt[11]), tt[Bt[4]] >>= Bt[10], tt[Bt[8]] -= Bt[10])
-                 } while (tt[Bt[8]] > Bt[24]);
-                 tt[Bt[6]] = -Bt[0]
-               } return tt[Bt[6]] > -Bt[0] && tt[-Bt[334]].push((tt[Bt[4]] | tt[Bt[6]] << tt[Bt[8]]) & Bt[11]), xt(tt[-Bt[334]])
+                   cI(BB[bB[52]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[94]] -= bB[11])
+                 } while (BB[bB[94]] > bB[26]);
+                 BB[bB[26]] = -bB[2]
+               } return BB[bB[26]] > -bB[2] && BB[bB[52]].push((BB[bB[29]] | BB[bB[26]] << BB[bB[94]]) & bB[12]), EB(BB[bB[52]])
```

#### 2004. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14248-L14249` → after: `L14200-L14227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14200-L14227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14200-L14227) · [Before (L14248-L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14248-L14249)

```diff
-         function IO(tt) {
-           return typeof Lt[tt] === Bt[18] ? Lt[tt] = RO(Ft[tt]) : Lt[tt]
+         function AT(...BB) {
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = lT(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
+         }
+         const tT = BB[bB[1]][IB(bB[148])][IB(559)](BB[bB[2]], nI);
+         BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + IB(bB[303])](IB(560) + AT(561) + bB[314], tT)
+       } else if (BB[bB[0]][IB(bB[224]) + bB[34]]) {
+         function bT(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '1YA(P784WlBFo6hZ!^@=5D)JXjRqmu$<.I`0>"a;_e*bCS?O9z,[Q2#{}GV~:ULN+%d]rxtcTEH&vnKw3fMgyki/|sp', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[312]] = BB[bB[0]].length, BB[bB[52]] = [], BB[bB[29]] = bB[1], BB[bB[218]] = bB[1], BB[bB[26 … [truncated]
+             if (BB[-bB[39]] = BB[bB[22]].indexOf(BB[bB[0]][BB[bB[313]]]), BB[-bB[39]] !== -bB[2])
+               if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[-bB[39]];
+               else {
+                 cI(BB[bB[26]] += BB[-bB[39]] * bB[35], BB[bB[29]] |= BB[bB[26]] << BB[bB[218]], BB[bB[218]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                 do {
+                   cI(BB[bB[52]].push(BB[bB[29]] & bB[12]), BB[bB[29]] >>= bB[11], BB[bB[218]] -= bB[11])
+                 } while (BB[bB[218]] > bB[26]);
+                 BB[bB[26]] = -bB[2]
+ ... (12 more added lines; see GitHub link above)
```

#### 2005. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14251-L14265` → after: `L14229-L14252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14229-L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14229-L14252) · [Before (L14251-L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14251-L14265)

```diff
-         const PO = tt[Bt[2]][et(Bt[173])][et(596)](tt[Bt[0]], Qe);
-         tt[Bt[29]][IO(597)][IO(598) + IO(599) + IO(600)](IO(601) + IO(602) + Bt[335], PO)
-       } else tt[Bt[43]][et(Bt[250]) + Bt[6]] && tt[Bt[29]][et(Bt[299])][et(Bt[300]) + et(Bt[301]) + et(Bt[302])](et(603) + et(604) + Bt[335], Bt[0]);
-       if (tt[Bt[35]] = Bt[0], ft[et(Bt[299])] && Xe && !Ct)
-         for (let ZO = Bt[2]; ZO < Qe[et(Bt[333])]; ZO++) {
-           const LO = ft[et(Bt[299])][Qe[ZO]];
-           Math[et(Bt[265])](LO - Bt[0]) > Math[et(Bt[265])](tt[Bt[35]] - Bt[0]) && (tt[Bt[35]] = LO)
-         }
-       tt[Bt[29]][et(Bt[299])][et(Bt[300]) + et(Bt[301]) + et(Bt[302])](et(605) + et(606) + et(607) + et(608), tt[Bt[35]]);
-       const Ke = (Bt[2], Xt[Bt[191]])(Ht, Ct, Xe);
-       de(tt[Bt[29]][et(Bt[299])][et(Bt[300]) + et(Bt[301]) + et(Bt[302])](et(Bt[336]) + et(609) + et(610) + et(611) + Bt[353], Ke), tt[Bt[2]].mJ.YG(tt[Bt[43]][Bt[337]]).Fk = (Bt[2], Xt[Bt[341]])(ft[et(Bt[338]) + et(Bt[339])], Qe, Ht[et(Bt[338]) + et(Bt[339])])), mt === Dt[Bt[326] … [truncated]
-       const he = tt[Bt[29]][Bt[253]] * tt[Bt[29]][et(Bt[299])][et(617) + et(618) + et(619) + et(620)]() * (tt[Bt[43]][et(Bt[250]) + Bt[6]] ? ee(tt[Bt[2]], tt[Bt[0]], zt) : Bt[0]),
-         ve = Number[et(621)](he) ? Bt[2] : Math[et(Bt[342])](-qt[Bt[17]][et(Bt[343]) + et(Bt[259])], Math[et(Bt[328])](he, qt[Bt[17]][et(Bt[343]) + et(Bt[259])]));
-       Ht[et(Bt[344]) + Bt[345]] && Ht[et(Bt[344]) + Bt[345]][et(Bt[346]) + et(Bt[347])] > Bt[2] && (Xe || Ct && Ht[et(Bt[344]) + Bt[345]][et(626)]) && (Bt[2], ht[Bt[17]])(tt[Bt[9]], tt[Bt[43]][et(Bt[344]) + et(627) + et(Bt[298])], Ht[et(Bt[344]) + Bt[345]][et(Bt[346]) + et(Bt[347 … [truncated]
-       const We = Ht[et(628)];
+       BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + IB(bB[303])](IB(565) + IB(566) + IB(567) + IB(568), BB[-bB[0]]);
+       const sI = (bB[1], nB.x)(cB, CB, II);
+       cI(BB[bB[30]][IB(bB[292])][IB(bB[293]) + IB(bB[302]) + IB(bB[303])](IB(569) + IB(570) + IB(571) + bB[316], sI), BB[bB[1]].zW.vx(BB[bB[0]][bB[315]]).Tl = (bB[1], nB[bB[316]])(NB[IB(bB[317]) + IB(bB[318])], nI, cB[IB(bB[317]) + IB(bB[318])])), GB === oB[bB[186]][IB(574) + bB[ … [truncated]
+       const wI = BB[bB[30]][bB[232]] * BB[bB[30]][IB(bB[292])][IB(578) + IB(579) + IB(580) + IB(581)]() * (BB[bB[0]][IB(bB[224]) + bB[34]] ? TI(BB[bB[1]], BB[bB[2]], XB) : bB[2]),
+         OI = Number[IB(582)](wI) ? bB[1] : Math[IB(bB[319])](-JB[bB[20]][IB(bB[320]) + IB(bB[237])], Math[IB(584)](wI, JB[bB[20]][IB(bB[320]) + IB(bB[237])]));
+       if (cB[IB(bB[321]) + bB[322]] && cB[IB(bB[321]) + bB[322]][IB(586) + IB(587)] > bB[1] && (II || CB && cB[IB(bB[321]) + bB[322]][IB(588)])) {
+         function KT(...BB) {
+           for (cI(BB[bB[13]] = bB[2], BB[-bB[215]] = 'wG9@ZxV{;ojCpL?3)nmryvMOUI!FN"W>,]+%/SsRJ}8H:f1&Qe*_A$^uT=KgPXD7[<B.5EYk4h~(azlc06#2d`qbt|i', BB[bB[14]] = "" + (BB[bB[1]] || ""), BB[bB[110]] = BB[bB[14]].length, BB[-bB[68]] = [], BB[-bB[311]] = bB[1], BB[bB[24]] = bB[1], BB … [truncated]
+             if (BB[-bB[323]] = BB[-bB[215]].indexOf(BB[bB[14]][BB[bB[11]]]), BB[-bB[323]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[-bB[323]];
+               else {
+                 cI(BB[bB[34]] += BB[-bB[323]] * bB[35], BB[-bB[311]] |= BB[bB[34]] << BB[bB[24]], BB[bB[24]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                 do {
+                   cI(BB[-bB[68]].push(BB[-bB[311]] & bB[12]), BB[-bB[311]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+ ... (8 more added lines; see GitHub link above)
```

#### 2006. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14268-L14270` → after: `L14255-L14257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14255-L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14255-L14257) · [Before (L14268-L14270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14268-L14270)

```diff
-           for (de(tt[Bt[12]] = Bt[0], tt[Bt[27]] = '[GRbf:g#,M~AK]?"ku{V)x+7E=%6iZmH*!`P1n(vr/qcO4T$F29yW}j;zBN^8_hJ<@I.X5DQYSUtol3&e|Cs>0wLapd', tt[Bt[43]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[43]].length, tt[Bt[9]] = [], tt[-Bt[348]] = Bt[2], tt[Bt[35]] = Bt[2], tt[Bt[6 … [truncated]
-             if (tt[Bt[126]] = tt[Bt[27]].indexOf(tt[Bt[43]][tt[Bt[3]]]), tt[Bt[126]] !== -Bt[0])
-               if (tt[Bt[6]] < Bt[2]) tt[Bt[6]] = tt[Bt[126]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'xcPJWiDsrnHlOgGCmkpqRZ,14+=7`w~y6bjQBN{<v>(9[*K8Ad)3?Y;u!2z@/$S:TE.5%|fIMUV#XF}"_]^&Lohae0t', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[30]] = BB[bB[0]].length, BB[-bB[201]] = [], BB[bB[8]] = bB[1], BB[bB[24]] = bB[1], BB[bB[26]] … [truncated]
+             if (BB[bB[6]] = BB[bB[2]].indexOf(BB[bB[0]][BB[-bB[8]]]), BB[bB[6]] !== -bB[2])
+               if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[6]];
```

#### 2007. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14272` → after: `L14259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14259) · [Before (L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14272)

```diff
-                 de(tt[Bt[6]] += tt[Bt[126]] * Bt[33], tt[-Bt[348]] |= tt[Bt[6]] << tt[Bt[35]], tt[Bt[35]] += (tt[Bt[6]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                 cI(BB[bB[26]] += BB[bB[6]] * bB[35], BB[bB[8]] |= BB[bB[26]] << BB[bB[24]], BB[bB[24]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 2008. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14274-L14277` → after: `L14261-L14264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14261-L14264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14261-L14264) · [Before (L14274-L14277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14274-L14277)

```diff
-                   de(tt[Bt[9]].push(tt[-Bt[348]] & Bt[11]), tt[-Bt[348]] >>= Bt[10], tt[Bt[35]] -= Bt[10])
-                 } while (tt[Bt[35]] > Bt[24]);
-                 tt[Bt[6]] = -Bt[0]
-               } return tt[Bt[6]] > -Bt[0] && tt[Bt[9]].push((tt[-Bt[348]] | tt[Bt[6]] << tt[Bt[35]]) & Bt[11]), xt(tt[Bt[9]])
+                   cI(BB[-bB[201]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[26]] = -bB[2]
+               } return BB[bB[26]] > -bB[2] && BB[-bB[201]].push((BB[bB[8]] | BB[bB[26]] << BB[bB[24]]) & bB[12]), EB(BB[-bB[201]])
```

#### 2009. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14281` → after: `L14268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14268) · [Before (L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14281)

```diff
-           return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = FO(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = ST(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 2010. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14283-L14287` → after: `L14270-L14290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14270-L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14270-L14290) · [Before (L14283-L14287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14283-L14287)

```diff
-         const GO = (Math[et(629)](tt[Bt[9]][Bt[248]][Bt[2]] * tt[Bt[9]][Bt[248]][Bt[2]] + tt[Bt[9]][Bt[248]][Bt[43]] * tt[Bt[9]][Bt[248]][Bt[43]]) - We[et(630) + Bt[97]]) * We[kO(Bt[350]) + kO(632) + kO(633) + Bt[326]];
-         if (GO > Bt[2] && tt[Bt[9]][Bt[248]][Bt[0]] < GO) {
-           const zO = tt[Bt[7]] / Bt[349],
-             oO = (GO - tt[Bt[9]][Bt[248]][Bt[0]]) * Et[Bt[13]][kO(634) + kO(635)](We[kO(Bt[350]) + kO(636) + kO(637)] * zO);
-           de(dt()[kO(638)](It, Bt[2], oO * tt[Bt[9]].Sd / zO, Bt[2]), tt[Bt[9]][kO(639) + kO(640)](It))
+         const IJ = (Math[IB(593)](BB[bB[52]][bB[221]][bB[1]] * BB[bB[52]][bB[221]][bB[1]] + BB[bB[52]][bB[221]][bB[0]] * BB[bB[52]][bB[221]][bB[0]]) - YI[IB(594) + bB[135]]) * YI[BJ(595) + BJ(596) + BJ(597) + "n"];
+         if (IJ > bB[1] && BB[bB[52]][bB[221]][bB[2]] < IJ) {
+           function ZJ(...BB) {
+             for (cI(BB[bB[13]] = bB[2], BB[bB[22]] = '0^2)4CSMxbRNHgFOXzelZy`YumqP{faJhK_@i#$+E1L/wUp,6]rk[j3I*Q|B;A9=?8TW7no(:%DVG!v<c}&5t~>.ds"', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[15]] = BB[bB[0]].length, BB[bB[52]] = [], BB[-bB[325]] = bB[1], BB[bB[139]] = bB[1], BB[bB … [truncated]
+               if (BB[-bB[150]] = BB[bB[22]].indexOf(BB[bB[0]][BB[-bB[83]]]), BB[-bB[150]] !== -bB[2])
+                 if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[-bB[150]];
+                 else {
+                   cI(BB[bB[26]] += BB[-bB[150]] * bB[35], BB[-bB[325]] |= BB[bB[26]] << BB[bB[139]], BB[bB[139]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
+                   do {
+                     cI(BB[bB[52]].push(BB[-bB[325]] & bB[12]), BB[-bB[325]] >>= bB[11], BB[bB[139]] -= bB[11])
+                   } while (BB[bB[139]] > bB[26]);
+                   BB[bB[26]] = -bB[2]
+                 } return BB[bB[26]] > -bB[2] && BB[bB[52]].push((BB[-bB[325]] | BB[bB[26]] << BB[bB[139]]) & bB[12]), EB(BB[bB[52]])
+           }
+ 
+           function TJ(...BB) {
+ ... (5 more added lines; see GitHub link above)
```

#### 2011. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14295-L14296` → after: `L14298-L14299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14298-L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14298-L14299) · [Before (L14295-L14296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14295-L14296)

```diff
-             Qt = null === jt.durationMs || !Ot.floatStartTicksAgo || Ot.floatStartTicksAgo < jt.durationMs / 1e3 * qt.e.clientTicksPerSecond,
-             lt = Ot.isInAir && !dt && (mt.Dy[1] < 0 || Xt === Ht) && !Ot.hitWhilstAirborne(Ht) && Qt,
+             hB = null === kB.durationMs || !TB.floatStartTicksAgo || TB.floatStartTicksAgo < kB.durationMs / 1e3 * JB.f.clientTicksPerSecond,
+             zB = TB.isInAir && !vB && (GB.zq[1] < 0 || nB === cB) && !TB.hitWhilstAirborne(cB) && hB,
```

#### 2012. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14298-L14300` → after: `L14301-L14303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14301-L14303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14301-L14303) · [Before (L14298-L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14298-L14300)

```diff
-             ft = !lt && Xt !== Dt.m.NORMAL;
-           return Ot.movementType = lt ? Ht : Dt.m.NORMAL, Et ? et.bloxd.updatePositionAndPhysics(Vt, Ot.physicsState, !1, void 0, !0) : ft && (jt.exitsVehicleOnEnd ? et.bloxd.removeConsumableVehiclePhysics(Vt, Ot.hasTakenOffTheGround) : et.bloxd.updatePositionAndPhysics(Vt, {
-             type: Dt.n.DEFAULT,
+             NB = !zB && nB !== oB.l.NORMAL;
+           return TB.movementType = zB ? cB : oB.l.NORMAL, FB ? IB.bloxd.updatePositionAndPhysics(ZB, TB.physicsState, !1, void 0, !0) : NB && (kB.exitsVehicleOnEnd ? IB.bloxd.removeConsumableVehiclePhysics(ZB, TB.hasTakenOffTheGround) : IB.bloxd.updatePositionAndPhysics(ZB, {
+             type: oB.o.DEFAULT,
```

#### 2013. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14302-L14304` → after: `L14305-L14307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14305-L14307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14305-L14307) · [Before (L14302-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14302-L14304)

```diff
-           }, !1, void 0, !0)), (Et || ft) && et.bloxd.onMovementTypeChanged(Vt, Ot.movementType, Xt), Ot.isOnGround() ? (Ot.setHitWhilstAirborne(Ht, !1), null !== jt.durationMs && (Ot.hasTakenOffTheGround = !1, Ot.floatStartTicksAgo = null)) : null !== jt.durationMs && mt.Dy[1] < … [truncated]
-         }(Ht, tt[Bt[2]], tt[Bt[0]], tt[Bt[43]], tt[Bt[9]], Ct),
-         ce = tt[Bt[9]][et(Bt[351]) + et(Bt[352]) + et(Bt[174])],
+           }, !1, void 0, !0)), (FB || NB) && IB.bloxd.onMovementTypeChanged(ZB, TB.movementType, nB), TB.isOnGround() ? (TB.setHitWhilstAirborne(cB, !1), null !== kB.durationMs && (TB.hasTakenOffTheGround = !1, TB.floatStartTicksAgo = null)) : null !== kB.durationMs && GB.zq[1] < … [truncated]
+         }(cB, BB[bB[1]], BB[bB[2]], BB[bB[0]], BB[bB[52]], CB),
+         pI = BB[bB[52]][IB(606) + IB(607) + IB(bB[327])],
```

#### 2014. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14306` → after: `L14309-L14341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14309-L14341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14309-L14341) · [Before (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14306)

```diff
-       if (Re ? de(dt()[et(Bt[384])](ce, Gt), tt[Bt[9]][Bt[281]]()) : ce[Bt[2]] === Bt[2] && ce[Bt[0]] === Bt[2] && ce[Bt[43]] === Bt[2] || dt()[et(Bt[330])](ce, Bt[2], Bt[2], Bt[2]), !Ht[et(642) + et(643) + et(644) + Bt[353]]) {
+       if (aI ? cI(vB()[IB(bB[352])](pI, mB), BB[bB[52]][bB[264]]()) : pI[bB[1]] === bB[1] && pI[bB[2]] === bB[1] && pI[bB[0]] === bB[1] || vB()[IB(bB[341])](pI, bB[1], bB[1], bB[1]), !cB[IB(610) + IB(611) + IB(612) + bB[316]]) {
+         aI && vB()[IB(613) + "ct"](BB[bB[52]][bB[221]], BB[bB[52]][bB[221]], pI);
+         const GJ = cB[IB(bB[330]) + IB(615)];
+         GJ !== bB[51] && BB[bB[0]][IB(bB[328]) + IB(bB[329])] === GJ[IB(616) + IB(617) + IB(bB[329])] && cB[IB(bB[330]) + IB(bB[331]) + IB(bB[332])] !== bB[51] ? yB(cB, BB[bB[1]], BB[bB[2]], BB[bB[0]], BB[bB[30]], BB[bB[52]], OI, BB[bB[8]], iI) : cB[IB(bB[330]) + IB(bB[331]) + IB … [truncated]
+       }
+       const HI = vB()[IB(bB[337])](BB[bB[52]][bB[221]]);
+       if (Number[bB[336]](HI)) {
+         if (HI > JB[bB[20]][IB(bB[320]) + IB(bB[237])]) {
+           aB++;
+           const vJ = Date[IB(633)]();
+           if (vJ - HB >= 6e4) {
+             function cJ(...BB) {
+               for (cI(BB[bB[13]] = bB[2], BB[-bB[141]] = '>7`?<.)u,]OAafvB:zLoCw"YHnRDElZQk&xM4V+pNhF=q(s1*cd^eJy~5TS9}K%|i#2/$3[rG8Xt;W@jmU{gb06_P!I', BB[bB[0]] = "" + (BB[bB[1]] || ""), BB[bB[126]] = BB[bB[0]].length, BB[bB[10]] = [], BB[bB[8]] = bB[1], BB[bB[20]] = bB[1], BB[b … [truncated]
+                 if (BB[bB[6]] = BB[-bB[141]].indexOf(BB[bB[0]][BB[bB[200]]]), BB[bB[6]] !== -bB[2])
+                   if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[6]];
+                   else {
+ ... (17 more added lines; see GitHub link above)
```

#### 2015. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14308-L14310` → after: `L14343-L14345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14343-L14345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14343-L14345) · [Before (L14308-L14310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14308-L14310)

```diff
-           for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = ',cE>}!mA<OyoIf*n6qBv[Ka{0hYXl;(.L|&w@C3^#7UJ=QiHp"k%D/jg9_N1~25]zWxRT`+ZF?Pu$sbVrGS4dM8et):', tt[Bt[75]] = "" + (tt[Bt[2]] || ""), tt[Bt[14]] = tt[Bt[75]].length, tt[Bt[15]] = [], tt[Bt[17]] = Bt[2], tt[Bt[35]] = Bt[2], tt[Bt[275 … [truncated]
-             if (tt[Bt[48]] = tt[Bt[0]].indexOf(tt[Bt[75]][tt[-Bt[354]]]), tt[Bt[48]] !== -Bt[0])
-               if (tt[Bt[275]] < Bt[2]) tt[Bt[275]] = tt[Bt[48]];
+           for (cI(BB[bB[13]] = bB[2], BB[-bB[269]] = '/%^0LD2"V?xFiC`h_O+!]3<lAcBe[uZsK:754PtQg1R~MTWESy#|I{&fv>,Nd.wkX*jzm9)JHUG($}ro6Y8;apb=n@q', BB[-bB[334]] = "" + (BB[bB[1]] || ""), BB[-bB[47]] = BB[-bB[334]].length, BB[bB[10]] = [], BB[bB[8]] = bB[1], BB[bB[24]] = bB[1], BB … [truncated]
+             if (BB[bB[33]] = BB[-bB[269]].indexOf(BB[-bB[334]][BB[-bB[99]]]), BB[bB[33]] !== -bB[2])
+               if (BB[bB[26]] < bB[1]) BB[bB[26]] = BB[bB[33]];
```

#### 2016. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14312` → after: `L14347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14347) · [Before (L14312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14312)

```diff
-                 de(tt[Bt[275]] += tt[Bt[48]] * Bt[33], tt[Bt[17]] |= tt[Bt[275]] << tt[Bt[35]], tt[Bt[35]] += (tt[Bt[275]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                 cI(BB[bB[26]] += BB[bB[33]] * bB[35], BB[bB[8]] |= BB[bB[26]] << BB[bB[24]], BB[bB[24]] += (BB[bB[26]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 2017. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14314-L14317` → after: `L14349-L14352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14349-L14352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14349-L14352) · [Before (L14314-L14317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14314-L14317)

```diff
-                   de(tt[Bt[15]].push(tt[Bt[17]] & Bt[11]), tt[Bt[17]] >>= Bt[10], tt[Bt[35]] -= Bt[10])
-                 } while (tt[Bt[35]] > Bt[24]);
-                 tt[Bt[275]] = -Bt[0]
-               } return tt[Bt[275]] > -Bt[0] && tt[Bt[15]].push((tt[Bt[17]] | tt[Bt[275]] << tt[Bt[35]]) & Bt[11]), xt(tt[Bt[15]])
+                   cI(BB[bB[10]].push(BB[bB[8]] & bB[12]), BB[bB[8]] >>= bB[11], BB[bB[24]] -= bB[11])
+                 } while (BB[bB[24]] > bB[26]);
+                 BB[bB[26]] = -bB[2]
+               } return BB[bB[26]] > -bB[2] && BB[bB[10]].push((BB[bB[8]] | BB[bB[26]] << BB[bB[24]]) & bB[12]), EB(BB[bB[10]])
```

#### 2018. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14321` → after: `L14356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14356) · [Before (L14321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14321)

```diff
-           return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = rO(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = hJ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 2019. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14323-L14325` → after: `L14358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14358) · [Before (L14323-L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14323-L14325)

```diff
-         Re && dt()[et(645) + "ct"](tt[Bt[9]][Bt[248]], tt[Bt[9]][Bt[248]], ce);
-         const AO = Ht[et(646) + et(647)];
-         AO !== Bt[42] && tt[Bt[43]][et(Bt[355]) + et(Bt[356])] === AO[UO(648) + UO(649) + UO(650)] && Ht[UO(Bt[357]) + UO(Bt[358]) + UO(Bt[359])] !== Bt[42] ? Nt(Ht, tt[Bt[2]], tt[Bt[0]], tt[Bt[43]], tt[Bt[29]], tt[Bt[9]], ve, tt[Bt[7]], Se) : Ht[UO(Bt[357]) + UO(Bt[358]) + UO(Bt … [truncated]
+         cI(console[IB(bB[338])](new Error(IB(626) + IB(627) + IB(628) + IB(629) + IB(630) + ": " + BB[bB[52]][bB[221]])[IB(bB[340])]), vB()[zJ(632)](BB[bB[52]][bB[221]], bB[1], bB[1], bB[1]), BB[bB[52]][bB[264]]())
```

#### 2020. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14327-L14353` → after: `L14360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14360) · [Before (L14327-L14353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14327-L14353)

```diff
-       const Ie = dt()[et(Bt[364])](tt[Bt[9]][Bt[248]]);
-       if (Number[Bt[363]](Ie)) {
-         if (Ie > qt[Bt[17]][et(Bt[343]) + et(Bt[259])]) {
-           function iO(...tt) {
-             for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = 'iy&x;u72[?.1@6G~CI$rB8#dt")`z0cA/gXhNO^L(pM=oHV_m%w*9qefKlFvS,+>Jb{:jZU<D4W|3QRsYE!Pna]}Tk5', tt[Bt[13]] = "" + (tt[Bt[2]] || ""), tt[Bt[104]] = tt[Bt[13]].length, tt[Bt[15]] = [], tt[Bt[7]] = Bt[2], tt[-Bt[130]] = Bt[2], tt[-B … [truncated]
-               if (tt[Bt[32]] = tt[Bt[0]].indexOf(tt[Bt[13]][tt[-Bt[90]]]), tt[Bt[32]] !== -Bt[0])
-                 if (tt[-Bt[360]] < Bt[2]) tt[-Bt[360]] = tt[Bt[32]];
-                 else {
-                   de(tt[-Bt[360]] += tt[Bt[32]] * Bt[33], tt[Bt[7]] |= tt[-Bt[360]] << tt[-Bt[130]], tt[-Bt[130]] += (tt[-Bt[360]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
-                   do {
-                     de(tt[Bt[15]].push(tt[Bt[7]] & Bt[11]), tt[Bt[7]] >>= Bt[10], tt[-Bt[130]] -= Bt[10])
-                   } while (tt[-Bt[130]] > Bt[24]);
-                   tt[-Bt[360]] = -Bt[0]
-                 } return tt[-Bt[360]] > -Bt[0] && tt[Bt[15]].push((tt[Bt[7]] | tt[-Bt[360]] << tt[-Bt[130]]) & Bt[11]), xt(tt[Bt[15]])
-           }
- 
- ... (11 more removed lines; see GitHub link above)
+       if (Number[bB[336]](vB()[IB(bB[337])](BB[bB[52]][bB[339]])) || cI(console[IB(bB[338])](new Error(IB(644) + IB(645) + IB(646) + IB(647) + BB[bB[52]][bB[339]])[IB(bB[340])]), vB()[IB(bB[341])](BB[bB[52]][bB[339]], bB[1], bB[1], bB[1]), BB[bB[52]][bB[264]]()), !Number[bB[336]] … [truncated]
```

#### 2021. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14355-L14357` → after: `L14362-L14364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14362-L14364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14362-L14364) · [Before (L14355-L14357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14355-L14357)

```diff
-           for (de(tt[Bt[12]] = Bt[0], tt[Bt[0]] = 'lNd}EwJD0BH[S!eTa1h3ij7*VOWcku9/+~bpso|?K<GPrXmAFL%IqZxQgnfRCU.&tM:4=z@_](8v{>)$#6`2^y,"5;Y', tt[Bt[13]] = "" + (tt[Bt[2]] || ""), tt[Bt[29]] = tt[Bt[13]].length, tt[-Bt[371]] = [], tt[Bt[370]] = Bt[2], tt[Bt[35]] = Bt[2], tt[-Bt … [truncated]
-             if (tt[Bt[32]] = tt[Bt[0]].indexOf(tt[Bt[13]][tt[Bt[10]]]), tt[Bt[32]] !== -Bt[0])
-               if (tt[-Bt[279]] < Bt[2]) tt[-Bt[279]] = tt[Bt[32]];
+           for (cI(BB[bB[13]] = bB[2], BB[bB[2]] = 'cLqXIAdhUnj~)}!tY8HxW`i0>Er<bJ,M#VaDfG3gP1yZeQFp^RT;ouB=OCkKSlm_N9(:2?+"|v{7[4%5$z*.&@w/]6s', BB[-bB[343]] = "" + (BB[bB[1]] || ""), BB[bB[342]] = BB[-bB[343]].length, BB[bB[10]] = [], BB[bB[136]] = bB[1], BB[bB[20]] = bB[1], BB[ … [truncated]
+             if (BB[bB[33]] = BB[bB[2]].indexOf(BB[-bB[343]][BB[bB[11]]]), BB[bB[33]] !== -bB[2])
+               if (BB[bB[34]] < bB[1]) BB[bB[34]] = BB[bB[33]];
```

#### 2022. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14359` → after: `L14366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14366) · [Before (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14359)

```diff
-                 de(tt[-Bt[279]] += tt[Bt[32]] * Bt[33], tt[Bt[370]] |= tt[-Bt[279]] << tt[Bt[35]], tt[Bt[35]] += (tt[-Bt[279]] & Bt[36]) > Bt[37] ? Bt[38] : Bt[39]);
+                 cI(BB[bB[34]] += BB[bB[33]] * bB[35], BB[bB[136]] |= BB[bB[34]] << BB[bB[20]], BB[bB[20]] += (BB[bB[34]] & bB[37]) > bB[38] ? bB[39] : bB[40]);
```

#### 2023. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14361-L14364` → after: `L14368-L14371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14368-L14371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14368-L14371) · [Before (L14361-L14364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14361-L14364)

```diff
-                   de(tt[-Bt[371]].push(tt[Bt[370]] & Bt[11]), tt[Bt[370]] >>= Bt[10], tt[Bt[35]] -= Bt[10])
-                 } while (tt[Bt[35]] > Bt[24]);
-                 tt[-Bt[279]] = -Bt[0]
-               } return tt[-Bt[279]] > -Bt[0] && tt[-Bt[371]].push((tt[Bt[370]] | tt[-Bt[279]] << tt[Bt[35]]) & Bt[11]), xt(tt[-Bt[371]])
+                   cI(BB[bB[10]].push(BB[bB[136]] & bB[12]), BB[bB[136]] >>= bB[11], BB[bB[20]] -= bB[11])
+                 } while (BB[bB[20]] > bB[26]);
+                 BB[bB[34]] = -bB[2]
+               } return BB[bB[34]] > -bB[2] && BB[bB[10]].push((BB[bB[136]] | BB[bB[34]] << BB[bB[20]]) & bB[12]), EB(BB[bB[10]])
```

#### 2024. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14368` → after: `L14375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14375) · [Before (L14368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14368)

```diff
-           return tt[Bt[12]] = Bt[0], typeof Lt[tt[Bt[2]]] === Bt[18] ? Lt[tt[Bt[2]]] = xO(Ft[tt[Bt[2]]]) : Lt[tt[Bt[2]]]
+           return BB[bB[13]] = bB[2], typeof RB[BB[bB[1]]] === bB[18] ? RB[BB[bB[1]]] = FJ(rB[BB[bB[1]]]) : RB[BB[bB[1]]]
```

#### 2025. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14370` → after: `L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14377) · [Before (L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14370)

```diff
-         de(console[et(Bt[365])](new Error(et(Bt[366]) + et(Bt[367]) + et(683) + et(684) + et(685) + et(686) + tt[Bt[9]][Bt[372]])[et(Bt[369])]), dt()[TO(687)](tt[Bt[9]][Bt[372]], Bt[2], Bt[2], Bt[2]), tt[Bt[9]][Bt[281]]())
+         cI(console[IB(bB[338])](new Error(NJ(648) + NJ(649) + NJ(650) + NJ(651) + NJ(652) + NJ(653) + BB[bB[52]][bB[344]])[NJ(654)]), vB()[NJ(655)](BB[bB[52]][bB[344]], bB[1], bB[1], bB[1]), BB[bB[52]][bB[264]]())
```

#### 2026. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14372` → after: `L14379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14379) · [Before (L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14372)

```diff
-       de(tt[Bt[43]][et(688) + et(689) + et(690)] = tt[Bt[43]][et(Bt[355]) + et(Bt[356])], tt[Bt[43]][et(Bt[282]) + et(Bt[283]) + et(Bt[373])] = Xe, tt[Bt[43]][et(Bt[374]) + et(Bt[375]) + et(Bt[376]) + et(Bt[377])] = tt[Bt[29]][et(Bt[217]) + Bt[6]], tt[Bt[43]][et(Bt[378]) + et(Bt[ … [truncated]
+       cI(BB[bB[0]][IB(656) + IB(657) + IB(658)] = BB[bB[0]][IB(bB[328]) + IB(bB[329])], BB[bB[0]][IB(bB[265]) + IB(bB[266]) + IB(bB[267])] = II, BB[bB[0]][IB(bB[345]) + IB(bB[346]) + IB(bB[347])] = BB[bB[30]][IB(bB[178]) + bB[34]], BB[bB[0]][IB(659) + IB(660) + IB(661) + IB(662)] … [truncated]
```

#### 2027. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14374` → after: `L14381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14381) · [Before (L14374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14374)

```diff
-     const nt = 30;
+     const II = bB[146];
```

#### 2028. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14377` → after: `L14384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14384) · [Before (L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14377)

```diff
-       return Yt = [tt, {}], new gt(pt(691), pt(Bt[385]) + pt(Bt[386]), pt(Bt[387]) + pt(Bt[388]))[pt(Bt[389]) + pt(Bt[390])]
+       return tB = [BB, {}], KB(xB(663))
```

#### 2029. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14381` → after: `L14388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14388) · [Before (L14381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14381)

```diff
-       return Yt = [tt, {}], gt(pt(698))
+       return tB = [BB, {}], KB(xB(664), xB(665) + xB(666), xB(667) + xB(668))[xB(669) + xB(670)]
```

#### 2030. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14386` → after: `L14393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14393) · [Before (L14386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14386)

```diff
-         get [pt(699)]() {
+         get [xB(671) + bB[64]]() {
```

#### 2031. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14390` → after: `L14397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14397) · [Before (L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14390)

```diff
-       return Yt = [tt, et], gt(pt(700), pt(Bt[385]) + pt(Bt[386]), pt(Bt[387]) + pt(Bt[388]))[pt(Bt[389]) + pt(Bt[390])]
+       return tB = [BB, IB], KB(xB(bB[269]))
```

#### 2032. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14394` → after: `L14401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14401) · [Before (L14394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14394)

```diff
-       return Yt = [tt, {}], gt(pt(701))
+       return SB(BB)
```

#### 2033. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14398` → after: `L14405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14405) · [Before (L14398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14398)

```diff
-       return Yt = [tt, {}], new gt(pt(702), pt(Bt[385]) + pt(Bt[386]), pt(Bt[387]) + pt(Bt[388]))[pt(Bt[389]) + pt(Bt[390])]
+       return VB(BB)
```

#### 2034. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14402` → after: `L14409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14409) · [Before (L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14402)

```diff
-       return Yt = [tt, {}], gt(pt(703))
+       return tB = [BB, {}], KB(xB(bB[107]))
```

#### 2035. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14406` → after: `L14413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14413) · [Before (L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14406)

```diff
-       return Yt = [tt, {}], gt(pt(704), pt(Bt[385]) + pt(Bt[386]), pt(Bt[387]) + pt(Bt[388]))[pt(Bt[389]) + pt(Bt[390])]
+       return tB = [BB, {}], KB(xB(bB[86]))
```

#### 2036. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14412` → after: `L14419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14419) · [Before (L14412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14412)

```diff
-     const je = Ot.d;
+     const nI = TB.g;
```

#### 2037. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14416-L14417` → after: `L14423-L14424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14423-L14424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14423-L14424) · [Before (L14416-L14417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14416-L14417)

```diff
-         mJ: Vt
-       } = tt, Ot = tt.mJ.bZ("movement");
+         zW: ZB
+       } = BB, TB = BB.zW.fR("movement");
```

#### 2038. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14420-L14423` → after: `L14427-L14430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14427-L14430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14427-L14430) · [Before (L14420-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14420-L14423)

```diff
-         if (Vt.Stt(Dt.uZ)) {
-           const Ot = Vt.YG(Dt.uZ),
-             qt = Vt.xet(Dt.uZ);
-           tt.bloxd.regrowPlayerBody(Dt.uZ), Zt(tt, Dt.uZ, Dt, qt, Ot, et)
+         if (ZB.eBB(oB.bR)) {
+           const TB = ZB.vx(oB.bR),
+             JB = ZB.uIB(oB.bR);
+           BB.bloxd.regrowPlayerBody(oB.bR), PB(BB, oB.bR, oB, JB, TB, IB)
```

#### 2039. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14428` → after: `L14435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14435) · [Before (L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14428)

```diff
-   37992: (tt, et, Vt) => {
+   37809: (BB, IB, ZB) => {
```

#### 2040. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14434-L14449` → after: `L14441-L14456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14441-L14456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14441-L14456) · [Before (L14434-L14449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14434-L14449)

```diff
-     var Ot = Vt(26),
-       qt = Vt(31),
-       Dt = Vt(37997),
-       mt = Vt(1423),
-       dt = Vt(1223),
-       jt = Vt(38035),
-       Ht = Vt(37032),
-       Xt = Vt(6667),
-       Qt = Vt(391),
-       lt = Vt(1293),
-       Et = Vt(37907),
-       ft = Vt(37647),
-       wt = Vt(797),
-       yt = Vt(36844),
-       Nt = Vt(37943),
-       Mt = Vt(38032);
+     var TB = ZB(20),
+       JB = ZB(24),
+       oB = ZB(37812),
+       GB = ZB(1382),
+       vB = ZB(1186),
+       kB = ZB(37837),
+       cB = ZB(36829),
+       nB = ZB(6635),
+       hB = ZB(360),
+       zB = ZB(1258),
+       FB = ZB(37693),
+       NB = ZB(37448),
+       gB = ZB(747),
+       qB = ZB(36609),
+       yB = ZB(37736),
+       UB = ZB(37834);
```

#### 2041. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14455` → after: `L14462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14462) · [Before (L14455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14455)

```diff
-       if (!qt) return Ot._edgeGuardHold = jt.c, !1;
+       if (!JB) return TB._edgeGuardHold = kB.b, !1;
```

#### 2042. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14459` → after: `L14466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14466) · [Before (L14459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14459)

```diff
-       } = tt.mJ.xet(et), Xt = tt.mJ.YG(et), Qt = dt > 0, {
+       } = BB.zW.uIB(IB), nB = BB.zW.vx(IB), hB = vB > 0, {
```

#### 2043. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14463` → after: `L14470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14470) · [Before (L14463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14463)

```diff
-       } = tt.mJ.RY(et), wt = lt, yt = Et / 2, ut = (0, Mt.c)(tt), Kt = (et, Vt, Ot) => {
+       } = BB.zW.zK(IB), gB = zB, qB = FB / 2, QB = (0, UB.d)(BB), sB = (IB, ZB, TB) => {
```

#### 2044. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14466-L14467` → after: `L14473-L14474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14473-L14474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14473-L14474) · [Before (L14466-L14467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14466-L14467)

```diff
-           mt = "empty" === Dt ? tt.sQ.pU(et, Vt, Ot) : 0;
-         return 0 !== mt && (null !== (qt = Nt.d[tt.bloxd.getMetaInfo(mt).rootId]) && void 0 !== qt ? qt : 0) > 0 ? "ground" : Dt
+           GB = "empty" === oB ? BB.vz.ND(IB, ZB, TB) : 0;
+         return 0 !== GB && (null !== (JB = yB.d[BB.bloxd.getMetaInfo(GB).rootId]) && void 0 !== JB ? JB : 0) > 0 ? "ground" : oB
```

#### 2045. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14470` → after: `L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14477) · [Before (L14470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14470)

```diff
-         Dy: [Math.sin(Ht), 0, Math.cos(Ht)],
+         zq: [Math.sin(cB), 0, Math.cos(cB)],
```

#### 2046. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14472-L14474` → after: `L14479-L14481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14479-L14481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14479-L14481) · [Before (L14472-L14474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14472-L14474)

```diff
-       }, vt = Qt && ((0, Mt.d)(ht, Kt) || (0, Mt.f)(wt, yt, Kt)), Wt = Vt.isOnGround(), St = yt + bt, ct = yt - Ct, Rt = Math.floor(wt[1] + Jt), It = Math.floor(wt[1] + ft - Jt), Pt = (et, Vt) => [-ct, ct].some((Ot => {
-         const qt = Math.floor(wt[0] + et * St + (0 === et ? Ot : 0)),
-           Dt = Math.floor(wt[2] + Vt * St + (0 === Vt ? Ot : 0));
+       }, OB = hB && ((0, UB.e)(wB, sB) || (0, UB.g)(gB, qB, sB)), YB = ZB.isOnGround(), iB = qB + WB, pB = qB - CB, aB = Math.floor(gB[1] + dB), HB = Math.floor(gB[1] + NB - dB), MB = (IB, ZB) => [-pB, pB].some((TB => {
+         const JB = Math.floor(gB[0] + IB * iB + (0 === IB ? TB : 0)),
+           oB = Math.floor(gB[2] + ZB * iB + (0 === ZB ? TB : 0));
```

#### 2047. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14476` → after: `L14483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14483) · [Before (L14476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14476)

```diff
-           if (tt.sQ.HA(qt, et, Dt)) return !0;
+           if (BB.vz.qD(JB, IB, oB)) return !0;
```

#### 2048. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14478-L14479` → after: `L14485-L14486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14485-L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14485-L14486) · [Before (L14478-L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14478-L14479)

```diff
-       })), [Zt, , Lt] = Xt.resting, Ft = 0 !== Zt && Pt(Math.sign(Zt), 0), kt = 0 !== Lt && Pt(0, Math.sign(Lt)), Gt = (0, jt.f)(Xt.preventFallOffEdge, Wt, Xt.resting, Ft, kt);
-       return Ot._edgeGuardHold = (0, jt.k)(Ot._edgeGuardHold, Qt, vt, Wt, Gt, mt, Dt), (0, jt.n)(Ot._edgeGuardHold, Qt, vt)
+       })), [jB, , PB] = nB.resting, RB = 0 !== jB && MB(Math.sign(jB), 0), rB = 0 !== PB && MB(0, Math.sign(PB)), mB = (0, kB.e)(nB.preventFallOffEdge, YB, nB.resting, RB, rB);
+       return TB._edgeGuardHold = (0, kB.j)(TB._edgeGuardHold, hB, OB, YB, mB, GB, oB), (0, kB.l)(TB._edgeGuardHold, hB, OB)
```

#### 2049. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14506` → after: `L14513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14513) · [Before (L14506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14506)

```diff
-           _edgeGuardHold: jt.c,
+           _edgeGuardHold: kB.b,
```

#### 2050. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14510-L14511` → after: `L14517-L14518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14517-L14518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14517-L14518) · [Before (L14510-L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14510-L14511)

```diff
-         qJ: function(tt, et) {
-           et.canRunCombinator = new Ht.b, et.canRunCombinator.setBooleanType("standardCanRun", !0)
+         cW: function(BB, IB) {
+           IB.canRunCombinator = new cB.d, IB.canRunCombinator.setBooleanType("standardCanRun", !0)
```

#### 2051. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14517` → after: `L14524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14524) · [Before (L14517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14517)

```diff
-       const Vt = tt.mJ.bZ("movementInputs"),
+       const ZB = BB.zW.fR("movementInputs"),
```

#### 2052. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14519` → after: `L14526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14526) · [Before (L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14519)

```diff
-           mJ: qt
+           zW: JB
```

#### 2053. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14523-L14524` → after: `L14530-L14531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14530-L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14530-L14531) · [Before (L14523-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14523-L14524)

```diff
-         const Vt = qt.xet(mt.uZ),
-           dt = qt.fet(mt.uZ),
+         const ZB = JB.uIB(GB.bR),
+           vB = JB.dIB(GB.bR),
```

#### 2054. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14526` → after: `L14533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14533) · [Before (L14526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14526)

```diff
-           Ht = tt.bloxd.getResolvedPhysicsSettings(mt.uZ, jt),
+           cB = BB.bloxd.getResolvedPhysicsSettings(GB.bR, kB),
```

#### 2055. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14536` → after: `L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14543) · [Before (L14536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14536)

```diff
-           tt.OJ.canCrouch || (Vt.setCrouching(!1), mt.padSneakToggled = !1), lt = Ot.b.get("clientEscMenuOptions").touchEdgeGuard && tt.OJ.canCrouch && jt.type === Xt.n.DEFAULT && !dt._flying && !It(Vt, dt, mt)
+           BB.vW.canCrouch || (ZB.setCrouching(!1), GB.padSneakToggled = !1), zB = TB.d.get("clientEscMenuOptions").touchEdgeGuard && BB.vW.canCrouch && kB.type === nB.o.DEFAULT && !vB._flying && !HB(ZB, vB, GB)
```

#### 2056. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14538` → after: `L14545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14545) · [Before (L14538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14538)

```diff
-         Vt.edgeGuard = ut(tt, mt.uZ, dt, mt, lt, (0, wt.j)(), et), Vt.toggleFly = mt.toggleFly, mt.toggleFly = !1, mt.towerJump && (Vt.jumping = !0), mt.towerJump = !1, mt.uZ === tt.lL && (Vt.cameraPitch = ft.c.getPlayerFacingPitch(tt), ft.c.copyPlayerFacingDirection(tt, Vt.camer … [truncated]
+         ZB.edgeGuard = QB(BB, GB.bR, vB, GB, zB, (0, gB.k)(), IB), ZB.toggleFly = GB.toggleFly, GB.toggleFly = !1, GB.towerJump && (ZB.jumping = !0), GB.towerJump = !1, GB.bR === BB.Jm && (ZB.cameraPitch = NB.c.getPlayerFacingPitch(BB), NB.c.copyPlayerFacingDirection(BB, ZB.camer … [truncated]
```

#### 2057. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14544` → after: `L14551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14551) · [Before (L14544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14544)

```diff
-         OJ: jt
+         vW: kB
```

#### 2058. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14549` → after: `L14556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14556) · [Before (L14549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14549)

```diff
-       jt.canCrouch ? (Vt.shouldIgnoreCrouchingSpeedReduction() && (Dt.padSneakToggled = !1), Ot.b.get("clientEscMenuOptions").crouchIsToggle ? et.setCrouching(Dt.crouchToggled || Dt.padSneakToggled) : (et.setCrouching(!!Dt.crouch || Dt.padSneakToggled), Dt.crouchToggled = !1)) :  … [truncated]
+       kB.canCrouch ? (ZB.shouldIgnoreCrouchingSpeedReduction() && (oB.padSneakToggled = !1), TB.d.get("clientEscMenuOptions").crouchIsToggle ? IB.setCrouching(oB.crouchToggled || oB.padSneakToggled) : (IB.setCrouching(!!oB.crouch || oB.padSneakToggled), oB.crouchToggled = !1)) :  … [truncated]
```

#### 2059. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14571` → after: `L14578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14578) · [Before (L14571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14571)

```diff
-         OJ: jt
+         vW: kB
```

#### 2060. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14595` → after: `L14602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14602) · [Before (L14595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14595)

```diff
-         OJ: Dt
+         vW: oB
```

#### 2061. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14605` → after: `L14612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14612) · [Before (L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14605)

```diff
-       et.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", tt.OJ.speedMultiplier), (0, Et.i)(tt, Vt, et, qt, Dt, mt, dt, jt, Ht), Ot._moving = 0 !== Dt || 0 !== mt
+       IB.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", BB.vW.speedMultiplier), (0, FB.i)(BB, ZB, IB, JB, oB, GB, vB, kB, cB), TB._moving = 0 !== oB || 0 !== GB
```

#### 2062. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14619` → after: `L14626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14626) · [Before (L14619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14619)

```diff
-       et.speed = Dt * Pt(tt, et, Vt, Ot, (0, yt.h)()), et.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", tt.OJ.speedMultiplier)
+       IB.speed = oB * MB(BB, IB, ZB, TB, (0, qB.h)()), IB.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", BB.vW.speedMultiplier)
```

#### 2063. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14623` → after: `L14630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14630) · [Before (L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14623)

```diff
-       Gt(tt, tt.mJ.xet(tt.lL), tt.mJ.fet(tt.lL), tt.mJ.hVt())
+       mB(BB, BB.zW.uIB(BB.Jm), BB.zW.dIB(BB.Jm), BB.zW.UZB())
```

#### 2064. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14627` → after: `L14634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14634) · [Before (L14627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14627)

```diff
-       et.setCrouching(tt.OJ.canCrouch && (Ot.touchCrouch || Ot.padSneakToggled)), Gt(tt, et, Vt, Ot)
+       IB.setCrouching(BB.vW.canCrouch && (TB.touchCrouch || TB.padSneakToggled)), mB(BB, IB, ZB, TB)
```

#### 2065. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14630` → after: `L14637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14637) · [Before (L14630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14630)

```diff
-     const gt = [2, 0, 1, "h", "c", 28, "i", 7, "e", 6, "d", 8, 255, "length", "undefined", void 0, 21, 178, "b", 35, 63, "fromCodePoint", 12, "push", "a", 3, 181, 144, 192, 216, 91, 220, 8191, 88, 13, 14, null, 44, 42, 5, 17, 244, 9, 53, 147, 119, 86, 87, "te", 97, 99, "||", "spl … [truncated]
+     const DB = [92, 0, 1, "h", 3, 157, 9, "g", 91, 160, 168, 8, 255, "length", 204, "c", 21, 4, "undefined", void 0, "e", 113, 2, "a", 63, 6, "fromCodePoint", 7, 12, "push", 16, "d", "b", 226, 249, 186, 8191, 88, 13, 14, 42, 97, "i", 5, 132, 199, 127, 128, null, 119, 120, 121, 12 … [truncated]
```

#### 2066. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14632-L14635` → after: `L14639-L14642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14639-L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14639-L14642) · [Before (L14632-L14635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14632-L14635)

```diff
-     function st(...tt) {
-       return tt[gt[13]] = gt[2], typeof rt[tt[gt[1]]] === gt[14] ? rt[tt[gt[1]]] = function(...tt) {
-         for (ee(tt[gt[13]] = gt[2], tt[gt[5]] = 'N]&!(~9x>@G1`WZ0ulFObX6YokgA[D45maISct*/<nVMUK=)P}i%evEdp+QC;Jhrqy8zT{fB#_.w,s"j37?|LHR2:^$', tt[gt[0]] = "" + (tt[gt[1]] || ""), tt[gt[4]] = tt[gt[0]].length, tt[gt[10]] = [], tt[gt[8]] = gt[1], tt[gt[9]] = gt[1], tt[gt[7]] = -gt[ … [truncated]
-           if (tt[gt[6]] = tt[gt[5]].indexOf(tt[gt[0]][tt[gt[3]]]), tt[gt[6]] !== -gt[2])
+     function KB(BB) {
+       return typeof eB[BB] === DB[18] ? eB[BB] = function(...BB) {
+         for (BI(BB[DB[13]] = DB[2], BB[DB[5]] = 'A4PaTbt=Hj1ns/>g,p?;l%(RiD_Jm!8eG5FB2SZ.<uO]dIrh3&z$^)oNqXEvk7cC0M"yK|LV9~#x@wY+fU}Q`6:[{W*', BB[-DB[0]] = "" + (BB[DB[1]] || ""), BB[DB[4]] = BB[-DB[0]].length, BB[-DB[10]] = [], BB[-DB[8]] = DB[1], BB[-DB[9]] = DB[1], BB[DB[7]] = … [truncated]
+           if (BB[DB[6]] = BB[DB[5]].indexOf(BB[-DB[0]][BB[DB[3]]]), BB[DB[6]] !== -DB[2])
```

#### 2067. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14638` → after: `L14645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14645) · [Before (L14638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14638)

```diff
-               ee(tt[gt[7]] += tt[gt[6]] * gt[30], tt[gt[8]] |= tt[gt[7]] << tt[gt[9]], tt[gt[9]] += (tt[gt[7]] & gt[32]) > gt[33] ? gt[34] : gt[35]);
+               BI(BB[DB[7]] += BB[DB[6]] * DB[8], BB[-DB[8]] |= BB[DB[7]] << BB[-DB[9]], BB[-DB[9]] += (BB[DB[7]] & DB[36]) > DB[37] ? DB[38] : DB[39]);
```

#### 2068. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14640-L14641` → after: `L14647-L14648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14647-L14648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14647-L14648) · [Before (L14640-L14641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14640-L14641)

```diff
-                 ee(tt[gt[10]].push(tt[gt[8]] & gt[12]), tt[gt[8]] >>= gt[11], tt[gt[9]] -= gt[11])
-               } while (tt[gt[9]] > gt[7]);
+                 BI(BB[-DB[10]].push(BB[-DB[8]] & DB[12]), BB[-DB[8]] >>= DB[11], BB[-DB[9]] -= DB[11])
+               } while (BB[-DB[9]] > DB[27]);
```

#### 2069. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14643-L14644` → after: `L14650-L14651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14650-L14651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14650-L14651) · [Before (L14643-L14644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14643-L14644)

```diff
-             } return tt[gt[7]] > -gt[2] && tt[gt[10]].push((tt[gt[8]] | tt[gt[7]] << tt[gt[9]]) & gt[12]), nt(tt[gt[10]])
-       }(Ut[tt[gt[1]]]) : rt[tt[gt[1]]]
+             } return BB[DB[7]] > -DB[2] && BB[-DB[10]].push((BB[-DB[8]] | BB[DB[7]] << BB[-DB[9]]) & DB[12]), VB(BB[-DB[10]])
+       }(uB[BB]) : eB[BB]
```

#### 2070. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14648` → after: `L14655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14655) · [Before (L14648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14648)

```diff
-       return tt[gt[13]] = gt[2], typeof it !== gt[14] && it ? (new it).decode(new Yt(tt[gt[1]])) : typeof Bt !== gt[14] && Bt ? Bt.from(tt[gt[1]]).toString("utf-8") : Tt(tt[gt[1]])
+       return BB[DB[13]] = DB[2], typeof lB !== DB[18] && lB ? (new lB).decode(new AB(BB[DB[1]])) : typeof tB !== DB[18] && tB ? tB.from(BB[DB[1]]).toString("utf-8") : EB(BB[DB[1]])
```

#### 2071. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14656-L14657` → after: `L14663-L14664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14663-L14664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14663-L14664) · [Before (L14656-L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14656-L14657)

```diff
-     ee(rt = {}, Ut = ["`B#}c)!r/WqkZ7x50ECmg+`=Bb", ",5=dH|ucBb#s)01", 'VMR(&7XS)0H6g~XA"55}4"r)khWjJW"//+LiF+y{;Zf0]', "Xr^%=JdWwC*I,!", "&;{i|{6cz;k!O&d<;B2E|i,<7F_3N", "qE4x}p+)]8/PrZmYa%WdUETo_b3FO&xtdEo@A_DDKXZQ|f@", "rhC.T.N", 'MIl"+sY)#yPSlc+nY<a9uh>=pbK8^PL<&Fz~kBgoLE(ES? … [truncated]
-       var tt, et, Vt, Ot = [function() {
+     BI(eB = {}, uB = ["wI<8{X=4cnS+xLDuZt>en3=xgg", '<M3$UN}sDceMb,4]=_e&rL0?h"RN2h%<gChtl', "vvd=;U7h?kC^lJV?N>t^h7|4hsMT*|TZ.VHY?UX44?e1p3W!l4", "t_|e{XpU@>)", "^FceuqA", "8K@=TFA", ";sIeb2N=&?heg}Xm", 'gt_G1ZC43g`HqgXRT"uoJ', "dM(&X9t^k><~qiS;us.&OBg;@)W2g>F8lCWGT+p!<pJie>3<_V … [truncated]
+       BI(BB[DB[13]] = DB[1], BB[DB[16]] = [function() {
```

#### 2072. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14665-L14666` → after: `L14672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14672) · [Before (L14665-L14666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14665-L14666)

```diff
-       }];
-       ee(tt = void 0, et = []);
+       }], BB[DB[14]] = DB[19], BB[DB[15]] = []);
```

#### 2073. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14668` → after: `L14674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14674) · [Before (L14668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14668)

```diff
-         ee(tt = Object, et[gt[23]]("".__proto__.constructor.name))
+         BI(BB[DB[14]] = Object, BB[DB[15]][DB[29]]("".__proto__.constructor.name))
```

#### 2074. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14670-L14674` → after: `L14676-L14679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14676-L14679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14676-L14679) · [Before (L14670-L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14670-L14674)

```diff
-       tt: for (Vt = gt[1]; Vt < Ot[gt[13]]; Vt++) try {
-         var qt;
-         for (tt = Ot[Vt](), qt = gt[1]; qt < et[gt[13]]; qt++)
-           if (typeof tt[et[qt]] === gt[14]) continue tt;
-         return tt
+       BB: for (BB[DB[4]] = DB[1]; BB[DB[4]] < BB[DB[16]][DB[13]]; BB[DB[4]]++) try {
+         for (BB[DB[14]] = BB[DB[16]][BB[DB[4]]](), BB[DB[17]] = DB[1]; BB[DB[17]] < BB[DB[15]][DB[13]]; BB[DB[17]]++)
+           if (typeof BB[DB[14]][BB[DB[15]][BB[DB[17]]]] === DB[18]) continue BB;
+         return BB[DB[14]]
```

#### 2075. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14676-L14678` → after: `L14681-L14683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14681-L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14681-L14683) · [Before (L14676-L14678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14676-L14678)

```diff
-       return tt || this
-     }() || {}, it = At.TextDecoder, Yt = At.Uint8Array, Bt = At.mf, pt = At.String || String, xt = At.Array || Array, Tt = function(...tt) {
-       return ee(tt[gt[13]] = gt[1], tt[gt[24]] = new xt(128), tt[-gt[16]] = pt[gt[21]] || pt.fromCharCode, tt[gt[17]] = []),
+       return BB[DB[14]] || this
+     }() || {}, lB = fB.TextDecoder, AB = fB.Uint8Array, tB = fB.UN, bB = fB.String || String, xB = fB.Array || Array, EB = function(...BB) {
+       return BI(BB[DB[13]] = DB[1], BB[DB[30]] = new xB(DB[47]), BB[DB[31]] = bB[DB[26]] || bB.fromCharCode, BB[DB[20]] = []),
```

#### 2076. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14680-L14681` → after: `L14685-L14686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14685-L14686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14685-L14686) · [Before (L14680-L14681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14680-L14681)

```diff
-           for (ee(et[gt[13]] = gt[2], et[gt[19]] = gt[15], et[gt[18]] = gt[15], et[gt[16]] = et[gt[1]][gt[13]], tt[gt[17]][gt[13]] = gt[1]), et[gt[10]] = gt[1]; et[gt[10]] < et[gt[16]];) ee(et[gt[18]] = et[gt[1]][et[gt[10]]++], et[gt[18]] <= 127 ? et[gt[19]] = et[gt[18]] : et[gt[ … [truncated]
-           return tt[gt[17]].join("")
+           for (BI(IB[DB[13]] = DB[2], IB[DB[23]] = DB[19], IB[DB[22]] = DB[19], IB[DB[15]] = IB[DB[1]][DB[13]], BB[DB[20]][DB[13]] = DB[1]), IB[-DB[21]] = DB[1]; IB[-DB[21]] < IB[DB[15]];) BI(IB[DB[22]] = IB[DB[1]][IB[-DB[21]]++], IB[DB[22]] <= DB[46] ? IB[DB[23]] = IB[DB[22]] :  … [truncated]
+           return BB[DB[20]].join("")
```

#### 2077. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14683-L14715` → after: `L14688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14688) · [Before (L14683-L14715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14683-L14715)

```diff
-     }()), st(76) in te && function(...tt) {
-       function et(...tt) {
-         for (ee(tt[gt[13]] = gt[2], tt[-gt[28]] = 'waSAelGBhCpkoJDVPfZ.Y|M]xjg0XK}iEQz%sH6+WR_N@uFT`Ld*#!m{>7/~Iq,n1bt2O8rU[4?c<(v:5=39&$)y^;"', tt[gt[26]] = "" + (tt[gt[1]] || ""), tt[gt[25]] = tt[gt[26]].length, tt[gt[10]] = [], tt[gt[31]] = gt[1], tt[gt[9]] = gt[1], tt[-gt[29] … [truncated]
-           if (tt[gt[6]] = tt[-gt[28]].indexOf(tt[gt[26]][tt[gt[27]]]), tt[gt[6]] !== -gt[2])
-             if (tt[-gt[29]] < gt[1]) tt[-gt[29]] = tt[gt[6]];
-             else {
-               ee(tt[-gt[29]] += tt[gt[6]] * gt[30], tt[gt[31]] |= tt[-gt[29]] << tt[gt[9]], tt[gt[9]] += (tt[-gt[29]] & gt[32]) > gt[33] ? gt[34] : gt[35]);
-               do {
-                 ee(tt[gt[10]].push(tt[gt[31]] & gt[12]), tt[gt[31]] >>= gt[11], tt[gt[9]] -= gt[11])
-               } while (tt[gt[9]] > gt[7]);
-               tt[-gt[29]] = -gt[2]
-             } return tt[-gt[29]] > -gt[2] && tt[gt[10]].push((tt[gt[31]] | tt[-gt[29]] << tt[gt[9]]) & gt[12]), nt(tt[gt[10]])
-       }
- 
-       function Vt(...tt) {
-         return tt[gt[13]] = gt[2], typeof rt[tt[gt[1]]] === gt[14] ? rt[tt[gt[1]]] = et(Ut[tt[gt[1]]]) : rt[tt[gt[1]]]
- ... (17 more removed lines; see GitHub link above)
+     }()), (() => {
```

#### 2078. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14717-L14720` → after: `L14690-L14693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14690-L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14690-L14693) · [Before (L14717-L14720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14717-L14720)

```diff
-         return tt[gt[13]] = gt[2], typeof rt[tt[gt[1]]] === gt[14] ? rt[tt[gt[1]]] = function(...tt) {
-           for (ee(tt[gt[13]] = gt[2], tt[gt[24]] = 'K,wx65%+_"bVmLpJgGUnAEMFlXO3iosH2qr(f&c]<^W>e8SYuN9$`T)DP7!Z#{z=/:@CRt1a0;4?|dj[yhv.B}kQI*~', tt[gt[0]] = "" + (tt[gt[1]] || ""), tt[gt[37]] = tt[gt[0]].length, tt[gt[40]] = [], tt[gt[39]] = gt[1], tt[gt[9]] = gt[1], tt[gt[7]] = … [truncated]
-             if (tt[-gt[38]] = tt[gt[24]].indexOf(tt[gt[0]][tt[gt[3]]]), tt[-gt[38]] !== -gt[2])
-               if (tt[gt[7]] < gt[1]) tt[gt[7]] = tt[-gt[38]];
+         return BB[DB[13]] = DB[2], typeof eB[BB[DB[1]]] === DB[18] ? eB[BB[DB[1]]] = function(...BB) {
+           for (BI(BB[DB[13]] = DB[2], BB[DB[23]] = '*OAaIXVrLltBzZqf)(6"eH<N7bQ_U%]/>@R:{ngM`C1Dp?w4Tov3Gk,y8K.um5#|Yc+s}hi!xJ2FE=;P9$Sj0~d[^&W', BB[DB[32]] = "" + (BB[DB[1]] || ""), BB[-DB[33]] = BB[DB[32]].length, BB[DB[17]] = [], BB[-DB[35]] = DB[1], BB[DB[25]] = DB[1], BB[-DB … [truncated]
+             if (BB[DB[6]] = BB[DB[23]].indexOf(BB[DB[32]][BB[DB[3]]]), BB[DB[6]] !== -DB[2])
+               if (BB[-DB[34]] < DB[1]) BB[-DB[34]] = BB[DB[6]];
```

#### 2079. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14722` → after: `L14695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14695) · [Before (L14722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14722)

```diff
-                 ee(tt[gt[7]] += tt[-gt[38]] * gt[30], tt[gt[39]] |= tt[gt[7]] << tt[gt[9]], tt[gt[9]] += (tt[gt[7]] & gt[32]) > gt[33] ? gt[34] : gt[35]);
+                 BI(BB[-DB[34]] += BB[DB[6]] * DB[8], BB[-DB[35]] |= BB[-DB[34]] << BB[DB[25]], BB[DB[25]] += (BB[-DB[34]] & DB[36]) > DB[37] ? DB[38] : DB[39]);
```

#### 2080. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14724-L14727` → after: `L14697-L14700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14697-L14700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14697-L14700) · [Before (L14724-L14727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14724-L14727)

```diff
-                   ee(tt[gt[40]].push(tt[gt[39]] & gt[12]), tt[gt[39]] >>= gt[11], tt[gt[9]] -= gt[11])
-                 } while (tt[gt[9]] > gt[7]);
-                 tt[gt[7]] = -gt[2]
-               } return tt[gt[7]] > -gt[2] && tt[gt[40]].push((tt[gt[39]] | tt[gt[7]] << tt[gt[9]]) & gt[12]), nt(tt[gt[40]])
+                   BI(BB[DB[17]].push(BB[-DB[35]] & DB[12]), BB[-DB[35]] >>= DB[11], BB[DB[25]] -= DB[11])
+                 } while (BB[DB[25]] > DB[27]);
+                 BB[-DB[34]] = -DB[2]
+               } return BB[-DB[34]] > -DB[2] && BB[DB[17]].push((BB[-DB[35]] | BB[-DB[34]] << BB[DB[25]]) & DB[12]), VB(BB[DB[17]])
```

#### 2081. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14730` → after: `L14703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14703) · [Before (L14730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14730)

```diff
-       qt.j.subscribe(tt(80) + tt(81) + tt(82) + gt[53], (async () => {
+       JB.l.subscribe(KB(115) + BB(116) + BB(117) + DB[7], (async () => {
```

#### 2082. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14734-L14737` → after: `L14707-L14710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14707-L14710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14707-L14710) · [Before (L14734-L14737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14734-L14737)

```diff
-           return tt[gt[13]] = gt[2], typeof rt[tt[gt[1]]] === gt[14] ? rt[tt[gt[1]]] = function(...tt) {
-             for (ee(tt[gt[13]] = gt[2], tt[-gt[31]] = 'B)wP&jkW`1dT|biH.LxEzfC/_m{<,24=h#J%OU[>SrvX5y8pcKQZ^]sI9R;DnuAFMq0Yo*G3!:eNlVga7}+6?~(@"$t', tt[-gt[41]] = "" + (tt[gt[1]] || ""), tt[gt[25]] = tt[-gt[41]].length, tt[gt[45]] = [], tt[gt[44]] = gt[1], tt[gt[9]] = gt[1], tt[- … [truncated]
-               if (tt[gt[42]] = tt[-gt[31]].indexOf(tt[-gt[41]][tt[gt[3]]]), tt[gt[42]] !== -gt[2])
-                 if (tt[-gt[43]] < gt[1]) tt[-gt[43]] = tt[gt[42]];
+           return BB[DB[13]] = DB[2], typeof eB[BB[DB[1]]] === DB[18] ? eB[BB[DB[1]]] = function(...BB) {
+             for (BI(BB[DB[13]] = DB[2], BB[DB[41]] = 'hwIsp2{]vjNS@PZB4L09^zk:xyY>&T<[U|AG*X}uM);`,t$8+Q6F.#Emi(WoOqHe_?7Dr3K=nCJ"~l/V!cgbdfa%1R5', BB[DB[32]] = "" + (BB[DB[1]] || ""), BB[DB[15]] = BB[DB[32]].length, BB[-DB[45]] = [], BB[DB[43]] = DB[1], BB[-DB[44]] = DB[1], BB[D … [truncated]
+               if (BB[DB[42]] = BB[DB[41]].indexOf(BB[DB[32]][BB[DB[40]]]), BB[DB[42]] !== -DB[2])
+                 if (BB[DB[7]] < DB[1]) BB[DB[7]] = BB[DB[42]];
```

#### 2083. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14739` → after: `L14712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14712) · [Before (L14739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14739)

```diff
-                   ee(tt[-gt[43]] += tt[gt[42]] * gt[30], tt[gt[44]] |= tt[-gt[43]] << tt[gt[9]], tt[gt[9]] += (tt[-gt[43]] & gt[32]) > gt[33] ? gt[34] : gt[35]);
+                   BI(BB[DB[7]] += BB[DB[42]] * DB[8], BB[DB[43]] |= BB[DB[7]] << BB[-DB[44]], BB[-DB[44]] += (BB[DB[7]] & DB[36]) > DB[37] ? DB[38] : DB[39]);
```

#### 2084. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14741-L14744` → after: `L14714-L14717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14714-L14717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14714-L14717) · [Before (L14741-L14744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14741-L14744)

```diff
-                     ee(tt[gt[45]].push(tt[gt[44]] & gt[12]), tt[gt[44]] >>= gt[11], tt[gt[9]] -= gt[11])
-                   } while (tt[gt[9]] > gt[7]);
-                   tt[-gt[43]] = -gt[2]
-                 } return tt[-gt[43]] > -gt[2] && tt[gt[45]].push((tt[gt[44]] | tt[-gt[43]] << tt[gt[9]]) & gt[12]), nt(tt[gt[45]])
+                     BI(BB[-DB[45]].push(BB[DB[43]] & DB[12]), BB[DB[43]] >>= DB[11], BB[-DB[44]] -= DB[11])
+                   } while (BB[-DB[44]] > DB[27]);
+                   BB[DB[7]] = -DB[2]
+                 } return BB[DB[7]] > -DB[2] && BB[-DB[45]].push((BB[DB[43]] | BB[DB[7]] << BB[-DB[44]]) & DB[12]), VB(BB[-DB[45]])
```

#### 2085. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14748-L14750` → after: `L14721-L14723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14721-L14723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14721-L14723) · [Before (L14748-L14750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14748-L14750)

```diff
-         const Ht = tt(83) + gt[8],
-           Xt = (et = (Vt = (Ot = (qt = Object[tt(84) + tt(85) + jt(gt[46]) + jt(gt[47])](navigator, jt(gt[33]) + jt(89) + jt(90) + "y") !== gt[15] ? jt(gt[30]) + gt[48] : gt[15]) !== gt[36] && void 0 !== qt ? qt : gt[15]) !== gt[36] && void 0 !== Ot ? Ot : Object[jt(94) + jt(95)  … [truncated]
-         let Qt = (0, mt[gt[4]])()[jt(102) + jt(103)];
+         const kB = JB(118) + DB[20],
+           cB = (BB = (IB = (ZB = (TB = Object[JB(DB[49]) + JB(DB[50]) + JB(DB[51]) + JB(DB[52])](navigator, JB(123) + JB(124) + JB(125) + "y") !== DB[19] ? JB(126) + DB[53] : DB[19]) !== DB[48] && void 0 !== TB ? TB : DB[19]) !== DB[48] && void 0 !== ZB ? ZB : Object[JB(DB[49]) + … [truncated]
+         let nB = (0, GB[DB[15]])()[JB(135) + JB(136)];
```

#### 2086. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14752` → after: `L14725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14725) · [Before (L14752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14752)

```diff
-           Qt = lt[jt(104)][jt(105) + jt(106) + jt(107) + jt(108) + "rl"](Qt);
+           nB = zB[JB(137)][JB(138) + JB(139) + JB(140)](nB);
```

#### 2087. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14754-L14757` → after: `L14727-L14732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14727-L14732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14727-L14732) · [Before (L14754-L14757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14754-L14757)

```diff
-             function Et(...tt) {
-               for (ee(tt[gt[13]] = gt[2], tt[gt[2]] = 'Nn(KXeoCl0cu9{x,3DpmBQIJ!1fFOAGv6>2Vq"dZ&4U`:7g?ibas}kY]P=ty@[hR8+SWMw$_j.%H/|;5*T)zr#EL<~^', tt[gt[18]] = "" + (tt[gt[1]] || ""), tt[gt[4]] = tt[gt[18]].length, tt[gt[54]] = [], tt[gt[39]] = gt[1], tt[gt[9]] = gt[1], tt[gt[5 … [truncated]
-                 if (tt[gt[6]] = tt[gt[2]].indexOf(tt[gt[18]][tt[gt[11]]]), tt[gt[6]] !== -gt[2])
-                   if (tt[gt[53]] < gt[1]) tt[gt[53]] = tt[gt[6]];
+             function hB(BB) {
+               var IB, ZB, TB, JB, oB, GB, vB;
+               for (BI(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = DB[1], oB = DB[1], GB = -DB[2]), vB = DB[1]; vB < ZB; vB++) {
+                 var kB = 'dk*ni0yuWtHTAz:|so;r_l,@BQ#.[px/=4]b$I2!S^v(L1ZPVfw7)%>9&e36?+"mEc5q8`YOGhU{}<M~XFCaRJKjNgD'.indexOf(IB[vB]);
+                 if (kB !== -DB[2])
+                   if (GB < DB[1]) GB = kB;
```

#### 2088. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14759` → after: `L14734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14734) · [Before (L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14759)

```diff
-                     ee(tt[gt[53]] += tt[gt[6]] * gt[30], tt[gt[39]] |= tt[gt[53]] << tt[gt[9]], tt[gt[9]] += (tt[gt[53]] & gt[32]) > gt[33] ? gt[34] : gt[35]);
+                     BI(GB += kB * DB[8], JB |= GB << oB, oB += (GB & DB[36]) > DB[37] ? DB[38] : DB[39]);
```

#### 2089. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14761-L14764` → after: `L14736-L14745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14736-L14745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14736-L14745) · [Before (L14761-L14764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14761-L14764)

```diff
-                       ee(tt[gt[54]].push(tt[gt[39]] & gt[12]), tt[gt[39]] >>= gt[11], tt[gt[9]] -= gt[11])
-                     } while (tt[gt[9]] > gt[7]);
-                     tt[gt[53]] = -gt[2]
-                   } return tt[gt[53]] > -gt[2] && tt[gt[54]].push((tt[gt[39]] | tt[gt[53]] << tt[gt[9]]) & gt[12]), nt(tt[gt[54]])
+                       BI(TB.push(JB & DB[12]), JB >>= DB[11], oB -= DB[11])
+                     } while (oB > DB[27]);
+                     GB = -DB[2]
+                   }
+               }
+               return GB > -DB[2] && TB.push((JB | GB << oB) & DB[12]), VB(TB)
+             }
+ 
+             function FB(BB) {
+               return typeof eB[BB] === DB[18] ? eB[BB] = hB(uB[BB]) : eB[BB]
```

#### 2090. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14768` → after: `L14749-L14756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14749-L14756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14749-L14756) · [Before (L14768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14768)

```diff
-               return tt[gt[13]] = gt[2], typeof rt[tt[gt[1]]] === gt[14] ? rt[tt[gt[1]]] = Et(Ut[tt[gt[1]]]) : rt[tt[gt[1]]]
+               BI(BB[DB[13]] = DB[1], BB[-DB[43]] = function(...IB) {
+                 return BI(IB[DB[13]] = DB[22], IB[DB[22]] = [], IB[-DB[57]] = IB[DB[1]].length, IB[DB[1]].sort(((BB, IB) => BB - IB)), BB[DB[32]](IB[DB[22]], [], DB[1], IB[-DB[57]], IB[DB[1]], IB[DB[2]])), IB[DB[22]]
+               }, BB[DB[32]] = function(...IB) {
+                 if (BI(IB[DB[13]] = DB[25], IB[-DB[58]] = DB[48]), !(IB[DB[43]] < DB[1])) {
+                   if (IB[DB[43]] === DB[1]) return IB[DB[1]].push(IB[DB[2]]);
+                   for (IB[DB[32]] = IB[DB[22]]; IB[DB[32]] < IB[DB[4]] && !(IB[DB[17]][IB[DB[32]]] > IB[DB[43]]); IB[DB[32]]++) IB[DB[32]] > IB[DB[22]] && IB[DB[17]][IB[DB[32]]] === IB[DB[17]][IB[DB[32]] - DB[2]] || BI(IB[-DB[58]] = Array.from(IB[DB[2]]), IB[-DB[58]].push(IB[DB[1 … [truncated]
+                 }
+               }, console.log(BB[-DB[43]]))
```

#### 2091. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14770-L14771` → after: `L14758-L14759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14758-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14758-L14759) · [Before (L14770-L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14770-L14771)

```diff
-             await (0, dt[ft(109) + ft(110) + ft(111) + ft(112) + ft(113) + gt[8]])(Qt + (ft(114) + "s/") + Xt[gt[52]](gt[51])[gt[1]] + ft(115), {
-               [ft(116)]: Xt
+             FB(141) in SB && NB(), await (0, vB[FB(142) + FB(143) + FB(144)])(nB + (FB(145) + "s/") + cB[DB[56]](DB[55])[DB[1]] + FB(146), {
+               [FB(147)]: cB
```

#### 2092. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14773` → after: `L14761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14761) · [Before (L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14773)

```diff
-               [ft(117) + "s"]: gt[1]
+               [FB(148) + "s"]: DB[1]
```

#### 2093. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14780` → after: `L14768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14768) · [Before (L14780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14780)

```diff
-   37638: (tt, et, Vt) => {
+   37441: (BB, IB, ZB) => {
```

#### 2094. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14786` → after: `L14774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14774) · [Before (L14786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14786)

```diff
-     var Ot = Vt(37647);
+     var TB = ZB(37448);
```

#### 2095. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14800` → after: `L14788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14788) · [Before (L14800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14800)

```diff
-         dJ: function(et, Vt) {
+         FW: function(IB, ZB) {
```

#### 2096. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14804` → after: `L14792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14792) · [Before (L14804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14804)

```diff
-           } = tt.OJ;
+           } = BB.vW;
```

#### 2097. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14809` → after: `L14797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14797) · [Before (L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14809)

```diff
-           const dt = tt.camera.oB();
+           const vB = BB.camera.yV();
```

#### 2098. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14816` → after: `L14804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14804) · [Before (L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14816)

```diff
-       const Vt = tt.mJ.KVt(et);
+       const ZB = BB.zW.yZB(IB);
```

#### 2099. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14822-L14823` → after: `L14810-L14811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14810-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14810-L14811) · [Before (L14822-L14823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14822-L14823)

```diff
-       const mt = null !== (Vt = null === (Ot = tt.mJ.KVt(et)) || void 0 === Ot ? void 0 : Ot._prevOpacity) && void 0 !== Vt ? Vt : -1;
-       return mt >= 0 ? mt : null !== (qt = null === (Dt = tt.dL[tt.lL][et]) || void 0 === Dt ? void 0 : Dt.opacity) && void 0 !== qt ? qt : 1
+       const GB = null !== (ZB = null === (TB = BB.zW.yZB(IB)) || void 0 === TB ? void 0 : TB._prevOpacity) && void 0 !== ZB ? ZB : -1;
+       return GB >= 0 ? GB : null !== (JB = null === (oB = BB.Tm[BB.Jm][IB]) || void 0 === oB ? void 0 : oB.opacity) && void 0 !== JB ? JB : 1
```

#### 2100. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14829-L14830` → after: `L14817-L14818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14817-L14818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14817-L14818) · [Before (L14829-L14830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14829-L14830)

```diff
-         mJ: Et
-       } = tt, ft = null === (mt = Et.RY(et.uZ)) || void 0 === mt ? void 0 : mt.zB;
+         zW: FB
+       } = BB, NB = null === (GB = FB.zK(IB.bR)) || void 0 === GB ? void 0 : GB.qV;
```

#### 2101. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14832` → after: `L14820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14820) · [Before (L14832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14832)

```diff
-       if (et.replayForceHidden || et.uZ === tt.lL && tt.camera.FY < .01 && !Ot.c.isCameraDetachedFromPlayer(tt)) {
+       if (IB.replayForceHidden || IB.bR === BB.Jm && BB.camera.WK < .01 && !TB.c.isCameraDetachedFromPlayer(BB)) {
```

#### 2102. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14835-L14836` → after: `L14823-L14824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14823-L14824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14823-L14824) · [Before (L14835-L14836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14835-L14836)

```diff
-         const Vt = !et.replayForceHidden && et.serverOpacity > 0 && null !== (wt = null === (yt = tt.Bf.pf) || void 0 === yt ? void 0 : yt.castsEntitySunShadows) && void 0 !== wt && wt,
-           Ot = Et.aVt(et.uZ);
+         const ZB = !IB.replayForceHidden && IB.serverOpacity > 0 && null !== (gB = null === (qB = BB.Ig.Zg) || void 0 === qB ? void 0 : qB.castsEntitySunShadows) && void 0 !== gB && gB,
+           TB = FB.hZB(IB.bR);
```

#### 2103. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14840` → after: `L14828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14828) · [Before (L14840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14840)

```diff
-       const Nt = tt.bloxd.getLifeformEyeHeight(et.uZ),
+       const yB = BB.bloxd.getLifeformEyeHeight(IB.bR),
```

#### 2104. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14848-L14849` → after: `L14836-L14837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14836-L14837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14836-L14837) · [Before (L14848-L14849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14848-L14849)

```diff
-       et.uZ === tt.lL && (Ct = Math.max(Ct - 1.20001, 0), ut = 0);
-       (null === (dt = Et.ZVt(et.uZ)) || void 0 === dt ? void 0 : dt.nE) === tt.lL && (ut = 1);
+       IB.bR === BB.Jm && (CB = Math.max(CB - 1.20001, 0), QB = 0);
+       (null === (vB = FB.YZB(IB.bR)) || void 0 === vB ? void 0 : vB.zN) === BB.Jm && (QB = 1);
```

#### 2105. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14852-L14854` → after: `L14840-L14842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14840-L14842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14840-L14842) · [Before (L14852-L14854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14852-L14854)

```diff
-       const ht = et.uZ === tt.lL,
-         vt = ht && 0 === Kt && et.serverOpacity > 0 && null !== (jt = null === (Ht = tt.Bf.pf) || void 0 === Ht ? void 0 : Ht.castsEntitySunShadows) && void 0 !== jt && jt,
-         Wt = ht && (null !== (Qt = null === (lt = Et.aVt(et.uZ)) || void 0 === lt ? void 0 : lt.drawnHidden) && void 0 !== Qt ? Qt : vt) !== vt;
+       const wB = IB.bR === BB.Jm,
+         OB = wB && 0 === sB && IB.serverOpacity > 0 && null !== (kB = null === (cB = BB.Ig.Zg) || void 0 === cB ? void 0 : cB.castsEntitySunShadows) && void 0 !== kB && kB,
+         YB = wB && (null !== (hB = null === (zB = FB.hZB(IB.bR)) || void 0 === zB ? void 0 : zB.drawnHidden) && void 0 !== hB ? hB : OB) !== OB;
```

#### 2106. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14863-L14864` → after: `L14851-L14852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14851-L14852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14851-L14852) · [Before (L14863-L14864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14863-L14864)

```diff
-         mJ: dt
-       } = tt, jt = tt.Bf.xI, Ht = null !== (Ot = null === (qt = dt.oet(et.uZ)) || void 0 === qt ? void 0 : qt.RP) && void 0 !== Ot ? Ot : null;
+         zW: vB
+       } = BB, kB = BB.Ig.kR, cB = null !== (TB = null === (JB = vB.RIB(IB.bR)) || void 0 === JB ? void 0 : JB.gR) && void 0 !== TB ? TB : null;
```

#### 2107. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14867` → after: `L14855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14855) · [Before (L14867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14867)

```diff
-           Ot = dt.aVt(et.uZ);
+           TB = vB.hZB(IB.bR);
```

#### 2108. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14872` → after: `L14860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14860) · [Before (L14872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14872)

```diff
-         tt && (jt.set(Ht, "aOpacity", Vt), jt.wL(Ht, "aOpacity", Vt))
+         BB && (kB.set(cB, "aOpacity", ZB), kB.Wm(cB, "aOpacity", ZB))
```

#### 2109. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14874` → after: `L14862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14862) · [Before (L14874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14874)

```diff
-       const Xt = null === (Dt = dt.getState(et.uZ, dt.names.cape)) || void 0 === Dt ? void 0 : Dt.mesh;
+       const nB = null === (oB = vB.getState(IB.bR, vB.names.cape)) || void 0 === oB ? void 0 : oB.mesh;
```

#### 2110. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14876` → after: `L14864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14864) · [Before (L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14876)

```diff
-       Xt && (Xt.qL.aOpacity = Vt, Xt.isVisible = !mt && !(null !== (Qt = tt.dL[tt.lL][et.uZ]) && void 0 !== Qt && Qt._invisibleEffect))
+       nB && (nB.Zm.aOpacity = ZB, nB.isVisible = !GB && !(null !== (hB = BB.Tm[BB.Jm][IB.bR]) && void 0 !== hB && hB._invisibleEffect))
```

#### 2111. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14879` → after: `L14867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14867) · [Before (L14879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14879)

```diff
-   38316: (tt, et, Vt) => {
+   38136: (BB, IB, ZB) => {
```

#### 2112. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14892` → after: `L14880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14880) · [Before (L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14892)

```diff
-     var Ot = Vt(404),
+     var TB = ZB(364),
```

#### 2113. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14894-L14904` → after: `L14882-L14892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14882-L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14882-L14892) · [Before (L14894-L14904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14894-L14904)

```diff
-       Dt = Vt(37581),
-       mt = Vt(37614),
-       dt = Vt(391),
-       jt = Vt(37584),
-       Ht = Vt(38321),
-       Xt = Vt(37323),
-       Qt = Vt(37900),
-       lt = Vt(37891),
-       Et = Vt(38005),
-       ft = Vt(37401),
-       wt = Vt(38327);
+       oB = ZB(37377),
+       GB = ZB(37409),
+       vB = ZB(360),
+       kB = ZB(37385),
+       cB = ZB(38140),
+       nB = ZB(37108),
+       hB = ZB(37687),
+       zB = ZB(37685),
+       FB = ZB(37814),
+       NB = ZB(37192),
+       gB = ZB(38143);
```

#### 2114. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14919` → after: `L14907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14907) · [Before (L14919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14919)

```diff
-         this.target = "", this.RP = null, this._isVehicle = !1, this._controller = null, this._libraryVersion = 0, this._posLastFrame = qt().create(), this._headingLastFrame = 0, this._turnHeldSeconds = 0, this._occupied = !1, this._sentHeadingLastFrame = Number.NaN, this._catchi … [truncated]
+         this.target = "", this.gR = null, this._isVehicle = !1, this._controller = null, this._libraryVersion = 0, this._posLastFrame = JB().create(), this._headingLastFrame = 0, this._turnHeldSeconds = 0, this._occupied = !1, this._sentHeadingLastFrame = Number.NaN, this._catchi … [truncated]
```

#### 2115. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14928-L14929` → after: `L14916-L14917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14916-L14917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14916-L14917) · [Before (L14928-L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14928-L14929)

```diff
-         qJ: function(et, Vt) {
-           Vt._isVehicle = (0, Dt.t)(Vt.target), It(tt, Vt)
+         cW: function(IB, ZB) {
+           ZB._isVehicle = (0, oB.v)(ZB.target), HB(BB, ZB)
```

#### 2116. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14931` → after: `L14919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14919) · [Before (L14931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14931)

```diff
-         nS: function(et, Vt) {
+         nH: function(IB, ZB) {
```

#### 2117. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14935-L14936` → after: `L14923-L14924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14923-L14924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14923-L14924) · [Before (L14935-L14936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14935-L14936)

```diff
-         dJ: function(et, Vt) {
-           for (const Ot of Vt) Ot._libraryVersion !== Ht.g.version && It(tt, Ot), null !== Ot._controller && At(tt, Ot, et / 1e3)
+         FW: function(IB, ZB) {
+           for (const TB of ZB) TB._libraryVersion !== cB.f.version && HB(BB, TB), null !== TB._controller && fB(BB, TB, IB / 1e3)
```

#### 2118. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14943-L14944` → after: `L14931-L14932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14931-L14932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14931-L14932) · [Before (L14943-L14944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14943-L14944)

```diff
-       const Ot = et.uZ;
-       et._libraryVersion = Ht.g.version, et._controller = Ht.g.createController(et.target, tt.Bf.xI, et.RP), et._primed = !1, null === (Vt = rt(tt, Ot)) || void 0 === Vt || Vt.setRigController(et._controller), null !== et._controller && (0, ft.e)(tt).animations.restoreClip(Ot, et … [truncated]
+       const TB = IB.bR;
+       IB._libraryVersion = cB.f.version, IB._controller = cB.f.createController(IB.target, BB.Ig.kR, IB.gR), IB._primed = !1, null === (ZB = eB(BB, TB)) || void 0 === ZB || ZB.setRigController(IB._controller), null !== IB._controller && (0, NB.c)(BB).animations.restoreClip(TB, IB … [truncated]
```

#### 2119. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14949` → after: `L14937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14937) · [Before (L14949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14949)

```diff
-       return null !== (Vt = null === (Ot = rt(tt, et)) || void 0 === Ot ? void 0 : Ot.getRigController()) && void 0 !== Vt ? Vt : null
+       return null !== (ZB = null === (TB = eB(BB, IB)) || void 0 === TB ? void 0 : TB.getRigController()) && void 0 !== ZB ? ZB : null
```

#### 2120. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14953` → after: `L14941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14941) · [Before (L14953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14953)

```diff
-       return tt.rigged.binding.target === Ht.d
+       return BB.rigged.binding.target === cB.c
```

#### 2121. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14957` → after: `L14945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14945) · [Before (L14957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14957)

```diff
-       const Vt = tt.mJ.getState(et, "rigAnimation");
+       const ZB = BB.zW.getState(IB, "rigAnimation");
```

#### 2122. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14972` → after: `L14960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14960) · [Before (L14972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14972)

```diff
-       const Ot = tt.mJ.getState(et, "rigAnimation");
+       const TB = BB.zW.getState(IB, "rigAnimation");
```

#### 2123. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14977` → after: `L14965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14965) · [Before (L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14977)

```diff
-       const Ot = tt.mJ.getState(et, "rigAnimation");
+       const TB = BB.zW.getState(IB, "rigAnimation");
```

#### 2124. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14985` → after: `L14973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14973) · [Before (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14985)

```diff
-         Ot.setInput(mt.h.HitAngle, null === Vt ? 0 : 180 * dt.e.computeShortestRotation(qt, Vt) / Math.PI)
+         TB.setInput(GB.k.HitAngle, null === ZB ? 0 : 180 * vB.e.computeShortestRotation(JB, ZB) / Math.PI)
```

#### 2125. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14987` → after: `L14975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14975) · [Before (L14987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14987)

```diff
-       return zt(tt, et, jt.k)
+       return XB(BB, IB, kB.p)
```

#### 2126. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14992` → after: `L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14980) · [Before (L14992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14992)

```diff
-       return null !== (Vt = tt.mJ.getState(et, "animator")) && void 0 !== Vt ? Vt : null
+       return null !== (ZB = BB.zW.getState(IB, "animator")) && void 0 !== ZB ? ZB : null
```

#### 2127. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14996-L14997` → after: `L14984-L14985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14984-L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14984-L14985) · [Before (L14996-L14997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L14996-L14997)

```diff
-       const Vt = rt(tt, et.uZ);
-       return null !== Vt && Vt.DOt.mOt && !(0, Xt.pausesOutOfView)(tt, et.uZ, et.RP)
+       const ZB = eB(BB, IB.bR);
+       return null !== ZB && ZB.SZB.BTB && !(0, nB.pausesOutOfView)(BB, IB.bR, IB.gR)
```

#### 2128. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15002` → after: `L14990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R14990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L14990) · [Before (L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15002)

```diff
-         jt = et.uZ;
+         kB = IB.bR;
```

#### 2129. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15017` → after: `L15005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15005) · [Before (L15017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15017)

```diff
-           const Ot = null === (Vt = tt.mJ.ZVt(et)) || void 0 === Vt ? void 0 : Vt.nE;
+           const TB = null === (ZB = BB.zW.YZB(IB)) || void 0 === ZB ? void 0 : ZB.zN;
```

#### 2130. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15020` → after: `L15008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15008) · [Before (L15020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15020)

```diff
-         Vt && !et._occupied && (et._turnHeldSeconds = Wt), et._occupied = Vt, Ot.setInput(mt.h.Occupied, Vt ? 1 : 0), Rt[It++] = Vt ? Dt.i : Dt.j
+         ZB && !IB._occupied && (IB._turnHeldSeconds = YB), IB._occupied = ZB, TB.setInput(GB.k.Occupied, ZB ? 1 : 0), aB[HB++] = ZB ? oB.i : oB.m
```

#### 2131. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15023-L15025` → after: `L15011-L15013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15011-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15011-L15013) · [Before (L15023-L15025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15023-L15025)

```diff
-         const Vt = tt.mJ.xet(jt),
-           qt = null !== (Pt = null === Vt || void 0 === Vt ? void 0 : Vt.pose) && void 0 !== Pt ? Pt : "standing";
-         Ot.setInput(mt.h.Crouching, null !== Vt && void 0 !== Vt && Vt.crouching ? 1 : 0), Ot.setInput(mt.h.Aiming, (0, wt.e)(tt, jt) ? 1 : 0), "standing" !== qt && (Rt[It++] = qt), null !== Vt && void 0 !== Vt && Vt.crouching && (Rt[It++] = Dt.e), null !== et._aiState && (Rt[It+ … [truncated]
+         const ZB = BB.zW.uIB(kB),
+           JB = null !== (MB = null === ZB || void 0 === ZB ? void 0 : ZB.pose) && void 0 !== MB ? MB : "standing";
+         TB.setInput(GB.k.Crouching, null !== ZB && void 0 !== ZB && ZB.crouching ? 1 : 0), TB.setInput(GB.k.Aiming, (0, gB.c)(BB, kB) ? 1 : 0), "standing" !== JB && (aB[HB++] = JB), null !== ZB && void 0 !== ZB && ZB.crouching && (aB[HB++] = oB.d), null !== IB._aiState && (aB[HB+ … [truncated]
```

#### 2132. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15050-L15051` → after: `L15038-L15039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15038-L15039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15038-L15039) · [Before (L15050-L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15050-L15051)

```diff
-           tt.setInput(mt.h.GroundSpeed, et), tt.setInput(mt.h.ForwardSpeed, Vt), tt.setInput(mt.h.VerticalSpeed, Ot), tt.setInput(mt.h.TurnRate, qt), tt.setInput(mt.h.OnGround, Math.abs(Ot) < bt ? 1 : 0)
-         }(Ot, Zt / Vt, Ft / Vt, lt / Vt, zt / Vt), et._snapNext ? (et._snapNext = !1, Ot.markDiscontinuity()) : Ot.addTravel(Ft < Jt * Zt ? -Zt : Zt)
+           BB.setInput(GB.k.GroundSpeed, IB), BB.setInput(GB.k.ForwardSpeed, ZB), BB.setInput(GB.k.VerticalSpeed, TB), BB.setInput(GB.k.TurnRate, JB), BB.setInput(GB.k.OnGround, Math.abs(TB) < WB ? 1 : 0)
+         }(TB, jB / ZB, RB / ZB, zB / ZB, XB / ZB), IB._snapNext ? (IB._snapNext = !1, TB.markDiscontinuity()) : TB.addTravel(RB < dB * jB ? -jB : jB)
```

#### 2133. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15055-L15056` → after: `L15043-L15044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15043-L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15043-L15044) · [Before (L15055-L15056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15055-L15056)

```diff
-       if (!et._isVehicle || (0, Qt.e)(tt, et.uZ)) return Number.NaN;
-       const Vt = tt.mJ.getState(et.uZ, "meshRotation");
+       if (!IB._isVehicle || (0, hB.b)(BB, IB.bR)) return Number.NaN;
+       const ZB = BB.zW.getState(IB.bR, "meshRotation");
```

#### 2134. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15060` → after: `L15048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15048) · [Before (L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15060)

```diff
-   38005: (tt, et, Vt) => {
+   37814: (BB, IB, ZB) => {
```

#### 2135. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15074` → after: `L15062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15062) · [Before (L15074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15074)

```diff
-     var Ot = Vt(404),
+     var TB = ZB(364),
```

#### 2136. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15076-L15082` → after: `L15064-L15070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15064-L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15064-L15070) · [Before (L15076-L15082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15076-L15082)

```diff
-       Dt = Vt(38009),
-       mt = Vt(38016),
-       dt = Vt(229),
-       jt = Vt(38024),
-       Ht = Vt(37699),
-       Xt = Vt(37323);
-     const Qt = 1e3 / dt.e.serverTicksPerSecond,
+       oB = ZB(37819),
+       GB = ZB(37824),
+       vB = ZB(201),
+       kB = ZB(37830),
+       cB = ZB(37504),
+       nB = ZB(37108);
+     const hB = 1e3 / vB.f.serverTicksPerSecond,
```

#### 2137. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15112` → after: `L15100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15100) · [Before (L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15112)

```diff
-       return Ot > Vt ? Vt / Ot : 1
+       return TB > ZB ? ZB / TB : 1
```

#### 2138. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15178` → after: `L15166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15166) · [Before (L15178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15178)

```diff
-         const qt = tt.mJ.getState(et, "smoothToServerPos");
+         const JB = BB.zW.getState(IB, "smoothToServerPos");
```

#### 2139. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15180` → after: `L15168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15168) · [Before (L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15180)

```diff
-         et = null === (Ot = tt.mJ.ZVt(et)) || void 0 === Ot ? void 0 : Ot.nE
+         IB = null === (TB = BB.zW.YZB(IB)) || void 0 === TB ? void 0 : TB.zN
```

#### 2140. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15190` → after: `L15178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15178) · [Before (L15190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15190)

```diff
-       return !(null === tt || void 0 === tt || !tt.isEnabled()) && (!("pI" in tt) || tt.isVisible && (null === et || (0, jt.h)(tt, et)))
+       return !(null === BB || void 0 === BB || !BB.isEnabled()) && (!("vR" in BB) || BB.isVisible && (null === IB || (0, kB.g)(BB, IB)))
```

#### 2141. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15195-L15197` → after: `L15183-L15185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15183-L15185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15183-L15185) · [Before (L15195-L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15195-L15197)

```diff
-       const Vt = et.uZ;
-       if (tt.mJ.ZVt(Vt)) return;
-       const Ot = tt.mJ.RY(Vt).zB,
+       const ZB = IB.bR;
+       if (BB.zW.YZB(ZB)) return;
+       const TB = BB.zW.zK(ZB).qV,
```

#### 2142. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15201` → after: `L15189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15189) · [Before (L15201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15201)

```diff
-       tt.mJ.setPosition(Vt, vt(et._skipped, et._clock.ms, ct)), Kt(et), zt.clear(), ot(tt, Vt, Ot[0] - qt, Ot[1] - Dt, Ot[2] - mt)
+       BB.zW.setPosition(ZB, OB(IB._skipped, IB._clock.ms, pB)), sB(IB), XB.clear(), LB(BB, ZB, TB[0] - JB, TB[1] - oB, TB[2] - GB)
```

#### 2143. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15205-L15206` → after: `L15193-L15194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15193-L15194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15193-L15194) · [Before (L15205-L15206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15205-L15206)

```diff
-       const Ot = tt.mJ.getState(et, "smoothToServerPos");
-       return null !== Ot && void 0 !== Ot && Ot._skipping && !tt.mJ.ZVt(et) ? vt(Ot._skipped, Ot._clock.ms, Vt) : (qt().copy(Vt, tt.mJ.YM(et)), Vt)
+       const TB = BB.zW.getState(IB, "smoothToServerPos");
+       return null !== TB && void 0 !== TB && TB._skipping && !BB.zW.YZB(IB) ? OB(TB._skipped, TB._clock.ms, ZB) : (JB().copy(ZB, BB.zW.aU(IB)), ZB)
```

#### 2144. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15210` → after: `L15198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15198) · [Before (L15210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15210)

```diff
-       return tt.mJ.ptt(et, "smoothToServerPos") ? kt(tt, et, Vt) : qt().add(Vt, tt.mJ.RY(et).zB, tt.bl)
+       return BB.zW.TIB(IB, "smoothToServerPos") ? rB(BB, IB, ZB) : JB().add(ZB, BB.zW.zK(IB).qV, BB.Mz)
```

#### 2145. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15219-L15222` → after: `L15207-L15210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15207-L15210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15207-L15210) · [Before (L15219-L15222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15219-L15222)

```diff
-         mJ: dt
-       } = tt, jt = tt.Bf.xI, Xt = dt.RY(et).zB, Qt = dt.oet(et);
-       if (null !== Qt && void 0 !== Qt && Qt.DOt) {
-         if (Qt.DOt.mOt) {
+         zW: vB
+       } = BB, kB = BB.Ig.kR, nB = vB.zK(IB).qV, hB = vB.RIB(IB);
+       if (null !== hB && void 0 !== hB && hB.SZB) {
+         if (hB.SZB.BTB) {
```

#### 2146. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15226` → after: `L15214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15214) · [Before (L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15226)

```diff
-           jt.setPosition(Qt.RP, Xt[0] + tt[0], Xt[1] + tt[1], Xt[2] + tt[2])
+           kB.setPosition(hB.gR, nB[0] + BB[0], nB[1] + BB[1], nB[2] + BB[2])
```

#### 2147. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15232` → after: `L15220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15220) · [Before (L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15232)

```diff
-         (0, Ht.s)(tt, tt.position.x + Vt, tt.position.y + Ot, tt.position.z + qt), tt.fVt()
+         (0, cB.q)(BB, BB.position.x + ZB, BB.position.y + TB, BB.position.z + JB), BB.GZB()
```

#### 2148. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15234` → after: `L15222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15222) · [Before (L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15234)

```diff
-       const lt = dt.getState(et, dt.names.BE);
+       const zB = vB.getState(IB, vB.names.GN);
```

#### 2149. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15237-L15240` → after: `L15225-L15228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15225-L15228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15225-L15228) · [Before (L15237-L15240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15237-L15240)

```diff
-       Et && (0, Ht.s)(Et, Et.position.x + Vt, Et.position.y + Ot, Et.position.z + qt);
-       for (const Ht of dt.bZ(dt.names.GJ))
-         if (Ht.nE === et) {
-           const et = dt.RY(Ht.uZ).zB,
+       FB && (0, cB.q)(FB, FB.position.x + ZB, FB.position.y + TB, FB.position.z + JB);
+       for (const cB of vB.fR(vB.names.nC))
+         if (cB.zN === IB) {
+           const IB = vB.zK(cB.bR).qV,
```

#### 2150. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15244` → after: `L15232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15232) · [Before (L15244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15244)

```diff
-           et[0] += Vt, et[1] += Ot, et[2] += qt, ot(tt, Ht.uZ, et[0] - Dt, et[1] - mt, et[2] - jt)
+           IB[0] += ZB, IB[1] += TB, IB[2] += JB, LB(BB, cB.bR, IB[0] - oB, IB[1] - GB, IB[2] - kB)
```

#### 2151. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15249-L15250` → after: `L15237-L15238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15237-L15238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15237-L15238) · [Before (L15249-L15250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15249-L15250)

```diff
-       const Ot = tt.Qet,
-         qt = tt.zB,
+       const TB = BB.UIB,
+         JB = BB.qV,
```

#### 2152. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15258-L15259` → after: `L15246-L15247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15246-L15247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15246-L15247) · [Before (L15258-L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15258-L15259)

```diff
-       const et = tt.Bf.xI,
-         Vt = tt.mJ.Bet(tt.mJ.names.BE),
+       const IB = BB.Ig.kR,
+         ZB = BB.zW.eIB(BB.zW.names.GN),
```

#### 2153. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15264` → after: `L15252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15252) · [Before (L15264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15264)

```diff
-       }, (() => new mt.b(0, 0, 0, 0)));
+       }, (() => new GB.c(0, 0, 0, 0)));
```

#### 2154. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15286-L15287` → after: `L15274-L15275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15274-L15275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15274-L15275) · [Before (L15286-L15287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15286-L15287)

```diff
-         const Ot = tt.mJ.oet(Vt);
-         return !!Ot && (null !== Ot.RP ? et.has(Ot.RP) && et.getActuallyVisible(Ot.RP) : Lt(Ot.mesh, Ht))
+         const TB = BB.zW.RIB(ZB);
+         return !!TB && (null !== TB.gR ? IB.has(TB.gR) && IB.getActuallyVisible(TB.gR) : PB(TB.mesh, cB))
```

#### 2155. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15293` → after: `L15281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15281) · [Before (L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15293)

```diff
-           Ot.add(et), et = null === (Vt = tt.mJ.ZVt(et)) || void 0 === Vt ? void 0 : Vt.nE
+           TB.add(IB), IB = null === (ZB = BB.zW.YZB(IB)) || void 0 === ZB ? void 0 : ZB.zN
```

#### 2156. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15301` → after: `L15289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15289) · [Before (L15301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15301)

```diff
-           const Vt = tt.Bf.vI(),
+           const ZB = BB.Ig.JR(),
```

#### 2157. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15304-L15306` → after: `L15292-L15294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15292-L15294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15292-L15294) · [Before (L15304-L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15304-L15306)

```diff
-           Ht = null, tt.Bf.HOt() ? Ht = null !== (mt = Vt.frustumPlanes) && void 0 !== mt ? mt : null : null !== qt && (Dt.e.GetPlanesToRef(qt.getTransformationMatrix(), jt), Ht = jt), Wt(null === (et = tt.mJ.ZVt(tt.camera.hY)) || void 0 === et ? void 0 : et.nE);
-           for (const Ot of tt.mJ.bZ(tt.mJ.names.GJ)) ht(Ot.uZ) && Wt(Ot.nE);
-           for (const Ot of tt.mJ.bZ("lineToEntity")) Lt(Ot._line, Ht) && (Wt(Ot.uZ), Wt(Ot._targetEId))
+           cB = null, BB.Ig.TTB() ? cB = null !== (GB = ZB.frustumPlanes) && void 0 !== GB ? GB : null : null !== JB && (oB.d.GetPlanesToRef(JB.getTransformationMatrix(), kB), cB = kB), YB(null === (IB = BB.zW.YZB(BB.camera.IK)) || void 0 === IB ? void 0 : IB.zN);
+           for (const TB of BB.zW.fR(BB.zW.names.nC)) wB(TB.bR) && YB(TB.zN);
+           for (const TB of BB.zW.fR("lineToEntity")) PB(TB._line, cB) && (YB(TB.bR), YB(TB._targetEId))
```

#### 2158. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15323` → after: `L15311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15311) · [Before (L15323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15323)

```diff
-         qJ: function(tt, et) {
+         cW: function(BB, IB) {
```

#### 2159. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15326` → after: `L15314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15314) · [Before (L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15326)

```diff
-         nS: function(tt, et) {
+         nH: function(BB, IB) {
```

#### 2160. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15329` → after: `L15317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15317) · [Before (L15329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15329)

```diff
-         dJ: function(et, Vt) {
+         FW: function(IB, ZB) {
```

#### 2161. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15332` → after: `L15320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15320) · [Before (L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15332)

```diff
-             Dt = tt.bl;
+             oB = BB.Mz;
```

#### 2162. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15341` → after: `L15329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15329) · [Before (L15341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15341)

```diff
-               Ot._awakeIndex >= 0 || rt(tt.mJ.RY(Ot.uZ), Ot.serverPosition, Vt) || Kt(Ot)
+               TB._awakeIndex >= 0 || eB(BB.zW.zK(TB.bR), TB.serverPosition, ZB) || sB(TB)
```

#### 2163. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15348` → after: `L15336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15336) · [Before (L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15348)

```diff
-               Qt = tt.mJ.RY(Vt.uZ);
+               hB = BB.zW.zK(ZB.bR);
```

#### 2164. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15354-L15356` → after: `L15342-L15344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15342-L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15342-L15344) · [Before (L15354-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15354-L15356)

```diff
-             const Et = tt.mJ.oet(Vt.uZ);
-             if (!Et || !(null !== (mt = null === (jt = Et.DOt) || void 0 === jt ? void 0 : jt.mOt) && void 0 !== mt ? mt : null === (Ht = Et.mesh) || void 0 === Ht ? void 0 : Ht.isEnabled())) {
-               Vt._skipping = !1, tt.mJ.setPosition(Vt.uZ, Xt);
+             const FB = BB.zW.RIB(ZB.bR);
+             if (!FB || !(null !== (GB = null === (kB = FB.SZB) || void 0 === kB ? void 0 : kB.BTB) && void 0 !== GB ? GB : null === (cB = FB.mesh) || void 0 === cB ? void 0 : cB.isEnabled())) {
+               ZB._skipping = !1, BB.zW.setPosition(ZB.bR, nB);
```

#### 2165. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15359-L15360` → after: `L15347-L15348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15347-L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15347-L15348) · [Before (L15359-L15360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15359-L15360)

```diff
-             if (null !== Et.RP && ct(Vt.uZ, Et.RP)) {
-               St(Vt, Qt.position, Ot, et), tt.mJ.setPosition(Vt.uZ, Xt);
+             if (null !== FB.gR && pB(ZB.bR, FB.gR)) {
+               iB(ZB, hB.position, TB, IB), BB.zW.setPosition(ZB.bR, nB);
```

#### 2166. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15366` → after: `L15354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15354) · [Before (L15366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15366)

```diff
-             (yt > 100 || yt < wt) && qt().copy(ft, Xt), tt.mJ.setPosition(Vt.uZ, ft)
+             (qB > 100 || qB < gB) && JB().copy(NB, nB), BB.zW.setPosition(ZB.bR, NB)
```

#### 2167. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15372` → after: `L15360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15360) · [Before (L15372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15372)

```diff
-   37997: (tt, et, Vt) => {
+   37812: (BB, IB, ZB) => {
```

#### 2168. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15379-L15381` → after: `L15367-L15369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15367-L15369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15367-L15369) · [Before (L15379-L15381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15379-L15381)

```diff
-     var Ot = Vt(1993),
-       qt = Vt(37323);
-     var Dt = Vt(38005);
+     var TB = ZB(1956),
+       JB = ZB(37108);
+     var oB = ZB(37814);
```

#### 2169. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15390-L15391` → after: `L15378-L15379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15378-L15379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15378-L15379) · [Before (L15390-L15391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15390-L15391)

```diff
-           RP: null,
-           DOt: null,
+           gR: null,
+           SZB: null,
```

#### 2170. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15400` → after: `L15388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15388) · [Before (L15400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15400)

```diff
-         qJ: function(tt, et) {
+         cW: function(BB, IB) {
```

#### 2171. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15403-L15404` → after: `L15391-L15392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15391-L15392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15391-L15392) · [Before (L15403-L15404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15403-L15404)

```diff
-         dJ: function(et, Vt) {
-           for (const Ot of Vt) tt.mJ.ptt(Ot.uZ, "humanoidMesh") || jt(tt, Ot, et), Ot.DOt.mOt && ((0, qt.pausesOutOfView)(tt, Ot.uZ, Ot.RP) ? Ot._pausedDt += et : Et(tt, Ot, et))
+         FW: function(IB, ZB) {
+           for (const TB of ZB) BB.zW.TIB(TB.bR, "humanoidMesh") || kB(BB, TB, IB), TB.SZB.BTB && ((0, JB.pausesOutOfView)(BB, TB.bR, TB.gR) ? TB._pausedDt += IB : FB(BB, TB, IB))
```

#### 2172. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15410` → after: `L15398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15398) · [Before (L15410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15410)

```diff
-       const [Ot, qt, mt] = (0, Dt.getDrawnPosition)(tt, et.uZ, Ht), dt = et._drawnPosition;
+       const [TB, JB, GB] = (0, oB.getDrawnPosition)(BB, IB.bR, cB), vB = IB._drawnPosition;
```

#### 2173. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15422` → after: `L15410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15410) · [Before (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15422)

```diff
-       const Vt = tt.mJ.getState(et, "updateWalkingState");
+       const ZB = BB.zW.getState(IB, "updateWalkingState");
```

#### 2174. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15430-L15431` → after: `L15418-L15419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15418-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15418-L15419) · [Before (L15430-L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15430-L15431)

```diff
-           const qt = et.uZ,
-             Dt = tt.mJ.getState(qt, "humanoidMesh");
+           const JB = IB.bR,
+             oB = BB.zW.getState(JB, "humanoidMesh");
```

#### 2175. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15434` → after: `L15422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15422) · [Before (L15434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15434)

```diff
-             const et = tt.mJ.xet(qt);
+             const IB = BB.zW.uIB(JB);
```

#### 2176. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15437-L15439` → after: `L15425-L15427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15425-L15427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15425-L15427) · [Before (L15437-L15439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15437-L15439)

```diff
-               const Dt = null === (Vt = tt.mJ.ZVt(et)) || void 0 === Vt ? void 0 : Vt.nE;
-               return null === (Ot = null !== (qt = Dt ? tt.mJ.xet(Dt) : null) && void 0 !== qt ? qt : tt.mJ.xet(et)) || void 0 === Ot ? void 0 : Ot.speed
-             }(tt, qt)) && void 0 !== mt ? mt : et.speed, void(Qt = null !== (dt = Dt.maxWalkingAngleOverride) && void 0 !== dt ? dt : et.crouching ? .5 : null)
+               const oB = null === (ZB = BB.zW.YZB(IB)) || void 0 === ZB ? void 0 : ZB.zN;
+               return null === (TB = null !== (JB = oB ? BB.zW.uIB(oB) : null) && void 0 !== JB ? JB : BB.zW.uIB(IB)) || void 0 === TB ? void 0 : TB.speed
+             }(BB, JB)) && void 0 !== GB ? GB : IB.speed, void(hB = null !== (vB = oB.maxWalkingAngleOverride) && void 0 !== vB ? vB : IB.crouching ? .5 : null)
```

#### 2177. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15441` → after: `L15429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15429) · [Before (L15441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15441)

```diff
-           Xt = et.drawnSpeed, Qt = null !== (Vt = null === (Ot = tt.mJ.getState(qt, "fourLeggedMesh")) || void 0 === Ot ? void 0 : Ot.maxWalkingAngleOverride) && void 0 !== Vt ? Vt : null
+           nB = IB.drawnSpeed, hB = null !== (ZB = null === (TB = BB.zW.getState(JB, "fourLeggedMesh")) || void 0 === TB ? void 0 : TB.maxWalkingAngleOverride) && void 0 !== ZB ? ZB : null
```

#### 2178. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15448` → after: `L15436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15436) · [Before (L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15448)

```diff
-       const dt = (Dt ? Ot : 1.3 * mt) * Vt / (2 * et.walkingLegSwingDuration);
+       const vB = (oB ? TB : 1.3 * GB) * ZB / (2 * IB.walkingLegSwingDuration);
```

#### 2179. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15457` → after: `L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15445) · [Before (L15457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15457)

```diff
-       return null !== et ? et : (0, Ot.e)(.16 * (tt - mt) + .9, .9, 1.4)
+       return null !== IB ? IB : (0, TB.f)(.16 * (BB - GB) + .9, .9, 1.4)
```

#### 2180. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15465` → after: `L15453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15453) · [Before (L15465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15465)

```diff
-   37960: (tt, et, Vt) => {
+   37764: (BB, IB, ZB) => {
```

#### 2181. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15467-L15468` → after: `L15455-L15456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15455-L15456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15455-L15456) · [Before (L15467-L15468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15467-L15468)

```diff
-       b: () => dt,
-       e: () => mt
+       c: () => vB,
+       d: () => GB
```

#### 2182. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15470` → after: `L15458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15458) · [Before (L15470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15470)

```diff
-     const Ot = new(Vt(36637).b)(new URL(Vt.p + Vt.u(48), Vt.b), {
+     const TB = new(ZB(36430).d)(new URL(ZB.p + ZB.u(48), ZB.b), {
```

#### 2183. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15474-L15476` → after: `L15462-L15464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15462-L15464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15462-L15464) · [Before (L15474-L15476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15474-L15476)

```diff
-     var qt = Vt(37962),
-       Dt = Vt(2920);
-     const mt = new qt.c((async () => {
+     var JB = ZB(37769),
+       oB = ZB(2989);
+     const GB = new JB.b((async () => {
```

#### 2184. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15494` → after: `L15482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15482) · [Before (L15494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15494)

```diff
-         const tt = await Vt.e(210).then((() => Vt(41762)));
+         const BB = await ZB.e(210).then((() => ZB(41548)));
```

#### 2185. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15513` → after: `L15501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15501) · [Before (L15513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15513)

```diff
-   38208: (tt, et, Vt) => {
+   38006: (BB, IB, ZB) => {
```

#### 2186. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15515-L15516` → after: `L15503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15503) · [Before (L15515-L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15515-L15516)

```diff
-       b: () => Dt,
-       d: () => mt,
+       c: () => oB,
```

#### 2187. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15519` → after: `L15506-L15507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15506-L15507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15506-L15507) · [Before (L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15519)

```diff
-       j: () => Qt,
+       h: () => WB,
+       i: () => hB,
```

#### 2188. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15523` → after: `L15511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15511) · [Before (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15523)

```diff
-     var Ot = Vt(9449);
+     var TB = ZB(9325);
```

#### 2189. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15545` → after: `L15533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15533) · [Before (L15545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15545)

```diff
-         boxes: Ot.s.map(qt),
+         boxes: TB.m.map(JB),
```

#### 2190. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15550` → after: `L15538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15538) · [Before (L15550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15550)

```diff
-         boxes: Ot.w.map(qt),
+         boxes: TB.u.map(JB),
```

#### 2191. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15563-L15564` → after: `L15551-L15552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15551-L15552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15551-L15552) · [Before (L15563-L15564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15563-L15564)

```diff
-         inner: Ht("innerStairs", Ot.u.innerLeft),
-         outer: Ht("outerStairs", Ot.u.outerLeft)
+         inner: cB("innerStairs", TB.q.innerLeft),
+         outer: cB("outerStairs", TB.q.outerLeft)
```

#### 2192. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15567-L15568` → after: `L15555-L15556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15555-L15556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15555-L15556) · [Before (L15567-L15568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15567-L15568)

```diff
-         inner: Ht("upsideDownInnerStairs", Ot.y.innerLeft),
-         outer: Ht("upsideDownOuterStairs", Ot.y.outerLeft)
+         inner: cB("upsideDownInnerStairs", TB.w.innerLeft),
+         outer: cB("upsideDownOuterStairs", TB.w.outerLeft)
```

#### 2193. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15574` → after: `L15562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15562) · [Before (L15574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15574)

```diff
-           if (null === et) return tt ? jt : dt;
+           if (null === IB) return BB ? kB : vB;
```

#### 2194. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15579` → after: `L15567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15567) · [Before (L15579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15579)

```diff
-       return 0 === qt ? Ot : {
+       return 0 === JB ? TB : {
```

#### 2195. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15581` → after: `L15569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15569) · [Before (L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15581)

```diff
-         key: `${Ot.key}|turn${qt}`,
+         key: `${TB.key}|turn${JB}`,
```

#### 2196. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15622` → after: `L15610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15610) · [Before (L15622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15622)

```diff
-         throw new Error(`Box face ${et} has no axis for uv ${tt}`)
+         throw new Error(`Box face ${IB} has no axis for uv ${BB}`)
```

#### 2197. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15678` → after: `L15666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15666) · [Before (L15678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15678)

```diff
-   37647: (tt, et, Vt) => {
+   37448: (BB, IB, ZB) => {
```

#### 2198. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15682` → after: `L15670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15670) · [Before (L15682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15682)

```diff
-     var Ot = Vt(404),
+     var TB = ZB(364),
```

#### 2199. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15684` → after: `L15672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15672) · [Before (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15684)

```diff
-       Dt = Vt(37654);
+       oB = ZB(37454);
```

#### 2200. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15690` → after: `L15678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15678) · [Before (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15690)

```diff
-       return Ht.isCameraDetachedFromPlayer(tt) && null !== (et = mt.get(tt)) && void 0 !== et ? et : null
+       return cB.isCameraDetachedFromPlayer(BB) && null !== (IB = GB.get(BB)) && void 0 !== IB ? IB : null
```

#### 2201. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15695` → after: `L15683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15683) · [Before (L15695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15695)

```diff
-         return !tt.mJ.ZVt(tt.camera.hY)
+         return !BB.zW.YZB(BB.camera.IK)
```

#### 2202. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15702` → after: `L15690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15690) · [Before (L15702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15702)

```diff
-         const dt = tt.mJ.ZVt(tt.camera.hY);
+         const vB = BB.zW.YZB(BB.camera.IK);
```

#### 2203. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15708` → after: `L15696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15696) · [Before (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15708)

```diff
-           Ht = tt.Bf.XT().lT;
+           cB = BB.Ig.qS().bS;
```

#### 2204. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15710-L15711` → after: `L15698-L15699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15698-L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15698-L15699) · [Before (L15710-L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15710-L15711)

```diff
-           followEntity: dt.nE,
-           oVt: dt.oVt,
+           followEntity: vB.zN,
+           PZB: vB.PZB,
```

#### 2205. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15713` → after: `L15701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15701) · [Before (L15713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15713)

```diff
-           savedZoomDistance: tt.camera.ZY,
+           savedZoomDistance: BB.camera.NK,
```

#### 2206. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15715` → after: `L15703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15703) · [Before (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15715)

```diff
-           facingMode: null !== (Vt = Dt.facingMode) && void 0 !== Vt ? Vt : "frozen",
+           facingMode: null !== (ZB = oB.facingMode) && void 0 !== ZB ? ZB : "frozen",
```

#### 2207. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15718-L15720` → after: `L15706-L15708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15706-L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15706-L15708) · [Before (L15718-L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15718-L15720)

```diff
-         }), tt.camera.ZY = 0, tt.camera.FY = 0, Ht[0] = 0, Ht[1] = 0, tt.mJ.xet(tt.lL).heading = jt.heading, tt.mJ.ZZ(tt.camera.hY, tt.mJ.names.GJ);
-         const Xt = null !== (qt = Dt.position) && void 0 !== qt ? qt : tt.camera.mp();
-         return tt.mJ.setPosition(tt.camera.hY, [Xt[0], Xt[1], Xt[2]]), Ot(tt), !0
+         }), BB.camera.NK = 0, BB.camera.WK = 0, cB[0] = 0, cB[1] = 0, BB.zW.uIB(BB.Jm).heading = kB.heading, BB.zW.Qr(BB.camera.IK, BB.zW.names.nC);
+         const nB = null !== (JB = oB.position) && void 0 !== JB ? JB : BB.camera.YV();
+         return BB.zW.setPosition(BB.camera.IK, [nB[0], nB[1], nB[2]]), TB(BB), !0
```

#### 2208. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15725` → after: `L15713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15713) · [Before (L15725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15725)

```diff
-         null === (et = tt.mJ.bVt(tt.lL)) || void 0 === et || et.nHt()
+         null === (IB = BB.zW.FZB(BB.Jm)) || void 0 === IB || IB.mcB()
```

#### 2209. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15735` → after: `L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15723) · [Before (L15735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15735)

```diff
-         return null !== (et = null === (Vt = jt(tt)) || void 0 === Vt ? void 0 : Vt.facing.heading) && void 0 !== et ? et : tt.camera.heading
+         return null !== (IB = null === (ZB = kB(BB)) || void 0 === ZB ? void 0 : ZB.facing.heading) && void 0 !== IB ? IB : BB.camera.heading
```

#### 2210. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15740` → after: `L15728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15728) · [Before (L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15740)

```diff
-         if (!Vt) return qt().copy(et, tt.camera.zp());
+         if (!ZB) return JB().copy(IB, BB.camera.XV());
```

#### 2211. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15752-L15753` → after: `L15740-L15741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15740-L15741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15740-L15741) · [Before (L15752-L15753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15752-L15753)

```diff
-         tt.mJ.RZ(tt.camera.hY, tt.mJ.names.GJ, {
-           nE: Vt.followEntity,
+         BB.zW.xR(BB.camera.IK, BB.zW.names.nC, {
+           zN: ZB.followEntity,
```

#### 2212. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15755-L15757` → after: `L15743-L15745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15743-L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15743-L15745) · [Before (L15755-L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15755-L15757)

```diff
-           oVt: Vt.oVt
-         }), tt.camera.ZY = Vt.savedZoomDistance, tt.camera.FY = Vt.savedZoomDistance;
-         const qt = tt.Bf.XT().lT;
+           PZB: ZB.PZB
+         }), BB.camera.NK = ZB.savedZoomDistance, BB.camera.WK = ZB.savedZoomDistance;
+         const JB = BB.Ig.qS().bS;
```

#### 2213. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15761` → after: `L15749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15749) · [Before (L15761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15761)

```diff
-         return null !== (et = null === (Vt = jt(tt)) || void 0 === Vt ? void 0 : Vt.savedZoomDistance) && void 0 !== et ? et : 0
+         return null !== (IB = null === (ZB = kB(BB)) || void 0 === ZB ? void 0 : ZB.savedZoomDistance) && void 0 !== IB ? IB : 0
```

#### 2214. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15764` → after: `L15752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15752) · [Before (L15764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15764)

```diff
-         return null !== (et = null === (Vt = jt(tt)) || void 0 === Vt ? void 0 : Vt.savedRigShift) && void 0 !== et ? et : dt
+         return null !== (IB = null === (ZB = kB(BB)) || void 0 === ZB ? void 0 : ZB.savedRigShift) && void 0 !== IB ? IB : vB
```

#### 2215. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15767-L15768` → after: `L15755-L15756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15755-L15756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15755-L15756) · [Before (L15767-L15768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15767-L15768)

```diff
-           Ot = Vt && tt.mJ.RY(Vt.followEntity);
-         return !!Ot && (Vt.oVt ? Vt.oVt(et, !0, Vt.followOffset) : qt().copy(et, Vt.followOffset), qt().add(et, Ot.zB, et), !0)
+           TB = ZB && BB.zW.zK(ZB.followEntity);
+         return !!TB && (ZB.PZB ? ZB.PZB(IB, !0, ZB.followOffset) : JB().copy(IB, ZB.followOffset), JB().add(IB, TB.qV, IB), !0)
```

#### 2216. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15777` → after: `L15765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15765) · [Before (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15777)

```diff
-         return null !== (et = null === (Vt = jt(tt)) || void 0 === Vt ? void 0 : Vt.facing.pitch) && void 0 !== et ? et : tt.camera.pitch
+         return null !== (IB = null === (ZB = kB(BB)) || void 0 === ZB ? void 0 : ZB.facing.pitch) && void 0 !== IB ? IB : BB.camera.pitch
```

#### 2217. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15781` → after: `L15769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15769) · [Before (L15781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15781)

```diff
-         return lt(tt) ? Qt(tt, et) : qt().copy(et, tt.camera.zp())
+         return zB(BB) ? hB(BB, IB) : JB().copy(IB, BB.camera.XV())
```

#### 2218. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15790` → after: `L15778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15778) · [Before (L15790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15790)

```diff
-         et(tt) ? tt.mJ.setPosition(tt.camera.hY, Ot) : Vt(tt, {
+         IB(BB) ? BB.zW.setPosition(BB.camera.IK, TB) : ZB(BB, {
```

#### 2219. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15795` → after: `L15783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15783) · [Before (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15795)

```diff
-         const jt = tt.mJ.xet(tt.lL);
+         const kB = BB.zW.uIB(BB.Jm);
```

#### 2220. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15800` → after: `L15788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15788) · [Before (L15800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15800)

```diff
-   38032: (tt, et, Vt) => {
+   37834: (BB, IB, ZB) => {
```

#### 2221. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15804` → after: `L15791-L15792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15791-L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15791-L15792) · [Before (L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15804)

```diff
-       f: () => Ht
+       e: () => kB,
+       g: () => cB
```

#### 2222. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15806` → after: `L15794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15794) · [Before (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15806)

```diff
-     var Ot = Vt(9425);
+     var TB = ZB(9296);
```

#### 2223. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15815` → after: `L15803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15803) · [Before (L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15815)

```diff
-         Dy: Ot
+         zq: TB
```

#### 2224. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15847` → after: `L15835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15835) · [Before (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15847)

```diff
-     const Qt = (0, Ot.k)("Water");
+     const hB = (0, TB.g)("Water");
```

#### 2225. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15850` → after: `L15838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15838) · [Before (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15850)

```diff
-       return (et, Vt, Ot) => tt.sQ.HA(et, Vt, Ot) ? "ground" : tt.sQ.I5(et, Vt, Ot) ? tt.sQ.pU(et, Vt, Ot) === Qt ? "ground" : "hazard" : "empty"
+       return (IB, ZB, TB) => BB.vz.qD(IB, ZB, TB) ? "ground" : BB.vz.R_(IB, ZB, TB) ? BB.vz.ND(IB, ZB, TB) === hB ? "ground" : "hazard" : "empty"
```

#### 2226. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L15853` → after: `L15841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R15841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L15841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L15841) · [Before (L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/77.js#L15853)

```diff
-   38657: (tt, et, Vt) => {
+   38483: (BB, IB, ZB) => {
```
