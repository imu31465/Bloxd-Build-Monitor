# Changed — Bundle Modifications Report (Part 014 / 141)

- **Updated at**: `2026-11-25T05:21 JST`
- **Part**: `14 / 141` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/106.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9 · continued)

- **File**: `bundles/bloxd.io/chunks/js/106.js` (2674 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e)

#### 1133. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14756-L14759` → after: `L14756-L14759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14756-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14756-L14759) · [Before (L14756-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14756-L14759)

```diff
-             sessionsPerPlayer: null === JT || null === BT ? null : {
-               now: JT,
-               typical: null !== (lT = null === cT || void 0 === cT ? void 0 : cT.sessionsPerPlayer.p50) && void 0 !== lT ? lT : null,
-               days: BT.sessionsPerPlayerWindowDays
+             sessionsPerPlayer: null === iB || null === JB ? null : {
+               now: iB,
+               typical: null !== (pB = null === yB || void 0 === yB ? void 0 : yB.sessionsPerPlayer.p50) && void 0 !== pB ? pB : null,
+               days: JB.sessionsPerPlayerWindowDays
```

#### 1134. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14761-L14763` → after: `L14761-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14761-L14763) · [Before (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14761-L14763)

```diff
-             playsPerDay: null === xT ? null : {
-               now: xT,
-               typical: "playsFalling" === (null === qT || void 0 === qT ? void 0 : qT.kind) ? qT.previous : null !== (LT = null === cT || void 0 === cT ? void 0 : cT.dailyPlays.p50) && void 0 !== LT ? LT : null
+             playsPerDay: null === qB ? null : {
+               now: qB,
+               typical: "playsFalling" === (null === LB || void 0 === LB ? void 0 : LB.kind) ? LB.previous : null !== (rB = null === yB || void 0 === yB ? void 0 : yB.dailyPlays.p50) && void 0 !== rB ? rB : null
```

#### 1135. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14766-L14767` → after: `L14766-L14767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14766-L14767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14766-L14767) · [Before (L14766-L14767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14766-L14767)

```diff
-               plays: eT.flatMap((TT => null === TT.plays ? [] : [TT.plays])),
-               sessionMinutes: eT.flatMap((TT => null === TT.avgSessionMs ? [] : [TT.avgSessionMs / 6e4]))
+               plays: MB.flatMap((BB => null === BB.plays ? [] : [BB.plays])),
+               sessionMinutes: MB.flatMap((BB => null === BB.avgSessionMs ? [] : [BB.avgSessionMs / 6e4]))
```

#### 1136. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14769-L14775` → after: `L14769-L14775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14769-L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14769-L14775) · [Before (L14769-L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14769-L14775)

```diff
-             flowSteps: iT,
-             progressSteps: bT,
-             problem: OT,
-             deaths: tZ(TT),
-             heatmapEvents: TT.heatmaps.map((TT => ({
-               gameCategory: TT.gameCategoryId,
-               eventTypes: [...new Set(TT.events.map((TT => TT.eventType)))]
+             flowSteps: gB,
+             progressSteps: tB,
+             problem: SB,
+             deaths: Fm(BB),
+             heatmapEvents: BB.heatmaps.map((BB => ({
+               gameCategory: BB.gameCategoryId,
+               eventTypes: [...new Set(BB.events.map((BB => BB.eventType)))]
```

#### 1137. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14777-L14778` → after: `L14777-L14778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14777-L14778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14777-L14778) · [Before (L14777-L14778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14777-L14778)

```diff
-             places: rq(TT),
-             loggedValues: cg(TT)
+             places: wL(BB),
+             loggedValues: gI(BB)
```

#### 1138. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14782-L14785` → after: `L14782-L14785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14782-L14785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14782-L14785) · [Before (L14782-L14785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14782-L14785)

```diff
-         function Di(TT) {
-           return [...TT.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((TT => {
-             const UT = gW(TT[1]);
-             return null === UT ? [] : [UT.key]
+         function bg(BB) {
+           return [...BB.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((BB => {
+             const jB = dQ(BB[1]);
+             return null === jB ? [] : [jB.key]
```

#### 1139. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14789-L14791` → after: `L14789-L14791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14789-L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14789-L14791) · [Before (L14789-L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14789-L14791)

```diff
-         function oi(TT) {
-           const UT = TT => TT.flatMap((TT => [TT.text, ...UT(TT.children)]));
-           return TT.blocks.flatMap((TT => "paragraph" === TT.kind ? [TT.text] : "list" === TT.kind ? UT(TT.items) : []))
+         function vg(BB) {
+           const jB = BB => BB.flatMap((BB => [BB.text, ...jB(BB.children)]));
+           return BB.blocks.flatMap((BB => "paragraph" === BB.kind ? [BB.text] : "list" === BB.kind ? jB(BB.items) : []))
```

#### 1140. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14794-L14796` → after: `L14794-L14796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14794-L14796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14794-L14796) · [Before (L14794-L14796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14794-L14796)

```diff
-         function Ai(TT, UT) {
-           const mT = (0, pg.j)(UT.toLowerCase());
-           return (0, Bg.e)(TT.toLowerCase(), new RegExp(`${mT}(?![\\w])`), (0, Bg.j)("\\w")).length > 0
+         function Rg(BB, jB) {
+           const zB = (0, kI.e)(jB.toLowerCase());
+           return (0, GI.h)(BB.toLowerCase(), new RegExp(`${zB}(?![\\w])`), (0, GI.k)("\\w")).length > 0
```

#### 1141. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14799-L14803` → after: `L14799-L14803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14799-L14803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14799-L14803) · [Before (L14799-L14803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14799-L14803)

```diff
-         function Ri(TT, UT, mT) {
-           var WT;
-           const zT = TT.filter((TT => Ai(UT, TT.from) && Ai(UT, TT.to))).sort(((TT, UT) => UT.fromPlayers - TT.fromPlayers)),
-             MT = null === mT || "flowStep" !== mT.kind && "progressStep" !== mT.kind ? void 0 : TT.find((TT => TT.from === mT.from && TT.to === mT.to));
-           return void 0 === MT || 0 !== zT.length && !zT.includes(MT) ? null !== (WT = zT[0]) && void 0 !== WT ? WT : null : MT
+         function Og(BB, jB, zB) {
+           var QB;
+           const nB = BB.filter((BB => Rg(jB, BB.from) && Rg(jB, BB.to))).sort(((BB, jB) => jB.fromPlayers - BB.fromPlayers)),
+             dB = null === zB || "flowStep" !== zB.kind && "progressStep" !== zB.kind ? void 0 : BB.find((BB => BB.from === zB.from && BB.to === zB.to));
+           return void 0 === dB || 0 !== nB.length && !nB.includes(dB) ? null !== (QB = nB[0]) && void 0 !== QB ? QB : null : dB
```

#### 1142. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14806-L14807` → after: `L14806-L14807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14806-L14807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14806-L14807) · [Before (L14806-L14807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14806-L14807)

```diff
-         function Tb(TT) {
-           return TT < 100 ? Math.max(10, 10 * Math.round(TT / 10)) : Number(TT.toPrecision(2))
+         function Bt(BB) {
+           return BB < 100 ? Math.max(10, 10 * Math.round(BB / 10)) : Number(BB.toPrecision(2))
```

#### 1143. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14810-L14811` → after: `L14810-L14811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14810-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14810-L14811) · [Before (L14810-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14810-L14811)

```diff
-         function Ub(TT) {
-           return TT < 1e3 ? Math.round(TT) : Number(TT.toPrecision(2))
+         function jt(BB) {
+           return BB < 1e3 ? Math.round(BB) : Number(BB.toPrecision(2))
```

#### 1144. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14814-L14816` → after: `L14814-L14816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14814-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14814-L14816) · [Before (L14814-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14814-L14816)

```diff
-         function mb(TT, UT) {
-           const mT = Math.max(Pi, null === UT ? 0 : (UT - TT) * Vi);
-           return Math.min(99, Math.round(TT + mT))
+         function zt(BB, jB) {
+           const zB = Math.max(Tg, null === jB ? 0 : (jB - BB) * Pg);
+           return Math.min(99, Math.round(BB + zB))
```

#### 1145. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14819-L14820` → after: `L14819-L14820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14819-L14820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14819-L14820) · [Before (L14819-L14820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14819-L14820)

```diff
-         function Wb(TT, UT, mT) {
-           return TT + Math.max(TT * ui, null === UT ? 0 : (UT - TT) * Vi, mT)
+         function Qt(BB, jB, zB) {
+           return BB + Math.max(BB * Wg, null === jB ? 0 : (jB - BB) * Pg, zB)
```

#### 1146. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14822` → after: `L14822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14822) · [Before (L14822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14822)

```diff
-         const zb = {
+         const nt = {
```

#### 1147. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14832` → after: `L14832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14832) · [Before (L14832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14832)

```diff
-         }, Mb = `(\\d{1,2}|${Object.keys(zb).join("|")})`, gb = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${Mb}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${Mb}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
+         }, dt = `(\\d{1,2}|${Object.keys(nt).join("|")})`, It = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${dt}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${dt}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
```

#### 1148. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14834-L14836` → after: `L14834-L14836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14834-L14836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14834-L14836) · [Before (L14834-L14836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14834-L14836)

```diff
-         function jb(TT) {
-           var UT;
-           return null !== (UT = zb[TT.toLowerCase()]) && void 0 !== UT ? UT : Number(TT)
+         function pt(BB) {
+           var jB;
+           return null !== (jB = nt[BB.toLowerCase()]) && void 0 !== jB ? jB : Number(BB)
```

#### 1149. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14839-L14840` → after: `L14839-L14840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14839-L14840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14839-L14840) · [Before (L14839-L14840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14839-L14840)

```diff
-         function lb(TT, UT) {
-           return null === UT || UT * TT < si ? null : {
+         function rt(BB, jB) {
+           return null === jB || jB * BB < Zg ? null : {
```

#### 1150. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14842-L14843` → after: `L14842-L14843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14842-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14842-L14843) · [Before (L14842-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14842-L14843)

```diff
-             days: TT,
-             count: Tb(UT * TT),
+             days: BB,
+             count: Bt(jB * BB),
```

#### 1151. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14848-L14851` → after: `L14848-L14851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14848-L14851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14848-L14851) · [Before (L14848-L14851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14848-L14851)

```diff
-         function Lb(TT) {
-           if (TT.length < Gi) return null;
-           const UT = TT.slice(1).reduce(((UT, mT, WT) => UT + (mT - TT[WT]) ** 2), 0) / (2 * (TT.length - 1)),
-             mT = TT.slice(-ri);
+         function st(BB) {
+           if (BB.length < Kg) return null;
+           const jB = BB.slice(1).reduce(((jB, zB, QB) => jB + (zB - BB[QB]) ** 2), 0) / (2 * (BB.length - 1)),
+             zB = BB.slice(-lg);
```

#### 1152. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14853-L14855` → after: `L14853-L14855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14853-L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14853-L14855) · [Before (L14853-L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14853-L14855)

```diff
-             low: Math.min(...mT),
-             high: Math.max(...mT),
-             averageMargin: Ni * Math.sqrt(UT / ri)
+             low: Math.min(...zB),
+             high: Math.max(...zB),
+             averageMargin: Cg * Math.sqrt(jB / lg)
```

#### 1153. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14859-L14860` → after: `L14859-L14860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14859-L14860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14859-L14860) · [Before (L14859-L14860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14859-L14860)

```diff
-         function pb(TT, UT) {
-           return null === TT || TT <= 0 || TT * ri < si ? null : null !== UT ? {
+         function Jt(BB, jB) {
+           return null === BB || BB <= 0 || BB * lg < Zg ? null : null !== jB ? {
```

#### 1154. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14862` → after: `L14862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14862) · [Before (L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14862)

```diff
-             days: ri,
+             days: lg,
```

#### 1155. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14864-L14865` → after: `L14864-L14865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14864-L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14864-L14865) · [Before (L14864-L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14864-L14865)

```diff
-               low: UT.low,
-               high: UT.high
+               low: jB.low,
+               high: jB.high
```

#### 1156. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14869` → after: `L14869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14869) · [Before (L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14869)

```diff
-             days: Math.min(ri, Math.max(Ci, Math.ceil(si / TT))),
+             days: Math.min(lg, Math.max(eg, Math.ceil(Zg / BB))),
```

#### 1157. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14874-L14884` → after: `L14874-L14884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14874-L14884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14874-L14884) · [Before (L14874-L14884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14874-L14884)

```diff
-         function Bb(TT, UT) {
-           var mT, WT;
-           const zT = (null !== TT && void 0 !== TT ? TT : "").split("\n").filter((TT => "" !== TT.trim())),
-             MT = 1 === zT.length ? Uj(zT[0]) : null;
-           if (null === MT || null === UT) return null;
-           let gT = MT.path,
-             nT = null !== (mT = UT.get(gT)) && void 0 !== mT ? mT : null;
-           if (null === nT && !gT.includes(".")) {
-             const TT = [...UT].filter((TT => {
-               let [UT] = TT;
-               return UT.endsWith(`.${MT.path}`)
+         function mt(BB, jB) {
+           var zB, QB;
+           const nB = (null !== BB && void 0 !== BB ? BB : "").split("\n").filter((BB => "" !== BB.trim())),
+             dB = 1 === nB.length ? ja(nB[0]) : null;
+           if (null === dB || null === jB) return null;
+           let IB = dB.path,
+             NB = null !== (zB = jB.get(IB)) && void 0 !== zB ? zB : null;
+           if (null === NB && !IB.includes(".")) {
+             const BB = [...jB].filter((BB => {
+               let [jB] = BB;
+               return jB.endsWith(`.${dB.path}`)
```

#### 1158. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14886` → after: `L14886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14886) · [Before (L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14886)

```diff
-             gT = 1 === TT.length ? TT[0][0] : gT, nT = 1 === TT.length ? TT[0][1] : null
+             IB = 1 === BB.length ? BB[0][0] : IB, NB = 1 === BB.length ? BB[0][1] : null
```

#### 1159. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14888-L14891` → after: `L14888-L14891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14888-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14888-L14891) · [Before (L14888-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14888-L14891)

```diff
-           const HT = null === nT ? null : null === (WT = Uj(nT)) || void 0 === WT ? void 0 : WT.value,
-             kT = TT => TT.replace(/\s+/g, "");
-           if (null === nT || void 0 === HT || null === HT || kT(HT) === kT(MT.value)) return null;
-           const jT = gT.lastIndexOf(".");
+           const uB = null === NB ? null : null === (QB = ja(NB)) || void 0 === QB ? void 0 : QB.value,
+             UB = BB => BB.replace(/\s+/g, "");
+           if (null === NB || void 0 === uB || null === uB || UB(uB) === UB(dB.value)) return null;
+           const aB = IB.lastIndexOf(".");
```

#### 1160. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14893-L14894` → after: `L14893-L14894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14893-L14894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14893-L14894) · [Before (L14893-L14894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14893-L14894)

```diff
-             line: nT,
-             inside: -1 === jT ? null : gT.slice(0, jT)
+             line: NB,
+             inside: -1 === aB ? null : IB.slice(0, aB)
```

#### 1161. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14898-L14903` → after: `L14898-L14903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14898-L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14898-L14903) · [Before (L14898-L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14898-L14903)

```diff
-         function Zb(TT) {
-           var UT, mT;
-           const WT = null === TT ? null : null !== (UT = null !== (mT = (0, Bg.e)(TT, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, Bg.j)("\\w.,"))[0]) && void 0 !== mT ? mT : (0, Bg.e)(TT, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
-           return null === WT ? null : {
-             now: Number(WT[1].replace(/,/g, "")),
-             target: Number(WT[2].replace(/,/g, ""))
+         function yt(BB) {
+           var jB, zB;
+           const QB = null === BB ? null : null !== (jB = null !== (zB = (0, GI.h)(BB, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, GI.k)("\\w.,"))[0]) && void 0 !== zB ? zB : (0, GI.h)(BB, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
+           return null === QB ? null : {
+             now: Number(QB[1].replace(/,/g, "")),
+             target: Number(QB[2].replace(/,/g, ""))
```

#### 1162. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14907-L14908` → after: `L14907-L14908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14907-L14908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14907-L14908) · [Before (L14907-L14908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14907-L14908)

```diff
-         function cb(TT) {
-           return "playersStillPlaying" === TT ? "sessionDropoff" : TT
+         function kt(BB) {
+           return "playersStillPlaying" === BB ? "sessionDropoff" : BB
```

#### 1163. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14911-L14913` → after: `L14911-L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14911-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14911-L14913) · [Before (L14911-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14911-L14913)

```diff
-         function vb(TT, UT, mT, WT) {
-           let zT = null;
-           if (null !== UT) zT = cb(UT.statKey) === cb(mT) ? Zb(UT.change) : null;
+         function Gt(BB, jB, zB, QB) {
+           let nB = null;
+           if (null !== jB) nB = kt(jB.statKey) === kt(zB) ? yt(jB.change) : null;
```

#### 1164. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14915-L14935` → after: `L14915-L14935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14915-L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14915-L14935) · [Before (L14915-L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14915-L14935)

```diff
-             var MT;
-             const UT = oi(TT).find((TT => /\b(check|target|aim)\b/i.test(TT) && null !== Zb(TT)));
-             zT = null !== (MT = Zb(TT.target)) && void 0 !== MT ? MT : Zb(null !== UT && void 0 !== UT ? UT : null)
-           }
-           return null === zT || ! function(TT, UT) {
-             return Math.abs(TT - UT) <= (UT >= 10 ? Math.max(.5, .01 * UT) : .05) + 1e-9
-           }(zT.now, WT) || zT.target <= WT ? null : zT.target
-         }
- 
-         function fb(TT, UT, mT, WT) {
-           var zT, MT, gT;
-           const nT = function(TT, UT) {
-             const mT = null === TT.target ? void 0 : Di(TT.target)[0];
-             if (void 0 !== mT) return mT;
-             if (null !== UT) return UT.statKey;
-             const WT = oi(TT).find((TT => /\b(check|target|aim)\b/i.test(TT) && Di(TT).length > 0));
- ... (5 more removed lines; see GitHub link above)
+             var dB;
+             const jB = vg(BB).find((BB => /\b(check|target|aim)\b/i.test(BB) && null !== yt(BB)));
+             nB = null !== (dB = yt(BB.target)) && void 0 !== dB ? dB : yt(null !== jB && void 0 !== jB ? jB : null)
+           }
+           return null === nB || ! function(BB, jB) {
+             return Math.abs(BB - jB) <= (jB >= 10 ? Math.max(.5, .01 * jB) : .05) + 1e-9
+           }(nB.now, QB) || nB.target <= QB ? null : nB.target
+         }
+ 
+         function Lt(BB, jB, zB, QB) {
+           var nB, dB, IB;
+           const NB = function(BB, jB) {
+             const zB = null === BB.target ? void 0 : bg(BB.target)[0];
+             if (void 0 !== zB) return zB;
+             if (null !== jB) return jB.statKey;
+             const QB = vg(BB).find((BB => /\b(check|target|aim)\b/i.test(BB) && bg(BB).length > 0));
+ ... (5 more added lines; see GitHub link above)
```

