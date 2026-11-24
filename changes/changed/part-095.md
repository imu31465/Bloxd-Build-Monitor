# Changed — Bundle Modifications Report (Part 095 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `95 / 142` (**395** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 094](part-094.md) · [Part 096 →](part-096.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/86.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/86.js` (2205 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba)

#### 1951. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21015-L21019` → after: `L21293-L21302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21293-L21302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21293-L21302) · [Before (L21015-L21019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21015-L21019)

```diff
-               function Ip() {
-                 var ip;
-                 if (pp[di[97]] >= pp[-di[101]]) throw Error(Dp(151));
-                 if (ki(ip = pp[di[30]][pp[di[97]]] & di[12], pp[di[97]]++), (ip & di[98]) == di[68]) return ip & di[21];
-                 throw Error(Dp(di[107]))
+             function mT(...TT) {
+               switch (TT[fU[11]] = fU[0], ((TT[fU[2]] & fU[45]) !== fU[2]) * fU[0] + (TT[fU[2]] < fU[2]) * fU[17]) {
+                 case fU[2]:
+                   return [TT[fU[2]] % fU[45], Math.trunc(TT[fU[2]] / fU[46])];
+                 case fU[0]:
+                   return [TT[fU[2]] % fU[45] - fU[45], Math.trunc(TT[fU[2]] / fU[46]) + fU[0]];
+                 case fU[17]:
+                   return [((TT[fU[2]] + fU[45]) % fU[45] + fU[45]) % fU[45], Math.round(TT[fU[2]] / fU[46])];
+                 case fU[28]:
+                   return [TT[fU[2]] % fU[45], Math.trunc(TT[fU[2]] / fU[46])]
```

#### 1952. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21022-L21096` → after: `L21322-L21325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21322-L21325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21322-L21325) · [Before (L21022-L21096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21022-L21096)

