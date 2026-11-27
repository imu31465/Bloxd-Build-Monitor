# Changed — Bundle Modifications Report (Part 020 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `20 / 153` (**406** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/117.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/117.js` (2868 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41)

#### 2175. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23358-L23366` → after: `L23358-L23366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23358-L23366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23358-L23366) · [Before (L23358-L23366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23358-L23366)

```diff
-     oB = [],
-     jB = new Set;
-   for (const yB of QB) {
-     const [OB, DB] = (0, wQ.C)(BB, yB.index), JB = BB.slice(OB, DB), MB = OB + Math.max(0, ...[...BB.slice(OB, yB.index).matchAll(/[,;:]\s/g)].map((BB => BB.index + 2))), PB = /[,;:]\s/.exec(BB.slice(yB.end, DB)), zB = BB.slice(MB, null === PB ? DB : yB.end + PB.index), lB = hw.t … [truncated]
-     if (GB.has(yB.value) && !lB && !pB && !/^\s*\(?\s*all[- ]time/i.test(BB.slice(yB.end)) && (oB.push(Hw(BB, yB.end, "all time")), !jB.has(OB) && !aw.test(JB))) {
-       jB.add(OB);
-       for (const GB of QB) {
-         const QB = GB.value >= 100 && !Tw.test(BB.slice(GB.end));
-         GB.index >= OB && GB.end <= DB && YB.has(GB.value) && QB && oB.push(Hw(BB, GB.end, "this week"))
+     Ke = [],
+     Ue = new Set;
+   for (const Fe of Me) {
+     const [ie, be] = (0, mM.J)(ee, Fe.index), Je = ee.slice(ie, be), oe = ie + Math.max(0, ...[...ee.slice(ie, Fe.index).matchAll(/[,;:]\s/g)].map((ee => ee.index + 2))), Re = /[,;:]\s/.exec(ee.slice(Fe.end, be)), ke = ee.slice(oe, null === Re ? be : Fe.end + Re.index), qe = vv.t … [truncated]
+     if (He.has(Fe.value) && !qe && !fe && !/^\s*\(?\s*all[- ]time/i.test(ee.slice(Fe.end)) && (Ke.push(jv(ee, Fe.end, "all time")), !Ue.has(ie) && !uv.test(Je))) {
+       Ue.add(ie);
+       for (const He of Me) {
+         const Me = He.value >= 100 && !lv.test(ee.slice(He.end));
+         He.index >= ie && He.end <= be && ye.has(He.value) && Me && Ke.push(jv(ee, He.end, "this week"))
```

#### 2176. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23370-L23371` → after: `L23370-L23371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23370-L23371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23370-L23371) · [Before (L23370-L23371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23370-L23371)

```diff
-   return oB
- }, function(BB, OB) {
+   return Ke
+ }, function(ee, ie) {
```

#### 2177. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23373-L23389` → after: `L23373-L23389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23373-L23389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23373-L23389) · [Before (L23373-L23389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23373-L23389)

```diff
-     playsPerPlayer: GB,
-     playsPerPlayerShares: YB
-   } = OB.facts.periods;
-   if (0 === GB.size) return [];
-   const DB = Lw(BB);
-   return (0, EQ.f)(BB, /(\d+(?:\.\d+)?)(%?)/g, EQ.t).flatMap((OB => {
-     var QB, oB, jB;
-     const yB = Number(OB[1]),
-       JB = OB.index + OB[0].length;
-     if (!gw(OB.index, JB, DB)) return [];
-     const MB = BB.slice(JB);
-     if ("%" === OB[2]) {
-       const BB = YB.has(yB) ? GE.exec(MB) : null;
-       return null === BB ? [] : [{
-         start: JB,
-         end: JB + BB[0].length,
- ... (1 more removed lines; see GitHub link above)
+     playsPerPlayer: He,
+     playsPerPlayerShares: ye
+   } = ie.facts.periods;
+   if (0 === He.size) return [];
+   const be = Vv(ee);
+   return (0, lM.g)(ee, /(\d+(?:\.\d+)?)(%?)/g, lM.p).flatMap((ie => {
+     var Me, Ke, Ue;
+     const Fe = Number(ie[1]),
+       Je = ie.index + ie[0].length;
+     if (!av(ie.index, Je, be)) return [];
+     const oe = ee.slice(Je);
+     if ("%" === ie[2]) {
+       const ee = ye.has(Fe) ? Qv.exec(oe) : null;
+       return null === ee ? [] : [{
+         start: Je,
+         end: Je + ee[0].length,
+ ... (1 more added lines; see GitHub link above)
```

#### 2178. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23393-L23399` → after: `L23393-L23399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23393-L23399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23393-L23399) · [Before (L23393-L23399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23393-L23399)

```diff
-     const PB = 10 ** (null !== (QB = null === (oB = OB[1].split(".")[1]) || void 0 === oB ? void 0 : oB.length) && void 0 !== QB ? QB : 0);
-     if (![...GB].some((BB => Math.round(BB * PB) === Math.round(yB * PB)))) return [];
-     const zB = OE.exec(MB);
-     if (null !== zB) return [{
-       start: JB,
-       end: JB + zB[0].length,
-       text: `${zB[1]}plays`,
+     const Re = 10 ** (null !== (Me = null === (Ke = ie[1].split(".")[1]) || void 0 === Ke ? void 0 : Ke.length) && void 0 !== Me ? Me : 0);
+     if (![...He].some((ee => Math.round(ee * Re) === Math.round(Fe * Re)))) return [];
+     const ke = rv.exec(oe);
+     if (null !== ke) return [{
+       start: Je,
+       end: Je + ke[0].length,
+       text: `${ke[1]}plays`,
```

#### 2179. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23402-L23404` → after: `L23402-L23404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23402-L23404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23402-L23404) · [Before (L23402-L23404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23402-L23404)

```diff
-     const lB = /^\s+times\b(?!\s+(?:the|as|more|less|a)\b)/i.test(MB) ? BE.exec(BB.slice(0, OB.index)) : null;
-     if (null === lB) return [];
-     const pB = tw[lB[1].toLowerCase().replace(/\s+/g, " ")];
+     const qe = /^\s+times\b(?!\s+(?:the|as|more|less|a)\b)/i.test(oe) ? Gv.exec(ee.slice(0, ie.index)) : null;
+     if (null === qe) return [];
+     const fe = Nv[qe[1].toLowerCase().replace(/\s+/g, " ")];
```

#### 2180. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23406-L23408` → after: `L23406-L23408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23406-L23408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23406-L23408) · [Before (L23406-L23408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23406-L23408)

```diff
-       start: OB.index - lB[0].length,
-       end: OB.index,
-       text: `${rw(pB,lB[1])} ${null!==(jB=lB[2])&&void 0!==jB?jB:""}`,
+       start: ie.index - qe[0].length,
+       end: ie.index,
+       text: `${cv(fe,qe[1])} ${null!==(Ue=qe[2])&&void 0!==Ue?Ue:""}`,
```

#### 2181. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23414-L23417` → after: `L23414-L23417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23414-L23417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23414-L23417) · [Before (L23414-L23417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23414-L23417)

```diff
- function DE(BB, OB) {
-   const GB = BB.split("\n");
-   let YB = !1;
-   return GB.map(((BB, DB) => IM.test(BB) ? (YB = !YB && FM(GB, DB, GB.length), BB) : YB ? BB : OB(BB))).join("\n")
+ function iu(ee, ie) {
+   const He = ee.split("\n");
+   let ye = !1;
+   return He.map(((ee, be) => Vo.test(ee) ? (ye = !ye && ao(He, be, He.length), ee) : ye ? ee : ie(ee))).join("\n")
```

#### 2182. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23420-L23425` → after: `L23420-L23425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23420-L23425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23420-L23425) · [Before (L23420-L23425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23420-L23425)

```diff
- function QE(BB, OB, GB) {
-   const YB = [],
-     DB = {
-       facts: OB,
-       goodStages: GB,
-       markdown: BB,
+ function Hu(ee, ie, He) {
+   const ye = [],
+     be = {
+       facts: ie,
+       goodStages: He,
+       markdown: ee,
```

#### 2183. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23429-L23440` → after: `L23429-L23440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23429-L23440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23429-L23440) · [Before (L23429-L23440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23429-L23440)

```diff
-     QB = DE(BB, (BB => YE.reduce(((BB, OB) => function(BB, OB, GB) {
-       const YB = Lw(BB);
-       let DB = "",
-         QB = 0;
-       for (const oB of [...OB].sort(((BB, OB) => BB.start - OB.start))) {
-         if (oB.start < QB || !gw(oB.start, oB.end, YB)) continue;
-         const OB = BB.slice(oB.start, oB.end);
-         OB !== oB.text && (GB.push({
-           kind: oB.kind,
-           from: OB.trim(),
-           to: oB.text.trim()
-         }), DB += BB.slice(QB, oB.start) + oB.text, QB = oB.end)
+     Me = iu(ee, (ee => eu.reduce(((ee, ie) => function(ee, ie, He) {
+       const ye = Vv(ee);
+       let be = "",
+         Me = 0;
+       for (const Ke of [...ie].sort(((ee, ie) => ee.start - ie.start))) {
+         if (Ke.start < Me || !av(Ke.start, Ke.end, ye)) continue;
+         const ie = ee.slice(Ke.start, Ke.end);
+         ie !== Ke.text && (He.push({
+           kind: Ke.kind,
+           from: ie.trim(),
+           to: Ke.text.trim()
+         }), be += ee.slice(Me, Ke.start) + Ke.text, Me = Ke.end)
```

#### 2184. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23442-L23443` → after: `L23442-L23443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23442-L23443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23442-L23443) · [Before (L23442-L23443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23442-L23443)

```diff
-       return DB + BB.slice(QB)
-     }(BB, OB(BB, DB), YB)), BB)));
+       return be + ee.slice(Me)
+     }(ee, ie(ee, be), ye)), ee)));
```

#### 2185. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23445-L23461` → after: `L23445-L23461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23445-L23461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23445-L23461) · [Before (L23445-L23461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23445-L23461)

