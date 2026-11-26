# Changed — Bundle Modifications Report (Part 019 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `19 / 115` (**409** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/117.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/117.js` (2890 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc)

#### 1317. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15145-L15149` → after: `L15145-L15149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15145-L15149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15145-L15149) · [Before (L15145-L15149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15145-L15149)

```diff
-               share: zU.share,
-               players: zU.from.players * Math.min(1, XU > 0 && AU > 0 ? AU / XU : 1),
-               later: cU
-             }), yU = [QU.step, QU.mostLost, UU.lowestShare].filter((UU => null !== UU && zU.includes(UU)));
-             return [...new Set(yU)].map((UU => cU(UU, zU.slice(zU.indexOf(UU) + 1).map((UU => cU(UU, []))))))
+               share: LH.share,
+               players: LH.from.players * Math.min(1, BH > 0 && hH > 0 ? hH / BH : 1),
+               later: AH
+             }), rH = [SH.step, SH.mostLost, HH.lowestShare].filter((HH => null !== HH && LH.includes(HH)));
+             return [...new Set(rH)].map((HH => AH(HH, LH.slice(LH.indexOf(HH) + 1).map((HH => AH(HH, []))))))
```

#### 1318. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15154-L15171` → after: `L15154-L15171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15154-L15171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15154-L15171) · [Before (L15154-L15171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15154-L15171)

```diff
-         function eZ(UU, XU) {
-           const zU = bF(UU);
-           return zU.startsWith(`${XU}: `) ? zU.slice(XU.length + 2) : null
-         }
- 
-         function CZ(UU, XU) {
-           var zU, cU;
-           const yU = function(UU) {
-             var XU, zU, cU, yU;
-             const QU = null !== (XU = null === (zU = UU.playerTotals) || void 0 === zU ? void 0 : zU.playerTotals) && void 0 !== XU ? XU : {},
-               AU = null !== (cU = null === (yU = UU.flow) || void 0 === yU ? void 0 : yU.edges) && void 0 !== cU ? cU : [];
-             let FU = null;
-             return hF(QU, ((XU, zU, cU) => {
-               var yU;
-               const QU = null === (yU = UU.worldCode) || void 0 === yU ? void 0 : yU.events.find((UU => UU.isLiteralType && UU.eventType === zU));
-               if (!IZ.test(zU) || void 0 === QU || null !== QU.valueExpression) return;
- ... (2 more removed lines; see GitHub link above)
+         function VT(HH, BH) {
+           const LH = pt(HH);
+           return LH.startsWith(`${BH}: `) ? LH.slice(BH.length + 2) : null
+         }
+ 
+         function OT(HH, BH) {
+           var LH, AH;
+           const rH = function(HH) {
+             var BH, LH, AH, rH;
+             const SH = null !== (BH = null === (LH = HH.playerTotals) || void 0 === LH ? void 0 : LH.playerTotals) && void 0 !== BH ? BH : {},
+               hH = null !== (AH = null === (rH = HH.flow) || void 0 === rH ? void 0 : rH.edges) && void 0 !== AH ? AH : [];
+             let tH = null;
+             return Hz(SH, ((BH, LH, AH) => {
+               var rH;
+               const SH = null === (rH = HH.worldCode) || void 0 === rH ? void 0 : rH.events.find((HH => HH.isLiteralType && HH.eventType === LH));
+               if (!CT.test(LH) || void 0 === SH || null !== SH.valueExpression) return;
+ ... (2 more added lines; see GitHub link above)
```

#### 1319. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15173-L15174` → after: `L15173-L15174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15173-L15174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15173-L15174) · [Before (L15173-L15174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15173-L15174)

```diff
-                     value: XU,
-                     players: zU
+                     value: BH,
+                     players: LH
```

#### 1320. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15176-L15177` → after: `L15176-L15177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15176-L15177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15176-L15177) · [Before (L15176-L15177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15176-L15177)

```diff
-                 })).sort(((UU, XU) => XU.players - UU.players)),
-                 DU = new Map(oU.map(((UU, XU) => {
+                 })).sort(((HH, BH) => BH.players - HH.players)),
+                 CH = new Map(zH.map(((HH, BH) => {
```

#### 1321. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15179-L15181` → after: `L15179-L15181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15179-L15181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15179-L15181) · [Before (L15179-L15181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15179-L15181)

```diff
-                     value: zU
-                   } = UU;
-                   return [zU, XU]
+                     value: LH
+                   } = HH;
+                   return [LH, BH]
```

#### 1322. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15183` → after: `L15183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15183) · [Before (L15183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15183)

```diff
-                 EU = oU.every((UU => {
+                 EH = zH.every((HH => {
```

#### 1323. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15185-L15187` → after: `L15185-L15187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15185-L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15185-L15187) · [Before (L15185-L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15185-L15187)

```diff
-                     value: XU
-                   } = UU;
-                   return QU.values.includes(XU)
+                     value: BH
+                   } = HH;
+                   return SH.values.includes(BH)
```

#### 1324. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15189` → after: `L15189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15189) · [Before (L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15189)

```diff
-                 YU = oU.slice(1).every(((UU, XU) => {
+                 XH = zH.slice(1).every(((HH, BH) => {
```

#### 1325. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15191-L15193` → after: `L15191-L15193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15191-L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15191-L15193) · [Before (L15191-L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15191-L15193)

```diff
-                     players: zU
-                   } = UU;
-                   return zU < oU[XU].players
+                     players: LH
+                   } = HH;
+                   return LH < zH[BH].players
```

#### 1326. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15195-L15199` → after: `L15195-L15199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15195-L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15195-L15199) · [Before (L15195-L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15195-L15199)

```diff
-                 NU = AU.some((UU => {
-                   var XU, cU;
-                   const yU = DU.get(null !== (XU = eZ(UU.from, zU)) && void 0 !== XU ? XU : ""),
-                     QU = DU.get(null !== (cU = eZ(UU.to, zU)) && void 0 !== cU ? cU : "");
-                   return void 0 !== yU && void 0 !== QU && yU > QU
+                 GH = hH.some((HH => {
+                   var BH, AH;
+                   const rH = CH.get(null !== (BH = VT(HH.from, LH)) && void 0 !== BH ? BH : ""),
+                     SH = CH.get(null !== (AH = VT(HH.to, LH)) && void 0 !== AH ? AH : "");
+                   return void 0 !== rH && void 0 !== SH && rH > SH
```

#### 1327. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15201-L15205` → after: `L15201-L15205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15201-L15205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15201-L15205) · [Before (L15201-L15205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15201-L15205)

```diff
-                 IU = null === FU || oU[0].players > FU.values[0].players;
-               oU.length >= YZ && EU && YU && !NU && IU && (FU = {
-                 gameCategory: XU,
-                 eventType: zU,
-                 values: oU
+                 YH = null === tH || zH[0].players > tH.values[0].players;
+               zH.length >= tT && EH && XH && !GH && YH && (tH = {
+                 gameCategory: BH,
+                 eventType: LH,
+                 values: zH
```

#### 1328. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15207-L15210` → after: `L15207-L15210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15207-L15210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15207-L15210) · [Before (L15207-L15210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15207-L15210)

```diff
-             })), FU
-           }(UU);
-           if (null === yU) return [];
-           const QU = null !== (zU = null === (cU = UU.stats) || void 0 === cU ? void 0 : cU.rankingWindow.uniquePlayers) && void 0 !== zU ? zU : 0,
+             })), tH
+           }(HH);
+           if (null === rH) return [];
+           const SH = null !== (LH = null === (AH = HH.stats) || void 0 === AH ? void 0 : AH.rankingWindow.uniquePlayers) && void 0 !== LH ? LH : 0,
```

#### 1329. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15212-L15218` → after: `L15212-L15218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15212-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15212-L15218) · [Before (L15212-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15212-L15218)

```diff
-               values: AU,
-               eventType: FU
-             } = yU,
-             oU = AU[0].players,
-             DU = {
-               gameCategory: yU.gameCategory,
-               eventType: FU,
+               values: hH,
+               eventType: tH
+             } = rH,
+             zH = hH[0].players,
+             CH = {
+               gameCategory: rH.gameCategory,
+               eventType: tH,
```

#### 1330. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15221-L15226` → after: `L15221-L15226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15221-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15221-L15226) · [Before (L15221-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15221-L15226)

```diff
-             EU = AU.slice(1).flatMap(((UU, zU) => {
-               const cU = AU[zU];
-               return cU.players >= XU && cU.players >= oU * tZ ? [{
-                 from: cU,
-                 to: UU,
-                 lost: cU.players - UU.players
+             EH = hH.slice(1).flatMap(((HH, LH) => {
+               const AH = hH[LH];
+               return AH.players >= BH && AH.players >= zH * GT ? [{
+                 from: AH,
+                 to: HH,
+                 lost: AH.players - HH.players
```

#### 1331. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15229-L15231` → after: `L15229-L15231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15229-L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15229-L15231) · [Before (L15229-L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15229-L15231)

```diff
-             YU = (UU, XU) => ({
-               from: UU.from.value,
-               to: UU.to.value,
+             XH = (HH, BH) => ({
+               from: HH.from.value,
+               to: HH.to.value,
```

#### 1332. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15233-L15234` → after: `L15233-L15234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15233-L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15233-L15234) · [Before (L15233-L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15233-L15234)

```diff
-               fromPlayers: UU.from.players,
-               lost: UU.lost,
+               fromPlayers: HH.from.players,
+               lost: HH.lost,
```

#### 1333. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15237-L15241` → after: `L15237-L15241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15237-L15241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15237-L15241) · [Before (L15237-L15241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15237-L15241)

```diff
-               selection: DU,
-               group: FU,
-               share: UU.to.players / UU.from.players,
-               players: UU.from.players * Math.min(1, oU > 0 && QU > 0 ? QU / oU : 1),
-               later: XU
+               selection: CH,
+               group: tH,
+               share: HH.to.players / HH.from.players,
+               players: HH.from.players * Math.min(1, zH > 0 && SH > 0 ? SH / zH : 1),
+               later: BH
```

#### 1334. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15243-L15248` → after: `L15243-L15248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15243-L15248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15243-L15248) · [Before (L15243-L15248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15243-L15248)

```diff
-             NU = [...EU].sort(((UU, XU) => XU.lost - UU.lost))[0],
-             IU = [...EU].sort(((UU, XU) => UU.to.players / UU.from.players - XU.to.players / XU.from.players))[0];
-           return [...new Set([NU, IU])].flatMap((UU => {
-             if (void 0 === UU) return [];
-             const XU = EU.slice(EU.indexOf(UU) + 1).map((UU => YU(UU, [])));
-             return [YU(UU, XU)]
+             GH = [...EH].sort(((HH, BH) => BH.lost - HH.lost))[0],
+             YH = [...EH].sort(((HH, BH) => HH.to.players / HH.from.players - BH.to.players / BH.from.players))[0];
+           return [...new Set([GH, YH])].flatMap((HH => {
+             if (void 0 === HH) return [];
+             const BH = EH.slice(EH.indexOf(HH) + 1).map((HH => XH(HH, [])));
+             return [XH(HH, BH)]
```

#### 1335. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15252` → after: `L15252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15252) · [Before (L15252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15252)

```diff
-         function wZ(UU, XU) {
+         function bT(HH, BH) {
```

#### 1336. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15254-L15260` → after: `L15254-L15260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15254-L15260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15254-L15260) · [Before (L15254-L15260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15254-L15260)

```diff
-             share: zU,
-             players: cU,
-             later: yU,
-             ...QU
-           } = UU, AU = 1 - zU - aZ;
-           return AU > 0 && cU >= XU && QU.fromPlayers >= XU ? {
-             ...QU,
+             share: LH,
+             players: AH,
+             later: rH,
+             ...SH
+           } = HH, hH = 1 - LH - XT;
+           return hH > 0 && AH >= BH && SH.fromPlayers >= BH ? {
+             ...SH,
```

#### 1337. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15262` → after: `L15262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15262) · [Before (L15262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15262)

```diff
-             score: AU * cU
+             score: hH * AH
```

#### 1338. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15266-L15271` → after: `L15266-L15271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15266-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15266-L15271) · [Before (L15266-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15266-L15271)

```diff
-         function qZ(UU, XU, zU, cU, yU, QU) {
-           if (zU.length < YZ || zU[0].players < cU) return null;
-           const AU = zU.slice(1).flatMap(((UU, XU) => {
-             const QU = zU[XU],
-               AU = yU > 0 ? Math.min(QU.players, yU) : QU.players;
-             return QU.players >= cU ? [(1 - Math.min(1, UU.players / QU.players) - aZ) * AU] : []
+         function kT(HH, BH, LH, AH, rH, SH) {
+           if (LH.length < tT || LH[0].players < AH) return null;
+           const hH = LH.slice(1).flatMap(((HH, BH) => {
+             const SH = LH[BH],
+               hH = rH > 0 ? Math.min(SH.players, rH) : SH.players;
+             return SH.players >= AH ? [(1 - Math.min(1, HH.players / SH.players) - XT) * hH] : []
```

#### 1339. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15275-L15292` → after: `L15275-L15292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15275-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15275-L15292) · [Before (L15275-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15275-L15292)

```diff
-             eventType: UU,
-             order: XU,
-             values: zU.slice(0, NZ),
-             hasMore: zU.length > NZ,
-             selection: QU,
-             score: Math.max(0, ...AU)
-           }
-         }
- 
-         function OZ(UU, XU, zU) {
-           var cU, yU, QU, AU;
-           const FU = null !== (cU = null === (yU = UU.stats) || void 0 === yU ? void 0 : yU.rankingWindow.uniquePlayers) && void 0 !== cU ? cU : 0,
-             oU = null !== (QU = null === (AU = XU.dropoff) || void 0 === AU ? void 0 : AU.mostAboveMedian) && void 0 !== QU ? QU : null;
-           if (null === oU || FU < zU) return null;
-           const DU = ip(oU);
-           if (null === DU.medianEndedPercent) return null;
- ... (2 more removed lines; see GitHub link above)
+             eventType: HH,
+             order: BH,
+             values: LH.slice(0, zT),
+             hasMore: LH.length > zT,
+             selection: SH,
+             score: Math.max(0, ...hH)
+           }
+         }
+ 
+         function mT(HH, BH, LH) {
+           var AH, rH, SH, hH;
+           const tH = null !== (AH = null === (rH = HH.stats) || void 0 === rH ? void 0 : rH.rankingWindow.uniquePlayers) && void 0 !== AH ? AH : 0,
+             zH = null !== (SH = null === (hH = BH.dropoff) || void 0 === hH ? void 0 : hH.mostAboveMedian) && void 0 !== SH ? SH : null;
+           if (null === zH || tH < LH) return null;
+           const CH = eu(zH);
+           if (null === CH.medianEndedPercent) return null;
+ ... (2 more added lines; see GitHub link above)
```

#### 1340. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15294-L15297` → after: `L15294-L15297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15294-L15297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15294-L15297) · [Before (L15294-L15297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15294-L15297)

```diff
-             minute: DU.minute,
-             ended: DU.endedPercent,
-             typicalEnded: DU.medianEndedPercent,
-             score: EU / 100 * FU
+             minute: CH.minute,
+             ended: CH.endedPercent,
+             typicalEnded: CH.medianEndedPercent,
+             score: EH / 100 * tH
```

#### 1341. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15301-L15302` → after: `L15301-L15302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15301-L15302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15301-L15302) · [Before (L15301-L15302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15301-L15302)

```diff
-         function SZ(UU, XU) {
-           const zU = 1 === UU.events.filter((UU => UU.eventType === XU.eventType)).length;
+         function oT(HH, BH) {
+           const LH = 1 === HH.events.filter((HH => HH.eventType === BH.eventType)).length;
```

#### 1342. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15304-L15306` → after: `L15304-L15306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15304-L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15304-L15306) · [Before (L15304-L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15304-L15306)

```diff
-             gameCategory: UU.gameCategoryId,
-             eventType: XU.eventType,
-             eventValue: zU ? null : XU.eventValue
+             gameCategory: HH.gameCategoryId,
+             eventType: BH.eventType,
+             eventValue: LH ? null : BH.eventValue
```

#### 1343. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15310-L15314` → after: `L15310-L15314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15310-L15314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15310-L15314) · [Before (L15310-L15314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15310-L15314)

```diff
-         function rZ(UU, XU) {
-           var zU, cU;
-           const yU = null !== (zU = null === (cU = UU.stats) || void 0 === cU ? void 0 : cU.rankingWindow.uniquePlayers) && void 0 !== zU ? zU : 0,
-             QU = [...UU.heatmaps].sort(((UU, XU) => XU.players.totalCount - UU.players.totalCount))[0];
-           if (void 0 === QU || yU < XU) return null;
+         function IT(HH, BH) {
+           var LH, AH;
+           const rH = null !== (LH = null === (AH = HH.stats) || void 0 === AH ? void 0 : AH.rankingWindow.uniquePlayers) && void 0 !== LH ? LH : 0,
+             SH = [...HH.heatmaps].sort(((HH, BH) => BH.players.totalCount - HH.players.totalCount))[0];
+           if (void 0 === SH || rH < BH) return null;
```

#### 1344. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15316-L15323` → after: `L15316-L15323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15316-L15323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15316-L15323) · [Before (L15316-L15323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15316-L15323)

```diff
-             areas: AU,
-             total: FU
-           } = ct(QU.players), oU = AU[0];
-           if (void 0 === oU || FU <= 0 || oU.count / FU < kZ) return null;
-           const DU = UU => ({
-               x: UU.x,
-               z: UU.z,
-               y: UU.busiestY
+             areas: hH,
+             total: tH
+           } = BW(SH.players), zH = hH[0];
+           if (void 0 === zH || tH <= 0 || zH.count / tH < uT) return null;
+           const CH = HH => ({
+               x: HH.x,
+               z: HH.z,
+               y: HH.busiestY
```