```diff
-               function Sp(...ip) {
-                 if (ip[di[13]] = di[1], ki(ip[di[5]] = di[17], ip[di[106]] = di[17], ip[di[109]] = di[17], ip[di[4]] = di[17], ip[di[10]] = di[17]), pp[di[97]] > pp[-di[101]]) {
-                   function Op(...pp) {
-                     for (ki(pp[di[13]] = di[2], pp[di[2]] = '^0`=.N6YwHW#<D8r"4ZOK!V2vpb@Fo:*RlsnC_B>&$txEe,jf}[3{I/yu;|]S7TzgX5k9~MaQU?Gh%Li)PmcJ(q1+Ad', pp[di[0]] = "" + (pp[di[1]] || ""), pp[di[15]] = pp[di[0]].length, pp[di[10]] = [], pp[di[54]] = di[1], pp[-di[103]] = di[1], … [truncated]
-                       if (pp[di[102]] = pp[di[2]].indexOf(pp[di[0]][pp[di[11]]]), pp[di[102]] !== -di[2])
-                         if (pp[di[23]] < di[1]) pp[di[23]] = pp[di[102]];
-                         else {
-                           ki(pp[di[23]] += pp[di[102]] * di[32], pp[di[54]] |= pp[di[23]] << pp[-di[103]], pp[-di[103]] += (pp[di[23]] & di[33]) > di[34] ? di[35] : di[36]);
-                           do {
-                             ki(pp[di[10]].push(pp[di[54]] & di[12]), pp[di[54]] >>= di[11], pp[-di[103]] -= di[11])
-                           } while (pp[-di[103]] > di[23]);
-                           pp[di[23]] = -di[2]
-                         } return pp[di[23]] > -di[2] && pp[di[10]].push((pp[di[54]] | pp[di[23]] << pp[-di[103]]) & di[12]), ui(pp[di[10]])
-                   }
- 
-                   function op(...pp) {
- ... (59 more removed lines; see GitHub link above)
+             function MT(...TT) {
+               return TT[fU[11]] = fU[0], typeof cU[TT[fU[2]]] === fU[15] ? cU[TT[fU[2]]] = zT(vU[TT[fU[2]]]) : cU[TT[fU[2]]]
+             }
+             throw new Error(MT(100) + MT(101) + MT(102) + MT(103) + " v" + TT[fU[2]])
```

#### 1953. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21098` → after: `L21327-L21365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21327-L21365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21327-L21365) · [Before (L21098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21098)

```diff
-           throw Dp(143) + di[102] in ji && Ap(), new Error(cp)
+           return [fU[2], fU[0], fU[17], fU[28], fU[18], fU[43], fU[8], fU[23]].map(((...TT) => (TT[fU[11]] = fU[0], parseInt(mT[UT(104)](TT[fU[2]] * fU[3], TT[fU[2]] * fU[3] + fU[3]), 16))))
+         };
+       bU(MU = (...TT) => (TT[fU[11]] = fU[0], TT[fU[2]] >= UT), gU = (...TT) => {
+         function UT(...TT) {
+           return TT[fU[11]] = fU[0], typeof cU[TT[fU[2]]] === fU[15] ? cU[TT[fU[2]]] = function(...TT) {
+             for (bU(TT[fU[11]] = fU[0], TT[fU[0]] = 'c<KDRjPWJgu"?3a52:$GkE{*106YiU%vHn(~mC,te+z9^Qw>lxhp`B@XVAM!N&/)TO}4qFZyLdrs=fS_|.8[]o#7Ib;', TT[fU[17]] = "" + (TT[fU[2]] || ""), TT[fU[4]] = TT[fU[17]].length, TT[fU[39]] = [], TT[fU[43]] = fU[2], TT[fU[48]] = fU[2], TT[fU[33 … [truncated]
+               if (TT[fU[32]] = TT[fU[0]].indexOf(TT[fU[17]][TT[fU[50]]]), TT[fU[32]] !== -fU[0])
+                 if (TT[fU[33]] < fU[2]) TT[fU[33]] = TT[fU[32]];
+                 else {
+                   bU(TT[fU[33]] += TT[fU[32]] * fU[27], TT[fU[43]] |= TT[fU[33]] << TT[fU[48]], TT[fU[48]] += (TT[fU[33]] & fU[35]) > fU[36] ? fU[37] : fU[38]);
+                   do {
+                     bU(TT[fU[39]].push(TT[fU[43]] & fU[10]), TT[fU[43]] >>= fU[3], TT[fU[48]] -= fU[3])
+                   } while (TT[fU[48]] > fU[23]);
+                   TT[fU[33]] = -fU[0]
+                 } return TT[fU[33]] > -fU[0] && TT[fU[39]].push((TT[fU[43]] | TT[fU[33]] << TT[fU[48]]) & fU[10]), qU(TT[fU[39]])
+           }(vU[TT[fU[2]]]) : cU[TT[fU[2]]]
+ ... (23 more added lines; see GitHub link above)
```

#### 1954. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21100` → after: `L21367-L21376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21367-L21376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21367-L21376) · [Before (L21100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21100)

```diff
-         return Ip[ip(di[77])]
+         if (TT[fU[11]] = fU[17], UT(113) + "t" in iU && function(...TT) {
+             TT[fU[11]] = fU[2]
+           }(), TT[fU[0]][UT(116)] < kU) throw new Error(mT);
+         const WT = new Uint8Array(TT[fU[0]][UT(fU[58])](kU));
+         HU(zT(TT[fU[2]]), TT[fU[0]][UT(fU[58])](fU[2], kU), fU[0], WT);
+         const MT = new(zU[fU[39]][UT(118) + fU[7]])({
+           [UT(119)]: fU[31]
+         });
+         if (MT[UT(120)](WT), MT[UT(121)] || !MT[UT(122)]) throw new Error(mT);
+         return MT[UT(123)]
```

#### 1955. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21103-L21105` → after: `L21379-L21381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21379-L21381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21379-L21381) · [Before (L21103-L21105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21103-L21105)

```diff
-     var mi = cp(37179),
-       Ri = cp(37188),
-       qi = cp(37192);
+     var OU = mT(37070),
+       eU = mT(37072),
+       YU = mT(37076);
```

#### 1956. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21108` → after: `L21384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21384) · [Before (L21108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21108)

```diff
-       return Ip.my.from(Uint8Array.from(pp))
+       return MT.HB.from(Uint8Array.from(TT))
```

#### 1957. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21140` → after: `L21416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21416) · [Before (L21140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21140)

```diff
-       return (0, op.G)(cp) ? null : Ei(pp, li(ip, cp))
+       return (0, zT.E)(mT) ? null : dU(TT, tU(UT, mT))
```

#### 1958. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21144` → after: `L21420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21420) · [Before (L21144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21144)

```diff
-       return (0, op.G)(ip) ? null : Qi(pp, Xi(ip))
+       return (0, zT.E)(UT) ? null : aU(TT, wU(UT))
```

#### 1959. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21194` → after: `L21470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21470) · [Before (L21194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21194)

```diff
-         void 0 !== pp ? Op[pp] = cp(pp, op.v) : console.error(`Unknown Partial field index ${op.i}`)
+         void 0 !== TT ? WT[TT] = mT(TT, zT.v) : console.error(`Unknown Partial field index ${zT.i}`)
```

#### 1960. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21200-L21201` → after: `L21476-L21477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21476-L21477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21476-L21477) · [Before (L21200-L21201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21200-L21201)

```diff
-       return (0, op.G)(ip) ? null : "QJ" === pp ? function(pp) {
-         return Ei(yp, ai(pp, Ri.x, ((pp, ip) => Ji(Jp[pp], pp, ip))))
+       return (0, zT.E)(UT) ? null : "sV" === TT ? function(TT) {
+         return dU(BT, PU(TT, eU.u, ((TT, UT) => yU(IT[TT], TT, UT))))
```

#### 1961. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21206-L21207` → after: `L21482-L21483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21482-L21483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21482-L21483) · [Before (L21206-L21207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21206-L21207)

```diff
-       return (0, op.G)(ip) ? null : "QJ" === pp ? function(pp) {
-         return (0, op.G)(pp) ? null : ni(pp, Ri.x, Bi)
+       return (0, zT.E)(UT) ? null : "sV" === TT ? function(TT) {
+         return (0, zT.E)(TT) ? null : VU(TT, eU.u, XU)
```

#### 1962. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21222-L21223` → after: `L21498-L21499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21498-L21499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21498-L21499) · [Before (L21222-L21223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21222-L21223)

```diff
-         const pp = Op.Ip;
-         Op.Ip = (0, op.G)(pp) ? null : Ni(pp)
+         const TT = WT.WT;
+         WT.WT = (0, zT.E)(TT) ? null : IU(TT)
```

#### 1963. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21226` → after: `L21502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21502) · [Before (L21226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21226)

```diff
-         Op.killer = Ni(null !== (Ip = Op.killer) && void 0 !== Ip ? Ip : {}), Op.victim = Ni(null !== (Sp = Op.victim) && void 0 !== Sp ? Sp : {})
+         WT.killer = IU(null !== (MT = WT.killer) && void 0 !== MT ? MT : {}), WT.victim = IU(null !== (gT = WT.victim) && void 0 !== gT ? gT : {})
```

#### 1964. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21243-L21244` → after: `L21519-L21520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21519-L21520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21519-L21520) · [Before (L21243-L21244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21243-L21244)

```diff
-         const pp = Op.Ip;
-         Op.Ip = (0, op.G)(pp) ? null : Ti(pp)
+         const TT = WT.WT;
+         WT.WT = (0, zT.E)(TT) ? null : QU(TT)
```

#### 1965. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21247` → after: `L21523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21523) · [Before (L21247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21247)

```diff
-         Op.killer = Ti(null !== (Ip = Op.killer) && void 0 !== Ip ? Ip : {}), Op.victim = Ti(null !== (Sp = Op.victim) && void 0 !== Sp ? Sp : {})
+         WT.killer = QU(null !== (MT = WT.killer) && void 0 !== MT ? MT : {}), WT.victim = QU(null !== (gT = WT.victim) && void 0 !== gT ? gT : {})
```

#### 1966. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21249-L21250` → after: `L21525-L21526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21525-L21526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21525-L21526) · [Before (L21249-L21250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21249-L21250)

```diff
-         const ip = null === pp || void 0 === pp ? void 0 : pp.Do;
-         if ((0, op.G)(ip)) return;
+         const UT = null === TT || void 0 === TT ? void 0 : TT.EW;
+         if ((0, zT.E)(UT)) return;
```

#### 1967. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21261` → after: `L21537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21537) · [Before (L21261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21261)

```diff
-       return (0, op.G)(pp) ? null : {
+       return (0, zT.E)(TT) ? null : {
```

#### 1968. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21263-L21264` → after: `L21539-L21540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21539-L21540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21539-L21540) · [Before (L21263-L21264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21263-L21264)

```diff
-         amount: null !== (ip = pp.amount) && void 0 !== ip ? ip : null,
-         attributes: JSON.stringify(null !== (cp = pp.attributes) && void 0 !== cp ? cp : {})
+         amount: null !== (UT = TT.amount) && void 0 !== UT ? UT : null,
+         attributes: JSON.stringify(null !== (mT = TT.attributes) && void 0 !== mT ? mT : {})
```

#### 1969. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21269` → after: `L21545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21545) · [Before (L21269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21269)

```diff
-       if ((0, op.G)(pp)) return null;
+       if ((0, zT.E)(TT)) return null;
```

#### 1970. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21279` → after: `L21555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21555) · [Before (L21279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21279)

```diff
-       if ((0, op.G)(pp)) return null;
+       if ((0, zT.E)(TT)) return null;
```

#### 1971. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21282-L21283` → after: `L21558-L21559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21558-L21559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21558-L21559) · [Before (L21282-L21283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21282-L21283)

```diff
-         entries: ai(pp, Ri.m, ((pp, ip) => {
-           if ((0, op.G)(ip)) return null;
+         entries: PU(TT, eU.l, ((TT, UT) => {
+           if ((0, zT.E)(UT)) return null;
```

#### 1972. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21305` → after: `L21581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21581) · [Before (L21305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21305)

```diff
-       if ((0, op.G)(pp)) return;
+       if ((0, zT.E)(TT)) return;
```

#### 1973. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21307-L21308` → after: `L21583-L21584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21583-L21584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21583-L21584) · [Before (L21307-L21308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21307-L21308)

```diff
-       return ni(pp.entries, Ri.m, ((pp, cp) => {
-         if ((0, op.G)(cp)) return null;
+       return VU(TT.entries, eU.l, ((TT, mT) => {
+         if ((0, zT.E)(mT)) return null;
```

#### 1974. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21320` → after: `L21596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21596) · [Before (L21320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21320)

```diff
-             for (let cp = 0; cp < op.l; cp++) ip.push(cp in pp ? pp[cp] : null);
+             for (let mT = 0; mT < zT.n; mT++) UT.push(mT in TT ? TT[mT] : null);
```

#### 1975. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21330-L21331` → after: `L21606-L21607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21606-L21607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21606-L21607) · [Before (L21330-L21331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21330-L21331)

```diff
-         entities: bi(pp.entities, (pp => ai(pp, Ri.j, Fi))),
-         items: bi(pp.items, (pp => ai(pp, Ri.p, ((pp, ip) => Ji(Bp[pp], pp, ip))))),
+         entities: FU(TT.entities, (TT => PU(TT, eU.h, uU))),
+         items: FU(TT.items, (TT => PU(TT, eU.o, ((TT, UT) => yU(QT[TT], TT, UT))))),
```

#### 1976. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21334` → after: `L21610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21610) · [Before (L21334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21334)

```diff
-         playerHud: (0, op.G)(pp.playerHud) ? null : ai(pp.playerHud, Ri.r, ((pp, ip) => (0, op.G)(ip) ? null : function(pp, ip) {
+         playerHud: (0, zT.E)(TT.playerHud) ? null : PU(TT.playerHud, eU.p, ((TT, UT) => (0, zT.E)(UT) ? null : function(TT, UT) {
```

#### 1977. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21339-L21341` → after: `L21615-L21617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21615-L21617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21615-L21617) · [Before (L21339-L21341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21339-L21341)

```diff
-         effects: (0, op.G)(pp.effects) ? null : (0, mi.o)(pp.effects),
-         uiElements: ai(pp.uiElements, Ri.B, ((pp, ip) => (0, op.G)(ip) ? null : JSON.stringify(ip))),
-         environment: ai(pp.environment, Ri.u, ((pp, ip) => Ji(Np[pp], pp, ip))),
+         effects: (0, zT.E)(TT.effects) ? null : (0, OU.n)(TT.effects),
+         uiElements: PU(TT.uiElements, eU.w, ((TT, UT) => (0, zT.E)(UT) ? null : JSON.stringify(UT))),
+         environment: PU(TT.environment, eU.s, ((TT, UT) => yU(sT[TT], TT, UT))),
```

#### 1978. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21351-L21352` → after: `L21627-L21628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21627-L21628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21627-L21628) · [Before (L21351-L21352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21351-L21352)

```diff
-             const ip = ni(pp, Ri.j, gi),
-               cp = ip.type ? (0, Op.z)(ip.type) : null;
+             const UT = VU(TT, eU.h, CU),
+               mT = UT.type ? (0, WT.q)(UT.type) : null;
```

#### 1979. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21355` → after: `L21631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21631) · [Before (L21355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21355)

```diff
-           items: bi(pp.items, (pp => ni(pp, Ri.p, Bi))),
+           items: FU(TT.items, (TT => VU(TT, eU.o, XU))),
```

#### 1980. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21360-L21361` → after: `L21636-L21637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21636-L21637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21636-L21637) · [Before (L21360-L21361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21360-L21361)

```diff
-           uiElements: ni(pp.uiElements, Ri.B, ((pp, ip) => "string" === typeof ip ? JSON.parse(ip) : ip)),
-           environment: ni(pp.environment, Ri.u, Bi),
+           uiElements: VU(TT.uiElements, eU.w, ((TT, UT) => "string" === typeof UT ? JSON.parse(UT) : UT)),
+           environment: VU(TT.environment, eU.s, XU),
```

#### 1981. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21364` → after: `L21640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21640) · [Before (L21364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21364)

```diff
-             return "qE" === ip.type ? (ip.fromBlockData ??= null, ip.toBlockData ??= null) : "chunkAdded" !== ip.type && "chunkRemoved" !== ip.type || (ip.sharedBlockData ??= []), ip
+             return "EQ" === UT.type ? (UT.fromBlockData ??= null, UT.toBlockData ??= null) : "chunkAdded" !== UT.type && "chunkRemoved" !== UT.type || (UT.sharedBlockData ??= []), UT
```

#### 1982. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21369` → after: `L21645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21645) · [Before (L21369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21369)

```diff
-       return void 0 !== Ip && (cp.hotbar = Ip), (0, op.G)(pp.playerHud) || (cp.playerHud = ni(pp.playerHud, Ri.r, ((pp, ip) => (0, op.G)(ip) ? null : function(pp) {
+       return void 0 !== MT && (mT.hotbar = MT), (0, zT.E)(TT.playerHud) || (mT.playerHud = VU(TT.playerHud, eU.p, ((TT, UT) => (0, zT.E)(UT) ? null : function(TT) {
```

#### 1983. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21372-L21373` → after: `L21648-L21649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21648-L21649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21648-L21649) · [Before (L21372-L21373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21372-L21373)

```diff
-         return 1 !== ip.length || "int" !== ip[0] && "double" !== ip[0] ? pp : pp[ip[0]]
-       }(ip)))), (0, op.G)(pp.effects) || (cp.effects = (0, mi.k)(pp.effects)), cp
+         return 1 !== UT.length || "int" !== UT[0] && "double" !== UT[0] ? TT : TT[UT[0]]
+       }(UT)))), (0, zT.E)(TT.effects) || (mT.effects = (0, OU.j)(TT.effects)), mT
```

#### 1984. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21377` → after: `L21653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21653) · [Before (L21377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21377)

```diff
-     const yc = [2, 0, 1, 123, 111, 63, 9, 7, "e", 6, "d", 8, 255, "length", "c", "a", 224, "undefined", void 0, 4, 237, "b", "fromCodePoint", 12, "push", 136, 28, 16, "g", 91, 5, 153, 8191, 88, 13, 14, null, 144, 241, 10, "join", 128, "f", 46, 228, 158, 60, "h", 145, 127, !1, !0, … [truncated]
+     const jm = [94, 0, 1, "h", 3, "a", "i", 7, 199, 6, "d", 8, 255, "length", "c", 204, 166, "undefined", void 0, 246, 107, 80, 63, "fromCodePoint", 12, "push", 68, "b", 91, 8191, 88, 13, 14, 2, 120, 46, 5, "f", 4, "e", null, 10, 95, 9, 133, 151, 183, 177, 148, "join", 127, 132,  … [truncated]
```

#### 1985. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21381-L21382` → after: `L21657-L21658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21657-L21658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21657-L21658) · [Before (L21381-L21382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21381-L21382)

```diff
-         for (Hc(pp[yc[13]] = yc[2], pp[yc[5]] = 'P,zu8BqRAnbF}W]xV1=r#I4OyE*?DXdN`7hjJGUav5&@"_i{k%9/mop6HL.g|[2)S(st3:+Qlew!fYM^<c>0;K$CTZ~', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[-yc[4]] = pp[yc[0]].length, pp[yc[10]] = [], pp[yc[8]] = yc[1], pp[yc[9]] = yc[1], pp[yc[7]] = -yc … [truncated]
-           if (pp[yc[6]] = pp[yc[5]].indexOf(pp[yc[0]][pp[yc[3]]]), pp[yc[6]] !== -yc[2])
+         for (fm(TT[jm[13]] = jm[2], TT[jm[5]] = 'xMCOHhbTradPRNgywF!V1S"7et62:4KXZc(v0YD@}^8i<&]53$f~)*m_sQI#kE?,/u`j+%{.J>Boz=lGU;WqpnLA|[9', TT[-jm[0]] = "" + (TT[jm[1]] || ""), TT[jm[4]] = TT[-jm[0]].length, TT[jm[10]] = [], TT[-jm[8]] = jm[1], TT[jm[9]] = jm[1], TT[jm[7]] = - … [truncated]
+           if (TT[jm[6]] = TT[jm[5]].indexOf(TT[-jm[0]][TT[jm[3]]]), TT[jm[6]] !== -jm[2])
```

#### 1986. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21385` → after: `L21661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21661) · [Before (L21385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21385)

```diff
-               Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[8]] |= pp[yc[7]] << pp[yc[9]], pp[yc[9]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
+               fm(TT[jm[7]] += TT[jm[6]] * jm[28], TT[-jm[8]] |= TT[jm[7]] << TT[jm[9]], TT[jm[9]] += (TT[jm[7]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
```

#### 1987. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21387` → after: `L21663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21663) · [Before (L21387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21387)

```diff
-                 Hc(pp[yc[10]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[yc[9]] -= yc[11])
+                 fm(TT[jm[10]].push(TT[-jm[8]] & jm[12]), TT[-jm[8]] >>= jm[11], TT[jm[9]] -= jm[11])
```

#### 1988. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21390` → after: `L21666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21666) · [Before (L21390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21390)

```diff
-             } return pp[yc[7]] > -yc[2] && pp[yc[10]].push((pp[yc[8]] | pp[yc[7]] << pp[yc[9]]) & yc[12]), wc(pp[yc[10]])
+             } return TT[jm[7]] > -jm[2] && TT[jm[10]].push((TT[-jm[8]] | TT[jm[7]] << TT[jm[9]]) & jm[12]), Lm(TT[jm[10]])
```

#### 1989. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21400` → after: `L21697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21697) · [Before (L21400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21400)

```diff
-     function tc(pp, ip, cp, Op = {}, op, Ip, Sp, xp) {
+     function Zm(TT, UT, mT, WT = {}, zT, MT, gT, nT, HT) {
```

#### 1990. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21404-L21406` → after: `L21707-L21709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21707-L21709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21707-L21709) · [Before (L21404-L21406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21404-L21406)

```diff
-           for (Hc(pp[yc[13]] = yc[2], pp[yc[26]] = 'PzWjsEfmFnDIadh/C$0+}HR1SUx3Nw|]>4XcT26J!<#yl)Qg(GL=rkBbp.KZ*5;?"A%voui{^7M`,_@9&V~:e8OYqt[', pp[yc[21]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[21]].length, pp[yc[10]] = [], pp[yc[30]] = yc[1], pp[yc[31]] = yc[1], pp[yc[28 … [truncated]
-             if (pp[-yc[27]] = pp[yc[26]].indexOf(pp[yc[21]][pp[yc[25]]]), pp[-yc[27]] !== -yc[2])
-               if (pp[yc[28]] < yc[1]) pp[yc[28]] = pp[-yc[27]];
+           for (fm(TT[jm[13]] = jm[2], TT[jm[34]] = 'zTBmorSXu3^_Ot)V9%eM1w#+Jv8An/<WZ?yUk*7h~;CY}lsd|@j>]!DpfIb[=E0Q6`qg${PRc(.xL&G"KiF,4:Na5H2', TT[jm[33]] = "" + (TT[jm[1]] || ""), TT[-jm[0]] = TT[jm[33]].length, TT[jm[38]] = [], TT[jm[36]] = jm[1], TT[jm[37]] = jm[1], TT[jm[7] … [truncated]
+             if (TT[-jm[35]] = TT[jm[34]].indexOf(TT[jm[33]][TT[jm[3]]]), TT[-jm[35]] !== -jm[2])
+               if (TT[jm[7]] < jm[1]) TT[jm[7]] = TT[-jm[35]];
```

#### 1991. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21408` → after: `L21711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21711) · [Before (L21408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21408)

```diff
-                 Hc(pp[yc[28]] += pp[-yc[27]] * yc[29], pp[yc[30]] |= pp[yc[28]] << pp[yc[31]], pp[yc[31]] += (pp[yc[28]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
+                 fm(TT[jm[7]] += TT[-jm[35]] * jm[28], TT[jm[36]] |= TT[jm[7]] << TT[jm[37]], TT[jm[37]] += (TT[jm[7]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
```

#### 1992. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21410-L21471` → after: `L21713-L21718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21713-L21718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21713-L21718) · [Before (L21410-L21471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21410-L21471)

```diff
-                   Hc(pp[yc[10]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[31]] -= yc[11])
-                 } while (pp[yc[31]] > yc[7]);
-                 pp[yc[28]] = -yc[2]
-               } return pp[yc[28]] > -yc[2] && pp[yc[10]].push((pp[yc[30]] | pp[yc[28]] << pp[yc[31]]) & yc[12]), wc(pp[yc[10]])
-         }), Hc(Sp = void 0, xp = {
-           [Ip(85)]: function(pp, ip, cp) {
-             cp || (cp = function(...pp) {
-               function ip() {}
-               pp[yc[13]] = yc[1], Hc(pp[yc[15]] = function(...pp) {
-                 for (Hc(pp[yc[13]] = yc[0], pp[yc[38]] = yc[1], pp[yc[21]] = yc[1], pp[yc[14]] = new ip(yc[1]), pp[yc[30]] = pp[yc[14]], pp[yc[9]] = pp[yc[1]], pp[yc[37]] = pp[yc[2]]); pp[yc[9]] !== yc[36] || pp[yc[37]] !== yc[36];) Hc(pp[yc[21]] = (pp[yc[9]] ? pp[yc[9]].val : yc … [truncated]
-                 return pp[yc[38]] && (pp[yc[30]].next = new ip(pp[yc[38]])), pp[yc[14]].next
-               }, console.log(pp[yc[15]]))
-             }), ip || (ip = function(...ip) {
-               return ip[yc[13]] = yc[2], typeof Oc[ip[yc[1]]] === yc[17] ? Oc[ip[yc[1]]] = pp(oc[ip[yc[1]]]) : Oc[ip[yc[1]]]
-             }), pp || (pp = function(pp) {
-               var ip, cp, Op, op, Ip, Sp, xp;
- ... (46 more removed lines; see GitHub link above)
+                   fm(TT[jm[38]].push(TT[jm[36]] & jm[12]), TT[jm[36]] >>= jm[11], TT[jm[37]] -= jm[11])
+                 } while (TT[jm[37]] > jm[7]);
+                 TT[jm[7]] = -jm[2]
+               } return TT[jm[7]] > -jm[2] && TT[jm[38]].push((TT[jm[36]] | TT[jm[7]] << TT[jm[37]]) & jm[12]), Lm(TT[jm[38]])
+         }), MT(jm[106]) in Bm && gT(), fm(nT = void 0, HT = {
+           [MT(118)]: function(...TT) {
```

#### 1993. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21473` → after: `L21720-L21731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21720-L21731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21720-L21731) · [Before (L21473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21473)

```diff
-               pp[yc[13]] = yc[1]
+               return TT[jm[13]] = jm[2], typeof RU[TT[jm[1]]] === jm[17] ? RU[TT[jm[1]]] = function(...TT) {
+                 for (fm(TT[jm[13]] = jm[2], TT[jm[15]] = '.YdlTjqEtNoFCkZrPUBgJ{ez15[Q8b@!$n`Hvx3^u}XpDL%"A<&]+;RM*?9~VisW_Sh2f,)#y4w>=Oam/06(IGc:7K|', TT[-jm[42]] = "" + (TT[jm[1]] || ""), TT[-jm[43]] = TT[-jm[42]].length, TT[jm[38]] = [], TT[jm[45]] = jm[1], TT[-jm[46]] = jm[1] … [truncated]
+                   if (TT[jm[6]] = TT[jm[15]].indexOf(TT[-jm[42]][TT[jm[3]]]), TT[jm[6]] !== -jm[2])
+                     if (TT[jm[44]] < jm[1]) TT[jm[44]] = TT[jm[6]];
+                     else {
+                       fm(TT[jm[44]] += TT[jm[6]] * jm[28], TT[jm[45]] |= TT[jm[44]] << TT[-jm[46]], TT[-jm[46]] += (TT[jm[44]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
+                       do {
+                         fm(TT[jm[38]].push(TT[jm[45]] & jm[12]), TT[jm[45]] >>= jm[11], TT[-jm[46]] -= jm[11])
+                       } while (TT[-jm[46]] > jm[7]);
+                       TT[jm[44]] = -jm[2]
+                     } return TT[jm[44]] > -jm[2] && TT[jm[38]].push((TT[jm[45]] | TT[jm[44]] << TT[-jm[46]]) & jm[12]), Lm(TT[jm[38]])
+               }(Tm[TT[jm[1]]]) : RU[TT[jm[1]]]
```

#### 1994. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21475` → after: `L21733-L21741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21733-L21741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21733-L21741) · [Before (L21475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21475)

```diff
-             op(yc[95]) + "l" in vc && Ip(), ip[yc[15]]
+             UT(119) in Bm && function(...TT) {
+               function UT() {}
+               TT[jm[13]] = jm[1], fm(TT[jm[5]] = function(...TT) {
+                 for (fm(TT[jm[13]] = jm[33], TT[jm[33]] = jm[1], TT[jm[47]] = jm[1], TT[jm[38]] = new UT(jm[1]), TT[jm[36]] = TT[jm[38]], TT[-jm[4]] = TT[jm[1]], TT[jm[7]] = TT[jm[2]]); TT[-jm[4]] !== jm[40] || TT[jm[7]] !== jm[40];) fm(TT[jm[47]] = (TT[-jm[4]] ? TT[-jm[4]].val : … [truncated]
+                 return TT[jm[33]] && (TT[jm[36]].next = new UT(TT[jm[33]])), TT[jm[38]].next
+               }, console.log(TT[jm[5]]))
+             }(), fm([
+               [TT[jm[48]], TT[jm[2]], TT[jm[33]]], TT[jm[4]]
+             ] = km, console[UT(jm[34])]("" + TT[jm[48]][jm[49]](".") + (UT(121) + UT(jm[131])) + TT[jm[33]][UT(jm[109]) + "me"] + UT(124) + TT[jm[2]]))
```

#### 1995. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21477-L21480` → after: `L21743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21743) · [Before (L21477-L21480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21477-L21480)

```diff
-           return cp
-         }
-         Sp = Pc[pp] || (Pc[pp] = Lp())
-       } else {
+         }), UT === MT(125) + MT(jm[213])) {
```

#### 1996. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21482-L21492` → after: `L21745-L21746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21745-L21746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21745-L21746) · [Before (L21482-L21492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21482-L21492)

```diff
-           for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = '4TbteBMmhAXl={"_sIN$1d;@Fy!x#C*H)Ug35R:^]YSk>Du+2cP`0rvZf}.Oi8nKjWQ[aJpGVzo&qEL/w|7~%,69?(<', pp[yc[21]] = "" + (pp[yc[1]] || ""), pp[-yc[48]] = pp[yc[21]].length, pp[yc[19]] = [], pp[yc[8]] = yc[1], pp[yc[42]] = yc[1], pp[yc[7]] … [truncated]
-             if (pp[yc[49]] = pp[yc[2]].indexOf(pp[yc[21]][pp[yc[47]]]), pp[yc[49]] !== -yc[2])
-               if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[49]];
-               else {
-                 Hc(pp[yc[7]] += pp[yc[49]] * yc[29], pp[yc[8]] |= pp[yc[7]] << pp[yc[42]], pp[yc[42]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
-                 do {
-                   Hc(pp[yc[19]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[yc[42]] -= yc[11])
-                 } while (pp[yc[42]] > yc[7]);
-                 pp[yc[7]] = -yc[2]
-               } return pp[yc[7]] > -yc[2] && pp[yc[19]].push((pp[yc[8]] | pp[yc[7]] << pp[yc[42]]) & yc[12]), wc(pp[yc[19]])
-         }
+           fm(TT[jm[13]] = jm[1], TT[jm[5]] = function() {
+             var TT, UT, mT = jm[1];
```

#### 1997. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21494-L21527` → after: `L21748-L21762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21748-L21762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21748-L21762) · [Before (L21494-L21527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21494-L21527)

```diff
-         function Dp(pp) {
-           return typeof Oc[pp] === yc[17] ? Oc[pp] = Yp(oc[pp]) : Oc[pp]
-         }
- 
-         function Ap(...pp) {
-           Hc(pp[yc[13]] = yc[1], pp[yc[15]] = function(...ip) {
-             return ip[yc[13]] = yc[0], pp[yc[2]]({}, ip[yc[1]], ip[yc[2]])
-           }, pp[yc[2]] = function(ip, cp, Op) {
-             var op, Ip, Sp, xp = {};
-             if (ip[cp + Op] !== yc[18]) return ip[cp + Op];
-             if (cp === Op) return yc[51];
-             for (op = yc[1]; op < cp.length; op++) xp[cp[op]] === yc[18] && (xp[cp[op]] = yc[1]), xp[Op[op]] === yc[18] && (xp[Op[op]] = yc[1]), Hc(xp[cp[op]]++, xp[Op[op]]--);
-             for (Ip in xp)
-               if (xp[Ip] !== yc[1]) return ip[cp + Op] = yc[50], yc[50];
-             for (Sp = yc[2]; Sp < cp.length; Sp++)
-               if (pp[yc[2]](ip, cp.substr(yc[1], Sp), Op.substr(yc[1], Sp)) && pp[yc[2]](ip, cp.substr(Sp), Op.substr(Sp)) || pp[yc[2]](ip, cp.substr(yc[1], Sp), Op.substr(Op.length - Sp)) && pp[yc[2]](ip, cp.substr(Sp), Op.substr(yc[1], Op.length - Sp))) return ip[cp + Op] = yc[ … [truncated]
- ... (18 more removed lines; see GitHub link above)
+             function WT(...UT) {
+               return UT[jm[13]] = jm[33],
+                 function(...UT) {
+                   function mT(...TT) {
+                     for (fm(TT[jm[13]] = jm[2], TT[jm[2]] = 'QGSPDV|JX]Ump)Ma4/n;5e7wkOR8."i!<oyA[Y^v=?0C6~}lhgFfsIq*9rLE@B{2u&dx>ctTK_W1b+jZH:(z%,N`#$3', TT[jm[33]] = "" + (TT[jm[1]] || ""), TT[jm[58]] = TT[jm[33]].length, TT[jm[61]] = [], TT[jm[43]] = jm[1], TT[jm[69]] = jm[1], … [truncated]
+                       if (TT[-jm[67]] = TT[jm[2]].indexOf(TT[jm[33]][TT[-jm[66]]]), TT[-jm[67]] !== -jm[2])
+                         if (TT[jm[68]] < jm[1]) TT[jm[68]] = TT[-jm[67]];
+                         else {
+                           fm(TT[jm[68]] += TT[-jm[67]] * jm[28], TT[jm[43]] |= TT[jm[68]] << TT[jm[69]], TT[jm[69]] += (TT[jm[68]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
+                           do {
+                             fm(TT[jm[61]].push(TT[jm[43]] & jm[12]), TT[jm[43]] >>= jm[11], TT[jm[69]] -= jm[11])
+                           } while (TT[jm[69]] > jm[7]);
+                           TT[jm[68]] = -jm[2]
+                         } return TT[jm[68]] > -jm[2] && TT[jm[61]].push((TT[jm[43]] | TT[jm[68]] << TT[jm[69]]) & jm[12]), Lm(TT[jm[61]])
+                   }
```

#### 1998. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21529-L21531` → after: `L21764-L21772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21764-L21772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21764-L21772) · [Before (L21529-L21531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21529-L21531)

```diff
-         function Wp(...pp) {
-           return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = Pp(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
-         }
+                   function WT(...TT) {
+                     return TT[jm[13]] = jm[2], typeof RU[TT[jm[1]]] === jm[17] ? RU[TT[jm[1]]] = mT(Tm[TT[jm[1]]]) : RU[TT[jm[1]]]
+                   }
+                   UT[jm[13]] = jm[2];
+                   for (fm(UT[jm[71]] = MT(138) + WT(139) + WT(140) + WT(141) + WT(142) + WT(143) + WT(144) + "/", UT[jm[70]] = "", UT[jm[14]] = UT[jm[1]].length), UT[jm[38]] = jm[1]; UT[jm[38]] < UT[jm[14]]; UT[jm[38]] += jm[4])
+                     for (UT[jm[39]] = UT[jm[1]].charCodeAt(UT[jm[38]]) << jm[58] | (UT[jm[38]] + jm[2] < UT[jm[14]] ? UT[jm[1]].charCodeAt(UT[jm[38]] + jm[2]) << jm[11] : jm[1]) | (UT[jm[38]] + jm[33] < UT[jm[14]] ? UT[jm[1]].charCodeAt(UT[jm[38]] + jm[33]) : jm[1]), UT[-jm[47]]  … [truncated]
+                   return UT[jm[70]]
+                 }(gT(HT(UT[jm[1]]), HT(UT[jm[2]])))
+             }
```

#### 1999. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21536-L21537` → after: `L21775-L21786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21775-L21786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21775-L21786) · [Before (L21536-L21537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21536-L21537)

```diff
-               for (Hc(pp[yc[13]] = yc[2], pp[-yc[53]] = [], pp[yc[21]] = yc[1], pp[yc[14]] = pp[yc[1]].length, pp[-yc[52]] = yc[18], pp[yc[30]] = yc[18]); pp[yc[21]] < pp[yc[14]];) Hc(pp[-yc[52]] = pp[yc[1]].charCodeAt(pp[yc[21]]++), pp[-yc[52]] >= yc[58] && pp[-yc[52]] <= 56319  … [truncated]
-               return pp[-yc[53]]
+               return TT[jm[13]] = jm[4],
+                 function(...TT) {
+                   var UT, mT, WT, zT;
+                   for (fm(TT[jm[13]] = jm[33], TT[-jm[73]] = TT[jm[2]].length, TT[jm[27]] = Array()), TT[-jm[72]] = Array(Math.ceil(TT[jm[1]].length / jm[33])), UT = jm[1]; UT < TT[-jm[72]].length; UT++) TT[-jm[72]][UT] = TT[jm[1]].charCodeAt(UT * jm[33]) << jm[11] | TT[jm[1]].ch … [truncated]
+                   for (; TT[-jm[72]].length > jm[1];) {
+                     for (fm(zT = Array(), WT = jm[1]), UT = jm[1]; UT < TT[-jm[72]].length; UT++) fm(WT = (WT << jm[58]) + TT[-jm[72]][UT], mT = Math.floor(WT / TT[-jm[73]]), WT -= mT * TT[-jm[73]]), (zT.length > jm[1] || mT > jm[1]) && (zT[zT.length] = mT);
+                     fm(TT[jm[27]][TT[jm[27]].length] = WT, TT[-jm[72]] = zT)
+                   }
+                   for (TT[jm[36]] = "", UT = TT[jm[27]].length - jm[2]; UT >= jm[1]; UT--) TT[jm[36]] += TT[jm[2]].charAt(TT[jm[27]][UT]);
+                   for (TT[jm[74]] = Math.ceil(TT[jm[1]].length * jm[11] / (Math.log(TT[jm[2]].length) / Math.log(jm[33]))), UT = TT[jm[36]].length; UT < TT[jm[74]]; UT++) TT[jm[36]] = TT[jm[2]][jm[1]] + TT[jm[36]];
+                   return TT[jm[36]]
+                 }(gT(HT(TT[jm[1]]), HT(TT[jm[2]])), TT[jm[33]])
```

#### 2000. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21541-L21545` → after: `L21790-L21798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21790-L21798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21790-L21798) · [Before (L21541-L21545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21541-L21545)

```diff
-               if (pp[yc[13]] = yc[2], pp[yc[1]] >= yc[58] && pp[yc[1]] <= 57343) {
-                 function ip(...pp) {
-                   for (Hc(pp[yc[13]] = yc[2], pp[yc[15]] = 'bDAXgMSoFRUV_ua78y(hjtZqvc5J3?PKd+G)[4#OL.x:=!,w^TBr*f/Y0$`sp{i2~z}CI%E<96;1@"l&]Hn|>NkemWQ', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[0]].length, pp[-yc[60]] = [], pp[yc[30]] = yc[1], pp[yc[9]] = yc[1], pp … [truncated]
-                     if (pp[yc[6]] = pp[yc[15]].indexOf(pp[yc[0]][pp[yc[11]]]), pp[yc[6]] !== -yc[2])
-                       if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
+               TT[jm[13]] = jm[33], TT[jm[5]] = kT(TT[jm[1]]), TT[jm[5]].length > jm[58] && (TT[jm[5]] = qT(TT[jm[5]], TT[jm[1]].length * jm[11]));
+               var UT = Array(jm[58]),
+                 mT = Array(jm[58]);
+               for (TT[jm[4]] = jm[1]; TT[jm[4]] < jm[58]; TT[jm[4]]++) fm(UT[TT[jm[4]]] = TT[jm[5]][TT[jm[4]]] ^ jm[113], mT[TT[jm[4]]] = TT[jm[5]][TT[jm[4]]] ^ jm[114]);
+               return TT[jm[38]] = qT(UT.concat(kT(TT[jm[2]])), jm[60] + TT[jm[2]].length * jm[11]), jT(qT(mT.concat(TT[jm[38]]), pm(function(...TT) {
+                 return TT[jm[13]] = jm[2], typeof RU[TT[jm[1]]] === jm[17] ? RU[TT[jm[1]]] = function(...TT) {
+                   for (fm(TT[jm[13]] = jm[2], TT[jm[38]] = 'u+.F[,Urvb@)<Xph4C3KBwN8OeJ=>n2xoVQ|}Pld/!9W;gDRyI$GSL?_M~c5*E6(s:TH"^&iz]aZAm0k1j#%Yt{`qf7', TT[-jm[55]] = "" + (TT[jm[1]] || ""), TT[jm[4]] = TT[-jm[55]].length, TT[jm[10]] = [], TT[-jm[56]] = jm[1], TT[-jm[57]] = jm[1 … [truncated]
+                     if (TT[jm[43]] = TT[jm[38]].indexOf(TT[-jm[55]][TT[jm[11]]]), TT[jm[43]] !== -jm[2])
+                       if (TT[jm[7]] < jm[1]) TT[jm[7]] = TT[jm[43]];
```

#### 2001. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21547` → after: `L21800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21800) · [Before (L21547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21547)

```diff
-                         Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[30]] |= pp[yc[7]] << pp[yc[9]], pp[yc[9]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
+                         fm(TT[jm[7]] += TT[jm[43]] * jm[28], TT[-jm[56]] |= TT[jm[7]] << TT[-jm[57]], TT[-jm[57]] += (TT[jm[7]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
```

#### 2002. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21549-L21550` → after: `L21802-L21803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21802-L21803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21802-L21803) · [Before (L21549-L21550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21549-L21550)

```diff
-                           Hc(pp[-yc[60]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[9]] -= yc[11])
-                         } while (pp[yc[9]] > yc[7]);
+                           fm(TT[jm[10]].push(TT[-jm[56]] & jm[12]), TT[-jm[56]] >>= jm[11], TT[-jm[57]] -= jm[11])
+                         } while (TT[-jm[57]] > jm[7]);
```

#### 2003. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21552-L21553` → after: `L21805-L21808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21805-L21808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21805-L21808) · [Before (L21552-L21553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21552-L21553)

```diff
-                       } return pp[yc[7]] > -yc[2] && pp[-yc[60]].push((pp[yc[30]] | pp[yc[7]] << pp[yc[9]]) & yc[12]), wc(pp[-yc[60]])
-                 }
+                       } return TT[jm[7]] > -jm[2] && TT[jm[10]].push((TT[-jm[56]] | TT[jm[7]] << TT[-jm[57]]) & jm[12]), Lm(TT[jm[10]])
+                 }(Tm[TT[jm[1]]]) : RU[TT[jm[1]]]
+               }(jm[51]) + jm[59], jm[60], jm[85])))
+             }
```

#### 2004. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21555-L21558` → after: `L21810-L21823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21810-L21823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21810-L21823) · [Before (L21555-L21558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21555-L21558)

```diff
-                 function cp(...pp) {
-                   return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = ip(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
-                 }
-                 throw Error(Wp(104) + cp(yc[66]) + cp(106) + pp[yc[1]].toString(yc[27]).toUpperCase() + (cp(107) + cp(108) + cp(yc[92]) + cp(110)))
+             function nT(...TT) {
+               function UT(...TT) {
+                 return TT[jm[13]] = jm[2], typeof RU[TT[jm[1]]] === jm[17] ? RU[TT[jm[1]]] = function(...TT) {
+                   for (fm(TT[jm[13]] = jm[2], TT[jm[61]] = '9,6*_;"wx=[eR@45lt8iV3`$JIbkvjAgBT]+|2F/?u.Xn{Qo&HUqsS~yM#}PC^)ZWaN<LfYD1z:OdE%!hG(Kp0>7crm', TT[jm[27]] = "" + (TT[jm[1]] || ""), TT[jm[4]] = TT[jm[27]].length, TT[jm[63]] = [], TT[jm[36]] = jm[1], TT[jm[9]] = jm[1], TT … [truncated]
+                     if (TT[jm[6]] = TT[jm[61]].indexOf(TT[jm[27]][TT[jm[3]]]), TT[jm[6]] !== -jm[2])
+                       if (TT[jm[62]] < jm[1]) TT[jm[62]] = TT[jm[6]];
+                       else {
+                         fm(TT[jm[62]] += TT[jm[6]] * jm[28], TT[jm[36]] |= TT[jm[62]] << TT[jm[9]], TT[jm[9]] += (TT[jm[62]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
+                         do {
+                           fm(TT[jm[63]].push(TT[jm[36]] & jm[12]), TT[jm[36]] >>= jm[11], TT[jm[9]] -= jm[11])
+                         } while (TT[jm[9]] > jm[7]);
+                         TT[jm[62]] = -jm[2]
+                       } return TT[jm[62]] > -jm[2] && TT[jm[63]].push((TT[jm[36]] | TT[jm[62]] << TT[jm[9]]) & jm[12]), Lm(TT[jm[63]])
+                 }(Tm[TT[jm[1]]]) : RU[TT[jm[1]]]
```

#### 2005. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21563` → after: `L21830-L21832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21830-L21832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21830-L21832) · [Before (L21563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21563)

```diff
-               return ip[yc[13]] = yc[0], pp[yc[2]](ip[yc[1]] >> ip[yc[2]] & yc[5] | yc[41])
+               var UT, mT;
+               for (fm(TT[jm[13]] = jm[2], TT[-jm[77]] = "", TT[jm[75]] = -jm[2]); ++TT[jm[75]] < TT[jm[1]].length;) fm(UT = TT[jm[1]].charCodeAt(TT[jm[75]]), mT = TT[jm[75]] + jm[2] < TT[jm[1]].length ? TT[jm[1]].charCodeAt(TT[jm[75]] + jm[2]) : jm[1]), jm[121] <= UT && UT <= jm[ … [truncated]
+               return TT[-jm[77]]
```

#### 2006. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21567` → after: `L21836-L21838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21836-L21838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21836-L21838) · [Before (L21567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21567)

```diff
-               return ip[yc[13]] = yc[2], (4294967168 & ip[yc[1]]) == yc[1] ? pp[yc[2]](ip[yc[1]]) : (ip[yc[2]] = "", (4294965248 & ip[yc[1]]) == yc[1] ? ip[yc[2]] = pp[yc[2]](ip[yc[1]] >> yc[9] & yc[61] | yc[74]) : (4294901760 & ip[yc[1]]) == yc[1] ? Hc(cp(ip[yc[1]]), ip[yc[2]] = … [truncated]
+               for (fm(TT[jm[13]] = jm[2], TT[jm[5]] = Array(TT[jm[1]].length >> jm[33])), TT[jm[27]] = jm[1]; TT[jm[27]] < TT[jm[5]].length; TT[jm[27]]++) TT[jm[5]][TT[jm[27]]] = jm[1];
+               for (TT[jm[27]] = jm[1]; TT[jm[27]] < TT[jm[1]].length * jm[11]; TT[jm[27]] += jm[11]) TT[jm[5]][TT[jm[27]] >> jm[36]] |= (TT[jm[1]].charCodeAt(TT[jm[27]] / jm[11]) & jm[12]) << jm[81] - TT[jm[27]] % jm[80];
+               return TT[jm[5]]
```

#### 2007. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21570-L21584` → after: `L21841-L21844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21841-L21844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21841-L21844) · [Before (L21570-L21584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21570-L21584)

```diff
-             function Ip() {
-               var ip;
-               if (pp[yc[73]] >= pp[yc[75]]) {
-                 function cp(...pp) {
-                   for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = ']ZkUKgacL!E6hv+AH"?t$JBsCl*mRS`5}bDi98XM1Nqf#&Y(,7%xT)F2[<QzO.~@=^dp/:wy{Pn>_|jeru4o30IGVW;', pp[yc[69]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[69]].length, pp[yc[72]] = [], pp[yc[30]] = yc[1], pp[yc[42]] = yc[1], p … [truncated]
-                     if (pp[yc[6]] = pp[yc[2]].indexOf(pp[yc[69]][pp[-yc[70]]]), pp[yc[6]] !== -yc[2])
-                       if (pp[yc[71]] < yc[1]) pp[yc[71]] = pp[yc[6]];
-                       else {
-                         Hc(pp[yc[71]] += pp[yc[6]] * yc[29], pp[yc[30]] |= pp[yc[71]] << pp[yc[42]], pp[yc[42]] += (pp[yc[71]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
-                         do {
-                           Hc(pp[yc[72]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[42]] -= yc[11])
-                         } while (pp[yc[42]] > yc[7]);
-                         pp[yc[71]] = -yc[2]
-                       } return pp[yc[71]] > -yc[2] && pp[yc[72]].push((pp[yc[30]] | pp[yc[71]] << pp[yc[42]]) & yc[12]), wc(pp[yc[72]])
-                 }
+             function jT(...TT) {
+               for (fm(TT[jm[13]] = jm[2], TT[jm[5]] = ""), TT[jm[33]] = jm[1]; TT[jm[33]] < TT[jm[1]].length * jm[80]; TT[jm[33]] += jm[11]) TT[jm[5]] += String.fromCharCode(TT[jm[1]][TT[jm[33]] >> jm[36]] >>> jm[81] - TT[jm[33]] % jm[80] & jm[12]);
+               return TT[jm[5]]
+             }
```

#### 2008. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21586-L21605` → after: `L21846-L21847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21846-L21847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21846-L21847) · [Before (L21586-L21605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21586-L21605)

```diff
-                 function Op(...pp) {
-                   return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = cp(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
-                 }
-                 throw Error(Op(yc[4]))
-               }
-               if (Hc(ip = pp[yc[19]][pp[yc[73]]] & yc[12], pp[yc[73]]++), (ip & yc[74]) == yc[41]) return ip & yc[5];
-               throw Error(function(...pp) {
-                 return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = function(...pp) {
-                   for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = '=1?4]2!u0+v}ItN{JB&TD|fjFe7R@,[ob6MY;9mUhcEQ>xGd3Z:Vi`z/g#$OrnA~Caw"._X8^PSp%Ky(5)*LlH<sqkW', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[65]] = pp[yc[0]].length, pp[yc[66]] = [], pp[yc[8]] = yc[1], pp[-yc[68]] = yc[1], pp[ … [truncated]
-                     if (pp[yc[67]] = pp[yc[2]].indexOf(pp[yc[0]][pp[yc[11]]]), pp[yc[67]] !== -yc[2])
-                       if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[67]];
-                       else {
-                         Hc(pp[yc[7]] += pp[yc[67]] * yc[29], pp[yc[8]] |= pp[yc[7]] << pp[-yc[68]], pp[-yc[68]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
-                         do {
-                           Hc(pp[yc[66]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[-yc[68]] -= yc[11])
-                         } while (pp[-yc[68]] > yc[7]);
- ... (4 more removed lines; see GitHub link above)
+             function lT(TT, UT) {
+               return TT >>> UT | TT << jm[80] - UT
```

#### 2009. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21609-L21621` → after: `L21851-L21852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21851-L21852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21851-L21852) · [Before (L21609-L21621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21609-L21621)

```diff
-               if (Hc(ip[yc[13]] = yc[1], ip[yc[78]] = yc[18], ip[yc[21]] = yc[18], ip[-yc[81]] = yc[18], ip[yc[65]] = yc[18], ip[-yc[79]] = yc[18]), pp[yc[73]] > pp[yc[75]]) {
-                 function Op(...pp) {
-                   for (Hc(pp[yc[13]] = yc[2], pp[-yc[77]] = 'S*$6N`_GPVa.xmr:B17t[DpeoThs2y^=%#9)}|"<;/~8{50@v3?z,(w4!HAcFqEdl]i>+&IOuZCgQfJRKXjkbLWUnMY', pp[-yc[61]] = "" + (pp[yc[1]] || ""), pp[-yc[76]] = pp[-yc[61]].length, pp[yc[10]] = [], pp[yc[8]] = yc[1], pp[yc[9]] = yc[1] … [truncated]
-                     if (pp[yc[6]] = pp[-yc[77]].indexOf(pp[-yc[61]][pp[yc[11]]]), pp[yc[6]] !== -yc[2])
-                       if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
-                       else {
-                         Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[8]] |= pp[yc[7]] << pp[yc[9]], pp[yc[9]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
-                         do {
-                           Hc(pp[yc[10]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[yc[9]] -= yc[11])
-                         } while (pp[yc[9]] > yc[7]);
-                         pp[yc[7]] = -yc[2]
-                       } return pp[yc[7]] > -yc[2] && pp[yc[10]].push((pp[yc[8]] | pp[yc[7]] << pp[yc[9]]) & yc[12]), wc(pp[yc[10]])
-                 }
+               return TT[jm[13]] = jm[33], TT[jm[1]] >>> TT[jm[2]]
+             }
```

#### 2010. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21623-L21626` → after: `L21854-L21882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21854-L21882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21854-L21882) · [Before (L21623-L21626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21623-L21626)

```diff
-                 function op(...pp) {
-                   return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = Op(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
-                 }
-                 throw Error(op(113))
+             function pT(...TT) {
+               return TT[jm[13]] = jm[4], TT[jm[1]] & TT[jm[2]] ^ ~TT[jm[1]] & TT[jm[33]]
+             }
+ 
+             function BT(...TT) {
+               return TT[jm[13]] = jm[4], TT[jm[1]] & TT[jm[2]] ^ TT[jm[1]] & TT[jm[33]] ^ TT[jm[2]] & TT[jm[33]]
+             }
+ 
+             function ZT(...TT) {
+               return TT[jm[13]] = jm[2], lT(TT[jm[1]], jm[33]) ^ lT(TT[jm[1]], jm[31]) ^ lT(TT[jm[1]], jm[63])
+             }
+ 
+             function cT(...TT) {
+               return TT[jm[13]] = jm[2], lT(TT[jm[1]], jm[9]) ^ lT(TT[jm[1]], jm[117]) ^ lT(TT[jm[1]], jm[132])
+             }
+ 
+ ... (13 more added lines; see GitHub link above)
```

#### 2011. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21628-L21632` → after: `L21884-L21919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21884-L21919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21884-L21919) · [Before (L21628-L21632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21628-L21632)

```diff
-               if (pp[yc[73]] == pp[yc[75]]) return yc[50];
-               if (Hc(ip[yc[78]] = pp[yc[19]][pp[yc[73]]] & yc[12], pp[yc[73]]++), (ip[yc[78]] & yc[41]) == yc[1]) return ip[yc[78]];
-               if ((ip[yc[78]] & yc[16]) == yc[74]) {
-                 if (Hc(ip[yc[21]] = Ip(), ip[-yc[79]] = (ip[yc[78]] & yc[61]) << yc[9] | ip[yc[21]]), ip[-yc[79]] >= yc[41]) return ip[-yc[79]];
-                 throw Error(Wp(yc[90]))
+               return TT[jm[5]]
+             }
+ 
+             function iT(...TT) {
+               return fm(TT[jm[13]] = jm[33], TT[jm[5]] = (TT[jm[1]] & jm[84]) + (TT[jm[2]] & jm[84]), TT[jm[4]] = (TT[jm[1]] >> jm[58]) + (TT[jm[2]] >> jm[58]) + (TT[jm[5]] >> jm[58])), TT[jm[4]] << jm[58] | TT[jm[5]] & jm[84]
+             }
+             return TT = "", UT = new Array(jm[138], jm[139], -jm[140], -jm[141], jm[142], jm[143], -jm[144], -jm[145], -jm[146], jm[147], jm[148], jm[149], jm[150], -jm[151], -jm[152], -jm[153], -jm[154], -jm[155], jm[156], jm[157], jm[158], jm[159], jm[160], jm[161], -jm[162], - … [truncated]
+               hex: function(...TT) {
+                 return TT[jm[13]] = jm[2], nT(function(...TT) {
+                   return TT[jm[13]] = jm[2], jT(qT(kT(TT[jm[1]]), TT[jm[1]].length * jm[11]))
+                 }(HT(TT[jm[1]])))
+               },
+               b64: WT,
+               any: zT,
+               hex_hmac: function(...TT) {
+                 return TT[jm[13]] = jm[33], nT(gT(HT(TT[jm[1]]), HT(TT[jm[2]])))
+ ... (20 more added lines; see GitHub link above)
```

#### 2012. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21634-L21647` → after: `L21921-L21994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR21921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L21921-L21994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L21921-L21994) · [Before (L21634-L21647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21634-L21647)

```diff
-               if ((ip[yc[78]] & yc[80]) == yc[16]) {
-                 if (Hc(ip[yc[21]] = Ip(), ip[-yc[81]] = Ip(), ip[-yc[79]] = (ip[yc[78]] & yc[62]) << yc[23] | ip[yc[21]] << yc[9] | ip[-yc[81]]), ip[-yc[79]] >= 2048) return cp(ip[-yc[79]]), ip[-yc[79]];
-                 {
-                   function Sp(...pp) {
-                     for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = 'ID)MV1TCO^iN>/E&U#}em{B5o9rp~?ZPLh6*QxHJcuw%gvX;fy_<Sb!.8@0$KF2sWYd43az+[qlRk]j`,tA=G"7(|:n', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[0]].length, pp[yc[10]] = [], pp[yc[30]] = yc[1], pp[yc[42]] = yc[1], p … [truncated]
-                       if (pp[yc[9]] = pp[yc[2]].indexOf(pp[yc[0]][pp[yc[11]]]), pp[yc[9]] !== -yc[2])
-                         if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[9]];
-                         else {
-                           Hc(pp[yc[7]] += pp[yc[9]] * yc[29], pp[yc[30]] |= pp[yc[7]] << pp[yc[42]], pp[yc[42]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
-                           do {
-                             Hc(pp[yc[10]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[42]] -= yc[11])
-                           } while (pp[yc[42]] > yc[7]);
-                           pp[yc[7]] = -yc[2]
-                         } return pp[yc[7]] > -yc[2] && pp[yc[10]].push((pp[yc[30]] | pp[yc[7]] << pp[yc[42]]) & yc[12]), wc(pp[yc[10]])
+             }
+             static generate(...TT) {
+               TT[jm[13]] = jm[2];
+               const mT = UT(jm[88]);
+               let WT, zT;
+               TT[jm[2]] = jm[18];
+               do {
+                 fm(WT = this.randomPrime(TT[jm[1]] / jm[33]), zT = this.randomPrime(TT[jm[1]] / jm[33]), TT[jm[2]] = UT.lcm(WT.prev(), zT.prev()))
+               } while (UT.gcd(mT, TT[jm[2]]).notEquals(jm[2]) || WT.minus(zT).abs().shiftRight(TT[jm[1]] / jm[33] - jm[67]).isZero());
+               return {
+                 e: mT,
+                 n: WT.multiply(zT),
+                 d: mT.modInv(TT[jm[2]])
+               }
+             }
+             static encrypt(...TT) {
+ ... (58 more added lines; see GitHub link above)
```

#### 2013. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21650-L21657` → after: `L22071-L22081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22071-L22081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22071-L22081) · [Before (L21650-L21657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21650-L21657)

```diff
-                   function xp(...pp) {
-                     return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = Sp(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
-                   }
-                   throw Error(xp(115))
-                 }
-               }
-               if ((248 & ip[yc[78]]) == yc[80] && (Hc(ip[yc[21]] = Ip(), ip[-yc[81]] = Ip(), ip[yc[65]] = Ip(), ip[-yc[79]] = (ip[yc[78]] & yc[7]) << yc[63] | ip[yc[21]] << yc[23] | ip[-yc[81]] << yc[9] | ip[yc[65]]), ip[-yc[79]] >= yc[57] && ip[-yc[79]] <= 1114111)) return ip[-y … [truncated]
-               throw Error(Wp(116))
+         function cT(...TT) {
+           return TT[jm[13]] = jm[2], typeof RU[TT[jm[1]]] === jm[17] ? RU[TT[jm[1]]] = ZT(Tm[TT[jm[1]]]) : RU[TT[jm[1]]]
+         }
+ 
+         function vT(...TT) {
+           fm(TT[jm[13]] = jm[1], TT[jm[27]] = function(...UT) {
+             return fm(UT[jm[13]] = jm[33], UT[jm[33]] = [], UT[jm[65]] = UT[jm[1]].length, UT[jm[1]].sort(((TT, UT) => TT - UT)), TT[jm[2]](UT[jm[33]], [], jm[1], UT[jm[65]], UT[jm[1]], UT[jm[2]])), UT[jm[33]]
+           }, TT[jm[2]] = function(...UT) {
+             if (fm(UT[jm[13]] = jm[9], UT[-jm[101]] = jm[40]), !(UT[jm[36]] < jm[1])) {
+               if (UT[jm[36]] === jm[1]) return UT[jm[1]].push(UT[jm[2]]);
+               for (UT[jm[27]] = UT[jm[33]]; UT[jm[27]] < UT[jm[4]] && !(UT[jm[38]][UT[jm[27]]] > UT[jm[36]]); UT[jm[27]]++) UT[jm[27]] > UT[jm[33]] && UT[jm[38]][UT[jm[27]]] === UT[jm[38]][UT[jm[27]] - jm[2]] || fm(UT[-jm[101]] = Array.from(UT[jm[2]]), UT[-jm[101]].push(UT[jm[38] … [truncated]
```

#### 2014. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21659-L21670` → after: `L22083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22083) · [Before (L21659-L21670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21659-L21670)

```diff
-             Hc(pp[yc[13]] = yc[2], pp[yc[2]] = String.fromCharCode), Hc(pp[yc[19]] = yc[18], pp[yc[75]] = yc[18], pp[yc[73]] = yc[18]), Hc(pp[yc[1]].version = Wp(117), pp[yc[1]].encode = function(...pp) {
-               for (Hc(pp[yc[13]] = yc[2], pp[yc[15]] = ip(pp[yc[1]]), pp[-yc[64]] = pp[yc[15]].length, pp[yc[14]] = -yc[2], pp[yc[10]] = yc[18], pp[yc[8]] = ""); ++pp[yc[14]] < pp[-yc[64]];) Hc(pp[yc[10]] = pp[yc[15]][pp[yc[14]]], pp[yc[8]] += op(pp[yc[10]]));
-               return pp[yc[8]]
-             }, pp[yc[1]].decode = function(...cp) {
-               for (Hc(cp[yc[13]] = yc[2], pp[yc[19]] = ip(cp[yc[1]]), pp[yc[75]] = pp[yc[19]].length, pp[yc[73]] = yc[1], cp[yc[15]] = [], cp[yc[26]] = yc[18]);
-                 (cp[yc[26]] = Sp()) !== yc[50];) cp[yc[15]].push(cp[yc[26]]);
-               return function(...ip) {
-                 for (Hc(ip[yc[13]] = yc[2], ip[yc[56]] = ip[yc[1]].length, ip[-yc[55]] = -yc[2], ip[yc[11]] = yc[18], ip[yc[19]] = ""); ++ip[-yc[55]] < ip[yc[56]];) ip[yc[11]] = ip[yc[1]][ip[-yc[55]]], ip[yc[11]] > 65535 && Hc(ip[yc[11]] -= yc[57], ip[yc[19]] += pp[yc[2]](ip[yc[1 … [truncated]
-                 return ip[yc[19]]
-               }(cp[yc[15]])
-             })
-           }(typeof exports === Wp(118) + Wp(119) ? this.utf8 = {} : exports)
+           }, console.log(TT[jm[27]]))
```

#### 2015. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21672-L21673` → after: `L22085-L22086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22085-L22086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22085-L22086) · [Before (L21672-L21673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21672-L21673)

```diff
-         return Wp(103) in vc && yp(), {
-           [Wp(120) + Wp(yc[84])]: Sp
+         return cT(153) in Bm && vT(), {
+           [cT(jm[57]) + cT(155)]: nT
```

#### 2016. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21676` → after: `L22105-L22110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22105-L22110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22105-L22110) · [Before (L21676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21676)

```diff
-       return Sp
+     }
+ 
+     function cm(...TT) {
+       TT[jm[13]] = jm[1], lm(157) in Bm && function(...TT) {
+         TT[jm[13]] = jm[1]
+       }()
```

#### 2017. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21682-L21683` → after: `L22116-L22117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22116-L22117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22116-L22117) · [Before (L21682-L21683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21682-L21683)

```diff
-     Hc(Oc = {}, oc = ["(kfw!U1r_o/yTxn", "O#4R4f0Lu}c+7GZOL#0`G!;$7)d:%|tN:GQm=9+dB", "f_XD,J%KQW#^C+(Oc+w/T{R5E(h^Jg8@YhCfTQL)aW", "8`jlO{P", "sel%L|1EX2wFZk7GDGVn<cN5N=yfc85NQ_i%^Qsy7p2g5kdd", '!qJY")wqO#:Ip[u@', "Op]fZK@R<=&RIlr?$gfXx0^LKp].]G{aC+N%mH,::r<8y0er", "w3*?)6`zfo!< … [truncated]
-       Hc(pp[yc[13]] = yc[1], pp[yc[15]] = [function() {
+     fm(RU = {}, Tm = ["Hirm,*)}SIk#)#>V:7+*DWVv#sRo}Osv", "Q((ZYY&Qb", "gamHHG*^$Ro!F3j!cQO4(ngIK!+ttH", "u>YB/J9}wSN+G2d", "zu+.zBnF9FR_yDs:W&f*K)I!]r(Fx.jKJY?:8ox", 'lX0B#]ZR;,{=uJ>XpgF~G;1r@N>{"h', "1.I~rk,4U,@FZ#98!.TKrLu^kP`S}#>X`}4Tt>e];yJ,yC", "n@v=4)}0VV94x@P@7~O", "u+!4< … [truncated]
+       fm(TT[jm[13]] = jm[1], TT[jm[5]] = [function() {
```

#### 2018. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21693` → after: `L22127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22127) · [Before (L21693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21693)

```diff
-         Hc(pp[yc[2]] = Object, pp[yc[14]][yc[24]]("".__proto__.constructor.name))
+         fm(TT[jm[2]] = Object, TT[jm[14]][jm[25]]("".__proto__.constructor.name))
```

#### 2019. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21695-L21696` → after: `L22129-L22130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22129-L22130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22129-L22130) · [Before (L21695-L21696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21695-L21696)

```diff
-       pp: for (pp[yc[10]] = yc[1]; pp[yc[10]] < pp[yc[15]][yc[13]]; pp[yc[10]]++) try {
-         for (pp[yc[2]] = pp[yc[15]][pp[yc[10]]](), pp[yc[16]] = yc[1]; pp[yc[16]] < pp[yc[14]][yc[13]]; pp[yc[16]]++)
+       TT: for (TT[-jm[15]] = jm[1]; TT[-jm[15]] < TT[jm[5]][jm[13]]; TT[-jm[15]]++) try {
+         for (TT[jm[2]] = TT[jm[5]][TT[-jm[15]]](), TT[jm[16]] = jm[1]; TT[jm[16]] < TT[jm[14]][jm[13]]; TT[jm[16]]++)
```

#### 2020. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21701-L21702` → after: `L22135-L22136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22135-L22136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22135-L22136) · [Before (L21701-L21702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21701-L21702)

```diff
-     }() || {}, Sc = Ic.TextDecoder, xc = Ic.Uint8Array, Lc = Ic[yc[97]], Yc = Ic.String || String, Dc = Ic.Array || Array, Ac = function(...pp) {
-       return Hc(pp[yc[13]] = yc[1], pp[yc[15]] = new Dc(yc[41]), pp[yc[2]] = Yc[yc[22]] || Yc.fromCharCode, pp[yc[14]] = []),
+     }() || {}, mm = Um.TextDecoder, Wm = Um.Uint8Array, zm = Um[jm[210]], Mm = Um.String || String, gm = Um.Array || Array, nm = function(...TT) {
+       return fm(TT[jm[13]] = jm[1], TT[-jm[26]] = new gm(jm[54]), TT[jm[27]] = Mm[jm[23]] || Mm.fromCharCode, TT[jm[14]] = []),
```

#### 2021. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21704-L21705` → after: `L22138-L22139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22138-L22139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22138-L22139) · [Before (L21704-L21705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21704-L21705)

```diff
-           for (Hc(ip[yc[13]] = yc[2], ip[yc[15]] = yc[18], ip[yc[21]] = yc[18], ip[yc[20]] = ip[yc[1]][yc[13]], pp[yc[14]][yc[13]] = yc[1]), ip[yc[19]] = yc[1]; ip[yc[19]] < ip[yc[20]];) Hc(ip[yc[21]] = ip[yc[1]][ip[yc[19]]++], ip[yc[21]] <= yc[49] ? ip[yc[15]] = ip[yc[21]] : ip[ … [truncated]
-           return pp[yc[14]][yc[40]]("")
+           for (fm(UT[jm[13]] = jm[2], UT[jm[21]] = jm[18], UT[jm[20]] = jm[18], UT[-jm[19]] = UT[jm[1]][jm[13]], TT[jm[14]][jm[13]] = jm[1]), UT[jm[10]] = jm[1]; UT[jm[10]] < UT[-jm[19]];) fm(UT[jm[20]] = UT[jm[1]][UT[jm[10]]++], UT[jm[20]] <= jm[50] ? UT[jm[21]] = UT[jm[20]] : U … [truncated]
+           return TT[jm[14]][jm[49]]("")
```

#### 2022. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21707` → after: `L22141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22141) · [Before (L21707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21707)

```diff
-     }()), Hc(Pc = Object[Uc(84)](yc[36]), Wc = void 0), Hc(ic = (...pp) => {
+     }()), fm(Hm = Object[lm(jm[211])](jm[40]), km = void 0), fm(oU = (...TT) => {
```

#### 2023. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21710-L21712` → after: `L22144-L22146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22144-L22146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22144-L22146) · [Before (L21710-L21712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21710-L21712)

```diff
-           for (Hc(pp[yc[13]] = yc[2], pp[yc[15]] = '2uw9]":SAN^Qc_(1Rglap3W<tkYCZ,d7=P[e~B5Mj{Tx04&U+r}ny>FH6*of$vhiXm`8%;GI|qEK)?JbD.!zO@#s/VL', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[0]].length, pp[-yc[69]] = [], pp[yc[30]] = yc[1], pp[-yc[82]] = yc[1], pp[yc[7] … [truncated]
-             if (pp[yc[6]] = pp[yc[15]].indexOf(pp[yc[0]][pp[-yc[3]]]), pp[yc[6]] !== -yc[2])
-               if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
+           for (fm(TT[jm[13]] = jm[2], TT[jm[5]] = 'vUGy[j3.w#25zTnAXWtlp1(@6uEo4B8e*CDHS?~]g$0_|O"m>Jak<Zfd)rb&Rh;I,N/Fsx{K!^9Y7icP+qL%V:=`}MQ', TT[jm[27]] = "" + (TT[jm[1]] || ""), TT[-jm[105]] = TT[jm[27]].length, TT[jm[10]] = [], TT[jm[39]] = jm[1], TT[jm[9]] = jm[1], TT[jm[7] … [truncated]
+             if (TT[jm[43]] = TT[jm[5]].indexOf(TT[jm[27]][TT[jm[3]]]), TT[jm[43]] !== -jm[2])
+               if (TT[jm[7]] < jm[1]) TT[jm[7]] = TT[jm[43]];
```

#### 2024. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21714` → after: `L22148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22148) · [Before (L21714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21714)

```diff
-                 Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[30]] |= pp[yc[7]] << pp[-yc[82]], pp[-yc[82]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
+                 fm(TT[jm[7]] += TT[jm[43]] * jm[28], TT[jm[39]] |= TT[jm[7]] << TT[jm[9]], TT[jm[9]] += (TT[jm[7]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
```

#### 2025. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21716-L21717` → after: `L22150-L22151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22150-L22151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22150-L22151) · [Before (L21716-L21717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21716-L21717)

```diff
-                   Hc(pp[-yc[69]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[-yc[82]] -= yc[11])
-                 } while (pp[-yc[82]] > yc[7]);
+                   fm(TT[jm[10]].push(TT[jm[39]] & jm[12]), TT[jm[39]] >>= jm[11], TT[jm[9]] -= jm[11])
+                 } while (TT[jm[9]] > jm[7]);
```

#### 2026. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21719` → after: `L22153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22153) · [Before (L21719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21719)

```diff
-               } return pp[yc[7]] > -yc[2] && pp[-yc[69]].push((pp[yc[30]] | pp[yc[7]] << pp[-yc[82]]) & yc[12]), wc(pp[-yc[69]])
+               } return TT[jm[7]] > -jm[2] && TT[jm[10]].push((TT[jm[39]] | TT[jm[7]] << TT[jm[9]]) & jm[12]), Lm(TT[jm[10]])
```

#### 2027. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21722-L21736` → after: `L22156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22156) · [Before (L21722-L21736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21722-L21736)

```diff
-       pp[yc[13]] = yc[2], ip(122) + "o" in vc && function(...pp) {
-         Hc(pp[yc[13]] = yc[1], pp[yc[15]] = function(...pp) {
-           for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = pp[yc[1]].length, pp[yc[73]] = [], pp[yc[65]] = yc[1], pp[yc[83]] = yc[1], pp[yc[1]].sort(((pp, ip) => pp - ip))), pp[yc[8]] = yc[1]; pp[yc[8]] < pp[yc[2]]; pp[yc[8]]++)
-             if (!(pp[yc[8]] > yc[1] && pp[yc[1]][pp[yc[8]]] === pp[yc[1]][pp[yc[8]] - yc[2]]))
-               for (Hc(pp[yc[65]] = pp[yc[8]] + yc[2], pp[yc[83]] = pp[yc[2]] - yc[2]); pp[yc[65]] < pp[yc[83]];)
-                 if (pp[yc[1]][pp[yc[8]]] + pp[yc[1]][pp[yc[65]]] + pp[yc[1]][pp[yc[83]]] < yc[1]) pp[yc[65]]++;
-                 else if (pp[yc[1]][pp[yc[8]]] + pp[yc[1]][pp[yc[65]]] + pp[yc[1]][pp[yc[83]]] > yc[1]) pp[yc[83]]--;
-           else {
-             for (pp[yc[73]].push([pp[yc[1]][pp[yc[8]]], pp[yc[1]][pp[yc[65]]], pp[yc[1]][pp[yc[83]]]]); pp[yc[65]] < pp[yc[83]] && pp[yc[1]][pp[yc[65]]] === pp[yc[1]][pp[yc[65]] + yc[2]];) pp[yc[65]]++;
-             for (; pp[yc[65]] < pp[yc[83]] && pp[yc[1]][pp[yc[83]]] === pp[yc[1]][pp[yc[83]] - yc[2]];) pp[yc[83]]--;
-             Hc(pp[yc[65]]++, pp[yc[83]]--)
-           }
-           return pp[yc[73]]
-         }, console.log(pp[yc[15]]))
-       }();
+       TT[jm[13]] = jm[2];
```

#### 2028. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21742-L21743` → after: `L22162-L22163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22162-L22163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22162-L22163) · [Before (L21742-L21743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21742-L21743)

```diff
-               formatVersion: Ri.g,
-               variation: null !== (ip = pp.meta.variation) && void 0 !== ip ? ip : null
+               formatVersion: eU.c,
+               variation: null !== (UT = TT.meta.variation) && void 0 !== UT ? UT : null
```

#### 2029. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21754-L21755` → after: `L22174-L22175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22174-L22175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22174-L22175) · [Before (L21754-L21755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21754-L21755)

```diff
-         Op = Ii(Ri[yc[28]]);
-       pp[yc[15]] = yc[18];
+         WT = WU(eU[jm[14]]);
+       TT[jm[2]] = jm[18];
```

#### 2030. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21758-L21760` → after: `L22178-L22180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22178-L22180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22178-L22180) · [Before (L21758-L21760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21758-L21760)

```diff
-           for (Hc(pp[yc[13]] = yc[2], pp[yc[7]] = 'vOaGcnAdRVrS0_!I86}#T%Q;pmsu`U/yD~t5BLMbX{&w<,[^Y71f>WZP)NiE.q|g]:l?"eCFzx=$+@K39h2(JoH*4kj', pp[yc[84]] = "" + (pp[yc[1]] || ""), pp[-yc[85]] = pp[yc[84]].length, pp[-yc[87]] = [], pp[yc[8]] = yc[1], pp[yc[9]] = yc[1], pp[-yc[86 … [truncated]
-             if (pp[yc[6]] = pp[yc[7]].indexOf(pp[yc[84]][pp[yc[11]]]), pp[yc[6]] !== -yc[2])
-               if (pp[-yc[86]] < yc[1]) pp[-yc[86]] = pp[yc[6]];
+           for (fm(TT[jm[13]] = jm[2], TT[jm[2]] = '9eEpQr=t5a/ULdJR1bI)cD%|MClV_W(m@,]qoBTY~n+$4^gi#sAK:S"F86k};3<huXxPjHzv!f*0?NZ>2.[GOw7&`{y', TT[jm[27]] = "" + (TT[jm[1]] || ""), TT[jm[4]] = TT[jm[27]].length, TT[jm[10]] = [], TT[-jm[106]] = jm[1], TT[jm[37]] = jm[1], TT[jm[7] … [truncated]
+             if (TT[jm[107]] = TT[jm[2]].indexOf(TT[jm[27]][TT[jm[11]]]), TT[jm[107]] !== -jm[2])
+               if (TT[jm[7]] < jm[1]) TT[jm[7]] = TT[jm[107]];
```

#### 2031. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21762` → after: `L22182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22182) · [Before (L21762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21762)

```diff
-                 Hc(pp[-yc[86]] += pp[yc[6]] * yc[29], pp[yc[8]] |= pp[-yc[86]] << pp[yc[9]], pp[yc[9]] += (pp[-yc[86]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
+                 fm(TT[jm[7]] += TT[jm[107]] * jm[28], TT[-jm[106]] |= TT[jm[7]] << TT[jm[37]], TT[jm[37]] += (TT[jm[7]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
```

#### 2032. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21764-L21767` → after: `L22184-L22187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22184-L22187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22184-L22187) · [Before (L21764-L21767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21764-L21767)

```diff
-                   Hc(pp[-yc[87]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[yc[9]] -= yc[11])
-                 } while (pp[yc[9]] > yc[7]);
-                 pp[-yc[86]] = -yc[2]
-               } return pp[-yc[86]] > -yc[2] && pp[-yc[87]].push((pp[yc[8]] | pp[-yc[86]] << pp[yc[9]]) & yc[12]), wc(pp[-yc[87]])
+                   fm(TT[jm[10]].push(TT[-jm[106]] & jm[12]), TT[-jm[106]] >>= jm[11], TT[jm[37]] -= jm[11])
+                 } while (TT[jm[37]] > jm[7]);
+                 TT[jm[7]] = -jm[2]
+               } return TT[jm[7]] > -jm[2] && TT[jm[10]].push((TT[-jm[106]] | TT[jm[7]] << TT[jm[37]]) & jm[12]), Lm(TT[jm[10]])
```

#### 2033. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21775-L21822` → after: `L22195-L22199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22195-L22199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22195-L22199) · [Before (L21775-L21822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21775-L21822)

```diff
-           pp[yc[13]] = yc[1];
-           const ip = require("big-integer");
-           Hc(pp[-yc[16]] = class {
-             static randomPrime(...pp) {
-               pp[yc[13]] = yc[2];
-               const cp = ip.one.shiftLeft(pp[yc[1]] - yc[2]),
-                 Op = ip.one.shiftLeft(pp[yc[1]]).prev();
-               for (; yc[51];) {
-                 let pp = ip.randBetween(cp, Op);
-                 if (pp.isProbablePrime(yc[99])) return pp
-               }
-             }
-             static generate(...pp) {
-               pp[yc[13]] = yc[2];
-               const cp = ip(yc[100]);
-               let Op, op;
- ... (32 more removed lines; see GitHub link above)
+           fm(TT[jm[13]] = jm[1], TT[-jm[108]] = function(...TT) {
+             for (fm(TT[jm[13]] = jm[2], TT[jm[5]] = TT[jm[1]].length, TT[jm[65]] = [], TT[jm[14]] = jm[1]), TT[jm[109]] = jm[1]; TT[jm[109]] < TT[jm[5]]; TT[jm[109]]++) TT[jm[65]].push(TT[jm[109]] !== jm[1] && TT[jm[1]][TT[jm[109]]] > TT[jm[1]][TT[jm[109]] - jm[2]] ? TT[jm[65]][T … [truncated]
+             for (TT[jm[36]] = TT[jm[5]] - jm[2]; TT[jm[36]] >= jm[1]; TT[jm[36]]--) TT[jm[36]] !== TT[jm[5]] - jm[2] && TT[jm[1]][TT[jm[36]]] > TT[jm[1]][TT[jm[36]] + jm[2]] && (TT[jm[65]][TT[jm[36]]] = Math.max(TT[jm[65]][TT[jm[36]]], TT[jm[65]][TT[jm[36]] + jm[2]] + jm[2])), TT … [truncated]
+             return TT[jm[14]]
+           }, console.log(TT[-jm[108]]))
```

#### 2034. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21824` → after: `L22201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22201) · [Before (L21824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21824)

```diff
-         ip(yc[3]) + "k" in vc && Yp(), pp[yc[15]] = Op[Lp(124)](cp)
+         lm(jm[108]) + "G" in Bm && jT(), TT[jm[2]] = WT[kT(159)](mT)
```

#### 2035. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21827-L21829` → after: `L22204-L22206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22204-L22206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22204-L22206) · [Before (L21827-L21829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21827-L21829)

```diff
-           for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = 'c?KlNHASZGOhfJRLtkXWYraoBCVdqgbpEUMsDFImijTPQen5v;_87u`^4,{/03]~x|"1#2=y&@*)z%[(.6+9$:!w>}<', pp[yc[21]] = "" + (pp[yc[1]] || ""), pp[yc[65]] = pp[yc[21]].length, pp[-yc[27]] = [], pp[yc[88]] = yc[1], pp[yc[7]] = yc[1], pp[-yc[89 … [truncated]
-             if (pp[-yc[90]] = pp[yc[2]].indexOf(pp[yc[21]][pp[yc[67]]]), pp[-yc[90]] !== -yc[2])
-               if (pp[-yc[89]] < yc[1]) pp[-yc[89]] = pp[-yc[90]];
+           for (fm(TT[jm[13]] = jm[2], TT[jm[5]] = '>80),E:O%[k_1riS@T=bu]LM4cZXe"Axn5F.f`|zP}v/(hHmtBaWoy#G693C+2*qI${s7Q&dpNY?J;R^DKVjg!<l~Uw', TT[jm[110]] = "" + (TT[jm[1]] || ""), TT[jm[14]] = TT[jm[110]].length, TT[jm[10]] = [], TT[jm[36]] = jm[1], TT[jm[37]] = jm[1], TT[jm[6 … [truncated]
+             if (TT[jm[43]] = TT[jm[5]].indexOf(TT[jm[110]][TT[jm[3]]]), TT[jm[43]] !== -jm[2])
+               if (TT[jm[68]] < jm[1]) TT[jm[68]] = TT[jm[43]];
```

#### 2036. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21831` → after: `L22208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22208) · [Before (L21831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21831)

```diff
-                 Hc(pp[-yc[89]] += pp[-yc[90]] * yc[29], pp[yc[88]] |= pp[-yc[89]] << pp[yc[7]], pp[yc[7]] += (pp[-yc[89]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
+                 fm(TT[jm[68]] += TT[jm[43]] * jm[28], TT[jm[36]] |= TT[jm[68]] << TT[jm[37]], TT[jm[37]] += (TT[jm[68]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
```

#### 2037. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21833-L21836` → after: `L22210-L22213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22210-L22213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22210-L22213) · [Before (L21833-L21836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21833-L21836)

```diff
-                   Hc(pp[-yc[27]].push(pp[yc[88]] & yc[12]), pp[yc[88]] >>= yc[11], pp[yc[7]] -= yc[11])
-                 } while (pp[yc[7]] > yc[7]);
-                 pp[-yc[89]] = -yc[2]
-               } return pp[-yc[89]] > -yc[2] && pp[-yc[27]].push((pp[yc[88]] | pp[-yc[89]] << pp[yc[7]]) & yc[12]), wc(pp[-yc[27]])
+                   fm(TT[jm[10]].push(TT[jm[36]] & jm[12]), TT[jm[36]] >>= jm[11], TT[jm[37]] -= jm[11])
+                 } while (TT[jm[37]] > jm[7]);
+                 TT[jm[68]] = -jm[2]
+               } return TT[jm[68]] > -jm[2] && TT[jm[10]].push((TT[jm[36]] | TT[jm[68]] << TT[jm[37]]) & jm[12]), Lm(TT[jm[10]])
```

#### 2038. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21844-L21853` → after: `L22221-L22223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22221-L22223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22221-L22223) · [Before (L21844-L21853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21844-L21853)

```diff
-           Hc(pp[yc[13]] = yc[1], pp[-yc[0]] = function(...pp) {
-             if (Hc(pp[yc[13]] = yc[2], pp[-yc[91]] = pp[yc[1]].length), pp[-yc[91]] < yc[0]) return yc[1];
-             if (Hc(pp[yc[21]] = Math.max(...pp[yc[1]]), pp[yc[14]] = Math.min(...pp[yc[1]])), pp[yc[21]] === pp[yc[14]]) return yc[1];
-             for (Hc(pp[yc[93]] = Array(pp[-yc[91]] - yc[2]).fill(Number.MAX_SAFE_INTEGER), pp[-yc[92]] = Array(pp[-yc[91]] - yc[2]).fill(Number.MIN_SAFE_INTEGER), pp[-yc[80]] = Math.ceil((pp[yc[21]] - pp[yc[14]]) / (pp[-yc[91]] - yc[2])), pp[yc[28]] = yc[1]), pp[yc[11]] = yc[1];  … [truncated]
-             for (Hc(pp[yc[6]] = Number.MIN_SAFE_INTEGER, pp[yc[5]] = pp[yc[14]]), pp[yc[94]] = yc[1]; pp[yc[94]] < pp[-yc[91]] - yc[2]; pp[yc[94]]++) pp[yc[93]][pp[yc[94]]] === Number.MAX_SAFE_INTEGER && pp[-yc[92]][pp[yc[94]]] === Number.MIN_SAFE_INTEGER || Hc(pp[yc[6]] = Math.m … [truncated]
-             return pp[yc[6]] = Math.max(pp[yc[6]], pp[yc[21]] - pp[yc[5]]), pp[yc[6]]
-           }, console.log(pp[-yc[0]]))
-         }
-         throw ip(125) in vc && Wp(), Hc(console[ip(126)](cp), Op[Pp(yc[49])](cp, {
-           [Pp(yc[41]) + Pp(129)](...pp) {
+           fm(TT[jm[13]] = jm[1], TT[jm[5]] = function() {
+             var TT, UT, mT = jm[1];
+ 
```

#### 2039. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21855-L21870` → after: `L22225-L22246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22225-L22246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22225-L22246) · [Before (L21855-L21870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21855-L21870)

```diff
-               return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = function(pp) {
-                 var ip, cp, Op, op, Ip, Sp, xp;
-                 for (Hc(ip = "" + (pp || ""), cp = ip.length, Op = [], op = yc[1], Ip = yc[1], Sp = -yc[2]), xp = yc[1]; xp < cp; xp++) {
-                   var Lp = '$fWiURId{xO5`031Jp@}G~e)7XA?Y=#(>M_oZFmc4,gs[+r]SNwP!^26/ut:j;|zbBkCvT%.D<9"aQq8LlV&hyEH*nK'.indexOf(ip[xp]);
-                   if (Lp !== -yc[2])
-                     if (Sp < yc[1]) Sp = Lp;
-                     else {
-                       Hc(Sp += Lp * yc[29], op |= Sp << Ip, Ip += (Sp & yc[32]) > yc[33] ? yc[34] : yc[35]);
-                       do {
-                         Hc(Op.push(op & yc[12]), op >>= yc[11], Ip -= yc[11])
-                       } while (Ip > yc[7]);
-                       Sp = -yc[2]
-                     }
-                 }
-                 return Sp > -yc[2] && Op.push((op | Sp << Ip) & yc[12]), wc(Op)
-               }(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
+               return UT[jm[13]] = jm[33],
+                 function(...UT) {
+                   function mT(...TT) {
+                     for (fm(TT[jm[13]] = jm[2], TT[jm[5]] = '%dOmhnrkfTNGE0|LZX#*iJ^z=P4ye{I[x6@3S+Vgw7)9~}Fl]!cD&;Hj?>8Yp<vuR_st2aM:b"(A`oWq$QK./5UB1,C', TT[jm[33]] = "" + (TT[jm[1]] || ""), TT[jm[15]] = TT[jm[33]].length, TT[jm[10]] = [], TT[jm[36]] = jm[1], TT[jm[37]] = jm[1], … [truncated]
+                       if (TT[-jm[116]] = TT[jm[5]].indexOf(TT[jm[33]][TT[jm[11]]]), TT[-jm[116]] !== -jm[2])
+                         if (TT[jm[68]] < jm[1]) TT[jm[68]] = TT[-jm[116]];
+                         else {
+                           fm(TT[jm[68]] += TT[-jm[116]] * jm[28], TT[jm[36]] |= TT[jm[68]] << TT[jm[37]], TT[jm[37]] += (TT[jm[68]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
+                           do {
+                             fm(TT[jm[10]].push(TT[jm[36]] & jm[12]), TT[jm[36]] >>= jm[11], TT[jm[37]] -= jm[11])
+                           } while (TT[jm[37]] > jm[7]);
+                           TT[jm[68]] = -jm[2]
+                         } return TT[jm[68]] > -jm[2] && TT[jm[10]].push((TT[jm[36]] | TT[jm[68]] << TT[jm[37]]) & jm[12]), Lm(TT[jm[10]])
+                   }
+ 
+                   function WT(...TT) {
+ ... (6 more added lines; see GitHub link above)
```

#### 2040. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21875-L21881` → after: `L22249-L22386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22249-L22386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22249-L22386) · [Before (L21875-L21881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21875-L21881)

```diff
-               function ip() {}
-               Hc(pp = function(...pp) {
-                 for (Hc(pp[yc[13]] = yc[0], pp[yc[15]] = yc[1], pp[yc[65]] = yc[1], pp[yc[14]] = new ip(yc[1]), pp[yc[10]] = pp[yc[14]], pp[yc[96]] = pp[yc[1]], pp[-yc[95]] = pp[yc[2]]); pp[yc[96]] !== yc[36] || pp[-yc[95]] !== yc[36];) Hc(pp[yc[65]] = (pp[yc[96]] ? pp[yc[96]].va … [truncated]
-                 return pp[yc[15]] && (pp[yc[10]].next = new ip(pp[yc[15]])), pp[yc[14]].next
-               }, console.log(pp))
-             }(), Wc = [pp, {}], new tc(ip(131), ip(132) + ip(yc[96]), ip(134) + ip(135))[ip(yc[25]) + ip(yc[93])]
-           }
+             function zT(...TT) {
+               return TT[jm[13]] = jm[4],
+                 function(...TT) {
+                   var UT, mT, WT, zT;
+                   for (fm(TT[jm[13]] = jm[33], TT[jm[119]] = TT[jm[2]].length, TT[jm[4]] = Array()), TT[jm[38]] = Array(Math.ceil(TT[jm[1]].length / jm[33])), UT = jm[1]; UT < TT[jm[38]].length; UT++) TT[jm[38]][UT] = TT[jm[1]].charCodeAt(UT * jm[33]) << jm[11] | TT[jm[1]].charCo … [truncated]
+                   for (; TT[jm[38]].length > jm[1];) {
+                     for (fm(zT = Array(), WT = jm[1]), UT = jm[1]; UT < TT[jm[38]].length; UT++) fm(WT = (WT << jm[58]) + TT[jm[38]][UT], mT = Math.floor(WT / TT[jm[119]]), WT -= mT * TT[jm[119]]), (zT.length > jm[1] || mT > jm[1]) && (zT[zT.length] = mT);
+                     fm(TT[jm[4]][TT[jm[4]].length] = WT, TT[jm[38]] = zT)
+                   }
+                   for (TT[-jm[72]] = "", UT = TT[jm[4]].length - jm[2]; UT >= jm[1]; UT--) TT[-jm[72]] += TT[jm[2]].charAt(TT[jm[4]][UT]);
+                   for (TT[jm[39]] = Math.ceil(TT[jm[1]].length * jm[11] / (Math.log(TT[jm[2]].length) / Math.log(jm[33]))), UT = TT[-jm[72]].length; UT < TT[jm[39]]; UT++) TT[-jm[72]] = TT[jm[2]][jm[1]] + TT[-jm[72]];
+                   return TT[-jm[72]]
+                 }(MT(nT(TT[jm[1]]), nT(TT[jm[2]])), TT[jm[33]])
+             }
+ 
+             function MT(...TT) {
+ ... (122 more added lines; see GitHub link above)
```

#### 2041. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21884-L21886` → after: `L22389-L22391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22389-L22391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22389-L22391) · [Before (L21884-L21886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21884-L21886)

```diff
-       const op = Li(Ri[yc[28]], pp[yc[15]]),
-         Sp = Ip[yc[97]][ip(138)](yc[19]);
-       return Sp[ip(139) + ip(140) + "E"](Ri[yc[28]]), Ip[yc[97]].concat([Sp, op])
+       const zT = gU(eU[jm[14]], TT[jm[2]]),
+         gT = MT[jm[210]][UT(180)](jm[38]);
+       return gT[UT(jm[95]) + UT(jm[55]) + "E"](eU[jm[14]]), MT[jm[210]].concat([gT, zT])
```

#### 2042. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21890-L21892` → after: `L22395-L22397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22395-L22397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22395-L22397) · [Before (L21890-L21892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21890-L21892)

```diff
-           for (Hc(pp[yc[13]] = yc[2], pp[yc[38]] = 'diNUWGVeTS;1*@O]4.ZF)!fcYj30^AD/J8Ls|o#xKngm+_Qr7%Xw<tEq(HBCPzv5p2=I$:MbRhak"69`,[}y~>u&?{l', pp[-yc[98]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[-yc[98]].length, pp[yc[19]] = [], pp[yc[8]] = yc[1], pp[yc[42]] = yc[1], pp[-yc[ … [truncated]
-             if (pp[yc[67]] = pp[yc[38]].indexOf(pp[-yc[98]][pp[yc[47]]]), pp[yc[67]] !== -yc[2])
-               if (pp[-yc[69]] < yc[1]) pp[-yc[69]] = pp[yc[67]];
+           for (fm(TT[jm[13]] = jm[2], TT[jm[211]] = '.RkVKoJbYMTLmZyNqxW,*zd"F2&D#0|;!l=BIPS13wp7s_C)}gc][9vhA`tj(er:%U5^HG~i8@u?>+4$E/QX{f<n6aO', TT[jm[33]] = "" + (TT[jm[1]] || ""), TT[-jm[212]] = TT[jm[33]].length, TT[jm[10]] = [], TT[jm[39]] = jm[1], TT[jm[9]] = jm[1], TT[jm[ … [truncated]
+             if (TT[-jm[213]] = TT[jm[211]].indexOf(TT[jm[33]][TT[jm[3]]]), TT[-jm[213]] !== -jm[2])
+               if (TT[jm[110]] < jm[1]) TT[jm[110]] = TT[-jm[213]];
```

#### 2043. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21894` → after: `L22399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22399) · [Before (L21894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21894)

```diff
-                 Hc(pp[-yc[69]] += pp[yc[67]] * yc[29], pp[yc[8]] |= pp[-yc[69]] << pp[yc[42]], pp[yc[42]] += (pp[-yc[69]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
+                 fm(TT[jm[110]] += TT[-jm[213]] * jm[28], TT[jm[39]] |= TT[jm[110]] << TT[jm[9]], TT[jm[9]] += (TT[jm[110]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
```

#### 2044. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21896-L21899` → after: `L22401-L22404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22401-L22404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22401-L22404) · [Before (L21896-L21899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21896-L21899)

```diff
-                   Hc(pp[yc[19]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[yc[42]] -= yc[11])
-                 } while (pp[yc[42]] > yc[7]);
-                 pp[-yc[69]] = -yc[2]
-               } return pp[-yc[69]] > -yc[2] && pp[yc[19]].push((pp[yc[8]] | pp[-yc[69]] << pp[yc[42]]) & yc[12]), wc(pp[yc[19]])
+                   fm(TT[jm[10]].push(TT[jm[39]] & jm[12]), TT[jm[39]] >>= jm[11], TT[jm[9]] -= jm[11])
+                 } while (TT[jm[9]] > jm[7]);
+                 TT[jm[110]] = -jm[2]
+               } return TT[jm[110]] > -jm[2] && TT[jm[10]].push((TT[jm[39]] | TT[jm[110]] << TT[jm[9]]) & jm[12]), Lm(TT[jm[10]])
```

#### 2045. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21902-L21954` → after: `L22407-L22410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22407-L22410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22407-L22410) · [Before (L21902-L21954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21902-L21954)

```diff
-       pp[yc[13]] = yc[2], Uc(141) + "1" in vc && function(...pp) {
-         pp[yc[13]] = yc[1];
-         const ip = require("big-integer");
-         Hc(pp[yc[102]] = class {
-           static randomPrime(...pp) {
-             pp[yc[13]] = yc[2];
-             const cp = ip.one.shiftLeft(pp[yc[1]] - yc[2]),
-               Op = ip.one.shiftLeft(pp[yc[1]]).prev();
-             for (; yc[51];) {
-               let pp = ip.randBetween(cp, Op);
-               if (pp.isProbablePrime(yc[99])) return pp
-             }
-           }
-           static generate(...pp) {
-             pp[yc[13]] = yc[2];
-             const cp = ip(yc[100]);
- ... (37 more removed lines; see GitHub link above)
+       TT[jm[13]] = jm[2];
+       const mT = MT[jm[210]][lm(jm[46])](TT[jm[1]]),
+         WT = mT[lm(184) + lm(185)] >= jm[38] ? mT[UT(186) + UT(187)](jm[1]) : jm[40];
+       if (WT !== jm[40] && (jm[1], YU[jm[6]])(WT)) {
```

#### 2046. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21956-L21958` → after: `L22412-L22414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22412-L22414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22412-L22414) · [Before (L21956-L21958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21956-L21958)

```diff
-           for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = 'p27.D=_vXmR[*|T~APBz8M"#C+x`Z@/G15eoE;yhHb9jNqw<UVWJ%{kls,d6$Ft4:uSgI?!Q&K3]n>0^Ya(r)cLf}iO', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[65]] = pp[yc[0]].length, pp[-yc[103]] = [], pp[yc[30]] = yc[1], pp[yc[75]] = yc[1], pp[yc[7]] … [truncated]
-             if (pp[yc[6]] = pp[yc[2]].indexOf(pp[yc[0]][pp[yc[11]]]), pp[yc[6]] !== -yc[2])
-               if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
+           for (fm(TT[jm[13]] = jm[2], TT[jm[2]] = 'vz(&x>[$X`K@A%T^0BHM|lju2ygLI"!pU=n7831ZQ~w.OW]d#etD4Rbr/,f;ioN+P9:FVCqJ5}YESamkc*)6s_<?{hG', TT[jm[33]] = "" + (TT[jm[1]] || ""), TT[jm[214]] = TT[jm[33]].length, TT[jm[38]] = [], TT[-jm[137]] = jm[1], TT[jm[37]] = jm[1], TT[jm[ … [truncated]
+             if (TT[-jm[70]] = TT[jm[2]].indexOf(TT[jm[33]][TT[jm[11]]]), TT[-jm[70]] !== -jm[2])
+               if (TT[jm[7]] < jm[1]) TT[jm[7]] = TT[-jm[70]];
```

#### 2047. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21960` → after: `L22416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22416) · [Before (L21960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21960)

```diff
-                 Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[30]] |= pp[yc[7]] << pp[yc[75]], pp[yc[75]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
+                 fm(TT[jm[7]] += TT[-jm[70]] * jm[28], TT[-jm[137]] |= TT[jm[7]] << TT[jm[37]], TT[jm[37]] += (TT[jm[7]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
```

#### 2048. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21962-L21963` → after: `L22418-L22419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22418-L22419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22418-L22419) · [Before (L21962-L21963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21962-L21963)

```diff
-                   Hc(pp[-yc[103]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[75]] -= yc[11])
-                 } while (pp[yc[75]] > yc[7]);
+                   fm(TT[jm[38]].push(TT[-jm[137]] & jm[12]), TT[-jm[137]] >>= jm[11], TT[jm[37]] -= jm[11])
+                 } while (TT[jm[37]] > jm[7]);
```

#### 2049. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21965` → after: `L22421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22421) · [Before (L21965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21965)

```diff
-               } return pp[yc[7]] > -yc[2] && pp[-yc[103]].push((pp[yc[30]] | pp[yc[7]] << pp[yc[75]]) & yc[12]), wc(pp[-yc[103]])
+               } return TT[jm[7]] > -jm[2] && TT[jm[38]].push((TT[-jm[137]] | TT[jm[7]] << TT[jm[37]]) & jm[12]), Lm(TT[jm[38]])
```

#### 2050. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21971-L21972` → after: `L22427-L22471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22427-L22471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22427-L22471) · [Before (L21971-L21972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21971-L21972)

```diff
-         const Lp = cp[xp(147)](yc[19]),
-           Yp = xi(Op) ? Ip[yc[97]][xp(148)](Yi(Op, Lp)) : Lp;
+ 
+         function HT() {
+           module.exports = async (TT = (...TT) => {
+             throw TT[jm[13]] = jm[1], new Error(function(...TT) {
+               return TT[jm[13]] = jm[2], typeof RU[TT[jm[1]]] === jm[17] ? RU[TT[jm[1]]] = function(...TT) {
+                 for (fm(TT[jm[13]] = jm[2], TT[jm[5]] = 'AnjirIkXRQctqVKlhNgoFsBpJbUYTSe5C^v9D(x[EMfLm$:GdO/a|4_Z6P2W;&.871"z)w@<#?}]+{=y,3~u>*`0%!H', TT[jm[27]] = "" + (TT[jm[1]] || ""), TT[jm[4]] = TT[jm[27]].length, TT[-jm[215]] = [], TT[jm[215]] = jm[1], TT[jm[9]] = jm[1], TT … [truncated]
+                   if (TT[jm[43]] = TT[jm[5]].indexOf(TT[jm[27]][TT[jm[3]]]), TT[jm[43]] !== -jm[2])
+                     if (TT[jm[68]] < jm[1]) TT[jm[68]] = TT[jm[43]];
+                     else {
+                       fm(TT[jm[68]] += TT[jm[43]] * jm[28], TT[jm[215]] |= TT[jm[68]] << TT[jm[9]], TT[jm[9]] += (TT[jm[68]] & jm[29]) > jm[30] ? jm[31] : jm[32]);
+                       do {
+                         fm(TT[-jm[215]].push(TT[jm[215]] & jm[12]), TT[jm[215]] >>= jm[11], TT[jm[9]] -= jm[11])
+                       } while (TT[jm[9]] > jm[7]);
+                       TT[jm[68]] = -jm[2]
+                     } return TT[jm[68]] > -jm[2] && TT[-jm[215]].push((TT[jm[215]] | TT[jm[68]] << TT[jm[9]]) & jm[12]), Lm(TT[-jm[215]])
+               }(Tm[TT[jm[1]]]) : RU[TT[jm[1]]]
+ ... (29 more added lines; see GitHub link above)
```

#### 2051. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21976` → after: `L22475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22475) · [Before (L21976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21976)

```diff
-           if (!(0, qi.h)(xp)) throw new Error(`Unsupported recording format version: ${xp}`);
+           if (!(0, YU.i)(nT)) throw new Error(`Unsupported recording format version: ${nT}`);
```

#### 2052. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21983` → after: `L22482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22482) · [Before (L21983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21983)

```diff
-           return Lp.formatVersion = Ri.g, (0, op.G)(Lp.variation) && delete Lp.variation, {
+           return HT.formatVersion = eU.c, (0, zT.E)(HT.variation) && delete HT.variation, {
```

#### 2053. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21990` → after: `L22489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22489) · [Before (L21990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21990)

```diff
-                 sharedBlockData: null !== (ip = Qi("sharedBlockData", pp.sharedBlockData)) && void 0 !== ip ? ip : []
+                 sharedBlockData: null !== (UT = aU("sharedBlockData", TT.sharedBlockData)) && void 0 !== UT ? UT : []
```

#### 2054. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21995-L21996` → after: `L22494-L22495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22494-L22495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22494-L22495) · [Before (L21995-L21996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21995-L21996)

```diff
-               cameraKeyframes: null !== (cp = null === (Op = pp.editState) || void 0 === Op ? void 0 : Op.cameraKeyframes) && void 0 !== cp ? cp : [],
-               playbackMark: null !== (Ip = null === (Sp = pp.editState) || void 0 === Sp ? void 0 : Sp.playbackMark) && void 0 !== Ip ? Ip : null
+               cameraKeyframes: null !== (mT = null === (WT = TT.editState) || void 0 === WT ? void 0 : WT.cameraKeyframes) && void 0 !== mT ? mT : [],
+               playbackMark: null !== (MT = null === (gT = TT.editState) || void 0 === gT ? void 0 : gT.playbackMark) && void 0 !== MT ? MT : null
```

#### 2055. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L21999` → after: `L22498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22498) · [Before (L21999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L21999)

```diff
-         }(Ii(Op)[xp(149)](Yp))
+         }(WU(WT)[nT(jm[100])](jT))
```

#### 2056. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22001` → after: `L22500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22500) · [Before (L22001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22001)

```diff
-       throw new Ri[yc[47]](Op)
+       throw new eU[jm[10]](WT)
```

#### 2057. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22004` → after: `L22503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22503) · [Before (L22004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22004)

```diff
-   37188: (pp, ip, cp) => {
+   37072: (TT, UT, mT) => {
```

#### 2058. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22006` → after: `L22505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22505) · [Before (L22006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22006)

```diff
-       B: () => xp,
+       b: () => gT,
```

#### 2059. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22008` → after: `L22507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22507) · [Before (L22008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22008)

```diff
-       g: () => op,
+       d: () => MT,
```

#### 2060. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22010-L22011` → after: `L22509-L22510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22509-L22510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22509-L22510) · [Before (L22010-L22011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22010-L22011)

```diff
-       j: () => Ap,
-       m: () => Pp,
+       l: () => LT,
+       o: () => kT,
```

#### 2061. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22013` → after: `L22512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22512) · [Before (L22013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22013)

```diff
-       r: () => Wp,
+       s: () => HT,
```

#### 2062. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22015` → after: `L22514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22514) · [Before (L22015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22015)

```diff
-       x: () => Dp
+       w: () => nT
```

#### 2063. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22017` → after: `L22516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22516) · [Before (L22017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22017)

```diff
-     var Op = cp(37192);
+     var WT = mT(37076);
```

#### 2064. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22021` → after: `L22520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22520) · [Before (L22021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22021)

```diff
-         super(`Unsupported recording format: header ${null!==pp&&void 0!==pp?pp:"missing"}, reading v${Op.d.join(", v")}`), this.older = void 0, this.older = (0, Op.g)(pp)
+         super(`Unsupported recording format: header ${null!==TT&&void 0!==TT?TT:"missing"}, reading v${WT.e.join(", v")}`), this.older = void 0, this.older = (0, WT.g)(TT)
```

#### 2065. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22029` → after: `L22528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22528) · [Before (L22029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22029)

```diff
-       Ap = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading … [truncated]
+       lT = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading … [truncated]
```

#### 2066. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22033` → after: `L22532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22532) · [Before (L22033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22033)

```diff
-   37179: (pp, ip, cp) => {
+   37070: (TT, UT, mT) => {
```

#### 2067. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22036` → after: `L22535-L22536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22535-L22536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22535-L22536) · [Before (L22036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22036)

```diff
-       h: () => yp,
+       f: () => BT,
+       j: () => HT,
```

#### 2068. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22038-L22040` → after: `L22538-L22539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22538-L22539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22538-L22539) · [Before (L22038-L22040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22038-L22040)

```diff
-       l: () => Sp,
-       o: () => xp,
-       q: () => Yp
+       n: () => nT,
+       o: () => kT
```

#### 2069. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22042-L22043` → after: `L22541-L22542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22541-L22542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22541-L22542) · [Before (L22042-L22043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22042-L22043)

```diff
-     var Op = cp(337),
-       op = cp(34);
+     var WT = mT(366),
+       zT = mT(31);
```

#### 2070. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22046` → after: `L22545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22545) · [Before (L22046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22046)

```diff
-       return null === pp || void 0 === pp ? null : "string" === typeof pp ? pp : null
+       return null === TT || void 0 === TT ? null : "string" === typeof TT ? TT : null
```

#### 2071. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22058` → after: `L22557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22557) · [Before (L22058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22058)

```diff
-           Np: cp,
+           XT: mT,
```

#### 2072. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22070` → after: `L22569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22569) · [Before (L22070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22070)

```diff
-         ip[Ip.Np] || (ip[Ip.Np] = {}), ip[Ip.Np][Ip.name] = {
+         UT[MT.XT] || (UT[MT.XT] = {}), UT[MT.XT][MT.name] = {
```

#### 2073. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22073-L22074` → after: `L22572-L22573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22572-L22573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22572-L22573) · [Before (L22073-L22074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22073-L22074)

```diff
-           displayName: null !== (cp = Ip.displayName) && void 0 !== cp ? cp : null,
-           endTick: null !== (Op = Ip.endTick) && void 0 !== Op ? Op : null,
+           displayName: null !== (mT = MT.displayName) && void 0 !== mT ? mT : null,
+           endTick: null !== (WT = MT.endTick) && void 0 !== WT ? WT : null,
```

#### 2074. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22091` → after: `L22590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22590) · [Before (L22091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22091)

```diff
-         }(0, Op.mc)(Ip) || (cp[op] = Ip)
+         }(0, WT.Qc)(MT) || (mT[zT] = MT)
```

#### 2075. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22111` → after: `L22610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22610) · [Before (L22111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22111)

```diff
-           if ((0, Op.mc)(Lp)) continue;
+           if ((0, WT.Qc)(HT)) continue;
```

#### 2076. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22121` → after: `L22620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22620) · [Before (L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22121)

```diff
-               endTime: void 0 !== ip.duration && null !== ip.duration ? (null !== (Sp = ip.appliedAt) && void 0 !== Sp ? Sp : cp) + ip.duration : null
+               endTime: void 0 !== UT.duration && null !== UT.duration ? (null !== (gT = UT.appliedAt) && void 0 !== gT ? gT : mT) + UT.duration : null
```

#### 2077. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22131` → after: `L22630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22630) · [Before (L22131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22131)

```diff
-         cp && (delete cp[ip], (0, Op.mc)(cp) && delete this.tracked[pp])
+         mT && (delete mT[UT], (0, WT.Qc)(mT) && delete this.tracked[TT])
```

#### 2078. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22135` → after: `L22634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22634) · [Before (L22135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22135)

```diff
-         0 !== pp.duration ? this.upsert(pp.Np, pp.name, {
+         0 !== TT.duration ? this.upsert(TT.XT, TT.name, {
```

#### 2079. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22141` → after: `L22640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22640) · [Before (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22141)

```diff
-         }) : this.remove(pp.Np, pp.name)
+         }) : this.remove(TT.XT, TT.name)
```

#### 2080. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22171` → after: `L22670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22670) · [Before (L22171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22171)

```diff
-           }(0, Op.mc)(xp) || (op[Sp] = xp)
+           }(0, WT.Qc)(nT) || (zT[gT] = nT)
```

#### 2081. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22179-L22180` → after: `L22678-L22679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22678-L22679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22678-L22679) · [Before (L22179-L22180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22179-L22180)

```diff
-         op.m.GA("EffectUpdate", {
-           Np: pp,
+         zT.j.EZ("EffectUpdate", {
+           XT: TT,
```

#### 2082. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22189-L22190` → after: `L22688-L22689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22688-L22689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22688-L22689) · [Before (L22189-L22190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22189-L22190)

```diff
-         op.m.GA("RemoveEffect", {
-           Np: pp,
+         zT.j.EZ("RemoveEffect", {
+           XT: TT,
```

#### 2083. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22216` → after: `L22715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22715) · [Before (L22216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22216)

```diff
-               displayName: null !== (Yp = wp.displayName) && void 0 !== Yp ? Yp : void 0,
+               displayName: null !== (kT = cT.displayName) && void 0 !== kT ? kT : void 0,
```

#### 2084. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22228` → after: `L22727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22727) · [Before (L22228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22228)

```diff
-   37173: (pp, ip, cp) => {
+   37058: (TT, UT, mT) => {
```

#### 2085. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22233-L22234` → after: `L22733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22733) · [Before (L22233-L22234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22233-L22234)

```diff
-       j: () => xp,
-       k: () => Ap
+       m: () => lT
```

#### 2086. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22236-L22238` → after: `L22735-L22737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22735-L22737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22735-L22737) · [Before (L22236-L22238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22236-L22238)

```diff
-     var Op = cp(37169),
-       op = cp(37177),
-       Ip = cp(301);
+     var WT = mT(37050),
+       zT = mT(37063),
+       MT = mT(321);
```

#### 2087. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22242` → after: `L22741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22741) · [Before (L22242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22242)

```diff
-         [Op.e]: Op.b
+         [WT.d]: WT.c
```

#### 2088. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22247` → after: `L22746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22746) · [Before (L22247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22247)

```diff
-       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, Ip.d)()
+       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, MT.c)()
```

#### 2089. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22277` → after: `L22776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22776) · [Before (L22277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22277)

```diff
-           suggestedName: (0, Op.l)(),
+           suggestedName: (0, WT.j)(),
```

#### 2090. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22288` → after: `L22787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22787) · [Before (L22288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22288)

```diff
-         type: Op.e
+         type: WT.d
```

#### 2091. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22293` → after: `L22792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22792) · [Before (L22293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22293)

```diff
-       return (0, Op.h)((0, op.c)(pp))
+       return (0, WT.g)((0, zT.e)(TT))
```

#### 2092. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22296` → after: `L22795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22795) · [Before (L22296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22296)

```diff
-   36663: (pp, ip, cp) => {
+   36523: (TT, UT, mT) => {
```

#### 2093. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22298` → after: `L22797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22797) · [Before (L22298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22298)

```diff
-       c: () => Ap
+       b: () => lT
```

#### 2094. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22301` → after: `L22800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22800) · [Before (L22301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22301)

```diff
-       op = cp(104),
+       zT = mT(102),
```

#### 2095. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22303-L22305` → after: `L22802-L22804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22802-L22804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22802-L22804) · [Before (L22303-L22305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22303-L22305)

```diff
-       Sp = cp(3668),
-       xp = cp(3564),
-       Lp = cp(6804);
+       gT = mT(3679),
+       nT = mT(3551),
+       HT = mT(6723);
```

#### 2096. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22314` → after: `L22813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22813) · [Before (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22314)

```diff
-       (0, xp.i)(pp) && !(0, xp.f)(pp) && (ip = Ip.h.getItem(Yp), Ap = Date.now(), "number" !== typeof ip || Ap < ip || Ap - ip >= Dp) && (0, Sp.b)((() => {
+       (0, nT.q)(TT) && !(0, nT.m)(TT) && (UT = MT.l.getItem(kT), lT = Date.now(), "number" !== typeof UT || lT < UT || lT - UT >= jT) && (0, gT.e)((() => {
```

#### 2097. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22316-L22317` → after: `L22815-L22816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22815-L22816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22815-L22816) · [Before (L22316-L22317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22316-L22317)

```diff
-           if ("landingPage" !== Op.c.get("gameState")) return;
-           const pp = await (0, Lp.f)();
+           if ("landingPage" !== WT.b.get("gameState")) return;
+           const TT = await (0, HT.h)();
```

#### 2098. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22319` → after: `L22818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22818) · [Before (L22319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22319)

```diff
-           Ip.h.setItem(Yp, Date.now());
+           MT.l.setItem(kT, Date.now());
```

#### 2099. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22322-L22323` → after: `L22821-L22822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22821-L22822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22821-L22822) · [Before (L22322-L22323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22322-L22323)

```diff
-           } = await Promise.all([cp.e(78), cp.e(136), cp.e(132)]).then((() => cp(41532)));
-           await ip(pp, pp.listing) || Ip.h.removeItem(Yp)
+           } = await Promise.all([mT.e(78), mT.e(136), mT.e(132)]).then((() => mT(41444)));
+           await UT(TT, TT.listing) || MT.l.removeItem(kT)
```

#### 2100. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22330` → after: `L22829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22829) · [Before (L22330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22330)

```diff
-   9056: (pp, ip, cp) => {
+   9042: (TT, UT, mT) => {
```

#### 2101. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22334-L22335` → after: `L22832-L22834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22832-L22834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22832-L22834) · [Before (L22334-L22335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22334-L22335)

```diff
-       f: () => Ip,
-       i: () => Sp
+       e: () => zT,
+       i: () => MT,
+       k: () => gT
```

#### 2102. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22340` → after: `L22839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22839) · [Before (L22340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22340)

```diff
-       return `${ip}\n${null!==pp&&void 0!==pp?pp:""}`
+       return `${UT}\n${null!==TT&&void 0!==TT?TT:""}`
```

#### 2103. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22361` → after: `L22860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22860) · [Before (L22361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22361)

```diff
-   36691: (pp, ip, cp) => {
+   36574: (TT, UT, mT) => {
```

#### 2104. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22363` → after: `L22862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22862) · [Before (L22363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22363)

```diff
-       b: () => Lp
+       e: () => HT
```

#### 2105. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22365` → after: `L22864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22864) · [Before (L22365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22365)

```diff
-     var Op = cp(322),
+     var WT = mT(351),
```

#### 2106. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22367-L22369` → after: `L22866-L22868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22866-L22868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22866-L22868) · [Before (L22367-L22369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22367-L22369)

```diff
-       Ip = cp(36693),
-       Sp = cp(1650),
-       xp = cp(2012);
+       MT = mT(36579),
+       gT = mT(1752),
+       nT = mT(2104);
```

#### 2107. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22373` → after: `L22872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22872) · [Before (L22373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22373)

```diff
-       if (!op.c.get("isKeydownEnabled") || pp.repeat) return;
+       if (!zT.b.get("isKeydownEnabled") || TT.repeat) return;
```

#### 2108. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22375-L22376` → after: `L22874-L22875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22874-L22875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22874-L22875) · [Before (L22375-L22376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22375-L22376)

```diff
-       "Escape" === pp.key ? (0, Sp.h)(pp) : null !== (cp = xp.t.OpenSettings) && void 0 !== cp && cp.includes(Dp) ? (0, Sp.q)(pp, Op.n.SETTINGS) : null !== (Lp = xp.t.OpenCharacterCustomization) && void 0 !== Lp && Lp.includes(Dp) ? (0, Ip.c)() || (0, Sp.q)(pp, Op.n.CUSTOMISATION … [truncated]
-         showDebugOverlay: !op.c.get("showDebugOverlay")
+       "Escape" === TT.key ? (0, gT.f)(TT) : null !== (mT = nT.v.OpenSettings) && void 0 !== mT && mT.includes(jT) ? (0, gT.s)(TT, WT.k.SETTINGS) : null !== (HT = nT.v.OpenCharacterCustomization) && void 0 !== HT && HT.includes(jT) ? (0, MT.c)() || (0, gT.s)(TT, WT.k.CUSTOMISATION … [truncated]
+         showDebugOverlay: !zT.b.get("showDebugOverlay")
```

#### 2109. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22380` → after: `L22879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22879) · [Before (L22380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22380)

```diff
-   36669: (pp, ip, cp) => {
+   36532: (TT, UT, mT) => {
```

#### 2110. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22382-L22383` → after: `L22881-L22882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22881-L22882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22881-L22882) · [Before (L22382-L22383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22382-L22383)

```diff
-       d: () => Jp,
-       e: () => fp
+       e: () => IT,
+       g: () => PT
```

#### 2111. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22385-L22387` → after: `L22884-L22886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22884-L22886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22884-L22886) · [Before (L22385-L22387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22385-L22387)

```diff
-     var Op = cp(640),
-       op = cp(1236),
-       Ip = cp(156);
+     var WT = mT(653),
+       zT = mT(1324),
+       MT = mT(166);
```

#### 2112. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22391` → after: `L22890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22890) · [Before (L22391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22391)

```diff
-       return `${Sp}${pp}`
+       return `${gT}${TT}`
```

#### 2113. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22401-L22412` → after: `L22900-L22911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22900-L22911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22900-L22911) · [Before (L22401-L22412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22401-L22412)

```diff
-     var Dp = cp(1255),
-       Ap = cp(1234),
-       Pp = cp(34),
-       Wp = cp(1216),
-       yp = cp(1803),
-       Up = cp(1827),
-       wp = cp(3050),
-       vp = cp(1334),
-       tp = cp(1349),
-       Hp = cp(1520),
-       dp = cp(1211),
-       ep = cp(36674),
+     var jT = mT(1341),
+       lT = mT(1321),
+       LT = mT(31),
+       pT = mT(1308),
+       BT = mT(1905),
+       ZT = mT(1932),
+       cT = mT(3099),
+       vT = mT(1416),
+       fT = mT(1429),
+       qT = mT(1613),
+       iT = mT(1302),
+       bT = mT(36534),
```

#### 2114. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22414-L22416` → after: `L22913-L22915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22913-L22915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22913-L22915) · [Before (L22414-L22416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22414-L22416)

```diff
-       kp = cp(131),
-       mp = cp(1838),
-       Rp = cp(36689);
+       eT = mT(133),
+       YT = mT(1944),
+       JT = mT(36565);
```

#### 2115. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22449` → after: `L22948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22948) · [Before (L22449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22449)

```diff
-         this.deps.enabled && this.deps.Yy("game_server_route", "cf_retry_joined", pp)
+         this.deps.enabled && this.deps.Gp("game_server_route", "cf_retry_joined", TT)
```

#### 2116. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22453` → after: `L22952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22952) · [Before (L22453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22453)

```diff
-         if (null === pp) return void this.deps.Yy("game_server_route", "cf_retry_failed:matchmake", 0);
+         if (null === TT) return void this.deps.Gp("game_server_route", "cf_retry_failed:matchmake", 0);
```

#### 2117. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22457` → after: `L22956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22956) · [Before (L22457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22457)

```diff
-         void 0 === ip ? this.deps.Yy("game_server_route", "cf_retry_failed:other", 0) : "refused" === ip.at ? this.deps.Yy("game_server_route", "cf_retry_failed:refused", ip.code) : this.deps.Yy("game_server_route", `cf_retry_failed:${ip.at}`, ip.code)
+         void 0 === UT ? this.deps.Gp("game_server_route", "cf_retry_failed:other", 0) : "refused" === UT.at ? this.deps.Gp("game_server_route", "cf_retry_failed:refused", UT.code) : this.deps.Gp("game_server_route", `cf_retry_failed:${UT.at}`, UT.code)
```

#### 2118. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22465` → after: `L22964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22964) · [Before (L22465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22465)

```diff
-         this.deps.Yy("game_server_route", Op ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
+         this.deps.Gp("game_server_route", WT ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
```

#### 2119. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22475` → after: `L22974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22974) · [Before (L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22475)

```diff
-         this.deps.enabled && (this.reportArm(), this.deps.Yy("game_server_route", "cf_join_left", pp))
+         this.deps.enabled && (this.reportArm(), this.deps.Gp("game_server_route", "cf_join_left", TT))
```

#### 2120. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22482` → after: `L22981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22981) · [Before (L22482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22482)

```diff
-         if (cp) this.reportArm(), this.deps.Yy("game_server_route", "cf_join", 0);
+         if (mT) this.reportArm(), this.deps.Gp("game_server_route", "cf_join", 0);
```

#### 2121. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22495` → after: `L22994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22994) · [Before (L22495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22495)

```diff
-         if ("refused" === op.at) return this.reportArm(), this.deps.Yy("game_server_route", "cf_join_refused", op.code), null;
+         if ("refused" === zT.at) return this.reportArm(), this.deps.Gp("game_server_route", "cf_join_refused", zT.code), null;
```

#### 2122. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22497` → after: `L22996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR22996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L22996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L22996) · [Before (L22497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22497)

```diff
-         if (this.reportArm(Ip), this.deps.Yy("game_server_route", `cf_join_failed:${op.at}`, op.code), null !== cp && this.deps.Yy("game_server_route", "cf_failed_since_route", cp), this.aliasFailedAt = this.deps.now(), void 0 === Op) return null;
+         if (this.reportArm(MT), this.deps.Gp("game_server_route", `cf_join_failed:${zT.at}`, zT.code), null !== mT && this.deps.Gp("game_server_route", "cf_failed_since_route", mT), this.aliasFailedAt = this.deps.now(), void 0 === WT) return null;
```

#### 2123. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22513` → after: `L23012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23012) · [Before (L22513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22513)

```diff
-         this.armReported || this.deps.now() >= qp || (this.armReported = !0, this.deps.Yy("game_server_route", "holdout" === (null !== pp && void 0 !== pp ? pp : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
+         this.armReported || this.deps.now() >= xT || (this.armReported = !0, this.deps.Gp("game_server_route", "holdout" === (null !== TT && void 0 !== TT ? TT : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
```

#### 2124. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22523` → after: `L23022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23022) · [Before (L22523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22523)

```diff
-         return this.deps.Yy("game_server_route", ip, cp), "blocked" === ip && (this.store({
+         return this.deps.Gp("game_server_route", UT, mT), "blocked" === UT && (this.store({
```

#### 2125. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22551` → after: `L23050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23050) · [Before (L22551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22551)

```diff
-         "ours" === (null === Op || void 0 === Op ? void 0 : Op.answer) ? this.deps.Yy("game_server_rtt", ip, Op.ms): this.deps.Yy("game_server_rtt", cp, 0)
+         "ours" === (null === WT || void 0 === WT ? void 0 : WT.answer) ? this.deps.Gp("game_server_rtt", UT, WT.ms): this.deps.Gp("game_server_rtt", mT, 0)
```

#### 2126. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22554` → after: `L23053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23053) · [Before (L22554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22554)

```diff
-         return this.deps.probe(`https://${pp}/version`, 8e3)
+         return this.deps.probe(`https://${TT}/version`, 8e3)
```

#### 2127. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22583-L22584` → after: `L23082-L23083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23082-L23083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23082-L23083) · [Before (L22583-L22584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22583-L22584)

```diff
-         const Ip = null !== (ip = null !== (cp = null !== (Op = pp.recoveryArm) && void 0 !== Op ? Op : null === (op = this.stored()) || void 0 === op ? void 0 : op.recoveryArm) && void 0 !== cp ? cp : this.pageArm) && void 0 !== ip ? ip : void 0;
-         this.deps.storage.setItem(Cp, void 0 === Ip ? pp : {
+         const MT = null !== (UT = null !== (mT = null !== (WT = TT.recoveryArm) && void 0 !== WT ? WT : null === (zT = this.stored()) || void 0 === zT ? void 0 : zT.recoveryArm) && void 0 !== mT ? mT : this.pageArm) && void 0 !== UT ? UT : void 0;
+         this.deps.storage.setItem(wT, void 0 === MT ? TT : {
```

#### 2128. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22590` → after: `L23089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23089) · [Before (L22590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22590)

```diff
-       storage: jp.h,
+       storage: OT.l,
```

#### 2129. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22593` → after: `L23092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23092) · [Before (L22593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22593)

```diff
-           Op = await (0, Wp.i)(pp, {
+           WT = await (0, pT.l)(TT, {
```

#### 2130. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22602` → after: `L23101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23101) · [Before (L22602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22602)

```diff
-         return null !== Op && void 0 !== Op ? Op : {
+         return null !== WT && void 0 !== WT ? WT : {
```

#### 2131. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22607` → after: `L23106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23106) · [Before (L22607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22607)

```diff
-       Yy: yp.x,
+       Gp: BT.C,
```

#### 2132. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22614` → after: `L23113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23113) · [Before (L22614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22614)

```diff
-       sleep: mp.e,
+       sleep: YT.d,
```

#### 2133. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22617-L22618` → after: `L23116-L23117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23116-L23117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23116-L23117) · [Before (L22617-L22618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22617-L22618)

```diff
-     var lp = cp(1749),
-       Qp = cp(9056);
+     var yT = mT(1843),
+       XT = mT(9042);
```

#### 2134. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22623` → after: `L23122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23122) · [Before (L22623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22623)

```diff
-         if ((0, Op.G)(Sp)) {
+         if ((0, WT.E)(gT)) {
```

#### 2135. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22625-L22626` → after: `L23124-L23125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23124-L23125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23124-L23125) · [Before (L22625-L22626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22625-L22626)

```diff
-           const pp = ip instanceof op.e ? null : (0, Qp.i)((0, Qp.c)(ip, cp));
-           let Op = await (null !== pp && void 0 !== pp ? pp : fp(ip, cp, xp));
+           const TT = UT instanceof zT.e ? null : (0, XT.k)((0, XT.e)(UT, mT));
+           let WT = await (null !== TT && void 0 !== TT ? TT : PT(UT, mT, nT));
```

#### 2136. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22632` → after: `L23131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23131) · [Before (L22632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22632)

```diff
-           if (Hp = Op.at, Yp.aborted || wp.e.matchmakingEnded(Ip.isError() ? null : Op.at), Ip.isError()) {
+           if (qT = WT.at, kT.aborted || cT.f.matchmakingEnded(MT.isError() ? null : WT.at), MT.isError()) {
```

#### 2137. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22638` → after: `L23137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23137) · [Before (L22638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22638)

```diff
-           wp.e.skipPlayWait();
+           cT.f.skipPlayWait();
```

#### 2138. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22648-L22649` → after: `L23147-L23148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23147-L23148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23147-L23148) · [Before (L22648-L22649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22648-L22649)

```diff
-         console.log(`Connecting to ${Ap.gameNameWithVariation} in lobby ${Ap.lobbyName} on game server ${Ap.endpoint}`), Pp.m.GA("matchmakeAndPlayStepCompleted", {
-           step: Ip.k.REQUEST_TO_MATCHMAKING,
+         console.log(`Connecting to ${lT.gameNameWithVariation} in lobby ${lT.lobbyName} on game server ${lT.endpoint}`), LT.j.EZ("matchmakeAndPlayStepCompleted", {
+           step: MT.j.REQUEST_TO_MATCHMAKING,
```

#### 2139. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22651` → after: `L23150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23150) · [Before (L22651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22651)

```diff
-         }), (0, yp.m)(), Up.c.markGameLoadStart((0, lp.d)()), (0, tp.p)({
+         }), (0, BT.k)(), ZT.c.markGameLoadStart((0, yT.h)()), (0, fT.m)({
```

#### 2140. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22655` → after: `L23154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23154) · [Before (L22655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22655)

```diff
-         }), Pp.m.GA("loadingScreenState", "loadingPage:loadingGame");
+         }), LT.j.EZ("loadingScreenState", "loadingPage:loadingGame");
```

#### 2141. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22665` → after: `L23164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23164) · [Before (L22665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22665)

```diff
-               (0, tp.p)({
+               (0, fT.m)({
```

#### 2142. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22674` → after: `L23173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23173) · [Before (L22674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22674)

```diff
-         }, ep = !(0, Op.G)(Sp), jp = ip => pp({
+         }, bT = !(0, WT.E)(gT), OT = UT => TT({
```

#### 2143. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22685` → after: `L23184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23184) · [Before (L22685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22685)

```diff
-           const Op = new Wp.c(cp),
+           const WT = new pT.e(mT),
```

#### 2144. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22704` → after: `L23203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23203) · [Before (L22704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22704)

```diff
-         let qp = null !== mp && void 0 !== mp ? mp : Rp.blockedAt,
+         let xT = null !== YT && void 0 !== YT ? YT : JT.blockedAt,
```

#### 2145. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22710` → after: `L23209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23209) · [Before (L22710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22710)

```diff
-           if (Ep || (qp ??= performance.now(), Pp.m.GA("gameServerRouteSwitched")), Yp.aborted) return Bp(qp), Np();
+           if (tT || (xT ??= performance.now(), LT.j.EZ("gameServerRouteSwitched")), kT.aborted) return QT(xT), sT();
```

#### 2146. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22728` → after: `L23227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23227) · [Before (L22728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22728)

```diff
-             Xp.afterAutoRetryJoined(null !== (ap = Cp()) && void 0 !== ap ? ap : 0)
+             aT.afterAutoRetryJoined(null !== (CT = wT()) && void 0 !== CT ? CT : 0)
```

#### 2147. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22731` → after: `L23230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23230) · [Before (L22731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22731)

```diff
-         return Mp.isError() ? (!0 === Mp.asError().debugResult.OO && Yp.aborted && Bp(qp), Mp.asError().forward()) : (Xp.afterJoined(Ap.endpoint), (0, vp.L)(), window.gtag ? window.gtag("event", "conversion", {
+         return dT.isError() ? (!0 === dT.asError().debugResult.Km && kT.aborted && QT(xT), dT.asError().forward()) : (aT.afterJoined(lT.endpoint), (0, vT.P)(), window.gtag ? window.gtag("event", "conversion", {
```

#### 2148. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22733` → after: `L23232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23232) · [Before (L22733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22733)

```diff
-         }) : console.error("window.gtag not defined"), Dp.d.value({
+         }) : console.error("window.gtag not defined"), jT.c.value({
```

#### 2149. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22745` → after: `L23244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23244) · [Before (L22745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22745)

```diff
-       return Dp.d.errorWithCode("Left the game while it loaded", Ip.k.REQUEST_TO_MATCHMAKING, {
+       return jT.c.errorWithCode("Left the game while it loaded", MT.j.REQUEST_TO_MATCHMAKING, {
```

#### 2150. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22747` → after: `L23246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23246) · [Before (L22747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22747)

```diff
-         OO: !0
+         Km: !0
```

#### 2151. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22762-L22763` → after: `L23261-L23262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23261-L23262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23261-L23262) · [Before (L22762-L22763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22762-L22763)

```diff
-       return (0, Op.G)(pp) || pp instanceof op.e || !(pp.length > Ap.M) ? await Hp.b.matchmakePlayer(cp, pp, ip, (0, ep.c)()).then((pp => {
-         if (!1 === pp.succeeded) return Dp.d.errorWithCode(pp.failReason, Ip.k.REQUEST_TO_MATCHMAKING, {
+       return (0, WT.E)(TT) || TT instanceof zT.e || !(TT.length > lT.U) ? await qT.b.matchmakePlayer(mT, TT, UT, (0, bT.b)()).then((TT => {
+         if (!1 === TT.succeeded) return jT.c.errorWithCode(TT.failReason, MT.j.REQUEST_TO_MATCHMAKING, {
```

#### 2152. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22771` → after: `L23270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23270) · [Before (L22771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22771)

```diff
-         return op.isError() ? op.asError().forward() : Dp.d.value({
+         return zT.isError() ? zT.asError().forward() : jT.c.value({
```

#### 2153. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22776` → after: `L23275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23275) · [Before (L22776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22776)

```diff
-       })).catch((pp => (console.error("Bad response from the matchmaking server:", pp), Dp.d.errorWithCode(pp.toString(), Ip.k.REQUEST_TO_MATCHMAKING, {
+       })).catch((TT => (console.error("Bad response from the matchmaking server:", TT), jT.c.errorWithCode(TT.toString(), MT.j.REQUEST_TO_MATCHMAKING, {
```

#### 2154. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22779` → after: `L23278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23278) · [Before (L22779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22779)

```diff
-       })))) : (console.error("Invalid lobby ID:", pp), Dp.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", Ip.k.REQUEST_TO_MATCHMAKING, {
+       })))) : (console.error("Invalid lobby ID:", TT), jT.c.errorWithCode("This lobby link's name is too long. Ask for a new link.", MT.j.REQUEST_TO_MATCHMAKING, {
```

#### 2155. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22786` → after: `L23285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23285) · [Before (L22786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22786)

```diff
-       return ip.isError() ? Dp.d.errorWithCode(ip.asError().message, Ip.k.CONNECT_TO_GAME_SERVER, {
+       return UT.isError() ? jT.c.errorWithCode(UT.asError().message, MT.j.CONNECT_TO_GAME_SERVER, {
```

#### 2156. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22788` → after: `L23287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23287) · [Before (L22788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22788)

```diff
-       }) : Dp.d.value(ip.getValue())
+       }) : jT.c.value(UT.getValue())
```

#### 2157. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22791` → after: `L23290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23290) · [Before (L22791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22791)

```diff
-       (0, tp.k)("/")
+       (0, fT.j)("/")
```

#### 2158. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22794` → after: `L23293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23293) · [Before (L22794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22794)

```diff
-   8895: (pp, ip, cp) => {
+   8894: (TT, UT, mT) => {
```

#### 2159. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22796` → after: `L23295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23295) · [Before (L22796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22796)

```diff
-       b: () => Sp
+       d: () => gT
```

#### 2160. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22798-L22800` → after: `L23297-L23299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23297-L23299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23297-L23299) · [Before (L22798-L22800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22798-L22800)

```diff
-     var Op = cp(8897),
-       op = cp(640),
-       Ip = cp(131);
+     var WT = mT(8901),
+       zT = mT(653),
+       MT = mT(133);
```

#### 2161. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22804` → after: `L23303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23303) · [Before (L22804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22804)

```diff
-       if ((0, op.G)(pp)) return !0;
+       if ((0, zT.E)(TT)) return !0;
```

#### 2162. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22810` → after: `L23309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23309) · [Before (L22810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22810)

```diff
-             if ((0, Op.h)(ip.items[pp], Sp)) return !1
+             if ((0, WT.j)(UT.items[TT], gT)) return !1
```

#### 2163. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22815` → after: `L23314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23314) · [Before (L22815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22815)

```diff
-   36769: (pp, ip, cp) => {
+   36670: (TT, UT, mT) => {
```

#### 2164. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22826-L22827` → after: `L23325-L23326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23325-L23326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23325-L23326) · [Before (L22826-L22827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22826-L22827)

```diff
-       b: () => Op,
-       e: () => op
+       c: () => WT,
+       g: () => zT
```

#### 2165. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22830` → after: `L23329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23329) · [Before (L22830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22830)

```diff
-   36779: (pp, ip, cp) => {
+   36674: (TT, UT, mT) => {
```

#### 2166. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22832-L22833` → after: `L23331-L23332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23331-L23332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23331-L23332) · [Before (L22832-L22833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22832-L22833)

```diff
-       b: () => Dp,
-       e: () => Pp,
+       d: () => jT,
+       g: () => LT,
```

#### 2167. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22835` → after: `L23334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23334) · [Before (L22835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22835)

```diff
-       m: () => Yp
+       l: () => kT
```

#### 2168. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22838-L22842` → after: `L23337-L23341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23337-L23341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23337-L23341) · [Before (L22838-L22842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22838-L22842)

```diff
-       op = cp(2457),
-       Ip = cp(2463),
-       Sp = cp(2468),
-       xp = cp(2543),
-       Lp = cp(34);
+       zT = mT(2522),
+       MT = mT(2525),
+       gT = mT(2534),
+       nT = mT(2608),
+       HT = mT(31);
```

#### 2169. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22845` → after: `L23344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23344) · [Before (L22845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22845)

```diff
-       return (!(0, Sp.c)() || 0 === pp && 0 === ip) && (0, Ip.A)(op.i.Joystick, 0, pp, ip, 0)
+       return (!(0, gT.c)() || 0 === TT && 0 === UT) && (0, MT.v)(zT.g.Joystick, 0, TT, UT, 0)
```

#### 2170. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22872` → after: `L23371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23371) · [Before (L22872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22872)

```diff
-       return document.documentElement.classList.contains(xp.l)
+       return document.documentElement.classList.contains(nT.g)
```

#### 2171. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22936` → after: `L23435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23435) · [Before (L22936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22936)

```diff
-         if (!ip) return void this.write(op.i.TouchZone, pp, 0, 0, 0);
+         if (!UT) return void this.write(zT.g.TouchZone, TT, 0, 0, 0);
```

#### 2172. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22941` → after: `L23440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23440) · [Before (L22941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22941)

```diff
-         this.write(op.i.TouchZone, pp, Ip.x - this.canvasLeft, Ip.y - this.canvasTop, Up(cp.width, cp.height));
+         this.write(zT.g.TouchZone, TT, MT.x - this.canvasLeft, MT.y - this.canvasTop, ZT(mT.width, mT.height));
```

#### 2173. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22943` → after: `L23442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23442) · [Before (L22943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22943)

```diff
-         this.write(op.i.TouchZone, 256 | pp, 0, 0, Sp ? Up(Sp.width, Sp.height) : 0)
+         this.write(zT.g.TouchZone, 256 | TT, 0, 0, gT ? ZT(gT.width, gT.height) : 0)
```

#### 2174. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22947` → after: `L23446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23446) · [Before (L22947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22947)

```diff
-           cp = Op.c.get("worldPanelHud");
+           mT = WT.b.get("worldPanelHud");
```

#### 2175. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22955-L22956` → after: `L23454-L23455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23454-L23455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23454-L23455) · [Before (L22955-L22956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22955-L22956)

```diff
-     }(Ip.A);
-     (0, Lp.n)(xp.e, (() => {
+     }(MT.v);
+     (0, HT.k)(nT.d, (() => {
```

#### 2176. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22960` → after: `L23459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23459) · [Before (L22960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22960)

```diff
-   37044: (pp, ip, cp) => {
+   36945: (TT, UT, mT) => {
```

#### 2177. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L22969-L22970` → after: `L23469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23469) · [Before (L22969-L22970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L22969-L22970)

```diff
-       n: () => Op,
-       p: () => Ip
+       k: () => MT
```

#### 2178. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23034` → after: `L23533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23533) · [Before (L23034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23034)

```diff
-   37099: (pp, ip, cp) => {
+   36991: (TT, UT, mT) => {
```

#### 2179. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23036` → after: `L23535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23535) · [Before (L23036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23036)

```diff
-       return null === pp || null === ip ? pp === ip : pp[0] === ip[0] && pp[1] === ip[1] && pp[2] === ip[2]
+       return null === TT || null === UT ? TT === UT : TT[0] === UT[0] && TT[1] === UT[1] && TT[2] === UT[2]
```

#### 2180. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23044` → after: `L23543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23543) · [Before (L23044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23044)

```diff
-       i: () => Op
+       h: () => WT
```

#### 2181. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23047` → after: `L23546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23546) · [Before (L23047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23047)

```diff
-   37053: (pp, ip, cp) => {
+   36949: (TT, UT, mT) => {
```

#### 2182. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23152` → after: `L23651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23651) · [Before (L23152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23152)

```diff
-   37055: (pp, ip, cp) => {
+   36955: (TT, UT, mT) => {
```

#### 2183. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23155-L23157` → after: `L23654-L23655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23654-L23655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23654-L23655) · [Before (L23155-L23157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23155-L23157)

```diff
-       f: () => xp,
-       i: () => Sp,
-       l: () => Ip,
+       h: () => nT,
+       k: () => gT,
```

#### 2184. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23161-L23162` → after: `L23660-L23661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23660-L23661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23660-L23661) · [Before (L23161-L23162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23161-L23162)

```diff
-       s: () => Wp,
-       w: () => Pp
+       r: () => pT,
+       u: () => LT
```

#### 2185. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23164` → after: `L23663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23663) · [Before (L23164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23164)

```diff
-     var Op = cp(1251);
+     var WT = mT(1336);
```

#### 2186. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23172` → after: `L23671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23671) · [Before (L23172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23172)

```diff
-       return pp === Op.k || pp === Op.l
+       return TT === WT.e || TT === WT.f
```

#### 2187. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23176` → after: `L23675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23675) · [Before (L23176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23176)

```diff
-       return pp === Op.k && ip === Op.l || pp === Op.l && ip === Op.k
+       return TT === WT.e && UT === WT.f || TT === WT.f && UT === WT.e
```

#### 2188. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23180-L23182` → after: `L23679-L23681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23679-L23681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23679-L23681) · [Before (L23180-L23182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23180-L23182)

```diff
-       const ip = Op.l in pp,
-         cp = Op.k in pp;
-       return ip && cp ? null : ip ? Op.l : cp ? Op.k : null
+       const UT = WT.f in TT,
+         mT = WT.e in TT;
+       return UT && mT ? null : UT ? WT.f : mT ? WT.e : null
```

#### 2189. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23186-L23187` → after: `L23685-L23686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23685-L23686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23685-L23686) · [Before (L23186-L23187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23186-L23187)

```diff
-       const Op = `${ip}/`;
-       return pp.filter((pp => pp.startsWith(Op))).map((pp => [pp, `${cp}/${pp.slice(Op.length)}`]))
+       const WT = `${UT}/`;
+       return TT.filter((TT => TT.startsWith(WT))).map((TT => [TT, `${mT}/${TT.slice(WT.length)}`]))
```

#### 2190. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23198` → after: `L23697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23697) · [Before (L23198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23198)

```diff
-       return `${Ap}${pp}`
+       return `${lT}${TT}`
```

#### 2191. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23202` → after: `L23701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23701) · [Before (L23202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23202)

```diff
-       return `/node_modules/@plugins/${pp}/${ip}`
+       return `/node_modules/@plugins/${TT}/${UT}`
```

#### 2192. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23210` → after: `L23709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23709) · [Before (L23210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23210)

```diff
-       }(ip) ? ip : null
+       }(UT) ? UT : null
```

#### 2193. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23213` → after: `L23712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23712) · [Before (L23213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23213)

```diff
-   37063: (pp, ip, cp) => {
+   36962: (TT, UT, mT) => {
```

#### 2194. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23217-L23219` → after: `L23716-L23718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23716-L23718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23716-L23718) · [Before (L23217-L23219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23217-L23219)

```diff
-       k: () => Sp,
-       o: () => Lp,
-       r: () => Ip
+       h: () => gT,
+       l: () => HT,
+       p: () => MT
```

#### 2195. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23221` → after: `L23720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23720) · [Before (L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23221)

```diff
-     var Op = cp(2487);
+     var WT = mT(2549);
```

#### 2196. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23234` → after: `L23733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23733) · [Before (L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23234)

```diff
-   4970: (pp, ip, cp) => {
+   4948: (TT, UT, mT) => {
```

#### 2197. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23237-L23240` → after: `L23736-L23739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23736-L23739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23736-L23739) · [Before (L23237-L23240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23237-L23240)

```diff
-       f: () => Op,
-       i: () => Ip,
-       m: () => Lp,
-       o: () => Sp
+       e: () => WT,
+       h: () => MT,
+       k: () => HT,
+       l: () => gT
```

#### 2198. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23384` → after: `L23883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23883) · [Before (L23384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23384)

```diff
-       return "string" !== typeof pp ? pp : Object.hasOwn(Ip, pp) ? Ip[pp] : null
+       return "string" !== typeof TT ? TT : Object.hasOwn(MT, TT) ? MT[TT] : null
```

#### 2199. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23416-L23417` → after: `L23915-L23916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23915-L23916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23915-L23916) · [Before (L23416-L23417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23416-L23417)

```diff
-   8937: () => {},
-   10097: pp => {
+   8933: () => {},
+   10075: TT => {
```

#### 2200. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23420` → after: `L23919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23919) · [Before (L23420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23420)

```diff
-   18309: pp => {
+   18273: TT => {
```

#### 2201. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23423` → after: `L23922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23922) · [Before (L23423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23423)

```diff
-   20246: pp => {
+   20273: TT => {
```

#### 2202. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23426` → after: `L23925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23925) · [Before (L23426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23426)

```diff
-   20253: pp => {
+   20282: TT => {
```

#### 2203. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23429` → after: `L23928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23928) · [Before (L23429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23429)

```diff
-   20255: pp => {
+   20284: TT => {
```

#### 2204. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23432` → after: `L23931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23931) · [Before (L23432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23432)

```diff
-   20260: pp => {
+   20288: TT => {
```

#### 2205. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L23435` → after: `L23934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR23934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L23934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/86.js#L23934) · [Before (L23435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/86.js#L23435)

```diff
-   20265: pp => {
+   20291: TT => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/87.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/87.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e)

#### 1. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L4)

```diff
-   4882: (pp, ip, cp) => {
+   4879: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L9-L16` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L9-L16) · [Before (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L9-L16)

```diff
-     var Op = cp(1325),
-       op = cp(34);
-     var Ip = cp(337);
-     var Sp = cp(640);
-     var xp = cp(2457),
-       Lp = cp(4886),
-       Yp = cp(4919),
-       Dp = cp(4927);
+     var WT = mT(1408),
+       zT = mT(31);
+     var MT = mT(366);
+     var gT = mT(653);
+     var nT = mT(2522),
+       HT = mT(4883),
+       kT = mT(4906),
+       jT = mT(4915);
```

#### 3. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L27)

```diff
-         if (!Sp) throw console.error(`No QTE implementation registered for type: ${ip}`), new Error(`No QTE implementation registered for type: ${ip}`);
+         if (!gT) throw console.error(`No QTE implementation registered for type: ${UT}`), new Error(`No QTE implementation registered for type: ${UT}`);
```

#### 4. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L33)

```diff
-         this.mouseSub = op.m.subscribe("QTEMouseState", (pp => {
+         this.mouseSub = zT.j.subscribe("QTEMouseState", (TT => {
```

#### 5. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L38-L40` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L38-L40) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L38-L40)

```diff
-         })), this.stopInputActions = (0, Yp.f)((pp => {
-           this.isCompleted || !Pp.has(pp.action) && !(0, Yp.e)(pp) || this.implementation.handleMouseInput(pp.down)
-         })), this.tickSub = op.m.subscribe("noaTick", (pp => {
+         })), this.stopInputActions = (0, kT.h)((TT => {
+           this.isCompleted || !LT.has(TT.action) && !(0, kT.f)(TT) || this.implementation.handleMouseInput(TT.down)
+         })), this.tickSub = zT.j.subscribe("noaTick", (TT => {
```

#### 6. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L44)

```diff
-         })), this.stopShellTicks = (0, Lp.s)((() => {
+         })), this.stopShellTicks = (0, HT.C)((() => {
```

#### 7. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L50)

```diff
-         this.mouseSub && (op.m.unsubscribe(this.mouseSub), this.mouseSub = null), null === (pp = this.stopInputActions) || void 0 === pp || pp.call(this), this.stopInputActions = null, null === (ip = this.stopShellTicks) || void 0 === ip || ip.call(this), this.stopShellTicks = nu … [truncated]
+         this.mouseSub && (zT.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (TT = this.stopInputActions) || void 0 === TT || TT.call(this), this.stopInputActions = null, null === (UT = this.stopShellTicks) || void 0 === UT || UT.call(this), this.stopShellTicks = nu … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L62)

```diff
-     const yp = new Op.c,
+     const BT = new WT.d,
```

#### 9. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L69)

```diff
-           this.resolveRequest = ip, this.tearDownNotification = cp, this.progress = 0, this.oi = void 0, this.Ii = void 0, this.Si = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
+           this.resolveRequest = UT, this.tearDownNotification = mT, this.progress = 0, this.DT = void 0, this.oT = void 0, this.AT = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
```

#### 10. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L71)

```diff
-           this.oi = null !== (Op = xp.oi) && void 0 !== Op ? Op : .075, this.Ii = null !== (op = xp.Ii) && void 0 !== op ? op : 1, this.progress = null !== (Ip = xp.Oi) && void 0 !== Ip ? Ip : 30, this.Si = null !== (Sp = xp.Si) && void 0 !== Sp && Sp, this.parameters = xp
+           this.DT = null !== (WT = nT.DT) && void 0 !== WT ? WT : .075, this.oT = null !== (zT = nT.oT) && void 0 !== zT ? zT : 1, this.progress = null !== (MT = nT.hT) && void 0 !== MT ? MT : 30, this.AT = null !== (gT = nT.AT) && void 0 !== gT && gT, this.parameters = nT
```

#### 11. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L74)

```diff
-           pp && !this.isCompleted && (this.clickCount++, this.progress += this.Ii, this.progress >= 100 && this.complete(!0))
+           TT && !this.isCompleted && (this.clickCount++, this.progress += this.oT, this.progress >= 100 && this.complete(!0))
```

#### 12. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L78)

```diff
-             if (this.progress -= this.oi, this.Si && this.progress <= 0) this.complete(!1);
+             if (this.progress -= this.DT, this.AT && this.progress <= 0) this.complete(!1);
```

#### 13. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L103)

```diff
-           this.resolveRequest = ip, this.tearDownNotification = cp, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = pp, this.timeWindowMs = null !== (Op = this.parameters.Ai) && void … [truncated]
+           this.resolveRequest = UT, this.tearDownNotification = mT, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = TT, this.timeWindowMs = null !== (WT = this.parameters.WU) && void … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L124)

```diff
-               Ai: this.timeWindowMs
+               WU: this.timeWindowMs
```

#### 15. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L140-L141)

```diff
-             Ui: Ip.d.clamp(op.Ui, .05, 1)
-           }, this.progress = null !== (Op = op.Oi) && void 0 !== Op ? Op : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
+             nU: MT.e.clamp(zT.nU, .05, 1)
+           }, this.progress = null !== (WT = zT.hT) && void 0 !== WT ? WT : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
```

#### 16. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L152)

```diff
-           this.moverPosition += pp * this.parameters.Hi * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
+           this.moverPosition += TT * this.parameters.HU * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
```

#### 17. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L158)

```diff
-           const pp = Ip.d.clamp(1 - .7 * this.parameters.ui, 0, 1.4);
+           const TT = MT.e.clamp(1 - .7 * this.parameters.kU, 0, 1.4);
```

#### 18. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L162-L163)

```diff
-           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.ji : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Ip.d.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
-           const pp = this.parameters.Ui / 2,
+           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.jU : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = MT.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
+           const TT = this.parameters.nU / 2,
```

#### 19. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L169)

```diff
-           const pp = this.parameters.Ui / 2;
+           const TT = this.parameters.nU / 2;
```

#### 20. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L173)

```diff
-           this.isMoverInCatchZone() ? this.progress += this.parameters.ki * pp : this.progress -= this.parameters.mi * pp, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.Si && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
+           this.isMoverInCatchZone() ? this.progress += this.parameters.lU * TT : this.progress -= this.parameters.LU * TT, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.AT && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
```

#### 21. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L184)

```diff
-               Ui: this.parameters.Ui,
+               nU: this.parameters.nU,
```

#### 22. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L199)

```diff
-           this.resolveRequest = ip, this.tearDownNotification = cp, this.startTime = void 0, this.speed = void 0, this.qi = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+           this.resolveRequest = UT, this.tearDownNotification = mT, this.startTime = void 0, this.speed = void 0, this.BU = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
```

#### 23. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L203-L205` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L203-L205) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L203-L205)

```diff
-             speed: null !== (Op = Yp.speed) && void 0 !== Op ? Op : .5,
-             qi: Ip.d.clamp(Yp.qi, .05, 1),
-             label: null !== (op = Yp.label) && void 0 !== op ? op : [{
+             speed: null !== (WT = kT.speed) && void 0 !== WT ? WT : .5,
+             BU: MT.e.clamp(kT.BU, .05, 1),
+             label: null !== (zT = kT.label) && void 0 !== zT ? zT : [{
```

#### 24. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L208-L211` → after: `L208-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L208-L211) · [Before (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L208-L211)

```diff
-             icon: null !== (Sp = Yp.icon) && void 0 !== Sp ? Sp : null,
-             scale: null !== (xp = Yp.scale) && void 0 !== xp ? xp : 1,
-             rotation: null !== (Lp = Yp.rotation) && void 0 !== Lp ? Lp : 0
-           }, this.speed = this.parameters.speed, this.qi = this.parameters.qi, this.startTime = Date.now()
+             icon: null !== (gT = kT.icon) && void 0 !== gT ? gT : null,
+             scale: null !== (nT = kT.scale) && void 0 !== nT ? nT : 1,
+             rotation: null !== (HT = kT.rotation) && void 0 !== HT ? HT : 0
+           }, this.speed = this.parameters.speed, this.BU = this.parameters.BU, this.startTime = Date.now()
```

#### 25. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L216)

```diff
-             const pp = Math.abs(this.markerPosition - .5) <= this.qi / 2;
+             const TT = Math.abs(this.markerPosition - .5) <= this.BU / 2;
```

#### 26. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L225)

```diff
-           this.markerPosition = pp <= .5 ? 2 * pp : 2 - 2 * pp
+           this.markerPosition = TT <= .5 ? 2 * TT : 2 - 2 * TT
```

#### 27. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L251-L252` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L251-L252) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L251-L252)

```diff
-           if (ip <= this.parameters.Xi && ip >= -this.parameters.Xi) {
-             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Ci) return void this.complete(!0)
+           if (UT <= this.parameters.fU && UT >= -this.parameters.fU) {
+             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.cU) return void this.complete(!0)
```

#### 28. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L257)

```diff
-           this.misses++, this.lastClickResult = !1, !(0, Sp.G)(this.parameters.li) && this.misses > this.parameters.li ? this.complete(!1) : this.shrinkStartTime = Date.now()
+           this.misses++, this.lastClickResult = !1, !(0, gT.E)(this.parameters.qU) && this.misses > this.parameters.qU ? this.complete(!1) : this.shrinkStartTime = Date.now()
```

#### 29. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L261)

```diff
-           this.getOuterCircleProgress() < -this.parameters.Xi && this.handleMiss()
+           this.getOuterCircleProgress() < -this.parameters.fU && this.handleMiss()
```

#### 30. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L264)

```diff
-           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Ei
+           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.vU
```

#### 31. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L276)

```diff
-               Ci: this.parameters.Ci,
+               cU: this.parameters.cU,
```

#### 32. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L290)

```diff
-       (0, Dp.g)(xp.C.Qte, wp ? xp.C.Qte : 0), wp ? op.m.GA("qteStateUpdated", wp.getState()) : op.m.GA("qteStateUpdated", {
+       (0, jT.g)(nT.y.Qte, cT ? nT.y.Qte : 0), cT ? zT.j.EZ("qteStateUpdated", cT.getState()) : zT.j.EZ("qteStateUpdated", {
```

#### 33. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L324)

```diff
-         if (wp || yp.wy()) return void(yp.wy() && wp && (wp = null, tp()));
+         if (cT || BT.TB()) return void(BT.TB() && cT && (cT = null, fT()));
```

#### 34. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L357)

```diff
-   4886: (pp, ip, cp) => {
+   4883: (TT, UT, mT) => {
```

#### 35. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L359-L361` → after: `L359-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L359-L362) · [Before (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L359-L361)

```diff
-       B: () => tp,
-       D: () => Sp,
-       H: () => xp,
+       A: () => bT,
+       C: () => xT,
+       G: () => dT,
+       I: () => wT,
```

#### 36. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L363` → after: `L364-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L364-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L364-L366) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L363)

```diff
-       b: () => mp,
+       L: () => gT,
+       N: () => nT,
+       Q: () => JT,
```

#### 37. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L365-L368` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L368-L369) · [Before (L365-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L365-L368)

```diff
-       f: () => Xp,
-       h: () => Ep,
-       j: () => vp,
-       m: () => jp,
+       g: () => iT,
+       k: () => aT,
```

#### 38. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L370-L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L371) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L370-L371)

```diff
-       p: () => ep,
-       s: () => qp,
+       r: () => vT,
```

#### 39. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L373)

```diff
-       y: () => Cp
+       x: () => qT
```

#### 40. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L375)

```diff
-     var Op = cp(4895);
+     var WT = mT(4890);
```

#### 41. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L384)

```diff
-       Ip = null !== pp && void 0 !== pp ? pp : op
+       MT = null !== TT && void 0 !== TT ? TT : zT
```

#### 42. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L476)

```diff
-       const Ip = (0, Op.j)(ip),
+       const MT = (0, WT.g)(UT),
```

#### 43. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L508)

```diff
-   4919: (pp, ip, cp) => {
+   4906: (TT, UT, mT) => {
```

#### 44. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L510-L512` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L510-L512) · [Before (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L510-L512)

```diff
-       b: () => Lp,
-       e: () => Ip,
-       f: () => xp
+       c: () => HT,
+       f: () => MT,
+       h: () => nT
```

#### 45. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L514-L515` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L514-L515) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L514-L515)

```diff
-     var Op = cp(2457),
-       op = cp(4921);
+     var WT = mT(2522),
+       zT = mT(4912);
```

#### 46. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L522)

```diff
-       return "mid-fire" === ip && 0 !== (cp & Op.c.AltLeftClick)
+       return "mid-fire" === UT && 0 !== (mT & WT.b.AltLeftClick)
```

#### 47. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L538` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L538) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L538)

```diff
-           down: 0 !== (cp & Op.c.Down),
+           down: 0 !== (mT & WT.b.Down),
```

#### 48. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L545)

```diff
-   4921: (pp, ip, cp) => {
+   4912: (TT, UT, mT) => {
```

#### 49. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L549-L551` → after: `L549-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L549-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L549-L551) · [Before (L549-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L549-L551)

```diff
-       i: () => Sp,
-       j: () => Op,
-       n: () => xp
+       f: () => gT,
+       g: () => WT,
+       i: () => nT
```

#### 50. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L823)

```diff
-   4927: (pp, ip, cp) => {
+   4915: (TT, UT, mT) => {
```

#### 51. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L829-L830)

```diff
-     var Op = cp(2457),
-       op = cp(2463);
+     var WT = mT(2522),
+       zT = mT(2525);
```

#### 52. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L841` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L841) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L841)

```diff
-           op !== ip && (ip = op, pp(Op.i.UiCapture, Op.C.Keyboard, 0, 0, op ? Op.C.Keyboard : 0))
+           zT !== UT && (UT = zT, TT(WT.g.UiCapture, WT.y.Keyboard, 0, 0, zT ? WT.y.Keyboard : 0))
```

#### 53. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L865)

```diff
-       Lp.set(Op, (null !== (cp = Lp.get(Op)) && void 0 !== cp ? cp : 0) & ~pp | ip & pp);
+       HT.set(WT, (null !== (mT = HT.get(WT)) && void 0 !== mT ? mT : 0) & ~TT | UT & TT);
```

#### 54. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/87.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/87.js#L868)

```diff
-       return (0, op.E)(pp, Ip & pp)
+       return (0, zT.A)(TT, MT & TT)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (79 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 1. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L4)

```diff
-   41079: (pp, ip, cp) => {
+   41023: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L6-L8)

```diff
-       $: () => lp,
-       C: () => Jp,
-       G: () => Qp,
+       A: () => XT,
+       B: () => DT,
+       E: () => sT,
```

#### 3. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10-L13` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L10-L13) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L10-L13)

```diff
-       I: () => Np,
-       K: () => Ep,
-       O: () => Bp,
-       S: () => Cp,
+       J: () => QT,
+       L: () => wT,
+       N: () => ST,
+       Q: () => KT,
```

#### 4. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L15-L16` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L15) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L15-L16)

```diff
-       X: () => Fp,
-       d: () => Gp,
+       e: () => GT,
```

#### 5. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19-L22` → after: `L18-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L18-L22) · [Before (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L19-L22)

```diff
-       j: () => rp,
-       n: () => Mp,
-       r: () => Rp,
-       u: () => Tp,
+       l: () => NT,
+       p: () => dT,
+       s: () => JT,
+       v: () => FT,
+       w: () => aT,
```

#### 6. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25-L30` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L25-L30) · [Before (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L25-L30)

```diff
-     var Op = cp(1419),
-       op = cp(34),
-       Ip = cp(1308),
-       Sp = cp(2457),
-       xp = cp(4927),
-       Lp = cp(4886);
+     var WT = mT(1513),
+       zT = mT(31),
+       MT = mT(1388),
+       gT = mT(2522),
+       nT = mT(4915),
+       HT = mT(4883);
```

#### 7. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L60)

```diff
-       return (0, Ip.t)() && !jp
+       return (0, MT.u)() && !OT
```

#### 8. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L79)

```diff
-       (0, xp.g)(Sp.C.Menu, (0, Ip.t)() ? 0 : Sp.C.Menu)
+       (0, nT.g)(gT.y.Menu, (0, MT.u)() ? 0 : gT.y.Menu)
```

#### 9. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L105)

```diff
-       return (!Ap || performance.now() - wp > Up) && (Ap = (0, Lp.H)().lockPointer(), wp = performance.now()), Ap
+       return (!lT || performance.now() - cT > ZT) && (lT = (0, HT.N)().lockPointer(), cT = performance.now()), lT
```

#### 10. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L113)

```diff
-       return Cp() && !Dp && !vp && !(0, Op.h)()
+       return wT() && !jT && !vT && !(0, WT.k)()
```

#### 11. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L130)

```diff
-       tp ? navigator.vendor.startsWith("Apple") ? Zp() : Hp = dp : Fp()
+       fT ? navigator.vendor.startsWith("Apple") ? ET() : qT = iT : KT()
```

#### 12. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L146)

```diff
-       ep = !0, (0, Lp.H)().unlockPointer()
+       bT = !0, (0, HT.N)().unlockPointer()
```

#### 13. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L157)

```diff
-       op.m.GA("pointerLockUpdate", Dp)
+       zT.j.EZ("pointerLockUpdate", jT)
```

#### 14. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L160)

```diff
-   40879: (pp, ip, cp) => {
+   40820: (TT, UT, mT) => {
```

#### 15. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L166-L168` → after: `L164-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L164-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L164-L168) · [Before (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L166-L168)

```diff
-       k: () => Sp,
-       o: () => Dp,
-       s: () => Lp
+       m: () => lT,
+       p: () => kT,
+       s: () => gT,
+       v: () => jT,
+       y: () => HT
```

#### 16. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L203)

```diff
-   4886: (pp, ip, cp) => {
+   4883: (TT, UT, mT) => {
```

#### 17. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L205-L207` → after: `L205-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L205-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L205-L208) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L205-L207)

```diff
-       B: () => tp,
-       D: () => Sp,
-       H: () => xp,
+       A: () => bT,
+       C: () => xT,
+       G: () => dT,
+       I: () => wT,
```

#### 18. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L209` → after: `L210-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L210-L212) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L209)

```diff
-       b: () => mp,
+       L: () => gT,
+       N: () => nT,
+       Q: () => JT,
```

#### 19. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L211-L214` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L214-L215) · [Before (L211-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L211-L214)

```diff
-       f: () => Xp,
-       h: () => Ep,
-       j: () => vp,
-       m: () => jp,
+       g: () => iT,
+       k: () => aT,
```

#### 20. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L216-L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L217) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L216-L217)

```diff
-       p: () => ep,
-       s: () => qp,
+       r: () => vT,
```

#### 21. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L219` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L219) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L219)

```diff
-       y: () => Cp
+       x: () => qT
```

#### 22. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L221)

```diff
-     var Op = cp(4895);
+     var WT = mT(4890);
```

#### 23. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L230)

```diff
-       Ip = null !== pp && void 0 !== pp ? pp : op
+       MT = null !== TT && void 0 !== TT ? TT : zT
```

#### 24. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L322)

```diff
-       const Ip = (0, Op.j)(ip),
+       const MT = (0, WT.g)(UT),
```

#### 25. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L354)

```diff
-   41091: (pp, ip, cp) => {
+   41030: (TT, UT, mT) => {
```

#### 26. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L356)

```diff
-       c: () => Op
+       b: () => WT
```

#### 27. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L369)

```diff
-   4919: (pp, ip, cp) => {
+   4906: (TT, UT, mT) => {
```

#### 28. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L371-L373` → after: `L371-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L371-L373) · [Before (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L371-L373)

```diff
-       b: () => Lp,
-       e: () => Ip,
-       f: () => xp
+       c: () => HT,
+       f: () => MT,
+       h: () => nT
```

#### 29. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L375-L376` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L375-L376) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L375-L376)

```diff
-     var Op = cp(2457),
-       op = cp(4921);
+     var WT = mT(2522),
+       zT = mT(4912);
```

#### 30. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L383)

```diff
-       return "mid-fire" === ip && 0 !== (cp & Op.c.AltLeftClick)
+       return "mid-fire" === UT && 0 !== (mT & WT.b.AltLeftClick)
```

#### 31. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L399)

```diff
-           down: 0 !== (cp & Op.c.Down),
+           down: 0 !== (mT & WT.b.Down),
```

#### 32. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L406)

```diff
-   4921: (pp, ip, cp) => {
+   4912: (TT, UT, mT) => {
```

#### 33. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L410-L412` → after: `L410-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L410-L412) · [Before (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L410-L412)

```diff
-       i: () => Sp,
-       j: () => Op,
-       n: () => xp
+       f: () => gT,
+       g: () => WT,
+       i: () => nT
```

#### 34. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L684)

```diff
-   41120: (pp, ip, cp) => {
+   41053: (TT, UT, mT) => {
```

#### 35. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L686-L687` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L686-L687) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L686-L687)

```diff
-       b: () => Dp,
-       f: () => Yp,
+       c: () => jT,
+       e: () => kT,
```

#### 36. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L690-L692` → after: `L690-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L690-L692) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L690-L692)

```diff
-     var Op = cp(4911),
-       op = cp(2457),
-       Ip = cp(4927);
+     var WT = mT(4904),
+       zT = mT(2522),
+       MT = mT(4915);
```

#### 37. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L708-L713` → after: `L708-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L708-L713) · [Before (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L708-L713)

```diff
-         case Op.z.MouseDown:
-         case Op.z.MouseUp:
-         case Op.z.TouchStart:
-         case Op.z.TouchEnd:
-         case Op.z.TouchCancel:
-         case Op.z.TouchButton:
+         case WT.G.MouseDown:
+         case WT.G.MouseUp:
+         case WT.G.TouchStart:
+         case WT.G.TouchEnd:
+         case WT.G.TouchCancel:
+         case WT.G.TouchButton:
```

#### 38. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L715-L717` → after: `L715-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L715-L717) · [Before (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L715-L717)

```diff
-         case Op.z.KeyDown:
-         case Op.z.KeyUp:
-           return 0 === (ip & op.g.Repeat) && !(0, Ip.e)(document.activeElement);
+         case WT.G.KeyDown:
+         case WT.G.KeyUp:
+           return 0 === (UT & zT.e.Repeat) && !(0, MT.e)(document.activeElement);
```

#### 39. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L729)

```diff
-   4927: (pp, ip, cp) => {
+   4915: (TT, UT, mT) => {
```

#### 40. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L735-L736` → after: `L735-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L735-L736) · [Before (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L735-L736)

```diff
-     var Op = cp(2457),
-       op = cp(2463);
+     var WT = mT(2522),
+       zT = mT(2525);
```

#### 41. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L747)

```diff
-           op !== ip && (ip = op, pp(Op.i.UiCapture, Op.C.Keyboard, 0, 0, op ? Op.C.Keyboard : 0))
+           zT !== UT && (UT = zT, TT(WT.g.UiCapture, WT.y.Keyboard, 0, 0, zT ? WT.y.Keyboard : 0))
```

#### 42. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L771)

```diff
-       Lp.set(Op, (null !== (cp = Lp.get(Op)) && void 0 !== cp ? cp : 0) & ~pp | ip & pp);
+       HT.set(WT, (null !== (mT = HT.get(WT)) && void 0 !== mT ? mT : 0) & ~TT | UT & TT);
```

#### 43. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L774)

```diff
-       return (0, op.E)(pp, Ip & pp)
+       return (0, zT.A)(TT, MT & TT)
```

#### 44. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L777)

```diff
-   41153: (pp, ip, cp) => {
+   41085: (TT, UT, mT) => {
```

#### 45. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L779-L782` → after: `L779-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L779-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L779-L782) · [Before (L779-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L779-L782)

```diff
-       d: () => Dp,
-       f: () => Lp,
-       i: () => xp,
-       j: () => Yp
+       e: () => jT,
+       g: () => HT,
+       k: () => nT,
+       m: () => kT
```

#### 46. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L784)

```diff
-     var Op = cp(1971);
+     var WT = mT(2057);
```

#### 47. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L798` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L798) · [Before (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L798)

```diff
-       op = pp, Ip++, (0, Op.b)();
+       zT = TT, MT++, (0, WT.c)();
```

#### 48. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L806)

```diff
-   41200: (pp, ip, cp) => {
+   41127: (TT, UT, mT) => {
```

#### 49. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L808` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L808) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L808)

```diff
-       b: () => Op
+       c: () => WT
```

#### 50. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L812)

```diff
-   41087: (pp, ip, cp) => {
+   41025: (TT, UT, mT) => {
```

#### 51. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L815-L818` → after: `L815-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L815-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L815-L818) · [Before (L815-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L815-L818)

```diff
-       g: () => Pp,
-       j: () => Hp,
-       n: () => ep,
-       r: () => dp,
+       f: () => LT,
+       i: () => qT,
+       m: () => bT,
+       p: () => iT,
```

#### 52. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L821)

```diff
-     var Op = cp(176),
+     var WT = mT(180),
```

#### 53. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L823-L829` → after: `L823-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L823-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L823-L829) · [Before (L823-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L823-L829)

```diff
-       Ip = cp(34),
-       Sp = cp(2993),
-       xp = cp(1317),
-       Lp = cp(34364),
-       Yp = cp(298),
-       Dp = cp(104),
-       Ap = cp(172);
+       MT = mT(31),
+       gT = mT(3032),
+       nT = mT(1398),
+       HT = mT(34206),
+       kT = mT(314),
+       jT = mT(102),
+       lT = mT(176);
```

#### 54. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L833)

```diff
-       const ip = (0, Sp.C)(),
+       const UT = (0, gT.H)(),
```

#### 55. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L838` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L838) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L838)

```diff
-             pixelated: (0, Sp.u)(pp.pixelSmoothing)
+             pixelated: (0, gT.w)(TT.pixelSmoothing)
```

#### 56. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L840-L841` → after: `L840-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L840-L841) · [Before (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L840-L841)

```diff
-         }(op.c.get("clientEscMenuOptions"), ip);
-       return cp.sampleCount > 1 && (0, Lp.d)() && (cp.sampleCount = 1), cp.n = null !== (pp = (0, Lp.r)()) && void 0 !== pp ? pp : cp.n, Op.f.includes((0, Dp.getSoftwareRenderer)()) && (cp.sampleCount = 1, cp.n = Math.max(cp.n, (0, Sp.x)(Ap.u.pixelScale, ip))), cp
+         }(zT.b.get("clientEscMenuOptions"), UT);
+       return mT.sampleCount > 1 && (0, HT.b)() && (mT.sampleCount = 1), mT.n = null !== (TT = (0, HT.i)()) && void 0 !== TT ? TT : mT.n, WT.f.includes((0, jT.getSoftwareRenderer)()) && (mT.sampleCount = 1, mT.n = Math.max(mT.n, (0, gT.x)(lT.n.pixelScale, UT))), mT
```

#### 57. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L861)

```diff
-       const ip = (0, Sp.l)(),
+       const UT = (0, gT.n)(),
```

#### 58. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L863)

```diff
-       return (0, Sp.d)(cp, Op, ip, pp.n)
+       return (0, gT.i)(mT, WT, UT, TT.n)
```

#### 59. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L868)

```diff
-       const Ip = (0, Sp.l)(),
+       const MT = (0, gT.n)(),
```

#### 60. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L871-L872` → after: `L871-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L871-L872) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L871-L872)

```diff
-       const Dp = (0, Sp.d)(Lp, Yp, Ip, Pp().n);
-       return (0, Sp.c)(pp, Dp), pp.style.left = `${null!==(ip=null===(cp=wp)||void 0===cp?void 0:cp.rect.left)&&void 0!==ip?ip:0}px`, pp.style.top = `${null!==(Op=null===(op=wp)||void 0===op?void 0:op.rect.top)&&void 0!==Op?Op:0}px`, (0, xp.T)(pp.style, wp), Dp
+       const jT = (0, gT.i)(HT, kT, MT, LT().n);
+       return (0, gT.e)(TT, jT), TT.style.left = `${null!==(UT=null===(mT=cT)||void 0===mT?void 0:mT.rect.left)&&void 0!==UT?UT:0}px`, TT.style.top = `${null!==(WT=null===(zT=cT)||void 0===zT?void 0:zT.rect.top)&&void 0!==WT?WT:0}px`, (0, nT.E)(TT.style, cT), jT
```

#### 61. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L876)

```diff
-       wp = pp, tp(), (0, xp.K)(yp.style, pp, ""), vp()
+       cT = TT, fT(), (0, nT.w)(BT.style, TT, ""), vT()
```

#### 62. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L880` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L880) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L880)

```diff
-       pp.style.imageRendering = (0, Sp.D)(ip.pixelated)
+       TT.style.imageRendering = (0, gT.I)(UT.pixelated)
```

#### 63. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L884)

```diff
-       const cp = (0, Ip.n)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const mT = (0, MT.k)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 64. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L887-L888` → after: `L887-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L887-L888) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L887-L888)

```diff
-         Op = (0, Lp.C)(ip),
-         op = (0, Yp.o)(ip);
+         WT = (0, HT.u)(UT),
+         zT = (0, kT.l)(UT);
```

#### 65. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L894)

```diff
-   41208: (pp, ip, cp) => {
+   41130: (TT, UT, mT) => {
```

#### 66. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L897-L898` → after: `L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L898) · [Before (L897-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L897-L898)

```diff
-       g: () => Ip,
-       i: () => op
+       f: () => zT
```

#### 67. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L915)

```diff
-   41147: (pp, ip, cp) => {
+   41080: (TT, UT, mT) => {
```

#### 68. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L917` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L917) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L917)

```diff
-       e: () => op,
+       d: () => zT,
```

#### 69. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L920-L922` → after: `L920-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L920-L922) · [Before (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L920-L922)

```diff
-       m: () => Ap,
-       p: () => Dp,
-       q: () => Pp
+       l: () => lT,
+       o: () => jT,
+       s: () => LT
```

#### 70. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L924)

```diff
-     var Op = cp(2970);
+     var WT = mT(3001);
```

#### 71. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L927` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L927) · [Before (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L927)

```diff
-         super(`${"fetch"===pp?"fetching":"decoding"} ${ip} failed`, cp), this.stage = pp, this.source = ip, this.name = "ShellImageError"
+         super(`${"fetch"===TT?"fetching":"decoding"} ${UT} failed`, mT), this.stage = TT, this.source = UT, this.name = "ShellImageError"
```

#### 72. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L931)

```diff
-       let ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Op.F,
+       let UT, mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.M,
```

#### 73. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L950)

```diff
-         throw new op("decode", "string" === typeof pp ? pp : `${ip.byteLength} bytes`, {
+         throw new zT("decode", "string" === typeof TT ? TT : `${UT.byteLength} bytes`, {
```

#### 74. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L961)

```diff
-         for (const [ip, cp] of xp) pp.kOp(ip, cp);
+         for (const [UT, mT] of nT) TT.MWT(UT, mT);
```

#### 75. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L968` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L968) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L968)

```diff
-       return Sp ? Sp.kOp(ip, pp) : xp.set(ip, pp), ip
+       return gT ? gT.MWT(UT, TT) : nT.set(UT, TT), UT
```

#### 76. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L983)

```diff
-       null === (ip = Sp) || void 0 === ip || ip.mOp(pp)
+       null === (UT = gT) || void 0 === UT || UT.gWT(TT)
```

#### 77. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L986)

```diff
-   41096: (pp, ip, cp) => {
+   41034: (TT, UT, mT) => {
```

#### 78. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L992)

```diff
-       e: () => Op
+       c: () => WT
```

#### 79. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L995` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/88.js#L995) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/88.js#L995)

```diff
-   41104: (pp, ip, cp) => {
+   41036: (TT, UT, mT) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/89.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/89.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8)

#### 1. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/89.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/89.js#L4)

```diff
-   40730: (pp, ip, cp) => {
+   40666: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8-L23` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/89.js#L8-L23) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/89.js#L8-L23)

```diff
-     cp(40736);
-     var Op = cp(40739),
-       op = cp(40758),
-       Ip = cp(1982),
-       Sp = cp(40769),
-       xp = cp(4911),
-       Lp = cp(4886),
-       Yp = cp(40778),
-       Dp = cp(40783),
-       Ap = cp(4921),
-       Pp = cp(40867),
-       Wp = cp(2463),
-       yp = cp(8979),
-       Up = cp(40747),
-       wp = cp(8952),
-       vp = cp(39281);
+     mT(40670);
+     var WT = mT(40677),
+       zT = mT(40699),
+       MT = mT(2067),
+       gT = mT(40709),
+       nT = mT(4904),
+       HT = mT(4883),
+       kT = mT(40717),
+       jT = mT(40724),
+       lT = mT(4912),
+       LT = mT(40802),
+       pT = mT(2525),
+       BT = mT(8967),
+       ZT = mT(40686),
+       cT = mT(8950),
+       vT = mT(39251);
```

#### 3. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/89.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/89.js#L26)

```diff
-         if (ip < 0) throw new Error(`No core action "${pp}"`);
+         if (UT < 0) throw new Error(`No core action "${TT}"`);
```

#### 4. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/89.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/89.js#L41)

```diff
-         (0, Wp.z)(xp.z.PadAction, pp, 0, 0, (0, Wp.v)(ip, performance.now()))
+         (0, pT.u)(nT.G.PadAction, TT, 0, 0, (0, pT.r)(UT, performance.now()))
```

#### 5. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/89.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/89.js#L44)

```diff
-         Mp(pp, Sp.id.Down)
+         dT(TT, gT.qd.Down)
```

#### 6. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L53-L57` → after: `L53-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L53-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/89.js#L53-L57) · [Before (L53-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/89.js#L53-L57)

```diff
-         const pp = (0, Dp.k)();
-         return null !== pp && void 0 !== pp && pp.isCoreRunning ? pp : null
-       },
-       Qp = pp => Sp.q.playerFlags(pp.api.apiView, 0),
-       Jp = pp => null !== pp && Sp.q.targetBlockId(pp.api.apiView, 0) !== Sp.Rc,
+         const TT = (0, jT.i)();
+         return null !== TT && void 0 !== TT && TT.isCoreRunning ? TT : null
+       },
+       XT = TT => gT.x.playerFlags(TT.api.apiView, 0),
+       IT = TT => null !== TT && gT.x.targetBlockId(TT.api.apiView, 0) !== gT.Wc,
```

#### 7. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L59-L60` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/89.js#L59-L60) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/89.js#L59-L60)

```diff
-         const pp = (0, yp.e)(),
-           ip = new Up.c;
+         const TT = (0, BT.b)(),
+           UT = new ZT.e;
```
