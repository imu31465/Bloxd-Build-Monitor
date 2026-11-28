# Changed — Bundle Modifications Report (Part 023 / 154)

- **Updated at**: `2026-11-28T21:24 JST`
- **Part**: `23 / 154` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 022](part-022.md) · [Part 024 →](part-024.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (yteou.5361c997 → welxxc.ffac0572 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (2886 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1250. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14701-L14721` → after: `L14701-L14721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14701-L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14701-L14721) · [Before (L14701-L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14701-L14721)

```diff
-             var Rd;
-             const Od = YY(dd).find((dd => /\b(check|target|aim)\b/i.test(dd) && null !== LY(dd)));
-             Fd = null !== (Rd = LY(dd.target)) && void 0 !== Rd ? Rd : LY(null !== Od && void 0 !== Od ? Od : null)
-           }
-           return null === Fd || ! function(dd, Od) {
-             return Math.abs(dd - Od) <= (Od >= 10 ? Math.max(.5, .01 * Od) : .05) + 1e-9
-           }(Fd.now, Wd) || Fd.target <= Wd ? null : Fd.target
-         }
- 
-         function cY(dd, Od, md, Wd) {
-           var Fd, Rd, Xd;
-           const Kd = function(dd, Od) {
-             const md = null === dd.target ? void 0 : pY(dd.target)[0];
-             if (void 0 !== md) return md;
-             if (null !== Od) return Od.statKey;
-             const Wd = YY(dd).find((dd => /\b(check|target|aim)\b/i.test(dd) && pY(dd).length > 0));
- ... (5 more removed lines; see GitHub link above)
+             var pb;
+             const wb = mh(bb).find((bb => /\b(check|target|aim)\b/i.test(bb) && null !== Nh(bb)));
+             Hb = null !== (pb = Nh(bb.target)) && void 0 !== pb ? pb : Nh(null !== wb && void 0 !== wb ? wb : null)
+           }
+           return null === Hb || ! function(bb, wb) {
+             return Math.abs(bb - wb) <= (wb >= 10 ? Math.max(.5, .01 * wb) : .05) + 1e-9
+           }(Hb.now, eb) || Hb.target <= eb ? null : Hb.target
+         }
+ 
+         function Gh(bb, wb, Mb, eb) {
+           var Hb, pb, Vb;
+           const gb = function(bb, wb) {
+             const Mb = null === bb.target ? void 0 : sh(bb.target)[0];
+             if (void 0 !== Mb) return Mb;
+             if (null !== wb) return wb.statKey;
+             const eb = mh(bb).find((bb => /\b(check|target|aim)\b/i.test(bb) && sh(bb).length > 0));
+ ... (5 more added lines; see GitHub link above)
```

#### 1251. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14724-L14743` → after: `L14724-L14743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14724-L14743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14724-L14743) · [Before (L14724-L14743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14724-L14743)

```diff
-                 var Fd, Rd, Xd;
-                 const dd = Wd.sessions;
-                 if (null === dd) return null;
-                 const md = function(dd) {
-                     var Od;
-                     if (null === dd) return null;
-                     if (/\bfirst minute\b/i.test(dd)) return 1;
-                     const md = dd.replace(/\[\[[^\]]*\]\]/g, ""),
-                       Wd = null !== (Od = (0, jR.g)(md, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, jR.l)("\\w."))[0]) && void 0 !== Od ? Od : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(md);
-                     return null === Wd ? null : Number(Wd[1])
-                   }(Od.target),
-                   Kd = null === md ? function(dd, Od) {
-                     var md;
-                     if (null === dd) return null;
-                     const Wd = dd => dd >= 1 && void 0 !== Od[dd],
-                       Fd = uY.exec(dd);
- ... (4 more removed lines; see GitHub link above)
+                 var Hb, pb, Vb;
+                 const bb = eb.sessions;
+                 if (null === bb) return null;
+                 const Mb = function(bb) {
+                     var wb;
+                     if (null === bb) return null;
+                     if (/\bfirst minute\b/i.test(bb)) return 1;
+                     const Mb = bb.replace(/\[\[[^\]]*\]\]/g, ""),
+                       eb = null !== (wb = (0, Gp.d)(Mb, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, Gp.h)("\\w."))[0]) && void 0 !== wb ? wb : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(Mb);
+                     return null === eb ? null : Number(eb[1])
+                   }(wb.target),
+                   gb = null === Mb ? function(bb, wb) {
+                     var Mb;
+                     if (null === bb) return null;
+                     const eb = bb => bb >= 1 && void 0 !== wb[bb],
+                       Hb = Yh.exec(bb);
+ ... (4 more added lines; see GitHub link above)
```

#### 1252. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14747-L14754` → after: `L14747-L14754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14747-L14754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14747-L14754) · [Before (L14747-L14754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14747-L14754)

```diff
-                     for (const Kd of SY) {
-                       const Od = Kd.exec(dd);
-                       if (null !== Od) {
-                         const dd = iY(Od[1]),
-                           md = VY.find((Od => Od > dd && Wd(Od)));
-                         return void 0 === md ? null : {
-                           minutes: md,
-                           after: dd
+                     for (const gb of Dh) {
+                       const wb = gb.exec(bb);
+                       if (null !== wb) {
+                         const bb = fh(wb[1]),
+                           Mb = Zh.find((wb => wb > bb && eb(wb)));
+                         return void 0 === Mb ? null : {
+                           minutes: Mb,
+                           after: bb
```

#### 1253. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14758-L14761` → after: `L14758-L14761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14758-L14761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14758-L14761) · [Before (L14758-L14761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14758-L14761)

```diff
-                     const Rd = sY.exec(dd),
-                       Xd = null === Rd ? null : iY(null !== (md = Rd[1]) && void 0 !== md ? md : Rd[2]);
-                     return null !== Xd && Wd(Xd) ? {
-                       minutes: Xd,
+                     const pb = ch.exec(bb),
+                       Vb = null === pb ? null : fh(null !== (Mb = pb[1]) && void 0 !== Mb ? Mb : pb[2]);
+                     return null !== Vb && eb(Vb) ? {
+                       minutes: Vb,
```

#### 1254. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14764-L14769` → after: `L14764-L14769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14764-L14769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14764-L14769) · [Before (L14764-L14769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14764-L14769)

```diff
-                   }(Od.title, dd.percents) : null,
-                   hd = null !== (Fd = null !== md && void 0 !== md ? md : null === Kd || void 0 === Kd ? void 0 : Kd.minutes) && void 0 !== Fd ? Fd : "dropoff" === (null === (Rd = Wd.problem) || void 0 === Rd ? void 0 : Rd.kind) ? Wd.problem.minute : TO.k,
-                   vd = dd.percents[hd],
-                   Qd = AY(dd.days, Wd.dailyPlays);
-                 return void 0 === vd || hd < 1 || null === Qd ? null : {
-                   measure: null === Kd || null === Kd.after ? {
+                   }(wb.title, bb.percents) : null,
+                   lb = null !== (Hb = null !== Mb && void 0 !== Mb ? Mb : null === gb || void 0 === gb ? void 0 : gb.minutes) && void 0 !== Hb ? Hb : "dropoff" === (null === (pb = eb.problem) || void 0 === pb ? void 0 : pb.kind) ? eb.problem.minute : Fw.l,
+                   Lb = bb.percents[lb],
+                   Ib = Ah(bb.days, eb.dailyPlays);
+                 return void 0 === Lb || lb < 1 || null === Ib ? null : {
+                   measure: null === gb || null === gb.after ? {
```

#### 1255. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14771` → after: `L14771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14771) · [Before (L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14771)

```diff
-                     minutes: hd
+                     minutes: lb
```

#### 1256. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14774-L14775` → after: `L14774-L14775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14774-L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14774-L14775) · [Before (L14774-L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14774-L14775)

```diff
-                     minutes: hd,
-                     after: Kd.after
+                     minutes: lb,
+                     after: gb.after
```

#### 1257. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14777-L14779` → after: `L14777-L14779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14777-L14779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14777-L14779) · [Before (L14777-L14779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14777-L14779)

```diff
-                   now: Math.round(vd),
-                   helped: JY(vd, null !== (Xd = dd.typicalPercents[hd]) && void 0 !== Xd ? Xd : null),
-                   wait: Qd
+                   now: Math.round(Lb),
+                   helped: jh(Lb, null !== (Vb = bb.typicalPercents[lb]) && void 0 !== Vb ? Vb : null),
+                   wait: Ib
```

#### 1258. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14783-L14788` → after: `L14783-L14788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14783-L14788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14783-L14788) · [Before (L14783-L14788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14783-L14788)

```diff
-                 const dd = wY(Wd.flowSteps, md, Wd.problem);
-                 if (null === dd || dd.fromPlayers < hY) return null;
-                 const Od = function(dd, Od, md) {
-                     const Wd = Math.max(Od.fromPlayers, ...dd.filter((dd => dd.group === Od.group)).map((dd => dd.fromPlayers)));
-                     return null === md || md <= 0 || Wd <= md ? {
-                       players: Od.fromPlayers,
+                 const bb = zh(eb.flowSteps, Mb, eb.problem);
+                 if (null === bb || bb.fromPlayers < gh) return null;
+                 const wb = function(bb, wb, Mb) {
+                     const eb = Math.max(wb.fromPlayers, ...bb.filter((bb => bb.group === wb.group)).map((bb => bb.fromPlayers)));
+                     return null === Mb || Mb <= 0 || eb <= Mb ? {
+                       players: wb.fromPlayers,
```

#### 1259. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14791` → after: `L14791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14791) · [Before (L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14791)

```diff
-                       players: Od.fromPlayers * md / Wd,
+                       players: wb.fromPlayers * Mb / eb,
```

#### 1260. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14794-L14796` → after: `L14794-L14796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14794-L14796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14794-L14796) · [Before (L14794-L14796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14794-L14796)

```diff
-                   }(Wd.flowSteps, dd, Wd.weeklyPlayers),
-                   Fd = Od.isScaled && Od.players < 100 ? Math.round(Od.players) : aY(Od.players),
-                   Rd = {
+                   }(eb.flowSteps, bb, eb.weeklyPlayers),
+                   Hb = wb.isScaled && wb.players < 100 ? Math.round(wb.players) : Xh(wb.players),
+                   pb = {
```

#### 1261. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14798-L14799` → after: `L14798-L14799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14798-L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14798-L14799) · [Before (L14798-L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14798-L14799)

```diff
-                     days: qY,
-                     count: Fd,
+                     days: th,
+                     count: Hb,
```

#### 1262. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14805-L14807` → after: `L14805-L14807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14805-L14807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14805-L14807) · [Before (L14805-L14807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14805-L14807)

```diff
-                     from: dd.from,
-                     to: dd.to,
-                     isOrLater: dd.isOrLater
+                     from: bb.from,
+                     to: bb.to,
+                     isOrLater: bb.isOrLater
```

#### 1263. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14809-L14811` → after: `L14809-L14811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14809-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14809-L14811) · [Before (L14809-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14809-L14811)

```diff
-                   now: Math.round(dd.share),
-                   helped: JY(dd.share, DY(Wd.flowSteps, dd)),
-                   wait: Rd
+                   now: Math.round(bb.share),
+                   helped: jh(bb.share, ah(eb.flowSteps, bb)),
+                   wait: pb
```

#### 1264. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14815-L14819` → after: `L14815-L14819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14815-L14819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14815-L14819) · [Before (L14815-L14819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14815-L14819)

```diff
-                 const dd = wY(Wd.progressSteps, md, Wd.problem);
-                 if (null === dd || dd.fromPlayers < hY) return null;
-                 const Od = JY(dd.share, DY(Wd.progressSteps, dd)),
-                   Fd = null !== Wd.weeklyPlayers ? 2 * Wd.weeklyPlayers / qY : null === Wd.dailyPlays ? 1 / 0 : 2 * Wd.dailyPlays,
-                   Rd = aY(Math.max(KY, Math.min(.1 * dd.fromPlayers, Fd)));
+                 const bb = zh(eb.progressSteps, Mb, eb.problem);
+                 if (null === bb || bb.fromPlayers < gh) return null;
+                 const wb = jh(bb.share, ah(eb.progressSteps, bb)),
+                   Hb = null !== eb.weeklyPlayers ? 2 * eb.weeklyPlayers / th : null === eb.dailyPlays ? 1 / 0 : 2 * eb.dailyPlays,
+                   pb = Xh(Math.max(Vh, Math.min(.1 * bb.fromPlayers, Hb)));
```

#### 1265. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14823-L14826` → after: `L14823-L14826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14823-L14826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14823-L14826) · [Before (L14823-L14826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14823-L14826)

```diff
-                     from: dd.from,
-                     to: dd.to,
-                     fromPlayers: dd.fromPlayers,
-                     toPlayers: dd.toPlayers
+                     from: bb.from,
+                     to: bb.to,
+                     fromPlayers: bb.fromPlayers,
+                     toPlayers: bb.toPlayers
```

#### 1266. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14828-L14830` → after: `L14828-L14830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14828-L14830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14828-L14830) · [Before (L14828-L14830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14828-L14830)

```diff
-                   selection: dd.selection,
-                   now: Math.round(dd.share),
-                   helped: Od,
+                   selection: bb.selection,
+                   now: Math.round(bb.share),
+                   helped: wb,
```

#### 1267. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14833-L14837` → after: `L14833-L14837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14833-L14837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14833-L14837) · [Before (L14833-L14837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14833-L14837)

```diff
-                     at: dd.from,
-                     players: dd.fromPlayers + Rd,
-                     more: Rd,
-                     helpedAt: dd.to,
-                     helpedPlayers: jY(dd.toPlayers, Od, Rd)
+                     at: bb.from,
+                     players: bb.fromPlayers + pb,
+                     more: pb,
+                     helpedAt: bb.to,
+                     helpedPlayers: qh(bb.toPlayers, wb, pb)
```

#### 1268. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14842-L14847` → after: `L14842-L14847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14842-L14847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14842-L14847) · [Before (L14842-L14847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14842-L14847)

```diff
-                 var Kd;
-                 const dd = Wd.playsPerDay,
-                   Od = rY(Wd.dailySeries.plays),
-                   md = GY(Wd.dailyPlays, Od);
-                 if (null === dd || null === md) return null;
-                 const Fd = Math.max(UY(dd.now, dd.typical, 1), dd.now + (null !== (Kd = null === Od || void 0 === Od ? void 0 : Od.averageMargin) && void 0 !== Kd ? Kd : 0));
+                 var gb;
+                 const bb = eb.playsPerDay,
+                   wb = Wh(eb.dailySeries.plays),
+                   Mb = Jh(eb.dailyPlays, wb);
+                 if (null === bb || null === Mb) return null;
+                 const Hb = Math.max(Kh(bb.now, bb.typical, 1), bb.now + (null !== (gb = null === wb || void 0 === wb ? void 0 : wb.averageMargin) && void 0 !== gb ? gb : 0));
```

#### 1269. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14852-L14855` → after: `L14852-L14855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14852-L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14852-L14855) · [Before (L14852-L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14852-L14855)

```diff
-                   now: Math.round(dd.now),
-                   helped: Fd < 1e3 ? Math.round(Fd) : Number(Fd.toPrecision(3)),
-                   wait: "days" === md.kind && null !== md.swing ? {
-                     ...md,
+                   now: Math.round(bb.now),
+                   helped: Hb < 1e3 ? Math.round(Hb) : Number(Hb.toPrecision(3)),
+                   wait: "days" === Mb.kind && null !== Mb.swing ? {
+                     ...Mb,
```

#### 1270. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14857-L14858` → after: `L14857-L14858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14857-L14858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14857-L14858) · [Before (L14857-L14858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14857-L14858)

```diff
-                       low: EY(md.swing.low),
-                       high: EY(md.swing.high)
+                       low: xh(Mb.swing.low),
+                       high: xh(Mb.swing.high)
```

#### 1271. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14860` → after: `L14860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14860) · [Before (L14860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14860)

```diff
-                   } : md
+                   } : Mb
```

#### 1272. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14864-L14869` → after: `L14864-L14869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14864-L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14864-L14869) · [Before (L14864-L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14864-L14869)

```diff
-                 var hd;
-                 const dd = Wd.averageSessionMinutes,
-                   Od = rY(Wd.dailySeries.sessionMinutes),
-                   md = GY(Wd.dailyPlays, Od);
-                 if (null === dd || null === md) return null;
-                 const Fd = dd => Math.round(10 * dd) / 10;
+                 var lb;
+                 const bb = eb.averageSessionMinutes,
+                   wb = Wh(eb.dailySeries.sessionMinutes),
+                   Mb = Jh(eb.dailyPlays, wb);
+                 if (null === bb || null === Mb) return null;
+                 const Hb = bb => Math.round(10 * bb) / 10;
```

#### 1273. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14874-L14877` → after: `L14874-L14877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14874-L14877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14874-L14877) · [Before (L14874-L14877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14874-L14877)

```diff
-                   now: Fd(dd.now),
-                   helped: Fd(Math.max(UY(dd.now, dd.typical, .1), dd.now + (null !== (hd = null === Od || void 0 === Od ? void 0 : Od.averageMargin) && void 0 !== hd ? hd : 0))),
-                   wait: "days" === md.kind && null !== md.swing ? {
-                     ...md,
+                   now: Hb(bb.now),
+                   helped: Hb(Math.max(Kh(bb.now, bb.typical, .1), bb.now + (null !== (lb = null === wb || void 0 === wb ? void 0 : wb.averageMargin) && void 0 !== lb ? lb : 0))),
+                   wait: "days" === Mb.kind && null !== Mb.swing ? {
+                     ...Mb,
```

#### 1274. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14879-L14880` → after: `L14879-L14880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14879-L14880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14879-L14880) · [Before (L14879-L14880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14879-L14880)

```diff
-                       low: Fd(md.swing.low),
-                       high: Fd(md.swing.high)
+                       low: Hb(Mb.swing.low),
+                       high: Hb(Mb.swing.high)
```

#### 1275. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14882` → after: `L14882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14882) · [Before (L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14882)

```diff
-                   } : md
+                   } : Mb
```

#### 1276. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14886-L14889` → after: `L14886-L14889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14886-L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14886-L14889) · [Before (L14886-L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14886-L14889)

```diff
-                 const dd = Wd.sessionsPerPlayer,
-                   Od = null === dd ? null : AY(dd.days, Wd.dailyPlays);
-                 if (null === dd || null === Od) return null;
-                 const md = dd => Math.round(100 * dd) / 100;
+                 const bb = eb.sessionsPerPlayer,
+                   wb = null === bb ? null : Ah(bb.days, eb.dailyPlays);
+                 if (null === bb || null === wb) return null;
+                 const Mb = bb => Math.round(100 * bb) / 100;
```

#### 1277. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14893` → after: `L14893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14893) · [Before (L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14893)

```diff
-                     days: dd.days
+                     days: bb.days
```

#### 1278. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14895-L14897` → after: `L14895-L14897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14895-L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14895-L14897) · [Before (L14895-L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14895-L14897)

```diff
-                   now: md(dd.now),
-                   helped: md(dd.now + Math.max(.05, null === dd.typical ? 0 : (dd.typical - dd.now) * QY)),
-                   wait: Od
+                   now: Mb(bb.now),
+                   helped: Mb(bb.now + Math.max(.05, null === bb.typical ? 0 : (bb.typical - bb.now) * Lh)),
+                   wait: wb
```

#### 1279. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14903-L14907` → after: `L14903-L14907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14903-L14907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14903-L14907) · [Before (L14903-L14907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14903-L14907)

```diff
-           }(Kd, dd, [null !== (Fd = dd.title) && void 0 !== Fd ? Fd : "", ...YY(dd), null !== (Rd = dd.target) && void 0 !== Rd ? Rd : ""].join("\n"), Od);
-           if (null === hd) return null;
-           const vd = zY(dd, md, Kd, hd.now);
-           let Qd = null === vd ? hd.helped : Math.min(hd.helped, vd);
-           if (null !== vd && vd - Qd < (Qd - hd.now) / 2 && (Qd = vd), Qd <= hd.now) return null;
+           }(gb, bb, [null !== (Hb = bb.title) && void 0 !== Hb ? Hb : "", ...mh(bb), null !== (pb = bb.target) && void 0 !== pb ? pb : ""].join("\n"), wb);
+           if (null === lb) return null;
+           const Lb = Qh(bb, Mb, gb, lb.now);
+           let Ib = null === Lb ? lb.helped : Math.min(lb.helped, Lb);
+           if (null !== Lb && Lb - Ib < (Ib - lb.now) / 2 && (Ib = Lb), Ib <= lb.now) return null;
```

#### 1280. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14909-L14913` → after: `L14909-L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14909-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14909-L14913) · [Before (L14909-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14909-L14913)

```diff
-             measure: td
-           } = hd, od = "players" === hd.wait.kind && "progressStep" === td.kind ? {
-             ...hd.wait,
-             helpedPlayers: jY(td.toPlayers, Qd, hd.wait.more)
-           } : hd.wait;
+             measure: Ob
+           } = lb, Ub = "players" === lb.wait.kind && "progressStep" === Ob.kind ? {
+             ...lb.wait,
+             helpedPlayers: qh(Ob.toPlayers, Ib, lb.wait.more)
+           } : lb.wait;
```

#### 1281. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14915-L14921` → after: `L14915-L14921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14915-L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14915-L14921) · [Before (L14915-L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14915-L14921)

```diff
-             statKey: Kd,
-             ...hd,
-             selection: null !== (Xd = hd.selection) && void 0 !== Xd ? Xd : null,
-             helped: Qd,
-             goal: vd,
-             wait: od,
-             undo: nY(dd.code, Wd)
+             statKey: gb,
+             ...lb,
+             selection: null !== (Vb = lb.selection) && void 0 !== Vb ? Vb : null,
+             helped: Ib,
+             goal: Lb,
+             wait: Ub,
+             undo: Sh(bb.code, eb)
```

#### 1282. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14925-L14926` → after: `L14925-L14926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14925-L14926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14925-L14926) · [Before (L14925-L14926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14925-L14926)

```diff
-         function jY(dd, Od, md) {
-           return Math.round(dd + Od / 100 * md)
+         function qh(bb, wb, Mb) {
+           return Math.round(bb + wb / 100 * Mb)
```

#### 1283. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14929-L14935` → after: `L14929-L14935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14929-L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14929-L14935) · [Before (L14929-L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14929-L14935)

```diff
-         function DY(dd, Od) {
-           return function(dd) {
-             if (0 === dd.length) return null;
-             const Od = [...dd].sort(((dd, Od) => dd - Od)),
-               md = Math.floor(Od.length / 2);
-             return Od.length % 2 === 1 ? Od[md] : (Od[md - 1] + Od[md]) / 2
-           }(dd.filter((dd => dd !== Od && dd.group === Od.group && !dd.isBranch && dd.fromPlayers >= hY)).map((dd => dd.share)))
+         function ah(bb, wb) {
+           return function(bb) {
+             if (0 === bb.length) return null;
+             const wb = [...bb].sort(((bb, wb) => bb - wb)),
+               Mb = Math.floor(wb.length / 2);
+             return wb.length % 2 === 1 ? wb[Mb] : (wb[Mb - 1] + wb[Mb]) / 2
+           }(bb.filter((bb => bb !== wb && bb.group === wb.group && !bb.isBranch && bb.fromPlayers >= gh)).map((bb => bb.share)))
```

#### 1284. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14938-L14939` → after: `L14938-L14939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14938-L14939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14938-L14939) · [Before (L14938-L14939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14938-L14939)

```diff
-         function eY(dd) {
-           return dd.toLocaleString("en-US", {
+         function ih(bb) {
+           return bb.toLocaleString("en-US", {
```

#### 1285. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14944-L14945` → after: `L14944-L14945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14944-L14945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14944-L14945) · [Before (L14944-L14945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14944-L14945)

```diff
-         function IY(dd, Od) {
-           return 1 === dd ? Od("last 1 minute or more") : `${Od("last")} ${dd} ${Od("minutes or more")}`
+         function uh(bb, wb) {
+           return 1 === bb ? wb("last 1 minute or more") : `${wb("last")} ${bb} ${wb("minutes or more")}`
```

#### 1286. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14948` → after: `L14948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14948) · [Before (L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14948)

```diff
-         function lY(dd) {
+         function dh(bb) {
```

#### 1287. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14950-L14951` → after: `L14950-L14951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14950-L14951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14950-L14951) · [Before (L14950-L14951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14950-L14951)

```diff
-             stat: dd.statKey,
-             selection: dd.selection
+             stat: bb.statKey,
+             selection: bb.selection
```

#### 1288. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14955` → after: `L14955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14955) · [Before (L14955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14955)

```diff
-         function CY(dd, Od) {
+         function Ph(bb, wb) {
```

#### 1289. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14957-L14962` → after: `L14957-L14962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14957-L14962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14957-L14962) · [Before (L14957-L14962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14957-L14962)

```diff
-             measure: md,
-             now: Wd,
-             wait: Fd
-           } = dd, Rd = "players" === Fd.kind || 7 === Fd.days ? Od("in a week") : `${Od("in")} ${Fd.days} ${Od("days")}`;
-           let Xd;
-           switch (md.kind) {
+             measure: Mb,
+             now: eb,
+             wait: Hb
+           } = bb, pb = "players" === Hb.kind || 7 === Hb.days ? wb("in a week") : `${wb("in")} ${Hb.days} ${wb("days")}`;
+           let Vb;
+           switch (Mb.kind) {
```

#### 1290. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14964` → after: `L14964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14964) · [Before (L14964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14964)

```diff
-               Xd = [`${Od("if more than")} ${Wd} ${Od("in 100")} ${Od("sessions")} ${IY(md.minutes,Od)}`];
+               Vb = [`${wb("if more than")} ${eb} ${wb("in 100")} ${wb("sessions")} ${uh(Mb.minutes,wb)}`];
```

#### 1291. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14967-L14971` → after: `L14967-L14971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14967-L14971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14967-L14971) · [Before (L14967-L14971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14967-L14971)

```diff
-               Xd = [`${Od("if more players at")} `, {
-                 code: md.from
-               }, ` ${Od("reach")} `, {
-                 code: md.to
-               }, md.isOrLater ? ` ${Od("or a later one")}` : "", ` ${Od("than now")} (${Wd} ${Od("in 100")})`];
+               Vb = [`${wb("if more players at")} `, {
+                 code: Mb.from
+               }, ` ${wb("reach")} `, {
+                 code: Mb.to
+               }, Mb.isOrLater ? ` ${wb("or a later one")}` : "", ` ${wb("than now")} (${eb} ${wb("in 100")})`];
```

#### 1292. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14974` → after: `L14974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14974) · [Before (L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14974)

```diff
-               Xd = [`${Od("if more players at")} ${md.from} ${Od("reach")} ${md.to} ${Od("than now")} (${Wd} ${Od("in 100")})`];
+               Vb = [`${wb("if more players at")} ${Mb.from} ${wb("reach")} ${Mb.to} ${wb("than now")} (${eb} ${wb("in 100")})`];
```

#### 1293. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14977` → after: `L14977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14977) · [Before (L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14977)

```diff
-               Xd = [Od("if most days have more plays than now")];
+               Vb = [wb("if most days have more plays than now")];
```

#### 1294. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14980` → after: `L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14980) · [Before (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14980)

```diff
-               Xd = [`${Od("if sessions last longer than now")} (${eY(Wd)} ${Od("minutes")})`];
+               Vb = [`${wb("if sessions last longer than now")} (${ih(eb)} ${wb("minutes")})`];
```

#### 1295. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14983` → after: `L14983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14983) · [Before (L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14983)

```diff
-               Xd = [Od("if players come back more often than now")]
+               Vb = [wb("if players come back more often than now")]
```

#### 1296. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14985` → after: `L14985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14985) · [Before (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14985)

```diff
-           return [`${Od("Check")} `, lY(dd), ` ${Rd}: `, ...Xd, `, ${Od("it helped")}.`]
+           return [`${wb("Check")} `, dh(bb), ` ${pb}: `, ...Vb, `, ${wb("it helped")}.`]
```

#### 1297. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14987` → after: `L14987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14987) · [Before (L14987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14987)

```diff
-         const ZY = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, kY = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, fY = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
+         const nh = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, yh = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, oh = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
```

#### 1298. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14989-L14990` → after: `L14989-L14990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14989-L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14989-L14990) · [Before (L14989-L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14989-L14990)

```diff
-         function MY(dd) {
-           return ZY.test(dd) || kY.test(dd) && !fY.test(dd)
+         function Th(bb) {
+           return nh.test(bb) || yh.test(bb) && !oh.test(bb)
```

#### 1299. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14993-L15004` → after: `L14993-L15004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14993-L15004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L14993-L15004) · [Before (L14993-L15004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L14993-L15004)

```diff
-         function dg(dd) {
-           let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           const md = dd.steps.filter((dd => MY(dd.text))),
-             Wd = new Set(Od ? md.slice(1) : md);
-           if (0 === Wd.size) return dd;
-           const Fd = dd => !Wd.has(dd),
-             Rd = dd.blocks.flatMap((dd => {
-               if ("list" !== dd.kind) return [dd];
-               const Od = dd.items.filter(Fd);
-               return 0 === Od.length ? [] : [{
-                 ...dd,
-                 items: Od
+         function kh(bb) {
+           let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           const Mb = bb.steps.filter((bb => Th(bb.text))),
+             eb = new Set(wb ? Mb.slice(1) : Mb);
+           if (0 === eb.size) return bb;
+           const Hb = bb => !eb.has(bb),
+             pb = bb.blocks.flatMap((bb => {
+               if ("list" !== bb.kind) return [bb];
+               const wb = bb.items.filter(Hb);
+               return 0 === wb.length ? [] : [{
+                 ...bb,
+                 items: wb
```

#### 1300. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15008-L15010` → after: `L15008-L15010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15008-L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15008-L15010) · [Before (L15008-L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15008-L15010)

```diff
-             ...dd,
-             blocks: Rd,
-             steps: dd.steps.filter(Fd)
+             ...bb,
+             blocks: pb,
+             steps: bb.steps.filter(Hb)
```

#### 1301. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15013` → after: `L15013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15013) · [Before (L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15013)

```diff
-         const Og = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, mg = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, Wg = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, Fg = new Set(["Math", "Date", "JSON", "cons … [truncated]
+         const bz = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, wz = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, Mz = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, ez = new Set(["Math", "Date", "JSON", "cons … [truncated]
```

#### 1302. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15015-L15018` → after: `L15015-L15018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15015-L15018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15015-L15018) · [Before (L15015-L15018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15015-L15018)

```diff
-         function Xg(dd, Od) {
-           for (const [md] of(null !== Od && void 0 !== Od ? Od : "").matchAll(Og)) {
-             dd.add(md);
-             for (const Od of md.split(".")) dd.add(Od)
+         function pz(bb, wb) {
+           for (const [Mb] of(null !== wb && void 0 !== wb ? wb : "").matchAll(bz)) {
+             bb.add(Mb);
+             for (const wb of Mb.split(".")) bb.add(wb)
```

#### 1303. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15022-L15028` → after: `L15022-L15028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15022-L15028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15022-L15028) · [Before (L15022-L15028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15022-L15028)

```diff
-         function Kg(dd) {
-           if (null === dd.worldCode || void 0 === dd.worldCode) return null;
-           const Od = [];
-           for (const Fd of [null === (md = dd.customEvents) || void 0 === md ? void 0 : md.byEvent, null === (Wd = dd.playerTotals) || void 0 === Wd ? void 0 : Wd.playerTotals]) {
-             var md, Wd;
-             mh(null !== Fd && void 0 !== Fd ? Fd : {}, ((dd, md, Wd) => {
-               Od.push(md, ...Object.keys(Wd))
+         function Vz(bb) {
+           if (null === bb.worldCode || void 0 === bb.worldCode) return null;
+           const wb = [];
+           for (const Hb of [null === (Mb = bb.customEvents) || void 0 === Mb ? void 0 : Mb.byEvent, null === (eb = bb.playerTotals) || void 0 === eb ? void 0 : eb.playerTotals]) {
+             var Mb, eb;
+             wl(null !== Hb && void 0 !== Hb ? Hb : {}, ((bb, Mb, eb) => {
+               wb.push(Mb, ...Object.keys(eb))
```

#### 1304. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15031-L15041` → after: `L15031-L15041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15031-L15041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15031-L15041) · [Before (L15031-L15041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15031-L15041)

```diff
-           return function(dd) {
-             let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-             const md = new Set(WQ.keys());
-             for (const Rd of [...Hv, ...Rg]) md.add(`api.${Rd}`);
-             for (const Rd of dd.constants)
-               for (const dd of [Rd.name, Rd.value, Rd.where, Rd.usedIn]) Xg(md, dd);
-             for (const Rd of dd.callbacks) {
-               Xg(md, Rd.name);
-               for (const dd of null !== (Wd = Rd.params) && void 0 !== Wd ? Wd : []) {
-                 var Wd;
-                 Xg(md, dd)
+           return function(bb) {
+             let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+             const Mb = new Set(MI.keys());
+             for (const pb of [...CL, ...Hz]) Mb.add(`api.${pb}`);
+             for (const pb of bb.constants)
+               for (const bb of [pb.name, pb.value, pb.where, pb.usedIn]) pz(Mb, bb);
+             for (const pb of bb.callbacks) {
+               pz(Mb, pb.name);
+               for (const bb of null !== (eb = pb.params) && void 0 !== eb ? eb : []) {
+                 var eb;
+                 pz(Mb, bb)
```

#### 1305. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15044-L15047` → after: `L15044-L15047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15044-L15047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15044-L15047) · [Before (L15044-L15047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15044-L15047)

```diff
-             for (const Rd of dd.analyticsHelpers) Xg(md, Rd);
-             for (const Rd of null !== (Fd = dd.messages) && void 0 !== Fd ? Fd : []) {
-               var Fd;
-               Xg(md, Rd.where), Xg(md, Rd.line)
+             for (const pb of bb.analyticsHelpers) pz(Mb, pb);
+             for (const pb of null !== (Hb = bb.messages) && void 0 !== Hb ? Hb : []) {
+               var Hb;
+               pz(Mb, pb.where), pz(Mb, pb.line)
```

#### 1306. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15049-L15053` → after: `L15049-L15053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15049-L15053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15049-L15053) · [Before (L15049-L15053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15049-L15053)

```diff
-             for (const Rd of dd.events)
-               for (const dd of [Rd.eventType, Rd.valueExpression, Rd.numberExpression, Rd.where, Rd.guard, ...Rd.values]) Xg(md, dd);
-             for (const Rd of Od) Xg(md, Rd);
-             return md
-           }(dd.worldCode, Od)
+             for (const pb of bb.events)
+               for (const bb of [pb.eventType, pb.valueExpression, pb.numberExpression, pb.where, pb.guard, ...pb.values]) pz(Mb, bb);
+             for (const pb of wb) pz(Mb, pb);
+             return Mb
+           }(bb.worldCode, wb)
```

#### 1307. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15056-L15058` → after: `L15056-L15058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15056-L15058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15056-L15058) · [Before (L15056-L15058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15056-L15058)

```diff
-         function hg(dd, Od, md, Wd) {
-           const Fd = dd.split(".");
-           return "api" === Fd[0] && Fd.length > 1 ? null !== Wd ? Wd.has(Fd[1]) : "pasteCode" !== md || Od.has(`api.${Fd[1]}`) : !(!Fg.has(Fd[0]) && !Od.has(dd)) || Fd.length > 1 && Fd.every((dd => Od.has(dd)))
+         function gz(bb, wb, Mb, eb) {
+           const Hb = bb.split(".");
+           return "api" === Hb[0] && Hb.length > 1 ? null !== eb ? eb.has(Hb[1]) : "pasteCode" !== Mb || wb.has(`api.${Hb[1]}`) : !(!ez.has(Hb[0]) && !wb.has(bb)) || Hb.length > 1 && Hb.every((bb => wb.has(bb)))
```

#### 1308. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15061-L15062` → after: `L15061-L15062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15061-L15062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15061-L15062) · [Before (L15061-L15062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15061-L15062)

```diff
-         function vg(dd) {
-           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(dd)
+         function lz(bb) {
+           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(bb)
```

#### 1309. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15065-L15067` → after: `L15065-L15067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15065-L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15065-L15067) · [Before (L15065-L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15065-L15067)

```diff
-         function Qg(dd, Od) {
-           return Od.startsWith("api.") ? {
-             text: dd,
+         function Lz(bb, wb) {
+           return wb.startsWith("api.") ? {
+             text: bb,
```

#### 1310. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15071` → after: `L15071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15071) · [Before (L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15071)

```diff
-             text: dd,
+             text: bb,
```

#### 1311. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15075` → after: `L15075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15075) · [Before (L15075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15075)

```diff
-         const tg = bt, og = 10, Ng = 3, qg = 8, Hg = /tutorial|onboarding/i, yg = /event|flow|heatmap|order players/i, bg = .15, Tg = .1, pg = 3, Yg = .25, gg = .1, wg = 2, ag = 3, Eg = .7, Jg = 5;
+         const Iz = FO, Oz = 10, Uz = 3, tz = 8, Cz = /tutorial|onboarding/i, Ez = /event|flow|heatmap|order players/i, Fz = .15, Bz = .1, sz = 3, mz = .25, hz = .1, zz = 2, Xz = 3, xz = .7, jz = 5;
```

#### 1312. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15077-L15078` → after: `L15077-L15078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15077-L15078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15077-L15078) · [Before (L15077-L15078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15077-L15078)

```diff
-         function Ug(dd, Od) {
-           return "" === Od ? dd : /^-?\d+$/.test(Od) ? `${dd} ${Od}` : /\d/.test(Od) ? Od : `${dd}: ${Od}`
+         function Kz(bb, wb) {
+           return "" === wb ? bb : /^-?\d+$/.test(wb) ? `${bb} ${wb}` : /\d/.test(wb) ? wb : `${bb}: ${wb}`
```

#### 1313. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15081-L15084` → after: `L15081-L15084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15081-L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15081-L15084) · [Before (L15081-L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15081-L15084)

```diff
-         function xg(dd) {
-           const Od = dh(dd),
-             md = Od.lastIndexOf(": ");
-           return -1 === md ? Od : Ug(Od.slice(0, md), Od.slice(md + 2))
+         function rz(bb) {
+           const wb = kg(bb),
+             Mb = wb.lastIndexOf(": ");
+           return -1 === Mb ? wb : Kz(wb.slice(0, Mb), wb.slice(Mb + 2))
```

#### 1314. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15087-L15096` → after: `L15087-L15096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15087-L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15087-L15096) · [Before (L15087-L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15087-L15096)

```diff
-         function Bg(dd, Od, md) {
-           var Wd, Fd;
-           const Rd = Mq(Od.flow, Od.progressions, null, null, md),
-             Xd = null !== (Wd = null === (Fd = dd.stats) || void 0 === Fd ? void 0 : Fd.rankingWindow.uniquePlayers) && void 0 !== Wd ? Wd : 0;
-           if ("flowStep" === (null === Rd || void 0 === Rd ? void 0 : Rd.kind)) {
-             const dd = Od.flow,
-               md = Math.max(0, ...dd.steps.map((dd => dd.fromPlayers))),
-               Wd = dd.steps.filter((dd => {
-                 var Od, Wd;
-                 return dd.isChain && dd.fromPlayers >= (null !== (Od = null === (Wd = dd.start) || void 0 === Wd ? void 0 : Wd.players) && void 0 !== Od ? Od : md) * Tg
+         function Rz(bb, wb, Mb) {
+           var eb, Hb;
+           const pb = yC(wb.flow, wb.progressions, null, null, Mb),
+             Vb = null !== (eb = null === (Hb = bb.stats) || void 0 === Hb ? void 0 : Hb.rankingWindow.uniquePlayers) && void 0 !== eb ? eb : 0;
+           if ("flowStep" === (null === pb || void 0 === pb ? void 0 : pb.kind)) {
+             const bb = wb.flow,
+               Mb = Math.max(0, ...bb.steps.map((bb => bb.fromPlayers))),
+               eb = bb.steps.filter((bb => {
+                 var wb, eb;
+                 return bb.isChain && bb.fromPlayers >= (null !== (wb = null === (eb = bb.start) || void 0 === eb ? void 0 : eb.players) && void 0 !== wb ? wb : Mb) * Bz
```

#### 1315. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15098` → after: `L15098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15098) · [Before (L15098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15098)

```diff
-               Fd = (dd, Od) => {
+               Hb = (bb, wb) => {
```

#### 1316. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15100-L15104` → after: `L15100-L15104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15100-L15104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15100-L15104) · [Before (L15100-L15104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15100-L15104)

```diff
-                   from: xg(dd.from),
-                   to: xg(dd.to),
-                   isOrLater: dd.isOrLater,
-                   fromPlayers: dd.fromPlayers,
-                   lost: dd.lost,
+                   from: rz(bb.from),
+                   to: rz(bb.to),
+                   isOrLater: bb.isOrLater,
+                   fromPlayers: bb.fromPlayers,
+                   lost: bb.lost,
```

#### 1317. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15108-L15110` → after: `L15108-L15110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15108-L15110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15108-L15110) · [Before (L15108-L15110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15108-L15110)

```diff
-                   share: dd.share,
-                   players: (md = dd.fromPlayers, Xd > 0 ? Math.min(md, Xd) : md),
-                   later: Od
+                   share: bb.share,
+                   players: (Mb = bb.fromPlayers, Vb > 0 ? Math.min(Mb, Vb) : Mb),
+                   later: wb
```

#### 1318. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15112` → after: `L15112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15112) · [Before (L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15112)

```diff
-                 var md
+                 var Mb
```

#### 1319. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15114-L15121` → after: `L15114-L15121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15114-L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15114-L15121) · [Before (L15114-L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15114-L15121)

```diff
-               Kd = [Rd.step, Rd.mostLost, dd.lowestShare].filter((dd => null !== dd && Wd.includes(dd)));
-             return [...new Set(Kd)].map((Od => {
-               const md = function(dd, Od) {
-                   const md = new Set([Od]),
-                     Wd = [Od];
-                   for (; Wd.length > 0;) {
-                     const Od = Wd.shift();
-                     for (const Fd of dd) Fd.from !== Od || md.has(Fd.to) || (md.add(Fd.to), Wd.push(Fd.to))
+               gb = [pb.step, pb.mostLost, bb.lowestShare].filter((bb => null !== bb && eb.includes(bb)));
+             return [...new Set(gb)].map((wb => {
+               const Mb = function(bb, wb) {
+                   const Mb = new Set([wb]),
+                     eb = [wb];
+                   for (; eb.length > 0;) {
+                     const wb = eb.shift();
+                     for (const Hb of bb) Hb.from !== wb || Mb.has(Hb.to) || (Mb.add(Hb.to), eb.push(Hb.to))
```

#### 1320. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15123-L15126` → after: `L15123-L15126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15123-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15123-L15126) · [Before (L15123-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15123-L15126)

```diff
-                   return md
-                 }(dd.steps, Od.to),
-                 Rd = Wd.filter((dd => dd !== Od && md.has(dd.from)));
-               return Fd(Od, Rd.map((dd => Fd(dd, []))))
+                   return Mb
+                 }(bb.steps, wb.to),
+                 pb = eb.filter((bb => bb !== wb && Mb.has(bb.from)));
+               return Hb(wb, pb.map((bb => Hb(bb, []))))
```

#### 1321. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15129` → after: `L15129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15129) · [Before (L15129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15129)

```diff
-           if ("progressStep" === (null === Rd || void 0 === Rd ? void 0 : Rd.kind)) {
+           if ("progressStep" === (null === pb || void 0 === pb ? void 0 : pb.kind)) {
```

#### 1322. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15131-L15137` → after: `L15131-L15137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15131-L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15131-L15137) · [Before (L15131-L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15131-L15137)

```diff
-               progression: dd
-             } = Rd, Od = dd.values[0].players, md = dd.steps.filter((dd => dd.from.players >= Od * Tg)), Wd = (md, Wd) => ({
-               from: Ug(dd.eventType, md.from.value),
-               to: Ug(dd.eventType, md.to.value),
-               isOrLater: md.reached > md.to.players,
-               fromPlayers: md.from.players,
-               lost: md.lost,
+               progression: bb
+             } = pb, wb = bb.values[0].players, Mb = bb.steps.filter((bb => bb.from.players >= wb * Bz)), eb = (Mb, eb) => ({
+               from: Kz(bb.eventType, Mb.from.value),
+               to: Kz(bb.eventType, Mb.to.value),
+               isOrLater: Mb.reached > Mb.to.players,
+               fromPlayers: Mb.from.players,
+               lost: Mb.lost,
```

#### 1323. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15141-L15142` → after: `L15141-L15142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15141-L15142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15141-L15142) · [Before (L15141-L15142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15141-L15142)

```diff
-                 gameCategory: dd.gameCategory,
-                 eventType: dd.eventType,
+                 gameCategory: bb.gameCategory,
+                 eventType: bb.eventType,
```

#### 1324. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15145-L15149` → after: `L15145-L15149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15145-L15149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15145-L15149) · [Before (L15145-L15149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15145-L15149)

```diff
-               share: md.share,
-               players: md.from.players * Math.min(1, Od > 0 && Xd > 0 ? Xd / Od : 1),
-               later: Wd
-             }), Fd = [Rd.step, Rd.mostLost, dd.lowestShare].filter((dd => null !== dd && md.includes(dd)));
-             return [...new Set(Fd)].map((dd => Wd(dd, md.slice(md.indexOf(dd) + 1).map((dd => Wd(dd, []))))))
+               share: Mb.share,
+               players: Mb.from.players * Math.min(1, wb > 0 && Vb > 0 ? Vb / wb : 1),
+               later: eb
+             }), Hb = [pb.step, pb.mostLost, bb.lowestShare].filter((bb => null !== bb && Mb.includes(bb)));
+             return [...new Set(Hb)].map((bb => eb(bb, Mb.slice(Mb.indexOf(bb) + 1).map((bb => eb(bb, []))))))
```

#### 1325. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15154-L15171` → after: `L15154-L15171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15154-L15171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15154-L15171) · [Before (L15154-L15171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15154-L15171)

```diff
-         function Sg(dd, Od) {
-           const md = dh(dd);
-           return md.startsWith(`${Od}: `) ? md.slice(Od.length + 2) : null
-         }
- 
-         function sg(dd, Od) {
-           var md, Wd;
-           const Fd = function(dd) {
-             var Od, md, Wd, Fd;
-             const Rd = null !== (Od = null === (md = dd.playerTotals) || void 0 === md ? void 0 : md.playerTotals) && void 0 !== Od ? Od : {},
-               Xd = null !== (Wd = null === (Fd = dd.flow) || void 0 === Fd ? void 0 : Fd.edges) && void 0 !== Wd ? Wd : [];
-             let Kd = null;
-             return mh(Rd, ((Od, md, Wd) => {
-               var Fd;
-               const Rd = null === (Fd = dd.worldCode) || void 0 === Fd ? void 0 : Fd.events.find((dd => dd.isLiteralType && dd.eventType === md));
-               if (!Hg.test(md) || void 0 === Rd || null !== Rd.valueExpression) return;
- ... (2 more removed lines; see GitHub link above)
+         function Dz(bb, wb) {
+           const Mb = kg(bb);
+           return Mb.startsWith(`${wb}: `) ? Mb.slice(wb.length + 2) : null
+         }
+ 
+         function cz(bb, wb) {
+           var Mb, eb;
+           const Hb = function(bb) {
+             var wb, Mb, eb, Hb;
+             const pb = null !== (wb = null === (Mb = bb.playerTotals) || void 0 === Mb ? void 0 : Mb.playerTotals) && void 0 !== wb ? wb : {},
+               Vb = null !== (eb = null === (Hb = bb.flow) || void 0 === Hb ? void 0 : Hb.edges) && void 0 !== eb ? eb : [];
+             let gb = null;
+             return wl(pb, ((wb, Mb, eb) => {
+               var Hb;
+               const pb = null === (Hb = bb.worldCode) || void 0 === Hb ? void 0 : Hb.events.find((bb => bb.isLiteralType && bb.eventType === Mb));
+               if (!Cz.test(Mb) || void 0 === pb || null !== pb.valueExpression) return;
+ ... (2 more added lines; see GitHub link above)
```

#### 1326. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15173-L15174` → after: `L15173-L15174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15173-L15174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15173-L15174) · [Before (L15173-L15174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15173-L15174)

```diff
-                     value: Od,
-                     players: md
+                     value: wb,
+                     players: Mb
```

#### 1327. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15176-L15177` → after: `L15176-L15177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15176-L15177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15176-L15177) · [Before (L15176-L15177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15176-L15177)

```diff
-                 })).sort(((dd, Od) => Od.players - dd.players)),
-                 vd = new Map(hd.map(((dd, Od) => {
+                 })).sort(((bb, wb) => wb.players - bb.players)),
+                 Lb = new Map(lb.map(((bb, wb) => {
```

#### 1328. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15179-L15181` → after: `L15179-L15181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15179-L15181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15179-L15181) · [Before (L15179-L15181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15179-L15181)

```diff
-                     value: md
-                   } = dd;
-                   return [md, Od]
+                     value: Mb
+                   } = bb;
+                   return [Mb, wb]
```

#### 1329. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15183` → after: `L15183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15183) · [Before (L15183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15183)

```diff
-                 Qd = hd.every((dd => {
+                 Ib = lb.every((bb => {
```

#### 1330. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15185-L15187` → after: `L15185-L15187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15185-L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15185-L15187) · [Before (L15185-L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15185-L15187)

```diff
-                     value: Od
-                   } = dd;
-                   return Rd.values.includes(Od)
+                     value: wb
+                   } = bb;
+                   return pb.values.includes(wb)
```

#### 1331. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15189` → after: `L15189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15189) · [Before (L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15189)

```diff
-                 td = hd.slice(1).every(((dd, Od) => {
+                 Ob = lb.slice(1).every(((bb, wb) => {
```

#### 1332. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15191-L15193` → after: `L15191-L15193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15191-L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15191-L15193) · [Before (L15191-L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15191-L15193)

```diff
-                     players: md
-                   } = dd;
-                   return md < hd[Od].players
+                     players: Mb
+                   } = bb;
+                   return Mb < lb[wb].players
```

#### 1333. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15195-L15199` → after: `L15195-L15199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15195-L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15195-L15199) · [Before (L15195-L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15195-L15199)

```diff
-                 od = Xd.some((dd => {
-                   var Od, Wd;
-                   const Fd = vd.get(null !== (Od = Sg(dd.from, md)) && void 0 !== Od ? Od : ""),
-                     Rd = vd.get(null !== (Wd = Sg(dd.to, md)) && void 0 !== Wd ? Wd : "");
-                   return void 0 !== Fd && void 0 !== Rd && Fd > Rd
+                 Ub = Vb.some((bb => {
+                   var wb, eb;
+                   const Hb = Lb.get(null !== (wb = Dz(bb.from, Mb)) && void 0 !== wb ? wb : ""),
+                     pb = Lb.get(null !== (eb = Dz(bb.to, Mb)) && void 0 !== eb ? eb : "");
+                   return void 0 !== Hb && void 0 !== pb && Hb > pb
```

#### 1334. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15201-L15205` → after: `L15201-L15205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15201-L15205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15201-L15205) · [Before (L15201-L15205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15201-L15205)

```diff
-                 Nd = null === Kd || hd[0].players > Kd.values[0].players;
-               hd.length >= Ng && Qd && td && !od && Nd && (Kd = {
-                 gameCategory: Od,
-                 eventType: md,
-                 values: hd
+                 tb = null === gb || lb[0].players > gb.values[0].players;
+               lb.length >= Uz && Ib && Ob && !Ub && tb && (gb = {
+                 gameCategory: wb,
+                 eventType: Mb,
+                 values: lb
```

#### 1335. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15207-L15210` → after: `L15207-L15210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15207-L15210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15207-L15210) · [Before (L15207-L15210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15207-L15210)

```diff
-             })), Kd
-           }(dd);
-           if (null === Fd) return [];
-           const Rd = null !== (md = null === (Wd = dd.stats) || void 0 === Wd ? void 0 : Wd.rankingWindow.uniquePlayers) && void 0 !== md ? md : 0,
+             })), gb
+           }(bb);
+           if (null === Hb) return [];
+           const pb = null !== (Mb = null === (eb = bb.stats) || void 0 === eb ? void 0 : eb.rankingWindow.uniquePlayers) && void 0 !== Mb ? Mb : 0,
```

#### 1336. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15212-L15218` → after: `L15212-L15218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15212-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15212-L15218) · [Before (L15212-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15212-L15218)

```diff
-               values: Xd,
-               eventType: Kd
-             } = Fd,
-             hd = Xd[0].players,
-             vd = {
-               gameCategory: Fd.gameCategory,
-               eventType: Kd,
+               values: Vb,
+               eventType: gb
+             } = Hb,
+             lb = Vb[0].players,
+             Lb = {
+               gameCategory: Hb.gameCategory,
+               eventType: gb,
```

#### 1337. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15221-L15226` → after: `L15221-L15226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15221-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15221-L15226) · [Before (L15221-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15221-L15226)

```diff
-             Qd = Xd.slice(1).flatMap(((dd, md) => {
-               const Wd = Xd[md];
-               return Wd.players >= Od && Wd.players >= hd * Tg ? [{
-                 from: Wd,
-                 to: dd,
-                 lost: Wd.players - dd.players
+             Ib = Vb.slice(1).flatMap(((bb, Mb) => {
+               const eb = Vb[Mb];
+               return eb.players >= wb && eb.players >= lb * Bz ? [{
+                 from: eb,
+                 to: bb,
+                 lost: eb.players - bb.players
```

#### 1338. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15229-L15231` → after: `L15229-L15231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15229-L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15229-L15231) · [Before (L15229-L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15229-L15231)

```diff
-             td = (dd, Od) => ({
-               from: dd.from.value,
-               to: dd.to.value,
+             Ob = (bb, wb) => ({
+               from: bb.from.value,
+               to: bb.to.value,
```

#### 1339. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15233-L15234` → after: `L15233-L15234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15233-L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15233-L15234) · [Before (L15233-L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15233-L15234)

```diff
-               fromPlayers: dd.from.players,
-               lost: dd.lost,
+               fromPlayers: bb.from.players,
+               lost: bb.lost,
```

#### 1340. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15237-L15241` → after: `L15237-L15241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15237-L15241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15237-L15241) · [Before (L15237-L15241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15237-L15241)

```diff
-               selection: vd,
-               group: Kd,
-               share: dd.to.players / dd.from.players,
-               players: dd.from.players * Math.min(1, hd > 0 && Rd > 0 ? Rd / hd : 1),
-               later: Od
+               selection: Lb,
+               group: gb,
+               share: bb.to.players / bb.from.players,
+               players: bb.from.players * Math.min(1, lb > 0 && pb > 0 ? pb / lb : 1),
+               later: wb
```

#### 1341. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15243-L15248` → after: `L15243-L15248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15243-L15248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15243-L15248) · [Before (L15243-L15248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15243-L15248)

```diff
-             od = [...Qd].sort(((dd, Od) => Od.lost - dd.lost))[0],
-             Nd = [...Qd].sort(((dd, Od) => dd.to.players / dd.from.players - Od.to.players / Od.from.players))[0];
-           return [...new Set([od, Nd])].flatMap((dd => {
-             if (void 0 === dd) return [];
-             const Od = Qd.slice(Qd.indexOf(dd) + 1).map((dd => td(dd, [])));
-             return [td(dd, Od)]
+             Ub = [...Ib].sort(((bb, wb) => wb.lost - bb.lost))[0],
+             tb = [...Ib].sort(((bb, wb) => bb.to.players / bb.from.players - wb.to.players / wb.from.players))[0];
+           return [...new Set([Ub, tb])].flatMap((bb => {
+             if (void 0 === bb) return [];
+             const wb = Ib.slice(Ib.indexOf(bb) + 1).map((bb => Ob(bb, [])));
+             return [Ob(bb, wb)]
```

#### 1342. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15252` → after: `L15252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15252) · [Before (L15252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15252)

```diff
-         function ug(dd, Od) {
+         function Yz(bb, wb) {
```

#### 1343. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15254-L15260` → after: `L15254-L15260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15254-L15260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15254-L15260) · [Before (L15254-L15260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15254-L15260)

```diff
-             share: md,
-             players: Wd,
-             later: Fd,
-             ...Rd
-           } = dd, Xd = 1 - md - bg;
-           return Xd > 0 && Wd >= Od && Rd.fromPlayers >= Od ? {
-             ...Rd,
+             share: Mb,
+             players: eb,
+             later: Hb,
+             ...pb
+           } = bb, Vb = 1 - Mb - Fz;
+           return Vb > 0 && eb >= wb && pb.fromPlayers >= wb ? {
+             ...pb,
```

#### 1344. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15262` → after: `L15262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15262) · [Before (L15262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15262)

```diff
-             score: Xd * Wd
+             score: Vb * eb
```

#### 1345. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15266-L15271` → after: `L15266-L15271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15266-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15266-L15271) · [Before (L15266-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15266-L15271)

```diff
-         function Vg(dd, Od, md, Wd, Fd, Rd) {
-           if (md.length < Ng || md[0].players < Wd) return null;
-           const Xd = md.slice(1).flatMap(((dd, Od) => {
-             const Rd = md[Od],
-               Xd = Fd > 0 ? Math.min(Rd.players, Fd) : Rd.players;
-             return Rd.players >= Wd ? [(1 - Math.min(1, dd.players / Rd.players) - bg) * Xd] : []
+         function Zz(bb, wb, Mb, eb, Hb, pb) {
+           if (Mb.length < Uz || Mb[0].players < eb) return null;
+           const Vb = Mb.slice(1).flatMap(((bb, wb) => {
+             const pb = Mb[wb],
+               Vb = Hb > 0 ? Math.min(pb.players, Hb) : pb.players;
+             return pb.players >= eb ? [(1 - Math.min(1, bb.players / pb.players) - Fz) * Vb] : []
```

#### 1346. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15275-L15292` → after: `L15275-L15292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15275-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15275-L15292) · [Before (L15275-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15275-L15292)

```diff
-             eventType: dd,
-             order: Od,
-             values: md.slice(0, qg),
-             hasMore: md.length > qg,
-             selection: Rd,
-             score: Math.max(0, ...Xd)
-           }
-         }
- 
-         function ig(dd, Od, md) {
-           var Wd, Fd, Rd, Xd;
-           const Kd = null !== (Wd = null === (Fd = dd.stats) || void 0 === Fd ? void 0 : Fd.rankingWindow.uniquePlayers) && void 0 !== Wd ? Wd : 0,
-             hd = null !== (Rd = null === (Xd = Od.dropoff) || void 0 === Xd ? void 0 : Xd.mostAboveMedian) && void 0 !== Rd ? Rd : null;
-           if (null === hd || Kd < md) return null;
-           const vd = Pq(hd);
-           if (null === vd.medianEndedPercent) return null;
- ... (2 more removed lines; see GitHub link above)
+             eventType: bb,
+             order: wb,
+             values: Mb.slice(0, tz),
+             hasMore: Mb.length > tz,
+             selection: pb,
+             score: Math.max(0, ...Vb)
+           }
+         }
+ 
+         function fz(bb, wb, Mb) {
+           var eb, Hb, pb, Vb;
+           const gb = null !== (eb = null === (Hb = bb.stats) || void 0 === Hb ? void 0 : Hb.rankingWindow.uniquePlayers) && void 0 !== eb ? eb : 0,
+             lb = null !== (pb = null === (Vb = wb.dropoff) || void 0 === Vb ? void 0 : Vb.mostAboveMedian) && void 0 !== pb ? pb : null;
+           if (null === lb || gb < Mb) return null;
+           const Lb = SC(lb);
+           if (null === Lb.medianEndedPercent) return null;
+ ... (2 more added lines; see GitHub link above)
```

#### 1347. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15294-L15297` → after: `L15294-L15297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15294-L15297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15294-L15297) · [Before (L15294-L15297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15294-L15297)

```diff
-             minute: vd.minute,
-             ended: vd.endedPercent,
-             typicalEnded: vd.medianEndedPercent,
-             score: Qd / 100 * Kd
+             minute: Lb.minute,
+             ended: Lb.endedPercent,
+             typicalEnded: Lb.medianEndedPercent,
+             score: Ib / 100 * gb
```

#### 1348. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15301-L15302` → after: `L15301-L15302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15301-L15302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15301-L15302) · [Before (L15301-L15302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15301-L15302)

```diff
-         function Ag(dd, Od) {
-           const md = 1 === dd.events.filter((dd => dd.eventType === Od.eventType)).length;
+         function Az(bb, wb) {
+           const Mb = 1 === bb.events.filter((bb => bb.eventType === wb.eventType)).length;
```

#### 1349. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15304-L15306` → after: `L15304-L15306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15304-L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15304-L15306) · [Before (L15304-L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15304-L15306)

```diff
-             gameCategory: dd.gameCategoryId,
-             eventType: Od.eventType,
-             eventValue: md ? null : Od.eventValue
+             gameCategory: bb.gameCategoryId,
+             eventType: wb.eventType,
+             eventValue: Mb ? null : wb.eventValue
```

#### 1350. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15310-L15314` → after: `L15310-L15314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15310-L15314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15310-L15314) · [Before (L15310-L15314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15310-L15314)

```diff
-         function rg(dd, Od) {
-           var md, Wd;
-           const Fd = null !== (md = null === (Wd = dd.stats) || void 0 === Wd ? void 0 : Wd.rankingWindow.uniquePlayers) && void 0 !== md ? md : 0,
-             Rd = [...dd.heatmaps].sort(((dd, Od) => Od.players.totalCount - dd.players.totalCount))[0];
-           if (void 0 === Rd || Fd < Od) return null;
+         function Wz(bb, wb) {
+           var Mb, eb;
+           const Hb = null !== (Mb = null === (eb = bb.stats) || void 0 === eb ? void 0 : eb.rankingWindow.uniquePlayers) && void 0 !== Mb ? Mb : 0,
+             pb = [...bb.heatmaps].sort(((bb, wb) => wb.players.totalCount - bb.players.totalCount))[0];
+           if (void 0 === pb || Hb < wb) return null;
```

#### 1351. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15316-L15323` → after: `L15316-L15323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15316-L15323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15316-L15323) · [Before (L15316-L15323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15316-L15323)

```diff
-             areas: Xd,
-             total: Kd
-           } = Xy(Rd.players), hd = Xd[0];
-           if (void 0 === hd || Kd <= 0 || hd.count / Kd < Yg) return null;
-           const vd = dd => ({
-               x: dd.x,
-               z: dd.z,
-               y: dd.busiestY
+             areas: Vb,
+             total: gb
+           } = eF(pb.players), lb = Vb[0];
+           if (void 0 === lb || gb <= 0 || lb.count / gb < mz) return null;
+           const Lb = bb => ({
+               x: bb.x,
+               z: bb.z,
+               y: bb.busiestY
```

#### 1352. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15325` → after: `L15325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15325) · [Before (L15325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15325)

```diff
-             Qd = hd.count / Kd;
+             Ib = lb.count / gb;
```

#### 1353. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15328-L15333` → after: `L15328-L15333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15328-L15333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15328-L15333) · [Before (L15328-L15333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15328-L15333)

```diff
-             category: Rd.gameCategoryId,
-             square: vd(hd),
-             share: Qd,
-             next: Xd.slice(1, 1 + wg).filter((dd => dd.count / Kd >= gg)).map((dd => ({
-               square: vd(dd),
-               share: dd.count / Kd
+             category: pb.gameCategoryId,
+             square: Lb(lb),
+             share: Ib,
+             next: Vb.slice(1, 1 + zz).filter((bb => bb.count / gb >= hz)).map((bb => ({
+               square: Lb(bb),
+               share: bb.count / gb
```

#### 1354. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15336` → after: `L15336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15336) · [Before (L15336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15336)

```diff
-               gameCategory: Rd.gameCategoryId,
+               gameCategory: pb.gameCategoryId,
```

#### 1355. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15340-L15355` → after: `L15340-L15355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15340-L15355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15340-L15355) · [Before (L15340-L15355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15340-L15355)

```diff
-             score: (Qd - Yg) * Fd
-           }
-         }
-         const Gg = /^(?:checkpoint|wave|island|zone|level)s?$/, ng = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
- 
-         function Lg(dd, Od) {
-           var md, Wd, Fd, Rd;
-           if (! function(dd) {
-               var Od, md, Wd, Fd;
-               const Rd = dd.worldCode;
-               return [...(null !== (Od = null === Rd || void 0 === Rd ? void 0 : Rd.functions) && void 0 !== Od ? Od : []).map((dd => dd.name)), ...(null !== (md = null === Rd || void 0 === Rd ? void 0 : Rd.constants) && void 0 !== md ? md : []).map((dd => dd.name)), ...(null !== … [truncated]
-             }(dd)) return null;
-           const Xd = dd.heatmaps.some((dd => dd.players.totalCount > 0 || dd.events.some((dd => dd.heatmap.totalCount > 0)))),
-             Kd = dd.missing.some((dd => yg.test(dd)));
-           if ((null !== (md = null === (Wd = dd.flow) || void 0 === Wd ? void 0 : Wd.edges.length) && void 0 !== md ? md : 0) > 0 || Od.progressions.length > 0 || Xd || Kd) return null;
-           const hd = Object.values(null !== (Fd = null === (Rd = dd.playerTotals) || void 0 === Rd ? void 0 : Rd.playerTotals) && void 0 !== Fd ? Fd : {}).flatMap((dd => Object.keys(dd)));
+             score: (Ib - mz) * Hb
+           }
+         }
+         const Jz = /^(?:checkpoint|wave|island|zone|level)s?$/, Sz = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
+ 
+         function Nz(bb, wb) {
+           var Mb, eb, Hb, pb;
+           if (! function(bb) {
+               var wb, Mb, eb, Hb;
+               const pb = bb.worldCode;
+               return [...(null !== (wb = null === pb || void 0 === pb ? void 0 : pb.functions) && void 0 !== wb ? wb : []).map((bb => bb.name)), ...(null !== (Mb = null === pb || void 0 === pb ? void 0 : pb.constants) && void 0 !== Mb ? Mb : []).map((bb => bb.name)), ...(null !== … [truncated]
+             }(bb)) return null;
+           const Vb = bb.heatmaps.some((bb => bb.players.totalCount > 0 || bb.events.some((bb => bb.heatmap.totalCount > 0)))),
+             gb = bb.missing.some((bb => Ez.test(bb)));
+           if ((null !== (Mb = null === (eb = bb.flow) || void 0 === eb ? void 0 : eb.edges.length) && void 0 !== Mb ? Mb : 0) > 0 || wb.progressions.length > 0 || Vb || gb) return null;
+           const lb = Object.values(null !== (Hb = null === (pb = bb.playerTotals) || void 0 === pb ? void 0 : pb.playerTotals) && void 0 !== Hb ? Hb : {}).flatMap((bb => Object.keys(bb)));
```

#### 1356. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15358` → after: `L15358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15358) · [Before (L15358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15358)

```diff
-             line: Yq(dd.worldCode, hd),
+             line: BC(bb.worldCode, lb),
```

#### 1357. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15363-L15376` → after: `L15363-L15376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15363-L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15363-L15376) · [Before (L15363-L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15363-L15376)

```diff
-         function Pg(dd) {
-           var Od, md, Wd, Fd;
-           const Rd = CH(dd),
-             Xd = null !== (Od = null === (md = dd.stats) || void 0 === md ? void 0 : md.rankingWindow.uniquePlayers) && void 0 !== Od ? Od : 0,
-             Kd = Xd >= og && Xd < tg,
-             hd = Kd ? og : tg,
-             vd = function(dd, Od) {
-               return dd.flatMap((dd => {
-                 const md = ug(dd, Od);
-                 if (null === md) return [];
-                 const Wd = dd.later.map((dd => ug(dd, Od))).filter((dd => null !== dd && dd.lost >= md.lost * Eg)).sort(((dd, Od) => Od.lost - dd.lost))[0];
-                 return [void 0 === Wd ? md : {
-                   ...md,
-                   next: Wd
+         function vz(bb) {
+           var wb, Mb, eb, Hb;
+           const pb = uE(bb),
+             Vb = null !== (wb = null === (Mb = bb.stats) || void 0 === Mb ? void 0 : Mb.rankingWindow.uniquePlayers) && void 0 !== wb ? wb : 0,
+             gb = Vb >= Oz && Vb < Iz,
+             lb = gb ? Oz : Iz,
+             Lb = function(bb, wb) {
+               return bb.flatMap((bb => {
+                 const Mb = Yz(bb, wb);
+                 if (null === Mb) return [];
+                 const eb = bb.later.map((bb => Yz(bb, wb))).filter((bb => null !== bb && bb.lost >= Mb.lost * xz)).sort(((bb, wb) => wb.lost - bb.lost))[0];
+                 return [void 0 === eb ? Mb : {
+                   ...Mb,
+                   next: eb
```

#### 1358. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15378-L15383` → after: `L15378-L15383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15378-L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15378-L15383) · [Before (L15378-L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15378-L15383)

```diff
-               })).sort(((dd, Od) => Od.score - dd.score)).slice(0, ag)
-             }([...Bg(dd, Rd, hd), ...sg(dd, hd)], hd),
-             Qd = null !== (Wd = Kd ? function(dd, Od, md) {
-               var Wd, Fd;
-               const Rd = Lq(null !== (Wd = null === (Fd = dd.playerTotals) || void 0 === Fd ? void 0 : Fd.playerTotals) && void 0 !== Wd ? Wd : {}, Od)[0];
-               if (void 0 === Rd) return null;
+               })).sort(((bb, wb) => wb.score - bb.score)).slice(0, Xz)
+             }([...Rz(bb, pb, lb), ...cz(bb, lb)], lb),
+             Ib = null !== (eb = gb ? function(bb, wb, Mb) {
+               var eb, Hb;
+               const pb = JC(null !== (eb = null === (Hb = bb.playerTotals) || void 0 === Hb ? void 0 : Hb.playerTotals) && void 0 !== eb ? eb : {}, wb)[0];
+               if (void 0 === pb) return null;
```

#### 1359. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15385-L15386` → after: `L15385-L15386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15385-L15386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15385-L15386) · [Before (L15385-L15386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15385-L15386)

```diff
-                 eventType: Xd
-               } = Rd, Kd = Rd.values.map((dd => {
+                 eventType: Vb
+               } = pb, gb = pb.values.map((bb => {
```

#### 1360. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15388-L15390` → after: `L15388-L15390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15388-L15390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15388-L15390) · [Before (L15388-L15390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15388-L15390)

```diff
-                   value: Od,
-                   players: md
-                 } = dd;
+                   value: wb,
+                   players: Mb
+                 } = bb;
```

#### 1361. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15392-L15393` → after: `L15392-L15393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15392-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15392-L15393) · [Before (L15392-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15392-L15393)

```diff
-                   name: Ug(Xd, Od),
-                   players: md
+                   name: Kz(Vb, wb),
+                   players: Mb
```

#### 1362. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15395-L15397` → after: `L15395-L15397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15395-L15397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15395-L15397) · [Before (L15395-L15397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15395-L15397)

```diff
-               })), hd = {
-                 gameCategory: Rd.gameCategory,
-                 eventType: Xd,
+               })), lb = {
+                 gameCategory: pb.gameCategory,
+                 eventType: Vb,
```

#### 1363. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15399-L15401` → after: `L15399-L15401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15399-L15401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15399-L15401) · [Before (L15399-L15401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15399-L15401)

```diff
-               }, vd = Vg(Xd, "number", Kd, Od, md, hd), Qd = Rd.steps.filter((dd => dd.from.players >= Jg && 1 - dd.share > bg)).sort(((dd, Od) => dd.share - Od.share || Od.lost - dd.lost))[0];
-               return "ladder" !== (null === vd || void 0 === vd ? void 0 : vd.kind) || void 0 === Qd ? vd : {
-                 ...vd,
+               }, Lb = Zz(Vb, "number", gb, wb, Mb, lb), Ib = pb.steps.filter((bb => bb.from.players >= jz && 1 - bb.share > Fz)).sort(((bb, wb) => bb.share - wb.share || wb.lost - bb.lost))[0];
+               return "ladder" !== (null === Lb || void 0 === Lb ? void 0 : Lb.kind) || void 0 === Ib ? Lb : {
+                 ...Lb,
```

#### 1364. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15403-L15407` → after: `L15403-L15407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15403-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15403-L15407) · [Before (L15403-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15403-L15407)

```diff
-                   from: Ug(Xd, Qd.from.value),
-                   to: Ug(Xd, Qd.to.value),
-                   fromPlayers: Qd.from.players,
-                   reached: Qd.reached,
-                   isOrLater: Qd.reached > Qd.to.players
+                   from: Kz(Vb, Ib.from.value),
+                   to: Kz(Vb, Ib.to.value),
+                   fromPlayers: Ib.from.players,
+                   reached: Ib.reached,
+                   isOrLater: Ib.reached > Ib.to.players
```

#### 1365. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15410-L15416` → after: `L15410-L15416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15410-L15416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15410-L15416) · [Before (L15410-L15416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15410-L15416)

```diff
-             }(dd, hd, Xd) : null) && void 0 !== Wd ? Wd : 0 === vd.length ? function(dd, Od, md) {
-               var Wd, Fd;
-               let Rd = null;
-               return mh(null !== (Wd = null === (Fd = dd.playerTotals) || void 0 === Fd ? void 0 : Fd.playerTotals) && void 0 !== Wd ? Wd : {}, ((dd, Wd, Fd) => {
-                 if (!Hg.test(Wd)) return;
-                 const Xd = Vg(Wd, "players", Object.entries(Fd).map((dd => {
-                   let [Od, md] = dd;
+             }(bb, lb, Vb) : null) && void 0 !== eb ? eb : 0 === Lb.length ? function(bb, wb, Mb) {
+               var eb, Hb;
+               let pb = null;
+               return wl(null !== (eb = null === (Hb = bb.playerTotals) || void 0 === Hb ? void 0 : Hb.playerTotals) && void 0 !== eb ? eb : {}, ((bb, eb, Hb) => {
+                 if (!Cz.test(eb)) return;
+                 const Vb = Zz(eb, "players", Object.entries(Hb).map((bb => {
+                   let [wb, Mb] = bb;
```

#### 1366. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15418-L15419` → after: `L15418-L15419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15418-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15418-L15419) · [Before (L15418-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15418-L15419)

```diff
-                     name: Od,
-                     players: md
+                     name: wb,
+                     players: Mb
```

#### 1367. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15421-L15423` → after: `L15421-L15423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15421-L15423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15421-L15423) · [Before (L15421-L15423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15421-L15423)

```diff
-                 })).sort(((dd, Od) => Od.players - dd.players)), Od, md, {
-                   gameCategory: dd,
-                   eventType: Wd,
+                 })).sort(((bb, wb) => wb.players - bb.players)), wb, Mb, {
+                   gameCategory: bb,
+                   eventType: eb,
```

#### 1368. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15426-L15438` → after: `L15426-L15438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15426-L15438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15426-L15438) · [Before (L15426-L15438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15426-L15438)

```diff
-                 "ladder" === (null === Xd || void 0 === Xd ? void 0 : Xd.kind) && (null === Rd || Xd.values[0].players > Rd.values[0].players) && (Rd = Xd)
-               })), Rd
-             }(dd, hd, Xd) : null,
-             td = null === Qd ? vd : [Qd],
-             od = ig(dd, Rd, hd),
-             Nd = null !== (Fd = function(dd, Od) {
-               var md, Wd;
-               const Fd = null !== (md = null === (Wd = dd.stats) || void 0 === Wd ? void 0 : Wd.rankingWindow.uniquePlayers) && void 0 !== md ? md : 0;
-               if (Fd < Od) return null;
-               let Rd = null;
-               for (const Xd of dd.heatmaps)
-                 for (const md of Xd.events) {
-                   if (!WN(md.eventType) || null !== qQ(md.eventType, md.eventValue, dd.worldCode)) continue;
+                 "ladder" === (null === Vb || void 0 === Vb ? void 0 : Vb.kind) && (null === pb || Vb.values[0].players > pb.values[0].players) && (pb = Vb)
+               })), pb
+             }(bb, lb, Vb) : null,
+             Ob = null === Ib ? Lb : [Ib],
+             Ub = fz(bb, pb, lb),
+             tb = null !== (Hb = function(bb, wb) {
+               var Mb, eb;
+               const Hb = null !== (Mb = null === (eb = bb.stats) || void 0 === eb ? void 0 : eb.rankingWindow.uniquePlayers) && void 0 !== Mb ? Mb : 0;
+               if (Hb < wb) return null;
+               let pb = null;
+               for (const Vb of bb.heatmaps)
+                 for (const Mb of Vb.events) {
+                   if (!kU(Mb.eventType) || null !== tI(Mb.eventType, Mb.eventValue, bb.worldCode)) continue;
```

#### 1369. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15440-L15443` → after: `L15440-L15443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15440-L15443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15440-L15443) · [Before (L15440-L15443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15440-L15443)

```diff
-                     areas: Wd,
-                     total: Fd
-                   } = Xy(md.heatmap), Kd = Wd[0];
-                   void 0 === Kd || Fd < Od || Kd.count / Fd < Yg || null !== Rd && Kd.count <= Rd.count || (Rd = {
+                     areas: eb,
+                     total: Hb
+                   } = eF(Mb.heatmap), gb = eb[0];
+                   void 0 === gb || Hb < wb || gb.count / Hb < mz || null !== pb && gb.count <= pb.count || (pb = {
```

#### 1370. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15445` → after: `L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15445) · [Before (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15445)

```diff
-                     category: Xd.gameCategoryId,
+                     category: Vb.gameCategoryId,
```

#### 1371. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15447-L15449` → after: `L15447-L15449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15447-L15449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15447-L15449) · [Before (L15447-L15449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15447-L15449)

```diff
-                       x: Kd.x,
-                       z: Kd.z,
-                       y: Kd.busiestY
+                       x: gb.x,
+                       z: gb.z,
+                       y: gb.busiestY
```

#### 1372. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15451-L15454` → after: `L15451-L15454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15451-L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15451-L15454) · [Before (L15451-L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15451-L15454)

```diff
-                     count: Kd.count,
-                     total: Fd,
-                     death: "" === md.eventValue ? null : `${md.eventType}: ${md.eventValue}`,
-                     selection: Ag(Xd, md)
+                     count: gb.count,
+                     total: Hb,
+                     death: "" === Mb.eventValue ? null : `${Mb.eventType}: ${Mb.eventValue}`,
+                     selection: Az(Vb, Mb)
```

#### 1373. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15457-L15459` → after: `L15457-L15459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15457-L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15457-L15459) · [Before (L15457-L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15457-L15459)

```diff
-               return null === Rd ? null : {
-                 ...Rd,
-                 score: (Rd.count / Rd.total - Yg) * Fd
+               return null === pb ? null : {
+                 ...pb,
+                 score: (pb.count / pb.total - mz) * Hb
```

#### 1374. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15461-L15472` → after: `L15461-L15472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15461-L15472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15461-L15472) · [Before (L15461-L15472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15461-L15472)

```diff
-             }(dd, hd)) && void 0 !== Fd ? Fd : rg(dd, hd),
-             qd = null !== od && (0 === td.length || od.score > td[0].score) ? [od, ...td] : td,
-             Hd = (null === Nd ? qd : [...qd, Nd]).map((dd => Kd ? {
-               ...dd,
-               fewPlayers: Xd
-             } : dd)),
-             yd = Lg(dd, Rd);
-           return null === yd ? Hd : [...Hd, yd]
-         }
- 
-         function zg(dd) {
-           return ` ${dd.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const cg=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function jg(dd,Od){const md=zg(Od);switch(dd.kind){case"step":{const Od=function(dd){var Od,md;return null!==(Od … [truncated]
+             }(bb, lb)) && void 0 !== Hb ? Hb : Wz(bb, lb),
+             Cb = null !== Ub && (0 === Ob.length || Ub.score > Ob[0].score) ? [Ub, ...Ob] : Ob,
+             Eb = (null === tb ? Cb : [...Cb, tb]).map((bb => gb ? {
+               ...bb,
+               fewPlayers: Vb
+             } : bb)),
+             Fb = Nz(bb, pb);
+           return null === Fb ? Eb : [...Eb, Fb]
+         }
+ 
+         function Qz(bb) {
+           return ` ${bb.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const Gz=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function qz(bb,wb){const Mb=Qz(wb);switch(bb.kind){case"step":{const wb=function(bb){var wb,Mb;return null!==(wb … [truncated]
```

#### 1375. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15474` → after: `L15474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15474) · [Before (L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15474)

```diff
-             Od[1]
+             wb[1]
```

#### 1376. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15477` → after: `L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15477) · [Before (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15477)

```diff
-             Od[2]
+             wb[2]
```

#### 1377. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15479` → after: `L15479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15479) · [Before (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15479)

```diff
-           `]}(dd).some((dd=>function(dd,Od){const md=zg(Od).trim();return""!==md&&dd.includes(`
+           `]}(bb).some((bb=>function(bb,wb){const Mb=Qz(wb).trim();return""!==Mb&&bb.includes(`
```

#### 1378. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15481` → after: `L15481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15481) · [Before (L15481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15481)

```diff
-             md
+             Mb
```

#### 1379. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15483` → after: `L15483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15483) · [Before (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15483)

```diff
-           `)}(md,dd)));return Wd(dd.to)||Wd(dd.from)&&null!==Od&&md.includes(`
+           `)}(Mb,bb)));return eb(bb.to)||eb(bb.from)&&null!==wb&&Mb.includes(`
```

#### 1380. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15485` → after: `L15485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15485) · [Before (L15485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15485)

```diff
-             Od
+             wb
```

#### 1381. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15487` → after: `L15487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15487) · [Before (L15487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15487)

```diff
-           `)}case"deaths":case"place":{const{square:md}=dd;return function(dd){return[...dd.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((dd=>({x:Number(dd[1]),z:Number(dd[2])})))}(Od).some((dd=>function(dd,Od){return dd.x>=Od.x&&dd.x<Od.x+my&&dd.z>=O … [truncated]
+           `)}case"deaths":case"place":{const{square:Mb}=bb;return function(bb){return[...bb.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((bb=>({x:Number(bb[1]),z:Number(bb[2])})))}(wb).some((bb=>function(bb,wb){return bb.x>=wb.x&&bb.x<wb.x+kE&&bb.z>=w … [truncated]
```

#### 1382. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15489` → after: `L15489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15489) · [Before (L15489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15489)

```diff
-             Wd
+             eb
```

#### 1383. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15493` → after: `L15493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15493) · [Before (L15493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15493)

```diff
-             Wd
+             eb
```

#### 1384. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15497` → after: `L15497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15497) · [Before (L15497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15497)

```diff
-             Wd
+             eb
```

#### 1385. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15501` → after: `L15501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15501) · [Before (L15501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15501)

```diff
-             Wd
+             eb
```

#### 1386. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15505` → after: `L15505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15505) · [Before (L15505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15505)

```diff
-             dd
+             bb
```

#### 1387. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15507` → after: `L15507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15507) · [Before (L15507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15507)

```diff
-           `)))}}}function Dg(dd,Od,md){if("young"===md){var Wd;const md=[dd.reduce(((dd,Od)=>"unseen"!==Od.kind&&(null===dd||Od.score>dd.score)?Od:dd),null),null!==(Wd=dd.find((dd=>"unseen"===dd.kind)))&&void 0!==Wd?Wd:null].find((dd=>null!==dd&&!jg(dd,Od)));return void 0===md||n … [truncated]
+           `)))}}}function az(bb,wb,Mb){if("young"===Mb){var eb;const Mb=[bb.reduce(((bb,wb)=>"unseen"!==wb.kind&&(null===bb||wb.score>bb.score)?wb:bb),null),null!==(eb=bb.find((bb=>"unseen"===bb.kind)))&&void 0!==eb?eb:null].find((bb=>null!==bb&&!qz(bb,wb)));return void 0===Mb||n … [truncated]
```

#### 1388. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15509` → after: `L15509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15509) · [Before (L15509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15509)

```diff
-             dd
+             bb
```

#### 1389. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15512` → after: `L15512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15512) · [Before (L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15512)

```diff
-             Wd[2]
+             eb[2]
```

#### 1390. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15516` → after: `L15516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15516) · [Before (L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15516)

```diff
-             dd
+             bb
```

#### 1391. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15519` → after: `L15519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15519) · [Before (L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15519)

```diff
-             Od
+             wb
```

#### 1392. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15523` → after: `L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15523) · [Before (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15523)

```diff
-             dd.x
+             bb.x
```

#### 1393. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15526` → after: `L15526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15526) · [Before (L15526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15526)

```diff
-             dd.x + md
+             bb.x + Mb
```

#### 1394. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15528` → after: `L15528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15528) · [Before (L15528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15528)

```diff
-             dd.z
+             bb.z
```

#### 1395. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15531` → after: `L15531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15531) · [Before (L15531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15531)

```diff
-             dd.z + md
+             bb.z + Mb
```

#### 1396. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15534` → after: `L15534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15534) · [Before (L15534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15534)

```diff
-             Od ? ` (height y ${dd.y})` : ""
+             wb ? ` (height y ${bb.y})` : ""
```

#### 1397. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15538` → after: `L15538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15538) · [Before (L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15538)

```diff
-             dd.x + Od
+             bb.x + wb
```

#### 1398. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15540` → after: `L15540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15540) · [Before (L15540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15540)

```diff
-             dd.z + Od
+             bb.z + wb
```

#### 1399. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15544` → after: `L15544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15544) · [Before (L15544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15544)

```diff
-             Od("deaths")
+             wb("deaths")
```

#### 1400. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15546` → after: `L15546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15546) · [Before (L15546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15546)

```diff
-           `];const md=dd.indexOf(": "),Wd=-1===md?null:function(dd){const Od=dd.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((dd=>""!==dd));return Od.length>0&&Od.length<=3&&Od.every((dd=>/^[A-Za-z]+$/.test(dd)&&!/^[a-z]{3,}ed$/i.test(dd)&&!Zg.test(dd.toLowerCase()) … [truncated]
+           `];const Mb=bb.indexOf(": "),eb=-1===Mb?null:function(bb){const wb=bb.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((bb=>""!==bb));return wb.length>0&&wb.length<=3&&wb.every((bb=>/^[A-Za-z]+$/.test(bb)&&!/^[a-z]{3,}ed$/i.test(bb)&&!nz.test(bb.toLowerCase()) … [truncated]
```

#### 1401. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15548` → after: `L15548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15548) · [Before (L15548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15548)

```diff
-             Od("deaths logged as")
+             wb("deaths logged as")
```

#### 1402. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15552` → after: `L15552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15552) · [Before (L15552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15552)

```diff
-             Wd
+             eb
```

#### 1403. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15555` → after: `L15555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15555) · [Before (L15555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15555)

```diff
-             Od("deaths")
+             wb("deaths")
```

#### 1404. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15559` → after: `L15559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15559) · [Before (L15559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15559)

```diff
-             dd.to
+             bb.to
```

#### 1405. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15562` → after: `L15562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15562) · [Before (L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15562)

```diff
-             md("or later")
+             Mb("or later")
```

#### 1406. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15566` → after: `L15566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15566) · [Before (L15566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15566)

```diff
-             (0, cR.c)(dd.group)
+             (0, Qp.e)(bb.group)
```

#### 1407. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15568` → after: `L15568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15568) · [Before (L15568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15568)

```diff
-             dd.from
+             bb.from
```

#### 1408. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15571` → after: `L15571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15571) · [Before (L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15571)

```diff
-             dd.to
+             bb.to
```

#### 1409. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15575` → after: `L15575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15575) · [Before (L15575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15575)

```diff
-             (0, cR.m)(dd.lost)
+             (0, Qp.l)(bb.lost)
```

#### 1410. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15578` → after: `L15578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15578) · [Before (L15578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15578)

```diff
-             md("of the")
+             Mb("of the")
```

#### 1411. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15581` → after: `L15581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15581) · [Before (L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15581)

```diff
-             (0, cR.m)(dd.fromPlayers)
+             (0, Qp.l)(bb.fromPlayers)
```

#### 1412. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15584` → after: `L15584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15584) · [Before (L15584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15584)

```diff
-             md("players who reached")
+             Mb("players who reached")
```

#### 1413. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15587` → after: `L15587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15587) · [Before (L15587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15587)

```diff
-             dd.from
+             bb.from
```

#### 1414. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15590` → after: `L15590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15590) · [Before (L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15590)

```diff
-             md("didn't reach")
+             Mb("didn't reach")
```

#### 1415. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15593` → after: `L15593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15593) · [Before (L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15593)

```diff
-             Fd
+             Hb
```

#### 1416. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15595` → after: `L15595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15595) · [Before (L15595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15595)

```diff
-             hd
+             lb
```

#### 1417. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15598` → after: `L15598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15598) · [Before (L15598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15598)

```diff
-             Rd
+             pb
```

#### 1418. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15601` → after: `L15601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15601) · [Before (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15601)

```diff
-             md("in 100 players who get to")
+             Mb("in 100 players who get to")
```

#### 1419. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15604` → after: `L15604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15604) · [Before (L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15604)

```diff
-             dd.from
+             bb.from
```

#### 1420. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15607` → after: `L15607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15607) · [Before (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15607)

```diff
-             md("don't get to")
+             Mb("don't get to")
```

#### 1421. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15610` → after: `L15610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15610) · [Before (L15610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15610)

```diff
-             Fd
+             Hb
```

#### 1422. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15614` → after: `L15614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15614) · [Before (L15614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15614)

```diff
-             Rd
+             pb
```

#### 1423. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15617` → after: `L15617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15617) · [Before (L15617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15617)

```diff
-             md("of every 100 players who reach")
+             Mb("of every 100 players who reach")
```

#### 1424. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15620` → after: `L15620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15620) · [Before (L15620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15620)

```diff
-             dd.from
+             bb.from
```

#### 1425. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15622` → after: `L15622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15622) · [Before (L15622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15622)

```diff
-             (0, cR.m)(dd.fromPlayers)
+             (0, Qp.l)(bb.fromPlayers)
```

#### 1426. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15624` → after: `L15624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15624) · [Before (L15624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15624)

```diff
-             md("don't reach")
+             Mb("don't reach")
```

#### 1427. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15627` → after: `L15627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15627) · [Before (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15627)

```diff
-             Fd
+             Hb
```

#### 1428. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15629` → after: `L15629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15629) · [Before (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15629)

```diff
-             (0, cR.m)(dd.fromPlayers - dd.lost)
+             (0, Qp.l)(bb.fromPlayers - bb.lost)
```

#### 1429. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15631` → after: `L15631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15631) · [Before (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15631)

```diff
-             hd
+             lb
```

#### 1430. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15635` → after: `L15635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15635) · [Before (L15635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15635)

```diff
-             Rd
+             pb
```

#### 1431. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15638` → after: `L15638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15638) · [Before (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15638)

```diff
-             md("of every 100 players who reach")
+             Mb("of every 100 players who reach")
```

#### 1432. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15641` → after: `L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15641) · [Before (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15641)

```diff
-             dd.from
+             bb.from
```

#### 1433. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15644` → after: `L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15644) · [Before (L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15644)

```diff
-             md("don't reach")
+             Mb("don't reach")
```

#### 1434. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15647` → after: `L15647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15647) · [Before (L15647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15647)

```diff
-             Fd
+             Hb
```

#### 1435. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15649` → after: `L15649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15649) · [Before (L15649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15649)

```diff
-               (0, cR.m)(dd.lost)
+               (0, Qp.l)(bb.lost)
```

#### 1436. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15652` → after: `L15652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15652) · [Before (L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15652)

```diff
-               md("of")
+               Mb("of")
```

#### 1437. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15655` → after: `L15655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15655) · [Before (L15655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15655)

```diff
-               (0, cR.m)(dd.fromPlayers)
+               (0, Qp.l)(bb.fromPlayers)
```

#### 1438. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15657` → after: `L15657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15657) · [Before (L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15657)

```diff
-               hd
+               lb
```

#### 1439. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15660` → after: `L15660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15660) · [Before (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15660)

```diff
-             md("in")
+             Mb("in")
```

#### 1440. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15663` → after: `L15663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15663) · [Before (L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15663)

```diff
-             dd.category
+             bb.category
```

#### 1441. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15667` → after: `L15667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15667) · [Before (L15667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15667)

```diff
-             (0, cR.m)(dd.count)
+             (0, Qp.l)(bb.count)
```

#### 1442. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15670` → after: `L15670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15670) · [Before (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15670)

```diff
-             md("of")
+             Mb("of")
```

#### 1443. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15673` → after: `L15673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15673) · [Before (L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15673)

```diff
-             (0, cR.m)(dd.total)
+             (0, Qp.l)(bb.total)
```

#### 1444. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15675` → after: `L15675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15675) · [Before (L15675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15675)

```diff
-           `:null,Xd=eg(dd.count,dd.total),Kd=kg(dd.death,md);return Od?{label:2*dd.count>dd.total?md("Most deaths"):md("Many deaths"),parts:[null!==Rd&&void 0!==Rd?Rd:`
+           `:null,Vb=iz(bb.count,bb.total),gb=yz(bb.death,Mb);return wb?{label:2*bb.count>bb.total?Mb("Most deaths"):Mb("Many deaths"),parts:[null!==pb&&void 0!==pb?pb:`
```

#### 1445. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15677` → after: `L15677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15677) · [Before (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15677)

```diff
-             Xd
+             Vb
```

#### 1446. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15680` → after: `L15680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15680) · [Before (L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15680)

```diff
-             md("in 100")
+             Mb("in 100")
```

#### 1447. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15684` → after: `L15684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15684) · [Before (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15684)

```diff
-             md("happen near")
+             Mb("happen near")
```

#### 1448. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15687` → after: `L15687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15687) · [Before (L15687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15687)

```diff
-             Cg(dd.square)
+             Pz(bb.square)
```

#### 1449. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15690` → after: `L15690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15690) · [Before (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15690)

```diff
-             Fd
+             Hb
```

#### 1450. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15694` → after: `L15694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15694) · [Before (L15694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15694)

```diff
-             md("Death hotspot")
+             Mb("Death hotspot")
```

#### 1451. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15697` → after: `L15697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15697) · [Before (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15697)

```diff
-             Fd
+             Hb
```

#### 1452. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15699` → after: `L15699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15699) · [Before (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15699)

```diff
-           `,parts:[null!==Rd&&void 0!==Rd?Rd:`
+           `,parts:[null!==pb&&void 0!==pb?pb:`
```

#### 1453. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15701` → after: `L15701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15701) · [Before (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15701)

```diff
-             Xd
+             Vb
```

#### 1454. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15704` → after: `L15704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15704) · [Before (L15704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15704)

```diff
-             md("of every 100")
+             Mb("of every 100")
```

#### 1455. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15708` → after: `L15708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15708) · [Before (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15708)

```diff
-             Fd
+             Hb
```

#### 1456. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15711` → after: `L15711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15711) · [Before (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15711)

```diff
-             md("in the past week happened at")
+             Mb("in the past week happened at")
```

#### 1457. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15714` → after: `L15714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15714) · [Before (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15714)

```diff
-             lg(dd.square)
+             dz(bb.square)
```

#### 1458. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15718` → after: `L15718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15718) · [Before (L15718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15718)

```diff
-             md("in")
+             Mb("in")
```

#### 1459. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15721` → after: `L15721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15721) · [Before (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15721)

```diff
-             dd.category
+             bb.category
```

#### 1460. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15725` → after: `L15725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15725) · [Before (L15725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15725)

```diff
-             md("near")
+             Mb("near")
```

#### 1461. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15728` → after: `L15728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15728) · [Before (L15728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15728)

```diff
-             Cg(dd.square)
+             Pz(bb.square)
```

#### 1462. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15731` → after: `L15731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15731) · [Before (L15731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15731)

```diff
-             Wd
+             eb
```

#### 1463. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15733` → after: `L15733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15733) · [Before (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15733)

```diff
-             Fd
+             Hb
```

#### 1464. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15736` → after: `L15736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15736) · [Before (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15736)

```diff
-             md("in 100 minutes of play")
+             Mb("in 100 minutes of play")
```

#### 1465. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15740` → after: `L15740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15740) · [Before (L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15740)

```diff
-             lg(Od, !1)
+             dz(wb, !1)
```

#### 1466. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15742` → after: `L15742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15742) · [Before (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15742)

```diff
-               eg(Wd, 1)
+               iz(eb, 1)
```

#### 1467. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15745` → after: `L15745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15745) · [Before (L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15745)

```diff
-               md("of 100")
+               Mb("of 100")
```

#### 1468. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15748` → after: `L15748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15748) · [Before (L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15748)

```diff
-             md("Busiest place")
+             Mb("Busiest place")
```

#### 1469. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15751` → after: `L15751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15751) · [Before (L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15751)

```diff
-             Wd
+             eb
```

#### 1470. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15755` → after: `L15755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15755) · [Before (L15755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15755)

```diff
-             lg(dd.square)
+             dz(bb.square)
```

#### 1471. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15757` → after: `L15757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15757) · [Before (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15757)

```diff
-             md("with")
+             Mb("with")
```

#### 1472. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15760` → after: `L15760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15760) · [Before (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15760)

```diff
-             Fd
+             Hb
```

#### 1473. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15763` → after: `L15763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15763) · [Before (L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15763)

```diff
-             md("of every 100 minutes played")
+             Mb("of every 100 minutes played")
```

#### 1474. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15766` → after: `L15766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15766) · [Before (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15766)

```diff
-             0 === Rd.length ? "" : `; ${md("next busiest")}: ${Rd.join(", ")}`
+             0 === pb.length ? "" : `; ${Mb("next busiest")}: ${pb.join(", ")}`
```

#### 1475. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15770` → after: `L15770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15770) · [Before (L15770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15770)

```diff
-             Wd
+             eb
```

#### 1476. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15772` → after: `L15772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15772) · [Before (L15772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15772)

```diff
-             (0, cR.m)(Fd)
+             (0, Qp.l)(Hb)
```

#### 1477. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15775` → after: `L15775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15775) · [Before (L15775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15775)

```diff
-             0 === Od ? ` ${md("players")}` : ""
+             0 === wb ? ` ${Mb("players")}` : ""
```

#### 1478. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15779` → after: `L15779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15779) · [Before (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15779)

```diff
-             md("Players per")
+             Mb("Players per")
```

#### 1479. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15782` → after: `L15782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15782) · [Before (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15782)

```diff
-             dd.eventType
+             bb.eventType
```

#### 1480. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15785` → after: `L15785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15785) · [Before (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15785)

```diff
-             md("event")
+             Mb("event")
```

#### 1481. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15789` → after: `L15789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15789) · [Before (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15789)

```diff
-             md("Players at each")
+             Mb("Players at each")
```

#### 1482. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15792` → after: `L15792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15792) · [Before (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15792)

```diff
-             dd.eventType
+             bb.eventType
```

#### 1483. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15795` → after: `L15795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15795) · [Before (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15795)

```diff
-             Ig(Rd.from, Rd.to)
+             uz(pb.from, pb.to)
```

#### 1484. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15798` → after: `L15798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15798) · [Before (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15798)

```diff
-             Rd.isOrLater ? ` ${md("or later")}` : ""
+             pb.isOrLater ? ` ${Mb("or later")}` : ""
```

#### 1485. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15801` → after: `L15801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15801) · [Before (L15801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15801)

```diff
-             md("loses the most")
+             Mb("loses the most")
```

#### 1486. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15803` → after: `L15803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15803) · [Before (L15803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15803)

```diff
-             (0, cR.m)(Rd.fromPlayers)
+             (0, Qp.l)(pb.fromPlayers)
```

#### 1487. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15806` → after: `L15806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15806) · [Before (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15806)

```diff
-             (0, cR.m)(Rd.reached)
+             (0, Qp.l)(pb.reached)
```

#### 1488. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15809` → after: `L15809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15809) · [Before (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15809)

```diff
-             md("players")
+             Mb("players")
```

#### 1489. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15813` → after: `L15813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15813) · [Before (L15813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15813)

```diff
-             Fd
+             Hb
```

#### 1490. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15815` → after: `L15815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15815) · [Before (L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15815)

```diff
-             Od.join(", ")
+             wb.join(", ")
```

#### 1491. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15818` → after: `L15818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15818) · [Before (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15818)

```diff
-             dd.hasMore ? ", \u2026" : ""
+             bb.hasMore ? ", \u2026" : ""
```

#### 1492. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15821` → after: `L15821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15821) · [Before (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15821)

```diff
-             Xd
+             Vb
```

#### 1493. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15825` → after: `L15825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15825) · [Before (L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15825)

```diff
-             Fd
+             Hb
```

#### 1494. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15828` → after: `L15828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15828) · [Before (L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15828)

```diff
-             md("This line, first inside")
+             Mb("This line, first inside")
```

#### 1495. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15831` → after: `L15831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15831) · [Before (L15831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15831)

```diff
-             md("would log it")
+             Mb("would log it")
```

#### 1496. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15834` → after: `L15834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15834) · [Before (L15834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15834)

```diff
-             md("between minute")
+             Mb("between minute")
```

#### 1497. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15837` → after: `L15837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15837) · [Before (L15837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15837)

```diff
-             dd.minute - 1
+             bb.minute - 1
```

#### 1498. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15840` → after: `L15840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15840) · [Before (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15840)

```diff
-             md("and")
+             Mb("and")
```

#### 1499. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15843` → after: `L15843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15843) · [Before (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15843)

```diff
-             dd.minute
+             bb.minute
```

#### 1500. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15847` → after: `L15847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15847) · [Before (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15847)

```diff
-             md("Minute")
+             Mb("Minute")
```

#### 1501. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15850` → after: `L15850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15850) · [Before (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15850)

```diff
-             dd.minute
+             bb.minute
```

#### 1502. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15854` → after: `L15854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15854) · [Before (L15854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15854)

```diff
-             dd.ended
+             bb.ended
```

#### 1503. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15857` → after: `L15857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15857) · [Before (L15857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15857)

```diff
-             md("in 100 plays end")
+             Mb("in 100 plays end")
```

#### 1504. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15860` → after: `L15860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15860) · [Before (L15860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15860)

```diff
-             Wd
+             eb
```

#### 1505. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15862` → after: `L15862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15862) · [Before (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15862)

```diff
-             md("most games")
+             Mb("most games")
```

#### 1506. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15864` → after: `L15864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15864) · [Before (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15864)

```diff
-             dd.typicalEnded
+             bb.typicalEnded
```

#### 1507. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15867` → after: `L15867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15867) · [Before (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15867)

```diff
-             dd.ended
+             bb.ended
```

#### 1508. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15870` → after: `L15870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15870) · [Before (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15870)

```diff
-             md("of every 100 sessions end")
+             Mb("of every 100 sessions end")
```

#### 1509. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15873` → after: `L15873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15873) · [Before (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15873)

```diff
-             Wd
+             eb
```

#### 1510. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15876` → after: `L15876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15876) · [Before (L15876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15876)

```diff
-             md("in a typical Bloxd game")
+             Mb("in a typical Bloxd game")
```

#### 1511. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15878` → after: `L15878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15878) · [Before (L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15878)

```diff
-             dd.typicalEnded
+             bb.typicalEnded
```

#### 1512. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15881` → after: `L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15881) · [Before (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15881)

```diff
-             md("do")
+             Mb("do")
```

#### 1513. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15885` → after: `L15885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15885) · [Before (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15885)

```diff
-             md("Only")
+             Mb("Only")
```

#### 1514. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15888` → after: `L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15888) · [Before (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15888)

```diff
-             (0, cR.m)(dd.fewPlayers)
+             (0, Qp.l)(bb.fewPlayers)
```

#### 1515. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15891` → after: `L15891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15891) · [Before (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15891)

```diff
-             md("players this week, so this is a hint.")
+             Mb("players this week, so this is a hint.")
```

#### 1516. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15895` → after: `L15895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15895) · [Before (L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15895)

```diff
-             md("Only")
+             Mb("Only")
```

#### 1517. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15898` → after: `L15898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15898) · [Before (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15898)

```diff
-             (0, cR.m)(dd.fewPlayers)
+             (0, Qp.l)(bb.fewPlayers)
```

#### 1518. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15901` → after: `L15901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15901) · [Before (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15901)

```diff
-             md("players this week, so this is a hint:")
+             Mb("players this week, so this is a hint:")
```

#### 1519. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15905` → after: `L15905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15905) · [Before (L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15905)

```diff
-             Xd
+             Vb
```

#### 1520. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15908` → after: `L15908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15908) · [Before (L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15908)

```diff
-             Fd
+             Hb
```

#### 1521. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15910` → after: `L15910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15910) · [Before (L15910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15910)

```diff
-           `,...Rd]:[Xd,...Wd.parts]}}function dw(dd,Od){var md,Wd;const Fd=null!==(md=null===(Wd=dd.stats)||void 0===Wd?void 0:Wd.rankingWindow.uniquePlayers)&&void 0!==md?md:0;return dd.heatmaps.flatMap((md=>md.events.flatMap((Wd=>{if(!WN(Wd.eventType)||null!==qQ(Wd.eventType,Wd … [truncated]
+           `,...pb]:[Vb,...eb.parts]}}function kz(bb,wb){var Mb,eb;const Hb=null!==(Mb=null===(eb=bb.stats)||void 0===eb?void 0:eb.rankingWindow.uniquePlayers)&&void 0!==Mb?Mb:0;return bb.heatmaps.flatMap((Mb=>Mb.events.flatMap((eb=>{if(!kU(eb.eventType)||null!==tI(eb.eventType,eb … [truncated]
```

#### 1522. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15912` → after: `L15912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15912) · [Before (L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15912)

```diff
-             Wd.eventType
+             eb.eventType
```

#### 1523. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15914` → after: `L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15914) · [Before (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15914)

```diff
-             Wd.eventValue
+             eb.eventValue
```

#### 1524. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15916` → after: `L15916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15916) · [Before (L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15916)

```diff
-           `,selection:Ag(md,Wd),score:(Kd.count/Xd-Yg)*Fd}]}))))}function Ow(dd){var Od,md;if((null!==(Od=null===(md=dd.stats)||void 0===md?void 0:md.rankingWindow.uniquePlayers)&&void 0!==Od?Od:0)<tg)return[];const Wd=ig(dd,CH(dd),tg),Fd=rg(dd,tg);return[...null===Wd?[]:[Wd],... … [truncated]
+           `,selection:Az(Mb,eb),score:(gb.count/Vb-mz)*Hb}]}))))}function bX(bb){var wb,Mb;if((null!==(wb=null===(Mb=bb.stats)||void 0===Mb?void 0:Mb.rankingWindow.uniquePlayers)&&void 0!==wb?wb:0)<Iz)return[];const eb=fz(bb,uE(bb),Iz),Hb=Wz(bb,Iz);return[...null===eb?[]:[eb],... … [truncated]
```

#### 1525. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15918` → after: `L15918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15918) · [Before (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15918)

```diff
-             Od[md - 1]
+             wb[Mb - 1]
```

#### 1526. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15921` → after: `L15921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15921) · [Before (L15921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15921)

```diff
-             dd
+             bb
```

#### 1527. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15923` → after: `L15923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15923) · [Before (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15923)

```diff
-           `])).some((dd=>Fw.test(dd)))&&!Od.some((dd=>Rw.test(dd)))}(dh(dd.to))&&dd.players>=Ww&&dd.players>=dd.fromPlayers*mw));if(1!==Fd.length)return null;const[Rd]=Fd;return{step:Od.from,fromPlayers:Rd.fromPlayers,event:dh(Rd.to),players:Rd.players}}function hw(dd){return dd. … [truncated]
+           `])).some((bb=>eX.test(bb)))&&!wb.some((bb=>HX.test(bb)))}(kg(bb.to))&&bb.players>=MX&&bb.players>=bb.fromPlayers*wX));if(1!==Hb.length)return null;const[pb]=Hb;return{step:wb.from,fromPlayers:pb.fromPlayers,event:kg(pb.to),players:pb.players}}function gX(bb){return bb. … [truncated]
```

#### 1528. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15925-L15926` → after: `L15925-L15926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15925-L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15925-L15926) · [Before (L15925-L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15925-L15926)

```diff
-             Xd.params[Fd]
-           })`;return yq(Rd,Xd.callback,Xd.params[Od],md,Kd,Wd)}}function gw(dd){return Od=>{const md=Yq(Od,[]);return null!==md&&dd.test(md.code)?md:null}}const ww=new Set(["finish","finished","win","won","done","complete","completed","escape","escaped","victory"]),aw=new Set(["e … [truncated]
+             Vb.params[Hb]
+           })`;return tC(pb,Vb.callback,Vb.params[wb],Mb,gb,eb)}}function hX(bb){return wb=>{const Mb=BC(wb,[]);return null!==Mb&&bb.test(Mb.code)?Mb:null}}const zX=new Set(["finish","finished","win","won","done","complete","completed","escape","escaped","victory"]),XX=new Set(["e … [truncated]
```

#### 1529. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15928` → after: `L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15928) · [Before (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15928)

```diff
-             Od("and")
+             wb("and")
```

#### 1530. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15932` → after: `L15932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15932) · [Before (L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15932)

```diff
-             dd
+             bb
```

#### 1531. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15935` → after: `L15935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15935) · [Before (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15935)

```diff
-             Od
+             wb
```

#### 1532. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15937` → after: `L15937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15937) · [Before (L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15937)

```diff
-           `.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/_/g," "))}function Cw(dd,Od){return dd.filter((dd=>dd.fromPlayers>=Math.max(Lw,Od*Pw)&&1-dd.reached/dd.fromPlayers>nw)).sort(((dd,Od)=>dd.reached/dd.fromPlayers-Od.reached/Od.fromPlayers||Od.fromPlayers-Od.reached-(dd.fro … [truncated]
+           `.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/_/g," "))}function dX(bb,wb){return bb.filter((bb=>bb.fromPlayers>=Math.max(NX,wb*vX)&&1-bb.reached/bb.fromPlayers>SX)).sort(((bb,wb)=>bb.reached/bb.fromPlayers-wb.reached/wb.fromPlayers||wb.fromPlayers-wb.reached-(bb.fro … [truncated]
```

#### 1533. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15939` → after: `L15939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15939) · [Before (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15939)

```diff
-             hd.from.split(" / ").slice(0, -1).join(" / ")
+             lb.from.split(" / ").slice(0, -1).join(" / ")
```

#### 1534. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15941` → after: `L15941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15941) · [Before (L15941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15941)

```diff
-             dd.type
+             bb.type
```

#### 1535. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15943` → after: `L15943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15943) · [Before (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15943)

```diff
-           `,Wd=null!==(Xd=Rd.get(md))&&void 0!==Xd?Xd:{steps:[],firstPlayers:0,lastFrom:hd.from,lastNumber:-1/0};Wd.steps.push({from:Iw(hd.from),to:Iw(hd.to),fromPlayers:hd.fromPlayers,reached:hd.players,isEnd:!1}),Wd.firstPlayers=Math.max(Wd.firstPlayers,hd.fromPlayers),Od.to>Wd … [truncated]
+           `,eb=null!==(Vb=pb.get(Mb))&&void 0!==Vb?Vb:{steps:[],firstPlayers:0,lastFrom:lb.from,lastNumber:-1/0};eb.steps.push({from:iX(lb.from),to:iX(lb.to),fromPlayers:lb.fromPlayers,reached:lb.players,isEnd:!1}),eb.firstPlayers=Math.max(eb.firstPlayers,lb.fromPlayers),wb.to>eb … [truncated]
```

#### 1536. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15945` → after: `L15945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15945) · [Before (L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15945)

```diff
-             Od.type
+             wb.type
```

#### 1537. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15948` → after: `L15948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15948) · [Before (L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15948)

```diff
-             Od.value
+             wb.value
```

#### 1538. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15950-L15951` → after: `L15950-L15951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15950-L15951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15950-L15951) · [Before (L15950-L15951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15950-L15951)

```diff
-           `)})),md=void 0===dd?hd.steps:[...hd.steps,{from:Iw(dd.from),to:Iw(dd.to),fromPlayers:dd.fromPlayers,reached:dd.players,isEnd:!0}];md.length>=Gw&&hd.firstPlayers>=Od&&(null===Kd||hd.firstPlayers>Kd.firstPlayers)&&(Kd={steps:md,firstPlayers:hd.firstPlayers})}return Kd}(d … [truncated]
-             Od.toLocaleString("en-US")
+           `)})),Mb=void 0===bb?lb.steps:[...lb.steps,{from:iX(bb.from),to:iX(bb.to),fromPlayers:bb.fromPlayers,reached:bb.players,isEnd:!0}];Mb.length>=JX&&lb.firstPlayers>=wb&&(null===gb||lb.firstPlayers>gb.firstPlayers)&&(gb={steps:Mb,firstPlayers:lb.firstPlayers})}return gb}(b … [truncated]
+             wb.toLocaleString("en-US")
```

#### 1539. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15953` → after: `L15953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15953) · [Before (L15953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15953)

```diff
-             Od
+             wb
```

#### 1540. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15956` → after: `L15956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15956) · [Before (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15956)

```diff
-             md(dd.fromPlayers)
+             Mb(bb.fromPlayers)
```

#### 1541. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15959-L15960` → after: `L15959-L15960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15959-L15960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15959-L15960) · [Before (L15959-L15960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15959-L15960)

```diff
-             md(dd.reached)
-           }( ? ![\\d] | [, .]\\ d)`);return(0,jR.g)(Od,Wd,(0,jR.l)("\\d,.")).length>0}(dd,md))).slice(0,"young"===Wd?0:Jy(Wd)?Dw:jw)}function Wa(dd,Od,md,Wd){const Fd=Jy(md),Rd=Od[0]===dd.steps[0],Xd=Wd(Rd?"Hardest steps":"Next hardest steps"),Kd="week"===dd.since?Wd("past week") … [truncated]
+             Mb(bb.reached)
+           }( ? ![\\d] | [, .]\\ d)`);return(0,Gp.d)(wb,eb,(0,Gp.h)("\\d,.")).length>0}(bb,Mb))).slice(0,"young"===eb?0:XF(eb)?qX:GX)}function wx(bb,wb,Mb,eb){const Hb=XF(Mb),pb=wb[0]===bb.steps[0],Vb=eb(pb?"Hardest steps":"Next hardest steps"),gb="week"===bb.since?eb("past week") … [truncated]
```