#### 1345. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15325` → after: `L15325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15325) · [Before (L15325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15325)

```diff
-             EU = oU.count / FU;
+             EH = zH.count / tH;
```

#### 1346. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15328-L15333` → after: `L15328-L15333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15328-L15333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15328-L15333) · [Before (L15328-L15333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15328-L15333)

```diff
-             category: QU.gameCategoryId,
-             square: DU(oU),
-             share: EU,
-             next: AU.slice(1, 1 + BZ).filter((UU => UU.count / FU >= GZ)).map((UU => ({
-               square: DU(UU),
-               share: UU.count / FU
+             category: SH.gameCategoryId,
+             square: CH(zH),
+             share: EH,
+             next: hH.slice(1, 1 + WT).filter((HH => HH.count / tH >= QT)).map((HH => ({
+               square: CH(HH),
+               share: HH.count / tH
```

#### 1347. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15336` → after: `L15336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15336) · [Before (L15336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15336)

```diff
-               gameCategory: QU.gameCategoryId,
+               gameCategory: SH.gameCategoryId,
```

#### 1348. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15340-L15355` → after: `L15340-L15355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15340-L15355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15340-L15355) · [Before (L15340-L15355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15340-L15355)

```diff
-             score: (EU - kZ) * yU
-           }
-         }
-         const uZ = /^(?:checkpoint|wave|island|zone|level)s?$/, fZ = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
- 
-         function iZ(UU, XU) {
-           var zU, cU, yU, QU;
-           if (! function(UU) {
-               var XU, zU, cU, yU;
-               const QU = UU.worldCode;
-               return [...(null !== (XU = null === QU || void 0 === QU ? void 0 : QU.functions) && void 0 !== XU ? XU : []).map((UU => UU.name)), ...(null !== (zU = null === QU || void 0 === QU ? void 0 : QU.constants) && void 0 !== zU ? zU : []).map((UU => UU.name)), ...(null !== … [truncated]
-             }(UU)) return null;
-           const AU = UU.heatmaps.some((UU => UU.players.totalCount > 0 || UU.events.some((UU => UU.heatmap.totalCount > 0)))),
-             FU = UU.missing.some((UU => pZ.test(UU)));
-           if ((null !== (zU = null === (cU = UU.flow) || void 0 === cU ? void 0 : cU.edges.length) && void 0 !== zU ? zU : 0) > 0 || XU.progressions.length > 0 || AU || FU) return null;
-           const oU = Object.values(null !== (yU = null === (QU = UU.playerTotals) || void 0 === QU ? void 0 : QU.playerTotals) && void 0 !== yU ? yU : {}).flatMap((UU => Object.keys(UU)));
+             score: (EH - uT) * rH
+           }
+         }
+         const fT = /^(?:checkpoint|wave|island|zone|level)s?$/, lT = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
+ 
+         function KT(HH, BH) {
+           var LH, AH, rH, SH;
+           if (! function(HH) {
+               var BH, LH, AH, rH;
+               const SH = HH.worldCode;
+               return [...(null !== (BH = null === SH || void 0 === SH ? void 0 : SH.functions) && void 0 !== BH ? BH : []).map((HH => HH.name)), ...(null !== (LH = null === SH || void 0 === SH ? void 0 : SH.constants) && void 0 !== LH ? LH : []).map((HH => HH.name)), ...(null !== … [truncated]
+             }(HH)) return null;
+           const hH = HH.heatmaps.some((HH => HH.players.totalCount > 0 || HH.events.some((HH => HH.heatmap.totalCount > 0)))),
+             tH = HH.missing.some((HH => ET.test(HH)));
+           if ((null !== (LH = null === (AH = HH.flow) || void 0 === AH ? void 0 : AH.edges.length) && void 0 !== LH ? LH : 0) > 0 || BH.progressions.length > 0 || hH || tH) return null;
+           const zH = Object.values(null !== (rH = null === (SH = HH.playerTotals) || void 0 === SH ? void 0 : SH.playerTotals) && void 0 !== rH ? rH : {}).flatMap((HH => Object.keys(HH)));
```

#### 1349. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15358` → after: `L15358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15358) · [Before (L15358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15358)

```diff
-             line: tp(UU.worldCode, oU),
+             line: Qu(HH.worldCode, zH),
```

#### 1350. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15363-L15376` → after: `L15363-L15376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15363-L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15363-L15376) · [Before (L15363-L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15363-L15376)

```diff
-         function HZ(UU) {
-           var XU, zU, cU, yU;
-           const QU = la(UU),
-             AU = null !== (XU = null === (zU = UU.stats) || void 0 === zU ? void 0 : zU.rankingWindow.uniquePlayers) && void 0 !== XU ? XU : 0,
-             FU = AU >= EZ && AU < DZ,
-             oU = FU ? EZ : DZ,
-             DU = function(UU, XU) {
-               return UU.flatMap((UU => {
-                 const zU = wZ(UU, XU);
-                 if (null === zU) return [];
-                 const cU = UU.later.map((UU => wZ(UU, XU))).filter((UU => null !== UU && UU.lost >= zU.lost * RZ)).sort(((UU, XU) => XU.lost - UU.lost))[0];
-                 return [void 0 === cU ? zU : {
-                   ...zU,
-                   next: cU
+         function cT(HH) {
+           var BH, LH, AH, rH;
+           const SH = DQ(HH),
+             hH = null !== (BH = null === (LH = HH.stats) || void 0 === LH ? void 0 : LH.rankingWindow.uniquePlayers) && void 0 !== BH ? BH : 0,
+             tH = hH >= hT && hH < ST,
+             zH = tH ? hT : ST,
+             CH = function(HH, BH) {
+               return HH.flatMap((HH => {
+                 const LH = bT(HH, BH);
+                 if (null === LH) return [];
+                 const AH = HH.later.map((HH => bT(HH, BH))).filter((HH => null !== HH && HH.lost >= LH.lost * xT)).sort(((HH, BH) => BH.lost - HH.lost))[0];
+                 return [void 0 === AH ? LH : {
+                   ...LH,
+                   next: AH
```

#### 1351. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15378-L15383` → after: `L15378-L15383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15378-L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15378-L15383) · [Before (L15378-L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15378-L15383)

```diff
-               })).sort(((UU, XU) => XU.score - UU.score)).slice(0, ZZ)
-             }([...LZ(UU, QU, oU), ...CZ(UU, oU)], oU),
-             EU = null !== (cU = FU ? function(UU, XU, zU) {
-               var cU, yU;
-               const QU = fp(null !== (cU = null === (yU = UU.playerTotals) || void 0 === yU ? void 0 : yU.playerTotals) && void 0 !== cU ? cU : {}, XU)[0];
-               if (void 0 === QU) return null;
+               })).sort(((HH, BH) => BH.score - HH.score)).slice(0, MT)
+             }([...UT(HH, SH, zH), ...OT(HH, zH)], zH),
+             EH = null !== (AH = tH ? function(HH, BH, LH) {
+               var AH, rH;
+               const SH = cu(null !== (AH = null === (rH = HH.playerTotals) || void 0 === rH ? void 0 : rH.playerTotals) && void 0 !== AH ? AH : {}, BH)[0];
+               if (void 0 === SH) return null;
```

#### 1352. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15385-L15386` → after: `L15385-L15386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15385-L15386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15385-L15386) · [Before (L15385-L15386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15385-L15386)

```diff
-                 eventType: AU
-               } = QU, FU = QU.values.map((UU => {
+                 eventType: hH
+               } = SH, tH = SH.values.map((HH => {
```

#### 1353. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15388-L15390` → after: `L15388-L15390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15388-L15390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15388-L15390) · [Before (L15388-L15390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15388-L15390)

```diff
-                   value: XU,
-                   players: zU
-                 } = UU;
+                   value: BH,
+                   players: LH
+                 } = HH;
```

#### 1354. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15392-L15393` → after: `L15392-L15393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15392-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15392-L15393) · [Before (L15392-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15392-L15393)

```diff
-                   name: WZ(AU, XU),
-                   players: zU
+                   name: PT(hH, BH),
+                   players: LH
```

#### 1355. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15395-L15397` → after: `L15395-L15397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15395-L15397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15395-L15397) · [Before (L15395-L15397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15395-L15397)

```diff
-               })), oU = {
-                 gameCategory: QU.gameCategory,
-                 eventType: AU,
+               })), zH = {
+                 gameCategory: SH.gameCategory,
+                 eventType: hH,
```

#### 1356. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15399-L15401` → after: `L15399-L15401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15399-L15401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15399-L15401) · [Before (L15399-L15401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15399-L15401)

```diff
-               }, DU = qZ(AU, "number", FU, XU, zU, oU), EU = QU.steps.filter((UU => UU.from.players >= PZ && 1 - UU.share > aZ)).sort(((UU, XU) => UU.share - XU.share || XU.lost - UU.lost))[0];
-               return "ladder" !== (null === DU || void 0 === DU ? void 0 : DU.kind) || void 0 === EU ? DU : {
-                 ...DU,
+               }, CH = kT(hH, "number", tH, BH, LH, zH), EH = SH.steps.filter((HH => HH.from.players >= vT && 1 - HH.share > XT)).sort(((HH, BH) => HH.share - BH.share || BH.lost - HH.lost))[0];
+               return "ladder" !== (null === CH || void 0 === CH ? void 0 : CH.kind) || void 0 === EH ? CH : {
+                 ...CH,
```

#### 1357. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15403-L15407` → after: `L15403-L15407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15403-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15403-L15407) · [Before (L15403-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15403-L15407)

```diff
-                   from: WZ(AU, EU.from.value),
-                   to: WZ(AU, EU.to.value),
-                   fromPlayers: EU.from.players,
-                   reached: EU.reached,
-                   isOrLater: EU.reached > EU.to.players
+                   from: PT(hH, EH.from.value),
+                   to: PT(hH, EH.to.value),
+                   fromPlayers: EH.from.players,
+                   reached: EH.reached,
+                   isOrLater: EH.reached > EH.to.players
```

#### 1358. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15410-L15416` → after: `L15410-L15416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15410-L15416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15410-L15416) · [Before (L15410-L15416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15410-L15416)

```diff
-             }(UU, oU, AU) : null) && void 0 !== cU ? cU : 0 === DU.length ? function(UU, XU, zU) {
-               var cU, yU;
-               let QU = null;
-               return hF(null !== (cU = null === (yU = UU.playerTotals) || void 0 === yU ? void 0 : yU.playerTotals) && void 0 !== cU ? cU : {}, ((UU, cU, yU) => {
-                 if (!IZ.test(cU)) return;
-                 const AU = qZ(cU, "players", Object.entries(yU).map((UU => {
-                   let [XU, zU] = UU;
+             }(HH, zH, hH) : null) && void 0 !== AH ? AH : 0 === CH.length ? function(HH, BH, LH) {
+               var AH, rH;
+               let SH = null;
+               return Hz(null !== (AH = null === (rH = HH.playerTotals) || void 0 === rH ? void 0 : rH.playerTotals) && void 0 !== AH ? AH : {}, ((HH, AH, rH) => {
+                 if (!CT.test(AH)) return;
+                 const hH = kT(AH, "players", Object.entries(rH).map((HH => {
+                   let [BH, LH] = HH;
```

#### 1359. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15418-L15419` → after: `L15418-L15419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15418-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15418-L15419) · [Before (L15418-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15418-L15419)

```diff
-                     name: XU,
-                     players: zU
+                     name: BH,
+                     players: LH
```

#### 1360. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15421-L15423` → after: `L15421-L15423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15421-L15423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15421-L15423) · [Before (L15421-L15423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15421-L15423)

```diff
-                 })).sort(((UU, XU) => XU.players - UU.players)), XU, zU, {
-                   gameCategory: UU,
-                   eventType: cU,
+                 })).sort(((HH, BH) => BH.players - HH.players)), BH, LH, {
+                   gameCategory: HH,
+                   eventType: AH,
```

#### 1361. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15426-L15438` → after: `L15426-L15438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15426-L15438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15426-L15438) · [Before (L15426-L15438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15426-L15438)

```diff
-                 "ladder" === (null === AU || void 0 === AU ? void 0 : AU.kind) && (null === QU || AU.values[0].players > QU.values[0].players) && (QU = AU)
-               })), QU
-             }(UU, oU, AU) : null,
-             YU = null === EU ? DU : [EU],
-             NU = OZ(UU, QU, oU),
-             IU = null !== (yU = function(UU, XU) {
-               var zU, cU;
-               const yU = null !== (zU = null === (cU = UU.stats) || void 0 === cU ? void 0 : cU.rankingWindow.uniquePlayers) && void 0 !== zU ? zU : 0;
-               if (yU < XU) return null;
-               let QU = null;
-               for (const AU of UU.heatmaps)
-                 for (const zU of AU.events) {
-                   if (!hN(zU.eventType) || null !== IE(zU.eventType, zU.eventValue, UU.worldCode)) continue;
+                 "ladder" === (null === hH || void 0 === hH ? void 0 : hH.kind) && (null === SH || hH.values[0].players > SH.values[0].players) && (SH = hH)
+               })), SH
+             }(HH, zH, hH) : null,
+             XH = null === EH ? CH : [EH],
+             GH = mT(HH, SH, zH),
+             YH = null !== (rH = function(HH, BH) {
+               var LH, AH;
+               const rH = null !== (LH = null === (AH = HH.stats) || void 0 === AH ? void 0 : AH.rankingWindow.uniquePlayers) && void 0 !== LH ? LH : 0;
+               if (rH < BH) return null;
+               let SH = null;
+               for (const hH of HH.heatmaps)
+                 for (const LH of hH.events) {
+                   if (!pG(LH.eventType) || null !== GE(LH.eventType, LH.eventValue, HH.worldCode)) continue;
```

#### 1362. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15440-L15443` → after: `L15440-L15443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15440-L15443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15440-L15443) · [Before (L15440-L15443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15440-L15443)

```diff
-                     areas: cU,
-                     total: yU
-                   } = ct(zU.heatmap), FU = cU[0];
-                   void 0 === FU || yU < XU || FU.count / yU < kZ || null !== QU && FU.count <= QU.count || (QU = {
+                     areas: AH,
+                     total: rH
+                   } = BW(LH.heatmap), tH = AH[0];
+                   void 0 === tH || rH < BH || tH.count / rH < uT || null !== SH && tH.count <= SH.count || (SH = {
```

#### 1363. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15445` → after: `L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15445) · [Before (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15445)

```diff
-                     category: AU.gameCategoryId,
+                     category: hH.gameCategoryId,
```

#### 1364. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15447-L15449` → after: `L15447-L15449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15447-L15449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15447-L15449) · [Before (L15447-L15449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15447-L15449)

```diff
-                       x: FU.x,
-                       z: FU.z,
-                       y: FU.busiestY
+                       x: tH.x,
+                       z: tH.z,
+                       y: tH.busiestY
```

#### 1365. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15451-L15454` → after: `L15451-L15454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15451-L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15451-L15454) · [Before (L15451-L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15451-L15454)

```diff
-                     count: FU.count,
-                     total: yU,
-                     death: "" === zU.eventValue ? null : `${zU.eventType}: ${zU.eventValue}`,
-                     selection: SZ(AU, zU)
+                     count: tH.count,
+                     total: rH,
+                     death: "" === LH.eventValue ? null : `${LH.eventType}: ${LH.eventValue}`,
+                     selection: oT(hH, LH)
```

#### 1366. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15457-L15459` → after: `L15457-L15459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15457-L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15457-L15459) · [Before (L15457-L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15457-L15459)

```diff
-               return null === QU ? null : {
-                 ...QU,
-                 score: (QU.count / QU.total - kZ) * yU
+               return null === SH ? null : {
+                 ...SH,
+                 score: (SH.count / SH.total - uT) * rH
```

#### 1367. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15461-L15472` → after: `L15461-L15472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15461-L15472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15461-L15472) · [Before (L15461-L15472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15461-L15472)