#### 1165. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14938-L14957` → after: `L14938-L14957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14938-L14957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14938-L14957) · [Before (L14938-L14957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14938-L14957)

```diff
-                 var zT, MT, gT;
-                 const TT = WT.sessions;
-                 if (null === TT) return null;
-                 const mT = function(TT) {
-                     var UT;
-                     if (null === TT) return null;
-                     if (/\bfirst minute\b/i.test(TT)) return 1;
-                     const mT = TT.replace(/\[\[[^\]]*\]\]/g, ""),
-                       WT = null !== (UT = (0, Bg.e)(mT, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, Bg.j)("\\w."))[0]) && void 0 !== UT ? UT : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(mT);
-                     return null === WT ? null : Number(WT[1])
-                   }(UT.target),
-                   nT = null === mT ? function(TT, UT) {
-                     var mT;
-                     if (null === TT) return null;
-                     const WT = TT => TT >= 1 && void 0 !== UT[TT],
-                       zT = Hb.exec(TT);
- ... (4 more removed lines; see GitHub link above)
+                 var nB, dB, IB;
+                 const BB = QB.sessions;
+                 if (null === BB) return null;
+                 const zB = function(BB) {
+                     var jB;
+                     if (null === BB) return null;
+                     if (/\bfirst minute\b/i.test(BB)) return 1;
+                     const zB = BB.replace(/\[\[[^\]]*\]\]/g, ""),
+                       QB = null !== (jB = (0, GI.h)(zB, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, GI.k)("\\w."))[0]) && void 0 !== jB ? jB : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(zB);
+                     return null === QB ? null : Number(QB[1])
+                   }(jB.target),
+                   NB = null === zB ? function(BB, jB) {
+                     var zB;
+                     if (null === BB) return null;
+                     const QB = BB => BB >= 1 && void 0 !== jB[BB],
+                       nB = ut.exec(BB);
+ ... (4 more added lines; see GitHub link above)
```

#### 1166. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14961-L14968` → after: `L14961-L14968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14961-L14968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14961-L14968) · [Before (L14961-L14968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14961-L14968)

```diff
-                     for (const nT of gb) {
-                       const UT = nT.exec(TT);
-                       if (null !== UT) {
-                         const TT = jb(UT[1]),
-                           mT = kb.find((UT => UT > TT && WT(UT)));
-                         return void 0 === mT ? null : {
-                           minutes: mT,
-                           after: TT
+                     for (const NB of It) {
+                       const jB = NB.exec(BB);
+                       if (null !== jB) {
+                         const BB = pt(jB[1]),
+                           zB = Ut.find((jB => jB > BB && QB(jB)));
+                         return void 0 === zB ? null : {
+                           minutes: zB,
+                           after: BB
```

#### 1167. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14972-L14975` → after: `L14972-L14975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14972-L14975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14972-L14975) · [Before (L14972-L14975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14972-L14975)

```diff
-                     const MT = nb.exec(TT),
-                       gT = null === MT ? null : jb(null !== (mT = MT[1]) && void 0 !== mT ? mT : MT[2]);
-                     return null !== gT && WT(gT) ? {
-                       minutes: gT,
+                     const dB = Nt.exec(BB),
+                       IB = null === dB ? null : pt(null !== (zB = dB[1]) && void 0 !== zB ? zB : dB[2]);
+                     return null !== IB && QB(IB) ? {
+                       minutes: IB,
```

#### 1168. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14978-L14983` → after: `L14978-L14983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14978-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14978-L14983) · [Before (L14978-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14978-L14983)

```diff
-                   }(UT.title, TT.percents) : null,
-                   HT = null !== (zT = null !== mT && void 0 !== mT ? mT : null === nT || void 0 === nT ? void 0 : nT.minutes) && void 0 !== zT ? zT : "dropoff" === (null === (MT = WT.problem) || void 0 === MT ? void 0 : MT.kind) ? WT.problem.minute : sU,
-                   kT = TT.percents[HT],
-                   jT = lb(TT.days, WT.dailyPlays);
-                 return void 0 === kT || HT < 1 || null === jT ? null : {
-                   measure: null === nT || null === nT.after ? {
+                   }(jB.title, BB.percents) : null,
+                   uB = null !== (nB = null !== zB && void 0 !== zB ? zB : null === NB || void 0 === NB ? void 0 : NB.minutes) && void 0 !== nB ? nB : "dropoff" === (null === (dB = QB.problem) || void 0 === dB ? void 0 : dB.kind) ? QB.problem.minute : Xj,
+                   UB = BB.percents[uB],
+                   aB = rt(BB.days, QB.dailyPlays);
+                 return void 0 === UB || uB < 1 || null === aB ? null : {
+                   measure: null === NB || null === NB.after ? {
```

#### 1169. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14985` → after: `L14985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14985) · [Before (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14985)

```diff
-                     minutes: HT
+                     minutes: uB
```

#### 1170. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14988-L14989` → after: `L14988-L14989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14988-L14989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14988-L14989) · [Before (L14988-L14989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14988-L14989)

```diff
-                     minutes: HT,
-                     after: nT.after
+                     minutes: uB,
+                     after: NB.after
```

#### 1171. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14991-L14993` → after: `L14991-L14993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14991-L14993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14991-L14993) · [Before (L14991-L14993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14991-L14993)

```diff
-                   now: Math.round(kT),
-                   helped: mb(kT, null !== (gT = TT.typicalPercents[HT]) && void 0 !== gT ? gT : null),
-                   wait: jT
+                   now: Math.round(UB),
+                   helped: zt(UB, null !== (IB = BB.typicalPercents[uB]) && void 0 !== IB ? IB : null),
+                   wait: aB
```

#### 1172. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14997-L15002` → after: `L14997-L15002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14997-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L14997-L15002) · [Before (L14997-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L14997-L15002)

```diff
-                 const TT = Ri(WT.flowSteps, mT, WT.problem);
-                 if (null === TT || TT.fromPlayers < Fi) return null;
-                 const UT = function(TT, UT, mT) {
-                     const WT = Math.max(UT.fromPlayers, ...TT.filter((TT => TT.group === UT.group)).map((TT => TT.fromPlayers)));
-                     return null === mT || mT <= 0 || WT <= mT ? {
-                       players: UT.fromPlayers,
+                 const BB = Og(QB.flowSteps, zB, QB.problem);
+                 if (null === BB || BB.fromPlayers < Ag) return null;
+                 const jB = function(BB, jB, zB) {
+                     const QB = Math.max(jB.fromPlayers, ...BB.filter((BB => BB.group === jB.group)).map((BB => BB.fromPlayers)));
+                     return null === zB || zB <= 0 || QB <= zB ? {
+                       players: jB.fromPlayers,
```

#### 1173. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15005` → after: `L15005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15005) · [Before (L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15005)

```diff
-                       players: UT.fromPlayers * mT / WT,
+                       players: jB.fromPlayers * zB / QB,
```

#### 1174. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15008-L15010` → after: `L15008-L15010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15008-L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15008-L15010) · [Before (L15008-L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15008-L15010)

```diff
-                   }(WT.flowSteps, TT, WT.weeklyPlayers),
-                   zT = UT.isScaled && UT.players < 100 ? Math.round(UT.players) : Tb(UT.players),
-                   MT = {
+                   }(QB.flowSteps, BB, QB.weeklyPlayers),
+                   nB = jB.isScaled && jB.players < 100 ? Math.round(jB.players) : Bt(jB.players),
+                   dB = {
```

#### 1175. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15012-L15013` → after: `L15012-L15013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15012-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15012-L15013) · [Before (L15012-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15012-L15013)

```diff
-                     days: Ki,
-                     count: zT,
+                     days: wg,
+                     count: nB,
```

#### 1176. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15019-L15021` → after: `L15019-L15021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15019-L15021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15019-L15021) · [Before (L15019-L15021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15019-L15021)

```diff
-                     from: TT.from,
-                     to: TT.to,
-                     isOrLater: TT.isOrLater
+                     from: BB.from,
+                     to: BB.to,
+                     isOrLater: BB.isOrLater
```

#### 1177. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15023-L15025` → after: `L15023-L15025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15023-L15025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15023-L15025) · [Before (L15023-L15025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15023-L15025)

```diff
-                   now: Math.round(TT.share),
-                   helped: mb(TT.share, ib(WT.flowSteps, TT)),
-                   wait: MT
+                   now: Math.round(BB.share),
+                   helped: zt(BB.share, tt(QB.flowSteps, BB)),
+                   wait: dB
```

#### 1178. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15029-L15033` → after: `L15029-L15033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15029-L15033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15029-L15033) · [Before (L15029-L15033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15029-L15033)

```diff
-                 const TT = Ri(WT.progressSteps, mT, WT.problem);
-                 if (null === TT || TT.fromPlayers < Fi) return null;
-                 const UT = mb(TT.share, ib(WT.progressSteps, TT)),
-                   zT = null !== WT.weeklyPlayers ? 2 * WT.weeklyPlayers / Ki : null === WT.dailyPlays ? 1 / 0 : 2 * WT.dailyPlays,
-                   MT = Tb(Math.max(si, Math.min(.1 * TT.fromPlayers, zT)));
+                 const BB = Og(QB.progressSteps, zB, QB.problem);
+                 if (null === BB || BB.fromPlayers < Ag) return null;
+                 const jB = zt(BB.share, tt(QB.progressSteps, BB)),
+                   nB = null !== QB.weeklyPlayers ? 2 * QB.weeklyPlayers / wg : null === QB.dailyPlays ? 1 / 0 : 2 * QB.dailyPlays,
+                   dB = Bt(Math.max(Zg, Math.min(.1 * BB.fromPlayers, nB)));
```

#### 1179. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15037-L15040` → after: `L15037-L15040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15037-L15040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15037-L15040) · [Before (L15037-L15040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15037-L15040)

```diff
-                     from: TT.from,
-                     to: TT.to,
-                     fromPlayers: TT.fromPlayers,
-                     toPlayers: TT.toPlayers
+                     from: BB.from,
+                     to: BB.to,
+                     fromPlayers: BB.fromPlayers,
+                     toPlayers: BB.toPlayers
```

#### 1180. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15042-L15044` → after: `L15042-L15044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15042-L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15042-L15044) · [Before (L15042-L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15042-L15044)

```diff
-                   selection: TT.selection,
-                   now: Math.round(TT.share),
-                   helped: UT,
+                   selection: BB.selection,
+                   now: Math.round(BB.share),
+                   helped: jB,
```

#### 1181. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15047-L15051` → after: `L15047-L15051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15047-L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15047-L15051) · [Before (L15047-L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15047-L15051)

```diff
-                     at: TT.from,
-                     players: TT.fromPlayers + MT,
-                     more: MT,
-                     helpedAt: TT.to,
-                     helpedPlayers: qb(TT.toPlayers, UT, MT)
+                     at: BB.from,
+                     players: BB.fromPlayers + dB,
+                     more: dB,
+                     helpedAt: BB.to,
+                     helpedPlayers: gt(BB.toPlayers, jB, dB)
```

#### 1182. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15056-L15061` → after: `L15056-L15061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15056-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15056-L15061) · [Before (L15056-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15056-L15061)

```diff
-                 var nT;
-                 const TT = WT.playsPerDay,
-                   UT = Lb(WT.dailySeries.plays),
-                   mT = pb(WT.dailyPlays, UT);
-                 if (null === TT || null === mT) return null;
-                 const zT = Math.max(Wb(TT.now, TT.typical, 1), TT.now + (null !== (nT = null === UT || void 0 === UT ? void 0 : UT.averageMargin) && void 0 !== nT ? nT : 0));
+                 var NB;
+                 const BB = QB.playsPerDay,
+                   jB = st(QB.dailySeries.plays),
+                   zB = Jt(QB.dailyPlays, jB);
+                 if (null === BB || null === zB) return null;
+                 const nB = Math.max(Qt(BB.now, BB.typical, 1), BB.now + (null !== (NB = null === jB || void 0 === jB ? void 0 : jB.averageMargin) && void 0 !== NB ? NB : 0));
```

#### 1183. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15066-L15069` → after: `L15066-L15069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15066-L15069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15066-L15069) · [Before (L15066-L15069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15066-L15069)

```diff
-                   now: Math.round(TT.now),
-                   helped: zT < 1e3 ? Math.round(zT) : Number(zT.toPrecision(3)),
-                   wait: "days" === mT.kind && null !== mT.swing ? {
-                     ...mT,
+                   now: Math.round(BB.now),
+                   helped: nB < 1e3 ? Math.round(nB) : Number(nB.toPrecision(3)),
+                   wait: "days" === zB.kind && null !== zB.swing ? {
+                     ...zB,
```

#### 1184. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15071-L15072` → after: `L15071-L15072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15071-L15072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15071-L15072) · [Before (L15071-L15072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15071-L15072)

```diff
-                       low: Ub(mT.swing.low),
-                       high: Ub(mT.swing.high)
+                       low: jt(zB.swing.low),
+                       high: jt(zB.swing.high)
```

#### 1185. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15074` → after: `L15074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15074) · [Before (L15074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15074)

```diff
-                   } : mT
+                   } : zB
```

#### 1186. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15078-L15083` → after: `L15078-L15083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15078-L15083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15078-L15083) · [Before (L15078-L15083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15078-L15083)

```diff
-                 var HT;
-                 const TT = WT.averageSessionMinutes,
-                   UT = Lb(WT.dailySeries.sessionMinutes),
-                   mT = pb(WT.dailyPlays, UT);
-                 if (null === TT || null === mT) return null;
-                 const zT = TT => Math.round(10 * TT) / 10;
+                 var uB;
+                 const BB = QB.averageSessionMinutes,
+                   jB = st(QB.dailySeries.sessionMinutes),
+                   zB = Jt(QB.dailyPlays, jB);
+                 if (null === BB || null === zB) return null;
+                 const nB = BB => Math.round(10 * BB) / 10;
```

#### 1187. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15088-L15091` → after: `L15088-L15091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15088-L15091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15088-L15091) · [Before (L15088-L15091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15088-L15091)

```diff
-                   now: zT(TT.now),
-                   helped: zT(Math.max(Wb(TT.now, TT.typical, .1), TT.now + (null !== (HT = null === UT || void 0 === UT ? void 0 : UT.averageMargin) && void 0 !== HT ? HT : 0))),
-                   wait: "days" === mT.kind && null !== mT.swing ? {
-                     ...mT,
+                   now: nB(BB.now),
+                   helped: nB(Math.max(Qt(BB.now, BB.typical, .1), BB.now + (null !== (uB = null === jB || void 0 === jB ? void 0 : jB.averageMargin) && void 0 !== uB ? uB : 0))),
+                   wait: "days" === zB.kind && null !== zB.swing ? {
+                     ...zB,
```

#### 1188. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15093-L15094` → after: `L15093-L15094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15093-L15094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15093-L15094) · [Before (L15093-L15094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15093-L15094)

```diff
-                       low: zT(mT.swing.low),
-                       high: zT(mT.swing.high)
+                       low: nB(zB.swing.low),
+                       high: nB(zB.swing.high)
```

#### 1189. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15096` → after: `L15096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15096) · [Before (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15096)

```diff
-                   } : mT
+                   } : zB
```

#### 1190. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15100-L15103` → after: `L15100-L15103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15100-L15103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15100-L15103) · [Before (L15100-L15103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15100-L15103)

```diff
-                 const TT = WT.sessionsPerPlayer,
-                   UT = null === TT ? null : lb(TT.days, WT.dailyPlays);
-                 if (null === TT || null === UT) return null;
-                 const mT = TT => Math.round(100 * TT) / 100;
+                 const BB = QB.sessionsPerPlayer,
+                   jB = null === BB ? null : rt(BB.days, QB.dailyPlays);
+                 if (null === BB || null === jB) return null;
+                 const zB = BB => Math.round(100 * BB) / 100;
```

#### 1191. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15107` → after: `L15107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15107) · [Before (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15107)

```diff
-                     days: TT.days
+                     days: BB.days
```

#### 1192. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15109-L15111` → after: `L15109-L15111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15109-L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15109-L15111) · [Before (L15109-L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15109-L15111)

```diff
-                   now: mT(TT.now),
-                   helped: mT(TT.now + Math.max(.05, null === TT.typical ? 0 : (TT.typical - TT.now) * Vi)),
-                   wait: UT
+                   now: zB(BB.now),
+                   helped: zB(BB.now + Math.max(.05, null === BB.typical ? 0 : (BB.typical - BB.now) * Pg)),
+                   wait: jB
```

#### 1193. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15117-L15121` → after: `L15117-L15121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15117-L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15117-L15121) · [Before (L15117-L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15117-L15121)

```diff
-           }(nT, TT, [null !== (zT = TT.title) && void 0 !== zT ? zT : "", ...oi(TT), null !== (MT = TT.target) && void 0 !== MT ? MT : ""].join("\n"), UT);
-           if (null === HT) return null;
-           const kT = vb(TT, mT, nT, HT.now);
-           let jT = null === kT ? HT.helped : Math.min(HT.helped, kT);
-           if (null !== kT && kT - jT < (jT - HT.now) / 2 && (jT = kT), jT <= HT.now) return null;
+           }(NB, BB, [null !== (nB = BB.title) && void 0 !== nB ? nB : "", ...vg(BB), null !== (dB = BB.target) && void 0 !== dB ? dB : ""].join("\n"), jB);
+           if (null === uB) return null;
+           const UB = Gt(BB, zB, NB, uB.now);
+           let aB = null === UB ? uB.helped : Math.min(uB.helped, UB);
+           if (null !== UB && UB - aB < (aB - uB.now) / 2 && (aB = UB), aB <= uB.now) return null;
```

#### 1194. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15123-L15127` → after: `L15123-L15127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15123-L15127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15123-L15127) · [Before (L15123-L15127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15123-L15127)

```diff
-             measure: lT
-           } = HT, LT = "players" === HT.wait.kind && "progressStep" === lT.kind ? {
-             ...HT.wait,
-             helpedPlayers: qb(lT.toPlayers, jT, HT.wait.more)
-           } : HT.wait;
+             measure: pB
+           } = uB, rB = "players" === uB.wait.kind && "progressStep" === pB.kind ? {
+             ...uB.wait,
+             helpedPlayers: gt(pB.toPlayers, aB, uB.wait.more)
+           } : uB.wait;
```