#### 1542. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15962` → after: `L15962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15962) · [Before (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15962)

```diff
-             Xd
+             Vb
```

#### 1543. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15964` → after: `L15964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15964) · [Before (L15964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15964)

```diff
-             Kd
+             gb
```

#### 1544. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15967` → after: `L15967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15967) · [Before (L15967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15967)

```diff
-             Wd("get to")
+             eb("get to")
```

#### 1545. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15970` → after: `L15970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15970) · [Before (L15970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15970)

```diff
-             Od.to
+             wb.to
```

#### 1546. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15974` → after: `L15974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15974) · [Before (L15974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15974)

```diff
-             dd.isFew ? `${(0,cR.m)(Rd)} ${Wd("of the")} ${(0,cR.m)(Od.fromPlayers)}` : `${Xd=Rd,Kd=Od.fromPlayers,String(Xd>0?Math.max(1,Math.round(Xd/Kd*100)):0)} ${Wd("in 100")}`
+             bb.isFew ? `${(0,Qp.l)(pb)} ${eb("of the")} ${(0,Qp.l)(wb.fromPlayers)}` : `${Vb=pb,gb=wb.fromPlayers,String(Vb>0?Math.max(1,Math.round(Vb/gb*100)):0)} ${eb("in 100")}`
```

#### 1547. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15977` → after: `L15977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15977) · [Before (L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15977)

