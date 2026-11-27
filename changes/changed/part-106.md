# Changed — Bundle Modifications Report (Part 106 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `106 / 153` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 105](part-105.md) · [Part 107 →](part-107.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/99.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/99.js` (2173 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae)

#### 2006. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L21895-L21907` → after: `L22285-L22296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22285-L22296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22285-L22296) · [Before (L21895-L21907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L21895-L21907)

```diff
-           qG(BB[MG[12]] = MG[1], BB[-MG[89]] = function(...BB) {
-             for (qG(BB[MG[12]] = MG[2], BB[MG[32]] = BB[MG[1]].length, BB[MG[0]] = [], BB[MG[19]] = MG[1], BB[MG[13]] = MG[1], BB[MG[1]].sort(((BB, OB) => BB - OB))), BB[MG[66]] = MG[1]; BB[MG[66]] < BB[MG[32]]; BB[MG[66]]++)
-               if (!(BB[MG[66]] > MG[1] && BB[MG[1]][BB[MG[66]]] === BB[MG[1]][BB[MG[66]] - MG[2]]))
-                 for (qG(BB[MG[19]] = BB[MG[66]] + MG[2], BB[MG[13]] = BB[MG[32]] - MG[2]); BB[MG[19]] < BB[MG[13]];)
-                   if (BB[MG[1]][BB[MG[66]]] + BB[MG[1]][BB[MG[19]]] + BB[MG[1]][BB[MG[13]]] < MG[1]) BB[MG[19]]++;
-                   else if (BB[MG[1]][BB[MG[66]]] + BB[MG[1]][BB[MG[19]]] + BB[MG[1]][BB[MG[13]]] > MG[1]) BB[MG[13]]--;
-             else {
-               for (BB[MG[0]].push([BB[MG[1]][BB[MG[66]]], BB[MG[1]][BB[MG[19]]], BB[MG[1]][BB[MG[13]]]]); BB[MG[19]] < BB[MG[13]] && BB[MG[1]][BB[MG[19]]] === BB[MG[1]][BB[MG[19]] + MG[2]];) BB[MG[19]]++;
-               for (; BB[MG[19]] < BB[MG[13]] && BB[MG[1]][BB[MG[13]]] === BB[MG[1]][BB[MG[13]] - MG[2]];) BB[MG[13]]--;
-               qG(BB[MG[19]]++, BB[MG[13]]--)
-             }
-             return BB[MG[0]]
-           }, console.log(BB[-MG[89]]))
+           return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
+             for (zH(ee[kH[13]] = kH[2], ee[kH[134]] = '7~|{1]<8?_&"9/y05NgdaEKPSjr)B`ivI*b^[>$%ZAnJY3MmqpDh}He,W!4zft.LO=C;26xQTUcu(X#olVFw+RGks@:', ee[kH[4]] = "" + (ee[kH[1]] || ""), ee[kH[18]] = ee[kH[4]].length, ee[-kH[136]] = [], ee[kH[135]] = kH[1], ee[kH[21]] = kH[1], ee[k … [truncated]
+               if (ee[kH[52]] = ee[kH[134]].indexOf(ee[kH[4]][ee[kH[32]]]), ee[kH[52]] !== -kH[2])
+                 if (ee[kH[56]] < kH[1]) ee[kH[56]] = ee[kH[52]];
+                 else {
+                   zH(ee[kH[56]] += ee[kH[52]] * kH[36], ee[kH[135]] |= ee[kH[56]] << ee[kH[21]], ee[kH[21]] += (ee[kH[56]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
+                   do {
+                     zH(ee[-kH[136]].push(ee[kH[135]] & kH[12]), ee[kH[135]] >>= kH[11], ee[kH[21]] -= kH[11])
+                   } while (ee[kH[21]] > kH[7]);
+                   ee[kH[56]] = -kH[2]
+                 } return ee[kH[56]] > -kH[2] && ee[-kH[136]].push((ee[kH[135]] | ee[kH[56]] << ee[kH[21]]) & kH[12]), fH(ee[-kH[136]])
+           }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
```

#### 2007. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L21909-L21925` → after: `L22298-L22312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22298-L22312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22298-L22312) · [Before (L21909-L21925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L21909-L21925)

```diff
-         throw MB(142) + MG[30] in lG && PB(), qG(console[MB(MG[90])](GB), YB[MB(144)](GB, {
-           [MB(145) + MB(146)](...BB) {
-             function OB(...BB) {
-               return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = function(...BB) {
-                 for (qG(BB[MG[12]] = MG[2], BB[-MG[3]] = '9#10y~.x>pz|NF`Mb5Wedil(t)VcOhw]TL:@}*;CZKmrIYn!6sGfv[Qu+BjJ_3SR&?X<q=%DoE87,P4^U{$kA2"gH/a', BB[MG[45]] = "" + (BB[MG[1]] || ""), BB[MG[90]] = BB[MG[45]].length, BB[MG[13]] = [], BB[MG[93]] = MG[1], BB[MG[18]] = MG[1], BB … [truncated]
-                   if (BB[MG[6]] = BB[-MG[3]].indexOf(BB[MG[45]][BB[MG[91]]]), BB[MG[6]] !== -MG[2])
-                     if (BB[-MG[92]] < MG[1]) BB[-MG[92]] = BB[MG[6]];
-                     else {
-                       qG(BB[-MG[92]] += BB[MG[6]] * MG[34], BB[MG[93]] |= BB[-MG[92]] << BB[MG[18]], BB[MG[18]] += (BB[-MG[92]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
-                       do {
-                         qG(BB[MG[13]].push(BB[MG[93]] & MG[11]), BB[MG[93]] >>= MG[3], BB[MG[18]] -= MG[3])
-                       } while (BB[MG[18]] > MG[25]);
-                       BB[-MG[92]] = -MG[2]
-                     } return BB[-MG[92]] > -MG[2] && BB[MG[13]].push((BB[MG[93]] | BB[-MG[92]] << BB[MG[18]]) & MG[11]), zG(BB[MG[13]])
-               }(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
-             }
- ... (1 more removed lines; see GitHub link above)
+         ie[kH[13]] = kH[2], ee(195);
+         const ye = Me[kH[133]][ee(198)](ie[kH[1]]),
+           Ke = ye[He(199) + He(200)] >= kH[48] ? ye[He(201) + He(202)](kH[1]) : kH[28];
+         if (Ke !== kH[28] && (0, ti.j)(Ke)) {
+           function Ue(...ee) {
+             for (zH(ee[kH[13]] = kH[2], ee[-kH[44]] = 'QGrXOd*;jgFt}^Ef%2uIC/Rb5nL[87!0~sU`c,{]qPeAkSaD#wZ|lMz=m$+"v4H9oJ<:YNT_13V)y&hWB?.(K>i6xp@', ee[kH[140]] = "" + (ee[kH[1]] || ""), ee[kH[27]] = ee[kH[140]].length, ee[kH[10]] = [], ee[kH[8]] = kH[1], ee[kH[21]] = kH[1], ee[k … [truncated]
+               if (ee[kH[52]] = ee[-kH[44]].indexOf(ee[kH[140]][ee[kH[107]]]), ee[kH[52]] !== -kH[2])
+                 if (ee[kH[67]] < kH[1]) ee[kH[67]] = ee[kH[52]];
+                 else {
+                   zH(ee[kH[67]] += ee[kH[52]] * kH[36], ee[kH[8]] |= ee[kH[67]] << ee[kH[21]], ee[kH[21]] += (ee[kH[67]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
+                   do {
+                     zH(ee[kH[10]].push(ee[kH[8]] & kH[12]), ee[kH[8]] >>= kH[11], ee[kH[21]] -= kH[11])
+                   } while (ee[kH[21]] > kH[7]);
+                   ee[kH[67]] = -kH[2]
+                 } return ee[kH[67]] > -kH[2] && ee[kH[10]].push((ee[kH[8]] | ee[kH[67]] << ee[kH[21]]) & kH[12]), fH(ee[kH[10]])
```

#### 2008. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L21964-L21966` → after: `L22315-L22317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22315-L22317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22315-L22317) · [Before (L21964-L21966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L21964-L21966)

```diff
-         function jB(...BB) {
-           return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = oB(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
-         }
+           function Fe(...ee) {
+             return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = Ue(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
+           }
```

#### 2009. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L21968-L21986` → after: `L22319-L22323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22319-L22323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22319-L22323) · [Before (L21968-L21986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L21968-L21986)

```diff
-         function yB(...BB) {
-           BB[MG[12]] = MG[1]
-         }
-         jB(162) + MG[45] in lG && yB();
-         const JB = GB[jB(163)](MG[10]),
-           MB = QO(YB) ? QB[MG[94]][jB(164)](jO(YB, JB)) : JB;
-         return function(BB) {
-           var OB, GB, YB, QB, oB;
-           const jB = null === (OB = BB.meta) || void 0 === OB ? void 0 : OB.formatVersion;
-           if (!(0, UO.k)(jB)) throw new Error(`Unsupported recording format version: ${jB}`);
-           if (!Array.isArray(BB.initialChunks) || !Array.isArray(BB.ticks)) throw new Error("Recording is missing initialChunks or ticks");
-           for (const DB of BB.ticks)
-             if (!Array.isArray(DB.structuralEvents) || !Array.isArray(DB.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
-           const yB = {
-             ...BB.meta
-           };
- ... (3 more removed lines; see GitHub link above)
+           function Je(...ee) {
+             var ie;
+             zH(ee[kH[13]] = kH[1], ie = function(...ee) {
+               zH(ee[kH[13]] = kH[2], this.bk = ee[kH[1]], this.length = kH[1], this.map = {}, this.head = kH[28], this.tail = kH[28])
+             }, ie.prototype.get = function(...ee) {
```

#### 2010. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L21988-L21991` → after: `L22325-L22361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22325-L22361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22325-L22361) · [Before (L21988-L21991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L21988-L21991)

```diff
-               return {
-                 chunkPos: BB.chunkPos,
-                 rle: kO(BB.rle),
-                 sharedBlockData: null !== (OB = mO("sharedBlockData", BB.sharedBlockData)) && void 0 !== OB ? OB : []
+               return zH(ee[kH[13]] = kH[2], ie = this.map[ee[kH[1]]]), ie ? (this.remove(ie), this.insert(ie.key, ie.val), ie.val) : -kH[2]
+             }, ie.prototype.put = function(ee, ie) {
+               this.map[ee] ? (this.remove(this.map[ee]), this.insert(ee, ie)) : this.length === this.bk ? (this.remove(this.head), this.insert(ee, ie)) : (this.insert(ee, ie), this.length++)
+             }, ie.prototype.remove = function(ee) {
+               var ie, He = ee.prev;
+               (ie = ee.next) && (ie.prev = He), He && (He.next = ie), this.head === ee && (this.head = ie), this.tail === ee && (this.tail = He), delete this.map[ee.key]
+             }, ie.prototype.insert = function(...ee) {
+               zH(ee[kH[13]] = kH[4], ee[kH[25]] = new List(ee[kH[1]], ee[kH[2]]), this.tail ? (this.tail.next = ee[kH[25]], ee[kH[25]].prev = this.tail, this.tail = ee[kH[25]]) : (this.tail = ee[kH[25]], this.head = ee[kH[25]]), this.map[ee[kH[1]]] = ee[kH[25]])
+             }, console.log(ie))
+           }
+           He(kH[126]) in pH && Je();
+           const oe = ye[Fe(kH[49])](kH[48]),
+             Re = Mi(Ke) ? Me[kH[133]][Fe(kH[121])](Ui(Ke, oe)) : oe;
+           return function(ee) {
+             var ie, He, ye, Me, Ke;
+             const Ue = null === (ie = ee.meta) || void 0 === ie ? void 0 : ie.formatVersion;
+ ... (21 more added lines; see GitHub link above)
```

#### 2011. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L21999-L22003` → after: `L22364-L22368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22364-L22368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22364-L22368) · [Before (L21999-L22003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L21999-L22003)

```diff
-           }
-         }(YO(YB)[jB(165)](MB))
-       }
-       throw new nO[MG[99]](YB)
-     })
+           }(yi(Ke)[Fe(kH[75])](Re))
+         }
+         throw new Wi[kH[9]](Ke)
+       })
+     })()
```

#### 2012. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22005` → after: `L22370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22370) · [Before (L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22005)

```diff
-   37678: (BB, OB, GB) => {
+   37802: (ee, ie, He) => {
```

#### 2013. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22007-L22009` → after: `L22372-L22374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22372-L22374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22372-L22374) · [Before (L22007-L22009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22007-L22009)

```diff
-       B: () => MB,
-       F: () => jB,
-       e: () => oB,
+       b: () => Ke,
+       c: () => be,
+       f: () => Me,
```

#### 2014. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22014-L22016` → after: `L22381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22381) · [Before (L22014-L22016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22014-L22016)

```diff
-       t: () => JB,
-       w: () => lB,
-       z: () => yB
+       t: () => Ue
```

#### 2015. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22018` → after: `L22383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22383) · [Before (L22018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22018)

```diff
-     var YB = GB(37682);
+     var ye = He(37807);
```

#### 2016. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22022` → after: `L22387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22387) · [Before (L22022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22022)

```diff
-         super(`Unsupported recording format: header ${null!==BB&&void 0!==BB?BB:"missing"}, reading v${YB.d.join(", v")}`), this.older = void 0, this.older = (0, YB.g)(BB)
+         super(`Unsupported recording format: header ${null!==ee&&void 0!==ee?ee:"missing"}, reading v${ye.d.join(", v")}`), this.older = void 0, this.older = (0, ye.g)(ee)
```

#### 2017. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22030` → after: `L22395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22395) · [Before (L22030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22030)

```diff
-       PB = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading … [truncated]
+       Re = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading … [truncated]
```

#### 2018. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22034` → after: `L22399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22399) · [Before (L22034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22034)

```diff
-   37675: (BB, OB, GB) => {
+   37799: (ee, ie, He) => {
```

#### 2019. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22036-L22041` → after: `L22401-L22406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22401-L22406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22401-L22406) · [Before (L22036-L22041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22036-L22041)

```diff
-       b: () => PB,
-       d: () => pB,
-       h: () => yB,
-       i: () => oB,
-       l: () => jB,
-       n: () => JB
+       c: () => Re,
+       g: () => fe,
+       j: () => Fe,
+       m: () => Ke,
+       q: () => Ue,
+       t: () => Je
```

#### 2020. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22043-L22044` → after: `L22408-L22409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22408-L22409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22408-L22409) · [Before (L22043-L22044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22043-L22044)

```diff
-     var YB = GB(353),
-       DB = GB(25);
+     var ye = He(347),
+       be = He(27);
```

#### 2021. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22047` → after: `L22412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22412) · [Before (L22047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22047)

```diff
-       return null === BB || void 0 === BB ? null : "string" === typeof BB ? BB : null
+       return null === ee || void 0 === ee ? null : "string" === typeof ee ? ee : null
```

#### 2022. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22059` → after: `L22424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22424) · [Before (L22059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22059)

```diff
-           pY: GB,
+           Oy: He,
```

#### 2023. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22071` → after: `L22436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22436) · [Before (L22071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22071)

```diff
-         OB[QB.pY] || (OB[QB.pY] = {}), OB[QB.pY][QB.name] = {
+         ie[Me.Oy] || (ie[Me.Oy] = {}), ie[Me.Oy][Me.name] = {
```

#### 2024. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22074-L22075` → after: `L22439-L22440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22439-L22440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22439-L22440) · [Before (L22074-L22075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22074-L22075)

```diff
-           displayName: null !== (GB = QB.displayName) && void 0 !== GB ? GB : null,
-           endTick: null !== (YB = QB.endTick) && void 0 !== YB ? YB : null,
+           displayName: null !== (He = Me.displayName) && void 0 !== He ? He : null,
+           endTick: null !== (ye = Me.endTick) && void 0 !== ye ? ye : null,
```

#### 2025. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22092` → after: `L22457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22457) · [Before (L22092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22092)

```diff
-         }(0, YB.Kc)(QB) || (GB[DB] = QB)
+         }(0, ye.yc)(Me) || (He[be] = Me)
```

#### 2026. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22112` → after: `L22477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22477) · [Before (L22112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22112)

```diff
-           if ((0, YB.Kc)(yB)) continue;
+           if ((0, ye.yc)(Fe)) continue;
```

#### 2027. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22122` → after: `L22487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22487) · [Before (L22122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22122)

```diff
-               endTime: void 0 !== OB.duration && null !== OB.duration ? (null !== (oB = OB.appliedAt) && void 0 !== oB ? oB : GB) + OB.duration : null
+               endTime: void 0 !== ie.duration && null !== ie.duration ? (null !== (Ke = ie.appliedAt) && void 0 !== Ke ? Ke : He) + ie.duration : null
```

#### 2028. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22132` → after: `L22497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22497) · [Before (L22132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22132)

```diff
-         GB && (delete GB[OB], (0, YB.Kc)(GB) && delete this.tracked[BB])
+         He && (delete He[ie], (0, ye.yc)(He) && delete this.tracked[ee])
```

#### 2029. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22136` → after: `L22501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22501) · [Before (L22136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22136)

```diff
-         0 !== BB.duration ? this.upsert(BB.pY, BB.name, {
+         0 !== ee.duration ? this.upsert(ee.Oy, ee.name, {
```

#### 2030. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22142` → after: `L22507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22507) · [Before (L22142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22142)

```diff
-         }) : this.remove(BB.pY, BB.name)
+         }) : this.remove(ee.Oy, ee.name)
```

#### 2031. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22172` → after: `L22537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22537) · [Before (L22172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22172)

```diff
-           }(0, YB.Kc)(jB) || (DB[oB] = jB)
+           }(0, ye.yc)(Ue) || (be[Ke] = Ue)
```

#### 2032. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22180-L22181` → after: `L22545-L22546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22545-L22546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22545-L22546) · [Before (L22180-L22181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22180-L22181)

```diff
-         DB.o.tM("EffectUpdate", {
-           pY: BB,
+         be.h.yR("EffectUpdate", {
+           Oy: ee,
```

#### 2033. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22190-L22191` → after: `L22555-L22556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22555-L22556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22555-L22556) · [Before (L22190-L22191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22190-L22191)

```diff
-         DB.o.tM("RemoveEffect", {
-           pY: BB,
+         be.h.yR("RemoveEffect", {
+           Oy: ee,
```

#### 2034. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22217` → after: `L22582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22582) · [Before (L22217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22217)

```diff
-               displayName: null !== (JB = ZB.displayName) && void 0 !== JB ? JB : void 0,
+               displayName: null !== (Je = pe.displayName) && void 0 !== Je ? Je : void 0,
```

#### 2035. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22229` → after: `L22594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22594) · [Before (L22229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22229)

```diff
-   37660: (BB, OB, GB) => {
+   37788: (ee, ie, He) => {
```

#### 2036. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22232-L22235` → after: `L22597-L22600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22597-L22600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22597-L22600) · [Before (L22232-L22235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22232-L22235)

```diff
-       f: () => JB,
-       h: () => zB,
-       k: () => jB,
-       n: () => PB
+       g: () => Je,
+       j: () => ke,
+       l: () => Ue,
+       o: () => Re
```

#### 2037. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22237-L22239` → after: `L22602-L22604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22602-L22604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22602-L22604) · [Before (L22237-L22239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22237-L22239)

```diff
-     var YB = GB(37655),
-       DB = GB(37668),
-       QB = GB(298);
+     var ye = He(37786),
+       be = He(37794),
+       Me = He(304);
```

#### 2038. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22243` → after: `L22608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22608) · [Before (L22243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22243)

```diff
-         [YB.f]: YB.d
+         [ye.d]: ye.b
```

#### 2039. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22248` → after: `L22613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22613) · [Before (L22248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22248)

```diff
-       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, QB.e)()
+       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, Me.c)()
```

#### 2040. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22289` → after: `L22654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22654) · [Before (L22289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22289)

```diff
-         type: YB.f
+         type: ye.d
```

#### 2041. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22294` → after: `L22659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22659) · [Before (L22294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22294)

```diff
-       return (0, YB.i)((0, DB.g)(BB))
+       return (0, ye.f)((0, be.e)(ee))
```

#### 2042. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22297` → after: `L22662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22662) · [Before (L22297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22297)

```diff
-   37127: (BB, OB, GB) => {
+   37239: (ee, ie, He) => {
```

#### 2043. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22301-L22306` → after: `L22666-L22671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22666-L22671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22666-L22671) · [Before (L22301-L22306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22301-L22306)

```diff
-     var YB = GB(16),
-       DB = GB(92),
-       QB = GB(31),
-       oB = GB(4018),
-       jB = GB(3885),
-       yB = GB(7198);
+     var ye = He(18),
+       be = He(97),
+       Me = He(35),
+       Ke = He(3977),
+       Ue = He(3808),
+       Fe = He(7296);
```

#### 2044. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22315` → after: `L22680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22680) · [Before (L22315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22315)

```diff
-       (0, jB.n)(BB) && !(0, jB.j)(BB) && (OB = QB.g.getItem(JB), PB = Date.now(), "number" !== typeof OB || PB < OB || PB - OB >= MB) && (0, oB.e)((() => {
+       (0, Ue.k)(ee) && !(0, Ue.j)(ee) && (ie = Me.i.getItem(Je), Re = Date.now(), "number" !== typeof ie || Re < ie || Re - ie >= oe) && (0, Ke.e)((() => {
```

#### 2045. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22317-L22318` → after: `L22682-L22683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22682-L22683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22682-L22683) · [Before (L22317-L22318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22317-L22318)

```diff
-           if ("landingPage" !== YB.c.get("gameState")) return;
-           const BB = await (0, yB.e)();
+           if ("landingPage" !== ye.e.get("gameState")) return;
+           const ee = await (0, Fe.h)();
```

#### 2046. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22320` → after: `L22685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22685) · [Before (L22320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22320)

```diff
-           QB.g.setItem(JB, Date.now());
+           Me.i.setItem(Je, Date.now());
```

#### 2047. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22323-L22324` → after: `L22688-L22689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22688-L22689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22688-L22689) · [Before (L22323-L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22323-L22324)

```diff
-           } = await Promise.all([GB.e(89), GB.e(149), GB.e(145)]).then((() => GB(44453)));
-           await OB(BB, BB.listing) || QB.g.removeItem(JB)
+           } = await Promise.all([He.e(89), He.e(149), He.e(145)]).then((() => He(44490)));
+           await ie(ee, ee.listing) || Me.i.removeItem(Je)
```

#### 2048. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22331` → after: `L22696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22696) · [Before (L22331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22331)

```diff
-   9629: (BB, OB, GB) => {
+   9693: (ee, ie, He) => {
```

#### 2049. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22335-L22336` → after: `L22701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22701) · [Before (L22335-L22336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22335-L22336)

```diff
-       j: () => QB,
-       l: () => oB
+       i: () => Ke
```

#### 2050. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22341` → after: `L22706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22706) · [Before (L22341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22341)

```diff
-       return `${OB}\n${null!==BB&&void 0!==BB?BB:""}`
+       return `${ie}\n${null!==ee&&void 0!==ee?ee:""}`
```

#### 2051. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22362` → after: `L22727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22727) · [Before (L22362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22362)

```diff
-   37163: (BB, OB, GB) => {
+   37294: (ee, ie, He) => {
```

#### 2052. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22364` → after: `L22729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22729) · [Before (L22364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22364)

```diff
-       d: () => yB
+       c: () => Fe
```

#### 2053. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22366-L22370` → after: `L22731-L22735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22731-L22735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22731-L22735) · [Before (L22366-L22370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22366-L22370)

```diff
-     var YB = GB(331),
-       DB = GB(16),
-       QB = GB(37166),
-       oB = GB(1699),
-       jB = GB(2085);
+     var ye = He(335),
+       be = He(18),
+       Me = He(37301),
+       Ke = He(1620),
+       Ue = He(2046);
```

#### 2054. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22374` → after: `L22739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22739) · [Before (L22374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22374)

```diff
-       if (!DB.c.get("isKeydownEnabled") || BB.repeat) return;
+       if (!be.e.get("isKeydownEnabled") || ee.repeat) return;
```

#### 2055. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22376-L22377` → after: `L22741-L22742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22741-L22742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22741-L22742) · [Before (L22376-L22377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22376-L22377)

```diff
-       "Escape" === BB.key ? (0, oB.i)(BB) : null !== (GB = jB.t.OpenSettings) && void 0 !== GB && GB.includes(MB) ? (0, oB.A)(BB, YB.p.SETTINGS) : null !== (yB = jB.t.OpenCharacterCustomization) && void 0 !== yB && yB.includes(MB) ? (0, QB.b)() || (0, oB.A)(BB, YB.p.CUSTOMISATION … [truncated]
-         showDebugOverlay: !DB.c.get("showDebugOverlay")
+       "Escape" === ee.key ? (0, Ke.g)(ee) : null !== (He = Ue.q.OpenSettings) && void 0 !== He && He.includes(oe) ? (0, Ke.u)(ee, ye.r.SETTINGS) : null !== (Fe = Ue.q.OpenCharacterCustomization) && void 0 !== Fe && Fe.includes(oe) ? (0, Me.e)() || (0, Ke.u)(ee, ye.r.CUSTOMISATION … [truncated]
+         showDebugOverlay: !be.e.get("showDebugOverlay")
```

#### 2056. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22381` → after: `L22746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22746) · [Before (L22381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22381)

```diff
-   37129: (BB, OB, GB) => {
+   37244: (ee, ie, He) => {
```

#### 2057. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22383-L22384` → after: `L22748-L22749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22748-L22749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22748-L22749) · [Before (L22383-L22384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22383-L22384)

```diff
-       b: () => iB,
-       f: () => XB
+       e: () => ae,
+       i: () => Ce
```

#### 2058. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22386-L22388` → after: `L22751-L22753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22751-L22753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22751-L22753) · [Before (L22386-L22388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22386-L22388)

```diff
-     var YB = GB(641),
-       DB = GB(1225),
-       QB = GB(162);
+     var ye = He(610),
+       be = He(1178),
+       Me = He(153);
```

#### 2059. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22392` → after: `L22757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22757) · [Before (L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22392)

```diff
-       return `${oB}${BB}`
+       return `${Ke}${ee}`
```

#### 2060. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22402-L22417` → after: `L22767-L22782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22767-L22782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22767-L22782) · [Before (L22402-L22417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22402-L22417)

```diff
-     var MB = GB(1246),
-       PB = GB(1217),
-       zB = GB(25),
-       lB = GB(1200),
-       pB = GB(1871),
-       qB = GB(1908),
-       ZB = GB(3325),
-       NB = GB(1338),
-       RB = GB(1350),
-       WB = GB(1540),
-       AB = GB(1186),
-       VB = GB(37132),
-       SB = GB(31),
-       nB = GB(120),
-       UB = GB(1919),
-       fB = GB(37160);
+     var oe = He(1192),
+       Re = He(1169),
+       ke = He(27),
+       qe = He(1155),
+       fe = He(1833),
+       Te = He(1857),
+       pe = He(3203),
+       Xe = He(1294),
+       ze = He(1305),
+       Be = He(1490),
+       Ee = He(1141),
+       ge = He(37252),
+       Oe = He(35),
+       de = He(125),
+       We = He(1862),
+       te = He(37286);
```

#### 2061. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22450` → after: `L22815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22815) · [Before (L22450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22450)

```diff
-         this.deps.enabled && this.deps.jP("game_server_route", "cf_retry_joined", BB)
+         this.deps.enabled && this.deps.RR("game_server_route", "cf_retry_joined", ee)
```

#### 2062. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22454` → after: `L22819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22819) · [Before (L22454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22454)

```diff
-         if (null === BB) return void this.deps.jP("game_server_route", "cf_retry_failed:matchmake", 0);
+         if (null === ee) return void this.deps.RR("game_server_route", "cf_retry_failed:matchmake", 0);
```

#### 2063. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22458` → after: `L22823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22823) · [Before (L22458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22458)

```diff
-         void 0 === OB ? this.deps.jP("game_server_route", "cf_retry_failed:other", 0) : "refused" === OB.at ? this.deps.jP("game_server_route", "cf_retry_failed:refused", OB.code) : this.deps.jP("game_server_route", `cf_retry_failed:${OB.at}`, OB.code)
+         void 0 === ie ? this.deps.RR("game_server_route", "cf_retry_failed:other", 0) : "refused" === ie.at ? this.deps.RR("game_server_route", "cf_retry_failed:refused", ie.code) : this.deps.RR("game_server_route", `cf_retry_failed:${ie.at}`, ie.code)
```

#### 2064. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22466` → after: `L22831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22831) · [Before (L22466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22466)

```diff
-         this.deps.jP("game_server_route", YB ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
+         this.deps.RR("game_server_route", ye ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
```

#### 2065. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22476` → after: `L22841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22841) · [Before (L22476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22476)

```diff
-         this.deps.enabled && (this.reportArm(), this.deps.jP("game_server_route", "cf_join_left", BB))
+         this.deps.enabled && (this.reportArm(), this.deps.RR("game_server_route", "cf_join_left", ee))
```

#### 2066. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22483` → after: `L22848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22848) · [Before (L22483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22483)

```diff
-         if (GB) this.reportArm(), this.deps.jP("game_server_route", "cf_join", 0);
+         if (He) this.reportArm(), this.deps.RR("game_server_route", "cf_join", 0);
```

#### 2067. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22496` → after: `L22861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22861) · [Before (L22496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22496)

```diff
-         if ("refused" === DB.at) return this.reportArm(), this.deps.jP("game_server_route", "cf_join_refused", DB.code), null;
+         if ("refused" === be.at) return this.reportArm(), this.deps.RR("game_server_route", "cf_join_refused", be.code), null;
```

#### 2068. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22498` → after: `L22863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22863) · [Before (L22498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22498)

```diff
-         if (this.reportArm(QB), this.deps.jP("game_server_route", `cf_join_failed:${DB.at}`, DB.code), null !== GB && this.deps.jP("game_server_route", "cf_failed_since_route", GB), this.aliasFailedAt = this.deps.now(), void 0 === YB) return null;
+         if (this.reportArm(Me), this.deps.RR("game_server_route", `cf_join_failed:${be.at}`, be.code), null !== He && this.deps.RR("game_server_route", "cf_failed_since_route", He), this.aliasFailedAt = this.deps.now(), void 0 === ye) return null;
```

#### 2069. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22514` → after: `L22879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22879) · [Before (L22514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22514)

```diff
-         this.armReported || this.deps.now() >= kB || (this.armReported = !0, this.deps.jP("game_server_route", "holdout" === (null !== BB && void 0 !== BB ? BB : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
+         this.armReported || this.deps.now() >= Ze || (this.armReported = !0, this.deps.RR("game_server_route", "holdout" === (null !== ee && void 0 !== ee ? ee : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
```

#### 2070. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22524` → after: `L22889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22889) · [Before (L22524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22524)

```diff
-         return this.deps.jP("game_server_route", OB, GB), "blocked" === OB && (this.store({
+         return this.deps.RR("game_server_route", ie, He), "blocked" === ie && (this.store({
```

#### 2071. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22552` → after: `L22917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22917) · [Before (L22552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22552)

```diff
-         "ours" === (null === YB || void 0 === YB ? void 0 : YB.answer) ? this.deps.jP("game_server_rtt", OB, YB.ms): this.deps.jP("game_server_rtt", GB, 0)
+         "ours" === (null === ye || void 0 === ye ? void 0 : ye.answer) ? this.deps.RR("game_server_rtt", ie, ye.ms): this.deps.RR("game_server_rtt", He, 0)
```

#### 2072. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22555` → after: `L22920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22920) · [Before (L22555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22555)

```diff
-         return this.deps.probe(`https://${BB}/version`, 8e3)
+         return this.deps.probe(`https://${ee}/version`, 8e3)
```

#### 2073. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22584-L22585` → after: `L22949-L22950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22949-L22950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22949-L22950) · [Before (L22584-L22585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22584-L22585)

```diff
-         const QB = null !== (OB = null !== (GB = null !== (YB = BB.recoveryArm) && void 0 !== YB ? YB : null === (DB = this.stored()) || void 0 === DB ? void 0 : DB.recoveryArm) && void 0 !== GB ? GB : this.pageArm) && void 0 !== OB ? OB : void 0;
-         this.deps.storage.setItem(KB, void 0 === QB ? BB : {
+         const Me = null !== (ie = null !== (He = null !== (ye = ee.recoveryArm) && void 0 !== ye ? ye : null === (be = this.stored()) || void 0 === be ? void 0 : be.recoveryArm) && void 0 !== He ? He : this.pageArm) && void 0 !== ie ? ie : void 0;
+         this.deps.storage.setItem(De, void 0 === Me ? ee : {
```

#### 2074. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22591` → after: `L22956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22956) · [Before (L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22591)

```diff
-       storage: SB.g,
+       storage: Oe.i,
```

#### 2075. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22594` → after: `L22959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22959) · [Before (L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22594)

```diff
-           YB = await (0, lB.q)(BB, {
+           ye = await (0, qe.o)(ee, {
```

#### 2076. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22603` → after: `L22968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22968) · [Before (L22603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22603)

```diff
-         return null !== YB && void 0 !== YB ? YB : {
+         return null !== ye && void 0 !== ye ? ye : {
```

#### 2077. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22608` → after: `L22973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22973) · [Before (L22608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22608)

```diff
-       jP: pB.A,
+       RR: fe.E,
```

#### 2078. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22615-L22616` → after: `L22980-L22981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22980-L22981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22980-L22981) · [Before (L22615-L22616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22615-L22616)

```diff
-       sleep: UB.c,
-       seatLegs: fB.g
+       sleep: We.e,
+       seatLegs: te.h
```

#### 2079. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22618-L22619` → after: `L22983-L22984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22983-L22984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22983-L22984) · [Before (L22618-L22619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22618-L22619)

```diff
-     var IB = GB(1790),
-       FB = GB(9629);
+     var Ye = He(1728),
+       Ve = He(9693);
```

#### 2080. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22624` → after: `L22989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22989) · [Before (L22624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22624)

```diff
-         if ((0, YB.Q)(oB)) {
+         if ((0, ye.P)(Ke)) {
```

#### 2081. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22626-L22627` → after: `L22991-L22992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22991-L22992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22991-L22992) · [Before (L22626-L22627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22626-L22627)

```diff
-           const BB = OB instanceof DB.e ? null : (0, FB.l)((0, FB.f)(OB, GB));
-           let YB = await (null !== BB && void 0 !== BB ? BB : XB(OB, GB, jB));
+           const ee = ie instanceof be.f ? null : (0, Ve.i)((0, Ve.e)(ie, He));
+           let ye = await (null !== ee && void 0 !== ee ? ee : Ce(ie, He, Ue));
```

#### 2082. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22633` → after: `L22998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR22998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L22998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L22998) · [Before (L22633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22633)

```diff
-           if (WB = YB.at, JB.aborted || ZB.g.matchmakingEnded(QB.isError() ? null : YB.at), QB.isError()) {
+           if (Be = ye.at, Je.aborted || pe.h.matchmakingEnded(Me.isError() ? null : ye.at), Me.isError()) {
```

#### 2083. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22639` → after: `L23004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23004) · [Before (L22639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22639)

```diff
-           ZB.g.skipPlayWait();
+           pe.h.skipPlayWait();
```

#### 2084. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22645` → after: `L23010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23010) · [Before (L22645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22645)

```diff
-             lobbyName: OB instanceof DB.e ? OB.getLobbyName() : OB
+             lobbyName: ie instanceof be.f ? ie.getLobbyName() : ie
```

#### 2085. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22649-L22650` → after: `L23014-L23015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23014-L23015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23014-L23015) · [Before (L22649-L22650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22649-L22650)

```diff
-         console.log(`Connecting to ${PB.gameNameWithVariation} in lobby ${PB.lobbyName} on game server ${PB.endpoint}`), zB.o.tM("matchmakeAndPlayStepCompleted", {
-           step: QB.l.REQUEST_TO_MATCHMAKING,
+         console.log(`Connecting to ${Re.gameNameWithVariation} in lobby ${Re.lobbyName} on game server ${Re.endpoint}`), ke.h.yR("matchmakeAndPlayStepCompleted", {
+           step: Me.k.REQUEST_TO_MATCHMAKING,
```

#### 2086. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22652` → after: `L23017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23017) · [Before (L22652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22652)

```diff
-         }), (0, pB.j)(), qB.b.markGameLoadStart((0, IB.g)()), (0, RB.n)({
+         }), (0, fe.n)(), Te.c.markGameLoadStart((0, Ye.g)()), (0, ze.v)({
```

#### 2087. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22656` → after: `L23021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23021) · [Before (L22656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22656)

```diff
-         }), zB.o.tM("loadingScreenState", "loadingPage:loadingGame");
+         }), ke.h.yR("loadingScreenState", "loadingPage:loadingGame");
```

#### 2088. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22666` → after: `L23031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23031) · [Before (L22666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22666)

```diff
-               (0, RB.n)({
+               (0, ze.v)({
```

#### 2089. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22675` → after: `L23040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23040) · [Before (L22675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22675)

```diff
-         }, VB = !(0, YB.Q)(oB), SB = OB => BB({
+         }, ge = !(0, ye.P)(Ke), Oe = ie => ee({
```

#### 2090. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22686` → after: `L23051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23051) · [Before (L22686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22686)

```diff
-           const YB = new lB.e(GB),
+           const ye = new qe.d(He),
```

#### 2091. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22705` → after: `L23070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23070) · [Before (L22705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22705)

```diff
-         let kB = null !== UB && void 0 !== UB ? UB : fB.blockedAt,
+         let Ze = null !== We && void 0 !== We ? We : te.blockedAt,
```

#### 2092. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22711` → after: `L23076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23076) · [Before (L22711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22711)

```diff
-           if (uB || (kB ??= performance.now(), zB.o.tM("gameServerRouteSwitched")), JB.aborted) return LB(kB), gB();
+           if (Pe || (Ze ??= performance.now(), ke.h.yR("gameServerRouteSwitched")), Je.aborted) return ce(Ze), xe();
```

#### 2093. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22729` → after: `L23094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23094) · [Before (L22729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22729)

```diff
-             mB.afterAutoRetryJoined(null !== (cB = KB()) && void 0 !== cB ? cB : 0)
+             Ae.afterAutoRetryJoined(null !== (me = De()) && void 0 !== me ? me : 0)
```

#### 2094. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22732` → after: `L23097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23097) · [Before (L22732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22732)

```diff
-         return dB.isError() ? (!0 === dB.asError().debugResult.rB && JB.aborted && LB(kB), dB.asError().forward()) : (mB.afterJoined(PB.endpoint), zB.o.tM("joinedGame", {
+         return we.isError() ? (!0 === we.asError().debugResult.Ce && Je.aborted && ce(Ze), we.asError().forward()) : (Ae.afterJoined(Re.endpoint), ke.h.yR("joinedGame", {
```

#### 2095. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22735` → after: `L23100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23100) · [Before (L22735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22735)

```diff
-         }), (0, NB.K)(), window.gtag ? window.gtag("event", "conversion", {
+         }), (0, Xe.R)(), window.gtag ? window.gtag("event", "conversion", {
```

#### 2096. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22737` → after: `L23102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23102) · [Before (L22737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22737)

```diff
-         }) : console.error("window.gtag not defined"), MB.c.value({
+         }) : console.error("window.gtag not defined"), oe.e.value({
```

#### 2097. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22749` → after: `L23114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23114) · [Before (L22749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22749)

```diff
-       return MB.c.errorWithCode("Left the game while it loaded", QB.l.REQUEST_TO_MATCHMAKING, {
+       return oe.e.errorWithCode("Left the game while it loaded", Me.k.REQUEST_TO_MATCHMAKING, {
```

#### 2098. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22751` → after: `L23116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23116) · [Before (L22751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22751)

```diff
-         rB: !0
+         Ce: !0
```

#### 2099. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22766-L22767` → after: `L23131-L23132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23131-L23132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23131-L23132) · [Before (L22766-L22767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22766-L22767)

```diff
-       return (0, YB.Q)(BB) || BB instanceof DB.e || !(BB.length > PB.T) ? await WB.b.matchmakePlayer(GB, BB, OB, (0, VB.b)()).then((BB => {
-         if (!1 === BB.succeeded) return MB.c.errorWithCode(BB.failReason, QB.l.REQUEST_TO_MATCHMAKING, {
+       return (0, ye.P)(ee) || ee instanceof be.f || !(ee.length > Re.O) ? await Be.b.matchmakePlayer(He, ee, ie, (0, ge.e)()).then((ee => {
+         if (!1 === ee.succeeded) return oe.e.errorWithCode(ee.failReason, Me.k.REQUEST_TO_MATCHMAKING, {
```

#### 2100. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22775` → after: `L23140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23140) · [Before (L22775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22775)

```diff
-         return DB.isError() ? DB.asError().forward() : MB.c.value({
+         return be.isError() ? be.asError().forward() : oe.e.value({
```

#### 2101. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22780` → after: `L23145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23145) · [Before (L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22780)

```diff
-       })).catch((BB => (console.error("Bad response from the matchmaking server:", BB), MB.c.errorWithCode(BB.toString(), QB.l.REQUEST_TO_MATCHMAKING, {
+       })).catch((ee => (console.error("Bad response from the matchmaking server:", ee), oe.e.errorWithCode(ee.toString(), Me.k.REQUEST_TO_MATCHMAKING, {
```

#### 2102. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22783` → after: `L23148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23148) · [Before (L22783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22783)

```diff
-       })))) : (console.error("Invalid lobby ID:", BB), MB.c.errorWithCode("This lobby link's name is too long. Ask for a new link.", QB.l.REQUEST_TO_MATCHMAKING, {
+       })))) : (console.error("Invalid lobby ID:", ee), oe.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", Me.k.REQUEST_TO_MATCHMAKING, {
```

#### 2103. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22790` → after: `L23155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23155) · [Before (L22790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22790)

```diff
-       return OB.isError() ? MB.c.errorWithCode(OB.asError().message, QB.l.CONNECT_TO_GAME_SERVER, {
+       return ie.isError() ? oe.e.errorWithCode(ie.asError().message, Me.k.CONNECT_TO_GAME_SERVER, {
```

#### 2104. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22792` → after: `L23157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23157) · [Before (L22792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22792)

```diff
-       }) : MB.c.value(OB.getValue())
+       }) : oe.e.value(ie.getValue())
```

#### 2105. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22795` → after: `L23160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23160) · [Before (L22795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22795)

```diff
-       (0, RB.l)("/")
+       (0, ze.o)("/")
```

#### 2106. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22798` → after: `L23163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23163) · [Before (L22798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22798)

```diff
-   37139: (BB, OB, GB) => {
+   37260: (ee, ie, He) => {
```

#### 2107. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22800-L22803` → after: `L23165-L23168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23165-L23168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23165-L23168) · [Before (L22800-L22803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22800-L22803)

```diff
-       c: () => zB,
-       d: () => MB,
-       g: () => lB,
-       h: () => PB
+       b: () => ke,
+       f: () => oe,
+       h: () => qe,
+       j: () => Re
```

#### 2108. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22805-L22808` → after: `L23170-L23173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23170-L23173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23170-L23173) · [Before (L22805-L22808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22805-L22808)

```diff
-     var YB = GB(353),
-       DB = GB(675),
-       QB = GB(679),
-       oB = GB(31);
+     var ye = He(347),
+       be = He(656),
+       Me = He(663),
+       Ke = He(35);
```

#### 2109. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22818-L22819` → after: `L23183-L23184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23183-L23184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23183-L23184) · [Before (L22818-L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22818-L22819)

```diff
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i;
-       (0, QB.h)(BB, jB)
+       let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m;
+       (0, Me.k)(ee, Ue)
```

#### 2110. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22823` → after: `L23188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23188) · [Before (L22823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22823)

```diff
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).setItem(JB, !0)
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).setItem(Je, !0)
```

#### 2111. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22827` → after: `L23192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23192) · [Before (L22827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22827)

```diff
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i;
+       let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m;
```

#### 2112. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22832` → after: `L23197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23197) · [Before (L22832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22832)

```diff
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.i;
+       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke.m;
```

#### 2113. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22839` → after: `L23204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23204) · [Before (L22839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22839)

```diff
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).getItem(JB)
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).getItem(Je)
```

#### 2114. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22842-L22844` → after: `L23207-L23208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23207-L23208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23207-L23208) · [Before (L22842-L22844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22842-L22844)

```diff
-       return zB = null !== GB && null !== MB && (0, QB.f)(OB, jB) && function(BB, OB, GB) {
-           const DB = (0, YB.ac)(BB),
-             QB = (0, YB.ac)(OB),
+       return ke = null !== He && null !== oe && (0, Me.h)(ie, Ue) && function(ee, ie, He) {
+           const be = (0, ye.Xb)(ee),
```

#### 2115. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22846` → after: `L23210-L23211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23210-L23211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23210-L23211) · [Before (L22846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22846)

```diff
-             jB = (0, YB.Xb)(OB);
+             Ke = (0, ye.Qb)(ee),
+             Ue = (0, ye.Qb)(ie);
```

#### 2116. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22848` → after: `L23213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23213) · [Before (L22848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22848)

```diff
-         }(MB, BB, PB) ? GB : (0, DB.d)(), (0, QB.k)(OB, jB, zB), OB.setItem(yB, BB),
+         }(oe, ee, Re) ? He : (0, be.d)(), (0, Me.m)(ie, Ue, ke), ie.setItem(Fe, ee),
```

#### 2117. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22850` → after: `L23215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23215) · [Before (L22850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22850)

```diff
-           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).removeItem(JB)
+           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).removeItem(Je)
```

#### 2118. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22854` → after: `L23219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23219) · [Before (L22854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22854)

```diff
-   37132: (BB, OB, GB) => {
+   37252: (ee, ie, He) => {
```

#### 2119. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22856-L22857` → after: `L23221-L23222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23221-L23222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23221-L23222) · [Before (L22856-L22857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22856-L22857)

```diff
-       b: () => VB,
-       d: () => SB
+       e: () => ge,
+       f: () => Oe
```

#### 2120. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22859-L22860` → after: `L23224-L23227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23224-L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23224-L23227) · [Before (L22859-L22860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22859-L22860)

```diff
-     var YB = GB(1049),
-       DB = GB(204),
+     var ye = He(1033),
+       be = He(198),
+       Me = He(345),
+       Ke = He(618),
```

#### 2121. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22875-L22876` → after: `L23232-L23241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23232-L23241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23232-L23241) · [Before (L22875-L22876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22875-L22876)

```diff
-       WB = GB(649),
-       AB = GB(37142);
+       Re = He(4908),
+       ke = He(97),
+       qe = He(125),
+       fe = He(1768),
+       Te = He(107),
+       pe = He(37260),
+       Xe = He(35),
+       ze = He(660),
+       Be = He(627),
+       Ee = He(37266);
```

#### 2122. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22880` → after: `L23245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23245) · [Before (L22880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22880)

```diff
-       return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (OB = navigator.language) && void 0 !== OB ? OB : "none"], "En-GB"]
+       return [...null !== (ee = navigator.languages) && void 0 !== ee ? ee : [null !== (ie = navigator.language) && void 0 !== ie ? ie : "none"], "En-GB"]
```

#### 2123. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22884-L22885` → after: `L23249-L23250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23249-L23250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23249-L23250) · [Before (L22884-L22885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22884-L22885)

```diff
-       const UB = (0, YB.l)(OB) ? (0, YB.r)(OB) : null,
-         fB = BB.isLoggedIn() && void 0 !== (0, DB.c)(QB.k, lB.siteUsed) ? (0, WB.d)() : null,
+       const We = (0, ye.k)(ie) ? (0, ye.r)(ie) : null,
+         te = ee.isLoggedIn() && void 0 !== (0, be.b)(Me.q, qe.siteUsed) ? (0, Be.e)() : null,
```

#### 2124. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22891-L22892` → after: `L23256-L23257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23256-L23257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23256-L23257) · [Before (L22891-L22892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22891-L22892)

```diff
-             joinDiscord: !!NB.g.getItem("DiscordPressed"),
-             newGo: PB.c,
+             joinDiscord: !!Xe.i.getItem("DiscordPressed"),
+             newGo: Re.d,
```

#### 2125. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22903` → after: `L23268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23268) · [Before (L22903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22903)

```diff
-             deviceType: (0, qB.d)()
+             deviceType: (0, Te.b)()
```

#### 2126. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22911` → after: `L23276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23276) · [Before (L22911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22911)

```diff
-           playSessionId: (0, ZB.g)(OB),
+           playSessionId: (0, pe.h)(ie),
```

#### 2127. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22913-L22916` → after: `L23278-L23281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23278-L23281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23278-L23281) · [Before (L22913-L22916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22913-L22916)

```diff
-           clientReason: JB.u.reason,
-           budgetBasis: (0, AB.j)(),
-           ...null !== MB.r && {
-             diagClaim: MB.r.claimId
+           clientReason: Je.y.reason,
+           budgetBasis: (0, Ee.k)(),
+           ...null !== oe.o && {
+             diagClaim: oe.o.claimId
```

#### 2128. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22922-L22923` → after: `L23287-L23288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23287-L23288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23287-L23288) · [Before (L22922-L22923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22922-L22923)

```diff
-       return null !== UB && (0, jB.Tc)(UB) ? (kB.lobbyName = (0, YB.h)(UB, (0, YB.n)(OB), GB), {
-         roomName: `classic_${yB.g}`,
+       return null !== We && (0, Ue.Jc)(We) ? (Ze.lobbyName = (0, ye.g)(We, (0, ye.n)(ie), He), {
+         roomName: `classic_${Fe.i}`,
```

#### 2129. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22931` → after: `L23296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23296) · [Before (L22931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22931)

```diff
-   9439: (BB, OB, GB) => {
+   9505: (ee, ie, He) => {
```

#### 2130. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22933` → after: `L23298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23298) · [Before (L22933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22933)

```diff
-       e: () => oB
+       b: () => Ke
```

#### 2131. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22935-L22937` → after: `L23300-L23302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23300-L23302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23300-L23302) · [Before (L22935-L22937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22935-L22937)

```diff
-     var YB = GB(9448),
-       DB = GB(641),
-       QB = GB(120);
+     var ye = He(9509),
+       be = He(610),
+       Me = He(125);
```

#### 2132. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22941` → after: `L23306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23306) · [Before (L22941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22941)

```diff
-       if ((0, DB.Q)(BB)) return !0;
+       if ((0, be.P)(ee)) return !0;
```

#### 2133. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22947` → after: `L23312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23312) · [Before (L22947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22947)

```diff
-             if ((0, YB.h)(OB.items[BB], oB)) return !1
+             if ((0, ye.i)(ie.items[ee], Ke)) return !1
```

#### 2134. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22952` → after: `L23317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23317) · [Before (L22952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22952)

```diff
-   37242: (BB, OB, GB) => {
+   37398: (ee, ie, He) => {
```

#### 2135. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22963-L22964` → after: `L23328-L23329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23328-L23329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23328-L23329) · [Before (L22963-L22964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22963-L22964)

```diff
-       c: () => YB,
-       e: () => DB
+       d: () => ye,
+       h: () => be
```

#### 2136. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22967` → after: `L23332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23332) · [Before (L22967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22967)

```diff
-   37248: (BB, OB, GB) => {
+   37409: (ee, ie, He) => {
```

#### 2137. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22970-L22972` → after: `L23335-L23337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23335-L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23335-L23337) · [Before (L22970-L22972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22970-L22972)

```diff
-       d: () => zB,
-       f: () => NB,
-       i: () => JB
+       c: () => ke,
+       g: () => Xe,
+       j: () => Je
```

#### 2138. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22974-L22979` → after: `L23339-L23344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23339-L23344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23339-L23344) · [Before (L22974-L22979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22974-L22979)

```diff
-     var YB = GB(16),
-       DB = GB(2617),
-       QB = GB(2619),
-       oB = GB(2626),
-       jB = GB(2697),
-       yB = GB(25);
+     var ye = He(18),
+       be = He(2492),
+       Me = He(2495),
+       Ke = He(2503),
+       Ue = He(2591),
+       Fe = He(27);
```

#### 2139. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L22982` → after: `L23347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23347) · [Before (L22982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L22982)

```diff
-       return (!(0, oB.d)() || 0 === BB && 0 === OB) && (0, QB.r)(DB.f.Joystick, 0, BB, OB, 0)
+       return (!(0, Ke.b)() || 0 === ee && 0 === ie) && (0, Me.y)(be.f.Joystick, 0, ee, ie, 0)
```

#### 2140. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23009` → after: `L23374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23374) · [Before (L23009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23009)

```diff
-       return document.documentElement.classList.contains(jB.h)
+       return document.documentElement.classList.contains(Ue.l)
```

#### 2141. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23084` → after: `L23449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23449) · [Before (L23084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23084)

```diff
-           GB = YB.c.get("worldPanelHud");
+           He = ye.e.get("worldPanelHud");
```

#### 2142. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23092-L23093` → after: `L23457-L23458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23457-L23458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23457-L23458) · [Before (L23092-L23093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23092-L23093)

```diff
-     }(QB.r);
-     (0, yB.p)(jB.e, (() => {
+     }(Me.y);
+     (0, Fe.j)(Ue.f, (() => {
```

#### 2143. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23097` → after: `L23462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23462) · [Before (L23097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23097)

```diff
-   37584: (BB, OB, GB) => {
+   37731: (ee, ie, He) => {
```

#### 2144. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23099` → after: `L23464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23464) · [Before (L23099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23099)

```diff
-       return null === BB || null === OB ? BB === OB : BB[0] === OB[0] && BB[1] === OB[1] && BB[2] === OB[2]
+       return null === ee || null === ie ? ee === ie : ee[0] === ie[0] && ee[1] === ie[1] && ee[2] === ie[2]
```

#### 2145. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23106-L23107` → after: `L23471-L23472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23471-L23472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23471-L23472) · [Before (L23106-L23107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23106-L23107)

```diff
-       c: () => DB,
-       d: () => YB
+       e: () => be,
+       g: () => ye
```

#### 2146. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23110` → after: `L23475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23475) · [Before (L23110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23110)

```diff
-   37541: (BB, OB, GB) => {
+   37675: (ee, ie, He) => {
```

#### 2147. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23112-L23113` → after: `L23477-L23478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23477-L23478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23477-L23478) · [Before (L23112-L23113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23112-L23113)

```diff
-       c: () => yB,
-       f: () => jB
+       e: () => Fe,
+       h: () => Ue
```

#### 2148. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23215` → after: `L23580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23580) · [Before (L23215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23215)

```diff
-   37547: (BB, OB, GB) => {
+   37689: (ee, ie, He) => {
```

#### 2149. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23217` → after: `L23582-L23583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23582-L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23582-L23583) · [Before (L23217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23217)

```diff
-       e: () => yB,
+       c: () => Fe,
+       f: () => Ue,
```

#### 2150. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23220-L23221` → after: `L23586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23586) · [Before (L23220-L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23220-L23221)

```diff
-       n: () => QB,
-       p: () => JB,
+       q: () => Je,
```

#### 2151. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23225` → after: `L23589-L23590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23589-L23590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23589-L23590) · [Before (L23225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23225)

```diff
-       v: () => zB
+       w: () => qe,
+       z: () => ke
```

#### 2152. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23227` → after: `L23592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23592) · [Before (L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23227)

```diff
-     var YB = GB(1238);
+     var ye = He(1189);
```

#### 2153. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23235` → after: `L23600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23600) · [Before (L23235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23235)

```diff
-       return BB === YB.f || BB === YB.i
+       return ee === ye.j || ee === ye.k
```

#### 2154. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23239` → after: `L23604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23604) · [Before (L23239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23239)

```diff
-       return BB === YB.f && OB === YB.i || BB === YB.i && OB === YB.f
+       return ee === ye.j && ie === ye.k || ee === ye.k && ie === ye.j
```

#### 2155. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23243-L23245` → after: `L23608-L23610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23608-L23610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23608-L23610) · [Before (L23243-L23245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23243-L23245)

```diff
-       const OB = YB.i in BB,
-         GB = YB.f in BB;
-       return OB && GB ? null : OB ? YB.i : GB ? YB.f : null
+       const ie = ye.k in ee,
+         He = ye.j in ee;
+       return ie && He ? null : ie ? ye.k : He ? ye.j : null
```

#### 2156. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23249-L23250` → after: `L23614-L23615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23614-L23615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23614-L23615) · [Before (L23249-L23250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23249-L23250)

```diff
-       const YB = `${OB}/`;
-       return BB.filter((BB => BB.startsWith(YB))).map((BB => [BB, `${GB}/${BB.slice(YB.length)}`]))
+       const ye = `${ie}/`;
+       return ee.filter((ee => ee.startsWith(ye))).map((ee => [ee, `${He}/${ee.slice(ye.length)}`]))
```

#### 2157. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23261` → after: `L23626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23626) · [Before (L23261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23261)

```diff
-       return `${PB}${BB}`
+       return `${Re}${ee}`
```

#### 2158. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23265` → after: `L23630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23630) · [Before (L23265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23265)

```diff
-       return `/node_modules/@plugins/${BB}/${OB}`
+       return `/node_modules/@plugins/${ee}/${ie}`
```

#### 2159. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23273` → after: `L23638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23638) · [Before (L23273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23273)

```diff
-       }(OB) ? OB : null
+       }(ie) ? ie : null
```

#### 2160. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23276` → after: `L23641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23641) · [Before (L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23276)

```diff
-   37555: (BB, OB, GB) => {
+   37696: (ee, ie, He) => {
```

#### 2161. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23278-L23282` → after: `L23643-L23647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23643-L23647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23643-L23647) · [Before (L23278-L23282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23278-L23282)

```diff
-       b: () => jB,
-       e: () => DB,
-       g: () => oB,
-       k: () => yB,
-       n: () => QB
+       d: () => Ue,
+       f: () => be,
+       i: () => Ke,
+       l: () => Fe,
+       m: () => Me
```

#### 2162. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23284` → after: `L23649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23649) · [Before (L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23284)

```diff
-     var YB = GB(2646);
+     var ye = He(2523);
```

#### 2163. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23290` → after: `L23655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23655) · [Before (L23290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23290)

```diff
-       return BB.endsWith(".bloxdschem") && (0, YB.q)(BB.slice(0, -11) + ".ts") && BB.length <= 64
+       return ee.endsWith(".bloxdschem") && (0, ye.s)(ee.slice(0, -11) + ".ts") && ee.length <= 64
```

#### 2164. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23297` → after: `L23662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23662) · [Before (L23297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23297)

```diff
-   5345: (BB, OB, GB) => {
+   5326: (ee, ie, He) => {
```

#### 2165. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23300-L23303` → after: `L23665-L23668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23665-L23668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23665-L23668) · [Before (L23300-L23303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23300-L23303)

```diff
-       e: () => YB,
-       g: () => QB,
-       j: () => yB,
-       k: () => oB
+       h: () => ye,
+       k: () => Me,
+       l: () => Fe,
+       n: () => Ke
```

#### 2166. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23447` → after: `L23812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23812) · [Before (L23447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23447)

```diff
-       return "string" !== typeof BB ? BB : Object.hasOwn(QB, BB) ? QB[BB] : null
+       return "string" !== typeof ee ? ee : Object.hasOwn(Me, ee) ? Me[ee] : null
```

#### 2167. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23479-L23480` → after: `L23844-L23845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23844-L23845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23844-L23845) · [Before (L23479-L23480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23479-L23480)

```diff
-   9482: () => {},
-   10688: BB => {
+   9548: () => {},
+   10722: ee => {
```

#### 2168. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23483` → after: `L23848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23848) · [Before (L23483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23483)

```diff
-   18784: BB => {
+   18888: ee => {
```

#### 2169. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23486` → after: `L23851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23851) · [Before (L23486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23486)

```diff
-   20707: BB => {
+   20800: ee => {
```

#### 2170. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23489` → after: `L23854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23854) · [Before (L23489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23489)

```diff
-   20714: BB => {
+   20806: ee => {
```

#### 2171. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23492` → after: `L23857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23857) · [Before (L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23492)

```diff
-   20722: BB => {
+   20813: ee => {
```

#### 2172. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23495` → after: `L23860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23860) · [Before (L23495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23495)

```diff
-   20726: BB => {
+   20822: ee => {
```

#### 2173. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L23498` → after: `L23863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/99.js#L23863) · [Before (L23498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/99.js#L23498)

```diff
-   20728: BB => {
+   20829: ee => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/babylon-backend.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/babylon-backend.js` (235 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d)

#### 1. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   42124: (BB, OB, GB) => {
+   42196: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L14` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L14)

```diff
-     var YB = GB(42129),
-       DB = GB(38682);
-     class QB extends((0, YB.e)(DB.e)) {}(0, YB.h)(DB.e, QB);
-     var oB = GB(38005);
+     var ye = He(42201),
+       be = He(38850);
+     class Me extends((0, ye.e)(be.c)) {}(0, ye.h)(be.c, Me);
+     var Ke = He(38126);
```

#### 3. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L16-L20` → after: `L16-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L16-L20) · [Before (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L16-L20)

```diff
-     var yB = GB(38531);
-     class JB extends((0, YB.e)(yB.f)) {}(0, YB.h)(yB.f, JB);
-     var MB = GB(38025),
-       PB = GB(41258),
-       zB = GB(38019);
+     var Fe = He(38685);
+     class Je extends((0, ye.e)(Fe.g)) {}(0, ye.h)(Fe.g, Je);
+     var oe = He(38146),
+       Re = He(41380),
+       ke = He(38141);
```

#### 4. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L23)

```diff
-         super(BB, OB, GB), (0, MB.j)(BB)
+         super(ee, ie, He), (0, oe.i)(ee)
```

#### 5. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28-L29` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L28-L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L28-L29)

```diff
-     }(0, YB.h)(zB.f, lB), (0, zB.g)({
-       disableUnusedSpecularTerm: YB.b,
+     }(0, ye.h)(ke.f, qe), (0, ke.j)({
+       disableUnusedSpecularTerm: ye.d,
```

#### 6. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var pB = GB(39376);
-     class qB extends((0, YB.e)(pB.d)) {}(0, YB.h)(pB.d, qB);
-     var ZB = GB(39497),
-       NB = GB(37899),
-       RB = GB(38801),
-       WB = GB(38011);
-     class AB extends((0, YB.e)(ZB.d)) {}(0, YB.h)(ZB.d, AB);
-     class VB extends((0, YB.e)(NB.d)) {}(0, YB.h)(NB.d, VB);
-     class SB extends((0, YB.e)(RB.l)) {}(0, YB.h)(RB.l, SB);
-     class nB extends((0, YB.e)(WB.c)) {}(0, YB.h)(WB.c, nB)
+     var fe = He(39479);
+     class Te extends((0, ye.e)(fe.g)) {}(0, ye.h)(fe.g, Te);
+     var pe = He(39577),
+       Xe = He(38026),
+       ze = He(38949),
+       Be = He(38137);
+     class Ee extends((0, ye.e)(pe.c)) {}(0, ye.h)(pe.c, Ee);
+     class ge extends((0, ye.e)(Xe.b)) {}(0, ye.h)(Xe.b, ge);
+     class Oe extends((0, ye.e)(ze.m)) {}(0, ye.h)(ze.m, Oe);
+     class de extends((0, ye.e)(Be.d)) {}(0, ye.h)(Be.d, de)
```

#### 7. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   44687: (BB, OB, GB) => {
+   44740: (ee, ie, He) => {
```

#### 8. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L49-L61` → after: `L49-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L49-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L49-L61) · [Before (L49-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L49-L61)

```diff
-     var YB = GB(44689),
-       DB = (GB(40974), GB(42118), GB(41472), GB(44699)),
-       QB = GB(37885),
-       oB = GB(37771),
-       jB = GB(44709),
-       yB = GB(44712),
-       JB = GB(37962),
-       MB = (GB(42129), GB(44726)),
-       PB = GB(44718),
-       zB = GB(39412),
-       lB = GB(44732),
-       pB = GB(40864),
-       qB = GB(39388);
+     var ye = He(44748),
+       be = (He(41092), He(42193), He(41601), He(44758)),
+       Me = He(38020),
+       Ke = He(37913),
+       Ue = He(44769),
+       Fe = He(44778),
+       Je = He(38075),
+       oe = (He(42201), He(44789)),
+       Re = He(44783),
+       ke = He(39508),
+       qe = He(44791),
+       fe = He(40954),
+       Te = He(39492);
```

#### 9. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L68-L73` → after: `L68-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L68-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L68-L73) · [Before (L68-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L68-L73)

```diff
-       }, ((DB, QB) => `(${((BB,OB,GB)=>0===OB?`${BB} < 1`:OB===GB-1?`${BB} >= ${OB}`:`${BB} == ${OB}`)(BB,QB,OB)} ? ${GB(QB)} : ${YB})`)).join("\n\t\t+ "),
-       VB = (BB, OB, GB) => `vec4 ${BB}(int i) {\n\treturn ${AB("i",GB,(BB=>`gpuParticleSystem[${OB+BB}]`),"vec4(0.0)")};\n}\n`,
-       SB = `\n${VB("colorPositionsAt",WB(RB.colorPositions),qB.b/4)}\n${VB("color1At",WB(RB.color1),qB.b)}\n${VB("color2At",WB(RB.color2),qB.b)}\n${VB("velocityAt",WB(RB.lZ),qB.b)}\n${VB("remapStopAt",WB(RB.remap),qB.b)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${AB("j",4,(B … [truncated]
-       nB = (BB, OB, GB, YB) => BB ? `${GB}(${YB})` : `gpuParticleSystem[${OB} + ${YB}]`,
-       UB = BB => `gpuParticleSystem[${BB>>2}].${"xyzw"[3&BB]}`,
-       fB = BB => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${qB.b}\n#define COLOR_POSITIONS ${WB(RB.colorPositions)}\n#define COLOR1 ${WB(RB.color1)}\n#define COLOR2 ${WB(RB.color2)}\n#define VELOCITY ${WB(RB.lZ)}\n#define R … [truncated]
+       }, ((be, Me) => `(${((ee,ie,He)=>0===ie?`${ee} < 1`:ie===He-1?`${ee} >= ${ie}`:`${ee} == ${ie}`)(ee,Me,ie)} ? ${He(Me)} : ${ye})`)).join("\n\t\t+ "),
+       ge = (ee, ie, He) => `vec4 ${ee}(int i) {\n\treturn ${Ee("i",He,(ee=>`gpuParticleSystem[${ie+ee}]`),"vec4(0.0)")};\n}\n`,
+       Oe = `\n${ge("colorPositionsAt",Be(ze.colorPositions),Te.b/4)}\n${ge("color1At",Be(ze.color1),Te.b)}\n${ge("color2At",Be(ze.color2),Te.b)}\n${ge("velocityAt",Be(ze.Op),Te.b)}\n${ge("remapStopAt",Be(ze.remap),Te.b)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${Ee("j",4,(e … [truncated]
+       de = (ee, ie, He, ye) => ee ? `${He}(${ye})` : `gpuParticleSystem[${ie} + ${ye}]`,
+       We = ee => `gpuParticleSystem[${ee>>2}].${"xyzw"[3&ee]}`,
+       te = ee => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Te.b}\n#define COLOR_POSITIONS ${Be(ze.colorPositions)}\n#define COLOR1 ${Be(ze.color1)}\n#define COLOR2 ${Be(ze.color2)}\n#define VELOCITY ${Be(ze.Op)}\n#define R … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L75)

```diff
-     pB.b.ShadersStore[`${ZB}VertexShader`] = fB(!1), pB.b.ShadersStore[`${ZB}PixelShader`] = kB, pB.b.ShadersStore[`${NB}VertexShader`] = fB(!0), pB.b.ShadersStore[`${NB}PixelShader`] = kB;
+     fe.d.ShadersStore[`${pe}VertexShader`] = te(!1), fe.d.ShadersStore[`${pe}PixelShader`] = Ze, fe.d.ShadersStore[`${Xe}VertexShader`] = te(!0), fe.d.ShadersStore[`${Xe}PixelShader`] = Ze;
```

#### 11. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L78-L80` → after: `L78-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L78-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L78-L80) · [Before (L78-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L78-L80)

```diff
-     var uB = GB(39385),
-       mB = GB(44735);
-     class IB extends uB.b {
+     var Pe = He(39488),
+       Ae = He(44799);
+     class Ye extends Pe.d {
```

#### 12. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L82)

```diff
-         super(BB, OB, GB), this.renderer = GB, this.eq = YB, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(qB.n), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
+         super(ee, ie, He), this.renderer = He, this.yp = ye, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Te.n), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L89-L91` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L89-L91) · [Before (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L89-L91)

```diff
-             const BB = Math.floor(QB / qB.j),
-               GB = Math.min(OB, (BB + 1) * qB.j);
-             YB.texSubImage2D(YB.TEXTURE_2D, 0, QB % qB.j * 4, BB, 4 * (GB - QB), 1, YB.RGBA_INTEGER, YB.UNSIGNED_INT, DB, QB * qB.d), QB = GB
+             const ee = Math.floor(Me / Te.l),
+               He = Math.min(ie, (ee + 1) * Te.l);
+             ye.texSubImage2D(ye.TEXTURE_2D, 0, Me % Te.l * 4, ee, 4 * (He - Me), 1, ye.RGBA_INTEGER, ye.UNSIGNED_INT, be, Me * Te.c), Me = He
```

#### 14. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L95)

```diff
-         const DB = YB.Lp();
+         const be = ye.Nf();
```

#### 15. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L98-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L98-L99) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L98-L99)

```diff
-           oB = Math.min(QB, qB.j);
-         this.records = DB.createRawTexture(null, 4 * oB, Math.ceil(QB / oB), MB.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, MB.b.TEXTURE_NEAREST_SAMPLINGMODE, null, MB.b.TEXTURETYPE_UNSIGNED_INTEGER)
+           Ke = Math.min(Me, Te.l);
+         this.records = be.createRawTexture(null, 4 * Ke, Math.ceil(Me / Ke), oe.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, oe.c.TEXTURE_NEAREST_SAMPLINGMODE, null, oe.c.TEXTURETYPE_UNSIGNED_INTEGER)
```

#### 16. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L102-L103` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L102-L103) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L102-L103)

```diff
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.eq.getAnimationRatio() || 1;
-         const OB = this.eq.getFrameId();
+         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.yp.getAnimationRatio() || 1;
+         const ie = this.yp.getFrameId();
```

#### 17. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L116)

```diff
-         (0, mB.j)(this, this.uniforms, this.uniformBits, BB);
+         (0, Ae.h)(this, this.uniforms, this.uniformBits, ee);
```

#### 18. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L119)

```diff
-         (0, mB.k)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (OB = this.ramp) || void 0 === OB || OB.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = PB.d.CreateRGBATexture(this.rampTexels.texels, qB.h, … [truncated]
+         (0, Ae.l)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ie = this.ramp) || void 0 === ie || ie.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Re.c.CreateRGBATexture(this.rampTexels.texels, Te.i, … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L129)

```diff
-         this.eq = BB, this.reportFailure = OB, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = ZB, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32A … [truncated]
+         this.yp = ee, this.reportFailure = ie, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = pe, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32A … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L132)

```diff
-         null === YB && null !== GB ? (console.warn(`GPU particles link their fallback here: ${GB}`), this.reportFailure(GB, !0)) : null !== YB && this.fail(YB === FB ? FB : null !== GB && void 0 !== GB ? GB : YB)
+         null === ye && null !== He ? (console.warn(`GPU particles link their fallback here: ${He}`), this.reportFailure(He, !0)) : null !== ye && this.fail(ye === Ve ? Ve : null !== He && void 0 !== He ? He : ye)
```

#### 21. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L135-L138` → after: `L135-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L135-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L135-L138) · [Before (L135-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L135-L138)

```diff
-         const GB = qB.j * this.engine.getCaps().maxTextureSize;
-         OB > GB && this.warnOnce(`capacity:${BB}`, `particle system ${BB} holds ${GB} particles, not ${OB}: its records texture's limit`);
-         const YB = new IB(BB, Math.min(OB, GB), this, this.eq);
-         return this.eq.addParticleSystem(YB), YB
+         const He = Te.l * this.engine.getCaps().maxTextureSize;
+         ie > He && this.warnOnce(`capacity:${ee}`, `particle system ${ee} holds ${He} particles, not ${ie}: its records texture's limit`);
+         const ye = new Ye(ee, Math.min(ie, He), this, this.yp);
+         return this.yp.addParticleSystem(ye), ye
```

#### 22. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L143)

```diff
-         for (const YB of (0, zB.o)(BB.blendMode))
+         for (const ye of (0, ke.p)(ee.blendMode))
```

#### 23. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L148)

```diff
-         this.eq._toBeDisposed.push(BB)
+         this.yp._toBeDisposed.push(ee)
```

#### 24. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L151)

```diff
-         this.eq.removeParticleSystem(BB), BB.releaseGl()
+         this.yp.removeParticleSystem(ee), ee.releaseGl()
```

#### 25. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L158)

```diff
-           eq: YB,
+           yp: ye,
```

#### 26. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L164)

```diff
-           jB = null !== (OB = BB.ramp) && void 0 !== OB ? OB : this.whiteRamp;
+           Ue = null !== (ie = ee.ramp) && void 0 !== ie ? ie : this.whiteRamp;
```

#### 27. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L166)

```diff
-         for (const yB of (0, zB.o)(BB.blendMode)) {
+         for (const Fe of (0, ke.p)(ee.blendMode)) {
```

#### 28. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L168)

```diff
-           GB.enableEffect(OB), OB.setTexture("gpuParticleTexture", BB.texture.mirror), OB.setTexture("gpuParticleRampTexture", jB), OB._bindTexture("gpuParticleRecords", BB.records), OB.setMatrix("gpuParticleView", YB.getViewMatrix()), OB.setMatrix("gpuParticleProjection", YB.get … [truncated]
+           He.enableEffect(ie), ie.setTexture("gpuParticleTexture", ee.texture.mirror), ie.setTexture("gpuParticleRampTexture", Ue), ie._bindTexture("gpuParticleRecords", ee.records), ie.setMatrix("gpuParticleView", ye.getViewMatrix()), ie.setMatrix("gpuParticleProjection", ye.get … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L170)

```diff
-         return GB.setAlphaMode(MB.b.ALPHA_DISABLE), oB
+         return He.setAlphaMode(oe.c.ALPHA_DISABLE), Ke
```

#### 30. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L190)

```diff
-             if (OB) return `${YB} ${OB}`
+             if (ie) return `${ye} ${ie}`
```

#### 31. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L204)

```diff
-           BB === this.shader && this.programFailed(null !== (YB = this.gl()) && void 0 !== YB && YB.isContextLost() ? FB : function(BB) {
+           ee === this.shader && this.programFailed(null !== (ye = this.gl()) && void 0 !== ye && ye.isContextLost() ? Ve : function(ee) {
```

#### 32. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L211)

```diff
-         this.linkingPair ? this.pairFailure ??= BB : this.fail(BB)
+         this.linkingPair ? this.pairFailure ??= ee : this.fail(ee)
```

#### 33. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L215-L216` → after: `L215-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L215-L216) · [Before (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L215-L216)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${BB}`), this.reportFailure(BB, !1);
-           for (const BB of this.eq.rW.slice()) BB instanceof IB && BB.disposeOnStop && BB.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${ee}`), this.reportFailure(ee, !1);
+           for (const ee of this.yp.zW.slice()) ee instanceof Ye && ee.disposeOnStop && ee.dispose()
```

#### 34. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L220-L221` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L220-L221) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L220-L221)

```diff
-     var LB = GB(40825);
-     class gB extends LB.c {
+     var ce = He(40913);
+     class xe extends ce.b {
```

#### 35. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L234-L250` → after: `L234-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L234-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L234-L250) · [Before (L234-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L234-L250)

```diff
-     var wB = GB(41213),
-       EB = GB(42111),
-       cB = GB(40950),
-       hB = GB(41180),
-       aB = GB(41171),
-       eB = GB(41089),
-       TB = GB(42169),
-       bB = GB(38193),
-       CB = GB(44737),
-       HB = GB(44746),
-       vB = GB(44748),
-       sB = GB(41112),
-       xB = GB(3187),
-       tB = GB(38094),
-       BO = GB(41307),
-       OO = GB(38156),
- ... (1 more removed lines; see GitHub link above)
+     var ve = He(41306),
+       ue = He(42177),
+       me = He(41067),
+       le = He(41273),
+       Se = He(41269),
+       ne = He(41195),
+       je = He(42244),
+       se = He(38341),
+       Ie = He(44803),
+       he = He(44806),
+       Ne = He(44812),
+       Ge = He(41216),
+       re = He(3084),
+       Qe = He(38209),
+       ei = He(41437),
+       ii = He(38284),
+ ... (1 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L253-L254)

```diff
-       if (BB.visibility < 1 || !BB.isVisible || !BB.isEnabled() || BB.metadata[GO.e] || !BB.isReady()) return !0;
-       const OB = BB.iW;
+       if (ee.visibility < 1 || !ee.isVisible || !ee.isEnabled() || ee.metadata[Hi.d] || !ee.isReady()) return !0;
+       const ie = ee.pW;
```

#### 37. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L258)

```diff
-           DB = YB.cp();
+           be = ye.iT();
```

#### 38. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L265)

```diff
-         this.kz = BB, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, OB.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.uk = ee, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ie.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 39. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L275-L278` → after: `L275-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L275-L278) · [Before (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L275-L278)

```diff
-           kz: YB
-         } = this, DB = null === (OB = YB.pW) || void 0 === OB ? void 0 : OB.visibility;
-         if (!DB || !BB || YB.UP.Dq) return !1;
-         if (!(YB.mP.gDB[0] >= OO.e)) return !1;
+           uk: ye
+         } = this, be = null === (ie = ye.iW) || void 0 === ie ? void 0 : ie.visibility;
+         if (!be || !ee || ye.PR.pT) return !1;
+         if (!(ye.xR.KMe[0] >= ii.f)) return !1;
```

#### 40. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L281)

```diff
-         const oB = YB.Tz,
+         const Ke = ye.yq,
```

#### 41. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L284)

```diff
-         return yB[0] = jB.x + oB[0], yB[1] = jB.y + oB[1], yB[2] = jB.z + oB[2], !!DB.eyeClear(yB[0], yB[1], yB[2], BB.minZ, QB, YB.mP) && (this.vis = DB, this.passable.clear(), this.count = 0, !0)
+         return Fe[0] = Ue.x + Ke[0], Fe[1] = Ue.y + Ke[1], Fe[2] = Ue.z + Ke[2], !!be.eyeClear(Fe[0], Fe[1], Fe[2], ee.minZ, Me, ye.xR) && (this.vis = be, this.passable.clear(), this.count = 0, !0)
```

#### 42. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L305-L306` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L305-L306) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L305-L306)

```diff
-           mP: jB
-         } = this.kz, [yB, JB] = jB.gDB, MB = null !== GB && GB.update(YB[0], YB[1], YB[2], jB.qP, yB, JB, this.passable);
+           xR: Ue
+         } = this.uk, [Fe, Je] = Ue.KMe, oe = null !== He && He.update(ye[0], ye[1], ye[2], Ue.ER, Fe, Je, this.passable);
```

#### 43. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L317)

```diff
-           sB.d.prototype.push.call(BB, YB)
+           Ge.f.prototype.push.call(ee, ye)
```

#### 44. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L322-L327` → after: `L322-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L322-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L322-L327) · [Before (L322-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L322-L327)

```diff
-     var QO = GB(38146),
-       oO = GB(38100),
-       jO = GB(41283),
-       yO = GB(44751),
-       JO = GB(41287),
-       MO = GB(41220);
+     var Mi = He(38265),
+       Ki = He(38220),
+       Ui = He(41414),
+       Fi = He(44815),
+       Ji = He(41421),
+       oi = He(41323);
```

#### 45. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L341-L342` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L341-L342) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L341-L342)

```diff
-       if (!OB || !0 !== OB[tB.q]) return;
-       const GB = OB[tB.t],
+       if (!ie || !0 !== ie[Qe.s]) return;
+       const He = ie[Qe.y],
```

#### 46. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L350)

```diff
-       const OB = BB.iW;
+       const ie = ee.pW;
```

#### 47. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L352)

```diff
-         const BB = OB[GB].cp();
+         const ee = ie[He].iT();
```

#### 48. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L356)

```diff
-         const BB = OB[GB].cp();
+         const ee = ie[He].iT();
```

#### 49. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L366)

```diff
-       if ("function" !== typeof GB) throw new Error(`terrainDrawState: Babylon has no ${OB} to hook`);
+       if ("function" !== typeof He) throw new Error(`terrainDrawState: Babylon has no ${ie} to hook`);
```

#### 50. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L371)

```diff
-       const QB = GB.mP.qP,
+       const Me = He.xR.ER,
```

#### 51. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L375)

```diff
-         JB = new QO.d(QB, BB.Lp());
+         Je = new Mi.c(Me, ee.Nf());
```

#### 52. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L377)

```diff
-         if (RO.has(BB) || (RO.add(BB), BB.onContextLostObservable.add(pO), BB.ip.add(pO)), NO) return;
+         if (Bi.has(ee) || (Bi.add(ee), ee.onContextLostObservable.add(fi), ee.hf.add(fi)), zi) return;
```

#### 53. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L379)

```diff
-         const OB = yO.b.prototype,
+         const ie = Fi.c.prototype,
```

#### 54. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L386-L387` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L386-L387) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L386-L387)

```diff
-         const YB = WO(MO.b.prototype, "_syncParentEnabledState");
-         Object.assign(MO.b.prototype, {
+         const ye = Ei(oi.d.prototype, "_syncParentEnabledState");
+         Object.assign(oi.d.prototype, {
```

#### 55. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L392-L393` → after: `L392-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L392-L393) · [Before (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L392-L393)

```diff
-         const DB = WO(JO.c.prototype, "resetDrawCache");
-         JO.c.prototype.resetDrawCache = function(BB, OB) {
+         const be = Ei(Ji.b.prototype, "resetDrawCache");
+         Ji.b.prototype.resetDrawCache = function(ee, ie) {
```

#### 56. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L396)

```diff
-         const QB = jO.b.prototype,
+         const Me = Ui.e.prototype,
```

#### 57. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L407)

```diff
-       }(BB.Lp());
+       }(ee.Nf());
```

#### 58. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L422-L423)

```diff
-             GB = BB.aDB[0],
-             YB = BB.aDB[1];
+             He = ee.qMe[0],
+             ye = ee.qMe[1];
```

#### 59. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L439)

```diff
-             QB = yB.ZP(BB.activeCamera),
+             Me = Fe.gR(ee.activeCamera),
```

#### 60. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L442)

```diff
-             const OB = BB.Lp().currentRenderPassId;
+             const ie = ee.Nf().currentRenderPassId;
```

#### 61. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L459)

```diff
-             if (!BO.c.IsInFrustum(OB.aDB, YB)) continue;
+             if (!ei.d.IsInFrustum(ie.qMe, ye)) continue;
```

#### 62. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L469)

```diff
-                 if (oB && YB[OB] === JB) lB && 1 === DB[OB] && YO(zB) && 0, yB.see(zB, 1 === DB[OB] ? PB : -1);
+                 if (Ke && ye[ie] === Je) qe && 1 === be[ie] && yi(ke) && 0, Fe.see(ke, 1 === be[ie] ? Re : -1);
```

#### 63. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L472)

```diff
-                   const BB = !0 === zB.metadata[oO.k];
+                   const ee = !0 === ke.metadata[Ki.h];
```

#### 64. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L476)

```diff
-                 } else QB ? AB(zB, PB, !0 === zB.metadata[oO.k]) : sB.d.prototype.push.call(GB, zB)
+                 } else Me ? Ee(ke, Re, !0 === ke.metadata[Ki.h]) : Ge.f.prototype.push.call(He, ke)
```

#### 65. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L483)

```diff
-         const QB = OB.hDB;
+         const Me = ie.kMe;
```

#### 66. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L486` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L486) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L486)

```diff
-           OB.isEnabled() && sB.d.prototype.push.call(YB, OB)
+           ie.isEnabled() && Ge.f.prototype.push.call(ye, ie)
```

#### 67. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L490-L491` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L490-L491) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L490-L491)

```diff
-         eDB: () => yB.culled,
-         UDB: (BB, OB) => {
+         fMe: () => Fe.culled,
+         Nbe: (ee, ie) => {
```

#### 68. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L495)

```diff
-             JB = `${DB}|${jB}|${yB}`;
+             Je = `${be}|${Ue}|${Fe}`;
```

#### 69. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L499-L501` → after: `L499-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L499-L501) · [Before (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L499-L501)

```diff
-             GB.IGB([DB * QB - 1, jB * QB - 1, yB * QB - 1], null, BB), MB = Object.assign(YB(BB, QB + 2), {
-               TDB: JB,
-               bDB: 0,
+             He.NHe([be * Me - 1, Ue * Me - 1, Fe * Me - 1], null, ee), oe = Object.assign(ye(ee, Me + 2), {
+               TMe: Je,
+               pMe: 0,
```

#### 70. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L505)

```diff
-             }), WB(MB), lB[MB._noaSlot] = (0, xB.i)(DB, jB, yB), pB[3 * MB._noaSlot] = DB, pB[3 * MB._noaSlot + 1] = jB, pB[3 * MB._noaSlot + 2] = yB, oB.set(JB, MB)
+             }), Be(oe), qe[oe._noaSlot] = (0, re.f)(be, Ue, Fe), fe[3 * oe._noaSlot] = be, fe[3 * oe._noaSlot + 1] = Ue, fe[3 * oe._noaSlot + 2] = Fe, Ke.set(Je, oe)
```

#### 71. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L507)

```diff
-           MB.bDB++, BB.metadata[tB.u] = MB
+           oe.pMe++, ee.metadata[Qe.B] = oe
```

#### 72. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L509-L511` → after: `L509-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L509-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L509-L511) · [Before (L509-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L509-L511)

```diff
-         sF: BB => {
-           const OB = BB.metadata[tB.u];
-           OB && (OB.bDB--, OB.bDB <= 0 && (oB.delete(OB.TDB), ZB.push(OB._noaSlot)), BB.metadata[tB.u] = null)
+         gL: ee => {
+           const ie = ee.metadata[Qe.B];
+           ie && (ie.pMe--, ie.pMe <= 0 && (Ke.delete(ie.TMe), pe.push(ie._noaSlot)), ee.metadata[Qe.B] = null)
```

#### 73. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L513` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L513) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L513)

```diff
-         cDB: (BB, OB) => {
+         RMe: (ee, ie) => {
```

#### 74. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L515` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L515) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L515)

```diff
-             YB = OB.metadata[tB.u];
+             ye = ie.metadata[Qe.B];
```

#### 75. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L529)

```diff
-         POB: BB => {
+         Zie: ee => {
```

#### 76. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L531-L532` → after: `L531-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L531-L532) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L531-L532)

```diff
-             OB.LDB.CDB(BB), OB.iDB.CDB(BB);
-             for (const GB of OB.aDB) GB.CDB(BB);
+             ie.MMe.XMe(ee), ie.bMe.XMe(ee);
+             for (const He of ie.qMe) He.XMe(ee);
```

#### 77. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L554)

```diff
-         if (!(BB * (BB >= 0 ? oB : YB) + OB * (OB >= 0 ? jB : DB) + MB * (MB >= 0 ? yB : QB) + GB[JB + 3] >= 0)) return !1
+         if (!(ee * (ee >= 0 ? Ke : ye) + ie * (ie >= 0 ? Ue : be) + oe * (oe >= 0 ? Fe : Me) + He[Je + 3] >= 0)) return !1
```

#### 78. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L558)

```diff
-     var nO = GB(38440);
+     var Wi = He(38597);
```

#### 79. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L561-L564` → after: `L561-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L561-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L561-L564) · [Before (L561-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L561-L564)

```diff
-         var GB = BB.eq;
-         GB.pDB(new vB.b(GB));
-         var YB = new CB.d(yB);
-         GB.vDB = YB, YB.blocks = [];
+         var He = ee.yp;
+         He.Cbe(new Ne.b(He));
+         var ye = new Ie.e(Fe);
+         He.EMe = ye, ye.blocks = [];
```

#### 80. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L567-L569` → after: `L567-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L567-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L567-L569) · [Before (L567-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L567-L569)

```diff
-         this.textPlanes = jB, this.eDB = () => DB.eDB(), this.POB = BB => {
-           MB(YB, BB), DB.POB(BB)
-         }, this.UDB = (OB, GB, oB) => {
+         this.textPlanes = Ue, this.fMe = () => be.fMe(), this.Zie = ee => {
+           oe(ye, ee), be.Zie(ee)
+         }, this.Nbe = (ie, He, Ke) => {
```

#### 81. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L571)

```diff
-           if (!OB.metadata[tB.t] && !OB.metadata[tB.o]) {
+           if (!ie.metadata[Qe.y] && !ie.metadata[Qe.p]) {
```

#### 82. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L573-L574` → after: `L573-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L573-L574) · [Before (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L573-L574)

```diff
-               var yB = YB.hDB;
-               if (OB.metadata[tB.A] && !OB.parent) {
+               var Fe = ye.kMe;
+               if (ie.metadata[Qe.F] && !ie.parent) {
```

#### 83. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L576-L577` → after: `L576-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L576-L577) · [Before (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L576-L577)

```diff
-                 var MB = OB.Gw().xDB;
-                 OB.metadata[tB.D] = MB.center.length() + MB.radius, OB.rp = !0
+                 var oe = ie.WC().OMe;
+                 ie.metadata[Qe.H] = oe.center.length() + oe.radius, ie.Gf = !0
```

#### 84. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L579)

```diff
-               return yB.push(OB), OB.metadata[tB.h] = yB, void(OB.metadata[tB.o] = !0)
+               return Fe.push(ie), ie.metadata[Qe.l] = Fe, void(ie.metadata[Qe.p] = !0)
```

#### 85. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L589)

```diff
-               BB.kz.IGB(NB, null, RB), ZB = PB(RB, JB), YB.blocks.push(ZB), QB[qB] = ZB, ZB.TDB = qB
+               ee.uk.NHe(Xe, null, ze), pe = Re(ze, Je), ye.blocks.push(pe), Me[Te] = pe, pe.TMe = Te
```

#### 86. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L591)

```diff
-             DB.UDB(OB, oB), DB.cDB(ZB, OB), ZB.bDB = (ZB.bDB || 0) + 1, OB.metadata[tB.t] = ZB, OB.metadata[tB.q] = !0, OB.rp = !0
+             be.Nbe(ie, Ke), be.RMe(pe, ie), pe.pMe = (pe.pMe || 0) + 1, ie.metadata[Qe.y] = pe, ie.metadata[Qe.s] = !0, ie.Gf = !0
```

#### 87. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L593)

```diff
-         }, this.sF = BB => {
+         }, this.gL = ee => {
```

#### 88. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L595-L597` → after: `L595-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L595-L597) · [Before (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L595-L597)

```diff
-             BB.metadata[tB.o] && ((0, xB.p)(BB.metadata[tB.h], BB), BB.metadata[tB.o] = !1), BB.metadata[tB.h] === jB && (BB.rp = !1), BB.metadata[tB.h] = void 0, BB.metadata[tB.D] = void 0;
-             var OB = BB.metadata[tB.t];
-             OB && OB.entries && (BB.metadata[tB.q] && DB.removeEntry(OB, BB), OB.bDB--, OB.bDB <= 0 && (delete QB[OB.TDB], (0, xB.p)(YB.blocks, OB))), DB.sF(BB), BB.metadata[tB.t] = null, BB.metadata[tB.q] = !1
+             ee.metadata[Qe.p] && ((0, re.n)(ee.metadata[Qe.l], ee), ee.metadata[Qe.p] = !1), ee.metadata[Qe.l] === Ue && (ee.Gf = !1), ee.metadata[Qe.l] = void 0, ee.metadata[Qe.H] = void 0;
+             var ie = ee.metadata[Qe.y];
+             ie && ie.entries && (ee.metadata[Qe.s] && be.removeEntry(ie, ee), ie.pMe--, ie.pMe <= 0 && (delete Me[ie.TMe], (0, re.n)(ye.blocks, ie))), be.gL(ee), ee.metadata[Qe.y] = null, ee.metadata[Qe.s] = !1
```

#### 89. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L599` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L599) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L599)

```diff
-         }, this.EBB = function(BB) {
+         }, this.bie = function(ee) {
```

#### 90. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L601-L604` → after: `L601-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L601-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L601-L604) · [Before (L601-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L601-L604)

```diff
-           if (BB.metadata[tB.t]) {
-             if (BB.metadata[tB.q] === OB) return;
-             var GB = BB.metadata[tB.t];
-             GB && GB.entries && (OB ? DB.cDB(GB, BB) : DB.removeEntry(GB, BB)), BB.metadata[tB.q] = OB
+           if (ee.metadata[Qe.y]) {
+             if (ee.metadata[Qe.s] === ie) return;
+             var He = ee.metadata[Qe.y];
+             He && He.entries && (ie ? be.RMe(He, ee) : be.removeEntry(He, ee)), ee.metadata[Qe.s] = ie
```

#### 91. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L606-L608` → after: `L606-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L606-L608) · [Before (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L606-L608)

```diff
-             if (BB.metadata[tB.o] === OB) return;
-             var QB = BB.metadata[tB.h] || YB.hDB;
-             OB ? QB.push(BB) : (0, xB.p)(QB, BB), BB.metadata[tB.o] = OB
+             if (ee.metadata[Qe.p] === ie) return;
+             var Me = ee.metadata[Qe.l] || ye.kMe;
+             ie ? Me.push(ee) : (0, re.n)(Me, ee), ee.metadata[Qe.p] = ie
```

#### 92. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L612)

```diff
-           JB = OB * BB.kz.mP.qP,
+           Je = ie * ee.uk.xR.ER,
```

#### 93. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L615)

```diff
-               BB.LDB.CDB(OB), BB.iDB.CDB(OB), BB.aDB.forEach((BB => BB.CDB(OB))), BB.blocks && MB(BB, OB)
+               ee.MMe.XMe(ie), ee.bMe.XMe(ie), ee.qMe.forEach((ee => ee.XMe(ie))), ee.blocks && oe(ee, ie)
```

#### 94. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L619-L621` → after: `L619-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L619-L621) · [Before (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L619-L621)

```diff
-             var GB = new oB.Xp(BB[0], BB[1], BB[2]),
-               YB = new oB.Xp(BB[0] + OB, BB[1] + OB, BB[2] + OB);
-             return new HB.b(GB, YB, void 0, void 0, void 0, yB)
+             var He = new Ke.rf(ee[0], ee[1], ee[2]),
+               ye = new Ke.rf(ee[0] + ie, ee[1] + ie, ee[2] + ie);
+             return new he.c(He, ye, void 0, void 0, void 0, Fe)
```

#### 95. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L623)

```diff
-         DB = AO(GB, YB, BB.kz, PB, ((BB, OB) => {
+         be = gi(He, ye, ee.uk, Re, ((ee, ie) => {
```

#### 96. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L626` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L626) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L626)

```diff
-             YB.isEnabled(!1) && ((0, nO.c)(YB, OB) && sB.d.prototype.push.call(BB, YB))
+             ye.isEnabled(!1) && ((0, Wi.d)(ye, ie) && Ge.f.prototype.push.call(ee, ye))
```

#### 97. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L636` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L636) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L636)

```diff
-         q_: YB,
+         Z8: ye,
```

#### 98. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L640-L641` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L640-L641) · [Before (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L640-L641)

```diff
-       } = BB.model.p_, jB = BB.QQB;
-       jB.position.zOB(OB[0], OB[1], OB[2]), jB.rotation.zOB(GB[0], GB[1], GB[2]);
+       } = ee.model.W8, Ue = ee.PMe;
+       Ue.position.wie(ie[0], ie[1], ie[2]), Ue.rotation.wie(He[0], He[1], He[2]);
```

#### 99. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L643)

```diff
-       yB.position.zOB(YB[0], YB[1], YB[2]), yB.fov = DB, yB.minZ = QB, yB.maxZ = oB
+       Fe.position.wie(ye[0], ye[1], ye[2]), Fe.fov = be, Fe.minZ = Me, Fe.maxZ = Ke
```

#### 100. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L647)

```diff
-       const OB = BB.Lp(),
+       const ie = ee.Nf(),
```

#### 101. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L650)

```diff
-       if (!YB || GB.Pq < 2 || OB.fDB || YB.getParameter(YB.DEPTH_BITS) < 24) return !1;
+       if (!ye || He.dT < 2 || ie.Gbe || ye.getParameter(ye.DEPTH_BITS) < 24) return !1;
```

#### 102. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L654` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L654) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L654)

```diff
-         jB = hB.e.prototype.render;
+         Ue = le.b.prototype.render;
```

#### 103. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L663)

```diff
-         BB ? jB.call(this, BB, GB, DB, oB, yB, JB, PB, zB, lB) : (OB.setAlphaMode(MB.b.ALPHA_DISABLE), jB.call(this, null, !1, !1, oB, yB, JB, PB, !1), QB._empty || (YB.depthRange(1, 1), jB.call(QB, null, GB, DB, oB, yB, JB, PB, zB, lB), YB.depthRange(0, 1)), jB.call(this, null,  … [truncated]
+         ee ? Ue.call(this, ee, He, be, Ke, Fe, Je, Re, ke, qe) : (ie.setAlphaMode(oe.c.ALPHA_DISABLE), Ue.call(this, null, !1, !1, Ke, Fe, Je, Re, !1), Me._empty || (ye.depthRange(1, 1), Ue.call(Me, null, He, be, Ke, Fe, Je, Re, ke, qe), ye.depthRange(0, 1)), Ue.call(this, null,  … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L668-L670` → after: `L668-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L668-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L668-L670) · [Before (L668-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L668-L670)

```diff
-       return [OB, bB.g].map(((OB, GB) => {
-         const YB = new DB.b("light", oB.Xp.FromArray(OB), BB);
-         return YB.diffuse = QB.Color3.FromArray([1, 1, 1]), YB.specular = QB.Color3.FromArray([1, 1, 1]), YB.intensity = bB.e[GB], YB
+       return [ie, se.e].map(((ie, He) => {
+         const ye = new be.b("light", Ke.rf.FromArray(ie), ee);
+         return ye.diffuse = Me.Color3.FromArray([1, 1, 1]), ye.specular = Me.Color3.FromArray([1, 1, 1]), ye.intensity = se.d[He], ye
```

#### 105. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L673)

```diff
-     class KO extends yB.d {
+     class Pi extends Fe.b {
```

#### 106. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L682` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L682) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L682)

```diff
-         this.heldTexture = BB, this.particleTexture = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.mirror) && void 0 !== OB ? OB : null
+         this.heldTexture = ee, this.particleTexture = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.mirror) && void 0 !== ie ? ie : null
```

#### 107. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L691)

```diff
-         BB && (this.particleTexture = null, (0, JB.w)(this.heldTexture), this.heldTexture = null), super.dispose(BB, OB, GB)
+         ee && (this.particleTexture = null, (0, Je.A)(this.heldTexture), this.heldTexture = null), super.dispose(ee, ie, He)
```

#### 108. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L696)

```diff
-       return OB && !OB.failed ? OB.gL(GB, YB) : new KO(GB, YB, BB)
+       return ie && !ie.failed ? ie.bC(He, ye) : new Pi(He, ye, ee)
```

#### 109. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L702-L704` → after: `L702-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L702-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L702-L704) · [Before (L702-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L702-L704)

```diff
-       let DB = null !== (YB = mO.get(BB)) && void 0 !== YB ? YB : null;
-       return !DB && BB.Lp().Pq >= 2 && (DB = new iB(BB, (OB => {
-         console.error(`Particle programs failed in scene ${BB.uid}: ${OB}`)
+       let be = null !== (ye = Yi.get(ee)) && void 0 !== ye ? ye : null;
+       return !be && ee.Nf().dT >= 2 && (be = new ae(ee, (ie => {
+         console.error(`Particle programs failed in scene ${ee.uid}: ${ie}`)
```

#### 110. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L707` → after: `L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L707) · [Before (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L707)

```diff
-     const FO = YB.b.Zero();
+     const ai = ye.e.Zero();
```

#### 111. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L709-L710` → after: `L709-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L709-L710) · [Before (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L709-L710)

```diff
-       hYB: function(BB, OB) {
-         return new gB(BB, OB.XYB, {
+       Rbe: function(ee, ie) {
+         return new xe(ee, ie.Ube, {
```

#### 112. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L717)

```diff
-       yQB: function(BB, OB) {
+       VMe: function(ee, ie) {
```

#### 113. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L720-L723` → after: `L720-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L720-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L720-L723) · [Before (L720-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L720-L723)

```diff
-           BB.eq = YB, YB.detachControl(), YB.autoClear = !1, aB.b.MIN_RENDERINGGROUPS = -1;
-           for (let QB = aB.b.MIN_RENDERINGGROUPS; QB <= 1; QB++) YB.setRenderingOrder(QB, hB.e.PainterSortCompare, hB.e.PainterSortCompare, hB.e.PainterSortCompare);
-           YB.setRenderingAutoClearDepthStencil(0, !1), cB.b.Enabled = !1, BB.GQB = new UO(BB, Math.round(OB.YQB)), BB.QQB = new EB.e("camHolder", YB), BB.camera = new wB.c("camera", new oB.Xp(0, 0, 0), YB), BB.camera.parent = BB.QQB, fO(BB), (0, bB.h)(BB, ((BB, OB, GB) => (0, TB. … [truncated]
-           const DB = GB(YB, OB.jQB);
+           ee.yp = ye, ye.detachControl(), ye.autoClear = !1, Se.b.MIN_RENDERINGGROUPS = -1;
+           for (let Me = Se.b.MIN_RENDERINGGROUPS; Me <= 1; Me++) ye.setRenderingOrder(Me, le.b.PainterSortCompare, le.b.PainterSortCompare, le.b.PainterSortCompare);
+           ye.setRenderingAutoClearDepthStencil(0, !1), me.e.Enabled = !1, ee.ZMe = new ti(ee, Math.round(ie.wMe)), ee.PMe = new ue.b("camHolder", ye), ee.camera = new ve.e("camera", new Ke.rf(0, 0, 0), ye), ee.camera.parent = ee.PMe, Zi(ee), (0, se.f)(ee, ((ee, ie, He) => (0, je. … [truncated]
+           const be = He(ye, ie.YMe);
```

#### 114. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L725)

```diff
-             DB.some((OB => OB === BB)) || console.error(`Light "${BB.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
+             be.some((ie => ie === ee)) || console.error(`Light "${ee.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
```

#### 115. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L727)

```diff
-         }(BB, OB, dO), kO(BB.eq)
+         }(ee, ie, Di), wi(ee.yp)
```

#### 116. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L729)

```diff
-       DQB: fO,
+       DMe: Zi,
```

#### 117. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L731)

```diff
-         const DB = BB.eq;
+         const be = ee.yp;
```

#### 118. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L734-L735` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L734-L735) · [Before (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L734-L735)

```diff
-       MQB: function(BB, OB, GB) {
-         return BB.engine.Pq >= 2 && !BB.PQB && (BB.PQB = new iB(BB.eq, BB.zQB)), uO(BB.eq, BB.PQB, OB, GB)
+       cMe: function(ee, ie, He) {
+         return ee.engine.dT >= 2 && !ee.xMe && (ee.xMe = new ae(ee.yp, ee.LMe)), Ai(ee.yp, ee.xMe, ie, He)
```

#### 119. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L737-L739` → after: `L737-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L737-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L737-L739) · [Before (L737-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L737-L739)

```diff
-       pQB: function(BB, OB) {
-         BB.eq.rW.forEach((GB => {
-           if (GB instanceof IB) return void GB.POB(OB, BB.kz.Tz);
+       vMe: function(ee, ie) {
+         ee.yp.zW.forEach((He => {
+           if (He instanceof Ye) return void He.Zie(ie, ee.uk.yq);
```

#### 120. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L745)

```diff
-             YB.worldOffset.x = -BB.kz.Tz[0], YB.worldOffset.y = -BB.kz.Tz[1], YB.worldOffset.z = -BB.kz.Tz[2]
+             ye.worldOffset.x = -ee.uk.yq[0], ye.worldOffset.y = -ee.uk.yq[1], ye.worldOffset.z = -ee.uk.yq[2]
```

#### 121. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L750-L751` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L750-L751) · [Before (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L750-L751)

```diff
-         const YB = new jB.d(OB, BB.eq, null, void 0, void 0, !1);
-         return (0, TB.g)(OB, GB, BB.eq, YB), YB
+         const ye = new Ue.d(ie, ee.yp, null, void 0, void 0, !1);
+         return (0, je.f)(ie, He, ee.yp, ye), ye
```

#### 122. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L753-L755` → after: `L753-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L753-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L753-L755) · [Before (L753-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L753-L755)

```diff
-       Tq: qO,
-       lQB: function(BB, OB) {
-         return FO.origin.IU(OB.origin), FO.direction.IU(OB.direction), FO.length = OB.length, FO.epsilon = OB.epsilon, FO.lQB(BB, !1, void 0, !1, void 0, !0).pickedPoint
+       bp: Ti,
+       CMe: function(ee, ie) {
+         return ai.origin.jD(ie.origin), ai.direction.jD(ie.direction), ai.length = ie.length, ai.epsilon = ie.epsilon, ai.CMe(ee, !1, void 0, !1, void 0, !0).pickedPoint
```

#### 123. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L759)

```diff
-   42129: (BB, OB, GB) => {
+   42201: (ee, ie, He) => {
```

#### 124. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L761` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L761) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L761)

```diff
-       b: () => cB,
+       d: () => me,
```

#### 125. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L765-L778` → after: `L765-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L765-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L765-L778) · [Before (L765-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L765-L778)

```diff
-     var YB = GB(41258),
-       DB = GB(42131),
-       QB = GB(42177),
-       oB = GB(42133),
-       jB = GB(38494),
-       yB = GB(38504),
-       JB = GB(38513),
-       MB = GB(38515),
-       PB = GB(37958),
-       zB = GB(37962),
-       lB = GB(42140),
-       pB = GB(37919),
-       qB = GB(37946),
-       ZB = GB(37910);
+     var ye = He(41380),
+       be = He(42210),
+       Me = He(42250),
+       Ke = He(42217),
+       Ue = He(38650),
+       Fe = He(38659),
+       Je = He(38664),
+       oe = He(38673),
+       Re = He(38070),
+       ke = He(38075),
+       qe = He(42219),
+       fe = He(38045),
+       Te = He(38057),
+       pe = He(38034);
```

#### 126. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L784)

```diff
-         oP: BB
+         oR: ee
```

#### 127. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L789` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L789) · [Before (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L789)

```diff
-       const OB = class extends lB.c {
+       const ie = class extends qe.e {
```

#### 128. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L791-L792` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L791-L792) · [Before (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L791-L792)

```diff
-             const YB = (0, qB.U)(OB),
-               DB = YB && (0, qB.A)(YB, BB.name);
+             const ye = (0, Te.V)(ie),
+               be = ye && (0, Te.y)(ye, ee.name);
```

#### 129. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L794` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L794) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L794)

```diff
-             super(OB, BB.name, BB.priority, DB ? DB.defines : BB.defines(...oB), !1), this.featureState = void 0, this.featureState = GB, this._pluginManager._addPlugin(this), this._enable(!0), (0, qB.B)(this._material, BB, this.featureState, this._pluginDefineNames)
+             super(ie, ee.name, ee.priority, be ? be.defines : ee.defines(...Ke), !1), this.featureState = void 0, this.featureState = He, this._pluginManager._addPlugin(this), this._enable(!0), (0, Te.A)(this._material, ee, this.featureState, this._pluginDefineNames)
```

#### 130. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L800)

```diff
-             return BB === ZB.c.GLSL || BB === ZB.c.WGSL
+             return ee === pe.b.GLSL || ee === pe.b.WGSL
```

#### 131. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L803-L804` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L803-L804) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L803-L804)

```diff
-         GB = (0, pB.i)(BB);
-       for (const [YB, DB] of Object.entries(pB.d)) {
+         He = (0, fe.e)(ee);
+       for (const [ye, be] of Object.entries(fe.c)) {
```

#### 132. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L818-L820` → after: `L818-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L818-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L818-L820) · [Before (L818-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L818-L820)

```diff
-     var AB = GB(40825),
-       VB = GB(42148),
-       SB = GB(42154);
+     var Ee = He(40913),
+       ge = He(42223),
+       Oe = He(42229);
```

#### 133. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L823)

```diff
-       return (0, SB.i)(GB, OB.urls, (() => async function(BB, OB, GB) {
+       return (0, Oe.e)(He, ie.urls, (() => async function(ee, ie, He) {
```

#### 134. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L831` → after: `L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L831) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L831)

```diff
-             pixels: oB && oB.byteLength === YB * YB * QB * 4 ? oB : null !== (DB = UB.get(BB.getInternalTexture())) && void 0 !== DB ? DB : BB._readPixelsSync(),
+             pixels: Ke && Ke.byteLength === ye * ye * Me * 4 ? Ke : null !== (be = We.get(ee.getInternalTexture())) && void 0 !== be ? be : ee._readPixelsSync(),
```

#### 135. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L834` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L834) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L834)

```diff
-         })), QB = Math.min(GB.Lp().getCaps().texture2DArrayMaxLayerCount, 256), jB = (0, SB.e)(DB, YB, QB).map((BB => {
+         })), Me = Math.min(He.Nf().getCaps().texture2DArrayMaxLayerCount, 256), Ue = (0, Oe.c)(be, ye, Me).map((ee => {
```

#### 136. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L840)

```diff
-             atlas: new VB.e(OB, YB, YB, DB, AB.c.TEXTUREFORMAT_RGBA, GB, !0, !1, oB.e.NEAREST_NEAREST_MIPLINEAR),
+             atlas: new ge.c(ie, ye, ye, be, Ee.b.TEXTUREFORMAT_RGBA, He, !0, !1, Ke.d.NEAREST_NEAREST_MIPLINEAR),
```

#### 137. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L847` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L847) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L847)

```diff
-             const GB = OB.createRawTexture(new Uint8Array(4), 1, 1, AB.c.TEXTUREFORMAT_RGBA, !1, !1, oB.e.NEAREST_SAMPLINGMODE);
+             const He = ie.createRawTexture(new Uint8Array(4), 1, 1, Ee.b.TEXTUREFORMAT_RGBA, !1, !1, Ke.d.NEAREST_SAMPLINGMODE);
```

#### 138. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L849` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L849) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L849)

```diff
-           }(YB, GB.Lp()), UB.set(YB, DB[OB].pixels))
+           }(ye, He.Nf()), We.set(ye, be[ie].pixels))
```

#### 139. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L854-L855` → after: `L854-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L854-L855) · [Before (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L854-L855)

```diff
-     var fB = GB(38522);
-     class kB extends(RB(yB.f)) {
+     var te = He(38682);
+     class Ze extends(ze(Fe.k)) {
```

#### 140. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L860` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L860) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L860)

```diff
-               console.error(`Failed to build the texture arrays, at atlas ${OB}`, BB)
+               console.error(`Failed to build the texture arrays, at atlas ${ie}`, ee)
```

#### 141. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L863)

```diff
-         })), (0, fB.k)(OB, BB.shaderLanguage)
+         })), (0, te.l)(ie, ee.shaderLanguage)
```

#### 142. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L872)

```diff
-         if (!GB.useWebGL2) return void(0, fB.g)(this._material, GB, OB, YB, Math.round(DB / YB), QB);
+         if (!He.useWebGL2) return void(0, te.f)(this._material, He, ie, ye, Math.round(be / ye), Me);
```

#### 143. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L874)

```diff
-         const oB = await nB(this.mirrors, GB.sources, this._material.JF());
+         const Ke = await de(this.mirrors, He.sources, this._material.Xx());
```

#### 144. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L878-L887` → after: `L878-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L878-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L878-L887) · [Before (L878-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L878-L887)

```diff
-     var dB = GB(42160),
-       KB = GB(41300),
-       uB = GB(37771),
-       mB = GB(42167),
-       IB = GB(41423),
-       FB = GB(41287),
-       iB = GB(42111),
-       LB = GB(38169),
-       gB = GB(42169);
-     class rB extends dB.d {
+     var we = He(42233),
+       De = He(41429),
+       Pe = He(37913),
+       Ae = He(42240),
+       Ye = He(41535),
+       Ve = He(41421),
+       ae = He(42177),
+       ce = He(38314),
+       xe = He(42244);
+     class Le extends we.c {
```

#### 145. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L897-L902` → after: `L897-L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L897-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L897-L902) · [Before (L897-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L897-L902)

```diff
-       Mesh: mB.b,
-       TransformNode: iB.e,
-       BP: dB.d,
-       VertexBuffer: dB.g,
-       BoundingInfo: KB.e,
-       Xp: uB.Xp,
+       Mesh: Ae.e,
+       TransformNode: ae.b,
+       bR: we.c,
+       VertexBuffer: we.f,
+       BoundingInfo: De.c,
+       rf: Pe.rf,
```

#### 146. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L904)

```diff
-       SubMesh: FB.c,
+       SubMesh: Ve.b,
```

#### 147. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L906-L907` → after: `L906-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L906-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L906-L907) · [Before (L906-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L906-L907)

```diff
-       MirroredGeometry: gB.d,
-       meshFromArrays: gB.g,
+       MirroredGeometry: xe.b,
+       meshFromArrays: xe.f,
```

#### 148. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L910-L912` → after: `L910-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L910-L912) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L910-L912)

```diff
-     (0, LB.d)(XB);
-     var wB = GB(38025);
-     class EB extends(RB(MB.f)) {
+     (0, ce.f)(Ce);
+     var ve = He(38146);
+     class ue extends(ze(oe.e)) {
```

#### 149. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L918)

```diff
-           const YB = (0, qB.U)(BB);
+           const ye = (0, Te.V)(ee);
```

#### 150. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L920)

```diff
-         }(0, wB.j)(BB)
+         }(0, ve.i)(ee)
```

#### 151. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L935` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L935) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L935)

```diff
-     }(0, MB.e)({
+     }(0, oe.d)({
```

#### 152. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L938-L941` → after: `L938-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L938-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L938-L941) · [Before (L938-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L938-L941)

```diff
-     var hB = GB(37966),
-       aB = GB(38183);
-     const eB = new RegExp(`^#define ${JB.d}\\s*$`, "m");
-     class TB extends(RB(JB.i)) {
+     var le = He(38081),
+       Se = He(38330);
+     const ne = new RegExp(`^#define ${Je.c}\\s*$`, "m");
+     class je extends(ze(Je.h)) {
```

#### 153. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L943)

```diff
-         super(BB, OB), this.Vp = !1, OB.ditherOnlyWhileFading && (aB.e.add(BB), this.prewarmDitherTwins(BB))
+         super(ee, ie), this.xf = !1, ie.ditherOnlyWhileFading && (Se.f.add(ee), this.prewarmDitherTwins(ee))
```

#### 154. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L955` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L955) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L955)

```diff
-           QB && !eB.test(YB.defines) && BB.JF().onAfterRenderObservable.addOnce((() => {
+           Me && !ne.test(ye.defines) && ee.Xx().onAfterRenderObservable.addOnce((() => {
```

#### 155. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L961-L962` → after: `L961-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L961-L962) · [Before (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L961-L962)

```diff
-         if (this.Vp || BB.lV()) return !1;
-         const OB = new FB.c(0, 0, 0, 0, 0, BB, void 0, !1, !1);
+         if (this.xf || ee.RZ()) return !1;
+         const ie = new Ve.b(0, 0, 0, 0, 0, ee, void 0, !1, !1);
```

#### 156. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L972)

```diff
-         this.Vp = !0, super.dispose(BB)
+         this.xf = !0, super.dispose(ee)
```

#### 157. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L980` → after: `L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L980) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L980)

```diff
-     CB(jB.e, WB), CB(yB.f, kB), CB(JB.i, TB), CB(MB.f, EB), (0, PB.c)({
+     Ie(Ue.e, Be), Ie(Fe.k, Ze), Ie(Je.h, je), Ie(oe.e, ue), (0, Re.d)({
```

#### 158. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L983)

```diff
-         return (0, hB.n)(BB, GB), GB.detailMap._pluginDefineNames
+         return (0, le.o)(ee, He), He.detailMap._pluginDefineNames
```

#### 159. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L986)

```diff
-         (0, hB.M)(BB.mirror, OB, GB)
+         (0, le.S)(ee.mirror, ie, He)
```

#### 160. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L990` → after: `L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L990) · [Before (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L990)

```diff
-         if (!YB) throw new Error(`${OB.feature.name} has no plugin class (registerPluginClass)`);
+         if (!ye) throw new Error(`${ie.feature.name} has no plugin class (registerPluginClass)`);
```

#### 161. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1003-L1004` → after: `L1003-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1003-L1004) · [Before (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1003-L1004)

```diff
-           const GB = new oB.e(YB, OB, DB, QB, jB);
-           return Object.assign(GB, JB), void(0, zB.D)(BB, GB)
+           const He = new Ke.d(ye, ie, be, Me, Ue);
+           return Object.assign(He, Je), void(0, ke.F)(ee, He)
```

#### 162. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1009)

```diff
-               OB(new Error(`${yB.context}: ${(null===GB||void 0===GB?void 0:GB.message)||BB||"Failed to load texture"}`))
+               ie(new Error(`${Fe.context}: ${(null===He||void 0===He?void 0:He.message)||ee||"Failed to load texture"}`))
```

#### 163. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1026-L1027` → after: `L1026-L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1026-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1026-L1027) · [Before (L1026-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1026-L1027)

```diff
-           NB = new oB.e(null, OB, ZB);
-         hB.o.set(NB, PB), Object.assign(NB, JB), NB.updateURL(YB, pB);
+           Xe = new Ke.d(null, ie, pe);
+         le.q.set(Xe, Re), Object.assign(Xe, Je), Xe.updateURL(ye, fe);
```

#### 164. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1029` → after: `L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1029) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1029)

```diff
-         RB && (RB.label = qB), BB.uvSet = NB.coordinatesIndex, BB.matrix.set((0, hB.E)(NB)), (0, zB.D)(BB, NB)
+         ze && (ze.label = Te), ee.uvSet = Xe.coordinatesIndex, ee.matrix.set((0, le.L)(Xe)), (0, ke.F)(ee, Xe)
```

#### 165. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1040-L1043` → after: `L1040-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1040-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1040-L1043) · [Before (L1040-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1040-L1043)

```diff
-         } = BB.sampler, MB = JB === (0, zB.v)(jB) ? null : () => {
-           (0, hB.D)(PB, JB)
-         }, PB = new DB.e(YB, OB, null, jB, QB, MB, null, (0, zB.u)(yB));
-         PB.coordinatesMode = oB.e.SKYBOX_MODE, (0, zB.D)(BB, PB)
+         } = ee.sampler, oe = Je === (0, ke.y)(Ue) ? null : () => {
+           (0, le.K)(Re, Je)
+         }, Re = new be.c(ye, ie, null, Ue, Me, oe, null, (0, ke.u)(Fe));
+         Re.coordinatesMode = Ke.d.SKYBOX_MODE, (0, ke.F)(ee, Re)
```

#### 166. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1052)

```diff
-           wrap: MB = oB.e.CLAMP_ADDRESSMODE
+           wrap: oe = Ke.d.CLAMP_ADDRESSMODE
```

#### 167. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1054` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1054) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1054)

```diff
-         const PB = new QB.c(OB, {
+         const Re = new Me.d(ie, {
```

#### 168. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1059-L1060` → after: `L1059-L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1059-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1059-L1060) · [Before (L1059-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1059-L1060)

```diff
-         const zB = (0, hB.u)(PB);
-         return (0, hB.x)(zB, PB), zB
+         const ke = (0, le.y)(Re);
+         return (0, le.C)(ke, Re), ke
```

#### 169. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1064` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1064) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1064)

```diff
-   42169: (BB, OB, GB) => {
+   42244: (ee, ie, He) => {
```

#### 170. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1066-L1067` → after: `L1066-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1066-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1066-L1067) · [Before (L1066-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1066-L1067)

```diff
-       d: () => MB,
-       g: () => PB,
+       b: () => oe,
+       f: () => Re,
```

#### 171. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1070-L1077` → after: `L1070-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1070-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1070-L1077) · [Before (L1070-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1070-L1077)

```diff
-     var YB = GB(42160),
-       DB = GB(41067),
-       QB = GB(41300),
-       oB = GB(41426),
-       jB = GB(42167),
-       yB = GB(41423),
-       JB = GB(38087);
-     class MB extends oB.d {
+     var ye = He(42233),
+       be = He(41175),
+       Me = He(41429),
+       Ke = He(41540),
+       Ue = He(42240),
+       Fe = He(41535),
+       Je = He(38195);
+     class oe extends Ke.b {
```

#### 172. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1112` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1112) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1112)

```diff
-         this.link(new JB.e(BB, OB, this.getTotalVertices(), new Float64Array(GB.dDB()), new Float64Array(YB.dDB())))
+         this.link(new Je.c(ee, ie, this.getTotalVertices(), new Float64Array(He.Qbe()), new Float64Array(ye.Qbe())))
```

#### 173. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1116-L1117` → after: `L1116-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1116-L1117) · [Before (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1116-L1117)

```diff
-         const OB = new MB(BB, this.JF()),
-           GB = this.KDB(void 0, !0);
+         const ie = new oe(ee, this.Xx()),
+           He = this.eMe(void 0, !0);
```

#### 174. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1132-L1133` → after: `L1132-L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1132-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1132-L1133) · [Before (L1132-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1132-L1133)

```diff
-           const zB = BB.getIsInstanced() ? (GB instanceof Array ? 4 * GB.length : GB.byteLength) / MB : this.getTotalVertices(),
-             lB = (0, DB.v)(GB, jB, yB, JB, MB, zB, !0),
+           const ke = ee.getIsInstanced() ? (He instanceof Array ? 4 * He.length : He.byteLength) / oe : this.getTotalVertices(),
+             qe = (0, be.s)(He, Ue, Fe, Je, oe, ke, !0),
```

#### 175. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1142` → after: `L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1142) · [Before (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1142)

```diff
-           OB.setVerticesBuffer(new YB.g(this.Lp(), lB, QB, pB), zB)
+           ie.setVerticesBuffer(new ye.f(this.Nf(), qe, Me, fe), ke)
```

#### 176. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1144` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1144) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1144)

```diff
-         return OB._updatable = oB, OB._boundingInfo = new QB.e(this.extend.minimum, this.extend.maximum), OB.relink(), OB
+         return ie._updatable = Ke, ie._boundingInfo = new Me.c(this.extend.minimum, this.extend.maximum), ie.relink(), ie
```

#### 177. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1147-L1149` → after: `L1147-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1147-L1149) · [Before (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1147-L1149)

```diff
-         const yB = BB[0].JF(),
-           JB = new jB.b(BB[0].name + "_merged", yB),
-           PB = new MB(oB.d.RandomId(), yB, void 0, !1, JB);
+         const Fe = ee[0].Xx(),
+           Je = new Ue.e(ee[0].name + "_merged", Fe),
+           Re = new oe(Ke.b.RandomId(), Fe, void 0, !1, Je);
```

#### 178. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1151` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1151) · [Before (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1151)

```diff
-           if (!jB.b.MergeMeshes(BB, OB, GB, JB, DB, QB)) return JB.dispose(), null
+           if (!Ue.e.MergeMeshes(ee, ie, He, Je, be, Me)) return Je.dispose(), null
```

#### 179. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1173-L1174` → after: `L1173-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1173-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1173-L1174) · [Before (L1173-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1173-L1174)

```diff
-       let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jB.b(BB, GB);
-       const DB = (0, JB.j)(OB),
+       let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ue.e(ee, He);
+       const be = (0, Je.h)(ie),
```

#### 180. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1183-L1184` → after: `L1183-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1183-L1184) · [Before (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1183-L1184)

```diff
-       qB.positions = QB, qB.normals = null !== PB && void 0 !== PB ? PB : null, qB.uvs = null !== zB && void 0 !== zB ? zB : null, qB.indices = lB;
-       const ZB = new MB(oB.d.RandomId(), GB, qB, !1, YB);
+       Te.positions = Me, Te.normals = null !== Re && void 0 !== Re ? Re : null, Te.uvs = null !== ke && void 0 !== ke ? ke : null, Te.indices = qe;
+       const pe = new oe(Ke.b.RandomId(), He, Te, !1, ye);
```

#### 181. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1195` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1195) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1195)

```diff
-       const DB = new jB.b(BB, GB),
+       const be = new Ue.e(ee, He),
```

#### 182. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1210)

```diff
-   39388: (BB, OB, GB) => {
+   39492: (ee, ie, He) => {
```

#### 183. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1213-L1216` → after: `L1213-L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1213-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1213-L1216) · [Before (L1213-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1213-L1216)

```diff
-       d: () => oB,
-       f: () => QB,
-       h: () => DB,
-       j: () => jB,
+       c: () => Ke,
+       e: () => Me,
+       i: () => be,
+       l: () => Ue,
```

#### 184. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1244` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1244) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1244)

```diff
-         lZ: 12 + 9 * YB,
+         Op: 12 + 9 * ye,
```

#### 185. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1250` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1250) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1250)

```diff
-   39385: (BB, OB, GB) => {
+   39488: (ee, ie, He) => {
```

#### 186. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1252)

```diff
-       b: () => ZB,
+       d: () => pe,
```

#### 187. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1255-L1258` → after: `L1255-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1255-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1255-L1258) · [Before (L1255-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1255-L1258)

```diff
-     var YB = GB(37807),
-       DB = GB(37771),
-       QB = GB(37962),
-       oB = GB(39388);
+     var ye = He(37938),
+       be = He(37913),
+       Me = He(38075),
+       Ke = He(39492);
```

#### 188. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1261` → after: `L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1261) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1261)

```diff
-         this.CP = BB, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
+         this.bk = ee, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
```

#### 189. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1263` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1263) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1263)

```diff
-         this.records = new Float32Array(OB * oB.d), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(OB).fill(-1 / 0)
+         this.records = new Float32Array(ie * Ke.c), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(ie).fill(-1 / 0)
```

#### 190. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1272` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1272) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1272)

```diff
-         const OB = this.CP;
+         const ie = this.bk;
```

#### 191. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1284-L1285` → after: `L1284-L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1284-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1284-L1285) · [Before (L1284-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1284-L1285)

```diff
-           GB = this.highWater * oB.d;
-         for (let YB = oB.f.time; YB < GB; YB += oB.d) OB[YB] -= BB;
+           He = this.highWater * Ke.c;
+         for (let ye = Ke.e.time; ye < He; ye += Ke.c) ie[ye] -= ee;
```

#### 192. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1303-L1306` → after: `L1303-L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1303-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1303-L1306) · [Before (L1303-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1303-L1306)

```diff
-     var yB = GB(37885),
-       JB = GB(39394),
-       MB = GB(39403),
-       PB = GB(39412);
+     var Fe = He(38020),
+       Je = He(39499),
+       oe = He(39503),
+       Re = He(39508);
```

#### 193. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1309)

```diff
-         this.particleEmitterType = new MB.e, this.texture = null, this.blendMode = PB.g, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = … [truncated]
+         this.particleEmitterType = new oe.d, this.texture = null, this.blendMode = Re.h, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = … [truncated]
```

#### 194. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1313` → after: `L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1313) · [Before (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1313)

```diff
-         return null !== (BB = lB(this).direction1) && void 0 !== BB ? BB : DB.Xp.Zero()
+         return null !== (ee = qe(this).direction1) && void 0 !== ee ? ee : be.rf.Zero()
```

#### 195. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1321` → after: `L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1321) · [Before (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1321)

```diff
-         return null !== (BB = lB(this).direction2) && void 0 !== BB ? BB : DB.Xp.Zero()
+         return null !== (ee = qe(this).direction2) && void 0 !== ee ? ee : be.rf.Zero()
```

#### 196. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1329)

```diff
-         return null !== (BB = lB(this).minEmitBox) && void 0 !== BB ? BB : DB.Xp.Zero()
+         return null !== (ee = qe(this).minEmitBox) && void 0 !== ee ? ee : be.rf.Zero()
```

#### 197. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1337` → after: `L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1337) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1337)

```diff
-         return null !== (BB = lB(this).maxEmitBox) && void 0 !== BB ? BB : DB.Xp.Zero()
+         return null !== (ee = qe(this).maxEmitBox) && void 0 !== ee ? ee : be.rf.Zero()
```

#### 198. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1344)

```diff
-         const DB = new MB.e;
+         const be = new oe.d;
```

#### 199. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1348)

```diff
-         return this.colorGradients ??= [], this.colorGradients.push(new JB.b(BB, OB, GB)), this.colorGradients.sort(pB), this
+         return this.colorGradients ??= [], this.colorGradients.push(new Je.e(ee, ie, He)), this.colorGradients.sort(fe), this
```

#### 200. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1357` → after: `L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1357) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1357)

```diff
-         return this.velocityGradients ??= [], this.velocityGradients.push(new JB.g(BB, OB, GB)), this.velocityGradients.sort(pB), this
+         return this.velocityGradients ??= [], this.velocityGradients.push(new Je.i(ee, ie, He)), this.velocityGradients.sort(fe), this
```

#### 201. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1363)

```diff
-         return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new JB.g(BB, OB, GB)), this.colorRemapGradients.sort(pB), this
+         return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new Je.i(ee, ie, He)), this.colorRemapGradients.sort(fe), this
```

#### 202. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1369` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1369) · [Before (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1369)

```diff
-         return this.rampGradients ??= [], this.rampGradients.push(new JB.d(BB, OB)), this.rampGradients.sort(pB), this
+         return this.rampGradients ??= [], this.rampGradients.push(new Je.g(ee, ie)), this.rampGradients.sort(fe), this
```

#### 203. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1393-L1395` → after: `L1393-L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1393-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1393-L1395) · [Before (L1393-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1393-L1395)

```diff
-         super(), this.name = BB, this.host = GB, this.onDispose = NB, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = DB.Xp.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 … [truncated]
-           position: new DB.Xp,
-           direction: new DB.Xp
+         super(), this.name = ee, this.host = He, this.onDispose = Xe, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = be.rf.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 … [truncated]
+           position: new be.rf,
+           direction: new be.rf
```

#### 204. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1403` → after: `L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1403) · [Before (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1403)

```diff
-         null === (OB = this.emitterDisposed) || void 0 === OB || OB.remove(), this.emitterDisposed = null, this.emitterValue = BB, BB && AB(BB) && (this.emitterDisposed = BB.lF.add((() => {
+         null === (ie = this.emitterDisposed) || void 0 === ie || ie.remove(), this.emitterDisposed = null, this.emitterValue = ee, ee && Ee(ee) && (this.emitterDisposed = ee.Bx.add((() => {
```

#### 205. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1423` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1423) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1423)

```diff
-         return !this.Vp && null !== this.emitterValue && this.host.canDraw(this)
+         return !this.xf && null !== this.emitterValue && this.host.canDraw(this)
```

#### 206. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1428` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1428) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1428)

```diff
-         this.Vp || (this.Vp = !0, null === (BB = this.emitterDisposed) || void 0 === BB || BB.remove(), this.emitterDisposed = null, OB && ((0, QB.w)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
+         this.xf || (this.xf = !0, null === (ee = this.emitterDisposed) || void 0 === ee || ee.remove(), this.emitterDisposed = null, ie && ((0, Me.A)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
```

#### 207. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1448)

```diff
-         this.started && this.stopped && !this.Vp && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
+         this.started && this.stopped && !this.xf && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
```

#### 208. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1452)

```diff
-         return this.started = !1, null === (BB = this.onAnimationEnd) || void 0 === BB || BB.call(this), !!this.Vp || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
+         return this.started = !1, null === (ee = this.onAnimationEnd) || void 0 === ee || ee.call(this), !!this.xf || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
```

#### 209. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1463` → after: `L1463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1463) · [Before (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1463)

```diff
-       POB(BB, OB) {
+       Zie(ee, ie) {
```

#### 210. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1479` → after: `L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1479) · [Before (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1479)

```diff
-         } = PB, qB = oB.f, ZB = null === (OB = this.getColorGradients()) || void 0 === OB ? void 0 : OB[0], NB = ZB ? ZB.color1 : this.color1, RB = ZB ? null !== (GB = ZB.color2) && void 0 !== GB ? GB : ZB.color1 : this.color2;
+         } = Re, Te = Ke.e, pe = null === (ie = this.getColorGradients()) || void 0 === ie ? void 0 : ie[0], Xe = pe ? pe.color1 : this.color1, ze = pe ? null !== (He = pe.color2) && void 0 !== He ? He : pe.color1 : this.color2;
```

#### 211. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1488` → after: `L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1488) · [Before (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1488)

```diff
-           const ZB = BB * oB.d;
+           const pe = ee * Ke.c;
```

#### 212. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1504-L1505` → after: `L1504-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1504-L1505) · [Before (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1504-L1505)

```diff
-       for (const DB of BB) DB.isReady() || (YB++, GB.length < RB && GB.push(`${OB} particle system ${DB.name}`));
-       return YB > GB.length && GB.push(`${YB-GB.length} more ${OB} particle systems`), GB
+       for (const be of ee) be.isReady() || (ye++, He.length < ze && He.push(`${ie} particle system ${be.name}`));
+       return ye > He.length && He.push(`${ye-He.length} more ${ie} particle systems`), He
```

#### 213. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1512)

```diff
-   44735: (BB, OB, GB) => {
+   44799: (ee, ie, He) => {
```

#### 214. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1514` → after: `L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1514) · [Before (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1514)

```diff
-       e: () => ZB,
+       c: () => pe,
```

#### 215. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1516-L1517` → after: `L1516-L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1516-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1516-L1517) · [Before (L1516-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1516-L1517)

```diff
-       j: () => oB,
-       k: () => JB
+       h: () => Ke,
+       l: () => Je
```

#### 216. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1519-L1521` → after: `L1519-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1519-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1519-L1521) · [Before (L1519-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1519-L1521)

```diff
-     var YB = GB(37885),
-       DB = GB(39394),
-       QB = GB(39388);
+     var ye = He(38020),
+       be = He(39499),
+       Me = He(39492);
```

#### 217. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1532` → after: `L1532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1532) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1532)

```diff
-         OB[DB.colorPositions + QB] = BB.gradient, BB.color1.toArray(OB, DB.color1 + 4 * QB), (null !== (yB = BB.color2) && void 0 !== yB ? yB : BB.color1).toArray(OB, DB.color2 + 4 * QB)
+         ie[be.colorPositions + Me] = ee.gradient, ee.color1.toArray(ie, be.color1 + 4 * Me), (null !== (Fe = ee.color2) && void 0 !== Fe ? Fe : ee.color1).toArray(ie, be.color2 + 4 * Me)
```

#### 218. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1535)

```diff
-         MB = zB(BB, JB, "lZ", YB);
+         oe = ke(ee, Je, "Op", ye);
```

#### 219. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1537` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1537) · [Before (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1537)

```diff
-       for (let QB = 0; QB < MB; QB++) RB(OB, DB.lZ + 4 * QB, JB[lB(JB, QB)]);
+       for (let Me = 0; Me < oe; Me++) ze(ie, be.Op + 4 * Me, Je[qe(Je, Me)]);
```

#### 220. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1547` → after: `L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1547) · [Before (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1547)

```diff
-         texels: new Uint8Array(4 * QB.h)
+         texels: new Uint8Array(4 * Me.i)
```

#### 221. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1554)

```diff
-         for (let GB = 0; GB < QB.h; GB++) DB.h.GetCurrentGradient(GB / QB.h, BB, ((BB, OB, GB) => {
+         for (let He = 0; He < Me.i; He++) be.k.GetCurrentGradient(He / Me.i, ee, ((ee, ie, He) => {
```

#### 222. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1571` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1571) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1571)

```diff
-       return OB ? OB.length > QB.b ? (YB(`particleStops:${GB}`, `GPU particles use the first 2 and last ${QB.b-2} of more than ${QB.b} ${GB} gradient stops (${BB.name})`), QB.b) : OB.length : 0
+       return ie ? ie.length > Me.b ? (ye(`particleStops:${He}`, `GPU particles use the first 2 and last ${Me.b-2} of more than ${Me.b} ${He} gradient stops (${ee.name})`), Me.b) : ie.length : 0
```

#### 223. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1575` → after: `L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1575) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1575)

```diff
-       return OB < 2 || BB.length <= QB.b ? OB : BB.length - QB.b + OB
+       return ie < 2 || ee.length <= Me.b ? ie : ee.length - Me.b + ie
```

#### 224. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1593` → after: `L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1593) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1593)

```diff
-       BB[OB] = GB.gradient, BB[OB + 1] = GB.factor1, BB[OB + 2] = null !== (YB = GB.factor2) && void 0 !== YB ? YB : GB.factor1
+       ee[ie] = He.gradient, ee[ie + 1] = He.factor1, ee[ie + 2] = null !== (ye = He.factor2) && void 0 !== ye ? ye : He.factor1
```

#### 225. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1596` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1596) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1596)

```diff
-   42154: (BB, OB, GB) => {
+   42229: (ee, ie, He) => {
```

#### 226. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1622-L1623` → after: `L1622-L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1622-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1622-L1623) · [Before (L1622-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1622-L1623)

```diff
-       e: () => YB,
-       i: () => QB
+       c: () => ye,
+       e: () => Me
```

#### 227. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1629` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1629) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1629)

```diff
-       const oB = null !== (YB = DB.get(BB)) && void 0 !== YB ? YB : new Map;
+       const Ke = null !== (ye = be.get(ee)) && void 0 !== ye ? ye : new Map;
```

#### 228. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1631)

```diff
-       const jB = null !== (QB = oB.get(OB[0])) && void 0 !== QB ? QB : [];
+       const Ue = null !== (Me = Ke.get(ie[0])) && void 0 !== Me ? Me : [];
```

#### 229. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1644` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1644) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1644)

```diff
-   39412: (BB, OB, GB) => {
+   39508: (ee, ie, He) => {
```

#### 230. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1647-L1649` → after: `L1647-L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1647-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1647-L1649) · [Before (L1647-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1647-L1649)

```diff
-       g: () => DB,
-       k: () => yB,
-       o: () => PB
+       h: () => be,
+       l: () => Fe,
+       p: () => Re
```

#### 231. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1651` → after: `L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1651) · [Before (L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1651)

```diff
-     var YB = GB(37880);
+     var ye = He(38012);
```

#### 232. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1656-L1660` → after: `L1656-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1656-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1656-L1660) · [Before (L1656-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1656-L1660)

```diff
-         [DB, YB.d.ALPHA_ONEONE],
-         [1, YB.d.ALPHA_COMBINE],
-         [2, YB.d.ALPHA_ADD],
-         [QB, YB.d.ALPHA_MULTIPLY],
-         [-1, YB.d.ALPHA_SUBTRACT]
+         [be, ye.e.ALPHA_ONEONE],
+         [1, ye.e.ALPHA_COMBINE],
+         [2, ye.e.ALPHA_ADD],
+         [Me, ye.e.ALPHA_MULTIPLY],
+         [-1, ye.e.ALPHA_SUBTRACT]
```

#### 233. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1665` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1665) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1665)

```diff
-       return null !== (OB = jB.get(BB)) && void 0 !== OB ? OB : BB
+       return null !== (ie = Ue.get(ee)) && void 0 !== ie ? ie : ee
```

#### 234. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1676)

```diff
-   44732: (BB, OB, GB) => {
+   44791: (ee, ie, He) => {
```

#### 235. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1685` → after: `L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/babylon-backend.js#L1685) · [Before (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1685)

```diff
-       c: () => YB
+       b: () => ye
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockFaceTable.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/blockFaceTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcd)

#### 1. `bundles/bloxd.io/chunks/js/blockFaceTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/blockFaceTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/blockFaceTable.js#L4)

```diff
-   63859: (BB, OB, GB) => {
+   63800: (ee, ie, He) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d)

#### 1. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L4)

```diff
-   37071: (BB, OB, GB) => {
+   37185: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L11)

```diff
-     var YB = GB(37078);
+     var ye = He(37187);
```

#### 3. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L72)

```diff
-     var JB = GB(37083);
+     var Je = He(37190);
```

#### 4. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L83)

```diff
-       return `${OB}|${GB}|${BB}`
+       return `${ie}|${He}|${ee}`
```

#### 5. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L110)

```diff
-         return null !== (DB = await (0, JB.e)(QB, OB, GB)) && void 0 !== DB ? DB : (await AB(QB, OB, GB)).toDataURL()
+         return null !== (be = await (0, Je.e)(Me, ie, He)) && void 0 !== be ? be : (await Ee(Me, ie, He)).toDataURL()
```

#### 6. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L121-L124` → after: `L121-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L121-L124) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L121-L124)

```diff
-         const QB = (0, YB.k)(GB, DB),
-           oB = QB * YB.d.across,
-           jB = QB * YB.d.down,
-           JB = QB * YB.d.up,
+         const Me = (0, ye.h)(He, be),
+           Ke = Me * ye.c.across,
+           Ue = Me * ye.c.down,
+           Je = Me * ye.c.up,
```

#### 7. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L143)

```diff
-             rect: OB.cropFaces ? QB : [0, 0, 1, 1],
+             rect: ie.cropFaces ? Me : [0, 0, 1, 1],
```

#### 8. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L148)

```diff
-           NB = YB.g;
+           Xe = ye.d;
```

#### 9. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L155` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L155) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L155)

```diff
-         return (0, YB.n)(qB, GB, DB, (BB => 1 === ZB[BB])), qB
+         return (0, ye.j)(Te, He, be, (ee => 1 === pe[ee])), Te
```
