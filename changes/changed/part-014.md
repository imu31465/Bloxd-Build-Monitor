# Changed — Bundle Modifications Report (Part 014 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `14 / 142` (**381** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/106.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/106.js` (2783 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e)

#### 1098. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14268` → after: `L14268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14268) · [Before (L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14268)

```diff
-         const nH = /\b(?:die|dies|died|dying|death|deaths|dead|killed|zombies?|falls?|fell|falling|void|lava|danger(?:ous)?|explosions?|traps?|hazards?|respawn(?:s|ing)?)\b/i, FH = /\b(?:checkpoints?|(?:re)?spawns?(?:\s+(?:points?|pads?|areas?|locations?|positions?))?|safe\s+(?:z … [truncated]
+         const Sq = /\b(?:die|dies|died|dying|death|deaths|dead|killed|zombies?|falls?|fell|falling|void|lava|danger(?:ous)?|explosions?|traps?|hazards?|respawn(?:s|ing)?)\b/i, Gq = /\b(?:checkpoints?|(?:re)?spawns?(?:\s+(?:points?|pads?|areas?|locations?|positions?))?|safe\s+(?:z … [truncated]
```

#### 1099. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14270-L14277` → after: `L14270-L14277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14270-L14277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14270-L14277) · [Before (L14270-L14277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14270-L14277)

```diff
-         function KH(pp) {
-           const ip = [];
-           for (const op of pp.matchAll(rH)) ip.push({
-             x: Number(op[1]),
-             z: Number(op[2]),
-             start: op.index,
-             end: op.index + op[0].length,
-             isRange: /\bto\b|\d\s*-\s*\d/.test(op[0])
+         function Rq(TT) {
+           const UT = [];
+           for (const zT of TT.matchAll(hq)) UT.push({
+             x: Number(zT[1]),
+             z: Number(zT[2]),
+             start: zT.index,
+             end: zT.index + zT[0].length,
+             isRange: /\bto\b|\d\s*-\s*\d/.test(zT[0])
```

#### 1100. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14279-L14288` → after: `L14279-L14288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14279-L14288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14279-L14288) · [Before (L14279-L14288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14279-L14288)

```diff
-           for (const op of pp.matchAll(ZH)) {
-             var cp, Op;
-             const pp = null !== (cp = op[1]) && void 0 !== cp ? cp : op[3],
-               Ip = null !== (Op = op[2]) && void 0 !== Op ? Op : op[4],
-               Sp = op.index + op[0].search(/[(\-\d]/);
-             ip.some((pp => Sp < pp.end && op.index + op[0].length > pp.start)) || ip.push({
-               x: Number(pp),
-               z: Number(Ip),
-               start: Sp,
-               end: op.index + op[0].length,
+           for (const zT of TT.matchAll(Dq)) {
+             var mT, WT;
+             const TT = null !== (mT = zT[1]) && void 0 !== mT ? mT : zT[3],
+               MT = null !== (WT = zT[2]) && void 0 !== WT ? WT : zT[4],
+               gT = zT.index + zT[0].search(/[(\-\d]/);
+             UT.some((TT => gT < TT.end && zT.index + zT[0].length > TT.start)) || UT.push({
+               x: Number(TT),
+               z: Number(MT),
+               start: gT,
+               end: zT.index + zT[0].length,
```

#### 1101. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14292` → after: `L14292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14292) · [Before (L14292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14292)

```diff
-           return ip.sort(((pp, ip) => pp.start - ip.start))
+           return UT.sort(((TT, UT) => TT.start - UT.start))
```

#### 1102. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14295-L14296` → after: `L14295-L14296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14295-L14296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14295-L14296) · [Before (L14295-L14296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14295-L14296)

```diff
-         function VH(pp, ip, cp) {
-           return pp >= cp.x && pp < cp.x + Mw && ip >= cp.z && ip < cp.z + Mw
+         function Ti(TT, UT, mT) {
+           return TT >= mT.x && TT < mT.x + wc && UT >= mT.z && UT < mT.z + wc
```

#### 1103. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14299-L14300` → after: `L14299-L14300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14299-L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14299-L14300) · [Before (L14299-L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14299-L14300)

```diff
-         function pd(pp) {
-           return new Set(pp.toLowerCase().split(/[^a-z\d]+/).filter((pp => "" !== pp)).map(aH))
+         function Ui(TT) {
+           return new Set(TT.toLowerCase().split(/[^a-z\d]+/).filter((TT => "" !== TT)).map(Kq))
```

#### 1104. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14303-L14304` → after: `L14303-L14304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14303-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14303-L14304) · [Before (L14303-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14303-L14304)

```diff
-         function cd(pp, ip) {
-           return ip.words.some((ip => ip.length >= 3 && !gH.has(ip) && pp.has(ip)))
+         function mi(TT, UT) {
+           return UT.words.some((UT => UT.length >= 3 && !Nq.has(UT) && TT.has(UT)))
```

#### 1105. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14307-L14309` → after: `L14307-L14309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14307-L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14307-L14309) · [Before (L14307-L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14307-L14309)

```diff
-         function Od(pp, ip) {
-           const cp = new Set(ip.flatMap((ip => "" !== ip.category && pp.has(aH(ip.category)) ? [ip.category] : [])));
-           return 1 === cp.size ? [...cp][0] : null
+         function Wi(TT, UT) {
+           const mT = new Set(UT.flatMap((UT => "" !== UT.category && TT.has(Kq(UT.category)) ? [UT.category] : [])));
+           return 1 === mT.size ? [...mT][0] : null
```

#### 1106. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14312-L14314` → after: `L14312-L14314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14312-L14314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14312-L14314) · [Before (L14312-L14314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14312-L14314)