#### 1195. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15129-L15135` → after: `L15129-L15135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15129-L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15129-L15135) · [Before (L15129-L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15129-L15135)

```diff
-             statKey: nT,
-             ...HT,
-             selection: null !== (gT = HT.selection) && void 0 !== gT ? gT : null,
-             helped: jT,
-             goal: kT,
-             wait: LT,
-             undo: Bb(TT.code, WT)
+             statKey: NB,
+             ...uB,
+             selection: null !== (IB = uB.selection) && void 0 !== IB ? IB : null,
+             helped: aB,
+             goal: UB,
+             wait: rB,
+             undo: mt(BB.code, QB)
```

#### 1196. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15139-L15140` → after: `L15139-L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15139-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15139-L15140) · [Before (L15139-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15139-L15140)

```diff
-         function qb(TT, UT, mT) {
-           return Math.round(TT + UT / 100 * mT)
+         function gt(BB, jB, zB) {
+           return Math.round(BB + jB / 100 * zB)
```

#### 1197. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15143-L15149` → after: `L15143-L15149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15143-L15149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15143-L15149) · [Before (L15143-L15149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15143-L15149)

```diff
-         function ib(TT, UT) {
-           return function(TT) {
-             if (0 === TT.length) return null;
-             const UT = [...TT].sort(((TT, UT) => TT - UT)),
-               mT = Math.floor(UT.length / 2);
-             return UT.length % 2 === 1 ? UT[mT] : (UT[mT - 1] + UT[mT]) / 2
-           }(TT.filter((TT => TT !== UT && TT.group === UT.group && !TT.isBranch && TT.fromPlayers >= Fi)).map((TT => TT.share)))
+         function tt(BB, jB) {
+           return function(BB) {
+             if (0 === BB.length) return null;
+             const jB = [...BB].sort(((BB, jB) => BB - jB)),
+               zB = Math.floor(jB.length / 2);
+             return jB.length % 2 === 1 ? jB[zB] : (jB[zB - 1] + jB[zB]) / 2
+           }(BB.filter((BB => BB !== jB && BB.group === jB.group && !BB.isBranch && BB.fromPlayers >= Ag)).map((BB => BB.share)))
```

#### 1198. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15152-L15153` → after: `L15152-L15153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15152-L15153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15152-L15153) · [Before (L15152-L15153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15152-L15153)

```diff
-         function bb(TT) {
-           return TT.toLocaleString("en-US", {
+         function St(BB) {
+           return BB.toLocaleString("en-US", {
```

#### 1199. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15158-L15159` → after: `L15158-L15159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15158-L15159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15158-L15159) · [Before (L15158-L15159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15158-L15159)

```diff
-         function Ob(TT, UT) {
-           return 1 === TT ? UT("last 1 minute or more") : `${UT("last")} ${TT} ${UT("minutes or more")}`
+         function Mt(BB, jB) {
+           return 1 === BB ? jB("last 1 minute or more") : `${jB("last")} ${BB} ${jB("minutes or more")}`
```

#### 1200. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15162` → after: `L15162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15162) · [Before (L15162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15162)

```diff
-         function eb(TT) {
+         function Et(BB) {
```

#### 1201. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15164-L15165` → after: `L15164-L15165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15164-L15165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15164-L15165) · [Before (L15164-L15165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15164-L15165)

```diff
-             stat: TT.statKey,
-             selection: TT.selection
+             stat: BB.statKey,
+             selection: BB.selection
```

#### 1202. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15169` → after: `L15169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15169) · [Before (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15169)

```diff
-         function Yb(TT, UT) {
+         function it(BB, jB) {
```

#### 1203. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15171-L15176` → after: `L15171-L15176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15171-L15176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15171-L15176) · [Before (L15171-L15176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15171-L15176)

```diff
-             measure: mT,
-             now: WT,
-             wait: zT
-           } = TT, MT = "players" === zT.kind || 7 === zT.days ? UT("in a week") : `${UT("in")} ${zT.days} ${UT("days")}`;
-           let gT;
-           switch (mT.kind) {
+             measure: zB,
+             now: QB,
+             wait: nB
+           } = BB, dB = "players" === nB.kind || 7 === nB.days ? jB("in a week") : `${jB("in")} ${nB.days} ${jB("days")}`;
+           let IB;
+           switch (zB.kind) {
```

#### 1204. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15178` → after: `L15178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15178) · [Before (L15178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15178)

```diff
-               gT = [`${UT("if more than")} ${WT} ${UT("in 100")} ${UT("sessions")} ${Ob(mT.minutes,UT)}`];
+               IB = [`${jB("if more than")} ${QB} ${jB("in 100")} ${jB("sessions")} ${Mt(zB.minutes,jB)}`];
```

#### 1205. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15181-L15185` → after: `L15181-L15185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15181-L15185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15181-L15185) · [Before (L15181-L15185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15181-L15185)

```diff
-               gT = [`${UT("if more players at")} `, {
-                 code: mT.from
-               }, ` ${UT("reach")} `, {
-                 code: mT.to
-               }, mT.isOrLater ? ` ${UT("or a later one")}` : "", ` ${UT("than now")} (${WT} ${UT("in 100")})`];
+               IB = [`${jB("if more players at")} `, {
+                 code: zB.from
+               }, ` ${jB("reach")} `, {
+                 code: zB.to
+               }, zB.isOrLater ? ` ${jB("or a later one")}` : "", ` ${jB("than now")} (${QB} ${jB("in 100")})`];
```

#### 1206. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15188` → after: `L15188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15188) · [Before (L15188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15188)

```diff
-               gT = [`${UT("if more players at")} ${mT.from} ${UT("reach")} ${mT.to} ${UT("than now")} (${WT} ${UT("in 100")})`];
+               IB = [`${jB("if more players at")} ${zB.from} ${jB("reach")} ${zB.to} ${jB("than now")} (${QB} ${jB("in 100")})`];
```

#### 1207. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15191` → after: `L15191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15191) · [Before (L15191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15191)

```diff
-               gT = [UT("if most days have more plays than now")];
+               IB = [jB("if most days have more plays than now")];
```

#### 1208. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15194` → after: `L15194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15194) · [Before (L15194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15194)

```diff
-               gT = [`${UT("if sessions last longer than now")} (${bb(WT)} ${UT("minutes")})`];
+               IB = [`${jB("if sessions last longer than now")} (${St(QB)} ${jB("minutes")})`];
```

#### 1209. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15197` → after: `L15197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15197) · [Before (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15197)

```diff
-               gT = [UT("if players come back more often than now")]
+               IB = [jB("if players come back more often than now")]
```

#### 1210. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15199` → after: `L15199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15199) · [Before (L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15199)

```diff
-           return [`${UT("Check")} `, eb(TT), ` ${MT}: `, ...gT, `, ${UT("it helped")}.`]
+           return [`${jB("Check")} `, Et(BB), ` ${dB}: `, ...IB, `, ${jB("it helped")}.`]
```

#### 1211. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15201` → after: `L15201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15201) · [Before (L15201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15201)

```diff
-         const Jb = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, xb = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, db = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
+         const qt = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, ft = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, ot = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
```

#### 1212. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15203-L15204` → after: `L15203-L15204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15203-L15204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15203-L15204) · [Before (L15203-L15204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15203-L15204)

```diff
-         function wb(TT) {
-           return Jb.test(TT) || xb.test(TT) && !db.test(TT)
+         function Ht(BB) {
+           return qt.test(BB) || ft.test(BB) && !ot.test(BB)
```

#### 1213. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15207-L15218` → after: `L15207-L15218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15207-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15207-L15218) · [Before (L15207-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15207-L15218)

```diff
-         function tb(TT) {
-           let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           const mT = TT.steps.filter((TT => wb(TT.text))),
-             WT = new Set(UT ? mT.slice(1) : mT);
-           if (0 === WT.size) return TT;
-           const zT = TT => !WT.has(TT),
-             MT = TT.blocks.flatMap((TT => {
-               if ("list" !== TT.kind) return [TT];
-               const UT = TT.items.filter(zT);
-               return 0 === UT.length ? [] : [{
-                 ...TT,
-                 items: UT
+         function Dt(BB) {
+           let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           const zB = BB.steps.filter((BB => Ht(BB.text))),
+             QB = new Set(jB ? zB.slice(1) : zB);
+           if (0 === QB.size) return BB;
+           const nB = BB => !QB.has(BB),
+             dB = BB.blocks.flatMap((BB => {
+               if ("list" !== BB.kind) return [BB];
+               const jB = BB.items.filter(nB);
+               return 0 === jB.length ? [] : [{
+                 ...BB,
+                 items: jB
```

#### 1214. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15222-L15224` → after: `L15222-L15224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15222-L15224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15222-L15224) · [Before (L15222-L15224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15222-L15224)

```diff
-             ...TT,
-             blocks: MT,
-             steps: TT.steps.filter(zT)
+             ...BB,
+             blocks: dB,
+             steps: BB.steps.filter(nB)
```

#### 1215. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15227` → after: `L15227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15227) · [Before (L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15227)

```diff
-         const ab = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, yb = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, Xb = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, Ib = new Set(["Math", "Date", "JSON", "cons … [truncated]
+         const Ft = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, Yt = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, Vt = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, ht = new Set(["Math", "Date", "JSON", "cons … [truncated]
```

#### 1216. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15229-L15232` → after: `L15229-L15232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15229-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15229-L15232) · [Before (L15229-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15229-L15232)

```diff
-         function sb(TT, UT) {
-           for (const [mT] of(null !== UT && void 0 !== UT ? UT : "").matchAll(ab)) {
-             TT.add(mT);
-             for (const UT of mT.split(".")) TT.add(UT)
+         function Zt(BB, jB) {
+           for (const [zB] of(null !== jB && void 0 !== jB ? jB : "").matchAll(Ft)) {
+             BB.add(zB);
+             for (const jB of zB.split(".")) BB.add(jB)
```

#### 1217. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15236-L15242` → after: `L15236-L15242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15236-L15242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15236-L15242) · [Before (L15236-L15242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15236-L15242)

```diff
-         function Fb(TT) {
-           if (null === TT.worldCode || void 0 === TT.worldCode) return null;
-           const UT = [];
-           for (const zT of [null === (mT = TT.customEvents) || void 0 === mT ? void 0 : mT.byEvent, null === (WT = TT.playerTotals) || void 0 === WT ? void 0 : WT.playerTotals]) {
-             var mT, WT;
-             tH(null !== zT && void 0 !== zT ? zT : {}, ((TT, mT, WT) => {
-               UT.push(mT, ...Object.keys(WT))
+         function At(BB) {
+           if (null === BB.worldCode || void 0 === BB.worldCode) return null;
+           const jB = [];
+           for (const nB of [null === (zB = BB.customEvents) || void 0 === zB ? void 0 : zB.byEvent, null === (QB = BB.playerTotals) || void 0 === QB ? void 0 : QB.playerTotals]) {
+             var zB, QB;
+             Du(null !== nB && void 0 !== nB ? nB : {}, ((BB, zB, QB) => {
+               jB.push(zB, ...Object.keys(QB))
```

#### 1218. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15245-L15255` → after: `L15245-L15255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15245-L15255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15245-L15255) · [Before (L15245-L15255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15245-L15255)

```diff
-           return function(TT) {
-             let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-             const mT = new Set(yj.keys());
-             for (const MT of [...Kk, ...Qb]) mT.add(`api.${MT}`);
-             for (const MT of TT.constants)
-               for (const TT of [MT.name, MT.value, MT.where, MT.usedIn]) sb(mT, TT);
-             for (const MT of TT.callbacks) {
-               sb(mT, MT.name);
-               for (const TT of null !== (WT = MT.params) && void 0 !== WT ? WT : []) {
-                 var WT;
-                 sb(mT, TT)
+           return function(BB) {
+             let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+             const zB = new Set(Fa.keys());
+             for (const dB of [...wU, ...Xt]) zB.add(`api.${dB}`);
+             for (const dB of BB.constants)
+               for (const BB of [dB.name, dB.value, dB.where, dB.usedIn]) Zt(zB, BB);
+             for (const dB of BB.callbacks) {
+               Zt(zB, dB.name);
+               for (const BB of null !== (QB = dB.params) && void 0 !== QB ? QB : []) {
+                 var QB;
+                 Zt(zB, BB)
```

#### 1219. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15258-L15261` → after: `L15258-L15261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15258-L15261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15258-L15261) · [Before (L15258-L15261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15258-L15261)

```diff
-             for (const MT of TT.analyticsHelpers) sb(mT, MT);
-             for (const MT of null !== (zT = TT.messages) && void 0 !== zT ? zT : []) {
-               var zT;
-               sb(mT, MT.where), sb(mT, MT.line)
+             for (const dB of BB.analyticsHelpers) Zt(zB, dB);
+             for (const dB of null !== (nB = BB.messages) && void 0 !== nB ? nB : []) {
+               var nB;
+               Zt(zB, dB.where), Zt(zB, dB.line)
```

#### 1220. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15263-L15267` → after: `L15263-L15267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15263-L15267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15263-L15267) · [Before (L15263-L15267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15263-L15267)

```diff
-             for (const MT of TT.events)
-               for (const TT of [MT.eventType, MT.valueExpression, MT.numberExpression, MT.where, MT.guard, ...MT.values]) sb(mT, TT);
-             for (const MT of UT) sb(mT, MT);
-             return mT
-           }(TT.worldCode, UT)
+             for (const dB of BB.events)
+               for (const BB of [dB.eventType, dB.valueExpression, dB.numberExpression, dB.where, dB.guard, ...dB.values]) Zt(zB, BB);
+             for (const dB of jB) Zt(zB, dB);
+             return zB
+           }(BB.worldCode, jB)
```

#### 1221. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15270-L15272` → after: `L15270-L15272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15270-L15272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15270-L15272) · [Before (L15270-L15272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15270-L15272)

```diff
-         function Pb(TT, UT, mT, WT) {
-           const zT = TT.split(".");
-           return "api" === zT[0] && zT.length > 1 ? null !== WT ? WT.has(zT[1]) : "pasteCode" !== mT || UT.has(`api.${zT[1]}`) : !(!Ib.has(zT[0]) && !UT.has(TT)) || zT.length > 1 && zT.every((TT => UT.has(TT)))
+         function Tt(BB, jB, zB, QB) {
+           const nB = BB.split(".");
+           return "api" === nB[0] && nB.length > 1 ? null !== QB ? QB.has(nB[1]) : "pasteCode" !== zB || jB.has(`api.${nB[1]}`) : !(!ht.has(nB[0]) && !jB.has(BB)) || nB.length > 1 && nB.every((BB => jB.has(BB)))
```

#### 1222. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15275-L15276` → after: `L15275-L15276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15275-L15276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15275-L15276) · [Before (L15275-L15276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15275-L15276)

```diff
-         function Vb(TT) {
-           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(TT)
+         function Pt(BB) {
+           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(BB)
```

#### 1223. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15279-L15281` → after: `L15279-L15281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15279-L15281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15279-L15281) · [Before (L15279-L15281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15279-L15281)

```diff
-         function ub(TT, UT) {
-           return UT.startsWith("api.") ? {
-             text: TT,
+         function Wt(BB, jB) {
+           return jB.startsWith("api.") ? {
+             text: BB,
```

#### 1224. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15285` → after: `L15285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15285) · [Before (L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15285)

```diff
-             text: TT,
+             text: BB,
```

#### 1225. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15289` → after: `L15289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15289) · [Before (L15289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15289)

```diff
-         const Cb = Nl, rb = 10, Kb = 3, Sb = 8, Gb = /tutorial|onboarding/i, Nb = /event|flow|heatmap|order players/i, Eb = .15, hb = .1, Db = 3, ob = .25, Ab = .1, Rb = 2, TO = 3, UO = .7, mO = 5;
+         const et = Cp, lt = 10, wt = 3, xt = 8, Kt = /tutorial|onboarding/i, Ct = /event|flow|heatmap|order players/i, ct = .15, bt = .1, vt = 3, Rt = .25, Ot = .1, BS = 2, jS = 3, zS = .7, QS = 5;
```

#### 1226. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15291-L15292` → after: `L15291-L15292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15291-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15291-L15292) · [Before (L15291-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15291-L15292)

```diff
-         function WO(TT, UT) {
-           return "" === UT ? TT : /^-?\d+$/.test(UT) ? `${TT} ${UT}` : /\d/.test(UT) ? UT : `${TT}: ${UT}`
+         function nS(BB, jB) {
+           return "" === jB ? BB : /^-?\d+$/.test(jB) ? `${BB} ${jB}` : /\d/.test(jB) ? jB : `${BB}: ${jB}`
```

#### 1227. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15295-L15298` → after: `L15295-L15298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15295-L15298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15295-L15298) · [Before (L15295-L15298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15295-L15298)

```diff
-         function zO(TT) {
-           const UT = dH(TT),
-             mT = UT.lastIndexOf(": ");
-           return -1 === mT ? UT : WO(UT.slice(0, mT), UT.slice(mT + 2))
+         function dS(BB) {
+           const jB = ou(BB),
+             zB = jB.lastIndexOf(": ");
+           return -1 === zB ? jB : nS(jB.slice(0, zB), jB.slice(zB + 2))
```

#### 1228. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15301-L15310` → after: `L15301-L15310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15301-L15310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15301-L15310) · [Before (L15301-L15310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15301-L15310)

```diff
-         function MO(TT, UT, mT) {
-           var WT, zT;
-           const MT = JZ(UT.flow, UT.progressions, null, null, mT),
-             gT = null !== (WT = null === (zT = TT.stats) || void 0 === zT ? void 0 : zT.rankingWindow.uniquePlayers) && void 0 !== WT ? WT : 0;
-           if ("flowStep" === (null === MT || void 0 === MT ? void 0 : MT.kind)) {
-             const TT = UT.flow,
-               mT = Math.max(0, ...TT.steps.map((TT => TT.fromPlayers))),
-               WT = TT.steps.filter((TT => {
-                 var UT, WT;
-                 return TT.isChain && TT.fromPlayers >= (null !== (UT = null === (WT = TT.start) || void 0 === WT ? void 0 : WT.players) && void 0 !== UT ? UT : mT) * hb
+         function IS(BB, jB, zB) {
+           var QB, nB;
+           const dB = fm(jB.flow, jB.progressions, null, null, zB),
+             IB = null !== (QB = null === (nB = BB.stats) || void 0 === nB ? void 0 : nB.rankingWindow.uniquePlayers) && void 0 !== QB ? QB : 0;
+           if ("flowStep" === (null === dB || void 0 === dB ? void 0 : dB.kind)) {
+             const BB = jB.flow,
+               zB = Math.max(0, ...BB.steps.map((BB => BB.fromPlayers))),
+               QB = BB.steps.filter((BB => {
+                 var jB, QB;
+                 return BB.isChain && BB.fromPlayers >= (null !== (jB = null === (QB = BB.start) || void 0 === QB ? void 0 : QB.players) && void 0 !== jB ? jB : zB) * bt
```