```diff
-             }(UU, oU)) && void 0 !== yU ? yU : rZ(UU, oU),
-             pU = null !== NU && (0 === YU.length || NU.score > YU[0].score) ? [NU, ...YU] : YU,
-             aU = (null === IU ? pU : [...pU, IU]).map((UU => FU ? {
-               ...UU,
-               fewPlayers: AU
-             } : UU)),
-             tU = iZ(UU, QU);
-           return null === tU ? aU : [...aU, tU]
-         }
- 
-         function MZ(UU) {
-           return ` ${UU.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const vZ=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function VZ(UU,XU){const zU=MZ(XU);switch(UU.kind){case"step":{const XU=function(UU){var XU,zU;return null!==(XU … [truncated]
+             }(HH, zH)) && void 0 !== rH ? rH : IT(HH, zH),
+             uH = null !== GH && (0 === XH.length || GH.score > XH[0].score) ? [GH, ...XH] : XH,
+             QH = (null === YH ? uH : [...uH, YH]).map((HH => tH ? {
+               ...HH,
+               fewPlayers: hH
+             } : HH)),
+             WH = KT(HH, SH);
+           return null === WH ? QH : [...QH, WH]
+         }
+ 
+         function eT(HH) {
+           return ` ${HH.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const qT=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function gT(HH,BH){const LH=eT(BH);switch(HH.kind){case"step":{const BH=function(HH){var BH,LH;return null!==(BH … [truncated]
```

#### 1368. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15474` → after: `L15474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15474) · [Before (L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15474)

```diff
-             XU[1]
+             BH[1]
```

#### 1369. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15477` → after: `L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15477) · [Before (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15477)

```diff
-             XU[2]
+             BH[2]
```

#### 1370. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15479` → after: `L15479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15479) · [Before (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15479)

```diff
-           `]}(UU).some((UU=>function(UU,XU){const zU=MZ(XU).trim();return""!==zU&&UU.includes(`
+           `]}(HH).some((HH=>function(HH,BH){const LH=eT(BH).trim();return""!==LH&&HH.includes(`
```

#### 1371. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15481` → after: `L15481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15481) · [Before (L15481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15481)

```diff
-             zU
+             LH
```

#### 1372. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15483` → after: `L15483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15483) · [Before (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15483)

```diff
-           `)}(zU,UU)));return cU(UU.to)||cU(UU.from)&&null!==XU&&zU.includes(`
+           `)}(LH,HH)));return AH(HH.to)||AH(HH.from)&&null!==BH&&LH.includes(`
```

#### 1373. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15485` → after: `L15485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15485) · [Before (L15485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15485)

```diff
-             XU
+             BH
```

#### 1374. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15487` → after: `L15487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15487) · [Before (L15487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15487)

```diff
-           `)}case"deaths":case"place":{const{square:zU}=UU;return function(UU){return[...UU.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((UU=>({x:Number(UU[1]),z:Number(UU[2])})))}(XU).some((UU=>function(UU,XU){return UU.x>=XU.x&&UU.x<XU.x+ha&&UU.z>=X … [truncated]
+           `)}case"deaths":case"place":{const{square:LH}=HH;return function(HH){return[...HH.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((HH=>({x:Number(HH[1]),z:Number(HH[2])})))}(BH).some((HH=>function(HH,BH){return HH.x>=BH.x&&HH.x<BH.x+iQ&&HH.z>=B … [truncated]
```

#### 1375. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15489` → after: `L15489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15489) · [Before (L15489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15489)

```diff
-             cU
+             AH
```

#### 1376. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15493` → after: `L15493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15493) · [Before (L15493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15493)

```diff
-             cU
+             AH
```

#### 1377. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15497` → after: `L15497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15497) · [Before (L15497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15497)

```diff
-             cU
+             AH
```

#### 1378. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15501` → after: `L15501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15501) · [Before (L15501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15501)

```diff
-             cU
+             AH
```

#### 1379. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15505` → after: `L15505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15505) · [Before (L15505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15505)

```diff
-             UU
+             HH
```

#### 1380. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15507` → after: `L15507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15507) · [Before (L15507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15507)

```diff
-           `)))}}}function sZ(UU,XU,zU){if("young"===zU){var cU;const zU=[UU.reduce(((UU,XU)=>"unseen"!==XU.kind&&(null===UU||XU.score>UU.score)?XU:UU),null),null!==(cU=UU.find((UU=>"unseen"===UU.kind)))&&void 0!==cU?cU:null].find((UU=>null!==UU&&!VZ(UU,XU)));return void 0===zU||n … [truncated]
+           `)))}}}function NT(HH,BH,LH){if("young"===LH){var AH;const LH=[HH.reduce(((HH,BH)=>"unseen"!==BH.kind&&(null===HH||BH.score>HH.score)?BH:HH),null),null!==(AH=HH.find((HH=>"unseen"===HH.kind)))&&void 0!==AH?AH:null].find((HH=>null!==HH&&!gT(HH,BH)));return void 0===LH||n … [truncated]
```

#### 1381. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15509` → after: `L15509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15509) · [Before (L15509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15509)

```diff
-             UU
+             HH
```

#### 1382. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15512` → after: `L15512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15512) · [Before (L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15512)

```diff
-             cU[2]
+             AH[2]
```

#### 1383. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15516` → after: `L15516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15516) · [Before (L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15516)

```diff
-             UU
+             HH
```

#### 1384. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15519` → after: `L15519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15519) · [Before (L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15519)

```diff
-             XU
+             BH
```

#### 1385. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15523` → after: `L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15523) · [Before (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15523)

```diff
-             UU.x
+             HH.x
```

#### 1386. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15526` → after: `L15526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15526) · [Before (L15526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15526)

```diff
-             UU.x + zU
+             HH.x + LH
```

#### 1387. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15528` → after: `L15528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15528) · [Before (L15528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15528)

```diff
-             UU.z
+             HH.z
```

#### 1388. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15531` → after: `L15531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15531) · [Before (L15531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15531)

```diff
-             UU.z + zU
+             HH.z + LH
```

#### 1389. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15534` → after: `L15534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15534) · [Before (L15534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15534)

```diff
-             XU ? ` (height y ${UU.y})` : ""
+             BH ? ` (height y ${HH.y})` : ""
```

#### 1390. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15538` → after: `L15538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15538) · [Before (L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15538)

```diff
-             UU.x + XU
+             HH.x + BH
```

#### 1391. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15540` → after: `L15540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15540) · [Before (L15540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15540)

```diff
-             UU.z + XU
+             HH.z + BH
```

#### 1392. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15544` → after: `L15544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15544) · [Before (L15544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15544)

```diff
-             XU("deaths")
+             BH("deaths")
```

#### 1393. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15546` → after: `L15546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15546) · [Before (L15546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15546)

```diff
-           `];const zU=UU.indexOf(": "),cU=-1===zU?null:function(UU){const XU=UU.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((UU=>""!==UU));return XU.length>0&&XU.length<=3&&XU.every((UU=>/^[A-Za-z]+$/.test(UU)&&!/^[a-z]{3,}ed$/i.test(UU)&&!JZ.test(UU.toLowerCase()) … [truncated]
+           `];const LH=HH.indexOf(": "),AH=-1===LH?null:function(HH){const BH=HH.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((HH=>""!==HH));return BH.length>0&&BH.length<=3&&BH.every((HH=>/^[A-Za-z]+$/.test(HH)&&!/^[a-z]{3,}ed$/i.test(HH)&&!DT.test(HH.toLowerCase()) … [truncated]
```

#### 1394. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15548` → after: `L15548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15548) · [Before (L15548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15548)

```diff
-             XU("deaths logged as")
+             BH("deaths logged as")
```

#### 1395. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15552` → after: `L15552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15552) · [Before (L15552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15552)

```diff
-             cU
+             AH
```

#### 1396. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15555` → after: `L15555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15555) · [Before (L15555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15555)

```diff
-             XU("deaths")
+             BH("deaths")
```

#### 1397. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15559` → after: `L15559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15559) · [Before (L15559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15559)

```diff
-             UU.to
+             HH.to
```

#### 1398. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15562` → after: `L15562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15562) · [Before (L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15562)

```diff
-             zU("or later")
+             LH("or later")
```

#### 1399. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15566` → after: `L15566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15566) · [Before (L15566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15566)

```diff
-             (0, MQ.b)(UU.group)
+             (0, RS.b)(HH.group)
```

#### 1400. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15568` → after: `L15568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15568) · [Before (L15568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15568)

```diff
-             UU.from
+             HH.from
```

#### 1401. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15571` → after: `L15571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15571) · [Before (L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15571)

```diff
-             UU.to
+             HH.to
```

#### 1402. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15575` → after: `L15575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15575) · [Before (L15575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15575)

```diff
-             (0, MQ.l)(UU.lost)
+             (0, RS.f)(HH.lost)
```

#### 1403. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15578` → after: `L15578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15578) · [Before (L15578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15578)

```diff
-             zU("of the")
+             LH("of the")
```

#### 1404. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15581` → after: `L15581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15581) · [Before (L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15581)

```diff
-             (0, MQ.l)(UU.fromPlayers)
+             (0, RS.f)(HH.fromPlayers)
```

#### 1405. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15584` → after: `L15584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15584) · [Before (L15584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15584)

```diff
-             zU("players who reached")
+             LH("players who reached")
```

#### 1406. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15587` → after: `L15587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15587) · [Before (L15587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15587)

```diff
-             UU.from
+             HH.from
```

#### 1407. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15590` → after: `L15590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15590) · [Before (L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15590)

```diff
-             zU("didn't reach")
+             LH("didn't reach")
```

#### 1408. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15593` → after: `L15593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15593) · [Before (L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15593)

```diff
-             yU
+             rH
```

#### 1409. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15595` → after: `L15595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15595) · [Before (L15595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15595)

```diff
-             oU
+             zH
```

#### 1410. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15598` → after: `L15598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15598) · [Before (L15598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15598)

```diff
-             QU
+             SH
```

#### 1411. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15601` → after: `L15601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15601) · [Before (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15601)

```diff
-             zU("in 100 players who get to")
+             LH("in 100 players who get to")
```

#### 1412. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15604` → after: `L15604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15604) · [Before (L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15604)

```diff
-             UU.from
+             HH.from
```

#### 1413. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15607` → after: `L15607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15607) · [Before (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15607)

```diff
-             zU("don't get to")
+             LH("don't get to")
```

#### 1414. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15610` → after: `L15610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15610) · [Before (L15610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15610)

```diff
-             yU
+             rH
```

#### 1415. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15614` → after: `L15614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15614) · [Before (L15614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15614)

```diff
-             QU
+             SH
```

#### 1416. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15617` → after: `L15617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15617) · [Before (L15617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15617)

```diff
-             zU("of every 100 players who reach")
+             LH("of every 100 players who reach")
```

#### 1417. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15620` → after: `L15620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15620) · [Before (L15620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15620)

```diff
-             UU.from
+             HH.from
```

#### 1418. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15622` → after: `L15622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15622) · [Before (L15622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15622)

```diff
-             (0, MQ.l)(UU.fromPlayers)
+             (0, RS.f)(HH.fromPlayers)
```

#### 1419. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15624` → after: `L15624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15624) · [Before (L15624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15624)

```diff
-             zU("don't reach")
+             LH("don't reach")
```

#### 1420. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15627` → after: `L15627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15627) · [Before (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15627)

```diff
-             yU
+             rH
```

#### 1421. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15629` → after: `L15629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15629) · [Before (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15629)

```diff
-             (0, MQ.l)(UU.fromPlayers - UU.lost)
+             (0, RS.f)(HH.fromPlayers - HH.lost)
```

#### 1422. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15631` → after: `L15631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15631) · [Before (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15631)

```diff
-             oU
+             zH
```

#### 1423. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15635` → after: `L15635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15635) · [Before (L15635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15635)

```diff
-             QU
+             SH
```

#### 1424. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15638` → after: `L15638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15638) · [Before (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15638)

```diff
-             zU("of every 100 players who reach")
+             LH("of every 100 players who reach")
```

#### 1425. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15641` → after: `L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15641) · [Before (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15641)

```diff
-             UU.from
+             HH.from
```

#### 1426. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15644` → after: `L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15644) · [Before (L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15644)

```diff
-             zU("don't reach")
+             LH("don't reach")
```

#### 1427. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15647` → after: `L15647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15647) · [Before (L15647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15647)

```diff
-             yU
+             rH
```

#### 1428. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15649` → after: `L15649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15649) · [Before (L15649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15649)

```diff
-               (0, MQ.l)(UU.lost)
+               (0, RS.f)(HH.lost)
```

#### 1429. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15652` → after: `L15652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15652) · [Before (L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15652)

```diff
-               zU("of")
+               LH("of")
```

#### 1430. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15655` → after: `L15655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15655) · [Before (L15655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15655)

```diff
-               (0, MQ.l)(UU.fromPlayers)
+               (0, RS.f)(HH.fromPlayers)
```

#### 1431. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15657` → after: `L15657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15657) · [Before (L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15657)

```diff
-               oU
+               zH
```

#### 1432. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15660` → after: `L15660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15660) · [Before (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15660)

```diff
-             zU("in")
+             LH("in")
```

#### 1433. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15663` → after: `L15663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15663) · [Before (L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15663)

```diff
-             UU.category
+             HH.category
```

#### 1434. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15667` → after: `L15667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15667) · [Before (L15667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15667)

```diff
-             (0, MQ.l)(UU.count)
+             (0, RS.f)(HH.count)
```

#### 1435. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15670` → after: `L15670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15670) · [Before (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15670)

```diff
-             zU("of")
+             LH("of")
```

#### 1436. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15673` → after: `L15673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15673) · [Before (L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15673)

```diff
-             (0, MQ.l)(UU.total)
+             (0, RS.f)(HH.total)
```

#### 1437. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15675` → after: `L15675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15675) · [Before (L15675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15675)

```diff
-           `:null,AU=nZ(UU.count,UU.total),FU=jZ(UU.death,zU);return XU?{label:2*UU.count>UU.total?zU("Most deaths"):zU("Many deaths"),parts:[null!==QU&&void 0!==QU?QU:`
+           `:null,hH=RT(HH.count,HH.total),tH=wT(HH.death,LH);return BH?{label:2*HH.count>HH.total?LH("Most deaths"):LH("Many deaths"),parts:[null!==SH&&void 0!==SH?SH:`
```

#### 1438. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15677` → after: `L15677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15677) · [Before (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15677)

```diff
-             AU
+             hH
```

#### 1439. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15680` → after: `L15680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15680) · [Before (L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15680)

```diff
-             zU("in 100")
+             LH("in 100")
```

#### 1440. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15684` → after: `L15684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15684) · [Before (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15684)

```diff
-             zU("happen near")
+             LH("happen near")
```

#### 1441. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15687` → after: `L15687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15687) · [Before (L15687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15687)

```diff
-             xZ(UU.square)
+             FT(HH.square)
```

#### 1442. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15690` → after: `L15690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15690) · [Before (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15690)

```diff
-             yU
+             rH
```

#### 1443. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15694` → after: `L15694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15694) · [Before (L15694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15694)

```diff
-             zU("Death hotspot")
+             LH("Death hotspot")
```

#### 1444. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15697` → after: `L15697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15697) · [Before (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15697)

```diff
-             yU
+             rH
```

#### 1445. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15699` → after: `L15699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15699) · [Before (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15699)

```diff
-           `,parts:[null!==QU&&void 0!==QU?QU:`
+           `,parts:[null!==SH&&void 0!==SH?SH:`
```

#### 1446. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15701` → after: `L15701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15701) · [Before (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15701)

```diff
-             AU
+             hH
```

#### 1447. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15704` → after: `L15704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15704) · [Before (L15704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15704)

```diff
-             zU("of every 100")
+             LH("of every 100")
```

#### 1448. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15708` → after: `L15708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15708) · [Before (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15708)

```diff
-             yU
+             rH
```

#### 1449. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15711` → after: `L15711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15711) · [Before (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15711)

```diff
-             zU("in the past week happened at")
+             LH("in the past week happened at")
```

#### 1450. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15714` → after: `L15714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15714) · [Before (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15714)

```diff
-             lZ(UU.square)
+             nT(HH.square)
```

#### 1451. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15718` → after: `L15718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15718) · [Before (L15718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15718)

```diff
-             zU("in")
+             LH("in")
```

#### 1452. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15721` → after: `L15721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15721) · [Before (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15721)

```diff
-             UU.category
+             HH.category
```

#### 1453. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15725` → after: `L15725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15725) · [Before (L15725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15725)

```diff
-             zU("near")
+             LH("near")
```

#### 1454. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15728` → after: `L15728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15728) · [Before (L15728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15728)

```diff
-             xZ(UU.square)
+             FT(HH.square)
```

#### 1455. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15731` → after: `L15731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15731) · [Before (L15731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15731)

```diff
-             cU
+             AH
```

#### 1456. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15733` → after: `L15733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15733) · [Before (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15733)

```diff
-             yU
+             rH
```

#### 1457. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15736` → after: `L15736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15736) · [Before (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15736)

```diff
-             zU("in 100 minutes of play")
+             LH("in 100 minutes of play")
```

#### 1458. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15740` → after: `L15740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15740) · [Before (L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15740)

```diff
-             lZ(XU, !1)
+             nT(BH, !1)
```

#### 1459. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15742` → after: `L15742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15742) · [Before (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15742)

```diff
-               nZ(cU, 1)
+               RT(AH, 1)
```

#### 1460. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15745` → after: `L15745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15745) · [Before (L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15745)

```diff
-               zU("of 100")
+               LH("of 100")
```

#### 1461. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15748` → after: `L15748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15748) · [Before (L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15748)

```diff
-             zU("Busiest place")
+             LH("Busiest place")
```

#### 1462. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15751` → after: `L15751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15751) · [Before (L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15751)

```diff
-             cU
+             AH
```

#### 1463. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15755` → after: `L15755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15755) · [Before (L15755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15755)

```diff
-             lZ(UU.square)
+             nT(HH.square)
```

#### 1464. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15757` → after: `L15757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15757) · [Before (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15757)

```diff
-             zU("with")
+             LH("with")
```

#### 1465. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15760` → after: `L15760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15760) · [Before (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15760)

```diff
-             yU
+             rH
```

#### 1466. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15763` → after: `L15763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15763) · [Before (L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15763)

```diff
-             zU("of every 100 minutes played")
+             LH("of every 100 minutes played")
```

#### 1467. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15766` → after: `L15766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15766) · [Before (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15766)

```diff
-             0 === QU.length ? "" : `; ${zU("next busiest")}: ${QU.join(", ")}`
+             0 === SH.length ? "" : `; ${LH("next busiest")}: ${SH.join(", ")}`
```

#### 1468. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15770` → after: `L15770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15770) · [Before (L15770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15770)

```diff
-             cU
+             AH
```

#### 1469. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15772` → after: `L15772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15772) · [Before (L15772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15772)

```diff
-             (0, MQ.l)(yU)
+             (0, RS.f)(rH)
```

#### 1470. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15775` → after: `L15775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15775) · [Before (L15775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15775)

```diff
-             0 === XU ? ` ${zU("players")}` : ""
+             0 === BH ? ` ${LH("players")}` : ""
```

#### 1471. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15779` → after: `L15779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15779) · [Before (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15779)

```diff
-             zU("Players per")
+             LH("Players per")
```

#### 1472. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15782` → after: `L15782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15782) · [Before (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15782)

```diff
-             UU.eventType
+             HH.eventType
```

#### 1473. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15785` → after: `L15785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15785) · [Before (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15785)

```diff
-             zU("event")
+             LH("event")
```

#### 1474. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15789` → after: `L15789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15789) · [Before (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15789)

```diff
-             zU("Players at each")
+             LH("Players at each")
```

#### 1475. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15792` → after: `L15792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15792) · [Before (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15792)

```diff
-             UU.eventType
+             HH.eventType
```

#### 1476. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15795` → after: `L15795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15795) · [Before (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15795)

```diff
-             mZ(QU.from, QU.to)
+             jT(SH.from, SH.to)
```

#### 1477. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15798` → after: `L15798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15798) · [Before (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15798)

```diff
-             QU.isOrLater ? ` ${zU("or later")}` : ""
+             SH.isOrLater ? ` ${LH("or later")}` : ""
```

#### 1478. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15801` → after: `L15801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15801) · [Before (L15801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15801)

```diff
-             zU("loses the most")
+             LH("loses the most")
```

#### 1479. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15803` → after: `L15803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15803) · [Before (L15803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15803)

```diff
-             (0, MQ.l)(QU.fromPlayers)
+             (0, RS.f)(SH.fromPlayers)
```

#### 1480. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15806` → after: `L15806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15806) · [Before (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15806)

```diff
-             (0, MQ.l)(QU.reached)
+             (0, RS.f)(SH.reached)
```

#### 1481. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15809` → after: `L15809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15809) · [Before (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15809)

```diff
-             zU("players")
+             LH("players")
```

#### 1482. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15813` → after: `L15813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15813) · [Before (L15813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15813)

```diff
-             yU
+             rH
```

#### 1483. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15815` → after: `L15815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15815) · [Before (L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15815)

```diff
-             XU.join(", ")
+             BH.join(", ")
```

#### 1484. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15818` → after: `L15818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15818) · [Before (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15818)

```diff
-             UU.hasMore ? ", \u2026" : ""
+             HH.hasMore ? ", \u2026" : ""
```

#### 1485. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15821` → after: `L15821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15821) · [Before (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15821)

```diff
-             AU
+             hH
```

#### 1486. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15825` → after: `L15825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15825) · [Before (L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15825)

```diff
-             yU
+             rH
```

#### 1487. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15828` → after: `L15828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15828) · [Before (L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15828)

```diff
-             zU("This line, first inside")
+             LH("This line, first inside")
```

#### 1488. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15831` → after: `L15831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15831) · [Before (L15831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15831)

```diff
-             zU("would log it")
+             LH("would log it")
```

#### 1489. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15834` → after: `L15834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15834) · [Before (L15834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15834)

```diff
-             zU("between minute")
+             LH("between minute")
```

#### 1490. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15837` → after: `L15837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15837) · [Before (L15837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15837)

```diff
-             UU.minute - 1
+             HH.minute - 1
```

#### 1491. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15840` → after: `L15840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15840) · [Before (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15840)

```diff
-             zU("and")
+             LH("and")
```

#### 1492. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15843` → after: `L15843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15843) · [Before (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15843)

```diff
-             UU.minute
+             HH.minute
```

#### 1493. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15847` → after: `L15847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15847) · [Before (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15847)

```diff
-             zU("Minute")
+             LH("Minute")
```

#### 1494. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15850` → after: `L15850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15850) · [Before (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15850)

```diff
-             UU.minute
+             HH.minute
```

#### 1495. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15854` → after: `L15854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15854) · [Before (L15854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15854)

```diff
-             UU.ended
+             HH.ended
```

#### 1496. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15857` → after: `L15857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15857) · [Before (L15857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15857)

```diff
-             zU("in 100 plays end")
+             LH("in 100 plays end")
```

#### 1497. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15860` → after: `L15860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15860) · [Before (L15860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15860)

```diff
-             cU
+             AH
```

#### 1498. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15862` → after: `L15862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15862) · [Before (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15862)

```diff
-             zU("most games")
+             LH("most games")
```

#### 1499. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15864` → after: `L15864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15864) · [Before (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15864)

```diff
-             UU.typicalEnded
+             HH.typicalEnded
```

#### 1500. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15867` → after: `L15867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15867) · [Before (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15867)

```diff
-             UU.ended
+             HH.ended
```

#### 1501. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15870` → after: `L15870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15870) · [Before (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15870)

```diff
-             zU("of every 100 sessions end")
+             LH("of every 100 sessions end")
```

#### 1502. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15873` → after: `L15873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15873) · [Before (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15873)

```diff
-             cU
+             AH
```

#### 1503. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15876` → after: `L15876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15876) · [Before (L15876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15876)

```diff
-             zU("in a typical Bloxd game")
+             LH("in a typical Bloxd game")
```

#### 1504. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15878` → after: `L15878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15878) · [Before (L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15878)

```diff
-             UU.typicalEnded
+             HH.typicalEnded
```

#### 1505. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15881` → after: `L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15881) · [Before (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15881)

```diff
-             zU("do")
+             LH("do")
```

#### 1506. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15885` → after: `L15885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15885) · [Before (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15885)

```diff
-             zU("Only")
+             LH("Only")
```

#### 1507. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15888` → after: `L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15888) · [Before (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15888)

```diff
-             (0, MQ.l)(UU.fewPlayers)
+             (0, RS.f)(HH.fewPlayers)
```

#### 1508. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15891` → after: `L15891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15891) · [Before (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15891)

```diff
-             zU("players this week, so this is a hint.")
+             LH("players this week, so this is a hint.")
```

#### 1509. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15895` → after: `L15895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15895) · [Before (L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15895)

```diff
-             zU("Only")
+             LH("Only")
```

#### 1510. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15898` → after: `L15898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15898) · [Before (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15898)

```diff
-             (0, MQ.l)(UU.fewPlayers)
+             (0, RS.f)(HH.fewPlayers)
```

#### 1511. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15901` → after: `L15901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15901) · [Before (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15901)

```diff
-             zU("players this week, so this is a hint:")
+             LH("players this week, so this is a hint:")
```

#### 1512. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15905` → after: `L15905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15905) · [Before (L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15905)

```diff
-             AU
+             hH
```

#### 1513. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15908` → after: `L15908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15908) · [Before (L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15908)

```diff
-             yU
+             rH
```

#### 1514. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15910` → after: `L15910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15910) · [Before (L15910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15910)

```diff
-           `,...QU]:[AU,...cU.parts]}}function TZ(UU,XU){var zU,cU;const yU=null!==(zU=null===(cU=UU.stats)||void 0===cU?void 0:cU.rankingWindow.uniquePlayers)&&void 0!==zU?zU:0;return UU.heatmaps.flatMap((zU=>zU.events.flatMap((cU=>{if(!hN(cU.eventType)||null!==IE(cU.eventType,cU … [truncated]
+           `,...SH]:[hH,...AH.parts]}}function aT(HH,BH){var LH,AH;const rH=null!==(LH=null===(AH=HH.stats)||void 0===AH?void 0:AH.rankingWindow.uniquePlayers)&&void 0!==LH?LH:0;return HH.heatmaps.flatMap((LH=>LH.events.flatMap((AH=>{if(!pG(AH.eventType)||null!==GE(AH.eventType,AH … [truncated]
```

#### 1515. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15912` → after: `L15912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15912) · [Before (L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15912)

```diff
-             cU.eventType
+             AH.eventType
```

#### 1516. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15914` → after: `L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15914) · [Before (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15914)

```diff
-             cU.eventValue
+             AH.eventValue
```

#### 1517. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15916` → after: `L15916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15916) · [Before (L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15916)

```diff
-           `,selection:SZ(zU,cU),score:(FU.count/AU-kZ)*yU}]}))))}function hZ(UU){var XU,zU;if((null!==(XU=null===(zU=UU.stats)||void 0===zU?void 0:zU.rankingWindow.uniquePlayers)&&void 0!==XU?XU:0)<DZ)return[];const cU=OZ(UU,la(UU),DZ),yU=rZ(UU,DZ);return[...null===cU?[]:[cU],... … [truncated]
+           `,selection:oT(LH,AH),score:(tH.count/hH-uT)*rH}]}))))}function sT(HH){var BH,LH;if((null!==(BH=null===(LH=HH.stats)||void 0===LH?void 0:LH.rankingWindow.uniquePlayers)&&void 0!==BH?BH:0)<ST)return[];const AH=mT(HH,DQ(HH),ST),rH=IT(HH,ST);return[...null===AH?[]:[AH],... … [truncated]
```

#### 1518. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15918` → after: `L15918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15918) · [Before (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15918)

```diff
-             XU[zU - 1]
+             BH[LH - 1]
```

#### 1519. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15921` → after: `L15921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15921) · [Before (L15921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15921)

```diff
-             UU
+             HH
```

#### 1520. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15923` → after: `L15923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15923) · [Before (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15923)

```diff
-           `])).some((UU=>zR.test(UU)))&&!XU.some((UU=>cR.test(UU)))}(bF(UU.to))&&UU.players>=XR&&UU.players>=UU.fromPlayers*UR));if(1!==yU.length)return null;const[QU]=yU;return{step:XU.from,fromPlayers:QU.fromPlayers,event:bF(QU.to),players:QU.players}}function AR(UU){return UU. … [truncated]
+           `])).some((HH=>pT.test(HH)))&&!BH.some((HH=>yT.test(HH)))}(pt(HH.to))&&HH.players>=iT&&HH.players>=HH.fromPlayers*JT));if(1!==rH.length)return null;const[SH]=rH;return{step:BH.from,fromPlayers:SH.fromPlayers,event:pt(SH.to),players:SH.players}}function LU(HH){return HH. … [truncated]
```

#### 1521. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15925-L15926` → after: `L15925-L15926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15925-L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15925-L15926) · [Before (L15925-L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15925-L15926)

```diff
-             AU.params[yU]
-           })`;return Np(QU,AU.callback,AU.params[XU],zU,FU,cU)}}function GR(UU){return XU=>{const zU=tp(XU,[]);return null!==zU&&UU.test(zU.code)?zU:null}}const BR=new Set(["finish","finished","win","won","done","complete","completed","escape","escaped","victory"]),ZR=new Set(["e … [truncated]
+             hH.params[rH]
+           })`;return Xu(SH,hH.callback,hH.params[BH],LH,tH,AH)}}function QU(HH){return BH=>{const LH=Qu(BH,[]);return null!==LH&&HH.test(LH.code)?LH:null}}const WU=new Set(["finish","finished","win","won","done","complete","completed","escape","escaped","victory"]),MU=new Set(["e … [truncated]
```

#### 1522. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15928` → after: `L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15928) · [Before (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15928)

```diff
-             XU("and")
+             BH("and")
```

#### 1523. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15932` → after: `L15932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15932) · [Before (L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15932)

```diff
-             UU
+             HH
```

#### 1524. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15935` → after: `L15935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15935) · [Before (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15935)

```diff
-             XU
+             BH
```

#### 1525. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15937` → after: `L15937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15937) · [Before (L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15937)

```diff
-           `.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/_/g," "))}function lR(UU,XU){return UU.filter((UU=>UU.fromPlayers>=Math.max(iR,XU*HR)&&1-UU.reached/UU.fromPlayers>fR)).sort(((UU,XU)=>UU.reached/UU.fromPlayers-XU.reached/XU.fromPlayers||XU.fromPlayers-XU.reached-(UU.fro … [truncated]
+           `.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/_/g," "))}function nU(HH,BH){return HH.filter((HH=>HH.fromPlayers>=Math.max(KU,BH*cU)&&1-HH.reached/HH.fromPlayers>lU)).sort(((HH,BH)=>HH.reached/HH.fromPlayers-BH.reached/BH.fromPlayers||BH.fromPlayers-BH.reached-(HH.fro … [truncated]
```

#### 1526. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15939` → after: `L15939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15939) · [Before (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15939)

```diff
-             oU.from.split(" / ").slice(0, -1).join(" / ")
+             zH.from.split(" / ").slice(0, -1).join(" / ")
```

#### 1527. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15941` → after: `L15941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15941) · [Before (L15941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15941)

```diff
-             UU.type
+             HH.type
```

#### 1528. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15943` → after: `L15943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15943) · [Before (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15943)

```diff
-           `,cU=null!==(AU=QU.get(zU))&&void 0!==AU?AU:{steps:[],firstPlayers:0,lastFrom:oU.from,lastNumber:-1/0};cU.steps.push({from:nR(oU.from),to:nR(oU.to),fromPlayers:oU.fromPlayers,reached:oU.players,isEnd:!1}),cU.firstPlayers=Math.max(cU.firstPlayers,oU.fromPlayers),XU.to>cU … [truncated]
+           `,AH=null!==(hH=SH.get(LH))&&void 0!==hH?hH:{steps:[],firstPlayers:0,lastFrom:zH.from,lastNumber:-1/0};AH.steps.push({from:RU(zH.from),to:RU(zH.to),fromPlayers:zH.fromPlayers,reached:zH.players,isEnd:!1}),AH.firstPlayers=Math.max(AH.firstPlayers,zH.fromPlayers),BH.to>AH … [truncated]
```

#### 1529. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15945` → after: `L15945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15945) · [Before (L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15945)

```diff
-             XU.type
+             BH.type
```

#### 1530. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15948` → after: `L15948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15948) · [Before (L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15948)

```diff
-             XU.value
+             BH.value
```

#### 1531. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15950-L15951` → after: `L15950-L15951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15950-L15951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15950-L15951) · [Before (L15950-L15951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15950-L15951)

```diff
-           `)})),zU=void 0===UU?oU.steps:[...oU.steps,{from:nR(UU.from),to:nR(UU.to),fromPlayers:UU.fromPlayers,reached:UU.players,isEnd:!0}];zU.length>=uR&&oU.firstPlayers>=XU&&(null===FU||oU.firstPlayers>FU.firstPlayers)&&(FU={steps:zU,firstPlayers:oU.firstPlayers})}return FU}(U … [truncated]
-             XU.toLocaleString("en-US")
+           `)})),LH=void 0===HH?zH.steps:[...zH.steps,{from:RU(HH.from),to:RU(HH.to),fromPlayers:HH.fromPlayers,reached:HH.players,isEnd:!0}];LH.length>=fU&&zH.firstPlayers>=BH&&(null===tH||zH.firstPlayers>tH.firstPlayers)&&(tH={steps:LH,firstPlayers:zH.firstPlayers})}return tH}(H … [truncated]
+             BH.toLocaleString("en-US")
```

#### 1532. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15953` → after: `L15953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15953) · [Before (L15953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15953)

```diff
-             XU
+             BH
```

#### 1533. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15956` → after: `L15956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15956) · [Before (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15956)

```diff
-             zU(UU.fromPlayers)
+             LH(HH.fromPlayers)
```

#### 1534. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15959-L15960` → after: `L15959-L15960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15959-L15960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15959-L15960) · [Before (L15959-L15960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15959-L15960)

```diff
-             zU(UU.reached)
-           }( ? ![\\d] | [, .]\\ d)`);return(0,vQ.e)(XU,cU,(0,vQ.j)("\\d,.")).length>0}(UU,zU))).slice(0,"young"===cU?0:Pt(cU)?VR:vR)}function UP(UU,XU,zU,cU){const yU=Pt(zU),QU=XU[0]===UU.steps[0],AU=cU(QU?"Hardest steps":"Next hardest steps"),FU="week"===UU.since?cU("past week") … [truncated]
+             LH(HH.reached)
+           }( ? ![\\d] | [, .]\\ d)`);return(0,jS.c)(BH,AH,(0,jS.i)("\\d,.")).length>0}(HH,LH))).slice(0,"young"===AH?0:PW(AH)?gU:qU)}function JU(HH,BH,LH,AH){const rH=PW(LH),SH=BH[0]===HH.steps[0],hH=AH(SH?"Hardest steps":"Next hardest steps"),tH="week"===HH.since?AH("past week") … [truncated]
```

