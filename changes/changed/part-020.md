# Changed — Bundle Modifications Report (Part 020 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `20 / 154` (**412** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/117.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/117.js` (2876 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41)

#### 2184. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23468-L23475` → after: `L23468-L23475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23468-L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23468-L23475) · [Before (L23468-L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23468-L23475)

```diff
- function Bj(HH, BH) {
-   const LH = HH.split("\n"),
-     AH = [],
-     rH = [];
-   let SH = !1;
-   for (let hH = 0; hH < LH.length;) {
-     if (fE.test(LH[hH]) && (SH = !SH), SH || !Wx.test(LH[hH])) {
-       AH.push(LH[hH]), hH++;
+ function JE(BB, OB) {
+   const GB = BB.split("\n"),
+     YB = [],
+     DB = [];
+   let QB = !1;
+   for (let oB = 0; oB < GB.length;) {
+     if (IM.test(GB[oB]) && (QB = !QB), QB || !RR.test(GB[oB])) {
+       YB.push(GB[oB]), oB++;
```

#### 2185. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23479-L23483` → after: `L23479-L23483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23479-L23483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23479-L23483) · [Before (L23479-L23483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23479-L23483)

```diff
-       end: HH,
-       textEnd: tH
-     } = bx(LH, hH), zH = LH.slice(hH, tH).join("\n"), CH = Hj(zH, BH);
-     if (!(CH.some((HH => HH.isAboutPlayers)) && CH.every((HH => !HH.isChecked)))) {
-       AH.push(...LH.slice(hH, tH)), hH = tH;
+       end: BB,
+       textEnd: jB
+     } = dR(GB, oB), yB = GB.slice(oB, jB).join("\n"), JB = yE(yB, OB);
+     if (!(JB.some((BB => BB.isAboutPlayers)) && JB.every((BB => !BB.isChecked)))) {
+       YB.push(...GB.slice(oB, jB)), oB = jB;
```

#### 2186. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23486-L23488` → after: `L23486-L23488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23486-L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23486-L23488) · [Before (L23486-L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23486-L23488)

```diff
-     rH.push(zH);
-     const EH = /^ */.exec(LH[hH])[0].length;
-     for (hH = HH; hH < LH.length && Wx.test(LH[hH]) && /^ */.exec(LH[hH])[0].length > EH;) hH = bx(LH, hH).end
+     DB.push(yB);
+     const MB = /^ */.exec(GB[oB])[0].length;
+     for (oB = BB; oB < GB.length && RR.test(GB[oB]) && /^ */.exec(GB[oB])[0].length > MB;) oB = dR(GB, oB).end
```

#### 2187. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23491-L23492` → after: `L23491-L23492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23491-L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23491-L23492) · [Before (L23491-L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23491-L23492)

```diff
-     markdown: AH.join("\n"),
-     dropped: rH
+     markdown: YB.join("\n"),
+     dropped: DB
```

#### 2188. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23495-L23498` → after: `L23495-L23498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23495-L23498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23495-L23498) · [Before (L23495-L23498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23495-L23498)

```diff
- const Lj = "(?:(?:final|big|last|giant|huge|scary|tough|main)\\s+)?",
-   Aj = "(?:for|against|about|before|beat|beating|defeat|defeating|fight|fighting|face|facing|reach|reaching|survive|surviving|kill|killing|warn|until|by|to|vs|versus|past)",
-   rj = /^(?:\s*(?:[.,;:!?)]|\u2014|\u2013|\s-\s|$)|\s+(?:and|or|but|so|to|with|before|by|is|are|was|has|comes|arrives|appears|spawns|gets|can|will|would|who|that|which|when|because|if|without|alone|first|faster)\b)/i,
-   Sj = 3;
+ const ME = "(?:(?:final|big|last|giant|huge|scary|tough|main)\\s+)?",
+   PE = "(?:for|against|about|before|beat|beating|defeat|defeating|fight|fighting|face|facing|reach|reaching|survive|surviving|kill|killing|warn|until|by|to|vs|versus|past)",
+   zE = /^(?:\s*(?:[.,;:!?)]|\u2014|\u2013|\s-\s|$)|\s+(?:and|or|but|so|to|with|before|by|is|are|was|has|comes|arrives|appears|spawns|gets|can|will|would|who|that|which|when|because|if|without|alone|first|faster)\b)/i,
+   lE = 3;
```

#### 2189. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23500-L23501` → after: `L23500-L23501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23500-L23501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23500-L23501) · [Before (L23500-L23501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23500-L23501)