#### 1229. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15312` → after: `L15312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15312) · [Before (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15312)

```diff
-               zT = (TT, UT) => {
+               nB = (BB, jB) => {
```

#### 1230. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15314-L15318` → after: `L15314-L15318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15314-L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15314-L15318) · [Before (L15314-L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15314-L15318)

```diff
-                   from: zO(TT.from),
-                   to: zO(TT.to),
-                   isOrLater: TT.isOrLater,
-                   fromPlayers: TT.fromPlayers,
-                   lost: TT.lost,
+                   from: dS(BB.from),
+                   to: dS(BB.to),
+                   isOrLater: BB.isOrLater,
+                   fromPlayers: BB.fromPlayers,
+                   lost: BB.lost,
```

#### 1231. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15322-L15324` → after: `L15322-L15324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15322-L15324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15322-L15324) · [Before (L15322-L15324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15322-L15324)

```diff
-                   share: TT.share,
-                   players: (mT = TT.fromPlayers, gT > 0 ? Math.min(mT, gT) : mT),
-                   later: UT
+                   share: BB.share,
+                   players: (zB = BB.fromPlayers, IB > 0 ? Math.min(zB, IB) : zB),
+                   later: jB
```

#### 1232. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15326` → after: `L15326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15326) · [Before (L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15326)

```diff
-                 var mT
+                 var zB
```

#### 1233. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15328-L15335` → after: `L15328-L15335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15328-L15335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15328-L15335) · [Before (L15328-L15335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15328-L15335)

```diff
-               nT = [MT.step, MT.mostLost, TT.lowestShare].filter((TT => null !== TT && WT.includes(TT)));
-             return [...new Set(nT)].map((UT => {
-               const mT = function(TT, UT) {
-                   const mT = new Set([UT]),
-                     WT = [UT];
-                   for (; WT.length > 0;) {
-                     const UT = WT.shift();
-                     for (const zT of TT) zT.from !== UT || mT.has(zT.to) || (mT.add(zT.to), WT.push(zT.to))
+               NB = [dB.step, dB.mostLost, BB.lowestShare].filter((BB => null !== BB && QB.includes(BB)));
+             return [...new Set(NB)].map((jB => {
+               const zB = function(BB, jB) {
+                   const zB = new Set([jB]),
+                     QB = [jB];
+                   for (; QB.length > 0;) {
+                     const jB = QB.shift();
+                     for (const nB of BB) nB.from !== jB || zB.has(nB.to) || (zB.add(nB.to), QB.push(nB.to))
```

#### 1234. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15337-L15340` → after: `L15337-L15340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15337-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15337-L15340) · [Before (L15337-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15337-L15340)

```diff
-                   return mT
-                 }(TT.steps, UT.to),
-                 MT = WT.filter((TT => TT !== UT && mT.has(TT.from)));
-               return zT(UT, MT.map((TT => zT(TT, []))))
+                   return zB
+                 }(BB.steps, jB.to),
+                 dB = QB.filter((BB => BB !== jB && zB.has(BB.from)));
+               return nB(jB, dB.map((BB => nB(BB, []))))
```

#### 1235. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15343` → after: `L15343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15343) · [Before (L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15343)

```diff
-           if ("progressStep" === (null === MT || void 0 === MT ? void 0 : MT.kind)) {
+           if ("progressStep" === (null === dB || void 0 === dB ? void 0 : dB.kind)) {
```

#### 1236. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15345-L15351` → after: `L15345-L15351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15345-L15351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15345-L15351) · [Before (L15345-L15351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15345-L15351)

```diff
-               progression: TT
-             } = MT, UT = TT.values[0].players, mT = TT.steps.filter((TT => TT.from.players >= UT * hb)), WT = (mT, WT) => ({
-               from: WO(TT.eventType, mT.from.value),
-               to: WO(TT.eventType, mT.to.value),
-               isOrLater: mT.reached > mT.to.players,
-               fromPlayers: mT.from.players,
-               lost: mT.lost,
+               progression: BB
+             } = dB, jB = BB.values[0].players, zB = BB.steps.filter((BB => BB.from.players >= jB * bt)), QB = (zB, QB) => ({
+               from: nS(BB.eventType, zB.from.value),
+               to: nS(BB.eventType, zB.to.value),
+               isOrLater: zB.reached > zB.to.players,
+               fromPlayers: zB.from.players,
+               lost: zB.lost,
```

#### 1237. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15355-L15356` → after: `L15355-L15356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15355-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15355-L15356) · [Before (L15355-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15355-L15356)

```diff
-                 gameCategory: TT.gameCategory,
-                 eventType: TT.eventType,
+                 gameCategory: BB.gameCategory,
+                 eventType: BB.eventType,
```

#### 1238. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15359-L15363` → after: `L15359-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15359-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15359-L15363) · [Before (L15359-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15359-L15363)

```diff
-               share: mT.share,
-               players: mT.from.players * Math.min(1, UT > 0 && gT > 0 ? gT / UT : 1),
-               later: WT
-             }), zT = [MT.step, MT.mostLost, TT.lowestShare].filter((TT => null !== TT && mT.includes(TT)));
-             return [...new Set(zT)].map((TT => WT(TT, mT.slice(mT.indexOf(TT) + 1).map((TT => WT(TT, []))))))
+               share: zB.share,
+               players: zB.from.players * Math.min(1, jB > 0 && IB > 0 ? IB / jB : 1),
+               later: QB
+             }), nB = [dB.step, dB.mostLost, BB.lowestShare].filter((BB => null !== BB && zB.includes(BB)));
+             return [...new Set(nB)].map((BB => QB(BB, zB.slice(zB.indexOf(BB) + 1).map((BB => QB(BB, []))))))
```

#### 1239. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15368-L15385` → after: `L15368-L15385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15368-L15385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15368-L15385) · [Before (L15368-L15385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15368-L15385)

```diff
-         function gO(TT, UT) {
-           const mT = dH(TT);
-           return mT.startsWith(`${UT}: `) ? mT.slice(UT.length + 2) : null
-         }
- 
-         function nO(TT, UT) {
-           var mT, WT;
-           const zT = function(TT) {
-             var UT, mT, WT, zT;
-             const MT = null !== (UT = null === (mT = TT.playerTotals) || void 0 === mT ? void 0 : mT.playerTotals) && void 0 !== UT ? UT : {},
-               gT = null !== (WT = null === (zT = TT.flow) || void 0 === zT ? void 0 : zT.edges) && void 0 !== WT ? WT : [];
-             let nT = null;
-             return tH(MT, ((UT, mT, WT) => {
-               var zT;
-               const MT = null === (zT = TT.worldCode) || void 0 === zT ? void 0 : zT.events.find((TT => TT.isLiteralType && TT.eventType === mT));
-               if (!Gb.test(mT) || void 0 === MT || null !== MT.valueExpression) return;
- ... (2 more removed lines; see GitHub link above)
+         function NS(BB, jB) {
+           const zB = ou(BB);
+           return zB.startsWith(`${jB}: `) ? zB.slice(jB.length + 2) : null
+         }
+ 
+         function uS(BB, jB) {
+           var zB, QB;
+           const nB = function(BB) {
+             var jB, zB, QB, nB;
+             const dB = null !== (jB = null === (zB = BB.playerTotals) || void 0 === zB ? void 0 : zB.playerTotals) && void 0 !== jB ? jB : {},
+               IB = null !== (QB = null === (nB = BB.flow) || void 0 === nB ? void 0 : nB.edges) && void 0 !== QB ? QB : [];
+             let NB = null;
+             return Du(dB, ((jB, zB, QB) => {
+               var nB;
+               const dB = null === (nB = BB.worldCode) || void 0 === nB ? void 0 : nB.events.find((BB => BB.isLiteralType && BB.eventType === zB));
+               if (!Kt.test(zB) || void 0 === dB || null !== dB.valueExpression) return;
+ ... (2 more added lines; see GitHub link above)
```

#### 1240. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15387-L15388` → after: `L15387-L15388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15387-L15388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15387-L15388) · [Before (L15387-L15388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15387-L15388)

```diff
-                     value: UT,
-                     players: mT
+                     value: jB,
+                     players: zB
```

#### 1241. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15390-L15391` → after: `L15390-L15391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15390-L15391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15390-L15391) · [Before (L15390-L15391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15390-L15391)

```diff
-                 })).sort(((TT, UT) => UT.players - TT.players)),
-                 kT = new Map(HT.map(((TT, UT) => {
+                 })).sort(((BB, jB) => jB.players - BB.players)),
+                 UB = new Map(uB.map(((BB, jB) => {
```

#### 1242. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15393-L15395` → after: `L15393-L15395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15393-L15395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15393-L15395) · [Before (L15393-L15395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15393-L15395)

```diff
-                     value: mT
-                   } = TT;
-                   return [mT, UT]
+                     value: zB
+                   } = BB;
+                   return [zB, jB]
```

#### 1243. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15397` → after: `L15397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15397) · [Before (L15397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15397)

```diff
-                 jT = HT.every((TT => {
+                 aB = uB.every((BB => {
```

#### 1244. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15399-L15401` → after: `L15399-L15401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15399-L15401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15399-L15401) · [Before (L15399-L15401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15399-L15401)

```diff
-                     value: UT
-                   } = TT;
-                   return MT.values.includes(UT)
+                     value: jB
+                   } = BB;
+                   return dB.values.includes(jB)
```

#### 1245. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15403` → after: `L15403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15403) · [Before (L15403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15403)

```diff
-                 lT = HT.slice(1).every(((TT, UT) => {
+                 pB = uB.slice(1).every(((BB, jB) => {
```

#### 1246. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15405-L15407` → after: `L15405-L15407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15405-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15405-L15407) · [Before (L15405-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15405-L15407)

```diff
-                     players: mT
-                   } = TT;
-                   return mT < HT[UT].players
+                     players: zB
+                   } = BB;
+                   return zB < uB[jB].players
```

#### 1247. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15409-L15413` → after: `L15409-L15413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15409-L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15409-L15413) · [Before (L15409-L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15409-L15413)

```diff
-                 LT = gT.some((TT => {
-                   var UT, WT;
-                   const zT = kT.get(null !== (UT = gO(TT.from, mT)) && void 0 !== UT ? UT : ""),
-                     MT = kT.get(null !== (WT = gO(TT.to, mT)) && void 0 !== WT ? WT : "");
-                   return void 0 !== zT && void 0 !== MT && zT > MT
+                 rB = IB.some((BB => {
+                   var jB, QB;
+                   const nB = UB.get(null !== (jB = NS(BB.from, zB)) && void 0 !== jB ? jB : ""),
+                     dB = UB.get(null !== (QB = NS(BB.to, zB)) && void 0 !== QB ? QB : "");
+                   return void 0 !== nB && void 0 !== dB && nB > dB
```

#### 1248. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15415-L15419` → after: `L15415-L15419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15415-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15415-L15419) · [Before (L15415-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15415-L15419)

```diff
-                 pT = null === nT || HT[0].players > nT.values[0].players;
-               HT.length >= Kb && jT && lT && !LT && pT && (nT = {
-                 gameCategory: UT,
-                 eventType: mT,
-                 values: HT
+                 sB = null === NB || uB[0].players > NB.values[0].players;
+               uB.length >= wt && aB && pB && !rB && sB && (NB = {
+                 gameCategory: jB,
+                 eventType: zB,
+                 values: uB
```

#### 1249. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15421-L15424` → after: `L15421-L15424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15421-L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15421-L15424) · [Before (L15421-L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15421-L15424)

```diff
-             })), nT
-           }(TT);
-           if (null === zT) return [];
-           const MT = null !== (mT = null === (WT = TT.stats) || void 0 === WT ? void 0 : WT.rankingWindow.uniquePlayers) && void 0 !== mT ? mT : 0,
+             })), NB
+           }(BB);
+           if (null === nB) return [];
+           const dB = null !== (zB = null === (QB = BB.stats) || void 0 === QB ? void 0 : QB.rankingWindow.uniquePlayers) && void 0 !== zB ? zB : 0,
```

#### 1250. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15426-L15432` → after: `L15426-L15432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15426-L15432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15426-L15432) · [Before (L15426-L15432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15426-L15432)

```diff
-               values: gT,
-               eventType: nT
-             } = zT,
-             HT = gT[0].players,
-             kT = {
-               gameCategory: zT.gameCategory,
-               eventType: nT,
+               values: IB,
+               eventType: NB
+             } = nB,
+             uB = IB[0].players,
+             UB = {
+               gameCategory: nB.gameCategory,
+               eventType: NB,
```

#### 1251. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15435-L15440` → after: `L15435-L15440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15435-L15440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15435-L15440) · [Before (L15435-L15440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15435-L15440)

```diff
-             jT = gT.slice(1).flatMap(((TT, mT) => {
-               const WT = gT[mT];
-               return WT.players >= UT && WT.players >= HT * hb ? [{
-                 from: WT,
-                 to: TT,
-                 lost: WT.players - TT.players
+             aB = IB.slice(1).flatMap(((BB, zB) => {
+               const QB = IB[zB];
+               return QB.players >= jB && QB.players >= uB * bt ? [{
+                 from: QB,
+                 to: BB,
+                 lost: QB.players - BB.players
```

#### 1252. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15443-L15445` → after: `L15443-L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15443-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15443-L15445) · [Before (L15443-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15443-L15445)

```diff
-             lT = (TT, UT) => ({
-               from: TT.from.value,
-               to: TT.to.value,
+             pB = (BB, jB) => ({
+               from: BB.from.value,
+               to: BB.to.value,
```

#### 1253. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15447-L15448` → after: `L15447-L15448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15447-L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15447-L15448) · [Before (L15447-L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15447-L15448)

```diff
-               fromPlayers: TT.from.players,
-               lost: TT.lost,
+               fromPlayers: BB.from.players,
+               lost: BB.lost,
```

#### 1254. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15451-L15455` → after: `L15451-L15455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15451-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15451-L15455) · [Before (L15451-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15451-L15455)

```diff
-               selection: kT,
-               group: nT,
-               share: TT.to.players / TT.from.players,
-               players: TT.from.players * Math.min(1, HT > 0 && MT > 0 ? MT / HT : 1),
-               later: UT
+               selection: UB,
+               group: NB,
+               share: BB.to.players / BB.from.players,
+               players: BB.from.players * Math.min(1, uB > 0 && dB > 0 ? dB / uB : 1),
+               later: jB
```

#### 1255. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15457-L15462` → after: `L15457-L15462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15457-L15462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15457-L15462) · [Before (L15457-L15462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15457-L15462)

```diff
-             LT = [...jT].sort(((TT, UT) => UT.lost - TT.lost))[0],
-             pT = [...jT].sort(((TT, UT) => TT.to.players / TT.from.players - UT.to.players / UT.from.players))[0];
-           return [...new Set([LT, pT])].flatMap((TT => {
-             if (void 0 === TT) return [];
-             const UT = jT.slice(jT.indexOf(TT) + 1).map((TT => lT(TT, [])));
-             return [lT(TT, UT)]
+             rB = [...aB].sort(((BB, jB) => jB.lost - BB.lost))[0],
+             sB = [...aB].sort(((BB, jB) => BB.to.players / BB.from.players - jB.to.players / jB.from.players))[0];
+           return [...new Set([rB, sB])].flatMap((BB => {
+             if (void 0 === BB) return [];
+             const jB = aB.slice(aB.indexOf(BB) + 1).map((BB => pB(BB, [])));
+             return [pB(BB, jB)]
```

#### 1256. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15466` → after: `L15466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15466) · [Before (L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15466)

```diff
-         function HO(TT, UT) {
+         function US(BB, jB) {
```

#### 1257. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15468-L15474` → after: `L15468-L15474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15468-L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15468-L15474) · [Before (L15468-L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15468-L15474)

```diff
-             share: mT,
-             players: WT,
-             later: zT,
-             ...MT
-           } = TT, gT = 1 - mT - Eb;
-           return gT > 0 && WT >= UT && MT.fromPlayers >= UT ? {
-             ...MT,
+             share: zB,
+             players: QB,
+             later: nB,
+             ...dB
+           } = BB, IB = 1 - zB - ct;
+           return IB > 0 && QB >= jB && dB.fromPlayers >= jB ? {
+             ...dB,
```

#### 1258. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15476` → after: `L15476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15476) · [Before (L15476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15476)

```diff
-             score: gT * WT
+             score: IB * QB
```

#### 1259. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15480-L15485` → after: `L15480-L15485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15480-L15485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15480-L15485) · [Before (L15480-L15485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15480-L15485)

```diff
-         function kO(TT, UT, mT, WT, zT, MT) {
-           if (mT.length < Kb || mT[0].players < WT) return null;
-           const gT = mT.slice(1).flatMap(((TT, UT) => {
-             const MT = mT[UT],
-               gT = zT > 0 ? Math.min(MT.players, zT) : MT.players;
-             return MT.players >= WT ? [(1 - Math.min(1, TT.players / MT.players) - Eb) * gT] : []
+         function aS(BB, jB, zB, QB, nB, dB) {
+           if (zB.length < wt || zB[0].players < QB) return null;
+           const IB = zB.slice(1).flatMap(((BB, jB) => {
+             const dB = zB[jB],
+               IB = nB > 0 ? Math.min(dB.players, nB) : dB.players;
+             return dB.players >= QB ? [(1 - Math.min(1, BB.players / dB.players) - ct) * IB] : []
```

#### 1260. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15489-L15506` → after: `L15489-L15506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15489-L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15489-L15506) · [Before (L15489-L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15489-L15506)