#### 1535. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15962` → after: `L15962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15962) · [Before (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15962)

```diff
-             AU
+             hH
```

#### 1536. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15964` → after: `L15964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15964) · [Before (L15964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15964)

```diff
-             FU
+             tH
```

#### 1537. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15967` → after: `L15967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15967) · [Before (L15967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15967)

```diff
-             cU("get to")
+             AH("get to")
```

#### 1538. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15970` → after: `L15970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15970) · [Before (L15970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15970)

```diff
-             XU.to
+             BH.to
```

#### 1539. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15974` → after: `L15974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15974) · [Before (L15974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15974)

```diff
-             UU.isFew ? `${(0,MQ.l)(QU)} ${cU("of the")} ${(0,MQ.l)(XU.fromPlayers)}` : `${AU=QU,FU=XU.fromPlayers,String(AU>0?Math.max(1,Math.round(AU/FU*100)):0)} ${cU("in 100")}`
+             HH.isFew ? `${(0,RS.f)(SH)} ${AH("of the")} ${(0,RS.f)(BH.fromPlayers)}` : `${hH=SH,tH=BH.fromPlayers,String(hH>0?Math.max(1,Math.round(hH/tH*100)):0)} ${AH("in 100")}`
```

#### 1540. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15977` → after: `L15977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15977) · [Before (L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15977)

```diff
-             cU("players who get to")
+             AH("players who get to")
```

#### 1541. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15980` → after: `L15980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15980) · [Before (L15980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15980)

```diff
-             XU.from
+             BH.from
```

#### 1542. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15983` → after: `L15983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15983) · [Before (L15983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15983)

```diff
-             cU("don't")
+             AH("don't")
```

#### 1543. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15986` → after: `L15986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15986) · [Before (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15986)

```diff
-             yU
+             rH
```

#### 1544. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15988` → after: `L15988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15988) · [Before (L15988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15988)

```diff
-           `,oU]}}var AU,FU;const DU=UU.isFew?(0,MQ.l)(QU):`
+           `,zH]}}var hH,tH;const CH=HH.isFew?(0,RS.f)(SH):`
```