```diff
-         function od(pp) {
-           const ip = "" === pp.category ? "" : ` in ${pp.category}`;
-           return null === pp.event ? `players spend time${ip}` : `\`${pp.event}\` events${ip} happen`
+         function zi(TT) {
+           const UT = "" === TT.category ? "" : ` in ${TT.category}`;
+           return null === TT.event ? `players spend time${UT}` : `\`${TT.event}\` events${UT} happen`
```

#### 1107. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14317-L14318` → after: `L14317-L14318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14317-L14318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14317-L14318) · [Before (L14317-L14318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14317-L14318)

```diff
-         function Id(pp) {
-           return `x ${pp.x} to ${pp.x+Mw-1}, z ${pp.z} to ${pp.z+Mw-1}`
+         function Mi(TT) {
+           return `x ${TT.x} to ${TT.x+wc-1}, z ${TT.z} to ${TT.z+wc-1}`
```

#### 1108. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14320` → after: `L14320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14320) · [Before (L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14320)

```diff
-         const Sd = 4e3;
+         const gi = 4e3;
```

#### 1109. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14322-L14330` → after: `L14322-L14330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14322-L14330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14322-L14330) · [Before (L14322-L14330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14322-L14330)

```diff
-         function xd(pp) {
-           const ip = [];
-           let cp = 0;
-           for (const Op of pp.matchAll(/[.!?](?=\s+[A-Z*_`[]|\s*$)/g)) {
-             const op = Op.index + 1;
-             ip.push({
-               sentence: pp.slice(cp, op),
-               start: cp
-             }), cp = op
+         function ni(TT) {
+           const UT = [];
+           let mT = 0;
+           for (const WT of TT.matchAll(/[.!?](?=\s+[A-Z*_`[]|\s*$)/g)) {
+             const zT = WT.index + 1;
+             UT.push({
+               sentence: TT.slice(mT, zT),
+               start: mT
+             }), mT = zT
```

#### 1110. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14332-L14335` → after: `L14332-L14335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14332-L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14332-L14335) · [Before (L14332-L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14332-L14335)

```diff
-           return cp < pp.length && ip.push({
-             sentence: pp.slice(cp),
-             start: cp
-           }), ip
+           return mT < TT.length && UT.push({
+             sentence: TT.slice(mT),
+             start: mT
+           }), UT
```

#### 1111. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14338-L14341` → after: `L14338-L14341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14338-L14341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14338-L14341) · [Before (L14338-L14341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14338-L14341)

```diff
-         function Ld(pp, ip, cp) {
-           if (pp.length > Sd || 0 === ip.length) return [];
-           const Op = [...pp.matchAll(/`[^`\n]*`/g)].map((pp => [pp.index, pp.index + pp[0].length])),
-             op = [];
+         function Hi(TT, UT, mT) {
+           if (TT.length > gi || 0 === UT.length) return [];
+           const WT = [...TT.matchAll(/`[^`\n]*`/g)].map((TT => [TT.index, TT.index + TT[0].length])),
+             zT = [];
```

#### 1112. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14343-L14344` → after: `L14343-L14344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14343-L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14343-L14344) · [Before (L14343-L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14343-L14344)

```diff
-               sentence: Ip,
-               start: Sp
+               sentence: MT,
+               start: gT
```

#### 1113. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14346-L14357` → after: `L14346-L14357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14346-L14357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14346-L14357) · [Before (L14346-L14357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14346-L14357)

```diff
-             of xd(pp)) {
-             const pp = KH(Ip);
-             if (0 === pp.length) continue;
-             const xp = pd(Ip.replace(/\[\[[^\]\n]*\]\]/g, " ")),
-               Lp = nH.test(Ip),
-               Yp = Od(xp, ip),
-               Dp = Sp + Ip.replace(/[\s*_]+$/, "").length;
-             for (const Ap of pp) {
-               const pp = Sp + Ap.start;
-               if (Op.some((ip => {
-                   let [cp, Op] = ip;
-                   return pp >= cp && pp < Op
+             of ni(TT)) {
+             const TT = Rq(MT);
+             if (0 === TT.length) continue;
+             const nT = Ui(MT.replace(/\[\[[^\]\n]*\]\]/g, " ")),
+               HT = Sq.test(MT),
+               kT = Wi(nT, UT),
+               jT = gT + MT.replace(/[\s*_]+$/, "").length;
+             for (const lT of TT) {
+               const TT = gT + lT.start;
+               if (WT.some((UT => {
+                   let [mT, WT] = UT;
+                   return TT >= mT && TT < WT
```

#### 1114. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14359-L14364` → after: `L14359-L14364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14359-L14364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14359-L14364) · [Before (L14359-L14364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14359-L14364)

```diff
-               const Pp = Dd(Ap, xp, Lp && !Yd(Ip.slice(0, Ap.start)), Yp, ip, cp);
-               null !== Pp && op.push({
-                 claim: Pp,
-                 start: pp,
-                 end: Sp + Ap.end,
-                 at: Dp
+               const LT = ji(lT, nT, HT && !ki(MT.slice(0, lT.start)), kT, UT, mT);
+               null !== LT && zT.push({
+                 claim: LT,
+                 start: TT,
+                 end: gT + lT.end,
+                 at: jT
```

#### 1115. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14368` → after: `L14368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14368) · [Before (L14368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14368)

```diff
-           return op
+           return zT
```

#### 1116. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14371-L14373` → after: `L14371-L14373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14371-L14373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14371-L14373) · [Before (L14371-L14373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14371-L14373)

```diff
-         function Yd(pp) {
-           const ip = FH.exec(pp);
-           return null !== ip && !nH.test(ip[0].replace(/^\S+/, ""))
+         function ki(TT) {
+           const UT = Gq.exec(TT);
+           return null !== UT && !Sq.test(UT[0].replace(/^\S+/, ""))
```

#### 1117. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14376` → after: `L14376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14376) · [Before (L14376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14376)

```diff
-         function Dd(pp, ip, cp, Op, op, Ip) {
+         function ji(TT, UT, mT, WT, zT, MT) {
```

#### 1118. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14378-L14385` → after: `L14378-L14385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14378-L14385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14378-L14385) · [Before (L14378-L14385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14378-L14385)

```diff
-             x: Sp,
-             z: xp
-           } = pp, Lp = function(pp, ip, cp) {
-             return cp.flatMap((cp => {
-               const Op = cp.spots.find((cp => VH(pp, ip, cp)));
-               return void 0 === Op ? [] : [{
-                 layer: cp,
-                 share: Op.share
+             x: gT,
+             z: nT
+           } = TT, HT = function(TT, UT, mT) {
+             return mT.flatMap((mT => {
+               const WT = mT.spots.find((mT => Ti(TT, UT, mT)));
+               return void 0 === WT ? [] : [{
+                 layer: mT,
+                 share: WT.share
```

#### 1119. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14387-L14389` → after: `L14387-L14389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14387-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14387-L14389) · [Before (L14387-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14387-L14389)

```diff
-             })).sort(((pp, ip) => ip.share - pp.share))
-           }(Sp, xp, op);
-           if (0 === Lp.length) return null === Ip || NH(Sp, xp, Ip) ? null : {
+             })).sort(((TT, UT) => UT.share - TT.share))
+           }(gT, nT, zT);
+           if (0 === HT.length) return null === MT || Pq(gT, nT, MT) ? null : {
```

#### 1120. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14392` → after: `L14392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14392) · [Before (L14392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14392)

```diff
-           const Yp = Lp.filter((pp => {
+           const kT = HT.filter((TT => {
```

#### 1121. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14394-L14396` → after: `L14394-L14396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14394-L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14394-L14396) · [Before (L14394-L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14394-L14396)

```diff
-               layer: ip
-             } = pp;
-             return !ip.isLoggingOnly
+               layer: UT
+             } = TT;
+             return !UT.isLoggingOnly
```

#### 1122. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14398` → after: `L14398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14398) · [Before (L14398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14398)

```diff
-           if (0 === Yp.length) return {
+           if (0 === kT.length) return {
```

#### 1123. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14400` → after: `L14400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14400) · [Before (L14400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14400)

```diff
-             event: Lp[0].layer.event
+             event: HT[0].layer.event
```

#### 1124. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14402-L14403` → after: `L14402-L14403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14402-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14402-L14403) · [Before (L14402-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14402-L14403)

```diff
-           if (!cp) return null;
-           if (Yp.some((pp => {
+           if (!mT) return null;
+           if (kT.some((TT => {
```

#### 1125. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14405-L14407` → after: `L14405-L14407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14405-L14407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14405-L14407) · [Before (L14405-L14407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14405-L14407)

```diff
-                 layer: cp
-               } = pp;
-               return null !== cp.event && cd(ip, cp)
+                 layer: mT
+               } = TT;
+               return null !== mT.event && mi(UT, mT)
```

#### 1126. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14409-L14412` → after: `L14409-L14412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14409-L14412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14409-L14412) · [Before (L14409-L14412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14409-L14412)

```diff
-           const Dp = op.filter((pp => pp.isDeath && !pp.isLoggingOnly)),
-             Ap = Dp.filter((pp => cd(ip, pp))),
-             Pp = Ap.length > 0 ? Ap : Dp;
-           if (Yp.some((pp => {
+           const jT = zT.filter((TT => TT.isDeath && !TT.isLoggingOnly)),
+             lT = jT.filter((TT => mi(UT, TT))),
+             LT = lT.length > 0 ? lT : jT;
+           if (kT.some((TT => {
```

#### 1127. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14414-L14416` → after: `L14414-L14416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14414-L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14414-L14416) · [Before (L14414-L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14414-L14416)

```diff
-                 layer: ip
-               } = pp;
-               return Pp.includes(ip)
+                 layer: UT
+               } = TT;
+               return LT.includes(UT)
```

#### 1128. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14418-L14421` → after: `L14418-L14421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14418-L14421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14418-L14421) · [Before (L14418-L14421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14418-L14421)

```diff
-           const Wp = Yp[0].layer,
-             yp = (pp, ip) => null === ip ? [] : pp.filter((pp => pp.category === ip)),
-             Up = [yp(Pp, Op), yp(Pp, Wp.category), Pp].find((pp => pp.length > 0)),
-             wp = void 0 === Up ? null : Up.reduce(((pp, ip) => ip.total > pp.total ? ip : pp));
+           const pT = kT[0].layer,
+             BT = (TT, UT) => null === UT ? [] : TT.filter((TT => TT.category === UT)),
+             ZT = [BT(LT, WT), BT(LT, pT.category), LT].find((TT => TT.length > 0)),
+             cT = void 0 === ZT ? null : ZT.reduce(((TT, UT) => UT.total > TT.total ? UT : TT));
```

#### 1129. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14424-L14428` → after: `L14424-L14428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14424-L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14424-L14428) · [Before (L14424-L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14424-L14428)

```diff
-             other: od(Wp),
-             subject: null === wp ? null : {
-               event: wp.event,
-               category: wp.category,
-               text: (vp = wp.spots[0], tp = pp.isRange, tp ? Id(vp) : `x ${vp.x}, z ${vp.z}`),
+             other: zi(pT),
+             subject: null === cT ? null : {
+               event: cT.event,
+               category: cT.category,
+               text: (vT = cT.spots[0], fT = TT.isRange, fT ? Mi(vT) : `x ${vT.x}, z ${vT.z}`),
```

#### 1130. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14430-L14431` → after: `L14430-L14431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14430-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14430-L14431) · [Before (L14430-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14430-L14431)

```diff
-                 x: wp.spots[0].x,
-                 z: wp.spots[0].z
+                 x: cT.spots[0].x,
+                 z: cT.spots[0].z
```

#### 1131. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14435` → after: `L14435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14435) · [Before (L14435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14435)

```diff
-           var vp, tp
+           var vT, fT
```

#### 1132. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14438-L14441` → after: `L14438-L14441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14438-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14438-L14441) · [Before (L14438-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14438-L14441)

```diff
-         function Ad(pp) {
-           var ip, cp, Op;
-           const op = null === (ip = /\bbetween\s+[^.!?]*\d\)?(\s+and\s+)$/i.exec(pp)) || void 0 === ip ? void 0 : ip[1];
-           return null !== (cp = null !== op && void 0 !== op ? op : null === (Op = /\s*(?:\(|\b(?:at|near|around|by|to|from|between)\s+(?:the\s+)?(?:(?:spot|place|position|coordinates|location|area)\s+)?)$/i.exec(pp)) || void 0 === Op ? void 0 : Op[0]) && void 0 !== cp ? cp : nul … [truncated]
+         function li(TT) {
+           var UT, mT, WT;
+           const zT = null === (UT = /\bbetween\s+[^.!?]*\d\)?(\s+and\s+)$/i.exec(TT)) || void 0 === UT ? void 0 : UT[1];
+           return null !== (mT = null !== zT && void 0 !== zT ? zT : null === (WT = /\s*(?:\(|\b(?:at|near|around|by|to|from|between)\s+(?:the\s+)?(?:(?:spot|place|position|coordinates|location|area)\s+)?)$/i.exec(TT)) || void 0 === WT ? void 0 : WT[0]) && void 0 !== mT ? mT : nul … [truncated]
```

#### 1133. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14444-L14446` → after: `L14444-L14446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14444-L14446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14444-L14446) · [Before (L14444-L14446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14444-L14446)

```diff
-         function Pd(pp, ip, cp, Op) {
-           if (0 === ip.length) return {
-             markdown: pp,
+         function Li(TT, UT, mT, WT) {
+           if (0 === UT.length) return {
+             markdown: TT,
```

#### 1134. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14449-L14459` → after: `L14449-L14459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14449-L14459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14449-L14459) · [Before (L14449-L14459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14449-L14459)

```diff
-           const op = [],
-             Ip = oH(pp, (pp => function(pp, ip, cp, Op, op) {
-               const Ip = Ld(pp, ip, cp);
-               if (0 === Ip.length) return pp;
-               let Sp = pp;
-               const xp = [],
-                 Lp = (pp, ip, cp) => {
-                   xp.push({
-                     start: pp,
-                     shift: cp.length - (ip - pp)
-                   }), Sp = Sp.slice(0, pp) + cp + Sp.slice(ip)
+           const zT = [],
+             MT = Mq(TT, (TT => function(TT, UT, mT, WT, zT) {
+               const MT = Hi(TT, UT, mT);
+               if (0 === MT.length) return TT;
+               let gT = TT;
+               const nT = [],
+                 HT = (TT, UT, mT) => {
+                   nT.push({
+                     start: TT,
+                     shift: mT.length - (UT - TT)
+                   }), gT = gT.slice(0, TT) + mT + gT.slice(UT)
```

#### 1135. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14461-L14462` → after: `L14461-L14462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14461-L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14461-L14462) · [Before (L14461-L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14461-L14462)

```diff
-               for (const Wp of [...Ip].reverse()) {
-                 var Yp, Dp, Ap;
+               for (const pT of [...MT].reverse()) {
+                 var kT, jT, lT;
```

#### 1136. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14464-L14469` → after: `L14464-L14469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14464-L14469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14464-L14469) · [Before (L14464-L14469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14464-L14469)

```diff
-                   claim: pp
-                 } = Wp, ip = Sp.slice(Wp.end), cp = null !== (Yp = null === (Dp = zH.exec(ip)) || void 0 === Dp ? void 0 : Dp[0]) && void 0 !== Yp ? Yp : "", Ip = sH.exec(ip.slice(cp.length)), yp = null !== (Ap = null === Ip || void 0 === Ip ? void 0 : Ip[0]) && void 0 !== Ap ? A … [truncated]
-                 if ("otherLayer" === pp.kind) {
-                   var Pp;
-                   if (null === pp.subject) continue;
-                   const ip = xp.reduce(((pp, ip) => {
+                   claim: TT
+                 } = pT, UT = gT.slice(pT.end), mT = null !== (kT = null === (jT = oq.exec(UT)) || void 0 === jT ? void 0 : jT[0]) && void 0 !== kT ? kT : "", MT = Aq.exec(UT.slice(mT.length)), BT = null !== (lT = null === MT || void 0 === MT ? void 0 : MT[0]) && void 0 !== lT ? l … [truncated]
+                 if ("otherLayer" === TT.kind) {
+                   var LT;
+                   if (null === TT.subject) continue;
+                   const UT = nT.reduce(((TT, UT) => {
```

#### 1137. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14471-L14495` → after: `L14471-L14495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14471-L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14471-L14495) · [Before (L14471-L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14471-L14495)

```diff
-                         start: cp,
-                         shift: Op
-                       } = ip;
-                       return cp < Wp.at ? pp + Op : pp
-                     }), Wp.at),
-                     cp = Sp.slice(0, ip),
-                     Op = cp.slice(0, Wp.start) + cp.slice(Wp.end + Up);
-                   if (/\d%\s+of\s+(?:all\s+|the\s+|their\s+)?(?:[\w-]+\s+)?(?:play ?time|time)\b/i.test(Op) || GH.test(Op)) continue;
-                   const Yp = "" === pp.subject.category ? "" : ` in ${pp.subject.category}`,
-                     Dp = void 0 !== (null === Ip || void 0 === Ip ? void 0 : Ip[3]),
-                     Ap = null === Ip ? "" : `${null!==(Pp=Ip[1])&&void 0!==Pp?Pp:""}${Dp?" (":", "}where the most \`${pp.subject.event}\` events${Yp} happen${Dp&&Ip[0].endsWith(")")?")":""}`,
-                     yp = null !== Ip && !Dp && /^\s+[a-z]/i.test(Sp.slice(Wp.end + Up)),
-                     wp = pp.subject.text + Ap + (yp ? "," : "");
-                   op.push({
-                     from: Sp.slice(Wp.start, Wp.end + Up),
-                     to: wp,
- ... (9 more removed lines; see GitHub link above)
+                         start: mT,
+                         shift: WT
+                       } = UT;
+                       return mT < pT.at ? TT + WT : TT
+                     }), pT.at),
+                     mT = gT.slice(0, UT),
+                     WT = mT.slice(0, pT.start) + mT.slice(pT.end + ZT);
+                   if (/\d%\s+of\s+(?:all\s+|the\s+|their\s+)?(?:[\w-]+\s+)?(?:play ?time|time)\b/i.test(WT) || Eq.test(WT)) continue;
+                   const kT = "" === TT.subject.category ? "" : ` in ${TT.subject.category}`,
+                     jT = void 0 !== (null === MT || void 0 === MT ? void 0 : MT[3]),
+                     lT = null === MT ? "" : `${null!==(LT=MT[1])&&void 0!==LT?LT:""}${jT?" (":", "}where the most \`${TT.subject.event}\` events${kT} happen${jT&&MT[0].endsWith(")")?")":""}`,
+                     BT = null !== MT && !jT && /^\s+[a-z]/i.test(gT.slice(pT.end + ZT)),
+                     cT = TT.subject.text + lT + (BT ? "," : "");
+                   zT.push({
+                     from: gT.slice(pT.start, pT.end + ZT),
+                     to: cT,
+ ... (9 more added lines; see GitHub link above)
```

#### 1138. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14498` → after: `L14498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14498) · [Before (L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14498)

```diff
-                   }), Lp(ip, Wp.end + Up + cp, "")
+                   }), HT(UT, pT.end + ZT + mT, "")
```

#### 1139. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14501-L14502` → after: `L14501-L14502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14501-L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14501-L14502) · [Before (L14501-L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14501-L14502)

```diff
-               return Sp
-             }(pp, ip, cp, Op, op)));
+               return gT
+             }(TT, UT, mT, WT, zT)));
```

#### 1140. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14504-L14505` → after: `L14504-L14505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14504-L14505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14504-L14505) · [Before (L14504-L14505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14504-L14505)

```diff
-             markdown: 0 === op.length ? pp : Ip,
-             repairs: op
+             markdown: 0 === zT.length ? TT : MT,
+             repairs: zT
```

#### 1141. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14508` → after: `L14508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14508) · [Before (L14508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14508)

```diff
-         const Wd = "\\d{1,3}(?:,\\d{3})+|\\d+", yd = new RegExp(`\\bof (${Wd}) players(?: \\([^)]*\\))? at (.+?), (${Wd}) reached (.+?)(?: or a later one)? \\(`, "g"), Ud = new RegExp(`^- (.+?) \u2192 (.+?): (${Wd}) of (${Wd}) players\\b`), wd = /\bsince logging began\b|\ball[- ] … [truncated]
+         const Bi = "\\d{1,3}(?:,\\d{3})+|\\d+", Zi = new RegExp(`\\bof (${Bi}) players(?: \\([^)]*\\))? at (.+?), (${Bi}) reached (.+?)(?: or a later one)? \\(`, "g"), ci = new RegExp(`^- (.+?) \u2192 (.+?): (${Bi}) of (${Bi}) players\\b`), vi = /\bsince logging began\b|\ball[- ] … [truncated]
```

#### 1142. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14510-L14511` → after: `L14510-L14511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14510-L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14510-L14511) · [Before (L14510-L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14510-L14511)

```diff
-         function Hd(pp) {
-           return Number(pp.replace(/,/g, ""))
+         function ii(TT) {
+           return Number(TT.replace(/,/g, ""))
```

#### 1143. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14514-L14515` → after: `L14514-L14515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14514-L14515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14514-L14515) · [Before (L14514-L14515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14514-L14515)

```diff
-         function dd(pp) {
-           return ML(pp).trim().toLowerCase()
+         function bi(TT) {
+           return dH(TT).trim().toLowerCase()
```

#### 1144. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14518-L14523` → after: `L14518-L14523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14518-L14523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14518-L14523) · [Before (L14518-L14523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14518-L14523)

```diff
-         function ed(pp, ip) {
-           var cp, Op, op, Ip, Sp;
-           const xp = null === (cp = pp[ip.event]) || void 0 === cp ? void 0 : cp.trim(),
-             Lp = -1 === ip.value ? "" : null !== (Op = null === (op = pp[ip.value]) || void 0 === op ? void 0 : op.trim()) && void 0 !== Op ? Op : "",
-             Yp = new RegExp(`^(${Wd})\\b`).exec(null !== (Ip = null === (Sp = pp[ip.players]) || void 0 === Sp ? void 0 : Sp.trim()) && void 0 !== Ip ? Ip : "");
-           return void 0 === xp || "" === xp || null === Yp ? null : [Hd(Yp[1]), "" === Lp ? xp : `${xp}: ${Lp}`]
+         function Oi(TT, UT) {
+           var mT, WT, zT, MT, gT;
+           const nT = null === (mT = TT[UT.event]) || void 0 === mT ? void 0 : mT.trim(),
+             HT = -1 === UT.value ? "" : null !== (WT = null === (zT = TT[UT.value]) || void 0 === zT ? void 0 : zT.trim()) && void 0 !== WT ? WT : "",
+             kT = new RegExp(`^(${Bi})\\b`).exec(null !== (MT = null === (gT = TT[UT.players]) || void 0 === gT ? void 0 : gT.trim()) && void 0 !== MT ? MT : "");
+           return void 0 === nT || "" === nT || null === kT ? null : [ii(kT[1]), "" === HT ? nT : `${nT}: ${HT}`]
```

#### 1145. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14526-L14533` → after: `L14526-L14533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14526-L14533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14526-L14533) · [Before (L14526-L14533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14526-L14533)

```diff
-         function ud(pp) {
-           const ip = new Map,
-             cp = new Map,
-             Op = new Set,
-             op = (pp, ip) => {
-               var Op;
-               const op = null !== (Op = cp.get(pp)) && void 0 !== Op ? Op : [];
-               op.includes(ip) || cp.set(pp, [...op, ip])
+         function ei(TT) {
+           const UT = new Map,
+             mT = new Map,
+             WT = new Set,
+             zT = (TT, UT) => {
+               var WT;
+               const zT = null !== (WT = mT.get(TT)) && void 0 !== WT ? WT : [];
+               zT.includes(UT) || mT.set(TT, [...zT, UT])
```

#### 1146. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14535-L14536` → after: `L14535-L14536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14535-L14536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14535-L14536) · [Before (L14535-L14536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14535-L14536)

```diff
-             Ip = pp => {
-               ip.set(`${dd(pp.from)} > ${dd(pp.to)}`, pp)
+             MT = TT => {
+               UT.set(`${bi(TT.from)} > ${bi(TT.to)}`, TT)
```

#### 1147. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14538-L14549` → after: `L14538-L14549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14538-L14549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14538-L14549) · [Before (L14538-L14549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14538-L14549)

```diff
-           let Sp = null;
-           for (const xp of pp.split(/\r?\n/)) {
-             for (const ip of (0, tS.f)(xp, td, tS.n)) Op.add(Number(ip[1]));
-             if (xp.startsWith("|")) {
-               const pp = xp.split("|"),
-                 ip = pp.findIndex((pp => wd.test(pp))),
-                 cp = pp.findIndex((pp => /^\s*event\s*$/i.test(pp)));
-               if (-1 !== ip && -1 !== cp) {
-                 Sp = {
-                   event: cp,
-                   value: pp.findIndex((pp => /^\s*value\s*$/i.test(pp))),
-                   players: ip
+           let gT = null;
+           for (const nT of TT.split(/\r?\n/)) {
+             for (const UT of (0, Bg.e)(nT, qi, Bg.o)) WT.add(Number(UT[1]));
+             if (nT.startsWith("|")) {
+               const TT = nT.split("|"),
+                 UT = TT.findIndex((TT => vi.test(TT))),
+                 mT = TT.findIndex((TT => /^\s*event\s*$/i.test(TT)));
+               if (-1 !== UT && -1 !== mT) {
+                 gT = {
+                   event: mT,
+                   value: TT.findIndex((TT => /^\s*value\s*$/i.test(TT))),
+                   players: UT
```

#### 1148. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14553-L14554` → after: `L14553-L14554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14553-L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14553-L14554) · [Before (L14553-L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14553-L14554)

```diff
-               const Op = null === Sp ? null : ed(pp, Sp);
-               null !== Op && op(...Op);
+               const WT = null === gT ? null : Oi(TT, gT);
+               null !== WT && zT(...WT);
```

#### 1149. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14557-L14563` → after: `L14557-L14563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14557-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14557-L14563) · [Before (L14557-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14557-L14563)

```diff
-             Sp = null;
-             const pp = Ud.exec(xp);
-             null !== pp && Ip({
-               from: pp[1],
-               to: pp[2],
-               fromPlayers: Hd(pp[4]),
-               toPlayers: Hd(pp[3])
+             gT = null;
+             const TT = ci.exec(nT);
+             null !== TT && MT({
+               from: TT[1],
+               to: TT[2],
+               fromPlayers: ii(TT[4]),
+               toPlayers: ii(TT[3])
```

#### 1150. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14565-L14569` → after: `L14565-L14569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14565-L14569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14565-L14569) · [Before (L14565-L14569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14565-L14569)

```diff
-             for (const ip of xp.matchAll(yd)) Ip({
-               from: ip[2],
-               to: ip[4],
-               fromPlayers: Hd(ip[1]),
-               toPlayers: Hd(ip[3])
+             for (const UT of nT.matchAll(Zi)) MT({
+               from: UT[2],
+               to: UT[4],
+               fromPlayers: ii(UT[1]),
+               toPlayers: ii(UT[3])
```

#### 1151. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14571-L14573` → after: `L14571-L14573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14571-L14573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14571-L14573) · [Before (L14571-L14573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14571-L14573)

```diff
-             for (const ip of (0, tS.s)(xp, /\s+(?=[A-Z])/g, (0, tS.p)(".;")))
-               if (wd.test(ip))
-                 for (const pp of ip.matchAll(vd)) op(Hd(pp[2]), pp[1].trim())
+             for (const UT of (0, Bg.v)(nT, /\s+(?=[A-Z])/g, (0, Bg.p)(".;")))
+               if (vi.test(UT))
+                 for (const TT of UT.matchAll(fi)) zT(ii(TT[2]), TT[1].trim())
```

#### 1152. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14576-L14578` → after: `L14576-L14578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14576-L14578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14576-L14578) · [Before (L14576-L14578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14576-L14578)

```diff
-             steps: [...ip.values()],
-             allTimeEvents: cp,
-             ratios: Op
+             steps: [...UT.values()],
+             allTimeEvents: mT,
+             ratios: WT
```

#### 1153. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14582-L14588` → after: `L14582-L14588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14582-L14588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14582-L14588) · [Before (L14582-L14588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14582-L14588)

```diff
-         function jd(pp) {
-           const ip = ML(pp).trim(),
-             cp = ip.lastIndexOf(": ");
-           if (cp <= 0) return [ip];
-           const Op = ip.slice(0, cp),
-             op = ip.slice(cp + 2);
-           return /^-?\d+$/.test(op) ? [ip, ...(0, vS.K)(Op, op)] : /[a-z]{3}/i.test(op) ? [ip, op] : [ip]
+         function Yi(TT) {
+           const UT = dH(TT).trim(),
+             mT = UT.lastIndexOf(": ");
+           if (mT <= 0) return [UT];
+           const WT = UT.slice(0, mT),
+             zT = UT.slice(mT + 2);
+           return /^-?\d+$/.test(zT) ? [UT, ...(0, pg.E)(WT, zT)] : /[a-z]{3}/i.test(zT) ? [UT, zT] : [UT]
```

#### 1154. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14591-L14592` → after: `L14591-L14592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14591-L14592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14591-L14592) · [Before (L14591-L14592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14591-L14592)

```diff
-         function kd(pp, ip) {
-           return jd(ip).some((ip => (0, tS.f)(pp, new RegExp(`\`?${(0,vS.E)(ip)}(?![\\w]|\\.\\d)`, "i"), (0, tS.k)("\\w")).length > 0))
+         function Ji(TT, UT) {
+           return Yi(UT).some((UT => (0, Bg.e)(TT, new RegExp(`\`?${(0,pg.A)(UT)}(?![\\w]|\\.\\d)`, "i"), (0, Bg.j)("\\w")).length > 0))
```

#### 1155. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14594` → after: `L14594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14594) · [Before (L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14594)

```diff
-         const md = new RegExp(`(${Wd})(?![\\w%]|[.,:]\\d|\\s*%)`, "g"), Rd = (0, tS.k)("\\w.,:%$#-"), qd = new RegExp(`\\s*\\((?:about |around |over |nearly )?(?:${Wd})(?:\\s+[a-z]+){0,2}(?:,\\s*all[- ]time)?\\)$`, "i"), Md = /^\s+(?:[A-Za-z_:`]+\s+){0,2}?(?:players?|people|kids| … [truncated]
+         const xi = new RegExp(`(${Bi})(?![\\w%]|[.,:]\\d|\\s*%)`, "g"), di = (0, Bg.j)("\\w.,:%$#-"), wi = new RegExp(`\\s*\\((?:about |around |over |nearly )?(?:${Bi})(?:\\s+[a-z]+){0,2}(?:,\\s*all[- ]time)?\\)$`, "i"), ti = /^\s+(?:[A-Za-z_:`]+\s+){0,2}?(?:players?|people|kids| … [truncated]
```

#### 1156. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14596-L14603` → after: `L14596-L14603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14596-L14603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14596-L14603) · [Before (L14596-L14603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14596-L14603)

```diff
-         function Ed(pp, ip, cp, Op) {
-           return 0 === ip.size || 0 === cp.steps.length ? [] : (0, tS.f)(pp, md, Rd).flatMap((op => {
-             const Ip = op.index,
-               Sp = Ip + op[0].length,
-               xp = Hd(op[1]),
-               Lp = Op.every((pp => {
-                 let [ip, cp] = pp;
-                 return cp <= Ip || ip >= Sp
+         function yi(TT, UT, mT, WT) {
+           return 0 === UT.size || 0 === mT.steps.length ? [] : (0, Bg.e)(TT, xi, di).flatMap((zT => {
+             const MT = zT.index,
+               gT = MT + zT[0].length,
+               nT = ii(zT[1]),
+               HT = WT.every((TT => {
+                 let [UT, mT] = TT;
+                 return mT <= MT || UT >= gT
```

#### 1157. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14605-L14611` → after: `L14605-L14611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14605-L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14605-L14611) · [Before (L14605-L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14605-L14611)

```diff
-               Yp = cp.allTimeEvents.get(xp);
-             if (!Lp || !ip.has(xp) || void 0 === Yp) return [];
-             const Dp = pp.slice(...(0, vS.L)(pp, Ip)),
-               Ap = new Set((0, tS.f)(Dp, md, Rd).flatMap((pp => {
-                 var Op;
-                 const op = Hd(pp[1]);
-                 return ip.has(op) ? (null !== (Op = cp.allTimeEvents.get(op)) && void 0 !== Op ? Op : []).map(dd) : []
+               kT = mT.allTimeEvents.get(nT);
+             if (!HT || !UT.has(nT) || void 0 === kT) return [];
+             const jT = TT.slice(...(0, pg.I)(TT, MT)),
+               lT = new Set((0, Bg.e)(jT, xi, di).flatMap((TT => {
+                 var WT;
+                 const zT = ii(TT[1]);
+                 return UT.has(zT) ? (null !== (WT = mT.allTimeEvents.get(zT)) && void 0 !== WT ? WT : []).map(bi) : []
```

#### 1158. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14613-L14616` → after: `L14613-L14616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14613-L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14613-L14616) · [Before (L14613-L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14613-L14616)

```diff
-               Pp = new Set(Yp.map(dd)),
-               Wp = cp.steps.find((pp => {
-                 const ip = kd(Dp, pp.to) && !Ap.has(dd(pp.to));
-                 return Pp.has(dd(pp.from)) && (ip || (0, tS.f)(Dp, new RegExp(`${pp.toPlayers.toLocaleString("en-US")}(?!\\d|,\\d)`), (0, tS.k)("\\d,")).length > 0)
+               LT = new Set(kT.map(bi)),
+               pT = mT.steps.find((TT => {
+                 const UT = Ji(jT, TT.to) && !lT.has(bi(TT.to));
+                 return LT.has(bi(TT.from)) && (UT || (0, Bg.e)(jT, new RegExp(`${TT.toPlayers.toLocaleString("en-US")}(?!\\d|,\\d)`), (0, Bg.j)("\\d,")).length > 0)
```

#### 1159. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14618-L14621` → after: `L14618-L14621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14618-L14621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14618-L14621) · [Before (L14618-L14621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14618-L14621)

```diff
-             if (void 0 !== Wp) return Wp.fromPlayers === xp ? [] : [{
-               start: Ip,
-               end: Sp,
-               text: Wp.fromPlayers.toLocaleString("en-US")
+             if (void 0 !== pT) return pT.fromPlayers === nT ? [] : [{
+               start: MT,
+               end: gT,
+               text: pT.fromPlayers.toLocaleString("en-US")
```

#### 1160. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14623-L14635` → after: `L14623-L14635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14623-L14635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14623-L14635) · [Before (L14623-L14635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14623-L14635)

```diff
-             const yp = cp.steps.some((pp => [pp.from, pp.to].some((pp => function(pp, ip) {
-                 return jd(ip).some((ip => new RegExp(`\\b(?:before|between|after|at|during|until|reaching|reach|reached|past|from|to|on)\\s+(?:the\\s+)?\`?${(0,vS.E)(ip)}(?![\\w]|\\.\\d)`, "i").test(pp)))
-               }(Dp, pp))))),
-               Up = cp.steps.some((pp => [pp.from, pp.to].some((pp => Ap.has(dd(pp)) && kd(Dp, pp)))));
-             if (!yp || Up || /\bthan\b/i.test(Dp)) return [];
-             const wp = function(pp, ip, cp) {
-               const Op = pp.lastIndexOf("(", ip),
-                 op = pp.indexOf(")", cp);
-               if (-1 !== Op && -1 !== op && !pp.slice(Op, op).includes(")")) {
-                 const ip = qd.exec(pp.slice(0, op + 1));
-                 if (null !== ip && ip.index <= Op && ip.index + ip[0].length === op + 1) return {
-                   start: ip.index,
-                   end: op + 1,
+             const BT = mT.steps.some((TT => [TT.from, TT.to].some((TT => function(TT, UT) {
+                 return Yi(UT).some((UT => new RegExp(`\\b(?:before|between|after|at|during|until|reaching|reach|reached|past|from|to|on)\\s+(?:the\\s+)?\`?${(0,pg.A)(UT)}(?![\\w]|\\.\\d)`, "i").test(TT)))
+               }(jT, TT))))),
+               ZT = mT.steps.some((TT => [TT.from, TT.to].some((TT => lT.has(bi(TT)) && Ji(jT, TT)))));
+             if (!BT || ZT || /\bthan\b/i.test(jT)) return [];
+             const cT = function(TT, UT, mT) {
+               const WT = TT.lastIndexOf("(", UT),
+                 zT = TT.indexOf(")", mT);
+               if (-1 !== WT && -1 !== zT && !TT.slice(WT, zT).includes(")")) {
+                 const UT = wi.exec(TT.slice(0, zT + 1));
+                 if (null !== UT && UT.index <= WT && UT.index + UT[0].length === zT + 1) return {
+                   start: UT.index,
+                   end: zT + 1,
```

#### 1161. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14639-L14648` → after: `L14639-L14648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14639-L14648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14639-L14648) · [Before (L14639-L14648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14639-L14648)

```diff
-               if (!Md.test(pp.slice(cp))) return null;
-               const Ip = Cd.exec(pp.slice(0, ip)),
-                 Sp = null === Ip ? ip : Ip.index,
-                 xp = /(?:^|[.!?:]\s+|^\s*(?:[-*]|\d+\.)\s+)$/.test(pp.slice(0, Sp)),
-                 Lp = pp.slice(cp).replace(/^\s+(?:of\s+)?/i, ""),
-                 Yp = pp.length - Lp.length;
-               return xp ? {
-                 start: Sp,
-                 end: Yp + 1,
-                 text: Lp.charAt(0).toUpperCase()
+               if (!ti.test(TT.slice(mT))) return null;
+               const MT = ai.exec(TT.slice(0, UT)),
+                 gT = null === MT ? UT : MT.index,
+                 nT = /(?:^|[.!?:]\s+|^\s*(?:[-*]|\d+\.)\s+)$/.test(TT.slice(0, gT)),
+                 HT = TT.slice(mT).replace(/^\s+(?:of\s+)?/i, ""),
+                 kT = TT.length - HT.length;
+               return nT ? {
+                 start: gT,
+                 end: kT + 1,
+                 text: HT.charAt(0).toUpperCase()
```

#### 1162. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14650-L14651` → after: `L14650-L14651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14650-L14651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14650-L14651) · [Before (L14650-L14651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14650-L14651)

```diff
-                 start: Sp,
-                 end: Yp,
+                 start: gT,
+                 end: kT,
```

#### 1163. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14654-L14655` → after: `L14654-L14655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14654-L14655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14654-L14655) · [Before (L14654-L14655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14654-L14655)

```diff
-             }(pp, Ip, Sp);
-             return null === wp ? [] : [wp]
+             }(TT, MT, gT);
+             return null === cT ? [] : [cT]
```

#### 1164. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14658` → after: `L14658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14658) · [Before (L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14658)

```diff
-         const Xd = /^(\s+times\s+)more(\s+[a-z]+)?(\s+than)\b/i, ld = /\b(?:plays|players|sessions|visits)\b[^.;:!?]*?(?:,\s*which\s+is|\bis|\bthat's|\bthat\s+is)\s+$/i;
+         const Xi = /^(\s+times\s+)more(\s+[a-z]+)?(\s+than)\b/i, Ii = /\b(?:plays|players|sessions|visits)\b[^.;:!?]*?(?:,\s*which\s+is|\bis|\bthat's|\bthat\s+is)\s+$/i;
```

#### 1165. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14660-L14667` → after: `L14660-L14667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14660-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14660-L14667) · [Before (L14660-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14660-L14667)

```diff
-         function Qd(pp, ip, cp) {
-           return 0 === ip.ratios.size ? [] : (0, tS.f)(pp, /(\d+(?:\.\d+)?)(?=\s+times\s+more\b)/g, tS.n).flatMap((Op => {
-             var op;
-             const Ip = Op.index + Op[0].length,
-               Sp = Xd.exec(pp.slice(Ip)),
-               xp = cp.every((pp => {
-                 let [ip, cp] = pp;
-                 return cp <= Op.index || ip >= Ip
+         function Qi(TT, UT, mT) {
+           return 0 === UT.ratios.size ? [] : (0, Bg.e)(TT, /(\d+(?:\.\d+)?)(?=\s+times\s+more\b)/g, Bg.o).flatMap((WT => {
+             var zT;
+             const MT = WT.index + WT[0].length,
+               gT = Xi.exec(TT.slice(MT)),
+               nT = mT.every((TT => {
+                 let [UT, mT] = TT;
+                 return mT <= WT.index || UT >= MT
```

#### 1166. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14669-L14674` → after: `L14669-L14674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14669-L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14669-L14674) · [Before (L14669-L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14669-L14674)

```diff
-             if (null === Sp || !xp || !ip.ratios.has(Number(Op[1]))) return [];
-             const Lp = null !== (op = Sp[2]) && void 0 !== op ? op : "";
-             return ("" === Lp || /^\s+(?:players|plays|sessions|people|visits|visitors|users|joins)$/i.test(Lp)) && ("" !== Lp || ld.test(pp.slice(Math.max(0, Op.index - 80), Op.index))) ? [{
-               start: Ip,
-               end: Ip + Sp[0].length,
-               text: `${Sp[1]}as many${Lp} as`
+             if (null === gT || !nT || !UT.ratios.has(Number(WT[1]))) return [];
+             const HT = null !== (zT = gT[2]) && void 0 !== zT ? zT : "";
+             return ("" === HT || /^\s+(?:players|plays|sessions|people|visits|visitors|users|joins)$/i.test(HT)) && ("" !== HT || Ii.test(TT.slice(Math.max(0, WT.index - 80), WT.index))) ? [{
+               start: MT,
+               end: MT + gT[0].length,
+               text: `${gT[1]}as many${HT} as`
```

#### 1167. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14678-L14694` → after: `L14678-L14694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14678-L14694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14678-L14694) · [Before (L14678-L14694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14678-L14694)

```diff
-         const Jd = 50, Bd = vA, Nd = 3, Td = .1, fd = .05, bd = 2, hd = 7, nd = 7, Fd = 14, gd = 7, Gd = 2;
- 
-         function rd(pp) {
-           var ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp;
-           const Wp = ew(pp),
-             yp = pp.stats,
-             Up = null === yp ? null : ri(yp.rankingWindow),
-             wp = null !== (ip = null === (cp = pp.baseline) || void 0 === cp ? void 0 : cp.rankingWindow) && void 0 !== ip ? ip : null,
-             vp = null !== (Op = null === yp || void 0 === yp ? void 0 : yp.sessionDurationHistogram) && void 0 !== Op ? Op : null,
-             tp = null === vp ? null : Ni(vp.sessionCounts, vp.maxBucketMinute),
-             Hp = Wp.biggestProblem,
-             dp = (null !== (op = null === (Ip = Wp.flow) || void 0 === Ip ? void 0 : Ip.steps) && void 0 !== op ? op : []).flatMap((pp => pp.isPastNearer ? [] : [{
-               from: ML(pp.from),
-               to: ML(pp.to),
-               fromPlayers: pp.fromPlayers,
-               toPlayers: pp.players,
- ... (1 more removed lines; see GitHub link above)
+         const si = 50, Fi = vl, Pi = 3, Vi = .1, ui = .05, Ci = 2, ri = 7, Ki = 7, Si = 14, Gi = 7, Ni = 2;
+ 
+         function Ei(TT) {
+           var UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, LT;
+           const pT = bc(TT),
+             BT = TT.stats,
+             ZT = null === BT ? null : SU(BT.rankingWindow),
+             cT = null !== (UT = null === (mT = TT.baseline) || void 0 === mT ? void 0 : mT.rankingWindow) && void 0 !== UT ? UT : null,
+             vT = null !== (WT = null === BT || void 0 === BT ? void 0 : BT.sessionDurationHistogram) && void 0 !== WT ? WT : null,
+             fT = null === vT ? null : QU(vT.sessionCounts, vT.maxBucketMinute),
+             qT = pT.biggestProblem,
+             iT = (null !== (zT = null === (MT = pT.flow) || void 0 === MT ? void 0 : MT.steps) && void 0 !== zT ? zT : []).flatMap((TT => TT.isPastNearer ? [] : [{
+               from: dH(TT.from),
+               to: dH(TT.to),
+               fromPlayers: TT.fromPlayers,
+               toPlayers: TT.players,
+ ... (1 more added lines; see GitHub link above)
```

#### 1168. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14696-L14697` → after: `L14696-L14697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14696-L14697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14696-L14697) · [Before (L14696-L14697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14696-L14697)

```diff
-               isBranch: !pp.isChain,
-               isOrLater: pp.isOrLater,
+               isBranch: !TT.isChain,
+               isOrLater: TT.isOrLater,
```

#### 1169. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14700-L14708` → after: `L14700-L14708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14700-L14708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14700-L14708) · [Before (L14700-L14708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14700-L14708)

```diff
-             ep = Wp.progressions.flatMap((pp => {
-               const ip = ip => CL(pp.eventType, ip);
-               return pp.steps.flatMap((cp => cp.reached !== cp.to.players ? [] : [{
-                 from: ip(cp.from.value),
-                 to: ip(cp.to.value),
-                 fromPlayers: cp.from.players,
-                 toPlayers: cp.to.players,
-                 share: 100 * cp.share,
-                 group: `${pp.gameCategory}/${pp.eventType}`,
+             bT = pT.progressions.flatMap((TT => {
+               const UT = UT => wH(TT.eventType, UT);
+               return TT.steps.flatMap((mT => mT.reached !== mT.to.players ? [] : [{
+                 from: UT(mT.from.value),
+                 to: UT(mT.to.value),
+                 fromPlayers: mT.from.players,
+                 toPlayers: mT.to.players,
+                 share: 100 * mT.share,
+                 group: `${TT.gameCategory}/${TT.eventType}`,
```

#### 1170. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14712-L14713` → after: `L14712-L14713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14712-L14713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14712-L14713) · [Before (L14712-L14713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14712-L14713)

```diff
-                   gameCategory: pp.gameCategory,
-                   eventType: pp.eventType,
+                   gameCategory: TT.gameCategory,
+                   eventType: TT.eventType,
```

#### 1171. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14718-L14719` → after: `L14718-L14719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14718-L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14718-L14719) · [Before (L14718-L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14718-L14719)

```diff
-           let jp = null;
-           if ("dropoff" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind)) jp = {
+           let OT = null;
+           if ("dropoff" === (null === qT || void 0 === qT ? void 0 : qT.kind)) OT = {
```

#### 1172. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14721` → after: `L14721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14721) · [Before (L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14721)

```diff
-             minute: Hp.minute.minute
+             minute: qT.minute.minute
```

#### 1173. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14723` → after: `L14723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14723) · [Before (L14723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14723)

```diff
-           else if ("flowStep" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind)) jp = {
+           else if ("flowStep" === (null === qT || void 0 === qT ? void 0 : qT.kind)) OT = {
```

#### 1174. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14725-L14726` → after: `L14725-L14726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14725-L14726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14725-L14726) · [Before (L14725-L14726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14725-L14726)

```diff
-             from: ML(Hp.step.from),
-             to: ML(Hp.step.to)
+             from: dH(qT.step.from),
+             to: dH(qT.step.to)
```

#### 1175. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14728` → after: `L14728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14728) · [Before (L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14728)

```diff
-           else if ("progressStep" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind)) {
+           else if ("progressStep" === (null === qT || void 0 === qT ? void 0 : qT.kind)) {
```

#### 1176. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14730-L14732` → after: `L14730-L14732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14730-L14732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14730-L14732) · [Before (L14730-L14732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14730-L14732)

```diff
-               eventType: pp
-             } = Hp.progression;
-             jp = {
+               eventType: TT
+             } = qT.progression;
+             OT = {
```

#### 1177. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14734-L14735` → after: `L14734-L14735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14734-L14735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14734-L14735) · [Before (L14734-L14735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14734-L14735)

```diff
-               from: CL(pp, Hp.step.from.value),
-               to: CL(pp, Hp.step.to.value)
+               from: wH(TT, qT.step.from.value),
+               to: wH(TT, qT.step.to.value)
```

#### 1178. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14737` → after: `L14737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14737) · [Before (L14737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14737)

```diff
-           } else "playsFalling" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (jp = {
+           } else "playsFalling" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (OT = {
```

#### 1179. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14740-L14743` → after: `L14740-L14743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14740-L14743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14740-L14743) · [Before (L14740-L14743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14740-L14743)

```diff
-           const kp = null === yp ? [] : ji(yp).slice(-Fd),
-             mp = null !== (Sp = null === Up || void 0 === Up ? void 0 : Up.avgSessionMs) && void 0 !== Sp ? Sp : null,
-             Rp = null !== (xp = null === Up || void 0 === Up ? void 0 : Up.sessionsPerPlayer) && void 0 !== xp ? xp : null,
-             qp = null !== (Lp = null === Up || void 0 === Up ? void 0 : Up.avgDailyPlays) && void 0 !== Lp ? Lp : null;
+           const eT = null === BT ? [] : bU(BT).slice(-Si),
+             YT = null !== (gT = null === ZT || void 0 === ZT ? void 0 : ZT.avgSessionMs) && void 0 !== gT ? gT : null,
+             JT = null !== (nT = null === ZT || void 0 === ZT ? void 0 : ZT.sessionsPerPlayer) && void 0 !== nT ? nT : null,
+             xT = null !== (HT = null === ZT || void 0 === ZT ? void 0 : ZT.avgDailyPlays) && void 0 !== HT ? HT : null;
```

#### 1180. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14745-L14750` → after: `L14745-L14750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14745-L14750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14745-L14750) · [Before (L14745-L14750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14745-L14750)

```diff
-             dailyPlays: qp,
-             weeklyPlayers: null === yp || yp.rankingWindow.days !== nd ? null : yp.rankingWindow.uniquePlayers,
-             sessions: null === vp || null === tp ? null : {
-               days: vp.days,
-               percents: tp.points.map((pp => pp.percent)),
-               typicalPercents: null !== (Yp = null === (Dp = pp.baseline) || void 0 === Dp ? void 0 : Dp.dropoffCurve.survivalPercents.map((pp => pp.p50))) && void 0 !== Yp ? Yp : []
+             dailyPlays: xT,
+             weeklyPlayers: null === BT || BT.rankingWindow.days !== Ki ? null : BT.rankingWindow.uniquePlayers,
+             sessions: null === vT || null === fT ? null : {
+               days: vT.days,
+               percents: fT.points.map((TT => TT.percent)),
+               typicalPercents: null !== (kT = null === (jT = TT.baseline) || void 0 === jT ? void 0 : jT.dropoffCurve.survivalPercents.map((TT => TT.p50))) && void 0 !== kT ? kT : []
```

#### 1181. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14752-L14754` → after: `L14752-L14754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14752-L14754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14752-L14754) · [Before (L14752-L14754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14752-L14754)

```diff
-             averageSessionMinutes: null === mp ? null : {
-               now: mp / 6e4,
-               typical: null === wp ? null : wp.sessionMs.p50 / 6e4
+             averageSessionMinutes: null === YT ? null : {
+               now: YT / 6e4,
+               typical: null === cT ? null : cT.sessionMs.p50 / 6e4
```

#### 1182. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14756-L14759` → after: `L14756-L14759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14756-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14756-L14759) · [Before (L14756-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14756-L14759)

```diff
-             sessionsPerPlayer: null === Rp || null === yp ? null : {
-               now: Rp,
-               typical: null !== (Ap = null === wp || void 0 === wp ? void 0 : wp.sessionsPerPlayer.p50) && void 0 !== Ap ? Ap : null,
-               days: yp.sessionsPerPlayerWindowDays
+             sessionsPerPlayer: null === JT || null === BT ? null : {
+               now: JT,
+               typical: null !== (lT = null === cT || void 0 === cT ? void 0 : cT.sessionsPerPlayer.p50) && void 0 !== lT ? lT : null,
+               days: BT.sessionsPerPlayerWindowDays
```

#### 1183. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14761-L14763` → after: `L14761-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14761-L14763) · [Before (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14761-L14763)

```diff
-             playsPerDay: null === qp ? null : {
-               now: qp,
-               typical: "playsFalling" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) ? Hp.previous : null !== (Pp = null === wp || void 0 === wp ? void 0 : wp.dailyPlays.p50) && void 0 !== Pp ? Pp : null
+             playsPerDay: null === xT ? null : {
+               now: xT,
+               typical: "playsFalling" === (null === qT || void 0 === qT ? void 0 : qT.kind) ? qT.previous : null !== (LT = null === cT || void 0 === cT ? void 0 : cT.dailyPlays.p50) && void 0 !== LT ? LT : null
```

#### 1184. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14766-L14767` → after: `L14766-L14767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14766-L14767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14766-L14767) · [Before (L14766-L14767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14766-L14767)

```diff
-               plays: kp.flatMap((pp => null === pp.plays ? [] : [pp.plays])),
-               sessionMinutes: kp.flatMap((pp => null === pp.avgSessionMs ? [] : [pp.avgSessionMs / 6e4]))
+               plays: eT.flatMap((TT => null === TT.plays ? [] : [TT.plays])),
+               sessionMinutes: eT.flatMap((TT => null === TT.avgSessionMs ? [] : [TT.avgSessionMs / 6e4]))
```

#### 1185. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14769-L14775` → after: `L14769-L14775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14769-L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14769-L14775) · [Before (L14769-L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14769-L14775)

```diff
-             flowSteps: dp,
-             progressSteps: ep,
-             problem: jp,
-             deaths: MU(pp),
-             heatmapEvents: pp.heatmaps.map((pp => ({
-               gameCategory: pp.gameCategoryId,
-               eventTypes: [...new Set(pp.events.map((pp => pp.eventType)))]
+             flowSteps: iT,
+             progressSteps: bT,
+             problem: OT,
+             deaths: tZ(TT),
+             heatmapEvents: TT.heatmaps.map((TT => ({
+               gameCategory: TT.gameCategoryId,
+               eventTypes: [...new Set(TT.events.map((TT => TT.eventType)))]
```

#### 1186. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14777-L14778` → after: `L14777-L14778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14777-L14778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14777-L14778) · [Before (L14777-L14778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14777-L14778)

```diff
-             places: hH(pp),
-             loggedValues: dS(pp)
+             places: rq(TT),
+             loggedValues: cg(TT)
```

#### 1187. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14782-L14785` → after: `L14782-L14785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14782-L14785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14782-L14785) · [Before (L14782-L14785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14782-L14785)

```diff
-         function Zd(pp) {
-           return [...pp.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((pp => {
-             const ip = LO(pp[1]);
-             return null === ip ? [] : [ip.key]
+         function Di(TT) {
+           return [...TT.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((TT => {
+             const UT = gW(TT[1]);
+             return null === UT ? [] : [UT.key]
```

#### 1188. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14789-L14791` → after: `L14789-L14791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14789-L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14789-L14791) · [Before (L14789-L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14789-L14791)

```diff
-         function zd(pp) {
-           const ip = pp => pp.flatMap((pp => [pp.text, ...ip(pp.children)]));
-           return pp.blocks.flatMap((pp => "paragraph" === pp.kind ? [pp.text] : "list" === pp.kind ? ip(pp.items) : []))
+         function oi(TT) {
+           const UT = TT => TT.flatMap((TT => [TT.text, ...UT(TT.children)]));
+           return TT.blocks.flatMap((TT => "paragraph" === TT.kind ? [TT.text] : "list" === TT.kind ? UT(TT.items) : []))
```

#### 1189. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14794-L14796` → after: `L14794-L14796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14794-L14796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14794-L14796) · [Before (L14794-L14796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14794-L14796)

```diff
-         function sd(pp, ip) {
-           const cp = (0, vS.i)(ip.toLowerCase());
-           return (0, tS.f)(pp.toLowerCase(), new RegExp(`${cp}(?![\\w])`), (0, tS.k)("\\w")).length > 0
+         function Ai(TT, UT) {
+           const mT = (0, pg.j)(UT.toLowerCase());
+           return (0, Bg.e)(TT.toLowerCase(), new RegExp(`${mT}(?![\\w])`), (0, Bg.j)("\\w")).length > 0
```

#### 1190. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14799-L14803` → after: `L14799-L14803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14799-L14803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14799-L14803) · [Before (L14799-L14803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14799-L14803)

```diff
-         function Kd(pp, ip, cp) {
-           var Op;
-           const op = pp.filter((pp => sd(ip, pp.from) && sd(ip, pp.to))).sort(((pp, ip) => ip.fromPlayers - pp.fromPlayers)),
-             Ip = null === cp || "flowStep" !== cp.kind && "progressStep" !== cp.kind ? void 0 : pp.find((pp => pp.from === cp.from && pp.to === cp.to));
-           return void 0 === Ip || 0 !== op.length && !op.includes(Ip) ? null !== (Op = op[0]) && void 0 !== Op ? Op : null : Ip
+         function Ri(TT, UT, mT) {
+           var WT;
+           const zT = TT.filter((TT => Ai(UT, TT.from) && Ai(UT, TT.to))).sort(((TT, UT) => UT.fromPlayers - TT.fromPlayers)),
+             MT = null === mT || "flowStep" !== mT.kind && "progressStep" !== mT.kind ? void 0 : TT.find((TT => TT.from === mT.from && TT.to === mT.to));
+           return void 0 === MT || 0 !== zT.length && !zT.includes(MT) ? null !== (WT = zT[0]) && void 0 !== WT ? WT : null : MT
```

#### 1191. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14806-L14807` → after: `L14806-L14807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14806-L14807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14806-L14807) · [Before (L14806-L14807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14806-L14807)

```diff
-         function Vd(pp) {
-           return pp < 100 ? Math.max(10, 10 * Math.round(pp / 10)) : Number(pp.toPrecision(2))
+         function Tb(TT) {
+           return TT < 100 ? Math.max(10, 10 * Math.round(TT / 10)) : Number(TT.toPrecision(2))
```

#### 1192. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14810-L14811` → after: `L14810-L14811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14810-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14810-L14811) · [Before (L14810-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14810-L14811)

```diff
-         function pe(pp) {
-           return pp < 1e3 ? Math.round(pp) : Number(pp.toPrecision(2))
+         function Ub(TT) {
+           return TT < 1e3 ? Math.round(TT) : Number(TT.toPrecision(2))
```

#### 1193. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14814-L14816` → after: `L14814-L14816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14814-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14814-L14816) · [Before (L14814-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14814-L14816)

```diff
-         function ie(pp, ip) {
-           const cp = Math.max(Nd, null === ip ? 0 : (ip - pp) * Td);
-           return Math.min(99, Math.round(pp + cp))
+         function mb(TT, UT) {
+           const mT = Math.max(Pi, null === UT ? 0 : (UT - TT) * Vi);
+           return Math.min(99, Math.round(TT + mT))
```

#### 1194. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14819-L14820` → after: `L14819-L14820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14819-L14820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14819-L14820) · [Before (L14819-L14820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14819-L14820)

```diff
-         function ce(pp, ip, cp) {
-           return pp + Math.max(pp * fd, null === ip ? 0 : (ip - pp) * Td, cp)
+         function Wb(TT, UT, mT) {
+           return TT + Math.max(TT * ui, null === UT ? 0 : (UT - TT) * Vi, mT)
```

#### 1195. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14822` → after: `L14822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14822) · [Before (L14822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14822)

```diff
-         const Oe = {
+         const zb = {
```

#### 1196. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14832` → after: `L14832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14832) · [Before (L14832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14832)

```diff
-         }, oe = `(\\d{1,2}|${Object.keys(Oe).join("|")})`, Ie = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${oe}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${oe}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
+         }, Mb = `(\\d{1,2}|${Object.keys(zb).join("|")})`, gb = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${Mb}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${Mb}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
```

#### 1197. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14834-L14836` → after: `L14834-L14836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14834-L14836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14834-L14836) · [Before (L14834-L14836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14834-L14836)

```diff
-         function Ye(pp) {
-           var ip;
-           return null !== (ip = Oe[pp.toLowerCase()]) && void 0 !== ip ? ip : Number(pp)
+         function jb(TT) {
+           var UT;
+           return null !== (UT = zb[TT.toLowerCase()]) && void 0 !== UT ? UT : Number(TT)
```

#### 1198. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14839-L14840` → after: `L14839-L14840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14839-L14840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14839-L14840) · [Before (L14839-L14840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14839-L14840)

```diff
-         function De(pp, ip) {
-           return null === ip || ip * pp < Jd ? null : {
+         function lb(TT, UT) {
+           return null === UT || UT * TT < si ? null : {
```

#### 1199. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14842-L14843` → after: `L14842-L14843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14842-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14842-L14843) · [Before (L14842-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14842-L14843)

```diff
-             days: pp,
-             count: Vd(ip * pp),
+             days: TT,
+             count: Tb(UT * TT),
```

#### 1200. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14848-L14851` → after: `L14848-L14851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14848-L14851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14848-L14851) · [Before (L14848-L14851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14848-L14851)

```diff
-         function Ae(pp) {
-           if (pp.length < gd) return null;
-           const ip = pp.slice(1).reduce(((ip, cp, Op) => ip + (cp - pp[Op]) ** 2), 0) / (2 * (pp.length - 1)),
-             cp = pp.slice(-hd);
+         function Lb(TT) {
+           if (TT.length < Gi) return null;
+           const UT = TT.slice(1).reduce(((UT, mT, WT) => UT + (mT - TT[WT]) ** 2), 0) / (2 * (TT.length - 1)),
+             mT = TT.slice(-ri);
```

#### 1201. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14853-L14855` → after: `L14853-L14855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14853-L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14853-L14855) · [Before (L14853-L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14853-L14855)

```diff
-             low: Math.min(...cp),
-             high: Math.max(...cp),
-             averageMargin: Gd * Math.sqrt(ip / hd)
+             low: Math.min(...mT),
+             high: Math.max(...mT),
+             averageMargin: Ni * Math.sqrt(UT / ri)
```

#### 1202. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14859-L14860` → after: `L14859-L14860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14859-L14860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14859-L14860) · [Before (L14859-L14860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14859-L14860)

```diff
-         function Pe(pp, ip) {
-           return null === pp || pp <= 0 || pp * hd < Jd ? null : null !== ip ? {
+         function pb(TT, UT) {
+           return null === TT || TT <= 0 || TT * ri < si ? null : null !== UT ? {
```

#### 1203. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14862` → after: `L14862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14862) · [Before (L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14862)

```diff
-             days: hd,
+             days: ri,
```

#### 1204. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14864-L14865` → after: `L14864-L14865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14864-L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14864-L14865) · [Before (L14864-L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14864-L14865)

```diff
-               low: ip.low,
-               high: ip.high
+               low: UT.low,
+               high: UT.high
```

#### 1205. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14869` → after: `L14869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14869) · [Before (L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14869)

```diff
-             days: Math.min(hd, Math.max(bd, Math.ceil(Jd / pp))),
+             days: Math.min(ri, Math.max(Ci, Math.ceil(si / TT))),
```

#### 1206. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14874-L14884` → after: `L14874-L14884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14874-L14884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14874-L14884) · [Before (L14874-L14884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14874-L14884)

```diff
-         function We(pp, ip) {
-           var cp, Op;
-           const op = (null !== pp && void 0 !== pp ? pp : "").split("\n").filter((pp => "" !== pp.trim())),
-             Ip = 1 === op.length ? iD(op[0]) : null;
-           if (null === Ip || null === ip) return null;
-           let Sp = Ip.path,
-             xp = null !== (cp = ip.get(Sp)) && void 0 !== cp ? cp : null;
-           if (null === xp && !Sp.includes(".")) {
-             const pp = [...ip].filter((pp => {
-               let [ip] = pp;
-               return ip.endsWith(`.${Ip.path}`)
+         function Bb(TT, UT) {
+           var mT, WT;
+           const zT = (null !== TT && void 0 !== TT ? TT : "").split("\n").filter((TT => "" !== TT.trim())),
+             MT = 1 === zT.length ? Uj(zT[0]) : null;
+           if (null === MT || null === UT) return null;
+           let gT = MT.path,
+             nT = null !== (mT = UT.get(gT)) && void 0 !== mT ? mT : null;
+           if (null === nT && !gT.includes(".")) {
+             const TT = [...UT].filter((TT => {
+               let [UT] = TT;
+               return UT.endsWith(`.${MT.path}`)
```

#### 1207. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14886` → after: `L14886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14886) · [Before (L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14886)

```diff
-             Sp = 1 === pp.length ? pp[0][0] : Sp, xp = 1 === pp.length ? pp[0][1] : null
+             gT = 1 === TT.length ? TT[0][0] : gT, nT = 1 === TT.length ? TT[0][1] : null
```

#### 1208. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14888-L14891` → after: `L14888-L14891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14888-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14888-L14891) · [Before (L14888-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14888-L14891)

```diff
-           const Lp = null === xp ? null : null === (Op = iD(xp)) || void 0 === Op ? void 0 : Op.value,
-             Yp = pp => pp.replace(/\s+/g, "");
-           if (null === xp || void 0 === Lp || null === Lp || Yp(Lp) === Yp(Ip.value)) return null;
-           const Dp = Sp.lastIndexOf(".");
+           const HT = null === nT ? null : null === (WT = Uj(nT)) || void 0 === WT ? void 0 : WT.value,
+             kT = TT => TT.replace(/\s+/g, "");
+           if (null === nT || void 0 === HT || null === HT || kT(HT) === kT(MT.value)) return null;
+           const jT = gT.lastIndexOf(".");
```

#### 1209. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14893-L14894` → after: `L14893-L14894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14893-L14894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14893-L14894) · [Before (L14893-L14894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14893-L14894)

```diff
-             line: xp,
-             inside: -1 === Dp ? null : Sp.slice(0, Dp)
+             line: nT,
+             inside: -1 === jT ? null : gT.slice(0, jT)
```

#### 1210. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14898-L14903` → after: `L14898-L14903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14898-L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14898-L14903) · [Before (L14898-L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14898-L14903)

```diff
-         function ye(pp) {
-           var ip, cp;
-           const Op = null === pp ? null : null !== (ip = null !== (cp = (0, tS.f)(pp, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, tS.k)("\\w.,"))[0]) && void 0 !== cp ? cp : (0, tS.f)(pp, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
-           return null === Op ? null : {
-             now: Number(Op[1].replace(/,/g, "")),
-             target: Number(Op[2].replace(/,/g, ""))
+         function Zb(TT) {
+           var UT, mT;
+           const WT = null === TT ? null : null !== (UT = null !== (mT = (0, Bg.e)(TT, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, Bg.j)("\\w.,"))[0]) && void 0 !== mT ? mT : (0, Bg.e)(TT, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
+           return null === WT ? null : {
+             now: Number(WT[1].replace(/,/g, "")),
+             target: Number(WT[2].replace(/,/g, ""))
```

#### 1211. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14907-L14908` → after: `L14907-L14908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14907-L14908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14907-L14908) · [Before (L14907-L14908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14907-L14908)

```diff
-         function Ue(pp) {
-           return "playersStillPlaying" === pp ? "sessionDropoff" : pp
+         function cb(TT) {
+           return "playersStillPlaying" === TT ? "sessionDropoff" : TT
```

#### 1212. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14911-L14913` → after: `L14911-L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14911-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14911-L14913) · [Before (L14911-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14911-L14913)

```diff
-         function we(pp, ip, cp, Op) {
-           let op = null;
-           if (null !== ip) op = Ue(ip.statKey) === Ue(cp) ? ye(ip.change) : null;
+         function vb(TT, UT, mT, WT) {
+           let zT = null;
+           if (null !== UT) zT = cb(UT.statKey) === cb(mT) ? Zb(UT.change) : null;
```

#### 1213. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14915-L14935` → after: `L14915-L14935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14915-L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14915-L14935) · [Before (L14915-L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14915-L14935)

```diff
-             var Ip;
-             const ip = zd(pp).find((pp => /\b(check|target|aim)\b/i.test(pp) && null !== ye(pp)));
-             op = null !== (Ip = ye(pp.target)) && void 0 !== Ip ? Ip : ye(null !== ip && void 0 !== ip ? ip : null)
-           }
-           return null === op || ! function(pp, ip) {
-             return Math.abs(pp - ip) <= (ip >= 10 ? Math.max(.5, .01 * ip) : .05) + 1e-9
-           }(op.now, Op) || op.target <= Op ? null : op.target
-         }
- 
-         function ve(pp, ip, cp, Op) {
-           var op, Ip, Sp;
-           const xp = function(pp, ip) {
-             const cp = null === pp.target ? void 0 : Zd(pp.target)[0];
-             if (void 0 !== cp) return cp;
-             if (null !== ip) return ip.statKey;
-             const Op = zd(pp).find((pp => /\b(check|target|aim)\b/i.test(pp) && Zd(pp).length > 0));
- ... (5 more removed lines; see GitHub link above)
+             var MT;
+             const UT = oi(TT).find((TT => /\b(check|target|aim)\b/i.test(TT) && null !== Zb(TT)));
+             zT = null !== (MT = Zb(TT.target)) && void 0 !== MT ? MT : Zb(null !== UT && void 0 !== UT ? UT : null)
+           }
+           return null === zT || ! function(TT, UT) {
+             return Math.abs(TT - UT) <= (UT >= 10 ? Math.max(.5, .01 * UT) : .05) + 1e-9
+           }(zT.now, WT) || zT.target <= WT ? null : zT.target
+         }
+ 
+         function fb(TT, UT, mT, WT) {
+           var zT, MT, gT;
+           const nT = function(TT, UT) {
+             const mT = null === TT.target ? void 0 : Di(TT.target)[0];
+             if (void 0 !== mT) return mT;
+             if (null !== UT) return UT.statKey;
+             const WT = oi(TT).find((TT => /\b(check|target|aim)\b/i.test(TT) && Di(TT).length > 0));
+ ... (5 more added lines; see GitHub link above)
```

#### 1214. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14938-L14957` → after: `L14938-L14957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14938-L14957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14938-L14957) · [Before (L14938-L14957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14938-L14957)

```diff
-                 var op, Ip, Sp;
-                 const pp = Op.sessions;
-                 if (null === pp) return null;
-                 const cp = function(pp) {
-                     var ip;
-                     if (null === pp) return null;
-                     if (/\bfirst minute\b/i.test(pp)) return 1;
-                     const cp = pp.replace(/\[\[[^\]]*\]\]/g, ""),
-                       Op = null !== (ip = (0, tS.f)(cp, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, tS.k)("\\w."))[0]) && void 0 !== ip ? ip : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(cp);
-                     return null === Op ? null : Number(Op[1])
-                   }(ip.target),
-                   xp = null === cp ? function(pp, ip) {
-                     var cp;
-                     if (null === pp) return null;
-                     const Op = pp => pp >= 1 && void 0 !== ip[pp],
-                       op = xe.exec(pp);
- ... (4 more removed lines; see GitHub link above)
+                 var zT, MT, gT;
+                 const TT = WT.sessions;
+                 if (null === TT) return null;
+                 const mT = function(TT) {
+                     var UT;
+                     if (null === TT) return null;
+                     if (/\bfirst minute\b/i.test(TT)) return 1;
+                     const mT = TT.replace(/\[\[[^\]]*\]\]/g, ""),
+                       WT = null !== (UT = (0, Bg.e)(mT, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, Bg.j)("\\w."))[0]) && void 0 !== UT ? UT : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(mT);
+                     return null === WT ? null : Number(WT[1])
+                   }(UT.target),
+                   nT = null === mT ? function(TT, UT) {
+                     var mT;
+                     if (null === TT) return null;
+                     const WT = TT => TT >= 1 && void 0 !== UT[TT],
+                       zT = Hb.exec(TT);
+ ... (4 more added lines; see GitHub link above)
```

#### 1215. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14961-L14968` → after: `L14961-L14968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14961-L14968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14961-L14968) · [Before (L14961-L14968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14961-L14968)

```diff
-                     for (const xp of Ie) {
-                       const ip = xp.exec(pp);
-                       if (null !== ip) {
-                         const pp = Ye(ip[1]),
-                           cp = Le.find((ip => ip > pp && Op(ip)));
-                         return void 0 === cp ? null : {
-                           minutes: cp,
-                           after: pp
+                     for (const nT of gb) {
+                       const UT = nT.exec(TT);
+                       if (null !== UT) {
+                         const TT = jb(UT[1]),
+                           mT = kb.find((UT => UT > TT && WT(UT)));
+                         return void 0 === mT ? null : {
+                           minutes: mT,
+                           after: TT
```

#### 1216. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14972-L14975` → after: `L14972-L14975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14972-L14975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14972-L14975) · [Before (L14972-L14975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14972-L14975)

```diff
-                     const Ip = Se.exec(pp),
-                       Sp = null === Ip ? null : Ye(null !== (cp = Ip[1]) && void 0 !== cp ? cp : Ip[2]);
-                     return null !== Sp && Op(Sp) ? {
-                       minutes: Sp,
+                     const MT = nb.exec(TT),
+                       gT = null === MT ? null : jb(null !== (mT = MT[1]) && void 0 !== mT ? mT : MT[2]);
+                     return null !== gT && WT(gT) ? {
+                       minutes: gT,
```

#### 1217. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14978-L14983` → after: `L14978-L14983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14978-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14978-L14983) · [Before (L14978-L14983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14978-L14983)

```diff
-                   }(ip.title, pp.percents) : null,
-                   Lp = null !== (op = null !== cp && void 0 !== cp ? cp : null === xp || void 0 === xp ? void 0 : xp.minutes) && void 0 !== op ? op : "dropoff" === (null === (Ip = Op.problem) || void 0 === Ip ? void 0 : Ip.kind) ? Op.problem.minute : Ti,
-                   Yp = pp.percents[Lp],
-                   Dp = De(pp.days, Op.dailyPlays);
-                 return void 0 === Yp || Lp < 1 || null === Dp ? null : {
-                   measure: null === xp || null === xp.after ? {
+                   }(UT.title, TT.percents) : null,
+                   HT = null !== (zT = null !== mT && void 0 !== mT ? mT : null === nT || void 0 === nT ? void 0 : nT.minutes) && void 0 !== zT ? zT : "dropoff" === (null === (MT = WT.problem) || void 0 === MT ? void 0 : MT.kind) ? WT.problem.minute : sU,
+                   kT = TT.percents[HT],
+                   jT = lb(TT.days, WT.dailyPlays);
+                 return void 0 === kT || HT < 1 || null === jT ? null : {
+                   measure: null === nT || null === nT.after ? {
```

#### 1218. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14985` → after: `L14985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14985) · [Before (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14985)

```diff
-                     minutes: Lp
+                     minutes: HT
```

#### 1219. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14988-L14989` → after: `L14988-L14989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14988-L14989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14988-L14989) · [Before (L14988-L14989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14988-L14989)

```diff
-                     minutes: Lp,
-                     after: xp.after
+                     minutes: HT,
+                     after: nT.after
```

#### 1220. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14991-L14993` → after: `L14991-L14993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14991-L14993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14991-L14993) · [Before (L14991-L14993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14991-L14993)

```diff
-                   now: Math.round(Yp),
-                   helped: ie(Yp, null !== (Sp = pp.typicalPercents[Lp]) && void 0 !== Sp ? Sp : null),
-                   wait: Dp
+                   now: Math.round(kT),
+                   helped: mb(kT, null !== (gT = TT.typicalPercents[HT]) && void 0 !== gT ? gT : null),
+                   wait: jT
```

#### 1221. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L14997-L15002` → after: `L14997-L15002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14997-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L14997-L15002) · [Before (L14997-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L14997-L15002)

```diff
-                 const pp = Kd(Op.flowSteps, cp, Op.problem);
-                 if (null === pp || pp.fromPlayers < Bd) return null;
-                 const ip = function(pp, ip, cp) {
-                     const Op = Math.max(ip.fromPlayers, ...pp.filter((pp => pp.group === ip.group)).map((pp => pp.fromPlayers)));
-                     return null === cp || cp <= 0 || Op <= cp ? {
-                       players: ip.fromPlayers,
+                 const TT = Ri(WT.flowSteps, mT, WT.problem);
+                 if (null === TT || TT.fromPlayers < Fi) return null;
+                 const UT = function(TT, UT, mT) {
+                     const WT = Math.max(UT.fromPlayers, ...TT.filter((TT => TT.group === UT.group)).map((TT => TT.fromPlayers)));
+                     return null === mT || mT <= 0 || WT <= mT ? {
+                       players: UT.fromPlayers,
```

#### 1222. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15005` → after: `L15005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15005) · [Before (L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15005)

```diff
-                       players: ip.fromPlayers * cp / Op,
+                       players: UT.fromPlayers * mT / WT,
```

#### 1223. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15008-L15010` → after: `L15008-L15010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15008-L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15008-L15010) · [Before (L15008-L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15008-L15010)

```diff
-                   }(Op.flowSteps, pp, Op.weeklyPlayers),
-                   op = ip.isScaled && ip.players < 100 ? Math.round(ip.players) : Vd(ip.players),
-                   Ip = {
+                   }(WT.flowSteps, TT, WT.weeklyPlayers),
+                   zT = UT.isScaled && UT.players < 100 ? Math.round(UT.players) : Tb(UT.players),
+                   MT = {
```

#### 1224. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15012-L15013` → after: `L15012-L15013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15012-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15012-L15013) · [Before (L15012-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15012-L15013)

```diff
-                     days: nd,
-                     count: op,
+                     days: Ki,
+                     count: zT,
```

#### 1225. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15019-L15021` → after: `L15019-L15021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15019-L15021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15019-L15021) · [Before (L15019-L15021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15019-L15021)

```diff
-                     from: pp.from,
-                     to: pp.to,
-                     isOrLater: pp.isOrLater
+                     from: TT.from,
+                     to: TT.to,
+                     isOrLater: TT.isOrLater
```

#### 1226. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15023-L15025` → after: `L15023-L15025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15023-L15025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15023-L15025) · [Before (L15023-L15025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15023-L15025)

```diff
-                   now: Math.round(pp.share),
-                   helped: ie(pp.share, He(Op.flowSteps, pp)),
-                   wait: Ip
+                   now: Math.round(TT.share),
+                   helped: mb(TT.share, ib(WT.flowSteps, TT)),
+                   wait: MT
```

#### 1227. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15029-L15033` → after: `L15029-L15033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15029-L15033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15029-L15033) · [Before (L15029-L15033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15029-L15033)

```diff
-                 const pp = Kd(Op.progressSteps, cp, Op.problem);
-                 if (null === pp || pp.fromPlayers < Bd) return null;
-                 const ip = ie(pp.share, He(Op.progressSteps, pp)),
-                   op = null !== Op.weeklyPlayers ? 2 * Op.weeklyPlayers / nd : null === Op.dailyPlays ? 1 / 0 : 2 * Op.dailyPlays,
-                   Ip = Vd(Math.max(Jd, Math.min(.1 * pp.fromPlayers, op)));
+                 const TT = Ri(WT.progressSteps, mT, WT.problem);
+                 if (null === TT || TT.fromPlayers < Fi) return null;
+                 const UT = mb(TT.share, ib(WT.progressSteps, TT)),
+                   zT = null !== WT.weeklyPlayers ? 2 * WT.weeklyPlayers / Ki : null === WT.dailyPlays ? 1 / 0 : 2 * WT.dailyPlays,
+                   MT = Tb(Math.max(si, Math.min(.1 * TT.fromPlayers, zT)));
```

#### 1228. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15037-L15040` → after: `L15037-L15040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15037-L15040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15037-L15040) · [Before (L15037-L15040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15037-L15040)

```diff
-                     from: pp.from,
-                     to: pp.to,
-                     fromPlayers: pp.fromPlayers,
-                     toPlayers: pp.toPlayers
+                     from: TT.from,
+                     to: TT.to,
+                     fromPlayers: TT.fromPlayers,
+                     toPlayers: TT.toPlayers
```

#### 1229. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15042-L15044` → after: `L15042-L15044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15042-L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15042-L15044) · [Before (L15042-L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15042-L15044)

```diff
-                   selection: pp.selection,
-                   now: Math.round(pp.share),
-                   helped: ip,
+                   selection: TT.selection,
+                   now: Math.round(TT.share),
+                   helped: UT,
```

#### 1230. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15047-L15051` → after: `L15047-L15051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15047-L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15047-L15051) · [Before (L15047-L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15047-L15051)

```diff
-                     at: pp.from,
-                     players: pp.fromPlayers + Ip,
-                     more: Ip,
-                     helpedAt: pp.to,
-                     helpedPlayers: te(pp.toPlayers, ip, Ip)
+                     at: TT.from,
+                     players: TT.fromPlayers + MT,
+                     more: MT,
+                     helpedAt: TT.to,
+                     helpedPlayers: qb(TT.toPlayers, UT, MT)
```

#### 1231. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15056-L15061` → after: `L15056-L15061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15056-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15056-L15061) · [Before (L15056-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15056-L15061)

```diff
-                 var xp;
-                 const pp = Op.playsPerDay,
-                   ip = Ae(Op.dailySeries.plays),
-                   cp = Pe(Op.dailyPlays, ip);
-                 if (null === pp || null === cp) return null;
-                 const op = Math.max(ce(pp.now, pp.typical, 1), pp.now + (null !== (xp = null === ip || void 0 === ip ? void 0 : ip.averageMargin) && void 0 !== xp ? xp : 0));
+                 var nT;
+                 const TT = WT.playsPerDay,
+                   UT = Lb(WT.dailySeries.plays),
+                   mT = pb(WT.dailyPlays, UT);
+                 if (null === TT || null === mT) return null;
+                 const zT = Math.max(Wb(TT.now, TT.typical, 1), TT.now + (null !== (nT = null === UT || void 0 === UT ? void 0 : UT.averageMargin) && void 0 !== nT ? nT : 0));
```

#### 1232. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15066-L15069` → after: `L15066-L15069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15066-L15069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15066-L15069) · [Before (L15066-L15069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15066-L15069)

```diff
-                   now: Math.round(pp.now),
-                   helped: op < 1e3 ? Math.round(op) : Number(op.toPrecision(3)),
-                   wait: "days" === cp.kind && null !== cp.swing ? {
-                     ...cp,
+                   now: Math.round(TT.now),
+                   helped: zT < 1e3 ? Math.round(zT) : Number(zT.toPrecision(3)),
+                   wait: "days" === mT.kind && null !== mT.swing ? {
+                     ...mT,
```

#### 1233. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15071-L15072` → after: `L15071-L15072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15071-L15072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15071-L15072) · [Before (L15071-L15072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15071-L15072)

```diff
-                       low: pe(cp.swing.low),
-                       high: pe(cp.swing.high)
+                       low: Ub(mT.swing.low),
+                       high: Ub(mT.swing.high)
```

#### 1234. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15074` → after: `L15074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15074) · [Before (L15074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15074)

```diff
-                   } : cp
+                   } : mT
```

#### 1235. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15078-L15083` → after: `L15078-L15083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15078-L15083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15078-L15083) · [Before (L15078-L15083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15078-L15083)

```diff
-                 var Lp;
-                 const pp = Op.averageSessionMinutes,
-                   ip = Ae(Op.dailySeries.sessionMinutes),
-                   cp = Pe(Op.dailyPlays, ip);
-                 if (null === pp || null === cp) return null;
-                 const op = pp => Math.round(10 * pp) / 10;
+                 var HT;
+                 const TT = WT.averageSessionMinutes,
+                   UT = Lb(WT.dailySeries.sessionMinutes),
+                   mT = pb(WT.dailyPlays, UT);
+                 if (null === TT || null === mT) return null;
+                 const zT = TT => Math.round(10 * TT) / 10;
```

#### 1236. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15088-L15091` → after: `L15088-L15091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15088-L15091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15088-L15091) · [Before (L15088-L15091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15088-L15091)

```diff
-                   now: op(pp.now),
-                   helped: op(Math.max(ce(pp.now, pp.typical, .1), pp.now + (null !== (Lp = null === ip || void 0 === ip ? void 0 : ip.averageMargin) && void 0 !== Lp ? Lp : 0))),
-                   wait: "days" === cp.kind && null !== cp.swing ? {
-                     ...cp,
+                   now: zT(TT.now),
+                   helped: zT(Math.max(Wb(TT.now, TT.typical, .1), TT.now + (null !== (HT = null === UT || void 0 === UT ? void 0 : UT.averageMargin) && void 0 !== HT ? HT : 0))),
+                   wait: "days" === mT.kind && null !== mT.swing ? {
+                     ...mT,
```

#### 1237. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15093-L15094` → after: `L15093-L15094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15093-L15094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15093-L15094) · [Before (L15093-L15094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15093-L15094)

```diff
-                       low: op(cp.swing.low),
-                       high: op(cp.swing.high)
+                       low: zT(mT.swing.low),
+                       high: zT(mT.swing.high)
```

#### 1238. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15096` → after: `L15096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15096) · [Before (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15096)

```diff
-                   } : cp
+                   } : mT
```

#### 1239. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15100-L15103` → after: `L15100-L15103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15100-L15103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15100-L15103) · [Before (L15100-L15103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15100-L15103)

```diff
-                 const pp = Op.sessionsPerPlayer,
-                   ip = null === pp ? null : De(pp.days, Op.dailyPlays);
-                 if (null === pp || null === ip) return null;
-                 const cp = pp => Math.round(100 * pp) / 100;
+                 const TT = WT.sessionsPerPlayer,
+                   UT = null === TT ? null : lb(TT.days, WT.dailyPlays);
+                 if (null === TT || null === UT) return null;
+                 const mT = TT => Math.round(100 * TT) / 100;
```

#### 1240. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15107` → after: `L15107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15107) · [Before (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15107)

```diff
-                     days: pp.days
+                     days: TT.days
```

#### 1241. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15109-L15111` → after: `L15109-L15111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15109-L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15109-L15111) · [Before (L15109-L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15109-L15111)

```diff
-                   now: cp(pp.now),
-                   helped: cp(pp.now + Math.max(.05, null === pp.typical ? 0 : (pp.typical - pp.now) * Td)),
-                   wait: ip
+                   now: mT(TT.now),
+                   helped: mT(TT.now + Math.max(.05, null === TT.typical ? 0 : (TT.typical - TT.now) * Vi)),
+                   wait: UT
```

#### 1242. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15117-L15121` → after: `L15117-L15121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15117-L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15117-L15121) · [Before (L15117-L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15117-L15121)

```diff
-           }(xp, pp, [null !== (op = pp.title) && void 0 !== op ? op : "", ...zd(pp), null !== (Ip = pp.target) && void 0 !== Ip ? Ip : ""].join("\n"), ip);
-           if (null === Lp) return null;
-           const Yp = we(pp, cp, xp, Lp.now);
-           let Dp = null === Yp ? Lp.helped : Math.min(Lp.helped, Yp);
-           if (null !== Yp && Yp - Dp < (Dp - Lp.now) / 2 && (Dp = Yp), Dp <= Lp.now) return null;
+           }(nT, TT, [null !== (zT = TT.title) && void 0 !== zT ? zT : "", ...oi(TT), null !== (MT = TT.target) && void 0 !== MT ? MT : ""].join("\n"), UT);
+           if (null === HT) return null;
+           const kT = vb(TT, mT, nT, HT.now);
+           let jT = null === kT ? HT.helped : Math.min(HT.helped, kT);
+           if (null !== kT && kT - jT < (jT - HT.now) / 2 && (jT = kT), jT <= HT.now) return null;
```

#### 1243. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15123-L15127` → after: `L15123-L15127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15123-L15127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15123-L15127) · [Before (L15123-L15127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15123-L15127)

```diff
-             measure: Ap
-           } = Lp, Pp = "players" === Lp.wait.kind && "progressStep" === Ap.kind ? {
-             ...Lp.wait,
-             helpedPlayers: te(Ap.toPlayers, Dp, Lp.wait.more)
-           } : Lp.wait;
+             measure: lT
+           } = HT, LT = "players" === HT.wait.kind && "progressStep" === lT.kind ? {
+             ...HT.wait,
+             helpedPlayers: qb(lT.toPlayers, jT, HT.wait.more)
+           } : HT.wait;
```

#### 1244. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15129-L15135` → after: `L15129-L15135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15129-L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15129-L15135) · [Before (L15129-L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15129-L15135)

```diff
-             statKey: xp,
-             ...Lp,
-             selection: null !== (Sp = Lp.selection) && void 0 !== Sp ? Sp : null,
-             helped: Dp,
-             goal: Yp,
-             wait: Pp,
-             undo: We(pp.code, Op)
+             statKey: nT,
+             ...HT,
+             selection: null !== (gT = HT.selection) && void 0 !== gT ? gT : null,
+             helped: jT,
+             goal: kT,
+             wait: LT,
+             undo: Bb(TT.code, WT)
```

#### 1245. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15139-L15140` → after: `L15139-L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15139-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15139-L15140) · [Before (L15139-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15139-L15140)

```diff
-         function te(pp, ip, cp) {
-           return Math.round(pp + ip / 100 * cp)
+         function qb(TT, UT, mT) {
+           return Math.round(TT + UT / 100 * mT)
```

#### 1246. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15143-L15149` → after: `L15143-L15149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15143-L15149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15143-L15149) · [Before (L15143-L15149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15143-L15149)

```diff
-         function He(pp, ip) {
-           return function(pp) {
-             if (0 === pp.length) return null;
-             const ip = [...pp].sort(((pp, ip) => pp - ip)),
-               cp = Math.floor(ip.length / 2);
-             return ip.length % 2 === 1 ? ip[cp] : (ip[cp - 1] + ip[cp]) / 2
-           }(pp.filter((pp => pp !== ip && pp.group === ip.group && !pp.isBranch && pp.fromPlayers >= Bd)).map((pp => pp.share)))
+         function ib(TT, UT) {
+           return function(TT) {
+             if (0 === TT.length) return null;
+             const UT = [...TT].sort(((TT, UT) => TT - UT)),
+               mT = Math.floor(UT.length / 2);
+             return UT.length % 2 === 1 ? UT[mT] : (UT[mT - 1] + UT[mT]) / 2
+           }(TT.filter((TT => TT !== UT && TT.group === UT.group && !TT.isBranch && TT.fromPlayers >= Fi)).map((TT => TT.share)))
```

#### 1247. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15152-L15153` → after: `L15152-L15153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15152-L15153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15152-L15153) · [Before (L15152-L15153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15152-L15153)

```diff
-         function de(pp) {
-           return pp.toLocaleString("en-US", {
+         function bb(TT) {
+           return TT.toLocaleString("en-US", {
```

#### 1248. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15158-L15159` → after: `L15158-L15159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15158-L15159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15158-L15159) · [Before (L15158-L15159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15158-L15159)

```diff
-         function ee(pp, ip) {
-           return 1 === pp ? ip("last 1 minute or more") : `${ip("last")} ${pp} ${ip("minutes or more")}`
+         function Ob(TT, UT) {
+           return 1 === TT ? UT("last 1 minute or more") : `${UT("last")} ${TT} ${UT("minutes or more")}`
```

#### 1249. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15162` → after: `L15162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15162) · [Before (L15162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15162)

```diff
-         function ue(pp) {
+         function eb(TT) {
```

#### 1250. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15164-L15165` → after: `L15164-L15165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15164-L15165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15164-L15165) · [Before (L15164-L15165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15164-L15165)

```diff
-             stat: pp.statKey,
-             selection: pp.selection
+             stat: TT.statKey,
+             selection: TT.selection
```

#### 1251. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15169` → after: `L15169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15169) · [Before (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15169)

```diff
-         function je(pp, ip) {
+         function Yb(TT, UT) {
```

#### 1252. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15171-L15176` → after: `L15171-L15176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15171-L15176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15171-L15176) · [Before (L15171-L15176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15171-L15176)

```diff
-             measure: cp,
-             now: Op,
-             wait: op
-           } = pp, Ip = "players" === op.kind || 7 === op.days ? ip("in a week") : `${ip("in")} ${op.days} ${ip("days")}`;
-           let Sp;
-           switch (cp.kind) {
+             measure: mT,
+             now: WT,
+             wait: zT
+           } = TT, MT = "players" === zT.kind || 7 === zT.days ? UT("in a week") : `${UT("in")} ${zT.days} ${UT("days")}`;
+           let gT;
+           switch (mT.kind) {
```

#### 1253. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15178` → after: `L15178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15178) · [Before (L15178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15178)

```diff
-               Sp = [`${ip("if more than")} ${Op} ${ip("in 100")} ${ip("sessions")} ${ee(cp.minutes,ip)}`];
+               gT = [`${UT("if more than")} ${WT} ${UT("in 100")} ${UT("sessions")} ${Ob(mT.minutes,UT)}`];
```

#### 1254. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15181-L15185` → after: `L15181-L15185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15181-L15185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15181-L15185) · [Before (L15181-L15185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15181-L15185)

```diff
-               Sp = [`${ip("if more players at")} `, {
-                 code: cp.from
-               }, ` ${ip("reach")} `, {
-                 code: cp.to
-               }, cp.isOrLater ? ` ${ip("or a later one")}` : "", ` ${ip("than now")} (${Op} ${ip("in 100")})`];
+               gT = [`${UT("if more players at")} `, {
+                 code: mT.from
+               }, ` ${UT("reach")} `, {
+                 code: mT.to
+               }, mT.isOrLater ? ` ${UT("or a later one")}` : "", ` ${UT("than now")} (${WT} ${UT("in 100")})`];
```

#### 1255. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15188` → after: `L15188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15188) · [Before (L15188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15188)

```diff
-               Sp = [`${ip("if more players at")} ${cp.from} ${ip("reach")} ${cp.to} ${ip("than now")} (${Op} ${ip("in 100")})`];
+               gT = [`${UT("if more players at")} ${mT.from} ${UT("reach")} ${mT.to} ${UT("than now")} (${WT} ${UT("in 100")})`];
```

#### 1256. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15191` → after: `L15191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15191) · [Before (L15191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15191)

```diff
-               Sp = [ip("if most days have more plays than now")];
+               gT = [UT("if most days have more plays than now")];
```

#### 1257. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15194` → after: `L15194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15194) · [Before (L15194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15194)

```diff
-               Sp = [`${ip("if sessions last longer than now")} (${de(Op)} ${ip("minutes")})`];
+               gT = [`${UT("if sessions last longer than now")} (${bb(WT)} ${UT("minutes")})`];
```

#### 1258. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15197` → after: `L15197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15197) · [Before (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15197)

```diff
-               Sp = [ip("if players come back more often than now")]
+               gT = [UT("if players come back more often than now")]
```

#### 1259. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15199` → after: `L15199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15199) · [Before (L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15199)

```diff
-           return [`${ip("Check")} `, ue(pp), ` ${Ip}: `, ...Sp, `, ${ip("it helped")}.`]
+           return [`${UT("Check")} `, eb(TT), ` ${MT}: `, ...gT, `, ${UT("it helped")}.`]
```

#### 1260. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15201` → after: `L15201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15201) · [Before (L15201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15201)

```diff
-         const ke = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, me = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, Re = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
+         const Jb = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, xb = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, db = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
```

#### 1261. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15203-L15204` → after: `L15203-L15204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15203-L15204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15203-L15204) · [Before (L15203-L15204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15203-L15204)

```diff
-         function qe(pp) {
-           return ke.test(pp) || me.test(pp) && !Re.test(pp)
+         function wb(TT) {
+           return Jb.test(TT) || xb.test(TT) && !db.test(TT)
```

#### 1262. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15207-L15218` → after: `L15207-L15218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15207-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15207-L15218) · [Before (L15207-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15207-L15218)

```diff
-         function Me(pp) {
-           let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           const cp = pp.steps.filter((pp => qe(pp.text))),
-             Op = new Set(ip ? cp.slice(1) : cp);
-           if (0 === Op.size) return pp;
-           const op = pp => !Op.has(pp),
-             Ip = pp.blocks.flatMap((pp => {
-               if ("list" !== pp.kind) return [pp];
-               const ip = pp.items.filter(op);
-               return 0 === ip.length ? [] : [{
-                 ...pp,
-                 items: ip
+         function tb(TT) {
+           let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           const mT = TT.steps.filter((TT => wb(TT.text))),
+             WT = new Set(UT ? mT.slice(1) : mT);
+           if (0 === WT.size) return TT;
+           const zT = TT => !WT.has(TT),
+             MT = TT.blocks.flatMap((TT => {
+               if ("list" !== TT.kind) return [TT];
+               const UT = TT.items.filter(zT);
+               return 0 === UT.length ? [] : [{
+                 ...TT,
+                 items: UT
```

#### 1263. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15222-L15224` → after: `L15222-L15224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15222-L15224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15222-L15224) · [Before (L15222-L15224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15222-L15224)

```diff
-             ...pp,
-             blocks: Ip,
-             steps: pp.steps.filter(op)
+             ...TT,
+             blocks: MT,
+             steps: TT.steps.filter(zT)
```

#### 1264. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15227` → after: `L15227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15227) · [Before (L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15227)

```diff
-         const Ce = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, Ee = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, Xe = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, le = new Set(["Math", "Date", "JSON", "cons … [truncated]
+         const ab = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, yb = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, Xb = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, Ib = new Set(["Math", "Date", "JSON", "cons … [truncated]
```

#### 1265. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15229-L15232` → after: `L15229-L15232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15229-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15229-L15232) · [Before (L15229-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15229-L15232)

```diff
-         function Je(pp, ip) {
-           for (const [cp] of(null !== ip && void 0 !== ip ? ip : "").matchAll(Ce)) {
-             pp.add(cp);
-             for (const ip of cp.split(".")) pp.add(ip)
+         function sb(TT, UT) {
+           for (const [mT] of(null !== UT && void 0 !== UT ? UT : "").matchAll(ab)) {
+             TT.add(mT);
+             for (const UT of mT.split(".")) TT.add(UT)
```

#### 1266. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15236-L15242` → after: `L15236-L15242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15236-L15242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15236-L15242) · [Before (L15236-L15242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15236-L15242)

```diff
-         function Be(pp) {
-           if (null === pp.worldCode || void 0 === pp.worldCode) return null;
-           const ip = [];
-           for (const op of [null === (cp = pp.customEvents) || void 0 === cp ? void 0 : cp.byEvent, null === (Op = pp.playerTotals) || void 0 === Op ? void 0 : Op.playerTotals]) {
-             var cp, Op;
-             EL(null !== op && void 0 !== op ? op : {}, ((pp, cp, Op) => {
-               ip.push(cp, ...Object.keys(Op))
+         function Fb(TT) {
+           if (null === TT.worldCode || void 0 === TT.worldCode) return null;
+           const UT = [];
+           for (const zT of [null === (mT = TT.customEvents) || void 0 === mT ? void 0 : mT.byEvent, null === (WT = TT.playerTotals) || void 0 === WT ? void 0 : WT.playerTotals]) {
+             var mT, WT;
+             tH(null !== zT && void 0 !== zT ? zT : {}, ((TT, mT, WT) => {
+               UT.push(mT, ...Object.keys(WT))
```

#### 1267. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15245-L15255` → after: `L15245-L15255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15245-L15255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15245-L15255) · [Before (L15245-L15255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15245-L15255)

```diff
-           return function(pp) {
-             let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-             const cp = new Set(XD.keys());
-             for (const Ip of [...FY, ...Qe]) cp.add(`api.${Ip}`);
-             for (const Ip of pp.constants)
-               for (const pp of [Ip.name, Ip.value, Ip.where, Ip.usedIn]) Je(cp, pp);
-             for (const Ip of pp.callbacks) {
-               Je(cp, Ip.name);
-               for (const pp of null !== (Op = Ip.params) && void 0 !== Op ? Op : []) {
-                 var Op;
-                 Je(cp, pp)
+           return function(TT) {
+             let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+             const mT = new Set(yj.keys());
+             for (const MT of [...Kk, ...Qb]) mT.add(`api.${MT}`);
+             for (const MT of TT.constants)
+               for (const TT of [MT.name, MT.value, MT.where, MT.usedIn]) sb(mT, TT);
+             for (const MT of TT.callbacks) {
+               sb(mT, MT.name);
+               for (const TT of null !== (WT = MT.params) && void 0 !== WT ? WT : []) {
+                 var WT;
+                 sb(mT, TT)
```

#### 1268. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15258-L15261` → after: `L15258-L15261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15258-L15261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15258-L15261) · [Before (L15258-L15261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15258-L15261)

```diff
-             for (const Ip of pp.analyticsHelpers) Je(cp, Ip);
-             for (const Ip of null !== (op = pp.messages) && void 0 !== op ? op : []) {
-               var op;
-               Je(cp, Ip.where), Je(cp, Ip.line)
+             for (const MT of TT.analyticsHelpers) sb(mT, MT);
+             for (const MT of null !== (zT = TT.messages) && void 0 !== zT ? zT : []) {
+               var zT;
+               sb(mT, MT.where), sb(mT, MT.line)
```

#### 1269. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15263-L15267` → after: `L15263-L15267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15263-L15267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15263-L15267) · [Before (L15263-L15267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15263-L15267)

```diff
-             for (const Ip of pp.events)
-               for (const pp of [Ip.eventType, Ip.valueExpression, Ip.numberExpression, Ip.where, Ip.guard, ...Ip.values]) Je(cp, pp);
-             for (const Ip of ip) Je(cp, Ip);
-             return cp
-           }(pp.worldCode, ip)
+             for (const MT of TT.events)
+               for (const TT of [MT.eventType, MT.valueExpression, MT.numberExpression, MT.where, MT.guard, ...MT.values]) sb(mT, TT);
+             for (const MT of UT) sb(mT, MT);
+             return mT
+           }(TT.worldCode, UT)
```

#### 1270. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15270-L15272` → after: `L15270-L15272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15270-L15272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15270-L15272) · [Before (L15270-L15272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15270-L15272)

```diff
-         function Ne(pp, ip, cp, Op) {
-           const op = pp.split(".");
-           return "api" === op[0] && op.length > 1 ? null !== Op ? Op.has(op[1]) : "pasteCode" !== cp || ip.has(`api.${op[1]}`) : !(!le.has(op[0]) && !ip.has(pp)) || op.length > 1 && op.every((pp => ip.has(pp)))
+         function Pb(TT, UT, mT, WT) {
+           const zT = TT.split(".");
+           return "api" === zT[0] && zT.length > 1 ? null !== WT ? WT.has(zT[1]) : "pasteCode" !== mT || UT.has(`api.${zT[1]}`) : !(!Ib.has(zT[0]) && !UT.has(TT)) || zT.length > 1 && zT.every((TT => UT.has(TT)))
```

#### 1271. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15275-L15276` → after: `L15275-L15276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15275-L15276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15275-L15276) · [Before (L15275-L15276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15275-L15276)

```diff
-         function Te(pp) {
-           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(pp)
+         function Vb(TT) {
+           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(TT)
```

#### 1272. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15279-L15281` → after: `L15279-L15281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15279-L15281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15279-L15281) · [Before (L15279-L15281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15279-L15281)

```diff
-         function fe(pp, ip) {
-           return ip.startsWith("api.") ? {
-             text: pp,
+         function ub(TT, UT) {
+           return UT.startsWith("api.") ? {
+             text: TT,
```

#### 1273. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15285` → after: `L15285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15285) · [Before (L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15285)

```diff
-             text: pp,
+             text: TT,
```

#### 1274. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15289` → after: `L15289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15289) · [Before (L15289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15289)

```diff
-         const be = GA, he = 10, ae = 3, ne = 8, Fe = /tutorial|onboarding/i, ge = /event|flow|heatmap|order players/i, Ge = .15, re = .1, Ze = 3, ze = .25, se = .1, Ke = 2, Ve = 3, pu = .7, iu = 5;
+         const Cb = Nl, rb = 10, Kb = 3, Sb = 8, Gb = /tutorial|onboarding/i, Nb = /event|flow|heatmap|order players/i, Eb = .15, hb = .1, Db = 3, ob = .25, Ab = .1, Rb = 2, TO = 3, UO = .7, mO = 5;
```

#### 1275. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15291-L15292` → after: `L15291-L15292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15291-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15291-L15292) · [Before (L15291-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15291-L15292)

```diff
-         function cu(pp, ip) {
-           return "" === ip ? pp : /^-?\d+$/.test(ip) ? `${pp} ${ip}` : /\d/.test(ip) ? ip : `${pp}: ${ip}`
+         function WO(TT, UT) {
+           return "" === UT ? TT : /^-?\d+$/.test(UT) ? `${TT} ${UT}` : /\d/.test(UT) ? UT : `${TT}: ${UT}`
```

#### 1276. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15295-L15298` → after: `L15295-L15298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15295-L15298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15295-L15298) · [Before (L15295-L15298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15295-L15298)

```diff
-         function Ou(pp) {
-           const ip = ML(pp),
-             cp = ip.lastIndexOf(": ");
-           return -1 === cp ? ip : cu(ip.slice(0, cp), ip.slice(cp + 2))
+         function zO(TT) {
+           const UT = dH(TT),
+             mT = UT.lastIndexOf(": ");
+           return -1 === mT ? UT : WO(UT.slice(0, mT), UT.slice(mT + 2))
```

#### 1277. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15301-L15310` → after: `L15301-L15310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15301-L15310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15301-L15310) · [Before (L15301-L15310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15301-L15310)

```diff
-         function ou(pp, ip, cp) {
-           var Op, op;
-           const Ip = kU(ip.flow, ip.progressions, null, null, cp),
-             Sp = null !== (Op = null === (op = pp.stats) || void 0 === op ? void 0 : op.rankingWindow.uniquePlayers) && void 0 !== Op ? Op : 0;
-           if ("flowStep" === (null === Ip || void 0 === Ip ? void 0 : Ip.kind)) {
-             const pp = ip.flow,
-               cp = Math.max(0, ...pp.steps.map((pp => pp.fromPlayers))),
-               Op = pp.steps.filter((pp => {
-                 var ip, Op;
-                 return pp.isChain && pp.fromPlayers >= (null !== (ip = null === (Op = pp.start) || void 0 === Op ? void 0 : Op.players) && void 0 !== ip ? ip : cp) * re
+         function MO(TT, UT, mT) {
+           var WT, zT;
+           const MT = JZ(UT.flow, UT.progressions, null, null, mT),
+             gT = null !== (WT = null === (zT = TT.stats) || void 0 === zT ? void 0 : zT.rankingWindow.uniquePlayers) && void 0 !== WT ? WT : 0;
+           if ("flowStep" === (null === MT || void 0 === MT ? void 0 : MT.kind)) {
+             const TT = UT.flow,
+               mT = Math.max(0, ...TT.steps.map((TT => TT.fromPlayers))),
+               WT = TT.steps.filter((TT => {
+                 var UT, WT;
+                 return TT.isChain && TT.fromPlayers >= (null !== (UT = null === (WT = TT.start) || void 0 === WT ? void 0 : WT.players) && void 0 !== UT ? UT : mT) * hb
```

#### 1278. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15312` → after: `L15312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15312) · [Before (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15312)

```diff
-               op = (pp, ip) => {
+               zT = (TT, UT) => {
```

#### 1279. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15314-L15318` → after: `L15314-L15318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15314-L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15314-L15318) · [Before (L15314-L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15314-L15318)

```diff
-                   from: Ou(pp.from),
-                   to: Ou(pp.to),
-                   isOrLater: pp.isOrLater,
-                   fromPlayers: pp.fromPlayers,
-                   lost: pp.lost,
+                   from: zO(TT.from),
+                   to: zO(TT.to),
+                   isOrLater: TT.isOrLater,
+                   fromPlayers: TT.fromPlayers,
+                   lost: TT.lost,
```

#### 1280. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15322-L15324` → after: `L15322-L15324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15322-L15324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15322-L15324) · [Before (L15322-L15324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15322-L15324)

```diff
-                   share: pp.share,
-                   players: (cp = pp.fromPlayers, Sp > 0 ? Math.min(cp, Sp) : cp),
-                   later: ip
+                   share: TT.share,
+                   players: (mT = TT.fromPlayers, gT > 0 ? Math.min(mT, gT) : mT),
+                   later: UT
```

#### 1281. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15326` → after: `L15326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15326) · [Before (L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15326)

```diff
-                 var cp
+                 var mT
```

#### 1282. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15328-L15335` → after: `L15328-L15335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15328-L15335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15328-L15335) · [Before (L15328-L15335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15328-L15335)

```diff
-               xp = [Ip.step, Ip.mostLost, pp.lowestShare].filter((pp => null !== pp && Op.includes(pp)));
-             return [...new Set(xp)].map((ip => {
-               const cp = function(pp, ip) {
-                   const cp = new Set([ip]),
-                     Op = [ip];
-                   for (; Op.length > 0;) {
-                     const ip = Op.shift();
-                     for (const op of pp) op.from !== ip || cp.has(op.to) || (cp.add(op.to), Op.push(op.to))
+               nT = [MT.step, MT.mostLost, TT.lowestShare].filter((TT => null !== TT && WT.includes(TT)));
+             return [...new Set(nT)].map((UT => {
+               const mT = function(TT, UT) {
+                   const mT = new Set([UT]),
+                     WT = [UT];
+                   for (; WT.length > 0;) {
+                     const UT = WT.shift();
+                     for (const zT of TT) zT.from !== UT || mT.has(zT.to) || (mT.add(zT.to), WT.push(zT.to))
```

#### 1283. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15337-L15340` → after: `L15337-L15340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15337-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15337-L15340) · [Before (L15337-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15337-L15340)

```diff
-                   return cp
-                 }(pp.steps, ip.to),
-                 Ip = Op.filter((pp => pp !== ip && cp.has(pp.from)));
-               return op(ip, Ip.map((pp => op(pp, []))))
+                   return mT
+                 }(TT.steps, UT.to),
+                 MT = WT.filter((TT => TT !== UT && mT.has(TT.from)));
+               return zT(UT, MT.map((TT => zT(TT, []))))
```

#### 1284. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15343` → after: `L15343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15343) · [Before (L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15343)

```diff
-           if ("progressStep" === (null === Ip || void 0 === Ip ? void 0 : Ip.kind)) {
+           if ("progressStep" === (null === MT || void 0 === MT ? void 0 : MT.kind)) {
```

#### 1285. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15345-L15351` → after: `L15345-L15351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15345-L15351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15345-L15351) · [Before (L15345-L15351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15345-L15351)

```diff
-               progression: pp
-             } = Ip, ip = pp.values[0].players, cp = pp.steps.filter((pp => pp.from.players >= ip * re)), Op = (cp, Op) => ({
-               from: cu(pp.eventType, cp.from.value),
-               to: cu(pp.eventType, cp.to.value),
-               isOrLater: cp.reached > cp.to.players,
-               fromPlayers: cp.from.players,
-               lost: cp.lost,
+               progression: TT
+             } = MT, UT = TT.values[0].players, mT = TT.steps.filter((TT => TT.from.players >= UT * hb)), WT = (mT, WT) => ({
+               from: WO(TT.eventType, mT.from.value),
+               to: WO(TT.eventType, mT.to.value),
+               isOrLater: mT.reached > mT.to.players,
+               fromPlayers: mT.from.players,
+               lost: mT.lost,
```

#### 1286. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15355-L15356` → after: `L15355-L15356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15355-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15355-L15356) · [Before (L15355-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15355-L15356)

```diff
-                 gameCategory: pp.gameCategory,
-                 eventType: pp.eventType,
+                 gameCategory: TT.gameCategory,
+                 eventType: TT.eventType,
```

#### 1287. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15359-L15363` → after: `L15359-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15359-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15359-L15363) · [Before (L15359-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15359-L15363)

```diff
-               share: cp.share,
-               players: cp.from.players * Math.min(1, ip > 0 && Sp > 0 ? Sp / ip : 1),
-               later: Op
-             }), op = [Ip.step, Ip.mostLost, pp.lowestShare].filter((pp => null !== pp && cp.includes(pp)));
-             return [...new Set(op)].map((pp => Op(pp, cp.slice(cp.indexOf(pp) + 1).map((pp => Op(pp, []))))))
+               share: mT.share,
+               players: mT.from.players * Math.min(1, UT > 0 && gT > 0 ? gT / UT : 1),
+               later: WT
+             }), zT = [MT.step, MT.mostLost, TT.lowestShare].filter((TT => null !== TT && mT.includes(TT)));
+             return [...new Set(zT)].map((TT => WT(TT, mT.slice(mT.indexOf(TT) + 1).map((TT => WT(TT, []))))))
```

#### 1288. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15368-L15385` → after: `L15368-L15385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15368-L15385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15368-L15385) · [Before (L15368-L15385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15368-L15385)

```diff
-         function Iu(pp, ip) {
-           const cp = ML(pp);
-           return cp.startsWith(`${ip}: `) ? cp.slice(ip.length + 2) : null
-         }
- 
-         function Su(pp, ip) {
-           var cp, Op;
-           const op = function(pp) {
-             var ip, cp, Op, op;
-             const Ip = null !== (ip = null === (cp = pp.playerTotals) || void 0 === cp ? void 0 : cp.playerTotals) && void 0 !== ip ? ip : {},
-               Sp = null !== (Op = null === (op = pp.flow) || void 0 === op ? void 0 : op.edges) && void 0 !== Op ? Op : [];
-             let xp = null;
-             return EL(Ip, ((ip, cp, Op) => {
-               var op;
-               const Ip = null === (op = pp.worldCode) || void 0 === op ? void 0 : op.events.find((pp => pp.isLiteralType && pp.eventType === cp));
-               if (!Fe.test(cp) || void 0 === Ip || null !== Ip.valueExpression) return;
- ... (2 more removed lines; see GitHub link above)
+         function gO(TT, UT) {
+           const mT = dH(TT);
+           return mT.startsWith(`${UT}: `) ? mT.slice(UT.length + 2) : null
+         }
+ 
+         function nO(TT, UT) {
+           var mT, WT;
+           const zT = function(TT) {
+             var UT, mT, WT, zT;
+             const MT = null !== (UT = null === (mT = TT.playerTotals) || void 0 === mT ? void 0 : mT.playerTotals) && void 0 !== UT ? UT : {},
+               gT = null !== (WT = null === (zT = TT.flow) || void 0 === zT ? void 0 : zT.edges) && void 0 !== WT ? WT : [];
+             let nT = null;
+             return tH(MT, ((UT, mT, WT) => {
+               var zT;
+               const MT = null === (zT = TT.worldCode) || void 0 === zT ? void 0 : zT.events.find((TT => TT.isLiteralType && TT.eventType === mT));
+               if (!Gb.test(mT) || void 0 === MT || null !== MT.valueExpression) return;
+ ... (2 more added lines; see GitHub link above)
```

#### 1289. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15387-L15388` → after: `L15387-L15388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15387-L15388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15387-L15388) · [Before (L15387-L15388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15387-L15388)

```diff
-                     value: ip,
-                     players: cp
+                     value: UT,
+                     players: mT
```

#### 1290. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15390-L15391` → after: `L15390-L15391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15390-L15391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15390-L15391) · [Before (L15390-L15391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15390-L15391)

```diff
-                 })).sort(((pp, ip) => ip.players - pp.players)),
-                 Yp = new Map(Lp.map(((pp, ip) => {
+                 })).sort(((TT, UT) => UT.players - TT.players)),
+                 kT = new Map(HT.map(((TT, UT) => {
```

#### 1291. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15393-L15395` → after: `L15393-L15395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15393-L15395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15393-L15395) · [Before (L15393-L15395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15393-L15395)

```diff
-                     value: cp
-                   } = pp;
-                   return [cp, ip]
+                     value: mT
+                   } = TT;
+                   return [mT, UT]
```

#### 1292. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15397` → after: `L15397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15397) · [Before (L15397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15397)

```diff
-                 Dp = Lp.every((pp => {
+                 jT = HT.every((TT => {
```

#### 1293. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15399-L15401` → after: `L15399-L15401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15399-L15401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15399-L15401) · [Before (L15399-L15401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15399-L15401)

```diff
-                     value: ip
-                   } = pp;
-                   return Ip.values.includes(ip)
+                     value: UT
+                   } = TT;
+                   return MT.values.includes(UT)
```

#### 1294. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15403` → after: `L15403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15403) · [Before (L15403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15403)

```diff
-                 Ap = Lp.slice(1).every(((pp, ip) => {
+                 lT = HT.slice(1).every(((TT, UT) => {
```

#### 1295. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15405-L15407` → after: `L15405-L15407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15405-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15405-L15407) · [Before (L15405-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15405-L15407)

```diff
-                     players: cp
-                   } = pp;
-                   return cp < Lp[ip].players
+                     players: mT
+                   } = TT;
+                   return mT < HT[UT].players
```

#### 1296. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15409-L15413` → after: `L15409-L15413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15409-L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15409-L15413) · [Before (L15409-L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15409-L15413)

```diff
-                 Pp = Sp.some((pp => {
-                   var ip, Op;
-                   const op = Yp.get(null !== (ip = Iu(pp.from, cp)) && void 0 !== ip ? ip : ""),
-                     Ip = Yp.get(null !== (Op = Iu(pp.to, cp)) && void 0 !== Op ? Op : "");
-                   return void 0 !== op && void 0 !== Ip && op > Ip
+                 LT = gT.some((TT => {
+                   var UT, WT;
+                   const zT = kT.get(null !== (UT = gO(TT.from, mT)) && void 0 !== UT ? UT : ""),
+                     MT = kT.get(null !== (WT = gO(TT.to, mT)) && void 0 !== WT ? WT : "");
+                   return void 0 !== zT && void 0 !== MT && zT > MT
```

#### 1297. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15415-L15419` → after: `L15415-L15419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15415-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15415-L15419) · [Before (L15415-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15415-L15419)

```diff
-                 Wp = null === xp || Lp[0].players > xp.values[0].players;
-               Lp.length >= ae && Dp && Ap && !Pp && Wp && (xp = {
-                 gameCategory: ip,
-                 eventType: cp,
-                 values: Lp
+                 pT = null === nT || HT[0].players > nT.values[0].players;
+               HT.length >= Kb && jT && lT && !LT && pT && (nT = {
+                 gameCategory: UT,
+                 eventType: mT,
+                 values: HT
```

#### 1298. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15421-L15424` → after: `L15421-L15424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15421-L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15421-L15424) · [Before (L15421-L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15421-L15424)

```diff
-             })), xp
-           }(pp);
-           if (null === op) return [];
-           const Ip = null !== (cp = null === (Op = pp.stats) || void 0 === Op ? void 0 : Op.rankingWindow.uniquePlayers) && void 0 !== cp ? cp : 0,
+             })), nT
+           }(TT);
+           if (null === zT) return [];
+           const MT = null !== (mT = null === (WT = TT.stats) || void 0 === WT ? void 0 : WT.rankingWindow.uniquePlayers) && void 0 !== mT ? mT : 0,
```

#### 1299. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15426-L15432` → after: `L15426-L15432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15426-L15432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15426-L15432) · [Before (L15426-L15432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15426-L15432)

```diff
-               values: Sp,
-               eventType: xp
-             } = op,
-             Lp = Sp[0].players,
-             Yp = {
-               gameCategory: op.gameCategory,
-               eventType: xp,
+               values: gT,
+               eventType: nT
+             } = zT,
+             HT = gT[0].players,
+             kT = {
+               gameCategory: zT.gameCategory,
+               eventType: nT,
```

#### 1300. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15435-L15440` → after: `L15435-L15440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15435-L15440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15435-L15440) · [Before (L15435-L15440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15435-L15440)

```diff
-             Dp = Sp.slice(1).flatMap(((pp, cp) => {
-               const Op = Sp[cp];
-               return Op.players >= ip && Op.players >= Lp * re ? [{
-                 from: Op,
-                 to: pp,
-                 lost: Op.players - pp.players
+             jT = gT.slice(1).flatMap(((TT, mT) => {
+               const WT = gT[mT];
+               return WT.players >= UT && WT.players >= HT * hb ? [{
+                 from: WT,
+                 to: TT,
+                 lost: WT.players - TT.players
```

#### 1301. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15443-L15445` → after: `L15443-L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15443-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15443-L15445) · [Before (L15443-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15443-L15445)

```diff
-             Ap = (pp, ip) => ({
-               from: pp.from.value,
-               to: pp.to.value,
+             lT = (TT, UT) => ({
+               from: TT.from.value,
+               to: TT.to.value,
```

#### 1302. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15447-L15448` → after: `L15447-L15448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15447-L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15447-L15448) · [Before (L15447-L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15447-L15448)

```diff
-               fromPlayers: pp.from.players,
-               lost: pp.lost,
+               fromPlayers: TT.from.players,
+               lost: TT.lost,
```

#### 1303. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15451-L15455` → after: `L15451-L15455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15451-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15451-L15455) · [Before (L15451-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15451-L15455)

```diff
-               selection: Yp,
-               group: xp,
-               share: pp.to.players / pp.from.players,
-               players: pp.from.players * Math.min(1, Lp > 0 && Ip > 0 ? Ip / Lp : 1),
-               later: ip
+               selection: kT,
+               group: nT,
+               share: TT.to.players / TT.from.players,
+               players: TT.from.players * Math.min(1, HT > 0 && MT > 0 ? MT / HT : 1),
+               later: UT
```

#### 1304. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15457-L15462` → after: `L15457-L15462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15457-L15462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15457-L15462) · [Before (L15457-L15462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15457-L15462)

```diff
-             Pp = [...Dp].sort(((pp, ip) => ip.lost - pp.lost))[0],
-             Wp = [...Dp].sort(((pp, ip) => pp.to.players / pp.from.players - ip.to.players / ip.from.players))[0];
-           return [...new Set([Pp, Wp])].flatMap((pp => {
-             if (void 0 === pp) return [];
-             const ip = Dp.slice(Dp.indexOf(pp) + 1).map((pp => Ap(pp, [])));
-             return [Ap(pp, ip)]
+             LT = [...jT].sort(((TT, UT) => UT.lost - TT.lost))[0],
+             pT = [...jT].sort(((TT, UT) => TT.to.players / TT.from.players - UT.to.players / UT.from.players))[0];
+           return [...new Set([LT, pT])].flatMap((TT => {
+             if (void 0 === TT) return [];
+             const UT = jT.slice(jT.indexOf(TT) + 1).map((TT => lT(TT, [])));
+             return [lT(TT, UT)]
```

#### 1305. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15466` → after: `L15466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15466) · [Before (L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15466)

```diff
-         function xu(pp, ip) {
+         function HO(TT, UT) {
```

#### 1306. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15468-L15474` → after: `L15468-L15474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15468-L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15468-L15474) · [Before (L15468-L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15468-L15474)

```diff
-             share: cp,
-             players: Op,
-             later: op,
-             ...Ip
-           } = pp, Sp = 1 - cp - Ge;
-           return Sp > 0 && Op >= ip && Ip.fromPlayers >= ip ? {
-             ...Ip,
+             share: mT,
+             players: WT,
+             later: zT,
+             ...MT
+           } = TT, gT = 1 - mT - Eb;
+           return gT > 0 && WT >= UT && MT.fromPlayers >= UT ? {
+             ...MT,
```

#### 1307. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15476` → after: `L15476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15476) · [Before (L15476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15476)

```diff
-             score: Sp * Op
+             score: gT * WT
```

#### 1308. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15480-L15485` → after: `L15480-L15485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15480-L15485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15480-L15485) · [Before (L15480-L15485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15480-L15485)

```diff
-         function Lu(pp, ip, cp, Op, op, Ip) {
-           if (cp.length < ae || cp[0].players < Op) return null;
-           const Sp = cp.slice(1).flatMap(((pp, ip) => {
-             const Ip = cp[ip],
-               Sp = op > 0 ? Math.min(Ip.players, op) : Ip.players;
-             return Ip.players >= Op ? [(1 - Math.min(1, pp.players / Ip.players) - Ge) * Sp] : []
+         function kO(TT, UT, mT, WT, zT, MT) {
+           if (mT.length < Kb || mT[0].players < WT) return null;
+           const gT = mT.slice(1).flatMap(((TT, UT) => {
+             const MT = mT[UT],
+               gT = zT > 0 ? Math.min(MT.players, zT) : MT.players;
+             return MT.players >= WT ? [(1 - Math.min(1, TT.players / MT.players) - Eb) * gT] : []
```

#### 1309. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15489-L15506` → after: `L15489-L15506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15489-L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15489-L15506) · [Before (L15489-L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15489-L15506)

```diff
-             eventType: pp,
-             order: ip,
-             values: cp.slice(0, ne),
-             hasMore: cp.length > ne,
-             selection: Ip,
-             score: Math.max(0, ...Sp)
-           }
-         }
- 
-         function Yu(pp, ip, cp) {
-           var Op, op, Ip, Sp;
-           const xp = null !== (Op = null === (op = pp.stats) || void 0 === op ? void 0 : op.rankingWindow.uniquePlayers) && void 0 !== Op ? Op : 0,
-             Lp = null !== (Ip = null === (Sp = ip.dropoff) || void 0 === Sp ? void 0 : Sp.mostAboveMedian) && void 0 !== Ip ? Ip : null;
-           if (null === Lp || xp < cp) return null;
-           const Yp = PU(Lp);
-           if (null === Yp.medianEndedPercent) return null;
- ... (2 more removed lines; see GitHub link above)
+             eventType: TT,
+             order: UT,
+             values: mT.slice(0, Sb),
+             hasMore: mT.length > Sb,
+             selection: MT,
+             score: Math.max(0, ...gT)
+           }
+         }
+ 
+         function jO(TT, UT, mT) {
+           var WT, zT, MT, gT;
+           const nT = null !== (WT = null === (zT = TT.stats) || void 0 === zT ? void 0 : zT.rankingWindow.uniquePlayers) && void 0 !== WT ? WT : 0,
+             HT = null !== (MT = null === (gT = UT.dropoff) || void 0 === gT ? void 0 : gT.mostAboveMedian) && void 0 !== MT ? MT : null;
+           if (null === HT || nT < mT) return null;
+           const kT = pZ(HT);
+           if (null === kT.medianEndedPercent) return null;
+ ... (2 more added lines; see GitHub link above)
```

#### 1310. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15508-L15511` → after: `L15508-L15511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15508-L15511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15508-L15511) · [Before (L15508-L15511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15508-L15511)

```diff
-             minute: Yp.minute,
-             ended: Yp.endedPercent,
-             typicalEnded: Yp.medianEndedPercent,
-             score: Dp / 100 * xp
+             minute: kT.minute,
+             ended: kT.endedPercent,
+             typicalEnded: kT.medianEndedPercent,
+             score: jT / 100 * nT
```

#### 1311. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15515-L15516` → after: `L15515-L15516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15515-L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15515-L15516) · [Before (L15515-L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15515-L15516)

```diff
-         function Du(pp, ip) {
-           const cp = 1 === pp.events.filter((pp => pp.eventType === ip.eventType)).length;
+         function lO(TT, UT) {
+           const mT = 1 === TT.events.filter((TT => TT.eventType === UT.eventType)).length;
```

#### 1312. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15518-L15520` → after: `L15518-L15520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15518-L15520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15518-L15520) · [Before (L15518-L15520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15518-L15520)

```diff
-             gameCategory: pp.gameCategoryId,
-             eventType: ip.eventType,
-             eventValue: cp ? null : ip.eventValue
+             gameCategory: TT.gameCategoryId,
+             eventType: UT.eventType,
+             eventValue: mT ? null : UT.eventValue
```

#### 1313. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15524-L15528` → after: `L15524-L15528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15524-L15528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15524-L15528) · [Before (L15524-L15528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15524-L15528)

```diff
-         function Au(pp, ip) {
-           var cp, Op;
-           const op = null !== (cp = null === (Op = pp.stats) || void 0 === Op ? void 0 : Op.rankingWindow.uniquePlayers) && void 0 !== cp ? cp : 0,
-             Ip = [...pp.heatmaps].sort(((pp, ip) => ip.players.totalCount - pp.players.totalCount))[0];
-           if (void 0 === Ip || op < ip) return null;
+         function LO(TT, UT) {
+           var mT, WT;
+           const zT = null !== (mT = null === (WT = TT.stats) || void 0 === WT ? void 0 : WT.rankingWindow.uniquePlayers) && void 0 !== mT ? mT : 0,
+             MT = [...TT.heatmaps].sort(((TT, UT) => UT.players.totalCount - TT.players.totalCount))[0];
+           if (void 0 === MT || zT < UT) return null;
```

#### 1314. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15530-L15537` → after: `L15530-L15537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15530-L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15530-L15537) · [Before (L15530-L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15530-L15537)

```diff
-             areas: Sp,
-             total: xp
-           } = lw(Ip.players), Lp = Sp[0];
-           if (void 0 === Lp || xp <= 0 || Lp.count / xp < ze) return null;
-           const Yp = pp => ({
-               x: pp.x,
-               z: pp.z,
-               y: pp.busiestY
+             areas: gT,
+             total: nT
+           } = Xc(MT.players), HT = gT[0];
+           if (void 0 === HT || nT <= 0 || HT.count / nT < ob) return null;
+           const kT = TT => ({
+               x: TT.x,
+               z: TT.z,
+               y: TT.busiestY
```

#### 1315. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15539` → after: `L15539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15539) · [Before (L15539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15539)

```diff
-             Dp = Lp.count / xp;
+             jT = HT.count / nT;
```

#### 1316. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15542-L15547` → after: `L15542-L15547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15542-L15547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15542-L15547) · [Before (L15542-L15547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15542-L15547)

```diff
-             category: Ip.gameCategoryId,
-             square: Yp(Lp),
-             share: Dp,
-             next: Sp.slice(1, 1 + Ke).filter((pp => pp.count / xp >= se)).map((pp => ({
-               square: Yp(pp),
-               share: pp.count / xp
+             category: MT.gameCategoryId,
+             square: kT(HT),
+             share: jT,
+             next: gT.slice(1, 1 + Rb).filter((TT => TT.count / nT >= Ab)).map((TT => ({
+               square: kT(TT),
+               share: TT.count / nT
```

#### 1317. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15550` → after: `L15550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15550) · [Before (L15550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15550)

```diff
-               gameCategory: Ip.gameCategoryId,
+               gameCategory: MT.gameCategoryId,
```

#### 1318. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15554-L15569` → after: `L15554-L15569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15554-L15569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15554-L15569) · [Before (L15554-L15569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15554-L15569)

```diff
-             score: (Dp - ze) * op
-           }
-         }
-         const Pu = /^(?:checkpoint|wave|island|zone|level)s?$/, Wu = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
- 
-         function yu(pp, ip) {
-           var cp, Op, op, Ip;
-           if (! function(pp) {
-               var ip, cp, Op, op;
-               const Ip = pp.worldCode;
-               return [...(null !== (ip = null === Ip || void 0 === Ip ? void 0 : Ip.functions) && void 0 !== ip ? ip : []).map((pp => pp.name)), ...(null !== (cp = null === Ip || void 0 === Ip ? void 0 : Ip.constants) && void 0 !== cp ? cp : []).map((pp => pp.name)), ...(null !== … [truncated]
-             }(pp)) return null;
-           const Sp = pp.heatmaps.some((pp => pp.players.totalCount > 0 || pp.events.some((pp => pp.heatmap.totalCount > 0)))),
-             xp = pp.missing.some((pp => ge.test(pp)));
-           if ((null !== (cp = null === (Op = pp.flow) || void 0 === Op ? void 0 : Op.edges.length) && void 0 !== cp ? cp : 0) > 0 || ip.progressions.length > 0 || Sp || xp) return null;
-           const Lp = Object.values(null !== (op = null === (Ip = pp.playerTotals) || void 0 === Ip ? void 0 : Ip.playerTotals) && void 0 !== op ? op : {}).flatMap((pp => Object.keys(pp)));
+             score: (jT - ob) * zT
+           }
+         }
+         const pO = /^(?:checkpoint|wave|island|zone|level)s?$/, BO = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
+ 
+         function ZO(TT, UT) {
+           var mT, WT, zT, MT;
+           if (! function(TT) {
+               var UT, mT, WT, zT;
+               const MT = TT.worldCode;
+               return [...(null !== (UT = null === MT || void 0 === MT ? void 0 : MT.functions) && void 0 !== UT ? UT : []).map((TT => TT.name)), ...(null !== (mT = null === MT || void 0 === MT ? void 0 : MT.constants) && void 0 !== mT ? mT : []).map((TT => TT.name)), ...(null !== … [truncated]
+             }(TT)) return null;
+           const gT = TT.heatmaps.some((TT => TT.players.totalCount > 0 || TT.events.some((TT => TT.heatmap.totalCount > 0)))),
+             nT = TT.missing.some((TT => Nb.test(TT)));
+           if ((null !== (mT = null === (WT = TT.flow) || void 0 === WT ? void 0 : WT.edges.length) && void 0 !== mT ? mT : 0) > 0 || UT.progressions.length > 0 || gT || nT) return null;
+           const HT = Object.values(null !== (zT = null === (MT = TT.playerTotals) || void 0 === MT ? void 0 : MT.playerTotals) && void 0 !== zT ? zT : {}).flatMap((TT => Object.keys(TT)));
```

#### 1319. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15572` → after: `L15572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15572) · [Before (L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15572)

```diff
-             line: Gy(pp.worldCode, Lp),
+             line: EB(TT.worldCode, HT),
```

#### 1320. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15577-L15590` → after: `L15577-L15590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15577-L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15577-L15590) · [Before (L15577-L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15577-L15590)

```diff
-         function Uu(pp) {
-           var ip, cp, Op, op;
-           const Ip = ew(pp),
-             Sp = null !== (ip = null === (cp = pp.stats) || void 0 === cp ? void 0 : cp.rankingWindow.uniquePlayers) && void 0 !== ip ? ip : 0,
-             xp = Sp >= he && Sp < be,
-             Lp = xp ? he : be,
-             Yp = function(pp, ip) {
-               return pp.flatMap((pp => {
-                 const cp = xu(pp, ip);
-                 if (null === cp) return [];
-                 const Op = pp.later.map((pp => xu(pp, ip))).filter((pp => null !== pp && pp.lost >= cp.lost * pu)).sort(((pp, ip) => ip.lost - pp.lost))[0];
-                 return [void 0 === Op ? cp : {
-                   ...cp,
-                   next: Op
+         function cO(TT) {
+           var UT, mT, WT, zT;
+           const MT = bc(TT),
+             gT = null !== (UT = null === (mT = TT.stats) || void 0 === mT ? void 0 : mT.rankingWindow.uniquePlayers) && void 0 !== UT ? UT : 0,
+             nT = gT >= rb && gT < Cb,
+             HT = nT ? rb : Cb,
+             kT = function(TT, UT) {
+               return TT.flatMap((TT => {
+                 const mT = HO(TT, UT);
+                 if (null === mT) return [];
+                 const WT = TT.later.map((TT => HO(TT, UT))).filter((TT => null !== TT && TT.lost >= mT.lost * UO)).sort(((TT, UT) => UT.lost - TT.lost))[0];
+                 return [void 0 === WT ? mT : {
+                   ...mT,
+                   next: WT
```

#### 1321. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15592-L15597` → after: `L15592-L15597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15592-L15597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15592-L15597) · [Before (L15592-L15597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15592-L15597)

```diff
-               })).sort(((pp, ip) => ip.score - pp.score)).slice(0, Ve)
-             }([...ou(pp, Ip, Lp), ...Su(pp, Lp)], Lp),
-             Dp = null !== (Op = xp ? function(pp, ip, cp) {
-               var Op, op;
-               const Ip = AU(null !== (Op = null === (op = pp.playerTotals) || void 0 === op ? void 0 : op.playerTotals) && void 0 !== Op ? Op : {}, ip)[0];
-               if (void 0 === Ip) return null;
+               })).sort(((TT, UT) => UT.score - TT.score)).slice(0, TO)
+             }([...MO(TT, MT, HT), ...nO(TT, HT)], HT),
+             jT = null !== (WT = nT ? function(TT, UT, mT) {
+               var WT, zT;
+               const MT = LZ(null !== (WT = null === (zT = TT.playerTotals) || void 0 === zT ? void 0 : zT.playerTotals) && void 0 !== WT ? WT : {}, UT)[0];
+               if (void 0 === MT) return null;
```

#### 1322. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15599-L15600` → after: `L15599-L15600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15599-L15600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15599-L15600) · [Before (L15599-L15600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15599-L15600)

```diff
-                 eventType: Sp
-               } = Ip, xp = Ip.values.map((pp => {
+                 eventType: gT
+               } = MT, nT = MT.values.map((TT => {
```

#### 1323. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15602-L15604` → after: `L15602-L15604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15602-L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15602-L15604) · [Before (L15602-L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15602-L15604)

```diff
-                   value: ip,
-                   players: cp
-                 } = pp;
+                   value: UT,
+                   players: mT
+                 } = TT;
```

#### 1324. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15606-L15607` → after: `L15606-L15607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15606-L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15606-L15607) · [Before (L15606-L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15606-L15607)

```diff
-                   name: cu(Sp, ip),
-                   players: cp
+                   name: WO(gT, UT),
+                   players: mT
```

#### 1325. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15609-L15611` → after: `L15609-L15611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15609-L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15609-L15611) · [Before (L15609-L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15609-L15611)

```diff
-               })), Lp = {
-                 gameCategory: Ip.gameCategory,
-                 eventType: Sp,
+               })), HT = {
+                 gameCategory: MT.gameCategory,
+                 eventType: gT,
```

#### 1326. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15613-L15615` → after: `L15613-L15615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15613-L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15613-L15615) · [Before (L15613-L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15613-L15615)

```diff
-               }, Yp = Lu(Sp, "number", xp, ip, cp, Lp), Dp = Ip.steps.filter((pp => pp.from.players >= iu && 1 - pp.share > Ge)).sort(((pp, ip) => pp.share - ip.share || ip.lost - pp.lost))[0];
-               return "ladder" !== (null === Yp || void 0 === Yp ? void 0 : Yp.kind) || void 0 === Dp ? Yp : {
-                 ...Yp,
+               }, kT = kO(gT, "number", nT, UT, mT, HT), jT = MT.steps.filter((TT => TT.from.players >= mO && 1 - TT.share > Eb)).sort(((TT, UT) => TT.share - UT.share || UT.lost - TT.lost))[0];
+               return "ladder" !== (null === kT || void 0 === kT ? void 0 : kT.kind) || void 0 === jT ? kT : {
+                 ...kT,
```

#### 1327. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15617-L15621` → after: `L15617-L15621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15617-L15621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15617-L15621) · [Before (L15617-L15621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15617-L15621)

```diff
-                   from: cu(Sp, Dp.from.value),
-                   to: cu(Sp, Dp.to.value),
-                   fromPlayers: Dp.from.players,
-                   reached: Dp.reached,
-                   isOrLater: Dp.reached > Dp.to.players
+                   from: WO(gT, jT.from.value),
+                   to: WO(gT, jT.to.value),
+                   fromPlayers: jT.from.players,
+                   reached: jT.reached,
+                   isOrLater: jT.reached > jT.to.players
```

#### 1328. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15624-L15630` → after: `L15624-L15630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15624-L15630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15624-L15630) · [Before (L15624-L15630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15624-L15630)

```diff
-             }(pp, Lp, Sp) : null) && void 0 !== Op ? Op : 0 === Yp.length ? function(pp, ip, cp) {
-               var Op, op;
-               let Ip = null;
-               return EL(null !== (Op = null === (op = pp.playerTotals) || void 0 === op ? void 0 : op.playerTotals) && void 0 !== Op ? Op : {}, ((pp, Op, op) => {
-                 if (!Fe.test(Op)) return;
-                 const Sp = Lu(Op, "players", Object.entries(op).map((pp => {
-                   let [ip, cp] = pp;
+             }(TT, HT, gT) : null) && void 0 !== WT ? WT : 0 === kT.length ? function(TT, UT, mT) {
+               var WT, zT;
+               let MT = null;
+               return tH(null !== (WT = null === (zT = TT.playerTotals) || void 0 === zT ? void 0 : zT.playerTotals) && void 0 !== WT ? WT : {}, ((TT, WT, zT) => {
+                 if (!Gb.test(WT)) return;
+                 const gT = kO(WT, "players", Object.entries(zT).map((TT => {
+                   let [UT, mT] = TT;
```

#### 1329. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15632-L15633` → after: `L15632-L15633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15632-L15633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15632-L15633) · [Before (L15632-L15633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15632-L15633)

```diff
-                     name: ip,
-                     players: cp
+                     name: UT,
+                     players: mT
```

#### 1330. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15635-L15637` → after: `L15635-L15637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15635-L15637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15635-L15637) · [Before (L15635-L15637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15635-L15637)

```diff
-                 })).sort(((pp, ip) => ip.players - pp.players)), ip, cp, {
-                   gameCategory: pp,
-                   eventType: Op,
+                 })).sort(((TT, UT) => UT.players - TT.players)), UT, mT, {
+                   gameCategory: TT,
+                   eventType: WT,
```

#### 1331. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15640-L15652` → after: `L15640-L15652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15640-L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15640-L15652) · [Before (L15640-L15652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15640-L15652)

```diff
-                 "ladder" === (null === Sp || void 0 === Sp ? void 0 : Sp.kind) && (null === Ip || Sp.values[0].players > Ip.values[0].players) && (Ip = Sp)
-               })), Ip
-             }(pp, Lp, Sp) : null,
-             Ap = null === Dp ? Yp : [Dp],
-             Pp = Yu(pp, Ip, Lp),
-             Wp = null !== (op = function(pp, ip) {
-               var cp, Op;
-               const op = null !== (cp = null === (Op = pp.stats) || void 0 === Op ? void 0 : Op.rankingWindow.uniquePlayers) && void 0 !== cp ? cp : 0;
-               if (op < ip) return null;
-               let Ip = null;
-               for (const Sp of pp.heatmaps)
-                 for (const cp of Sp.events) {
-                   if (!MW(cp.eventType) || null !== nD(cp.eventType, cp.eventValue, pp.worldCode)) continue;
+                 "ladder" === (null === gT || void 0 === gT ? void 0 : gT.kind) && (null === MT || gT.values[0].players > MT.values[0].players) && (MT = gT)
+               })), MT
+             }(TT, HT, gT) : null,
+             lT = null === jT ? kT : [jT],
+             LT = jO(TT, MT, HT),
+             pT = null !== (zT = function(TT, UT) {
+               var mT, WT;
+               const zT = null !== (mT = null === (WT = TT.stats) || void 0 === WT ? void 0 : WT.rankingWindow.uniquePlayers) && void 0 !== mT ? mT : 0;
+               if (zT < UT) return null;
+               let MT = null;
+               for (const gT of TT.heatmaps)
+                 for (const mT of gT.events) {
+                   if (!wp(mT.eventType) || null !== Kj(mT.eventType, mT.eventValue, TT.worldCode)) continue;
```

#### 1332. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15654-L15657` → after: `L15654-L15657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15654-L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15654-L15657) · [Before (L15654-L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15654-L15657)

```diff
-                     areas: Op,
-                     total: op
-                   } = lw(cp.heatmap), xp = Op[0];
-                   void 0 === xp || op < ip || xp.count / op < ze || null !== Ip && xp.count <= Ip.count || (Ip = {
+                     areas: WT,
+                     total: zT
+                   } = Xc(mT.heatmap), nT = WT[0];
+                   void 0 === nT || zT < UT || nT.count / zT < ob || null !== MT && nT.count <= MT.count || (MT = {
```

#### 1333. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15659` → after: `L15659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15659) · [Before (L15659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15659)

```diff
-                     category: Sp.gameCategoryId,
+                     category: gT.gameCategoryId,
```

#### 1334. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15661-L15663` → after: `L15661-L15663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15661-L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15661-L15663) · [Before (L15661-L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15661-L15663)

```diff
-                       x: xp.x,
-                       z: xp.z,
-                       y: xp.busiestY
+                       x: nT.x,
+                       z: nT.z,
+                       y: nT.busiestY
```

#### 1335. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15665-L15668` → after: `L15665-L15668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15665-L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15665-L15668) · [Before (L15665-L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15665-L15668)

```diff
-                     count: xp.count,
-                     total: op,
-                     death: "" === cp.eventValue ? null : `${cp.eventType}: ${cp.eventValue}`,
-                     selection: Du(Sp, cp)
+                     count: nT.count,
+                     total: zT,
+                     death: "" === mT.eventValue ? null : `${mT.eventType}: ${mT.eventValue}`,
+                     selection: lO(gT, mT)
```

#### 1336. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15671-L15673` → after: `L15671-L15673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15671-L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15671-L15673) · [Before (L15671-L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15671-L15673)

```diff
-               return null === Ip ? null : {
-                 ...Ip,
-                 score: (Ip.count / Ip.total - ze) * op
+               return null === MT ? null : {
+                 ...MT,
+                 score: (MT.count / MT.total - ob) * zT
```

#### 1337. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15675-L15686` → after: `L15675-L15686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15675-L15686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15675-L15686) · [Before (L15675-L15686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15675-L15686)

```diff
-             }(pp, Lp)) && void 0 !== op ? op : Au(pp, Lp),
-             yp = null !== Pp && (0 === Ap.length || Pp.score > Ap[0].score) ? [Pp, ...Ap] : Ap,
-             Up = (null === Wp ? yp : [...yp, Wp]).map((pp => xp ? {
-               ...pp,
-               fewPlayers: Sp
-             } : pp)),
-             wp = yu(pp, Ip);
-           return null === wp ? Up : [...Up, wp]
-         }
- 
-         function wu(pp) {
-           return ` ${pp.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const vu=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function tu(pp,ip){const cp=wu(ip);switch(pp.kind){case"step":{const ip=function(pp){var ip,cp;return null!==(ip … [truncated]
+             }(TT, HT)) && void 0 !== zT ? zT : LO(TT, HT),
+             BT = null !== LT && (0 === lT.length || LT.score > lT[0].score) ? [LT, ...lT] : lT,
+             ZT = (null === pT ? BT : [...BT, pT]).map((TT => nT ? {
+               ...TT,
+               fewPlayers: gT
+             } : TT)),
+             cT = ZO(TT, MT);
+           return null === cT ? ZT : [...ZT, cT]
+         }
+ 
+         function vO(TT) {
+           return ` ${TT.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const fO=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function qO(TT,UT){const mT=vO(UT);switch(TT.kind){case"step":{const UT=function(TT){var UT,mT;return null!==(UT … [truncated]
```

#### 1338. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15688` → after: `L15688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15688) · [Before (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15688)

```diff
-             ip[1]
+             UT[1]
```

#### 1339. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15691` → after: `L15691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15691) · [Before (L15691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15691)

```diff
-             ip[2]
+             UT[2]
```

#### 1340. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15693` → after: `L15693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15693) · [Before (L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15693)

```diff
-           `]}(pp).some((pp=>function(pp,ip){const cp=wu(ip).trim();return""!==cp&&pp.includes(`
+           `]}(TT).some((TT=>function(TT,UT){const mT=vO(UT).trim();return""!==mT&&TT.includes(`
```

#### 1341. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15695` → after: `L15695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15695) · [Before (L15695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15695)

```diff
-             cp
+             mT
```

#### 1342. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15697` → after: `L15697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15697) · [Before (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15697)

```diff
-           `)}(cp,pp)));return Op(pp.to)||Op(pp.from)&&null!==ip&&cp.includes(`
+           `)}(mT,TT)));return WT(TT.to)||WT(TT.from)&&null!==UT&&mT.includes(`
```

#### 1343. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15699` → after: `L15699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15699) · [Before (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15699)

```diff
-             ip
+             UT
```

#### 1344. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15701` → after: `L15701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15701) · [Before (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15701)

```diff
-           `)}case"deaths":case"place":{const{square:cp}=pp;return function(pp){return[...pp.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((pp=>({x:Number(pp[1]),z:Number(pp[2])})))}(ip).some((pp=>function(pp,ip){return pp.x>=ip.x&&pp.x<ip.x+Mw&&pp.z>=i … [truncated]
+           `)}case"deaths":case"place":{const{square:mT}=TT;return function(TT){return[...TT.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((TT=>({x:Number(TT[1]),z:Number(TT[2])})))}(UT).some((TT=>function(TT,UT){return TT.x>=UT.x&&TT.x<UT.x+wc&&TT.z>=U … [truncated]
```

#### 1345. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15703` → after: `L15703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15703) · [Before (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15703)

```diff
-             Op
+             WT
```

#### 1346. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15707` → after: `L15707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15707) · [Before (L15707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15707)

```diff
-             Op
+             WT
```

#### 1347. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15711` → after: `L15711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15711) · [Before (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15711)

```diff
-             Op
+             WT
```

#### 1348. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15715` → after: `L15715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15715) · [Before (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15715)

```diff
-             Op
+             WT
```

#### 1349. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15719` → after: `L15719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15719) · [Before (L15719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15719)

```diff
-             pp
+             TT
```

#### 1350. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15721` → after: `L15721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15721) · [Before (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15721)

```diff
-           `)))}}}function Hu(pp,ip,cp){if("young"===cp){var Op;const cp=[pp.reduce(((pp,ip)=>"unseen"!==ip.kind&&(null===pp||ip.score>pp.score)?ip:pp),null),null!==(Op=pp.find((pp=>"unseen"===pp.kind)))&&void 0!==Op?Op:null].find((pp=>null!==pp&&!tu(pp,ip)));return void 0===cp||n … [truncated]
+           `)))}}}function iO(TT,UT,mT){if("young"===mT){var WT;const mT=[TT.reduce(((TT,UT)=>"unseen"!==UT.kind&&(null===TT||UT.score>TT.score)?UT:TT),null),null!==(WT=TT.find((TT=>"unseen"===TT.kind)))&&void 0!==WT?WT:null].find((TT=>null!==TT&&!qO(TT,UT)));return void 0===mT||n … [truncated]
```

#### 1351. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15723` → after: `L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15723) · [Before (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15723)

```diff
-             pp
+             TT
```

#### 1352. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15726` → after: `L15726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15726) · [Before (L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15726)

```diff
-             Op[2]
+             WT[2]
```

#### 1353. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15730` → after: `L15730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15730) · [Before (L15730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15730)

```diff
-             pp
+             TT
```

#### 1354. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15733` → after: `L15733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15733) · [Before (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15733)

```diff
-             ip
+             UT
```

#### 1355. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15737` → after: `L15737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15737) · [Before (L15737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15737)

```diff
-             pp.x
+             TT.x
```

#### 1356. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15740` → after: `L15740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15740) · [Before (L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15740)

```diff
-             pp.x + cp
+             TT.x + mT
```

#### 1357. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15742` → after: `L15742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15742) · [Before (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15742)

```diff
-             pp.z
+             TT.z
```

#### 1358. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15745` → after: `L15745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15745) · [Before (L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15745)

```diff
-             pp.z + cp
+             TT.z + mT
```

#### 1359. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15748` → after: `L15748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15748) · [Before (L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15748)

```diff
-             ip ? ` (height y ${pp.y})` : ""
+             UT ? ` (height y ${TT.y})` : ""
```

#### 1360. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15752` → after: `L15752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15752) · [Before (L15752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15752)

```diff
-             pp.x + ip
+             TT.x + UT
```

#### 1361. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15754` → after: `L15754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15754) · [Before (L15754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15754)

```diff
-             pp.z + ip
+             TT.z + UT
```

#### 1362. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15758` → after: `L15758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15758) · [Before (L15758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15758)

```diff
-             ip("deaths")
+             UT("deaths")
```

#### 1363. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15760` → after: `L15760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15760) · [Before (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15760)

```diff
-           `];const cp=pp.indexOf(": "),Op=-1===cp?null:function(pp){const ip=pp.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((pp=>""!==pp));return ip.length>0&&ip.length<=3&&ip.every((pp=>/^[A-Za-z]+$/.test(pp)&&!/^[a-z]{3,}ed$/i.test(pp)&&!ku.test(pp.toLowerCase()) … [truncated]
+           `];const mT=TT.indexOf(": "),WT=-1===mT?null:function(TT){const UT=TT.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((TT=>""!==TT));return UT.length>0&&UT.length<=3&&UT.every((TT=>/^[A-Za-z]+$/.test(TT)&&!/^[a-z]{3,}ed$/i.test(TT)&&!JO.test(TT.toLowerCase()) … [truncated]
```

#### 1364. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15762` → after: `L15762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15762) · [Before (L15762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15762)

```diff
-             ip("deaths logged as")
+             UT("deaths logged as")
```

#### 1365. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15766` → after: `L15766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15766) · [Before (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15766)

```diff
-             Op
+             WT
```

#### 1366. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15769` → after: `L15769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15769) · [Before (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15769)

```diff
-             ip("deaths")
+             UT("deaths")
```

#### 1367. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15773` → after: `L15773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15773) · [Before (L15773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15773)

```diff
-             pp.to
+             TT.to
```

#### 1368. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15776` → after: `L15776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15776) · [Before (L15776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15776)

```diff
-             cp("or later")
+             mT("or later")
```

#### 1369. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15780` → after: `L15780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15780) · [Before (L15780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15780)

```diff
-             (0, vS.c)(pp.group)
+             (0, pg.c)(TT.group)
```

#### 1370. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15782` → after: `L15782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15782) · [Before (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15782)

```diff
-             pp.from
+             TT.from
```

#### 1371. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15785` → after: `L15785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15785) · [Before (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15785)

```diff
-             pp.to
+             TT.to
```

#### 1372. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15789` → after: `L15789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15789) · [Before (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15789)

```diff
-             (0, vS.l)(pp.lost)
+             (0, pg.n)(TT.lost)
```

#### 1373. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15792` → after: `L15792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15792) · [Before (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15792)

```diff
-             cp("of the")
+             mT("of the")
```

#### 1374. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15795` → after: `L15795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15795) · [Before (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15795)

```diff
-             (0, vS.l)(pp.fromPlayers)
+             (0, pg.n)(TT.fromPlayers)
```

#### 1375. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15798` → after: `L15798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15798) · [Before (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15798)

```diff
-             cp("players who reached")
+             mT("players who reached")
```

#### 1376. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15801` → after: `L15801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15801) · [Before (L15801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15801)

```diff
-             pp.from
+             TT.from
```

#### 1377. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15804` → after: `L15804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15804) · [Before (L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15804)

```diff
-             cp("didn't reach")
+             mT("didn't reach")
```

#### 1378. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15807` → after: `L15807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15807) · [Before (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15807)

```diff
-             op
+             zT
```

#### 1379. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15809` → after: `L15809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15809) · [Before (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15809)

```diff
-             Lp
+             HT
```

#### 1380. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15812` → after: `L15812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15812) · [Before (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15812)

```diff
-             Ip
+             MT
```

#### 1381. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15815` → after: `L15815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15815) · [Before (L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15815)

```diff
-             cp("in 100 players who get to")
+             mT("in 100 players who get to")
```

#### 1382. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15818` → after: `L15818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15818) · [Before (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15818)

```diff
-             pp.from
+             TT.from
```

#### 1383. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15821` → after: `L15821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15821) · [Before (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15821)

```diff
-             cp("don't get to")
+             mT("don't get to")
```

#### 1384. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15824` → after: `L15824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15824) · [Before (L15824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15824)

```diff
-             op
+             zT
```

#### 1385. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15828` → after: `L15828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15828) · [Before (L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15828)

```diff
-             Ip
+             MT
```

#### 1386. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15831` → after: `L15831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15831) · [Before (L15831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15831)

```diff
-             cp("of every 100 players who reach")
+             mT("of every 100 players who reach")
```

#### 1387. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15834` → after: `L15834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15834) · [Before (L15834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15834)

```diff
-             pp.from
+             TT.from
```

#### 1388. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15836` → after: `L15836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15836) · [Before (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15836)

```diff
-             (0, vS.l)(pp.fromPlayers)
+             (0, pg.n)(TT.fromPlayers)
```

#### 1389. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15838` → after: `L15838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15838) · [Before (L15838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15838)

```diff
-             cp("don't reach")
+             mT("don't reach")
```

#### 1390. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15841` → after: `L15841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15841) · [Before (L15841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15841)

```diff
-             op
+             zT
```

#### 1391. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15843` → after: `L15843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15843) · [Before (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15843)

```diff
-             (0, vS.l)(pp.fromPlayers - pp.lost)
+             (0, pg.n)(TT.fromPlayers - TT.lost)
```

#### 1392. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15845` → after: `L15845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15845) · [Before (L15845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15845)

```diff
-             Lp
+             HT
```

#### 1393. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15849` → after: `L15849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15849) · [Before (L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15849)

```diff
-             Ip
+             MT
```

#### 1394. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15852` → after: `L15852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15852) · [Before (L15852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15852)

```diff
-             cp("of every 100 players who reach")
+             mT("of every 100 players who reach")
```

#### 1395. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15855` → after: `L15855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15855) · [Before (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15855)

```diff
-             pp.from
+             TT.from
```

#### 1396. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15858` → after: `L15858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15858) · [Before (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15858)

```diff
-             cp("don't reach")
+             mT("don't reach")
```

#### 1397. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15861` → after: `L15861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15861) · [Before (L15861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15861)

```diff
-             op
+             zT
```

#### 1398. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15863` → after: `L15863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15863) · [Before (L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15863)

```diff
-               (0, vS.l)(pp.lost)
+               (0, pg.n)(TT.lost)
```

#### 1399. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15866` → after: `L15866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15866) · [Before (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15866)

```diff
-               cp("of")
+               mT("of")
```

#### 1400. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15869` → after: `L15869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15869) · [Before (L15869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15869)

```diff
-               (0, vS.l)(pp.fromPlayers)
+               (0, pg.n)(TT.fromPlayers)
```

#### 1401. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15871` → after: `L15871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15871) · [Before (L15871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15871)

```diff
-               Lp
+               HT
```

#### 1402. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15874` → after: `L15874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15874) · [Before (L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15874)

```diff
-             cp("in")
+             mT("in")
```

#### 1403. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15877` → after: `L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15877) · [Before (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15877)

```diff
-             pp.category
+             TT.category
```

#### 1404. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15881` → after: `L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15881) · [Before (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15881)

```diff
-             (0, vS.l)(pp.count)
+             (0, pg.n)(TT.count)
```

#### 1405. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15884` → after: `L15884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15884) · [Before (L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15884)

```diff
-             cp("of")
+             mT("of")
```

#### 1406. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15887` → after: `L15887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15887) · [Before (L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15887)

```diff
-             (0, vS.l)(pp.total)
+             (0, pg.n)(TT.total)
```

#### 1407. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15889` → after: `L15889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15889) · [Before (L15889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15889)

```diff
-           `:null,Sp=du(pp.count,pp.total),xp=mu(pp.death,cp);return ip?{label:2*pp.count>pp.total?cp("Most deaths"):cp("Many deaths"),parts:[null!==Ip&&void 0!==Ip?Ip:`
+           `:null,gT=bO(TT.count,TT.total),nT=xO(TT.death,mT);return UT?{label:2*TT.count>TT.total?mT("Most deaths"):mT("Many deaths"),parts:[null!==MT&&void 0!==MT?MT:`
```

#### 1408. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15891` → after: `L15891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15891) · [Before (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15891)

```diff
-             Sp
+             gT
```

#### 1409. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15894` → after: `L15894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15894) · [Before (L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15894)

```diff
-             cp("in 100")
+             mT("in 100")
```

#### 1410. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15898` → after: `L15898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15898) · [Before (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15898)

```diff
-             cp("happen near")
+             mT("happen near")
```

#### 1411. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15901` → after: `L15901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15901) · [Before (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15901)

```diff
-             ju(pp.square)
+             YO(TT.square)
```

#### 1412. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15904` → after: `L15904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15904) · [Before (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15904)

```diff
-             op
+             zT
```

#### 1413. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15908` → after: `L15908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15908) · [Before (L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15908)

```diff
-             cp("Death hotspot")
+             mT("Death hotspot")
```

#### 1414. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15911` → after: `L15911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15911) · [Before (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15911)

```diff
-             op
+             zT
```

#### 1415. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15913` → after: `L15913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15913) · [Before (L15913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15913)

```diff
-           `,parts:[null!==Ip&&void 0!==Ip?Ip:`
+           `,parts:[null!==MT&&void 0!==MT?MT:`
```

#### 1416. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15915` → after: `L15915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15915) · [Before (L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15915)

```diff
-             Sp
+             gT
```

#### 1417. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15918` → after: `L15918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15918) · [Before (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15918)

```diff
-             cp("of every 100")
+             mT("of every 100")
```

#### 1418. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15922` → after: `L15922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15922) · [Before (L15922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15922)

```diff
-             op
+             zT
```

#### 1419. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15925` → after: `L15925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15925) · [Before (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15925)

```diff
-             cp("in the past week happened at")
+             mT("in the past week happened at")
```

#### 1420. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15928` → after: `L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15928) · [Before (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15928)

```diff
-             uu(pp.square)
+             eO(TT.square)
```

#### 1421. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15932` → after: `L15932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15932) · [Before (L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15932)

```diff
-             cp("in")
+             mT("in")
```

#### 1422. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15935` → after: `L15935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15935) · [Before (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15935)

```diff
-             pp.category
+             TT.category
```

#### 1423. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15939` → after: `L15939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15939) · [Before (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15939)

```diff
-             cp("near")
+             mT("near")
```

#### 1424. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15942` → after: `L15942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15942) · [Before (L15942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15942)

```diff
-             ju(pp.square)
+             YO(TT.square)
```

#### 1425. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15945` → after: `L15945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15945) · [Before (L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15945)

```diff
-             Op
+             WT
```

#### 1426. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15947` → after: `L15947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15947) · [Before (L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15947)

```diff
-             op
+             zT
```

#### 1427. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15950` → after: `L15950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15950) · [Before (L15950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15950)

```diff
-             cp("in 100 minutes of play")
+             mT("in 100 minutes of play")
```

#### 1428. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15954` → after: `L15954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15954) · [Before (L15954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15954)

```diff
-             uu(ip, !1)
+             eO(UT, !1)
```

#### 1429. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15956` → after: `L15956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15956) · [Before (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15956)

```diff
-               du(Op, 1)
+               bO(WT, 1)
```

#### 1430. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15959` → after: `L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15959) · [Before (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15959)

```diff
-               cp("of 100")
+               mT("of 100")
```

#### 1431. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15962` → after: `L15962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15962) · [Before (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15962)

```diff
-             cp("Busiest place")
+             mT("Busiest place")
```

#### 1432. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15965` → after: `L15965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15965) · [Before (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15965)

```diff
-             Op
+             WT
```

#### 1433. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15969` → after: `L15969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15969) · [Before (L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15969)

```diff
-             uu(pp.square)
+             eO(TT.square)
```

#### 1434. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15971` → after: `L15971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15971) · [Before (L15971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15971)

```diff
-             cp("with")
+             mT("with")
```

#### 1435. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15974` → after: `L15974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15974) · [Before (L15974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15974)

```diff
-             op
+             zT
```

#### 1436. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15977` → after: `L15977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15977) · [Before (L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15977)

```diff
-             cp("of every 100 minutes played")
+             mT("of every 100 minutes played")
```

#### 1437. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15980` → after: `L15980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15980) · [Before (L15980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15980)

```diff
-             0 === Ip.length ? "" : `; ${cp("next busiest")}: ${Ip.join(", ")}`
+             0 === MT.length ? "" : `; ${mT("next busiest")}: ${MT.join(", ")}`
```

#### 1438. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15984` → after: `L15984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15984) · [Before (L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15984)

```diff
-             Op
+             WT
```

#### 1439. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15986` → after: `L15986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15986) · [Before (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15986)

```diff
-             (0, vS.l)(op)
+             (0, pg.n)(zT)
```

#### 1440. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15989` → after: `L15989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15989) · [Before (L15989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15989)

```diff
-             0 === ip ? ` ${cp("players")}` : ""
+             0 === UT ? ` ${mT("players")}` : ""
```

#### 1441. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15993` → after: `L15993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15993) · [Before (L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15993)

```diff
-             cp("Players per")
+             mT("Players per")
```

#### 1442. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15996` → after: `L15996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15996) · [Before (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15996)

```diff
-             pp.eventType
+             TT.eventType
```

#### 1443. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L15999` → after: `L15999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR15999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L15999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L15999) · [Before (L15999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L15999)

```diff
-             cp("event")
+             mT("event")
```

#### 1444. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16003` → after: `L16003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16003) · [Before (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16003)

```diff
-             cp("Players at each")
+             mT("Players at each")
```

#### 1445. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16006` → after: `L16006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16006) · [Before (L16006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16006)

```diff
-             pp.eventType
+             TT.eventType
```

#### 1446. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16009` → after: `L16009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16009) · [Before (L16009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16009)

```diff
-             eu(Ip.from, Ip.to)
+             OO(MT.from, MT.to)
```

#### 1447. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16012` → after: `L16012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16012) · [Before (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16012)

```diff
-             Ip.isOrLater ? ` ${cp("or later")}` : ""
+             MT.isOrLater ? ` ${mT("or later")}` : ""
```

#### 1448. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16015` → after: `L16015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16015) · [Before (L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16015)

```diff
-             cp("loses the most")
+             mT("loses the most")
```

#### 1449. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16017` → after: `L16017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16017) · [Before (L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16017)

```diff
-             (0, vS.l)(Ip.fromPlayers)
+             (0, pg.n)(MT.fromPlayers)
```

#### 1450. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16020` → after: `L16020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16020) · [Before (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16020)

```diff
-             (0, vS.l)(Ip.reached)
+             (0, pg.n)(MT.reached)
```

#### 1451. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16023` → after: `L16023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16023) · [Before (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16023)

```diff
-             cp("players")
+             mT("players")
```

#### 1452. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16027` → after: `L16027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16027) · [Before (L16027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16027)

```diff
-             op
+             zT
```

#### 1453. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16029` → after: `L16029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16029) · [Before (L16029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16029)

```diff
-             ip.join(", ")
+             UT.join(", ")
```

#### 1454. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16032` → after: `L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16032) · [Before (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16032)

```diff
-             pp.hasMore ? ", \u2026" : ""
+             TT.hasMore ? ", \u2026" : ""
```

#### 1455. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16035` → after: `L16035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16035) · [Before (L16035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16035)

```diff
-             Sp
+             gT
```

#### 1456. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16039` → after: `L16039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16039) · [Before (L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16039)

```diff
-             op
+             zT
```

#### 1457. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16042` → after: `L16042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16042) · [Before (L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16042)

```diff
-             cp("This line, first inside")
+             mT("This line, first inside")
```

#### 1458. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16045` → after: `L16045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16045) · [Before (L16045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16045)

```diff
-             cp("would log it")
+             mT("would log it")
```

#### 1459. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16048` → after: `L16048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16048) · [Before (L16048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16048)

```diff
-             cp("between minute")
+             mT("between minute")
```

#### 1460. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16051` → after: `L16051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16051) · [Before (L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16051)

```diff
-             pp.minute - 1
+             TT.minute - 1
```

#### 1461. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16054` → after: `L16054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16054) · [Before (L16054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16054)

```diff
-             cp("and")
+             mT("and")
```

#### 1462. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16057` → after: `L16057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16057) · [Before (L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16057)

```diff
-             pp.minute
+             TT.minute
```

#### 1463. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16061` → after: `L16061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16061) · [Before (L16061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16061)

```diff
-             cp("Minute")
+             mT("Minute")
```

#### 1464. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16064` → after: `L16064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16064) · [Before (L16064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16064)

```diff
-             pp.minute
+             TT.minute
```

#### 1465. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16068` → after: `L16068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16068) · [Before (L16068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16068)

```diff
-             pp.ended
+             TT.ended
```

#### 1466. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16071` → after: `L16071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16071) · [Before (L16071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16071)

```diff
-             cp("in 100 plays end")
+             mT("in 100 plays end")
```

#### 1467. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16074` → after: `L16074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16074) · [Before (L16074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16074)

```diff
-             Op
+             WT
```

#### 1468. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16076` → after: `L16076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16076) · [Before (L16076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16076)

```diff
-             cp("most games")
+             mT("most games")
```

#### 1469. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16078` → after: `L16078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16078) · [Before (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16078)

```diff
-             pp.typicalEnded
+             TT.typicalEnded
```

#### 1470. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16081` → after: `L16081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16081) · [Before (L16081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16081)

```diff
-             pp.ended
+             TT.ended
```

#### 1471. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16084` → after: `L16084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16084) · [Before (L16084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16084)

```diff
-             cp("of every 100 sessions end")
+             mT("of every 100 sessions end")
```

#### 1472. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16087` → after: `L16087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16087) · [Before (L16087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16087)

```diff
-             Op
+             WT
```

#### 1473. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16090` → after: `L16090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16090) · [Before (L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16090)

```diff
-             cp("in a typical Bloxd game")
+             mT("in a typical Bloxd game")
```

#### 1474. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16092` → after: `L16092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16092) · [Before (L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16092)

```diff
-             pp.typicalEnded
+             TT.typicalEnded
```

#### 1475. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16095` → after: `L16095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16095) · [Before (L16095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16095)

```diff
-             cp("do")
+             mT("do")
```

#### 1476. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16099` → after: `L16099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16099) · [Before (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16099)

```diff
-             cp("Only")
+             mT("Only")
```

#### 1477. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16102` → after: `L16102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16102) · [Before (L16102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16102)

```diff
-             (0, vS.l)(pp.fewPlayers)
+             (0, pg.n)(TT.fewPlayers)
```

#### 1478. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L16105` → after: `L16105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR16105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L16105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/106.js#L16105) · [Before (L16105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/106.js#L16105)

```diff
-             cp("players this week, so this is a hint.")
+             mT("players this week, so this is a hint.")
```