```diff
-             eventType: TT,
-             order: UT,
-             values: mT.slice(0, Sb),
-             hasMore: mT.length > Sb,
-             selection: MT,
-             score: Math.max(0, ...gT)
-           }
-         }
- 
-         function jO(TT, UT, mT) {
-           var WT, zT, MT, gT;
-           const nT = null !== (WT = null === (zT = TT.stats) || void 0 === zT ? void 0 : zT.rankingWindow.uniquePlayers) && void 0 !== WT ? WT : 0,
-             HT = null !== (MT = null === (gT = UT.dropoff) || void 0 === gT ? void 0 : gT.mostAboveMedian) && void 0 !== MT ? MT : null;
-           if (null === HT || nT < mT) return null;
-           const kT = pZ(HT);
-           if (null === kT.medianEndedPercent) return null;
- ... (2 more removed lines; see GitHub link above)
+             eventType: BB,
+             order: jB,
+             values: zB.slice(0, xt),
+             hasMore: zB.length > xt,
+             selection: dB,
+             score: Math.max(0, ...IB)
+           }
+         }
+ 
+         function pS(BB, jB, zB) {
+           var QB, nB, dB, IB;
+           const NB = null !== (QB = null === (nB = BB.stats) || void 0 === nB ? void 0 : nB.rankingWindow.uniquePlayers) && void 0 !== QB ? QB : 0,
+             uB = null !== (dB = null === (IB = jB.dropoff) || void 0 === IB ? void 0 : IB.mostAboveMedian) && void 0 !== dB ? dB : null;
+           if (null === uB || NB < zB) return null;
+           const UB = mm(uB);
+           if (null === UB.medianEndedPercent) return null;
+ ... (2 more added lines; see GitHub link above)
```

#### 1261. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15508-L15511` → after: `L15508-L15511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15508-L15511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15508-L15511) · [Before (L15508-L15511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15508-L15511)

```diff
-             minute: kT.minute,
-             ended: kT.endedPercent,
-             typicalEnded: kT.medianEndedPercent,
-             score: jT / 100 * nT
+             minute: UB.minute,
+             ended: UB.endedPercent,
+             typicalEnded: UB.medianEndedPercent,
+             score: aB / 100 * NB
```

#### 1262. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15515-L15516` → after: `L15515-L15516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15515-L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15515-L15516) · [Before (L15515-L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15515-L15516)

```diff
-         function lO(TT, UT) {
-           const mT = 1 === TT.events.filter((TT => TT.eventType === UT.eventType)).length;
+         function rS(BB, jB) {
+           const zB = 1 === BB.events.filter((BB => BB.eventType === jB.eventType)).length;
```

#### 1263. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15518-L15520` → after: `L15518-L15520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15518-L15520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15518-L15520) · [Before (L15518-L15520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15518-L15520)

```diff
-             gameCategory: TT.gameCategoryId,
-             eventType: UT.eventType,
-             eventValue: mT ? null : UT.eventValue
+             gameCategory: BB.gameCategoryId,
+             eventType: jB.eventType,
+             eventValue: zB ? null : jB.eventValue
```

#### 1264. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15524-L15528` → after: `L15524-L15528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15524-L15528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15524-L15528) · [Before (L15524-L15528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15524-L15528)

```diff
-         function LO(TT, UT) {
-           var mT, WT;
-           const zT = null !== (mT = null === (WT = TT.stats) || void 0 === WT ? void 0 : WT.rankingWindow.uniquePlayers) && void 0 !== mT ? mT : 0,
-             MT = [...TT.heatmaps].sort(((TT, UT) => UT.players.totalCount - TT.players.totalCount))[0];
-           if (void 0 === MT || zT < UT) return null;
+         function sS(BB, jB) {
+           var zB, QB;
+           const nB = null !== (zB = null === (QB = BB.stats) || void 0 === QB ? void 0 : QB.rankingWindow.uniquePlayers) && void 0 !== zB ? zB : 0,
+             dB = [...BB.heatmaps].sort(((BB, jB) => jB.players.totalCount - BB.players.totalCount))[0];
+           if (void 0 === dB || nB < jB) return null;
```

#### 1265. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15530-L15537` → after: `L15530-L15537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15530-L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15530-L15537) · [Before (L15530-L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15530-L15537)

```diff
-             areas: gT,
-             total: nT
-           } = Xc(MT.players), HT = gT[0];
-           if (void 0 === HT || nT <= 0 || HT.count / nT < ob) return null;
-           const kT = TT => ({
-               x: TT.x,
-               z: TT.z,
-               y: TT.busiestY
+             areas: IB,
+             total: NB
+           } = Xy(dB.players), uB = IB[0];
+           if (void 0 === uB || NB <= 0 || uB.count / NB < Rt) return null;
+           const UB = BB => ({
+               x: BB.x,
+               z: BB.z,
+               y: BB.busiestY
```

#### 1266. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15539` → after: `L15539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15539) · [Before (L15539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15539)

```diff
-             jT = HT.count / nT;
+             aB = uB.count / NB;
```

#### 1267. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15542-L15547` → after: `L15542-L15547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15542-L15547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15542-L15547) · [Before (L15542-L15547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15542-L15547)

```diff
-             category: MT.gameCategoryId,
-             square: kT(HT),
-             share: jT,
-             next: gT.slice(1, 1 + Rb).filter((TT => TT.count / nT >= Ab)).map((TT => ({
-               square: kT(TT),
-               share: TT.count / nT
+             category: dB.gameCategoryId,
+             square: UB(uB),
+             share: aB,
+             next: IB.slice(1, 1 + BS).filter((BB => BB.count / NB >= Ot)).map((BB => ({
+               square: UB(BB),
+               share: BB.count / NB
```

#### 1268. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15550` → after: `L15550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15550) · [Before (L15550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15550)

```diff
-               gameCategory: MT.gameCategoryId,
+               gameCategory: dB.gameCategoryId,
```

#### 1269. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15554-L15569` → after: `L15554-L15569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15554-L15569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15554-L15569) · [Before (L15554-L15569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15554-L15569)

```diff
-             score: (jT - ob) * zT
-           }
-         }
-         const pO = /^(?:checkpoint|wave|island|zone|level)s?$/, BO = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
- 
-         function ZO(TT, UT) {
-           var mT, WT, zT, MT;
-           if (! function(TT) {
-               var UT, mT, WT, zT;
-               const MT = TT.worldCode;
-               return [...(null !== (UT = null === MT || void 0 === MT ? void 0 : MT.functions) && void 0 !== UT ? UT : []).map((TT => TT.name)), ...(null !== (mT = null === MT || void 0 === MT ? void 0 : MT.constants) && void 0 !== mT ? mT : []).map((TT => TT.name)), ...(null !== … [truncated]
-             }(TT)) return null;
-           const gT = TT.heatmaps.some((TT => TT.players.totalCount > 0 || TT.events.some((TT => TT.heatmap.totalCount > 0)))),
-             nT = TT.missing.some((TT => Nb.test(TT)));
-           if ((null !== (mT = null === (WT = TT.flow) || void 0 === WT ? void 0 : WT.edges.length) && void 0 !== mT ? mT : 0) > 0 || UT.progressions.length > 0 || gT || nT) return null;
-           const HT = Object.values(null !== (zT = null === (MT = TT.playerTotals) || void 0 === MT ? void 0 : MT.playerTotals) && void 0 !== zT ? zT : {}).flatMap((TT => Object.keys(TT)));
+             score: (aB - Rt) * nB
+           }
+         }
+         const JS = /^(?:checkpoint|wave|island|zone|level)s?$/, mS = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
+ 
+         function yS(BB, jB) {
+           var zB, QB, nB, dB;
+           if (! function(BB) {
+               var jB, zB, QB, nB;
+               const dB = BB.worldCode;
+               return [...(null !== (jB = null === dB || void 0 === dB ? void 0 : dB.functions) && void 0 !== jB ? jB : []).map((BB => BB.name)), ...(null !== (zB = null === dB || void 0 === dB ? void 0 : dB.constants) && void 0 !== zB ? zB : []).map((BB => BB.name)), ...(null !== … [truncated]
+             }(BB)) return null;
+           const IB = BB.heatmaps.some((BB => BB.players.totalCount > 0 || BB.events.some((BB => BB.heatmap.totalCount > 0)))),
+             NB = BB.missing.some((BB => Ct.test(BB)));
+           if ((null !== (zB = null === (QB = BB.flow) || void 0 === QB ? void 0 : QB.edges.length) && void 0 !== zB ? zB : 0) > 0 || jB.progressions.length > 0 || IB || NB) return null;
+           const uB = Object.values(null !== (nB = null === (dB = BB.playerTotals) || void 0 === dB ? void 0 : dB.playerTotals) && void 0 !== nB ? nB : {}).flatMap((BB => Object.keys(BB)));
```

#### 1270. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15572` → after: `L15572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15572) · [Before (L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15572)

```diff
-             line: EB(TT.worldCode, HT),
+             line: bJ(BB.worldCode, uB),
```

#### 1271. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15577-L15590` → after: `L15577-L15590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15577-L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15577-L15590) · [Before (L15577-L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15577-L15590)

```diff
-         function cO(TT) {
-           var UT, mT, WT, zT;
-           const MT = bc(TT),
-             gT = null !== (UT = null === (mT = TT.stats) || void 0 === mT ? void 0 : mT.rankingWindow.uniquePlayers) && void 0 !== UT ? UT : 0,
-             nT = gT >= rb && gT < Cb,
-             HT = nT ? rb : Cb,
-             kT = function(TT, UT) {
-               return TT.flatMap((TT => {
-                 const mT = HO(TT, UT);
-                 if (null === mT) return [];
-                 const WT = TT.later.map((TT => HO(TT, UT))).filter((TT => null !== TT && TT.lost >= mT.lost * UO)).sort(((TT, UT) => UT.lost - TT.lost))[0];
-                 return [void 0 === WT ? mT : {
-                   ...mT,
-                   next: WT
+         function kS(BB) {
+           var jB, zB, QB, nB;
+           const dB = Ey(BB),
+             IB = null !== (jB = null === (zB = BB.stats) || void 0 === zB ? void 0 : zB.rankingWindow.uniquePlayers) && void 0 !== jB ? jB : 0,
+             NB = IB >= lt && IB < et,
+             uB = NB ? lt : et,
+             UB = function(BB, jB) {
+               return BB.flatMap((BB => {
+                 const zB = US(BB, jB);
+                 if (null === zB) return [];
+                 const QB = BB.later.map((BB => US(BB, jB))).filter((BB => null !== BB && BB.lost >= zB.lost * zS)).sort(((BB, jB) => jB.lost - BB.lost))[0];
+                 return [void 0 === QB ? zB : {
+                   ...zB,
+                   next: QB
```

#### 1272. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15592-L15597` → after: `L15592-L15597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15592-L15597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15592-L15597) · [Before (L15592-L15597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15592-L15597)

```diff
-               })).sort(((TT, UT) => UT.score - TT.score)).slice(0, TO)
-             }([...MO(TT, MT, HT), ...nO(TT, HT)], HT),
-             jT = null !== (WT = nT ? function(TT, UT, mT) {
-               var WT, zT;
-               const MT = LZ(null !== (WT = null === (zT = TT.playerTotals) || void 0 === zT ? void 0 : zT.playerTotals) && void 0 !== WT ? WT : {}, UT)[0];
-               if (void 0 === MT) return null;
+               })).sort(((BB, jB) => jB.score - BB.score)).slice(0, jS)
+             }([...IS(BB, dB, uB), ...uS(BB, uB)], uB),
+             aB = null !== (QB = NB ? function(BB, jB, zB) {
+               var QB, nB;
+               const dB = Jm(null !== (QB = null === (nB = BB.playerTotals) || void 0 === nB ? void 0 : nB.playerTotals) && void 0 !== QB ? QB : {}, jB)[0];
+               if (void 0 === dB) return null;
```

#### 1273. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15599-L15600` → after: `L15599-L15600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15599-L15600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15599-L15600) · [Before (L15599-L15600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15599-L15600)

```diff
-                 eventType: gT
-               } = MT, nT = MT.values.map((TT => {
+                 eventType: IB
+               } = dB, NB = dB.values.map((BB => {
```

#### 1274. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15602-L15604` → after: `L15602-L15604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15602-L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15602-L15604) · [Before (L15602-L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15602-L15604)

```diff
-                   value: UT,
-                   players: mT
-                 } = TT;
+                   value: jB,
+                   players: zB
+                 } = BB;
```

#### 1275. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15606-L15607` → after: `L15606-L15607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15606-L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15606-L15607) · [Before (L15606-L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15606-L15607)

```diff
-                   name: WO(gT, UT),
-                   players: mT
+                   name: nS(IB, jB),
+                   players: zB
```

#### 1276. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15609-L15611` → after: `L15609-L15611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15609-L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15609-L15611) · [Before (L15609-L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15609-L15611)

```diff
-               })), HT = {
-                 gameCategory: MT.gameCategory,
-                 eventType: gT,
+               })), uB = {
+                 gameCategory: dB.gameCategory,
+                 eventType: IB,
```

#### 1277. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15613-L15615` → after: `L15613-L15615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15613-L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15613-L15615) · [Before (L15613-L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15613-L15615)

```diff
-               }, kT = kO(gT, "number", nT, UT, mT, HT), jT = MT.steps.filter((TT => TT.from.players >= mO && 1 - TT.share > Eb)).sort(((TT, UT) => TT.share - UT.share || UT.lost - TT.lost))[0];
-               return "ladder" !== (null === kT || void 0 === kT ? void 0 : kT.kind) || void 0 === jT ? kT : {
-                 ...kT,
+               }, UB = aS(IB, "number", NB, jB, zB, uB), aB = dB.steps.filter((BB => BB.from.players >= QS && 1 - BB.share > ct)).sort(((BB, jB) => BB.share - jB.share || jB.lost - BB.lost))[0];
+               return "ladder" !== (null === UB || void 0 === UB ? void 0 : UB.kind) || void 0 === aB ? UB : {
+                 ...UB,
```

#### 1278. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15617-L15621` → after: `L15617-L15621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15617-L15621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15617-L15621) · [Before (L15617-L15621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15617-L15621)

```diff
-                   from: WO(gT, jT.from.value),
-                   to: WO(gT, jT.to.value),
-                   fromPlayers: jT.from.players,
-                   reached: jT.reached,
-                   isOrLater: jT.reached > jT.to.players
+                   from: nS(IB, aB.from.value),
+                   to: nS(IB, aB.to.value),
+                   fromPlayers: aB.from.players,
+                   reached: aB.reached,
+                   isOrLater: aB.reached > aB.to.players
```

#### 1279. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15624-L15630` → after: `L15624-L15630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15624-L15630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15624-L15630) · [Before (L15624-L15630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15624-L15630)

```diff
-             }(TT, HT, gT) : null) && void 0 !== WT ? WT : 0 === kT.length ? function(TT, UT, mT) {
-               var WT, zT;
-               let MT = null;
-               return tH(null !== (WT = null === (zT = TT.playerTotals) || void 0 === zT ? void 0 : zT.playerTotals) && void 0 !== WT ? WT : {}, ((TT, WT, zT) => {
-                 if (!Gb.test(WT)) return;
-                 const gT = kO(WT, "players", Object.entries(zT).map((TT => {
-                   let [UT, mT] = TT;
+             }(BB, uB, IB) : null) && void 0 !== QB ? QB : 0 === UB.length ? function(BB, jB, zB) {
+               var QB, nB;
+               let dB = null;
+               return Du(null !== (QB = null === (nB = BB.playerTotals) || void 0 === nB ? void 0 : nB.playerTotals) && void 0 !== QB ? QB : {}, ((BB, QB, nB) => {
+                 if (!Kt.test(QB)) return;
+                 const IB = aS(QB, "players", Object.entries(nB).map((BB => {
+                   let [jB, zB] = BB;
```

#### 1280. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15632-L15633` → after: `L15632-L15633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15632-L15633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15632-L15633) · [Before (L15632-L15633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15632-L15633)

```diff
-                     name: UT,
-                     players: mT
+                     name: jB,
+                     players: zB
```

#### 1281. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15635-L15637` → after: `L15635-L15637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15635-L15637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15635-L15637) · [Before (L15635-L15637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15635-L15637)

```diff
-                 })).sort(((TT, UT) => UT.players - TT.players)), UT, mT, {
-                   gameCategory: TT,
-                   eventType: WT,
+                 })).sort(((BB, jB) => jB.players - BB.players)), jB, zB, {
+                   gameCategory: BB,
+                   eventType: QB,
```

#### 1282. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15640-L15652` → after: `L15640-L15652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15640-L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15640-L15652) · [Before (L15640-L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15640-L15652)

```diff
-                 "ladder" === (null === gT || void 0 === gT ? void 0 : gT.kind) && (null === MT || gT.values[0].players > MT.values[0].players) && (MT = gT)
-               })), MT
-             }(TT, HT, gT) : null,
-             lT = null === jT ? kT : [jT],
-             LT = jO(TT, MT, HT),
-             pT = null !== (zT = function(TT, UT) {
-               var mT, WT;
-               const zT = null !== (mT = null === (WT = TT.stats) || void 0 === WT ? void 0 : WT.rankingWindow.uniquePlayers) && void 0 !== mT ? mT : 0;
-               if (zT < UT) return null;
-               let MT = null;
-               for (const gT of TT.heatmaps)
-                 for (const mT of gT.events) {
-                   if (!wp(mT.eventType) || null !== Kj(mT.eventType, mT.eventValue, TT.worldCode)) continue;
+                 "ladder" === (null === IB || void 0 === IB ? void 0 : IB.kind) && (null === dB || IB.values[0].players > dB.values[0].players) && (dB = IB)
+               })), dB
+             }(BB, uB, IB) : null,
+             pB = null === aB ? UB : [aB],
+             rB = pS(BB, dB, uB),
+             sB = null !== (nB = function(BB, jB) {
+               var zB, QB;
+               const nB = null !== (zB = null === (QB = BB.stats) || void 0 === QB ? void 0 : QB.rankingWindow.uniquePlayers) && void 0 !== zB ? zB : 0;
+               if (nB < jB) return null;
+               let dB = null;
+               for (const IB of BB.heatmaps)
+                 for (const zB of IB.events) {
+                   if (!Fs(zB.eventType) || null !== la(zB.eventType, zB.eventValue, BB.worldCode)) continue;
```

#### 1283. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15654-L15657` → after: `L15654-L15657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15654-L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15654-L15657) · [Before (L15654-L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15654-L15657)

```diff
-                     areas: WT,
-                     total: zT
-                   } = Xc(mT.heatmap), nT = WT[0];
-                   void 0 === nT || zT < UT || nT.count / zT < ob || null !== MT && nT.count <= MT.count || (MT = {
+                     areas: QB,
+                     total: nB
+                   } = Xy(zB.heatmap), NB = QB[0];
+                   void 0 === NB || nB < jB || NB.count / nB < Rt || null !== dB && NB.count <= dB.count || (dB = {
```

#### 1284. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15659` → after: `L15659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15659) · [Before (L15659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15659)

```diff
-                     category: gT.gameCategoryId,
+                     category: IB.gameCategoryId,
```

#### 1285. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15661-L15663` → after: `L15661-L15663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15661-L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15661-L15663) · [Before (L15661-L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15661-L15663)

```diff
-                       x: nT.x,
-                       z: nT.z,
-                       y: nT.busiestY
+                       x: NB.x,
+                       z: NB.z,
+                       y: NB.busiestY
```