```diff
-             Wd("players who get to")
+             eb("players who get to")
```

#### 1548. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15980` → after: `L15980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15980) · [Before (L15980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15980)

```diff
-             Od.from
+             wb.from
```

#### 1549. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15983` → after: `L15983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15983) · [Before (L15983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15983)

```diff
-             Wd("don't")
+             eb("don't")
```

#### 1550. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15986` → after: `L15986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15986) · [Before (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15986)

```diff
-             Fd
+             Hb
```

#### 1551. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15988` → after: `L15988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15988) · [Before (L15988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15988)

```diff
-           `,hd]}}var Xd,Kd;const vd=dd.isFew?(0,cR.m)(Rd):`
+           `,lb]}}var Vb,gb;const Lb=bb.isFew?(0,Qp.l)(pb):`
```

#### 1552. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15990` → after: `L15990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15990) · [Before (L15990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15990)

```diff
-             Math.round(Rd / Od.fromPlayers * 100)
+             Math.round(pb / wb.fromPlayers * 100)
```

#### 1553. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15993` → after: `L15993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15993) · [Before (L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15993)

```diff
-             (0, cR.m)(Od.fromPlayers)
+             (0, Qp.l)(wb.fromPlayers)
```

#### 1554. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15996` → after: `L15996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15996) · [Before (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15996)