```diff
- function hj(HH) {
-   return `(?:\\b${HH}s?(?:_start)?[\\s:#]*\\d+\\b|\\b\\d+\\s+${HH}s?\\b)`
+ function pE(BB) {
+   return `(?:\\b${BB}s?(?:_start)?[\\s:#]*\\d+\\b|\\b\\d+\\s+${BB}s?\\b)`
```

#### 2190. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23504-L23506` → after: `L23504-L23506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23504-L23506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23504-L23506) · [Before (L23504-L23506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23504-L23506)

```diff
- function tj(HH) {
-   const BH = [];
-   for (const LH of HH.matchAll(/`[^`]*`|\[\[[^\]]*\]\]|\[[^\]]*\]\([^)]*\)|"[^"\n]*"|\u201c[^\u201d\n]*\u201d/g)) BH.push([LH.index, LH.index + LH[0].length]);
+ function qE(BB) {
+   const OB = [];
+   for (const GB of BB.matchAll(/`[^`]*`|\[\[[^\]]*\]\]|\[[^\]]*\]\([^)]*\)|"[^"\n]*"|\u201c[^\u201d\n]*\u201d/g)) OB.push([GB.index, GB.index + GB[0].length]);
```

#### 2191. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23523` → after: `L23523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23523) · [Before (L23523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23523)

```diff
-     for (const BH of (0, jS.c)(HH[rH], LH, AH)) {
+     for (const OB of (0, EQ.f)(BB[DB], GB, YB)) {
```

#### 2192. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23539` → after: `L23539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23539) · [Before (L23539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23539)

```diff
-   return "final" === HH ? "final\\s+wave" : (0, RS.e)(HH)
+   return "final" === BB ? "final\\s+wave" : (0, wQ.h)(BB)
```

#### 2193. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23546-L23548` → after: `L23546-L23548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23546-L23548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23546-L23548) · [Before (L23546-L23548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23546-L23548)

```diff
-     hH = `[\\w'\u2019-]+${SH}`,
-     tH = `(?:['\u2019]s)?${SH}(?:${hH}){0,${Sj}}?`,
-     zH = new RegExp(`(?:^|[^\\w-])${AH}(?![\\w-])${tH}${rH}|${rH}${tH}(?:${hH})?${AH}(?![\\w-])`, "i");
+     oB = `[\\w'\u2019-]+${QB}`,
+     jB = `(?:['\u2019]s)?${QB}(?:${oB}){0,${lE}}?`,
+     yB = new RegExp(`(?:^|[^\\w-])${YB}(?![\\w-])${jB}${DB}|${DB}${jB}(?:${oB})?${YB}(?![\\w-])`, "i");
```

#### 2194. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23553-L23554` → after: `L23553-L23554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23553-L23554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23553-L23554) · [Before (L23553-L23554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23553-L23554)

```diff
-   const LH = new RegExp(`\\b(${BH})\\s+\\d+`, "i").exec(HH);
-   return null === LH ? BH : LH[1]
+   const GB = new RegExp(`\\b(${OB})\\s+\\d+`, "i").exec(BB);
+   return null === GB ? OB : GB[1]
```

#### 2195. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23559` → after: `L23559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23559) · [Before (L23559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23559)

```diff
-   return (null !== (BH = null === HH || void 0 === HH ? void 0 : HH.ordinals) && void 0 !== BH ? BH : []).filter((HH => /^[a-z]{3,20}$/.test(HH.thing)))
+   return (null !== (OB = null === BB || void 0 === BB ? void 0 : BB.ordinals) && void 0 !== OB ? OB : []).filter((BB => /^[a-z]{3,20}$/.test(BB.thing)))
```

#### 2196. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23577` → after: `L23577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23577) · [Before (L23577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23577)

```diff
-     const BH = `${zH.unit}\n${zH.n}`;
+     const OB = `${yB.unit}\n${yB.n}`;
```

#### 2197. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23580-L23582` → after: `L23580-L23582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23580-L23582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23580-L23582) · [Before (L23580-L23582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23580-L23582)

```diff
-       CH = new RegExp(`(?:^|[^\\w-])${Aj}\\s+(?:the|your)\\s+${Lj}$`, "i"),
-       EH = new RegExp(`${AH}(?![\\w-])`, "gi"),
-       XH = "final" === zH.thing ? ` (${Gj(HH,zH.unit)} ${zH.n})` : ` ${"round"===zH.unit?"in":"on"} ${Gj(HH,zH.unit)} ${zH.n}`,
+       JB = new RegExp(`(?:^|[^\\w-])${PE}\\s+(?:the|your)\\s+${ME}$`, "i"),
+       MB = new RegExp(`${YB}(?![\\w-])`, "gi"),
+       PB = "final" === yB.thing ? ` (${AE(BB,yB.unit)} ${yB.n})` : ` ${"round"===yB.unit?"in":"on"} ${AE(BB,yB.unit)} ${yB.n}`,
```

#### 2198. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23584-L23585` → after: `L23584-L23585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23584-L23585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23584-L23585) · [Before (L23584-L23585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23584-L23585)

```diff
-       YH = new RegExp(`(?:^|[^\\d.,])${zH.n}(?!\\d|[.,]\\d)`),
-       uH = Cj(rH, SH, EH, (0, jS.i)("\\w-"));
+       lB = new RegExp(`(?:^|[^\\d.,])${yB.n}(?!\\d|[.,]\\d)`),
+       pB = NE(DB, QB, MB, (0, EQ.n)("\\w-"));
```

#### 2199. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23592` → after: `L23592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23592) · [Before (L23592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23592)

```diff
-     LH.has(QH) || !CH.test(xH.slice(0, WH)) || /^(?:['\u2019]s\b|-)/.test(xH.slice(vH)) || YH.test(xH.slice(PH, TH)) || GH.test(xH.slice(vH, TH)) || !rj.test(xH.slice(vH)) || (rH[QH] = `${xH.slice(0,vH)}${XH}${xH.slice(vH)}`, hH.push({
+     GB.has(qB) || !JB.test(RB.slice(0, ZB)) || /^(?:['\u2019]s\b|-)/.test(RB.slice(WB)) || lB.test(RB.slice(AB, VB)) || zB.test(RB.slice(WB, VB)) || !zE.test(RB.slice(WB)) || (DB[qB] = `${RB.slice(0,WB)}${PB}${RB.slice(WB)}`, oB.push({
```

#### 2200. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23594` → after: `L23594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23594) · [Before (L23594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23594)

```diff
-       text: `${xH.slice(WH,vH)}${XH}`
+       text: `${RB.slice(ZB,WB)}${PB}`
```

#### 2201. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23598` → after: `L23598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23598) · [Before (L23598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23598)

```diff
-     markdown: 0 === hH.length ? HH : rH.join("\n"),
+     markdown: 0 === oB.length ? BB : DB.join("\n"),
```

#### 2202. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23637` → after: `L23637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23637) · [Before (L23637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23637)

```diff
-     sections: HH.sections.map(((HH, BH) => EH[BH + 1] === HH.markdown ? HH : {
+     sections: BB.sections.map(((BB, OB) => MB[OB + 1] === BB.markdown ? BB : {
```

#### 2203. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23647` → after: `L23647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23647) · [Before (L23647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23647)

```diff
-     rH = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.ordinals) && void 0 !== LH ? LH : [],
+     DB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.ordinals) && void 0 !== GB ? GB : [],
```

#### 2204. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23653` → after: `L23653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23653) · [Before (L23653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23653)

```diff
-       return `${BH}\n${LH}`
+       return `${OB}\n${GB}`
```

#### 2205. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23667` → after: `L23667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23667) · [Before (L23667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23667)

```diff
-     })).filter((HH => "final" !== HH)), EH = CH.includes("boss") ? "boss" : null !== (hH = CH[0]) && void 0 !== hH ? hH : null;
+     })).filter((BB => "final" !== BB)), MB = JB.includes("boss") ? "boss" : null !== (oB = JB[0]) && void 0 !== oB ? oB : null;
```

#### 2206. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23676` → after: `L23676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23676) · [Before (L23676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23676)

```diff
-       const LH = zH ? `${BH("your last")} ${HH}, ${BH("with the")} ${EH}` : `${BH("your")} ${EH} ${HH}`;
+       const GB = yB ? `${OB("your last")} ${BB}, ${OB("with the")} ${MB}` : `${OB("your")} ${MB} ${BB}`;
```

#### 2207. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23682-L23683` → after: `L23682-L23683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23682-L23683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23682-L23683) · [Before (L23682-L23683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23682-L23683)

```diff
-       paren: `${BH("your last")} ${HH}`,
-       inline: `${BH("your last")} ${HH}`
+       paren: `${OB("your last")} ${BB}`,
+       inline: `${OB("your last")} ${BB}`
```

#### 2208. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23691-L23692` → after: `L23691-L23692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23691-L23692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23691-L23692) · [Before (L23691-L23692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23691-L23692)

```diff
-   return 0 === BH.size ? [...HH] : HH.map((HH => "string" !== typeof HH ? HH : HH.replace(/\b(wave|level|round|stage)\s+(\d+)\b(?![\d.,]\d)(\s*\(|\s*\u2192)?/gi, ((HH, AH, rH, SH) => {
-     const hH = `${AH.toLowerCase()}\n${rH}`,
+   return 0 === OB.size ? [...BB] : BB.map((BB => "string" !== typeof BB ? BB : BB.replace(/\b(wave|level|round|stage)\s+(\d+)\b(?![\d.,]\d)(\s*\(|\s*\u2192)?/gi, ((BB, YB, DB, QB) => {
+     const oB = `${YB.toLowerCase()}\n${DB}`,
```

#### 2209. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23694` → after: `L23694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23694) · [Before (L23694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23694)

```diff
-     return void 0 === tH || LH.has(hH) || null !== SH && void 0 !== SH && SH.includes("\u2192") ? HH : (LH.add(hH), void 0 === SH ? `${AH} ${rH} (${tH.paren})` : `${AH} ${rH}, ${tH.inline}${SH}`)
+     return void 0 === jB || GB.has(oB) || null !== QB && void 0 !== QB && QB.includes("\u2192") ? BB : (GB.add(oB), void 0 === QB ? `${YB} ${DB} (${jB.paren})` : `${YB} ${DB}, ${jB.inline}${QB}`)
```

#### 2210. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23729` → after: `L23729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23729) · [Before (L23729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23729)

```diff
-     keep: (0, jS.g)(/\b(?:iron|items?|mobs?|blocks?|ores?|loot|chests?|resources?|gold)\s+$/i),
+     keep: (0, EQ.j)(/\b(?:iron|items?|mobs?|blocks?|ores?|loot|chests?|resources?|gold)\s+$/i),
```

#### 2211. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23789-L23790` → after: `L23789-L23790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23789-L23790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23789-L23790) · [Before (L23789-L23790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23789-L23790)

```diff
-   const LH = (0, RS.e)(BH);
-   return new RegExp(`\\b(?:from|is|currently|now)\\s+${LH}(?![\\d.,]*\\d)|(?:^|[^\\d.,])${LH}(?:\\s*(?:seconds?|secs?|ms|milliseconds?|coins|gold))?\\s*(?:to|->|\u2192)\\s*\\d`, "i").test(HH.replace(/(\d),(?=\d{3}\b)/g, "$1"))
+   const GB = (0, wQ.h)(OB);
+   return new RegExp(`\\b(?:from|is|currently|now)\\s+${GB}(?![\\d.,]*\\d)|(?:^|[^\\d.,])${GB}(?:\\s*(?:seconds?|secs?|ms|milliseconds?|coins|gold))?\\s*(?:to|->|\u2192)\\s*\\d`, "i").test(BB.replace(/(\d),(?=\d{3}\b)/g, "$1"))
```

#### 2212. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23795` → after: `L23795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23795) · [Before (L23795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23795)

```diff
-   return new RegExp(`(?:^|\\W)${(0,RS.e)(BH)}(?![\\w])`).test(HH)
+   return new RegExp(`(?:^|\\W)${(0,wQ.h)(OB)}(?![\\w])`).test(BB)
```

#### 2213. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23831` → after: `L23831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23831) · [Before (L23831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23831)

```diff
-     } = CH[0], GH = EH.split(".").pop(), YH = /(?:ms|millis?)$/i.test(GH) || /\*\s*1000$/.test(XH) ? Ce(/ms$/i.test(GH) ? GH : `${GH}_MS`, XH.trim()) : null, uH = null === YH ? null : /^[\d.]+/.exec(YH)[0];
+     } = JB[0], zB = MB.split(".").pop(), lB = /(?:ms|millis?)$/i.test(zB) || /\*\s*1000$/.test(PB) ? ZL(/ms$/i.test(zB) ? zB : `${zB}_MS`, PB.trim()) : null, pB = null === lB ? null : /^[\d.]+/.exec(lB)[0];
```

#### 2214. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23842` → after: `L23842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23842) · [Before (L23842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23842)

```diff
-         return `${HH} (\`${EH}${SH?"":` = ${XH.trim()}${null===YH?"":` // ${YH}`}`}\`)`
+         return `${BB} (\`${MB}${QB?"":` = ${PB.trim()}${null===lB?"":` // ${lB}`}`}\`)`
```

#### 2215. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23853` → after: `L23853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23853) · [Before (L23853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23853)

```diff
-     const AH = null !== (LH = HH.calls) && void 0 !== LH ? LH : null;
+     const YB = null !== (GB = BB.calls) && void 0 !== GB ? GB : null;
```

#### 2216. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23925` → after: `L23925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23925) · [Before (L23925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23925)

```diff
-       phrase: new RegExp(`\\b(?:the|your|their|a|an)\\s+(?:(?:free|starter|starting)\\s+)?${HH}\\b(?!\\s*-)`, "i"),
+       phrase: new RegExp(`\\b(?:the|your|their|a|an)\\s+(?:(?:free|starter|starting)\\s+)?${BB}\\b(?!\\s*-)`, "i"),
```

#### 2217. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23935` → after: `L23935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23935) · [Before (L23935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23935)

```diff
-         return [/^[A-Z]/.test(AH) ? `${CH[0].toUpperCase()}${CH.slice(1)}` : CH, ...rH, SH].join(" ")
+         return [/^[A-Z]/.test(YB) ? `${JB[0].toUpperCase()}${JB.slice(1)}` : JB, ...DB, QB].join(" ")
```

#### 2218. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23957` → after: `L23957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23957) · [Before (L23957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23957)

```diff
-       return [`\`${BH}\``, `${BH}:`, `"${BH}"`, `${BH} event`]
+       return [`\`${OB}\``, `${OB}:`, `"${OB}"`, `${OB} event`]
```

#### 2219. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23965` → after: `L23965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23965) · [Before (L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23965)

```diff
-     rewrite: HH => `${HH} (logged as \`${hH}\`)`
+     rewrite: BB => `${BB} (logged as \`${oB}\`)`
```

#### 2220. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23973` → after: `L23973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23973) · [Before (L23973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23973)

```diff
-     rewrite: HH => `${HH} (logged as \`${tH}\`)`
+     rewrite: BB => `${BB} (logged as \`${jB}\`)`
```

#### 2221. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23993` → after: `L23993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L23993) · [Before (L23993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L23993)

```diff
-         return BH.includes(AH) ? `${LH} (logged as \`${HH}: ${AH}\`)` : null
+         return OB.includes(YB) ? `${GB} (logged as \`${BB}: ${YB}\`)` : null
```

#### 2222. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24002` → after: `L24002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24002) · [Before (L24002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24002)

```diff
-   for (const AH of (0, jS.c)(HH, new RegExp(BH.phrase.source, "gi"), BH.keep)) {
+   for (const YB of (0, EQ.f)(BB, new RegExp(OB.phrase.source, "gi"), OB.keep)) {
```

#### 2223. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24011` → after: `L24011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24011) · [Before (L24011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24011)

```diff
-     if (null !== tH && tH !== AH[0]) return `${HH.slice(0,rH)}${tH}${HH.slice(SH)}`
+     if (null !== jB && jB !== YB[0]) return `${BB.slice(0,DB)}${jB}${BB.slice(QB)}`
```

#### 2224. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24062-L24066` → after: `L24062-L24066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24062-L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24062-L24066) · [Before (L24062-L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24062-L24066)

```diff
-   gj = new RegExp(String.raw`(${qj})\s*,\s*(${qj})\s*,\s*(${qj})(?![\w.])`, "g"),
-   Nj = (0, jS.i)("\\w."),
-   Rj = new RegExp(String.raw`(\bapi\s*\.\s*setPosition\s*\(\s*[A-Za-z_$][\w$.[\]]*\s*,\s*)(\[\s*)?(${qj}|x)(\s*,\s*)(${qj}|y)(\s*,\s*)(${qj}|z)(\s*\]?\s*\))`, "g"),
-   jj = new RegExp(String.raw`(\bapi\s*\.\s*setBlock\s*\(\s*)(\[\s*)?(${qj}|x)(\s*,\s*)(${qj}|y)(\s*,\s*)(${qj}|z)(\s*\]?\s*,)`, "g"),
-   nj = new RegExp(String.raw`^(.*?)\breturn\s*\[\s*(${qj})\s*,\s*(${qj})\s*,\s*(${qj})\s*\]`),
+   TE = new RegExp(String.raw`(${eE})\s*,\s*(${eE})\s*,\s*(${eE})(?![\w.])`, "g"),
+   bE = (0, EQ.n)("\\w."),
+   CE = new RegExp(String.raw`(\bapi\s*\.\s*setPosition\s*\(\s*[A-Za-z_$][\w$.[\]]*\s*,\s*)(\[\s*)?(${eE}|x)(\s*,\s*)(${eE}|y)(\s*,\s*)(${eE}|z)(\s*\]?\s*\))`, "g"),
+   HE = new RegExp(String.raw`(\bapi\s*\.\s*setBlock\s*\(\s*)(\[\s*)?(${eE}|x)(\s*,\s*)(${eE}|y)(\s*,\s*)(${eE}|z)(\s*\]?\s*,)`, "g"),
+   vE = new RegExp(String.raw`^(.*?)\breturn\s*\[\s*(${eE})\s*,\s*(${eE})\s*,\s*(${eE})\s*\]`),
```

#### 2225. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24098` → after: `L24098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24098) · [Before (L24098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24098)

```diff
-         const SH = null !== (rH = LH.get(HH)) && void 0 !== rH ? rH : new Map;
+         const QB = null !== (DB = GB.get(BB)) && void 0 !== DB ? DB : new Map;
```

#### 2226. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24113` → after: `L24113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24113) · [Before (L24113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24113)

```diff
-       for (const SH of [...HH.callbacks, ...null !== (LH = HH.functions) && void 0 !== LH ? LH : []]) {
+       for (const QB of [...BB.callbacks, ...null !== (GB = BB.functions) && void 0 !== GB ? GB : []]) {
```

#### 2227. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24136` → after: `L24136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24136) · [Before (L24136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24136)

```diff
-         of [...null !== (AH = HH.messages) && void 0 !== AH ? AH : [], ...null !== (rH = HH.calls) && void 0 !== rH ? rH : []]) {
+         of [...null !== (YB = BB.messages) && void 0 !== YB ? YB : [], ...null !== (DB = BB.calls) && void 0 !== DB ? DB : []]) {
```

#### 2228. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24145` → after: `L24145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24145) · [Before (L24145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24145)

```diff
-         text: `${SH.name} = ${SH.value}`,
+         text: `${QB.name} = ${QB.value}`,
```

#### 2229. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24155` → after: `L24155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24155) · [Before (L24155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24155)

```diff
-     for (const AH of (0, jS.c)(rH, gj, Nj)) BH.add(yj([AH[1], AH[2], AH[3]]));
+     for (const YB of (0, EQ.f)(DB, TE, bE)) OB.add(jc([YB[1], YB[2], YB[3]]));
```

#### 2230. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24161` → after: `L24161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24161) · [Before (L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24161)

```diff
-         test: `${null!==hH&&void 0!==hH?hH:""} ${rH.slice(0,HH.index)}`,
+         test: `${null!==oB&&void 0!==oB?oB:""} ${DB.slice(0,BB.index)}`,
```

#### 2231. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24165` → after: `L24165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24165) · [Before (L24165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24165)

```diff
-         test: `${null!==hH&&void 0!==hH?hH:""} ${LH[1]}`,
+         test: `${null!==oB&&void 0!==oB?oB:""} ${GB[1]}`,
```

#### 2232. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24171` → after: `L24171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24171) · [Before (L24171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24171)

```diff
-     AH(CH ? pj(zH.test, !1) : null !== EH && void 0 !== EH ? EH : pj(SH, !1), zH.position, SH)
+     YB(JB ? oc(yB.test, !1) : null !== MB && void 0 !== MB ? MB : oc(QB, !1), yB.position, QB)
```

#### 2233. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24189-L24191` → after: `L24189-L24191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24189-L24191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24189-L24191) · [Before (L24189-L24191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24189-L24191)

```diff
-         if (null === HH || "" === HH[1] || !new RegExp(`^${qj}$`).test(hH)) continue;
-         const tH = null !== (AH = BH.get(HH[1])) && void 0 !== AH ? AH : {};
-         tH[HH[2].toLowerCase()] = hH, BH.set(HH[1], tH), LH.set(HH[1], [...null !== (rH = LH.get(HH[1])) && void 0 !== rH ? rH : [], SH])
+         if (null === BB || "" === BB[1] || !new RegExp(`^${eE}$`).test(oB)) continue;
+         const jB = null !== (YB = OB.get(BB[1])) && void 0 !== YB ? YB : {};
+         jB[BB[2].toLowerCase()] = oB, OB.set(BB[1], jB), GB.set(BB[1], [...null !== (DB = GB.get(BB[1])) && void 0 !== DB ? DB : [], QB])
```

#### 2234. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24224-L24226` → after: `L24224-L24226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24224-L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24224-L24226) · [Before (L24224-L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24224-L24226)

```diff
-   if (new RegExp(String.raw`\b(?:const|let|var)\s+(?:\[[^\]]*\b${HH}\b|\{[^}]*\b${HH}\b|${HH}\b)|\(([^()]*\b)?${HH}\b[^()]*\)\s*=>`).test(BH)) return !0;
-   const zH = new Set(null !== (rH = LH.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== rH ? rH : []),
-     CH = [...null !== (SH = AH.messages) && void 0 !== SH ? SH : [], ...null !== (hH = AH.calls) && void 0 !== hH ? hH : []].flatMap((HH => {
+   if (new RegExp(String.raw`\b(?:const|let|var)\s+(?:\[[^\]]*\b${BB}\b|\{[^}]*\b${BB}\b|${BB}\b)|\(([^()]*\b)?${BB}\b[^()]*\)\s*=>`).test(OB)) return !0;
+   const yB = new Set(null !== (DB = GB.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== DB ? DB : []),
+     JB = [...null !== (QB = YB.messages) && void 0 !== QB ? QB : [], ...null !== (oB = YB.calls) && void 0 !== oB ? oB : []].flatMap((BB => {
```

#### 2235. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24233` → after: `L24233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24233) · [Before (L24233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24233)

```diff
-   return [...AH.callbacks, ...null !== (tH = AH.functions) && void 0 !== tH ? tH : []].some((BH => {
+   return [...YB.callbacks, ...null !== (jB = YB.functions) && void 0 !== jB ? jB : []].some((OB => {
```

#### 2236. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24235` → after: `L24235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24235) · [Before (L24235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24235)

```diff
-     return (zH.has(BH.name) || CH.includes(BH.name)) && ((null !== (LH = BH.params) && void 0 !== LH ? LH : []).includes(HH) || (null !== (AH = null === (rH = BH.body) || void 0 === rH ? void 0 : rH.locals) && void 0 !== AH ? AH : []).includes(HH))
+     return (yB.has(OB.name) || JB.includes(OB.name)) && ((null !== (GB = OB.params) && void 0 !== GB ? GB : []).includes(BB) || (null !== (YB = null === (DB = OB.body) || void 0 === DB ? void 0 : DB.locals) && void 0 !== YB ? YB : []).includes(BB))
```

#### 2237. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24263` → after: `L24263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24263) · [Before (L24263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24263)

```diff
-     const LH = [...HH.matchAll(new RegExp(String.raw`\b${sK}\s+(?:the\s+|your\s+|their\s+)([a-z]+)\b(?!\s+(?:of|to)\b)`, "gi"))].flatMap((HH => {
+     const GB = [...BB.matchAll(new RegExp(String.raw`\b${Bi}\s+(?:the\s+|your\s+|their\s+)([a-z]+)\b(?!\s+(?:of|to)\b)`, "gi"))].flatMap((BB => {
```

#### 2238. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24291` → after: `L24291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24291) · [Before (L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24291)

```diff
-   for (const MH of null !== (uH = null === rH || void 0 === rH ? void 0 : rH.codeLines) && void 0 !== uH ? uH : []) {
+   for (const NB of null !== (pB = null === DB || void 0 === DB ? void 0 : DB.codeLines) && void 0 !== pB ? pB : []) {
```

#### 2239. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24293` → after: `L24293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24293) · [Before (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24293)

```diff
-     for (const HH of (0, jS.c)(MH, gj, Nj)) tH.add(yj([HH[1], HH[2], HH[3]]))
+     for (const BB of (0, EQ.f)(NB, TE, bE)) jB.add(jc([BB[1], BB[2], BB[3]]))
```

#### 2240. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24312-L24315` → after: `L24312-L24315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24312-L24315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24312-L24315) · [Before (L24312-L24315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24312-L24315)

```diff
-   const rH = new RegExp(String.raw`\bthe\s+(?:${AH.join("|")})\b`, "gi");
-   return HH.replace(BH ? ij : Jj, (HH => HH.replace(rH, (HH => {
-     const BH = `the ${LH}`;
-     return HH === HH.toUpperCase() ? BH.toUpperCase() : /^The/.test(HH) ? `T${BH.slice(1)}` : BH
+   const DB = new RegExp(String.raw`\bthe\s+(?:${YB.join("|")})\b`, "gi");
+   return BB.replace(OB ? Qc : Dc, (BB => BB.replace(DB, (BB => {
+     const OB = `the ${GB}`;
+     return BB === BB.toUpperCase() ? OB.toUpperCase() : /^The/.test(BB) ? `T${OB.slice(1)}` : OB
```

#### 2241. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24349` → after: `L24349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24349) · [Before (L24349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24349)

```diff
-     QH = rn(GH.code, null !== (rH = GH.where) && void 0 !== rH ? rH : "", YH, BH, LH, AH, SH);
+     qB = zc(zB.code, null !== (DB = zB.where) && void 0 !== DB ? DB : "", lB, OB, GB, YB, QB);
```

#### 2242. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24355` → after: `L24355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24355) · [Before (L24355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24355)

```diff
-       return `${arguments.length<=1?void 0:arguments[1]}${null!==(BH=arguments.length<=2?void 0:arguments[2])&&void 0!==BH?BH:""}${LH}${arguments.length<=4?void 0:arguments[4]}${AH}${arguments.length<=6?void 0:arguments[6]}${rH}${arguments.length<=8?void 0:arguments[8]}`
+       return `${arguments.length<=1?void 0:arguments[1]}${null!==(OB=arguments.length<=2?void 0:arguments[2])&&void 0!==OB?OB:""}${GB}${arguments.length<=4?void 0:arguments[4]}${YB}${arguments.length<=6?void 0:arguments[6]}${DB}${arguments.length<=8?void 0:arguments[8]}`
```

#### 2243. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24376` → after: `L24376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24376) · [Before (L24376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24376)

```diff
-     const HH = [...BH.playerText, ...(null !== (MH = BH.messages) && void 0 !== MH ? MH : []).map((HH => {
+     const BB = [...OB.playerText, ...(null !== (NB = OB.messages) && void 0 !== NB ? NB : []).map((BB => {
```

#### 2244. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24381-L24382` → after: `L24381-L24382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24381-L24382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24381-L24382) · [Before (L24381-L24382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24381-L24382)

```diff
-       })), null !== (xH = null === LH || void 0 === LH ? void 0 : LH.gameText) && void 0 !== xH ? xH : ""].join("\n"),
-       AH = ["exit", "finish line", "finish"].filter((BH => !new RegExp(`\\b${BH.split(" ")[0]}`, "i").test(HH)));
+       })), null !== (RB = null === GB || void 0 === GB ? void 0 : GB.gameText) && void 0 !== RB ? RB : ""].join("\n"),
+       YB = ["exit", "finish line", "finish"].filter((OB => !new RegExp(`\\b${OB.split(" ")[0]}`, "i").test(BB)));
```

#### 2245. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24392` → after: `L24392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24392) · [Before (L24392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24392)

```diff
-   return 0 === uH.length ? hH : {
+   return 0 === pB.length ? oB : {
```

#### 2246. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24397` → after: `L24397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24397) · [Before (L24397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24397)

```diff
- const tn = (0, jS.i)("\\w");
+ const qc = (0, EQ.n)("\\w");
```

#### 2247. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24413-L24417` → after: `L24413-L24417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24413-L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24413-L24417) · [Before (L24413-L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24413-L24417)

```diff
-     tH = null !== hH && hH.length >= 3 && !/^-?\d+$/.test(hH) ? hH : null,
-     zH = [...new Set([HH, rH, ...null === tH ? [] : [tH, tH.replace(/_/g, " ")]])].sort(((HH, BH) => BH.length - HH.length)).map(RS.e),
-     CH = null !== (BH = null === (LH = /(?:^|\s|:)(-?\d+)$/.exec(HH)) || void 0 === LH ? void 0 : LH[1]) && void 0 !== BH ? BH : null,
-     EH = null === CH ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,RS.e)(CH)}(?![\\w]|\\.\\d)`,
-     XH = `(${zH.join("|")})(?![\\w])${EH}`,
+     jB = null !== oB && oB.length >= 3 && !/^-?\d+$/.test(oB) ? oB : null,
+     yB = [...new Set([BB, DB, ...null === jB ? [] : [jB, jB.replace(/_/g, " ")]])].sort(((BB, OB) => OB.length - BB.length)).map(wQ.h),
+     JB = null !== (OB = null === (GB = /(?:^|\s|:)(-?\d+)$/.exec(BB)) || void 0 === GB ? void 0 : GB[1]) && void 0 !== OB ? OB : null,
+     MB = null === JB ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,wQ.h)(JB)}(?![\\w]|\\.\\d)`,
+     PB = `(${yB.join("|")})(?![\\w])${MB}`,
```

#### 2248. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24422-L24424` → after: `L24422-L24424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24422-L24424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24422-L24424) · [Before (L24422-L24424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24422-L24424)

```diff
-       parts: (0, RS.w)(HH),
-       atStart: new RegExp(`^(?:${XH})`, "i"),
-       anywhere: new RegExp(`(?:${XH})`, "gi")
+       parts: (0, wQ.u)(BB),
+       atStart: new RegExp(`^(?:${PB})`, "i"),
+       anywhere: new RegExp(`(?:${PB})`, "gi")
```

#### 2249. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24457` → after: `L24457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24457) · [Before (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24457)

```diff
-   for (const LH of (0, jS.c)(HH, BH.anywhere, tn)) {
+   for (const GB of (0, EQ.f)(BB, OB.anywhere, qc)) {
```

#### 2250. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24478` → after: `L24478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24478) · [Before (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24478)

```diff
-   return [HH, ...BH.flowSteps].some((BH => BH.from === HH.from && (0, RS.w)(BH.to).some((HH => En.test(HH)))))
+   return [BB, ...OB.flowSteps].some((OB => OB.from === BB.from && (0, wQ.u)(OB.to).some((BB => Rc.test(BB)))))
```

#### 2251. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24487` → after: `L24487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24487) · [Before (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24487)

```diff
-   for (const LH of (0, jS.c)(HH, vn, (0, jS.i)("\\w.,"))) {
+   for (const GB of (0, EQ.f)(BB, dc, (0, EQ.n)("\\w.,"))) {
```

#### 2252. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24524` → after: `L24524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24524) · [Before (L24524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24524)

```diff
-   }(BH, HH)))))) && void 0 !== rH ? rH : null : 1 === LH.length && kn.test(BH) ? LH[0] : null
+   }(OB, BB)))))) && void 0 !== DB ? DB : null : 1 === GB.length && Lc.test(OB) ? GB[0] : null
```

#### 2253. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24557` → after: `L24557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24557) · [Before (L24557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24557)

```diff
-   return null !== BH.word && null !== HH.number && Yn(BH.word, HH) ? `${BH.word} ${HH.number}` : BH.isValue && null !== HH.value ? HH.value : HH.plain
+   return null !== OB.word && null !== BB.number && Vc(OB.word, BB) ? `${OB.word} ${BB.number}` : OB.isValue && null !== BB.value ? BB.value : BB.plain
```

#### 2254. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24570` → after: `L24570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24570) · [Before (L24570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24570)

```diff
-   const hH = null === BH.to.number ? null : new RegExp(`^${(0,RS.e)(BH.to.number)}(?![\\w]|\\.\\d)`).exec(rH);
+   const oB = null === OB.to.number ? null : new RegExp(`^${(0,wQ.h)(OB.to.number)}(?![\\w]|\\.\\d)`).exec(DB);
```

#### 2255. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24624` → after: `L24624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24624) · [Before (L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24624)

```diff
-       lH = null !== (zH = null !== (CH = mn(fH, PH, IH)) && void 0 !== CH ? CH : mn(fH, PH, wn(IH, kH))) && void 0 !== zH ? zH : mH && 1 === IH.length && 0 === Vn(fH).length ? IH[0] : null;
+       IB = null !== (yB = null !== (JB = gc(mB, AB, uB)) && void 0 !== JB ? JB : gc(mB, AB, sc(uB, kB))) && void 0 !== yB ? yB : dB && 1 === uB.length && 0 === Ic(mB).length ? uB[0] : null;
```

#### 2256. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24634-L24635` → after: `L24634-L24635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24634-L24635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24634-L24635) · [Before (L24634-L24635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24634-L24635)

```diff
-     })), eH = jn(Rn(null === uH || void 0 === uH ? void 0 : uH.toLowerCase(), QH, WH), AH), qH = xH + YH.indexOf(WH) - (null !== (EH = null === UH || void 0 === UH || null === (XH = UH[1]) || void 0 === XH ? void 0 : XH.length) && void 0 !== EH ? EH : 0);
-     let gH = `${eH} `,
+     })), LB = bc(Tc(null === pB || void 0 === pB ? void 0 : pB.toLowerCase(), qB, ZB), YB), gB = RB + lB.indexOf(ZB) - (null !== (MB = null === SB || void 0 === SB || null === (PB = SB[1]) || void 0 === PB ? void 0 : PB.length) && void 0 !== MB ? MB : 0);
+     let rB = `${LB} `,
```

#### 2257. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24638` → after: `L24638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24638) · [Before (L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24638)

```diff
-     if (null !== cH) gH = `${eH} ${cH.text} after ${bH.slice(0,KH.length)}`, NH = vH + OH.length + KH.length + cH.length, RH = NH;
+     if (null !== iB) rB = `${LB} ${iB.text} after ${fB.slice(0,FB.length)}`, XB = WB + UB.length + FB.length + iB.length, wB = XB;
```

#### 2258. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24645` → after: `L24645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24645) · [Before (L24645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24645)

```diff
-         gH = `${eH} ${BH.slice(LH[0].length,LH[0].length+AH.length)} after ${HH}`, NH = vH + HH.length + LH[0].length + AH.length, RH = NH
+         rB = `${LB} ${OB.slice(GB[0].length,GB[0].length+YB.length)} after ${BB}`, XB = WB + BB.length + GB[0].length + YB.length, wB = XB
```

#### 2259. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24648` → after: `L24648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24648) · [Before (L24648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24648)

```diff
-         gH = `${eH} ${/^[a-z][a-z_]*$/.test(HH)&&new RegExp(`\\bthe\\s+${(0,RS.e)(HH)}\\b`,"i").test(fH)?"the ":""}${HH} after `, NH = vH
+         rB = `${LB} ${/^[a-z][a-z_]*$/.test(BB)&&new RegExp(`\\bthe\\s+${(0,wQ.h)(BB)}\\b`,"i").test(mB)?"the ":""}${BB} after `, XB = WB
```

#### 2260. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24674` → after: `L24674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24674) · [Before (L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24674)

```diff
-         UH = null === vH ? mn(WH, xH, PH) : null !== (zH = BH.find((HH => TH.some((BH => bn(BH, HH)))))) && void 0 !== zH ? zH : null;
+         SB = null === WB ? gc(ZB, RB, AB) : null !== (yB = OB.find((BB => VB.some((OB => ic(OB, BB)))))) && void 0 !== yB ? yB : null;
```

#### 2261. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24677-L24679` → after: `L24677-L24679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24677-L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24677-L24679) · [Before (L24677-L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24677-L24679)

```diff
-         OH = /[_:]/.test(UH.to.plain) ? `\`${UH.step.to}\`` : UH.to.plain,
-         bH = `${jn(Rn(void 0,void 0,YH),AH)} ${null===VH?OH:nn(UH.to,VH)}`,
-         kH = uH - (null !== (CH = null === vH || void 0 === vH || null === (EH = vH[1]) || void 0 === EH ? void 0 : EH.length) && void 0 !== CH ? CH : 0);
+         UB = /[_:]/.test(SB.to.plain) ? `\`${SB.step.to}\`` : SB.to.plain,
+         fB = `${bc(Tc(void 0,void 0,lB),YB)} ${null===nB?UB:Cc(SB.to,nB)}`,
+         kB = pB - (null !== (JB = null === WB || void 0 === WB || null === (MB = WB[1]) || void 0 === MB ? void 0 : MB.length) && void 0 !== JB ? JB : 0);
```

#### 2262. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24691` → after: `L24691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24691) · [Before (L24691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24691)

```diff
-     const LH = (0, jS.c)(HH, BH.from.anywhere, tn).at(-1);
+     const GB = (0, EQ.f)(BB, OB.from.anywhere, qc).at(-1);
```

#### 2263. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24716` → after: `L24716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24716) · [Before (L24716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24716)

```diff
-         XH = sn.test((0, jS.o)((0, jS.o)(zH, rH.to.anywhere, tn, zn), rH.from.anywhere, tn, zn));
+         PB = Oh.test((0, EQ.z)((0, EQ.z)(yB, DB.to.anywhere, qc, Zc), DB.from.anywhere, qc, Zc));
```

#### 2264. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24740` → after: `L24740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24740) · [Before (L24740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24740)

```diff
-   return `${BH[1]}${LH.charAt(0).toUpperCase()}${LH.slice(1)}`
+   return `${OB[1]}${GB.charAt(0).toUpperCase()}${GB.slice(1)}`
```

#### 2265. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24769` → after: `L24769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24769) · [Before (L24769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24769)

```diff
-           LH.push(`- ${HH.join(" ")}`), BH++
+           GB.push(`- ${BB.join(" ")}`), OB++
```

#### 2266. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24778` → after: `L24778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24778) · [Before (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24778)

```diff
-     layout: 0 === BH ? HH : {
+     layout: 0 === OB ? BB : {
```

#### 2267. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24791` → after: `L24791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24791) · [Before (L24791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24791)

```diff
-       markdown: `${LH.join("\n")}${BH}${HH.markdown}`.trim()
+       markdown: `${GB.join("\n")}${OB}${BB.markdown}`.trim()
```

#### 2268. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24818` → after: `L24818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24818) · [Before (L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24818)

```diff
-   const BH = (0, RS.h)(HH, rF - 1),
+   const OB = (0, wQ.k)(BB, Jh - 1),
```

#### 2269. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24820` → after: `L24820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24820) · [Before (L24820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24820)

```diff
-   return `${(LH>rF/2?BH.slice(0,LH):BH).replace(/[\s,.;:!?-]+$/,"")}\u2026`
+   return `${(GB>Jh/2?OB.slice(0,GB):OB).replace(/[\s,.;:!?-]+$/,"")}\u2026`
```

#### 2270. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24844` → after: `L24844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24844) · [Before (L24844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24844)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${tF}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${zh}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
```

#### 2271. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24856` → after: `L24856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24856) · [Before (L24856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24856)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${hF}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${tF}(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${Ph}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${zh}(?!\w)\s*`, "i"),
```

#### 2272. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24868` → after: `L24868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24868) · [Before (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24868)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${hF}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${hF}dies?)(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Ph}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${Ph}dies?)(?!\w)\s*`, "i"),
```

#### 2273. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24881` → after: `L24881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24881) · [Before (L24881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24881)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${hF}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${Ph}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
```

#### 2274. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24893` → after: `L24893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24893) · [Before (L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24893)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${hF}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Ph}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
```

#### 2275. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24905` → after: `L24905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24905) · [Before (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24905)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${hF}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Ph}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
```

#### 2276. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24915` → after: `L24915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24915) · [Before (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24915)

```diff
-   return /[|&?=<>!,]/.test(BH) ? `(${BH})` : BH
+   return /[|&?=<>!,]/.test(OB) ? `(${OB})` : OB
```

#### 2277. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24921` → after: `L24921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24921) · [Before (L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24921)

```diff
-   return null !== (BH = null !== (LH = null === (AH = /^(.+)\.toString\(\)$/.exec(SH)) || void 0 === AH ? void 0 : AH[1]) && void 0 !== LH ? LH : null === (rH = /^String\((.+)\)$/.exec(SH)) || void 0 === rH ? void 0 : rH[1]) && void 0 !== BH ? BH : HH
+   return null !== (OB = null !== (GB = null === (YB = /^(.+)\.toString\(\)$/.exec(QB)) || void 0 === YB ? void 0 : YB[1]) && void 0 !== GB ? GB : null === (DB = /^String\((.+)\)$/.exec(QB)) || void 0 === DB ? void 0 : DB[1]) && void 0 !== OB ? OB : BB
```

#### 2278. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24931` → after: `L24931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24931) · [Before (L24931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24931)

```diff
-     return "literal" in LH && new RegExp(String.raw`\b${BH}\s*[:#]?\s*$`, "i").test(LH.literal) && void 0 !== rH && "code" in rH
+     return "literal" in GB && new RegExp(String.raw`\b${OB}\s*[:#]?\s*$`, "i").test(GB.literal) && void 0 !== DB && "code" in DB
```

#### 2279. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24956` → after: `L24956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24956) · [Before (L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24956)

```diff
-   if (Zc(rH) && /\p{L}{2}/u.test(rH)) return `"${zF(rH)}"`;
+   if (ti(DB) && /\p{L}{2}/u.test(DB)) return `"${lh(DB)}"`;
```

#### 2280. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24960` → after: `L24960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24960) · [Before (L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24960)

```diff
-   }(SH) ? `\`${SH}\`` : null
+   }(QB) ? `\`${QB}\`` : null
```

#### 2281. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24965` → after: `L24965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24965) · [Before (L24965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24965)

```diff
-   const rH = (null !== (AH = HH.messages) && void 0 !== AH ? AH : []).filter((HH => BH.isMessage(HH) && (null === LH || CF(HH.where).includes(LH)))),
+   const DB = (null !== (YB = BB.messages) && void 0 !== YB ? YB : []).filter((BB => OB.isMessage(BB) && (null === GB || ph(BB.where).includes(GB)))),
```

#### 2282. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24987` → after: `L24987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24987) · [Before (L24987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24987)

```diff
-                   '"' === hH || "'" === hH ? AH = hH : "([{".includes(hH) ? LH++ : ")]}".includes(hH) ? LH-- : "+" === hH && 0 === LH && (BH.push(HH.slice(rH, SH).trim()), rH = SH + 1)
+                   '"' === oB || "'" === oB ? YB = oB : "([{".includes(oB) ? GB++ : ")]}".includes(oB) ? GB-- : "+" === oB && 0 === GB && (OB.push(BB.slice(DB, QB).trim()), DB = QB + 1)
```

#### 2283. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24990` → after: `L24990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24990) · [Before (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24990)

```diff
-               return BH.push(HH.slice(rH).trim()), BH.every((HH => "" !== HH)) ? BH : null
+               return OB.push(BB.slice(DB).trim()), OB.every((BB => "" !== BB)) ? OB : null
```

#### 2284. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24998-L24999` → after: `L24998-L24999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24998-L24999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L24998-L24999) · [Before (L24998-L24999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L24998-L24999)

```diff
-             }))) && void 0 !== BH ? BH : null
-           }(null !== (LH = null === AH || void 0 === AH ? void 0 : AH[1]) && void 0 !== LH ? LH : BH);
+             }))) && void 0 !== OB ? OB : null
+           }(null !== (GB = null === YB || void 0 === YB ? void 0 : YB[1]) && void 0 !== GB ? GB : OB);
```

#### 2285. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25011` → after: `L25011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25011) · [Before (L25011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25011)

```diff
-       } = hH[0], EH = AH.indexOf(tH, rH[0].length), XH = null !== (BH = null === (LH = /["']/.exec(tH)) || void 0 === LH ? void 0 : LH[0]) && void 0 !== BH ? BH : '"';
+       } = oB[0], MB = YB.indexOf(jB, DB[0].length), PB = null !== (OB = null === (GB = /["']/.exec(jB)) || void 0 === GB ? void 0 : GB[0]) && void 0 !== OB ? OB : '"';
```

#### 2286. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25030` → after: `L25030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25030) · [Before (L25030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25030)

```diff
-   return new Set([...HH.callbacks, ...null !== (BH = HH.functions) && void 0 !== BH ? BH : []].map((HH => {
+   return new Set([...BB.callbacks, ...null !== (OB = BB.functions) && void 0 !== OB ? OB : []].map((BB => {
```

#### 2287. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25045` → after: `L25045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25045) · [Before (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25045)

```diff
-   if (null === AH || null === rH || ee.test(null !== (LH = rH[1]) && void 0 !== LH ? LH : "") || UF.test(AH.text)) return null;
+   if (null === YB || null === DB || hL.test(null !== (GB = DB[1]) && void 0 !== GB ? GB : "") || dh.test(YB.text)) return null;
```

#### 2288. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25060` → after: `L25060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25060) · [Before (L25060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25060)

```diff
-       const rH = null !== (BH = null === (LH = HH.ideaPlace) || void 0 === LH ? void 0 : LH.exec(hH)) && void 0 !== BH ? BH : null;
+       const DB = null !== (OB = null === (GB = BB.ideaPlace) || void 0 === GB ? void 0 : GB.exec(oB)) && void 0 !== OB ? OB : null;
```

#### 2289. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25063` → after: `L25063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25063) · [Before (L25063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25063)

```diff
-         number: null !== (AH = rH[1]) && void 0 !== AH ? AH : null,
+         number: null !== (YB = DB[1]) && void 0 !== YB ? YB : null,
```

#### 2290. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25081-L25083` → after: `L25081-L25083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25081-L25083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25081-L25083) · [Before (L25081-L25083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25081-L25083)

```diff
-   const QH = null === GH ? "" : `at ${XH.numberWord} ${GH} `,
-     WH = `hange your ${XH.noun} message (${uH}) so ${QH}it also ${CH.verb} ${CH.after}`;
-   return `${AH.head}${/^[A-Z]/.test(AH.text)?"C":"c"}${WH}`
+   const qB = null === zB ? "" : `at ${PB.numberWord} ${zB} `,
+     ZB = `hange your ${PB.noun} message (${pB}) so ${qB}it also ${JB.verb} ${JB.after}`;
+   return `${YB.head}${/^[A-Z]/.test(YB.text)?"C":"c"}${ZB}`
```

#### 2291. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25143` → after: `L25143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25143) · [Before (L25143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25143)

```diff
-         player: "broadcastMessage" === SH[3] ? null : null !== (BH = hH[0]) && void 0 !== BH ? BH : null,
+         player: "broadcastMessage" === QB[3] ? null : null !== (OB = oB[0]) && void 0 !== OB ? OB : null,
```

#### 2292. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25145` → after: `L25145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25145) · [Before (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25145)

```diff
-         condition: null !== (LH = SH[2]) && void 0 !== LH ? LH : null,
+         condition: null !== (GB = QB[2]) && void 0 !== GB ? GB : null,
```

#### 2293. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25154-L25155` → after: `L25154-L25155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25154-L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25154-L25155) · [Before (L25154-L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25154-L25155)

```diff
-       const AH = null === HH.mention ? "join" === HH.kind && "onPlayerJoin" === QH : HH.mention.test(WH),
-         rH = (null !== (LH = BH.messages) && void 0 !== LH ? LH : []).filter((BH => HH.isMessage(BH) && CF(BH.where).includes(QH)));
+       const YB = null === BB.mention ? "join" === BB.kind && "onPlayerJoin" === qB : BB.mention.test(ZB),
+         DB = (null !== (GB = OB.messages) && void 0 !== GB ? GB : []).filter((OB => BB.isMessage(OB) && ph(OB.where).includes(qB)));
```

#### 2294. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25179-L25180` → after: `L25179-L25180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25179-L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25179-L25180) · [Before (L25179-L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25179-L25180)

```diff
-     bH = null !== vH.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${vH.numberWord}s?\b`, "i").test(WH),
-     kH = null === vH.numberWord || bH ? new Set : new Set((0, RS.l)(WH).filter((HH => !/\d\s*%/.test(HH))).flatMap((HH => [...HH.matchAll(new RegExp(String.raw`\b${vH.numberWord}\s*:?\s*(\d{1,3})\b${tF}`, "gi"))].map((HH => HH[1])))));
+     fB = null !== WB.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${WB.numberWord}s?\b`, "i").test(ZB),
+     kB = null === WB.numberWord || fB ? new Set : new Set((0, wQ.l)(ZB).filter((BB => !/\d\s*%/.test(BB))).flatMap((BB => [...BB.matchAll(new RegExp(String.raw`\b${WB.numberWord}\s*:?\s*(\d{1,3})\b${zh}`, "gi"))].map((BB => BB[1])))));
```

#### 2295. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25182` → after: `L25182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25182) · [Before (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25182)

```diff
-   const mH = null !== (LH = null === OH || void 0 === OH ? void 0 : OH[2]) && void 0 !== LH ? LH : 1 === kH.size ? [...kH][0] : null;
+   const dB = null !== (GB = null === UB || void 0 === UB ? void 0 : UB[2]) && void 0 !== GB ? GB : 1 === kB.size ? [...kB][0] : null;
```

#### 2296. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25191` → after: `L25191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25191) · [Before (L25191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25191)

```diff
-   })) && mF.test(HH), KH = null !== (AH = vH.mention) && void 0 !== AH ? AH : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
+   })) && Fh.test(BB), FB = null !== (YB = WB.mention) && void 0 !== YB ? YB : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
```

#### 2297. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25195-L25197` → after: `L25195-L25197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25195-L25197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25195-L25197) · [Before (L25195-L25197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25195-L25197)

```diff
-         LH = null === BH ? HH : HH.slice(BH[0].length),
-         AH = (null === BH ? (0, jS.s)(LH, /\s+(?=[A-Z`"])/g, (0, jS.n)(".!?")) : [LH]).some((HH => {
-           const BH = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(HH) ? `${cH} ${HH}` : HH;
+         GB = null === OB ? BB : BB.slice(OB[0].length),
+         YB = (null === OB ? (0, EQ.C)(GB, /\s+(?=[A-Z`"])/g, (0, EQ.w)(".!?")) : [GB]).some((BB => {
+           const OB = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(BB) ? `${iB} ${BB}` : BB;
```

#### 2298. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25211` → after: `L25211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25211) · [Before (L25211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25211)

```diff
-           literal: `${AH}${/[.!?]$/.test(AH)||""===AH?" ":". "}${BH}`
+           literal: `${YB}${/[.!?]$/.test(YB)||""===YB?" ":". "}${OB}`
```

#### 2299. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25215` → after: `L25215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25215) · [Before (L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25215)

```diff
-         literal: `. ${BH}`
+         literal: `. ${OB}`
```

#### 2300. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25226` → after: `L25226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25226) · [Before (L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25226)

```diff
-       return LH.map((HH => "literal" in HH ? (0, RS.L)(HH.literal, BH) : HH.code)).join(" + ")
+       return GB.map((BB => "literal" in BB ? (0, wQ.E)(BB.literal, OB) : BB.code)).join(" + ")
```

#### 2301. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25228-L25229` → after: `L25228-L25229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25228-L25229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25228-L25229) · [Before (L25228-L25229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25228-L25229)

```diff
-     RH = `${IH.line.slice(0,IH.start)}${IH.isList?`[${NH}]`:NH}${IH.line.slice(IH.end)}`,
-     jH = null === mH ? YH.map((HH => HH === uH.line ? `${uH.indent}${RH}` : HH)) : [`${uH.indent}if (${null!==(rH=null===(SH=uH.condition)||void 0===SH?void 0:SH.trim())&&void 0!==rH?rH:`${GF(YF(VH))} === ${mH}`}) ${RH}`, `${uH.indent}else ${IH.line}`],
+     wB = `${uB.line.slice(0,uB.start)}${uB.isList?`[${XB}]`:XB}${uB.line.slice(uB.end)}`,
+     EB = null === dB ? lB.map((BB => BB === pB.line ? `${pB.indent}${wB}` : BB)) : [`${pB.indent}if (${null!==(DB=null===(QB=pB.condition)||void 0===QB?void 0:QB.trim())&&void 0!==DB?DB:`${Nh(Rh(nB))} === ${dB}`}) ${wB}`, `${pB.indent}else ${uB.line}`],
```

#### 2302. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25231` → after: `L25231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25231) · [Before (L25231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25231)

```diff
-     FH = eH ? `Change your ${vH.noun} message (${oH}) to "${uH.words}"${nH}` : `Change your ${vH.noun} message (${oH}) so ${null===mH?"":`at ${vH.numberWord} ${mH} `}it also says "${uH.words}"${nH}`,
+     hB = LB ? `Change your ${WB.noun} message (${KB}) to "${pB.words}"${cB}` : `Change your ${WB.noun} message (${KB}) so ${null===dB?"":`at ${WB.numberWord} ${dB} `}it also says "${pB.words}"${cB}`,
```

#### 2303. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25250` → after: `L25250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25250) · [Before (L25250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25250)

```diff
-   const AH = null !== (LH = null === BH || void 0 === BH ? void 0 : BH.messages) && void 0 !== LH ? LH : [];
+   const YB = null !== (GB = null === OB || void 0 === OB ? void 0 : OB.messages) && void 0 !== GB ? GB : [];
```

#### 2304. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25275` → after: `L25275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25275) · [Before (L25275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25275)

```diff
-     return cF(null !== rH && void 0 !== rH ? rH : SH, void 0 === hH ? zH ? "players coming back" : "keeping players" : zH ? "how many players come back" : "how many players stay")
+     return wh(null !== DB && void 0 !== DB ? DB : QB, void 0 === oB ? yB ? "players coming back" : "keeping players" : yB ? "how many players come back" : "how many players stay")
```

#### 2305. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25289-L25290` → after: `L25289-L25290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25289-L25290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25289-L25290) · [Before (L25289-L25290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25289-L25290)

```diff
-       const rH = null !== (LH = HH.match(NF)) && void 0 !== LH ? LH : [],
-         SH = null !== (AH = BH.match(NF)) && void 0 !== AH ? AH : [],
+       const DB = null !== (GB = BB.match(ah)) && void 0 !== GB ? GB : [],
+         QB = null !== (YB = OB.match(ah)) && void 0 !== YB ? YB : [],
```

#### 2306. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25303` → after: `L25303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25303) · [Before (L25303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25303)

```diff
-       return "" === zH ? tH : [...tH, zH]
+       return "" === yB ? jB : [...jB, yB]
```

#### 2307. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25328` → after: `L25328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25328) · [Before (L25328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25328)

```diff
-       rH.set(EH.name, (null !== (SH = rH.get(EH.name)) && void 0 !== SH ? SH : 0) + 1)
+       DB.set(MB.name, (null !== (QB = DB.get(MB.name)) && void 0 !== QB ? QB : 0) + 1)
```

#### 2308. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25335-L25337` → after: `L25335-L25337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25335-L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25335-L25337) · [Before (L25335-L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25335-L25337)

```diff
-         XH = (0, RS.t)(EH.name),
-         GH = null !== (hH = EH.usedIn) && void 0 !== hH ? hH : "",
-         YH = void 0 === SH ? null : null !== (tH = WG(SH)) && void 0 !== tH ? tH : null;
+         PB = (0, wQ.q)(MB.name),
+         zB = null !== (oB = MB.usedIn) && void 0 !== oB ? oB : "",
+         lB = void 0 === QB ? null : null !== (jB = Nz(QB)) && void 0 !== jB ? jB : null;
```

#### 2309. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25344` → after: `L25344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25344) · [Before (L25344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25344)

```diff
-         value: null !== (zH = null === SH || void 0 === SH ? void 0 : SH.value) && void 0 !== zH ? zH : HH,
+         value: null !== (yB = null === QB || void 0 === QB ? void 0 : QB.value) && void 0 !== yB ? yB : BB,
```

#### 2310. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25346` → after: `L25346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25346) · [Before (L25346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25346)

```diff
-         codeKind: null === QH ? YH : null,
+         codeKind: null === qB ? lB : null,
```

#### 2311. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25348` → after: `L25348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25348) · [Before (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25348)

```diff
-         hazard: null !== (CH = null === QH || void 0 === QH ? void 0 : QH.hazard) && void 0 !== CH ? CH : null,
+         hazard: null !== (JB = null === qB || void 0 === qB ? void 0 : qB.hazard) && void 0 !== JB ? JB : null,
```

#### 2312. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25356` → after: `L25356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25356) · [Before (L25356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25356)

```diff
-   }(SH), QH), xH = aG(tm(SH), QH), vH = null !== (LH = null === hH || void 0 === hH ? void 0 : hH.places) && void 0 !== LH ? LH : gF, PH = null !== (AH = null === zH || void 0 === zH ? void 0 : zH.grounds) && void 0 !== AH ? AH : null, TH = (() => {
+   }(QB), qB), RB = Hz(pd(QB), qB), WB = null !== (GB = null === oB || void 0 === oB ? void 0 : oB.places) && void 0 !== GB ? GB : hh, AB = null !== (YB = null === yB || void 0 === yB ? void 0 : yB.grounds) && void 0 !== YB ? YB : null, VB = (() => {
```

#### 2313. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25377` → after: `L25377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25377) · [Before (L25377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25377)

```diff
-             const BH = (null !== (rH = AH.get(HH.name)) && void 0 !== rH ? rH : []).filter((HH => JSON.stringify(HH.selection) !== JSON.stringify(WH.selection)));
+             const OB = (null !== (DB = YB.get(BB.name)) && void 0 !== DB ? DB : []).filter((BB => JSON.stringify(BB.selection) !== JSON.stringify(ZB.selection)));
```

#### 2314. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25389` → after: `L25389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25389) · [Before (L25389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25389)

```diff
-         const [hH, [tH]] = SH[0], zH = new RegExp(`${(0,RS.e)(hH)}(?![\\w$])`);
+         const [oB, [jB]] = QB[0], yB = new RegExp(`${(0,wQ.h)(oB)}(?![\\w$])`);
```

#### 2315. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25403` → after: `L25403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25403) · [Before (L25403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25403)

```diff
-           if (CH || !EH || /^\s*[#|]/.test(MH) || xx.test(MH) || 0 === (0, jS.c)(MH.replace(/\[\[[^\]\n]+\]\]/g, " "), zH, jS.j).length) continue;
+           if (JB || !MB || /^\s*[#|]/.test(NB) || AR.test(NB) || 0 === (0, EQ.f)(NB.replace(/\[\[[^\]\n]+\]\]/g, " "), yB, EQ.p).length) continue;
```

#### 2316. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25408` → after: `L25408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25408) · [Before (L25408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25408)

```diff
-           const BH = null !== (GH = null === (YH = Mx.exec(MH)) || void 0 === YH ? void 0 : YH[0].length) && void 0 !== GH ? GH : 0,
+           const OB = null !== (zB = null === (lB = WR.exec(NB)) || void 0 === lB ? void 0 : lB[0].length) && void 0 !== zB ? zB : 0,
```

#### 2317. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25416` → after: `L25416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25416) · [Before (L25416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25416)

```diff
-             SH = rH + (null !== (uH = null === (QH = Uk.exec(MH.slice(rH))) || void 0 === QH ? void 0 : QH[0].length) && void 0 !== uH ? uH : 0),
+             QB = DB + (null !== (pB = null === (qB = mk.exec(NB.slice(DB))) || void 0 === qB ? void 0 : qB[0].length) && void 0 !== pB ? pB : 0),
```

#### 2318. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25418-L25419` → after: `L25418-L25419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25418-L25419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25418-L25419) · [Before (L25418-L25419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25418-L25419)

```diff
-             xH = `${Vk(tH)} [[Heatmap]].`;
-           return XH[WH] = `${MH.slice(0,SH)}${hH} ${xH}${MH.slice(SH)}`, {
+             RB = `${Ik(jB)} [[Heatmap]].`;
+           return PB[ZB] = `${NB.slice(0,QB)}${oB} ${RB}${NB.slice(QB)}`, {
```

#### 2319. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25435` → after: `L25435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25435) · [Before (L25435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25435)

```diff
-       }(zH.markdown, [...null !== GH && void 0 !== GH ? GH : [], ...null !== YH && void 0 !== YH ? YH : []], SH);
+       }(yB.markdown, [...null !== zB && void 0 !== zB ? zB : [], ...null !== lB && void 0 !== lB ? lB : []], QB);
```

#### 2320. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25443-L25445` → after: `L25443-L25445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25443-L25445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25443-L25445) · [Before (L25443-L25445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25443-L25445)

```diff
-     const HH = [...(null !== XH && void 0 !== XH ? XH : []).flatMap((HH => [HH.reason, HH.typical])), ...TH.repairs.map((HH => HH.to))];
-     return fM(CH, null === EH ? HH : [EH.change, ...HH])
-   })(), VH = new Set((null !== XH && void 0 !== XH ? XH : []).flatMap((HH => "good" === HH.verdict ? [HH.key] : []))), OH = vW(tH), bH = fb(PH, SH), kH = TH.markdown, mH = null === zH ? kH : iR(kH, zH, VH, "young" === tH, UH).markdown, oH = OH ? Sb(mH, (IH = hH, null === IH ? []  … [truncated]
+     const BB = [...(null !== PB && void 0 !== PB ? PB : []).flatMap((BB => [BB.reason, BB.typical])), ...VB.repairs.map((BB => BB.to))];
+     return FN(JB, null === MB ? BB : [MB.change, ...BB])
+   })(), nB = new Set((null !== PB && void 0 !== PB ? PB : []).flatMap((BB => "good" === BB.verdict ? [BB.key] : []))), UB = VZ(jB), fB = rf(AB, QB), kB = VB.markdown, dB = null === yB ? kB : QE(kB, yB, nB, "young" === jB, SB).markdown, KB = UB ? Mf(dB, (uB = oB, null === uB ? []  … [truncated]
```

#### 2321. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25464` → after: `L25464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25464) · [Before (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25464)

```diff
-         markdown: 0 === rH.length ? HH : SH,
+         markdown: 0 === DB.length ? BB : QB,
```

#### 2322. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25493` → after: `L25493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25493) · [Before (L25493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25493)

```diff
-         return `${HH.slice(0,rH.end)}${hH}${HH.slice(SH)}`
+         return `${BB.slice(0,DB.end)}${oB}${BB.slice(QB)}`
```

#### 2323. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25531` → after: `L25531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25531) · [Before (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25531)

```diff
-         markdown: 0 === BH.length ? HH : LH,
+         markdown: 0 === OB.length ? BB : GB,
```

#### 2324. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25548` → after: `L25548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25548) · [Before (L25548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25548)

```diff
-           const BH = `the ${HH}`;
+           const OB = `the ${BB}`;
```

#### 2325. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25559` → after: `L25559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25559) · [Before (L25559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25559)

```diff
-         of LH) rH = (0, jS.o)(rH, new RegExp(`(${(0,RS.e)(SH)})(?![\\w-])`, "gi"), (0, jS.i)("\\w-"), (HH => {
+         of GB) DB = (0, EQ.z)(DB, new RegExp(`(${(0,wQ.h)(QB)})(?![\\w-])`, "gi"), (0, EQ.n)("\\w-"), (BB => {
```

#### 2326. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25561` → after: `L25561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25561) · [Before (L25561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25561)

```diff
-         return /^T/.test(BH) ? `T${hH.slice(1)}` : hH
+         return /^T/.test(OB) ? `T${oB.slice(1)}` : oB
```

#### 2327. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25568` → after: `L25568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25568) · [Before (L25568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25568)

```diff
-     qH = [...null !== GH && void 0 !== GH ? GH : [], ...null !== YH && void 0 !== YH ? YH : []].flatMap((HH => "deaths" === HH.kind ? [HH.square] : [])),
+     gB = [...null !== zB && void 0 !== zB ? zB : [], ...null !== lB && void 0 !== lB ? lB : []].flatMap((BB => "deaths" === BB.kind ? [BB.square] : [])),
```

#### 2328. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25573` → after: `L25573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25573) · [Before (L25573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25573)

```diff
-         hX: []
+         GP: []
```

#### 2329. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25599` → after: `L25599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25599) · [Before (L25599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25599)

```diff
-         hX: []
+         GP: []
```

#### 2330. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25602` → after: `L25602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25602) · [Before (L25602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25602)

```diff
-         hX: AH
+         GP: YB
```

#### 2331. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25626` → after: `L25626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25626) · [Before (L25626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25626)

```diff
-         tH = `${null!==LH&&void 0!==LH?LH:""}\n${hH}\n${hH.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
+         jB = `${null!==GB&&void 0!==GB?GB:""}\n${oB}\n${oB.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
```

#### 2332. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25635` → after: `L25635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25635) · [Before (L25635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25635)

```diff
-     }(NH, SH, null !== (rH = null === bH || void 0 === bH ? void 0 : bH.text) && void 0 !== rH ? rH : null, RH).markdown,
+     }(XB, QB, null !== (DB = null === fB || void 0 === fB ? void 0 : fB.text) && void 0 !== DB ? DB : null, wB).markdown,
```

#### 2333. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25639` → after: `L25639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25639) · [Before (L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25639)

```diff
-           if (null === BH || void 0 === BH || HH.length > RS.n || 0 === (null !== (LH = BH.messages) && void 0 !== LH ? LH : []).length) return {
+           if (null === OB || void 0 === OB || BB.length > wQ.n || 0 === (null !== (GB = OB.messages) && void 0 !== GB ? GB : []).length) return {
```

#### 2334. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25677` → after: `L25677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25677) · [Before (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25677)

```diff
-         rH = null === AH || null === SH ? AH : {
+         DB = null === YB || null === QB ? YB : {
```

#### 2335. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25702` → after: `L25702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25702) · [Before (L25702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25702)

```diff
-           return null === HH || 0 === LH.length ? HH : {
+           return null === BB || 0 === GB.length ? BB : {
```

#### 2336. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25706` → after: `L25706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25706) · [Before (L25706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25706)

```diff
-         }(null !== (HH = null === zH || void 0 === zH ? void 0 : zH.grounds) && void 0 !== HH ? HH : null, TH.repairs),
+         }(null !== (BB = null === yB || void 0 === yB ? void 0 : yB.grounds) && void 0 !== BB ? BB : null, VB.repairs),
```

#### 2337. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25714` → after: `L25714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25714) · [Before (L25714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25714)

```diff
-             LH = null === hH ? BH : Lv(BH, hH, UH).markdown;
+             GB = null === oB ? OB : DW(OB, oB, SB).markdown;
```

#### 2338. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25752` → after: `L25752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25752) · [Before (L25752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25752)

```diff
-         layout: 0 === BH ? nH : {
+         layout: 0 === OB ? cB : {
```

#### 2339. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25787` → after: `L25787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25787) · [Before (L25787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25787)

```diff
-     pH = null === UH || null === ZH || null === JH || JH === ZH ? UH : fM(UH, RF(ZH, JH));
+     xB = null === SB || null === TB || null === vB || vB === TB ? SB : FN(SB, eh(TB, vB));
```

#### 2340. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25831` → after: `L25831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25831) · [Before (L25831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25831)

```diff
-   return new RegExp(`(?:^|[^\\w$])${(0,RS.e)(BH)}(?![\\w$])`, "i").test(HH)
+   return new RegExp(`(?:^|[^\\w$])${(0,wQ.h)(OB)}(?![\\w$])`, "i").test(BB)
```

#### 2341. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25839` → after: `L25839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25839) · [Before (L25839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25839)

```diff
-   return (0, jS.c)(HH, /[A-Za-z_$][\w$]*(?![\w$])/g, jS.j).map((HH => {
+   return (0, EQ.f)(BB, /[A-Za-z_$][\w$]*(?![\w$])/g, EQ.p).map((BB => {
```

#### 2342. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25848` → after: `L25848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25848) · [Before (L25848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25848)

```diff
-     AH = null !== (BH = new RegExp(String.raw`^\s*${LH}\s*===?\s*(-?\d+)\s*$`).exec(HH)) && void 0 !== BH ? BH : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${LH}\s*$`).exec(HH);
+     YB = null !== (OB = new RegExp(String.raw`^\s*${GB}\s*===?\s*(-?\d+)\s*$`).exec(BB)) && void 0 !== OB ? OB : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${GB}\s*$`).exec(BB);
```

#### 2343. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25859` → after: `L25859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25859) · [Before (L25859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25859)

```diff
-   const AH = new Set([...BH.callbacks, ...null !== (LH = BH.functions) && void 0 !== LH ? LH : []].map((HH => {
+   const YB = new Set([...OB.callbacks, ...null !== (GB = OB.functions) && void 0 !== GB ? GB : []].map((BB => {
```

#### 2344. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25877` → after: `L25877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25877) · [Before (L25877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25877)

```diff
-         const SH = new RegExp(`^${(0,RS.e)(BH)} (\\d{1,4})$`).exec(HH);
+         const QB = new RegExp(`^${(0,wQ.h)(OB)} (\\d{1,4})$`).exec(BB);
```

#### 2345. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25884` → after: `L25884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25884) · [Before (L25884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25884)

```diff
-         else if (HH.startsWith(`${BH}: `) && HH.length > BH.length + 2) {
+         else if (BB.startsWith(`${OB}: `) && BB.length > OB.length + 2) {
```

#### 2346. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25914` → after: `L25914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25914) · [Before (L25914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25914)

```diff
-   if (null === HH || null === BH || null === AH || void 0 === AH || HH.length > RS.p || "" === HH.trim()) return null;
+   if (null === BB || null === OB || null === YB || void 0 === YB || BB.length > wQ.o || "" === BB.trim()) return null;
```

#### 2347. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25916` → after: `L25916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25916) · [Before (L25916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25916)

```diff
-   const hH = CD(rH, `${LH}\n${BH}`, AH)[0],
+   const oB = pa(DB, `${GB}\n${OB}`, YB)[0],
```

#### 2348. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25924` → after: `L25924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25924) · [Before (L25924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25924)

```diff
-       const AH = [...BH.callbacks, ...null !== (LH = BH.functions) && void 0 !== LH ? LH : []].filter((BH => BH.name === HH));
+       const YB = [...OB.callbacks, ...null !== (GB = OB.functions) && void 0 !== GB ? GB : []].filter((OB => OB.name === BB));
```

#### 2349. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25952` → after: `L25952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25952) · [Before (L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25952)

```diff
-       const CH = null !== (AH = null === (rH = HH.valueExpression) || void 0 === rH ? void 0 : rH.trim()) && void 0 !== AH ? AH : null;
+       const JB = null !== (YB = null === (DB = BB.valueExpression) || void 0 === DB ? void 0 : DB.trim()) && void 0 !== YB ? YB : null;
```

#### 2350. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25958` → after: `L25958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25958) · [Before (L25958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25958)

```diff
-             rH = WH === sF[0] || WH === sF[3] || AH !== LH || /^[A-Za-z_$][\w$.]*$/.test(null !== LH && void 0 !== LH ? LH : "");
+             DB = ZB === Ba[0] || ZB === Ba[3] || YB !== GB || /^[A-Za-z_$][\w$.]*$/.test(null !== GB && void 0 !== GB ? GB : "");
```

#### 2351. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25960` → after: `L25960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25960) · [Before (L25960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25960)

```diff
-             zH = `${AH} === ${Number(BH)}`;
+             yB = `${YB} === ${Number(OB)}`;
```

#### 2352. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25965-L25966` → after: `L25965-L25966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25965-L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25965-L25966) · [Before (L25965-L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25965-L25966)

```diff
-         XH = null === EH ? null : null !== (SH = null !== (hH = null !== (tH = EH[1]) && void 0 !== tH ? tH : EH[2]) && void 0 !== hH ? hH : EH[3]) && void 0 !== SH ? SH : null,
-         GH = null !== XH && void 0 !== XH ? XH : HH.numberExpression,
+         PB = null === MB ? null : null !== (QB = null !== (oB = null !== (jB = MB[1]) && void 0 !== jB ? jB : MB[2]) && void 0 !== oB ? oB : MB[3]) && void 0 !== QB ? QB : null,
+         zB = null !== PB && void 0 !== PB ? PB : BB.numberExpression,
```

#### 2353. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25973-L25974` → after: `L25973-L25974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25973-L25974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25973-L25974) · [Before (L25973-L25974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25973-L25974)

```diff
-           AH = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,RS.e)(HH)}(?![\\w$])`).test(CH);
-         hD(CH).includes(HH) && LH >= 0 && (null !== XH || !AH) && (zH = `${HH} === ${LH}`)
+           YB = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,wQ.h)(BB)}(?![\\w$])`).test(JB);
+         Pa(JB).includes(BB) && GB >= 0 && (null !== PB || !YB) && (yB = `${BB} === ${GB}`)
```

#### 2354. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25977` → after: `L25977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25977) · [Before (L25977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25977)

```diff
-       return null !== zH && hD(zH).every((HH => QH.has(HH))) ? zH : null
+       return null !== yB && Pa(yB).every((BB => qB.has(BB))) ? yB : null
```

#### 2355. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25992` → after: `L25992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25992) · [Before (L25992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25992)

```diff
-   const VH = (null !== (SH = AH.messages) && void 0 !== SH ? SH : []).filter((HH => {
+   const nB = (null !== (QB = YB.messages) && void 0 !== QB ? QB : []).filter((BB => {
```

#### 2356. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25996` → after: `L25996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L25996) · [Before (L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L25996)

```diff
-     OH = 1 !== VH.length || FF.test(`${LH}\n${BH}`) ? tH : VH[0].at;
+     UB = 1 !== nB.length || Ch.test(`${GB}\n${OB}`) ? jB : nB[0].at;
```

#### 2357. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26010` → after: `L26010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26010) · [Before (L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26010)

```diff
-   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${LH}(?![\\w$])`).test(HH) || (0, jS.c)(HH, new RegExp(`${LH}\\s*=(?![=>])`), jS.j).length > 0 || wY(HH, BH) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${LH}\\s*\\([^()]*\\)\\s*\\{`, "m").test(HH)
+   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${GB}(?![\\w$])`).test(BB) || (0, EQ.f)(BB, new RegExp(`${GB}\\s*=(?![=>])`), EQ.p).length > 0 || Tl(BB, OB) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${GB}\\s*\\([^()]*\\)\\s*\\{`, "m").test(BB)
```

#### 2358. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26014` → after: `L26014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26014) · [Before (L26014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26014)

```diff
-   if (null === HH || null === BH || void 0 === BH || void 0 === BH.declaredNames || HH.length > RS.p) return [];
+   if (null === BB || null === OB || void 0 === OB || void 0 === OB.declaredNames || BB.length > wQ.o) return [];
```

#### 2359. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26019` → after: `L26019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26019) · [Before (L26019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26019)

```diff
-   for (const [, SH] of(0, jS.c)(AH, YD, jS.j)) {
+   for (const [, QB] of(0, EQ.f)(YB, Ra, EQ.p)) {
```

#### 2360. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26030` → after: `L26030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26030) · [Before (L26030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26030)

```diff
-   if (null === HH || null === BH || void 0 === BH || HH.length > RS.p || !HH.includes("/") || ! function(HH) {
+   if (null === BB || null === OB || void 0 === OB || BB.length > wQ.o || !BB.includes("/") || ! function(BB) {
```

#### 2361. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26040` → after: `L26040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26040) · [Before (L26040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26040)

```diff
-   const AH = [...BH.playerText, ...(null !== (LH = BH.messages) && void 0 !== LH ? LH : []).map((HH => {
+   const YB = [...OB.playerText, ...(null !== (GB = OB.messages) && void 0 !== GB ? GB : []).map((BB => {
```

#### 2362. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26049-L26050` → after: `L26049-L26050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26049-L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26049-L26050) · [Before (L26049-L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26049-L26050)

```diff
-     const HH = null !== (SH = null !== (hH = null !== (tH = zH[1]) && void 0 !== tH ? tH : zH[2]) && void 0 !== hH ? hH : zH[3]) && void 0 !== SH ? SH : zH[4];
-     for (const [BH] of(0, jS.c)(HH, MD, (0, jS.i)("\\w/:."))) {
+     const BB = null !== (QB = null !== (oB = null !== (jB = yB[1]) && void 0 !== jB ? jB : yB[2]) && void 0 !== oB ? oB : yB[3]) && void 0 !== QB ? QB : yB[4];
+     for (const [OB] of(0, EQ.f)(BB, Sa, (0, EQ.n)("\\w/:."))) {
```

#### 2363. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26081` → after: `L26081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26081) · [Before (L26081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26081)

```diff
-     for (const tH of (0, jS.c)(HH, JP, jS.j)) LT(tH[0], BH, LH, AH) || (tH.index > hH && SH.push({
+     for (const jB of (0, EQ.f)(BB, xA, EQ.p)) DV(jB[0], OB, GB, YB) || (jB.index > oB && QB.push({
```

#### 2364. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26091` → after: `L26091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26091) · [Before (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26091)

```diff
-     title: !0 === HH.isApiCall ? tH : hH("Not found in your code"),
+     title: !0 === BB.isApiCall ? jB : oB("Not found in your code"),
```

#### 2365. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26093` → after: `L26093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26093) · [Before (L26093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26093)

```diff
-   }, `${BH}-name-${LH}`) : HH.text))
+   }, `${OB}-name-${GB}`) : BB.text))
```

#### 2366. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26120` → after: `L26120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26120) · [Before (L26120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26120)

```diff
-   }, `${LH}-number-${BH}`)] : UD(HH.text, `${LH}-${BH}`, AH)))
+   }, `${GB}-number-${OB}`)] : da(BB.text, `${GB}-${OB}`, YB)))
```

#### 2367. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26124` → after: `L26124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26124) · [Before (L26124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26124)

```diff
-   return null === HH.suggestion ? BH("Not a Bloxd item") : `${BH("Not a Bloxd item")}: ${BH("Bloxd writes it")} "${HH.suggestion}"`
+   return null === BB.suggestion ? OB("Not a Bloxd item") : `${OB("Not a Bloxd item")}: ${OB("Bloxd writes it")} "${BB.suggestion}"`
```

#### 2368. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26135` → after: `L26135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26135) · [Before (L26135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26135)

```diff
-   for (const CH of hH) tH.push(...UD(HH.slice(zH, CH.start), `${BH}-${zH}`, LH, AH)), tH.push((0, IH.jsx)("span", {
+   for (const JB of oB) jB.push(...da(BB.slice(yB, JB.start), `${OB}-${yB}`, GB, YB)), jB.push((0, uB.jsx)("span", {
```

#### 2369. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26139-L26140` → after: `L26139-L26140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26139-L26140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26139-L26140) · [Before (L26139-L26140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26139-L26140)

```diff
-   }, `${BH}-item-${CH.start}`)), zH = CH.end;
-   return tH.push(...UD(HH.slice(zH), `${BH}-${zH}`, LH, AH)), tH
+   }, `${OB}-item-${JB.start}`)), yB = JB.end;
+   return jB.push(...da(BB.slice(yB), `${OB}-${yB}`, GB, YB)), jB
```

#### 2370. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26155` → after: `L26155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26155) · [Before (L26155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26155)

```diff
-     GH <= SH || (SH > tH && hH.push(...VD(HH.slice(tH, SH), BH + HH.slice(0, tH), `${AH}-${tH}`, rH)), hH.push((0, IH.jsx)("span", {
+     zB <= QB || (QB > jB && oB.push(...Ka(BB.slice(jB, QB), OB + BB.slice(0, jB), `${YB}-${jB}`, DB)), oB.push((0, uB.jsx)("span", {
```

#### 2371. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26159` → after: `L26159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26159) · [Before (L26159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26159)

```diff
-     }, `${AH}-marked-${SH}`)), tH = GH)
+     }, `${YB}-marked-${QB}`)), jB = zB)
```

#### 2372. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26161` → after: `L26161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26161) · [Before (L26161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26161)

```diff
-   return 0 === tH ? VD(HH, BH, AH, rH) : (tH < HH.length && hH.push(...VD(HH.slice(tH), BH + HH.slice(0, tH), `${AH}-${tH}`, rH)), hH)
+   return 0 === jB ? Ka(BB, OB, YB, DB) : (jB < BB.length && oB.push(...Ka(BB.slice(jB), OB + BB.slice(0, jB), `${YB}-${jB}`, DB)), oB)
```

#### 2373. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26172` → after: `L26172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26172) · [Before (L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26172)

```diff
-     title: `${LH("What your code says")}: ${BH.hint}`,
+     title: `${GB("What your code says")}: ${OB.hint}`,
```

#### 2374. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26186` → after: `L26186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26186) · [Before (L26186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26186)

```diff
-     title: `${LH("Worked out by Studio from your code")}:\n${BH.hint}`,
+     title: `${GB("Worked out by Studio from your code")}:\n${OB.hint}`,
```

#### 2375. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26226` → after: `L26226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26226) · [Before (L26226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26226)

```diff
-       }, `${BH}-note-${hH}`))
+       }, `${OB}-note-${oB}`))
```

#### 2376. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26232-L26233` → after: `L26232-L26233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26232-L26233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26232-L26233) · [Before (L26232-L26233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26232-L26233)

```diff
-         const zH = Math.min(CH, Math.max(EH, null !== (XH = null === (GH = SH[hH]) || void 0 === GH ? void 0 : GH.end) && void 0 !== XH ? XH : CH));
-         zH > EH && AH.push(...kD(HH.slice(EH, zH), HH.slice(0, EH), EH, `${BH}-${EH}`, LH, rH)), EH = zH, tH(EH)
+         const yB = Math.min(JB, Math.max(MB, null !== (PB = null === (zB = QB[oB]) || void 0 === zB ? void 0 : zB.end) && void 0 !== PB ? PB : JB));
+         yB > MB && YB.push(...Ia(BB.slice(MB, yB), BB.slice(0, MB), MB, `${OB}-${MB}`, GB, DB)), MB = yB, jB(MB)
```

#### 2377. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26237` → after: `L26237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26237) · [Before (L26237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26237)

```diff
-   for (const YH of HH.matchAll(Dl.h)) {
+   for (const lB of BB.matchAll(HI.i)) {
```

#### 2378. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26239-L26240` → after: `L26239-L26240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26239-L26240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26239-L26240) · [Before (L26239-L26240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26239-L26240)

```diff
-     const [, SH, hH, uH, QH, WH, MH] = YH, xH = `${BH}-${YH.index}`, vH = HH.slice(0, YH.index);
-     if (void 0 !== SH) AH.push((0, Dl.l)(SH, hH));
+     const [, QB, oB, pB, qB, ZB, NB] = lB, RB = `${OB}-${lB.index}`, WB = BB.slice(0, lB.index);
+     if (void 0 !== QB) YB.push((0, HI.j)(QB, oB));
```

#### 2379. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26244` → after: `L26244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26244) · [Before (L26244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26244)

```diff
-         children: kD(null !== (EH = null !== uH && void 0 !== uH ? uH : QH) && void 0 !== EH ? EH : "", vH, YH.index + 2, xH, LH, rH)
+         children: Ia(null !== (MB = null !== pB && void 0 !== pB ? pB : qB) && void 0 !== MB ? MB : "", WB, lB.index + 2, RB, GB, DB)
```

#### 2380. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26258` → after: `L26258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26258) · [Before (L26258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26258)

```diff
-           children: bD(null !== MH && void 0 !== MH ? MH : "", xH, LH, "code")
+           children: ma(null !== NB && void 0 !== NB ? NB : "", RB, GB, "code")
```

#### 2381. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26260` → after: `L26260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26260) · [Before (L26260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26260)

```diff
-         SH = void 0 === HH ? cY(null !== MH && void 0 !== MH ? MH : "") : null;
+         QB = void 0 === BB ? Ll(null !== NB && void 0 !== NB ? NB : "") : null;
```

#### 2382. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26263` → after: `L26263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26263) · [Before (L26263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26263)

```diff
-         title: (XH = SH, GH = LH.t, `${GH("World Code has no")} ${XH}, ${GH("so this code won't run")}`),
+         title: (PB = QB, zB = GB.t, `${zB("World Code has no")} ${PB}, ${zB("so this code won't run")}`),
```

#### 2383. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26265` → after: `L26265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26265) · [Before (L26265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26265)

```diff
-       }, xH) : void 0 === HH ? BH : (0, IH.jsx)("span", {
+       }, RB) : void 0 === BB ? OB : (0, uB.jsx)("span", {
```

#### 2384. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26290` → after: `L26290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26290) · [Before (L26290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26290)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2385. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26293` → after: `L26293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26293) · [Before (L26293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26293)

```diff
-     }), void 0 === zH ? tH : (0, IH.jsxs)(IH.Fragment, {
+     }), void 0 === yB ? jB : (0, uB.jsxs)(uB.Fragment, {
```

#### 2386. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26316` → after: `L26316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26316) · [Before (L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26316)

```diff
-   qD = new RegExp(`${cD}([${String.fromCharCode(eD)}-${String.fromCharCode(63743)}])`, "g");
+   ca = new RegExp(`${wa}([${String.fromCharCode(Ea)}-${String.fromCharCode(63743)}])`, "g");
```

#### 2387. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26320` → after: `L26320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26320) · [Before (L26320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26320)

```diff
-     AH = HH.replace(lD, ((HH, BH) => KD.test(BH) ? HH : BH.startsWith("[[") && BH.endsWith("]]") && null !== IL(BH.slice(2, -2)) ? BH : (LH.push(HH), cD + String.fromCharCode(eD + LH.length - 1)))),
+     YB = BB.replace(ra, ((BB, OB) => Xa.test(OB) ? BB : OB.startsWith("[[") && OB.endsWith("]]") && null !== uG(OB.slice(2, -2)) ? OB : (GB.push(BB), wa + String.fromCharCode(Ea + GB.length - 1)))),
```

#### 2388. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26327` → after: `L26327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26327) · [Before (L26327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26327)

```diff
-         "" !== HH && ("text" === (null === LH || void 0 === LH ? void 0 : LH.kind) ? LH.text += HH : BH.push({
+         "" !== BB && ("text" === (null === GB || void 0 === GB ? void 0 : GB.kind) ? GB.text += BB : OB.push({
```

#### 2389. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26345` → after: `L26345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26345) · [Before (L26345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26345)

```diff
-         const GH = null !== (SH = null === (hH = lL.exec(HH.slice(AH))) || void 0 === hH ? void 0 : hH[0]) && void 0 !== SH ? SH : "";
+         const zB = null !== (QB = null === (oB = IG.exec(BB.slice(YB))) || void 0 === oB ? void 0 : oB[0]) && void 0 !== QB ? QB : "";
```

#### 2390. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26369` → after: `L26369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26369) · [Before (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26369)

```diff
-       const YH = gX(Number((null !== (GH = null !== rH && void 0 !== rH ? rH : hH) && void 0 !== GH ? GH : "").replace(/,/g, "")), null !== SH && void 0 !== SH ? SH : tH, Number(zH.replace(/,/g, "")), CH);
+       const lB = XP(Number((null !== (zB = null !== DB && void 0 !== DB ? DB : oB) && void 0 !== zB ? zB : "").replace(/,/g, "")), null !== QB && void 0 !== QB ? QB : jB, Number(yB.replace(/,/g, "")), JB);
```

#### 2391. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26374` → after: `L26374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26374) · [Before (L26374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26374)

```diff
-       return void 0 === MH ? HH : `${RX(MH,BH)}${HH.slice(BH.length)}`
+       return void 0 === NB ? BB : `${EP(NB,OB)}${BB.slice(OB.length)}`
```

#### 2392. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26403` → after: `L26403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26403) · [Before (L26403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26403)

```diff
-     return (0, jS.o)(HH, RD, jD, (HH => {
+     return (0, EQ.z)(BB, ea, Ta, (BB => {
```

#### 2393. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26409-L26410` → after: `L26409-L26410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26409-L26410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26409-L26410) · [Before (L26409-L26410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26409-L26410)

```diff
-       const hH = null !== AH && void 0 !== AH ? AH : "*";
-       return (null !== rH && void 0 !== rH ? rH : SH).split(/(\[\[[^\]\n]+\]\])/).map(((HH, BH) => {
+       const oB = null !== YB && void 0 !== YB ? YB : "*";
+       return (null !== DB && void 0 !== DB ? DB : QB).split(/(\[\[[^\]\n]+\]\])/).map(((BB, OB) => {
```

#### 2394. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26414` → after: `L26414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26414) · [Before (L26414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26414)

```diff
-         return `${LH}${hH}${HH.trim()}${hH}${AH}`
+         return `${GB}${oB}${BB.trim()}${oB}${YB}`
```

#### 2395. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26427-L26428` → after: `L26427-L26428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26427-L26428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26427-L26428) · [Before (L26427-L26428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26427-L26428)

```diff
-         YH = null === GH || "heatmap" !== HH.link.key ? GH : iS(Hh(GH, null === (CH = LH.checkData) || void 0 === CH ? void 0 : CH.heatmapEvents), XH),
-         uH = null !== YH || "heatmap" !== HH.link.key ? YH : zl(Lh(tH(AH), hH(AH + 1, SH.length) + rH), {
+         lB = null === zB || "heatmap" !== BB.link.key ? zB : sQ(Bo(zB, null === (JB = GB.checkData) || void 0 === JB ? void 0 : JB.heatmapEvents), PB),
+         pB = null !== lB || "heatmap" !== BB.link.key ? lB : lI(Go(jB(YB), oB(YB + 1, QB.length) + DB), {
```

#### 2396. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26436` → after: `L26436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26436) · [Before (L26436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26436)

```diff
-       }, `${BH}stat-${AH}`)]
+       }, `${OB}stat-${YB}`)]
```

#### 2397. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26438` → after: `L26438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26438) · [Before (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26438)

```diff
-     return ID(HH.text, `${BH}${AH}`, LH)
+     return La(BB.text, `${OB}${YB}`, GB)
```

#### 2398. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26450` → after: `L26450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26450) · [Before (L26450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26450)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2399. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26453` → after: `L26453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26453) · [Before (L26453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26453)

```diff
-     }), null === BH ? LH("Studio has no data on this: a guess") : `${LH("Only")} ${BH} ${LH("players so far: a guess")}`]
+     }), null === OB ? GB("Studio has no data on this: a guess") : `${GB("Only")} ${OB} ${GB("players so far: a guess")}`]
```

#### 2400. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26466-L26467` → after: `L26466-L26467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26466-L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26466-L26467) · [Before (L26466-L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26466-L26467)

```diff
-     title: `${LH("What your code says")}: ${BH.hint}`,
-     children: [(0, IH.jsx)(PH.c, {
+     title: `${GB("What your code says")}: ${OB.hint}`,
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2401. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26495` → after: `L26495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26495) · [Before (L26495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26495)

```diff
-         }), " ", LH("events"), "" === HH.category ? "" : ` ${LH("in")} ${HH.category}`, " ", LH("are at"), " ", HH.text]
+         }), " ", GB("events"), "" === BB.category ? "" : ` ${GB("in")} ${BB.category}`, " ", GB("are at"), " ", BB.text]
```

#### 2402. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26502` → after: `L26502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26502) · [Before (L26502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26502)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2403. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26524` → after: `L26524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26524) · [Before (L26524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26524)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2404. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26527` → after: `L26527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26527) · [Before (L26527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26527)

```diff
-     }), LH ? `${BH.from} ${AH("also leads to")} ${BH.other}, ${AH("so players who didn't get to")} ${BH.to} ${AH("may have gone there instead")}.` : `${BH.from} ${AH("also leads on to")} ${BH.other} (${BH.otherShare}% ${AH("of its players")}), ${AH("so the")} ${BH.notTakenShare}% … [truncated]
+     }), GB ? `${OB.from} ${YB("also leads to")} ${OB.other}, ${YB("so players who didn't get to")} ${OB.to} ${YB("may have gone there instead")}.` : `${OB.from} ${YB("also leads on to")} ${OB.other} (${OB.otherShare}% ${YB("of its players")}), ${YB("so the")} ${OB.notTakenShare}% … [truncated]
```

#### 2405. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26548` → after: `L26548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26548) · [Before (L26548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26548)

```diff
-           XH = (0, RS.I)(HH, SH.end);
+           PB = (0, wQ.D)(BB, QB.end);
```

#### 2406. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26553-L26554` → after: `L26553-L26554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26553-L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26553-L26554) · [Before (L26553-L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26553-L26554)

```diff
-           text: "turned" === CH ? `Studio turned this round: in your code ${EH}.` : `${AH?"Careful":"Check the direction"}: in your code ${EH}.`,
-           hint: "" === BH.usedIn ? `its name, ${BH.name}` : BH.usedIn
+           text: "turned" === JB ? `Studio turned this round: in your code ${MB}.` : `${YB?"Careful":"Check the direction"}: in your code ${MB}.`,
+           hint: "" === OB.usedIn ? `its name, ${OB.name}` : OB.usedIn
```

#### 2407. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26573` → after: `L26573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26573) · [Before (L26573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26573)

```diff
-         }, `bump-${rH}`)
+         }, `bump-${DB}`)
```

#### 2408. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26580` → after: `L26580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26580) · [Before (L26580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26580)

```diff
-       }, `guess-${LH}`)
+       }, `guess-${GB}`)
```

#### 2409. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26586` → after: `L26586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26586) · [Before (L26586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26586)

```diff
-       }, `place-${LH}`)
+       }, `place-${GB}`)
```

#### 2410. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26593` → after: `L26593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26593) · [Before (L26593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26593)

```diff
-       }, `branch-${LH}`)
+       }, `branch-${GB}`)
```

#### 2411. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26599` → after: `L26599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26599) · [Before (L26599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26599)

```diff
-       }, `constant-${LH}`)
+       }, `constant-${GB}`)
```

#### 2412. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26605` → after: `L26605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26605) · [Before (L26605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26605)

```diff
-       }, `goal-${LH}`)
+       }, `goal-${GB}`)
```

#### 2413. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26608` → after: `L26608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26608) · [Before (L26608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26608)

```diff
-   for (const AH of HH.matchAll(Dl.h)) {
+   for (const YB of BB.matchAll(HI.i)) {
```

#### 2414. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26623` → after: `L26623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26623) · [Before (L26623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26623)

```diff
-     const SH = nD(zH(CH, AH), `g${LH}-`, BH, ND(zH(0, CH)), ND(zH(AH)));
+     const QB = ba(yB(JB, YB), `g${GB}-`, OB, aa(yB(0, JB)), aa(yB(YB)));
```

#### 2415. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26625` → after: `L26625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26625) · [Before (L26625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26625)

```diff
-   })), ...nD(zH(CH), `g${tH.length}-`, BH, ND(zH(0, CH)))]
+   })), ...ba(yB(JB), `g${jB.length}-`, OB, aa(yB(0, JB)))]
```

#### 2416. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26668` → after: `L26668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26668) · [Before (L26668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26668)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2417. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26701` → after: `L26701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26701) · [Before (L26701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26701)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2418. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26719-L26720` → after: `L26719-L26720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26719-L26720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26719-L26720) · [Before (L26719-L26720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26719-L26720)

```diff
-     title: null !== (BH = LH.line) && void 0 !== BH ? BH : `"${LH.text}"`,
-     children: [(0, IH.jsx)(PH.c, {
+     title: null !== (OB = GB.line) && void 0 !== OB ? OB : `"${GB.text}"`,
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2419. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26739` → after: `L26739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26739) · [Before (L26739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26739)

```diff
-       return `"${BH}"`
+       return `"${OB}"`
```

#### 2420. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26750` → after: `L26750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26750) · [Before (L26750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26750)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2421. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26753` → after: `L26753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26753) · [Before (L26753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26753)

```diff
-     }), " ", LH ? `${AH("Studio can't find")} ${rH} ${AH("in your game")}: ${AH(SH?"use your own place's name":"use one your game has")}.` : `${AH("Is")} ${rH} ${AH("in your game? If not, use one that is.")}`]
+     }), " ", GB ? `${YB("Studio can't find")} ${DB} ${YB("in your game")}: ${YB(QB?"use your own place's name":"use one your game has")}.` : `${YB("Is")} ${DB} ${YB("in your game? If not, use one that is.")}`]
```

#### 2422. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26763` → after: `L26763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26763) · [Before (L26763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26763)

```diff
-   const rH = LH ? "badge" === BH.kind ? `${AH("Your game already has the")} "${BH.name}" ${AH("badge")}` : `${AH("Your game already sends")} "${BH.name}"` : "badge" === BH.kind ? AH("You already have this badge.") : AH("You already have this message.");
+   const DB = GB ? "badge" === OB.kind ? `${YB("Your game already has the")} "${OB.name}" ${YB("badge")}` : `${YB("Your game already sends")} "${OB.name}"` : "badge" === OB.kind ? YB("You already have this badge.") : YB("You already have this message.");
```

#### 2423. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26766` → after: `L26766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26766) · [Before (L26766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26766)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2424. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26863` → after: `L26863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26863) · [Before (L26863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26863)

```diff
-   return rw((0, gM.D)(HH), BH)
+   return Je((0, wN.v)(BB), OB)
```

#### 2425. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26874` → after: `L26874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26874) · [Before (L26874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26874)

```diff
-     children: [LH.includes(BH.counts) ? "" : `${BH.counts}. `, AH("Why this number"), ": ", BH.basis]
+     children: [GB.includes(OB.counts) ? "" : `${OB.counts}. `, YB("Why this number"), ": ", OB.basis]
```

#### 2426. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26879` → after: `L26879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26879) · [Before (L26879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26879)

```diff
-   return `${BH("Target")}: ${HH.change} ${HH.counts}`
+   return `${OB("Target")}: ${BB.change} ${BB.counts}`
```

#### 2427. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26911` → after: `L26911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26911) · [Before (L26911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26911)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2428. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26942` → after: `L26942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26942) · [Before (L26942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26942)

```diff
-       CH = HH => `${HH}%`,
+       JB = BB => `${BB}%`,
```

#### 2429. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26948` → after: `L26948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26948) · [Before (L26948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26948)

```diff
-         GH = [`${CH(SH)} ${LH("of sessions")} ${jP(rH.minutes,LH)}`], YH = CH;
+         zB = [`${JB(QB)} ${GB("of sessions")} ${hA(DB.minutes,GB)}`], lB = JB;
```

#### 2430. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26951` → after: `L26951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26951) · [Before (L26951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26951)

```diff
-         GH = [`${CH(SH)} ${LH("of players at")} `, {
+         zB = [`${JB(QB)} ${GB("of players at")} `, {
```

#### 2431. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26953` → after: `L26953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26953) · [Before (L26953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26953)

```diff
-         }, ` ${LH("reach")} `, {
+         }, ` ${GB("reach")} `, {
```

#### 2432. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26955` → after: `L26955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26955) · [Before (L26955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26955)

```diff
-         }, rH.isOrLater ? ` ${LH("or a later one")}` : ""], YH = CH;
+         }, DB.isOrLater ? ` ${GB("or a later one")}` : ""], lB = JB;
```

#### 2433. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26958` → after: `L26958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26958) · [Before (L26958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26958)

```diff
-         GH = [`${RP(rH.toPlayers)} ${LH("of the")} ${RP(rH.fromPlayers)} ${LH("players who reached")} ${rH.from} ${LH("also reached")} ${rH.to} (${CH(SH)})`], YH = CH;
+         zB = [`${cA(DB.toPlayers)} ${GB("of the")} ${cA(DB.fromPlayers)} ${GB("players who reached")} ${DB.from} ${GB("also reached")} ${DB.to} (${JB(QB)})`], lB = JB;
```

#### 2434. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26961` → after: `L26961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26961) · [Before (L26961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26961)

```diff
-         GH = [`${RP(SH)} ${LH("plays a day")}`], YH = HH => `${RP(HH)} ${LH("plays a day")}`;
+         zB = [`${cA(QB)} ${GB("plays a day")}`], lB = BB => `${cA(BB)} ${GB("plays a day")}`;
```

#### 2435. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26964` → after: `L26964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26964) · [Before (L26964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26964)

```diff
-         GH = [`${LH("an average session lasts")} ${RP(SH)} ${LH("minutes")}`], YH = HH => `${RP(HH)} ${LH("minutes")}`;
+         zB = [`${GB("an average session lasts")} ${cA(QB)} ${GB("minutes")}`], lB = BB => `${cA(BB)} ${GB("minutes")}`;
```

#### 2436. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26967` → after: `L26967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26967) · [Before (L26967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26967)

```diff
-         GH = [`${LH("each player plays")} ${RP(SH)} ${LH("times in")} ${rH.days} ${LH("days")}`], YH = HH => `${RP(HH)} ${LH("times")}`
+         zB = [`${GB("each player plays")} ${cA(QB)} ${GB("times in")} ${DB.days} ${GB("days")}`], lB = BB => `${cA(BB)} ${GB("times")}`
```

#### 2437. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26970` → after: `L26970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26970) · [Before (L26970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26970)

```diff
-       QH = AH ? "" : `${LH("now")} ${YH(SH)}`;
+       qB = YB ? "" : `${GB("now")} ${lB(QB)}`;
```

#### 2438. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26973-L26975` → after: `L26973-L26975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26973-L26975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26973-L26975) · [Before (L26973-L26975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26973-L26975)

```diff
-       const HH = AH ? "" : `, ${QH}`,
-         BH = EH ? `, ${LH("the goal")}` : null === tH ? "" : `; ${LH("the goal is")} ${CH(tH)}`;
-       WH = `${zH.helpedAt} ${LH("above")} ${RP(zH.helpedPlayers)} (${CH(hH)} ${LH("of the new players")}${HH}${BH}) ${XH}.`
+       const BB = YB ? "" : `, ${qB}`,
+         OB = MB ? `, ${GB("the goal")}` : null === jB ? "" : `; ${GB("the goal is")} ${JB(jB)}`;
+       ZB = `${yB.helpedAt} ${GB("above")} ${cA(yB.helpedPlayers)} (${JB(oB)} ${GB("of the new players")}${BB}${OB}) ${PB}.`
```

#### 2439. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26977-L26978` → after: `L26977-L26978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26977-L26978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26977-L26978) · [Before (L26977-L26978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26977-L26978)

```diff
-       const HH = uH ? ` ${LH("over those")} ${zH.days} ${LH("days")}` : "";
-       WH = `${EH?`${LH(uH?"an average of":"reaching")} ${YH(hH)}${HH} (${LH("the goal")}${AH?"":`; ${QH}`})`:`${LH(uH?"an average above":"above")} ${YH(hH)}${HH}${AH?"":` (${QH})`}`} ${XH}${EH||null===tH?"":` (${LH("the goal is")} ${YH(tH)})`}.`
+       const BB = pB ? ` ${GB("over those")} ${yB.days} ${GB("days")}` : "";
+       ZB = `${MB?`${GB(pB?"an average of":"reaching")} ${lB(oB)}${BB} (${GB("the goal")}${YB?"":`; ${qB}`})`:`${GB(pB?"an average above":"above")} ${lB(oB)}${BB}${YB?"":` (${qB})`}`} ${PB}${MB||null===jB?"":` (${GB("the goal is")} ${lB(jB)})`}.`
```

#### 2440. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26981` → after: `L26981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26981) · [Before (L26981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26981)

```diff
-       xH = null !== MH && MH.high >= hH ? ` ${LH("In the last")} ${tP} ${LH("days, single days went from")} ${RP(MH.low)} ${LH("to")} ${YH(MH.high)}, ${LH("so go by the average")}.` : "";
+       RB = null !== NB && NB.high >= oB ? ` ${GB("In the last")} ${JA} ${GB("days, single days went from")} ${cA(NB.low)} ${GB("to")} ${lB(NB.high)}, ${GB("so go by the average")}.` : "";
```

#### 2441. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26986` → after: `L26986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26986) · [Before (L26986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26986)

```diff
-         vH = [`${LH("In")} ${zH.days} ${LH("days")}, ${LH("check")} `, nP(HH), "days" !== zH.kind || uH ? "" : ` ${LH("over those days")}`, `: ${LH("now")} `, ...GH, `, ${LH("and")} ${WH}`];
+         WB = [`${GB("In")} ${yB.days} ${GB("days")}, ${GB("check")} `, aA(BB), "days" !== yB.kind || pB ? "" : ` ${GB("over those days")}`, `: ${GB("now")} `, ...zB, `, ${GB("and")} ${ZB}`];
```

#### 2442. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26989` → after: `L26989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26989) · [Before (L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26989)

```diff
-         vH = [`${LH("When")} ${zH.at} ${LH("has about")} ${RP(zH.players)} ${LH("players")}, ${LH("check")} `, nP(HH), `: ${WH}`]
+         WB = [`${GB("When")} ${yB.at} ${GB("has about")} ${cA(yB.players)} ${GB("players")}, ${GB("check")} `, aA(BB), `: ${ZB}`]
```

#### 2443. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26994` → after: `L26994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26994) · [Before (L26994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26994)

```diff
-           BH = [`${LH("After your change, wait")} ${zH.days} ${LH("days")} (${LH("about")} ${RP(zH.count)} `, "plays" === zH.counts ? LH("new plays") : LH("new players at that step"), `), ${LH("for the chart to count only those, then check")} `, nP(HH), ": "];
+           OB = [`${GB("After your change, wait")} ${yB.days} ${GB("days")} (${GB("about")} ${cA(yB.count)} `, "plays" === yB.counts ? GB("new plays") : GB("new players at that step"), `), ${GB("for the chart to count only those, then check")} `, aA(BB), ": "];
```

#### 2444. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26997` → after: `L26997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L26997) · [Before (L26997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L26997)

```diff
-           BH = [`${LH("After your change, wait")} ${zH.days} ${LH("days, then check")} `, nP(HH), uH ? ": " : ` ${LH("over those days")}: `];
+           OB = [`${GB("After your change, wait")} ${yB.days} ${GB("days, then check")} `, aA(BB), pB ? ": " : ` ${GB("over those days")}: `];
```

#### 2445. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27000` → after: `L27000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27000) · [Before (L27000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27000)

```diff
-           BH = [`${LH("After your change, wait until")} ${zH.at} ${LH("has about")} ${RP(zH.players)} ${LH("players")} (${RP(zH.more)} ${LH("more")}), ${LH("then check")} `, nP(HH), ": "]
+           OB = [`${GB("After your change, wait until")} ${yB.at} ${GB("has about")} ${cA(yB.players)} ${GB("players")} (${cA(yB.more)} ${GB("more")}), ${GB("then check")} `, aA(BB), ": "]
```

#### 2446. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27002` → after: `L27002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27002) · [Before (L27002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27002)

```diff
-       vH = [`${"sessionsLasting"===rH.kind&&void 0!==rH.after?`${LH("Your change starts at")} ${rH.after} ${LH("minutes, so this checks the")} ${rH.minutes}${LH("-minute mark")}. `:""}${LH("Now")}: `, ...GH, ". ", ...BH, WH, xH]
+       WB = [`${"sessionsLasting"===DB.kind&&void 0!==DB.after?`${GB("Your change starts at")} ${DB.after} ${GB("minutes, so this checks the")} ${DB.minutes}${GB("-minute mark")}. `:""}${GB("Now")}: `, ...zB, ". ", ...OB, ZB, RB]
```

#### 2447. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27007` → after: `L27007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27007) · [Before (L27007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27007)

```diff
-       undo: null === HH.undo ? null : [`${LH("If it got worse, put back")} `, {
+       undo: null === BB.undo ? null : [`${GB("If it got worse, put back")} `, {
```

#### 2448. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27009` → after: `L27009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27009) · [Before (L27009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27009)

```diff
-       }, ...null === HH.undo.inside ? [] : [` ${LH("inside")} `, {
+       }, ...null === BB.undo.inside ? [] : [` ${GB("inside")} `, {
```

#### 2449. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27023` → after: `L27023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27023) · [Before (L27023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27023)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2450. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27058` → after: `L27058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27058) · [Before (L27058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27058)

```diff
-   } = (0, YH.B)(), uH = null === tH ? null : qP(LH, tH, SH, XH.constantLines), QH = function(HH, BH) {
+   } = (0, lB.H)(), pB = null === jB ? null : XA(GB, jB, QB, PB.constantLines), qB = function(BB, OB) {
```

#### 2451. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27064` → after: `L27064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27064) · [Before (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27064)

```diff
-   }(uH, tH).join("\n"), WH = (0, AH.useMemo)((() => "" === QH ? Gw : QH.split("\n")), [QH]), MH = null !== uH && null !== tH && XH.isOlder ? CI(uH, tH, zH) : null, {
+   }(pB, jB).join("\n"), ZB = (0, YB.useMemo)((() => "" === qB ? Ne : qB.split("\n")), [qB]), NB = null !== pB && null !== jB && PB.isOlder ? qu(pB, jB, yB) : null, {
```

#### 2452. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27129` → after: `L27129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27129) · [Before (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27129)

```diff
-   }(null !== (BH = null === UH || void 0 === UH ? void 0 : UH.nextChange) && void 0 !== BH ? BH : TH) : {
+   }(null !== (OB = null === SB || void 0 === SB ? void 0 : SB.nextChange) && void 0 !== OB ? OB : VB) : {
```

#### 2453. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27134-L27135` → after: `L27134-L27135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27134-L27135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27134-L27135) · [Before (L27134-L27135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27134-L27135)

```diff
-     return LH.steps.indexOf(null !== (BH = OH.get(HH)) && void 0 !== BH ? BH : HH)
-   }, oH = VH.steps.length, fH = VH.steps.filter((HH => bH.includes(mH(HH)))).length, lH = null !== SH && null !== VH.target && zx(VH.target, SH.change), KH = null !== SH && (null === uH ? TH : LH).blocks.some((HH => "list" === HH.kind ? HH.items.some((HH => zx(HH.text, SH.change) … [truncated]
+     return GB.steps.indexOf(null !== (OB = UB.get(BB)) && void 0 !== OB ? OB : BB)
+   }, KB = nB.steps.length, mB = nB.steps.filter((BB => fB.includes(dB(BB)))).length, IB = null !== QB && null !== nB.target && MR(nB.target, QB.change), FB = null !== QB && (null === pB ? VB : GB).blocks.some((BB => "list" === BB.kind ? BB.items.some((BB => MR(BB.text, QB.change) … [truncated]
```

#### 2454. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27179` → after: `L27179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27179) · [Before (L27179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27179)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2455. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27184` → after: `L27184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27184) · [Before (L27184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27184)

```diff
-         children: [null === VH.title ? GH(VE) : `${GH(VE)}:`, null !== VH.title && (0, IH.jsxs)("span", {
+         children: [null === nB.title ? zB(UM) : `${zB(UM)}:`, null !== nB.title && (0, uB.jsxs)("span", {
```

#### 2456. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27192` → after: `L27192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27192) · [Before (L27192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27192)

```diff
-         children: `${fH}/${oH}`
+         children: `${mB}/${KB}`
```

#### 2457. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27207` → after: `L27207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27207) · [Before (L27207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27207)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2458. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27226` → after: `L27226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27226) · [Before (L27226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27226)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2459. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27242` → after: `L27242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27242) · [Before (L27242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27242)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2460. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27261` → after: `L27261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27261) · [Before (L27261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27261)

```diff
-     SH = 1 === rH ? AH("in the first minute") : rH < 1 ? AH("this early") : `${AH("in the first")} ${rH} ${AH("minutes")}`,
+     QB = 1 === DB ? YB("in the first minute") : DB < 1 ? YB("this early") : `${YB("in the first")} ${DB} ${YB("minutes")}`,
```

#### 2461. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27266` → after: `L27266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27266) · [Before (L27266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27266)

```diff
-     children: LH ? `${AH("Nobody dies")} ${SH} ${AH("in your game, so this may not help")}.` : `${AH("Studio sees no deaths")} ${SH} (${AH("the earliest")}, ${BH.earliest.name}, ${AH("comes at")} ${hH} ${AH("min on average")}), ${AH("so this may not be why players leave")}.`
+     children: GB ? `${YB("Nobody dies")} ${QB} ${YB("in your game, so this may not help")}.` : `${YB("Studio sees no deaths")} ${QB} (${YB("the earliest")}, ${OB.earliest.name}, ${YB("comes at")} ${oB} ${YB("min on average")}), ${YB("so this may not be why players leave")}.`
```

#### 2462. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27279` → after: `L27279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27279) · [Before (L27279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27279)

```diff
-   } = (0, YH.B)(), CH = SH.blocks.flatMap((HH => {
+   } = (0, lB.H)(), JB = QB.blocks.flatMap((BB => {
```

#### 2463. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27281-L27282` → after: `L27281-L27282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27281-L27282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27281-L27282) · [Before (L27281-L27282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27281-L27282)

```diff
-     return "list" === HH.kind ? [null !== (BH = null === (LH = HH.items[0]) || void 0 === LH ? void 0 : LH.text) && void 0 !== BH ? BH : ""] : "paragraph" === HH.kind ? [HH.text] : []
-   }))[0], EH = null !== (BH = null !== (LH = null !== (AH = null !== (rH = SH.title) && void 0 !== rH ? rH : null === hH ? null : tw(hH, zH)) && void 0 !== AH ? AH : SH.target) && void 0 !== LH ? LH : CH) && void 0 !== BH ? BH : null;
+     return "list" === BB.kind ? [null !== (OB = null === (GB = BB.items[0]) || void 0 === GB ? void 0 : GB.text) && void 0 !== OB ? OB : ""] : "paragraph" === BB.kind ? [BB.text] : []
+   }))[0], MB = null !== (OB = null !== (GB = null !== (YB = null !== (DB = QB.title) && void 0 !== DB ? DB : null === oB ? null : ze(oB, yB)) && void 0 !== YB ? YB : QB.target) && void 0 !== GB ? GB : JB) && void 0 !== OB ? OB : null;
```

#### 2464. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27285` → after: `L27285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27285) · [Before (L27285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27285)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2465. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27322` → after: `L27322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27322) · [Before (L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27322)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2466. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27380` → after: `L27380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27380) · [Before (L27380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27380)

```diff
-     return null !== (HH = OO(QH, WH, kH)) && void 0 !== HH ? HH : function(HH, BH, LH, AH) {
+     return null !== (BB = uU(qB, ZB, kB)) && void 0 !== BB ? BB : function(BB, OB, GB, YB) {
```

#### 2467. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27384` → after: `L27384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27384) · [Before (L27384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27384)

```diff
-       const tH = null !== (rH = HD[hH[1].toLowerCase()]) && void 0 !== rH ? rH : Number(hH[1]),
+       const jB = null !== (DB = Qa[oB[1].toLowerCase()]) && void 0 !== DB ? DB : Number(oB[1]),
```

#### 2468. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27386` → after: `L27386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27386) · [Before (L27386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27386)

```diff
-       if (tH < 1 || HH.length > RS.p || DF.test(BH) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(zH)) return null;
+       if (jB < 1 || BB.length > wQ.o || Hh.test(OB) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(yB)) return null;
```

#### 2469. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27390` → after: `L27390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27390) · [Before (L27390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27390)

```diff
-           return null !== (BH = null === (LH = BD.exec(HH)) || void 0 === LH ? void 0 : LH[1]) && void 0 !== BH ? BH : null
+           return null !== (OB = null === (GB = oa.exec(BB)) || void 0 === GB ? void 0 : GB[1]) && void 0 !== OB ? OB : null
```

#### 2470. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27394` → after: `L27394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27394) · [Before (L27394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27394)

```diff
-         YH = null !== (SH = BH.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== SH ? SH : [],
+         lB = null !== (QB = OB.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== QB ? QB : [],
```

#### 2471. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27397` → after: `L27397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27397) · [Before (L27397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27397)

```diff
-       return null !== XH && 0 !== CH.length && uH && void 0 !== QH ? OO([`if (Date.now() - ${QH}[${XH}] >= ${6e4*tH}) {`, ...CH.map((HH => `  ${HH}`)), "}"].join("\n"), "onPlayerJoin", AH) : null
+       return null !== PB && 0 !== JB.length && pB && void 0 !== qB ? uU([`if (Date.now() - ${qB}[${PB}] >= ${6e4*jB}) {`, ...JB.map((BB => `  ${BB}`)), "}"].join("\n"), "onPlayerJoin", YB) : null
```

#### 2472. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27413` → after: `L27413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27413) · [Before (L27413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27413)

```diff
-         }))).size ? BH[0] : null !== (XH = null === (GH = CD(AH, HH, LH)[0]) || void 0 === GH ? void 0 : GH.event) && void 0 !== XH ? XH : null,
+         }))).size ? OB[0] : null !== (PB = null === (zB = pa(YB, BB, GB)[0]) || void 0 === zB ? void 0 : zB.event) && void 0 !== PB ? PB : null,
```

#### 2473. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27427` → after: `L27427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27427) · [Before (L27427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27427)

```diff
-     if (void 0 === uH || null === BH || BH.length > RS.p) return null;
+     if (void 0 === pB || null === OB || OB.length > wQ.o) return null;
```

#### 2474. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27429` → after: `L27429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27429) · [Before (L27429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27429)

```diff
-       WH = new Set([...null !== (SH = uH.params) && void 0 !== SH ? SH : [], ...null !== (hH = uH.idNames) && void 0 !== hH ? hH : [], ...null !== (tH = null === (zH = uH.body) || void 0 === zH ? void 0 : zH.locals) && void 0 !== tH ? tH : []]),
+       ZB = new Set([...null !== (QB = pB.params) && void 0 !== QB ? QB : [], ...null !== (oB = pB.idNames) && void 0 !== oB ? oB : [], ...null !== (jB = null === (yB = pB.body) || void 0 === yB ? void 0 : yB.locals) && void 0 !== jB ? jB : []]),
```

#### 2475. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27433-L27434` → after: `L27433-L27434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27433-L27434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27433-L27434) · [Before (L27433-L27434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27433-L27434)

```diff
-           hH = null !== (BH = null === (AH = HH.numberExpression) || void 0 === AH ? void 0 : AH.trim()) && void 0 !== BH ? BH : "",
-           tH = null === SH ? void 0 : (null !== (rH = LH.functions) && void 0 !== rH ? rH : []).find((HH => HH.name === SH[SH.length - 1])),
+           oB = null !== (OB = null === (YB = BB.numberExpression) || void 0 === YB ? void 0 : YB.trim()) && void 0 !== OB ? OB : "",
+           jB = null === QB ? void 0 : (null !== (DB = GB.functions) && void 0 !== DB ? DB : []).find((BB => BB.name === QB[QB.length - 1])),
```

#### 2476. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27447` → after: `L27447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27447) · [Before (L27447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27447)

```diff
-   }(WH, QH, kH, vH) : null), [fH, WH, QH, kH, vH]), KH = null !== (BH = null === fH || void 0 === fH ? void 0 : fH.code) && void 0 !== BH ? BH : QH, cH = null !== (LH = null !== (rH = null === fH || void 0 === fH ? void 0 : fH.where) && void 0 !== rH ? rH : null === lH || void 0  … [truncated]
+   }(ZB, qB, kB, WB) : null), [mB, ZB, qB, kB, WB]), FB = null !== (OB = null === mB || void 0 === mB ? void 0 : mB.code) && void 0 !== OB ? OB : qB, iB = null !== (GB = null !== (DB = null === mB || void 0 === mB ? void 0 : mB.where) && void 0 !== DB ? DB : null === IB || void 0  … [truncated]
```

#### 2477. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27452` → after: `L27452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27452) · [Before (L27452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27452)

```diff
-     const BH = null === eH ? KH : eH.code;
+     const OB = null === LB ? FB : LB.code;
```

#### 2478. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27456` → after: `L27456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27456) · [Before (L27456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27456)

```diff
-       runnable: null === LH || null === AH ? LH : {
+       runnable: null === GB || null === YB ? GB : {
```

#### 2479. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27462-L27463` → after: `L27462-L27463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27462-L27463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27462-L27463) · [Before (L27462-L27463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27462-L27463)

```diff
-   }), [eH, KH, cH, kH, mH, oH]), NH = null !== (SH = null === qH || void 0 === qH ? void 0 : qH.code) && void 0 !== SH ? SH : null, RH = (0, AH.useMemo)((() => null === (null === qH || void 0 === qH ? void 0 : qH.once) || null === qH ? [] : [qH.once.name]), [qH]), jH = (0, AH.use … [truncated]
-     return !(null === HH || HH.length > RS.p) && KI(HH).split("\n").some((HH => kI.test(HH) && II.test(HH)))
+   }), [LB, FB, iB, kB, dB, KB]), XB = null !== (QB = null === gB || void 0 === gB ? void 0 : gB.code) && void 0 !== QB ? QB : null, wB = (0, YB.useMemo)((() => null === (null === gB || void 0 === gB ? void 0 : gB.once) || null === gB ? [] : [gB.once.name]), [gB]), EB = (0, YB.use … [truncated]
+     return !(null === BB || BB.length > wQ.o) && wu(BB).split("\n").some((BB => Fu.test(BB) && gu.test(BB)))
```

#### 2480. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27467` → after: `L27467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27467) · [Before (L27467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27467)

```diff
-     const HH = [...Rb(null !== KH && void 0 !== KH ? KH : "", JH, !0), ...Rb(xH, JH)];
+     const BB = [...bf(null !== FB && void 0 !== FB ? FB : "", vB, !0), ...bf(RB, vB)];
```

#### 2481. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27489` → after: `L27489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27489) · [Before (L27489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27489)

```diff
-       const [, XH, GH, YH] = EH, uH = QC(GH), QH = null !== (rH = null === uH || void 0 === uH ? void 0 : uH.key) && void 0 !== rH ? rH : GH, WH = `${QH}: ${YH.trim()},`, MH = null === BH || null === (SH = kC.exec(BH)) || void 0 === SH ? void 0 : SH[1];
+       const [, PB, zB, lB] = MB, pB = ZJ(zB), qB = null !== (DB = null === pB || void 0 === pB ? void 0 : pB.key) && void 0 !== DB ? DB : zB, ZB = `${qB}: ${lB.trim()},`, NB = null === OB || null === (QB = dJ.exec(OB)) || void 0 === QB ? void 0 : QB[1];
```

#### 2482. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27500` → after: `L27500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27500) · [Before (L27500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27500)

```diff
-         code: `${xH[1]} ${GH} = ${YH.trim()}`,
+         code: `${RB[1]} ${zB} = ${lB.trim()}`,
```

#### 2483. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27516` → after: `L27516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27516) · [Before (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27516)

```diff
-         TH = void 0 !== vH && vH.startsWith(`${QH}:`) ? vH : null !== PH && PH[1] === GH ? `${QH}: ${PH[2].trim()},` : null;
+         VB = void 0 !== WB && WB.startsWith(`${qB}:`) ? WB : null !== AB && AB[1] === zB ? `${qB}: ${AB[2].trim()},` : null;
```

#### 2484. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27519` → after: `L27519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27519) · [Before (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27519)

```diff
-         where: `${AH("Replace the line")} \`${TH}\` ${AH("inside")} \`${uH.object}\``
+         where: `${YB("Replace the line")} \`${VB}\` ${YB("inside")} \`${pB.object}\``
```

#### 2485. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27522` → after: `L27522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27522) · [Before (L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27522)

```diff
-         where: void 0 === MH ? `${AH("Replace the line starting")} \`${QH}:\` ${AH("inside")} \`${uH.object}\`` : BH
+         where: void 0 === NB ? `${YB("Replace the line starting")} \`${qB}:\` ${YB("inside")} \`${pB.object}\`` : OB
```

#### 2486. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27533` → after: `L27533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27533) · [Before (L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27533)

```diff
-         hH = null === SH ? void 0 : null !== (LH = BH.get(SH[1])) && void 0 !== LH ? LH : BH.get(null !== (AH = null === (rH = QC(SH[1])) || void 0 === rH ? void 0 : rH.key) && void 0 !== AH ? AH : ""),
+         oB = null === QB ? void 0 : null !== (GB = OB.get(QB[1])) && void 0 !== GB ? GB : OB.get(null !== (YB = null === (DB = ZJ(QB[1])) || void 0 === DB ? void 0 : DB.key) && void 0 !== YB ? YB : ""),
```

#### 2487. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27543` → after: `L27543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27543) · [Before (L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27543)

```diff
-     if (null !== gH) return null !== (HH = gH.added) && void 0 !== HH ? HH : {
+     if (null !== rB) return null !== (BB = rB.added) && void 0 !== BB ? BB : {
```

#### 2488. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27566` → after: `L27566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27566) · [Before (L27566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27566)

```diff
-   }), [gH, qH, NH, cH, kH, RH]), rB = null === BB ? yH : 0 === AB.top.length ? UH("Paste at the bottom of your World Code") : AB.join.length > 0 ? UH("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === AB.top.length ? UH("Paste the line abov … [truncated]
+   }), [rB, gB, XB, iB, kB, wB]), DO = null === OO ? tB : 0 === YO.top.length ? SB("Paste at the bottom of your World Code") : YO.join.length > 0 ? SB("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === YO.top.length ? SB("Paste the line abov … [truncated]
```

#### 2489. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27568-L27569` → after: `L27568-L27569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27568-L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27568-L27569) · [Before (L27568-L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27568-L27569)

```diff
-     return null === BB ? HH : HH.filter((HH => !BB.params.includes(HH)))
-   }), [gH, NH, cH, kH, RH, BB]), hB = null === wH && null === ZH && 0 === aH.length && 0 === dH.length && (null !== gH || 0 === SB.length) && !FH, tB = hB && (null === (null === qH || void 0 === qH ? void 0 : qH.once) || null !== (null === qH || void 0 === qH ? void 0 : qH.loopNa … [truncated]
+     return null === OO ? BB : BB.filter((BB => !OO.params.includes(BB)))
+   }), [rB, XB, iB, kB, wB, OO]), oO = null === eB && null === TB && 0 === CB.length && 0 === bB.length && (null !== rB || 0 === QO.length) && !hB, jO = oO && (null === (null === gB || void 0 === gB ? void 0 : gB.once) || null !== (null === gB || void 0 === gB ? void 0 : gB.loopNa … [truncated]
```

#### 2490. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27576` → after: `L27576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27576) · [Before (L27576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27576)

```diff
-       return `${HH.slice(0,SH)}${BH.test} && ${AH.cond}${HH.slice(SH+AH.cond.length)}`
+       return `${BB.slice(0,QB)}${OB.test} && ${YB.cond}${BB.slice(QB+YB.cond.length)}`
```

#### 2491. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27580` → after: `L27580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27580) · [Before (L27580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27580)

```diff
-     return null === SH || /^(?:const|let|var|class|function)\b/.test(SH) || /;\s*\S/.test(NV(SH)) ? [`if (${BH.test}) {`, ...rH.map((HH => `  ${HH}`)), "}"].join("\n") : `if (${BH.test}) ${SH}`
+     return null === QB || /^(?:const|let|var|class|function)\b/.test(QB) || /;\s*\S/.test(an(QB)) ? [`if (${OB.test}) {`, ...DB.map((BB => `  ${BB}`)), "}"].join("\n") : `if (${OB.test}) ${QB}`
```

#### 2492. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27588` → after: `L27588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27588) · [Before (L27588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27588)

```diff
-   }(zB.after, CB) : EB ? null : tB && null === BB ? ZI(hk(pH, yH, kH, xH), xH, kH) : null), [zB, CB, EB, tB, BB, pH, yH, kH, xH]), GB = null !== (hH = null === gH || void 0 === gH ? void 0 : gH.added) && void 0 !== hH ? hH : null, YB = (0, AH.useMemo)((() => null === GB ? null :  … [truncated]
+   }(yO.after, JO) : MO ? null : jO && null === OO ? xu(pk(xB, tB, kB, RB), RB, kB) : null), [yO, JO, MO, jO, OO, xB, tB, kB, RB]), zO = null !== (oB = null === rB || void 0 === rB ? void 0 : rB.added) && void 0 !== oB ? oB : null, lO = (0, YB.useMemo)((() => null === zO ? null :  … [truncated]
```

#### 2493. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27599` → after: `L27599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27599) · [Before (L27599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27599)

```diff
-     ["leftOut", (null !== (tH = null === eH || void 0 === eH ? void 0 : eH.leftOut.length) && void 0 !== tH ? tH : 0) > 0],
+     ["leftOut", (null !== (jB = null === LB || void 0 === LB ? void 0 : LB.leftOut.length) && void 0 !== jB ? jB : 0) > 0],
```

#### 2494. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27605` → after: `L27605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27605) · [Before (L27605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27605)

```diff
-   }))) || void 0 === CH ? void 0 : CH[0]) && void 0 !== zH ? zH : null, QB = HH => !mH || uB === HH, WB = QB("leftOut") ? Tw(null !== (EH = null === eH || void 0 === eH ? void 0 : eH.leftOut) && void 0 !== EH ? EH : [], mH) : [], MB = (0, AH.useMemo)((() => null !== zB ? {
+   }))) || void 0 === JB ? void 0 : JB[0]) && void 0 !== yB ? yB : null, qO = BB => !dB || pO === BB, ZO = qO("leftOut") ? ke(null !== (MB = null === LB || void 0 === LB ? void 0 : LB.leftOut) && void 0 !== MB ? MB : [], dB) : [], NO = (0, YB.useMemo)((() => null !== yO ? {
```

#### 2495. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27612` → after: `L27612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27612) · [Before (L27612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27612)

```diff
-     if ((null !== (AH = BH.match(/\([^()]*\)/g)) && void 0 !== AH ? AH : []).some((HH => !vl.test(HH))) || xl.test(BH) || Sk(HH)) return null;
+     if ((null !== (YB = OB.match(/\([^()]*\)/g)) && void 0 !== YB ? YB : []).some((BB => !UI.test(BB))) || nI.test(OB) || lk(BB)) return null;
```

#### 2496. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27617` → after: `L27617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27617) · [Before (L27617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27617)

```diff
-     return (0, jS.c)(hH, /return(?![\w$])/, jS.j).length > 0 || rH.body.locals.some((HH => ZY(hH, HH) && !wY(hH, HH))) ? null : {
+     return (0, EQ.f)(oB, /return(?![\w$])/, EQ.p).length > 0 || DB.body.locals.some((BB => bl(oB, BB) && !Tl(oB, BB))) ? null : {
```

#### 2497. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27623-L27624` → after: `L27623-L27624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27623-L27624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27623-L27624) · [Before (L27623-L27624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27623-L27624)

```diff
-     const BH = HH === yH ? MB : null,
-       LH = HH === yH && null !== lH && yH === lH.name ? lH : null;
+     const OB = BB === tB ? NO : null,
+       GB = BB === tB && null !== IB && tB === IB.name ? IB : null;
```

#### 2498. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27639` → after: `L27639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27639) · [Before (L27639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27639)

```diff
-           title: `${BH.after.source}, ${UH("line")} ${BH.after.line}: ${BH.after.text}`,
+           title: `${OB.after.source}, ${SB("line")} ${OB.after.line}: ${OB.after.text}`,
```

#### 2499. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27665` → after: `L27665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27665) · [Before (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27665)

```diff
-           children: [(0, IH.jsx)(PH.c, {
+           children: [(0, uB.jsx)(AB.b, {
```

#### 2500. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27670` → after: `L27670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27670) · [Before (L27670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27670)

```diff
-           code: null !== (XH = null !== (GH = null === BB || void 0 === BB ? void 0 : BB.code) && void 0 !== GH ? GH : CB) && void 0 !== XH ? XH : pH,
+           code: null !== (PB = null !== (zB = null === OO || void 0 === OO ? void 0 : OO.code) && void 0 !== zB ? zB : JO) && void 0 !== PB ? PB : xB,
```

#### 2501. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27675` → after: `L27675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27675) · [Before (L27675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27675)

```diff
-           children: bD(null !== (YH = null !== (uH = null === BB || void 0 === BB ? void 0 : BB.code) && void 0 !== uH ? uH : CB) && void 0 !== YH ? YH : pH, "next-change-code", TH, "pasteCode")
+           children: ma(null !== (lB = null !== (pB = null === OO || void 0 === OO ? void 0 : OO.code) && void 0 !== pB ? pB : JO) && void 0 !== lB ? lB : xB, "next-change-code", VB, "pasteCode")
```

#### 2502. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27714` → after: `L27714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27714) · [Before (L27714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27714)

```diff
-         }), "):", " ", null === jH.line ? `"${jH.text}"` : (0, IH.jsx)("code", {
+         }), "):", " ", null === EB.line ? `"${EB.text}"` : (0, uB.jsx)("code", {
```

#### 2503. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27797` → after: `L27797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27797) · [Before (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27797)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2504. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27815` → after: `L27815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27815) · [Before (L27815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27815)

```diff
-       children: [rH > 0 && (rH === BH.length - 1 ? ` ${LH("and")} ` : ", "), (0, IH.jsx)("code", {
+       children: [DB > 0 && (DB === OB.length - 1 ? ` ${GB("and")} ` : ", "), (0, uB.jsx)("code", {
```

#### 2505. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27824` → after: `L27824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27824) · [Before (L27824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27824)

```diff
-   return HH.length <= 1 ? null !== (LH = HH[0]) && void 0 !== LH ? LH : "" : `${HH.slice(0,-1).join(", ")} ${BH("and")} ${HH[HH.length-1]}`
+   return BB.length <= 1 ? null !== (GB = BB[0]) && void 0 !== GB ? GB : "" : `${BB.slice(0,-1).join(", ")} ${OB("and")} ${BB[BB.length-1]}`
```

#### 2506. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27837` → after: `L27837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27837) · [Before (L27837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27837)

```diff
-       children: "gives" === BH.kind ? `${AH("You already give")} ${Vw(BH.items,AH)}.` : AH(HH ? "You already have this welcome message." : "You already have this message.")
+       children: "gives" === OB.kind ? `${YB("You already give")} ${Ke(OB.items,YB)}.` : YB(BB ? "You already have this welcome message." : "You already have this message.")
```

#### 2507. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27849` → after: `L27849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27849) · [Before (L27849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27849)

```diff
-       }), "): ", null === BH.line ? `"${BH.text}"` : (0, IH.jsx)("code", {
+       }), "): ", null === OB.line ? `"${OB.text}"` : (0, uB.jsx)("code", {
```

#### 2508. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27865` → after: `L27865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27865) · [Before (L27865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27865)

```diff
-       children: `api.${BH}`
+       children: `api.${OB}`
```

#### 2509. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27880` → after: `L27880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27880) · [Before (L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27880)

```diff
-       children: `const ${BH} = ${LH}`
+       children: `const ${OB} = ${GB}`
```

#### 2510. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27907` → after: `L27907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27907) · [Before (L27907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27907)

```diff
-     of null !== (XH = null === LH || void 0 === LH ? void 0 : LH.renames) && void 0 !== XH ? XH : []) {
+     of null !== (PB = null === GB || void 0 === GB ? void 0 : GB.renames) && void 0 !== PB ? PB : []) {
```

#### 2511. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27913` → after: `L27913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27913) · [Before (L27913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27913)

```diff
-     }, `young-${GH}`))
+     }, `young-${zB}`))
```

#### 2512. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27931` → after: `L27931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27931) · [Before (L27931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27931)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2513. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27942` → after: `L27942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27942) · [Before (L27942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27942)

```diff
-   return 1 === LH.length ? `${BH("line")} ${LH[0]}` : `${BH("lines")} ${Vw(LH.map(String),BH)}`
+   return 1 === GB.length ? `${OB("line")} ${GB[0]}` : `${OB("lines")} ${Ke(GB.map(String),OB)}`
```

#### 2514. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27958` → after: `L27958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L27958) · [Before (L27958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L27958)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2515. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28021` → after: `L28021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28021) · [Before (L28021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28021)

```diff
-     }), " ", AH ? hH : tH]
+     }), " ", YB ? oB : jB]
```

#### 2516. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28054` → after: `L28054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28054) · [Before (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28054)

```diff
-         children: [(0, IH.jsx)(PH.c, {
+         children: [(0, uB.jsx)(AB.b, {
```

#### 2517. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28100` → after: `L28100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28100) · [Before (L28100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28100)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2518. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28144` → after: `L28144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28144) · [Before (L28144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28144)

```diff
-         children: "insert" === BH.kind ? `  ${HH}` : HH
+         children: "insert" === OB.kind ? `  ${BB}` : BB
```

#### 2519. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28146` → after: `L28146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28146) · [Before (L28146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28146)

```diff
-     }, `added-${LH}`))), "insert" === BH.kind && BH.next.map(((HH, BH) => (0, IH.jsxs)("span", {
+     }, `added-${GB}`))), "insert" === OB.kind && OB.next.map(((BB, OB) => (0, uB.jsxs)("span", {
```

#### 2520. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28152` → after: `L28152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28152) · [Before (L28152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28152)

```diff
-         children: `  ${HH}`
+         children: `  ${BB}`
```

#### 2521. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28154` → after: `L28154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28154) · [Before (L28154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28154)

```diff
-     }, `next-${BH}`))), "insert" === BH.kind && BH.next.length >= ew && (0, IH.jsxs)("span", {
+     }, `next-${OB}`))), "insert" === OB.kind && OB.next.length >= we && (0, uB.jsxs)("span", {
```

#### 2522. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28186` → after: `L28186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28186) · [Before (L28186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28186)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2523. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28246` → after: `L28246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28246) · [Before (L28246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28246)

```diff
-   return [HH, ...BH.map((HH => "string" === typeof HH ? HH : "code" in HH ? HH.code : ""))].join(" ")
+   return [BB, ...OB.map((BB => "string" === typeof BB ? BB : "code" in BB ? BB.code : ""))].join(" ")
```

#### 2524. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28259` → after: `L28259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28259) · [Before (L28259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28259)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2525. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28262` → after: `L28262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28262) · [Before (L28262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28262)

```diff
-     }), rH("Your events"), (0, IH.jsx)(PH.c, {
+     }), DB("Your events"), (0, uB.jsx)(AB.b, {
```

#### 2526. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28270` → after: `L28270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28270) · [Before (L28270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28270)

```diff
-     return void 0 === AH ? null : `${BH("Only")} ${(0,RS.f)(AH)} ${BH("players this week, so these are hints.")}`
+     return void 0 === YB ? null : `${OB("Only")} ${(0,wQ.i)(YB)} ${OB("players this week, so these are hints.")}`
```

#### 2527. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28280` → after: `L28280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28280) · [Before (L28280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28280)

```diff
-         hH = "spot" === SH.kind && pG(HH.eventType) && "" !== SH.value ? `${HH.eventType}: ${SH.value}` : null,
+         oB = "spot" === QB.kind && tz(BB.eventType) && "" !== QB.value ? `${BB.eventType}: ${QB.value}` : null,
```

#### 2528. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28322` → after: `L28322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28322) · [Before (L28322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28322)

```diff
-       missing: `${rH("Want to see what players do? Add one tracking line: see")} "${null!==AH&&void 0!==AH?AH:""}" ${rH("below.")}`,
+       missing: `${DB("Want to see what players do? Add one tracking line: see")} "${null!==YB&&void 0!==YB?YB:""}" ${DB("below.")}`,
```

#### 2529. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28331` → after: `L28331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28331) · [Before (L28331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28331)

```diff
-       const HH = SH.days < 7 ? ` (${SH.days} ${1===SH.days?rH("day"):rH("days")})` : "",
+       const BB = QB.days < 7 ? ` (${QB.days} ${1===QB.days?DB("day"):DB("days")})` : "",
```

#### 2530. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28333` → after: `L28333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28333) · [Before (L28333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28333)

```diff
-       hH = 0 === SH.players ? rH("No players this week, so treat the reasons below as guesses.") : `${rH("Only")} ${SH.players} ${BH}${HH}: ${rH("too few to tell why people leave, so treat the reasons below as guesses.")}`, tH = SH.eventTypes
+       oB = 0 === QB.players ? DB("No players this week, so treat the reasons below as guesses.") : `${DB("Only")} ${QB.players} ${OB}${BB}: ${DB("too few to tell why people leave, so treat the reasons below as guesses.")}`, jB = QB.eventTypes
```

#### 2531. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28336` → after: `L28336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28336) · [Before (L28336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28336)

```diff
-     0 === BH.length && tH.length > 0 ? zH = [`${rH("You already log")} `, ...kU(tH.slice(0, mU), rH), `: ${rH("they will say more as players come.")}`] : 0 === BH.length && null !== AH && (zH = [`${rH("Start with the line under")} "${AH}" ${rH("below.")}`]);
+     0 === OB.length && jB.length > 0 ? yB = [`${DB("You already log")} `, ...KS(jB.slice(0, uS), DB), `: ${DB("they will say more as players come.")}`] : 0 === OB.length && null !== YB && (yB = [`${DB("Start with the line under")} "${YB}" ${DB("below.")}`]);
```

#### 2532. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28338` → after: `L28338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28338) · [Before (L28338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28338)

```diff
-     return BH.length > 0 ? CH = [`${rH("Studio shows each one after about")} ${rU} ${rH("players send it")}: `, {
+     return OB.length > 0 ? JB = [`${DB("Studio shows each one after about")} ${oS} ${DB("players send it")}: `, {
```

#### 2533. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28340` → after: `L28340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28340) · [Before (L28340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28340)

```diff
-     }] : "fewPlayers" === SH.kind && (CH = [`${rH("Studio can say why players leave after about")} ${AU} ${rH("players a week")}: `, {
+     }] : "fewPlayers" === QB.kind && (JB = [`${DB("Studio can say why players leave after about")} ${QS} ${DB("players a week")}: `, {
```

#### 2534. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28353` → after: `L28353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28353) · [Before (L28353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28353)

```diff
-   }), YH = `${LH.length} ${1===LH.length?tH("event to log"):tH("events to log")}`;
+   }), lB = `${GB.length} ${1===GB.length?jB("event to log"):jB("events to log")}`;
```

#### 2535. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28360` → after: `L28360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28360) · [Before (L28360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28360)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2536. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28375` → after: `L28375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28375) · [Before (L28375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28375)

```diff
-     }), 0 === LH.length ? GH : (0, IH.jsxs)("details", {
+     }), 0 === GB.length ? zB : (0, uB.jsxs)("details", {
```

#### 2537. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28378` → after: `L28378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28378) · [Before (L28378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28378)

```diff
-         children: [(0, IH.jsx)(PH.c, {
+         children: [(0, uB.jsx)(AB.b, {
```

#### 2538. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28432` → after: `L28432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28432) · [Before (L28432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28432)

```diff
-               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${HH.verdict}`,
+               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${BB.verdict}`,
```

#### 2539. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28444` → after: `L28444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28444) · [Before (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28444)

```diff
-         className: `StudioAiJourneyStep StudioAiJourneyStep-${HH.verdict}`,
+         className: `StudioAiJourneyStep StudioAiJourneyStep-${BB.verdict}`,
```

#### 2540. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28480` → after: `L28480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28480) · [Before (L28480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28480)

```diff
-     children: [(0, IH.jsx)(PH.c, {
+     children: [(0, uB.jsx)(AB.b, {
```

#### 2541. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28531` → after: `L28531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28531) · [Before (L28531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28531)

```diff
-   } = (0, YH.B)(), [eH, qH] = (0, AH.useState)(null), gH = null !== vH && VI(tH);
+   } = (0, lB.H)(), [LB, gB] = (0, YB.useState)(null), rB = null !== WB && uu(jB);
```

#### 2542. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28548` → after: `L28548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28548) · [Before (L28548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28548)

```diff
-     nH = (0, AH.useMemo)((() => eO(tH, null !== WH && void 0 !== WH ? WH : new Set)), [tH, WH]);
+     cB = (0, YB.useMemo)((() => EU(jB, null !== ZB && void 0 !== ZB ? ZB : new Set)), [jB, ZB]);
```

#### 2543. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28567` → after: `L28567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28567) · [Before (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28567)

```diff
-       journey: null !== GH && void 0 !== GH ? GH : null,
+       journey: null !== zB && void 0 !== zB ? zB : null,
```

#### 2544. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28594` → after: `L28594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28594) · [Before (L28594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28594)

```diff
-       isCodeInPlaceOpen: null === UH ? !0 === QH : PW(UH),
+       isCodeInPlaceOpen: null === SB ? !0 === qB : SZ(SB),
```

#### 2545. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28608` → after: `L28608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28608) · [Before (L28608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28608)

```diff
-     HH.length > 0 && console.info(`The Studio AI answer cited ${HH.length} statistics Studio doesn't have, which are left out`, HH)
+     BB.length > 0 && console.info(`The Studio AI answer cited ${BB.length} statistics Studio doesn't have, which are left out`, BB)
```

#### 2546. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28612` → after: `L28612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28612) · [Before (L28612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28612)

```diff
-       children: 1 === ZH ? cH("Studio left out 1 idea that doesn't fit your game.") : `${cH("Studio left out")} ${ZH} ${cH("ideas that don't fit your game")}.`
+       children: 1 === TB ? iB("Studio left out 1 idea that doesn't fit your game.") : `${iB("Studio left out")} ${TB} ${iB("ideas that don't fit your game")}.`
```

#### 2547. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28616` → after: `L28616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28616) · [Before (L28616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28616)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2548. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28621` → after: `L28621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28621) · [Before (L28621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28621)

```diff
-     yH = null !== (BH = null !== QH && void 0 !== QH ? QH : null === DH || void 0 === DH ? void 0 : DH.sections.some((HH => "fixFirst" === HH.key && HH.heading === bE("fixFirst", !0)))) && void 0 !== BH && BH,
+     tB = null !== (OB = null !== qB && void 0 !== qB ? qB : null === aB || void 0 === aB ? void 0 : aB.sections.some((BB => "fixFirst" === BB.key && BB.heading === kM("fixFirst", !0)))) && void 0 !== OB && OB,
```

#### 2549. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28628` → after: `L28628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28628) · [Before (L28628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28628)

```diff
-     LB = HH => 0 === Mu(HH).length ? HH : xu(HH),
+     GO = BB => 0 === Rp(BB).length ? BB : Wp(BB),
```

#### 2550. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28631` → after: `L28631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28631) · [Before (L28631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28631)

```diff
-     SB = null !== (LH = null === rB || void 0 === rB ? void 0 : rB.nextChange) && void 0 !== LH ? LH : null,
+     QO = null !== (GB = null === DO || void 0 === DO ? void 0 : DO.nextChange) && void 0 !== GB ? GB : null,
```

#### 2551. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28644` → after: `L28644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28644) · [Before (L28644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28644)

```diff
-   const tB = null !== uH && void 0 !== uH ? uH : [],
+   const jO = null !== pB && void 0 !== pB ? pB : [],
```

#### 2552. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28646` → after: `L28646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28646) · [Before (L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28646)

```diff
-     CB = null !== wH && void 0 !== wH ? wH : DH,
+     JO = null !== eB && void 0 !== eB ? eB : aB,
```

#### 2553. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28648` → after: `L28648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28648) · [Before (L28648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28648)

```diff
-     XB = void 0 === EB || EB === AB ? rB : rx(LB(EB.markdown)),
+     PO = void 0 === MO || MO === YO ? DO : oR(GO(MO.markdown)),
```

#### 2554. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28650` → after: `L28650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28650) · [Before (L28650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28650)

```diff
-     YB = null !== (rH = null === XB || void 0 === XB ? void 0 : XB.nextChange) && void 0 !== rH ? rH : SB,
+     lO = null !== (DB = null === PO || void 0 === PO ? void 0 : PO.nextChange) && void 0 !== DB ? DB : QO,
```

#### 2555. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28655` → after: `L28655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28655) · [Before (L28655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28655)

```diff
-     QB = null === OH ? [] : NT(OH, bk(`${DH.summary}\n${null!==(SH=null===AB||void 0===AB?void 0:AB.markdown)&&void 0!==SH?SH:""}`), UH),
+     qO = null === UB ? [] : EV(UB, ik(`${aB.summary}\n${null!==(QB=null===YO||void 0===YO?void 0:YO.markdown)&&void 0!==QB?QB:""}`), SB),
```

#### 2556. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28666` → after: `L28666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28666) · [Before (L28666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28666)

```diff
-     }(null !== OH && void 0 !== OH ? OH : [], null !== bH && void 0 !== bH ? bH : [], QB, bk(WB)) : [],
+     }(null !== UB && void 0 !== UB ? UB : [], null !== fB && void 0 !== fB ? fB : [], qO, ik(ZO)) : [],
```

#### 2557. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28674` → after: `L28674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28674) · [Before (L28674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28674)

```diff
-     vB = null === fH ? [] : sU(fH, [...QB, ...MB], `${WB}\n${function(HH,BH,LH,AH,rH,SH){if(null===HH||null===BH||!SH.isOlder)return"";const hH=qP(HH,BH,LH,SH.constantLines),tH=null===hH?null:CI(hH,BH,AH);return null===tH?"":jw("",uI(tH,SH.t,rH))}(SB,TH,XH,mH,tH,JH)}`, UH),
+     WO = null === mB ? [] : sS(mB, [...qO, ...NO], `${ZO}\n${function(BB,OB,GB,YB,DB,QB){if(null===BB||null===OB||!QB.isOlder)return"";const oB=XA(BB,OB,GB,QB.constantLines),jB=null===oB?null:qu(oB,OB,YB);return null===jB?"":ee("",Au(jB,QB.t,DB))}(QO,VB,PB,dB,jB,vB)}`, SB),
```

#### 2558. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28680-L28681` → after: `L28680-L28681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28680-L28681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28680-L28681) · [Before (L28680-L28681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28680-L28681)

```diff
-         SH = new RegExp(`(?:${(0,RS.f)(HH.players)}|${Math.round(HH.players)})(?![\\d]|[,.]\\d|\\s*%)`),
-         hH = (0, jS.c)(BH, SH, (0, jS.i)("\\d,.")).length > 0;
+         QB = new RegExp(`(?:${(0,wQ.i)(BB.players)}|${Math.round(BB.players)})(?![\\d]|[,.]\\d|\\s*%)`),
+         oB = (0, EQ.f)(OB, QB, (0, EQ.n)("\\d,.")).length > 0;
```

#### 2559. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28689` → after: `L28689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28689) · [Before (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28689)

```diff
-         rH = (0, RS.f)(HH.players);
+         DB = (0, wQ.i)(BB.players);
```

#### 2560. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28691` → after: `L28691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28691) · [Before (L28691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28691)

```diff
-         parts: [`${LH("Of the")} ${(0,RS.f)(HH.fromPlayers)} ${LH("players who got to")} ${HH.step}, ${rH} ${LH("later had")} `, {
+         parts: [`${GB("Of the")} ${(0,wQ.i)(BB.fromPlayers)} ${GB("players who got to")} ${BB.step}, ${DB} ${GB("later had")} `, {
```

#### 2561. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28693` → after: `L28693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28693) · [Before (L28693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28693)

```diff
-         }, ` ${LH("this week")} `, AH]
+         }, ` ${GB("this week")} `, YB]
```

#### 2562. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28697` → after: `L28697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28697) · [Before (L28697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28697)

```diff
-         parts: [`${LH("Of the")} ${(0,RS.f)(HH.fromPlayers)} ${LH("players who reached")} ${HH.step}, ${rH} ${LH("later had")} `, {
+         parts: [`${GB("Of the")} ${(0,wQ.i)(BB.fromPlayers)} ${GB("players who reached")} ${BB.step}, ${DB} ${GB("later had")} `, {
```

#### 2563. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28699` → after: `L28699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28699) · [Before (L28699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28699)

```diff
-         }, ` (${SH}%, ${LH("past week")}) `, AH]
+         }, ` (${QB}%, ${GB("past week")}) `, YB]
```

#### 2564. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28707` → after: `L28707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28707) · [Before (L28707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28707)

```diff
-     OB = [...xB, ...(null !== (hH = null === PB || void 0 === PB ? void 0 : PB.rows) && void 0 !== hH ? hH : []).map((HH => {
+     UO = [...RO, ...(null !== (oB = null === AO || void 0 === AO ? void 0 : AO.rows) && void 0 !== oB ? oB : []).map((BB => {
```

#### 2565. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28719` → after: `L28719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28719) · [Before (L28719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28719)

```diff
-       return AH.slice(0, "young" === LH ? hV : SV)
+       return YB.slice(0, "young" === GB ? Jn : yn)
```

#### 2566. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28742` → after: `L28742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28742) · [Before (L28742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28742)

```diff
-       return null !== (LH = HH.find((HH => !AH.includes(HH.eventType) && !WM(HH, BH)))) && void 0 !== LH ? LH : null
+       return null !== (GB = BB.find((BB => !YB.includes(BB.eventType) && !RN(BB, OB)))) && void 0 !== GB ? GB : null
```

#### 2567. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28756-L28757` → after: `L28756-L28757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28756-L28757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28756-L28757) · [Before (L28756-L28757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28756-L28757)

```diff
-           const BH = [`${(0,RS.b)(HH.said)} ${LH("in your description")}`],
-             tH = null === hH.category ? "" : ` ${LH("in")} ${hH.category}`;
+           const OB = [`${(0,wQ.e)(BB.said)} ${GB("in your description")}`],
+             jB = null === oB.category ? "" : ` ${GB("in")} ${oB.category}`;
```

#### 2568. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28760` → after: `L28760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28760) · [Before (L28760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28760)

```diff
-             parts: [`${(0,RS.f)(hH.players)} ${LH("players got to")} ${hH.step} ${SH}, ${LH("of")} ${(0,RS.f)(hH.first.players)} ${LH("who got to")} ${hH.first.name}${tH} `, rH]
+             parts: [`${(0,wQ.i)(oB.players)} ${GB("players got to")} ${oB.step} ${QB}, ${GB("of")} ${(0,wQ.i)(oB.first.players)} ${GB("who got to")} ${oB.first.name}${jB} `, DB]
```

#### 2569. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28762` → after: `L28762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28762) · [Before (L28762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28762)

```diff
-           const zH = null === hH.before ? "" : `, ${(0,RS.f)(hH.before.players)} \u2192 ${(0,RS.f)(hH.players)} ${LH("from")} ${hH.before.name}`;
+           const yB = null === oB.before ? "" : `, ${(0,wQ.i)(oB.before.players)} \u2192 ${(0,wQ.i)(oB.players)} ${GB("from")} ${oB.before.name}`;
```

#### 2570. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28765` → after: `L28765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28765) · [Before (L28765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28765)

```diff
-             parts: [`${(0,RS.f)(hH.players)} ${LH("of the")} ${(0,RS.f)(hH.first.players)} ${LH("players who reached")} ${hH.first.name} ${LH("got to")} ${hH.step}${zH}${tH} (${SH}) `, rH]
+             parts: [`${(0,wQ.i)(oB.players)} ${GB("of the")} ${(0,wQ.i)(oB.first.players)} ${GB("players who reached")} ${oB.first.name} ${GB("got to")} ${oB.step}${yB}${jB} (${QB}) `, DB]
```

#### 2571. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28769` → after: `L28769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28769) · [Before (L28769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28769)

```diff
-           const BH = "" === hH.category ? "" : ` ${LH("in")} ${hH.category}`,
+           const OB = "" === oB.category ? "" : ` ${GB("in")} ${oB.category}`,
```

#### 2572. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28772-L28774` → after: `L28772-L28774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28772-L28774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28772-L28774) · [Before (L28772-L28774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28772-L28774)

```diff
-             label: [`${(0,RS.b)((0,RS.C)(hH.death))} ${LH("in your description")}`],
-             parts: [`${(0,RS.f)(hH.count)} ${LH("of the")} ${(0,RS.f)(hH.total)} ${LH("deaths")}${BH} ${SH} ${LH("were")} `, {
-               code: `${HH.eventType}: ${hH.death}`
+             label: [`${(0,wQ.e)((0,wQ.x)(oB.death))} ${GB("in your description")}`],
+             parts: [`${(0,wQ.i)(oB.count)} ${GB("of the")} ${(0,wQ.i)(oB.total)} ${GB("deaths")}${OB} ${QB} ${GB("were")} `, {
+               code: `${BB.eventType}: ${oB.death}`
```

#### 2573. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28779` → after: `L28779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28779) · [Before (L28779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28779)

```diff
-           const BH = [`${(0,RS.b)(HH.saidAll.join(` ${LH("and")} `))} ${LH("in your description")}`],
+           const OB = [`${(0,wQ.e)(BB.saidAll.join(` ${GB("and")} `))} ${GB("in your description")}`],
```

#### 2574. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28785` → after: `L28785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28785) · [Before (L28785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28785)

```diff
-               return `${""===SH?HH.eventType:SH}: ${(0,RS.f)(hH)}${0===rH||AH?` ${LH("players")}`:""}`
+               return `${""===QB?BB.eventType:QB}: ${(0,wQ.i)(oB)}${0===DB||YB?` ${GB("players")}`:""}`
```

#### 2575. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28791` → after: `L28791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28791) · [Before (L28791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28791)

```diff
-             } = hH.values[0], CH = AH ? `${(0,RS.f)(zH)} ${LH("players so far")}` : `${(0,RS.f)(zH)} ${LH("players sent it")} ${SH}`, EH = "" === tH ? HH.eventType : `${HH.eventType}: ${tH}`;
+             } = oB.values[0], JB = YB ? `${(0,wQ.i)(yB)} ${GB("players so far")}` : `${(0,wQ.i)(yB)} ${GB("players sent it")} ${QB}`, MB = "" === jB ? BB.eventType : `${BB.eventType}: ${jB}`;
```

#### 2576. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28794` → after: `L28794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28794) · [Before (L28794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28794)

```diff
-               parts: [`${LH("your")} `, {
+               parts: [`${GB("your")} `, {
```

#### 2577. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28796` → after: `L28796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28796) · [Before (L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28796)

```diff
-               }, ` ${LH("event")}: ${CH} `, rH]
+               }, ` ${GB("event")}: ${JB} `, DB]
```

#### 2578. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28801` → after: `L28801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28801) · [Before (L28801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28801)

```diff
-             parts: [`${LH("your")} `, {
+             parts: [`${GB("your")} `, {
```

#### 2579. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28803` → after: `L28803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28803) · [Before (L28803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28803)

```diff
-             }, ` ${LH("event")}: ${tH.join(", ")} (${SH}) `, rH]
+             }, ` ${GB("event")}: ${jB.join(", ")} (${QB}) `, DB]
```

#### 2580. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28826` → after: `L28826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28826) · [Before (L28826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28826)

```diff
-       return "young" !== AH && ("noEvents" === HH.thin.kind ? BH.length > 0 || LH : "medium" !== AH)
+       return "young" !== YB && ("noEvents" === BB.thin.kind ? OB.length > 0 || GB : "medium" !== YB)
```

#### 2581. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28840` → after: `L28840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28840) · [Before (L28840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28840)

```diff
-         className: `StudioAiAnswerSection StudioAiAnswerSection-${HH.key}`,
+         className: `StudioAiAnswerSection StudioAiAnswerSection-${BB.key}`,
```

#### 2582. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28879-L28880` → after: `L28879-L28880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28879-L28880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28879-L28880) · [Before (L28879-L28880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28879-L28880)

```diff
-       const hH = of(JM(HH)),
-         tH = of(SH),
+       const oB = Lm(xN(BB)),
+         jB = Lm(QB),
```

#### 2583. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28886` → after: `L28886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28886) · [Before (L28886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28886)

```diff
-     }(SB, (0, gM.D)(LB(ZB.markdown))) : null;
+     }(QO, (0, wN.v)(GO(TO.markdown))) : null;
```

#### 2584. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28895` → after: `L28895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28895) · [Before (L28895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28895)

```diff
-       const HH = Qf((0, gM.D)(LB(AH.markdown)));
+       const BB = Vm((0, wN.v)(GO(YB.markdown)));
```

#### 2585. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28907` → after: `L28907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28907) · [Before (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28907)

```diff
-         then: null !== (JB = null === dB || void 0 === dB ? void 0 : dB.idea) && void 0 !== JB ? JB : null,
+         then: null !== (vO = null === bO || void 0 === bO ? void 0 : bO.idea) && void 0 !== vO ? vO : null,
```

#### 2586. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28909-L28910` → after: `L28909-L28910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28909-L28910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28909-L28910) · [Before (L28909-L28910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28909-L28910)

```diff
-       }, null !== HB && void 0 !== HB ? HB : ""), null !== GB && void 0 !== GB ? GB : rB.rest)
-     } else RB && "tryNext" === AH.key ? wB(AH, null, (0, gM.D)(LB(AH.markdown)), null === dB) : DB(jB(AH, Sw(LB(AH.markdown), JH)));
+       }, null !== BO && void 0 !== BO ? BO : ""), null !== zO && void 0 !== zO ? zO : DO.rest)
+     } else wO && "tryNext" === YB.key ? eO(YB, null, (0, wN.v)(GO(YB.markdown)), null === bO) : aO(EO(YB, Me(GO(YB.markdown), vB)));
```

#### 2587. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28925` → after: `L28925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28925) · [Before (L28925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28925)

```diff
-           children: [(0, IH.jsx)(PH.c, {
+           children: [(0, uB.jsx)(AB.b, {
```

#### 2588. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28944` → after: `L28944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28944) · [Before (L28944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28944)

```diff
-       children: [(0, IH.jsx)(PH.c, {
+       children: [(0, uB.jsx)(AB.b, {
```

#### 2589. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28967` → after: `L28967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28967) · [Before (L28967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28967)

```diff
-       return eO(BH, null !== (LH = HH.codeNames) && void 0 !== LH ? LH : new Set)
+       return EU(OB, null !== (GB = BB.codeNames) && void 0 !== GB ? GB : new Set)
```

#### 2590. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28979` → after: `L28979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28979) · [Before (L28979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28979)

```diff
-   return BH.length > pw ? `${BH.slice(0,pw).join(" ")}\u2026` : BH.join(" ")
+   return OB.length > GT ? `${OB.slice(0,GT).join(" ")}\u2026` : OB.join(" ")
```

#### 2591. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28992` → after: `L28992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28992) · [Before (L28992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28992)

```diff
-   const AH = BZ(null !== (LH = HH.split("\n")[0]) && void 0 !== LH ? LH : ""),
+   const YB = QT(null !== (GB = BB.split("\n")[0]) && void 0 !== GB ? GB : ""),
```

#### 2592. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28999` → after: `L28999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L28999) · [Before (L28999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L28999)

```diff
-   return -1 === AH ? HH : `${HH} ${AH+1}`
+   return -1 === YB ? BB : `${BB} ${YB+1}`
```

#### 2593. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L29004-L29005` → after: `L29004-L29005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R29004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L29004-L29005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L29004-L29005) · [Before (L29004-L29005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L29004-L29005)

```diff
-   const LH = HH.map((HH => `"${HH}"`));
-   return LH.length <= 1 ? null !== (BH = LH[0]) && void 0 !== BH ? BH : "" : `${LH.slice(0,-1).join(", ")} and ${LH[LH.length-1]}`
+   const GB = BB.map((BB => `"${BB}"`));
+   return GB.length <= 1 ? null !== (OB = GB[0]) && void 0 !== OB ? OB : "" : `${GB.slice(0,-1).join(", ")} and ${GB[GB.length-1]}`
```

#### 2594. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L29028` → after: `L29028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R29028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L29028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L29028) · [Before (L29028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L29028)

```diff
-     return LH ? AH : HH
+     return GB ? YB : BB
```

#### 2595. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L29031` → after: `L29031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R29031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L29031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L29031) · [Before (L29031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L29031)

```diff
-     const HH = "direction" === MH.kind ? `Change \`${MH.name}\` the other way, or pick another change.` : "unrelated" === MH.kind ? "Replace it with a change to something players meet at the step where they stop." : `Say what else changing \`${MH.name}\` does, or pick another con … [truncated]
+     const BB = "direction" === NB.kind ? `Change \`${NB.name}\` the other way, or pick another change.` : "unrelated" === NB.kind ? "Replace it with a change to something players meet at the step where they stop." : `Say what else changing \`${NB.name}\` does, or pick another con … [truncated]
```