#### 1286. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15665-L15668` → after: `L15665-L15668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15665-L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15665-L15668) · [Before (L15665-L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15665-L15668)

```diff
-                     count: nT.count,
-                     total: zT,
-                     death: "" === mT.eventValue ? null : `${mT.eventType}: ${mT.eventValue}`,
-                     selection: lO(gT, mT)
+                     count: NB.count,
+                     total: nB,
+                     death: "" === zB.eventValue ? null : `${zB.eventType}: ${zB.eventValue}`,
+                     selection: rS(IB, zB)
```

#### 1287. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15671-L15673` → after: `L15671-L15673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15671-L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15671-L15673) · [Before (L15671-L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15671-L15673)

```diff
-               return null === MT ? null : {
-                 ...MT,
-                 score: (MT.count / MT.total - ob) * zT
+               return null === dB ? null : {
+                 ...dB,
+                 score: (dB.count / dB.total - Rt) * nB
```

#### 1288. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15675-L15686` → after: `L15675-L15686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15675-L15686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15675-L15686) · [Before (L15675-L15686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15675-L15686)

```diff
-             }(TT, HT)) && void 0 !== zT ? zT : LO(TT, HT),
-             BT = null !== LT && (0 === lT.length || LT.score > lT[0].score) ? [LT, ...lT] : lT,
-             ZT = (null === pT ? BT : [...BT, pT]).map((TT => nT ? {
-               ...TT,
-               fewPlayers: gT
-             } : TT)),
-             cT = ZO(TT, MT);
-           return null === cT ? ZT : [...ZT, cT]
-         }
- 
-         function vO(TT) {
-           return ` ${TT.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const fO=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function qO(TT,UT){const mT=vO(UT);switch(TT.kind){case"step":{const UT=function(TT){var UT,mT;return null!==(UT … [truncated]
+             }(BB, uB)) && void 0 !== nB ? nB : sS(BB, uB),
+             JB = null !== rB && (0 === pB.length || rB.score > pB[0].score) ? [rB, ...pB] : pB,
+             mB = (null === sB ? JB : [...JB, sB]).map((BB => NB ? {
+               ...BB,
+               fewPlayers: IB
+             } : BB)),
+             yB = yS(BB, dB);
+           return null === yB ? mB : [...mB, yB]
+         }
+ 
+         function GS(BB) {
+           return ` ${BB.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const LS=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function gS(BB,jB){const zB=GS(jB);switch(BB.kind){case"step":{const jB=function(BB){var jB,zB;return null!==(jB … [truncated]
```

#### 1289. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15688` → after: `L15688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15688) · [Before (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15688)

```diff
-             UT[1]
+             jB[1]
```

#### 1290. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15691` → after: `L15691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15691) · [Before (L15691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15691)

```diff
-             UT[2]
+             jB[2]
```

#### 1291. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15693` → after: `L15693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15693) · [Before (L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15693)

```diff
-           `]}(TT).some((TT=>function(TT,UT){const mT=vO(UT).trim();return""!==mT&&TT.includes(`
+           `]}(BB).some((BB=>function(BB,jB){const zB=GS(jB).trim();return""!==zB&&BB.includes(`
```

#### 1292. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15695` → after: `L15695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15695) · [Before (L15695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15695)

```diff
-             mT
+             zB
```

#### 1293. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15697` → after: `L15697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15697) · [Before (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15697)

```diff
-           `)}(mT,TT)));return WT(TT.to)||WT(TT.from)&&null!==UT&&mT.includes(`
+           `)}(zB,BB)));return QB(BB.to)||QB(BB.from)&&null!==jB&&zB.includes(`
```

#### 1294. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15699` → after: `L15699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15699) · [Before (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15699)

```diff
-             UT
+             jB
```

#### 1295. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15701` → after: `L15701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15701) · [Before (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15701)

```diff
-           `)}case"deaths":case"place":{const{square:mT}=TT;return function(TT){return[...TT.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((TT=>({x:Number(TT[1]),z:Number(TT[2])})))}(UT).some((TT=>function(TT,UT){return TT.x>=UT.x&&TT.x<UT.x+wc&&TT.z>=U … [truncated]
+           `)}case"deaths":case"place":{const{square:zB}=BB;return function(BB){return[...BB.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((BB=>({x:Number(BB[1]),z:Number(BB[2])})))}(jB).some((BB=>function(BB,jB){return BB.x>=jB.x&&BB.x<jB.x+Fy&&BB.z>=j … [truncated]
```

#### 1296. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15703` → after: `L15703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15703) · [Before (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15703)

```diff
-             WT
+             QB
```

#### 1297. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15707` → after: `L15707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15707) · [Before (L15707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15707)

```diff
-             WT
+             QB
```

#### 1298. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15711` → after: `L15711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15711) · [Before (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15711)

```diff
-             WT
+             QB
```

#### 1299. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15715` → after: `L15715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15715) · [Before (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15715)

```diff
-             WT
+             QB
```

#### 1300. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15719` → after: `L15719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15719) · [Before (L15719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15719)

```diff
-             TT
+             BB
```

#### 1301. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15721` → after: `L15721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15721) · [Before (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15721)

```diff
-           `)))}}}function iO(TT,UT,mT){if("young"===mT){var WT;const mT=[TT.reduce(((TT,UT)=>"unseen"!==UT.kind&&(null===TT||UT.score>TT.score)?UT:TT),null),null!==(WT=TT.find((TT=>"unseen"===TT.kind)))&&void 0!==WT?WT:null].find((TT=>null!==TT&&!qO(TT,UT)));return void 0===mT||n … [truncated]
+           `)))}}}function tS(BB,jB,zB){if("young"===zB){var QB;const zB=[BB.reduce(((BB,jB)=>"unseen"!==jB.kind&&(null===BB||jB.score>BB.score)?jB:BB),null),null!==(QB=BB.find((BB=>"unseen"===BB.kind)))&&void 0!==QB?QB:null].find((BB=>null!==BB&&!gS(BB,jB)));return void 0===zB||n … [truncated]
```

#### 1302. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15723` → after: `L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15723) · [Before (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15723)

```diff
-             TT
+             BB
```

#### 1303. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15726` → after: `L15726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15726) · [Before (L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15726)

```diff
-             WT[2]
+             QB[2]
```

#### 1304. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15730` → after: `L15730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15730) · [Before (L15730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15730)

```diff
-             TT
+             BB
```

#### 1305. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15733` → after: `L15733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15733) · [Before (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15733)

```diff
-             UT
+             jB
```

#### 1306. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15737` → after: `L15737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15737) · [Before (L15737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15737)

```diff
-             TT.x
+             BB.x
```

#### 1307. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15740` → after: `L15740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15740) · [Before (L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15740)

```diff
-             TT.x + mT
+             BB.x + zB
```

#### 1308. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15742` → after: `L15742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15742) · [Before (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15742)

```diff
-             TT.z
+             BB.z
```

#### 1309. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15745` → after: `L15745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15745) · [Before (L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15745)

```diff
-             TT.z + mT
+             BB.z + zB
```

#### 1310. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15748` → after: `L15748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15748) · [Before (L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15748)

```diff
-             UT ? ` (height y ${TT.y})` : ""
+             jB ? ` (height y ${BB.y})` : ""
```

#### 1311. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15752` → after: `L15752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15752) · [Before (L15752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15752)

```diff
-             TT.x + UT
+             BB.x + jB
```

#### 1312. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15754` → after: `L15754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15754) · [Before (L15754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15754)

```diff
-             TT.z + UT
+             BB.z + jB
```

#### 1313. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15758` → after: `L15758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15758) · [Before (L15758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15758)

```diff
-             UT("deaths")
+             jB("deaths")
```

#### 1314. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15760` → after: `L15760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15760) · [Before (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15760)

```diff
-           `];const mT=TT.indexOf(": "),WT=-1===mT?null:function(TT){const UT=TT.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((TT=>""!==TT));return UT.length>0&&UT.length<=3&&UT.every((TT=>/^[A-Za-z]+$/.test(TT)&&!/^[a-z]{3,}ed$/i.test(TT)&&!JO.test(TT.toLowerCase()) … [truncated]
+           `];const zB=BB.indexOf(": "),QB=-1===zB?null:function(BB){const jB=BB.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((BB=>""!==BB));return jB.length>0&&jB.length<=3&&jB.every((BB=>/^[A-Za-z]+$/.test(BB)&&!/^[a-z]{3,}ed$/i.test(BB)&&!qS.test(BB.toLowerCase()) … [truncated]
```

#### 1315. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15762` → after: `L15762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15762) · [Before (L15762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15762)

```diff
-             UT("deaths logged as")
+             jB("deaths logged as")
```

#### 1316. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15766` → after: `L15766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15766) · [Before (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15766)

```diff
-             WT
+             QB
```

#### 1317. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15769` → after: `L15769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15769) · [Before (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15769)

```diff
-             UT("deaths")
+             jB("deaths")
```

#### 1318. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15773` → after: `L15773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15773) · [Before (L15773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15773)

```diff
-             TT.to
+             BB.to
```

#### 1319. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15776` → after: `L15776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15776) · [Before (L15776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15776)

```diff
-             mT("or later")
+             zB("or later")
```

#### 1320. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15780` → after: `L15780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15780) · [Before (L15780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15780)

```diff
-             (0, pg.c)(TT.group)
+             (0, kI.b)(BB.group)
```

#### 1321. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15782` → after: `L15782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15782) · [Before (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15782)

```diff
-             TT.from
+             BB.from
```

#### 1322. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15785` → after: `L15785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15785) · [Before (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15785)

```diff
-             TT.to
+             BB.to
```

#### 1323. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15789` → after: `L15789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15789) · [Before (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15789)

```diff
-             (0, pg.n)(TT.lost)
+             (0, kI.i)(BB.lost)
```

#### 1324. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15792` → after: `L15792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15792) · [Before (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15792)

```diff
-             mT("of the")
+             zB("of the")
```

#### 1325. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15795` → after: `L15795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15795) · [Before (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15795)

```diff
-             (0, pg.n)(TT.fromPlayers)
+             (0, kI.i)(BB.fromPlayers)
```

#### 1326. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15798` → after: `L15798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15798) · [Before (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15798)

```diff
-             mT("players who reached")
+             zB("players who reached")
```

#### 1327. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15801` → after: `L15801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15801) · [Before (L15801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15801)

```diff
-             TT.from
+             BB.from
```

#### 1328. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15804` → after: `L15804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15804) · [Before (L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15804)

```diff
-             mT("didn't reach")
+             zB("didn't reach")
```

#### 1329. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15807` → after: `L15807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15807) · [Before (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15807)

```diff
-             zT
+             nB
```

#### 1330. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15809` → after: `L15809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15809) · [Before (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15809)

```diff
-             HT
+             uB
```

#### 1331. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15812` → after: `L15812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15812) · [Before (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15812)

```diff
-             MT
+             dB
```

#### 1332. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15815` → after: `L15815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15815) · [Before (L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15815)

```diff
-             mT("in 100 players who get to")
+             zB("in 100 players who get to")
```

#### 1333. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15818` → after: `L15818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15818) · [Before (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15818)

```diff
-             TT.from
+             BB.from
```

#### 1334. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15821` → after: `L15821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15821) · [Before (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15821)

```diff
-             mT("don't get to")
+             zB("don't get to")
```

#### 1335. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15824` → after: `L15824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15824) · [Before (L15824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15824)

```diff
-             zT
+             nB
```

#### 1336. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15828` → after: `L15828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15828) · [Before (L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15828)

```diff
-             MT
+             dB
```

#### 1337. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15831` → after: `L15831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15831) · [Before (L15831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15831)

```diff
-             mT("of every 100 players who reach")
+             zB("of every 100 players who reach")
```

#### 1338. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15834` → after: `L15834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15834) · [Before (L15834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15834)

```diff
-             TT.from
+             BB.from
```

#### 1339. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15836` → after: `L15836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15836) · [Before (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15836)

```diff
-             (0, pg.n)(TT.fromPlayers)
+             (0, kI.i)(BB.fromPlayers)
```

#### 1340. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15838` → after: `L15838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15838) · [Before (L15838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15838)

```diff
-             mT("don't reach")
+             zB("don't reach")
```

#### 1341. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15841` → after: `L15841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15841) · [Before (L15841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15841)

```diff
-             zT
+             nB
```

#### 1342. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15843` → after: `L15843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15843) · [Before (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15843)

```diff
-             (0, pg.n)(TT.fromPlayers - TT.lost)
+             (0, kI.i)(BB.fromPlayers - BB.lost)
```

#### 1343. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15845` → after: `L15845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15845) · [Before (L15845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15845)

```diff
-             HT
+             uB
```

#### 1344. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15849` → after: `L15849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15849) · [Before (L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15849)

```diff
-             MT
+             dB
```

#### 1345. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15852` → after: `L15852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15852) · [Before (L15852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15852)

```diff
-             mT("of every 100 players who reach")
+             zB("of every 100 players who reach")
```

#### 1346. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15855` → after: `L15855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15855) · [Before (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15855)

```diff
-             TT.from
+             BB.from
```

#### 1347. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15858` → after: `L15858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15858) · [Before (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15858)

```diff
-             mT("don't reach")
+             zB("don't reach")
```

#### 1348. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15861` → after: `L15861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15861) · [Before (L15861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15861)

```diff
-             zT
+             nB
```

#### 1349. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15863` → after: `L15863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15863) · [Before (L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15863)

```diff
-               (0, pg.n)(TT.lost)
+               (0, kI.i)(BB.lost)
```

#### 1350. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15866` → after: `L15866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15866) · [Before (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15866)

```diff
-               mT("of")
+               zB("of")
```

#### 1351. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15869` → after: `L15869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15869) · [Before (L15869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15869)

```diff
-               (0, pg.n)(TT.fromPlayers)
+               (0, kI.i)(BB.fromPlayers)
```

#### 1352. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15871` → after: `L15871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15871) · [Before (L15871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15871)

```diff
-               HT
+               uB
```

#### 1353. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15874` → after: `L15874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15874) · [Before (L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15874)

```diff
-             mT("in")
+             zB("in")
```

#### 1354. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15877` → after: `L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15877) · [Before (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15877)

```diff
-             TT.category
+             BB.category
```

#### 1355. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15881` → after: `L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15881) · [Before (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15881)

```diff
-             (0, pg.n)(TT.count)
+             (0, kI.i)(BB.count)
```

#### 1356. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15884` → after: `L15884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15884) · [Before (L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15884)

```diff
-             mT("of")
+             zB("of")
```

#### 1357. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15887` → after: `L15887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15887) · [Before (L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15887)

```diff
-             (0, pg.n)(TT.total)
+             (0, kI.i)(BB.total)
```

#### 1358. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15889` → after: `L15889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15889) · [Before (L15889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15889)

```diff
-           `:null,gT=bO(TT.count,TT.total),nT=xO(TT.death,mT);return UT?{label:2*TT.count>TT.total?mT("Most deaths"):mT("Many deaths"),parts:[null!==MT&&void 0!==MT?MT:`
+           `:null,IB=SS(BB.count,BB.total),NB=fS(BB.death,zB);return jB?{label:2*BB.count>BB.total?zB("Most deaths"):zB("Many deaths"),parts:[null!==dB&&void 0!==dB?dB:`
```

#### 1359. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15891` → after: `L15891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15891) · [Before (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15891)

```diff
-             gT
+             IB
```

#### 1360. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15894` → after: `L15894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15894) · [Before (L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15894)

```diff
-             mT("in 100")
+             zB("in 100")
```

#### 1361. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15898` → after: `L15898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15898) · [Before (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15898)

```diff
-             mT("happen near")
+             zB("happen near")
```

#### 1362. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15901` → after: `L15901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15901) · [Before (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15901)

```diff
-             YO(TT.square)
+             iS(BB.square)
```

#### 1363. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15904` → after: `L15904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15904) · [Before (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15904)

```diff
-             zT
+             nB
```

#### 1364. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15908` → after: `L15908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15908) · [Before (L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15908)

```diff
-             mT("Death hotspot")
+             zB("Death hotspot")
```

#### 1365. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15911` → after: `L15911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15911) · [Before (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15911)

```diff
-             zT
+             nB
```

#### 1366. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15913` → after: `L15913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15913) · [Before (L15913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15913)

```diff
-           `,parts:[null!==MT&&void 0!==MT?MT:`
+           `,parts:[null!==dB&&void 0!==dB?dB:`
```

#### 1367. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15915` → after: `L15915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15915) · [Before (L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15915)

```diff
-             gT
+             IB
```

#### 1368. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15918` → after: `L15918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15918) · [Before (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15918)

```diff
-             mT("of every 100")
+             zB("of every 100")
```

#### 1369. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15922` → after: `L15922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15922) · [Before (L15922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15922)

```diff
-             zT
+             nB
```

#### 1370. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15925` → after: `L15925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15925) · [Before (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15925)

```diff
-             mT("in the past week happened at")
+             zB("in the past week happened at")
```

#### 1371. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15928` → after: `L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15928) · [Before (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15928)

```diff
-             eO(TT.square)
+             ES(BB.square)
```

#### 1372. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15932` → after: `L15932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15932) · [Before (L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15932)

```diff
-             mT("in")
+             zB("in")
```

#### 1373. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15935` → after: `L15935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15935) · [Before (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15935)

```diff
-             TT.category
+             BB.category
```

#### 1374. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15939` → after: `L15939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15939) · [Before (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15939)

```diff
-             mT("near")
+             zB("near")
```

#### 1375. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15942` → after: `L15942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15942) · [Before (L15942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15942)

```diff
-             YO(TT.square)
+             iS(BB.square)
```

#### 1376. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15945` → after: `L15945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15945) · [Before (L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15945)

```diff
-             WT
+             QB
```

#### 1377. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15947` → after: `L15947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15947) · [Before (L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15947)

```diff
-             zT
+             nB
```

#### 1378. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15950` → after: `L15950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15950) · [Before (L15950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15950)

```diff
-             mT("in 100 minutes of play")
+             zB("in 100 minutes of play")
```

#### 1379. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15954` → after: `L15954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15954) · [Before (L15954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15954)

```diff
-             eO(UT, !1)
+             ES(jB, !1)
```

#### 1380. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15956` → after: `L15956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15956) · [Before (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15956)

```diff
-               bO(WT, 1)
+               SS(QB, 1)
```

#### 1381. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15959` → after: `L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15959) · [Before (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15959)

```diff
-               mT("of 100")
+               zB("of 100")
```

#### 1382. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15962` → after: `L15962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15962) · [Before (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15962)

```diff
-             mT("Busiest place")
+             zB("Busiest place")
```

#### 1383. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15965` → after: `L15965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15965) · [Before (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15965)

```diff
-             WT
+             QB
```

#### 1384. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15969` → after: `L15969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15969) · [Before (L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15969)

```diff
-             eO(TT.square)
+             ES(BB.square)
```

#### 1385. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15971` → after: `L15971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15971) · [Before (L15971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15971)

```diff
-             mT("with")
+             zB("with")
```

#### 1386. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15974` → after: `L15974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15974) · [Before (L15974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15974)

```diff
-             zT
+             nB
```

#### 1387. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15977` → after: `L15977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15977) · [Before (L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15977)

```diff
-             mT("of every 100 minutes played")
+             zB("of every 100 minutes played")
```

#### 1388. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15980` → after: `L15980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15980) · [Before (L15980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15980)

```diff
-             0 === MT.length ? "" : `; ${mT("next busiest")}: ${MT.join(", ")}`
+             0 === dB.length ? "" : `; ${zB("next busiest")}: ${dB.join(", ")}`
```

#### 1389. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15984` → after: `L15984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15984) · [Before (L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15984)

```diff
-             WT
+             QB
```

#### 1390. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15986` → after: `L15986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15986) · [Before (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15986)

```diff
-             (0, pg.n)(zT)
+             (0, kI.i)(nB)
```

#### 1391. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15989` → after: `L15989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15989) · [Before (L15989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15989)

```diff
-             0 === UT ? ` ${mT("players")}` : ""
+             0 === jB ? ` ${zB("players")}` : ""
```

#### 1392. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15993` → after: `L15993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15993) · [Before (L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15993)

```diff
-             mT("Players per")
+             zB("Players per")
```

#### 1393. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15996` → after: `L15996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15996) · [Before (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15996)

```diff
-             TT.eventType
+             BB.eventType
```

#### 1394. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15999` → after: `L15999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L15999) · [Before (L15999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L15999)

```diff
-             mT("event")
+             zB("event")
```

#### 1395. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16003` → after: `L16003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16003) · [Before (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16003)

```diff
-             mT("Players at each")
+             zB("Players at each")
```

#### 1396. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16006` → after: `L16006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16006) · [Before (L16006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16006)

```diff
-             TT.eventType
+             BB.eventType
```

#### 1397. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16009` → after: `L16009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16009) · [Before (L16009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16009)

```diff
-             OO(MT.from, MT.to)
+             MS(dB.from, dB.to)
```

#### 1398. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16012` → after: `L16012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16012) · [Before (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16012)

```diff
-             MT.isOrLater ? ` ${mT("or later")}` : ""
+             dB.isOrLater ? ` ${zB("or later")}` : ""
```

#### 1399. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16015` → after: `L16015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16015) · [Before (L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16015)

```diff
-             mT("loses the most")
+             zB("loses the most")
```

#### 1400. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16017` → after: `L16017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16017) · [Before (L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16017)

```diff
-             (0, pg.n)(MT.fromPlayers)
+             (0, kI.i)(dB.fromPlayers)
```

#### 1401. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16020` → after: `L16020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16020) · [Before (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16020)

```diff
-             (0, pg.n)(MT.reached)
+             (0, kI.i)(dB.reached)
```

#### 1402. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16023` → after: `L16023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16023) · [Before (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16023)

```diff
-             mT("players")
+             zB("players")
```

#### 1403. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16027` → after: `L16027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16027) · [Before (L16027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16027)

```diff
-             zT
+             nB
```

#### 1404. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16029` → after: `L16029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16029) · [Before (L16029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16029)

```diff
-             UT.join(", ")
+             jB.join(", ")
```

#### 1405. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16032` → after: `L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16032) · [Before (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16032)

```diff
-             TT.hasMore ? ", \u2026" : ""
+             BB.hasMore ? ", \u2026" : ""
```

#### 1406. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16035` → after: `L16035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16035) · [Before (L16035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16035)

```diff
-             gT
+             IB
```

#### 1407. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16039` → after: `L16039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16039) · [Before (L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16039)

```diff
-             zT
+             nB
```

#### 1408. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16042` → after: `L16042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16042) · [Before (L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16042)

```diff
-             mT("This line, first inside")
+             zB("This line, first inside")
```

#### 1409. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16045` → after: `L16045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16045) · [Before (L16045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16045)

```diff
-             mT("would log it")
+             zB("would log it")
```

#### 1410. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16048` → after: `L16048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16048) · [Before (L16048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16048)

```diff
-             mT("between minute")
+             zB("between minute")
```

#### 1411. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16051` → after: `L16051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16051) · [Before (L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16051)

```diff
-             TT.minute - 1
+             BB.minute - 1
```

#### 1412. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16054` → after: `L16054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16054) · [Before (L16054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16054)

```diff
-             mT("and")
+             zB("and")
```

#### 1413. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16057` → after: `L16057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16057) · [Before (L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16057)

```diff
-             TT.minute
+             BB.minute
```

#### 1414. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16061` → after: `L16061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16061) · [Before (L16061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16061)

```diff
-             mT("Minute")
+             zB("Minute")
```

#### 1415. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16064` → after: `L16064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16064) · [Before (L16064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16064)

```diff
-             TT.minute
+             BB.minute
```

#### 1416. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16068` → after: `L16068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16068) · [Before (L16068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16068)

```diff
-             TT.ended
+             BB.ended
```

#### 1417. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16071` → after: `L16071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16071) · [Before (L16071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16071)

```diff
-             mT("in 100 plays end")
+             zB("in 100 plays end")
```

#### 1418. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16074` → after: `L16074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16074) · [Before (L16074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16074)

```diff
-             WT
+             QB
```

#### 1419. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16076` → after: `L16076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16076) · [Before (L16076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16076)

```diff
-             mT("most games")
+             zB("most games")
```

#### 1420. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16078` → after: `L16078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16078) · [Before (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16078)

```diff
-             TT.typicalEnded
+             BB.typicalEnded
```

#### 1421. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16081` → after: `L16081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16081) · [Before (L16081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16081)

```diff
-             TT.ended
+             BB.ended
```

#### 1422. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16084` → after: `L16084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16084) · [Before (L16084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16084)

```diff
-             mT("of every 100 sessions end")
+             zB("of every 100 sessions end")
```

#### 1423. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16087` → after: `L16087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16087) · [Before (L16087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16087)

```diff
-             WT
+             QB
```

#### 1424. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16090` → after: `L16090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16090) · [Before (L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16090)

```diff
-             mT("in a typical Bloxd game")
+             zB("in a typical Bloxd game")
```

#### 1425. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16092` → after: `L16092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16092) · [Before (L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16092)

```diff
-             TT.typicalEnded
+             BB.typicalEnded
```

#### 1426. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16095` → after: `L16095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16095) · [Before (L16095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16095)

```diff
-             mT("do")
+             zB("do")
```

#### 1427. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16099` → after: `L16099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16099) · [Before (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16099)

```diff
-             mT("Only")
+             zB("Only")
```

#### 1428. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16102` → after: `L16102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16102) · [Before (L16102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16102)

```diff
-             (0, pg.n)(TT.fewPlayers)
+             (0, kI.i)(BB.fewPlayers)
```

#### 1429. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16105` → after: `L16105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16105) · [Before (L16105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16105)

```diff
-             mT("players this week, so this is a hint.")
+             zB("players this week, so this is a hint.")
```

#### 1430. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16109` → after: `L16109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16109) · [Before (L16109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16109)

```diff
-             mT("Only")
+             zB("Only")
```

#### 1431. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16112` → after: `L16112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16112) · [Before (L16112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16112)

```diff
-             (0, pg.n)(TT.fewPlayers)
+             (0, kI.i)(BB.fewPlayers)
```

#### 1432. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16115` → after: `L16115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16115) · [Before (L16115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16115)

```diff
-             mT("players this week, so this is a hint:")
+             zB("players this week, so this is a hint:")
```

#### 1433. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16119` → after: `L16119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16119) · [Before (L16119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16119)

```diff
-             gT
+             IB
```

#### 1434. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16122` → after: `L16122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16122) · [Before (L16122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16122)

```diff
-             zT
+             nB
```

#### 1435. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16124` → after: `L16124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16124) · [Before (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16124)

```diff
-           `,...MT]:[gT,...WT.parts]}}function tO(TT,UT){var mT,WT;const zT=null!==(mT=null===(WT=TT.stats)||void 0===WT?void 0:WT.rankingWindow.uniquePlayers)&&void 0!==mT?mT:0;return TT.heatmaps.flatMap((mT=>mT.events.flatMap((WT=>{if(!wp(WT.eventType)||null!==Kj(WT.eventType,WT … [truncated]
+           `,...dB]:[IB,...QB.parts]}}function DS(BB,jB){var zB,QB;const nB=null!==(zB=null===(QB=BB.stats)||void 0===QB?void 0:QB.rankingWindow.uniquePlayers)&&void 0!==zB?zB:0;return BB.heatmaps.flatMap((zB=>zB.events.flatMap((QB=>{if(!Fs(QB.eventType)||null!==la(QB.eventType,QB … [truncated]
```

#### 1436. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16126` → after: `L16126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16126) · [Before (L16126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16126)

```diff
-             WT.eventType
+             QB.eventType
```

#### 1437. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16128` → after: `L16128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16128) · [Before (L16128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16128)

```diff
-             WT.eventValue
+             QB.eventValue
```

#### 1438. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16130` → after: `L16130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16130) · [Before (L16130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16130)

```diff
-           `,selection:lO(mT,WT),score:(nT.count/gT-ob)*zT}]}))))}function aO(TT){var UT,mT;if((null!==(UT=null===(mT=TT.stats)||void 0===mT?void 0:mT.rankingWindow.uniquePlayers)&&void 0!==UT?UT:0)<Cb)return[];const WT=jO(TT,bc(TT),Cb),zT=LO(TT,Cb);return[...null===WT?[]:[WT],... … [truncated]
+           `,selection:rS(zB,QB),score:(NB.count/IB-Rt)*nB}]}))))}function FS(BB){var jB,zB;if((null!==(jB=null===(zB=BB.stats)||void 0===zB?void 0:zB.rankingWindow.uniquePlayers)&&void 0!==jB?jB:0)<et)return[];const QB=pS(BB,Ey(BB),et),nB=sS(BB,et);return[...null===QB?[]:[QB],... … [truncated]
```

#### 1439. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16132` → after: `L16132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16132) · [Before (L16132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16132)

```diff
-             UT[mT - 1]
+             jB[zB - 1]
```

#### 1440. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16135` → after: `L16135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16135) · [Before (L16135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16135)

```diff
-             TT
+             BB
```

#### 1441. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16137` → after: `L16137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16137) · [Before (L16137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16137)

```diff
-           `])).some((TT=>IO.test(TT)))&&!UT.some((TT=>QO.test(TT)))}(dH(TT.to))&&TT.players>=XO&&TT.players>=TT.fromPlayers*yO));if(1!==zT.length)return null;const[MT]=zT;return{step:UT.from,fromPlayers:MT.fromPlayers,event:dH(MT.to),players:MT.players}}function PO(TT){return TT. … [truncated]
+           `])).some((BB=>hS.test(BB)))&&!jB.some((BB=>XS.test(BB)))}(ou(BB.to))&&BB.players>=VS&&BB.players>=BB.fromPlayers*YS));if(1!==nB.length)return null;const[dB]=nB;return{step:jB.from,fromPlayers:dB.fromPlayers,event:ou(dB.to),players:dB.players}}function TS(BB){return BB. … [truncated]
```

#### 1442. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16139-L16140` → after: `L16139-L16140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16139-L16140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16139-L16140) · [Before (L16139-L16140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16139-L16140)

```diff
-             gT.params[zT]
-           })`;return KB(MT,gT.callback,gT.params[UT],mT,nT,WT)}}function AO(TT){return UT=>{const mT=EB(UT,[]);return null!==mT&&TT.test(mT.code)?mT:null}}const RO=new Set(["finish","finished","win","won","done","complete","completed","escape","escaped","victory"]),Te=new Set(["e … [truncated]
+             IB.params[nB]
+           })`;return xJ(dB,IB.callback,IB.params[jB],zB,NB,QB)}}function OS(BB){return jB=>{const zB=bJ(jB,[]);return null!==zB&&BB.test(zB.code)?zB:null}}const BM=new Set(["finish","finished","win","won","done","complete","completed","escape","escaped","victory"]),jM=new Set(["e … [truncated]
```

#### 1443. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16142` → after: `L16142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16142) · [Before (L16142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16142)

```diff
-             UT("and")
+             jB("and")
```

#### 1444. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16146` → after: `L16146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16146) · [Before (L16146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16146)

```diff
-             TT
+             BB
```

#### 1445. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16149` → after: `L16149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16149) · [Before (L16149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16149)

```diff
-             UT
+             jB
```

#### 1446. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16151` → after: `L16151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16151) · [Before (L16151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16151)

```diff
-           `.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/_/g," "))}function ee(TT,UT){return TT.filter((TT=>TT.fromPlayers>=Math.max(Ze,UT*ce)&&1-TT.reached/TT.fromPlayers>Be)).sort(((TT,UT)=>TT.reached/TT.fromPlayers-UT.reached/UT.fromPlayers||UT.fromPlayers-UT.reached-(TT.fro … [truncated]
+           `.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/_/g," "))}function EM(BB,jB){return BB.filter((BB=>BB.fromPlayers>=Math.max(yM,jB*kM)&&1-BB.reached/BB.fromPlayers>mM)).sort(((BB,jB)=>BB.reached/BB.fromPlayers-jB.reached/jB.fromPlayers||jB.fromPlayers-jB.reached-(BB.fro … [truncated]
```

#### 1447. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16153` → after: `L16153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16153) · [Before (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16153)

```diff
-             HT.from.split(" / ").slice(0, -1).join(" / ")
+             uB.from.split(" / ").slice(0, -1).join(" / ")
```

#### 1448. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16155` → after: `L16155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16155) · [Before (L16155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16155)

```diff
-             TT.type
+             BB.type
```

#### 1449. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16157` → after: `L16157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16157) · [Before (L16157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16157)

```diff
-           `,WT=null!==(gT=MT.get(mT))&&void 0!==gT?gT:{steps:[],firstPlayers:0,lastFrom:HT.from,lastNumber:-1/0};WT.steps.push({from:be(HT.from),to:be(HT.to),fromPlayers:HT.fromPlayers,reached:HT.players,isEnd:!1}),WT.firstPlayers=Math.max(WT.firstPlayers,HT.fromPlayers),UT.to>WT … [truncated]
+           `,QB=null!==(IB=dB.get(zB))&&void 0!==IB?IB:{steps:[],firstPlayers:0,lastFrom:uB.from,lastNumber:-1/0};QB.steps.push({from:SM(uB.from),to:SM(uB.to),fromPlayers:uB.fromPlayers,reached:uB.players,isEnd:!1}),QB.firstPlayers=Math.max(QB.firstPlayers,uB.fromPlayers),jB.to>QB … [truncated]
```

#### 1450. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16159` → after: `L16159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16159) · [Before (L16159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16159)

```diff
-             UT.type
+             jB.type
```

#### 1451. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16162` → after: `L16162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16162) · [Before (L16162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16162)

```diff
-             UT.value
+             jB.value
```

#### 1452. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16164-L16165` → after: `L16164-L16165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16164-L16165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16164-L16165) · [Before (L16164-L16165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16164-L16165)

```diff
-           `)})),mT=void 0===TT?HT.steps:[...HT.steps,{from:be(TT.from),to:be(TT.to),fromPlayers:TT.fromPlayers,reached:TT.players,isEnd:!0}];mT.length>=pe&&HT.firstPlayers>=UT&&(null===nT||HT.firstPlayers>nT.firstPlayers)&&(nT={steps:mT,firstPlayers:HT.firstPlayers})}return nT}(T … [truncated]
-             UT.toLocaleString("en-US")
+           `)})),zB=void 0===BB?uB.steps:[...uB.steps,{from:SM(BB.from),to:SM(BB.to),fromPlayers:BB.fromPlayers,reached:BB.players,isEnd:!0}];zB.length>=JM&&uB.firstPlayers>=jB&&(null===NB||uB.firstPlayers>NB.firstPlayers)&&(NB={steps:zB,firstPlayers:uB.firstPlayers})}return NB}(B … [truncated]
+             jB.toLocaleString("en-US")
```

#### 1453. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16167` → after: `L16167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16167) · [Before (L16167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16167)

```diff
-             UT
+             jB
```

#### 1454. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16170` → after: `L16170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16170) · [Before (L16170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16170)

```diff
-             mT(TT.fromPlayers)
+             zB(BB.fromPlayers)
```

#### 1455. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16173-L16174` → after: `L16173-L16174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16173-L16174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16173-L16174) · [Before (L16173-L16174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16173-L16174)

```diff
-             mT(TT.reached)
-           }( ? ![\\d] | [, .]\\ d)`);return(0,Bg.e)(UT,WT,(0,Bg.j)("\\d,.")).length>0}(TT,mT))).slice(0,"young"===WT?0:Rc(WT)?qe:fe)}function ye(TT,UT,mT,WT){const zT=Rc(mT),MT=UT[0]===TT.steps[0],gT=WT(MT?"Hardest steps":"Next hardest steps"),nT="week"===TT.since?WT("past week") … [truncated]
+             zB(BB.reached)
+           }( ? ![\\d] | [, .]\\ d)`);return(0,GI.h)(jB,QB,(0,GI.k)("\\d,.")).length>0}(BB,zB))).slice(0,"young"===QB?0:zk(QB)?gM:LM)}function YM(BB,jB,zB,QB){const nB=zk(zB),dB=jB[0]===BB.steps[0],IB=QB(dB?"Hardest steps":"Next hardest steps"),NB="week"===BB.since?QB("past week") … [truncated]
```