#### 1545. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15990` → after: `L15990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15990) · [Before (L15990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15990)

```diff
-             Math.round(QU / XU.fromPlayers * 100)
+             Math.round(SH / BH.fromPlayers * 100)
```

#### 1546. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15993` → after: `L15993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15993) · [Before (L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15993)

```diff
-             (0, MQ.l)(XU.fromPlayers)
+             (0, RS.f)(BH.fromPlayers)
```

#### 1547. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15996` → after: `L15996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15996) · [Before (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15996)

```diff
-             (0, MQ.l)(XU.reached)
+             (0, RS.f)(BH.reached)
```

#### 1548. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L15999` → after: `L15999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR15999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L15999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L15999) · [Before (L15999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L15999)

```diff
-             cU("players")
+             AH("players")
```

#### 1549. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16001` → after: `L16001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16001) · [Before (L16001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16001)

```diff
-               DU
+               CH
```

#### 1550. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16004-L16005` → after: `L16004-L16005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16004-L16005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16004-L16005) · [Before (L16004-L16005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16004-L16005)

```diff
-               cU("get no further")
-             }) `,oU]}}))}}const XP=10,zP=.25,cP=.9,yP=20,QP=.15,AP=5,FP=/\b(?:checkpoint|wave|island|zone|level|stage|round|floor|room|chapter|world|step|part)s?\b/i,oP=3,DP=3,EP=2,YP=5,NP=new Set(["player","players","other","start","started","middle","minutes","seconds","count", … [truncated]
+               AH("get no further")
+             }) `,zH]}}))}}const iU=10,pU=.25,yU=.9,HV=20,BV=.15,LV=5,AV=/\b(?:checkpoint|wave|island|zone|level|stage|round|floor|room|chapter|world|step|part)s?\b/i,rV=3,SV=3,hV=2,tV=5,zV=new Set(["player","players","other","start","started","middle","minutes","seconds","count", … [truncated]
```

#### 1551. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16007` → after: `L16007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16007) · [Before (L16007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16007)

```diff
-             UU.eventType
+             HH.eventType
```

#### 1552. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16010` → after: `L16010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16010) · [Before (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16010)

```diff
-             zU
+             LH
```

#### 1553. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16012` → after: `L16012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16012) · [Before (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16012)