```diff
-             (0, cR.m)(Od.reached)
+             (0, Qp.l)(wb.reached)
```

#### 1555. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15999` → after: `L15999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L15999) · [Before (L15999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L15999)

```diff
-             Wd("players")
+             eb("players")
```

#### 1556. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16001` → after: `L16001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16001) · [Before (L16001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16001)

```diff
-               vd
+               Lb
```

#### 1557. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16004-L16005` → after: `L16004-L16005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16004-L16005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16004-L16005) · [Before (L16004-L16005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16004-L16005)

```diff
-               Wd("get no further")
-             }) `,hd]}}))}}const Fa=10,Ra=.25,Xa=.9,Ka=20,ha=.15,va=5,Qa=/\b(?:checkpoint|wave|island|zone|level|stage|round|floor|room|chapter|world|step|part)s?\b/i,ta=3,oa=3,Na=2,qa=5,Ha=new Set(["player","players","other","start","started","middle","minutes","seconds","count", … [truncated]
+               eb("get no further")
+             }) `,lb]}}))}}const Mx=10,ex=.25,Hx=.9,px=20,Vx=.15,gx=5,lx=/\b(?:checkpoint|wave|island|zone|level|stage|round|floor|room|chapter|world|step|part)s?\b/i,Lx=3,Ix=3,Ox=2,Ux=5,tx=new Set(["player","players","other","start","started","middle","minutes","seconds","count", … [truncated]
```