#### 1456. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16176` → after: `L16176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16176) · [Before (L16176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16176)

```diff
-             gT
+             IB
```

#### 1457. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16178` → after: `L16178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16178) · [Before (L16178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16178)

```diff
-             nT
+             NB
```

#### 1458. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16181` → after: `L16181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16181) · [Before (L16181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16181)

```diff
-             WT("get to")
+             QB("get to")
```

#### 1459. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16184` → after: `L16184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16184) · [Before (L16184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16184)

```diff
-             UT.to
+             jB.to
```

#### 1460. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16188` → after: `L16188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16188) · [Before (L16188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16188)

```diff
-             TT.isFew ? `${(0,pg.n)(MT)} ${WT("of the")} ${(0,pg.n)(UT.fromPlayers)}` : `${gT=MT,nT=UT.fromPlayers,String(gT>0?Math.max(1,Math.round(gT/nT*100)):0)} ${WT("in 100")}`
+             BB.isFew ? `${(0,kI.i)(dB)} ${QB("of the")} ${(0,kI.i)(jB.fromPlayers)}` : `${IB=dB,NB=jB.fromPlayers,String(IB>0?Math.max(1,Math.round(IB/NB*100)):0)} ${QB("in 100")}`
```

#### 1461. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16191` → after: `L16191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16191) · [Before (L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16191)