```diff
-     markdown: QB,
-     repairs: YB
-   }
- }
- const oE = /^\s*(?:(?:of|the|your|all|new|more|fewer|unique|daily|returning|other|active|real|extra)\s+){0,3}(?:players?|sessions?|plays|people|visits|visitors|users|joins|kids)\b/i,
-   jE = /^\s*(?:(?:more|less|extra|bonus)\s+)?(?:damage|dmg|health|hp|speed|chance|boost|bonus|discount|off|faster|slower|cheaper|stronger|weaker|knockback|cooldown|armou?r|defen[cs]e|resistance|heal(?:ing)?|xp|coins?|gold|price|cost|reward)\b/i;
- 
- function yE(BB, OB) {
-   const GB = [];
-   return DE(BB, (BB => {
-     const YB = BB.replace(/`[^`\n]+`|\[\[[^\]\n]*\]\]/g, " ");
-     for (const DB of XN(YB, OB)) {
-       const BB = YB.slice(DB.index + DB.raw.length, DB.index + DB.raw.length + 40),
-         OB = DB.raw.endsWith("%") && !jE.test(BB);
-       GB.push({
-         isChecked: DB.isChecked,
- ... (1 more removed lines; see GitHub link above)
+     markdown: Me,
+     repairs: ye
+   }
+ }
+ const yu = /^\s*(?:(?:of|the|your|all|new|more|fewer|unique|daily|returning|other|active|real|extra)\s+){0,3}(?:players?|sessions?|plays|people|visits|visitors|users|joins|kids)\b/i,
+   bu = /^\s*(?:(?:more|less|extra|bonus)\s+)?(?:damage|dmg|health|hp|speed|chance|boost|bonus|discount|off|faster|slower|cheaper|stronger|weaker|knockback|cooldown|armou?r|defen[cs]e|resistance|heal(?:ing)?|xp|coins?|gold|price|cost|reward)\b/i;
+ 
+ function Mu(ee, ie) {
+   const He = [];
+   return iu(ee, (ee => {
+     const ye = ee.replace(/`[^`\n]+`|\[\[[^\]\n]*\]\]/g, " ");
+     for (const be of SX(ye, ie)) {
+       const ee = ye.slice(be.index + be.raw.length, be.index + be.raw.length + 40),
+         ie = be.raw.endsWith("%") && !bu.test(ee);
+       He.push({
+         isChecked: be.isChecked,
+ ... (1 more added lines; see GitHub link above)
```

#### 2186. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23464-L23465` → after: `L23464-L23465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23464-L23465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23464-L23465) · [Before (L23464-L23465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23464-L23465)

```diff
-     return BB
-   })), GB
+     return ee
+   })), He
```

#### 2187. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23468-L23475` → after: `L23468-L23475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23468-L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23468-L23475) · [Before (L23468-L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23468-L23475)

```diff
- function JE(BB, OB) {
-   const GB = BB.split("\n"),
-     YB = [],
-     DB = [];
-   let QB = !1;
-   for (let oB = 0; oB < GB.length;) {
-     if (IM.test(GB[oB]) && (QB = !QB), QB || !RR.test(GB[oB])) {
-       YB.push(GB[oB]), oB++;
+ function Ku(ee, ie) {
+   const He = ee.split("\n"),
+     ye = [],
+     be = [];
+   let Me = !1;
+   for (let Ke = 0; Ke < He.length;) {
+     if (Vo.test(He[Ke]) && (Me = !Me), Me || !dz.test(He[Ke])) {
+       ye.push(He[Ke]), Ke++;
```

#### 2188. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23479-L23483` → after: `L23479-L23483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23479-L23483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23479-L23483) · [Before (L23479-L23483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23479-L23483)

```diff
-       end: BB,
-       textEnd: jB
-     } = dR(GB, oB), yB = GB.slice(oB, jB).join("\n"), JB = yE(yB, OB);
-     if (!(JB.some((BB => BB.isAboutPlayers)) && JB.every((BB => !BB.isChecked)))) {
-       YB.push(...GB.slice(oB, jB)), oB = jB;
+       end: ee,
+       textEnd: Ue
+     } = Vz(He, Ke), Fe = He.slice(Ke, Ue).join("\n"), Je = Mu(Fe, ie);
+     if (!(Je.some((ee => ee.isAboutPlayers)) && Je.every((ee => !ee.isChecked)))) {
+       ye.push(...He.slice(Ke, Ue)), Ke = Ue;
```

#### 2189. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23486-L23488` → after: `L23486-L23488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23486-L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23486-L23488) · [Before (L23486-L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23486-L23488)

```diff
-     DB.push(yB);
-     const MB = /^ */.exec(GB[oB])[0].length;
-     for (oB = BB; oB < GB.length && RR.test(GB[oB]) && /^ */.exec(GB[oB])[0].length > MB;) oB = dR(GB, oB).end
+     be.push(Fe);
+     const oe = /^ */.exec(He[Ke])[0].length;
+     for (Ke = ee; Ke < He.length && dz.test(He[Ke]) && /^ */.exec(He[Ke])[0].length > oe;) Ke = Vz(He, Ke).end
```

#### 2190. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23491-L23492` → after: `L23491-L23492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23491-L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23491-L23492) · [Before (L23491-L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23491-L23492)

```diff
-     markdown: YB.join("\n"),
-     dropped: DB
+     markdown: ye.join("\n"),
+     dropped: be
```

#### 2191. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23495-L23498` → after: `L23495-L23498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23495-L23498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23495-L23498) · [Before (L23495-L23498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23495-L23498)

```diff
- const ME = "(?:(?:final|big|last|giant|huge|scary|tough|main)\\s+)?",
-   PE = "(?:for|against|about|before|beat|beating|defeat|defeating|fight|fighting|face|facing|reach|reaching|survive|surviving|kill|killing|warn|until|by|to|vs|versus|past)",
-   zE = /^(?:\s*(?:[.,;:!?)]|\u2014|\u2013|\s-\s|$)|\s+(?:and|or|but|so|to|with|before|by|is|are|was|has|comes|arrives|appears|spawns|gets|can|will|would|who|that|which|when|because|if|without|alone|first|faster)\b)/i,
-   lE = 3;
+ const Uu = "(?:(?:final|big|last|giant|huge|scary|tough|main)\\s+)?",
+   Fu = "(?:for|against|about|before|beat|beating|defeat|defeating|fight|fighting|face|facing|reach|reaching|survive|surviving|kill|killing|warn|until|by|to|vs|versus|past)",
+   Ju = /^(?:\s*(?:[.,;:!?)]|\u2014|\u2013|\s-\s|$)|\s+(?:and|or|but|so|to|with|before|by|is|are|was|has|comes|arrives|appears|spawns|gets|can|will|would|who|that|which|when|because|if|without|alone|first|faster)\b)/i,
+   ou = 3;
```

#### 2192. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23500-L23501` → after: `L23500-L23501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23500-L23501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23500-L23501) · [Before (L23500-L23501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23500-L23501)

```diff
- function pE(BB) {
-   return `(?:\\b${BB}s?(?:_start)?[\\s:#]*\\d+\\b|\\b\\d+\\s+${BB}s?\\b)`
+ function Ru(ee) {
+   return `(?:\\b${ee}s?(?:_start)?[\\s:#]*\\d+\\b|\\b\\d+\\s+${ee}s?\\b)`
```

#### 2193. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23504-L23506` → after: `L23504-L23506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23504-L23506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23504-L23506) · [Before (L23504-L23506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23504-L23506)

```diff
- function qE(BB) {
-   const OB = [];
-   for (const GB of BB.matchAll(/`[^`]*`|\[\[[^\]]*\]\]|\[[^\]]*\]\([^)]*\)|"[^"\n]*"|\u201c[^\u201d\n]*\u201d/g)) OB.push([GB.index, GB.index + GB[0].length]);
+ function ku(ee) {
+   const ie = [];
+   for (const He of ee.matchAll(/`[^`]*`|\[\[[^\]]*\]\]|\[[^\]]*\]\([^)]*\)|"[^"\n]*"|\u201c[^\u201d\n]*\u201d/g)) ie.push([He.index, He.index + He[0].length]);
```

#### 2194. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23523` → after: `L23523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23523) · [Before (L23523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23523)

```diff
-     for (const OB of (0, EQ.f)(BB[DB], GB, YB)) {
+     for (const ie of (0, lM.g)(ee[be], He, ye)) {
```

#### 2195. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23539` → after: `L23539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23539) · [Before (L23539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23539)

```diff
-   return "final" === BB ? "final\\s+wave" : (0, wQ.h)(BB)
+   return "final" === ee ? "final\\s+wave" : (0, mM.f)(ee)
```

#### 2196. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23546-L23549` → after: `L23546-L23549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23546-L23549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23546-L23549) · [Before (L23546-L23549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23546-L23549)

```diff
-     oB = `[\\w'\u2019-]+${QB}`,
-     jB = `(?:['\u2019]s)?${QB}(?:${oB}){0,${lE}}?`,
-     yB = new RegExp(`(?:^|[^\\w-])${YB}(?![\\w-])${jB}${DB}|${DB}${jB}(?:${oB})?${YB}(?![\\w-])`, "i");
-   return (0, wQ.l)(BB).some((BB => yB.test(BB)))
+     Ke = `[\\w'\u2019-]+${Me}`,
+     Ue = `(?:['\u2019]s)?${Me}(?:${Ke}){0,${ou}}?`,
+     Fe = new RegExp(`(?:^|[^\\w-])${ye}(?![\\w-])${Ue}${be}|${be}${Ue}(?:${Ke})?${ye}(?![\\w-])`, "i");
+   return (0, mM.q)(ee).some((ee => Fe.test(ee)))
```

#### 2197. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23553-L23554` → after: `L23553-L23554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23553-L23554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23553-L23554) · [Before (L23553-L23554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23553-L23554)

```diff
-   const GB = new RegExp(`\\b(${OB})\\s+\\d+`, "i").exec(BB);
-   return null === GB ? OB : GB[1]
+   const He = new RegExp(`\\b(${ie})\\s+\\d+`, "i").exec(ee);
+   return null === He ? ie : He[1]
```

#### 2198. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23559` → after: `L23559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23559) · [Before (L23559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23559)

```diff
-   return (null !== (OB = null === BB || void 0 === BB ? void 0 : BB.ordinals) && void 0 !== OB ? OB : []).filter((BB => /^[a-z]{3,20}$/.test(BB.thing)))
+   return (null !== (ie = null === ee || void 0 === ee ? void 0 : ee.ordinals) && void 0 !== ie ? ie : []).filter((ee => /^[a-z]{3,20}$/.test(ee.thing)))
```

#### 2199. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23577` → after: `L23577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23577) · [Before (L23577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23577)

```diff
-     const OB = `${yB.unit}\n${yB.n}`;
+     const ie = `${Fe.unit}\n${Fe.n}`;
```

#### 2200. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23580-L23582` → after: `L23580-L23582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23580-L23582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23580-L23582) · [Before (L23580-L23582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23580-L23582)

```diff
-       JB = new RegExp(`(?:^|[^\\w-])${PE}\\s+(?:the|your)\\s+${ME}$`, "i"),
-       MB = new RegExp(`${YB}(?![\\w-])`, "gi"),
-       PB = "final" === yB.thing ? ` (${AE(BB,yB.unit)} ${yB.n})` : ` ${"round"===yB.unit?"in":"on"} ${AE(BB,yB.unit)} ${yB.n}`,
+       Je = new RegExp(`(?:^|[^\\w-])${Fu}\\s+(?:the|your)\\s+${Uu}$`, "i"),
+       oe = new RegExp(`${ye}(?![\\w-])`, "gi"),
+       Re = "final" === Fe.thing ? ` (${Xu(ee,Fe.unit)} ${Fe.n})` : ` ${"round"===Fe.unit?"in":"on"} ${Xu(ee,Fe.unit)} ${Fe.n}`,
```

#### 2201. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23584-L23585` → after: `L23584-L23585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23584-L23585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23584-L23585) · [Before (L23584-L23585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23584-L23585)

```diff
-       lB = new RegExp(`(?:^|[^\\d.,])${yB.n}(?!\\d|[.,]\\d)`),
-       pB = NE(DB, QB, MB, (0, EQ.n)("\\w-"));
+       qe = new RegExp(`(?:^|[^\\d.,])${Fe.n}(?!\\d|[.,]\\d)`),
+       fe = fu(be, Me, oe, (0, lM.m)("\\w-"));
```

#### 2202. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23592` → after: `L23592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23592) · [Before (L23592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23592)

```diff
-     GB.has(qB) || !JB.test(RB.slice(0, ZB)) || /^(?:['\u2019]s\b|-)/.test(RB.slice(WB)) || lB.test(RB.slice(AB, VB)) || zB.test(RB.slice(WB, VB)) || !zE.test(RB.slice(WB)) || (DB[qB] = `${RB.slice(0,WB)}${PB}${RB.slice(WB)}`, oB.push({
+     He.has(Te) || !Je.test(ze.slice(0, pe)) || /^(?:['\u2019]s\b|-)/.test(ze.slice(Be)) || qe.test(ze.slice(Ee, ge)) || ke.test(ze.slice(Be, ge)) || !Ju.test(ze.slice(Be)) || (be[Te] = `${ze.slice(0,Be)}${Re}${ze.slice(Be)}`, Ke.push({
```

#### 2203. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23594` → after: `L23594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23594) · [Before (L23594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23594)

```diff
-       text: `${RB.slice(ZB,WB)}${PB}`
+       text: `${ze.slice(pe,Be)}${Re}`
```

#### 2204. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23598` → after: `L23598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23598) · [Before (L23598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23598)

```diff
-     markdown: 0 === oB.length ? BB : DB.join("\n"),
+     markdown: 0 === Ke.length ? ee : be.join("\n"),
```

#### 2205. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23637` → after: `L23637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23637) · [Before (L23637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23637)

```diff
-     sections: BB.sections.map(((BB, OB) => MB[OB + 1] === BB.markdown ? BB : {
+     sections: ee.sections.map(((ee, ie) => oe[ie + 1] === ee.markdown ? ee : {
```

#### 2206. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23647` → after: `L23647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23647) · [Before (L23647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23647)

```diff
-     DB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.ordinals) && void 0 !== GB ? GB : [],
+     be = null !== (He = null === ee || void 0 === ee ? void 0 : ee.ordinals) && void 0 !== He ? He : [],
```

#### 2207. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23653` → after: `L23653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23653) · [Before (L23653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23653)

```diff
-       return `${OB}\n${GB}`
+       return `${ie}\n${He}`
```

#### 2208. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23667` → after: `L23667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23667) · [Before (L23667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23667)

```diff
-     })).filter((BB => "final" !== BB)), MB = JB.includes("boss") ? "boss" : null !== (oB = JB[0]) && void 0 !== oB ? oB : null;
+     })).filter((ee => "final" !== ee)), oe = Je.includes("boss") ? "boss" : null !== (Ke = Je[0]) && void 0 !== Ke ? Ke : null;
```

#### 2209. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23676` → after: `L23676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23676) · [Before (L23676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23676)

```diff
-       const GB = yB ? `${OB("your last")} ${BB}, ${OB("with the")} ${MB}` : `${OB("your")} ${MB} ${BB}`;
+       const He = Fe ? `${ie("your last")} ${ee}, ${ie("with the")} ${oe}` : `${ie("your")} ${oe} ${ee}`;
```

#### 2210. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23682-L23683` → after: `L23682-L23683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23682-L23683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23682-L23683) · [Before (L23682-L23683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23682-L23683)

```diff
-       paren: `${OB("your last")} ${BB}`,
-       inline: `${OB("your last")} ${BB}`
+       paren: `${ie("your last")} ${ee}`,
+       inline: `${ie("your last")} ${ee}`
```

#### 2211. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23691-L23692` → after: `L23691-L23692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23691-L23692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23691-L23692) · [Before (L23691-L23692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23691-L23692)

```diff
-   return 0 === OB.size ? [...BB] : BB.map((BB => "string" !== typeof BB ? BB : BB.replace(/\b(wave|level|round|stage)\s+(\d+)\b(?![\d.,]\d)(\s*\(|\s*\u2192)?/gi, ((BB, YB, DB, QB) => {
-     const oB = `${YB.toLowerCase()}\n${DB}`,
+   return 0 === ie.size ? [...ee] : ee.map((ee => "string" !== typeof ee ? ee : ee.replace(/\b(wave|level|round|stage)\s+(\d+)\b(?![\d.,]\d)(\s*\(|\s*\u2192)?/gi, ((ee, ye, be, Me) => {
+     const Ke = `${ye.toLowerCase()}\n${be}`,
```

#### 2212. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23694` → after: `L23694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23694) · [Before (L23694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23694)

```diff
-     return void 0 === jB || GB.has(oB) || null !== QB && void 0 !== QB && QB.includes("\u2192") ? BB : (GB.add(oB), void 0 === QB ? `${YB} ${DB} (${jB.paren})` : `${YB} ${DB}, ${jB.inline}${QB}`)
+     return void 0 === Ue || He.has(Ke) || null !== Me && void 0 !== Me && Me.includes("\u2192") ? ee : (He.add(Ke), void 0 === Me ? `${ye} ${be} (${Ue.paren})` : `${ye} ${be}, ${Ue.inline}${Me}`)
```

#### 2213. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23729` → after: `L23729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23729) · [Before (L23729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23729)

```diff
-     keep: (0, EQ.j)(/\b(?:iron|items?|mobs?|blocks?|ores?|loot|chests?|resources?|gold)\s+$/i),
+     keep: (0, lM.k)(/\b(?:iron|items?|mobs?|blocks?|ores?|loot|chests?|resources?|gold)\s+$/i),
```

#### 2214. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23789-L23790` → after: `L23789-L23790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23789-L23790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23789-L23790) · [Before (L23789-L23790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23789-L23790)

```diff
-   const GB = (0, wQ.h)(OB);
-   return new RegExp(`\\b(?:from|is|currently|now)\\s+${GB}(?![\\d.,]*\\d)|(?:^|[^\\d.,])${GB}(?:\\s*(?:seconds?|secs?|ms|milliseconds?|coins|gold))?\\s*(?:to|->|\u2192)\\s*\\d`, "i").test(BB.replace(/(\d),(?=\d{3}\b)/g, "$1"))
+   const He = (0, mM.f)(ie);
+   return new RegExp(`\\b(?:from|is|currently|now)\\s+${He}(?![\\d.,]*\\d)|(?:^|[^\\d.,])${He}(?:\\s*(?:seconds?|secs?|ms|milliseconds?|coins|gold))?\\s*(?:to|->|\u2192)\\s*\\d`, "i").test(ee.replace(/(\d),(?=\d{3}\b)/g, "$1"))
```

#### 2215. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23795` → after: `L23795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23795) · [Before (L23795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23795)

```diff
-   return new RegExp(`(?:^|\\W)${(0,wQ.h)(OB)}(?![\\w])`).test(BB)
+   return new RegExp(`(?:^|\\W)${(0,mM.f)(ie)}(?![\\w])`).test(ee)
```

#### 2216. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23831` → after: `L23831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23831) · [Before (L23831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23831)

```diff
-     } = JB[0], zB = MB.split(".").pop(), lB = /(?:ms|millis?)$/i.test(zB) || /\*\s*1000$/.test(PB) ? ZL(/ms$/i.test(zB) ? zB : `${zB}_MS`, PB.trim()) : null, pB = null === lB ? null : /^[\d.]+/.exec(lB)[0];
+     } = Je[0], ke = oe.split(".").pop(), qe = /(?:ms|millis?)$/i.test(ke) || /\*\s*1000$/.test(Re) ? fc(/ms$/i.test(ke) ? ke : `${ke}_MS`, Re.trim()) : null, fe = null === qe ? null : /^[\d.]+/.exec(qe)[0];
```

#### 2217. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23842` → after: `L23842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23842) · [Before (L23842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23842)

```diff
-         return `${BB} (\`${MB}${QB?"":` = ${PB.trim()}${null===lB?"":` // ${lB}`}`}\`)`
+         return `${ee} (\`${oe}${Me?"":` = ${Re.trim()}${null===qe?"":` // ${qe}`}`}\`)`
```

#### 2218. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23853` → after: `L23853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23853) · [Before (L23853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23853)

```diff
-     const YB = null !== (GB = BB.calls) && void 0 !== GB ? GB : null;
+     const ye = null !== (He = ee.calls) && void 0 !== He ? He : null;
```

#### 2219. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23925` → after: `L23925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23925) · [Before (L23925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23925)

```diff
-       phrase: new RegExp(`\\b(?:the|your|their|a|an)\\s+(?:(?:free|starter|starting)\\s+)?${BB}\\b(?!\\s*-)`, "i"),
+       phrase: new RegExp(`\\b(?:the|your|their|a|an)\\s+(?:(?:free|starter|starting)\\s+)?${ee}\\b(?!\\s*-)`, "i"),
```

#### 2220. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23935` → after: `L23935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23935) · [Before (L23935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23935)

```diff
-         return [/^[A-Z]/.test(YB) ? `${JB[0].toUpperCase()}${JB.slice(1)}` : JB, ...DB, QB].join(" ")
+         return [/^[A-Z]/.test(ye) ? `${Je[0].toUpperCase()}${Je.slice(1)}` : Je, ...be, Me].join(" ")
```

#### 2221. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23957` → after: `L23957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23957) · [Before (L23957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23957)

```diff
-       return [`\`${OB}\``, `${OB}:`, `"${OB}"`, `${OB} event`]
+       return [`\`${ie}\``, `${ie}:`, `"${ie}"`, `${ie} event`]
```

#### 2222. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23965` → after: `L23965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23965) · [Before (L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23965)

```diff
-     rewrite: BB => `${BB} (logged as \`${oB}\`)`
+     rewrite: ee => `${ee} (logged as \`${Ke}\`)`
```

#### 2223. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23973` → after: `L23973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23973) · [Before (L23973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23973)

```diff
-     rewrite: BB => `${BB} (logged as \`${jB}\`)`
+     rewrite: ee => `${ee} (logged as \`${Ue}\`)`
```

#### 2224. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23993` → after: `L23993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R23993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L23993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L23993) · [Before (L23993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L23993)

```diff
-         return OB.includes(YB) ? `${GB} (logged as \`${BB}: ${YB}\`)` : null
+         return ie.includes(ye) ? `${He} (logged as \`${ee}: ${ye}\`)` : null
```

#### 2225. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24002` → after: `L24002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24002) · [Before (L24002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24002)

```diff
-   for (const YB of (0, EQ.f)(BB, new RegExp(OB.phrase.source, "gi"), OB.keep)) {
+   for (const ye of (0, lM.g)(ee, new RegExp(ie.phrase.source, "gi"), ie.keep)) {
```

#### 2226. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24011` → after: `L24011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24011) · [Before (L24011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24011)

```diff
-     if (null !== jB && jB !== YB[0]) return `${BB.slice(0,DB)}${jB}${BB.slice(QB)}`
+     if (null !== Ue && Ue !== ye[0]) return `${ee.slice(0,be)}${Ue}${ee.slice(Me)}`
```

#### 2227. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24062-L24066` → after: `L24062-L24066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24062-L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24062-L24066) · [Before (L24062-L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24062-L24066)

```diff
-   TE = new RegExp(String.raw`(${eE})\s*,\s*(${eE})\s*,\s*(${eE})(?![\w.])`, "g"),
-   bE = (0, EQ.n)("\\w."),
-   CE = new RegExp(String.raw`(\bapi\s*\.\s*setPosition\s*\(\s*[A-Za-z_$][\w$.[\]]*\s*,\s*)(\[\s*)?(${eE}|x)(\s*,\s*)(${eE}|y)(\s*,\s*)(${eE}|z)(\s*\]?\s*\))`, "g"),
-   HE = new RegExp(String.raw`(\bapi\s*\.\s*setBlock\s*\(\s*)(\[\s*)?(${eE}|x)(\s*,\s*)(${eE}|y)(\s*,\s*)(${eE}|z)(\s*\]?\s*,)`, "g"),
-   vE = new RegExp(String.raw`^(.*?)\breturn\s*\[\s*(${eE})\s*,\s*(${eE})\s*,\s*(${eE})\s*\]`),
+   lu = new RegExp(String.raw`(${mu})\s*,\s*(${mu})\s*,\s*(${mu})(?![\w.])`, "g"),
+   Su = (0, lM.m)("\\w."),
+   nu = new RegExp(String.raw`(\bapi\s*\.\s*setPosition\s*\(\s*[A-Za-z_$][\w$.[\]]*\s*,\s*)(\[\s*)?(${mu}|x)(\s*,\s*)(${mu}|y)(\s*,\s*)(${mu}|z)(\s*\]?\s*\))`, "g"),
+   ju = new RegExp(String.raw`(\bapi\s*\.\s*setBlock\s*\(\s*)(\[\s*)?(${mu}|x)(\s*,\s*)(${mu}|y)(\s*,\s*)(${mu}|z)(\s*\]?\s*,)`, "g"),
+   su = new RegExp(String.raw`^(.*?)\breturn\s*\[\s*(${mu})\s*,\s*(${mu})\s*,\s*(${mu})\s*\]`),
```

#### 2228. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24098` → after: `L24098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24098) · [Before (L24098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24098)

```diff
-         const QB = null !== (DB = GB.get(BB)) && void 0 !== DB ? DB : new Map;
+         const Me = null !== (be = He.get(ee)) && void 0 !== be ? be : new Map;
```

#### 2229. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24113` → after: `L24113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24113) · [Before (L24113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24113)

```diff
-       for (const QB of [...BB.callbacks, ...null !== (GB = BB.functions) && void 0 !== GB ? GB : []]) {
+       for (const Me of [...ee.callbacks, ...null !== (He = ee.functions) && void 0 !== He ? He : []]) {
```

#### 2230. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24136` → after: `L24136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24136) · [Before (L24136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24136)

```diff
-         of [...null !== (YB = BB.messages) && void 0 !== YB ? YB : [], ...null !== (DB = BB.calls) && void 0 !== DB ? DB : []]) {
+         of [...null !== (ye = ee.messages) && void 0 !== ye ? ye : [], ...null !== (be = ee.calls) && void 0 !== be ? be : []]) {
```

#### 2231. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24145` → after: `L24145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24145) · [Before (L24145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24145)

```diff
-         text: `${QB.name} = ${QB.value}`,
+         text: `${Me.name} = ${Me.value}`,
```

#### 2232. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24155` → after: `L24155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24155) · [Before (L24155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24155)

```diff
-     for (const YB of (0, EQ.f)(DB, TE, bE)) OB.add(jc([YB[1], YB[2], YB[3]]));
+     for (const ye of (0, lM.g)(be, lu, Su)) ie.add(bm([ye[1], ye[2], ye[3]]));
```

#### 2233. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24161` → after: `L24161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24161) · [Before (L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24161)

```diff
-         test: `${null!==oB&&void 0!==oB?oB:""} ${DB.slice(0,BB.index)}`,
+         test: `${null!==Ke&&void 0!==Ke?Ke:""} ${be.slice(0,ee.index)}`,
```

#### 2234. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24165` → after: `L24165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24165) · [Before (L24165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24165)

```diff
-         test: `${null!==oB&&void 0!==oB?oB:""} ${GB[1]}`,
+         test: `${null!==Ke&&void 0!==Ke?Ke:""} ${He[1]}`,
```

#### 2235. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24171` → after: `L24171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24171) · [Before (L24171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24171)

```diff
-     YB(JB ? oc(yB.test, !1) : null !== MB && void 0 !== MB ? MB : oc(QB, !1), yB.position, QB)
+     ye(Je ? ym(Fe.test, !1) : null !== oe && void 0 !== oe ? oe : ym(Me, !1), Fe.position, Me)
```

#### 2236. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24189-L24191` → after: `L24189-L24191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24189-L24191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24189-L24191) · [Before (L24189-L24191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24189-L24191)

```diff
-         if (null === BB || "" === BB[1] || !new RegExp(`^${eE}$`).test(oB)) continue;
-         const jB = null !== (YB = OB.get(BB[1])) && void 0 !== YB ? YB : {};
-         jB[BB[2].toLowerCase()] = oB, OB.set(BB[1], jB), GB.set(BB[1], [...null !== (DB = GB.get(BB[1])) && void 0 !== DB ? DB : [], QB])
+         if (null === ee || "" === ee[1] || !new RegExp(`^${mu}$`).test(Ke)) continue;
+         const Ue = null !== (ye = ie.get(ee[1])) && void 0 !== ye ? ye : {};
+         Ue[ee[2].toLowerCase()] = Ke, ie.set(ee[1], Ue), He.set(ee[1], [...null !== (be = He.get(ee[1])) && void 0 !== be ? be : [], Me])
```

#### 2237. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24224-L24226` → after: `L24224-L24226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24224-L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24224-L24226) · [Before (L24224-L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24224-L24226)

```diff
-   if (new RegExp(String.raw`\b(?:const|let|var)\s+(?:\[[^\]]*\b${BB}\b|\{[^}]*\b${BB}\b|${BB}\b)|\(([^()]*\b)?${BB}\b[^()]*\)\s*=>`).test(OB)) return !0;
-   const yB = new Set(null !== (DB = GB.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== DB ? DB : []),
-     JB = [...null !== (QB = YB.messages) && void 0 !== QB ? QB : [], ...null !== (oB = YB.calls) && void 0 !== oB ? oB : []].flatMap((BB => {
+   if (new RegExp(String.raw`\b(?:const|let|var)\s+(?:\[[^\]]*\b${ee}\b|\{[^}]*\b${ee}\b|${ee}\b)|\(([^()]*\b)?${ee}\b[^()]*\)\s*=>`).test(ie)) return !0;
+   const Fe = new Set(null !== (be = He.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== be ? be : []),
+     Je = [...null !== (Me = ye.messages) && void 0 !== Me ? Me : [], ...null !== (Ke = ye.calls) && void 0 !== Ke ? Ke : []].flatMap((ee => {
```

#### 2238. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24233` → after: `L24233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24233) · [Before (L24233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24233)

```diff
-   return [...YB.callbacks, ...null !== (jB = YB.functions) && void 0 !== jB ? jB : []].some((OB => {
+   return [...ye.callbacks, ...null !== (Ue = ye.functions) && void 0 !== Ue ? Ue : []].some((ie => {
```

#### 2239. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24235` → after: `L24235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24235) · [Before (L24235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24235)

```diff
-     return (yB.has(OB.name) || JB.includes(OB.name)) && ((null !== (GB = OB.params) && void 0 !== GB ? GB : []).includes(BB) || (null !== (YB = null === (DB = OB.body) || void 0 === DB ? void 0 : DB.locals) && void 0 !== YB ? YB : []).includes(BB))
+     return (Fe.has(ie.name) || Je.includes(ie.name)) && ((null !== (He = ie.params) && void 0 !== He ? He : []).includes(ee) || (null !== (ye = null === (be = ie.body) || void 0 === be ? void 0 : be.locals) && void 0 !== ye ? ye : []).includes(ee))
```

#### 2240. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24263` → after: `L24263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24263) · [Before (L24263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24263)

```diff
-     const GB = [...BB.matchAll(new RegExp(String.raw`\b${Bi}\s+(?:the\s+|your\s+|their\s+)([a-z]+)\b(?!\s+(?:of|to)\b)`, "gi"))].flatMap((BB => {
+     const He = [...ee.matchAll(new RegExp(String.raw`\b${ea}\s+(?:the\s+|your\s+|their\s+)([a-z]+)\b(?!\s+(?:of|to)\b)`, "gi"))].flatMap((ee => {
```

#### 2241. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24291` → after: `L24291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24291) · [Before (L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24291)

```diff
-   for (const NB of null !== (pB = null === DB || void 0 === DB ? void 0 : DB.codeLines) && void 0 !== pB ? pB : []) {
+   for (const Xe of null !== (fe = null === be || void 0 === be ? void 0 : be.codeLines) && void 0 !== fe ? fe : []) {
```

#### 2242. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24293` → after: `L24293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24293) · [Before (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24293)

```diff
-     for (const BB of (0, EQ.f)(NB, TE, bE)) jB.add(jc([BB[1], BB[2], BB[3]]))
+     for (const ee of (0, lM.g)(Xe, lu, Su)) Ue.add(bm([ee[1], ee[2], ee[3]]))
```

#### 2243. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24312-L24315` → after: `L24312-L24315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24312-L24315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24312-L24315) · [Before (L24312-L24315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24312-L24315)

```diff
-   const DB = new RegExp(String.raw`\bthe\s+(?:${YB.join("|")})\b`, "gi");
-   return BB.replace(OB ? Qc : Dc, (BB => BB.replace(DB, (BB => {
-     const OB = `the ${GB}`;
-     return BB === BB.toUpperCase() ? OB.toUpperCase() : /^The/.test(BB) ? `T${OB.slice(1)}` : OB
+   const be = new RegExp(String.raw`\bthe\s+(?:${ye.join("|")})\b`, "gi");
+   return ee.replace(ie ? Hm : im, (ee => ee.replace(be, (ee => {
+     const ie = `the ${He}`;
+     return ee === ee.toUpperCase() ? ie.toUpperCase() : /^The/.test(ee) ? `T${ie.slice(1)}` : ie
```

#### 2244. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24349` → after: `L24349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24349) · [Before (L24349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24349)

```diff
-     qB = zc(zB.code, null !== (DB = zB.where) && void 0 !== DB ? DB : "", lB, OB, GB, YB, QB);
+     Te = Jm(ke.code, null !== (be = ke.where) && void 0 !== be ? be : "", qe, ie, He, ye, Me);
```

#### 2245. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24355` → after: `L24355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24355) · [Before (L24355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24355)

```diff
-       return `${arguments.length<=1?void 0:arguments[1]}${null!==(OB=arguments.length<=2?void 0:arguments[2])&&void 0!==OB?OB:""}${GB}${arguments.length<=4?void 0:arguments[4]}${YB}${arguments.length<=6?void 0:arguments[6]}${DB}${arguments.length<=8?void 0:arguments[8]}`
+       return `${arguments.length<=1?void 0:arguments[1]}${null!==(ie=arguments.length<=2?void 0:arguments[2])&&void 0!==ie?ie:""}${He}${arguments.length<=4?void 0:arguments[4]}${ye}${arguments.length<=6?void 0:arguments[6]}${be}${arguments.length<=8?void 0:arguments[8]}`
```

#### 2246. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24376` → after: `L24376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24376) · [Before (L24376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24376)

```diff
-     const BB = [...OB.playerText, ...(null !== (NB = OB.messages) && void 0 !== NB ? NB : []).map((BB => {
+     const ee = [...ie.playerText, ...(null !== (Xe = ie.messages) && void 0 !== Xe ? Xe : []).map((ee => {
```

#### 2247. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24381-L24382` → after: `L24381-L24382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24381-L24382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24381-L24382) · [Before (L24381-L24382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24381-L24382)

```diff
-       })), null !== (RB = null === GB || void 0 === GB ? void 0 : GB.gameText) && void 0 !== RB ? RB : ""].join("\n"),
-       YB = ["exit", "finish line", "finish"].filter((OB => !new RegExp(`\\b${OB.split(" ")[0]}`, "i").test(BB)));
+       })), null !== (ze = null === He || void 0 === He ? void 0 : He.gameText) && void 0 !== ze ? ze : ""].join("\n"),
+       ye = ["exit", "finish line", "finish"].filter((ie => !new RegExp(`\\b${ie.split(" ")[0]}`, "i").test(ee)));
```

#### 2248. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24392` → after: `L24392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24392) · [Before (L24392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24392)

```diff
-   return 0 === pB.length ? oB : {
+   return 0 === fe.length ? Ke : {
```

#### 2249. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24397` → after: `L24397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24397) · [Before (L24397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24397)

```diff
- const qc = (0, EQ.n)("\\w");
+ const km = (0, lM.m)("\\w");
```

#### 2250. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24413-L24417` → after: `L24413-L24417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24413-L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24413-L24417) · [Before (L24413-L24417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24413-L24417)

```diff
-     jB = null !== oB && oB.length >= 3 && !/^-?\d+$/.test(oB) ? oB : null,
-     yB = [...new Set([BB, DB, ...null === jB ? [] : [jB, jB.replace(/_/g, " ")]])].sort(((BB, OB) => OB.length - BB.length)).map(wQ.h),
-     JB = null !== (OB = null === (GB = /(?:^|\s|:)(-?\d+)$/.exec(BB)) || void 0 === GB ? void 0 : GB[1]) && void 0 !== OB ? OB : null,
-     MB = null === JB ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,wQ.h)(JB)}(?![\\w]|\\.\\d)`,
-     PB = `(${yB.join("|")})(?![\\w])${MB}`,
+     Ue = null !== Ke && Ke.length >= 3 && !/^-?\d+$/.test(Ke) ? Ke : null,
+     Fe = [...new Set([ee, be, ...null === Ue ? [] : [Ue, Ue.replace(/_/g, " ")]])].sort(((ee, ie) => ie.length - ee.length)).map(mM.f),
+     Je = null !== (ie = null === (He = /(?:^|\s|:)(-?\d+)$/.exec(ee)) || void 0 === He ? void 0 : He[1]) && void 0 !== ie ? ie : null,
+     oe = null === Je ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,mM.f)(Je)}(?![\\w]|\\.\\d)`,
+     Re = `(${Fe.join("|")})(?![\\w])${oe}`,
```

#### 2251. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24422-L24424` → after: `L24422-L24424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24422-L24424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24422-L24424) · [Before (L24422-L24424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24422-L24424)

```diff
-       parts: (0, wQ.u)(BB),
-       atStart: new RegExp(`^(?:${PB})`, "i"),
-       anywhere: new RegExp(`(?:${PB})`, "gi")
+       parts: (0, mM.D)(ee),
+       atStart: new RegExp(`^(?:${Re})`, "i"),
+       anywhere: new RegExp(`(?:${Re})`, "gi")
```

#### 2252. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24457` → after: `L24457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24457) · [Before (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24457)

```diff
-   for (const GB of (0, EQ.f)(BB, OB.anywhere, qc)) {
+   for (const He of (0, lM.g)(ee, ie.anywhere, km)) {
```

#### 2253. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24478` → after: `L24478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24478) · [Before (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24478)

```diff
-   return [BB, ...OB.flowSteps].some((OB => OB.from === BB.from && (0, wQ.u)(OB.to).some((BB => Rc.test(BB)))))
+   return [ee, ...ie.flowSteps].some((ie => ie.from === ee.from && (0, mM.D)(ie.to).some((ee => Tm.test(ee)))))
```

#### 2254. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24487` → after: `L24487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24487) · [Before (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24487)

```diff
-   for (const GB of (0, EQ.f)(BB, dc, (0, EQ.n)("\\w.,"))) {
+   for (const He of (0, lM.g)(ee, Wm, (0, lM.m)("\\w.,"))) {
```

#### 2255. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24524` → after: `L24524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24524) · [Before (L24524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24524)

```diff
-   }(OB, BB)))))) && void 0 !== DB ? DB : null : 1 === GB.length && Lc.test(OB) ? GB[0] : null
+   }(ie, ee)))))) && void 0 !== be ? be : null : 1 === He.length && Ym.test(ie) ? He[0] : null
```

#### 2256. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24557` → after: `L24557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24557) · [Before (L24557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24557)

```diff
-   return null !== OB.word && null !== BB.number && Vc(OB.word, BB) ? `${OB.word} ${BB.number}` : OB.isValue && null !== BB.value ? BB.value : BB.plain
+   return null !== ie.word && null !== ee.number && zm(ie.word, ee) ? `${ie.word} ${ee.number}` : ie.isValue && null !== ee.value ? ee.value : ee.plain
```

#### 2257. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24570` → after: `L24570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24570) · [Before (L24570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24570)

```diff
-   const oB = null === OB.to.number ? null : new RegExp(`^${(0,wQ.h)(OB.to.number)}(?![\\w]|\\.\\d)`).exec(DB);
+   const Ke = null === ie.to.number ? null : new RegExp(`^${(0,mM.f)(ie.to.number)}(?![\\w]|\\.\\d)`).exec(be);
```

#### 2258. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24624` → after: `L24624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24624) · [Before (L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24624)

```diff
-       IB = null !== (yB = null !== (JB = gc(mB, AB, uB)) && void 0 !== JB ? JB : gc(mB, AB, sc(uB, kB))) && void 0 !== yB ? yB : dB && 1 === uB.length && 0 === Ic(mB).length ? uB[0] : null;
+       Ye = null !== (Fe = null !== (Je = Vm(Ae, Ee, Pe)) && void 0 !== Je ? Je : Vm(Ae, Ee, hm(Pe, Ze))) && void 0 !== Fe ? Fe : we && 1 === Pe.length && 0 === Dm(Ae).length ? Pe[0] : null;
```

#### 2259. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24634-L24635` → after: `L24634-L24635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24634-L24635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24634-L24635) · [Before (L24634-L24635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24634-L24635)

```diff
-     })), LB = bc(Tc(null === pB || void 0 === pB ? void 0 : pB.toLowerCase(), qB, ZB), YB), gB = RB + lB.indexOf(ZB) - (null !== (MB = null === SB || void 0 === SB || null === (PB = SB[1]) || void 0 === PB ? void 0 : PB.length) && void 0 !== MB ? MB : 0);
-     let rB = `${LB} `,
+     })), ce = nm(Sm(null === fe || void 0 === fe ? void 0 : fe.toLowerCase(), Te, pe), ye), xe = ze + qe.indexOf(pe) - (null !== (oe = null === Oe || void 0 === Oe || null === (Re = Oe[1]) || void 0 === Re ? void 0 : Re.length) && void 0 !== oe ? oe : 0);
+     let Le = `${ce} `,
```

#### 2260. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24638` → after: `L24638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24638) · [Before (L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24638)

```diff
-     if (null !== iB) rB = `${LB} ${iB.text} after ${fB.slice(0,FB.length)}`, XB = WB + UB.length + FB.length + iB.length, wB = XB;
+     if (null !== ae) Le = `${ce} ${ae.text} after ${te.slice(0,Ve.length)}`, Ce = Be + We.length + Ve.length + ae.length, ve = Ce;
```

#### 2261. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24645` → after: `L24645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24645) · [Before (L24645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24645)

```diff
-         rB = `${LB} ${OB.slice(GB[0].length,GB[0].length+YB.length)} after ${BB}`, XB = WB + BB.length + GB[0].length + YB.length, wB = XB
+         Le = `${ce} ${ie.slice(He[0].length,He[0].length+ye.length)} after ${ee}`, Ce = Be + ee.length + He[0].length + ye.length, ve = Ce
```

#### 2262. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24648` → after: `L24648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24648) · [Before (L24648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24648)

```diff
-         rB = `${LB} ${/^[a-z][a-z_]*$/.test(BB)&&new RegExp(`\\bthe\\s+${(0,wQ.h)(BB)}\\b`,"i").test(mB)?"the ":""}${BB} after `, XB = WB
+         Le = `${ce} ${/^[a-z][a-z_]*$/.test(ee)&&new RegExp(`\\bthe\\s+${(0,mM.f)(ee)}\\b`,"i").test(Ae)?"the ":""}${ee} after `, Ce = Be
```

#### 2263. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24674` → after: `L24674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24674) · [Before (L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24674)

```diff
-         SB = null === WB ? gc(ZB, RB, AB) : null !== (yB = OB.find((BB => VB.some((OB => ic(OB, BB)))))) && void 0 !== yB ? yB : null;
+         Oe = null === Be ? Vm(pe, ze, Ee) : null !== (Fe = ie.find((ee => ge.some((ie => Am(ie, ee)))))) && void 0 !== Fe ? Fe : null;
```

#### 2264. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24677-L24679` → after: `L24677-L24679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24677-L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24677-L24679) · [Before (L24677-L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24677-L24679)

```diff
-         UB = /[_:]/.test(SB.to.plain) ? `\`${SB.step.to}\`` : SB.to.plain,
-         fB = `${bc(Tc(void 0,void 0,lB),YB)} ${null===nB?UB:Cc(SB.to,nB)}`,
-         kB = pB - (null !== (JB = null === WB || void 0 === WB || null === (MB = WB[1]) || void 0 === MB ? void 0 : MB.length) && void 0 !== JB ? JB : 0);
+         We = /[_:]/.test(Oe.to.plain) ? `\`${Oe.step.to}\`` : Oe.to.plain,
+         te = `${nm(Sm(void 0,void 0,qe),ye)} ${null===de?We:jm(Oe.to,de)}`,
+         Ze = fe - (null !== (Je = null === Be || void 0 === Be || null === (oe = Be[1]) || void 0 === oe ? void 0 : oe.length) && void 0 !== Je ? Je : 0);
```

#### 2265. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24691` → after: `L24691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24691) · [Before (L24691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24691)

```diff
-     const GB = (0, EQ.f)(BB, OB.from.anywhere, qc).at(-1);
+     const He = (0, lM.g)(ee, ie.from.anywhere, km).at(-1);
```

#### 2266. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24716` → after: `L24716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24716) · [Before (L24716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24716)

```diff
-         PB = Oh.test((0, EQ.z)((0, EQ.z)(yB, DB.to.anywhere, qc, Zc), DB.from.anywhere, qc, Zc));
+         Re = Qm.test((0, lM.t)((0, lM.t)(Fe, be.to.anywhere, km, qm), be.from.anywhere, km, qm));
```

#### 2267. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24740` → after: `L24740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24740) · [Before (L24740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24740)

```diff
-   return `${OB[1]}${GB.charAt(0).toUpperCase()}${GB.slice(1)}`
+   return `${ie[1]}${He.charAt(0).toUpperCase()}${He.slice(1)}`
```

#### 2268. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24769` → after: `L24769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24769) · [Before (L24769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24769)

```diff
-           GB.push(`- ${BB.join(" ")}`), OB++
+           He.push(`- ${ee.join(" ")}`), ie++
```

#### 2269. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24778` → after: `L24778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24778) · [Before (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24778)

```diff
-     layout: 0 === OB ? BB : {
+     layout: 0 === ie ? ee : {
```

#### 2270. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24791` → after: `L24791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24791) · [Before (L24791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24791)

```diff
-       markdown: `${GB.join("\n")}${OB}${BB.markdown}`.trim()
+       markdown: `${He.join("\n")}${ie}${ee.markdown}`.trim()
```

#### 2271. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24818` → after: `L24818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24818) · [Before (L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24818)

```diff
-   const OB = (0, wQ.k)(BB, Jh - 1),
+   const ie = (0, mM.n)(ee, Ul - 1),
```

#### 2272. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24820` → after: `L24820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24820) · [Before (L24820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24820)

```diff
-   return `${(GB>Jh/2?OB.slice(0,GB):OB).replace(/[\s,.;:!?-]+$/,"")}\u2026`
+   return `${(He>Ul/2?ie.slice(0,He):ie).replace(/[\s,.;:!?-]+$/,"")}\u2026`
```

#### 2273. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24844` → after: `L24844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24844) · [Before (L24844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24844)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${zh}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${ol}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
```

#### 2274. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24856` → after: `L24856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24856) · [Before (L24856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24856)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${Ph}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${zh}(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${Jl}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${ol}(?!\w)\s*`, "i"),
```

#### 2275. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24868` → after: `L24868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24868) · [Before (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24868)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Ph}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${Ph}dies?)(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Jl}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${Jl}dies?)(?!\w)\s*`, "i"),
```

#### 2276. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24881` → after: `L24881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24881) · [Before (L24881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24881)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${Ph}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${Jl}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
```

#### 2277. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24893` → after: `L24893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24893) · [Before (L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24893)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Ph}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Jl}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
```

#### 2278. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24905` → after: `L24905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24905) · [Before (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24905)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Ph}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Jl}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
```

#### 2279. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24915` → after: `L24915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24915) · [Before (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24915)

```diff
-   return /[|&?=<>!,]/.test(OB) ? `(${OB})` : OB
+   return /[|&?=<>!,]/.test(ie) ? `(${ie})` : ie
```

#### 2280. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24921` → after: `L24921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24921) · [Before (L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24921)

```diff
-   return null !== (OB = null !== (GB = null === (YB = /^(.+)\.toString\(\)$/.exec(QB)) || void 0 === YB ? void 0 : YB[1]) && void 0 !== GB ? GB : null === (DB = /^String\((.+)\)$/.exec(QB)) || void 0 === DB ? void 0 : DB[1]) && void 0 !== OB ? OB : BB
+   return null !== (ie = null !== (He = null === (ye = /^(.+)\.toString\(\)$/.exec(Me)) || void 0 === ye ? void 0 : ye[1]) && void 0 !== He ? He : null === (be = /^String\((.+)\)$/.exec(Me)) || void 0 === be ? void 0 : be[1]) && void 0 !== ie ? ie : ee
```

#### 2281. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24931` → after: `L24931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24931) · [Before (L24931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24931)

```diff
-     return "literal" in GB && new RegExp(String.raw`\b${OB}\s*[:#]?\s*$`, "i").test(GB.literal) && void 0 !== DB && "code" in DB
+     return "literal" in He && new RegExp(String.raw`\b${ie}\s*[:#]?\s*$`, "i").test(He.literal) && void 0 !== be && "code" in be
```

#### 2282. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24956` → after: `L24956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24956) · [Before (L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24956)

```diff
-   if (ti(DB) && /\p{L}{2}/u.test(DB)) return `"${lh(DB)}"`;
+   if (Ga(be) && /\p{L}{2}/u.test(be)) return `"${Rl(be)}"`;
```

#### 2283. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24960` → after: `L24960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24960) · [Before (L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24960)

```diff
-   }(QB) ? `\`${QB}\`` : null
+   }(Me) ? `\`${Me}\`` : null
```

#### 2284. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24965` → after: `L24965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24965) · [Before (L24965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24965)

```diff
-   const DB = (null !== (YB = BB.messages) && void 0 !== YB ? YB : []).filter((BB => OB.isMessage(BB) && (null === GB || ph(BB.where).includes(GB)))),
+   const be = (null !== (ye = ee.messages) && void 0 !== ye ? ye : []).filter((ee => ie.isMessage(ee) && (null === He || kl(ee.where).includes(He)))),
```

#### 2285. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24987` → after: `L24987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24987) · [Before (L24987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24987)

```diff
-                   '"' === oB || "'" === oB ? YB = oB : "([{".includes(oB) ? GB++ : ")]}".includes(oB) ? GB-- : "+" === oB && 0 === GB && (OB.push(BB.slice(DB, QB).trim()), DB = QB + 1)
+                   '"' === Ke || "'" === Ke ? ye = Ke : "([{".includes(Ke) ? He++ : ")]}".includes(Ke) ? He-- : "+" === Ke && 0 === He && (ie.push(ee.slice(be, Me).trim()), be = Me + 1)
```

#### 2286. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24990` → after: `L24990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24990) · [Before (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24990)

```diff
-               return OB.push(BB.slice(DB).trim()), OB.every((BB => "" !== BB)) ? OB : null
+               return ie.push(ee.slice(be).trim()), ie.every((ee => "" !== ee)) ? ie : null
```

#### 2287. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L24998-L24999` → after: `L24998-L24999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R24998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L24998-L24999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L24998-L24999) · [Before (L24998-L24999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L24998-L24999)

```diff
-             }))) && void 0 !== OB ? OB : null
-           }(null !== (GB = null === YB || void 0 === YB ? void 0 : YB[1]) && void 0 !== GB ? GB : OB);
+             }))) && void 0 !== ie ? ie : null
+           }(null !== (He = null === ye || void 0 === ye ? void 0 : ye[1]) && void 0 !== He ? He : ie);
```

#### 2288. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25011` → after: `L25011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25011) · [Before (L25011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25011)

```diff
-       } = oB[0], MB = YB.indexOf(jB, DB[0].length), PB = null !== (OB = null === (GB = /["']/.exec(jB)) || void 0 === GB ? void 0 : GB[0]) && void 0 !== OB ? OB : '"';
+       } = Ke[0], oe = ye.indexOf(Ue, be[0].length), Re = null !== (ie = null === (He = /["']/.exec(Ue)) || void 0 === He ? void 0 : He[0]) && void 0 !== ie ? ie : '"';
```

#### 2289. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25030` → after: `L25030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25030) · [Before (L25030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25030)

```diff
-   return new Set([...BB.callbacks, ...null !== (OB = BB.functions) && void 0 !== OB ? OB : []].map((BB => {
+   return new Set([...ee.callbacks, ...null !== (ie = ee.functions) && void 0 !== ie ? ie : []].map((ee => {
```

#### 2290. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25045` → after: `L25045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25045) · [Before (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25045)

```diff
-   if (null === YB || null === DB || hL.test(null !== (GB = DB[1]) && void 0 !== GB ? GB : "") || dh.test(YB.text)) return null;
+   if (null === ye || null === be || uc.test(null !== (He = be[1]) && void 0 !== He ? He : "") || tl.test(ye.text)) return null;
```

#### 2291. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25060` → after: `L25060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25060) · [Before (L25060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25060)

```diff
-       const DB = null !== (OB = null === (GB = BB.ideaPlace) || void 0 === GB ? void 0 : GB.exec(oB)) && void 0 !== OB ? OB : null;
+       const be = null !== (ie = null === (He = ee.ideaPlace) || void 0 === He ? void 0 : He.exec(Ke)) && void 0 !== ie ? ie : null;
```

#### 2292. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25063` → after: `L25063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25063) · [Before (L25063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25063)

```diff
-         number: null !== (YB = DB[1]) && void 0 !== YB ? YB : null,
+         number: null !== (ye = be[1]) && void 0 !== ye ? ye : null,
```

#### 2293. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25081-L25083` → after: `L25081-L25083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25081-L25083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25081-L25083) · [Before (L25081-L25083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25081-L25083)

```diff
-   const qB = null === zB ? "" : `at ${PB.numberWord} ${zB} `,
-     ZB = `hange your ${PB.noun} message (${pB}) so ${qB}it also ${JB.verb} ${JB.after}`;
-   return `${YB.head}${/^[A-Z]/.test(YB.text)?"C":"c"}${ZB}`
+   const Te = null === ke ? "" : `at ${Re.numberWord} ${ke} `,
+     pe = `hange your ${Re.noun} message (${fe}) so ${Te}it also ${Je.verb} ${Je.after}`;
+   return `${ye.head}${/^[A-Z]/.test(ye.text)?"C":"c"}${pe}`
```

#### 2294. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25143` → after: `L25143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25143) · [Before (L25143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25143)

```diff
-         player: "broadcastMessage" === QB[3] ? null : null !== (OB = oB[0]) && void 0 !== OB ? OB : null,
+         player: "broadcastMessage" === Me[3] ? null : null !== (ie = Ke[0]) && void 0 !== ie ? ie : null,
```

#### 2295. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25145` → after: `L25145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25145) · [Before (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25145)

```diff
-         condition: null !== (GB = QB[2]) && void 0 !== GB ? GB : null,
+         condition: null !== (He = Me[2]) && void 0 !== He ? He : null,
```

#### 2296. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25154-L25155` → after: `L25154-L25155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25154-L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25154-L25155) · [Before (L25154-L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25154-L25155)

```diff
-       const YB = null === BB.mention ? "join" === BB.kind && "onPlayerJoin" === qB : BB.mention.test(ZB),
-         DB = (null !== (GB = OB.messages) && void 0 !== GB ? GB : []).filter((OB => BB.isMessage(OB) && ph(OB.where).includes(qB)));
+       const ye = null === ee.mention ? "join" === ee.kind && "onPlayerJoin" === Te : ee.mention.test(pe),
+         be = (null !== (He = ie.messages) && void 0 !== He ? He : []).filter((ie => ee.isMessage(ie) && kl(ie.where).includes(Te)));
```

#### 2297. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25179-L25180` → after: `L25179-L25180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25179-L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25179-L25180) · [Before (L25179-L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25179-L25180)

```diff
-     fB = null !== WB.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${WB.numberWord}s?\b`, "i").test(ZB),
-     kB = null === WB.numberWord || fB ? new Set : new Set((0, wQ.l)(ZB).filter((BB => !/\d\s*%/.test(BB))).flatMap((BB => [...BB.matchAll(new RegExp(String.raw`\b${WB.numberWord}\s*:?\s*(\d{1,3})\b${zh}`, "gi"))].map((BB => BB[1])))));
+     te = null !== Be.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${Be.numberWord}s?\b`, "i").test(pe),
+     Ze = null === Be.numberWord || te ? new Set : new Set((0, mM.q)(pe).filter((ee => !/\d\s*%/.test(ee))).flatMap((ee => [...ee.matchAll(new RegExp(String.raw`\b${Be.numberWord}\s*:?\s*(\d{1,3})\b${ol}`, "gi"))].map((ee => ee[1])))));
```

#### 2298. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25182` → after: `L25182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25182) · [Before (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25182)

```diff
-   const dB = null !== (GB = null === UB || void 0 === UB ? void 0 : UB[2]) && void 0 !== GB ? GB : 1 === kB.size ? [...kB][0] : null;
+   const we = null !== (He = null === We || void 0 === We ? void 0 : We[2]) && void 0 !== He ? He : 1 === Ze.size ? [...Ze][0] : null;
```

#### 2299. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25191` → after: `L25191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25191) · [Before (L25191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25191)

```diff
-   })) && Fh.test(BB), FB = null !== (YB = WB.mention) && void 0 !== YB ? YB : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
+   })) && Al.test(ee), Ve = null !== (ye = Be.mention) && void 0 !== ye ? ye : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
```

#### 2300. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25195-L25197` → after: `L25195-L25197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25195-L25197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25195-L25197) · [Before (L25195-L25197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25195-L25197)

```diff
-         GB = null === OB ? BB : BB.slice(OB[0].length),
-         YB = (null === OB ? (0, EQ.C)(GB, /\s+(?=[A-Z`"])/g, (0, EQ.w)(".!?")) : [GB]).some((BB => {
-           const OB = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(BB) ? `${iB} ${BB}` : BB;
+         He = null === ie ? ee : ee.slice(ie[0].length),
+         ye = (null === ie ? (0, lM.v)(He, /\s+(?=[A-Z`"])/g, (0, lM.s)(".!?")) : [He]).some((ee => {
+           const ie = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(ee) ? `${ae} ${ee}` : ee;
```

#### 2301. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25211` → after: `L25211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25211) · [Before (L25211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25211)

```diff
-           literal: `${YB}${/[.!?]$/.test(YB)||""===YB?" ":". "}${OB}`
+           literal: `${ye}${/[.!?]$/.test(ye)||""===ye?" ":". "}${ie}`
```

#### 2302. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25215` → after: `L25215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25215) · [Before (L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25215)

```diff
-         literal: `. ${OB}`
+         literal: `. ${ie}`
```

#### 2303. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25226` → after: `L25226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25226) · [Before (L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25226)

```diff
-       return GB.map((BB => "literal" in BB ? (0, wQ.E)(BB.literal, OB) : BB.code)).join(" + ")
+       return He.map((ee => "literal" in ee ? (0, mM.L)(ee.literal, ie) : ee.code)).join(" + ")
```

#### 2304. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25228-L25229` → after: `L25228-L25229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25228-L25229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25228-L25229) · [Before (L25228-L25229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25228-L25229)

```diff
-     wB = `${uB.line.slice(0,uB.start)}${uB.isList?`[${XB}]`:XB}${uB.line.slice(uB.end)}`,
-     EB = null === dB ? lB.map((BB => BB === pB.line ? `${pB.indent}${wB}` : BB)) : [`${pB.indent}if (${null!==(DB=null===(QB=pB.condition)||void 0===QB?void 0:QB.trim())&&void 0!==DB?DB:`${Nh(Rh(nB))} === ${dB}`}) ${wB}`, `${pB.indent}else ${uB.line}`],
+     ve = `${Pe.line.slice(0,Pe.start)}${Pe.isList?`[${Ce}]`:Ce}${Pe.line.slice(Pe.end)}`,
+     ue = null === we ? qe.map((ee => ee === fe.line ? `${fe.indent}${ve}` : ee)) : [`${fe.indent}if (${null!==(be=null===(Me=fe.condition)||void 0===Me?void 0:Me.trim())&&void 0!==be?be:`${Tl(pl(de))} === ${we}`}) ${ve}`, `${fe.indent}else ${Pe.line}`],
```

#### 2305. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25231` → after: `L25231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25231) · [Before (L25231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25231)

```diff
-     hB = LB ? `Change your ${WB.noun} message (${KB}) to "${pB.words}"${cB}` : `Change your ${WB.noun} message (${KB}) so ${null===dB?"":`at ${WB.numberWord} ${dB} `}it also says "${pB.words}"${cB}`,
+     le = ce ? `Change your ${Be.noun} message (${De}) to "${fe.words}"${me}` : `Change your ${Be.noun} message (${De}) so ${null===we?"":`at ${Be.numberWord} ${we} `}it also says "${fe.words}"${me}`,
```

#### 2306. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25250` → after: `L25250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25250) · [Before (L25250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25250)

```diff
-   const YB = null !== (GB = null === OB || void 0 === OB ? void 0 : OB.messages) && void 0 !== GB ? GB : [];
+   const ye = null !== (He = null === ie || void 0 === ie ? void 0 : ie.messages) && void 0 !== He ? He : [];
```

#### 2307. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25275` → after: `L25275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25275) · [Before (L25275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25275)

```diff
-     return wh(null !== DB && void 0 !== DB ? DB : QB, void 0 === oB ? yB ? "players coming back" : "keeping players" : yB ? "how many players come back" : "how many players stay")
+     return Ll(null !== be && void 0 !== be ? be : Me, void 0 === Ke ? Fe ? "players coming back" : "keeping players" : Fe ? "how many players come back" : "how many players stay")
```

#### 2308. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25289-L25290` → after: `L25289-L25290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25289-L25290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25289-L25290) · [Before (L25289-L25290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25289-L25290)

```diff
-       const DB = null !== (GB = BB.match(ah)) && void 0 !== GB ? GB : [],
-         QB = null !== (YB = OB.match(ah)) && void 0 !== YB ? YB : [],
+       const be = null !== (He = ee.match(ml)) && void 0 !== He ? He : [],
+         Me = null !== (ye = ie.match(ml)) && void 0 !== ye ? ye : [],
```

#### 2309. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25303` → after: `L25303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25303) · [Before (L25303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25303)

```diff
-       return "" === yB ? jB : [...jB, yB]
+       return "" === Fe ? Ue : [...Ue, Fe]
```

#### 2310. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25328` → after: `L25328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25328) · [Before (L25328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25328)

```diff
-       DB.set(MB.name, (null !== (QB = DB.get(MB.name)) && void 0 !== QB ? QB : 0) + 1)
+       be.set(oe.name, (null !== (Me = be.get(oe.name)) && void 0 !== Me ? Me : 0) + 1)
```

#### 2311. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25335-L25337` → after: `L25335-L25337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25335-L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25335-L25337) · [Before (L25335-L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25335-L25337)

```diff
-         PB = (0, wQ.q)(MB.name),
-         zB = null !== (oB = MB.usedIn) && void 0 !== oB ? oB : "",
-         lB = void 0 === QB ? null : null !== (jB = Nz(QB)) && void 0 !== jB ? jB : null;
+         Re = (0, mM.v)(oe.name),
+         ke = null !== (Ke = oe.usedIn) && void 0 !== Ke ? Ke : "",
+         qe = void 0 === Me ? null : null !== (Ue = Ek(Me)) && void 0 !== Ue ? Ue : null;
```

#### 2312. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25344` → after: `L25344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25344) · [Before (L25344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25344)

```diff
-         value: null !== (yB = null === QB || void 0 === QB ? void 0 : QB.value) && void 0 !== yB ? yB : BB,
+         value: null !== (Fe = null === Me || void 0 === Me ? void 0 : Me.value) && void 0 !== Fe ? Fe : ee,
```

#### 2313. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25346` → after: `L25346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25346) · [Before (L25346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25346)

```diff
-         codeKind: null === qB ? lB : null,
+         codeKind: null === Te ? qe : null,
```

#### 2314. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25348` → after: `L25348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25348) · [Before (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25348)

```diff
-         hazard: null !== (JB = null === qB || void 0 === qB ? void 0 : qB.hazard) && void 0 !== JB ? JB : null,
+         hazard: null !== (Je = null === Te || void 0 === Te ? void 0 : Te.hazard) && void 0 !== Je ? Je : null,
```

#### 2315. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25356` → after: `L25356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25356) · [Before (L25356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25356)

```diff
-   }(QB), qB), RB = Hz(pd(QB), qB), WB = null !== (GB = null === oB || void 0 === oB ? void 0 : oB.places) && void 0 !== GB ? GB : hh, AB = null !== (YB = null === yB || void 0 === yB ? void 0 : yB.grounds) && void 0 !== YB ? YB : null, VB = (() => {
+   }(Me), Te), ze = rk(pw(Me), Te), Be = null !== (He = null === Ke || void 0 === Ke ? void 0 : Ke.places) && void 0 !== He ? He : ul, Ee = null !== (ye = null === Fe || void 0 === Fe ? void 0 : Fe.grounds) && void 0 !== ye ? ye : null, ge = (() => {
```

#### 2316. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25377` → after: `L25377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25377) · [Before (L25377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25377)

```diff
-             const OB = (null !== (DB = YB.get(BB.name)) && void 0 !== DB ? DB : []).filter((BB => JSON.stringify(BB.selection) !== JSON.stringify(ZB.selection)));
+             const ie = (null !== (be = ye.get(ee.name)) && void 0 !== be ? be : []).filter((ee => JSON.stringify(ee.selection) !== JSON.stringify(pe.selection)));
```

#### 2317. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25389` → after: `L25389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25389) · [Before (L25389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25389)

```diff
-         const [oB, [jB]] = QB[0], yB = new RegExp(`${(0,wQ.h)(oB)}(?![\\w$])`);
+         const [Ke, [Ue]] = Me[0], Fe = new RegExp(`${(0,mM.f)(Ke)}(?![\\w$])`);
```

#### 2318. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25403` → after: `L25403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25403) · [Before (L25403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25403)

```diff
-           if (JB || !MB || /^\s*[#|]/.test(NB) || AR.test(NB) || 0 === (0, EQ.f)(NB.replace(/\[\[[^\]\n]+\]\]/g, " "), yB, EQ.p).length) continue;
+           if (Je || !oe || /^\s*[#|]/.test(Xe) || tz.test(Xe) || 0 === (0, lM.g)(Xe.replace(/\[\[[^\]\n]+\]\]/g, " "), Fe, lM.n).length) continue;
```

#### 2319. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25408` → after: `L25408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25408) · [Before (L25408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25408)

```diff
-           const OB = null !== (zB = null === (lB = WR.exec(NB)) || void 0 === lB ? void 0 : lB[0].length) && void 0 !== zB ? zB : 0,
+           const ie = null !== (ke = null === (qe = Wz.exec(Xe)) || void 0 === qe ? void 0 : qe[0].length) && void 0 !== ke ? ke : 0,
```

#### 2320. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25416` → after: `L25416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25416) · [Before (L25416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25416)

```diff
-             QB = DB + (null !== (pB = null === (qB = mk.exec(NB.slice(DB))) || void 0 === qB ? void 0 : qB[0].length) && void 0 !== pB ? pB : 0),
+             Me = be + (null !== (fe = null === (Te = VZ.exec(Xe.slice(be))) || void 0 === Te ? void 0 : Te[0].length) && void 0 !== fe ? fe : 0),
```

#### 2321. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25418-L25419` → after: `L25418-L25419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25418-L25419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25418-L25419) · [Before (L25418-L25419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25418-L25419)

```diff
-             RB = `${Ik(jB)} [[Heatmap]].`;
-           return PB[ZB] = `${NB.slice(0,QB)}${oB} ${RB}${NB.slice(QB)}`, {
+             ze = `${aZ(Ue)} [[Heatmap]].`;
+           return Re[pe] = `${Xe.slice(0,Me)}${Ke} ${ze}${Xe.slice(Me)}`, {
```

#### 2322. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25435` → after: `L25435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25435) · [Before (L25435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25435)

```diff
-       }(yB.markdown, [...null !== zB && void 0 !== zB ? zB : [], ...null !== lB && void 0 !== lB ? lB : []], QB);
+       }(Fe.markdown, [...null !== ke && void 0 !== ke ? ke : [], ...null !== qe && void 0 !== qe ? qe : []], Me);
```

#### 2323. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25443-L25445` → after: `L25443-L25445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25443-L25445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25443-L25445) · [Before (L25443-L25445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25443-L25445)

```diff
-     const BB = [...(null !== PB && void 0 !== PB ? PB : []).flatMap((BB => [BB.reason, BB.typical])), ...VB.repairs.map((BB => BB.to))];
-     return FN(JB, null === MB ? BB : [MB.change, ...BB])
-   })(), nB = new Set((null !== PB && void 0 !== PB ? PB : []).flatMap((BB => "good" === BB.verdict ? [BB.key] : []))), UB = VZ(jB), fB = rf(AB, QB), kB = VB.markdown, dB = null === yB ? kB : QE(kB, yB, nB, "young" === jB, SB).markdown, KB = UB ? Mf(dB, (uB = oB, null === uB ? []  … [truncated]
+     const ee = [...(null !== Re && void 0 !== Re ? Re : []).flatMap((ee => [ee.reason, ee.typical])), ...ge.repairs.map((ee => ee.to))];
+     return CX(Je, null === oe ? ee : [oe.change, ...ee])
+   })(), de = new Set((null !== Re && void 0 !== Re ? Re : []).flatMap((ee => "good" === ee.verdict ? [ee.key] : []))), We = tp(Ue), te = mt(Ee, Me), Ze = ge.markdown, we = null === Fe ? Ze : Hu(Ze, Fe, de, "young" === Ue, Oe).markdown, De = We ? ft(we, (Pe = Ke, null === Pe ? []  … [truncated]
```

#### 2324. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25464` → after: `L25464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25464) · [Before (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25464)

```diff
-         markdown: 0 === DB.length ? BB : QB,
+         markdown: 0 === be.length ? ee : Me,
```

#### 2325. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25493` → after: `L25493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25493) · [Before (L25493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25493)

```diff
-         return `${BB.slice(0,DB.end)}${oB}${BB.slice(QB)}`
+         return `${ee.slice(0,be.end)}${Ke}${ee.slice(Me)}`
```

#### 2326. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25531` → after: `L25531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25531) · [Before (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25531)

```diff
-         markdown: 0 === OB.length ? BB : GB,
+         markdown: 0 === ie.length ? ee : He,
```

#### 2327. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25548` → after: `L25548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25548) · [Before (L25548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25548)

```diff
-           const OB = `the ${BB}`;
+           const ie = `the ${ee}`;
```

#### 2328. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25559` → after: `L25559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25559) · [Before (L25559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25559)

```diff
-         of GB) DB = (0, EQ.z)(DB, new RegExp(`(${(0,wQ.h)(QB)})(?![\\w-])`, "gi"), (0, EQ.n)("\\w-"), (BB => {
+         of He) be = (0, lM.t)(be, new RegExp(`(${(0,mM.f)(Me)})(?![\\w-])`, "gi"), (0, lM.m)("\\w-"), (ee => {
```

#### 2329. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25561` → after: `L25561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25561) · [Before (L25561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25561)

```diff
-         return /^T/.test(OB) ? `T${oB.slice(1)}` : oB
+         return /^T/.test(ie) ? `T${Ke.slice(1)}` : Ke
```

#### 2330. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25568` → after: `L25568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25568) · [Before (L25568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25568)

```diff
-     gB = [...null !== zB && void 0 !== zB ? zB : [], ...null !== lB && void 0 !== lB ? lB : []].flatMap((BB => "deaths" === BB.kind ? [BB.square] : [])),
+     xe = [...null !== ke && void 0 !== ke ? ke : [], ...null !== qe && void 0 !== qe ? qe : []].flatMap((ee => "deaths" === ee.kind ? [ee.square] : [])),
```

#### 2331. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25571` → after: `L25571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25571) · [Before (L25571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25571)

```diff
-       if (null === OB || void 0 === OB || BB.length > wQ.n) return {
+       if (null === ie || void 0 === ie || ee.length > mM.s) return {
```

#### 2332. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25573` → after: `L25573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25573) · [Before (L25573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25573)

```diff
-         GP: []
+         KR: []
```

#### 2333. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25599` → after: `L25599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25599) · [Before (L25599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25599)

```diff
-         GP: []
+         KR: []
```

#### 2334. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25602` → after: `L25602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25602) · [Before (L25602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25602)

```diff
-         GP: YB
+         KR: ye
```

#### 2335. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25615` → after: `L25615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25615) · [Before (L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25615)

```diff
-       if (null === OB || void 0 === OB || BB.length > wQ.n) return {
+       if (null === ie || void 0 === ie || ee.length > mM.s) return {
```

#### 2336. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25626` → after: `L25626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25626) · [Before (L25626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25626)

```diff
-         jB = `${null!==GB&&void 0!==GB?GB:""}\n${oB}\n${oB.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
+         Ue = `${null!==He&&void 0!==He?He:""}\n${Ke}\n${Ke.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
```

#### 2337. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25635` → after: `L25635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25635) · [Before (L25635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25635)

```diff
-     }(XB, QB, null !== (DB = null === fB || void 0 === fB ? void 0 : fB.text) && void 0 !== DB ? DB : null, wB).markdown,
+     }(Ce, Me, null !== (be = null === te || void 0 === te ? void 0 : te.text) && void 0 !== be ? be : null, ve).markdown,
```

#### 2338. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25639` → after: `L25639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25639) · [Before (L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25639)

```diff
-           if (null === OB || void 0 === OB || BB.length > wQ.n || 0 === (null !== (GB = OB.messages) && void 0 !== GB ? GB : []).length) return {
+           if (null === ie || void 0 === ie || ee.length > mM.s || 0 === (null !== (He = ie.messages) && void 0 !== He ? He : []).length) return {
```

#### 2339. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25677` → after: `L25677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25677) · [Before (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25677)

```diff
-         DB = null === YB || null === QB ? YB : {
+         be = null === ye || null === Me ? ye : {
```

#### 2340. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25702` → after: `L25702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25702) · [Before (L25702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25702)

```diff
-           return null === BB || 0 === GB.length ? BB : {
+           return null === ee || 0 === He.length ? ee : {
```

#### 2341. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25706` → after: `L25706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25706) · [Before (L25706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25706)

```diff
-         }(null !== (BB = null === yB || void 0 === yB ? void 0 : yB.grounds) && void 0 !== BB ? BB : null, VB.repairs),
+         }(null !== (ee = null === Fe || void 0 === Fe ? void 0 : Fe.grounds) && void 0 !== ee ? ee : null, ge.repairs),
```

#### 2342. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25714` → after: `L25714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25714) · [Before (L25714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25714)

```diff
-             GB = null === oB ? OB : DW(OB, oB, SB).markdown;
+             He = null === Ke ? ie : JB(ie, Ke, Oe).markdown;
```

#### 2343. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25752` → after: `L25752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25752) · [Before (L25752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25752)

```diff
-         layout: 0 === OB ? cB : {
+         layout: 0 === ie ? me : {
```

#### 2344. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25787` → after: `L25787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25787) · [Before (L25787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25787)

```diff
-     xB = null === SB || null === TB || null === vB || vB === TB ? SB : FN(SB, eh(TB, vB));
+     re = null === Oe || null === je || null === Ne || Ne === je ? Oe : CX(Oe, ll(je, Ne));
```

#### 2345. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25831` → after: `L25831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25831) · [Before (L25831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25831)

```diff
-   return new RegExp(`(?:^|[^\\w$])${(0,wQ.h)(OB)}(?![\\w$])`, "i").test(BB)
+   return new RegExp(`(?:^|[^\\w$])${(0,mM.f)(ie)}(?![\\w$])`, "i").test(ee)
```

#### 2346. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25839` → after: `L25839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25839) · [Before (L25839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25839)

```diff
-   return (0, EQ.f)(BB, /[A-Za-z_$][\w$]*(?![\w$])/g, EQ.p).map((BB => {
+   return (0, lM.g)(ee, /[A-Za-z_$][\w$]*(?![\w$])/g, lM.n).map((ee => {
```

#### 2347. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25848` → after: `L25848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25848) · [Before (L25848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25848)

```diff
-     YB = null !== (OB = new RegExp(String.raw`^\s*${GB}\s*===?\s*(-?\d+)\s*$`).exec(BB)) && void 0 !== OB ? OB : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${GB}\s*$`).exec(BB);
+     ye = null !== (ie = new RegExp(String.raw`^\s*${He}\s*===?\s*(-?\d+)\s*$`).exec(ee)) && void 0 !== ie ? ie : new RegExp(String.raw`^\s*(-?\d+)\s*===?\s*${He}\s*$`).exec(ee);
```

#### 2348. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25859` → after: `L25859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25859) · [Before (L25859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25859)

```diff
-   const YB = new Set([...OB.callbacks, ...null !== (GB = OB.functions) && void 0 !== GB ? GB : []].map((BB => {
+   const ye = new Set([...ie.callbacks, ...null !== (He = ie.functions) && void 0 !== He ? He : []].map((ee => {
```

#### 2349. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25877` → after: `L25877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25877) · [Before (L25877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25877)

```diff
-         const QB = new RegExp(`^${(0,wQ.h)(OB)} (\\d{1,4})$`).exec(BB);
+         const Me = new RegExp(`^${(0,mM.f)(ie)} (\\d{1,4})$`).exec(ee);
```

#### 2350. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25884` → after: `L25884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25884) · [Before (L25884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25884)

```diff
-         else if (BB.startsWith(`${OB}: `) && BB.length > OB.length + 2) {
+         else if (ee.startsWith(`${ie}: `) && ee.length > ie.length + 2) {
```

#### 2351. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25914` → after: `L25914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25914) · [Before (L25914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25914)

```diff
-   if (null === BB || null === OB || null === YB || void 0 === YB || BB.length > wQ.o || "" === BB.trim()) return null;
+   if (null === ee || null === ie || null === ye || void 0 === ye || ee.length > mM.t || "" === ee.trim()) return null;
```

#### 2352. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25916` → after: `L25916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25916) · [Before (L25916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25916)

```diff
-   const oB = pa(DB, `${GB}\n${OB}`, YB)[0],
+   const Ke = kS(be, `${He}\n${ie}`, ye)[0],
```

#### 2353. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25924` → after: `L25924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25924) · [Before (L25924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25924)

```diff
-       const YB = [...OB.callbacks, ...null !== (GB = OB.functions) && void 0 !== GB ? GB : []].filter((OB => OB.name === BB));
+       const ye = [...ie.callbacks, ...null !== (He = ie.functions) && void 0 !== He ? He : []].filter((ie => ie.name === ee));
```

#### 2354. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25952` → after: `L25952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25952) · [Before (L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25952)

```diff
-       const JB = null !== (YB = null === (DB = BB.valueExpression) || void 0 === DB ? void 0 : DB.trim()) && void 0 !== YB ? YB : null;
+       const Je = null !== (ye = null === (be = ee.valueExpression) || void 0 === be ? void 0 : be.trim()) && void 0 !== ye ? ye : null;
```

#### 2355. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25958` → after: `L25958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25958) · [Before (L25958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25958)

```diff
-             DB = ZB === Ba[0] || ZB === Ba[3] || YB !== GB || /^[A-Za-z_$][\w$.]*$/.test(null !== GB && void 0 !== GB ? GB : "");
+             be = pe === rl[0] || pe === rl[3] || ye !== He || /^[A-Za-z_$][\w$.]*$/.test(null !== He && void 0 !== He ? He : "");
```

#### 2356. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25960` → after: `L25960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25960) · [Before (L25960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25960)

```diff
-             yB = `${YB} === ${Number(OB)}`;
+             Fe = `${ye} === ${Number(ie)}`;
```

#### 2357. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25965-L25966` → after: `L25965-L25966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25965-L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25965-L25966) · [Before (L25965-L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25965-L25966)

```diff
-         PB = null === MB ? null : null !== (QB = null !== (oB = null !== (jB = MB[1]) && void 0 !== jB ? jB : MB[2]) && void 0 !== oB ? oB : MB[3]) && void 0 !== QB ? QB : null,
-         zB = null !== PB && void 0 !== PB ? PB : BB.numberExpression,
+         Re = null === oe ? null : null !== (Me = null !== (Ke = null !== (Ue = oe[1]) && void 0 !== Ue ? Ue : oe[2]) && void 0 !== Ke ? Ke : oe[3]) && void 0 !== Me ? Me : null,
+         ke = null !== Re && void 0 !== Re ? Re : ee.numberExpression,
```

#### 2358. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25973-L25974` → after: `L25973-L25974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25973-L25974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25973-L25974) · [Before (L25973-L25974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25973-L25974)

```diff
-           YB = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,wQ.h)(BB)}(?![\\w$])`).test(JB);
-         Pa(JB).includes(BB) && GB >= 0 && (null !== PB || !YB) && (yB = `${BB} === ${GB}`)
+           ye = new RegExp(`\\[(?:[^\\]]*[^\\]\\w$.])?${(0,mM.f)(ee)}(?![\\w$])`).test(Je);
+         JS(Je).includes(ee) && He >= 0 && (null !== Re || !ye) && (Fe = `${ee} === ${He}`)
```

#### 2359. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25977` → after: `L25977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25977) · [Before (L25977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25977)

```diff
-       return null !== yB && Pa(yB).every((BB => qB.has(BB))) ? yB : null
+       return null !== Fe && JS(Fe).every((ee => Te.has(ee))) ? Fe : null
```

#### 2360. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25992` → after: `L25992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25992) · [Before (L25992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25992)

```diff
-   const nB = (null !== (QB = YB.messages) && void 0 !== QB ? QB : []).filter((BB => {
+   const de = (null !== (Me = ye.messages) && void 0 !== Me ? Me : []).filter((ee => {
```

#### 2361. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L25996` → after: `L25996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R25996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L25996) · [Before (L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L25996)

```diff
-     UB = 1 !== nB.length || Ch.test(`${GB}\n${OB}`) ? jB : nB[0].at;
+     We = 1 !== de.length || jl.test(`${He}\n${ie}`) ? Ue : de[0].at;
```

#### 2362. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26010` → after: `L26010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26010) · [Before (L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26010)

```diff
-   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${GB}(?![\\w$])`).test(BB) || (0, EQ.f)(BB, new RegExp(`${GB}\\s*=(?![=>])`), EQ.p).length > 0 || Tl(BB, OB) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${GB}\\s*\\([^()]*\\)\\s*\\{`, "m").test(BB)
+   return new RegExp(`\\b(?:function\\s*\\*?\\s*|class\\s+|(?:const|let|var)\\s+)${He}(?![\\w$])`).test(ee) || (0, lM.g)(ee, new RegExp(`${He}\\s*=(?![=>])`), lM.n).length > 0 || hq(ee, ie) || new RegExp(`(?:^|[{,])\\s*(?:async\\s+)?${He}\\s*\\([^()]*\\)\\s*\\{`, "m").test(ee)
```

#### 2363. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26014` → after: `L26014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26014) · [Before (L26014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26014)

```diff
-   if (null === BB || null === OB || void 0 === OB || void 0 === OB.declaredNames || BB.length > wQ.o) return [];
+   if (null === ee || null === ie || void 0 === ie || void 0 === ie.declaredNames || ee.length > mM.t) return [];
```

#### 2364. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26019` → after: `L26019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26019) · [Before (L26019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26019)

```diff
-   for (const [, QB] of(0, EQ.f)(YB, Ra, EQ.p)) {
+   for (const [, Me] of(0, lM.g)(ye, pS, lM.n)) {
```

#### 2365. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26030` → after: `L26030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26030) · [Before (L26030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26030)

```diff
-   if (null === BB || null === OB || void 0 === OB || BB.length > wQ.o || !BB.includes("/") || ! function(BB) {
+   if (null === ee || null === ie || void 0 === ie || ee.length > mM.t || !ee.includes("/") || ! function(ee) {
```

#### 2366. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26040` → after: `L26040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26040) · [Before (L26040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26040)

```diff
-   const YB = [...OB.playerText, ...(null !== (GB = OB.messages) && void 0 !== GB ? GB : []).map((BB => {
+   const ye = [...ie.playerText, ...(null !== (He = ie.messages) && void 0 !== He ? He : []).map((ee => {
```

#### 2367. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26049-L26050` → after: `L26049-L26050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26049-L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26049-L26050) · [Before (L26049-L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26049-L26050)

```diff
-     const BB = null !== (QB = null !== (oB = null !== (jB = yB[1]) && void 0 !== jB ? jB : yB[2]) && void 0 !== oB ? oB : yB[3]) && void 0 !== QB ? QB : yB[4];
-     for (const [OB] of(0, EQ.f)(BB, Sa, (0, EQ.n)("\\w/:."))) {
+     const ee = null !== (Me = null !== (Ke = null !== (Ue = Fe[1]) && void 0 !== Ue ? Ue : Fe[2]) && void 0 !== Ke ? Ke : Fe[3]) && void 0 !== Me ? Me : Fe[4];
+     for (const [ie] of(0, lM.g)(ee, ES, (0, lM.m)("\\w/:."))) {
```

#### 2368. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26081` → after: `L26081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26081) · [Before (L26081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26081)

```diff
-     for (const jB of (0, EQ.f)(BB, xA, EQ.p)) DV(jB[0], OB, GB, YB) || (jB.index > oB && QB.push({
+     for (const Ue of (0, lM.g)(ee, yg, lM.n)) Jg(Ue[0], ie, He, ye) || (Ue.index > Ke && Me.push({
```

#### 2369. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26091` → after: `L26091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26091) · [Before (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26091)

```diff
-     title: !0 === BB.isApiCall ? jB : oB("Not found in your code"),
+     title: !0 === ee.isApiCall ? Ue : Ke("Not found in your code"),
```

#### 2370. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26093` → after: `L26093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26093) · [Before (L26093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26093)

```diff
-   }, `${OB}-name-${GB}`) : BB.text))
+   }, `${ie}-name-${He}`) : ee.text))
```

#### 2371. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26120` → after: `L26120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26120) · [Before (L26120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26120)

```diff
-   }, `${GB}-number-${OB}`)] : da(BB.text, `${GB}-${OB}`, YB)))
+   }, `${He}-number-${ie}`)] : tS(ee.text, `${He}-${ie}`, ye)))
```

#### 2372. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26124` → after: `L26124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26124) · [Before (L26124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26124)

```diff
-   return null === BB.suggestion ? OB("Not a Bloxd item") : `${OB("Not a Bloxd item")}: ${OB("Bloxd writes it")} "${BB.suggestion}"`
+   return null === ee.suggestion ? ie("Not a Bloxd item") : `${ie("Not a Bloxd item")}: ${ie("Bloxd writes it")} "${ee.suggestion}"`
```

#### 2373. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26135` → after: `L26135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26135) · [Before (L26135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26135)

```diff
-   for (const JB of oB) jB.push(...da(BB.slice(yB, JB.start), `${OB}-${yB}`, GB, YB)), jB.push((0, uB.jsx)("span", {
+   for (const Je of Ke) Ue.push(...tS(ee.slice(Fe, Je.start), `${ie}-${Fe}`, He, ye)), Ue.push((0, Pe.jsx)("span", {
```

#### 2374. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26139-L26140` → after: `L26139-L26140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26139-L26140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26139-L26140) · [Before (L26139-L26140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26139-L26140)

```diff
-   }, `${OB}-item-${JB.start}`)), yB = JB.end;
-   return jB.push(...da(BB.slice(yB), `${OB}-${yB}`, GB, YB)), jB
+   }, `${ie}-item-${Je.start}`)), Fe = Je.end;
+   return Ue.push(...tS(ee.slice(Fe), `${ie}-${Fe}`, He, ye)), Ue
```

#### 2375. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26155` → after: `L26155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26155) · [Before (L26155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26155)

```diff
-     zB <= QB || (QB > jB && oB.push(...Ka(BB.slice(jB, QB), OB + BB.slice(0, jB), `${YB}-${jB}`, DB)), oB.push((0, uB.jsx)("span", {
+     ke <= Me || (Me > Ue && Ke.push(...ZS(ee.slice(Ue, Me), ie + ee.slice(0, Ue), `${ye}-${Ue}`, be)), Ke.push((0, Pe.jsx)("span", {
```

#### 2376. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26159` → after: `L26159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26159) · [Before (L26159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26159)

```diff
-     }, `${YB}-marked-${QB}`)), jB = zB)
+     }, `${ye}-marked-${Me}`)), Ue = ke)
```

#### 2377. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26161` → after: `L26161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26161) · [Before (L26161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26161)

```diff
-   return 0 === jB ? Ka(BB, OB, YB, DB) : (jB < BB.length && oB.push(...Ka(BB.slice(jB), OB + BB.slice(0, jB), `${YB}-${jB}`, DB)), oB)
+   return 0 === Ue ? ZS(ee, ie, ye, be) : (Ue < ee.length && Ke.push(...ZS(ee.slice(Ue), ie + ee.slice(0, Ue), `${ye}-${Ue}`, be)), Ke)
```

#### 2378. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26172` → after: `L26172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26172) · [Before (L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26172)

```diff
-     title: `${GB("What your code says")}: ${OB.hint}`,
+     title: `${He("What your code says")}: ${ie.hint}`,
```

#### 2379. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26186` → after: `L26186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26186) · [Before (L26186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26186)

```diff
-     title: `${GB("Worked out by Studio from your code")}:\n${OB.hint}`,
+     title: `${He("Worked out by Studio from your code")}:\n${ie.hint}`,
```

#### 2380. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26226` → after: `L26226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26226) · [Before (L26226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26226)

```diff
-       }, `${OB}-note-${oB}`))
+       }, `${ie}-note-${Ke}`))
```

#### 2381. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26232-L26233` → after: `L26232-L26233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26232-L26233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26232-L26233) · [Before (L26232-L26233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26232-L26233)

```diff
-         const yB = Math.min(JB, Math.max(MB, null !== (PB = null === (zB = QB[oB]) || void 0 === zB ? void 0 : zB.end) && void 0 !== PB ? PB : JB));
-         yB > MB && YB.push(...Ia(BB.slice(MB, yB), BB.slice(0, MB), MB, `${OB}-${MB}`, GB, DB)), MB = yB, jB(MB)
+         const Fe = Math.min(Je, Math.max(oe, null !== (Re = null === (ke = Me[Ke]) || void 0 === ke ? void 0 : ke.end) && void 0 !== Re ? Re : Je));
+         Fe > oe && ye.push(...PS(ee.slice(oe, Fe), ee.slice(0, oe), oe, `${ie}-${oe}`, He, be)), oe = Fe, Ue(oe)
```

#### 2382. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26237` → after: `L26237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26237) · [Before (L26237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26237)

```diff
-   for (const lB of BB.matchAll(HI.i)) {
+   for (const qe of ee.matchAll(hY.f)) {
```

#### 2383. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26239` → after: `L26239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26239) · [Before (L26239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26239)

```diff
-     const [, QB, oB, pB, qB, ZB, NB] = lB, RB = `${OB}-${lB.index}`, WB = BB.slice(0, lB.index);
+     const [, Me, Ke, fe, Te, pe, Xe] = qe, ze = `${ie}-${qe.index}`, Be = ee.slice(0, qe.index);
```

#### 2384. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26244` → after: `L26244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26244) · [Before (L26244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26244)

```diff
-         children: Ia(null !== (MB = null !== pB && void 0 !== pB ? pB : qB) && void 0 !== MB ? MB : "", WB, lB.index + 2, RB, GB, DB)
+         children: PS(null !== (oe = null !== fe && void 0 !== fe ? fe : Te) && void 0 !== oe ? oe : "", Be, qe.index + 2, ze, He, be)
```

#### 2385. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26258` → after: `L26258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26258) · [Before (L26258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26258)

```diff
-           children: ma(null !== NB && void 0 !== NB ? NB : "", RB, GB, "code")
+           children: DS(null !== Xe && void 0 !== Xe ? Xe : "", ze, He, "code")
```

#### 2386. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26260` → after: `L26260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26260) · [Before (L26260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26260)

```diff
-         QB = void 0 === BB ? Ll(null !== NB && void 0 !== NB ? NB : "") : null;
+         Me = void 0 === ee ? Cq(null !== Xe && void 0 !== Xe ? Xe : "") : null;
```

#### 2387. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26263` → after: `L26263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26263) · [Before (L26263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26263)

```diff
-         title: (PB = QB, zB = GB.t, `${zB("World Code has no")} ${PB}, ${zB("so this code won't run")}`),
+         title: (Re = Me, ke = He.t, `${ke("World Code has no")} ${Re}, ${ke("so this code won't run")}`),
```

#### 2388. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26265` → after: `L26265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26265) · [Before (L26265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26265)

```diff
-       }, RB) : void 0 === BB ? OB : (0, uB.jsx)("span", {
+       }, ze) : void 0 === ee ? ie : (0, Pe.jsx)("span", {
```

#### 2389. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26290` → after: `L26290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26290) · [Before (L26290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26290)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2390. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26293` → after: `L26293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26293) · [Before (L26293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26293)

```diff
-     }), void 0 === yB ? jB : (0, uB.jsxs)(uB.Fragment, {
+     }), void 0 === Fe ? Ue : (0, Pe.jsxs)(Pe.Fragment, {
```

#### 2391. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26316` → after: `L26316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26316) · [Before (L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26316)

```diff
-   ca = new RegExp(`${wa}([${String.fromCharCode(Ea)}-${String.fromCharCode(63743)}])`, "g");
+   vS = new RegExp(`${LS}([${String.fromCharCode(CS)}-${String.fromCharCode(63743)}])`, "g");
```

#### 2392. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26320` → after: `L26320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26320) · [Before (L26320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26320)

```diff
-     YB = BB.replace(ra, ((BB, OB) => Xa.test(OB) ? BB : OB.startsWith("[[") && OB.endsWith("]]") && null !== uG(OB.slice(2, -2)) ? OB : (GB.push(BB), wa + String.fromCharCode(Ea + GB.length - 1)))),
+     ye = ee.replace(cS, ((ee, ie) => xS.test(ie) ? ee : ie.startsWith("[[") && ie.endsWith("]]") && null !== YH(ie.slice(2, -2)) ? ie : (He.push(ee), LS + String.fromCharCode(CS + He.length - 1)))),
```

#### 2393. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26327` → after: `L26327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26327) · [Before (L26327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26327)

```diff
-         "" !== BB && ("text" === (null === GB || void 0 === GB ? void 0 : GB.kind) ? GB.text += BB : OB.push({
+         "" !== ee && ("text" === (null === He || void 0 === He ? void 0 : He.kind) ? He.text += ee : ie.push({
```

#### 2394. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26345` → after: `L26345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26345) · [Before (L26345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26345)

```diff
-         const zB = null !== (QB = null === (oB = IG.exec(BB.slice(YB))) || void 0 === oB ? void 0 : oB[0]) && void 0 !== QB ? QB : "";
+         const ke = null !== (Me = null === (Ke = aH.exec(ee.slice(ye))) || void 0 === Ke ? void 0 : Ke[0]) && void 0 !== Me ? Me : "";
```

#### 2395. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26369` → after: `L26369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26369) · [Before (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26369)

```diff
-       const lB = XP(Number((null !== (zB = null !== DB && void 0 !== DB ? DB : oB) && void 0 !== zB ? zB : "").replace(/,/g, "")), null !== QB && void 0 !== QB ? QB : jB, Number(yB.replace(/,/g, "")), JB);
+       const qe = uR(Number((null !== (ke = null !== be && void 0 !== be ? be : Ke) && void 0 !== ke ? ke : "").replace(/,/g, "")), null !== Me && void 0 !== Me ? Me : Ue, Number(Fe.replace(/,/g, "")), Je);
```

#### 2396. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26374` → after: `L26374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26374) · [Before (L26374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26374)

```diff
-       return void 0 === NB ? BB : `${EP(NB,OB)}${BB.slice(OB.length)}`
+       return void 0 === Xe ? ee : `${lR(Xe,ie)}${ee.slice(ie.length)}`
```

#### 2397. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26393` → after: `L26393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26393) · [Before (L26393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26393)

```diff
-   return void 0 === BB[3] || !(0, EQ.b)(BB, "*\\w")
+   return void 0 === ee[3] || !(0, lM.e)(ee, "*\\w")
```

#### 2398. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26403` → after: `L26403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26403) · [Before (L26403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26403)

```diff
-     return (0, EQ.z)(BB, ea, Ta, (BB => {
+     return (0, lM.t)(ee, lS, SS, (ee => {
```

#### 2399. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26409-L26410` → after: `L26409-L26410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26409-L26410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26409-L26410) · [Before (L26409-L26410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26409-L26410)

```diff
-       const oB = null !== YB && void 0 !== YB ? YB : "*";
-       return (null !== DB && void 0 !== DB ? DB : QB).split(/(\[\[[^\]\n]+\]\])/).map(((BB, OB) => {
+       const Ke = null !== ye && void 0 !== ye ? ye : "*";
+       return (null !== be && void 0 !== be ? be : Me).split(/(\[\[[^\]\n]+\]\])/).map(((ee, ie) => {
```

#### 2400. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26414` → after: `L26414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26414) · [Before (L26414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26414)

```diff
-         return `${GB}${oB}${BB.trim()}${oB}${YB}`
+         return `${He}${Ke}${ee.trim()}${Ke}${ye}`
```

#### 2401. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26427-L26428` → after: `L26427-L26428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26427-L26428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26427-L26428) · [Before (L26427-L26428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26427-L26428)

```diff
-         lB = null === zB || "heatmap" !== BB.link.key ? zB : sQ(Bo(zB, null === (JB = GB.checkData) || void 0 === JB ? void 0 : JB.heatmapEvents), PB),
-         pB = null !== lB || "heatmap" !== BB.link.key ? lB : lI(Go(jB(YB), oB(YB + 1, QB.length) + DB), {
+         qe = null === ke || "heatmap" !== ee.link.key ? ke : QM(HK(ke, null === (Je = He.checkData) || void 0 === Je ? void 0 : Je.heatmapEvents), Re),
+         fe = null !== qe || "heatmap" !== ee.link.key ? qe : qY(bK(Ue(ye), Ke(ye + 1, Me.length) + be), {
```

#### 2402. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26436` → after: `L26436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26436) · [Before (L26436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26436)

```diff
-       }, `${OB}stat-${YB}`)]
+       }, `${ie}stat-${ye}`)]
```

#### 2403. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26438` → after: `L26438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26438) · [Before (L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26438)

```diff
-     return La(BB.text, `${OB}${YB}`, GB)
+     return VS(ee.text, `${ie}${ye}`, He)
```

#### 2404. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26450` → after: `L26450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26450) · [Before (L26450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26450)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2405. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26453` → after: `L26453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26453) · [Before (L26453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26453)

```diff
-     }), null === OB ? GB("Studio has no data on this: a guess") : `${GB("Only")} ${OB} ${GB("players so far: a guess")}`]
+     }), null === ie ? He("Studio has no data on this: a guess") : `${He("Only")} ${ie} ${He("players so far: a guess")}`]
```

#### 2406. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26466-L26467` → after: `L26466-L26467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26466-L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26466-L26467) · [Before (L26466-L26467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26466-L26467)

```diff
-     title: `${GB("What your code says")}: ${OB.hint}`,
-     children: [(0, uB.jsx)(AB.b, {
+     title: `${He("What your code says")}: ${ie.hint}`,
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2407. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26495` → after: `L26495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26495) · [Before (L26495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26495)

```diff
-         }), " ", GB("events"), "" === BB.category ? "" : ` ${GB("in")} ${BB.category}`, " ", GB("are at"), " ", BB.text]
+         }), " ", He("events"), "" === ee.category ? "" : ` ${He("in")} ${ee.category}`, " ", He("are at"), " ", ee.text]
```

#### 2408. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26502` → after: `L26502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26502) · [Before (L26502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26502)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2409. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26524` → after: `L26524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26524) · [Before (L26524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26524)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2410. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26527` → after: `L26527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26527) · [Before (L26527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26527)

```diff
-     }), GB ? `${OB.from} ${YB("also leads to")} ${OB.other}, ${YB("so players who didn't get to")} ${OB.to} ${YB("may have gone there instead")}.` : `${OB.from} ${YB("also leads on to")} ${OB.other} (${OB.otherShare}% ${YB("of its players")}), ${YB("so the")} ${OB.notTakenShare}% … [truncated]
+     }), He ? `${ie.from} ${ye("also leads to")} ${ie.other}, ${ye("so players who didn't get to")} ${ie.to} ${ye("may have gone there instead")}.` : `${ie.from} ${ye("also leads on to")} ${ie.other} (${ie.otherShare}% ${ye("of its players")}), ${ye("so the")} ${ie.notTakenShare}% … [truncated]
```

#### 2411. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26548` → after: `L26548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26548) · [Before (L26548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26548)

```diff
-           PB = (0, wQ.D)(BB, QB.end);
+           Re = (0, mM.K)(ee, Me.end);
```

#### 2412. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26553-L26554` → after: `L26553-L26554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26553-L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26553-L26554) · [Before (L26553-L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26553-L26554)

```diff
-           text: "turned" === JB ? `Studio turned this round: in your code ${MB}.` : `${YB?"Careful":"Check the direction"}: in your code ${MB}.`,
-           hint: "" === OB.usedIn ? `its name, ${OB.name}` : OB.usedIn
+           text: "turned" === Je ? `Studio turned this round: in your code ${oe}.` : `${ye?"Careful":"Check the direction"}: in your code ${oe}.`,
+           hint: "" === ie.usedIn ? `its name, ${ie.name}` : ie.usedIn
```

#### 2413. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26573` → after: `L26573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26573) · [Before (L26573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26573)

```diff
-         }, `bump-${DB}`)
+         }, `bump-${be}`)
```

#### 2414. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26580` → after: `L26580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26580) · [Before (L26580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26580)

```diff
-       }, `guess-${GB}`)
+       }, `guess-${He}`)
```

#### 2415. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26586` → after: `L26586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26586) · [Before (L26586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26586)

```diff
-       }, `place-${GB}`)
+       }, `place-${He}`)
```

#### 2416. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26593` → after: `L26593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26593) · [Before (L26593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26593)

```diff
-       }, `branch-${GB}`)
+       }, `branch-${He}`)
```

#### 2417. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26599` → after: `L26599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26599) · [Before (L26599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26599)

```diff
-       }, `constant-${GB}`)
+       }, `constant-${He}`)
```

#### 2418. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26605` → after: `L26605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26605) · [Before (L26605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26605)

```diff
-       }, `goal-${GB}`)
+       }, `goal-${He}`)
```

#### 2419. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26608` → after: `L26608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26608) · [Before (L26608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26608)

```diff
-   for (const YB of BB.matchAll(HI.i)) {
+   for (const ye of ee.matchAll(hY.f)) {
```

#### 2420. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26623` → after: `L26623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26623) · [Before (L26623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26623)

```diff
-     const QB = ba(yB(JB, YB), `g${GB}-`, OB, aa(yB(0, JB)), aa(yB(YB)));
+     const Me = nS(Fe(Je, ye), `g${He}-`, ie, mS(Fe(0, Je)), mS(Fe(ye)));
```

#### 2421. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26625` → after: `L26625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26625) · [Before (L26625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26625)

```diff
-   })), ...ba(yB(JB), `g${jB.length}-`, OB, aa(yB(0, JB)))]
+   })), ...nS(Fe(Je), `g${Ue.length}-`, ie, mS(Fe(0, Je)))]
```

#### 2422. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26668` → after: `L26668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26668) · [Before (L26668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26668)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2423. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26701` → after: `L26701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26701) · [Before (L26701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26701)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2424. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26719-L26720` → after: `L26719-L26720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26719-L26720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26719-L26720) · [Before (L26719-L26720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26719-L26720)

```diff
-     title: null !== (OB = GB.line) && void 0 !== OB ? OB : `"${GB.text}"`,
-     children: [(0, uB.jsx)(AB.b, {
+     title: null !== (ie = He.line) && void 0 !== ie ? ie : `"${He.text}"`,
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2425. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26739` → after: `L26739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26739) · [Before (L26739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26739)

```diff
-       return `"${OB}"`
+       return `"${ie}"`
```

#### 2426. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26750` → after: `L26750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26750) · [Before (L26750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26750)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2427. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26753` → after: `L26753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26753) · [Before (L26753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26753)

```diff
-     }), " ", GB ? `${YB("Studio can't find")} ${DB} ${YB("in your game")}: ${YB(QB?"use your own place's name":"use one your game has")}.` : `${YB("Is")} ${DB} ${YB("in your game? If not, use one that is.")}`]
+     }), " ", He ? `${ye("Studio can't find")} ${be} ${ye("in your game")}: ${ye(Me?"use your own place's name":"use one your game has")}.` : `${ye("Is")} ${be} ${ye("in your game? If not, use one that is.")}`]
```

#### 2428. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26763` → after: `L26763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26763) · [Before (L26763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26763)

```diff
-   const DB = GB ? "badge" === OB.kind ? `${YB("Your game already has the")} "${OB.name}" ${YB("badge")}` : `${YB("Your game already sends")} "${OB.name}"` : "badge" === OB.kind ? YB("You already have this badge.") : YB("You already have this message.");
+   const be = He ? "badge" === ie.kind ? `${ye("Your game already has the")} "${ie.name}" ${ye("badge")}` : `${ye("Your game already sends")} "${ie.name}"` : "badge" === ie.kind ? ye("You already have this badge.") : ye("You already have this message.");
```

#### 2429. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26766` → after: `L26766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26766) · [Before (L26766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26766)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2430. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26863` → after: `L26863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26863) · [Before (L26863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26863)

```diff
-   return Je((0, wN.v)(BB), OB)
+   return Fn((0, nX.C)(ee), ie)
```

#### 2431. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26874` → after: `L26874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26874) · [Before (L26874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26874)

```diff
-     children: [GB.includes(OB.counts) ? "" : `${OB.counts}. `, YB("Why this number"), ": ", OB.basis]
+     children: [He.includes(ie.counts) ? "" : `${ie.counts}. `, ye("Why this number"), ": ", ie.basis]
```

#### 2432. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26879` → after: `L26879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26879) · [Before (L26879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26879)

```diff
-   return `${OB("Target")}: ${BB.change} ${BB.counts}`
+   return `${ie("Target")}: ${ee.change} ${ee.counts}`
```

#### 2433. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26911` → after: `L26911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26911) · [Before (L26911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26911)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2434. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26942` → after: `L26942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26942) · [Before (L26942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26942)

```diff
-       JB = BB => `${BB}%`,
+       Je = ee => `${ee}%`,
```

#### 2435. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26948` → after: `L26948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26948) · [Before (L26948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26948)

```diff
-         zB = [`${JB(QB)} ${GB("of sessions")} ${hA(DB.minutes,GB)}`], lB = JB;
+         ke = [`${Je(Me)} ${He("of sessions")} ${IE(be.minutes,He)}`], qe = Je;
```

#### 2436. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26951` → after: `L26951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26951) · [Before (L26951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26951)

```diff
-         zB = [`${JB(QB)} ${GB("of players at")} `, {
+         ke = [`${Je(Me)} ${He("of players at")} `, {
```

#### 2437. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26953` → after: `L26953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26953) · [Before (L26953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26953)

```diff
-         }, ` ${GB("reach")} `, {
+         }, ` ${He("reach")} `, {
```

#### 2438. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26955` → after: `L26955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26955) · [Before (L26955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26955)

```diff
-         }, DB.isOrLater ? ` ${GB("or a later one")}` : ""], lB = JB;
+         }, be.isOrLater ? ` ${He("or a later one")}` : ""], qe = Je;
```

#### 2439. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26958` → after: `L26958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26958) · [Before (L26958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26958)

```diff
-         zB = [`${cA(DB.toPlayers)} ${GB("of the")} ${cA(DB.fromPlayers)} ${GB("players who reached")} ${DB.from} ${GB("also reached")} ${DB.to} (${JB(QB)})`], lB = JB;
+         ke = [`${sE(be.toPlayers)} ${He("of the")} ${sE(be.fromPlayers)} ${He("players who reached")} ${be.from} ${He("also reached")} ${be.to} (${Je(Me)})`], qe = Je;
```

#### 2440. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26961` → after: `L26961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26961) · [Before (L26961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26961)

```diff
-         zB = [`${cA(QB)} ${GB("plays a day")}`], lB = BB => `${cA(BB)} ${GB("plays a day")}`;
+         ke = [`${sE(Me)} ${He("plays a day")}`], qe = ee => `${sE(ee)} ${He("plays a day")}`;
```

#### 2441. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26964` → after: `L26964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26964) · [Before (L26964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26964)

```diff
-         zB = [`${GB("an average session lasts")} ${cA(QB)} ${GB("minutes")}`], lB = BB => `${cA(BB)} ${GB("minutes")}`;
+         ke = [`${He("an average session lasts")} ${sE(Me)} ${He("minutes")}`], qe = ee => `${sE(ee)} ${He("minutes")}`;
```

#### 2442. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26967` → after: `L26967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26967) · [Before (L26967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26967)

```diff
-         zB = [`${GB("each player plays")} ${cA(QB)} ${GB("times in")} ${DB.days} ${GB("days")}`], lB = BB => `${cA(BB)} ${GB("times")}`
+         ke = [`${He("each player plays")} ${sE(Me)} ${He("times in")} ${be.days} ${He("days")}`], qe = ee => `${sE(ee)} ${He("times")}`
```

#### 2443. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26970` → after: `L26970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26970) · [Before (L26970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26970)

```diff
-       qB = YB ? "" : `${GB("now")} ${lB(QB)}`;
+       Te = ye ? "" : `${He("now")} ${qe(Me)}`;
```

#### 2444. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26973-L26975` → after: `L26973-L26975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26973-L26975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26973-L26975) · [Before (L26973-L26975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26973-L26975)

```diff
-       const BB = YB ? "" : `, ${qB}`,
-         OB = MB ? `, ${GB("the goal")}` : null === jB ? "" : `; ${GB("the goal is")} ${JB(jB)}`;
-       ZB = `${yB.helpedAt} ${GB("above")} ${cA(yB.helpedPlayers)} (${JB(oB)} ${GB("of the new players")}${BB}${OB}) ${PB}.`
+       const ee = ye ? "" : `, ${Te}`,
+         ie = oe ? `, ${He("the goal")}` : null === Ue ? "" : `; ${He("the goal is")} ${Je(Ue)}`;
+       pe = `${Fe.helpedAt} ${He("above")} ${sE(Fe.helpedPlayers)} (${Je(Ke)} ${He("of the new players")}${ee}${ie}) ${Re}.`
```

#### 2445. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26977-L26978` → after: `L26977-L26978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26977-L26978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26977-L26978) · [Before (L26977-L26978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26977-L26978)

```diff
-       const BB = pB ? ` ${GB("over those")} ${yB.days} ${GB("days")}` : "";
-       ZB = `${MB?`${GB(pB?"an average of":"reaching")} ${lB(oB)}${BB} (${GB("the goal")}${YB?"":`; ${qB}`})`:`${GB(pB?"an average above":"above")} ${lB(oB)}${BB}${YB?"":` (${qB})`}`} ${PB}${MB||null===jB?"":` (${GB("the goal is")} ${lB(jB)})`}.`
+       const ee = fe ? ` ${He("over those")} ${Fe.days} ${He("days")}` : "";
+       pe = `${oe?`${He(fe?"an average of":"reaching")} ${qe(Ke)}${ee} (${He("the goal")}${ye?"":`; ${Te}`})`:`${He(fe?"an average above":"above")} ${qe(Ke)}${ee}${ye?"":` (${Te})`}`} ${Re}${oe||null===Ue?"":` (${He("the goal is")} ${qe(Ue)})`}.`
```

#### 2446. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26981` → after: `L26981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26981) · [Before (L26981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26981)

```diff
-       RB = null !== NB && NB.high >= oB ? ` ${GB("In the last")} ${JA} ${GB("days, single days went from")} ${cA(NB.low)} ${GB("to")} ${lB(NB.high)}, ${GB("so go by the average")}.` : "";
+       ze = null !== Xe && Xe.high >= Ke ? ` ${He("In the last")} ${fE} ${He("days, single days went from")} ${sE(Xe.low)} ${He("to")} ${qe(Xe.high)}, ${He("so go by the average")}.` : "";
```

#### 2447. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26986` → after: `L26986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26986) · [Before (L26986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26986)

```diff
-         WB = [`${GB("In")} ${yB.days} ${GB("days")}, ${GB("check")} `, aA(BB), "days" !== yB.kind || pB ? "" : ` ${GB("over those days")}`, `: ${GB("now")} `, ...zB, `, ${GB("and")} ${ZB}`];
+         Be = [`${He("In")} ${Fe.days} ${He("days")}, ${He("check")} `, hE(ee), "days" !== Fe.kind || fe ? "" : ` ${He("over those days")}`, `: ${He("now")} `, ...ke, `, ${He("and")} ${pe}`];
```

#### 2448. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26989` → after: `L26989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26989) · [Before (L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26989)

```diff
-         WB = [`${GB("When")} ${yB.at} ${GB("has about")} ${cA(yB.players)} ${GB("players")}, ${GB("check")} `, aA(BB), `: ${ZB}`]
+         Be = [`${He("When")} ${Fe.at} ${He("has about")} ${sE(Fe.players)} ${He("players")}, ${He("check")} `, hE(ee), `: ${pe}`]
```

#### 2449. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26994` → after: `L26994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26994) · [Before (L26994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26994)

```diff
-           OB = [`${GB("After your change, wait")} ${yB.days} ${GB("days")} (${GB("about")} ${cA(yB.count)} `, "plays" === yB.counts ? GB("new plays") : GB("new players at that step"), `), ${GB("for the chart to count only those, then check")} `, aA(BB), ": "];
+           ie = [`${He("After your change, wait")} ${Fe.days} ${He("days")} (${He("about")} ${sE(Fe.count)} `, "plays" === Fe.counts ? He("new plays") : He("new players at that step"), `), ${He("for the chart to count only those, then check")} `, hE(ee), ": "];
```

#### 2450. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L26997` → after: `L26997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R26997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L26997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L26997) · [Before (L26997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L26997)

```diff
-           OB = [`${GB("After your change, wait")} ${yB.days} ${GB("days, then check")} `, aA(BB), pB ? ": " : ` ${GB("over those days")}: `];
+           ie = [`${He("After your change, wait")} ${Fe.days} ${He("days, then check")} `, hE(ee), fe ? ": " : ` ${He("over those days")}: `];
```

#### 2451. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27000` → after: `L27000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27000) · [Before (L27000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27000)

```diff
-           OB = [`${GB("After your change, wait until")} ${yB.at} ${GB("has about")} ${cA(yB.players)} ${GB("players")} (${cA(yB.more)} ${GB("more")}), ${GB("then check")} `, aA(BB), ": "]
+           ie = [`${He("After your change, wait until")} ${Fe.at} ${He("has about")} ${sE(Fe.players)} ${He("players")} (${sE(Fe.more)} ${He("more")}), ${He("then check")} `, hE(ee), ": "]
```

#### 2452. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27002` → after: `L27002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27002) · [Before (L27002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27002)

```diff
-       WB = [`${"sessionsLasting"===DB.kind&&void 0!==DB.after?`${GB("Your change starts at")} ${DB.after} ${GB("minutes, so this checks the")} ${DB.minutes}${GB("-minute mark")}. `:""}${GB("Now")}: `, ...zB, ". ", ...OB, ZB, RB]
+       Be = [`${"sessionsLasting"===be.kind&&void 0!==be.after?`${He("Your change starts at")} ${be.after} ${He("minutes, so this checks the")} ${be.minutes}${He("-minute mark")}. `:""}${He("Now")}: `, ...ke, ". ", ...ie, pe, ze]
```

#### 2453. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27007` → after: `L27007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27007) · [Before (L27007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27007)

```diff
-       undo: null === BB.undo ? null : [`${GB("If it got worse, put back")} `, {
+       undo: null === ee.undo ? null : [`${He("If it got worse, put back")} `, {
```

#### 2454. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27009` → after: `L27009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27009) · [Before (L27009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27009)

```diff
-       }, ...null === BB.undo.inside ? [] : [` ${GB("inside")} `, {
+       }, ...null === ee.undo.inside ? [] : [` ${He("inside")} `, {
```

#### 2455. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27023` → after: `L27023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27023) · [Before (L27023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27023)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2456. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27058` → after: `L27058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27058) · [Before (L27058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27058)

```diff
-   } = (0, lB.H)(), pB = null === jB ? null : XA(GB, jB, QB, PB.constantLines), qB = function(BB, OB) {
+   } = (0, qe.v)(), fe = null === Ue ? null : SE(He, Ue, Me, Re.constantLines), Te = function(ee, ie) {
```

#### 2457. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27064` → after: `L27064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27064) · [Before (L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27064)

```diff
-   }(pB, jB).join("\n"), ZB = (0, YB.useMemo)((() => "" === qB ? Ne : qB.split("\n")), [qB]), NB = null !== pB && null !== jB && PB.isOlder ? qu(pB, jB, yB) : null, {
+   }(fe, Ue).join("\n"), pe = (0, ye.useMemo)((() => "" === Te ? Xn : Te.split("\n")), [Te]), Xe = null !== fe && null !== Ue && Re.isOlder ? pP(fe, Ue, Fe) : null, {
```

#### 2458. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27129` → after: `L27129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27129) · [Before (L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27129)

```diff
-   }(null !== (OB = null === SB || void 0 === SB ? void 0 : SB.nextChange) && void 0 !== OB ? OB : VB) : {
+   }(null !== (ie = null === Oe || void 0 === Oe ? void 0 : Oe.nextChange) && void 0 !== ie ? ie : ge) : {
```

#### 2459. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27134-L27135` → after: `L27134-L27135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27134-L27135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27134-L27135) · [Before (L27134-L27135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27134-L27135)

```diff
-     return GB.steps.indexOf(null !== (OB = UB.get(BB)) && void 0 !== OB ? OB : BB)
-   }, KB = nB.steps.length, mB = nB.steps.filter((BB => fB.includes(dB(BB)))).length, IB = null !== QB && null !== nB.target && MR(nB.target, QB.change), FB = null !== QB && (null === pB ? VB : GB).blocks.some((BB => "list" === BB.kind ? BB.items.some((BB => MR(BB.text, QB.change) … [truncated]
+     return He.steps.indexOf(null !== (ie = We.get(ee)) && void 0 !== ie ? ie : ee)
+   }, De = de.steps.length, Ae = de.steps.filter((ee => te.includes(we(ee)))).length, Ye = null !== Me && null !== de.target && Tz(de.target, Me.change), Ve = null !== Me && (null === fe ? ge : He).blocks.some((ee => "list" === ee.kind ? ee.items.some((ee => Tz(ee.text, Me.change) … [truncated]
```

#### 2460. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27179` → after: `L27179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27179) · [Before (L27179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27179)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2461. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27184` → after: `L27184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27184) · [Before (L27184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27184)

```diff
-         children: [null === nB.title ? zB(UM) : `${zB(UM)}:`, null !== nB.title && (0, uB.jsxs)("span", {
+         children: [null === de.title ? ke(to) : `${ke(to)}:`, null !== de.title && (0, Pe.jsxs)("span", {
```

#### 2462. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27192` → after: `L27192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27192) · [Before (L27192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27192)

```diff
-         children: `${mB}/${KB}`
+         children: `${Ae}/${De}`
```

#### 2463. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27207` → after: `L27207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27207) · [Before (L27207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27207)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2464. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27226` → after: `L27226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27226) · [Before (L27226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27226)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2465. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27242` → after: `L27242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27242) · [Before (L27242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27242)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2466. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27261` → after: `L27261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27261) · [Before (L27261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27261)

```diff
-     QB = 1 === DB ? YB("in the first minute") : DB < 1 ? YB("this early") : `${YB("in the first")} ${DB} ${YB("minutes")}`,
+     Me = 1 === be ? ye("in the first minute") : be < 1 ? ye("this early") : `${ye("in the first")} ${be} ${ye("minutes")}`,
```

#### 2467. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27266` → after: `L27266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27266) · [Before (L27266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27266)

```diff
-     children: GB ? `${YB("Nobody dies")} ${QB} ${YB("in your game, so this may not help")}.` : `${YB("Studio sees no deaths")} ${QB} (${YB("the earliest")}, ${OB.earliest.name}, ${YB("comes at")} ${oB} ${YB("min on average")}), ${YB("so this may not be why players leave")}.`
+     children: He ? `${ye("Nobody dies")} ${Me} ${ye("in your game, so this may not help")}.` : `${ye("Studio sees no deaths")} ${Me} (${ye("the earliest")}, ${ie.earliest.name}, ${ye("comes at")} ${Ke} ${ye("min on average")}), ${ye("so this may not be why players leave")}.`
```

#### 2468. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27279` → after: `L27279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27279) · [Before (L27279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27279)

```diff
-   } = (0, lB.H)(), JB = QB.blocks.flatMap((BB => {
+   } = (0, qe.v)(), Je = Me.blocks.flatMap((ee => {
```

#### 2469. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27281-L27282` → after: `L27281-L27282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27281-L27282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27281-L27282) · [Before (L27281-L27282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27281-L27282)

```diff
-     return "list" === BB.kind ? [null !== (OB = null === (GB = BB.items[0]) || void 0 === GB ? void 0 : GB.text) && void 0 !== OB ? OB : ""] : "paragraph" === BB.kind ? [BB.text] : []
-   }))[0], MB = null !== (OB = null !== (GB = null !== (YB = null !== (DB = QB.title) && void 0 !== DB ? DB : null === oB ? null : ze(oB, yB)) && void 0 !== YB ? YB : QB.target) && void 0 !== GB ? GB : JB) && void 0 !== OB ? OB : null;
+     return "list" === ee.kind ? [null !== (ie = null === (He = ee.items[0]) || void 0 === He ? void 0 : He.text) && void 0 !== ie ? ie : ""] : "paragraph" === ee.kind ? [ee.text] : []
+   }))[0], oe = null !== (ie = null !== (He = null !== (ye = null !== (be = Me.title) && void 0 !== be ? be : null === Ke ? null : kn(Ke, Fe)) && void 0 !== ye ? ye : Me.target) && void 0 !== He ? He : Je) && void 0 !== ie ? ie : null;
```

#### 2470. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27285` → after: `L27285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27285) · [Before (L27285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27285)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2471. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27322` → after: `L27322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27322) · [Before (L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27322)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2472. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27380` → after: `L27380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27380) · [Before (L27380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27380)

```diff
-     return null !== (BB = uU(qB, ZB, kB)) && void 0 !== BB ? BB : function(BB, OB, GB, YB) {
+     return null !== (ee = aW(Te, pe, Ze)) && void 0 !== ee ? ee : function(ee, ie, He, ye) {
```

#### 2473. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27384` → after: `L27384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27384) · [Before (L27384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27384)

```diff
-       const jB = null !== (DB = Qa[oB[1].toLowerCase()]) && void 0 !== DB ? DB : Number(oB[1]),
+       const Ue = null !== (be = yS[Ke[1].toLowerCase()]) && void 0 !== be ? be : Number(Ke[1]),
```

#### 2474. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27386` → after: `L27386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27386) · [Before (L27386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27386)

```diff
-       if (jB < 1 || BB.length > wQ.o || Hh.test(OB) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(yB)) return null;
+       if (Ue < 1 || ee.length > mM.t || sl.test(ie) || /\b(?:if|for|while|now|function|setTimeout|setInterval)\b|=>/.test(Fe)) return null;
```

#### 2475. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27390` → after: `L27390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27390) · [Before (L27390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27390)

```diff
-           return null !== (OB = null === (GB = oa.exec(BB)) || void 0 === GB ? void 0 : GB[1]) && void 0 !== OB ? OB : null
+           return null !== (ie = null === (He = bS.exec(ee)) || void 0 === He ? void 0 : He[1]) && void 0 !== ie ? ie : null
```

#### 2476. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27394` → after: `L27394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27394) · [Before (L27394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27394)

```diff
-         lB = null !== (QB = OB.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== QB ? QB : [],
+         qe = null !== (Me = ie.match(/\b(?:on[A-Z]\w*|tick)\b/g)) && void 0 !== Me ? Me : [],
```

#### 2477. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27397` → after: `L27397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27397) · [Before (L27397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27397)

```diff
-       return null !== PB && 0 !== JB.length && pB && void 0 !== qB ? uU([`if (Date.now() - ${qB}[${PB}] >= ${6e4*jB}) {`, ...JB.map((BB => `  ${BB}`)), "}"].join("\n"), "onPlayerJoin", YB) : null
+       return null !== Re && 0 !== Je.length && fe && void 0 !== Te ? aW([`if (Date.now() - ${Te}[${Re}] >= ${6e4*Ue}) {`, ...Je.map((ee => `  ${ee}`)), "}"].join("\n"), "onPlayerJoin", ye) : null
```

#### 2478. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27413` → after: `L27413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27413) · [Before (L27413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27413)

```diff
-         }))).size ? OB[0] : null !== (PB = null === (zB = pa(YB, BB, GB)[0]) || void 0 === zB ? void 0 : zB.event) && void 0 !== PB ? PB : null,
+         }))).size ? ie[0] : null !== (Re = null === (ke = kS(ye, ee, He)[0]) || void 0 === ke ? void 0 : ke.event) && void 0 !== Re ? Re : null,
```

#### 2479. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27427` → after: `L27427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27427) · [Before (L27427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27427)

```diff
-     if (void 0 === pB || null === OB || OB.length > wQ.o) return null;
+     if (void 0 === fe || null === ie || ie.length > mM.t) return null;
```

#### 2480. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27429` → after: `L27429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27429) · [Before (L27429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27429)

```diff
-       ZB = new Set([...null !== (QB = pB.params) && void 0 !== QB ? QB : [], ...null !== (oB = pB.idNames) && void 0 !== oB ? oB : [], ...null !== (jB = null === (yB = pB.body) || void 0 === yB ? void 0 : yB.locals) && void 0 !== jB ? jB : []]),
+       pe = new Set([...null !== (Me = fe.params) && void 0 !== Me ? Me : [], ...null !== (Ke = fe.idNames) && void 0 !== Ke ? Ke : [], ...null !== (Ue = null === (Fe = fe.body) || void 0 === Fe ? void 0 : Fe.locals) && void 0 !== Ue ? Ue : []]),
```

#### 2481. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27433-L27434` → after: `L27433-L27434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27433-L27434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27433-L27434) · [Before (L27433-L27434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27433-L27434)

```diff
-           oB = null !== (OB = null === (YB = BB.numberExpression) || void 0 === YB ? void 0 : YB.trim()) && void 0 !== OB ? OB : "",
-           jB = null === QB ? void 0 : (null !== (DB = GB.functions) && void 0 !== DB ? DB : []).find((BB => BB.name === QB[QB.length - 1])),
+           Ke = null !== (ie = null === (ye = ee.numberExpression) || void 0 === ye ? void 0 : ye.trim()) && void 0 !== ie ? ie : "",
+           Ue = null === Me ? void 0 : (null !== (be = He.functions) && void 0 !== be ? be : []).find((ee => ee.name === Me[Me.length - 1])),
```

#### 2482. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27447` → after: `L27447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27447) · [Before (L27447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27447)

```diff
-   }(ZB, qB, kB, WB) : null), [mB, ZB, qB, kB, WB]), FB = null !== (OB = null === mB || void 0 === mB ? void 0 : mB.code) && void 0 !== OB ? OB : qB, iB = null !== (GB = null !== (DB = null === mB || void 0 === mB ? void 0 : mB.where) && void 0 !== DB ? DB : null === IB || void 0  … [truncated]
+   }(pe, Te, Ze, Be) : null), [Ae, pe, Te, Ze, Be]), Ve = null !== (ie = null === Ae || void 0 === Ae ? void 0 : Ae.code) && void 0 !== ie ? ie : Te, ae = null !== (He = null !== (be = null === Ae || void 0 === Ae ? void 0 : Ae.where) && void 0 !== be ? be : null === Ye || void 0  … [truncated]
```

#### 2483. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27452` → after: `L27452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27452) · [Before (L27452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27452)

```diff
-     const OB = null === LB ? FB : LB.code;
+     const ie = null === ce ? Ve : ce.code;
```

#### 2484. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27456` → after: `L27456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27456) · [Before (L27456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27456)

```diff
-       runnable: null === GB || null === YB ? GB : {
+       runnable: null === He || null === ye ? He : {
```

#### 2485. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27462-L27463` → after: `L27462-L27463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27462-L27463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27462-L27463) · [Before (L27462-L27463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27462-L27463)

```diff
-   }), [LB, FB, iB, kB, dB, KB]), XB = null !== (QB = null === gB || void 0 === gB ? void 0 : gB.code) && void 0 !== QB ? QB : null, wB = (0, YB.useMemo)((() => null === (null === gB || void 0 === gB ? void 0 : gB.once) || null === gB ? [] : [gB.once.name]), [gB]), EB = (0, YB.use … [truncated]
-     return !(null === BB || BB.length > wQ.o) && wu(BB).split("\n").some((BB => Fu.test(BB) && gu.test(BB)))
+   }), [ce, Ve, ae, Ze, we, De]), Ce = null !== (Me = null === xe || void 0 === xe ? void 0 : xe.code) && void 0 !== Me ? Me : null, ve = (0, ye.useMemo)((() => null === (null === xe || void 0 === xe ? void 0 : xe.once) || null === xe ? [] : [xe.once.name]), [xe]), ue = (0, ye.use … [truncated]
+     return !(null === ee || ee.length > mM.t) && uP(ee).split("\n").some((ee => aP.test(ee) && LP.test(ee)))
```

#### 2486. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27467` → after: `L27467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27467) · [Before (L27467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27467)

```diff
-     const BB = [...bf(null !== FB && void 0 !== FB ? FB : "", vB, !0), ...bf(RB, vB)];
+     const ee = [...Nt(null !== Ve && void 0 !== Ve ? Ve : "", Ne, !0), ...Nt(ze, Ne)];
```

#### 2487. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27489` → after: `L27489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27489) · [Before (L27489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27489)

```diff
-       const [, PB, zB, lB] = MB, pB = ZJ(zB), qB = null !== (DB = null === pB || void 0 === pB ? void 0 : pB.key) && void 0 !== DB ? DB : zB, ZB = `${qB}: ${lB.trim()},`, NB = null === OB || null === (QB = dJ.exec(OB)) || void 0 === QB ? void 0 : QB[1];
+       const [, Re, ke, qe] = oe, fe = pJ(ke), Te = null !== (be = null === fe || void 0 === fe ? void 0 : fe.key) && void 0 !== be ? be : ke, pe = `${Te}: ${qe.trim()},`, Xe = null === ie || null === (Me = wJ.exec(ie)) || void 0 === Me ? void 0 : Me[1];
```

#### 2488. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27500` → after: `L27500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27500) · [Before (L27500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27500)

```diff
-         code: `${RB[1]} ${zB} = ${lB.trim()}`,
+         code: `${ze[1]} ${ke} = ${qe.trim()}`,
```

#### 2489. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27516` → after: `L27516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27516) · [Before (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27516)

```diff
-         VB = void 0 !== WB && WB.startsWith(`${qB}:`) ? WB : null !== AB && AB[1] === zB ? `${qB}: ${AB[2].trim()},` : null;
+         ge = void 0 !== Be && Be.startsWith(`${Te}:`) ? Be : null !== Ee && Ee[1] === ke ? `${Te}: ${Ee[2].trim()},` : null;
```

#### 2490. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27519` → after: `L27519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27519) · [Before (L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27519)

```diff
-         where: `${YB("Replace the line")} \`${VB}\` ${YB("inside")} \`${pB.object}\``
+         where: `${ye("Replace the line")} \`${ge}\` ${ye("inside")} \`${fe.object}\``
```

#### 2491. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27522` → after: `L27522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27522) · [Before (L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27522)

```diff
-         where: void 0 === NB ? `${YB("Replace the line starting")} \`${qB}:\` ${YB("inside")} \`${pB.object}\`` : OB
+         where: void 0 === Xe ? `${ye("Replace the line starting")} \`${Te}:\` ${ye("inside")} \`${fe.object}\`` : ie
```

#### 2492. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27533` → after: `L27533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27533) · [Before (L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27533)

```diff
-         oB = null === QB ? void 0 : null !== (GB = OB.get(QB[1])) && void 0 !== GB ? GB : OB.get(null !== (YB = null === (DB = ZJ(QB[1])) || void 0 === DB ? void 0 : DB.key) && void 0 !== YB ? YB : ""),
+         Ke = null === Me ? void 0 : null !== (He = ie.get(Me[1])) && void 0 !== He ? He : ie.get(null !== (ye = null === (be = pJ(Me[1])) || void 0 === be ? void 0 : be.key) && void 0 !== ye ? ye : ""),
```

#### 2493. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27543` → after: `L27543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27543) · [Before (L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27543)

```diff
-     if (null !== rB) return null !== (BB = rB.added) && void 0 !== BB ? BB : {
+     if (null !== Le) return null !== (ee = Le.added) && void 0 !== ee ? ee : {
```

#### 2494. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27566` → after: `L27566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27566) · [Before (L27566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27566)

```diff
-   }), [rB, gB, XB, iB, kB, wB]), DO = null === OO ? tB : 0 === YO.top.length ? SB("Paste at the bottom of your World Code") : YO.join.length > 0 ? SB("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === YO.top.length ? SB("Paste the line abov … [truncated]
+   }), [Le, xe, Ce, ae, Ze, ve]), bi = null === ii ? Qe : 0 === yi.top.length ? Oe("Paste at the bottom of your World Code") : yi.join.length > 0 ? Oe("Paste the lines above where they say, and this at the bottom of your World Code") : 1 === yi.top.length ? Oe("Paste the line abov … [truncated]
```

#### 2495. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27568-L27569` → after: `L27568-L27569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27568-L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27568-L27569) · [Before (L27568-L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27568-L27569)

```diff
-     return null === OO ? BB : BB.filter((BB => !OO.params.includes(BB)))
-   }), [rB, XB, iB, kB, wB, OO]), oO = null === eB && null === TB && 0 === CB.length && 0 === bB.length && (null !== rB || 0 === QO.length) && !hB, jO = oO && (null === (null === gB || void 0 === gB ? void 0 : gB.once) || null !== (null === gB || void 0 === gB ? void 0 : gB.loopNa … [truncated]
+     return null === ii ? ee : ee.filter((ee => !ii.params.includes(ee)))
+   }), [Le, Ce, ae, Ze, ve, ii]), Ki = null === ne && null === je && 0 === Ie.length && 0 === se.length && (null !== Le || 0 === Mi.length) && !le, Ui = Ki && (null === (null === xe || void 0 === xe ? void 0 : xe.once) || null !== (null === xe || void 0 === xe ? void 0 : xe.loopNa … [truncated]
```

#### 2496. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27576` → after: `L27576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27576) · [Before (L27576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27576)

```diff
-       return `${BB.slice(0,QB)}${OB.test} && ${YB.cond}${BB.slice(QB+YB.cond.length)}`
+       return `${ee.slice(0,Me)}${ie.test} && ${ye.cond}${ee.slice(Me+ye.cond.length)}`
```

#### 2497. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27580` → after: `L27580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27580) · [Before (L27580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27580)

```diff
-     return null === QB || /^(?:const|let|var|class|function)\b/.test(QB) || /;\s*\S/.test(an(QB)) ? [`if (${OB.test}) {`, ...DB.map((BB => `  ${BB}`)), "}"].join("\n") : `if (${OB.test}) ${QB}`
+     return null === Me || /^(?:const|let|var|class|function)\b/.test(Me) || /;\s*\S/.test(Id(Me)) ? [`if (${ie.test}) {`, ...be.map((ee => `  ${ee}`)), "}"].join("\n") : `if (${ie.test}) ${Me}`
```

#### 2498. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27588` → after: `L27588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27588) · [Before (L27588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27588)

```diff
-   }(yO.after, JO) : MO ? null : jO && null === OO ? xu(pk(xB, tB, kB, RB), RB, kB) : null), [yO, JO, MO, jO, OO, xB, tB, kB, RB]), zO = null !== (oB = null === rB || void 0 === rB ? void 0 : rB.added) && void 0 !== oB ? oB : null, lO = (0, YB.useMemo)((() => null === zO ? null :  … [truncated]
+   }(Fi.after, Ji) : oi ? null : Ui && null === ii ? QP(pZ(re, Qe, Ze, ze), ze, Ze) : null), [Fi, Ji, oi, Ui, ii, re, Qe, Ze, ze]), ki = null !== (Ke = null === Le || void 0 === Le ? void 0 : Le.added) && void 0 !== Ke ? Ke : null, qi = (0, ye.useMemo)((() => null === ki ? null :  … [truncated]
```

#### 2499. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27599` → after: `L27599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27599) · [Before (L27599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27599)

```diff
-     ["leftOut", (null !== (jB = null === LB || void 0 === LB ? void 0 : LB.leftOut.length) && void 0 !== jB ? jB : 0) > 0],
+     ["leftOut", (null !== (Ue = null === ce || void 0 === ce ? void 0 : ce.leftOut.length) && void 0 !== Ue ? Ue : 0) > 0],
```

#### 2500. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27605` → after: `L27605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27605) · [Before (L27605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27605)

```diff
-   }))) || void 0 === JB ? void 0 : JB[0]) && void 0 !== yB ? yB : null, qO = BB => !dB || pO === BB, ZO = qO("leftOut") ? ke(null !== (MB = null === LB || void 0 === LB ? void 0 : LB.leftOut) && void 0 !== MB ? MB : [], dB) : [], NO = (0, YB.useMemo)((() => null !== yO ? {
+   }))) || void 0 === Je ? void 0 : Je[0]) && void 0 !== Fe ? Fe : null, Ti = ee => !we || fi === ee, Xi = Ti("leftOut") ? Zn(null !== (oe = null === ce || void 0 === ce ? void 0 : ce.leftOut) && void 0 !== oe ? oe : [], we) : [], zi = (0, ye.useMemo)((() => null !== Fi ? {
```

#### 2501. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27612` → after: `L27612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27612) · [Before (L27612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27612)

```diff
-     if ((null !== (YB = OB.match(/\([^()]*\)/g)) && void 0 !== YB ? YB : []).some((BB => !UI.test(BB))) || nI.test(OB) || lk(BB)) return null;
+     if ((null !== (ye = ie.match(/\([^()]*\)/g)) && void 0 !== ye ? ye : []).some((ee => !WY.test(ee))) || dY.test(ie) || TZ(ee)) return null;
```

#### 2502. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27617` → after: `L27617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27617) · [Before (L27617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27617)

```diff
-     return (0, EQ.f)(oB, /return(?![\w$])/, EQ.p).length > 0 || DB.body.locals.some((BB => bl(oB, BB) && !Tl(oB, BB))) ? null : {
+     return (0, lM.g)(Ke, /return(?![\w$])/, lM.n).length > 0 || be.body.locals.some((ee => Nq(Ke, ee) && !hq(Ke, ee))) ? null : {
```

#### 2503. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27623-L27624` → after: `L27623-L27624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27623-L27624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27623-L27624) · [Before (L27623-L27624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27623-L27624)

```diff
-     const OB = BB === tB ? NO : null,
-       GB = BB === tB && null !== IB && tB === IB.name ? IB : null;
+     const ie = ee === Qe ? zi : null,
+       He = ee === Qe && null !== Ye && Qe === Ye.name ? Ye : null;
```

#### 2504. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27639` → after: `L27639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27639) · [Before (L27639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27639)

```diff
-           title: `${OB.after.source}, ${SB("line")} ${OB.after.line}: ${OB.after.text}`,
+           title: `${ie.after.source}, ${Oe("line")} ${ie.after.line}: ${ie.after.text}`,
```

#### 2505. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27665` → after: `L27665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27665) · [Before (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27665)

```diff
-           children: [(0, uB.jsx)(AB.b, {
+           children: [(0, Pe.jsx)(Ee.e, {
```

#### 2506. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27670` → after: `L27670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27670) · [Before (L27670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27670)

```diff
-           code: null !== (PB = null !== (zB = null === OO || void 0 === OO ? void 0 : OO.code) && void 0 !== zB ? zB : JO) && void 0 !== PB ? PB : xB,
+           code: null !== (Re = null !== (ke = null === ii || void 0 === ii ? void 0 : ii.code) && void 0 !== ke ? ke : Ji) && void 0 !== Re ? Re : re,
```

#### 2507. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27675` → after: `L27675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27675) · [Before (L27675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27675)

```diff
-           children: ma(null !== (lB = null !== (pB = null === OO || void 0 === OO ? void 0 : OO.code) && void 0 !== pB ? pB : JO) && void 0 !== lB ? lB : xB, "next-change-code", VB, "pasteCode")
+           children: DS(null !== (qe = null !== (fe = null === ii || void 0 === ii ? void 0 : ii.code) && void 0 !== fe ? fe : Ji) && void 0 !== qe ? qe : re, "next-change-code", ge, "pasteCode")
```

#### 2508. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27714` → after: `L27714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27714) · [Before (L27714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27714)

```diff
-         }), "):", " ", null === EB.line ? `"${EB.text}"` : (0, uB.jsx)("code", {
+         }), "):", " ", null === ue.line ? `"${ue.text}"` : (0, Pe.jsx)("code", {
```

#### 2509. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27797` → after: `L27797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27797) · [Before (L27797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27797)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2510. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27815` → after: `L27815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27815) · [Before (L27815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27815)

```diff
-       children: [DB > 0 && (DB === OB.length - 1 ? ` ${GB("and")} ` : ", "), (0, uB.jsx)("code", {
+       children: [be > 0 && (be === ie.length - 1 ? ` ${He("and")} ` : ", "), (0, Pe.jsx)("code", {
```

#### 2511. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27824` → after: `L27824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27824) · [Before (L27824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27824)

```diff
-   return BB.length <= 1 ? null !== (GB = BB[0]) && void 0 !== GB ? GB : "" : `${BB.slice(0,-1).join(", ")} ${OB("and")} ${BB[BB.length-1]}`
+   return ee.length <= 1 ? null !== (He = ee[0]) && void 0 !== He ? He : "" : `${ee.slice(0,-1).join(", ")} ${ie("and")} ${ee[ee.length-1]}`
```

#### 2512. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27837` → after: `L27837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27837) · [Before (L27837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27837)

```diff
-       children: "gives" === OB.kind ? `${YB("You already give")} ${Ke(OB.items,YB)}.` : YB(BB ? "You already have this welcome message." : "You already have this message.")
+       children: "gives" === ie.kind ? `${ye("You already give")} ${Dn(ie.items,ye)}.` : ye(ee ? "You already have this welcome message." : "You already have this message.")
```

#### 2513. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27849` → after: `L27849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27849) · [Before (L27849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27849)

```diff
-       }), "): ", null === OB.line ? `"${OB.text}"` : (0, uB.jsx)("code", {
+       }), "): ", null === ie.line ? `"${ie.text}"` : (0, Pe.jsx)("code", {
```

#### 2514. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27865` → after: `L27865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27865) · [Before (L27865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27865)

```diff
-       children: `api.${OB}`
+       children: `api.${ie}`
```

#### 2515. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27880` → after: `L27880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27880) · [Before (L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27880)

```diff
-       children: `const ${OB} = ${GB}`
+       children: `const ${ie} = ${He}`
```

#### 2516. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27907` → after: `L27907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27907) · [Before (L27907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27907)

```diff
-     of null !== (PB = null === GB || void 0 === GB ? void 0 : GB.renames) && void 0 !== PB ? PB : []) {
+     of null !== (Re = null === He || void 0 === He ? void 0 : He.renames) && void 0 !== Re ? Re : []) {
```

#### 2517. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27913` → after: `L27913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27913) · [Before (L27913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27913)

```diff
-     }, `young-${zB}`))
+     }, `young-${ke}`))
```

#### 2518. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27931` → after: `L27931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27931) · [Before (L27931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27931)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2519. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27942` → after: `L27942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27942) · [Before (L27942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27942)

```diff
-   return 1 === GB.length ? `${OB("line")} ${GB[0]}` : `${OB("lines")} ${Ke(GB.map(String),OB)}`
+   return 1 === He.length ? `${ie("line")} ${He[0]}` : `${ie("lines")} ${Dn(He.map(String),ie)}`
```

#### 2520. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L27958` → after: `L27958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L27958) · [Before (L27958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L27958)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2521. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28021` → after: `L28021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28021) · [Before (L28021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28021)

```diff
-     }), " ", YB ? oB : jB]
+     }), " ", ye ? Ke : Ue]
```

#### 2522. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28054` → after: `L28054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28054) · [Before (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28054)

```diff
-         children: [(0, uB.jsx)(AB.b, {
+         children: [(0, Pe.jsx)(Ee.e, {
```

#### 2523. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28100` → after: `L28100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28100) · [Before (L28100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28100)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2524. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28144` → after: `L28144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28144) · [Before (L28144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28144)

```diff
-         children: "insert" === OB.kind ? `  ${BB}` : BB
+         children: "insert" === ie.kind ? `  ${ee}` : ee
```

#### 2525. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28146` → after: `L28146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28146) · [Before (L28146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28146)

```diff
-     }, `added-${GB}`))), "insert" === OB.kind && OB.next.map(((BB, OB) => (0, uB.jsxs)("span", {
+     }, `added-${He}`))), "insert" === ie.kind && ie.next.map(((ee, ie) => (0, Pe.jsxs)("span", {
```

#### 2526. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28152` → after: `L28152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28152) · [Before (L28152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28152)

```diff
-         children: `  ${BB}`
+         children: `  ${ee}`
```

#### 2527. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28154` → after: `L28154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28154) · [Before (L28154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28154)

```diff
-     }, `next-${OB}`))), "insert" === OB.kind && OB.next.length >= we && (0, uB.jsxs)("span", {
+     }, `next-${ie}`))), "insert" === ie.kind && ie.next.length >= vn && (0, Pe.jsxs)("span", {
```

#### 2528. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28186` → after: `L28186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28186) · [Before (L28186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28186)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2529. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28246` → after: `L28246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28246) · [Before (L28246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28246)

```diff
-   return [BB, ...OB.map((BB => "string" === typeof BB ? BB : "code" in BB ? BB.code : ""))].join(" ")
+   return [ee, ...ie.map((ee => "string" === typeof ee ? ee : "code" in ee ? ee.code : ""))].join(" ")
```

#### 2530. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28259` → after: `L28259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28259) · [Before (L28259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28259)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2531. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28262` → after: `L28262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28262) · [Before (L28262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28262)

```diff
-     }), DB("Your events"), (0, uB.jsx)(AB.b, {
+     }), be("Your events"), (0, Pe.jsx)(Ee.e, {
```

#### 2532. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28270` → after: `L28270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28270) · [Before (L28270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28270)

```diff
-     return void 0 === YB ? null : `${OB("Only")} ${(0,wQ.i)(YB)} ${OB("players this week, so these are hints.")}`
+     return void 0 === ye ? null : `${ie("Only")} ${(0,mM.j)(ye)} ${ie("players this week, so these are hints.")}`
```

#### 2533. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28280` → after: `L28280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28280) · [Before (L28280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28280)

```diff
-         oB = "spot" === QB.kind && tz(BB.eventType) && "" !== QB.value ? `${BB.eventType}: ${QB.value}` : null,
+         Ke = "spot" === Me.kind && Hq(ee.eventType) && "" !== Me.value ? `${ee.eventType}: ${Me.value}` : null,
```

#### 2534. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28322` → after: `L28322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28322) · [Before (L28322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28322)

```diff
-       missing: `${DB("Want to see what players do? Add one tracking line: see")} "${null!==YB&&void 0!==YB?YB:""}" ${DB("below.")}`,
+       missing: `${be("Want to see what players do? Add one tracking line: see")} "${null!==ye&&void 0!==ye?ye:""}" ${be("below.")}`,
```

#### 2535. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28331` → after: `L28331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28331) · [Before (L28331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28331)

```diff
-       const BB = QB.days < 7 ? ` (${QB.days} ${1===QB.days?DB("day"):DB("days")})` : "",
+       const ee = Me.days < 7 ? ` (${Me.days} ${1===Me.days?be("day"):be("days")})` : "",
```

#### 2536. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28333` → after: `L28333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28333) · [Before (L28333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28333)

```diff
-       oB = 0 === QB.players ? DB("No players this week, so treat the reasons below as guesses.") : `${DB("Only")} ${QB.players} ${OB}${BB}: ${DB("too few to tell why people leave, so treat the reasons below as guesses.")}`, jB = QB.eventTypes
+       Ke = 0 === Me.players ? be("No players this week, so treat the reasons below as guesses.") : `${be("Only")} ${Me.players} ${ie}${ee}: ${be("too few to tell why people leave, so treat the reasons below as guesses.")}`, Ue = Me.eventTypes
```

#### 2537. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28336` → after: `L28336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28336) · [Before (L28336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28336)

```diff
-     0 === OB.length && jB.length > 0 ? yB = [`${DB("You already log")} `, ...KS(jB.slice(0, uS), DB), `: ${DB("they will say more as players come.")}`] : 0 === OB.length && null !== YB && (yB = [`${DB("Start with the line under")} "${YB}" ${DB("below.")}`]);
+     0 === ie.length && Ue.length > 0 ? Fe = [`${be("You already log")} `, ...aO(Ue.slice(0, cO), be), `: ${be("they will say more as players come.")}`] : 0 === ie.length && null !== ye && (Fe = [`${be("Start with the line under")} "${ye}" ${be("below.")}`]);
```

#### 2538. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28338` → after: `L28338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28338) · [Before (L28338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28338)

```diff
-     return OB.length > 0 ? JB = [`${DB("Studio shows each one after about")} ${oS} ${DB("players send it")}: `, {
+     return ie.length > 0 ? Je = [`${be("Studio shows each one after about")} ${RO} ${be("players send it")}: `, {
```

#### 2539. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28340` → after: `L28340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28340) · [Before (L28340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28340)

```diff
-     }] : "fewPlayers" === QB.kind && (JB = [`${DB("Studio can say why players leave after about")} ${QS} ${DB("players a week")}: `, {
+     }] : "fewPlayers" === Me.kind && (Je = [`${be("Studio can say why players leave after about")} ${oO} ${be("players a week")}: `, {
```

#### 2540. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28353` → after: `L28353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28353) · [Before (L28353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28353)

```diff
-   }), lB = `${GB.length} ${1===GB.length?jB("event to log"):jB("events to log")}`;
+   }), qe = `${He.length} ${1===He.length?Ue("event to log"):Ue("events to log")}`;
```

#### 2541. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28360` → after: `L28360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28360) · [Before (L28360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28360)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2542. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28375` → after: `L28375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28375) · [Before (L28375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28375)

```diff
-     }), 0 === GB.length ? zB : (0, uB.jsxs)("details", {
+     }), 0 === He.length ? ke : (0, Pe.jsxs)("details", {
```

#### 2543. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28378` → after: `L28378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28378) · [Before (L28378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28378)

```diff
-         children: [(0, uB.jsx)(AB.b, {
+         children: [(0, Pe.jsx)(Ee.e, {
```

#### 2544. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28432` → after: `L28432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28432) · [Before (L28432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28432)

```diff
-               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${BB.verdict}`,
+               className: `StudioAiJourneyVerdict StudioAiJourneyVerdict-${ee.verdict}`,
```

#### 2545. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28444` → after: `L28444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28444) · [Before (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28444)

```diff
-         className: `StudioAiJourneyStep StudioAiJourneyStep-${BB.verdict}`,
+         className: `StudioAiJourneyStep StudioAiJourneyStep-${ee.verdict}`,
```

#### 2546. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28480` → after: `L28480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28480) · [Before (L28480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28480)

```diff
-     children: [(0, uB.jsx)(AB.b, {
+     children: [(0, Pe.jsx)(Ee.e, {
```

#### 2547. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28531` → after: `L28531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28531) · [Before (L28531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28531)

```diff
-   } = (0, lB.H)(), [LB, gB] = (0, YB.useState)(null), rB = null !== WB && uu(jB);
+   } = (0, qe.v)(), [ce, xe] = (0, ye.useState)(null), Le = null !== Be && AP(Ue);
```

#### 2548. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28548` → after: `L28548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28548) · [Before (L28548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28548)

```diff
-     cB = (0, YB.useMemo)((() => EU(jB, null !== ZB && void 0 !== ZB ? ZB : new Set)), [jB, ZB]);
+     me = (0, ye.useMemo)((() => nW(Ue, null !== pe && void 0 !== pe ? pe : new Set)), [Ue, pe]);
```

#### 2549. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28567` → after: `L28567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28567) · [Before (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28567)

```diff
-       journey: null !== zB && void 0 !== zB ? zB : null,
+       journey: null !== ke && void 0 !== ke ? ke : null,
```

#### 2550. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28594` → after: `L28594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28594) · [Before (L28594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28594)

```diff
-       isCodeInPlaceOpen: null === SB ? !0 === qB : SZ(SB),
+       isCodeInPlaceOpen: null === Oe ? !0 === Te : Zp(Oe),
```

#### 2551. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28608` → after: `L28608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28608) · [Before (L28608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28608)

```diff
-     BB.length > 0 && console.info(`The Studio AI answer cited ${BB.length} statistics Studio doesn't have, which are left out`, BB)
+     ee.length > 0 && console.info(`The Studio AI answer cited ${ee.length} statistics Studio doesn't have, which are left out`, ee)
```

#### 2552. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28612` → after: `L28612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28612) · [Before (L28612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28612)

```diff
-       children: 1 === TB ? iB("Studio left out 1 idea that doesn't fit your game.") : `${iB("Studio left out")} ${TB} ${iB("ideas that don't fit your game")}.`
+       children: 1 === je ? ae("Studio left out 1 idea that doesn't fit your game.") : `${ae("Studio left out")} ${je} ${ae("ideas that don't fit your game")}.`
```

#### 2553. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28616` → after: `L28616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28616) · [Before (L28616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28616)

```diff
-       children: [(0, uB.jsx)(AB.b, {
+       children: [(0, Pe.jsx)(Ee.e, {
```

#### 2554. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28621` → after: `L28621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28621) · [Before (L28621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28621)

```diff
-     tB = null !== (OB = null !== qB && void 0 !== qB ? qB : null === aB || void 0 === aB ? void 0 : aB.sections.some((BB => "fixFirst" === BB.key && BB.heading === kM("fixFirst", !0)))) && void 0 !== OB && OB,
+     Qe = null !== (ie = null !== Te && void 0 !== Te ? Te : null === Se || void 0 === Se ? void 0 : Se.sections.some((ee => "fixFirst" === ee.key && ee.heading === wo("fixFirst", !0)))) && void 0 !== ie && ie,
```

#### 2555. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28628` → after: `L28628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28628) · [Before (L28628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28628)

```diff
-     GO = BB => 0 === Rp(BB).length ? BB : Wp(BB),
+     Hi = ee => 0 === Of(ee).length ? ee : df(ee),
```

#### 2556. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28631` → after: `L28631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28631) · [Before (L28631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28631)

```diff
-     QO = null !== (GB = null === DO || void 0 === DO ? void 0 : DO.nextChange) && void 0 !== GB ? GB : null,
+     Mi = null !== (He = null === bi || void 0 === bi ? void 0 : bi.nextChange) && void 0 !== He ? He : null,
```

#### 2557. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28644` → after: `L28644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28644) · [Before (L28644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28644)

```diff
-   const jO = null !== pB && void 0 !== pB ? pB : [],
+   const Ui = null !== fe && void 0 !== fe ? fe : [],
```

#### 2558. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28646` → after: `L28646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28646) · [Before (L28646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28646)

```diff
-     JO = null !== eB && void 0 !== eB ? eB : aB,
+     Ji = null !== ne && void 0 !== ne ? ne : Se,
```

#### 2559. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28648` → after: `L28648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28648) · [Before (L28648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28648)

```diff
-     PO = void 0 === MO || MO === YO ? DO : oR(GO(MO.markdown)),
+     Ri = void 0 === oi || oi === yi ? bi : Rz(Hi(oi.markdown)),
```

#### 2560. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28650` → after: `L28650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28650) · [Before (L28650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28650)

```diff
-     lO = null !== (DB = null === PO || void 0 === PO ? void 0 : PO.nextChange) && void 0 !== DB ? DB : QO,
+     qi = null !== (be = null === Ri || void 0 === Ri ? void 0 : Ri.nextChange) && void 0 !== be ? be : Mi,
```

#### 2561. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28655` → after: `L28655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28655) · [Before (L28655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28655)

```diff
-     qO = null === UB ? [] : EV(UB, ik(`${aB.summary}\n${null!==(QB=null===YO||void 0===YO?void 0:YO.markdown)&&void 0!==QB?QB:""}`), SB),
+     Ti = null === We ? [] : jg(We, xZ(`${Se.summary}\n${null!==(Me=null===yi||void 0===yi?void 0:yi.markdown)&&void 0!==Me?Me:""}`), Oe),
```

#### 2562. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28666` → after: `L28666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28666) · [Before (L28666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28666)

```diff
-     }(null !== UB && void 0 !== UB ? UB : [], null !== fB && void 0 !== fB ? fB : [], qO, ik(ZO)) : [],
+     }(null !== We && void 0 !== We ? We : [], null !== te && void 0 !== te ? te : [], Ti, xZ(Xi)) : [],
```

#### 2563. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28674` → after: `L28674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28674) · [Before (L28674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28674)

```diff
-     WO = null === mB ? [] : sS(mB, [...qO, ...NO], `${ZO}\n${function(BB,OB,GB,YB,DB,QB){if(null===BB||null===OB||!QB.isOlder)return"";const oB=XA(BB,OB,GB,QB.constantLines),jB=null===oB?null:qu(oB,OB,YB);return null===jB?"":ee("",Au(jB,QB.t,DB))}(QO,VB,PB,dB,jB,vB)}`, SB),
+     Ei = null === Ae ? [] : yd(Ae, [...Ti, ...zi], `${Xi}\n${function(ee,ie,He,ye,be,Me){if(null===ee||null===ie||!Me.isOlder)return"";const Ke=SE(ee,ie,He,Me.constantLines),Ue=null===Ke?null:pP(Ke,ie,ye);return null===Ue?"":jn("",gP(Ue,Me.t,be))}(Mi,ge,Re,we,Ue,Ne)}`, Oe),
```

#### 2564. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28680-L28681` → after: `L28680-L28681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28680-L28681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28680-L28681) · [Before (L28680-L28681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28680-L28681)

```diff
-         QB = new RegExp(`(?:${(0,wQ.i)(BB.players)}|${Math.round(BB.players)})(?![\\d]|[,.]\\d|\\s*%)`),
-         oB = (0, EQ.f)(OB, QB, (0, EQ.n)("\\d,.")).length > 0;
+         Me = new RegExp(`(?:${(0,mM.j)(ee.players)}|${Math.round(ee.players)})(?![\\d]|[,.]\\d|\\s*%)`),
+         Ke = (0, lM.g)(ie, Me, (0, lM.m)("\\d,.")).length > 0;
```

#### 2565. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28689` → after: `L28689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28689) · [Before (L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28689)

```diff
-         DB = (0, wQ.i)(BB.players);
+         be = (0, mM.j)(ee.players);
```

#### 2566. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28691` → after: `L28691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28691) · [Before (L28691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28691)

```diff
-         parts: [`${GB("Of the")} ${(0,wQ.i)(BB.fromPlayers)} ${GB("players who got to")} ${BB.step}, ${DB} ${GB("later had")} `, {
+         parts: [`${He("Of the")} ${(0,mM.j)(ee.fromPlayers)} ${He("players who got to")} ${ee.step}, ${be} ${He("later had")} `, {
```

#### 2567. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28693` → after: `L28693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28693) · [Before (L28693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28693)

```diff
-         }, ` ${GB("this week")} `, YB]
+         }, ` ${He("this week")} `, ye]
```

#### 2568. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28697` → after: `L28697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28697) · [Before (L28697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28697)

```diff
-         parts: [`${GB("Of the")} ${(0,wQ.i)(BB.fromPlayers)} ${GB("players who reached")} ${BB.step}, ${DB} ${GB("later had")} `, {
+         parts: [`${He("Of the")} ${(0,mM.j)(ee.fromPlayers)} ${He("players who reached")} ${ee.step}, ${be} ${He("later had")} `, {
```

#### 2569. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28699` → after: `L28699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28699) · [Before (L28699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28699)

```diff
-         }, ` (${QB}%, ${GB("past week")}) `, YB]
+         }, ` (${Me}%, ${He("past week")}) `, ye]
```

#### 2570. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28707` → after: `L28707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28707) · [Before (L28707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28707)

```diff
-     UO = [...RO, ...(null !== (oB = null === AO || void 0 === AO ? void 0 : AO.rows) && void 0 !== oB ? oB : []).map((BB => {
+     ti = [...Bi, ...(null !== (Ke = null === gi || void 0 === gi ? void 0 : gi.rows) && void 0 !== Ke ? Ke : []).map((ee => {
```

#### 2571. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28719` → after: `L28719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28719) · [Before (L28719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28719)

```diff
-       return YB.slice(0, "young" === GB ? Jn : yn)
+       return ye.slice(0, "young" === He ? fd : qd)
```

#### 2572. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28742` → after: `L28742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28742) · [Before (L28742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28742)

```diff
-       return null !== (GB = BB.find((BB => !YB.includes(BB.eventType) && !RN(BB, OB)))) && void 0 !== GB ? GB : null
+       return null !== (He = ee.find((ee => !ye.includes(ee.eventType) && !dX(ee, ie)))) && void 0 !== He ? He : null
```

#### 2573. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28756-L28757` → after: `L28756-L28757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28756-L28757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28756-L28757) · [Before (L28756-L28757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28756-L28757)

```diff
-           const OB = [`${(0,wQ.e)(BB.said)} ${GB("in your description")}`],
-             jB = null === oB.category ? "" : ` ${GB("in")} ${oB.category}`;
+           const ie = [`${(0,mM.b)(ee.said)} ${He("in your description")}`],
+             Ue = null === Ke.category ? "" : ` ${He("in")} ${Ke.category}`;
```

#### 2574. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28760` → after: `L28760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28760) · [Before (L28760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28760)

```diff
-             parts: [`${(0,wQ.i)(oB.players)} ${GB("players got to")} ${oB.step} ${QB}, ${GB("of")} ${(0,wQ.i)(oB.first.players)} ${GB("who got to")} ${oB.first.name}${jB} `, DB]
+             parts: [`${(0,mM.j)(Ke.players)} ${He("players got to")} ${Ke.step} ${Me}, ${He("of")} ${(0,mM.j)(Ke.first.players)} ${He("who got to")} ${Ke.first.name}${Ue} `, be]
```

#### 2575. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28762` → after: `L28762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28762) · [Before (L28762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28762)

```diff
-           const yB = null === oB.before ? "" : `, ${(0,wQ.i)(oB.before.players)} \u2192 ${(0,wQ.i)(oB.players)} ${GB("from")} ${oB.before.name}`;
+           const Fe = null === Ke.before ? "" : `, ${(0,mM.j)(Ke.before.players)} \u2192 ${(0,mM.j)(Ke.players)} ${He("from")} ${Ke.before.name}`;
```

#### 2576. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28765` → after: `L28765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28765) · [Before (L28765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28765)

```diff
-             parts: [`${(0,wQ.i)(oB.players)} ${GB("of the")} ${(0,wQ.i)(oB.first.players)} ${GB("players who reached")} ${oB.first.name} ${GB("got to")} ${oB.step}${yB}${jB} (${QB}) `, DB]
+             parts: [`${(0,mM.j)(Ke.players)} ${He("of the")} ${(0,mM.j)(Ke.first.players)} ${He("players who reached")} ${Ke.first.name} ${He("got to")} ${Ke.step}${Fe}${Ue} (${Me}) `, be]
```

#### 2577. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28769` → after: `L28769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28769) · [Before (L28769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28769)

```diff
-           const OB = "" === oB.category ? "" : ` ${GB("in")} ${oB.category}`,
+           const ie = "" === Ke.category ? "" : ` ${He("in")} ${Ke.category}`,
```

#### 2578. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28772-L28774` → after: `L28772-L28774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28772-L28774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28772-L28774) · [Before (L28772-L28774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28772-L28774)

```diff
-             label: [`${(0,wQ.e)((0,wQ.x)(oB.death))} ${GB("in your description")}`],
-             parts: [`${(0,wQ.i)(oB.count)} ${GB("of the")} ${(0,wQ.i)(oB.total)} ${GB("deaths")}${OB} ${QB} ${GB("were")} `, {
-               code: `${BB.eventType}: ${oB.death}`
+             label: [`${(0,mM.b)((0,mM.H)(Ke.death))} ${He("in your description")}`],
+             parts: [`${(0,mM.j)(Ke.count)} ${He("of the")} ${(0,mM.j)(Ke.total)} ${He("deaths")}${ie} ${Me} ${He("were")} `, {
+               code: `${ee.eventType}: ${Ke.death}`
```

#### 2579. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28779` → after: `L28779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28779) · [Before (L28779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28779)

```diff
-           const OB = [`${(0,wQ.e)(BB.saidAll.join(` ${GB("and")} `))} ${GB("in your description")}`],
+           const ie = [`${(0,mM.b)(ee.saidAll.join(` ${He("and")} `))} ${He("in your description")}`],
```

#### 2580. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L28785` → after: `L28785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R28785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L28785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L28785) · [Before (L28785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L28785)

```diff
-               return `${""===QB?BB.eventType:QB}: ${(0,wQ.i)(oB)}${0===DB||YB?` ${GB("players")}`:""}`
+               return `${""===Me?ee.eventType:Me}: ${(0,mM.j)(Ke)}${0===be||ye?` ${He("players")}`:""}`
```
