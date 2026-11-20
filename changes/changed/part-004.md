# Changed — Bundle Modifications Report (Part 004 / 132)

- **Updated at**: `2026-11-21T04:21 JST`
- **Part**: `4 / 132` (**384** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 003](part-003.md) · [Part 005 →](part-005.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (bbb6l5.0244a119 → halsg.2bd74967 · continued)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (2751 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 1075. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14187-L14196` → after: `L14187-L14196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14187-L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14187-L14196) · [Before (L14187-L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14187-L14196)

```diff
-           for (const lq of qq.matchAll(Fo)) {
-             var gq, Yq;
-             const qq = null !== (gq = lq[1]) && void 0 !== gq ? gq : lq[3],
-               Oq = null !== (Yq = lq[2]) && void 0 !== Yq ? Yq : lq[4],
-               mq = lq.index + lq[0].search(/[(\-\d]/);
-             Eq.some((qq => mq < qq.end && lq.index + lq[0].length > qq.start)) || Eq.push({
-               x: Number(qq),
-               z: Number(Oq),
-               start: mq,
-               end: lq.index + lq[0].length,
+           for (const Ob of bb.matchAll(yK)) {
+             var hb, Bb;
+             const bb = null !== (hb = Ob[1]) && void 0 !== hb ? hb : Ob[3],
+               Gb = null !== (Bb = Ob[2]) && void 0 !== Bb ? Bb : Ob[4],
+               Ub = Ob.index + Ob[0].search(/[(\-\d]/);
+             ub.some((bb => Ub < bb.end && Ob.index + Ob[0].length > bb.start)) || ub.push({
+               x: Number(bb),
+               z: Number(Gb),
+               start: Ub,
+               end: Ob.index + Ob[0].length,
```

#### 1076. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14200` → after: `L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14200) · [Before (L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14200)

```diff
-           return Eq.sort(((qq, Eq) => qq.start - Eq.start))
+           return ub.sort(((bb, ub) => bb.start - ub.start))
```

#### 1077. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14203-L14204` → after: `L14203-L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14203-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14203-L14204) · [Before (L14203-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14203-L14204)

```diff
-         function Ko(qq, Eq, gq) {
-           return qq >= gq.x && qq < gq.x + yd && Eq >= gq.z && Eq < gq.z + yd
+         function kK(bb, ub, hb) {
+           return bb >= hb.x && bb < hb.x + no && ub >= hb.z && ub < hb.z + no
```

#### 1078. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14207-L14208` → after: `L14207-L14208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14207-L14208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14207-L14208) · [Before (L14207-L14208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14207-L14208)

```diff
-         function Co(qq) {
-           return new Set(qq.toLowerCase().split(/[^a-z\d]+/).filter((qq => "" !== qq)).map(Go))
+         function TK(bb) {
+           return new Set(bb.toLowerCase().split(/[^a-z\d]+/).filter((bb => "" !== bb)).map(MK))
```

#### 1079. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14211-L14212` → after: `L14211-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14211-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14211-L14212) · [Before (L14211-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14211-L14212)

```diff
-         function Io(qq, Eq) {
-           return Eq.words.some((Eq => Eq.length >= 3 && !ko.has(Eq) && qq.has(Eq)))
+         function cK(bb, ub) {
+           return ub.words.some((ub => ub.length >= 3 && !PK.has(ub) && bb.has(ub)))
```

#### 1080. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14215-L14217` → after: `L14215-L14217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14215-L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14215-L14217) · [Before (L14215-L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14215-L14217)

```diff
-         function eo(qq, Eq) {
-           const gq = new Set(Eq.flatMap((Eq => "" !== Eq.category && qq.has(Go(Eq.category)) ? [Eq.category] : [])));
-           return 1 === gq.size ? [...gq][0] : null
+         function QK(bb, ub) {
+           const hb = new Set(ub.flatMap((ub => "" !== ub.category && bb.has(MK(ub.category)) ? [ub.category] : [])));
+           return 1 === hb.size ? [...hb][0] : null
```

#### 1081. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14220-L14222` → after: `L14220-L14222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14220-L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14220-L14222) · [Before (L14220-L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14220-L14222)

```diff
-         function Do(qq) {
-           const Eq = "" === qq.category ? "" : ` in ${qq.category}`;
-           return null === qq.event ? `players spend time${Eq}` : `\`${qq.event}\` events${Eq} happen`
+         function RK(bb) {
+           const ub = "" === bb.category ? "" : ` in ${bb.category}`;
+           return null === bb.event ? `players spend time${ub}` : `\`${bb.event}\` events${ub} happen`
```

#### 1082. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14225-L14226` → after: `L14225-L14226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14225-L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14225-L14226) · [Before (L14225-L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14225-L14226)

```diff
-         function qP(qq) {
-           return `x ${qq.x} to ${qq.x+yd-1}, z ${qq.z} to ${qq.z+yd-1}`
+         function bW(bb) {
+           return `x ${bb.x} to ${bb.x+no-1}, z ${bb.z} to ${bb.z+no-1}`
```

#### 1083. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14228` → after: `L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14228) · [Before (L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14228)

```diff
-         const EP = 4e3;
+         const uW = 4e3;
```

#### 1084. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14230-L14238` → after: `L14230-L14238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14230-L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14230-L14238) · [Before (L14230-L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14230-L14238)

```diff
-         function gP(qq) {
-           const Eq = [];
-           let gq = 0;
-           for (const Yq of qq.matchAll(/[.!?](?=\s+[A-Z*_`[]|\s*$)/g)) {
-             const lq = Yq.index + 1;
-             Eq.push({
-               sentence: qq.slice(gq, lq),
-               start: gq
-             }), gq = lq
+         function hW(bb) {
+           const ub = [];
+           let hb = 0;
+           for (const Bb of bb.matchAll(/[.!?](?=\s+[A-Z*_`[]|\s*$)/g)) {
+             const Ob = Bb.index + 1;
+             ub.push({
+               sentence: bb.slice(hb, Ob),
+               start: hb
+             }), hb = Ob
```

#### 1085. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14240-L14243` → after: `L14240-L14243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14240-L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14240-L14243) · [Before (L14240-L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14240-L14243)

```diff
-           return gq < qq.length && Eq.push({
-             sentence: qq.slice(gq),
-             start: gq
-           }), Eq
+           return hb < bb.length && ub.push({
+             sentence: bb.slice(hb),
+             start: hb
+           }), ub
```

#### 1086. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14246-L14249` → after: `L14246-L14249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14246-L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14246-L14249) · [Before (L14246-L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14246-L14249)

```diff
-         function YP(qq, Eq, gq) {
-           if (qq.length > EP || 0 === Eq.length) return [];
-           const Yq = [...qq.matchAll(/`[^`\n]*`/g)].map((qq => [qq.index, qq.index + qq[0].length])),
-             lq = [];
+         function BW(bb, ub, hb) {
+           if (bb.length > uW || 0 === ub.length) return [];
+           const Bb = [...bb.matchAll(/`[^`\n]*`/g)].map((bb => [bb.index, bb.index + bb[0].length])),
+             Ob = [];
```

#### 1087. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14251-L14252` → after: `L14251-L14252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14251-L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14251-L14252) · [Before (L14251-L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14251-L14252)

```diff
-               sentence: Oq,
-               start: mq
+               sentence: Gb,
+               start: Ub
```

#### 1088. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14254-L14265` → after: `L14254-L14265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14254-L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14254-L14265) · [Before (L14254-L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14254-L14265)

```diff
-             of gP(qq)) {
-             const qq = wo(Oq);
-             if (0 === qq.length) continue;
-             const xq = Co(Oq.replace(/\[\[[^\]\n]*\]\]/g, " ")),
-               Aq = Lo.test(Oq),
-               cq = eo(xq, Eq),
-               uq = mq + Oq.replace(/[\s*_]+$/, "").length;
-             for (const Bq of qq) {
-               const qq = mq + Bq.start;
-               if (Yq.some((Eq => {
-                   let [gq, Yq] = Eq;
-                   return qq >= gq && qq < Yq
+             of hW(bb)) {
+             const bb = fK(Gb);
+             if (0 === bb.length) continue;
+             const Lb = TK(Gb.replace(/\[\[[^\]\n]*\]\]/g, " ")),
+               Yb = mK.test(Gb),
+               Sb = QK(Lb, ub),
+               ab = Ub + Gb.replace(/[\s*_]+$/, "").length;
+             for (const Hb of bb) {
+               const bb = Ub + Hb.start;
+               if (Bb.some((ub => {
+                   let [hb, Bb] = ub;
+                   return bb >= hb && bb < Bb
```

#### 1089. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14267-L14272` → after: `L14267-L14272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14267-L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14267-L14272) · [Before (L14267-L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14267-L14272)

```diff
-               const Wq = OP(Bq, xq, Aq && !lP(Oq.slice(0, Bq.start)), cq, Eq, gq);
-               null !== Wq && lq.push({
-                 claim: Wq,
-                 start: qq,
-                 end: mq + Bq.end,
-                 at: uq
+               const wb = GW(Hb, Lb, Yb && !OW(Gb.slice(0, Hb.start)), Sb, ub, hb);
+               null !== wb && Ob.push({
+                 claim: wb,
+                 start: bb,
+                 end: Ub + Hb.end,
+                 at: ab
```

#### 1090. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14276` → after: `L14276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14276) · [Before (L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14276)

```diff
-           return lq
+           return Ob
```

#### 1091. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14279-L14281` → after: `L14279-L14281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14279-L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14279-L14281) · [Before (L14279-L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14279-L14281)

```diff
-         function lP(qq) {
-           const Eq = Jo.exec(qq);
-           return null !== Eq && !Lo.test(Eq[0].replace(/^\S+/, ""))
+         function OW(bb) {
+           const ub = IK.exec(bb);
+           return null !== ub && !mK.test(ub[0].replace(/^\S+/, ""))
```

#### 1092. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14284` → after: `L14284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14284) · [Before (L14284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14284)

```diff
-         function OP(qq, Eq, gq, Yq, lq, Oq) {
+         function GW(bb, ub, hb, Bb, Ob, Gb) {
```

#### 1093. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14286-L14293` → after: `L14286-L14293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14286-L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14286-L14293) · [Before (L14286-L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14286-L14293)

```diff
-             x: mq,
-             z: xq
-           } = qq, Aq = function(qq, Eq, gq) {
-             return gq.flatMap((gq => {
-               const Yq = gq.spots.find((gq => Ko(qq, Eq, gq)));
-               return void 0 === Yq ? [] : [{
-                 layer: gq,
-                 share: Yq.share
+             x: Ub,
+             z: Lb
+           } = bb, Yb = function(bb, ub, hb) {
+             return hb.flatMap((hb => {
+               const Bb = hb.spots.find((hb => kK(bb, ub, hb)));
+               return void 0 === Bb ? [] : [{
+                 layer: hb,
+                 share: Bb.share
```

#### 1094. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14295-L14297` → after: `L14295-L14297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14295-L14297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14295-L14297) · [Before (L14295-L14297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14295-L14297)

```diff
-             })).sort(((qq, Eq) => Eq.share - qq.share))
-           }(mq, xq, lq);
-           if (0 === Aq.length) return null === Oq || Mo(mq, xq, Oq) ? null : {
+             })).sort(((bb, ub) => ub.share - bb.share))
+           }(Ub, Lb, Ob);
+           if (0 === Yb.length) return null === Gb || tK(Ub, Lb, Gb) ? null : {
```

#### 1095. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14300` → after: `L14300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14300) · [Before (L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14300)

```diff
-           const cq = Aq.filter((qq => {
+           const Sb = Yb.filter((bb => {
```

#### 1096. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14302-L14304` → after: `L14302-L14304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14302-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14302-L14304) · [Before (L14302-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14302-L14304)

```diff
-               layer: Eq
-             } = qq;
-             return !Eq.isLoggingOnly
+               layer: ub
+             } = bb;
+             return !ub.isLoggingOnly
```

#### 1097. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14306` → after: `L14306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14306) · [Before (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14306)

```diff
-           if (0 === cq.length) return {
+           if (0 === Sb.length) return {
```

#### 1098. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14308` → after: `L14308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14308) · [Before (L14308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14308)

```diff
-             event: Aq[0].layer.event
+             event: Yb[0].layer.event
```

#### 1099. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14310-L14311` → after: `L14310-L14311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14310-L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14310-L14311) · [Before (L14310-L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14310-L14311)

```diff
-           if (!gq) return null;
-           if (cq.some((qq => {
+           if (!hb) return null;
+           if (Sb.some((bb => {
```

#### 1100. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14313-L14315` → after: `L14313-L14315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14313-L14315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14313-L14315) · [Before (L14313-L14315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14313-L14315)

```diff
-                 layer: gq
-               } = qq;
-               return null !== gq.event && Io(Eq, gq)
+                 layer: hb
+               } = bb;
+               return null !== hb.event && cK(ub, hb)
```

#### 1101. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14317-L14320` → after: `L14317-L14320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14317-L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14317-L14320) · [Before (L14317-L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14317-L14320)

```diff
-           const uq = lq.filter((qq => qq.isDeath && !qq.isLoggingOnly)),
-             Bq = uq.filter((qq => Io(Eq, qq))),
-             Wq = Bq.length > 0 ? Bq : uq;
-           if (cq.some((qq => {
+           const ab = Ob.filter((bb => bb.isDeath && !bb.isLoggingOnly)),
+             Hb = ab.filter((bb => cK(ub, bb))),
+             wb = Hb.length > 0 ? Hb : ab;
+           if (Sb.some((bb => {
```

#### 1102. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14322-L14324` → after: `L14322-L14324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14322-L14324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14322-L14324) · [Before (L14322-L14324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14322-L14324)

```diff
-                 layer: Eq
-               } = qq;
-               return Wq.includes(Eq)
+                 layer: ub
+               } = bb;
+               return wb.includes(ub)
```

#### 1103. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14326-L14329` → after: `L14326-L14329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14326-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14326-L14329) · [Before (L14326-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14326-L14329)

```diff
-           const Nq = cq[0].layer,
-             aq = (qq, Eq) => null === Eq ? [] : qq.filter((qq => qq.category === Eq)),
-             Vq = [aq(Wq, Yq), aq(Wq, Nq.category), Wq].find((qq => qq.length > 0)),
-             dq = void 0 === Vq ? null : Vq.reduce(((qq, Eq) => Eq.total > qq.total ? Eq : qq));
+           const Zb = Sb[0].layer,
+             Xb = (bb, ub) => null === ub ? [] : bb.filter((bb => bb.category === ub)),
+             pb = [Xb(wb, Bb), Xb(wb, Zb.category), wb].find((bb => bb.length > 0)),
+             ob = void 0 === pb ? null : pb.reduce(((bb, ub) => ub.total > bb.total ? ub : bb));
```

#### 1104. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14332-L14336` → after: `L14332-L14336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14332-L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14332-L14336) · [Before (L14332-L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14332-L14336)

```diff
-             other: Do(Nq),
-             subject: null === dq ? null : {
-               event: dq.event,
-               category: dq.category,
-               text: (jq = dq.spots[0], Hq = qq.isRange, Hq ? qP(jq) : `x ${jq.x}, z ${jq.z}`),
+             other: RK(Zb),
+             subject: null === ob ? null : {
+               event: ob.event,
+               category: ob.category,
+               text: (Ab = ob.spots[0], lb = bb.isRange, lb ? bW(Ab) : `x ${Ab.x}, z ${Ab.z}`),
```

#### 1105. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14338-L14339` → after: `L14338-L14339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14338-L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14338-L14339) · [Before (L14338-L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14338-L14339)

```diff
-                 x: dq.spots[0].x,
-                 z: dq.spots[0].z
+                 x: ob.spots[0].x,
+                 z: ob.spots[0].z
```

#### 1106. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14343` → after: `L14343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14343) · [Before (L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14343)

```diff
-           var jq, Hq
+           var Ab, lb
```

#### 1107. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14346-L14349` → after: `L14346-L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14346-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14346-L14349) · [Before (L14346-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14346-L14349)

```diff
-         function mP(qq) {
-           var Eq, gq, Yq;
-           const lq = null === (Eq = /\bbetween\s+[^.!?]*\d\)?(\s+and\s+)$/i.exec(qq)) || void 0 === Eq ? void 0 : Eq[1];
-           return null !== (gq = null !== lq && void 0 !== lq ? lq : null === (Yq = /\s*(?:\(|\b(?:at|near|around|by|to|from|between)\s+(?:the\s+)?(?:(?:spot|place|position|coordinates|location|area)\s+)?)$/i.exec(qq)) || void 0 === Yq ? void 0 : Yq[0]) && void 0 !== gq ? gq : nul … [truncated]
+         function UW(bb) {
+           var ub, hb, Bb;
+           const Ob = null === (ub = /\bbetween\s+[^.!?]*\d\)?(\s+and\s+)$/i.exec(bb)) || void 0 === ub ? void 0 : ub[1];
+           return null !== (hb = null !== Ob && void 0 !== Ob ? Ob : null === (Bb = /\s*(?:\(|\b(?:at|near|around|by|to|from|between)\s+(?:the\s+)?(?:(?:spot|place|position|coordinates|location|area)\s+)?)$/i.exec(bb)) || void 0 === Bb ? void 0 : Bb[0]) && void 0 !== hb ? hb : nul … [truncated]
```

#### 1108. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14352-L14354` → after: `L14352-L14354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14352-L14354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14352-L14354) · [Before (L14352-L14354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14352-L14354)

```diff
-         function xP(qq, Eq, gq, Yq) {
-           if (0 === Eq.length) return {
-             markdown: qq,
+         function LW(bb, ub, hb, Bb) {
+           if (0 === ub.length) return {
+             markdown: bb,
```

#### 1109. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14357-L14367` → after: `L14357-L14367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14357-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14357-L14367) · [Before (L14357-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14357-L14367)

```diff
-           const lq = [],
-             Oq = eH(qq, (qq => function(qq, Eq, gq, Yq, lq) {
-               const Oq = YP(qq, Eq, gq);
-               if (0 === Oq.length) return qq;
-               let mq = qq;
-               const xq = [],
-                 Aq = (qq, Eq, gq) => {
-                   xq.push({
-                     start: qq,
-                     shift: gq.length - (Eq - qq)
-                   }), mq = mq.slice(0, qq) + gq + mq.slice(Eq)
+           const Ob = [],
+             Gb = bK(bb, (bb => function(bb, ub, hb, Bb, Ob) {
+               const Gb = BW(bb, ub, hb);
+               if (0 === Gb.length) return bb;
+               let Ub = bb;
+               const Lb = [],
+                 Yb = (bb, ub, hb) => {
+                   Lb.push({
+                     start: bb,
+                     shift: hb.length - (ub - bb)
+                   }), Ub = Ub.slice(0, bb) + hb + Ub.slice(ub)
```

#### 1110. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14369-L14370` → after: `L14369-L14370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14369-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14369-L14370) · [Before (L14369-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14369-L14370)

```diff
-               for (const Nq of [...Oq].reverse()) {
-                 var cq, uq, Bq;
+               for (const Zb of [...Gb].reverse()) {
+                 var Sb, ab, Hb;
```

#### 1111. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14372-L14377` → after: `L14372-L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14372-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14372-L14377) · [Before (L14372-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14372-L14377)

```diff
-                   claim: qq
-                 } = Nq, Eq = mq.slice(Nq.end), gq = null !== (cq = null === (uq = so.exec(Eq)) || void 0 === uq ? void 0 : uq[0]) && void 0 !== cq ? cq : "", Oq = Xo.exec(Eq.slice(gq.length)), aq = null !== (Bq = null === Oq || void 0 === Oq ? void 0 : Oq[0]) && void 0 !== Bq ? B … [truncated]
-                 if ("otherLayer" === qq.kind) {
-                   var Wq;
-                   if (null === qq.subject) continue;
-                   const Eq = xq.reduce(((qq, Eq) => {
+                   claim: bb
+                 } = Zb, ub = Ub.slice(Zb.end), hb = null !== (Sb = null === (ab = VK.exec(ub)) || void 0 === ab ? void 0 : ab[0]) && void 0 !== Sb ? Sb : "", Gb = FK.exec(ub.slice(hb.length)), Xb = null !== (Hb = null === Gb || void 0 === Gb ? void 0 : Gb[0]) && void 0 !== Hb ? H … [truncated]
+                 if ("otherLayer" === bb.kind) {
+                   var wb;
+                   if (null === bb.subject) continue;
+                   const ub = Lb.reduce(((bb, ub) => {
```

#### 1112. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14379-L14403` → after: `L14379-L14403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14379-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14379-L14403) · [Before (L14379-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14379-L14403)

```diff
-                         start: gq,
-                         shift: Yq
-                       } = Eq;
-                       return gq < Nq.at ? qq + Yq : qq
-                     }), Nq.at),
-                     gq = mq.slice(0, Eq),
-                     Yq = gq.slice(0, Nq.start) + gq.slice(Nq.end + Vq);
-                   if (/\d%\s+of\s+(?:all\s+|the\s+|their\s+)?(?:[\w-]+\s+)?(?:play ?time|time)\b/i.test(Yq) || Ro.test(Yq)) continue;
-                   const cq = "" === qq.subject.category ? "" : ` in ${qq.subject.category}`,
-                     uq = void 0 !== (null === Oq || void 0 === Oq ? void 0 : Oq[3]),
-                     Bq = null === Oq ? "" : `${null!==(Wq=Oq[1])&&void 0!==Wq?Wq:""}${uq?" (":", "}where the most \`${qq.subject.event}\` events${cq} happen${uq&&Oq[0].endsWith(")")?")":""}`,
-                     aq = null !== Oq && !uq && /^\s+[a-z]/i.test(mq.slice(Nq.end + Vq)),
-                     dq = qq.subject.text + Bq + (aq ? "," : "");
-                   lq.push({
-                     from: mq.slice(Nq.start, Nq.end + Vq),
-                     to: dq,
- ... (9 more removed lines; see GitHub link above)
+                         start: hb,
+                         shift: Bb
+                       } = ub;
+                       return hb < Zb.at ? bb + Bb : bb
+                     }), Zb.at),
+                     hb = Ub.slice(0, ub),
+                     Bb = hb.slice(0, Zb.start) + hb.slice(Zb.end + pb);
+                   if (/\d%\s+of\s+(?:all\s+|the\s+|their\s+)?(?:[\w-]+\s+)?(?:play ?time|time)\b/i.test(Bb) || qK.test(Bb)) continue;
+                   const Sb = "" === bb.subject.category ? "" : ` in ${bb.subject.category}`,
+                     ab = void 0 !== (null === Gb || void 0 === Gb ? void 0 : Gb[3]),
+                     Hb = null === Gb ? "" : `${null!==(wb=Gb[1])&&void 0!==wb?wb:""}${ab?" (":", "}where the most \`${bb.subject.event}\` events${Sb} happen${ab&&Gb[0].endsWith(")")?")":""}`,
+                     Xb = null !== Gb && !ab && /^\s+[a-z]/i.test(Ub.slice(Zb.end + pb)),
+                     ob = bb.subject.text + Hb + (Xb ? "," : "");
+                   Ob.push({
+                     from: Ub.slice(Zb.start, Zb.end + pb),
+                     to: ob,
+ ... (9 more added lines; see GitHub link above)
```

#### 1113. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14406` → after: `L14406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14406) · [Before (L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14406)

```diff
-                   }), Aq(Eq, Nq.end + Vq + gq, "")
+                   }), Yb(ub, Zb.end + pb + hb, "")
```

#### 1114. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14409-L14410` → after: `L14409-L14410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14409-L14410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14409-L14410) · [Before (L14409-L14410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14409-L14410)

```diff
-               return mq
-             }(qq, Eq, gq, Yq, lq)));
+               return Ub
+             }(bb, ub, hb, Bb, Ob)));
```

#### 1115. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14412-L14413` → after: `L14412-L14413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14412-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14412-L14413) · [Before (L14412-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14412-L14413)

```diff
-             markdown: 0 === lq.length ? qq : Oq,
-             repairs: lq
+             markdown: 0 === Ob.length ? bb : Gb,
+             repairs: Ob
```

#### 1116. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14416` → after: `L14416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14416) · [Before (L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14416)

```diff
-         const AP = "\\d{1,3}(?:,\\d{3})+|\\d+", cP = new RegExp(`\\bof (${AP}) players(?: \\([^)]*\\))? at (.+?), (${AP}) reached (.+?)(?: or a later one)? \\(`, "g"), uP = new RegExp(`^- (.+?) \u2192 (.+?): (${AP}) of (${AP}) players\\b`), BP = /\bsince logging began\b|\ball[- ] … [truncated]
+         const YW = "\\d{1,3}(?:,\\d{3})+|\\d+", SW = new RegExp(`\\bof (${YW}) players(?: \\([^)]*\\))? at (.+?), (${YW}) reached (.+?)(?: or a later one)? \\(`, "g"), aW = new RegExp(`^- (.+?) \u2192 (.+?): (${YW}) of (${YW}) players\\b`), HW = /\bsince logging began\b|\ball[- ] … [truncated]
```

#### 1117. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14418-L14419` → after: `L14418-L14419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14418-L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14418-L14419) · [Before (L14418-L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14418-L14419)

```diff
-         function aP(qq) {
-           return Number(qq.replace(/,/g, ""))
+         function XW(bb) {
+           return Number(bb.replace(/,/g, ""))
```

#### 1118. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14422-L14423` → after: `L14422-L14423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14422-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14422-L14423) · [Before (L14422-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14422-L14423)

```diff
-         function VP(qq) {
-           return tA(qq).trim().toLowerCase()
+         function pW(bb) {
+           return dY(bb).trim().toLowerCase()
```

#### 1119. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14426-L14431` → after: `L14426-L14431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14426-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14426-L14431) · [Before (L14426-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14426-L14431)

```diff
-         function dP(qq, Eq) {
-           var gq, Yq, lq, Oq, mq;
-           const xq = null === (gq = qq[Eq.event]) || void 0 === gq ? void 0 : gq.trim(),
-             Aq = -1 === Eq.value ? "" : null !== (Yq = null === (lq = qq[Eq.value]) || void 0 === lq ? void 0 : lq.trim()) && void 0 !== Yq ? Yq : "",
-             cq = new RegExp(`^(${AP})\\b`).exec(null !== (Oq = null === (mq = qq[Eq.players]) || void 0 === mq ? void 0 : mq.trim()) && void 0 !== Oq ? Oq : "");
-           return void 0 === xq || "" === xq || null === cq ? null : [aP(cq[1]), "" === Aq ? xq : `${xq}: ${Aq}`]
+         function oW(bb, ub) {
+           var hb, Bb, Ob, Gb, Ub;
+           const Lb = null === (hb = bb[ub.event]) || void 0 === hb ? void 0 : hb.trim(),
+             Yb = -1 === ub.value ? "" : null !== (Bb = null === (Ob = bb[ub.value]) || void 0 === Ob ? void 0 : Ob.trim()) && void 0 !== Bb ? Bb : "",
+             Sb = new RegExp(`^(${YW})\\b`).exec(null !== (Gb = null === (Ub = bb[ub.players]) || void 0 === Ub ? void 0 : Ub.trim()) && void 0 !== Gb ? Gb : "");
+           return void 0 === Lb || "" === Lb || null === Sb ? null : [XW(Sb[1]), "" === Yb ? Lb : `${Lb}: ${Yb}`]
```

#### 1120. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14434-L14441` → after: `L14434-L14441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14434-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14434-L14441) · [Before (L14434-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14434-L14441)

```diff
-         function jP(qq) {
-           const Eq = new Map,
-             gq = new Map,
-             Yq = new Set,
-             lq = (qq, Eq) => {
-               var Yq;
-               const lq = null !== (Yq = gq.get(qq)) && void 0 !== Yq ? Yq : [];
-               lq.includes(Eq) || gq.set(qq, [...lq, Eq])
+         function AW(bb) {
+           const ub = new Map,
+             hb = new Map,
+             Bb = new Set,
+             Ob = (bb, ub) => {
+               var Bb;
+               const Ob = null !== (Bb = hb.get(bb)) && void 0 !== Bb ? Bb : [];
+               Ob.includes(ub) || hb.set(bb, [...Ob, ub])
```

#### 1121. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14443-L14444` → after: `L14443-L14444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14443-L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14443-L14444) · [Before (L14443-L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14443-L14444)

```diff
-             Oq = qq => {
-               Eq.set(`${VP(qq.from)} > ${VP(qq.to)}`, qq)
+             Gb = bb => {
+               ub.set(`${pW(bb.from)} > ${pW(bb.to)}`, bb)
```

#### 1122. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14446-L14457` → after: `L14446-L14457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14446-L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14446-L14457) · [Before (L14446-L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14446-L14457)

```diff
-           let mq = null;
-           for (const xq of qq.split(/\r?\n/)) {
-             for (const Eq of (0, Wm.d)(xq, NP, Wm.p)) Yq.add(Number(Eq[1]));
-             if (xq.startsWith("|")) {
-               const qq = xq.split("|"),
-                 Eq = qq.findIndex((qq => BP.test(qq))),
-                 gq = qq.findIndex((qq => /^\s*event\s*$/i.test(qq)));
-               if (-1 !== Eq && -1 !== gq) {
-                 mq = {
-                   event: gq,
-                   value: qq.findIndex((qq => /^\s*value\s*$/i.test(qq))),
-                   players: Eq
+           let Ub = null;
+           for (const Lb of bb.split(/\r?\n/)) {
+             for (const ub of (0, wU.f)(Lb, ZW, wU.p)) Bb.add(Number(ub[1]));
+             if (Lb.startsWith("|")) {
+               const bb = Lb.split("|"),
+                 ub = bb.findIndex((bb => HW.test(bb))),
+                 hb = bb.findIndex((bb => /^\s*event\s*$/i.test(bb)));
+               if (-1 !== ub && -1 !== hb) {
+                 Ub = {
+                   event: hb,
+                   value: bb.findIndex((bb => /^\s*value\s*$/i.test(bb))),
+                   players: ub
```

#### 1123. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14461-L14462` → after: `L14461-L14462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14461-L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14461-L14462) · [Before (L14461-L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14461-L14462)

```diff
-               const Yq = null === mq ? null : dP(qq, mq);
-               null !== Yq && lq(...Yq);
+               const Bb = null === Ub ? null : oW(bb, Ub);
+               null !== Bb && Ob(...Bb);
```

#### 1124. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14465-L14471` → after: `L14465-L14471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14465-L14471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14465-L14471) · [Before (L14465-L14471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14465-L14471)

```diff
-             mq = null;
-             const qq = uP.exec(xq);
-             null !== qq && Oq({
-               from: qq[1],
-               to: qq[2],
-               fromPlayers: aP(qq[4]),
-               toPlayers: aP(qq[3])
+             Ub = null;
+             const bb = aW.exec(Lb);
+             null !== bb && Gb({
+               from: bb[1],
+               to: bb[2],
+               fromPlayers: XW(bb[4]),
+               toPlayers: XW(bb[3])
```

#### 1125. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14473-L14477` → after: `L14473-L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14473-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14473-L14477) · [Before (L14473-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14473-L14477)

```diff
-             for (const Eq of xq.matchAll(cP)) Oq({
-               from: Eq[2],
-               to: Eq[4],
-               fromPlayers: aP(Eq[1]),
-               toPlayers: aP(Eq[3])
+             for (const ub of Lb.matchAll(SW)) Gb({
+               from: ub[2],
+               to: ub[4],
+               fromPlayers: XW(ub[1]),
+               toPlayers: XW(ub[3])
```

#### 1126. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14479-L14481` → after: `L14479-L14481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14479-L14481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14479-L14481) · [Before (L14479-L14481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14479-L14481)

```diff
-             for (const Eq of (0, Wm.x)(xq, /\s+(?=[A-Z])/g, (0, Wm.s)(".;")))
-               if (BP.test(Eq))
-                 for (const qq of Eq.matchAll(WP)) lq(aP(qq[2]), qq[1].trim())
+             for (const ub of (0, wU.z)(Lb, /\s+(?=[A-Z])/g, (0, wU.r)(".;")))
+               if (HW.test(ub))
+                 for (const bb of ub.matchAll(wW)) Ob(XW(bb[2]), bb[1].trim())
```

#### 1127. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14484-L14486` → after: `L14484-L14486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14484-L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14484-L14486) · [Before (L14484-L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14484-L14486)

```diff
-             steps: [...Eq.values()],
-             allTimeEvents: gq,
-             ratios: Yq
+             steps: [...ub.values()],
+             allTimeEvents: hb,
+             ratios: Bb
```

#### 1128. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14490-L14496` → after: `L14490-L14496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14490-L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14490-L14496) · [Before (L14490-L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14490-L14496)

```diff
-         function HP(qq) {
-           const Eq = tA(qq).trim(),
-             gq = Eq.lastIndexOf(": ");
-           if (gq <= 0) return [Eq];
-           const Yq = Eq.slice(0, gq),
-             lq = Eq.slice(gq + 2);
-           return /^-?\d+$/.test(lq) ? [Eq, ...(0, Bm.O)(Yq, lq)] : /[a-z]{3}/i.test(lq) ? [Eq, lq] : [Eq]
+         function lW(bb) {
+           const ub = dY(bb).trim(),
+             hb = ub.lastIndexOf(": ");
+           if (hb <= 0) return [ub];
+           const Bb = ub.slice(0, hb),
+             Ob = ub.slice(hb + 2);
+           return /^-?\d+$/.test(Ob) ? [ub, ...(0, HU.J)(Bb, Ob)] : /[a-z]{3}/i.test(Ob) ? [ub, Ob] : [ub]
```

#### 1129. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14499-L14500` → after: `L14499-L14500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14499-L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14499-L14500) · [Before (L14499-L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14499-L14500)

```diff
-         function oP(qq, Eq) {
-           return HP(Eq).some((Eq => (0, Wm.d)(qq, new RegExp(`\`?${(0,Bm.J)(Eq)}(?![\\w]|\\.\\d)`, "i"), (0, Wm.i)("\\w")).length > 0))
+         function KW(bb, ub) {
+           return lW(ub).some((ub => (0, wU.f)(bb, new RegExp(`\`?${(0,HU.H)(ub)}(?![\\w]|\\.\\d)`, "i"), (0, wU.j)("\\w")).length > 0))
```

#### 1130. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14502` → after: `L14502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14502) · [Before (L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14502)

```diff
-         const PP = new RegExp(`(${AP})(?![\\w%]|[.,:]\\d|\\s*%)`, "g"), QP = (0, Wm.i)("\\w.,:%$#-"), yP = new RegExp(`\\s*\\((?:about |around |over |nearly )?(?:${AP})(?:\\s+[a-z]+){0,2}(?:,\\s*all[- ]time)?\\)$`, "i"), tP = /^\s+(?:[A-Za-z_:`]+\s+){0,2}?(?:players?|people|kids| … [truncated]
+         const WW = new RegExp(`(${YW})(?![\\w%]|[.,:]\\d|\\s*%)`, "g"), CW = (0, wU.j)("\\w.,:%$#-"), dW = new RegExp(`\\s*\\((?:about |around |over |nearly )?(?:${YW})(?:\\s+[a-z]+){0,2}(?:,\\s*all[- ]time)?\\)$`, "i"), rW = /^\s+(?:[A-Za-z_:`]+\s+){0,2}?(?:players?|people|kids| … [truncated]
```

#### 1131. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14504-L14511` → after: `L14504-L14511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14504-L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14504-L14511) · [Before (L14504-L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14504-L14511)

```diff
-         function vP(qq, Eq, gq, Yq) {
-           return 0 === Eq.size || 0 === gq.steps.length ? [] : (0, Wm.d)(qq, PP, QP).flatMap((lq => {
-             const Oq = lq.index,
-               mq = Oq + lq[0].length,
-               xq = aP(lq[1]),
-               Aq = Yq.every((qq => {
-                 let [Eq, gq] = qq;
-                 return gq <= Oq || Eq >= mq
+         function nW(bb, ub, hb, Bb) {
+           return 0 === ub.size || 0 === hb.steps.length ? [] : (0, wU.f)(bb, WW, CW).flatMap((Ob => {
+             const Gb = Ob.index,
+               Ub = Gb + Ob[0].length,
+               Lb = XW(Ob[1]),
+               Yb = Bb.every((bb => {
+                 let [ub, hb] = bb;
+                 return hb <= Gb || ub >= Ub
```

#### 1132. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14513-L14519` → after: `L14513-L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14513-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14513-L14519) · [Before (L14513-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14513-L14519)

```diff
-               cq = gq.allTimeEvents.get(xq);
-             if (!Aq || !Eq.has(xq) || void 0 === cq) return [];
-             const uq = qq.slice(...(0, Bm.P)(qq, Oq)),
-               Bq = new Set((0, Wm.d)(uq, PP, QP).flatMap((qq => {
-                 var Yq;
-                 const lq = aP(qq[1]);
-                 return Eq.has(lq) ? (null !== (Yq = gq.allTimeEvents.get(lq)) && void 0 !== Yq ? Yq : []).map(VP) : []
+               Sb = hb.allTimeEvents.get(Lb);
+             if (!Yb || !ub.has(Lb) || void 0 === Sb) return [];
+             const ab = bb.slice(...(0, HU.N)(bb, Gb)),
+               Hb = new Set((0, wU.f)(ab, WW, CW).flatMap((bb => {
+                 var Bb;
+                 const Ob = XW(bb[1]);
+                 return ub.has(Ob) ? (null !== (Bb = hb.allTimeEvents.get(Ob)) && void 0 !== Bb ? Bb : []).map(pW) : []
```

#### 1133. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14521-L14524` → after: `L14521-L14524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14521-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14521-L14524) · [Before (L14521-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14521-L14524)

```diff
-               Wq = new Set(cq.map(VP)),
-               Nq = gq.steps.find((qq => {
-                 const Eq = oP(uq, qq.to) && !Bq.has(VP(qq.to));
-                 return Wq.has(VP(qq.from)) && (Eq || (0, Wm.d)(uq, new RegExp(`${qq.toPlayers.toLocaleString("en-US")}(?!\\d|,\\d)`), (0, Wm.i)("\\d,")).length > 0)
+               wb = new Set(Sb.map(pW)),
+               Zb = hb.steps.find((bb => {
+                 const ub = KW(ab, bb.to) && !Hb.has(pW(bb.to));
+                 return wb.has(pW(bb.from)) && (ub || (0, wU.f)(ab, new RegExp(`${bb.toPlayers.toLocaleString("en-US")}(?!\\d|,\\d)`), (0, wU.j)("\\d,")).length > 0)
```

#### 1134. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14526-L14529` → after: `L14526-L14529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14526-L14529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14526-L14529) · [Before (L14526-L14529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14526-L14529)

```diff
-             if (void 0 !== Nq) return Nq.fromPlayers === xq ? [] : [{
-               start: Oq,
-               end: mq,
-               text: Nq.fromPlayers.toLocaleString("en-US")
+             if (void 0 !== Zb) return Zb.fromPlayers === Lb ? [] : [{
+               start: Gb,
+               end: Ub,
+               text: Zb.fromPlayers.toLocaleString("en-US")
```

#### 1135. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14531-L14543` → after: `L14531-L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14531-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14531-L14543) · [Before (L14531-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14531-L14543)

```diff
-             const aq = gq.steps.some((qq => [qq.from, qq.to].some((qq => function(qq, Eq) {
-                 return HP(Eq).some((Eq => new RegExp(`\\b(?:before|between|after|at|during|until|reaching|reach|reached|past|from|to|on)\\s+(?:the\\s+)?\`?${(0,Bm.J)(Eq)}(?![\\w]|\\.\\d)`, "i").test(qq)))
-               }(uq, qq))))),
-               Vq = gq.steps.some((qq => [qq.from, qq.to].some((qq => Bq.has(VP(qq)) && oP(uq, qq)))));
-             if (!aq || Vq || /\bthan\b/i.test(uq)) return [];
-             const dq = function(qq, Eq, gq) {
-               const Yq = qq.lastIndexOf("(", Eq),
-                 lq = qq.indexOf(")", gq);
-               if (-1 !== Yq && -1 !== lq && !qq.slice(Yq, lq).includes(")")) {
-                 const Eq = yP.exec(qq.slice(0, lq + 1));
-                 if (null !== Eq && Eq.index <= Yq && Eq.index + Eq[0].length === lq + 1) return {
-                   start: Eq.index,
-                   end: lq + 1,
+             const Xb = hb.steps.some((bb => [bb.from, bb.to].some((bb => function(bb, ub) {
+                 return lW(ub).some((ub => new RegExp(`\\b(?:before|between|after|at|during|until|reaching|reach|reached|past|from|to|on)\\s+(?:the\\s+)?\`?${(0,HU.H)(ub)}(?![\\w]|\\.\\d)`, "i").test(bb)))
+               }(ab, bb))))),
+               pb = hb.steps.some((bb => [bb.from, bb.to].some((bb => Hb.has(pW(bb)) && KW(ab, bb)))));
+             if (!Xb || pb || /\bthan\b/i.test(ab)) return [];
+             const ob = function(bb, ub, hb) {
+               const Bb = bb.lastIndexOf("(", ub),
+                 Ob = bb.indexOf(")", hb);
+               if (-1 !== Bb && -1 !== Ob && !bb.slice(Bb, Ob).includes(")")) {
+                 const ub = dW.exec(bb.slice(0, Ob + 1));
+                 if (null !== ub && ub.index <= Bb && ub.index + ub[0].length === Ob + 1) return {
+                   start: ub.index,
+                   end: Ob + 1,
```

#### 1136. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14547-L14556` → after: `L14547-L14556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14547-L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14547-L14556) · [Before (L14547-L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14547-L14556)

```diff
-               if (!tP.test(qq.slice(gq))) return null;
-               const Oq = rP.exec(qq.slice(0, Eq)),
-                 mq = null === Oq ? Eq : Oq.index,
-                 xq = /(?:^|[.!?:]\s+|^\s*(?:[-*]|\d+\.)\s+)$/.test(qq.slice(0, mq)),
-                 Aq = qq.slice(gq).replace(/^\s+(?:of\s+)?/i, ""),
-                 cq = qq.length - Aq.length;
-               return xq ? {
-                 start: mq,
-                 end: cq + 1,
-                 text: Aq.charAt(0).toUpperCase()
+               if (!rW.test(bb.slice(hb))) return null;
+               const Gb = jW.exec(bb.slice(0, ub)),
+                 Ub = null === Gb ? ub : Gb.index,
+                 Lb = /(?:^|[.!?:]\s+|^\s*(?:[-*]|\d+\.)\s+)$/.test(bb.slice(0, Ub)),
+                 Yb = bb.slice(hb).replace(/^\s+(?:of\s+)?/i, ""),
+                 Sb = bb.length - Yb.length;
+               return Lb ? {
+                 start: Ub,
+                 end: Sb + 1,
+                 text: Yb.charAt(0).toUpperCase()
```

#### 1137. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14558-L14559` → after: `L14558-L14559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14558-L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14558-L14559) · [Before (L14558-L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14558-L14559)

```diff
-                 start: mq,
-                 end: cq,
+                 start: Ub,
+                 end: Sb,
```

#### 1138. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14562-L14563` → after: `L14562-L14563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14562-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14562-L14563) · [Before (L14562-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14562-L14563)

```diff
-             }(qq, Oq, mq);
-             return null === dq ? [] : [dq]
+             }(bb, Gb, Ub);
+             return null === ob ? [] : [ob]
```

#### 1139. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14566` → after: `L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14566) · [Before (L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14566)

```diff
-         const hP = /^(\s+times\s+)more(\s+[a-z]+)?(\s+than)\b/i, nP = /\b(?:plays|players|sessions|visits)\b[^.;:!?]*?(?:,\s*which\s+is|\bis|\bthat's|\bthat\s+is)\s+$/i;
+         const DW = /^(\s+times\s+)more(\s+[a-z]+)?(\s+than)\b/i, xW = /\b(?:plays|players|sessions|visits)\b[^.;:!?]*?(?:,\s*which\s+is|\bis|\bthat's|\bthat\s+is)\s+$/i;
```

#### 1140. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14568-L14575` → after: `L14568-L14575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14568-L14575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14568-L14575) · [Before (L14568-L14575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14568-L14575)

```diff
-         function bP(qq, Eq, gq) {
-           return 0 === Eq.ratios.size ? [] : (0, Wm.d)(qq, /(\d+(?:\.\d+)?)(?=\s+times\s+more\b)/g, Wm.p).flatMap((Yq => {
-             var lq;
-             const Oq = Yq.index + Yq[0].length,
-               mq = hP.exec(qq.slice(Oq)),
-               xq = gq.every((qq => {
-                 let [Eq, gq] = qq;
-                 return gq <= Yq.index || Eq >= Oq
+         function zW(bb, ub, hb) {
+           return 0 === ub.ratios.size ? [] : (0, wU.f)(bb, /(\d+(?:\.\d+)?)(?=\s+times\s+more\b)/g, wU.p).flatMap((Bb => {
+             var Ob;
+             const Gb = Bb.index + Bb[0].length,
+               Ub = DW.exec(bb.slice(Gb)),
+               Lb = hb.every((bb => {
+                 let [ub, hb] = bb;
+                 return hb <= Bb.index || ub >= Gb
```

#### 1141. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14577-L14582` → after: `L14577-L14582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14577-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14577-L14582) · [Before (L14577-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14577-L14582)

```diff
-             if (null === mq || !xq || !Eq.ratios.has(Number(Yq[1]))) return [];
-             const Aq = null !== (lq = mq[2]) && void 0 !== lq ? lq : "";
-             return ("" === Aq || /^\s+(?:players|plays|sessions|people|visits|visitors|users|joins)$/i.test(Aq)) && ("" !== Aq || nP.test(qq.slice(Math.max(0, Yq.index - 80), Yq.index))) ? [{
-               start: Oq,
-               end: Oq + mq[0].length,
-               text: `${mq[1]}as many${Aq} as`
+             if (null === Ub || !Lb || !ub.ratios.has(Number(Bb[1]))) return [];
+             const Yb = null !== (Ob = Ub[2]) && void 0 !== Ob ? Ob : "";
+             return ("" === Yb || /^\s+(?:players|plays|sessions|people|visits|visitors|users|joins)$/i.test(Yb)) && ("" !== Yb || xW.test(bb.slice(Math.max(0, Bb.index - 80), Bb.index))) ? [{
+               start: Gb,
+               end: Gb + Ub[0].length,
+               text: `${Ub[1]}as many${Yb} as`
```

#### 1142. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14586-L14602` → after: `L14586-L14602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14586-L14602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14586-L14602) · [Before (L14586-L14602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14586-L14602)

```diff
-         const iP = 50, ZP = WB, fP = 3, MP = .1, TP = .05, zP = 2, SP = 7, pP = 7, GP = 14, LP = 7, JP = 2;
- 
-         function kP(qq) {
-           var Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq;
-           const Nq = Vd(qq),
-             aq = qq.stats,
-             Vq = null === aq ? null : FE(aq.rankingWindow),
-             dq = null !== (Eq = null === (gq = qq.baseline) || void 0 === gq ? void 0 : gq.rankingWindow) && void 0 !== Eq ? Eq : null,
-             jq = null !== (Yq = null === aq || void 0 === aq ? void 0 : aq.sessionDurationHistogram) && void 0 !== Yq ? Yq : null,
-             Hq = null === jq ? null : zE(jq.sessionCounts, jq.maxBucketMinute),
-             oq = Nq.biggestProblem,
-             Pq = (null !== (lq = null === (Oq = Nq.flow) || void 0 === Oq ? void 0 : Oq.steps) && void 0 !== lq ? lq : []).flatMap((qq => qq.isPastNearer ? [] : [{
-               from: tA(qq.from),
-               to: tA(qq.to),
-               fromPlayers: qq.fromPlayers,
-               toPlayers: qq.players,
- ... (1 more removed lines; see GitHub link above)
+         const gW = 50, iW = HH, vW = 3, tW = .1, JW = .05, eW = 2, NW = 7, sW = 7, MW = 14, mW = 7, IW = 2;
+ 
+         function PW(bb) {
+           var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb;
+           const Zb = oo(bb),
+             Xb = bb.stats,
+             pb = null === Xb ? null : yu(Xb.rankingWindow),
+             ob = null !== (ub = null === (hb = bb.baseline) || void 0 === hb ? void 0 : hb.rankingWindow) && void 0 !== ub ? ub : null,
+             Ab = null !== (Bb = null === Xb || void 0 === Xb ? void 0 : Xb.sessionDurationHistogram) && void 0 !== Bb ? Bb : null,
+             lb = null === Ab ? null : eu(Ab.sessionCounts, Ab.maxBucketMinute),
+             Kb = Zb.biggestProblem,
+             Wb = (null !== (Ob = null === (Gb = Zb.flow) || void 0 === Gb ? void 0 : Gb.steps) && void 0 !== Ob ? Ob : []).flatMap((bb => bb.isPastNearer ? [] : [{
+               from: dY(bb.from),
+               to: dY(bb.to),
+               fromPlayers: bb.fromPlayers,
+               toPlayers: bb.players,
+ ... (1 more added lines; see GitHub link above)
```

#### 1143. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14604-L14605` → after: `L14604-L14605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14604-L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14604-L14605) · [Before (L14604-L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14604-L14605)

```diff
-               isBranch: !qq.isChain,
-               isOrLater: qq.isOrLater,
+               isBranch: !bb.isChain,
+               isOrLater: bb.isOrLater,
```

#### 1144. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14608-L14616` → after: `L14608-L14616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14608-L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14608-L14616) · [Before (L14608-L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14608-L14616)

```diff
-             Qq = Nq.progressions.flatMap((qq => {
-               const Eq = Eq => rA(qq.eventType, Eq);
-               return qq.steps.flatMap((gq => gq.reached !== gq.to.players ? [] : [{
-                 from: Eq(gq.from.value),
-                 to: Eq(gq.to.value),
-                 fromPlayers: gq.from.players,
-                 toPlayers: gq.to.players,
-                 share: 100 * gq.share,
-                 group: `${qq.gameCategory}/${qq.eventType}`,
+             Cb = Zb.progressions.flatMap((bb => {
+               const ub = ub => rY(bb.eventType, ub);
+               return bb.steps.flatMap((hb => hb.reached !== hb.to.players ? [] : [{
+                 from: ub(hb.from.value),
+                 to: ub(hb.to.value),
+                 fromPlayers: hb.from.players,
+                 toPlayers: hb.to.players,
+                 share: 100 * hb.share,
+                 group: `${bb.gameCategory}/${bb.eventType}`,
```

#### 1145. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14620-L14621` → after: `L14620-L14621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14620-L14621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14620-L14621) · [Before (L14620-L14621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14620-L14621)

```diff
-                   gameCategory: qq.gameCategory,
-                   eventType: qq.eventType,
+                   gameCategory: bb.gameCategory,
+                   eventType: bb.eventType,
```

#### 1146. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14626-L14627` → after: `L14626-L14627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14626-L14627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14626-L14627) · [Before (L14626-L14627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14626-L14627)

```diff
-           let yq = null;
-           if ("dropoff" === (null === oq || void 0 === oq ? void 0 : oq.kind)) yq = {
+           let db = null;
+           if ("dropoff" === (null === Kb || void 0 === Kb ? void 0 : Kb.kind)) db = {
```

#### 1147. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14629` → after: `L14629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14629) · [Before (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14629)

```diff
-             minute: oq.minute.minute
+             minute: Kb.minute.minute
```

#### 1148. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14631` → after: `L14631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14631) · [Before (L14631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14631)

```diff
-           else if ("flowStep" === (null === oq || void 0 === oq ? void 0 : oq.kind)) yq = {
+           else if ("flowStep" === (null === Kb || void 0 === Kb ? void 0 : Kb.kind)) db = {
```

#### 1149. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14633-L14634` → after: `L14633-L14634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14633-L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14633-L14634) · [Before (L14633-L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14633-L14634)

```diff
-             from: tA(oq.step.from),
-             to: tA(oq.step.to)
+             from: dY(Kb.step.from),
+             to: dY(Kb.step.to)
```

#### 1150. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14636` → after: `L14636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14636) · [Before (L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14636)

```diff
-           else if ("progressStep" === (null === oq || void 0 === oq ? void 0 : oq.kind)) {
+           else if ("progressStep" === (null === Kb || void 0 === Kb ? void 0 : Kb.kind)) {
```

#### 1151. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14638-L14640` → after: `L14638-L14640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14638-L14640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14638-L14640) · [Before (L14638-L14640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14638-L14640)

```diff
-               eventType: qq
-             } = oq.progression;
-             yq = {
+               eventType: bb
+             } = Kb.progression;
+             db = {
```

#### 1152. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14642-L14643` → after: `L14642-L14643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14642-L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14642-L14643) · [Before (L14642-L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14642-L14643)

```diff
-               from: rA(qq, oq.step.from.value),
-               to: rA(qq, oq.step.to.value)
+               from: rY(bb, Kb.step.from.value),
+               to: rY(bb, Kb.step.to.value)
```

#### 1153. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14645` → after: `L14645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14645) · [Before (L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14645)

```diff
-           } else "playsFalling" === (null === oq || void 0 === oq ? void 0 : oq.kind) && (yq = {
+           } else "playsFalling" === (null === Kb || void 0 === Kb ? void 0 : Kb.kind) && (db = {
```

#### 1154. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14648-L14651` → after: `L14648-L14651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14648-L14651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14648-L14651) · [Before (L14648-L14651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14648-L14651)

```diff
-           const tq = null === aq ? [] : QE(aq).slice(-GP),
-             rq = null !== (mq = null === Vq || void 0 === Vq ? void 0 : Vq.avgSessionMs) && void 0 !== mq ? mq : null,
-             vq = null !== (xq = null === Vq || void 0 === Vq ? void 0 : Vq.sessionsPerPlayer) && void 0 !== xq ? xq : null,
-             hq = null !== (Aq = null === Vq || void 0 === Vq ? void 0 : Vq.avgDailyPlays) && void 0 !== Aq ? Aq : null;
+           const rb = null === Xb ? [] : Cu(Xb).slice(-MW),
+             jb = null !== (Ub = null === pb || void 0 === pb ? void 0 : pb.avgSessionMs) && void 0 !== Ub ? Ub : null,
+             nb = null !== (Lb = null === pb || void 0 === pb ? void 0 : pb.sessionsPerPlayer) && void 0 !== Lb ? Lb : null,
+             Db = null !== (Yb = null === pb || void 0 === pb ? void 0 : pb.avgDailyPlays) && void 0 !== Yb ? Yb : null;
```

#### 1155. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14653-L14658` → after: `L14653-L14658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14653-L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14653-L14658) · [Before (L14653-L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14653-L14658)

```diff
-             dailyPlays: hq,
-             weeklyPlayers: null === aq || aq.rankingWindow.days !== pP ? null : aq.rankingWindow.uniquePlayers,
-             sessions: null === jq || null === Hq ? null : {
-               days: jq.days,
-               percents: Hq.points.map((qq => qq.percent)),
-               typicalPercents: null !== (cq = null === (uq = qq.baseline) || void 0 === uq ? void 0 : uq.dropoffCurve.survivalPercents.map((qq => qq.p50))) && void 0 !== cq ? cq : []
+             dailyPlays: Db,
+             weeklyPlayers: null === Xb || Xb.rankingWindow.days !== sW ? null : Xb.rankingWindow.uniquePlayers,
+             sessions: null === Ab || null === lb ? null : {
+               days: Ab.days,
+               percents: lb.points.map((bb => bb.percent)),
+               typicalPercents: null !== (Sb = null === (ab = bb.baseline) || void 0 === ab ? void 0 : ab.dropoffCurve.survivalPercents.map((bb => bb.p50))) && void 0 !== Sb ? Sb : []
```

#### 1156. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14660-L14662` → after: `L14660-L14662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14660-L14662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14660-L14662) · [Before (L14660-L14662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14660-L14662)

```diff
-             averageSessionMinutes: null === rq ? null : {
-               now: rq / 6e4,
-               typical: null === dq ? null : dq.sessionMs.p50 / 6e4
+             averageSessionMinutes: null === jb ? null : {
+               now: jb / 6e4,
+               typical: null === ob ? null : ob.sessionMs.p50 / 6e4
```

#### 1157. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14664-L14667` → after: `L14664-L14667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14664-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14664-L14667) · [Before (L14664-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14664-L14667)

```diff
-             sessionsPerPlayer: null === vq || null === aq ? null : {
-               now: vq,
-               typical: null !== (Bq = null === dq || void 0 === dq ? void 0 : dq.sessionsPerPlayer.p50) && void 0 !== Bq ? Bq : null,
-               days: aq.sessionsPerPlayerWindowDays
+             sessionsPerPlayer: null === nb || null === Xb ? null : {
+               now: nb,
+               typical: null !== (Hb = null === ob || void 0 === ob ? void 0 : ob.sessionsPerPlayer.p50) && void 0 !== Hb ? Hb : null,
+               days: Xb.sessionsPerPlayerWindowDays
```

#### 1158. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14669-L14671` → after: `L14669-L14671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14669-L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14669-L14671) · [Before (L14669-L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14669-L14671)

```diff
-             playsPerDay: null === hq ? null : {
-               now: hq,
-               typical: "playsFalling" === (null === oq || void 0 === oq ? void 0 : oq.kind) ? oq.previous : null !== (Wq = null === dq || void 0 === dq ? void 0 : dq.dailyPlays.p50) && void 0 !== Wq ? Wq : null
+             playsPerDay: null === Db ? null : {
+               now: Db,
+               typical: "playsFalling" === (null === Kb || void 0 === Kb ? void 0 : Kb.kind) ? Kb.previous : null !== (wb = null === ob || void 0 === ob ? void 0 : ob.dailyPlays.p50) && void 0 !== wb ? wb : null
```

#### 1159. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14674-L14675` → after: `L14674-L14675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14674-L14675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14674-L14675) · [Before (L14674-L14675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14674-L14675)

```diff
-               plays: tq.flatMap((qq => null === qq.plays ? [] : [qq.plays])),
-               sessionMinutes: tq.flatMap((qq => null === qq.avgSessionMs ? [] : [qq.avgSessionMs / 6e4]))
+               plays: rb.flatMap((bb => null === bb.plays ? [] : [bb.plays])),
+               sessionMinutes: rb.flatMap((bb => null === bb.avgSessionMs ? [] : [bb.avgSessionMs / 6e4]))
```

#### 1160. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14677-L14683` → after: `L14677-L14683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14677-L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14677-L14683) · [Before (L14677-L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14677-L14683)

```diff
-             flowSteps: Pq,
-             progressSteps: Qq,
-             problem: yq,
-             deaths: tV(qq),
-             heatmapEvents: qq.heatmaps.map((qq => ({
-               gameCategory: qq.gameCategoryId,
-               eventTypes: [...new Set(qq.events.map((qq => qq.eventType)))]
+             flowSteps: Wb,
+             progressSteps: Cb,
+             problem: db,
+             deaths: jp(bb),
+             heatmapEvents: bb.heatmaps.map((bb => ({
+               gameCategory: bb.gameCategoryId,
+               eventTypes: [...new Set(bb.events.map((bb => bb.eventType)))]
```

#### 1161. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14685-L14686` → after: `L14685-L14686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14685-L14686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14685-L14686) · [Before (L14685-L14686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14685-L14686)

```diff
-             places: po(qq),
-             loggedValues: am(qq)
+             places: sK(bb),
+             loggedValues: XU(bb)
```

#### 1162. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14690-L14693` → after: `L14690-L14693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14690-L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14690-L14693) · [Before (L14690-L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14690-L14693)

```diff
-         function RP(qq) {
-           return [...qq.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((qq => {
-             const Eq = OY(qq[1]);
-             return null === Eq ? [] : [Eq.key]
+         function qW(bb) {
+           return [...bb.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((bb => {
+             const ub = GB(bb[1]);
+             return null === ub ? [] : [ub.key]
```

#### 1163. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14697-L14699` → after: `L14697-L14699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14697-L14699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14697-L14699) · [Before (L14697-L14699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14697-L14699)

```diff
-         function UP(qq) {
-           const Eq = qq => qq.flatMap((qq => [qq.text, ...Eq(qq.children)]));
-           return qq.blocks.flatMap((qq => "paragraph" === qq.kind ? [qq.text] : "list" === qq.kind ? Eq(qq.items) : []))
+         function EW(bb) {
+           const ub = bb => bb.flatMap((bb => [bb.text, ...ub(bb.children)]));
+           return bb.blocks.flatMap((bb => "paragraph" === bb.kind ? [bb.text] : "list" === bb.kind ? ub(bb.items) : []))
```

#### 1164. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14702-L14704` → after: `L14702-L14704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14702-L14704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14702-L14704) · [Before (L14702-L14704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14702-L14704)

```diff
-         function FP(qq, Eq) {
-           const gq = (0, Bm.l)(Eq.toLowerCase());
-           return (0, Wm.d)(qq.toLowerCase(), new RegExp(`${gq}(?![\\w])`), (0, Wm.i)("\\w")).length > 0
+         function yW(bb, ub) {
+           const hb = (0, HU.i)(ub.toLowerCase());
+           return (0, wU.f)(bb.toLowerCase(), new RegExp(`${hb}(?![\\w])`), (0, wU.j)("\\w")).length > 0
```

#### 1165. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14707-L14711` → after: `L14707-L14711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14707-L14711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14707-L14711) · [Before (L14707-L14711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14707-L14711)

```diff
-         function sP(qq, Eq, gq) {
-           var Yq;
-           const lq = qq.filter((qq => FP(Eq, qq.from) && FP(Eq, qq.to))).sort(((qq, Eq) => Eq.fromPlayers - qq.fromPlayers)),
-             Oq = null === gq || "flowStep" !== gq.kind && "progressStep" !== gq.kind ? void 0 : qq.find((qq => qq.from === gq.from && qq.to === gq.to));
-           return void 0 === Oq || 0 !== lq.length && !lq.includes(Oq) ? null !== (Yq = lq[0]) && void 0 !== Yq ? Yq : null : Oq
+         function VW(bb, ub, hb) {
+           var Bb;
+           const Ob = bb.filter((bb => yW(ub, bb.from) && yW(ub, bb.to))).sort(((bb, ub) => ub.fromPlayers - bb.fromPlayers)),
+             Gb = null === hb || "flowStep" !== hb.kind && "progressStep" !== hb.kind ? void 0 : bb.find((bb => bb.from === hb.from && bb.to === hb.to));
+           return void 0 === Gb || 0 !== Ob.length && !Ob.includes(Gb) ? null !== (Bb = Ob[0]) && void 0 !== Bb ? Bb : null : Gb
```

#### 1166. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14714-L14715` → after: `L14714-L14715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14714-L14715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14714-L14715) · [Before (L14714-L14715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14714-L14715)

```diff
-         function XP(qq) {
-           return qq < 100 ? Math.max(10, 10 * Math.round(qq / 10)) : Number(qq.toPrecision(2))
+         function FW(bb) {
+           return bb < 100 ? Math.max(10, 10 * Math.round(bb / 10)) : Number(bb.toPrecision(2))
```

#### 1167. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14718-L14719` → after: `L14718-L14719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14718-L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14718-L14719) · [Before (L14718-L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14718-L14719)

```diff
-         function wP(qq) {
-           return qq < 1e3 ? Math.round(qq) : Number(qq.toPrecision(2))
+         function fW(bb) {
+           return bb < 1e3 ? Math.round(bb) : Number(bb.toPrecision(2))
```

#### 1168. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14722-L14724` → after: `L14722-L14724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14722-L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14722-L14724) · [Before (L14722-L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14722-L14724)

```diff
-         function KP(qq, Eq) {
-           const gq = Math.max(fP, null === Eq ? 0 : (Eq - qq) * MP);
-           return Math.min(99, Math.round(qq + gq))
+         function kW(bb, ub) {
+           const hb = Math.max(vW, null === ub ? 0 : (ub - bb) * tW);
+           return Math.min(99, Math.round(bb + hb))
```

#### 1169. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14727-L14728` → after: `L14727-L14728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14727-L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14727-L14728) · [Before (L14727-L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14727-L14728)

```diff
-         function CP(qq, Eq, gq) {
-           return qq + Math.max(qq * TP, null === Eq ? 0 : (Eq - qq) * MP, gq)
+         function TW(bb, ub, hb) {
+           return bb + Math.max(bb * JW, null === ub ? 0 : (ub - bb) * tW, hb)
```

#### 1170. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14730` → after: `L14730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14730) · [Before (L14730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14730)

```diff
-         const IP = {
+         const cW = {
```

#### 1171. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14740` → after: `L14740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14740) · [Before (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14740)

```diff
-         }, eP = `(\\d{1,2}|${Object.keys(IP).join("|")})`, DP = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${eP}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${eP}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
+         }, QW = `(\\d{1,2}|${Object.keys(cW).join("|")})`, RW = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${QW}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${QW}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
```

#### 1172. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14742-L14744` → after: `L14742-L14744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14742-L14744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14742-L14744) · [Before (L14742-L14744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14742-L14744)

```diff
-         function YQ(qq) {
-           var Eq;
-           return null !== (Eq = IP[qq.toLowerCase()]) && void 0 !== Eq ? Eq : Number(qq)
+         function BC(bb) {
+           var ub;
+           return null !== (ub = cW[bb.toLowerCase()]) && void 0 !== ub ? ub : Number(bb)
```

#### 1173. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14747-L14748` → after: `L14747-L14748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14747-L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14747-L14748) · [Before (L14747-L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14747-L14748)

```diff
-         function lQ(qq, Eq) {
-           return null === Eq || Eq * qq < iP ? null : {
+         function OC(bb, ub) {
+           return null === ub || ub * bb < gW ? null : {
```

#### 1174. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14750-L14751` → after: `L14750-L14751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14750-L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14750-L14751) · [Before (L14750-L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14750-L14751)

```diff
-             days: qq,
-             count: XP(Eq * qq),
+             days: bb,
+             count: FW(ub * bb),
```

#### 1175. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14756-L14759` → after: `L14756-L14759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14756-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14756-L14759) · [Before (L14756-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14756-L14759)

```diff
-         function OQ(qq) {
-           if (qq.length < LP) return null;
-           const Eq = qq.slice(1).reduce(((Eq, gq, Yq) => Eq + (gq - qq[Yq]) ** 2), 0) / (2 * (qq.length - 1)),
-             gq = qq.slice(-SP);
+         function GC(bb) {
+           if (bb.length < mW) return null;
+           const ub = bb.slice(1).reduce(((ub, hb, Bb) => ub + (hb - bb[Bb]) ** 2), 0) / (2 * (bb.length - 1)),
+             hb = bb.slice(-NW);
```

#### 1176. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14761-L14763` → after: `L14761-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14761-L14763) · [Before (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14761-L14763)

```diff
-             low: Math.min(...gq),
-             high: Math.max(...gq),
-             averageMargin: JP * Math.sqrt(Eq / SP)
+             low: Math.min(...hb),
+             high: Math.max(...hb),
+             averageMargin: IW * Math.sqrt(ub / NW)
```

#### 1177. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14767-L14768` → after: `L14767-L14768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14767-L14768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14767-L14768) · [Before (L14767-L14768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14767-L14768)

```diff
-         function mQ(qq, Eq) {
-           return null === qq || qq <= 0 || qq * SP < iP ? null : null !== Eq ? {
+         function UC(bb, ub) {
+           return null === bb || bb <= 0 || bb * NW < gW ? null : null !== ub ? {
```

#### 1178. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14770` → after: `L14770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14770) · [Before (L14770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14770)

```diff
-             days: SP,
+             days: NW,
```

#### 1179. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14772-L14773` → after: `L14772-L14773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14772-L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14772-L14773) · [Before (L14772-L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14772-L14773)

```diff
-               low: Eq.low,
-               high: Eq.high
+               low: ub.low,
+               high: ub.high
```

#### 1180. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14777` → after: `L14777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14777) · [Before (L14777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14777)

```diff
-             days: Math.min(SP, Math.max(zP, Math.ceil(iP / qq))),
+             days: Math.min(NW, Math.max(eW, Math.ceil(gW / bb))),
```

#### 1181. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14782-L14792` → after: `L14782-L14792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14782-L14792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14782-L14792) · [Before (L14782-L14792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14782-L14792)

```diff
-         function xQ(qq, Eq) {
-           var gq, Yq;
-           const lq = (null !== qq && void 0 !== qq ? qq : "").split("\n").filter((qq => "" !== qq.trim())),
-             Oq = 1 === lq.length ? Cc(lq[0]) : null;
-           if (null === Oq || null === Eq) return null;
-           let mq = Oq.path,
-             xq = null !== (gq = Eq.get(mq)) && void 0 !== gq ? gq : null;
-           if (null === xq && !mq.includes(".")) {
-             const qq = [...Eq].filter((qq => {
-               let [Eq] = qq;
-               return Eq.endsWith(`.${Oq.path}`)
+         function LC(bb, ub) {
+           var hb, Bb;
+           const Ob = (null !== bb && void 0 !== bb ? bb : "").split("\n").filter((bb => "" !== bb.trim())),
+             Gb = 1 === Ob.length ? kS(Ob[0]) : null;
+           if (null === Gb || null === ub) return null;
+           let Ub = Gb.path,
+             Lb = null !== (hb = ub.get(Ub)) && void 0 !== hb ? hb : null;
+           if (null === Lb && !Ub.includes(".")) {
+             const bb = [...ub].filter((bb => {
+               let [ub] = bb;
+               return ub.endsWith(`.${Gb.path}`)
```

#### 1182. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14794` → after: `L14794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14794) · [Before (L14794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14794)

```diff
-             mq = 1 === qq.length ? qq[0][0] : mq, xq = 1 === qq.length ? qq[0][1] : null
+             Ub = 1 === bb.length ? bb[0][0] : Ub, Lb = 1 === bb.length ? bb[0][1] : null
```

#### 1183. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14796-L14799` → after: `L14796-L14799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14796-L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14796-L14799) · [Before (L14796-L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14796-L14799)

```diff
-           const Aq = null === xq ? null : null === (Yq = Cc(xq)) || void 0 === Yq ? void 0 : Yq.value,
-             cq = qq => qq.replace(/\s+/g, "");
-           if (null === xq || void 0 === Aq || null === Aq || cq(Aq) === cq(Oq.value)) return null;
-           const uq = mq.lastIndexOf(".");
+           const Yb = null === Lb ? null : null === (Bb = kS(Lb)) || void 0 === Bb ? void 0 : Bb.value,
+             Sb = bb => bb.replace(/\s+/g, "");
+           if (null === Lb || void 0 === Yb || null === Yb || Sb(Yb) === Sb(Gb.value)) return null;
+           const ab = Ub.lastIndexOf(".");
```

#### 1184. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14801-L14802` → after: `L14801-L14802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14801-L14802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14801-L14802) · [Before (L14801-L14802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14801-L14802)

```diff
-             line: xq,
-             inside: -1 === uq ? null : mq.slice(0, uq)
+             line: Lb,
+             inside: -1 === ab ? null : Ub.slice(0, ab)
```

#### 1185. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14806-L14811` → after: `L14806-L14811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14806-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14806-L14811) · [Before (L14806-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14806-L14811)

```diff
-         function AQ(qq) {
-           var Eq, gq;
-           const Yq = null === qq ? null : null !== (Eq = null !== (gq = (0, Wm.d)(qq, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, Wm.i)("\\w.,"))[0]) && void 0 !== gq ? gq : (0, Wm.d)(qq, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
-           return null === Yq ? null : {
-             now: Number(Yq[1].replace(/,/g, "")),
-             target: Number(Yq[2].replace(/,/g, ""))
+         function YC(bb) {
+           var ub, hb;
+           const Bb = null === bb ? null : null !== (ub = null !== (hb = (0, wU.f)(bb, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, wU.j)("\\w.,"))[0]) && void 0 !== hb ? hb : (0, wU.f)(bb, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
+           return null === Bb ? null : {
+             now: Number(Bb[1].replace(/,/g, "")),
+             target: Number(Bb[2].replace(/,/g, ""))
```

#### 1186. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14815-L14816` → after: `L14815-L14816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14815-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14815-L14816) · [Before (L14815-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14815-L14816)

```diff
-         function cQ(qq) {
-           return "playersStillPlaying" === qq ? "sessionDropoff" : qq
+         function SC(bb) {
+           return "playersStillPlaying" === bb ? "sessionDropoff" : bb
```

#### 1187. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14819-L14821` → after: `L14819-L14821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14819-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14819-L14821) · [Before (L14819-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14819-L14821)

```diff
-         function uQ(qq, Eq, gq, Yq) {
-           let lq = null;
-           if (null !== Eq) lq = cQ(Eq.statKey) === cQ(gq) ? AQ(Eq.change) : null;
+         function aC(bb, ub, hb, Bb) {
+           let Ob = null;
+           if (null !== ub) Ob = SC(ub.statKey) === SC(hb) ? YC(ub.change) : null;
```

#### 1188. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14823-L14843` → after: `L14823-L14843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14823-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14823-L14843) · [Before (L14823-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14823-L14843)

```diff
-             var Oq;
-             const Eq = UP(qq).find((qq => /\b(check|target|aim)\b/i.test(qq) && null !== AQ(qq)));
-             lq = null !== (Oq = AQ(qq.target)) && void 0 !== Oq ? Oq : AQ(null !== Eq && void 0 !== Eq ? Eq : null)
-           }
-           return null === lq || ! function(qq, Eq) {
-             return Math.abs(qq - Eq) <= (Eq >= 10 ? Math.max(.5, .01 * Eq) : .05) + 1e-9
-           }(lq.now, Yq) || lq.target <= Yq ? null : lq.target
-         }
- 
-         function BQ(qq, Eq, gq, Yq) {
-           var lq, Oq, mq;
-           const xq = function(qq, Eq) {
-             const gq = null === qq.target ? void 0 : RP(qq.target)[0];
-             if (void 0 !== gq) return gq;
-             if (null !== Eq) return Eq.statKey;
-             const Yq = UP(qq).find((qq => /\b(check|target|aim)\b/i.test(qq) && RP(qq).length > 0));
- ... (5 more removed lines; see GitHub link above)
+             var Gb;
+             const ub = EW(bb).find((bb => /\b(check|target|aim)\b/i.test(bb) && null !== YC(bb)));
+             Ob = null !== (Gb = YC(bb.target)) && void 0 !== Gb ? Gb : YC(null !== ub && void 0 !== ub ? ub : null)
+           }
+           return null === Ob || ! function(bb, ub) {
+             return Math.abs(bb - ub) <= (ub >= 10 ? Math.max(.5, .01 * ub) : .05) + 1e-9
+           }(Ob.now, Bb) || Ob.target <= Bb ? null : Ob.target
+         }
+ 
+         function HC(bb, ub, hb, Bb) {
+           var Ob, Gb, Ub;
+           const Lb = function(bb, ub) {
+             const hb = null === bb.target ? void 0 : qW(bb.target)[0];
+             if (void 0 !== hb) return hb;
+             if (null !== ub) return ub.statKey;
+             const Bb = EW(bb).find((bb => /\b(check|target|aim)\b/i.test(bb) && qW(bb).length > 0));
+ ... (5 more added lines; see GitHub link above)
```

#### 1189. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14846-L14865` → after: `L14846-L14865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14846-L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14846-L14865) · [Before (L14846-L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14846-L14865)

```diff
-                 var lq, Oq, mq;
-                 const qq = Yq.sessions;
-                 if (null === qq) return null;
-                 const gq = function(qq) {
-                     var Eq;
-                     if (null === qq) return null;
-                     if (/\bfirst minute\b/i.test(qq)) return 1;
-                     const gq = qq.replace(/\[\[[^\]]*\]\]/g, ""),
-                       Yq = null !== (Eq = (0, Wm.d)(gq, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, Wm.i)("\\w."))[0]) && void 0 !== Eq ? Eq : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(gq);
-                     return null === Yq ? null : Number(Yq[1])
-                   }(Eq.target),
-                   xq = null === gq ? function(qq, Eq) {
-                     var gq;
-                     if (null === qq) return null;
-                     const Yq = qq => qq >= 1 && void 0 !== Eq[qq],
-                       lq = EQ.exec(qq);
- ... (4 more removed lines; see GitHub link above)
+                 var Ob, Gb, Ub;
+                 const bb = Bb.sessions;
+                 if (null === bb) return null;
+                 const hb = function(bb) {
+                     var ub;
+                     if (null === bb) return null;
+                     if (/\bfirst minute\b/i.test(bb)) return 1;
+                     const hb = bb.replace(/\[\[[^\]]*\]\]/g, ""),
+                       Bb = null !== (ub = (0, wU.f)(hb, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, wU.j)("\\w."))[0]) && void 0 !== ub ? ub : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(hb);
+                     return null === Bb ? null : Number(Bb[1])
+                   }(ub.target),
+                   Lb = null === hb ? function(bb, ub) {
+                     var hb;
+                     if (null === bb) return null;
+                     const Bb = bb => bb >= 1 && void 0 !== ub[bb],
+                       Ob = uC.exec(bb);
+ ... (4 more added lines; see GitHub link above)
```

#### 1190. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14869-L14876` → after: `L14869-L14876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14869-L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14869-L14876) · [Before (L14869-L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14869-L14876)

```diff
-                     for (const xq of DP) {
-                       const Eq = xq.exec(qq);
-                       if (null !== Eq) {
-                         const qq = YQ(Eq[1]),
-                           gq = gQ.find((Eq => Eq > qq && Yq(Eq)));
-                         return void 0 === gq ? null : {
-                           minutes: gq,
-                           after: qq
+                     for (const Lb of RW) {
+                       const ub = Lb.exec(bb);
+                       if (null !== ub) {
+                         const bb = BC(ub[1]),
+                           hb = hC.find((ub => ub > bb && Bb(ub)));
+                         return void 0 === hb ? null : {
+                           minutes: hb,
+                           after: bb
```

#### 1191. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14880-L14883` → after: `L14880-L14883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14880-L14883) · [Before (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14880-L14883)

```diff
-                     const Oq = qQ.exec(qq),
-                       mq = null === Oq ? null : YQ(null !== (gq = Oq[1]) && void 0 !== gq ? gq : Oq[2]);
-                     return null !== mq && Yq(mq) ? {
-                       minutes: mq,
+                     const Gb = bC.exec(bb),
+                       Ub = null === Gb ? null : BC(null !== (hb = Gb[1]) && void 0 !== hb ? hb : Gb[2]);
+                     return null !== Ub && Bb(Ub) ? {
+                       minutes: Ub,
```

#### 1192. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14886-L14891` → after: `L14886-L14891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14886-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14886-L14891) · [Before (L14886-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14886-L14891)

```diff
-                   }(Eq.title, qq.percents) : null,
-                   Aq = null !== (lq = null !== gq && void 0 !== gq ? gq : null === xq || void 0 === xq ? void 0 : xq.minutes) && void 0 !== lq ? lq : "dropoff" === (null === (Oq = Yq.problem) || void 0 === Oq ? void 0 : Oq.kind) ? Yq.problem.minute : SE,
-                   cq = qq.percents[Aq],
-                   uq = lQ(qq.days, Yq.dailyPlays);
-                 return void 0 === cq || Aq < 1 || null === uq ? null : {
-                   measure: null === xq || null === xq.after ? {
+                   }(ub.title, bb.percents) : null,
+                   Yb = null !== (Ob = null !== hb && void 0 !== hb ? hb : null === Lb || void 0 === Lb ? void 0 : Lb.minutes) && void 0 !== Ob ? Ob : "dropoff" === (null === (Gb = Bb.problem) || void 0 === Gb ? void 0 : Gb.kind) ? Bb.problem.minute : Nu,
+                   Sb = bb.percents[Yb],
+                   ab = OC(bb.days, Bb.dailyPlays);
+                 return void 0 === Sb || Yb < 1 || null === ab ? null : {
+                   measure: null === Lb || null === Lb.after ? {
```

#### 1193. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14893` → after: `L14893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14893) · [Before (L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14893)

```diff
-                     minutes: Aq
+                     minutes: Yb
```

#### 1194. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14896-L14897` → after: `L14896-L14897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14896-L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14896-L14897) · [Before (L14896-L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14896-L14897)

```diff
-                     minutes: Aq,
-                     after: xq.after
+                     minutes: Yb,
+                     after: Lb.after
```

#### 1195. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14899-L14901` → after: `L14899-L14901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14899-L14901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14899-L14901) · [Before (L14899-L14901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14899-L14901)

```diff
-                   now: Math.round(cq),
-                   helped: KP(cq, null !== (mq = qq.typicalPercents[Aq]) && void 0 !== mq ? mq : null),
-                   wait: uq
+                   now: Math.round(Sb),
+                   helped: kW(Sb, null !== (Ub = bb.typicalPercents[Yb]) && void 0 !== Ub ? Ub : null),
+                   wait: ab
```

#### 1196. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14905-L14910` → after: `L14905-L14910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14905-L14910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14905-L14910) · [Before (L14905-L14910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14905-L14910)

```diff
-                 const qq = sP(Yq.flowSteps, gq, Yq.problem);
-                 if (null === qq || qq.fromPlayers < ZP) return null;
-                 const Eq = function(qq, Eq, gq) {
-                     const Yq = Math.max(Eq.fromPlayers, ...qq.filter((qq => qq.group === Eq.group)).map((qq => qq.fromPlayers)));
-                     return null === gq || gq <= 0 || Yq <= gq ? {
-                       players: Eq.fromPlayers,
+                 const bb = VW(Bb.flowSteps, hb, Bb.problem);
+                 if (null === bb || bb.fromPlayers < iW) return null;
+                 const ub = function(bb, ub, hb) {
+                     const Bb = Math.max(ub.fromPlayers, ...bb.filter((bb => bb.group === ub.group)).map((bb => bb.fromPlayers)));
+                     return null === hb || hb <= 0 || Bb <= hb ? {
+                       players: ub.fromPlayers,
```

#### 1197. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14913` → after: `L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14913) · [Before (L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14913)

```diff
-                       players: Eq.fromPlayers * gq / Yq,
+                       players: ub.fromPlayers * hb / Bb,
```

#### 1198. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14916-L14918` → after: `L14916-L14918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14916-L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14916-L14918) · [Before (L14916-L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14916-L14918)

```diff
-                   }(Yq.flowSteps, qq, Yq.weeklyPlayers),
-                   lq = Eq.isScaled && Eq.players < 100 ? Math.round(Eq.players) : XP(Eq.players),
-                   Oq = {
+                   }(Bb.flowSteps, bb, Bb.weeklyPlayers),
+                   Ob = ub.isScaled && ub.players < 100 ? Math.round(ub.players) : FW(ub.players),
+                   Gb = {
```

#### 1199. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14920-L14921` → after: `L14920-L14921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14920-L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14920-L14921) · [Before (L14920-L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14920-L14921)

```diff
-                     days: pP,
-                     count: lq,
+                     days: sW,
+                     count: Ob,
```

#### 1200. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14927-L14929` → after: `L14927-L14929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14927-L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14927-L14929) · [Before (L14927-L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14927-L14929)

```diff
-                     from: qq.from,
-                     to: qq.to,
-                     isOrLater: qq.isOrLater
+                     from: bb.from,
+                     to: bb.to,
+                     isOrLater: bb.isOrLater
```

#### 1201. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14931-L14933` → after: `L14931-L14933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14931-L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14931-L14933) · [Before (L14931-L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14931-L14933)

```diff
-                   now: Math.round(qq.share),
-                   helped: KP(qq.share, NQ(Yq.flowSteps, qq)),
-                   wait: Oq
+                   now: Math.round(bb.share),
+                   helped: kW(bb.share, ZC(Bb.flowSteps, bb)),
+                   wait: Gb
```

#### 1202. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14937-L14941` → after: `L14937-L14941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14937-L14941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14937-L14941) · [Before (L14937-L14941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14937-L14941)

```diff
-                 const qq = sP(Yq.progressSteps, gq, Yq.problem);
-                 if (null === qq || qq.fromPlayers < ZP) return null;
-                 const Eq = KP(qq.share, NQ(Yq.progressSteps, qq)),
-                   lq = null !== Yq.weeklyPlayers ? 2 * Yq.weeklyPlayers / pP : null === Yq.dailyPlays ? 1 / 0 : 2 * Yq.dailyPlays,
-                   Oq = XP(Math.max(iP, Math.min(.1 * qq.fromPlayers, lq)));
+                 const bb = VW(Bb.progressSteps, hb, Bb.problem);
+                 if (null === bb || bb.fromPlayers < iW) return null;
+                 const ub = kW(bb.share, ZC(Bb.progressSteps, bb)),
+                   Ob = null !== Bb.weeklyPlayers ? 2 * Bb.weeklyPlayers / sW : null === Bb.dailyPlays ? 1 / 0 : 2 * Bb.dailyPlays,
+                   Gb = FW(Math.max(gW, Math.min(.1 * bb.fromPlayers, Ob)));
```

#### 1203. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14945-L14948` → after: `L14945-L14948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14945-L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14945-L14948) · [Before (L14945-L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14945-L14948)

```diff
-                     from: qq.from,
-                     to: qq.to,
-                     fromPlayers: qq.fromPlayers,
-                     toPlayers: qq.toPlayers
+                     from: bb.from,
+                     to: bb.to,
+                     fromPlayers: bb.fromPlayers,
+                     toPlayers: bb.toPlayers
```

#### 1204. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14950-L14952` → after: `L14950-L14952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14950-L14952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14950-L14952) · [Before (L14950-L14952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14950-L14952)

```diff
-                   selection: qq.selection,
-                   now: Math.round(qq.share),
-                   helped: Eq,
+                   selection: bb.selection,
+                   now: Math.round(bb.share),
+                   helped: ub,
```

#### 1205. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14955-L14959` → after: `L14955-L14959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14955-L14959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14955-L14959) · [Before (L14955-L14959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14955-L14959)

```diff
-                     at: qq.from,
-                     players: qq.fromPlayers + Oq,
-                     more: Oq,
-                     helpedAt: qq.to,
-                     helpedPlayers: WQ(qq.toPlayers, Eq, Oq)
+                     at: bb.from,
+                     players: bb.fromPlayers + Gb,
+                     more: Gb,
+                     helpedAt: bb.to,
+                     helpedPlayers: wC(bb.toPlayers, ub, Gb)
```

#### 1206. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14964-L14969` → after: `L14964-L14969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14964-L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14964-L14969) · [Before (L14964-L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14964-L14969)

```diff
-                 var xq;
-                 const qq = Yq.playsPerDay,
-                   Eq = OQ(Yq.dailySeries.plays),
-                   gq = mQ(Yq.dailyPlays, Eq);
-                 if (null === qq || null === gq) return null;
-                 const lq = Math.max(CP(qq.now, qq.typical, 1), qq.now + (null !== (xq = null === Eq || void 0 === Eq ? void 0 : Eq.averageMargin) && void 0 !== xq ? xq : 0));
+                 var Lb;
+                 const bb = Bb.playsPerDay,
+                   ub = GC(Bb.dailySeries.plays),
+                   hb = UC(Bb.dailyPlays, ub);
+                 if (null === bb || null === hb) return null;
+                 const Ob = Math.max(TW(bb.now, bb.typical, 1), bb.now + (null !== (Lb = null === ub || void 0 === ub ? void 0 : ub.averageMargin) && void 0 !== Lb ? Lb : 0));
```

#### 1207. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14974-L14977` → after: `L14974-L14977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14974-L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14974-L14977) · [Before (L14974-L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14974-L14977)

```diff
-                   now: Math.round(qq.now),
-                   helped: lq < 1e3 ? Math.round(lq) : Number(lq.toPrecision(3)),
-                   wait: "days" === gq.kind && null !== gq.swing ? {
-                     ...gq,
+                   now: Math.round(bb.now),
+                   helped: Ob < 1e3 ? Math.round(Ob) : Number(Ob.toPrecision(3)),
+                   wait: "days" === hb.kind && null !== hb.swing ? {
+                     ...hb,
```

#### 1208. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14979-L14980` → after: `L14979-L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14979-L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14979-L14980) · [Before (L14979-L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14979-L14980)

```diff
-                       low: wP(gq.swing.low),
-                       high: wP(gq.swing.high)
+                       low: fW(hb.swing.low),
+                       high: fW(hb.swing.high)
```

#### 1209. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14982` → after: `L14982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14982) · [Before (L14982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14982)

```diff
-                   } : gq
+                   } : hb
```

#### 1210. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14986-L14991` → after: `L14986-L14991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14986-L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14986-L14991) · [Before (L14986-L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14986-L14991)

```diff
-                 var Aq;
-                 const qq = Yq.averageSessionMinutes,
-                   Eq = OQ(Yq.dailySeries.sessionMinutes),
-                   gq = mQ(Yq.dailyPlays, Eq);
-                 if (null === qq || null === gq) return null;
-                 const lq = qq => Math.round(10 * qq) / 10;
+                 var Yb;
+                 const bb = Bb.averageSessionMinutes,
+                   ub = GC(Bb.dailySeries.sessionMinutes),
+                   hb = UC(Bb.dailyPlays, ub);
+                 if (null === bb || null === hb) return null;
+                 const Ob = bb => Math.round(10 * bb) / 10;
```

#### 1211. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14996-L14999` → after: `L14996-L14999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14996-L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L14996-L14999) · [Before (L14996-L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L14996-L14999)

```diff
-                   now: lq(qq.now),
-                   helped: lq(Math.max(CP(qq.now, qq.typical, .1), qq.now + (null !== (Aq = null === Eq || void 0 === Eq ? void 0 : Eq.averageMargin) && void 0 !== Aq ? Aq : 0))),
-                   wait: "days" === gq.kind && null !== gq.swing ? {
-                     ...gq,
+                   now: Ob(bb.now),
+                   helped: Ob(Math.max(TW(bb.now, bb.typical, .1), bb.now + (null !== (Yb = null === ub || void 0 === ub ? void 0 : ub.averageMargin) && void 0 !== Yb ? Yb : 0))),
+                   wait: "days" === hb.kind && null !== hb.swing ? {
+                     ...hb,
```

#### 1212. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15001-L15002` → after: `L15001-L15002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15001-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15001-L15002) · [Before (L15001-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15001-L15002)

```diff
-                       low: lq(gq.swing.low),
-                       high: lq(gq.swing.high)
+                       low: Ob(hb.swing.low),
+                       high: Ob(hb.swing.high)
```

#### 1213. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15004` → after: `L15004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15004) · [Before (L15004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15004)

```diff
-                   } : gq
+                   } : hb
```

#### 1214. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15008-L15011` → after: `L15008-L15011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15008-L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15008-L15011) · [Before (L15008-L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15008-L15011)

```diff
-                 const qq = Yq.sessionsPerPlayer,
-                   Eq = null === qq ? null : lQ(qq.days, Yq.dailyPlays);
-                 if (null === qq || null === Eq) return null;
-                 const gq = qq => Math.round(100 * qq) / 100;
+                 const bb = Bb.sessionsPerPlayer,
+                   ub = null === bb ? null : OC(bb.days, Bb.dailyPlays);
+                 if (null === bb || null === ub) return null;
+                 const hb = bb => Math.round(100 * bb) / 100;
```

#### 1215. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15015` → after: `L15015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15015) · [Before (L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15015)

```diff
-                     days: qq.days
+                     days: bb.days
```

#### 1216. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15017-L15019` → after: `L15017-L15019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15017-L15019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15017-L15019) · [Before (L15017-L15019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15017-L15019)

```diff
-                   now: gq(qq.now),
-                   helped: gq(qq.now + Math.max(.05, null === qq.typical ? 0 : (qq.typical - qq.now) * MP)),
-                   wait: Eq
+                   now: hb(bb.now),
+                   helped: hb(bb.now + Math.max(.05, null === bb.typical ? 0 : (bb.typical - bb.now) * tW)),
+                   wait: ub
```

#### 1217. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15025-L15029` → after: `L15025-L15029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15025-L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15025-L15029) · [Before (L15025-L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15025-L15029)

```diff
-           }(xq, qq, [null !== (lq = qq.title) && void 0 !== lq ? lq : "", ...UP(qq), null !== (Oq = qq.target) && void 0 !== Oq ? Oq : ""].join("\n"), Eq);
-           if (null === Aq) return null;
-           const cq = uQ(qq, gq, xq, Aq.now);
-           let uq = null === cq ? Aq.helped : Math.min(Aq.helped, cq);
-           if (null !== cq && cq - uq < (uq - Aq.now) / 2 && (uq = cq), uq <= Aq.now) return null;
+           }(Lb, bb, [null !== (Ob = bb.title) && void 0 !== Ob ? Ob : "", ...EW(bb), null !== (Gb = bb.target) && void 0 !== Gb ? Gb : ""].join("\n"), ub);
+           if (null === Yb) return null;
+           const Sb = aC(bb, hb, Lb, Yb.now);
+           let ab = null === Sb ? Yb.helped : Math.min(Yb.helped, Sb);
+           if (null !== Sb && Sb - ab < (ab - Yb.now) / 2 && (ab = Sb), ab <= Yb.now) return null;
```

#### 1218. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15031-L15035` → after: `L15031-L15035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15031-L15035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15031-L15035) · [Before (L15031-L15035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15031-L15035)

```diff
-             measure: Bq
-           } = Aq, Wq = "players" === Aq.wait.kind && "progressStep" === Bq.kind ? {
-             ...Aq.wait,
-             helpedPlayers: WQ(Bq.toPlayers, uq, Aq.wait.more)
-           } : Aq.wait;
+             measure: Hb
+           } = Yb, wb = "players" === Yb.wait.kind && "progressStep" === Hb.kind ? {
+             ...Yb.wait,
+             helpedPlayers: wC(Hb.toPlayers, ab, Yb.wait.more)
+           } : Yb.wait;
```

#### 1219. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15037-L15043` → after: `L15037-L15043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15037-L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15037-L15043) · [Before (L15037-L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15037-L15043)

```diff
-             statKey: xq,
-             ...Aq,
-             selection: null !== (mq = Aq.selection) && void 0 !== mq ? mq : null,
-             helped: uq,
-             goal: cq,
-             wait: Wq,
-             undo: xQ(qq.code, Yq)
+             statKey: Lb,
+             ...Yb,
+             selection: null !== (Ub = Yb.selection) && void 0 !== Ub ? Ub : null,
+             helped: ab,
+             goal: Sb,
+             wait: wb,
+             undo: LC(bb.code, Bb)
```

#### 1220. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15047-L15048` → after: `L15047-L15048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15047-L15048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15047-L15048) · [Before (L15047-L15048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15047-L15048)

```diff
-         function WQ(qq, Eq, gq) {
-           return Math.round(qq + Eq / 100 * gq)
+         function wC(bb, ub, hb) {
+           return Math.round(bb + ub / 100 * hb)
```

#### 1221. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15051-L15057` → after: `L15051-L15057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15051-L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15051-L15057) · [Before (L15051-L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15051-L15057)

```diff
-         function NQ(qq, Eq) {
-           return function(qq) {
-             if (0 === qq.length) return null;
-             const Eq = [...qq].sort(((qq, Eq) => qq - Eq)),
-               gq = Math.floor(Eq.length / 2);
-             return Eq.length % 2 === 1 ? Eq[gq] : (Eq[gq - 1] + Eq[gq]) / 2
-           }(qq.filter((qq => qq !== Eq && qq.group === Eq.group && !qq.isBranch && qq.fromPlayers >= ZP)).map((qq => qq.share)))
+         function ZC(bb, ub) {
+           return function(bb) {
+             if (0 === bb.length) return null;
+             const ub = [...bb].sort(((bb, ub) => bb - ub)),
+               hb = Math.floor(ub.length / 2);
+             return ub.length % 2 === 1 ? ub[hb] : (ub[hb - 1] + ub[hb]) / 2
+           }(bb.filter((bb => bb !== ub && bb.group === ub.group && !bb.isBranch && bb.fromPlayers >= iW)).map((bb => bb.share)))
```

#### 1222. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15060-L15061` → after: `L15060-L15061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15060-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15060-L15061) · [Before (L15060-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15060-L15061)

```diff
-         function aQ(qq) {
-           return qq.toLocaleString("en-US", {
+         function XC(bb) {
+           return bb.toLocaleString("en-US", {
```

#### 1223. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15066-L15067` → after: `L15066-L15067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15066-L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15066-L15067) · [Before (L15066-L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15066-L15067)

```diff
-         function VQ(qq, Eq) {
-           return 1 === qq ? Eq("last 1 minute or more") : `${Eq("last")} ${qq} ${Eq("minutes or more")}`
+         function pC(bb, ub) {
+           return 1 === bb ? ub("last 1 minute or more") : `${ub("last")} ${bb} ${ub("minutes or more")}`
```

#### 1224. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15070` → after: `L15070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15070) · [Before (L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15070)

```diff
-         function dQ(qq) {
+         function oC(bb) {
```

#### 1225. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15072-L15073` → after: `L15072-L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15072-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15072-L15073) · [Before (L15072-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15072-L15073)

```diff
-             stat: qq.statKey,
-             selection: qq.selection
+             stat: bb.statKey,
+             selection: bb.selection
```

#### 1226. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15077` → after: `L15077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15077) · [Before (L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15077)

```diff
-         function jQ(qq, Eq) {
+         function AC(bb, ub) {
```

#### 1227. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15079-L15084` → after: `L15079-L15084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15079-L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15079-L15084) · [Before (L15079-L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15079-L15084)

```diff
-             measure: gq,
-             now: Yq,
-             wait: lq
-           } = qq, Oq = "players" === lq.kind || 7 === lq.days ? Eq("in a week") : `${Eq("in")} ${lq.days} ${Eq("days")}`;
-           let mq;
-           switch (gq.kind) {
+             measure: hb,
+             now: Bb,
+             wait: Ob
+           } = bb, Gb = "players" === Ob.kind || 7 === Ob.days ? ub("in a week") : `${ub("in")} ${Ob.days} ${ub("days")}`;
+           let Ub;
+           switch (hb.kind) {
```

#### 1228. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15086` → after: `L15086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15086) · [Before (L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15086)

```diff
-               mq = [`${Eq("if more than")} ${Yq} ${Eq("in 100")} ${Eq("sessions")} ${VQ(gq.minutes,Eq)}`];
+               Ub = [`${ub("if more than")} ${Bb} ${ub("in 100")} ${ub("sessions")} ${pC(hb.minutes,ub)}`];
```

#### 1229. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15089-L15093` → after: `L15089-L15093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15089-L15093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15089-L15093) · [Before (L15089-L15093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15089-L15093)

```diff
-               mq = [`${Eq("if more players at")} `, {
-                 code: gq.from
-               }, ` ${Eq("reach")} `, {
-                 code: gq.to
-               }, gq.isOrLater ? ` ${Eq("or a later one")}` : "", ` ${Eq("than now")} (${Yq} ${Eq("in 100")})`];
+               Ub = [`${ub("if more players at")} `, {
+                 code: hb.from
+               }, ` ${ub("reach")} `, {
+                 code: hb.to
+               }, hb.isOrLater ? ` ${ub("or a later one")}` : "", ` ${ub("than now")} (${Bb} ${ub("in 100")})`];
```

#### 1230. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15096` → after: `L15096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15096) · [Before (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15096)

```diff
-               mq = [`${Eq("if more players at")} ${gq.from} ${Eq("reach")} ${gq.to} ${Eq("than now")} (${Yq} ${Eq("in 100")})`];
+               Ub = [`${ub("if more players at")} ${hb.from} ${ub("reach")} ${hb.to} ${ub("than now")} (${Bb} ${ub("in 100")})`];
```

#### 1231. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15099` → after: `L15099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15099) · [Before (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15099)

```diff
-               mq = [Eq("if most days have more plays than now")];
+               Ub = [ub("if most days have more plays than now")];
```

#### 1232. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15102` → after: `L15102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15102) · [Before (L15102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15102)

```diff
-               mq = [`${Eq("if sessions last longer than now")} (${aQ(Yq)} ${Eq("minutes")})`];
+               Ub = [`${ub("if sessions last longer than now")} (${XC(Bb)} ${ub("minutes")})`];
```

#### 1233. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15105` → after: `L15105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15105) · [Before (L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15105)

```diff
-               mq = [Eq("if players come back more often than now")]
+               Ub = [ub("if players come back more often than now")]
```

#### 1234. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15107` → after: `L15107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15107) · [Before (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15107)

```diff
-           return [`${Eq("Check")} `, dQ(qq), ` ${Oq}: `, ...mq, `, ${Eq("it helped")}.`]
+           return [`${ub("Check")} `, oC(bb), ` ${Gb}: `, ...Ub, `, ${ub("it helped")}.`]
```

#### 1235. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15109` → after: `L15109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15109) · [Before (L15109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15109)

```diff
-         const HQ = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, oQ = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, PQ = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
+         const lC = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, KC = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, WC = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
```

#### 1236. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15111-L15112` → after: `L15111-L15112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15111-L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15111-L15112) · [Before (L15111-L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15111-L15112)

```diff
-         function QQ(qq) {
-           return HQ.test(qq) || oQ.test(qq) && !PQ.test(qq)
+         function CC(bb) {
+           return lC.test(bb) || KC.test(bb) && !WC.test(bb)
```

#### 1237. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15115-L15126` → after: `L15115-L15126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15115-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15115-L15126) · [Before (L15115-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15115-L15126)

```diff
-         function yQ(qq) {
-           let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           const gq = qq.steps.filter((qq => QQ(qq.text))),
-             Yq = new Set(Eq ? gq.slice(1) : gq);
-           if (0 === Yq.size) return qq;
-           const lq = qq => !Yq.has(qq),
-             Oq = qq.blocks.flatMap((qq => {
-               if ("list" !== qq.kind) return [qq];
-               const Eq = qq.items.filter(lq);
-               return 0 === Eq.length ? [] : [{
-                 ...qq,
-                 items: Eq
+         function dC(bb) {
+           let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           const hb = bb.steps.filter((bb => CC(bb.text))),
+             Bb = new Set(ub ? hb.slice(1) : hb);
+           if (0 === Bb.size) return bb;
+           const Ob = bb => !Bb.has(bb),
+             Gb = bb.blocks.flatMap((bb => {
+               if ("list" !== bb.kind) return [bb];
+               const ub = bb.items.filter(Ob);
+               return 0 === ub.length ? [] : [{
+                 ...bb,
+                 items: ub
```

#### 1238. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15130-L15132` → after: `L15130-L15132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15130-L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15130-L15132) · [Before (L15130-L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15130-L15132)

```diff
-             ...qq,
-             blocks: Oq,
-             steps: qq.steps.filter(lq)
+             ...bb,
+             blocks: Gb,
+             steps: bb.steps.filter(Ob)
```

#### 1239. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15135` → after: `L15135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15135) · [Before (L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15135)

```diff
-         const tQ = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, rQ = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, vQ = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, hQ = new Set(["Math", "Date", "JSON", "cons … [truncated]
+         const rC = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, jC = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, nC = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, DC = new Set(["Math", "Date", "JSON", "cons … [truncated]
```

#### 1240. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15137-L15140` → after: `L15137-L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15137-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15137-L15140) · [Before (L15137-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15137-L15140)

```diff
-         function bQ(qq, Eq) {
-           for (const [gq] of(null !== Eq && void 0 !== Eq ? Eq : "").matchAll(tQ)) {
-             qq.add(gq);
-             for (const Eq of gq.split(".")) qq.add(Eq)
+         function zC(bb, ub) {
+           for (const [hb] of(null !== ub && void 0 !== ub ? ub : "").matchAll(rC)) {
+             bb.add(hb);
+             for (const ub of hb.split(".")) bb.add(ub)
```

#### 1241. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15144-L15150` → after: `L15144-L15150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15144-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15144-L15150) · [Before (L15144-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15144-L15150)

```diff
-         function iQ(qq) {
-           if (null === qq.worldCode || void 0 === qq.worldCode) return null;
-           const Eq = [];
-           for (const lq of [null === (gq = qq.customEvents) || void 0 === gq ? void 0 : gq.byEvent, null === (Yq = qq.playerTotals) || void 0 === Yq ? void 0 : Yq.playerTotals]) {
-             var gq, Yq;
-             vA(null !== lq && void 0 !== lq ? lq : {}, ((qq, gq, Yq) => {
-               Eq.push(gq, ...Object.keys(Yq))
+         function gC(bb) {
+           if (null === bb.worldCode || void 0 === bb.worldCode) return null;
+           const ub = [];
+           for (const Ob of [null === (hb = bb.customEvents) || void 0 === hb ? void 0 : hb.byEvent, null === (Bb = bb.playerTotals) || void 0 === Bb ? void 0 : Bb.playerTotals]) {
+             var hb, Bb;
+             jY(null !== Ob && void 0 !== Ob ? Ob : {}, ((bb, hb, Bb) => {
+               ub.push(hb, ...Object.keys(Bb))
```

#### 1242. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15153-L15163` → after: `L15153-L15163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15153-L15163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15153-L15163) · [Before (L15153-L15163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15153-L15163)

```diff
-           return function(qq) {
-             let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-             const gq = new Set(hu.keys());
-             for (const Oq of [...Lc, ...nQ]) gq.add(`api.${Oq}`);
-             for (const Oq of qq.constants)
-               for (const qq of [Oq.name, Oq.value, Oq.where, Oq.usedIn]) bQ(gq, qq);
-             for (const Oq of qq.callbacks) {
-               bQ(gq, Oq.name);
-               for (const qq of null !== (Yq = Oq.params) && void 0 !== Yq ? Yq : []) {
-                 var Yq;
-                 bQ(gq, qq)
+           return function(bb) {
+             let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+             const hb = new Set(na.keys());
+             for (const Gb of [...MS, ...xC]) hb.add(`api.${Gb}`);
+             for (const Gb of bb.constants)
+               for (const bb of [Gb.name, Gb.value, Gb.where, Gb.usedIn]) zC(hb, bb);
+             for (const Gb of bb.callbacks) {
+               zC(hb, Gb.name);
+               for (const bb of null !== (Bb = Gb.params) && void 0 !== Bb ? Bb : []) {
+                 var Bb;
+                 zC(hb, bb)
```

#### 1243. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15166-L15169` → after: `L15166-L15169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15166-L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15166-L15169) · [Before (L15166-L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15166-L15169)

```diff
-             for (const Oq of qq.analyticsHelpers) bQ(gq, Oq);
-             for (const Oq of null !== (lq = qq.messages) && void 0 !== lq ? lq : []) {
-               var lq;
-               bQ(gq, Oq.where), bQ(gq, Oq.line)
+             for (const Gb of bb.analyticsHelpers) zC(hb, Gb);
+             for (const Gb of null !== (Ob = bb.messages) && void 0 !== Ob ? Ob : []) {
+               var Ob;
+               zC(hb, Gb.where), zC(hb, Gb.line)
```

#### 1244. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15171-L15175` → after: `L15171-L15175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15171-L15175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15171-L15175) · [Before (L15171-L15175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15171-L15175)

```diff
-             for (const Oq of qq.events)
-               for (const qq of [Oq.eventType, Oq.valueExpression, Oq.numberExpression, Oq.where, Oq.guard, ...Oq.values]) bQ(gq, qq);
-             for (const Oq of Eq) bQ(gq, Oq);
-             return gq
-           }(qq.worldCode, Eq)
+             for (const Gb of bb.events)
+               for (const bb of [Gb.eventType, Gb.valueExpression, Gb.numberExpression, Gb.where, Gb.guard, ...Gb.values]) zC(hb, bb);
+             for (const Gb of ub) zC(hb, Gb);
+             return hb
+           }(bb.worldCode, ub)
```

#### 1245. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15178-L15180` → after: `L15178-L15180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15178-L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15178-L15180) · [Before (L15178-L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15178-L15180)

```diff
-         function ZQ(qq, Eq, gq, Yq) {
-           const lq = qq.split(".");
-           return "api" === lq[0] && lq.length > 1 ? null !== Yq ? Yq.has(lq[1]) : "pasteCode" !== gq || Eq.has(`api.${lq[1]}`) : !(!hQ.has(lq[0]) && !Eq.has(qq)) || lq.length > 1 && lq.every((qq => Eq.has(qq)))
+         function iC(bb, ub, hb, Bb) {
+           const Ob = bb.split(".");
+           return "api" === Ob[0] && Ob.length > 1 ? null !== Bb ? Bb.has(Ob[1]) : "pasteCode" !== hb || ub.has(`api.${Ob[1]}`) : !(!DC.has(Ob[0]) && !ub.has(bb)) || Ob.length > 1 && Ob.every((bb => ub.has(bb)))
```

#### 1246. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15183-L15184` → after: `L15183-L15184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15183-L15184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15183-L15184) · [Before (L15183-L15184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15183-L15184)

```diff
-         function fQ(qq) {
-           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(qq)
+         function vC(bb) {
+           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(bb)
```

#### 1247. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15187-L15189` → after: `L15187-L15189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15187-L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15187-L15189) · [Before (L15187-L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15187-L15189)

```diff
-         function MQ(qq, Eq) {
-           return Eq.startsWith("api.") ? {
-             text: qq,
+         function tC(bb, ub) {
+           return ub.startsWith("api.") ? {
+             text: bb,
```

#### 1248. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15193` → after: `L15193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15193) · [Before (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15193)

```diff
-             text: qq,
+             text: bb,
```

#### 1249. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15197` → after: `L15197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15197) · [Before (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15197)

```diff
-         const TQ = kB, zQ = 10, SQ = 3, pQ = 8, GQ = /tutorial|onboarding/i, LQ = /event|flow|heatmap|order players/i, JQ = .15, kQ = .1, RQ = 3, UQ = .25, FQ = .1, sQ = 2, XQ = 3, wQ = .7, KQ = 5;
+         const JC = IH, eC = 10, NC = 3, sC = 8, MC = /tutorial|onboarding/i, mC = /event|flow|heatmap|order players/i, IC = .15, PC = .1, qC = 3, EC = .25, yC = .1, VC = 2, FC = 3, fC = .7, kC = 5;
```

#### 1250. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15199-L15200` → after: `L15199-L15200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15199-L15200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15199-L15200) · [Before (L15199-L15200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15199-L15200)

```diff
-         function CQ(qq, Eq) {
-           return "" === Eq ? qq : /^-?\d+$/.test(Eq) ? `${qq} ${Eq}` : /\d/.test(Eq) ? Eq : `${qq}: ${Eq}`
+         function TC(bb, ub) {
+           return "" === ub ? bb : /^-?\d+$/.test(ub) ? `${bb} ${ub}` : /\d/.test(ub) ? ub : `${bb}: ${ub}`
```

#### 1251. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15203-L15206` → after: `L15203-L15206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15203-L15206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15203-L15206) · [Before (L15203-L15206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15203-L15206)

```diff
-         function IQ(qq) {
-           const Eq = tA(qq),
-             gq = Eq.lastIndexOf(": ");
-           return -1 === gq ? Eq : CQ(Eq.slice(0, gq), Eq.slice(gq + 2))
+         function cC(bb) {
+           const ub = dY(bb),
+             hb = ub.lastIndexOf(": ");
+           return -1 === hb ? ub : TC(ub.slice(0, hb), ub.slice(hb + 2))
```

#### 1252. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15209-L15218` → after: `L15209-L15218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15209-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15209-L15218) · [Before (L15209-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15209-L15218)

```diff
-         function eQ(qq, Eq, gq) {
-           var Yq, lq;
-           const Oq = oV(Eq.flow, Eq.progressions, null, null, gq),
-             mq = null !== (Yq = null === (lq = qq.stats) || void 0 === lq ? void 0 : lq.rankingWindow.uniquePlayers) && void 0 !== Yq ? Yq : 0;
-           if ("flowStep" === (null === Oq || void 0 === Oq ? void 0 : Oq.kind)) {
-             const qq = Eq.flow,
-               gq = Math.max(0, ...qq.steps.map((qq => qq.fromPlayers))),
-               Yq = qq.steps.filter((qq => {
-                 var Eq, Yq;
-                 return qq.isChain && qq.fromPlayers >= (null !== (Eq = null === (Yq = qq.start) || void 0 === Yq ? void 0 : Yq.players) && void 0 !== Eq ? Eq : gq) * kQ
+         function QC(bb, ub, hb) {
+           var Bb, Ob;
+           const Gb = Wp(ub.flow, ub.progressions, null, null, hb),
+             Ub = null !== (Bb = null === (Ob = bb.stats) || void 0 === Ob ? void 0 : Ob.rankingWindow.uniquePlayers) && void 0 !== Bb ? Bb : 0;
+           if ("flowStep" === (null === Gb || void 0 === Gb ? void 0 : Gb.kind)) {
+             const bb = ub.flow,
+               hb = Math.max(0, ...bb.steps.map((bb => bb.fromPlayers))),
+               Bb = bb.steps.filter((bb => {
+                 var ub, Bb;
+                 return bb.isChain && bb.fromPlayers >= (null !== (ub = null === (Bb = bb.start) || void 0 === Bb ? void 0 : Bb.players) && void 0 !== ub ? ub : hb) * PC
```

#### 1253. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15220` → after: `L15220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15220) · [Before (L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15220)

```diff
-               lq = (qq, Eq) => {
+               Ob = (bb, ub) => {
```

#### 1254. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15222-L15226` → after: `L15222-L15226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15222-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15222-L15226) · [Before (L15222-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15222-L15226)

```diff
-                   from: IQ(qq.from),
-                   to: IQ(qq.to),
-                   isOrLater: qq.isOrLater,
-                   fromPlayers: qq.fromPlayers,
-                   lost: qq.lost,
+                   from: cC(bb.from),
+                   to: cC(bb.to),
+                   isOrLater: bb.isOrLater,
+                   fromPlayers: bb.fromPlayers,
+                   lost: bb.lost,
```

#### 1255. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15230-L15232` → after: `L15230-L15232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15230-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15230-L15232) · [Before (L15230-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15230-L15232)

```diff
-                   share: qq.share,
-                   players: (gq = qq.fromPlayers, mq > 0 ? Math.min(gq, mq) : gq),
-                   later: Eq
+                   share: bb.share,
+                   players: (hb = bb.fromPlayers, Ub > 0 ? Math.min(hb, Ub) : hb),
+                   later: ub
```

#### 1256. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15234` → after: `L15234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15234) · [Before (L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15234)

```diff
-                 var gq
+                 var hb
```

#### 1257. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15236-L15243` → after: `L15236-L15243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15236-L15243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15236-L15243) · [Before (L15236-L15243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15236-L15243)

```diff
-               xq = [Oq.step, Oq.mostLost, qq.lowestShare].filter((qq => null !== qq && Yq.includes(qq)));
-             return [...new Set(xq)].map((Eq => {
-               const gq = function(qq, Eq) {
-                   const gq = new Set([Eq]),
-                     Yq = [Eq];
-                   for (; Yq.length > 0;) {
-                     const Eq = Yq.shift();
-                     for (const lq of qq) lq.from !== Eq || gq.has(lq.to) || (gq.add(lq.to), Yq.push(lq.to))
+               Lb = [Gb.step, Gb.mostLost, bb.lowestShare].filter((bb => null !== bb && Bb.includes(bb)));
+             return [...new Set(Lb)].map((ub => {
+               const hb = function(bb, ub) {
+                   const hb = new Set([ub]),
+                     Bb = [ub];
+                   for (; Bb.length > 0;) {
+                     const ub = Bb.shift();
+                     for (const Ob of bb) Ob.from !== ub || hb.has(Ob.to) || (hb.add(Ob.to), Bb.push(Ob.to))
```

#### 1258. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15245-L15248` → after: `L15245-L15248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15245-L15248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15245-L15248) · [Before (L15245-L15248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15245-L15248)

```diff
-                   return gq
-                 }(qq.steps, Eq.to),
-                 Oq = Yq.filter((qq => qq !== Eq && gq.has(qq.from)));
-               return lq(Eq, Oq.map((qq => lq(qq, []))))
+                   return hb
+                 }(bb.steps, ub.to),
+                 Gb = Bb.filter((bb => bb !== ub && hb.has(bb.from)));
+               return Ob(ub, Gb.map((bb => Ob(bb, []))))
```

#### 1259. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15251` → after: `L15251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15251) · [Before (L15251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15251)

```diff
-           if ("progressStep" === (null === Oq || void 0 === Oq ? void 0 : Oq.kind)) {
+           if ("progressStep" === (null === Gb || void 0 === Gb ? void 0 : Gb.kind)) {
```

#### 1260. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15253-L15259` → after: `L15253-L15259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15253-L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15253-L15259) · [Before (L15253-L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15253-L15259)

```diff
-               progression: qq
-             } = Oq, Eq = qq.values[0].players, gq = qq.steps.filter((qq => qq.from.players >= Eq * kQ)), Yq = (gq, Yq) => ({
-               from: CQ(qq.eventType, gq.from.value),
-               to: CQ(qq.eventType, gq.to.value),
-               isOrLater: gq.reached > gq.to.players,
-               fromPlayers: gq.from.players,
-               lost: gq.lost,
+               progression: bb
+             } = Gb, ub = bb.values[0].players, hb = bb.steps.filter((bb => bb.from.players >= ub * PC)), Bb = (hb, Bb) => ({
+               from: TC(bb.eventType, hb.from.value),
+               to: TC(bb.eventType, hb.to.value),
+               isOrLater: hb.reached > hb.to.players,
+               fromPlayers: hb.from.players,
+               lost: hb.lost,
```

#### 1261. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15263-L15264` → after: `L15263-L15264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15263-L15264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15263-L15264) · [Before (L15263-L15264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15263-L15264)

```diff
-                 gameCategory: qq.gameCategory,
-                 eventType: qq.eventType,
+                 gameCategory: bb.gameCategory,
+                 eventType: bb.eventType,
```

#### 1262. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15267-L15271` → after: `L15267-L15271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15267-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15267-L15271) · [Before (L15267-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15267-L15271)

```diff
-               share: gq.share,
-               players: gq.from.players * Math.min(1, Eq > 0 && mq > 0 ? mq / Eq : 1),
-               later: Yq
-             }), lq = [Oq.step, Oq.mostLost, qq.lowestShare].filter((qq => null !== qq && gq.includes(qq)));
-             return [...new Set(lq)].map((qq => Yq(qq, gq.slice(gq.indexOf(qq) + 1).map((qq => Yq(qq, []))))))
+               share: hb.share,
+               players: hb.from.players * Math.min(1, ub > 0 && Ub > 0 ? Ub / ub : 1),
+               later: Bb
+             }), Ob = [Gb.step, Gb.mostLost, bb.lowestShare].filter((bb => null !== bb && hb.includes(bb)));
+             return [...new Set(Ob)].map((bb => Bb(bb, hb.slice(hb.indexOf(bb) + 1).map((bb => Bb(bb, []))))))
```

#### 1263. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15276-L15293` → after: `L15276-L15293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15276-L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15276-L15293) · [Before (L15276-L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15276-L15293)

```diff
-         function DQ(qq, Eq) {
-           const gq = tA(qq);
-           return gq.startsWith(`${Eq}: `) ? gq.slice(Eq.length + 2) : null
-         }
- 
-         function qy(qq, Eq) {
-           var gq, Yq;
-           const lq = function(qq) {
-             var Eq, gq, Yq, lq;
-             const Oq = null !== (Eq = null === (gq = qq.playerTotals) || void 0 === gq ? void 0 : gq.playerTotals) && void 0 !== Eq ? Eq : {},
-               mq = null !== (Yq = null === (lq = qq.flow) || void 0 === lq ? void 0 : lq.edges) && void 0 !== Yq ? Yq : [];
-             let xq = null;
-             return vA(Oq, ((Eq, gq, Yq) => {
-               var lq;
-               const Oq = null === (lq = qq.worldCode) || void 0 === lq ? void 0 : lq.events.find((qq => qq.isLiteralType && qq.eventType === gq));
-               if (!GQ.test(gq) || void 0 === Oq || null !== Oq.valueExpression) return;
- ... (2 more removed lines; see GitHub link above)
+         function RC(bb, ub) {
+           const hb = dY(bb);
+           return hb.startsWith(`${ub}: `) ? hb.slice(ub.length + 2) : null
+         }
+ 
+         function bd(bb, ub) {
+           var hb, Bb;
+           const Ob = function(bb) {
+             var ub, hb, Bb, Ob;
+             const Gb = null !== (ub = null === (hb = bb.playerTotals) || void 0 === hb ? void 0 : hb.playerTotals) && void 0 !== ub ? ub : {},
+               Ub = null !== (Bb = null === (Ob = bb.flow) || void 0 === Ob ? void 0 : Ob.edges) && void 0 !== Bb ? Bb : [];
+             let Lb = null;
+             return jY(Gb, ((ub, hb, Bb) => {
+               var Ob;
+               const Gb = null === (Ob = bb.worldCode) || void 0 === Ob ? void 0 : Ob.events.find((bb => bb.isLiteralType && bb.eventType === hb));
+               if (!MC.test(hb) || void 0 === Gb || null !== Gb.valueExpression) return;
+ ... (2 more added lines; see GitHub link above)
```

#### 1264. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15295-L15296` → after: `L15295-L15296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15295-L15296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15295-L15296) · [Before (L15295-L15296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15295-L15296)

```diff
-                     value: Eq,
-                     players: gq
+                     value: ub,
+                     players: hb
```

#### 1265. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15298-L15299` → after: `L15298-L15299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15298-L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15298-L15299) · [Before (L15298-L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15298-L15299)

```diff
-                 })).sort(((qq, Eq) => Eq.players - qq.players)),
-                 cq = new Map(Aq.map(((qq, Eq) => {
+                 })).sort(((bb, ub) => ub.players - bb.players)),
+                 Sb = new Map(Yb.map(((bb, ub) => {
```

#### 1266. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15301-L15303` → after: `L15301-L15303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15301-L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15301-L15303) · [Before (L15301-L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15301-L15303)

```diff
-                     value: gq
-                   } = qq;
-                   return [gq, Eq]
+                     value: hb
+                   } = bb;
+                   return [hb, ub]
```

#### 1267. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15305` → after: `L15305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15305) · [Before (L15305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15305)

```diff
-                 uq = Aq.every((qq => {
+                 ab = Yb.every((bb => {
```

#### 1268. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15307-L15309` → after: `L15307-L15309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15307-L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15307-L15309) · [Before (L15307-L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15307-L15309)

```diff
-                     value: Eq
-                   } = qq;
-                   return Oq.values.includes(Eq)
+                     value: ub
+                   } = bb;
+                   return Gb.values.includes(ub)
```

#### 1269. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15311` → after: `L15311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15311) · [Before (L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15311)

```diff
-                 Bq = Aq.slice(1).every(((qq, Eq) => {
+                 Hb = Yb.slice(1).every(((bb, ub) => {
```

#### 1270. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15313-L15315` → after: `L15313-L15315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15313-L15315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15313-L15315) · [Before (L15313-L15315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15313-L15315)

```diff
-                     players: gq
-                   } = qq;
-                   return gq < Aq[Eq].players
+                     players: hb
+                   } = bb;
+                   return hb < Yb[ub].players
```

#### 1271. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15317-L15321` → after: `L15317-L15321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15317-L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15317-L15321) · [Before (L15317-L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15317-L15321)

```diff
-                 Wq = mq.some((qq => {
-                   var Eq, Yq;
-                   const lq = cq.get(null !== (Eq = DQ(qq.from, gq)) && void 0 !== Eq ? Eq : ""),
-                     Oq = cq.get(null !== (Yq = DQ(qq.to, gq)) && void 0 !== Yq ? Yq : "");
-                   return void 0 !== lq && void 0 !== Oq && lq > Oq
+                 wb = Ub.some((bb => {
+                   var ub, Bb;
+                   const Ob = Sb.get(null !== (ub = RC(bb.from, hb)) && void 0 !== ub ? ub : ""),
+                     Gb = Sb.get(null !== (Bb = RC(bb.to, hb)) && void 0 !== Bb ? Bb : "");
+                   return void 0 !== Ob && void 0 !== Gb && Ob > Gb
```

#### 1272. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15323-L15327` → after: `L15323-L15327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15323-L15327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15323-L15327) · [Before (L15323-L15327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15323-L15327)

```diff
-                 Nq = null === xq || Aq[0].players > xq.values[0].players;
-               Aq.length >= SQ && uq && Bq && !Wq && Nq && (xq = {
-                 gameCategory: Eq,
-                 eventType: gq,
-                 values: Aq
+                 Zb = null === Lb || Yb[0].players > Lb.values[0].players;
+               Yb.length >= NC && ab && Hb && !wb && Zb && (Lb = {
+                 gameCategory: ub,
+                 eventType: hb,
+                 values: Yb
```

#### 1273. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15329-L15332` → after: `L15329-L15332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15329-L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15329-L15332) · [Before (L15329-L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15329-L15332)

```diff
-             })), xq
-           }(qq);
-           if (null === lq) return [];
-           const Oq = null !== (gq = null === (Yq = qq.stats) || void 0 === Yq ? void 0 : Yq.rankingWindow.uniquePlayers) && void 0 !== gq ? gq : 0,
+             })), Lb
+           }(bb);
+           if (null === Ob) return [];
+           const Gb = null !== (hb = null === (Bb = bb.stats) || void 0 === Bb ? void 0 : Bb.rankingWindow.uniquePlayers) && void 0 !== hb ? hb : 0,
```

#### 1274. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15334-L15340` → after: `L15334-L15340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15334-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15334-L15340) · [Before (L15334-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15334-L15340)

```diff
-               values: mq,
-               eventType: xq
-             } = lq,
-             Aq = mq[0].players,
-             cq = {
-               gameCategory: lq.gameCategory,
-               eventType: xq,
+               values: Ub,
+               eventType: Lb
+             } = Ob,
+             Yb = Ub[0].players,
+             Sb = {
+               gameCategory: Ob.gameCategory,
+               eventType: Lb,
```

#### 1275. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15343-L15348` → after: `L15343-L15348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15343-L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15343-L15348) · [Before (L15343-L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15343-L15348)

```diff
-             uq = mq.slice(1).flatMap(((qq, gq) => {
-               const Yq = mq[gq];
-               return Yq.players >= Eq && Yq.players >= Aq * kQ ? [{
-                 from: Yq,
-                 to: qq,
-                 lost: Yq.players - qq.players
+             ab = Ub.slice(1).flatMap(((bb, hb) => {
+               const Bb = Ub[hb];
+               return Bb.players >= ub && Bb.players >= Yb * PC ? [{
+                 from: Bb,
+                 to: bb,
+                 lost: Bb.players - bb.players
```

#### 1276. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15351-L15353` → after: `L15351-L15353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15351-L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15351-L15353) · [Before (L15351-L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15351-L15353)

```diff
-             Bq = (qq, Eq) => ({
-               from: qq.from.value,
-               to: qq.to.value,
+             Hb = (bb, ub) => ({
+               from: bb.from.value,
+               to: bb.to.value,
```

#### 1277. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15355-L15356` → after: `L15355-L15356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15355-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15355-L15356) · [Before (L15355-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15355-L15356)

```diff
-               fromPlayers: qq.from.players,
-               lost: qq.lost,
+               fromPlayers: bb.from.players,
+               lost: bb.lost,
```

#### 1278. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15359-L15363` → after: `L15359-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15359-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15359-L15363) · [Before (L15359-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15359-L15363)

```diff
-               selection: cq,
-               group: xq,
-               share: qq.to.players / qq.from.players,
-               players: qq.from.players * Math.min(1, Aq > 0 && Oq > 0 ? Oq / Aq : 1),
-               later: Eq
+               selection: Sb,
+               group: Lb,
+               share: bb.to.players / bb.from.players,
+               players: bb.from.players * Math.min(1, Yb > 0 && Gb > 0 ? Gb / Yb : 1),
+               later: ub
```

#### 1279. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15365-L15370` → after: `L15365-L15370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15365-L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15365-L15370) · [Before (L15365-L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15365-L15370)

```diff
-             Wq = [...uq].sort(((qq, Eq) => Eq.lost - qq.lost))[0],
-             Nq = [...uq].sort(((qq, Eq) => qq.to.players / qq.from.players - Eq.to.players / Eq.from.players))[0];
-           return [...new Set([Wq, Nq])].flatMap((qq => {
-             if (void 0 === qq) return [];
-             const Eq = uq.slice(uq.indexOf(qq) + 1).map((qq => Bq(qq, [])));
-             return [Bq(qq, Eq)]
+             wb = [...ab].sort(((bb, ub) => ub.lost - bb.lost))[0],
+             Zb = [...ab].sort(((bb, ub) => bb.to.players / bb.from.players - ub.to.players / ub.from.players))[0];
+           return [...new Set([wb, Zb])].flatMap((bb => {
+             if (void 0 === bb) return [];
+             const ub = ab.slice(ab.indexOf(bb) + 1).map((bb => Hb(bb, [])));
+             return [Hb(bb, ub)]
```

#### 1280. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15374` → after: `L15374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15374) · [Before (L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15374)

```diff
-         function Ey(qq, Eq) {
+         function ud(bb, ub) {
```

#### 1281. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15376-L15382` → after: `L15376-L15382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15376-L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15376-L15382) · [Before (L15376-L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15376-L15382)

```diff
-             share: gq,
-             players: Yq,
-             later: lq,
-             ...Oq
-           } = qq, mq = 1 - gq - JQ;
-           return mq > 0 && Yq >= Eq && Oq.fromPlayers >= Eq ? {
-             ...Oq,
+             share: hb,
+             players: Bb,
+             later: Ob,
+             ...Gb
+           } = bb, Ub = 1 - hb - IC;
+           return Ub > 0 && Bb >= ub && Gb.fromPlayers >= ub ? {
+             ...Gb,
```

#### 1282. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15384` → after: `L15384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15384) · [Before (L15384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15384)

```diff
-             score: mq * Yq
+             score: Ub * Bb
```

#### 1283. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15388-L15393` → after: `L15388-L15393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15388-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15388-L15393) · [Before (L15388-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15388-L15393)

```diff
-         function gy(qq, Eq, gq, Yq, lq, Oq) {
-           if (gq.length < SQ || gq[0].players < Yq) return null;
-           const mq = gq.slice(1).flatMap(((qq, Eq) => {
-             const Oq = gq[Eq],
-               mq = lq > 0 ? Math.min(Oq.players, lq) : Oq.players;
-             return Oq.players >= Yq ? [(1 - Math.min(1, qq.players / Oq.players) - JQ) * mq] : []
+         function hd(bb, ub, hb, Bb, Ob, Gb) {
+           if (hb.length < NC || hb[0].players < Bb) return null;
+           const Ub = hb.slice(1).flatMap(((bb, ub) => {
+             const Gb = hb[ub],
+               Ub = Ob > 0 ? Math.min(Gb.players, Ob) : Gb.players;
+             return Gb.players >= Bb ? [(1 - Math.min(1, bb.players / Gb.players) - IC) * Ub] : []
```

#### 1284. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15397-L15414` → after: `L15397-L15414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15397-L15414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15397-L15414) · [Before (L15397-L15414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15397-L15414)

```diff
-             eventType: qq,
-             order: Eq,
-             values: gq.slice(0, pQ),
-             hasMore: gq.length > pQ,
-             selection: Oq,
-             score: Math.max(0, ...mq)
-           }
-         }
- 
-         function Yy(qq, Eq, gq) {
-           var Yq, lq, Oq, mq;
-           const xq = null !== (Yq = null === (lq = qq.stats) || void 0 === lq ? void 0 : lq.rankingWindow.uniquePlayers) && void 0 !== Yq ? Yq : 0,
-             Aq = null !== (Oq = null === (mq = Eq.dropoff) || void 0 === mq ? void 0 : mq.mostAboveMedian) && void 0 !== Oq ? Oq : null;
-           if (null === Aq || xq < gq) return null;
-           const cq = xV(Aq);
-           if (null === cq.medianEndedPercent) return null;
- ... (2 more removed lines; see GitHub link above)
+             eventType: bb,
+             order: ub,
+             values: hb.slice(0, sC),
+             hasMore: hb.length > sC,
+             selection: Gb,
+             score: Math.max(0, ...Ub)
+           }
+         }
+ 
+         function Bd(bb, ub, hb) {
+           var Bb, Ob, Gb, Ub;
+           const Lb = null !== (Bb = null === (Ob = bb.stats) || void 0 === Ob ? void 0 : Ob.rankingWindow.uniquePlayers) && void 0 !== Bb ? Bb : 0,
+             Yb = null !== (Gb = null === (Ub = ub.dropoff) || void 0 === Ub ? void 0 : Ub.mostAboveMedian) && void 0 !== Gb ? Gb : null;
+           if (null === Yb || Lb < hb) return null;
+           const Sb = Yp(Yb);
+           if (null === Sb.medianEndedPercent) return null;
+ ... (2 more added lines; see GitHub link above)
```

#### 1285. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15416-L15419` → after: `L15416-L15419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15416-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15416-L15419) · [Before (L15416-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15416-L15419)

```diff
-             minute: cq.minute,
-             ended: cq.endedPercent,
-             typicalEnded: cq.medianEndedPercent,
-             score: uq / 100 * xq
+             minute: Sb.minute,
+             ended: Sb.endedPercent,
+             typicalEnded: Sb.medianEndedPercent,
+             score: ab / 100 * Lb
```

#### 1286. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15423-L15424` → after: `L15423-L15424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15423-L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15423-L15424) · [Before (L15423-L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15423-L15424)

```diff
-         function ly(qq, Eq) {
-           const gq = 1 === qq.events.filter((qq => qq.eventType === Eq.eventType)).length;
+         function Od(bb, ub) {
+           const hb = 1 === bb.events.filter((bb => bb.eventType === ub.eventType)).length;
```

#### 1287. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15426-L15428` → after: `L15426-L15428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15426-L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15426-L15428) · [Before (L15426-L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15426-L15428)

```diff
-             gameCategory: qq.gameCategoryId,
-             eventType: Eq.eventType,
-             eventValue: gq ? null : Eq.eventValue
+             gameCategory: bb.gameCategoryId,
+             eventType: ub.eventType,
+             eventValue: hb ? null : ub.eventValue
```

#### 1288. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15432-L15436` → after: `L15432-L15436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15432-L15436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15432-L15436) · [Before (L15432-L15436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15432-L15436)

```diff
-         function Oy(qq, Eq) {
-           var gq, Yq;
-           const lq = null !== (gq = null === (Yq = qq.stats) || void 0 === Yq ? void 0 : Yq.rankingWindow.uniquePlayers) && void 0 !== gq ? gq : 0,
-             Oq = [...qq.heatmaps].sort(((qq, Eq) => Eq.players.totalCount - qq.players.totalCount))[0];
-           if (void 0 === Oq || lq < Eq) return null;
+         function Gd(bb, ub) {
+           var hb, Bb;
+           const Ob = null !== (hb = null === (Bb = bb.stats) || void 0 === Bb ? void 0 : Bb.rankingWindow.uniquePlayers) && void 0 !== hb ? hb : 0,
+             Gb = [...bb.heatmaps].sort(((bb, ub) => ub.players.totalCount - bb.players.totalCount))[0];
+           if (void 0 === Gb || Ob < ub) return null;
```

#### 1289. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15438-L15445` → after: `L15438-L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15438-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15438-L15445) · [Before (L15438-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15438-L15445)

```diff
-             areas: mq,
-             total: xq
-           } = hd(Oq.players), Aq = mq[0];
-           if (void 0 === Aq || xq <= 0 || Aq.count / xq < UQ) return null;
-           const cq = qq => ({
-               x: qq.x,
-               z: qq.z,
-               y: qq.busiestY
+             areas: Ub,
+             total: Lb
+           } = go(Gb.players), Yb = Ub[0];
+           if (void 0 === Yb || Lb <= 0 || Yb.count / Lb < EC) return null;
+           const Sb = bb => ({
+               x: bb.x,
+               z: bb.z,
+               y: bb.busiestY
```

#### 1290. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15447` → after: `L15447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15447) · [Before (L15447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15447)

```diff
-             uq = Aq.count / xq;
+             ab = Yb.count / Lb;
```

#### 1291. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15450-L15455` → after: `L15450-L15455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15450-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15450-L15455) · [Before (L15450-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15450-L15455)

```diff
-             category: Oq.gameCategoryId,
-             square: cq(Aq),
-             share: uq,
-             next: mq.slice(1, 1 + sQ).filter((qq => qq.count / xq >= FQ)).map((qq => ({
-               square: cq(qq),
-               share: qq.count / xq
+             category: Gb.gameCategoryId,
+             square: Sb(Yb),
+             share: ab,
+             next: Ub.slice(1, 1 + VC).filter((bb => bb.count / Lb >= yC)).map((bb => ({
+               square: Sb(bb),
+               share: bb.count / Lb
```

#### 1292. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15458` → after: `L15458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15458) · [Before (L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15458)

```diff
-               gameCategory: Oq.gameCategoryId,
+               gameCategory: Gb.gameCategoryId,
```

#### 1293. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15462-L15477` → after: `L15462-L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15462-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15462-L15477) · [Before (L15462-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15462-L15477)

```diff
-             score: (uq - UQ) * lq
-           }
-         }
-         const my = /^(?:checkpoint|wave|island|zone|level)s?$/, xy = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
- 
-         function Ay(qq, Eq) {
-           var gq, Yq, lq, Oq;
-           if (! function(qq) {
-               var Eq, gq, Yq, lq;
-               const Oq = qq.worldCode;
-               return [...(null !== (Eq = null === Oq || void 0 === Oq ? void 0 : Oq.functions) && void 0 !== Eq ? Eq : []).map((qq => qq.name)), ...(null !== (gq = null === Oq || void 0 === Oq ? void 0 : Oq.constants) && void 0 !== gq ? gq : []).map((qq => qq.name)), ...(null !== … [truncated]
-             }(qq)) return null;
-           const mq = qq.heatmaps.some((qq => qq.players.totalCount > 0 || qq.events.some((qq => qq.heatmap.totalCount > 0)))),
-             xq = qq.missing.some((qq => LQ.test(qq)));
-           if ((null !== (gq = null === (Yq = qq.flow) || void 0 === Yq ? void 0 : Yq.edges.length) && void 0 !== gq ? gq : 0) > 0 || Eq.progressions.length > 0 || mq || xq) return null;
-           const Aq = Object.values(null !== (lq = null === (Oq = qq.playerTotals) || void 0 === Oq ? void 0 : Oq.playerTotals) && void 0 !== lq ? lq : {}).flatMap((qq => Object.keys(qq)));
+             score: (ab - EC) * Ob
+           }
+         }
+         const Ud = /^(?:checkpoint|wave|island|zone|level)s?$/, Ld = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
+ 
+         function Yd(bb, ub) {
+           var hb, Bb, Ob, Gb;
+           if (! function(bb) {
+               var ub, hb, Bb, Ob;
+               const Gb = bb.worldCode;
+               return [...(null !== (ub = null === Gb || void 0 === Gb ? void 0 : Gb.functions) && void 0 !== ub ? ub : []).map((bb => bb.name)), ...(null !== (hb = null === Gb || void 0 === Gb ? void 0 : Gb.constants) && void 0 !== hb ? hb : []).map((bb => bb.name)), ...(null !== … [truncated]
+             }(bb)) return null;
+           const Ub = bb.heatmaps.some((bb => bb.players.totalCount > 0 || bb.events.some((bb => bb.heatmap.totalCount > 0)))),
+             Lb = bb.missing.some((bb => mC.test(bb)));
+           if ((null !== (hb = null === (Bb = bb.flow) || void 0 === Bb ? void 0 : Bb.edges.length) && void 0 !== hb ? hb : 0) > 0 || ub.progressions.length > 0 || Ub || Lb) return null;
+           const Yb = Object.values(null !== (Ob = null === (Gb = bb.playerTotals) || void 0 === Gb ? void 0 : Gb.playerTotals) && void 0 !== Ob ? Ob : {}).flatMap((bb => Object.keys(bb)));
```

#### 1294. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15480` → after: `L15480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15480) · [Before (L15480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15480)

```diff
-             line: ka(qq.worldCode, Aq),
+             line: PX(bb.worldCode, Yb),
```

#### 1295. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15485-L15498` → after: `L15485-L15498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15485-L15498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15485-L15498) · [Before (L15485-L15498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15485-L15498)

```diff
-         function cy(qq) {
-           var Eq, gq, Yq, lq;
-           const Oq = Vd(qq),
-             mq = null !== (Eq = null === (gq = qq.stats) || void 0 === gq ? void 0 : gq.rankingWindow.uniquePlayers) && void 0 !== Eq ? Eq : 0,
-             xq = mq >= zQ && mq < TQ,
-             Aq = xq ? zQ : TQ,
-             cq = function(qq, Eq) {
-               return qq.flatMap((qq => {
-                 const gq = Ey(qq, Eq);
-                 if (null === gq) return [];
-                 const Yq = qq.later.map((qq => Ey(qq, Eq))).filter((qq => null !== qq && qq.lost >= gq.lost * wQ)).sort(((qq, Eq) => Eq.lost - qq.lost))[0];
-                 return [void 0 === Yq ? gq : {
-                   ...gq,
-                   next: Yq
+         function Sd(bb) {
+           var ub, hb, Bb, Ob;
+           const Gb = oo(bb),
+             Ub = null !== (ub = null === (hb = bb.stats) || void 0 === hb ? void 0 : hb.rankingWindow.uniquePlayers) && void 0 !== ub ? ub : 0,
+             Lb = Ub >= eC && Ub < JC,
+             Yb = Lb ? eC : JC,
+             Sb = function(bb, ub) {
+               return bb.flatMap((bb => {
+                 const hb = ud(bb, ub);
+                 if (null === hb) return [];
+                 const Bb = bb.later.map((bb => ud(bb, ub))).filter((bb => null !== bb && bb.lost >= hb.lost * fC)).sort(((bb, ub) => ub.lost - bb.lost))[0];
+                 return [void 0 === Bb ? hb : {
+                   ...hb,
+                   next: Bb
```

#### 1296. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15500-L15505` → after: `L15500-L15505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15500-L15505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15500-L15505) · [Before (L15500-L15505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15500-L15505)

```diff
-               })).sort(((qq, Eq) => Eq.score - qq.score)).slice(0, XQ)
-             }([...eQ(qq, Oq, Aq), ...qy(qq, Aq)], Aq),
-             uq = null !== (Yq = xq ? function(qq, Eq, gq) {
-               var Yq, lq;
-               const Oq = mV(null !== (Yq = null === (lq = qq.playerTotals) || void 0 === lq ? void 0 : lq.playerTotals) && void 0 !== Yq ? Yq : {}, Eq)[0];
-               if (void 0 === Oq) return null;
+               })).sort(((bb, ub) => ub.score - bb.score)).slice(0, FC)
+             }([...QC(bb, Gb, Yb), ...bd(bb, Yb)], Yb),
+             ab = null !== (Bb = Lb ? function(bb, ub, hb) {
+               var Bb, Ob;
+               const Gb = Lp(null !== (Bb = null === (Ob = bb.playerTotals) || void 0 === Ob ? void 0 : Ob.playerTotals) && void 0 !== Bb ? Bb : {}, ub)[0];
+               if (void 0 === Gb) return null;
```

#### 1297. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15507-L15508` → after: `L15507-L15508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15507-L15508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15507-L15508) · [Before (L15507-L15508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15507-L15508)

```diff
-                 eventType: mq
-               } = Oq, xq = Oq.values.map((qq => {
+                 eventType: Ub
+               } = Gb, Lb = Gb.values.map((bb => {
```

#### 1298. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15510-L15512` → after: `L15510-L15512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15510-L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15510-L15512) · [Before (L15510-L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15510-L15512)

```diff
-                   value: Eq,
-                   players: gq
-                 } = qq;
+                   value: ub,
+                   players: hb
+                 } = bb;
```

#### 1299. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15514-L15515` → after: `L15514-L15515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15514-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15514-L15515) · [Before (L15514-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15514-L15515)

```diff
-                   name: CQ(mq, Eq),
-                   players: gq
+                   name: TC(Ub, ub),
+                   players: hb
```

#### 1300. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15517-L15519` → after: `L15517-L15519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15517-L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15517-L15519) · [Before (L15517-L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15517-L15519)

```diff
-               })), Aq = {
-                 gameCategory: Oq.gameCategory,
-                 eventType: mq,
+               })), Yb = {
+                 gameCategory: Gb.gameCategory,
+                 eventType: Ub,
```

#### 1301. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15521-L15523` → after: `L15521-L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15521-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15521-L15523) · [Before (L15521-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15521-L15523)

```diff
-               }, cq = gy(mq, "number", xq, Eq, gq, Aq), uq = Oq.steps.filter((qq => qq.from.players >= KQ && 1 - qq.share > JQ)).sort(((qq, Eq) => qq.share - Eq.share || Eq.lost - qq.lost))[0];
-               return "ladder" !== (null === cq || void 0 === cq ? void 0 : cq.kind) || void 0 === uq ? cq : {
-                 ...cq,
+               }, Sb = hd(Ub, "number", Lb, ub, hb, Yb), ab = Gb.steps.filter((bb => bb.from.players >= kC && 1 - bb.share > IC)).sort(((bb, ub) => bb.share - ub.share || ub.lost - bb.lost))[0];
+               return "ladder" !== (null === Sb || void 0 === Sb ? void 0 : Sb.kind) || void 0 === ab ? Sb : {
+                 ...Sb,
```

#### 1302. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15525-L15529` → after: `L15525-L15529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15525-L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15525-L15529) · [Before (L15525-L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15525-L15529)

```diff
-                   from: CQ(mq, uq.from.value),
-                   to: CQ(mq, uq.to.value),
-                   fromPlayers: uq.from.players,
-                   reached: uq.reached,
-                   isOrLater: uq.reached > uq.to.players
+                   from: TC(Ub, ab.from.value),
+                   to: TC(Ub, ab.to.value),
+                   fromPlayers: ab.from.players,
+                   reached: ab.reached,
+                   isOrLater: ab.reached > ab.to.players
```

#### 1303. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15532-L15538` → after: `L15532-L15538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15532-L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15532-L15538) · [Before (L15532-L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15532-L15538)

```diff
-             }(qq, Aq, mq) : null) && void 0 !== Yq ? Yq : 0 === cq.length ? function(qq, Eq, gq) {
-               var Yq, lq;
-               let Oq = null;
-               return vA(null !== (Yq = null === (lq = qq.playerTotals) || void 0 === lq ? void 0 : lq.playerTotals) && void 0 !== Yq ? Yq : {}, ((qq, Yq, lq) => {
-                 if (!GQ.test(Yq)) return;
-                 const mq = gy(Yq, "players", Object.entries(lq).map((qq => {
-                   let [Eq, gq] = qq;
+             }(bb, Yb, Ub) : null) && void 0 !== Bb ? Bb : 0 === Sb.length ? function(bb, ub, hb) {
+               var Bb, Ob;
+               let Gb = null;
+               return jY(null !== (Bb = null === (Ob = bb.playerTotals) || void 0 === Ob ? void 0 : Ob.playerTotals) && void 0 !== Bb ? Bb : {}, ((bb, Bb, Ob) => {
+                 if (!MC.test(Bb)) return;
+                 const Ub = hd(Bb, "players", Object.entries(Ob).map((bb => {
+                   let [ub, hb] = bb;
```

#### 1304. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15540-L15541` → after: `L15540-L15541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15540-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15540-L15541) · [Before (L15540-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15540-L15541)

```diff
-                     name: Eq,
-                     players: gq
+                     name: ub,
+                     players: hb
```

#### 1305. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15543-L15545` → after: `L15543-L15545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15543-L15545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15543-L15545) · [Before (L15543-L15545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15543-L15545)

```diff
-                 })).sort(((qq, Eq) => Eq.players - qq.players)), Eq, gq, {
-                   gameCategory: qq,
-                   eventType: Yq,
+                 })).sort(((bb, ub) => ub.players - bb.players)), ub, hb, {
+                   gameCategory: bb,
+                   eventType: Bb,
```

#### 1306. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15548-L15560` → after: `L15548-L15560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15548-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15548-L15560) · [Before (L15548-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15548-L15560)

```diff
-                 "ladder" === (null === mq || void 0 === mq ? void 0 : mq.kind) && (null === Oq || mq.values[0].players > Oq.values[0].players) && (Oq = mq)
-               })), Oq
-             }(qq, Aq, mq) : null,
-             Bq = null === uq ? cq : [uq],
-             Wq = Yy(qq, Oq, Aq),
-             Nq = null !== (lq = function(qq, Eq) {
-               var gq, Yq;
-               const lq = null !== (gq = null === (Yq = qq.stats) || void 0 === Yq ? void 0 : Yq.rankingWindow.uniquePlayers) && void 0 !== gq ? gq : 0;
-               if (lq < Eq) return null;
-               let Oq = null;
-               for (const mq of qq.heatmaps)
-                 for (const gq of mq.events) {
-                   if (!tN(gq.eventType) || null !== Gu(gq.eventType, gq.eventValue, qq.worldCode)) continue;
+                 "ladder" === (null === Ub || void 0 === Ub ? void 0 : Ub.kind) && (null === Gb || Ub.values[0].players > Gb.values[0].players) && (Gb = Ub)
+               })), Gb
+             }(bb, Yb, Ub) : null,
+             Hb = null === ab ? Sb : [ab],
+             wb = Bd(bb, Gb, Yb),
+             Zb = null !== (Ob = function(bb, ub) {
+               var hb, Bb;
+               const Ob = null !== (hb = null === (Bb = bb.stats) || void 0 === Bb ? void 0 : Bb.rankingWindow.uniquePlayers) && void 0 !== hb ? hb : 0;
+               if (Ob < ub) return null;
+               let Gb = null;
+               for (const Ub of bb.heatmaps)
+                 for (const hb of Ub.events) {
+                   if (!rZ(hb.eventType) || null !== sa(hb.eventType, hb.eventValue, bb.worldCode)) continue;
```

#### 1307. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15562-L15565` → after: `L15562-L15565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15562-L15565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15562-L15565) · [Before (L15562-L15565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15562-L15565)

```diff
-                     areas: Yq,
-                     total: lq
-                   } = hd(gq.heatmap), xq = Yq[0];
-                   void 0 === xq || lq < Eq || xq.count / lq < UQ || null !== Oq && xq.count <= Oq.count || (Oq = {
+                     areas: Bb,
+                     total: Ob
+                   } = go(hb.heatmap), Lb = Bb[0];
+                   void 0 === Lb || Ob < ub || Lb.count / Ob < EC || null !== Gb && Lb.count <= Gb.count || (Gb = {
```

#### 1308. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15567` → after: `L15567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15567) · [Before (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15567)

```diff
-                     category: mq.gameCategoryId,
+                     category: Ub.gameCategoryId,
```

#### 1309. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15569-L15571` → after: `L15569-L15571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15569-L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15569-L15571) · [Before (L15569-L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15569-L15571)

```diff
-                       x: xq.x,
-                       z: xq.z,
-                       y: xq.busiestY
+                       x: Lb.x,
+                       z: Lb.z,
+                       y: Lb.busiestY
```

#### 1310. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15573-L15576` → after: `L15573-L15576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15573-L15576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15573-L15576) · [Before (L15573-L15576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15573-L15576)

```diff
-                     count: xq.count,
-                     total: lq,
-                     death: "" === gq.eventValue ? null : `${gq.eventType}: ${gq.eventValue}`,
-                     selection: ly(mq, gq)
+                     count: Lb.count,
+                     total: Ob,
+                     death: "" === hb.eventValue ? null : `${hb.eventType}: ${hb.eventValue}`,
+                     selection: Od(Ub, hb)
```

#### 1311. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15579-L15581` → after: `L15579-L15581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15579-L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15579-L15581) · [Before (L15579-L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15579-L15581)

```diff
-               return null === Oq ? null : {
-                 ...Oq,
-                 score: (Oq.count / Oq.total - UQ) * lq
+               return null === Gb ? null : {
+                 ...Gb,
+                 score: (Gb.count / Gb.total - EC) * Ob
```

#### 1312. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15583-L15594` → after: `L15583-L15594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15583-L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15583-L15594) · [Before (L15583-L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15583-L15594)

```diff
-             }(qq, Aq)) && void 0 !== lq ? lq : Oy(qq, Aq),
-             aq = null !== Wq && (0 === Bq.length || Wq.score > Bq[0].score) ? [Wq, ...Bq] : Bq,
-             Vq = (null === Nq ? aq : [...aq, Nq]).map((qq => xq ? {
-               ...qq,
-               fewPlayers: mq
-             } : qq)),
-             dq = Ay(qq, Oq);
-           return null === dq ? Vq : [...Vq, dq]
-         }
- 
-         function uy(qq) {
-           return ` ${qq.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const By=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function Wy(qq,Eq){const gq=uy(Eq);switch(qq.kind){case"step":{const Eq=function(qq){var Eq,gq;return null!==(Eq … [truncated]
+             }(bb, Yb)) && void 0 !== Ob ? Ob : Gd(bb, Yb),
+             Xb = null !== wb && (0 === Hb.length || wb.score > Hb[0].score) ? [wb, ...Hb] : Hb,
+             pb = (null === Zb ? Xb : [...Xb, Zb]).map((bb => Lb ? {
+               ...bb,
+               fewPlayers: Ub
+             } : bb)),
+             ob = Yd(bb, Gb);
+           return null === ob ? pb : [...pb, ob]
+         }
+ 
+         function ad(bb) {
+           return ` ${bb.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const Hd=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function wd(bb,ub){const hb=ad(ub);switch(bb.kind){case"step":{const ub=function(bb){var ub,hb;return null!==(ub … [truncated]
```

#### 1313. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15596` → after: `L15596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15596) · [Before (L15596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15596)

```diff
-             Eq[1]
+             ub[1]
```

#### 1314. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15599` → after: `L15599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15599) · [Before (L15599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15599)

```diff
-             Eq[2]
+             ub[2]
```

#### 1315. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15601` → after: `L15601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15601) · [Before (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15601)

```diff
-           `]}(qq).some((qq=>function(qq,Eq){const gq=uy(Eq).trim();return""!==gq&&qq.includes(`
+           `]}(bb).some((bb=>function(bb,ub){const hb=ad(ub).trim();return""!==hb&&bb.includes(`
```

#### 1316. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15603` → after: `L15603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15603) · [Before (L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15603)

```diff
-             gq
+             hb
```

#### 1317. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15605` → after: `L15605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15605) · [Before (L15605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15605)

```diff
-           `)}(gq,qq)));return Yq(qq.to)||Yq(qq.from)&&null!==Eq&&gq.includes(`
+           `)}(hb,bb)));return Bb(bb.to)||Bb(bb.from)&&null!==ub&&hb.includes(`
```

#### 1318. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15607` → after: `L15607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15607) · [Before (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15607)

```diff
-             Eq
+             ub
```

#### 1319. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15609` → after: `L15609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15609) · [Before (L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15609)

```diff
-           `)}case"deaths":case"place":{const{square:gq}=qq;return function(qq){return[...qq.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((qq=>({x:Number(qq[1]),z:Number(qq[2])})))}(Eq).some((qq=>function(qq,Eq){return qq.x>=Eq.x&&qq.x<Eq.x+yd&&qq.z>=E … [truncated]
+           `)}case"deaths":case"place":{const{square:hb}=bb;return function(bb){return[...bb.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((bb=>({x:Number(bb[1]),z:Number(bb[2])})))}(ub).some((bb=>function(bb,ub){return bb.x>=ub.x&&bb.x<ub.x+no&&bb.z>=u … [truncated]
```

#### 1320. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15611` → after: `L15611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15611) · [Before (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15611)

```diff
-             Yq
+             Bb
```

#### 1321. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15615` → after: `L15615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15615) · [Before (L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15615)

```diff
-             Yq
+             Bb
```

#### 1322. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15619` → after: `L15619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15619) · [Before (L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15619)

```diff
-             Yq
+             Bb
```

#### 1323. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15623` → after: `L15623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15623) · [Before (L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15623)

```diff
-             Yq
+             Bb
```

#### 1324. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15627` → after: `L15627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15627) · [Before (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15627)

```diff
-             qq
+             bb
```

#### 1325. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15629` → after: `L15629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15629) · [Before (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15629)

```diff
-           `)))}}}function Ny(qq,Eq,gq){if("young"===gq){var Yq;const gq=[qq.reduce(((qq,Eq)=>"unseen"!==Eq.kind&&(null===qq||Eq.score>qq.score)?Eq:qq),null),null!==(Yq=qq.find((qq=>"unseen"===qq.kind)))&&void 0!==Yq?Yq:null].find((qq=>null!==qq&&!Wy(qq,Eq)));return void 0===gq||n … [truncated]
+           `)))}}}function Zd(bb,ub,hb){if("young"===hb){var Bb;const hb=[bb.reduce(((bb,ub)=>"unseen"!==ub.kind&&(null===bb||ub.score>bb.score)?ub:bb),null),null!==(Bb=bb.find((bb=>"unseen"===bb.kind)))&&void 0!==Bb?Bb:null].find((bb=>null!==bb&&!wd(bb,ub)));return void 0===hb||n … [truncated]
```

#### 1326. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15631` → after: `L15631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15631) · [Before (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15631)

```diff
-             qq
+             bb
```

#### 1327. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15634` → after: `L15634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15634) · [Before (L15634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15634)

```diff
-             Yq[2]
+             Bb[2]
```

#### 1328. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15638` → after: `L15638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15638) · [Before (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15638)

```diff
-             qq
+             bb
```

#### 1329. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15641` → after: `L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15641) · [Before (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15641)

```diff
-             Eq
+             ub
```

#### 1330. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15645` → after: `L15645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15645) · [Before (L15645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15645)

```diff
-             qq.x
+             bb.x
```

#### 1331. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15648` → after: `L15648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15648) · [Before (L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15648)

```diff
-             qq.x + gq
+             bb.x + hb
```

#### 1332. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15650` → after: `L15650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15650) · [Before (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15650)

```diff
-             qq.z
+             bb.z
```

#### 1333. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15653` → after: `L15653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15653) · [Before (L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15653)

```diff
-             qq.z + gq
+             bb.z + hb
```

#### 1334. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15656` → after: `L15656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15656) · [Before (L15656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15656)

```diff
-             Eq ? ` (height y ${qq.y})` : ""
+             ub ? ` (height y ${bb.y})` : ""
```

#### 1335. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15660` → after: `L15660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15660) · [Before (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15660)

```diff
-             qq.x + Eq
+             bb.x + ub
```

#### 1336. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15662` → after: `L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15662) · [Before (L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15662)

```diff
-             qq.z + Eq
+             bb.z + ub
```

#### 1337. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15666` → after: `L15666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15666) · [Before (L15666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15666)

```diff
-             Eq("deaths")
+             ub("deaths")
```

#### 1338. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15668` → after: `L15668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15668) · [Before (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15668)

```diff
-           `];const gq=qq.indexOf(": "),Yq=-1===gq?null:function(qq){const Eq=qq.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((qq=>""!==qq));return Eq.length>0&&Eq.length<=3&&Eq.every((qq=>/^[A-Za-z]+$/.test(qq)&&!/^[a-z]{3,}ed$/i.test(qq)&&!Hy.test(qq.toLowerCase()) … [truncated]
+           `];const hb=bb.indexOf(": "),Bb=-1===hb?null:function(bb){const ub=bb.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((bb=>""!==bb));return ub.length>0&&ub.length<=3&&ub.every((bb=>/^[A-Za-z]+$/.test(bb)&&!/^[a-z]{3,}ed$/i.test(bb)&&!ld.test(bb.toLowerCase()) … [truncated]
```

#### 1339. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15670` → after: `L15670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15670) · [Before (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15670)

```diff
-             Eq("deaths logged as")
+             ub("deaths logged as")
```

#### 1340. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15674` → after: `L15674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15674) · [Before (L15674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15674)

```diff
-             Yq
+             Bb
```

#### 1341. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15677` → after: `L15677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15677) · [Before (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15677)

```diff
-             Eq("deaths")
+             ub("deaths")
```

#### 1342. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15681` → after: `L15681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15681) · [Before (L15681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15681)

```diff
-             qq.to
+             bb.to
```

#### 1343. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15684` → after: `L15684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15684) · [Before (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15684)

```diff
-             gq("or later")
+             hb("or later")
```

#### 1344. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15688` → after: `L15688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15688) · [Before (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15688)

```diff
-             (0, Bm.e)(qq.group)
+             (0, HU.b)(bb.group)
```

#### 1345. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15690` → after: `L15690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15690) · [Before (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15690)

```diff
-             qq.from
+             bb.from
```

#### 1346. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15693` → after: `L15693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15693) · [Before (L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15693)

```diff
-             qq.to
+             bb.to
```

#### 1347. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15697` → after: `L15697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15697) · [Before (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15697)

```diff
-             (0, Bm.p)(qq.lost)
+             (0, HU.l)(bb.lost)
```

#### 1348. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15700` → after: `L15700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15700) · [Before (L15700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15700)

```diff
-             gq("of the")
+             hb("of the")
```

#### 1349. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15703` → after: `L15703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15703) · [Before (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15703)

```diff
-             (0, Bm.p)(qq.fromPlayers)
+             (0, HU.l)(bb.fromPlayers)
```

#### 1350. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15706` → after: `L15706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15706) · [Before (L15706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15706)

```diff
-             gq("players who reached")
+             hb("players who reached")
```

#### 1351. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15709` → after: `L15709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15709) · [Before (L15709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15709)

```diff
-             qq.from
+             bb.from
```

#### 1352. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15712` → after: `L15712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15712) · [Before (L15712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15712)

```diff
-             gq("didn't reach")
+             hb("didn't reach")
```

#### 1353. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15715` → after: `L15715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15715) · [Before (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15715)

```diff
-             lq
+             Ob
```

#### 1354. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15717` → after: `L15717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15717) · [Before (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15717)

```diff
-             Aq
+             Yb
```

#### 1355. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15720` → after: `L15720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15720) · [Before (L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15720)

```diff
-             Oq
+             Gb
```

#### 1356. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15723` → after: `L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15723) · [Before (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15723)

```diff
-             gq("in 100 players who get to")
+             hb("in 100 players who get to")
```

#### 1357. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15726` → after: `L15726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15726) · [Before (L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15726)

```diff
-             qq.from
+             bb.from
```

#### 1358. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15729` → after: `L15729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15729) · [Before (L15729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15729)

```diff
-             gq("don't get to")
+             hb("don't get to")
```

#### 1359. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15732` → after: `L15732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15732) · [Before (L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15732)

```diff
-             lq
+             Ob
```

#### 1360. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15736` → after: `L15736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15736) · [Before (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15736)

```diff
-             Oq
+             Gb
```

#### 1361. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15739` → after: `L15739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15739) · [Before (L15739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15739)

```diff
-             gq("of every 100 players who reach")
+             hb("of every 100 players who reach")
```

#### 1362. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15742` → after: `L15742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15742) · [Before (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15742)

```diff
-             qq.from
+             bb.from
```

#### 1363. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15744` → after: `L15744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15744) · [Before (L15744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15744)

```diff
-             (0, Bm.p)(qq.fromPlayers)
+             (0, HU.l)(bb.fromPlayers)
```

#### 1364. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15746` → after: `L15746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15746) · [Before (L15746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15746)

```diff
-             gq("don't reach")
+             hb("don't reach")
```

#### 1365. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15749` → after: `L15749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15749) · [Before (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15749)

```diff
-             lq
+             Ob
```

#### 1366. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15751` → after: `L15751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15751) · [Before (L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15751)

```diff
-             (0, Bm.p)(qq.fromPlayers - qq.lost)
+             (0, HU.l)(bb.fromPlayers - bb.lost)
```

#### 1367. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15753` → after: `L15753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15753) · [Before (L15753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15753)

```diff
-             Aq
+             Yb
```

#### 1368. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15757` → after: `L15757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15757) · [Before (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15757)

```diff
-             Oq
+             Gb
```

#### 1369. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15760` → after: `L15760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15760) · [Before (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15760)

```diff
-             gq("of every 100 players who reach")
+             hb("of every 100 players who reach")
```

#### 1370. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15763` → after: `L15763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15763) · [Before (L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15763)

```diff
-             qq.from
+             bb.from
```

#### 1371. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15766` → after: `L15766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15766) · [Before (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15766)

```diff
-             gq("don't reach")
+             hb("don't reach")
```

#### 1372. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15769` → after: `L15769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15769) · [Before (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15769)

```diff
-             lq
+             Ob
```

#### 1373. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15771` → after: `L15771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15771) · [Before (L15771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15771)

```diff
-               (0, Bm.p)(qq.lost)
+               (0, HU.l)(bb.lost)
```

#### 1374. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15774` → after: `L15774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15774) · [Before (L15774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15774)

```diff
-               gq("of")
+               hb("of")
```

#### 1375. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15777` → after: `L15777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15777) · [Before (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15777)

```diff
-               (0, Bm.p)(qq.fromPlayers)
+               (0, HU.l)(bb.fromPlayers)
```

#### 1376. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15779` → after: `L15779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15779) · [Before (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15779)

```diff
-               Aq
+               Yb
```

#### 1377. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15782` → after: `L15782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15782) · [Before (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15782)

```diff
-             gq("in")
+             hb("in")
```

#### 1378. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15785` → after: `L15785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15785) · [Before (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15785)

```diff
-             qq.category
+             bb.category
```

#### 1379. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15789` → after: `L15789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15789) · [Before (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15789)

```diff
-             (0, Bm.p)(qq.count)
+             (0, HU.l)(bb.count)
```

#### 1380. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15792` → after: `L15792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15792) · [Before (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15792)

```diff
-             gq("of")
+             hb("of")
```

#### 1381. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15795` → after: `L15795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15795) · [Before (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15795)

```diff
-             (0, Bm.p)(qq.total)
+             (0, HU.l)(bb.total)
```

#### 1382. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15797` → after: `L15797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15797) · [Before (L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15797)

```diff
-           `:null,mq=ay(qq.count,qq.total),xq=oy(qq.death,gq);return Eq?{label:2*qq.count>qq.total?gq("Most deaths"):gq("Many deaths"),parts:[null!==Oq&&void 0!==Oq?Oq:`
+           `:null,Ub=Xd(bb.count,bb.total),Lb=Kd(bb.death,hb);return ub?{label:2*bb.count>bb.total?hb("Most deaths"):hb("Many deaths"),parts:[null!==Gb&&void 0!==Gb?Gb:`
```

#### 1383. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15799` → after: `L15799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15799) · [Before (L15799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15799)

```diff
-             mq
+             Ub
```

#### 1384. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15802` → after: `L15802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15802) · [Before (L15802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15802)

```diff
-             gq("in 100")
+             hb("in 100")
```

#### 1385. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15806` → after: `L15806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15806) · [Before (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15806)

```diff
-             gq("happen near")
+             hb("happen near")
```

#### 1386. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15809` → after: `L15809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15809) · [Before (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15809)

```diff
-             jy(qq.square)
+             Ad(bb.square)
```

#### 1387. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15812` → after: `L15812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15812) · [Before (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15812)

```diff
-             lq
+             Ob
```

#### 1388. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15816` → after: `L15816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15816) · [Before (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15816)

```diff
-             gq("Death hotspot")
+             hb("Death hotspot")
```

#### 1389. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15819` → after: `L15819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15819) · [Before (L15819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15819)

```diff
-             lq
+             Ob
```

#### 1390. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15821` → after: `L15821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15821) · [Before (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15821)

```diff
-           `,parts:[null!==Oq&&void 0!==Oq?Oq:`
+           `,parts:[null!==Gb&&void 0!==Gb?Gb:`
```

#### 1391. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15823` → after: `L15823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15823) · [Before (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15823)

```diff
-             mq
+             Ub
```

#### 1392. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15826` → after: `L15826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15826) · [Before (L15826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15826)

```diff
-             gq("of every 100")
+             hb("of every 100")
```

#### 1393. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15830` → after: `L15830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15830) · [Before (L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15830)

```diff
-             lq
+             Ob
```

#### 1394. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15833` → after: `L15833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15833) · [Before (L15833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15833)

```diff
-             gq("in the past week happened at")
+             hb("in the past week happened at")
```

#### 1395. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15836` → after: `L15836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15836) · [Before (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15836)

```diff
-             dy(qq.square)
+             od(bb.square)
```

#### 1396. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15840` → after: `L15840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15840) · [Before (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15840)

```diff
-             gq("in")
+             hb("in")
```

#### 1397. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15843` → after: `L15843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15843) · [Before (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15843)

```diff
-             qq.category
+             bb.category
```

#### 1398. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15847` → after: `L15847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15847) · [Before (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15847)

```diff
-             gq("near")
+             hb("near")
```

#### 1399. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15850` → after: `L15850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15850) · [Before (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15850)

```diff
-             jy(qq.square)
+             Ad(bb.square)
```

#### 1400. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15853` → after: `L15853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15853) · [Before (L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15853)

```diff
-             Yq
+             Bb
```

#### 1401. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15855` → after: `L15855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15855) · [Before (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15855)

```diff
-             lq
+             Ob
```

#### 1402. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15858` → after: `L15858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15858) · [Before (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15858)

```diff
-             gq("in 100 minutes of play")
+             hb("in 100 minutes of play")
```

#### 1403. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15862` → after: `L15862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15862) · [Before (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15862)

```diff
-             dy(Eq, !1)
+             od(ub, !1)
```

#### 1404. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15864` → after: `L15864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15864) · [Before (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15864)

```diff
-               ay(Yq, 1)
+               Xd(Bb, 1)
```

#### 1405. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15867` → after: `L15867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15867) · [Before (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15867)

```diff
-               gq("of 100")
+               hb("of 100")
```

#### 1406. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15870` → after: `L15870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15870) · [Before (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15870)

```diff
-             gq("Busiest place")
+             hb("Busiest place")
```

#### 1407. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15873` → after: `L15873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15873) · [Before (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15873)

```diff
-             Yq
+             Bb
```

#### 1408. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15877` → after: `L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15877) · [Before (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15877)

```diff
-             dy(qq.square)
+             od(bb.square)
```

#### 1409. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15879` → after: `L15879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15879) · [Before (L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15879)

```diff
-             gq("with")
+             hb("with")
```

#### 1410. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15882` → after: `L15882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15882) · [Before (L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15882)

```diff
-             lq
+             Ob
```

#### 1411. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15885` → after: `L15885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15885) · [Before (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15885)

```diff
-             gq("of every 100 minutes played")
+             hb("of every 100 minutes played")
```

#### 1412. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15888` → after: `L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15888) · [Before (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15888)

```diff
-             0 === Oq.length ? "" : `; ${gq("next busiest")}: ${Oq.join(", ")}`
+             0 === Gb.length ? "" : `; ${hb("next busiest")}: ${Gb.join(", ")}`
```

#### 1413. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15892` → after: `L15892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15892) · [Before (L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15892)

```diff
-             Yq
+             Bb
```

#### 1414. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15894` → after: `L15894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15894) · [Before (L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15894)

```diff
-             (0, Bm.p)(lq)
+             (0, HU.l)(Ob)
```

#### 1415. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15897` → after: `L15897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15897) · [Before (L15897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15897)

```diff
-             0 === Eq ? ` ${gq("players")}` : ""
+             0 === ub ? ` ${hb("players")}` : ""
```

#### 1416. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15901` → after: `L15901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15901) · [Before (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15901)

```diff
-             gq("Players per")
+             hb("Players per")
```

#### 1417. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15904` → after: `L15904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15904) · [Before (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15904)

```diff
-             qq.eventType
+             bb.eventType
```

#### 1418. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15907` → after: `L15907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15907) · [Before (L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15907)

```diff
-             gq("event")
+             hb("event")
```

#### 1419. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15911` → after: `L15911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15911) · [Before (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15911)

```diff
-             gq("Players at each")
+             hb("Players at each")
```

#### 1420. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15914` → after: `L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15914) · [Before (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15914)

```diff
-             qq.eventType
+             bb.eventType
```

#### 1421. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15917` → after: `L15917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15917) · [Before (L15917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15917)

```diff
-             Vy(Oq.from, Oq.to)
+             pd(Gb.from, Gb.to)
```

#### 1422. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15920` → after: `L15920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15920) · [Before (L15920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15920)

```diff
-             Oq.isOrLater ? ` ${gq("or later")}` : ""
+             Gb.isOrLater ? ` ${hb("or later")}` : ""
```

#### 1423. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15923` → after: `L15923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15923) · [Before (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15923)

```diff
-             gq("loses the most")
+             hb("loses the most")
```

#### 1424. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15925` → after: `L15925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15925) · [Before (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15925)

```diff
-             (0, Bm.p)(Oq.fromPlayers)
+             (0, HU.l)(Gb.fromPlayers)
```

#### 1425. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15928` → after: `L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15928) · [Before (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15928)

```diff
-             (0, Bm.p)(Oq.reached)
+             (0, HU.l)(Gb.reached)
```

#### 1426. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15931` → after: `L15931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15931) · [Before (L15931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15931)

```diff
-             gq("players")
+             hb("players")
```

#### 1427. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15935` → after: `L15935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15935) · [Before (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15935)

```diff
-             lq
+             Ob
```

#### 1428. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15937` → after: `L15937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15937) · [Before (L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15937)

```diff
-             Eq.join(", ")
+             ub.join(", ")
```

#### 1429. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15940` → after: `L15940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15940) · [Before (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15940)

```diff
-             qq.hasMore ? ", \u2026" : ""
+             bb.hasMore ? ", \u2026" : ""
```

#### 1430. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15943` → after: `L15943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15943) · [Before (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15943)

```diff
-             mq
+             Ub
```

#### 1431. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15947` → after: `L15947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15947) · [Before (L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15947)

```diff
-             lq
+             Ob
```

#### 1432. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15950` → after: `L15950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15950) · [Before (L15950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15950)

```diff
-             gq("This line, first inside")
+             hb("This line, first inside")
```

#### 1433. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15953` → after: `L15953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15953) · [Before (L15953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15953)

```diff
-             gq("would log it")
+             hb("would log it")
```

#### 1434. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15956` → after: `L15956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15956) · [Before (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15956)

```diff
-             gq("between minute")
+             hb("between minute")
```

#### 1435. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15959` → after: `L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15959) · [Before (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15959)

```diff
-             qq.minute - 1
+             bb.minute - 1
```

#### 1436. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15962` → after: `L15962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15962) · [Before (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15962)

```diff
-             gq("and")
+             hb("and")
```

#### 1437. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15965` → after: `L15965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15965) · [Before (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15965)

```diff
-             qq.minute
+             bb.minute
```

#### 1438. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15969` → after: `L15969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15969) · [Before (L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15969)

```diff
-             gq("Minute")
+             hb("Minute")
```

#### 1439. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15972` → after: `L15972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15972) · [Before (L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15972)

```diff
-             qq.minute
+             bb.minute
```

#### 1440. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15976` → after: `L15976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15976) · [Before (L15976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15976)

```diff
-             qq.ended
+             bb.ended
```

#### 1441. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15979` → after: `L15979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15979) · [Before (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15979)

```diff
-             gq("in 100 plays end")
+             hb("in 100 plays end")
```

#### 1442. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15982` → after: `L15982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15982) · [Before (L15982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15982)

```diff
-             Yq
+             Bb
```

#### 1443. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15984` → after: `L15984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15984) · [Before (L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15984)

```diff
-             gq("most games")
+             hb("most games")
```

#### 1444. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15986` → after: `L15986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15986) · [Before (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15986)

```diff
-             qq.typicalEnded
+             bb.typicalEnded
```

#### 1445. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15989` → after: `L15989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15989) · [Before (L15989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15989)

```diff
-             qq.ended
+             bb.ended
```

#### 1446. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15992` → after: `L15992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15992) · [Before (L15992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15992)

```diff
-             gq("of every 100 sessions end")
+             hb("of every 100 sessions end")
```

#### 1447. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15995` → after: `L15995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15995) · [Before (L15995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15995)

```diff
-             Yq
+             Bb
```

#### 1448. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15998` → after: `L15998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L15998) · [Before (L15998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L15998)

```diff
-             gq("in a typical Bloxd game")
+             hb("in a typical Bloxd game")
```

#### 1449. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16000` → after: `L16000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L16000) · [Before (L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L16000)

```diff
-             qq.typicalEnded
+             bb.typicalEnded
```

#### 1450. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16003` → after: `L16003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L16003) · [Before (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L16003)

```diff
-             gq("do")
+             hb("do")
```

#### 1451. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16007` → after: `L16007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L16007) · [Before (L16007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L16007)

```diff
-             gq("Only")
+             hb("Only")
```

#### 1452. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16010` → after: `L16010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L16010) · [Before (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L16010)

```diff
-             (0, Bm.p)(qq.fewPlayers)
+             (0, HU.l)(bb.fewPlayers)
```

#### 1453. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16013` → after: `L16013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L16013) · [Before (L16013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L16013)

```diff
-             gq("players this week, so this is a hint.")
+             hb("players this week, so this is a hint.")
```

#### 1454. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16017` → after: `L16017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L16017) · [Before (L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L16017)

```diff
-             gq("Only")
+             hb("Only")
```

#### 1455. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16020` → after: `L16020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L16020) · [Before (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L16020)

```diff
-             (0, Bm.p)(qq.fewPlayers)
+             (0, HU.l)(bb.fewPlayers)
```

#### 1456. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16023` → after: `L16023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L16023) · [Before (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L16023)

```diff
-             gq("players this week, so this is a hint:")
+             hb("players this week, so this is a hint:")
```

#### 1457. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16027` → after: `L16027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L16027) · [Before (L16027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L16027)

```diff
-             mq
+             Ub
```

#### 1458. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16030` → after: `L16030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/103.js#L16030) · [Before (L16030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/103.js#L16030)

```diff
-             lq
+             Ob
```