```diff
-             WT("players who get to")
+             QB("players who get to")
```

#### 1462. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16194` → after: `L16194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16194) · [Before (L16194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16194)

```diff
-             UT.from
+             jB.from
```

#### 1463. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16197` → after: `L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16197) · [Before (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16197)

```diff
-             WT("don't")
+             QB("don't")
```

#### 1464. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16200` → after: `L16200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16200) · [Before (L16200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16200)

```diff
-             zT
+             nB
```

#### 1465. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16202` → after: `L16202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16202) · [Before (L16202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16202)

```diff
-           `,HT]}}var gT,nT;const kT=TT.isFew?(0,pg.n)(MT):`
+           `,uB]}}var IB,NB;const UB=BB.isFew?(0,kI.i)(dB):`
```

#### 1466. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16204` → after: `L16204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16204) · [Before (L16204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16204)

```diff
-             Math.round(MT / UT.fromPlayers * 100)
+             Math.round(dB / jB.fromPlayers * 100)
```

#### 1467. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16207` → after: `L16207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16207) · [Before (L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16207)

```diff
-             (0, pg.n)(UT.fromPlayers)
+             (0, kI.i)(jB.fromPlayers)
```

#### 1468. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16210` → after: `L16210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16210) · [Before (L16210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16210)

```diff
-             (0, pg.n)(UT.reached)
+             (0, kI.i)(jB.reached)
```

#### 1469. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16213` → after: `L16213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16213) · [Before (L16213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16213)

```diff
-             WT("players")
+             QB("players")
```

#### 1470. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16215` → after: `L16215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16215) · [Before (L16215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16215)

```diff
-               kT
+               UB
```

#### 1471. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16218-L16219` → after: `L16218-L16219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16218-L16219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16218-L16219) · [Before (L16218-L16219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16218-L16219)

```diff
-               WT("get no further")
-             }) `,HT]}}))}}const Xe=10,Ie=.25,Qe=.9,se=20,Fe=.15,Pe=5,Ve=/\b(?:checkpoint|wave|island|zone|level|stage|round|floor|room|chapter|world|step|part)s?\b/i,ue=3,Ce=3,re=2,Ke=5,Se=new Set(["player","players","other","start","started","middle","minutes","seconds","count", … [truncated]
+               QB("get no further")
+             }) `,uB]}}))}}const VM=10,hM=.25,XM=.9,ZM=20,AM=.15,TM=5,PM=/\b(?:checkpoint|wave|island|zone|level|stage|round|floor|room|chapter|world|step|part)s?\b/i,WM=3,eM=3,lM=2,wM=5,xM=new Set(["player","players","other","start","started","middle","minutes","seconds","count", … [truncated]
```

#### 1472. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16221` → after: `L16221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16221) · [Before (L16221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16221)

```diff
-             TT.eventType
+             BB.eventType
```

#### 1473. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16224` → after: `L16224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16224) · [Before (L16224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16224)

```diff
-             mT
+             zB
```

#### 1474. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16226` → after: `L16226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16226) · [Before (L16226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16226)

```diff
-           `))})))return null;const UT=Object.fromEntries(TT.values.map((TT=>{let{value:UT,players:mT}=TT;return[UT,mT]}))),mT=LZ({[TT.gameCategory]:{[TT.eventType]:UT}},Pe)[0];if(void 0===mT)return null;const WT=mT.steps.filter((TT=>TT.from.players>=Pe&&1-TT.share>Fe)).sort(((TT, … [truncated]
+           `))})))return null;const jB=Object.fromEntries(BB.values.map((BB=>{let{value:jB,players:zB}=BB;return[jB,zB]}))),zB=Jm({[BB.gameCategory]:{[BB.eventType]:jB}},TM)[0];if(void 0===zB)return null;const QB=zB.steps.filter((BB=>BB.from.players>=TM&&1-BB.share>AM)).sort(((BB, … [truncated]
```

#### 1475. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16228` → after: `L16228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16228) · [Before (L16228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16228)

```diff
-             ZT
+             mB
```

#### 1476. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16230` → after: `L16230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16230) · [Before (L16230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16230)

```diff
-             cT
+             yB
```

#### 1477. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16232` → after: `L16232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16232) · [Before (L16232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16232)

```diff
-           `);var ZT,cT;const vT="numbers"===jT.kind?"eventValues":"spot"===jT.kind?"heatmap":"playersPerEvent";return[{name:BT,eventType:UT.eventType,players:nT,names:Ee(UT.eventType,UT.values.map((TT=>{let{value:UT}=TT;return UT}))),valueKeys:UT.values.flatMap((TT=>{let{value:UT … [truncated]
+           `);var mB,yB;const kB="numbers"===aB.kind?"eventValues":"spot"===aB.kind?"heatmap":"playersPerEvent";return[{name:JB,eventType:jB.eventType,players:NB,names:cM(jB.eventType,jB.values.map((BB=>{let{value:jB}=BB;return jB}))),valueKeys:jB.values.flatMap((BB=>{let{value:jB … [truncated]
```

#### 1478. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16234` → after: `L16234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16234) · [Before (L16234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16234)

```diff
-             (0, pg.B)(UT)
+             (0, kI.F)(jB)
```

#### 1479. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16236` → after: `L16236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16236) · [Before (L16236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16236)

```diff
-           `;return TT.names.some((TT=>{const UT=(0,pg.B)(TT);return""!==UT&&(mT.includes(`
+           `;return BB.names.some((BB=>{const jB=(0,kI.F)(BB);return""!==jB&&(zB.includes(`
```

#### 1480. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16238` → after: `L16238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16238) · [Before (L16238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16238)

```diff
-             UT
+             jB
```

#### 1481. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16242` → after: `L16242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16242) · [Before (L16242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16242)

```diff
-             UT
+             jB
```

#### 1482. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16246` → after: `L16246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16246) · [Before (L16246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16246)

```diff
-             UT
+             jB
```

#### 1483. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16248` → after: `L16248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16248) · [Before (L16248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16248)

```diff
-           es `))}))}function Ae(TT,UT){const mT=TT.valueKeys.length<=UT.valueKeys.length?TT:UT,WT=new Set(mT===TT?UT.valueKeys:TT.valueKeys),zT=mT.valueKeys.filter((TT=>WT.has(TT))).length;return zT>0&&2*zT>=mT.valueKeys.length}function Re(TT,UT,mT){const WT="young"===UT,zT={stat … [truncated]
+           es `))}))}function OM(BB,jB){const zB=BB.valueKeys.length<=jB.valueKeys.length?BB:jB,QB=new Set(zB===BB?jB.valueKeys:BB.valueKeys),nB=zB.valueKeys.filter((BB=>QB.has(BB))).length;return nB>0&&2*nB>=zB.valueKeys.length}function BE(BB,jB,zB){const QB="young"===jB,nB={stat … [truncated]
```

#### 1484. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16250` → after: `L16250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16250) · [Before (L16250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16250)

```diff
-             TY(TT, WT, MT, mT)
+             jE(BB, QB, dB, zB)
```

#### 1485. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16254` → after: `L16254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16254) · [Before (L16254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16254)

```diff
-             (0, pg.n)(zT.players)
+             (0, kI.i)(nB.players)
```

#### 1486. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16257` → after: `L16257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16257) · [Before (L16257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16257)

```diff
-             WT("players so far")
+             QB("players so far")
```

#### 1487. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16261` → after: `L16261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16261) · [Before (L16261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16261)

```diff
-             (0, pg.n)(zT.players)
+             (0, kI.i)(nB.players)
```

#### 1488. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16264` → after: `L16264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16264) · [Before (L16264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16264)

```diff
-             WT("players sent it")
+             QB("players sent it")
```

#### 1489. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16267` → after: `L16267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16267) · [Before (L16267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16267)

```diff
-             mT
+             zB
```

#### 1490. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16271` → after: `L16271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16271) · [Before (L16271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16271)

```diff
-             zT
+             nB
```

#### 1491. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16273` → after: `L16273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16273) · [Before (L16273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16273)

```diff
-             (0, pg.n)(MT)
+             (0, kI.i)(dB)
```

#### 1492. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16276` → after: `L16276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16276) · [Before (L16276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16276)

```diff
-             0 === mT || UT ? ` ${WT("players")}` : ""
+             0 === zB || jB ? ` ${QB("players")}` : ""
```

#### 1493. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16280` → after: `L16280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16280) · [Before (L16280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16280)

```diff
-             TT.join(", ")
+             BB.join(", ")
```

#### 1494. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16283` → after: `L16283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16283) · [Before (L16283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16283)

```diff
-             zT.hasMore ? ", \u2026" : ""
+             nB.hasMore ? ", \u2026" : ""
```

#### 1495. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16287` → after: `L16287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16287) · [Before (L16287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16287)

```diff
-             MT
+             dB
```

#### 1496. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16289` → after: `L16289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16289) · [Before (L16289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16289)

```diff
-             mT
+             zB
```

#### 1497. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16292` → after: `L16292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16292) · [Before (L16292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16292)

```diff
-             MT
+             dB
```

#### 1498. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16294` → after: `L16294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16294) · [Before (L16294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16294)

```diff
-               mT
+               zB
```

#### 1499. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16297` → after: `L16297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16297) · [Before (L16297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16297)

```diff
-               zT.isFirstAndLast ? "" : `, ${WT("most first")}`
+               nB.isFirstAndLast ? "" : `, ${QB("most first")}`
```

#### 1500. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16300` → after: `L16300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16300) · [Before (L16300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16300)

```diff
-             zT.to
+             nB.to
```

#### 1501. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16303` → after: `L16303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16303) · [Before (L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16303)

```diff
-             WT("or later")
+             QB("or later")
```

#### 1502. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16307` → after: `L16307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16307) · [Before (L16307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16307)

```diff
-             (0, pg.n)(zT.fromPlayers)
+             (0, kI.i)(nB.fromPlayers)
```

#### 1503. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16310` → after: `L16310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16310) · [Before (L16310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16310)

```diff
-             WT("players got to")
+             QB("players got to")
```

#### 1504. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16313` → after: `L16313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16313) · [Before (L16313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16313)

```diff
-             zT.from
+             nB.from
```

#### 1505. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16315` → after: `L16315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16315) · [Before (L16315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16315)

```diff
-             WT("only")
+             QB("only")
```

#### 1506. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16318` → after: `L16318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16318) · [Before (L16318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16318)

```diff
-             (0, pg.n)(zT.reached)
+             (0, kI.i)(nB.reached)
```

#### 1507. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16321` → after: `L16321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16321) · [Before (L16321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16321)

```diff
-             WT("got to")
+             QB("got to")
```

#### 1508. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16324` → after: `L16324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16324) · [Before (L16324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16324)

```diff
-             TT
+             BB
```

#### 1509. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16326` → after: `L16326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16326) · [Before (L16326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16326)

```diff
-             mT
+             zB
```

#### 1510. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16329` → after: `L16329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16329) · [Before (L16329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16329)

```diff
-             zT.from
+             nB.from
```

#### 1511. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16332` → after: `L16332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16332) · [Before (L16332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16332)

```diff
-             TT
+             BB
```

#### 1512. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16335` → after: `L16335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16335) · [Before (L16335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16335)

```diff
-             WT("loses the most")
+             QB("loses the most")
```

#### 1513. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16337` → after: `L16337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16337) · [Before (L16337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16337)

```diff
-             (0, pg.n)(zT.fromPlayers)
+             (0, kI.i)(nB.fromPlayers)
```

#### 1514. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16340` → after: `L16340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16340) · [Before (L16340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16340)

```diff
-             (0, pg.n)(zT.reached)
+             (0, kI.i)(nB.reached)
```

#### 1515. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16343` → after: `L16343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16343) · [Before (L16343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16343)

```diff
-             WT("players")
+             QB("players")
```

#### 1516. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16345` → after: `L16345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16345) · [Before (L16345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16345)

```diff
-             mT
+             zB
```

#### 1517. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16347` → after: `L16347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16347) · [Before (L16347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16347)

```diff
-             WT("few players")
+             QB("few players")
```

#### 1518. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16351` → after: `L16351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16351) · [Before (L16351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16351)

```diff
-             WT("the usual number is about")
+             QB("the usual number is about")
```

#### 1519. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16354` → after: `L16354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16354) · [Before (L16354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16354)

```diff
-             JM(zT.median)
+             Hd(nB.median)
```

#### 1520. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16356` → after: `L16356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16356) · [Before (L16356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16356)

```diff
-             WT("this week")
+             QB("this week")
```

#### 1521. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16359` → after: `L16359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16359) · [Before (L16359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16359)

```diff
-             WT("the middle number this week is")
+             QB("the middle number this week is")
```

#### 1522. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16362` → after: `L16362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16362) · [Before (L16362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16362)

```diff
-             JM(zT.median)
+             Hd(nB.median)
```

#### 1523. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16364` → after: `L16364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16364) · [Before (L16364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16364)

```diff
-             WT("and half are between")
+             QB("and half are between")
```

#### 1524. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16367` → after: `L16367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16367) · [Before (L16367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16367)

```diff
-             JM(zT.p25)
+             Hd(nB.p25)
```

#### 1525. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16370` → after: `L16370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16370) · [Before (L16370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16370)

```diff
-             WT("and")
+             QB("and")
```

#### 1526. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16373` → after: `L16373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16373) · [Before (L16373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16373)

```diff
-             JM(zT.p75)
+             Hd(nB.p75)
```

#### 1527. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16375` → after: `L16375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16375) · [Before (L16375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16375)

```diff
-               (0, pg.n)(zT.players)
+               (0, kI.i)(nB.players)
```

#### 1528. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16378` → after: `L16378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16378) · [Before (L16378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16378)

```diff
-               WT("players")
+               QB("players")
```

#### 1529. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16381` → after: `L16381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16381) · [Before (L16381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16381)

```diff
-               TT
+               BB
```

#### 1530. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16384` → after: `L16384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16384) · [Before (L16384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16384)

```diff
-             2 * zT.count > zT.total ? WT("most happen near") : WT("lots happen near")
+             2 * nB.count > nB.total ? QB("most happen near") : QB("lots happen near")
```

#### 1531. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16387` → after: `L16387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16387) · [Before (L16387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16387)

```diff
-             zT.x + TT
+             nB.x + BB
```

#### 1532. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16389` → after: `L16389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16389) · [Before (L16389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16389)

```diff
-             zT.z + TT
+             nB.z + BB
```

#### 1533. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16391` → after: `L16391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16391) · [Before (L16391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16391)

```diff
-             WT("this week")
+             QB("this week")
```

#### 1534. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16394-L16397` → after: `L16394-L16397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16394-L16397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16394-L16397) · [Before (L16394-L16397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16394-L16397)

```diff
-             function(TT, UT) {
-               const mT = UT > 0 ? Math.round(TT / UT * 100) : 0;
-               return String(TT > 0 ? Math.max(1, mT) : 0)
-             }(zT.count, zT.total)
+             function(BB, jB) {
+               const zB = jB > 0 ? Math.round(BB / jB * 100) : 0;
+               return String(BB > 0 ? Math.max(1, zB) : 0)
+             }(nB.count, nB.total)
```

#### 1535. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16400` → after: `L16400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16400) · [Before (L16400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16400)

```diff
-             WT("of every 100 in the past week happened at")
+             QB("of every 100 in the past week happened at")
```

#### 1536. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16403` → after: `L16403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16403) · [Before (L16403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16403)

```diff
-             zT.x
+             nB.x
```

#### 1537. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16406` → after: `L16406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16406) · [Before (L16406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16406)

```diff
-             WT("to")
+             QB("to")
```

#### 1538. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16409` → after: `L16409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16409) · [Before (L16409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16409)

```diff
-             zT.x + TT
+             nB.x + BB
```

#### 1539. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16411` → after: `L16411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16411) · [Before (L16411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16411)

```diff
-             zT.z
+             nB.z
```

#### 1540. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16414` → after: `L16414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16414) · [Before (L16414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16414)

```diff
-             WT("to")
+             QB("to")
```

#### 1541. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16417` → after: `L16417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16417) · [Before (L16417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16417)

```diff
-             zT.z + TT
+             nB.z + BB
```

#### 1542. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16419` → after: `L16419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16419) · [Before (L16419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16419)

```diff
-           `}}}mT(6559);const UY=new Map([["tick",["ms"]],["onPlayerJoin",["playerId","fromGameReset"]],["onPlayerLeave",["playerId","serverIsShuttingDown"]],["onPlayerJump",["playerId"]],["onRespawnRequest",["playerId"]],["playerCommand",["playerId","command"]],["onPlayerChat",[" … [truncated]
+           `}}}zB(6436);const zE=new Map([["tick",["ms"]],["onPlayerJoin",["playerId","fromGameReset"]],["onPlayerLeave",["playerId","serverIsShuttingDown"]],["onPlayerJump",["playerId"]],["onRespawnRequest",["playerId"]],["playerCommand",["playerId","command"]],["onPlayerChat",[" … [truncated]
```

#### 1543. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16421` → after: `L16421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16421) · [Before (L16421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16421)

```diff
-             UT
+             jB
```

#### 1544. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16430` → after: `L16430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16430) · [Before (L16430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16430)

```diff
-   nT = [...new Set([...pB, ...MT.filter((TT => WY.attacker.test(TT) || WY.victim.test(TT))), ...Object.keys(mY), ...(null !== (WT = mT.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== WT ? WT : []).filter((TT => WY.attacker.test(TT) || WY.victim.test(TT)))])].filter(gT),
+   NB = [...new Set([...mJ, ...dB.filter((BB => nE.attacker.test(BB) || nE.victim.test(BB))), ...Object.keys(QE), ...(null !== (QB = zB.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== QB ? QB : []).filter((BB => nE.attacker.test(BB) || nE.victim.test(BB)))])].filter(IB),
```

#### 1545. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16439` → after: `L16439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/106.js#L16439) · [Before (L16439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/106.js#L16439)

```diff
-       return (0, Bg.e)(TT, new RegExp(`${UT.replace(/\$/g,"\\$")}(?![\\w$])`, "g"), Bg.n).every((mT => !/^\s*(?:\?\.|[.[])/.test(TT.slice(mT.index + UT.length))))
+       return (0, GI.h)(BB, new RegExp(`${jB.replace(/\$/g,"\\$")}(?![\\w$])`, "g"), GI.m).every((zB => !/^\s*(?:\?\.|[.[])/.test(BB.slice(zB.index + jB.length))))
```