#### 1558. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16007` → after: `L16007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16007) · [Before (L16007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16007)

```diff
-             dd.eventType
+             bb.eventType
```

#### 1559. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16010` → after: `L16010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16010) · [Before (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16010)

```diff
-             md
+             Mb
```

#### 1560. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16012` → after: `L16012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16012) · [Before (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16012)

```diff
-           `))})))return null;const Od=Object.fromEntries(dd.values.map((dd=>{let{value:Od,players:md}=dd;return[Od,md]}))),md=Lq({[dd.gameCategory]:{[dd.eventType]:Od}},va)[0];if(void 0===md)return null;const Wd=md.steps.filter((dd=>dd.from.players>=va&&1-dd.share>ha)).sort(((dd, … [truncated]
+           `))})))return null;const wb=Object.fromEntries(bb.values.map((bb=>{let{value:wb,players:Mb}=bb;return[wb,Mb]}))),Mb=JC({[bb.gameCategory]:{[bb.eventType]:wb}},gx)[0];if(void 0===Mb)return null;const eb=Mb.steps.filter((bb=>bb.from.players>=gx&&1-bb.share>Vx)).sort(((bb, … [truncated]
```

#### 1561. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16014` → after: `L16014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16014) · [Before (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16014)

```diff
-             Hd
+             Eb
```

#### 1562. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16016` → after: `L16016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16016) · [Before (L16016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16016)

```diff
-             yd
+             Fb
```

#### 1563. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16018` → after: `L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16018) · [Before (L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16018)

```diff
-           `);var Hd,yd;const bd="numbers"===Qd.kind?"eventValues":"spot"===Qd.kind?"heatmap":"playersPerEvent";return[{name:qd,eventType:Od.eventType,players:Kd,names:Ta(Od.eventType,Od.values.map((dd=>{let{value:Od}=dd;return Od}))),valueKeys:Od.values.flatMap((dd=>{let{value:Od … [truncated]
+           `);var Eb,Fb;const Bb="numbers"===Ib.kind?"eventValues":"spot"===Ib.kind?"heatmap":"playersPerEvent";return[{name:Cb,eventType:wb.eventType,players:gb,names:Fx(wb.eventType,wb.values.map((bb=>{let{value:wb}=bb;return wb}))),valueKeys:wb.values.flatMap((bb=>{let{value:wb … [truncated]
```

#### 1564. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16020` → after: `L16020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16020) · [Before (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16020)

```diff
-             (0, cR.D)(Od)
+             (0, Qp.E)(wb)
```

#### 1565. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16022` → after: `L16022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16022) · [Before (L16022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16022)

```diff
-           `;return dd.names.some((dd=>{const Od=(0,cR.D)(dd);return""!==Od&&(md.includes(`
+           `;return bb.names.some((bb=>{const wb=(0,Qp.E)(bb);return""!==wb&&(Mb.includes(`
```

#### 1566. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16024` → after: `L16024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16024) · [Before (L16024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16024)

```diff
-             Od
+             wb
```

#### 1567. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16028` → after: `L16028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16028) · [Before (L16028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16028)

```diff
-             Od
+             wb
```

#### 1568. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16032` → after: `L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16032) · [Before (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16032)

```diff
-             Od
+             wb
```

#### 1569. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16034` → after: `L16034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16034) · [Before (L16034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16034)

```diff
-           es `))}))}function wa(dd,Od){const md=dd.valueKeys.length<=Od.valueKeys.length?dd:Od,Wd=new Set(md===dd?Od.valueKeys:dd.valueKeys),Fd=md.valueKeys.filter((dd=>Wd.has(dd))).length;return Fd>0&&2*Fd>=md.valueKeys.length}function aa(dd,Od,md){const Wd="young"===Od,Fd={stat … [truncated]
+           es `))}))}function hx(bb,wb){const Mb=bb.valueKeys.length<=wb.valueKeys.length?bb:wb,eb=new Set(Mb===bb?wb.valueKeys:bb.valueKeys),Hb=Mb.valueKeys.filter((bb=>eb.has(bb))).length;return Hb>0&&2*Hb>=Mb.valueKeys.length}function zx(bb,wb,Mb){const eb="young"===wb,Hb={stat … [truncated]
```

#### 1570. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16036` → after: `L16036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16036) · [Before (L16036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16036)

```diff
-             Ea(dd, Wd, Rd, md)
+             Xx(bb, eb, pb, Mb)
```

#### 1571. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16040` → after: `L16040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16040) · [Before (L16040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16040)

```diff
-             (0, cR.m)(Fd.players)
+             (0, Qp.l)(Hb.players)
```

#### 1572. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16043` → after: `L16043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16043) · [Before (L16043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16043)

```diff
-             Wd("players so far")
+             eb("players so far")
```

#### 1573. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16047` → after: `L16047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16047) · [Before (L16047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16047)

```diff
-             (0, cR.m)(Fd.players)
+             (0, Qp.l)(Hb.players)
```

#### 1574. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16050` → after: `L16050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16050) · [Before (L16050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16050)

```diff
-             Wd("players sent it")
+             eb("players sent it")
```

#### 1575. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16053` → after: `L16053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16053) · [Before (L16053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16053)

```diff
-             md
+             Mb
```

#### 1576. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16057` → after: `L16057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16057) · [Before (L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16057)

```diff
-             Fd
+             Hb
```

#### 1577. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16059` → after: `L16059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16059) · [Before (L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16059)

```diff
-             (0, cR.m)(Rd)
+             (0, Qp.l)(pb)
```

#### 1578. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16062` → after: `L16062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16062) · [Before (L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16062)

```diff
-             0 === md || Od ? ` ${Wd("players")}` : ""
+             0 === Mb || wb ? ` ${eb("players")}` : ""
```

#### 1579. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16066` → after: `L16066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16066) · [Before (L16066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16066)

```diff
-             dd.join(", ")
+             bb.join(", ")
```

#### 1580. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16069` → after: `L16069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16069) · [Before (L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16069)

```diff
-             Fd.hasMore ? ", \u2026" : ""
+             Hb.hasMore ? ", \u2026" : ""
```

#### 1581. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16073` → after: `L16073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16073) · [Before (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16073)

```diff
-             Rd
+             pb
```

#### 1582. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16075` → after: `L16075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16075) · [Before (L16075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16075)

```diff
-             md
+             Mb
```

#### 1583. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16078` → after: `L16078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16078) · [Before (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16078)

```diff
-             Rd
+             pb
```

#### 1584. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16080` → after: `L16080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16080) · [Before (L16080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16080)

```diff
-               md
+               Mb
```

#### 1585. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16083` → after: `L16083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16083) · [Before (L16083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16083)

```diff
-               Fd.isFirstAndLast ? "" : `, ${Wd("most first")}`
+               Hb.isFirstAndLast ? "" : `, ${eb("most first")}`
```

#### 1586. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16086` → after: `L16086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16086) · [Before (L16086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16086)

```diff
-             Fd.to
+             Hb.to
```

#### 1587. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16089` → after: `L16089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16089) · [Before (L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16089)

```diff
-             Wd("or later")
+             eb("or later")
```

#### 1588. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16093` → after: `L16093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16093) · [Before (L16093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16093)

```diff
-             (0, cR.m)(Fd.fromPlayers)
+             (0, Qp.l)(Hb.fromPlayers)
```

#### 1589. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16096` → after: `L16096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16096) · [Before (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16096)

```diff
-             Wd("players got to")
+             eb("players got to")
```

#### 1590. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16099` → after: `L16099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16099) · [Before (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16099)

```diff
-             Fd.from
+             Hb.from
```

#### 1591. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16101` → after: `L16101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16101) · [Before (L16101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16101)

```diff
-             Wd("only")
+             eb("only")
```

#### 1592. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16104` → after: `L16104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16104) · [Before (L16104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16104)

```diff
-             (0, cR.m)(Fd.reached)
+             (0, Qp.l)(Hb.reached)
```

#### 1593. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16107` → after: `L16107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16107) · [Before (L16107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16107)

```diff
-             Wd("got to")
+             eb("got to")
```

#### 1594. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16110` → after: `L16110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16110) · [Before (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16110)

```diff
-             dd
+             bb
```

#### 1595. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16112` → after: `L16112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16112) · [Before (L16112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16112)

```diff
-             md
+             Mb
```

#### 1596. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16115` → after: `L16115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16115) · [Before (L16115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16115)

```diff
-             Fd.from
+             Hb.from
```

#### 1597. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16118` → after: `L16118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16118) · [Before (L16118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16118)

```diff
-             dd
+             bb
```

#### 1598. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16121` → after: `L16121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16121) · [Before (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16121)

```diff
-             Wd("loses the most")
+             eb("loses the most")
```

#### 1599. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16123` → after: `L16123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16123) · [Before (L16123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16123)

```diff
-             (0, cR.m)(Fd.fromPlayers)
+             (0, Qp.l)(Hb.fromPlayers)
```

#### 1600. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16126` → after: `L16126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16126) · [Before (L16126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16126)

```diff
-             (0, cR.m)(Fd.reached)
+             (0, Qp.l)(Hb.reached)
```

#### 1601. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16129` → after: `L16129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16129) · [Before (L16129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16129)

```diff
-             Wd("players")
+             eb("players")
```

#### 1602. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16131` → after: `L16131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16131) · [Before (L16131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16131)

```diff
-             md
+             Mb
```

#### 1603. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16133` → after: `L16133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16133) · [Before (L16133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16133)

```diff
-             Wd("few players")
+             eb("few players")
```

#### 1604. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16137` → after: `L16137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16137) · [Before (L16137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16137)

```diff
-             Wd("the usual number is about")
+             eb("the usual number is about")
```

#### 1605. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16140` → after: `L16140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16140) · [Before (L16140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16140)

```diff
-             OR(Fd.median)
+             kH(Hb.median)
```

#### 1606. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16142` → after: `L16142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16142) · [Before (L16142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16142)

```diff
-             Wd("this week")
+             eb("this week")
```

#### 1607. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16145` → after: `L16145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16145) · [Before (L16145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16145)

```diff
-             Wd("the middle number this week is")
+             eb("the middle number this week is")
```

#### 1608. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16148` → after: `L16148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16148) · [Before (L16148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16148)

```diff
-             OR(Fd.median)
+             kH(Hb.median)
```

#### 1609. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16150` → after: `L16150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16150) · [Before (L16150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16150)

```diff
-             Wd("and half are between")
+             eb("and half are between")
```

#### 1610. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16153` → after: `L16153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16153) · [Before (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16153)

```diff
-             OR(Fd.p25)
+             kH(Hb.p25)
```

#### 1611. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16156` → after: `L16156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16156) · [Before (L16156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16156)

```diff
-             Wd("and")
+             eb("and")
```

#### 1612. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16159` → after: `L16159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16159) · [Before (L16159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16159)

```diff
-             OR(Fd.p75)
+             kH(Hb.p75)
```

#### 1613. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16161` → after: `L16161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16161) · [Before (L16161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16161)

```diff
-               (0, cR.m)(Fd.players)
+               (0, Qp.l)(Hb.players)
```

#### 1614. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16164` → after: `L16164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16164) · [Before (L16164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16164)

```diff
-               Wd("players")
+               eb("players")
```

#### 1615. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16167` → after: `L16167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16167) · [Before (L16167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16167)

```diff
-               dd
+               bb
```

#### 1616. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16170` → after: `L16170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16170) · [Before (L16170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16170)

```diff
-             2 * Fd.count > Fd.total ? Wd("most happen near") : Wd("lots happen near")
+             2 * Hb.count > Hb.total ? eb("most happen near") : eb("lots happen near")
```

#### 1617. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16173` → after: `L16173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16173) · [Before (L16173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16173)

```diff
-             Fd.x + dd
+             Hb.x + bb
```

#### 1618. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16175` → after: `L16175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16175) · [Before (L16175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16175)

```diff
-             Fd.z + dd
+             Hb.z + bb
```

#### 1619. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16177` → after: `L16177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16177) · [Before (L16177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16177)

```diff
-             Wd("this week")
+             eb("this week")
```

#### 1620. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16180-L16183` → after: `L16180-L16183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16180-L16183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16180-L16183) · [Before (L16180-L16183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16180-L16183)

```diff
-             function(dd, Od) {
-               const md = Od > 0 ? Math.round(dd / Od * 100) : 0;
-               return String(dd > 0 ? Math.max(1, md) : 0)
-             }(Fd.count, Fd.total)
+             function(bb, wb) {
+               const Mb = wb > 0 ? Math.round(bb / wb * 100) : 0;
+               return String(bb > 0 ? Math.max(1, Mb) : 0)
+             }(Hb.count, Hb.total)
```

#### 1621. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16186` → after: `L16186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16186) · [Before (L16186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16186)

```diff
-             Wd("of every 100 in the past week happened at")
+             eb("of every 100 in the past week happened at")
```

#### 1622. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16189` → after: `L16189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16189) · [Before (L16189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16189)

```diff
-             Fd.x
+             Hb.x
```

#### 1623. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16192` → after: `L16192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16192) · [Before (L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16192)

```diff
-             Wd("to")
+             eb("to")
```

#### 1624. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16195` → after: `L16195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16195) · [Before (L16195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16195)

```diff
-             Fd.x + dd
+             Hb.x + bb
```

#### 1625. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16197` → after: `L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16197) · [Before (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16197)

```diff
-             Fd.z
+             Hb.z
```

#### 1626. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16200` → after: `L16200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16200) · [Before (L16200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16200)

```diff
-             Wd("to")
+             eb("to")
```

#### 1627. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16203` → after: `L16203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16203) · [Before (L16203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16203)

```diff
-             Fd.z + dd
+             Hb.z + bb
```

#### 1628. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16205` → after: `L16205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16205) · [Before (L16205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16205)

```diff
-           `}}}md(7429);const Ja=new Map([["tick",["ms"]],["onPlayerJoin",["playerId","fromGameReset"]],["onPlayerLeave",["playerId","serverIsShuttingDown"]],["onPlayerJump",["playerId"]],["onRespawnRequest",["playerId"]],["playerCommand",["playerId","command"]],["onPlayerChat",[" … [truncated]
+           `}}}Mb(7653);const xx=new Map([["tick",["ms"]],["onPlayerJoin",["playerId","fromGameReset"]],["onPlayerLeave",["playerId","serverIsShuttingDown"]],["onPlayerJump",["playerId"]],["onRespawnRequest",["playerId"]],["playerCommand",["playerId","command"]],["onPlayerChat",[" … [truncated]
```

#### 1629. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16207` → after: `L16207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16207) · [Before (L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16207)

```diff
-             Od
+             wb
```

#### 1630. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16216` → after: `L16216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16216) · [Before (L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16216)

```diff
-   Kd = [...new Set([...PN, ...Rd.filter((dd => xa.attacker.test(dd) || xa.victim.test(dd))), ...Object.keys(Ua), ...(null !== (Wd = md.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== Wd ? Wd : []).filter((dd => xa.attacker.test(dd) || xa.victim.test(dd)))])].filter(Xd),
+   gb = [...new Set([...Jt, ...pb.filter((bb => Kx.attacker.test(bb) || Kx.victim.test(bb))), ...Object.keys(jx), ...(null !== (eb = Mb.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== eb ? eb : []).filter((bb => Kx.attacker.test(bb) || Kx.victim.test(bb)))])].filter(Vb),
```

#### 1631. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16225` → after: `L16225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16225) · [Before (L16225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16225)

```diff
-       return (0, jR.g)(dd, new RegExp(`${Od.replace(/\$/g,"\\$")}(?![\\w$])`, "g"), jR.o).every((md => !/^\s*(?:\?\.|[.[])/.test(dd.slice(md.index + Od.length))))
+       return (0, Gp.d)(bb, new RegExp(`${wb.replace(/\$/g,"\\$")}(?![\\w$])`, "g"), Gp.i).every((Mb => !/^\s*(?:\?\.|[.[])/.test(bb.slice(Mb.index + wb.length))))
```

#### 1632. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16253` → after: `L16253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16253) · [Before (L16253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16253)

```diff
-   if (null === dd || null === Od || null === md || void 0 === md || void 0 === md.declaredNames || QQ(md) || dd.length > cR.t || Sa.test(Od) || null !== LN(dd) || !lb(dd).isBalanced) return null;
+   if (null === bb || null === wb || null === Mb || void 0 === Mb || void 0 === Mb.declaredNames || LI(Mb) || bb.length > Qp.w || Rx.test(wb) || null !== Wt(bb) || !iB(bb).isBalanced) return null;
```

#### 1633. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16266` → after: `L16266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16266) · [Before (L16266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16266)

```diff
-     })) || (null !== (Wd = md.functions) && void 0 !== Wd ? Wd : []).some((dd => {
+     })) || (null !== (eb = Mb.functions) && void 0 !== eb ? eb : []).some((bb => {
```

#### 1634. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16288` → after: `L16288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16288) · [Before (L16288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16288)

```diff
-       return (null !== Od && void 0 !== Od ? Od : []).flatMap((dd => null === dd ? [] : [dd]))
+       return (null !== wb && void 0 !== wb ? wb : []).flatMap((bb => null === bb ? [] : [bb]))
```

#### 1635. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16292` → after: `L16292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16292) · [Before (L16292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16292)

```diff
-     od = null === Kd.loopName ? td : [`${ua}for (const ${Kd.loopName} of api.getPlayerIds()) {`, ...td, `${ua}}`];
+     Ub = null === gb.loopName ? Ob : [`${cx}for (const ${gb.loopName} of api.getPlayerIds()) {`, ...Ob, `${cx}}`];
```

#### 1636. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16295` → after: `L16295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16295) · [Before (L16295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16295)

```diff
-     code: [`${Fd} = (${Kd.params.join(", ")}) => {`, ...od, "}"].join("\n"),
+     code: [`${Hb} = (${gb.params.join(", ")}) => {`, ...Ub, "}"].join("\n"),
```

#### 1637. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16362` → after: `L16362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16362) · [Before (L16362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16362)

```diff
-   return (0, jR.g)(dd, new RegExp(`${(0,cR.e)(Od)}(?![\\w$])`, "g"), jR.o).flatMap((md => /(?:^|[{,\n])\s*$/.test(dd.slice(0, md.index)) && /^\s*:/.test(dd.slice(md.index + Od.length)) ? [] : [md.index]))
+   return (0, Gp.d)(bb, new RegExp(`${(0,Qp.g)(wb)}(?![\\w$])`, "g"), Gp.i).flatMap((Mb => /(?:^|[{,\n])\s*$/.test(bb.slice(0, Mb.index)) && /^\s*:/.test(bb.slice(Mb.index + wb.length)) ? [] : [Mb.index]))
```

#### 1638. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16420` → after: `L16420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16420) · [Before (L16420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16420)

```diff
-   const Fd = null === (Wd = new RegExp(`\\b${dd}\\s*\\(([^()]*)\\)`).exec(Od)) || void 0 === Wd ? void 0 : Wd[1],
+   const Hb = null === (eb = new RegExp(`\\b${bb}\\s*\\(([^()]*)\\)`).exec(wb)) || void 0 === eb ? void 0 : eb[1],
```

#### 1639. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16434` → after: `L16434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16434) · [Before (L16434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16434)

```diff
-     Xd = new Map((null !== (md = Od.functions) && void 0 !== md ? md : []).map((dd => [dd.name, dd]))),
+     Vb = new Map((null !== (Mb = wb.functions) && void 0 !== Mb ? Mb : []).map((bb => [bb.name, bb]))),
```

#### 1640. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16447` → after: `L16447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16447) · [Before (L16447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16447)

```diff
-         return [...Od.events, ...null !== (md = Od.messages) && void 0 !== md ? md : [], ...null !== (Wd = Od.calls) && void 0 !== Wd ? Wd : []].some((Od => {
+         return [...wb.events, ...null !== (Mb = wb.messages) && void 0 !== Mb ? Mb : [], ...null !== (eb = wb.calls) && void 0 !== eb ? eb : []].some((wb => {
```

#### 1641. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16469` → after: `L16469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16469) · [Before (L16469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16469)

```diff
-   const td = null !== (Wd = null === (Fd = Od.callbacks.find((dd => dd.name === vd))) || void 0 === Fd ? void 0 : Fd.idNames) && void 0 !== Wd ? Wd : [];
+   const Ob = null !== (eb = null === (Hb = wb.callbacks.find((bb => bb.name === Lb))) || void 0 === Hb ? void 0 : Hb.idNames) && void 0 !== eb ? eb : [];
```

#### 1642. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16492` → after: `L16492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16492) · [Before (L16492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16492)

```diff
-   if (null === Od || null === md || void 0 === md || dd.length > cR.t || !lb(dd).isBalanced) return Fd;
+   if (null === wb || null === Mb || void 0 === Mb || bb.length > Qp.w || !iB(bb).isBalanced) return Hb;
```

#### 1643. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16506` → after: `L16506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16506) · [Before (L16506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16506)

```diff
-     }) : Wd || "tick" !== Qd || !la(Kd, hd) || 0 !== (null !== (Xd = null === td || void 0 === td ? void 0 : td.idNames) && void 0 !== Xd ? Xd : []).length || /getPlayerIds|\b(?:return|break|continue|function|setTimeout|setInterval)\b|=>/.test(Kd) ? !Wd && "tick" !== Qd && functi … [truncated]
+     }) : eb || "tick" !== Ib || !ux(gb, lb) || 0 !== (null !== (Vb = null === Ob || void 0 === Ob ? void 0 : Ob.idNames) && void 0 !== Vb ? Vb : []).length || /getPlayerIds|\b(?:return|break|continue|function|setTimeout|setInterval)\b|=>/.test(gb) ? !eb && "tick" !== Ib && functi … [truncated]
```

#### 1644. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16508` → after: `L16508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16508) · [Before (L16508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16508)

```diff
-       const Xd = (null !== (Wd = md.functions) && void 0 !== Wd ? Wd : []).find((Od => {
+       const Vb = (null !== (eb = Mb.functions) && void 0 !== eb ? eb : []).find((wb => {
```

#### 1645. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16514-L16515` → after: `L16514-L16515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16514-L16515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16514-L16515) · [Before (L16514-L16515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16514-L16515)

```diff
-         Kd = void 0 === Xd && /\bplayer\b/.test(null !== (Fd = WQ.get(dd)) && void 0 !== Fd ? Fd : ""),
-         hd = null !== (Rd = null === Xd || void 0 === Xd ? void 0 : Xd.params) && void 0 !== Rd ? Rd : Ma(dd, Od, md);
+         gb = void 0 === Vb && /\bplayer\b/.test(null !== (Hb = MI.get(bb)) && void 0 !== Hb ? Hb : ""),
+         lb = null !== (pb = null === Vb || void 0 === Vb ? void 0 : Vb.params) && void 0 !== pb ? pb : ox(bb, wb, Mb);
```

#### 1646. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16519` → after: `L16519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16519) · [Before (L16519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16519)

```diff
-         Wd = [...dd.matchAll(new RegExp(`api\\s*\\.\\s*sendMessage\\s*\\(\\s*${(0,cR.e)(Od)}\\s*,`, "g"))];
+         eb = [...bb.matchAll(new RegExp(`api\\s*\\.\\s*sendMessage\\s*\\(\\s*${(0,Qp.g)(wb)}\\s*,`, "g"))];
```

#### 1647. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16524` → after: `L16524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16524) · [Before (L16524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16524)

```diff
-       for (const Rd of Od.matchAll(new RegExp(`api\\s*\\.\\s*sendMessage\\s*\\(\\s*${(0,cR.e)(md)}\\s*,\\s*`, "g"))) Wd += `${dd.slice(Fd,Rd.index)}api.broadcastMessage(`, Fd = Rd.index + Rd[0].length;
+       for (const pb of wb.matchAll(new RegExp(`api\\s*\\.\\s*sendMessage\\s*\\(\\s*${(0,Qp.g)(Mb)}\\s*,\\s*`, "g"))) eb += `${bb.slice(Hb,pb.index)}api.broadcastMessage(`, Hb = pb.index + pb[0].length;
```

#### 1648. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16533-L16534` → after: `L16533-L16534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16533-L16534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16533-L16534) · [Before (L16533-L16534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16533-L16534)

```diff
-       Xd = null !== (Wd = dd.loopName) && void 0 !== Wd ? Wd : 1 === Fd.playerParams.length ? Fd.playerParams[0] : null,
-       Kd = null !== Xd && new RegExp(`\\bapi\\s*\\.\\s*(?:${ra})\\s*\\(\\s*${(0,cR.e)(Xd)}\\s*[,)]`).test(Rd);
+       Vb = null !== (eb = bb.loopName) && void 0 !== eb ? eb : 1 === Hb.playerParams.length ? Hb.playerParams[0] : null,
+       gb = null !== Vb && new RegExp(`\\bapi\\s*\\.\\s*(?:${Ax})\\s*\\(\\s*${(0,Qp.g)(Vb)}\\s*[,)]`).test(pb);
```

#### 1649. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16542` → after: `L16542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16542) · [Before (L16542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16542)

```diff
-         for (const Rd of ea(dd).matchAll(new RegExp(`!\\s*([A-Za-z_$][\\w$]*)\\s*\\[\\s*${(0,cR.e)(md)}\\s*\\]`, "g"))) {
+         for (const pb of ax(bb).matchAll(new RegExp(`!\\s*([A-Za-z_$][\\w$]*)\\s*\\[\\s*${(0,Qp.g)(Mb)}\\s*\\]`, "g"))) {
```

#### 1650. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16544` → after: `L16544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16544) · [Before (L16544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16544)

```diff
-             md = new RegExp(`(?:^|[^\\w$.])${(0,cR.e)(dd)}\\s*\\[[^\\]]*\\]\\s*=(?!=)`).test(Od);
+             Mb = new RegExp(`(?:^|[^\\w$.])${(0,Qp.g)(bb)}\\s*\\[[^\\]]*\\]\\s*=(?!=)`).test(wb);
```

#### 1651. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16549` → after: `L16549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16549) · [Before (L16549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16549)

```diff
-       return void(null !== Od && null !== hd && null !== hd.cond && (dd.code = [`if (${hd.cond}) {`, `${Aa}${Od}[${Xd}] = true${vd}`, ...hd.body.map(mE), "}"].join("\n"), dd.flagNames = [Od]))
+       return void(null !== wb && null !== lb && null !== lb.cond && (bb.code = [`if (${lb.cond}) {`, `${fx}${wb}[${Vb}] = true${Lb}`, ...lb.body.map(bj), "}"].join("\n"), bb.flagNames = [wb]))
```

#### 1652. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16554-L16555` → after: `L16554-L16555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16554-L16555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16554-L16555) · [Before (L16554-L16555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16554-L16555)

```diff
-           const Fd = new Set(null !== (md = Od.declaredNames) && void 0 !== md ? md : []);
-           return null !== (Wd = ca.find((Od => !Fd.has(Od) && 0 === Ia(dd, Od).length))) && void 0 !== Wd ? Wd : ca[ca.length - 1]
+           const Hb = new Set(null !== (Mb = wb.declaredNames) && void 0 !== Mb ? Mb : []);
+           return null !== (eb = Qx.find((wb => !Hb.has(wb) && 0 === ix(bb, wb).length))) && void 0 !== eb ? eb : Qx[Qx.length - 1]
```

#### 1653. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16557-L16559` → after: `L16557-L16559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16557-L16559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16557-L16559) · [Before (L16557-L16559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16557-L16559)

```diff
-         Wd = `!${Od}.has(${Xd})`,
-         Kd = null === hd.cond ? Wd : `${function(dd){return/\|\||\?(?!\.)/.test(ea(dd))?`(${dd})`:dd}(hd.cond)} && ${Wd}`;
-       return dd.code = [`if (${Kd}) {`, `${Aa}${Od}.add(${Xd})${vd}`, ...hd.body.map(mE), "}"].join("\n"), void(dd.once = {
+         eb = `!${wb}.has(${Vb})`,
+         gb = null === lb.cond ? eb : `${function(bb){return/\|\||\?(?!\.)/.test(ax(bb))?`(${bb})`:bb}(lb.cond)} && ${eb}`;
+       return bb.code = [`if (${gb}) {`, `${fx}${wb}.add(${Vb})${Lb}`, ...lb.body.map(bj), "}"].join("\n"), void(bb.once = {
```

#### 1654. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16561` → after: `L16561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16561) · [Before (L16561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16561)

```diff
-         line: `const ${Od} = new Set()`,
+         line: `const ${wb} = new Set()`,
```

#### 1655. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16567` → after: `L16567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16567) · [Before (L16567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16567)

```diff
-   }(Fd, Od, md), null !== Fd.loopName && (Fd.code = [`for (const ${Fd.loopName} of api.getPlayerIds()) {`, ...ka(Fd.code).map(mE), "}"].join("\n"))), Fd
+   }(Hb, wb, Mb), null !== Hb.loopName && (Hb.code = [`for (const ${Hb.loopName} of api.getPlayerIds()) {`, ...nx(Hb.code).map(bj), "}"].join("\n"))), Hb
```

#### 1656. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16578-L16579` → after: `L16578-L16579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16578-L16579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16578-L16579) · [Before (L16578-L16579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16578-L16579)

```diff
-   hE = (dd, Od) => `(?<${dd}>${XE})\\s*\\[\\s*(?<${Od}>${XE})\\s*\\]`,
-   vE = new RegExp(`^\\s*api\\s*\\.\\s*(?<call>sendMessage|sendFlyingMiddleMessage)\\s*\\(\\s*(?<id>${XE})\\s*,\\s*(?<open>\\[\\s*)?(?<quote>["'])(?<text>(?:(?!\\k<quote>)[^\\\\\\n])*)\\k<quote>(?<close>\\s*\\])?(?<rest>\\s*,[^;\\n]*)?\\)\\s*(?<semi>;?)\\s*$`),
+   Vj = (bb, wb) => `(?<${bb}>${Hj})\\s*\\[\\s*(?<${wb}>${Hj})\\s*\\]`,
+   gj = new RegExp(`^\\s*api\\s*\\.\\s*(?<call>sendMessage|sendFlyingMiddleMessage)\\s*\\(\\s*(?<id>${Hj})\\s*,\\s*(?<open>\\[\\s*)?(?<quote>["'])(?<text>(?:(?!\\k<quote>)[^\\\\\\n])*)\\k<quote>(?<close>\\s*\\])?(?<rest>\\s*,[^;\\n]*)?\\)\\s*(?<semi>;?)\\s*$`),
```

#### 1657. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16583-L16584` → after: `L16583-L16584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16583-L16584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16583-L16584) · [Before (L16583-L16584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16583-L16584)

```diff
-   NE = new RegExp(`^\\s*(?:var|let|const)\\s+(${XE})\\s*=\\s*(api|Date)\\.now\\(\\)\\s*-\\s*(${XE})\\s*;?\\s*$`),
-   qE = new RegExp(`^\\s*(?:var|let|const)\\s+(${XE})\\s*=\\s*(api|Date)\\.now\\(\\)\\s*;?\\s*$`),
+   Oj = new RegExp(`^\\s*(?:var|let|const)\\s+(${Hj})\\s*=\\s*(api|Date)\\.now\\(\\)\\s*-\\s*(${Hj})\\s*;?\\s*$`),
+   Uj = new RegExp(`^\\s*(?:var|let|const)\\s+(${Hj})\\s*=\\s*(api|Date)\\.now\\(\\)\\s*;?\\s*$`),
```

#### 1658. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16597-L16599` → after: `L16597-L16599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16597-L16599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16597-L16599) · [Before (L16597-L16599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16597-L16599)

```diff
-   pE = new RegExp(`^\\s*(?:if\\s*\\(\\s*!\\s*${hE("checked","checkedId")}\\s*\\)\\s*)?${hE("table","id")}\\s*=\\s*${KE}\\s*(?:;|\\n)\\s*`),
-   YE = new RegExp(`^(?<now>${KE})\\s*-\\s*(?:${hE("table","id")}|\\(\\s*${hE("orTable","orId")}\\s*\\|\\|\\s*0\\s*\\))\\s*(?<op>>=?)\\s*(?<ms>\\d+)$`),
-   gE = new RegExp(`^!\\s*${hE("table","id")}$`),
+   Bj = new RegExp(`^\\s*(?:if\\s*\\(\\s*!\\s*${Vj("checked","checkedId")}\\s*\\)\\s*)?${Vj("table","id")}\\s*=\\s*${pj}\\s*(?:;|\\n)\\s*`),
+   sj = new RegExp(`^(?<now>${pj})\\s*-\\s*(?:${Vj("table","id")}|\\(\\s*${Vj("orTable","orId")}\\s*\\|\\|\\s*0\\s*\\))\\s*(?<op>>=?)\\s*(?<ms>\\d+)$`),
+   mj = new RegExp(`^!\\s*${Vj("table","id")}$`),
```

#### 1659. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16614` → after: `L16614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16614) · [Before (L16614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16614)

```diff
-   return null !== (Wd = dd.find((dd => !Fd.has(dd) && 0 === (0, jR.g)(Od, new RegExp(`${dd}(?![\\w$])`), jR.o).length))) && void 0 !== Wd ? Wd : null
+   return null !== (eb = bb.find((bb => !Hb.has(bb) && 0 === (0, Gp.d)(wb, new RegExp(`${bb}(?![\\w$])`), Gp.i).length))) && void 0 !== eb ? eb : null
```

#### 1660. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16624` → after: `L16624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16624) · [Before (L16624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16624)

```diff
-     for (const Xd of [...dd.callbacks, ...null !== (Wd = dd.functions) && void 0 !== Wd ? Wd : []]) {
+     for (const Vb of [...bb.callbacks, ...null !== (eb = bb.functions) && void 0 !== eb ? eb : []]) {
```

#### 1661. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16626` → after: `L16626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16626) · [Before (L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16626)

```diff
-       for (const dd of null !== (Fd = null === (Rd = Xd.body) || void 0 === Rd ? void 0 : Rd.next) && void 0 !== Fd ? Fd : []) {
+       for (const bb of null !== (Hb = null === (pb = Vb.body) || void 0 === pb ? void 0 : pb.next) && void 0 !== Hb ? Hb : []) {
```

#### 1662. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16642-L16643` → after: `L16642-L16643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16642-L16643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/119.js#L16642-L16643) · [Before (L16642-L16643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/119.js#L16642-L16643)

```diff
-   for (const [Rd, Xd] of md)(0, jR.g)(dd, new RegExp(`${Rd}(?![\\w$])`), jR.o).length > 0 && Fd.push(Xd);
-   for (const Rd of (0, jR.g)(dd, new RegExp(`(api|Date)\\.now\\(\\)\\s*-\\s*(${XE})(?![\\w$.[(])`, "g"), jR.o)) Fd.push({
+   for (const [pb, Vb] of Mb)(0, Gp.d)(bb, new RegExp(`${pb}(?![\\w$])`), Gp.i).length > 0 && Hb.push(Vb);
+   for (const pb of (0, Gp.d)(bb, new RegExp(`(api|Date)\\.now\\(\\)\\s*-\\s*(${Hj})(?![\\w$.[(])`, "g"), Gp.i)) Hb.push({
```