```diff
-           `))})))return null;const XU=Object.fromEntries(UU.values.map((UU=>{let{value:XU,players:zU}=UU;return[XU,zU]}))),zU=fp({[UU.gameCategory]:{[UU.eventType]:XU}},AP)[0];if(void 0===zU)return null;const cU=zU.steps.filter((UU=>UU.from.players>=AP&&1-UU.share>QP)).sort(((UU, … [truncated]
+           `))})))return null;const BH=Object.fromEntries(HH.values.map((HH=>{let{value:BH,players:LH}=HH;return[BH,LH]}))),LH=cu({[HH.gameCategory]:{[HH.eventType]:BH}},LV)[0];if(void 0===LH)return null;const AH=LH.steps.filter((HH=>HH.from.players>=LV&&1-HH.share>BV)).sort(((HH, … [truncated]
```

#### 1554. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16014` → after: `L16014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16014) · [Before (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16014)

```diff
-             aU
+             QH
```

#### 1555. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16016` → after: `L16016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16016) · [Before (L16016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16016)

```diff
-             tU
+             WH
```

#### 1556. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16018` → after: `L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16018) · [Before (L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16018)

```diff
-           `);var aU,tU;const gU="numbers"===EU.kind?"eventValues":"spot"===EU.kind?"heatmap":"playersPerEvent";return[{name:pU,eventType:XU.eventType,players:FU,names:aP(XU.eventType,XU.values.map((UU=>{let{value:XU}=UU;return XU}))),valueKeys:XU.values.flatMap((UU=>{let{value:XU … [truncated]
+           `);var QH,WH;const MH="numbers"===EH.kind?"eventValues":"spot"===EH.kind?"heatmap":"playersPerEvent";return[{name:uH,eventType:BH.eventType,players:tH,names:XV(BH.eventType,BH.values.map((HH=>{let{value:BH}=HH;return BH}))),valueKeys:BH.values.flatMap((HH=>{let{value:BH … [truncated]
```

#### 1557. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16020` → after: `L16020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16020) · [Before (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16020)

```diff
-             (0, MQ.K)(XU)
+             (0, RS.C)(BH)
```

#### 1558. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16022` → after: `L16022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16022) · [Before (L16022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16022)

```diff
-           `;return UU.names.some((UU=>{const XU=(0,MQ.K)(UU);return""!==XU&&(zU.includes(`
+           `;return HH.names.some((HH=>{const BH=(0,RS.C)(HH);return""!==BH&&(LH.includes(`
```

#### 1559. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16024` → after: `L16024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16024) · [Before (L16024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16024)

```diff
-             XU
+             BH
```

#### 1560. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16028` → after: `L16028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16028) · [Before (L16028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16028)

```diff
-             XU
+             BH
```

#### 1561. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16032` → after: `L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16032) · [Before (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16032)

```diff
-             XU
+             BH
```

#### 1562. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16034` → after: `L16034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16034) · [Before (L16034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16034)

```diff
-           es `))}))}function GP(UU,XU){const zU=UU.valueKeys.length<=XU.valueKeys.length?UU:XU,cU=new Set(zU===UU?XU.valueKeys:UU.valueKeys),yU=zU.valueKeys.filter((UU=>cU.has(UU))).length;return yU>0&&2*yU>=zU.valueKeys.length}function BP(UU,XU,zU){const cU="young"===XU,yU={stat … [truncated]
+           es `))}))}function QV(HH,BH){const LH=HH.valueKeys.length<=BH.valueKeys.length?HH:BH,AH=new Set(LH===HH?BH.valueKeys:HH.valueKeys),rH=LH.valueKeys.filter((HH=>AH.has(HH))).length;return rH>0&&2*rH>=LH.valueKeys.length}function WV(HH,BH,LH){const AH="young"===BH,rH={stat … [truncated]
```

#### 1563. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16036` → after: `L16036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16036) · [Before (L16036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16036)

```diff
-             ZP(UU, cU, QU, zU)
+             MV(HH, AH, SH, LH)
```

#### 1564. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16040` → after: `L16040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16040) · [Before (L16040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16040)

```diff
-             (0, MQ.l)(yU.players)
+             (0, RS.f)(rH.players)
```

#### 1565. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16043` → after: `L16043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16043) · [Before (L16043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16043)

```diff
-             cU("players so far")
+             AH("players so far")
```

#### 1566. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16047` → after: `L16047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16047) · [Before (L16047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16047)

```diff
-             (0, MQ.l)(yU.players)
+             (0, RS.f)(rH.players)
```

#### 1567. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16050` → after: `L16050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16050) · [Before (L16050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16050)

```diff
-             cU("players sent it")
+             AH("players sent it")
```

#### 1568. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16053` → after: `L16053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16053) · [Before (L16053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16053)

```diff
-             zU
+             LH
```

#### 1569. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16057` → after: `L16057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16057) · [Before (L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16057)

```diff
-             yU
+             rH
```

#### 1570. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16059` → after: `L16059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16059) · [Before (L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16059)

```diff
-             (0, MQ.l)(QU)
+             (0, RS.f)(SH)
```

#### 1571. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16062` → after: `L16062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16062) · [Before (L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16062)

```diff
-             0 === zU || XU ? ` ${cU("players")}` : ""
+             0 === LH || BH ? ` ${AH("players")}` : ""
```

#### 1572. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16066` → after: `L16066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16066) · [Before (L16066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16066)

```diff
-             UU.join(", ")
+             HH.join(", ")
```

#### 1573. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16069` → after: `L16069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16069) · [Before (L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16069)

```diff
-             yU.hasMore ? ", \u2026" : ""
+             rH.hasMore ? ", \u2026" : ""
```

#### 1574. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16073` → after: `L16073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16073) · [Before (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16073)

```diff
-             QU
+             SH
```

#### 1575. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16075` → after: `L16075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16075) · [Before (L16075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16075)

```diff
-             zU
+             LH
```

#### 1576. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16078` → after: `L16078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16078) · [Before (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16078)

```diff
-             QU
+             SH
```

#### 1577. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16080` → after: `L16080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16080) · [Before (L16080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16080)

```diff
-               zU
+               LH
```

#### 1578. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16083` → after: `L16083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16083) · [Before (L16083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16083)

```diff
-               yU.isFirstAndLast ? "" : `, ${cU("most first")}`
+               rH.isFirstAndLast ? "" : `, ${AH("most first")}`
```

#### 1579. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16086` → after: `L16086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16086) · [Before (L16086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16086)

```diff
-             yU.to
+             rH.to
```

#### 1580. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16089` → after: `L16089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16089) · [Before (L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16089)

```diff
-             cU("or later")
+             AH("or later")
```

#### 1581. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16093` → after: `L16093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16093) · [Before (L16093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16093)

```diff
-             (0, MQ.l)(yU.fromPlayers)
+             (0, RS.f)(rH.fromPlayers)
```

#### 1582. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16096` → after: `L16096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16096) · [Before (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16096)

```diff
-             cU("players got to")
+             AH("players got to")
```

#### 1583. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16099` → after: `L16099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16099) · [Before (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16099)

```diff
-             yU.from
+             rH.from
```

#### 1584. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16101` → after: `L16101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16101) · [Before (L16101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16101)

```diff
-             cU("only")
+             AH("only")
```

#### 1585. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16104` → after: `L16104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16104) · [Before (L16104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16104)

```diff
-             (0, MQ.l)(yU.reached)
+             (0, RS.f)(rH.reached)
```

#### 1586. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16107` → after: `L16107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16107) · [Before (L16107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16107)

```diff
-             cU("got to")
+             AH("got to")
```

#### 1587. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16110` → after: `L16110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16110) · [Before (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16110)

```diff
-             UU
+             HH
```

#### 1588. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16112` → after: `L16112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16112) · [Before (L16112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16112)

```diff
-             zU
+             LH
```

#### 1589. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16115` → after: `L16115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16115) · [Before (L16115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16115)

```diff
-             yU.from
+             rH.from
```

#### 1590. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16118` → after: `L16118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16118) · [Before (L16118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16118)

```diff
-             UU
+             HH
```

#### 1591. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16121` → after: `L16121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16121) · [Before (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16121)

```diff
-             cU("loses the most")
+             AH("loses the most")
```

#### 1592. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16123` → after: `L16123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16123) · [Before (L16123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16123)

```diff
-             (0, MQ.l)(yU.fromPlayers)
+             (0, RS.f)(rH.fromPlayers)
```

#### 1593. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16126` → after: `L16126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16126) · [Before (L16126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16126)

```diff
-             (0, MQ.l)(yU.reached)
+             (0, RS.f)(rH.reached)
```

#### 1594. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16129` → after: `L16129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16129) · [Before (L16129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16129)

```diff
-             cU("players")
+             AH("players")
```

#### 1595. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16131` → after: `L16131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16131) · [Before (L16131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16131)

```diff
-             zU
+             LH
```

#### 1596. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16133` → after: `L16133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16133) · [Before (L16133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16133)

```diff
-             cU("few players")
+             AH("few players")
```

#### 1597. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16137` → after: `L16137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16137) · [Before (L16137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16137)

```diff
-             cU("the usual number is about")
+             AH("the usual number is about")
```

#### 1598. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16140` → after: `L16140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16140) · [Before (L16140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16140)

```diff
-             Ty(yU.median)
+             pr(rH.median)
```

#### 1599. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16142` → after: `L16142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16142) · [Before (L16142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16142)

```diff
-             cU("this week")
+             AH("this week")
```

#### 1600. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16145` → after: `L16145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16145) · [Before (L16145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16145)

```diff
-             cU("the middle number this week is")
+             AH("the middle number this week is")
```

#### 1601. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16148` → after: `L16148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16148) · [Before (L16148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16148)

```diff
-             Ty(yU.median)
+             pr(rH.median)
```

#### 1602. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16150` → after: `L16150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16150) · [Before (L16150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16150)

```diff
-             cU("and half are between")
+             AH("and half are between")
```

#### 1603. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16153` → after: `L16153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16153) · [Before (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16153)

```diff
-             Ty(yU.p25)
+             pr(rH.p25)
```

#### 1604. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16156` → after: `L16156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16156) · [Before (L16156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16156)

```diff
-             cU("and")
+             AH("and")
```

#### 1605. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16159` → after: `L16159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16159) · [Before (L16159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16159)

```diff
-             Ty(yU.p75)
+             pr(rH.p75)
```

#### 1606. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16161` → after: `L16161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16161) · [Before (L16161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16161)

```diff
-               (0, MQ.l)(yU.players)
+               (0, RS.f)(rH.players)
```

#### 1607. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16164` → after: `L16164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16164) · [Before (L16164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16164)

```diff
-               cU("players")
+               AH("players")
```

#### 1608. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16167` → after: `L16167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16167) · [Before (L16167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16167)

```diff
-               UU
+               HH
```

#### 1609. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16170` → after: `L16170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16170) · [Before (L16170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16170)

```diff
-             2 * yU.count > yU.total ? cU("most happen near") : cU("lots happen near")
+             2 * rH.count > rH.total ? AH("most happen near") : AH("lots happen near")
```

#### 1610. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16173` → after: `L16173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16173) · [Before (L16173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16173)

```diff
-             yU.x + UU
+             rH.x + HH
```

#### 1611. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16175` → after: `L16175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16175) · [Before (L16175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16175)

```diff
-             yU.z + UU
+             rH.z + HH
```

#### 1612. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16177` → after: `L16177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16177) · [Before (L16177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16177)

```diff
-             cU("this week")
+             AH("this week")
```

#### 1613. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16180-L16183` → after: `L16180-L16183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16180-L16183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16180-L16183) · [Before (L16180-L16183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16180-L16183)

```diff
-             function(UU, XU) {
-               const zU = XU > 0 ? Math.round(UU / XU * 100) : 0;
-               return String(UU > 0 ? Math.max(1, zU) : 0)
-             }(yU.count, yU.total)
+             function(HH, BH) {
+               const LH = BH > 0 ? Math.round(HH / BH * 100) : 0;
+               return String(HH > 0 ? Math.max(1, LH) : 0)
+             }(rH.count, rH.total)
```

#### 1614. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16186` → after: `L16186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16186) · [Before (L16186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16186)

```diff
-             cU("of every 100 in the past week happened at")
+             AH("of every 100 in the past week happened at")
```

#### 1615. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16189` → after: `L16189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16189) · [Before (L16189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16189)

```diff
-             yU.x
+             rH.x
```

#### 1616. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16192` → after: `L16192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16192) · [Before (L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16192)

```diff
-             cU("to")
+             AH("to")
```

#### 1617. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16195` → after: `L16195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16195) · [Before (L16195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16195)

```diff
-             yU.x + UU
+             rH.x + HH
```

#### 1618. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16197` → after: `L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16197) · [Before (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16197)

```diff
-             yU.z
+             rH.z
```

#### 1619. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16200` → after: `L16200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16200) · [Before (L16200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16200)

```diff
-             cU("to")
+             AH("to")
```

#### 1620. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16203` → after: `L16203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16203) · [Before (L16203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16203)

```diff
-             yU.z + UU
+             rH.z + HH
```

#### 1621. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16205` → after: `L16205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16205) · [Before (L16205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16205)

```diff
-           `}}}zU(7079);const RP=new Map([["tick",["ms"]],["onPlayerJoin",["playerId","fromGameReset"]],["onPlayerLeave",["playerId","serverIsShuttingDown"]],["onPlayerJump",["playerId"]],["onRespawnRequest",["playerId"]],["playerCommand",["playerId","command"]],["onPlayerChat",[" … [truncated]
+           `}}}LH(7025);const xV=new Map([["tick",["ms"]],["onPlayerJoin",["playerId","fromGameReset"]],["onPlayerLeave",["playerId","serverIsShuttingDown"]],["onPlayerJump",["playerId"]],["onRespawnRequest",["playerId"]],["playerCommand",["playerId","command"]],["onPlayerChat",[" … [truncated]
```

#### 1622. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16207` → after: `L16207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16207) · [Before (L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16207)

```diff
-             XU
+             BH
```

#### 1623. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16216` → after: `L16216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16216) · [Before (L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16216)

```diff
-   FU = [...new Set([...fI, ...QU.filter((UU => WP.attacker.test(UU) || WP.victim.test(UU))), ...Object.keys(PP), ...(null !== (cU = zU.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== cU ? cU : []).filter((UU => WP.attacker.test(UU) || WP.victim.test(UU)))])].filter(AU),
+   tH = [...new Set([...eY, ...SH.filter((HH => PV.attacker.test(HH) || PV.victim.test(HH))), ...Object.keys(vV), ...(null !== (AH = LH.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== AH ? AH : []).filter((HH => PV.attacker.test(HH) || PV.victim.test(HH)))])].filter(hH),
```

#### 1624. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16225` → after: `L16225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16225) · [Before (L16225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16225)

```diff
-       return (0, vQ.e)(UU, new RegExp(`${XU.replace(/\$/g,"\\$")}(?![\\w$])`, "g"), vQ.n).every((zU => !/^\s*(?:\?\.|[.[])/.test(UU.slice(zU.index + XU.length))))
+       return (0, jS.c)(HH, new RegExp(`${BH.replace(/\$/g,"\\$")}(?![\\w$])`, "g"), jS.j).every((LH => !/^\s*(?:\?\.|[.[])/.test(HH.slice(LH.index + BH.length))))
```

#### 1625. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16253` → after: `L16253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16253) · [Before (L16253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16253)

```diff
-   if (null === UU || null === XU || null === zU || void 0 === zU || void 0 === zU.declaredNames || DE(zU) || UU.length > MQ.x || LP.test(XU) || null !== uI(UU) || !lg(UU).isBalanced) return null;
+   if (null === HH || null === BH || null === LH || void 0 === LH || void 0 === LH.declaredNames || zE(LH) || HH.length > RS.p || UV.test(BH) || null !== cY(HH) || !FM(HH).isBalanced) return null;
```

#### 1626. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16266` → after: `L16266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16266) · [Before (L16266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16266)

```diff
-     })) || (null !== (cU = zU.functions) && void 0 !== cU ? cU : []).some((UU => {
+     })) || (null !== (AH = LH.functions) && void 0 !== AH ? AH : []).some((HH => {
```

#### 1627. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16288` → after: `L16288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16288) · [Before (L16288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16288)

```diff
-       return (null !== XU && void 0 !== XU ? XU : []).flatMap((UU => null === UU ? [] : [UU]))
+       return (null !== BH && void 0 !== BH ? BH : []).flatMap((HH => null === HH ? [] : [HH]))
```

#### 1628. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16292` → after: `L16292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16292) · [Before (L16292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16292)

```diff
-     NU = null === FU.loopName ? YU : [`${CP}for (const ${FU.loopName} of api.getPlayerIds()) {`, ...YU, `${CP}}`];
+     GH = null === tH.loopName ? XH : [`${OV}for (const ${tH.loopName} of api.getPlayerIds()) {`, ...XH, `${OV}}`];
```

#### 1629. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16295` → after: `L16295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16295) · [Before (L16295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16295)

```diff
-     code: [`${yU} = (${FU.params.join(", ")}) => {`, ...NU, "}"].join("\n"),
+     code: [`${rH} = (${tH.params.join(", ")}) => {`, ...GH, "}"].join("\n"),
```

#### 1630. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16362` → after: `L16362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16362) · [Before (L16362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16362)

```diff
-   return (0, vQ.e)(UU, new RegExp(`${(0,MQ.f)(XU)}(?![\\w$])`, "g"), vQ.n).flatMap((zU => /(?:^|[{,\n])\s*$/.test(UU.slice(0, zU.index)) && /^\s*:/.test(UU.slice(zU.index + XU.length)) ? [] : [zU.index]))
+   return (0, jS.c)(HH, new RegExp(`${(0,RS.d)(BH)}(?![\\w$])`, "g"), jS.j).flatMap((LH => /(?:^|[{,\n])\s*$/.test(HH.slice(0, LH.index)) && /^\s*:/.test(HH.slice(LH.index + BH.length)) ? [] : [LH.index]))
```

#### 1631. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16420` → after: `L16420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16420) · [Before (L16420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16420)

```diff
-   const yU = null === (cU = new RegExp(`\\b${UU}\\s*\\(([^()]*)\\)`).exec(XU)) || void 0 === cU ? void 0 : cU[1],
+   const rH = null === (AH = new RegExp(`\\b${HH}\\s*\\(([^()]*)\\)`).exec(BH)) || void 0 === AH ? void 0 : AH[1],
```

#### 1632. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16434` → after: `L16434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16434) · [Before (L16434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16434)

```diff
-     AU = new Map((null !== (zU = XU.functions) && void 0 !== zU ? zU : []).map((UU => [UU.name, UU]))),
+     hH = new Map((null !== (LH = BH.functions) && void 0 !== LH ? LH : []).map((HH => [HH.name, HH]))),
```

#### 1633. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16447` → after: `L16447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16447) · [Before (L16447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16447)

```diff
-         return [...XU.events, ...null !== (zU = XU.messages) && void 0 !== zU ? zU : [], ...null !== (cU = XU.calls) && void 0 !== cU ? cU : []].some((XU => {
+         return [...BH.events, ...null !== (LH = BH.messages) && void 0 !== LH ? LH : [], ...null !== (AH = BH.calls) && void 0 !== AH ? AH : []].some((BH => {
```

#### 1634. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16469` → after: `L16469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16469) · [Before (L16469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16469)

```diff
-   const YU = null !== (cU = null === (yU = XU.callbacks.find((UU => UU.name === DU))) || void 0 === yU ? void 0 : yU.idNames) && void 0 !== cU ? cU : [];
+   const XH = null !== (AH = null === (rH = BH.callbacks.find((HH => HH.name === CH))) || void 0 === rH ? void 0 : rH.idNames) && void 0 !== AH ? AH : [];
```

#### 1635. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16492` → after: `L16492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16492) · [Before (L16492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16492)

```diff
-   if (null === XU || null === zU || void 0 === zU || UU.length > MQ.x || !lg(UU).isBalanced) return yU;
+   if (null === BH || null === LH || void 0 === LH || HH.length > RS.p || !FM(HH).isBalanced) return rH;
```

#### 1636. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16506` → after: `L16506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16506) · [Before (L16506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16506)

```diff
-     }) : cU || "tick" !== EU || !mP(FU, oU) || 0 !== (null !== (AU = null === YU || void 0 === YU ? void 0 : YU.idNames) && void 0 !== AU ? AU : []).length || /getPlayerIds|\b(?:return|break|continue|function|setTimeout|setInterval)\b|=>/.test(FU) ? !cU && "tick" !== EU && functi … [truncated]
+     }) : AH || "tick" !== EH || !jV(tH, zH) || 0 !== (null !== (hH = null === XH || void 0 === XH ? void 0 : XH.idNames) && void 0 !== hH ? hH : []).length || /getPlayerIds|\b(?:return|break|continue|function|setTimeout|setInterval)\b|=>/.test(tH) ? !AH && "tick" !== EH && functi … [truncated]
```

#### 1637. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16508` → after: `L16508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16508) · [Before (L16508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16508)

```diff
-       const AU = (null !== (cU = zU.functions) && void 0 !== cU ? cU : []).find((XU => {
+       const hH = (null !== (AH = LH.functions) && void 0 !== AH ? AH : []).find((BH => {
```

#### 1638. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16514-L16515` → after: `L16514-L16515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16514-L16515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16514-L16515) · [Before (L16514-L16515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16514-L16515)

```diff
-         FU = void 0 === AU && /\bplayer\b/.test(null !== (yU = zE.get(UU)) && void 0 !== yU ? yU : ""),
-         oU = null !== (QU = null === AU || void 0 === AU ? void 0 : AU.params) && void 0 !== QU ? QU : KP(UU, XU, zU);
+         tH = void 0 === hH && /\bplayer\b/.test(null !== (rH = BE.get(HH)) && void 0 !== rH ? rH : ""),
+         zH = null !== (SH = null === hH || void 0 === hH ? void 0 : hH.params) && void 0 !== SH ? SH : ZV(HH, BH, LH);
```

#### 1639. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16519` → after: `L16519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16519) · [Before (L16519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16519)

```diff
-         cU = [...UU.matchAll(new RegExp(`api\\s*\\.\\s*sendMessage\\s*\\(\\s*${(0,MQ.f)(XU)}\\s*,`, "g"))];
+         AH = [...HH.matchAll(new RegExp(`api\\s*\\.\\s*sendMessage\\s*\\(\\s*${(0,RS.d)(BH)}\\s*,`, "g"))];
```

#### 1640. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16524` → after: `L16524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16524) · [Before (L16524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16524)

```diff
-       for (const QU of XU.matchAll(new RegExp(`api\\s*\\.\\s*sendMessage\\s*\\(\\s*${(0,MQ.f)(zU)}\\s*,\\s*`, "g"))) cU += `${UU.slice(yU,QU.index)}api.broadcastMessage(`, yU = QU.index + QU[0].length;
+       for (const SH of BH.matchAll(new RegExp(`api\\s*\\.\\s*sendMessage\\s*\\(\\s*${(0,RS.d)(LH)}\\s*,\\s*`, "g"))) AH += `${HH.slice(rH,SH.index)}api.broadcastMessage(`, rH = SH.index + SH[0].length;
```

#### 1641. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16533-L16534` → after: `L16533-L16534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16533-L16534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16533-L16534) · [Before (L16533-L16534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16533-L16534)

```diff
-       AU = null !== (cU = UU.loopName) && void 0 !== cU ? cU : 1 === yU.playerParams.length ? yU.playerParams[0] : null,
-       FU = null !== AU && new RegExp(`\\bapi\\s*\\.\\s*(?:${SP})\\s*\\(\\s*${(0,MQ.f)(AU)}\\s*[,)]`).test(QU);
+       hH = null !== (AH = HH.loopName) && void 0 !== AH ? AH : 1 === rH.playerParams.length ? rH.playerParams[0] : null,
+       tH = null !== hH && new RegExp(`\\bapi\\s*\\.\\s*(?:${oV})\\s*\\(\\s*${(0,RS.d)(hH)}\\s*[,)]`).test(SH);
```

#### 1642. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16542` → after: `L16542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16542) · [Before (L16542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16542)

```diff
-         for (const QU of sP(UU).matchAll(new RegExp(`!\\s*([A-Za-z_$][\\w$]*)\\s*\\[\\s*${(0,MQ.f)(zU)}\\s*\\]`, "g"))) {
+         for (const SH of NV(HH).matchAll(new RegExp(`!\\s*([A-Za-z_$][\\w$]*)\\s*\\[\\s*${(0,RS.d)(LH)}\\s*\\]`, "g"))) {
```

#### 1643. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16544` → after: `L16544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16544) · [Before (L16544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16544)

```diff
-             zU = new RegExp(`(?:^|[^\\w$.])${(0,MQ.f)(UU)}\\s*\\[[^\\]]*\\]\\s*=(?!=)`).test(XU);
+             LH = new RegExp(`(?:^|[^\\w$.])${(0,RS.d)(HH)}\\s*\\[[^\\]]*\\]\\s*=(?!=)`).test(BH);
```

#### 1644. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16549` → after: `L16549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16549) · [Before (L16549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16549)

```diff
-       return void(null !== XU && null !== oU && null !== oU.cond && (UU.code = [`if (${oU.cond}) {`, `${OP}${XU}[${AU}] = true${DU}`, ...oU.body.map(hP), "}"].join("\n"), UU.flagNames = [XU]))
+       return void(null !== BH && null !== zH && null !== zH.cond && (HH.code = [`if (${zH.cond}) {`, `${mV}${BH}[${hH}] = true${CH}`, ...zH.body.map(sV), "}"].join("\n"), HH.flagNames = [BH]))
```

#### 1645. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16554-L16555` → after: `L16554-L16555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16554-L16555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16554-L16555) · [Before (L16554-L16555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16554-L16555)

```diff
-           const yU = new Set(null !== (zU = XU.declaredNames) && void 0 !== zU ? zU : []);
-           return null !== (cU = MP.find((XU => !yU.has(XU) && 0 === nP(UU, XU).length))) && void 0 !== cU ? cU : MP[MP.length - 1]
+           const rH = new Set(null !== (LH = BH.declaredNames) && void 0 !== LH ? LH : []);
+           return null !== (AH = eV.find((BH => !rH.has(BH) && 0 === RV(HH, BH).length))) && void 0 !== AH ? AH : eV[eV.length - 1]
```

#### 1646. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16557-L16559` → after: `L16557-L16559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16557-L16559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16557-L16559) · [Before (L16557-L16559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16557-L16559)

```diff
-         cU = `!${XU}.has(${AU})`,
-         FU = null === oU.cond ? cU : `${function(UU){return/\|\||\?(?!\.)/.test(sP(UU))?`(${UU})`:UU}(oU.cond)} && ${cU}`;
-       return UU.code = [`if (${FU}) {`, `${OP}${XU}.add(${AU})${DU}`, ...oU.body.map(hP), "}"].join("\n"), void(UU.once = {
+         AH = `!${BH}.has(${hH})`,
+         tH = null === zH.cond ? AH : `${function(HH){return/\|\||\?(?!\.)/.test(NV(HH))?`(${HH})`:HH}(zH.cond)} && ${AH}`;
+       return HH.code = [`if (${tH}) {`, `${mV}${BH}.add(${hH})${CH}`, ...zH.body.map(sV), "}"].join("\n"), void(HH.once = {
```

#### 1647. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16561` → after: `L16561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16561) · [Before (L16561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16561)

```diff
-         line: `const ${XU} = new Set()`,
+         line: `const ${BH} = new Set()`,
```

#### 1648. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16567` → after: `L16567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16567) · [Before (L16567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16567)

```diff
-   }(yU, XU, zU), null !== yU.loopName && (yU.code = [`for (const ${yU.loopName} of api.getPlayerIds()) {`, ...JP(yU.code).map(hP), "}"].join("\n"))), yU
+   }(rH, BH, LH), null !== rH.loopName && (rH.code = [`for (const ${rH.loopName} of api.getPlayerIds()) {`, ...DV(rH.code).map(sV), "}"].join("\n"))), rH
```

#### 1649. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16578-L16579` → after: `L16578-L16579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16578-L16579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16578-L16579) · [Before (L16578-L16579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16578-L16579)

```diff
-   QW = (UU, XU) => `(?<${UU}>${cW})\\s*\\[\\s*(?<${XU}>${cW})\\s*\\]`,
-   AW = new RegExp(`^\\s*api\\s*\\.\\s*(?<call>sendMessage|sendFlyingMiddleMessage)\\s*\\(\\s*(?<id>${cW})\\s*,\\s*(?<open>\\[\\s*)?(?<quote>["'])(?<text>(?:(?!\\k<quote>)[^\\\\\\n])*)\\k<quote>(?<close>\\s*\\])?(?<rest>\\s*,[^;\\n]*)?\\)\\s*(?<semi>;?)\\s*$`),
+   BO = (HH, BH) => `(?<${HH}>${yV})\\s*\\[\\s*(?<${BH}>${yV})\\s*\\]`,
+   LO = new RegExp(`^\\s*api\\s*\\.\\s*(?<call>sendMessage|sendFlyingMiddleMessage)\\s*\\(\\s*(?<id>${yV})\\s*,\\s*(?<open>\\[\\s*)?(?<quote>["'])(?<text>(?:(?!\\k<quote>)[^\\\\\\n])*)\\k<quote>(?<close>\\s*\\])?(?<rest>\\s*,[^;\\n]*)?\\)\\s*(?<semi>;?)\\s*$`),
```

#### 1650. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16583-L16584` → after: `L16583-L16584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16583-L16584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16583-L16584) · [Before (L16583-L16584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16583-L16584)

```diff
-   EW = new RegExp(`^\\s*(?:var|let|const)\\s+(${cW})\\s*=\\s*(api|Date)\\.now\\(\\)\\s*-\\s*(${cW})\\s*;?\\s*$`),
-   YW = new RegExp(`^\\s*(?:var|let|const)\\s+(${cW})\\s*=\\s*(api|Date)\\.now\\(\\)\\s*;?\\s*$`),
+   hO = new RegExp(`^\\s*(?:var|let|const)\\s+(${yV})\\s*=\\s*(api|Date)\\.now\\(\\)\\s*-\\s*(${yV})\\s*;?\\s*$`),
+   tO = new RegExp(`^\\s*(?:var|let|const)\\s+(${yV})\\s*=\\s*(api|Date)\\.now\\(\\)\\s*;?\\s*$`),
```

#### 1651. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16597-L16599` → after: `L16597-L16599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16597-L16599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16597-L16599) · [Before (L16597-L16599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16597-L16599)

```diff
-   tW = new RegExp(`^\\s*(?:if\\s*\\(\\s*!\\s*${QW("checked","checkedId")}\\s*\\)\\s*)?${QW("table","id")}\\s*=\\s*${yW}\\s*(?:;|\\n)\\s*`),
-   gW = new RegExp(`^(?<now>${yW})\\s*-\\s*(?:${QW("table","id")}|\\(\\s*${QW("orTable","orId")}\\s*\\|\\|\\s*0\\s*\\))\\s*(?<op>>=?)\\s*(?<ms>\\d+)$`),
-   kW = new RegExp(`^!\\s*${QW("table","id")}$`),
+   GO = new RegExp(`^\\s*(?:if\\s*\\(\\s*!\\s*${BO("checked","checkedId")}\\s*\\)\\s*)?${BO("table","id")}\\s*=\\s*${HO}\\s*(?:;|\\n)\\s*`),
+   YO = new RegExp(`^(?<now>${HO})\\s*-\\s*(?:${BO("table","id")}|\\(\\s*${BO("orTable","orId")}\\s*\\|\\|\\s*0\\s*\\))\\s*(?<op>>=?)\\s*(?<ms>\\d+)$`),
+   uO = new RegExp(`^!\\s*${BO("table","id")}$`),
```

#### 1652. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16614` → after: `L16614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16614) · [Before (L16614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16614)

```diff
-   return null !== (cU = UU.find((UU => !yU.has(UU) && 0 === (0, vQ.e)(XU, new RegExp(`${UU}(?![\\w$])`), vQ.n).length))) && void 0 !== cU ? cU : null
+   return null !== (AH = HH.find((HH => !rH.has(HH) && 0 === (0, jS.c)(BH, new RegExp(`${HH}(?![\\w$])`), jS.j).length))) && void 0 !== AH ? AH : null
```

#### 1653. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16624` → after: `L16624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16624) · [Before (L16624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16624)

```diff
-     for (const AU of [...UU.callbacks, ...null !== (cU = UU.functions) && void 0 !== cU ? cU : []]) {
+     for (const hH of [...HH.callbacks, ...null !== (AH = HH.functions) && void 0 !== AH ? AH : []]) {
```

#### 1654. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16626` → after: `L16626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16626) · [Before (L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16626)

```diff
-       for (const UU of null !== (yU = null === (QU = AU.body) || void 0 === QU ? void 0 : QU.next) && void 0 !== yU ? yU : []) {
+       for (const HH of null !== (rH = null === (SH = hH.body) || void 0 === SH ? void 0 : SH.next) && void 0 !== rH ? rH : []) {
```

#### 1655. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16642-L16643` → after: `L16642-L16643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16642-L16643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16642-L16643) · [Before (L16642-L16643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16642-L16643)

```diff
-   for (const [QU, AU] of zU)(0, vQ.e)(UU, new RegExp(`${QU}(?![\\w$])`), vQ.n).length > 0 && yU.push(AU);
-   for (const QU of (0, vQ.e)(UU, new RegExp(`(api|Date)\\.now\\(\\)\\s*-\\s*(${cW})(?![\\w$.[(])`, "g"), vQ.n)) yU.push({
+   for (const [SH, hH] of LH)(0, jS.c)(HH, new RegExp(`${SH}(?![\\w$])`), jS.j).length > 0 && rH.push(hH);
+   for (const SH of (0, jS.c)(HH, new RegExp(`(api|Date)\\.now\\(\\)\\s*-\\s*(${yV})(?![\\w$.[(])`, "g"), jS.j)) rH.push({
```

#### 1656. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16648` → after: `L16648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16648) · [Before (L16648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16648)

```diff
-     for (const XU of (0, vQ.e)(UU, new RegExp(`${QU}\\s*-\\s*(${cW})(?![\\w$.[(])`, "g"), vQ.n)) yU.push({
+     for (const BH of (0, jS.c)(HH, new RegExp(`${SH}\\s*-\\s*(${yV})(?![\\w$.[(])`, "g"), jS.j)) rH.push({
```

#### 1657. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16657` → after: `L16657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16657) · [Before (L16657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16657)

```diff
-     return `${zU} ${XU}`
+     return `${LH} ${BH}`
```

#### 1658. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16696` → after: `L16696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16696) · [Before (L16696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16696)

```diff
-   } = kU[0], dU = EU.slice(0, aU.index), LU = ["" === dU ? null : `${DU}${dU}${DU}`, GU, `${DU}${EU.slice(aU.index+aU[1].length)}${DU}`].filter((UU => null !== UU)).join(" + ");
+   } = xH[0], bH = EH.slice(0, QH.index), kH = ["" === bH ? null : `${CH}${bH}${CH}`, vH, `${CH}${EH.slice(QH.index+QH[1].length)}${CH}`].filter((HH => null !== HH)).join(" + ");
```

#### 1659. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16698` → after: `L16698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16698) · [Before (L16698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16698)

```diff
-     code: [`for (const ${FU} of api.getPlayerIds()) {`, `${XW}const ${GU} = Math.ceil((${RU} - (${WU}.now() - ${PU})) / ${tU})${IU}`, `${XW}if (${GU} > 0 && ${BU}[${FU}] !== ${GU}) {`, `${XW}${XW}${BU}[${FU}] = ${GU}${IU}`, `${XW}${XW}api.${AU}(${FU}, ${void 0===oU?LU:`[${LU}]`}$ … [truncated]
+     code: [`for (const ${tH} of api.getPlayerIds()) {`, `${iV}const ${vH} = Math.ceil((${UH} - (${OH}.now() - ${VH})) / ${WH})${YH}`, `${iV}if (${vH} > 0 && ${PH}[${tH}] !== ${vH}) {`, `${iV}${iV}${PH}[${tH}] = ${vH}${YH}`, `${iV}${iV}api.${hH}(${tH}, ${void 0===zH?kH:`[${kH}]`}$ … [truncated]
```

#### 1660. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16713` → after: `L16713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16713) · [Before (L16713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16713)

```diff
-   const oU = null === AU ? UU : UU.slice(AU[0].length),
+   const zH = null === hH ? HH : HH.slice(hH[0].length),
```

#### 1661. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16722-L16723` → after: `L16722-L16723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16722-L16723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16722-L16723) · [Before (L16722-L16723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16722-L16723)

```diff
-         table: null !== (zU = yU.table) && void 0 !== zU ? zU : yU.orTable,
-         id: null !== (cU = yU.id) && void 0 !== cU ? cU : yU.orId,
+         table: null !== (LH = rH.table) && void 0 !== LH ? LH : rH.orTable,
+         id: null !== (AH = rH.id) && void 0 !== AH ? AH : rH.orId,
```

#### 1662. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16754` → after: `L16754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16754) · [Before (L16754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16754)

```diff
-     return "tick" === XU && (null !== zU && void 0 !== zU ? zU : []).includes(aU)
+     return "tick" === BH && (null !== LH && void 0 !== LH ? LH : []).includes(QH)
```

#### 1663. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16757` → after: `L16757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16757) · [Before (L16757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16757)

```diff
-   const RU = null !== (cU = null === kU || void 0 === kU ? void 0 : kU.table) && void 0 !== cU ? cU : PW(aW, UU, zU);
+   const UH = null !== (AH = null === xH || void 0 === xH ? void 0 : xH.table) && void 0 !== AH ? AH : vO(XO, HH, LH);
```

#### 1664. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16759` → after: `L16759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16759) · [Before (L16759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16759)

```diff
-   const PU = new RegExp(`^${RU.replace(/\$/g,"\\$")}\\s*\\[\\s*${aU.replace(/\$/g,"\\$")}\\s*\\]\\s*=\\s*true$`),
+   const VH = new RegExp(`^${UH.replace(/\$/g,"\\$")}\\s*\\[\\s*${QH.replace(/\$/g,"\\$")}\\s*\\]\\s*=\\s*true$`),
```

#### 1665. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16771` → after: `L16771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16771) · [Before (L16771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16771)

```diff
-     dU = new RegExp(`^api\\s*\\.\\s*\\w+\\s*\\(\\s*${aU.replace(/\$/g,"\\$")}\\s*[,)][\\s\\S]*\\)$`),
+     bH = new RegExp(`^api\\s*\\.\\s*\\w+\\s*\\(\\s*${QH.replace(/\$/g,"\\$")}\\s*[,)][\\s\\S]*\\)$`),
```

#### 1666. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16780-L16781` → after: `L16780-L16781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16780-L16781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16780-L16781) · [Before (L16780-L16781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16780-L16781)

```diff
-           return (null !== XU && void 0 !== XU ? XU : []).flatMap((UU => null === UU ? [] : [UU]))
-         })), ...[...zU.callbacks, ...null !== (cU = zU.functions) && void 0 !== cU ? cU : []].flatMap((UU => {
+           return (null !== BH && void 0 !== BH ? BH : []).flatMap((HH => null === HH ? [] : [HH]))
+         })), ...[...LH.callbacks, ...null !== (AH = LH.functions) && void 0 !== AH ? AH : []].flatMap((HH => {
```

#### 1667. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16786` → after: `L16786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16786) · [Before (L16786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16786)

```diff
-           return null !== (XU = null === zU || void 0 === zU ? void 0 : zU.locals) && void 0 !== XU ? XU : []
+           return null !== (BH = null === LH || void 0 === LH ? void 0 : LH.locals) && void 0 !== BH ? BH : []
```

#### 1668. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16794` → after: `L16794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16794) · [Before (L16794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16794)

```diff
-       return (0, vQ.e)(sP(UU), /[A-Za-z_$][\w$]*(?![\w$])(?!\s*:)/g, vQ.n).every((UU => {
+       return (0, jS.c)(NV(HH), /[A-Za-z_$][\w$]*(?![\w$])(?!\s*:)/g, jS.j).every((HH => {
```

#### 1669. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16801` → after: `L16801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16801) · [Before (L16801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16801)

```diff
-     code: [`for (const ${aU} of api.getPlayerIds()) {`, `${XW}if (${pU}[${aU}] === undefined) ${pU}[${aU}] = ${IU}${CU}`, `${XW}if (!${RU}[${aU}] && ${IU} - ${pU}[${aU}] ${tU} ${gU}) {`, `${XW}${XW}${RU}[${aU}] = true${CU}`, ...LU.map((UU => `${XW}${XW}${UU}${CU}`)), `${XW}}`, "} … [truncated]
+     code: [`for (const ${QH} of api.getPlayerIds()) {`, `${iV}if (${uH}[${QH}] === undefined) ${uH}[${QH}] = ${YH}${oH}`, `${iV}if (!${UH}[${QH}] && ${YH} - ${uH}[${QH}] ${WH} ${MH}) {`, `${iV}${iV}${UH}[${QH}] = true${oH}`, ...kH.map((HH => `${iV}${iV}${HH}${oH}`)), `${iV}}`, "} … [truncated]
```

#### 1670. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16809` → after: `L16809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16809) · [Before (L16809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16809)

```diff
-   return null === UU || null === XU || null === zU || void 0 === zU || void 0 === zU.declaredNames || UU.length > MQ.x || /\/\/|\/\*/.test(UU.replace(/"[^"\n]*"|'[^'\n]*'|`[^`\n]*`/g, '""')) || !lg(UU).isBalanced ? null : null !== (cU = dW(UU, XU, zU)) && void 0 !== cU ? cU : eW( … [truncated]
+   return null === HH || null === BH || null === LH || void 0 === LH || void 0 === LH.declaredNames || HH.length > RS.p || /\/\/|\/\*/.test(HH.replace(/"[^"\n]*"|'[^'\n]*'|`[^`\n]*`/g, '""')) || !FM(HH).isBalanced ? null : null !== (AH = TO(HH, BH, LH)) && void 0 !== AH ? AH : VO( … [truncated]
```

#### 1671. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16817` → after: `L16817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16817) · [Before (L16817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16817)

```diff
-       return `step:${UU.from}>${UU.to}`;
+       return `step:${HH.from}>${HH.to}`;
```

#### 1672. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16819` → after: `L16819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16819) · [Before (L16819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16819)

```diff
-       return `deaths:${UU.category}:${null!==(XU=UU.death)&&void 0!==XU?XU:""}:${UU.square.x},${UU.square.z}`;
+       return `deaths:${HH.category}:${null!==(BH=HH.death)&&void 0!==BH?BH:""}:${HH.square.x},${HH.square.z}`;
```

#### 1673. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16821` → after: `L16821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16821) · [Before (L16821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16821)

```diff
-       return `place:${UU.category}:${UU.square.x},${UU.square.z}`;
+       return `place:${HH.category}:${HH.square.x},${HH.square.z}`;
```

#### 1674. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16825` → after: `L16825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16825) · [Before (L16825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16825)

```diff
-       return `ladder:${UU.eventType}`;
+       return `ladder:${HH.eventType}`;
```

#### 1675. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16836-L16837` → after: `L16836-L16837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16836-L16837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16836-L16837) · [Before (L16836-L16837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16836-L16837)

```diff
-       } = UU, cU = ` ${XU.toLowerCase().replace(/(\d)\.(?=\d)/g,"$1d").replace(/[^a-z0-9]+/g," ")} `;
-       return [`minute ${zU}`, `${zU} minute`, `${zU} minutes`, `${zU} min`, ...1 === zU ? ["first minute"] : []].some((UU => cU.includes(` ${UU} `)))
+       } = HH, AH = ` ${BH.toLowerCase().replace(/(\d)\.(?=\d)/g,"$1d").replace(/[^a-z0-9]+/g," ")} `;
+       return [`minute ${LH}`, `${LH} minute`, `${LH} minutes`, `${LH} min`, ...1 === LH ? ["first minute"] : []].some((HH => AH.includes(` ${HH} `)))
```

#### 1676. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16857` → after: `L16857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16857) · [Before (L16857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16857)

```diff
- const fW = (0, MQ.A)((() => zU.e(98).then((() => zU(5290))).then((UU => function(UU) {
+ const lO = (0, RS.u)((() => LH.e(98).then((() => LH(5240))).then((HH => function(HH) {
```

#### 1677. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16891` → after: `L16891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16891) · [Before (L16891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16891)

```diff
-   for (const [, cU] of(0, vQ.e)(OI(UU), iW, vQ.n)) XU.has(cU) || CI.includes(cU) || zU.includes(cU) || zU.push(cU);
+   for (const [, AH] of(0, jS.c)(fY(HH), KO, jS.j)) BH.has(AH) || mY.includes(AH) || LH.includes(AH) || LH.push(AH);
```

#### 1678. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16896-L16897` → after: `L16896-L16897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16896-L16897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16896-L16897) · [Before (L16896-L16897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16896-L16897)

```diff
-   for (const [, zU] of(0, vQ.e)(UU, iW, vQ.n))
-     if (!XU.has(`api.${zU}`)) return !0;
+   for (const [, LH] of(0, jS.c)(HH, KO, jS.j))
+     if (!BH.has(`api.${LH}`)) return !0;
```

#### 1679. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16905` → after: `L16905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16905) · [Before (L16905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16905)

```diff
-   return /^-?\d+$/.test(zU) ? `${UU.slice(0,XU)} ${zU}` : /\d/.test(zU) ? zU : UU
+   return /^-?\d+$/.test(LH) ? `${HH.slice(0,BH)} ${LH}` : /\d/.test(LH) ? LH : HH
```

#### 1680. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16921` → after: `L16921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16921) · [Before (L16921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16921)

```diff
-   for (const QU of (0, vQ.e)(UU, VW, (0, vQ.j)("\\w.,"))) {
+   for (const SH of (0, jS.c)(HH, gO, (0, jS.i)("\\w.,"))) {
```

#### 1681. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16929` → after: `L16929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16929) · [Before (L16929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16929)

```diff
-       if ((null !== (cU = null === zU || void 0 === zU ? void 0 : zU.shares.get(AU)) && void 0 !== cU ? cU : []).some((UU => {
+       if ((null !== (AH = null === LH || void 0 === LH ? void 0 : LH.shares.get(hH)) && void 0 !== AH ? AH : []).some((HH => {
```

#### 1682. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16950` → after: `L16950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16950) · [Before (L16950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16950)

```diff
-     return (0, vQ.e)(zU, new RegExp(`${(0,MQ.h)(XU.toLowerCase())}(?![\\w])`), (0, vQ.j)("\\w")).length > 0 || void 0 !== yU && void 0 !== cd(UU, yU)
+     return (0, jS.c)(LH, new RegExp(`${(0,RS.e)(BH.toLowerCase())}(?![\\w])`), (0, jS.i)("\\w")).length > 0 || void 0 !== rH && void 0 !== yO(HH, rH)
```

#### 1683. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16957` → after: `L16957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16957) · [Before (L16957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16957)

```diff
-   for (const zU of UU.matchAll(new RegExp(`\\b([A-Za-z][\\w-]*)\\s+${XU}(?![\\w]|[.,]\\d)`, "g")))
+   for (const LH of HH.matchAll(new RegExp(`\\b([A-Za-z][\\w-]*)\\s+${BH}(?![\\w]|[.,]\\d)`, "g")))
```

#### 1684. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16973` → after: `L16973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16973) · [Before (L16973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16973)

```diff
-       return `don't reach ${XU}`;
+       return `don't reach ${BH}`;
```

#### 1685. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16975` → after: `L16975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16975) · [Before (L16975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16975)

```diff
-       return `doesn't reach ${XU}`;
+       return `doesn't reach ${BH}`;
```

#### 1686. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16977` → after: `L16977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16977) · [Before (L16977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16977)

```diff
-       return `didn't reach ${XU}`;
+       return `didn't reach ${BH}`;
```

#### 1687. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16979` → after: `L16979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR16979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L16979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L16979) · [Before (L16979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L16979)

```diff
-       return `not reaching ${XU}`
+       return `not reaching ${BH}`
```

#### 1688. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17002` → after: `L17002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17002) · [Before (L17002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17002)

```diff
-     if (void 0 !== XU && !/^(?:of|in|at|to|and|the|from|reach|reached|past)$/i.test(XU)) return `${XU} ${QU}`
+     if (void 0 !== BH && !/^(?:of|in|at|to|and|the|from|reach|reached|past)$/i.test(BH)) return `${BH} ${SH}`
```

#### 1689. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17024` → after: `L17024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17024) · [Before (L17024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17024)

```diff
-   const FU = UU.split("\n").map((UU => OE.test(UU) ? (AU = !AU, UU) : AU || /^\s*#/.test(UU) ? UU : function(UU, XU, zU, cU, yU) {
+   const tH = HH.split("\n").map((HH => fE.test(HH) ? (hH = !hH, HH) : hH || /^\s*#/.test(HH) ? HH : function(HH, BH, LH, AH, rH) {
```

#### 1690. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17054` → after: `L17054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17054) · [Before (L17054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17054)

```diff
-     markdown: 0 === QU.length ? UU : FU.join("\n"),
+     markdown: 0 === SH.length ? HH : tH.join("\n"),
```

#### 1691. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17076` → after: `L17076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17076) · [Before (L17076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17076)

```diff
-   return `(?:${UU.split("|").map((UU=>`[${UU[0].toUpperCase()}${UU[0]}]${UU.slice(1)}`)).join("|")})`
+   return `(?:${HH.split("|").map((HH=>`[${HH[0].toUpperCase()}${HH[0]}]${HH.slice(1)}`)).join("|")})`
```

#### 1692. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17081` → after: `L17081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17081) · [Before (L17081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17081)

```diff
-   kd = `${gd}(?:\\s+(?:${gd}|\\d{1,3}))*`,
+   Yb = `${Gb}(?:\\s+(?:${Gb}|\\d{1,3}))*`,
```

#### 1693. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17086-L17088` → after: `L17086-L17088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17086-L17088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17086-L17088) · [Before (L17086-L17088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17086-L17088)

```diff
-   Pd = new RegExp(`\\b${pd}\\s+${td}the\\s+((?:(?:${Rd})\\s+){1,3}(?:[a-z]+\\s+)?(?:${Gd}))\\b`, "gi"),
-   Wd = new RegExp(`\\b${pd}\\s+${td}(?:(the|a|an)\\s+)?(${kd}(?:\\s+(?:${Gd}))?)(?![\\w'\u2019-])`, "g"),
-   dd = new RegExp(`\\b${Id("signs?|arrows?|markers?|paths?|trails?")}\\b[^.!?\\n]{0,40}?\\b(?:pointing|leading|that\\s+points|that\\s+leads|showing\\s+the\\s+way)\\s+(?:players\\s+)?(?:to|towards?|at)\\s+(?:(the|a|an)\\s+)?(${kd}(?:\\s+(?:${Gd}))?|(?:(?:${Rd})\\s+){1,3}(?:[a-z]+\ … [truncated]
+   xb = new RegExp(`\\b${Eb}\\s+${Xb}the\\s+((?:(?:${Mb})\\s+){1,3}(?:[a-z]+\\s+)?(?:${ub}))\\b`, "gi"),
+   vb = new RegExp(`\\b${Eb}\\s+${Xb}(?:(the|a|an)\\s+)?(${Yb}(?:\\s+(?:${ub}))?)(?![\\w'\u2019-])`, "g"),
+   Pb = new RegExp(`\\b${Cb("signs?|arrows?|markers?|paths?|trails?")}\\b[^.!?\\n]{0,40}?\\b(?:pointing|leading|that\\s+points|that\\s+leads|showing\\s+the\\s+way)\\s+(?:players\\s+)?(?:to|towards?|at)\\s+(?:(the|a|an)\\s+)?(${Yb}(?:\\s+(?:${ub}))?|(?:(?:${Mb})\\s+){1,3}(?:[a-z]+\ … [truncated]
```

#### 1694. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17100` → after: `L17100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17100) · [Before (L17100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17100)

```diff
-   return (null !== (XU = null === (zU = /^name:\s*(?:<[^>\n]*>)?([^<\n]+)/m.exec(UU)) || void 0 === zU ? void 0 : zU[1]) && void 0 !== XU ? XU : "").trim()
+   return (null !== (BH = null === (LH = /^name:\s*(?:<[^>\n]*>)?([^<\n]+)/m.exec(HH)) || void 0 === LH ? void 0 : LH[1]) && void 0 !== BH ? BH : "").trim()
```

#### 1695. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17111-L17112` → after: `L17111-L17112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17111-L17112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17111-L17112) · [Before (L17111-L17112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17111-L17112)

```diff
-       return `${XU} ${zU}`
-     })), ...(null !== (zU = XU.calls) && void 0 !== zU ? zU : []).flatMap((UU => {
+       return `${BH} ${LH}`
+     })), ...(null !== (LH = BH.calls) && void 0 !== LH ? LH : []).flatMap((HH => {
```

#### 1696. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17117` → after: `L17117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17117) · [Before (L17117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17117)

```diff
-     })), ...(null !== (cU = XU.messages) && void 0 !== cU ? cU : []).map((UU => {
+     })), ...(null !== (AH = BH.messages) && void 0 !== AH ? AH : []).map((HH => {
```

#### 1697. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17128-L17129` → after: `L17128-L17129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17128-L17129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17128-L17129) · [Before (L17128-L17129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17128-L17129)

```diff
-       return [XU, ...zU, null !== cU && void 0 !== cU ? cU : ""]
-     })), ...(null !== (yU = XU.functions) && void 0 !== yU ? yU : []).map((UU => {
+       return [BH, ...LH, null !== AH && void 0 !== AH ? AH : ""]
+     })), ...(null !== (rH = BH.functions) && void 0 !== rH ? rH : []).map((HH => {
```

#### 1698. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17138` → after: `L17138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17138) · [Before (L17138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17138)

```diff
-     text: `${UU.gameText}\n${AU.toLowerCase()}${FU===AU?"":`\n${FU.toLowerCase()}`}`.replace(/([a-z\d])[\u2019'](?=[a-z])/g, "$1"),
+     text: `${HH.gameText}\n${hH.toLowerCase()}${tH===hH?"":`\n${tH.toLowerCase()}`}`.replace(/([a-z\d])[\u2019'](?=[a-z])/g, "$1"),
```

#### 1699. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17144` → after: `L17144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17144) · [Before (L17144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17144)

```diff
-   return UU.toLowerCase().replace(/[\u2019']/g, "").split(/[^a-z\d]+/).filter((UU => "" !== UU)).map((UU => UU.length > 4 && UU.endsWith("ies") ? `${UU.slice(0,-3)}y` : UU.length > 3 && /[^s]s$/.test(UU) ? UU.slice(0, -1) : UU))
+   return HH.toLowerCase().replace(/[\u2019']/g, "").split(/[^a-z\d]+/).filter((HH => "" !== HH)).map((HH => HH.length > 4 && HH.endsWith("ies") ? `${HH.slice(0,-3)}y` : HH.length > 3 && /[^s]s$/.test(HH) ? HH.slice(0, -1) : HH))
```

#### 1700. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17148-L17149` → after: `L17148-L17149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17148-L17149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17148-L17149) · [Before (L17148-L17149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17148-L17149)

```diff
-   const zU = XU.map((UU => UU.length > 2 && /[^aeiou]y$/.test(UU) ? `${(0,MQ.h)(UU.slice(0,-1))}(?:y|ies|ie)` : /(?:x|ch|sh|ss|z)e$/.test(UU) ? `${(0,MQ.h)(UU.slice(0,-1))}(?:e?s|e)?` : `${(0,MQ.h)(UU)}(?:e?s)?`)).join("[\\s_-]*");
-   return (0, vQ.e)(UU, new RegExp(`${zU}(?![a-z\\d])`), (0, vQ.j)("a-z\\d")).length > 0
+   const LH = BH.map((HH => HH.length > 2 && /[^aeiou]y$/.test(HH) ? `${(0,RS.e)(HH.slice(0,-1))}(?:y|ies|ie)` : /(?:x|ch|sh|ss|z)e$/.test(HH) ? `${(0,RS.e)(HH.slice(0,-1))}(?:e?s|e)?` : `${(0,RS.e)(HH)}(?:e?s)?`)).join("[\\s_-]*");
+   return (0, jS.c)(HH, new RegExp(`${LH}(?![a-z\\d])`), (0, jS.i)("a-z\\d")).length > 0
```

#### 1701. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17158` → after: `L17158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17158) · [Before (L17158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17158)

```diff
-     QU = new RegExp(`^(?:${Gd})$`).test(yU) && zU.length > 1 ? zU.slice(0, -1) : zU,
+     SH = new RegExp(`^(?:${ub})$`).test(rH) && LH.length > 1 ? LH.slice(0, -1) : LH,
```

#### 1702. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17182` → after: `L17182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17182) · [Before (L17182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17182)

```diff
-   if ((null !== (zU = UU.match(/[A-Za-z][\w'-]*/g)) && void 0 !== zU ? zU : []).length >= 3 && ! function(UU) {
+   if ((null !== (LH = HH.match(/[A-Za-z][\w'-]*/g)) && void 0 !== LH ? LH : []).length >= 3 && ! function(HH) {
```

#### 1703. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17184` → after: `L17184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17184) · [Before (L17184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17184)

```diff
-       const zU = null !== (XU = UU.replace(qd, " ").match(/[A-Za-z][\w'-]*/g)) && void 0 !== XU ? XU : [],
+       const LH = null !== (BH = HH.replace(bb, " ").match(/[A-Za-z][\w'-]*/g)) && void 0 !== BH ? BH : [],
```

#### 1704. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17191` → after: `L17191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17191) · [Before (L17191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17191)

```diff
-       if ((!/^[A-Z]/.test(AU[0]) || Od.test(UU.slice(0, AU.index))) && Vd(XU)) yU(XU, AU.index + AU[0].length - XU.length, null !== (QU = AU[1]) && void 0 !== QU ? QU : null)
+       if ((!/^[A-Z]/.test(hH[0]) || kb.test(HH.slice(0, hH.index))) && eb(BH)) rH(BH, hH.index + hH[0].length - BH.length, null !== (SH = hH[1]) && void 0 !== SH ? SH : null)
```

#### 1705. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17198` → after: `L17198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17198) · [Before (L17198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17198)

```diff
-   const zU = null !== (XU = Hd(UU).pop()) && void 0 !== XU ? XU : "";
+   const LH = null !== (BH = lb(HH).pop()) && void 0 !== BH ? BH : "";
```

#### 1706. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17207` → after: `L17207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17207) · [Before (L17207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17207)

```diff
-       zU.push(null !== (cU = null !== (yU = XU[1]) && void 0 !== yU ? yU : XU[2]) && void 0 !== cU ? cU : XU[3])
+       LH.push(null !== (AH = null !== (rH = BH[1]) && void 0 !== rH ? rH : BH[2]) && void 0 !== AH ? AH : BH[3])
```

#### 1707. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17213` → after: `L17213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17213) · [Before (L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17213)

```diff
-     zU.push(null !== (QU = AU[1]) && void 0 !== QU ? QU : AU[2])
+     LH.push(null !== (SH = hH[1]) && void 0 !== SH ? SH : hH[2])
```

#### 1708. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17245` → after: `L17245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17245) · [Before (L17245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17245)

```diff
-   const zU = null !== (XU = Hd(UU).pop()) && void 0 !== XU ? XU : "";
+   const LH = null !== (BH = lb(HH).pop()) && void 0 !== BH ? BH : "";
```

#### 1709. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17261-L17262` → after: `L17261-L17262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17261-L17262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17261-L17262) · [Before (L17261-L17262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17261-L17262)

```diff
-     NU = null === (cU = null === EU ? null !== (yU = null === YU || void 0 === YU ? void 0 : YU[2]) && void 0 !== yU ? yU : null === YU || void 0 === YU ? void 0 : YU[3] : null !== (QU = null !== (AU = EU[1]) && void 0 !== AU ? AU : EU[2]) && void 0 !== QU ? QU : EU[3]) || void 0 … [truncated]
-     IU = (null !== (FU = null !== (oU = null === EU || void 0 === EU ? void 0 : EU[4]) && void 0 !== oU ? oU : null === YU || void 0 === YU ? void 0 : YU[1]) && void 0 !== FU ? FU : "").toLowerCase();
+     GH = null === (AH = null === EH ? null !== (rH = null === XH || void 0 === XH ? void 0 : XH[2]) && void 0 !== rH ? rH : null === XH || void 0 === XH ? void 0 : XH[3] : null !== (SH = null !== (hH = EH[1]) && void 0 !== hH ? hH : EH[2]) && void 0 !== SH ? SH : EH[3]) || void 0 … [truncated]
+     YH = (null !== (tH = null !== (zH = null === EH || void 0 === EH ? void 0 : EH[4]) && void 0 !== zH ? zH : null === XH || void 0 === XH ? void 0 : XH[1]) && void 0 !== tH ? tH : "").toLowerCase();
```

#### 1710. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17268` → after: `L17268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17268) · [Before (L17268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17268)

```diff
-     return [...XU.names.filter((UU => (0, vQ.e)(XU.gameText, new RegExp(`${(0,MQ.h)(UU.toLowerCase())}(?![\\w$])`), (0, vQ.j)("\\w$")).length > 0)), ...(null !== (aU = null === zU || void 0 === zU ? void 0 : zU.events) && void 0 !== aU ? aU : []).flatMap((UU => {
+     return [...BH.names.filter((HH => (0, jS.c)(BH.gameText, new RegExp(`${(0,RS.e)(HH.toLowerCase())}(?![\\w$])`), (0, jS.i)("\\w$")).length > 0)), ...(null !== (QH = null === LH || void 0 === LH ? void 0 : LH.events) && void 0 !== QH ? QH : []).flatMap((HH => {
```

#### 1711. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17273` → after: `L17273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17273) · [Before (L17273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17273)

```diff
-     })), ...(null !== (tU = null === zU || void 0 === zU ? void 0 : zU.calls) && void 0 !== tU ? tU : []).flatMap((UU => {
+     })), ...(null !== (WH = null === LH || void 0 === LH ? void 0 : LH.calls) && void 0 !== WH ? WH : []).flatMap((HH => {
```

#### 1712. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17287` → after: `L17287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17287) · [Before (L17287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17287)

```diff
-   return [...XU.texts, ...(null !== (DU = null === zU || void 0 === zU ? void 0 : zU.messages) && void 0 !== DU ? DU : []).map((UU => {
+   return [...BH.texts, ...(null !== (CH = null === LH || void 0 === LH ? void 0 : LH.messages) && void 0 !== CH ? CH : []).map((HH => {
```

#### 1713. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17292` → after: `L17292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17292) · [Before (L17292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17292)

```diff
-   }))].some((UU => ` ${bd(UU)} `.includes(` ${pU} `))) ? {
+   }))].some((HH => ` ${wb(HH)} `.includes(` ${uH} `))) ? {
```

#### 1714. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17347` → after: `L17347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17347) · [Before (L17347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17347)

```diff
-     FU = [...XU.callbacks, ...null !== (cU = XU.functions) && void 0 !== cU ? cU : []].filter((UU => UU.name === AU)),
+     tH = [...BH.callbacks, ...null !== (AH = BH.functions) && void 0 !== AH ? AH : []].filter((HH => HH.name === hH)),
```

#### 1715. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17358` → after: `L17358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17358) · [Before (L17358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17358)

```diff
-     if (void 0 !== (null !== (XU = zU[1]) && void 0 !== XU ? XU : zU[2])) return !0
+     if (void 0 !== (null !== (BH = LH[1]) && void 0 !== BH ? BH : LH[2])) return !0
```

#### 1716. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17366` → after: `L17366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17366) · [Before (L17366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17366)

```diff
-   if (null === UU || null === XU || null === zU || void 0 === zU || UU.length > MQ.x || "" === UU.trim()) return null;
+   if (null === HH || null === BH || null === LH || void 0 === LH || HH.length > RS.p || "" === HH.trim()) return null;
```

#### 1717. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17374` → after: `L17374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17374) · [Before (L17374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17374)

```diff
-       oU = [...(null === zU ? FU : FU.filter((UU => UU.name.startsWith(`${zU}.`)))).map((UU => {
+       zH = [...(null === LH ? tH : tH.filter((HH => HH.name.startsWith(`${LH}.`)))).map((HH => {
```

#### 1718. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17379` → after: `L17379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17379) · [Before (L17379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17379)

```diff
-       })), ...[...null !== (yU = cU.messages) && void 0 !== yU ? yU : [], ...null !== (QU = cU.calls) && void 0 !== QU ? QU : []].flatMap((UU => {
+       })), ...[...null !== (rH = AH.messages) && void 0 !== rH ? rH : [], ...null !== (SH = AH.calls) && void 0 !== SH ? SH : []].flatMap((HH => {
```

#### 1719. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17385` → after: `L17385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17385) · [Before (L17385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17385)

```diff
-       DU = new Map(oU.map((UU => [`${UU.source}\n${UU.line}`, UU])));
+       CH = new Map(zH.map((HH => [`${HH.source}\n${HH.line}`, HH])));
```

#### 1720. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17395` → after: `L17395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17395) · [Before (L17395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17395)

```diff
-   }(UU, FU[1], null !== (oU = null === (DU = QL.exec(XU)) || void 0 === DU ? void 0 : DU[1]) && void 0 !== oU ? oU : null, zU);
+   }(HH, tH[1], null !== (zH = null === (CH = yb.exec(BH)) || void 0 === CH ? void 0 : CH[1]) && void 0 !== zH ? zH : null, LH);
```

#### 1721. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17401` → after: `L17401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17401) · [Before (L17401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17401)

```diff
-   } = EU, IU = [...zU.callbacks, ...null !== (cU = zU.functions) && void 0 !== cU ? cU : []].find((UU => UU.name === YU)), pU = function(UU, XU, zU) {
+   } = EH, YH = [...LH.callbacks, ...null !== (AH = LH.functions) && void 0 !== AH ? AH : []].find((HH => HH.name === XH)), uH = function(HH, BH, LH) {
```

#### 1722. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17404` → after: `L17404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17404) · [Before (L17404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17404)

```diff
-       QU = null !== yU && (null !== (cU = yU[1]) && void 0 !== cU ? cU : yU[2]) === XU ? yU[3] : UU;
+       SH = null !== rH && (null !== (AH = rH[1]) && void 0 !== AH ? AH : rH[2]) === BH ? rH[3] : HH;
```

#### 1723. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17410` → after: `L17410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17410) · [Before (L17410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17410)

```diff
-             AU = null !== (XU = null !== (zU = null !== (cU = null !== (yU = null === QU || void 0 === QU ? void 0 : QU[1]) && void 0 !== yU ? yU : null === QU || void 0 === QU ? void 0 : QU[2]) && void 0 !== cU ? cU : null === QU || void 0 === QU ? void 0 : QU[3]) && void 0 !==  … [truncated]
+             hH = null !== (BH = null !== (LH = null !== (AH = null !== (rH = null === SH || void 0 === SH ? void 0 : SH[1]) && void 0 !== rH ? rH : null === SH || void 0 === SH ? void 0 : SH[2]) && void 0 !== AH ? AH : null === SH || void 0 === SH ? void 0 : SH[3]) && void 0 !==  … [truncated]
```

#### 1724. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17412` → after: `L17412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17412) · [Before (L17412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17412)

```diff
-           return FU.every((UU => /^[A-Za-z_$][\w$]*$/.test(UU))) ? FU : null
+           return tH.every((HH => /^[A-Za-z_$][\w$]*$/.test(HH))) ? tH : null
```

#### 1725. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L17419` → after: `L17419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR17419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L17419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/117.js#L17419) · [Before (L17419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/117.js#L17419)

```diff
-   }(UU, YU, null === IU || void 0 === IU ? void 0 : IU.params), aU = new Set([...NU.next, ...[...null !== (yU = zU.messages) && void 0 !== yU ? yU : [], ...null !== (QU = zU.calls) && void 0 !== QU ? QU : []].flatMap((UU => {
+   }(HH, XH, null === YH || void 0 === YH ? void 0 : YH.params), QH = new Set([...GH.next, ...[...null !== (rH = LH.messages) && void 0 !== rH ? rH : [], ...null !== (SH = LH.calls) && void 0 !== SH ? SH : []].flatMap((HH => {
```
