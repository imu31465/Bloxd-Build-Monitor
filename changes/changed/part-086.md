# Changed — Bundle Modifications Report (Part 086 / 140)

- **Updated at**: `2026-11-24T17:23 JST`
- **Part**: `86 / 140` (**394** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 085](part-085.md) · [Part 087 →](part-087.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (mpd96o.85ad4551 → tz47m9.2cb7e113 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (942 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 218. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6069-L6101` → after: `L6069-L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6069-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6069-L6101) · [Before (L6069-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6069-L6101)

```diff
-       const pm = "deepseek" === Dm.format,
-         Em = Object.values(Tm.files).join("\n"),
-         om = Tm.history.slice(-2).map((mm => mm.text)).join("\n"),
-         Om = `${Tm.request}\n${om}\n${Tm.errors.join("\n")}`,
-         Ym = !0 === Tm.looksUpDocs,
-         qm = Ym && !0 === Tm.canLookUp ? [] : mm.find(Om, Em, 12),
-         jm = mm.matchItemAndBlockNames(Om, 12),
-         Vm = !0 === Tm.codeBlock,
-         Im = Vm ? "myId" : "playerId",
-         Km = nA(Tm, Dm.format),
-         Qm = Km.some((mm => "use_prefab" === mm.name)),
-         nm = !Qm || pm && !0 !== KA(Tm).offersPrefabs ? [] : function(mm, Tm, fm) {
-           if ("never" === fm.offer || "none" === fm.list) return [];
-           if ("all" === fm.list) return [...Yh];
-           const hm = Nh(mm, 4);
-           if (DA(Tm) || !wA.test(mm) && !ET(mm)) return hm;
- ... (17 more removed lines; see GitHub link above)
+       const AD = "deepseek" === cD.format,
+         UD = Object.values(zD.files).join("\n"),
+         fD = zD.history.slice(-2).map((DD => DD.text)).join("\n"),
+         ID = `${zD.request}\n${fD}\n${zD.errors.join("\n")}`,
+         BD = !0 === zD.looksUpDocs,
+         GD = BD && !0 === zD.canLookUp ? [] : DD.find(ID, UD, 12),
+         hD = DD.matchItemAndBlockNames(ID, 12),
+         nD = !0 === zD.codeBlock,
+         MD = nD ? "myId" : "playerId",
+         OD = Es(zD, cD.format),
+         JD = OD.some((DD => "use_prefab" === DD.name)),
+         ED = !JD || AD && !0 !== Ms(zD).offersPrefabs ? [] : function(DD, zD, wD) {
+           if ("never" === wD.offer || "none" === wD.list) return [];
+           if ("all" === wD.list) return [...fp];
+           const pD = Tp(DD, 4);
+           if (Ls(zD) || !rs.test(DD) && !Az(DD)) return pD;
+ ... (17 more added lines; see GitHub link above)
```

#### 219. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6103` → after: `L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6103) · [Before (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6103)

```diff
-           content: AA([Vm ? pA(Ym) : RA(Ym), ...Ym ? [] : [Vm ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${mm.index("callback")}` : `## Callbacks (all of them)\n${mm.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: ps([nD ? Rs(BD) : gs(BD), ...BD ? [] : [nD ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${DD.index("callback")}` : `## Callbacks (all of them)\n${DD.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```

#### 220. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6110-L6115` → after: `L6110-L6115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6110-L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6110-L6115) · [Before (L6110-L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6110-L6115)

```diff
-             hasWorldCodeFiles: !0 === KA(Tm).hasWorldCodeFiles,
-             hasLookedUp: (null !== (fm = null === (hm = Tm.lookups) || void 0 === hm ? void 0 : hm.length) && void 0 !== fm ? fm : 0) > 0,
-             movesToWorldCode: !0 === Tm.canChangeWorldCode,
-             listedPrefabs: nm,
-             guidesToPrefabs: !0 === QA(Tm).guide
-           })].filter((mm => "" !== mm)).join("\n\n"), Km, Dm.format, Dm.nativeTools)
+             hasWorldCodeFiles: !0 === Ms(zD).hasWorldCodeFiles,
+             hasLookedUp: (null !== (wD = null === (pD = zD.lookups) || void 0 === pD ? void 0 : pD.length) && void 0 !== wD ? wD : 0) > 0,
+             movesToWorldCode: !0 === zD.canChangeWorldCode,
+             listedPrefabs: ED,
+             guidesToPrefabs: !0 === Os(zD).guide
+           })].filter((DD => "" !== DD)).join("\n\n"), OD, cD.format, cD.nativeTools)
```

#### 221. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6117-L6120` → after: `L6117-L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6117-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6117-L6120) · [Before (L6117-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6117-L6120)

```diff
-       if (!pm)
-         for (const ym of Tm.history) Zm.push({
-           role: ym.role,
-           content: ym.text
+       if (!AD)
+         for (const WD of zD.history) PD.push({
+           role: WD.role,
+           content: WD.text
```

#### 222. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6122-L6130` → after: `L6122-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6122-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6122-L6130) · [Before (L6122-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6122-L6130)

```diff
-       const km = pm && !Rm && Tm.history.length > 0 ? `Earlier in this chat:\n${Tm.history.map((mm=>`${"user"===mm.role?"They asked":"You answered"}: ${mm.text}`)).join("\n")}\n\n` : "",
-         bm = null !== (Am = Tm.about) && void 0 !== Am && Am.notes.length ? `AI notes (notes they kept):\n${Tm.about.notes.map((mm=>`- ${mm}`)).join("\n")}\n\n` : "",
-         Sm = null !== (am = Tm.about) && void 0 !== am && am.outline ? `Outline of their code:\n${Tm.about.outline}\n\n` : "",
-         em = Tm.errors.length > 0 ? `\n\nErrors their world showed recently:\n${Tm.errors.slice(-5).join("\n")}` : "",
-         Nm = null === (xm = Tm.failedEdits) || void 0 === xm || !xm.length || pm && Rm ? "" : `\n\nWhat happened to your last answer's changes:\n${function(mm,Tm){return mm.map((mm=>FT[Tm].editFailure(mm.tool,aA(mm)))).join("\n\n")}(Tm.failedEdits,Dm.format)}`,
-         Gm = [...im ? zm : [], ...pm ? [Jm, cm] : []].filter((mm => "" !== mm)).map((mm => `${mm}\n\n`)).join(""),
-         Xm = null === (wm = Tm.lookups) || void 0 === wm || !wm.length || pm && Rm ? "" : `\n\nWhat you looked up for this request:\n${Pm=Tm.lookups,Hm=Dm.format,Pm.map((mm=>FT[Hm].lookupResult(mm.tool,mm.about,mm.text))).join("\n\n")}`;
-       var Pm, Hm;
-       return Zm.push({
+       const CD = AD && !RD && zD.history.length > 0 ? `Earlier in this chat:\n${zD.history.map((DD=>`${"user"===DD.role?"They asked":"You answered"}: ${DD.text}`)).join("\n")}\n\n` : "",
+         xD = null !== (sD = zD.about) && void 0 !== sD && sD.notes.length ? `AI notes (notes they kept):\n${zD.about.notes.map((DD=>`- ${DD}`)).join("\n")}\n\n` : "",
+         TD = null !== (KD = zD.about) && void 0 !== KD && KD.outline ? `Outline of their code:\n${zD.about.outline}\n\n` : "",
+         bD = zD.errors.length > 0 ? `\n\nErrors their world showed recently:\n${zD.errors.slice(-5).join("\n")}` : "",
+         jD = null === (rD = zD.failedEdits) || void 0 === rD || !rD.length || AD && RD ? "" : `\n\nWhat happened to your last answer's changes:\n${function(DD,zD){return DD.map((DD=>Hz[zD].editFailure(DD.tool,ss(DD)))).join("\n\n")}(zD.failedEdits,cD.format)}`,
+         dD = [...gD ? VD : [], ...AD ? [QD, XD] : []].filter((DD => "" !== DD)).map((DD => `${DD}\n\n`)).join(""),
+         SD = null === (LD = zD.lookups) || void 0 === LD || !LD.length || AD && RD ? "" : `\n\nWhat you looked up for this request:\n${iD=zD.lookups,lD=cD.format,iD.map((DD=>Hz[lD].lookupResult(DD.tool,DD.about,DD.text))).join("\n\n")}`;
+       var iD, lD;
+       return PD.push({
```

#### 223. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6132-L6133` → after: `L6132-L6133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6132-L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6132-L6133) · [Before (L6132-L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6132-L6133)

```diff
-         content: `${Gm}${bm}${Sm}${km}Their code now:\n${IA(Tm,Dm.format)}${em}${Nm}${Xm}${pm?JA(Tm,nm):""}\n\nTheir request: ${Tm.request}`
-       }), Zm
+         content: `${dD}${xD}${TD}${CD}Their code now:\n${ns(zD,cD.format)}${bD}${jD}${SD}${AD?Qs(zD,ED):""}\n\nTheir request: ${zD.request}`
+       }), PD
```

#### 224. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6135` → after: `L6135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6135) · [Before (L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6135)

```diff
-     var zA = fm(39753);
+     var Vs = wD(39585);
```

#### 225. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6137-L6138` → after: `L6137-L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6137-L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6137-L6138) · [Before (L6137-L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6137-L6138)

```diff
-     function ZA(mm) {
-       var Tm, fm, hm, Am, am, xm;
+     function Ps(DD) {
+       var zD, wD, pD, sD, KD, rD;
```

#### 226. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6140-L6142` → after: `L6140-L6142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6140-L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6140-L6142) · [Before (L6140-L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6140-L6142)

```diff
-         args: wm
-       } = mm;
-       switch (mm.name) {
+         args: LD
+       } = DD;
+       switch (DD.name) {
```

#### 227. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6144` → after: `L6144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6144) · [Before (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6144)

```diff
-           return null !== (Tm = wm.path) && void 0 !== Tm ? Tm : "a file";
+           return null !== (zD = LD.path) && void 0 !== zD ? zD : "a file";
```

#### 228. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6148` → after: `L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6148) · [Before (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6148)

```diff
-           return wm.position ? `the blocks near ${null!==(fm=null===(hm=(0,zA.g)(wm.position))||void 0===hm?void 0:hm.map(Math.floor).join(", "))&&void 0!==fm?fm:wm.position}` : "the blocks around you";
+           return LD.position ? `the blocks near ${null!==(wD=null===(pD=(0,Vs.f)(LD.position))||void 0===pD?void 0:pD.map(Math.floor).join(", "))&&void 0!==wD?wD:LD.position}` : "the blocks around you";
```

#### 229. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6152` → after: `L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6152) · [Before (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6152)

```diff
-           return wm.name ? `the docs for ${wm.name}` : `the list of ${bA(null!==(Am=wm.list)&&void 0!==Am?Am:kA)}`;
+           return LD.name ? `the docs for ${LD.name}` : `the list of ${xs(null!==(sD=LD.list)&&void 0!==sD?sD:Cs)}`;
```

#### 230. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6154-L6158` → after: `L6154-L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6154-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6154-L6158) · [Before (L6154-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6154-L6158)

```diff
-           return function(mm) {
-             const Tm = void 0 === mm ? null : Km(mm);
-             if (null === Tm) return null !== mm && void 0 !== mm ? mm : "a docs page";
-             return Qm(Tm) ? "the list of docs pages" : `the docs page ${function(mm){const Tm=(0,jm.y)(mm);return null===Tm?mm:`${Tm.name}${null===Tm.part?"":`/${Tm.part}`}`}(Tm)}`
-           }(wm.url);
+           return function(DD) {
+             const zD = void 0 === DD ? null : OD(DD);
+             if (null === zD) return null !== DD && void 0 !== DD ? DD : "a docs page";
+             return JD(zD) ? "the list of docs pages" : `the docs page ${function(DD){const zD=(0,hD.z)(DD);return null===zD?DD:`${zD.name}${null===zD.part?"":`/${zD.part}`}`}(zD)}`
+           }(LD.url);
```

#### 231. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6160` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6160) · [Before (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6160)

```diff
-           return `names for "${null!==(am=wm.words)&&void 0!==am?am:""}"`;
+           return `names for "${null!==(KD=LD.words)&&void 0!==KD?KD:""}"`;
```

#### 232. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6164` → after: `L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6164) · [Before (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6164)

```diff
-           return wm.category ? `the ready-made ${wm.category} games` : "the ready-made games";
+           return LD.category ? `the ready-made ${LD.category} games` : "the ready-made games";
```

#### 233. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6166` → after: `L6166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6166) · [Before (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6166)

```diff
-           return `the ready-made ${null!==(xm=wm.name)&&void 0!==xm?xm:"game"}`
+           return `the ready-made ${null!==(rD=LD.name)&&void 0!==rD?rD:"game"}`
```

#### 234. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6169` → after: `L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6169) · [Before (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6169)

```diff
-     const kA = "functions";
+     const Cs = "functions";
```

#### 235. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6171-L6172` → after: `L6171-L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6171-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6171-L6172) · [Before (L6171-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6171-L6172)

```diff
-     function bA(mm) {
-       return mm.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
+     function xs(DD) {
+       return DD.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
```

#### 236. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6175-L6176` → after: `L6175-L6176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6175-L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6175-L6176) · [Before (L6175-L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6175-L6176)

```diff
-     function SA(mm) {
-       return "get_docs" === mm.name || "fetch_url" === mm.name
+     function Ts(DD) {
+       return "get_docs" === DD.name || "fetch_url" === DD.name
```

#### 237. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6178-L6181` → after: `L6178-L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6178-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6178-L6181) · [Before (L6178-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6178-L6181)

```diff
-     async function eA(mm, Tm) {
-       var fm;
-       const hm = ZA(mm),
-         Am = Tm => ({
+     async function bs(DD, zD) {
+       var wD;
+       const pD = Ps(DD),
+         sD = zD => ({
```

#### 238. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6183-L6185` → after: `L6183-L6185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6183-L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6183-L6185) · [Before (L6183-L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6183-L6185)

```diff
-             tool: mm.name,
-             about: hm,
-             text: Tm
+             tool: DD.name,
+             about: pD,
+             text: zD
```

#### 239. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6188` → after: `L6188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6188) · [Before (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6188)

```diff
-       switch (mm.name) {
+       switch (DD.name) {
```

#### 240. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6190` → after: `L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6190) · [Before (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6190)

```diff
-           return Am((wm = mm.args.path, Dm = Tm.files, void 0 === wm ? "No path was given: give the path of a file from the list." : Object.hasOwn(Dm, wm) ? "" === Dm[wm] ? `${wm} is empty.` : Dm[wm] : `There is no file called ${wm}. Their files are: ${Object.keys(Dm).join(", ")} … [truncated]
+           return sD((LD = DD.args.path, cD = zD.files, void 0 === LD ? "No path was given: give the path of a file from the list." : Object.hasOwn(cD, LD) ? "" === cD[LD] ? `${LD} is empty.` : cD[LD] : `There is no file called ${LD}. Their files are: ${Object.keys(cD).join(", ")} … [truncated]
```

#### 241. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6192-L6197` → after: `L6192-L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6192-L6197) · [Before (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6192-L6197)

```diff
-           const mm = Tm.readWorldCode ? await Tm.readWorldCode() : null;
-           if (null === mm) return Am("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
-           const fm = Object.keys(mm).sort(),
-             hm = Object.fromEntries(fm.map((Tm => [`${Ym.j}${Tm}`, mm[Tm]]))),
-             am = fm.map((Tm => `${Ym.j}${Tm}:\n${""===mm[Tm]?"(empty)":mm[Tm]}`)).join("\n\n"),
-             xm = fm.length > 1 ? `\n\n${VA(fm,Ym.j)}` : "";
+           const DD = zD.readWorldCode ? await zD.readWorldCode() : null;
+           if (null === DD) return sD("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
+           const wD = Object.keys(DD).sort(),
+             pD = Object.fromEntries(wD.map((zD => [`${BD.k}${zD}`, DD[zD]]))),
+             KD = wD.map((zD => `${BD.k}${zD}:\n${""===DD[zD]?"(empty)":DD[zD]}`)).join("\n\n"),
+             rD = wD.length > 1 ? `\n\n${hs(wD,BD.k)}` : "";
```

#### 242. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6199-L6200` → after: `L6199-L6200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6199-L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6199-L6200) · [Before (L6199-L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6199-L6200)

```diff
-             ...Am("" === am ? `World Code has no code yet: ${Ym.j}index.js is empty.` : `${am}${xm}`),
-             worldCodeFiles: hm
+             ...sD("" === KD ? `World Code has no code yet: ${BD.k}index.js is empty.` : `${KD}${rD}`),
+             worldCodeFiles: pD
```

#### 243. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6204` → after: `L6204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6204) · [Before (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6204)

```diff
-           return Am(await Tm.viewChunk((0, zA.g)(mm.args.position)));
+           return sD(await zD.viewChunk((0, Vs.f)(DD.args.position)));
```

#### 244. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6206` → after: `L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6206) · [Before (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6206)

```diff
-           return Am(await Tm.viewGameState());
+           return sD(await zD.viewGameState());
```

#### 245. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6208-L6211` → after: `L6208-L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6208-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6208-L6211) · [Before (L6208-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6208-L6211)

```diff
-           return Am(function(mm, Tm, fm) {
-             if (void 0 === mm) {
-               const mm = (0, Jm.c)(VT, bA(null !== Tm && void 0 !== Tm ? Tm : kA));
-               return void 0 === mm ? `There is no list called ${Tm}: ask for ${IT}.` : fm.index(mm)
+           return sD(function(DD, zD, wD) {
+             if (void 0 === DD) {
+               const DD = (0, QD.d)(hz, xs(null !== zD && void 0 !== zD ? zD : Cs));
+               return void 0 === DD ? `There is no list called ${zD}: ask for ${nz}.` : wD.index(DD)
```

#### 246. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6213-L6217` → after: `L6213-L6217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6213-L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6213-L6217) · [Before (L6213-L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6213-L6217)

```diff
-             const hm = fm.section(mm);
-             if (hm) return hm.text;
-             const Am = fm.find(mm, "", 3).map((mm => mm.name)).join(", ");
-             return `Nothing is called ${mm}.${""===Am?"":` The closest names are: ${Am}.`}`
-           }(mm.args.name, mm.args.list, Tm.docs));
+             const pD = wD.section(DD);
+             if (pD) return pD.text;
+             const sD = wD.find(DD, "", 3).map((DD => DD.name)).join(", ");
+             return `Nothing is called ${DD}.${""===sD?"":` The closest names are: ${sD}.`}`
+           }(DD.args.name, DD.args.list, zD.docs));
```

#### 247. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6219` → after: `L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6219) · [Before (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6219)

```diff
-           return Am(await Tm.fetchDocsPage(null !== (fm = mm.args.url) && void 0 !== fm ? fm : ""));
+           return sD(await zD.fetchDocsPage(null !== (wD = DD.args.url) && void 0 !== wD ? wD : ""));
```

#### 248. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6221-L6223` → after: `L6221-L6223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6221-L6223) · [Before (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6221-L6223)

```diff
-           var am, xm;
-           const fm = Tm.docs.searchNames(null !== (am = mm.args.words) && void 0 !== am ? am : "", 20);
-           return Am(fm.length > 0 ? fm.join(", ") : `No block, item or mob name has any of the words "${null!==(xm=mm.args.words)&&void 0!==xm?xm:""}".`)
+           var KD, rD;
+           const wD = zD.docs.searchNames(null !== (KD = DD.args.words) && void 0 !== KD ? KD : "", 20);
+           return sD(wD.length > 0 ? wD.join(", ") : `No block, item or mob name has any of the words "${null!==(rD=DD.args.words)&&void 0!==rD?rD:""}".`)
```

#### 249. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6226` → after: `L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6226) · [Before (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6226)

```diff
-           return Am(Tm.errors.length > 0 ? Tm.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+           return sD(zD.errors.length > 0 ? zD.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
```

#### 250. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6228` → after: `L6228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6228) · [Before (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6228)

```diff
-           return Am(Sh(mm.args.category));
+           return sD(Cp(DD.args.category));
```

#### 251. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6230-L6233` → after: `L6230-L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6230-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6230-L6233) · [Before (L6230-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6230-L6233)

```diff
-           return Am(function(mm, Tm) {
-             const fm = void 0 === mm ? null : Vh(mm);
-             return fm ? eh(fm, Tm) : `There is no prefab called ${null!==mm&&void 0!==mm?mm:"that"}.\n${Sh()}`
-           }(mm.args.name, !0 === Tm.showPrefabCode))
+           return sD(function(DD, zD) {
+             const wD = void 0 === DD ? null : Gp(DD);
+             return wD ? xp(wD, zD) : `There is no prefab called ${null!==DD&&void 0!==DD?DD:"that"}.\n${Cp()}`
+           }(DD.args.name, !0 === zD.showPrefabCode))
```

#### 252. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6235` → after: `L6235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6235) · [Before (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6235)

```diff
-       var wm, Dm
+       var LD, cD
```

#### 253. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6237` → after: `L6237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6237) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6237)

```diff
-     const NA = [
+     const ds = [
```

#### 254. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6263-L6320` → after: `L6263-L6320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6263-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6263-L6320) · [Before (L6263-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6263-L6320)

```diff
-     function GA(mm) {
-       let Tm = mm;
-       for (const [fm, hm] of NA) Tm = Tm.replace(fm, (mm => mm.length > 1 && mm[0] !== mm[0].toLowerCase() && mm.slice(1) === mm.slice(1).toLowerCase() ? hm[0].toUpperCase() + hm.slice(1) : hm));
-       return Tm
-     }
-     const XA = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       PA = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       HA = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       yA = 12e3,
-       CA = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function rA(mm) {
-       var Tm, fm, hm;
-       const Am = null === (Tm = /Safety:\s*(\w+)/.exec(mm)) || void 0 === Tm ? void 0 : Tm[1],
-         am = null !== (fm = null === (hm = /Categories:\s*(.+)/.exec(mm)) || void 0 === hm ? void 0 : hm[1]) && void 0 !== fm ? fm : "";
-       return /PII/.test(am) ? "personalInfo" : "Unsafe" === Am || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(am) ? "unsafe" : "ok"
- ... (42 more removed lines; see GitHub link above)
+     function Ss(DD) {
+       let zD = DD;
+       for (const [wD, pD] of ds) zD = zD.replace(wD, (DD => DD.length > 1 && DD[0] !== DD[0].toLowerCase() && DD.slice(1) === DD.slice(1).toLowerCase() ? pD[0].toUpperCase() + pD.slice(1) : pD));
+       return zD
+     }
+     const is = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       ls = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       Ws = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       Ns = 12e3,
+       Zs = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function ys(DD) {
+       var zD, wD, pD;
+       const sD = null === (zD = /Safety:\s*(\w+)/.exec(DD)) || void 0 === zD ? void 0 : zD[1],
+         KD = null !== (wD = null === (pD = /Categories:\s*(.+)/.exec(DD)) || void 0 === pD ? void 0 : pD[1]) && void 0 !== wD ? wD : "";
+       return /PII/.test(KD) ? "personalInfo" : "Unsafe" === sD || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(KD) ? "unsafe" : "ok"
+ ... (42 more added lines; see GitHub link above)
```

#### 255. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6322-L6325` → after: `L6322-L6325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6322-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6322-L6325) · [Before (L6322-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6322-L6325)

```diff
-           if ("\n" === Tm) break;
-           if (fm) fm = "]" !== Tm;
-           else if ("[" === Tm) fm = !0;
-           else if ("/" === Tm) return hm + 1
+           if ("\n" === zD) break;
+           if (wD) wD = "]" !== zD;
+           else if ("[" === zD) wD = !0;
+           else if ("/" === zD) return pD + 1
```

#### 256. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6328-L6349` → after: `L6328-L6349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6328-L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6328-L6349) · [Before (L6328-L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6328-L6349)

```diff
-       return Tm + 1
-     }
- 
-     function vA(mm, Tm, fm, hm) {
-       let Am = Tm,
-         am = 0;
-       for (; Am < mm.length;) {
-         const Tm = mm[Am],
-           xm = mm[Am + 1];
-         if ("/" === Tm && "/" === xm) {
-           const Tm = mm.indexOf("\n", Am);
-           hm.push(mm.slice(Am + 2, -1 === Tm ? mm.length : Tm)), Am = -1 === Tm ? mm.length : Tm
-         } else if ("/" === Tm && "*" === xm) {
-           const Tm = mm.indexOf("*/", Am + 2);
-           hm.push(mm.slice(Am + 2, -1 === Tm ? mm.length : Tm)), Am = -1 === Tm ? mm.length : Tm + 2
-         } else if ("/" === Tm && BA(mm, Am)) Am = LA(mm, Am);
- ... (6 more removed lines; see GitHub link above)
+       return zD + 1
+     }
+ 
+     function vs(DD, zD, wD, pD) {
+       let sD = zD,
+         KD = 0;
+       for (; sD < DD.length;) {
+         const zD = DD[sD],
+           rD = DD[sD + 1];
+         if ("/" === zD && "/" === rD) {
+           const zD = DD.indexOf("\n", sD);
+           pD.push(DD.slice(sD + 2, -1 === zD ? DD.length : zD)), sD = -1 === zD ? DD.length : zD
+         } else if ("/" === zD && "*" === rD) {
+           const zD = DD.indexOf("*/", sD + 2);
+           pD.push(DD.slice(sD + 2, -1 === zD ? DD.length : zD)), sD = -1 === zD ? DD.length : zD + 2
+         } else if ("/" === zD && as(DD, sD)) sD = us(DD, sD);
+ ... (6 more added lines; see GitHub link above)
```

#### 257. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6351-L6354` → after: `L6351-L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6351-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6351-L6354) · [Before (L6351-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6351-L6354)

```diff
-           if (fm && "{" === Tm) am++;
-           else if (fm && "}" === Tm) {
-             if (0 === am) return Am + 1;
-             am--
+           if (wD && "{" === zD) KD++;
+           else if (wD && "}" === zD) {
+             if (0 === KD) return sD + 1;
+             KD--
```

#### 258. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6356` → after: `L6356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6356) · [Before (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6356)

```diff
-           Am++
+           sD++
```

#### 259. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6359` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6359) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6359)

```diff
-       return Am
+       return sD
```

#### 260. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6361-L6365` → after: `L6361-L6365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6361-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6361-L6365) · [Before (L6361-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6361-L6365)

```diff
-     const tA = 4e5;
-     var UA = fm(41531);
-     const dA = 15e3;
-     let gA = [],
-       WA = null;
+     const ts = 4e5;
+     var Fs = wD(41382);
+     const Ys = 15e3;
+     let Hs = [],
+       qs = null;
```

#### 261. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6367-L6368` → after: `L6367-L6368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6367-L6368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6367-L6368) · [Before (L6367-L6368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6367-L6368)

```diff
-     function FA(mm) {
-       return Math.ceil(mm.length / 4)
+     function DK(DD) {
+       return Math.ceil(DD.length / 4)
```

#### 262. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6371-L6372` → after: `L6371-L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6371-L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6371-L6372) · [Before (L6371-L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6371-L6372)

```diff
-     function ma(mm) {
-       return "number" === typeof mm && Number.isInteger(mm) && mm >= 0
+     function zK(DD) {
+       return "number" === typeof DD && Number.isInteger(DD) && DD >= 0
```

#### 263. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6375-L6378` → after: `L6375-L6378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6375-L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6375-L6378) · [Before (L6375-L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6375-L6378)

```diff
-     function Ta(mm, Tm, fm) {
-       var hm;
-       let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ! function(mm) {
+     function wK(DD, zD, wD) {
+       var pD;
+       let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(DD) {
```

#### 264. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6380-L6385` → after: `L6380-L6385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6380-L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6380-L6385) · [Before (L6380-L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6380-L6385)

```diff
-         if (gA.push(mm), gA.length >= 40) return void fa();
-         WA ??= setTimeout((() => {
-           fa()
-         }), dA)
-       }(null !== (hm = function(mm) {
-         if (null === mm || "object" !== typeof mm) return null;
+         if (Hs.push(DD), Hs.length >= 40) return void pK();
+         qs ??= setTimeout((() => {
+           pK()
+         }), Ys)
+       }(null !== (pD = function(DD) {
+         if (null === DD || "object" !== typeof DD) return null;
```

#### 265. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6387-L6392` → after: `L6387-L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6387-L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6387-L6392) · [Before (L6387-L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6387-L6392)

```diff
-           prompt_tokens: Tm,
-           completion_tokens: fm,
-           prompt_tokens_details: hm
-         } = mm;
-         if (!ma(Tm) || !ma(fm)) return null;
-         const Am = null !== hm && "object" === typeof hm ? hm.cached_tokens : void 0;
+           prompt_tokens: zD,
+           completion_tokens: wD,
+           prompt_tokens_details: pD
+         } = DD;
+         if (!zK(zD) || !zK(wD)) return null;
+         const sD = null !== pD && "object" === typeof pD ? pD.cached_tokens : void 0;
```

#### 266. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6394-L6396` → after: `L6394-L6396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6394-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6394-L6396) · [Before (L6394-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6394-L6396)

```diff
-           sent: Tm,
-           cached: ma(Am) ? Am : 0,
-           received: fm
+           sent: zD,
+           cached: zK(sD) ? sD : 0,
+           received: wD
```

#### 267. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6398-L6399` → after: `L6398-L6399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6398-L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6398-L6399) · [Before (L6398-L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6398-L6399)

```diff
-       }(mm)) && void 0 !== hm ? hm : {
-         sent: FA(JSON.stringify(Tm)),
+       }(DD)) && void 0 !== pD ? pD : {
+         sent: DK(JSON.stringify(zD)),
```

#### 268. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6401` → after: `L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6401) · [Before (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6401)

```diff
-         received: FA(fm) + Am
+         received: DK(wD) + sD
```

#### 269. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6404-L6411` → after: `L6404-L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6404-L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6404-L6411) · [Before (L6404-L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6404-L6411)

```diff
-     async function fa() {
-       null !== WA && (clearTimeout(WA), WA = null);
-       const mm = gA.slice(0, 40);
-       if (gA = gA.slice(40), gA.length > 0 && (WA = setTimeout((() => {
-           fa()
-         }), dA)), 0 !== mm.length) try {
-         await (0, UA.postToGameServer)("/ai-helper/usage", {
-           calls: mm
+     async function pK() {
+       null !== qs && (clearTimeout(qs), qs = null);
+       const DD = Hs.slice(0, 40);
+       if (Hs = Hs.slice(40), Hs.length > 0 && (qs = setTimeout((() => {
+           pK()
+         }), Ys)), 0 !== DD.length) try {
+         await (0, Fs.postToGameServer)("/ai-helper/usage", {
+           calls: DD
```

#### 270. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6415-L6416` → after: `L6415-L6416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6415-L6416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6415-L6416) · [Before (L6415-L6416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6415-L6416)

```diff
-     const ha = 6e4;
-     const Aa = new class {
+     const sK = 6e4;
+     const KK = new class {
```

#### 271. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6420-L6422` → after: `L6420-L6422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6420-L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6420-L6422) · [Before (L6420-L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6420-L6422)

```diff
-       record(mm) {
-         let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         this.calls.set(mm, [...this.recent(mm, Tm), Tm])
+       record(DD) {
+         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(DD, [...this.recent(DD, zD), zD])
```

#### 272. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6424-L6428` → after: `L6424-L6428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6424-L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6424-L6428) · [Before (L6424-L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6424-L6428)

```diff
-       markFull(mm) {
-         var Tm;
-         let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
-           hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.fullUntil.set(mm, Math.max(null !== (Tm = this.fullUntil.get(mm)) && void 0 !== Tm ? Tm : 0, fm + Math.max(hm, ha)))
+       markFull(DD) {
+         var zD;
+         let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(DD, Math.max(null !== (zD = this.fullUntil.get(DD)) && void 0 !== zD ? zD : 0, wD + Math.max(pD, sK)))
```

#### 273. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6430-L6432` → after: `L6430-L6432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6430-L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6430-L6432) · [Before (L6430-L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6430-L6432)

```diff
-       callsInLastMinute(mm) {
-         let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return this.recent(mm, Tm).length
+       callsInLastMinute(DD) {
+         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(DD, zD).length
```

#### 274. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6434-L6439` → after: `L6434-L6439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6434-L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6434-L6439) · [Before (L6434-L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6434-L6439)

```diff
-       freeAt(mm) {
-         var Tm;
-         let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const hm = this.recent(mm, fm),
-           Am = hm.length < 2 ? fm : hm[hm.length - 2] + ha;
-         return Math.max(Am, null !== (Tm = this.fullUntil.get(mm)) && void 0 !== Tm ? Tm : 0, fm)
+       freeAt(DD) {
+         var zD;
+         let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const pD = this.recent(DD, wD),
+           sD = pD.length < 2 ? wD : pD[pD.length - 2] + sK;
+         return Math.max(sD, null !== (zD = this.fullUntil.get(DD)) && void 0 !== zD ? zD : 0, wD)
```

#### 275. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6441-L6443` → after: `L6441-L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6441-L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6441-L6443) · [Before (L6441-L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6441-L6443)

```diff
-       firstFreeAt(mm) {
-         let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...mm.map((mm => this.freeAt(mm, Tm))))
+       firstFreeAt(DD) {
+         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...DD.map((DD => this.freeAt(DD, zD))))
```

#### 276. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6448-L6450` → after: `L6448-L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6448-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6448-L6450) · [Before (L6448-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6448-L6450)

```diff
-       recent(mm, Tm) {
-         var fm;
-         return (null !== (fm = this.calls.get(mm)) && void 0 !== fm ? fm : []).filter((mm => Tm - mm < ha))
+       recent(DD, zD) {
+         var wD;
+         return (null !== (wD = this.calls.get(DD)) && void 0 !== wD ? wD : []).filter((DD => zD - DD < sK))
```

#### 277. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6454-L6455` → after: `L6454-L6455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6454-L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6454-L6455) · [Before (L6454-L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6454-L6455)

```diff
-     function aa(mm) {
-       return mm > 36e5
+     function rK(DD) {
+       return DD > 36e5
```

#### 278. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6458-L6461` → after: `L6458-L6461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6458-L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6458-L6461) · [Before (L6458-L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6458-L6461)

```diff
-     function xa(mm, Tm) {
-       var fm;
-       const hm = null === (fm = mm.headers.get(Tm)) || void 0 === fm ? void 0 : fm.trim();
-       return void 0 !== hm && /^\d+$/.test(hm) ? Number(hm) : null
+     function LK(DD, zD) {
+       var wD;
+       const pD = null === (wD = DD.headers.get(zD)) || void 0 === wD ? void 0 : wD.trim();
+       return void 0 !== pD && /^\d+$/.test(pD) ? Number(pD) : null
```

#### 279. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6464-L6467` → after: `L6464-L6467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6464-L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6464-L6467) · [Before (L6464-L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6464-L6467)

```diff
-     function wa(mm) {
-       var Tm;
-       const fm = null !== (Tm = xa(mm, "retry-after")) && void 0 !== Tm ? Tm : xa(mm, "ratelimit-reset");
-       return null === fm ? null : 1e3 * fm
+     function cK(DD) {
+       var zD;
+       const wD = null !== (zD = LK(DD, "retry-after")) && void 0 !== zD ? zD : LK(DD, "ratelimit-reset");
+       return null === wD ? null : 1e3 * wD
```

#### 280. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6470-L6473` → after: `L6470-L6473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6470-L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6470-L6473) · [Before (L6470-L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6470-L6473)

```diff
-     function Da(mm, Tm) {
-       var fm;
-       const hm = null !== (fm = wa(Tm)) && void 0 !== fm ? fm : 0;
-       (429 === Tm.status || aa(hm) && 0 === xa(Tm, "ratelimit-remaining")) && Aa.markFull(mm, Date.now(), hm)
+     function gK(DD, zD) {
+       var wD;
+       const pD = null !== (wD = cK(zD)) && void 0 !== wD ? wD : 0;
+       (429 === zD.status || rK(pD) && 0 === LK(zD, "ratelimit-remaining")) && KK.markFull(DD, Date.now(), pD)
```

#### 281. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6476-L6479` → after: `L6476-L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6476-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6476-L6479) · [Before (L6476-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6476-L6479)

```diff
-     function ia(mm) {
-       const Tm = Date.now(),
-         fm = Aa.freeAt(mm, Tm) - Tm;
-       return fm <= 0 ? null : aa(fm) ? "unavailable" : "busy"
+     function RK(DD) {
+       const zD = Date.now(),
+         wD = KK.freeAt(DD, zD) - zD;
+       return wD <= 0 ? null : rK(wD) ? "unavailable" : "busy"
```

#### 282. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6482-L6483` → after: `L6482-L6483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6482-L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6482-L6483) · [Before (L6482-L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6482-L6483)

```diff
-     function Ra(mm, Tm) {
-       return `${function(mm){var Tm;if("string"===typeof mm)return mm;if(429!==mm.status)return`http-${mm.status}`;if(aa(null!==(Tm=wa(mm))&&void 0!==Tm?Tm:0))return"yearly-limit";const fm=xa(mm,"retry-after");return null===fm?"busy":`busy-ra${fm}`}(Tm)}__${mm.replace(/[^A-Za-z0- … [truncated]
+     function AK(DD, zD) {
+       return `${function(DD){var zD;if("string"===typeof DD)return DD;if(429!==DD.status)return`http-${DD.status}`;if(rK(null!==(zD=cK(DD))&&void 0!==zD?zD:0))return"yearly-limit";const wD=LK(DD,"retry-after");return null===wD?"busy":`busy-ra${wD}`}(zD)}__${DD.replace(/[^A-Za-z0- … [truncated]
```

#### 283. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6485-L6487` → after: `L6485-L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6485-L6487) · [Before (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6485-L6487)

```diff
-     const pa = new class {
-         constructor(mm) {
-           this.loadReporter = mm, this.reportedCodes = new Set
+     const UK = new class {
+         constructor(DD) {
+           this.loadReporter = DD, this.reportedCodes = new Set
```

#### 284. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6489-L6491` → after: `L6489-L6491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6489-L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6489-L6491) · [Before (L6489-L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6489-L6491)

```diff
-         IO(mm, Tm) {
-           const fm = Ra(mm, Tm);
-           "undefined" === typeof window || this.reportedCodes.has(fm) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(fm), this.loadReporter().then((Tm => {
+         sI(DD, zD) {
+           const wD = AK(DD, zD);
+           "undefined" === typeof window || this.reportedCodes.has(wD) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(wD), this.loadReporter().then((zD => {
```

#### 285. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6493-L6497` → after: `L6493-L6497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6493-L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6493-L6497) · [Before (L6493-L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6493-L6497)

```diff
-               reportCappedWasmFailure: hm
-             } = Tm;
-             hm("ai_helper_failed", `World Code AI: ${mm} failed`, fm)
-           })).catch((mm => {
-             console.error("World Code AI: couldn't report a failure", mm)
+               reportCappedWasmFailure: pD
+             } = zD;
+             pD("ai_helper_failed", `World Code AI: ${DD} failed`, wD)
+           })).catch((DD => {
+             console.error("World Code AI: couldn't report a failure", DD)
```

#### 286. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6500-L6512` → after: `L6500-L6512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6500-L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6500-L6512) · [Before (L6500-L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6500-L6512)

```diff
-       }((() => fm.e(209).then((() => fm(36340))))),
-       Ea = /\n{3,}/,
-       oa = /<tool_call\b|<function=/;
- 
-     function Oa(mm) {
-       const Tm = mm.trimStart(),
-         fm = Ea.exec(Tm),
-         hm = oa.exec(Tm);
-       if (null === fm || null !== hm && hm.index < fm.index) return null;
-       const Am = Tm.slice(fm.index + fm[0].length);
-       return "" === Am.trim() ? null : Am
-     }
-     const Ya = [{
+       }((() => wD.e(209).then((() => wD(36240))))),
+       fK = /\n{3,}/,
+       IK = /<tool_call\b|<function=/;
+ 
+     function BK(DD) {
+       const zD = DD.trimStart(),
+         wD = fK.exec(zD),
+         pD = IK.exec(zD);
+       if (null === wD || null !== pD && pD.index < wD.index) return null;
+       const sD = zD.slice(wD.index + wD[0].length);
+       return "" === sD.trim() ? null : sD
+     }
+     const GK = [{
```

#### 287. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6531` → after: `L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6531) · [Before (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6531)

```diff
-     const qa = {
+     const hK = {
```

#### 288. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6538-L6539` → after: `L6538-L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6538-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6538-L6539) · [Before (L6538-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6538-L6539)

```diff
-     function ja(mm) {
-       return [...Ya, qa].find((Tm => Tm.name === mm))
+     function nK(DD) {
+       return [...GK, hK].find((zD => zD.name === DD))
```

#### 289. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6542-L6544` → after: `L6542-L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6542-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6542-L6544) · [Before (L6542-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6542-L6544)

```diff
-     function Va(mm) {
-       var Tm, fm;
-       return null !== (Tm = null === (fm = ja(mm)) || void 0 === fm ? void 0 : fm.callFormat) && void 0 !== Tm ? Tm : "simple"
+     function MK(DD) {
+       var zD, wD;
+       return null !== (zD = null === (wD = nK(DD)) || void 0 === wD ? void 0 : wD.callFormat) && void 0 !== zD ? zD : "simple"
```

#### 290. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6547-L6548` → after: `L6547-L6548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6547-L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6547-L6548) · [Before (L6547-L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6547-L6548)

```diff
-     function Ia(mm) {
-       var Tm;
+     function OK(DD) {
+       var zD;
```

#### 291. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6550-L6551` → after: `L6550-L6551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6550-L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6550-L6551) · [Before (L6550-L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6550-L6551)

```diff
-         format: null !== (Tm = mm.callFormat) && void 0 !== Tm ? Tm : "simple",
-         nativeTools: !0 === mm.nativeTools
+         format: null !== (zD = DD.callFormat) && void 0 !== zD ? zD : "simple",
+         nativeTools: !0 === DD.nativeTools
```

#### 292. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6555-L6556` → after: `L6555-L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6555-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6555-L6556) · [Before (L6555-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6555-L6556)

```diff
-     function Ka(mm, Tm) {
-       return "function" === typeof mm ? mm(Tm) : mm
+     function JK(DD, zD) {
+       return "function" === typeof DD ? DD(zD) : DD
```

#### 293. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6558-L6564` → after: `L6558-L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6558-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6558-L6564) · [Before (L6558-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6558-L6564)

```diff
-     const Qa = "TOO_COMPLEX",
-       na = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${Qa} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       Ja = 24e4,
-       ca = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class za extends Error {
-       constructor(mm) {
-         super(`World Code AI ${mm}`), this.reason = mm
+     const EK = "TOO_COMPLEX",
+       QK = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${EK} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       XK = 24e4,
+       VK = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class PK extends Error {
+       constructor(DD) {
+         super(`World Code AI ${DD}`), this.reason = DD
```

#### 294. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6568-L6569` → after: `L6568-L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6568-L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6568-L6569) · [Before (L6568-L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6568-L6569)

```diff
-     function Za(mm) {
-       switch (mm) {
+     function CK(DD) {
+       switch (DD) {
```

#### 295. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6584-L6586` → after: `L6584-L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6584-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6584-L6586) · [Before (L6584-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6584-L6586)

```diff
-     function ka(mm, Tm) {
-       var fm, hm, Am, am, xm;
-       const wm = mm[null !== (fm = Tm.index) && void 0 !== fm ? fm : 0] ??= {
+     function xK(DD, zD) {
+       var wD, pD, sD, KD, rD;
+       const LD = DD[null !== (wD = zD.index) && void 0 !== wD ? wD : 0] ??= {
```

#### 296. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6590` → after: `L6590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6590) · [Before (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6590)

```diff
-       wm.name += null !== (hm = null === (Am = Tm.function) || void 0 === Am ? void 0 : Am.name) && void 0 !== hm ? hm : "", wm.args += null !== (am = null === (xm = Tm.function) || void 0 === xm ? void 0 : xm.arguments) && void 0 !== am ? am : ""
+       LD.name += null !== (pD = null === (sD = zD.function) || void 0 === sD ? void 0 : sD.name) && void 0 !== pD ? pD : "", LD.args += null !== (KD = null === (rD = zD.function) || void 0 === rD ? void 0 : rD.arguments) && void 0 !== KD ? KD : ""
```

#### 297. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6593-L6594` → after: `L6593-L6594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6593-L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6593-L6594) · [Before (L6593-L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6593-L6594)

```diff
-     function ba(mm) {
-       return "mcp" === mm ? "simple" : mm
+     function TK(DD) {
+       return "mcp" === DD ? "simple" : DD
```

#### 298. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6597-L6599` → after: `L6597-L6599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6597-L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6597-L6599) · [Before (L6597-L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6597-L6599)

```diff
-     function Sa(mm, Tm, fm, hm) {
-       let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return ea(mm, Tm, fm, ba(hm), Am).answer
+     function bK(DD, zD, wD, pD) {
+       let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return jK(DD, zD, wD, TK(pD), sD).answer
```

#### 299. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6602-L6605` → after: `L6602-L6605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6602-L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6602-L6605) · [Before (L6602-L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6602-L6605)

```diff
-     function ea(mm, Tm, fm, hm, Am) {
-       const am = fm.flatMap((mm => {
-         const Tm = Ef(mm.name, mm.args);
-         return null === Tm ? [] : [hA(ff(hm), Tm.name, Tm.args)]
+     function jK(DD, zD, wD, pD, sD) {
+       const KD = wD.flatMap((DD => {
+         const zD = Aw(DD.name, DD.args);
+         return null === zD ? [] : [ws(zw(pD), zD.name, zD.args)]
```

#### 300. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6607-L6614` → after: `L6607-L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6607-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6607-L6614) · [Before (L6607-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6607-L6614)

```diff
-       let xm = !1;
-       return 0 !== am.length || 0 !== Of(mm, hm).length || mm.includes("```") || (am.push(...Am ? [] : function(mm, Tm) {
-         let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const hm = new Map;
-         for (const wm of of(mm, Tm)) {
-           const mm = Object.values(wm.args).some((mm => void 0 !== mm && fm.includes(mm.trim())));
-           var Am, am, xm;
-           "export_game" === wm.name || "switch_to_world_code" === wm.name || JT(wm.name) || mm || hm.set(`${wm.name} ${null!==(Am=wm.args.path)&&void 0!==Am?Am:""} ${null!==(am=wm.args.search)&&void 0!==am?am:""} ${null!==(xm=wm.args.name)&&void 0!==xm?xm:""}`, wm.source)
+       let rD = !1;
+       return 0 !== KD.length || 0 !== fw(DD, pD).length || DD.includes("```") || (KD.push(...sD ? [] : function(DD, zD) {
+         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const pD = new Map;
+         for (const LD of Uw(DD, zD)) {
+           const DD = Object.values(LD.args).some((DD => void 0 !== DD && wD.includes(DD.trim())));
+           var sD, KD, rD;
+           "export_game" === LD.name || "switch_to_world_code" === LD.name || Ez(LD.name) || DD || pD.set(`${LD.name} ${null!==(sD=LD.args.path)&&void 0!==sD?sD:""} ${null!==(KD=LD.args.search)&&void 0!==KD?KD:""} ${null!==(rD=LD.args.name)&&void 0!==rD?rD:""}`, LD.source)
```

#### 301. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6616-L6619` → after: `L6616-L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6616-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6616-L6619) · [Before (L6616-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6616-L6619)

```diff
-         return [...new Set(hm.values())]
-       }(Tm, hm, oA)), xm = am.length > 0), {
-         answer: [mm, ...am].join("\n\n").trim(),
-         hasCallsFromReasoning: xm
+         return [...new Set(pD.values())]
+       }(zD, pD, Us)), rD = KD.length > 0), {
+         answer: [DD, ...KD].join("\n\n").trim(),
+         hasCallsFromReasoning: rD
```

#### 302. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6622-L6625` → after: `L6622-L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6622-L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6622-L6625) · [Before (L6622-L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6622-L6625)

```diff
-     async function Na(mm, Tm) {
-       const fm = mm.getReader(),
-         hm = new TextDecoder;
-       let Am = "";
+     async function dK(DD, zD) {
+       const wD = DD.getReader(),
+         pD = new TextDecoder;
+       let sD = "";
```

#### 303. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6628-L6632` → after: `L6628-L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6628-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6628-L6632) · [Before (L6628-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6628-L6632)

```diff
-           done: mm,
-           value: am
-         } = await fm.read();
-         if (mm) break;
-         Am += hm.decode(am, {
+           done: DD,
+           value: KD
+         } = await wD.read();
+         if (DD) break;
+         sD += pD.decode(KD, {
```

#### 304. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6635-L6641` → after: `L6635-L6641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6635-L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6635-L6641) · [Before (L6635-L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6635-L6641)

```diff
-         let xm = Am.indexOf("\n");
-         for (; - 1 !== xm;) {
-           const mm = Am.slice(0, xm).trim();
-           if (Am = Am.slice(xm + 1), xm = Am.indexOf("\n"), !mm.startsWith("data:")) continue;
-           const fm = mm.slice(5).trim();
-           if ("[DONE]" === fm) return;
-           let hm;
+         let rD = sD.indexOf("\n");
+         for (; - 1 !== rD;) {
+           const DD = sD.slice(0, rD).trim();
+           if (sD = sD.slice(rD + 1), rD = sD.indexOf("\n"), !DD.startsWith("data:")) continue;
+           const wD = DD.slice(5).trim();
+           if ("[DONE]" === wD) return;
+           let pD;
```

#### 305. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6643` → after: `L6643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6643) · [Before (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6643)

```diff
-             hm = JSON.parse(fm)
+             pD = JSON.parse(wD)
```

#### 306. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6647` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6647) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6647)

```diff
-           Tm(hm)
+           zD(pD)
```

#### 307. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6652-L6653` → after: `L6652-L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6652-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6652-L6653) · [Before (L6652-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6652-L6653)

```diff
-     function Ga(mm) {
-       return mm.map((mm => ({
+     function SK(DD) {
+       return DD.map((DD => ({
```

#### 308. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6656-L6658` → after: `L6656-L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6656-L6658) · [Before (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6656-L6658)

```diff
-           name: mm.name,
-           description: mm.description,
-           parameters: mm.inputSchema
+           name: DD.name,
+           description: DD.description,
+           parameters: DD.inputSchema
```

#### 309. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6663-L6664` → after: `L6663-L6664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6663-L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6663-L6664) · [Before (L6663-L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6663-L6664)

```diff
-     function Xa(mm) {
-       return "object" === typeof mm
+     function iK(DD) {
+       return "object" === typeof DD
```

#### 310. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6666-L6671` → after: `L6666-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6666-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6666-L6671) · [Before (L6666-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6666-L6671)

```diff
-     async function Pa(mm, Tm, fm, hm) {
-       let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const am = ia(mm.name);
-       if (null !== am) return am;
-       Aa.record(mm.name);
-       const xm = await fetch(XA, {
+     async function lK(DD, zD, wD, pD) {
+       let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const KD = RK(DD.name);
+       if (null !== KD) return KD;
+       KK.record(DD.name);
+       const rD = await fetch(is, {
```

#### 311. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6677-L6678` → after: `L6677-L6678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6677-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6677-L6678) · [Before (L6677-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6677-L6678)

```diff
-           model: mm.name,
-           messages: Tm,
+           model: DD.name,
+           messages: zD,
```

#### 312. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6680-L6681` → after: `L6680-L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6680-L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6680-L6681) · [Before (L6680-L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6680-L6681)

```diff
-           temperature: mm.temperature,
-           reasoning_effort: mm.reasoningEffort,
+           temperature: DD.temperature,
+           reasoning_effort: DD.reasoningEffort,
```

#### 313. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6686-L6687` → after: `L6686-L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6686-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6686-L6687) · [Before (L6686-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6686-L6687)

```diff
-           ...mm.nativeTools && Am.length > 0 ? {
-             tools: Ga(Am)
+           ...DD.nativeTools && sD.length > 0 ? {
+             tools: SK(sD)
```

#### 314. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6692` → after: `L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6692) · [Before (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6692)

```diff
-         signal: fm
+         signal: wD
```

#### 315. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6694-L6702` → after: `L6694-L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6694-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6694-L6702) · [Before (L6694-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6694-L6702)

```diff
-       if (Da(mm.name, xm), 429 === xm.status) return pa.IO(mm.name, xm), "unavailable" === ia(mm.name) ? "unavailable" : "busy";
-       if (!xm.ok || !xm.body) return console.warn(`World Code AI: ${mm.name} answered ${xm.status}`), pa.IO(mm.name, xm.ok ? "empty" : xm), xm.ok ? "failed" : 429 === (wm = xm.status) ? "busy" : 400 === wm || 413 === wm ? "tooLarge" : 401 === wm || 403 === wm ? "turnedAway" : "fa … [truncated]
-       var wm;
-       let Dm = "",
-         im = "";
-       const Rm = [];
-       let pm = !1,
-         Em = !1,
-         om = null;
+       if (gK(DD.name, rD), 429 === rD.status) return UK.sI(DD.name, rD), "unavailable" === RK(DD.name) ? "unavailable" : "busy";
+       if (!rD.ok || !rD.body) return console.warn(`World Code AI: ${DD.name} answered ${rD.status}`), UK.sI(DD.name, rD.ok ? "empty" : rD), rD.ok ? "failed" : 429 === (LD = rD.status) ? "busy" : 400 === LD || 413 === LD ? "tooLarge" : 401 === LD || 403 === LD ? "turnedAway" : "fa … [truncated]
+       var LD;
+       let cD = "",
+         gD = "";
+       const RD = [];
+       let AD = !1,
+         UD = !1,
+         fD = null;
```

#### 316. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6704-L6710` → after: `L6704-L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6704-L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6704-L6710) · [Before (L6704-L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6704-L6710)

```diff
-         await async function(mm, Tm, fm) {
-           await Na(mm, (mm => {
-             var hm;
-             const Am = mm,
-               am = null === (hm = Am.choices) || void 0 === hm ? void 0 : hm[0];
-             var xm, wm;
-             am && Tm(null !== (xm = am.delta) && void 0 !== xm ? xm : {}, null !== (wm = am.finish_reason) && void 0 !== wm ? wm : null), Am.usage && (null === fm || void 0 === fm || fm(Am.usage))
+         await async function(DD, zD, wD) {
+           await dK(DD, (DD => {
+             var pD;
+             const sD = DD,
+               KD = null === (pD = sD.choices) || void 0 === pD ? void 0 : pD[0];
+             var rD, LD;
+             KD && zD(null !== (rD = KD.delta) && void 0 !== rD ? rD : {}, null !== (LD = KD.finish_reason) && void 0 !== LD ? LD : null), sD.usage && (null === wD || void 0 === wD || wD(sD.usage))
```

#### 317. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6712-L6717` → after: `L6712-L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6712-L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6712-L6717) · [Before (L6712-L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6712-L6717)

```diff
-         }(xm.body, ((Tm, fm) => {
-           var Am, am, xm, wm;
-           pm ||= "length" === fm, im += null !== (Am = null !== (am = Tm.reasoning) && void 0 !== am ? am : Tm.reasoning_content) && void 0 !== Am ? Am : "", Dm += null !== (xm = Tm.content) && void 0 !== xm ? xm : "";
-           for (const mm of null !== (om = Tm.tool_calls) && void 0 !== om ? om : []) {
-             var om;
-             Em ||= "" !== im && "" === Dm.trim(), ka(Rm, mm)
+         }(rD.body, ((zD, wD) => {
+           var sD, KD, rD, LD;
+           AD ||= "length" === wD, gD += null !== (sD = null !== (KD = zD.reasoning) && void 0 !== KD ? KD : zD.reasoning_content) && void 0 !== sD ? sD : "", cD += null !== (rD = zD.content) && void 0 !== rD ? rD : "";
+           for (const DD of null !== (fD = zD.tool_calls) && void 0 !== fD ? fD : []) {
+             var fD;
+             UD ||= "" !== gD && "" === cD.trim(), xK(RD, DD)
```

#### 318. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6719-L6724` → after: `L6719-L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6719-L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6719-L6724) · [Before (L6719-L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6719-L6724)

```diff
-           const Om = mm.nativeTools && Em ? null !== (wm = Oa(Dm)) && void 0 !== wm ? wm : "" : Dm;
-           null === hm || void 0 === hm || hm({
-             model: mm.name,
-             reasoningChars: im.length,
-             answer: Om,
-             isCalling: Rm.length > 0
+           const ID = DD.nativeTools && UD ? null !== (LD = BK(cD)) && void 0 !== LD ? LD : "" : cD;
+           null === pD || void 0 === pD || pD({
+             model: DD.name,
+             reasoningChars: gD.length,
+             answer: ID,
+             isCalling: RD.length > 0
```

#### 319. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6726-L6727` → after: `L6726-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6726-L6727) · [Before (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6726-L6727)

```diff
-         }), (mm => {
-           om = mm
+         }), (DD => {
+           fD = DD
```

#### 320. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6730` → after: `L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6730) · [Before (L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6730)

```diff
-         Ta(om, Tm, Dm + im, 20 * Rm.length)
+         wK(fD, zD, cD + gD, 20 * RD.length)
```

#### 321. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6732-L6733` → after: `L6732-L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6732-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6732-L6733) · [Before (L6732-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6732-L6733)

```diff
-       const Om = Ha(mm, Dm, im, Rm, pm, Em);
-       return null === Om ? (pa.IO(mm.name, "empty"), "failed") : Om
+       const ID = WK(DD, cD, gD, RD, AD, UD);
+       return null === ID ? (UK.sI(DD.name, "empty"), "failed") : ID
```

#### 322. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6736-L6749` → after: `L6736-L6749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6736-L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6736-L6749) · [Before (L6736-L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6736-L6749)

```diff
-     function Ha(mm, Tm, fm, hm, Am) {
-       var am;
-       let xm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         wm = Tm;
-       var Dm;
-       mm.nativeTools && xm && (wm = null !== (Dm = Oa(wm)) && void 0 !== Dm ? Dm : wm);
-       wm = wm.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const im = ea(wm, fm, hm, null !== (am = mm.callFormat) && void 0 !== am ? am : "simple", Am);
-       return "" === im.answer ? null : {
-         model: mm.name,
-         answer: im.answer,
-         reasoning: fm,
-         isCutShort: Am,
-         hasCallsFromReasoning: im.hasCallsFromReasoning
+     function WK(DD, zD, wD, pD, sD) {
+       var KD;
+       let rD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         LD = zD;
+       var cD;
+       DD.nativeTools && rD && (LD = null !== (cD = BK(LD)) && void 0 !== cD ? cD : LD);
+       LD = LD.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const gD = jK(LD, wD, pD, null !== (KD = DD.callFormat) && void 0 !== KD ? KD : "simple", sD);
+       return "" === gD.answer ? null : {
+         model: DD.name,
+         answer: gD.answer,
+         reasoning: wD,
+         isCutShort: sD,
+         hasCallsFromReasoning: gD.hasCallsFromReasoning
```

#### 323. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6753-L6754` → after: `L6753-L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6753-L6754) · [Before (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6753-L6754)

```diff
-     function ya(mm) {
-       return mm.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     function NK(DD) {
+       return DD.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 324. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6757-L6758` → after: `L6757-L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6757-L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6757-L6758) · [Before (L6757-L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6757-L6758)

```diff
-     function Ca(mm) {
-       return Xa(mm) && !mm.isCutShort
+     function ZK(DD) {
+       return iK(DD) && !DD.isCutShort
```

#### 325. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6760-L6763` → after: `L6760-L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6760-L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6760-L6763) · [Before (L6760-L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6760-L6763)

```diff
-     async function ra(mm, Tm, fm, hm, Am) {
-       const am = mm.map((() => new AbortController)),
-         xm = () => {
-           for (const mm of am) mm.abort()
+     async function yK(DD, zD, wD, pD, sD) {
+       const KD = DD.map((() => new AbortController)),
+         rD = () => {
+           for (const DD of KD) DD.abort()
```

#### 326. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6765` → after: `L6765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6765) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6765)

```diff
-       null !== fm && void 0 !== fm && fm.aborted && xm(), null === fm || void 0 === fm || fm.addEventListener("abort", xm, {
+       null !== wD && void 0 !== wD && wD.aborted && rD(), null === wD || void 0 === wD || wD.addEventListener("abort", rD, {
```

#### 327. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6768-L6782` → after: `L6768-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6768-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6768-L6782) · [Before (L6768-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6768-L6782)

```diff
-       const wm = mm.map((() => {})),
-         Dm = mm.map((() => {}));
-       let im = null;
-       const Rm = mm => void 0 !== mm && ("" !== ya(mm.answer).trim() || !0 === mm.isCalling);
-       let pm = () => {};
-       mm.forEach(((mm, fm) => {
-         const xm = (0, Vm.d)(Ja, am[fm].signal);
-         Pa(mm, Ka(Tm, mm), xm.signal, (mm => {
-           Dm[fm] = mm, null === im && Rm(mm) && (im = fm), im === fm && (null === hm || void 0 === hm || hm(mm))
-         }), Am).catch((Tm => {
-           if (am[fm].signal.aborted) return "failed";
-           const hm = xm.signal.aborted;
-           return console.warn(`World Code AI: ${mm.name} ${hm?"took longer than 240 s":"couldn't be reached"}`, Tm), pa.IO(mm.name, hm ? "timeout" : "network"), hm ? "timeout" : "failed"
-         })).then((mm => {
-           xm.clear(), wm[fm] = mm, im !== fm || Ca(mm) || (im = null), pm()
+       const LD = DD.map((() => {})),
+         cD = DD.map((() => {}));
+       let gD = null;
+       const RD = DD => void 0 !== DD && ("" !== NK(DD.answer).trim() || !0 === DD.isCalling);
+       let AD = () => {};
+       DD.forEach(((DD, wD) => {
+         const rD = (0, nD.e)(XK, KD[wD].signal);
+         lK(DD, JK(zD, DD), rD.signal, (DD => {
+           cD[wD] = DD, null === gD && RD(DD) && (gD = wD), gD === wD && (null === pD || void 0 === pD || pD(DD))
+         }), sD).catch((zD => {
+           if (KD[wD].signal.aborted) return "failed";
+           const pD = rD.signal.aborted;
+           return console.warn(`World Code AI: ${DD.name} ${pD?"took longer than 240 s":"couldn't be reached"}`, zD), UK.sI(DD.name, pD ? "timeout" : "network"), pD ? "timeout" : "failed"
+         })).then((DD => {
+           rD.clear(), LD[wD] = DD, gD !== wD || ZK(DD) || (gD = null), AD()
```

#### 328. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6785-L6790` → after: `L6785-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6785-L6790) · [Before (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6785-L6790)

```diff
-       const Em = () => {
-         var mm;
-         if (null !== im) {
-           const mm = wm[im];
-           return Ca(mm) ? {
-             reply: mm
+       const UD = () => {
+         var DD;
+         if (null !== gD) {
+           const DD = LD[gD];
+           return ZK(DD) ? {
+             reply: DD
```

#### 329. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6793-L6795` → after: `L6793-L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6793-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6793-L6795) · [Before (L6793-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6793-L6795)

```diff
-         const Tm = wm.find(Ca);
-         if (Tm) return {
-           reply: Tm
+         const zD = LD.find(ZK);
+         if (zD) return {
+           reply: zD
```

#### 330. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6797-L6798` → after: `L6797-L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6797-L6798) · [Before (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6797-L6798)

```diff
-         if (!wm.includes(void 0)) return {
-           reply: null !== (mm = wm.find(Xa)) && void 0 !== mm ? mm : null
+         if (!LD.includes(void 0)) return {
+           reply: null !== (DD = LD.find(iK)) && void 0 !== DD ? DD : null
```

#### 331. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6801-L6805` → after: `L6801-L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6801-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6801-L6805) · [Before (L6801-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6801-L6805)

```diff
-           const mm = wm.findIndex(((mm, Tm) => void 0 === mm && Rm(Dm[Tm])));
-           if (-1 !== mm) {
-             im = mm;
-             const Tm = Dm[mm];
-             Tm && (null === hm || void 0 === hm || hm(Tm))
+           const DD = LD.findIndex(((DD, zD) => void 0 === DD && RD(cD[zD])));
+           if (-1 !== DD) {
+             gD = DD;
+             const zD = cD[DD];
+             zD && (null === pD || void 0 === pD || pD(zD))
```

#### 332. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6811-L6814` → after: `L6811-L6814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6811-L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6811-L6814) · [Before (L6811-L6814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6811-L6814)

```diff
-           if (null !== fm && void 0 !== fm && fm.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const mm = Em();
-           if (mm) {
-             const Tm = wm.filter((mm => "string" === typeof mm));
+           if (null !== wD && void 0 !== wD && wD.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const DD = UD();
+           if (DD) {
+             const zD = LD.filter((DD => "string" === typeof DD));
```

#### 333. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6816-L6817` → after: `L6816-L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6816-L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6816-L6817) · [Before (L6816-L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6816-L6817)

```diff
-               reply: mm.reply,
-               failures: Tm
+               reply: DD.reply,
+               failures: zD
```

#### 334. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6820-L6821` → after: `L6820-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6820-L6821) · [Before (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6820-L6821)

```diff
-           await new Promise((mm => {
-             pm = mm
+           await new Promise((DD => {
+             AD = DD
```

#### 335. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6825-L6844` → after: `L6825-L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6825-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6825-L6844) · [Before (L6825-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6825-L6844)

```diff
-         null === fm || void 0 === fm || fm.removeEventListener("abort", xm), xm()
-       }
-     }
- 
-     function sa() {
-       let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       const Tm = Aa.firstFreeAt(Ya.map((mm => mm.name)), mm);
-       return aa(Tm - mm) ? mm : Tm
-     }
-     async function la(mm) {
-       var Tm;
-       let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const hm = Date.now(),
-         Am = null !== (Tm = fm.models) && void 0 !== Tm ? Tm : Ya,
-         am = void 0 === fm.models ? function(mm, Tm) {
-           let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
- ... (4 more removed lines; see GitHub link above)
+         null === wD || void 0 === wD || wD.removeEventListener("abort", rD), rD()
+       }
+     }
+ 
+     function kK() {
+       let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const zD = KK.firstFreeAt(GK.map((DD => DD.name)), DD);
+       return rK(zD - DD) ? DD : zD
+     }
+     async function mK(DD) {
+       var zD;
+       let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const pD = Date.now(),
+         sD = null !== (zD = wD.models) && void 0 !== zD ? zD : GK,
+         KD = void 0 === wD.models ? function(DD, zD) {
+           let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+ ... (4 more added lines; see GitHub link above)
```

#### 336. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6846-L6848` → after: `L6846-L6848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6846-L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6846-L6848) · [Before (L6846-L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6846-L6848)

```diff
-                 model: Tm
-               } = mm;
-               return Tm
+                 model: zD
+               } = DD;
+               return zD
```

#### 337. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6850-L6861` → after: `L6850-L6861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6850-L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6850-L6861) · [Before (L6850-L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6850-L6861)

```diff
-             Am = [...hm.filter((mm => Tm(mm))), ...hm.filter((mm => !Tm(mm)))],
-             am = [];
-           for (let xm = 0; xm < Am.length; xm += 2) am.push(Am.slice(xm, xm + 2));
-           return am
-         }(Am, (mm => Aa.freeAt(mm.name) <= hm)) : Am.map((mm => [mm])),
-         xm = [];
-       for (const Dm of am) {
-         const Tm = await ra(Dm, mm, fm.signal, fm.onProgress, fm.tools);
-         if (null !== Tm.reply) {
-           const Am = Dm.find((mm => {
-             var fm;
-             return mm.name === (null === (fm = Tm.reply) || void 0 === fm ? void 0 : fm.model)
+             sD = [...pD.filter((DD => zD(DD))), ...pD.filter((DD => !zD(DD)))],
+             KD = [];
+           for (let rD = 0; rD < sD.length; rD += 2) KD.push(sD.slice(rD, rD + 2));
+           return KD
+         }(sD, (DD => KK.freeAt(DD.name) <= pD)) : sD.map((DD => [DD])),
+         rD = [];
+       for (const cD of KD) {
+         const zD = await yK(cD, DD, wD.signal, wD.onProgress, wD.tools);
+         if (null !== zD.reply) {
+           const sD = cD.find((DD => {
+             var wD;
+             return DD.name === (null === (wD = zD.reply) || void 0 === wD ? void 0 : wD.model)
```

#### 338. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6864-L6865` → after: `L6864-L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6864-L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6864-L6865) · [Before (L6864-L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6864-L6865)

```diff
-             ...Am && !1 !== fm.canNudge ? await Ba(Am, Ka(mm, Am), Tm.reply, fm.signal, fm.onProgress, fm.tools) : Tm.reply,
-             ms: Date.now() - hm
+             ...sD && !1 !== wD.canNudge ? await aK(sD, JK(DD, sD), zD.reply, wD.signal, wD.onProgress, wD.tools) : zD.reply,
+             ms: Date.now() - pD
```

#### 339. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6868` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6868) · [Before (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6868)

```diff
-         xm.push(...Tm.failures)
+         rD.push(...zD.failures)
```

#### 340. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6870-L6871` → after: `L6870-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6870-L6871) · [Before (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6870-L6871)

```diff
-       const wm = ca.find((mm => xm.includes(mm)));
-       throw new za(null !== wm && void 0 !== wm ? wm : "failed")
+       const LD = VK.find((DD => rD.includes(DD)));
+       throw new PK(null !== LD && void 0 !== LD ? LD : "failed")
```

#### 341. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6873` → after: `L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6873) · [Before (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6873)

```diff
-     const Ma = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const eK = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 342. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6875-L6877` → after: `L6875-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6875-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6875-L6877) · [Before (L6875-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6875-L6877)

```diff
-     function ua(mm) {
-       const Tm = mm.trim();
-       return Tm.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(Tm) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(Tm) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function oK(DD) {
+       const zD = DD.trim();
+       return zD.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(zD) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(zD) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 343. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6884` → after: `L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6884) · [Before (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6884)

```diff
-         }(fm, null !== (xm = mm.callFormat) && void 0 !== xm ? xm : "simple")) return fm;
+         }(wD, null !== (rD = DD.callFormat) && void 0 !== rD ? rD : "simple")) return wD;
```

#### 344. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6892` → after: `L6892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6892) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6892)

```diff
-         im = (0, Vm.d)(wm, hm);
+         gD = (0, nD.e)(LD, pD);
```

#### 345. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6895` → after: `L6895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6895) · [Before (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6895)

```diff
-         return Xa(Tm) && "" !== Tm.answer.trim() ? Tm : fm
+         return iK(zD) && "" !== zD.answer.trim() ? zD : wD
```

#### 346. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6898` → after: `L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6898) · [Before (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6898)

```diff
-         return pa.IO(mm.name, im.signal.aborted ? "timeout" : "network"), fm
+         return UK.sI(DD.name, gD.signal.aborted ? "timeout" : "network"), wD
```

#### 347. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6933` → after: `L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6933) · [Before (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6933)

```diff
-       const hm = (0, Vm.d)(2e4, fm);
+       const pD = (0, nD.e)(2e4, wD);
```

#### 348. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6951-L6952` → after: `L6951-L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6951-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6951-L6952) · [Before (L6951-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6951-L6952)

```diff
-         if (Da(mm, fm), 429 === fm.status) return pa.IO(mm, fm), "busy";
-         if (!fm.ok) return pa.IO(mm, fm), null;
+         if (gK(DD, wD), 429 === wD.status) return UK.sI(DD, wD), "busy";
+         if (!wD.ok) return UK.sI(DD, wD), null;
```

#### 349. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6954` → after: `L6954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6954) · [Before (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6954)

```diff
-           im = String(null !== (Am = null === (am = Dm.choices) || void 0 === am || null === (xm = am[0]) || void 0 === xm || null === (wm = xm.message) || void 0 === wm ? void 0 : wm.content) && void 0 !== Am ? Am : "");
+           gD = String(null !== (sD = null === (KD = cD.choices) || void 0 === KD || null === (rD = KD[0]) || void 0 === rD || null === (LD = rD.message) || void 0 === LD ? void 0 : LD.content) && void 0 !== sD ? sD : "");
```

#### 350. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6958` → after: `L6958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6958) · [Before (L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6958)

```diff
-           }(im) ? im : null
+           }(gD) ? gD : null
```

#### 351. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6961` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6961) · [Before (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6961)

```diff
-         return pa.IO(mm, hm.signal.aborted ? "timeout" : "network"), null
+         return UK.sI(DD, pD.signal.aborted ? "timeout" : "network"), null
```

#### 352. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6966` → after: `L6966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6966) · [Before (L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6966)

```diff
-     var ga = fm(37);
+     var HK = wD(35);
```

#### 353. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6970-L6971` → after: `L6970-L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6970-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6970-L6971) · [Before (L6970-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6970-L6971)

```diff
-       const mm = ga.g.getItem(Wa);
-       return null !== mm && "object" === typeof mm ? mm : {}
+       const DD = HK.h.getItem(qK);
+       return null !== DD && "object" === typeof DD ? DD : {}
```

#### 354. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6981` → after: `L6981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6981) · [Before (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6981)

```diff
-         return null === this.player ? null : null !== (mm = null !== (Tm = this.unsaved.get(this.player)) && void 0 !== Tm ? Tm : Fa()[this.player]) && void 0 !== mm ? mm : null
+         return null === this.player ? null : null !== (DD = null !== (zD = this.unsaved.get(this.player)) && void 0 !== zD ? zD : Dr()[this.player]) && void 0 !== DD ? DD : null
```

#### 355. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6992-L6993` → after: `L6992-L6993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6992-L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6992-L6993) · [Before (L6992-L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6992-L6993)

```diff
-           } = await Promise.resolve().then((() => fm(1162)));
-           return null !== (mm = null === (Tm = hm.peekCurrentUserContext()) || void 0 === Tm ? void 0 : Tm.whamm) && void 0 !== mm ? mm : null
+           } = await Promise.resolve().then((() => wD(1130)));
+           return null !== (DD = null === (zD = pD.peekCurrentUserContext()) || void 0 === zD ? void 0 : zD.whamm) && void 0 !== DD ? DD : null
```

#### 356. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6998` → after: `L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L6998) · [Before (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L6998)

```diff
-         null !== this.player && (ga.g.setItem(Wa, {
+         null !== this.player && (HK.h.setItem(qK, {
```

#### 357. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7021` → after: `L7021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7021) · [Before (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7021)

```diff
-       const fm = `\n[... ${mm.length-Tm} more characters cut]`;
+       const wD = `\n[... ${DD.length-zD} more characters cut]`;
```

#### 358. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7026-L7027` → after: `L7026-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7026-L7027) · [Before (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7026-L7027)

```diff
-     var Dx = fm(658),
-       ix = fm(4322);
+     var gr = wD(625),
+       Rr = wD(4413);
```

#### 359. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7049` → after: `L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7049) · [Before (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7049)

```diff
-         clientVersion: String(Dx.d),
+         clientVersion: String(gr.e),
```

#### 360. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7064` → after: `L7064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7064) · [Before (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7064)

```diff
-         this.IO = mm, this.chatId = (0, ix.e)(12), this.open = new Map
+         this.sI = DD, this.chatId = (0, Rr.b)(12), this.open = new Map
```

#### 361. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7068` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7068) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7068)

```diff
-         fm && (clearTimeout(fm.timer), Tm || (this.open.delete(mm), this.send(fm.IO)))
+         wD && (clearTimeout(wD.timer), zD || (this.open.delete(DD), this.send(wD.sI)))
```

#### 362. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7073` → after: `L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7073) · [Before (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7073)

```diff
-         if (hm) return void(hm.IO.responses.length < ax && hm.IO.responses.push(Ex(fm)));
+         if (pD) return void(pD.sI.responses.length < rr && pD.sI.responses.push(fr(wD)));
```

#### 363. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7076` → after: `L7076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7076) · [Before (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7076)

```diff
-           IO: Am
+           sI: sD
```

#### 364. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7086` → after: `L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7086) · [Before (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7086)

```diff
-           this.open.delete(mm), this.send(Tm.IO)
+           this.open.delete(DD), this.send(zD.sI)
```

#### 365. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7092` → after: `L7092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7092) · [Before (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7092)

```diff
-         })(mm) && this.IO(mm)
+         })(DD) && this.sI(DD)
```

#### 366. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7107` → after: `L7107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7107) · [Before (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7107)

```diff
-             IO: Tm
+             sI: zD
```

#### 367. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7118)

```diff
-       "yes" === mm && fm.length > 0 && Ix(fm.map((mm => mm.IO)))
+       "yes" === DD && wD.length > 0 && Or(wD.map((DD => DD.sI)))
```

#### 368. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7121` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7121) · [Before (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7121)

```diff
-       const Tm = Promise.resolve().then((() => fm(41531)));
+       const zD = Promise.resolve().then((() => wD(41382)));
```

#### 369. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7131-L7132` → after: `L7131-L7132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7131-L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7131-L7132) · [Before (L7131-L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7131-L7132)

```diff
-     var Kx = fm(354),
-       Qx = fm(168);
+     var Jr = wD(351),
+       Er = wD(157);
```

#### 370. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7189` → after: `L7189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7189) · [Before (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7189)

```diff
-       return "https:" !== Tm.protocol && ("http:" !== Tm.protocol || !fm) || Tm.username || Tm.password || Tm.search ? null : `${Tm.origin}${Tm.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== zD.protocol && ("http:" !== zD.protocol || !wD) || zD.username || zD.password || zD.search ? null : `${zD.origin}${zD.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 371. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7198` → after: `L7198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7198) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7198)

```diff
-         super(`AI key request: ${mm}`), this.problem = mm, this.retryAfterMs = Tm, this.status = fm, this.detail = hm
+         super(`AI key request: ${DD}`), this.problem = DD, this.retryAfterMs = zD, this.status = wD, this.detail = pD
```

#### 372. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7203` → after: `L7203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7203) · [Before (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7203)

```diff
-       return ("" === Tm ? mm : mm.split(Tm).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === zD ? DD : DD.split(zD).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 373. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7210` → after: `L7210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7210) · [Before (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7210)

```diff
-           return `${fm} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${wD} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 374. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7214` → after: `L7214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7214) · [Before (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7214)

```diff
-           return `${fm} can't find that model. Check its name.`;
+           return `${wD} can't find that model. Check its name.`;
```

#### 375. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7216` → after: `L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7216) · [Before (L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7216)

```diff
-           return "anthropic" === Tm ? "Claude didn't accept your key: check it, or make a new one." : "custom" === Tm ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === zD ? "Claude didn't accept your key: check it, or make a new one." : "custom" === zD ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 376. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7218` → after: `L7218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7218) · [Before (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7218)

```diff
-           return "custom" === Tm ? "That server stopped your key for now: it has used all it can." : `${fm} stopped your key for now: it has used all it can. Check it on ${fm}'s website.`;
+           return "custom" === zD ? "That server stopped your key for now: it has used all it can." : `${wD} stopped your key for now: it has used all it can. Check it on ${wD}'s website.`;
```

#### 377. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7220` → after: `L7220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7220) · [Before (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7220)

```diff
-           return `${fm} doesn't work from where you are.`;
+           return `${wD} doesn't work from where you are.`;
```

#### 378. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7224` → after: `L7224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7224) · [Before (L7224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7224)

```diff
-           return `${fm} had a problem with that. Try again in a minute.`
+           return `${wD} had a problem with that. Try again in a minute.`
```

#### 379. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7250` → after: `L7250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7250) · [Before (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7250)

```diff
-         }(Tm)) throw new Error(`AI key request to an unknown host for ${mm}`);
+         }(zD)) throw new Error(`AI key request to an unknown host for ${DD}`);
```

#### 380. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7259` → after: `L7259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7259) · [Before (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7259)

```diff
-         throw console.warn(`AI key request: ${mm} answered ${Am.status}`), new Sx(function(mm, Tm, fm) {
+         throw console.warn(`AI key request: ${DD} answered ${sD.status}`), new br(function(DD, zD, wD) {
```

#### 381. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7266` → after: `L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7266) · [Before (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7266)

```diff
-           return Number.isFinite(fm) ? 1e3 * fm : Math.max(0, Date.parse(Tm) - Date.now()) || void 0
+           return Number.isFinite(wD) ? 1e3 * wD : Math.max(0, Date.parse(zD) - Date.now()) || void 0
```

#### 382. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7273` → after: `L7273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7273) · [Before (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7273)

```diff
-             fm = "string" === typeof Am ? Am : mm
+             wD = "string" === typeof sD ? sD : DD
```

#### 383. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7287)

```diff
-       const hm = (0, Vm.d)(mm, Tm);
+       const pD = (0, nD.e)(DD, zD);
```

#### 384. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7322` → after: `L7322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7322) · [Before (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7322)

```diff
-         phm: xm,
+         TpD: rD,
```

#### 385. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7330` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7330) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7330)

```diff
-         const xm = null !== (fm = null === (hm = mm.match(/```/g)) || void 0 === hm ? void 0 : hm.length) && void 0 !== fm ? fm : 0,
+         const rD = null !== (wD = null === (pD = DD.match(/```/g)) || void 0 === pD ? void 0 : pD.length) && void 0 !== wD ? wD : 0,
```

#### 386. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7343` → after: `L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7343) · [Before (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7343)

```diff
-         written: wm ? pm : void 0,
+         written: LD ? AD : void 0,
```

#### 387. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7355` → after: `L7355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7355) · [Before (L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7355)

```diff
-       const hm = null !== (fm = Tm.tools) && void 0 !== fm ? fm : [];
+       const pD = null !== (wD = zD.tools) && void 0 !== wD ? wD : [];
```

#### 388. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7406` → after: `L7406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7406) · [Before (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7406)

```diff
-             models: (null !== (Tm = (await fm.json()).data) && void 0 !== Tm ? Tm : []).map((mm => ({
+             models: (null !== (zD = (await wD.json()).data) && void 0 !== zD ? zD : []).map((DD => ({
```

#### 389. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7433` → after: `L7433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7433) · [Before (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7433)

```diff
-           return await Na(null !== (Am = am.body) && void 0 !== Am ? Am : new ReadableStream, (Tm => {
+           return await dK(null !== (sD = KD.body) && void 0 !== sD ? sD : new ReadableStream, (zD => {
```

#### 390. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7438-L7439` → after: `L7438-L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7438-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7438-L7439) · [Before (L7438-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7438-L7439)

```diff
-             wm += null !== (Am = null !== (am = null === jm || void 0 === jm || null === (pm = jm.delta) || void 0 === pm ? void 0 : pm.reasoning) && void 0 !== am ? am : null === jm || void 0 === jm || null === (Em = jm.delta) || void 0 === Em ? void 0 : Em.reasoning_content) && … [truncated]
-             for (const mm of null !== (Vm = null === jm || void 0 === jm || null === (Im = jm.delta) || void 0 === Im ? void 0 : Im.tool_calls) && void 0 !== Vm ? Vm : []) {
+             LD += null !== (sD = null !== (KD = null === hD || void 0 === hD || null === (AD = hD.delta) || void 0 === AD ? void 0 : AD.reasoning) && void 0 !== KD ? KD : null === hD || void 0 === hD || null === (UD = hD.delta) || void 0 === UD ? void 0 : UD.reasoning_content) && … [truncated]
+             for (const DD of null !== (nD = null === hD || void 0 === hD || null === (MD = hD.delta) || void 0 === MD ? void 0 : MD.tool_calls) && void 0 !== nD ? nD : []) {
```

#### 391. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7452` → after: `L7452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7452) · [Before (L7452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7452)

```diff
-             phm: Dm,
+             TpD: cD,
```

#### 392. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7472` → after: `L7472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7472) · [Before (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7472)

```diff
-         return await Cx(Xx, mm, (async mm => yx("openrouter", `${nx.openrouter.baseUrl}/key`, {
+         return await Zr(ir, DD, (async DD => Nr("openrouter", `${Qr.openrouter.baseUrl}/key`, {
```

#### 393. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7493` → after: `L7493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7493) · [Before (L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7493)

```diff
-             models: (null !== (Tm = (await fm.json()).data) && void 0 !== Tm ? Tm : []).map((mm => ({
+             models: (null !== (zD = (await wD.json()).data) && void 0 !== zD ? zD : []).map((DD => ({
```

#### 394. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7526` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7526) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7526)

```diff
-           await Na(null !== (am = xm.body) && void 0 !== am ? am : new ReadableStream, (Tm => {
+           await dK(null !== (KD = rD.body) && void 0 !== KD ? KD : new ReadableStream, (zD => {
```

#### 395. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7531-L7532` → after: `L7531-L7532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7531-L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7531-L7532) · [Before (L7531-L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7531-L7532)

```diff
-             if ("content_block_start" === am.type && "tool_use" === (null === (hm = am.content_block) || void 0 === hm ? void 0 : hm.type)) pm.set(null !== (om = am.index) && void 0 !== om ? om : pm.size, {
-               name: null !== (Om = am.content_block.name) && void 0 !== Om ? Om : "",
+             if ("content_block_start" === KD.type && "tool_use" === (null === (pD = KD.content_block) || void 0 === pD ? void 0 : pD.type)) AD.set(null !== (fD = KD.index) && void 0 !== fD ? fD : AD.size, {
+               name: null !== (ID = KD.content_block.name) && void 0 !== ID ? ID : "",
```

#### 396. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7537-L7538` → after: `L7537-L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7537-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7537-L7538) · [Before (L7537-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7537-L7538)

```diff
-               wm += null !== (Ym = null === (qm = am.delta) || void 0 === qm ? void 0 : qm.text) && void 0 !== Ym ? Ym : "", Dm += null !== (jm = null === (Vm = am.delta) || void 0 === Vm ? void 0 : Vm.thinking) && void 0 !== jm ? jm : "";
-               const mm = pm.get(null !== (Im = am.index) && void 0 !== Im ? Im : -1);
+               LD += null !== (BD = null === (GD = KD.delta) || void 0 === GD ? void 0 : GD.text) && void 0 !== BD ? BD : "", cD += null !== (hD = null === (nD = KD.delta) || void 0 === nD ? void 0 : nD.thinking) && void 0 !== hD ? hD : "";
+               const DD = AD.get(null !== (MD = KD.index) && void 0 !== MD ? MD : -1);
```

#### 397. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7540` → after: `L7540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7540) · [Before (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7540)

```diff
-               if (mm && "input_json_delta" === (null === (Km = am.delta) || void 0 === Km ? void 0 : Km.type)) mm.args += null !== (Qm = am.delta.partial_json) && void 0 !== Qm ? Qm : ""
+               if (DD && "input_json_delta" === (null === (OD = KD.delta) || void 0 === OD ? void 0 : OD.type)) DD.args += null !== (JD = KD.delta.partial_json) && void 0 !== JD ? JD : ""
```

#### 398. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7556` → after: `L7556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7556) · [Before (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7556)

```diff
-             phm: im,
+             TpD: gD,
```

#### 399. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7582` → after: `L7582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7582) · [Before (L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7582)

```diff
-             models: (null !== (Tm = (await fm.json()).models) && void 0 !== Tm ? Tm : []).filter((mm => {
+             models: (null !== (zD = (await wD.json()).models) && void 0 !== zD ? zD : []).filter((DD => {
```

#### 400. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7605` → after: `L7605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7605) · [Before (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7605)

```diff
-           const xm = await yx("gemini", `${this.baseUrl}/models/${encodeURIComponent(mm)}:streamGenerateContent?alt=sse`, {
+           const rD = await Nr("gemini", `${this.baseUrl}/models/${encodeURIComponent(DD)}:streamGenerateContent?alt=sse`, {
```

#### 401. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7624` → after: `L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7624) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7624)

```diff
-           return await Na(null !== (am = xm.body) && void 0 !== am ? am : new ReadableStream, (Tm => {
+           return await dK(null !== (KD = rD.body) && void 0 !== KD ? KD : new ReadableStream, (zD => {
```

#### 402. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7628` → after: `L7628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7628) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7628)

```diff
-             for (const mm of null !== (om = null === Em || void 0 === Em || null === (Om = Em.content) || void 0 === Om ? void 0 : Om.parts) && void 0 !== om ? om : []) {
+             for (const DD of null !== (fD = null === UD || void 0 === UD || null === (ID = UD.content) || void 0 === ID ? void 0 : ID.parts) && void 0 !== fD ? fD : []) {
```

#### 403. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7631-L7632` → after: `L7631-L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7631-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7631-L7632) · [Before (L7631-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7631-L7632)

```diff
-                 name: null !== (Ym = mm.functionCall.name) && void 0 !== Ym ? Ym : "",
-                 args: JSON.stringify(null !== (qm = mm.functionCall.args) && void 0 !== qm ? qm : {})
+                 name: null !== (BD = DD.functionCall.name) && void 0 !== BD ? BD : "",
+                 args: JSON.stringify(null !== (GD = DD.functionCall.args) && void 0 !== GD ? GD : {})
```

#### 404. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7636` → after: `L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7636) · [Before (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7636)

```diff
-                 Dm += null !== (jm = mm.text) && void 0 !== jm ? jm : ""
+                 cD += null !== (hD = DD.text) && void 0 !== hD ? hD : ""
```

#### 405. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7639` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7639) · [Before (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7639)

```diff
-                 wm += null !== (Vm = mm.text) && void 0 !== Vm ? Vm : ""
+                 LD += null !== (nD = DD.text) && void 0 !== nD ? nD : ""
```

#### 406. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7651` → after: `L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7651) · [Before (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7651)

```diff
-             phm: im,
+             TpD: gD,
```

#### 407. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7676` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7676) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7676)

```diff
-           return new ux("custom", null !== fm && void 0 !== fm ? fm : "", Tm)
+           return new or("custom", null !== wD && void 0 !== wD ? wD : "", zD)
```

#### 408. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7804` → after: `L7804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7804) · [Before (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7804)

```diff
-         name: null !== (hm = null === Am || void 0 === Am ? void 0 : Am.name) && void 0 !== hm ? hm : Tm,
+         name: null !== (pD = null === sD || void 0 === sD ? void 0 : sD.name) && void 0 !== pD ? pD : zD,
```

#### 409. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7828` → after: `L7828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7828) · [Before (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7828)

```diff
-       return null !== (Tm = mm.find((mm => "smart" === mm.tier))) && void 0 !== Tm ? Tm : mm[0]
+       return null !== (zD = DD.find((DD => "smart" === DD.tier))) && void 0 !== zD ? zD : DD[0]
```

#### 410. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7834` → after: `L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7834) · [Before (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7834)

```diff
-       return null !== (Tm = mm.name) && void 0 !== Tm ? Tm : bx(mm.provider, mm.baseUrl, fm)
+       return null !== (zD = DD.name) && void 0 !== zD ? zD : Tr(DD.provider, DD.baseUrl, wD)
```

#### 411. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7851` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7851) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7851)

```diff
-         return new URL(null !== (Tm = mm.baseUrl) && void 0 !== Tm ? Tm : "").protocol.startsWith("http")
+         return new URL(null !== (zD = DD.baseUrl) && void 0 !== zD ? zD : "").protocol.startsWith("http")
```

#### 412. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7861` → after: `L7861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7861) · [Before (L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7861)

```diff
-         return console.warn(`AI Helper: no ${mm}`, Tm), null
+         return console.warn(`AI Helper: no ${DD}`, zD), null
```

#### 413. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7873)

```diff
-         this.state = null !== hm && void 0 !== hm && hm.remember ? null !== Am && void 0 !== Am && Am.remember ? Am : {
+         this.state = null !== pD && void 0 !== pD && pD.remember ? null !== sD && void 0 !== sD && sD.remember ? sD : {
```

#### 414. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7876` → after: `L7876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7876) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7876)

```diff
-         } : null !== (fm = null !== hm && void 0 !== hm ? hm : Am) && void 0 !== fm ? fm : Aw, this.ownsRemembered = this.state.remember && null !== Am
+         } : null !== (wD = null !== pD && void 0 !== pD ? pD : sD) && void 0 !== wD ? wD : KL, this.ownsRemembered = this.state.remember && null !== sD
```

#### 415. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7893-L7894` → after: `L7893-L7894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7893-L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7893-L7894) · [Before (L7893-L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7893-L7894)

```diff
-           wm = "custom" !== mm.provider ? mm.provider : null !== (hm = null === xm || void 0 === xm ? void 0 : xm.id) && void 0 !== hm ? hm : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           Dm = void 0 === Tm ? Tw(mm.models) : null !== (Am = mm.models.find((mm => mm.id === Tm))) && void 0 !== Am ? Am : mm.models[0],
+           LD = "custom" !== DD.provider ? DD.provider : null !== (pD = null === rD || void 0 === rD ? void 0 : rD.id) && void 0 !== pD ? pD : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           cD = void 0 === zD ? wL(DD.models) : null !== (sD = DD.models.find((DD => DD.id === zD))) && void 0 !== sD ? sD : DD.models[0],
```

#### 416. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7909` → after: `L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7909) · [Before (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7909)

```diff
-           om = Em ? this.state.keys.filter((mm => mm.id !== wm)).map((mm => mm.id === fm ? Rm : mm)) : pm ? [...this.state.keys, Rm] : this.state.keys.map((mm => mm.id === wm ? Rm : mm)),
+           fD = UD ? this.state.keys.filter((DD => DD.id !== LD)).map((DD => DD.id === wD ? RD : DD)) : AD ? [...this.state.keys, RD] : this.state.keys.map((DD => DD.id === LD ? RD : DD)),
```

#### 417. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7928` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L7928) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L7928)

```diff
-             return "" === fm ? Am : {
+             return "" === wD ? sD : {
```

#### 418. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8023` → after: `L8023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8023) · [Before (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8023)

```diff
-           hm = (null !== (Tm = null === fm || void 0 === fm ? void 0 : fm.keys) && void 0 !== Tm ? Tm : []).filter((mm => this.state.keys.every((Tm => !aw(Tm, mm)))));
+           pD = (null !== (zD = null === wD || void 0 === wD ? void 0 : wD.keys) && void 0 !== zD ? zD : []).filter((DD => this.state.keys.every((zD => !rL(zD, DD)))));
```

#### 419. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8067` → after: `L8067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8067) · [Before (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8067)

```diff
-           return Array.isArray(Tm.keys) && Tm.keys.every(xw) ? Tm : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(zD.keys) && zD.keys.every(LL) ? zD : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 420. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8109` → after: `L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8109) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8109)

```diff
-       const wm = null !== (fm = null === xm || void 0 === xm ? void 0 : xm.trim()) && void 0 !== fm ? fm : "";
+       const LD = null !== (wD = null === rD || void 0 === rD ? void 0 : rD.trim()) && void 0 !== wD ? wD : "";
```

#### 421. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8139` → after: `L8139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8139) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8139)

```diff
-               return 0 !== (null !== (fm = null === (hm = Tm.tools) || void 0 === hm ? void 0 : hm.length) && void 0 !== fm ? fm : 0) && mm instanceof Sx && "failed" === mm.problem && (400 === mm.status || 404 === mm.status && /\btool/i.test(null !== (Am = mm.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (wD = null === (pD = zD.tools) || void 0 === pD ? void 0 : pD.length) && void 0 !== wD ? wD : 0) && DD instanceof br && "failed" === DD.problem && (400 === DD.status || 404 === DD.status && /\btool/i.test(null !== (sD = DD.detail) && void 0 != … [truncated]
```

#### 422. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8154` → after: `L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8154) · [Before (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8154)

```diff
-         return await (Dm = Math.min(null !== (xm = null !== (wm = pm.retryAfterMs) && void 0 !== wm ? wm : fm.retryWaitMs) && void 0 !== xm ? xm : 3e3, 2e4), im = fm.signal, new Promise(((mm, Tm) => {
+         return await (cD = Math.min(null !== (rD = null !== (LD = AD.retryAfterMs) && void 0 !== LD ? LD : wD.retryWaitMs) && void 0 !== rD ? rD : 3e3, 2e4), gD = wD.signal, new Promise(((DD, zD) => {
```

#### 423. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8166` → after: `L8166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8166) · [Before (L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8166)

```diff
-     var Ew = fm(3621);
+     var fL = wD(3649);
```

#### 424. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8283` → after: `L8283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8283) · [Before (L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8283)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${ew((null!==(Tm=mm.availableFrom)&&void 0!==Tm?Tm:fm)-fm)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${bL((null!==(zD=DD.availableFrom)&&void 0!==zD?zD:wD)-wD)} to go.`;
```

#### 425. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8285` → after: `L8285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8285) · [Before (L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8285)

```diff
-           return mm.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(mm,Tm){const fm=Math.ceil((mm-Tm)/36e5);if(fm<=24)return fm<=1?"within the hour":`in ${fm} hours`;return`in ${ew(mm-Tm)}`}(mm.resetsAt,fm)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return DD.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(DD,zD){const wD=Math.ceil((DD-zD)/36e5);if(wD<=24)return wD<=1?"within the hour":`in ${wD} hours`;return`in ${bL(DD-zD)}`}(DD.resetsAt,wD)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 426. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8316` → after: `L8316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8316) · [Before (L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8316)

```diff
-       return `Usage left: ${mm.left}`
+       return `Usage left: ${DD.left}`
```

#### 427. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8320-L8321` → after: `L8320-L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8320-L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8320-L8321) · [Before (L8320-L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8320-L8321)

```diff
-       const Tm = Math.max(1, Math.ceil(mm / Kx.k));
-       return 1 === Tm ? "1 day" : `${Tm} days`
+       const zD = Math.max(1, Math.ceil(DD / Jr.f));
+       return 1 === zD ? "1 day" : `${zD} days`
```

#### 428. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8326` → after: `L8326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8326) · [Before (L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8326)

```diff
-       if (fm) return `${fm} Bot.xd is answering instead.`;
+       if (wD) return `${wD} Bot.xd is answering instead.`;
```

#### 429. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8345` → after: `L8345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8345) · [Before (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8345)

```diff
-           return mm.messages.length > 12 || mm.messages.some((mm => mm.content.length > tA)) || (null !== (Tm = null === (fm = mm.toolsJson) || void 0 === fm ? void 0 : fm.length) && void 0 !== Tm ? Tm : 0) > 1e5 || (null !== (hm = null === (Am = mm.request) || void 0 === Am ? vo … [truncated]
+           return DD.messages.length > 12 || DD.messages.some((DD => DD.content.length > ts)) || (null !== (zD = null === (wD = DD.toolsJson) || void 0 === wD ? void 0 : wD.length) && void 0 !== zD ? zD : 0) > 1e5 || (null !== (pD = null === (sD = DD.request) || void 0 === sD ? vo … [truncated]
```

#### 430. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8352` → after: `L8352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8352) · [Before (L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8352)

```diff
-         if (Tm instanceof Qx.d && 413 === Tm.httpCode) return {
+         if (zD instanceof Er.c && 413 === zD.httpCode) return {
```

#### 431. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8370-L8372` → after: `L8370-L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8370-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8370-L8372) · [Before (L8370-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8370-L8372)

```diff
-     var Pw = fm(31),
-       Hw = fm(23),
-       yw = fm(2242);
+     var iL = wD(25),
+       lL = wD(20),
+       WL = wD(2246);
```

#### 432. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8376` → after: `L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8376) · [Before (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8376)

```diff
-       Cw ??= Promise.resolve().then((() => fm(2250))), Cw.then((mm => {
+       NL ??= Promise.resolve().then((() => wD(2257))), NL.then((DD => {
```

#### 433. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8398` → after: `L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8398) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8398)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => fm(1354))), fm.e(354).then((() => fm(61353)))]);
+         }] = await Promise.all([Promise.resolve().then((() => wD(1355))), wD.e(354).then((() => wD(61051)))]);
```

#### 434. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8405` → after: `L8405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8405) · [Before (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8405)

```diff
-                   Pw.j.gp("OpenStoreFromCodeEditor"), (0, yw.m)({
+                   iL.l.KG("OpenStoreFromCodeEditor"), (0, WL.n)({
```

#### 435. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8410-L8411` → after: `L8410-L8411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8410-L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8410-L8411) · [Before (L8410-L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8410-L8411)

```diff
-                   const mm = Pw.j.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === Hw.c.get("openEverythingMenuName") && (Pw.j.unsubscribe(mm), Iw.refresh())
+                   const DD = iL.l.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === lL.e.get("openEverythingMenuName") && (iL.l.unsubscribe(DD), OL.refresh())
```

#### 436. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8594` → after: `L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8594) · [Before (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8594)

```diff
-       return mm.length > 4 && mm.endsWith("ies") ? `${mm.slice(0,-3)}y` : mm.length > 3 && mm.endsWith("s") && !mm.endsWith("ss") ? mm.slice(0, -1) : mm
+       return DD.length > 4 && DD.endsWith("ies") ? `${DD.slice(0,-3)}y` : DD.length > 3 && DD.endsWith("s") && !DD.endsWith("ss") ? DD.slice(0, -1) : DD
```

#### 437. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8610` → after: `L8610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8610) · [Before (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8610)

```diff
-         Am = Fw(Tm ? mm : (0, OT.s)(mm, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, OT.n, (() => "projectRequire"))),
+         sD = qL(zD ? DD : (0, fz.z)(DD, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, fz.o, (() => "projectRequire"))),
```

#### 438. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8613` → after: `L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8613) · [Before (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8613)

```diff
-         for (const Am of (0, OT.g)(mm, /(global|window|document|process|require)\b\s*[.([]/g, OT.n)) hm.has(Am[1]) || am.has(Am[1]) || (hm.add(Am[1]), fm.push(`Line ${Tm+1} uses "${Am[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const sD of (0, fz.f)(DD, /(global|window|document|process|require)\b\s*[.([]/g, fz.o)) pD.has(sD[1]) || KD.has(sD[1]) || (pD.add(sD[1]), wD.push(`Line ${zD+1} uses "${sD[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 439. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8628` → after: `L8628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8628) · [Before (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8628)

```diff
-         const om = [null !== (am = Tm[hm - 2]) && void 0 !== am ? am : "", null !== (xm = Tm[hm - 1]) && void 0 !== xm ? xm : "", mm.slice(0, im)].join(" ");
+         const fD = [null !== (KD = zD[pD - 2]) && void 0 !== KD ? KD : "", null !== (rD = zD[pD - 1]) && void 0 !== rD ? rD : "", DD.slice(0, gD)].join(" ");
```

#### 440. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8630-L8631` → after: `L8630-L8631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8630-L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8630-L8631) · [Before (L8630-L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8630-L8631)

```diff
-         const Om = null !== (wm = null === (Dm = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(pm)) || void 0 === Dm ? void 0 : Dm[1]) && void 0 !== wm ? wm : "coins";
-         fm.push(`Line ${hm+1} sets the saved "${Om}" back to ${Em} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${Om}") is null.`)
+         const ID = null !== (LD = null === (cD = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(AD)) || void 0 === cD ? void 0 : cD[1]) && void 0 !== LD ? LD : "coins";
+         wD.push(`Line ${pD+1} sets the saved "${ID}" back to ${UD} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${ID}") is null.`)
```

#### 441. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8637` → after: `L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8637) · [Before (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8637)

```diff
-       const hm = null !== (Tm = null === (fm = mm.split("### Parameters:")[1]) || void 0 === fm ? void 0 : fm.split("###")[0]) && void 0 !== Tm ? Tm : "",
+       const pD = null !== (zD = null === (wD = DD.split("### Parameters:")[1]) || void 0 === wD ? void 0 : wD.split("###")[0]) && void 0 !== zD ? zD : "",
```

#### 442. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8685-L8687` → after: `L8685-L8687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8685-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8685-L8687) · [Before (L8685-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8685-L8687)

```diff
-         Am = `\\((?:[^()]*[\\s,])?${hm}(?![\\w$])[^()]*\\)`,
-         am = new RegExp(`(?:const|let|var)\\s+${hm}(?![\\w$])|${hm}\\s*(?:\\+?=(?![=>])|=>)|${Am}\\s*=>|function\\s*[\\w$]*\\s*${Am}`, "g");
-       return 1 === (0, OT.g)(mm, am, OT.n).length ? null === (fm = new RegExp(`\\b(?:const|let|var)\\s+${hm}\\s*=\\s*${AD}\\s*(?:;|//|$)`, "m").exec(mm)) || void 0 === fm ? void 0 : fm[1] : void 0
+         sD = `\\((?:[^()]*[\\s,])?${pD}(?![\\w$])[^()]*\\)`,
+         KD = new RegExp(`(?:const|let|var)\\s+${pD}(?![\\w$])|${pD}\\s*(?:\\+?=(?![=>])|=>)|${sD}\\s*=>|function\\s*[\\w$]*\\s*${sD}`, "g");
+       return 1 === (0, fz.f)(DD, KD, fz.o).length ? null === (wD = new RegExp(`\\b(?:const|let|var)\\s+${pD}\\s*=\\s*${sc}\\s*(?:;|//|$)`, "m").exec(DD)) || void 0 === wD ? void 0 : wD[1] : void 0
```

#### 443. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8696-L8697` → after: `L8696-L8697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8696-L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8696-L8697) · [Before (L8696-L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8696-L8697)

```diff
-           hm = -1 === fm ? Tm : Tm.slice(0, fm + 1);
-         return hm.length > 110 ? `${hm.slice(0,107)}...` : hm
+           pD = -1 === wD ? zD : zD.slice(0, wD + 1);
+         return pD.length > 110 ? `${pD.slice(0,107)}...` : pD
```

#### 444. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8699` → after: `L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8699) · [Before (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8699)

```diff
-       return hm = "api" === mm ? `api.${Tm}(${hD(fm).join(", ")})${Am?` \u2014 ${Am}`:""}` : "callback" === mm ? `${Tm}(${hD(fm).join(", ")})${Am?` \u2014 ${Am}`:""}` : "clientOption" === mm ? `${Tm}: ${function(mm){var Tm,fm;return null!==(Tm=null===(fm=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return pD = "api" === DD ? `api.${zD}(${pc(wD).join(", ")})${sD?` \u2014 ${sD}`:""}` : "callback" === DD ? `${zD}(${pc(wD).join(", ")})${sD?` \u2014 ${sD}`:""}` : "clientOption" === DD ? `${zD}: ${function(DD){var zD,wD;return null!==(zD=null===(wD=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 445. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8701` → after: `L8701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8701) · [Before (L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8701)

```diff
-         Tm.map((mm => `"${mm}"`)).join(" or ")
+         zD.map((DD => `"${DD}"`)).join(" or ")
```

#### 446. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8703` → after: `L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8703) · [Before (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8703)

```diff
-       The closest name is "${Tm[0]}", which may be something
+       The closest name is "${zD[0]}", which may be something
```

#### 447. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8705)

```diff
-       `}function pD(mm){return mm.split("\n").slice(1).map((mm=>mm.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((mm=>""!==mm&&!mm.startsWith("#")))}class ED{constructor(mm){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function Ac(DD){return DD.split("\n").slice(1).map((DD=>DD.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((DD=>""!==DD&&!DD.startsWith("#")))}class Uc{constructor(DD){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 448. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8709` → after: `L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8709) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8709)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();Tm.push({name:fm,text:Am})}return Tm}(fm))Tm.push(wD(mm,hm,Am))};fm("api",mm.apiReference),fm("callback",mm.callbacks),fm("clientOption",mm.clientOptions),fm("snippet",mm.snippets),fm("howTo",mm.howTo);const hm=function(){const mm … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();zD.push({name:wD,text:sD})}return zD}(wD))zD.push(Lc(DD,pD,sD))};wD("api",DD.apiReference),wD("callback",DD.callbacks),wD("clientOption",DD.clientOptions),wD("snippet",DD.snippets),wD("howTo",DD.howTo);const pD=function(){const DD … [truncated]
```

#### 449. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8720-L8721` → after: `L8720-L8721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8720-L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8720-L8721) · [Before (L8720-L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8720-L8721)

```diff
-       n\ nUsage: \`${mm.signature}\`\n\n\`\`\`js\n${mm.example}\n\`\`\``)),
-   Tm = Yh.map((mm => `## ${mm.name}\nPrefab (${mm.kind}, ${mm.category}): put in with use_prefab. ${eh(mm,!1)}`));
+       n\ nUsage: \`${DD.signature}\`\n\n\`\`\`js\n${DD.example}\n\`\`\``)),
+   zD = fp.map((DD => `## ${DD.name}\nPrefab (${DD.kind}, ${DD.category}): put in with use_prefab. ${xp(DD,!1)}`));
```

#### 450. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8723-L8724` → after: `L8723-L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8723-L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8723-L8724) · [Before (L8723-L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8723-L8724)

```diff
-     helpers: `# Ready-made functions\n\n${mm.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${Tm.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${DD.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${zD.join("\n\n")}\n`
```

#### 451. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8732)

```diff
-     this.wordCounts.set(mm, (null !== (Am = this.wordCounts.get(mm)) && void 0 !== Am ? Am : 0) + 1)
+     this.wordCounts.set(DD, (null !== (sD = this.wordCounts.get(DD)) && void 0 !== sD ? sD : 0) + 1)
```

#### 452. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8737` → after: `L8737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8737) · [Before (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8737)

```diff
-   const hm = null !== (Tm = null === (fm = mm.split("## Mob Variations")[1]) || void 0 === fm ? void 0 : fm.split("```")[1]) && void 0 !== Tm ? Tm : "",
+   const pD = null !== (zD = null === (wD = DD.split("## Mob Variations")[1]) || void 0 === wD ? void 0 : wD.split("```")[1]) && void 0 !== zD ? zD : "",
```

#### 453. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8760` → after: `L8760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8760) · [Before (L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8760)

```diff
-       return null !== (Tm = mm[1]) && void 0 !== Tm ? Tm : mm[2]
+       return null !== (zD = DD[1]) && void 0 !== zD ? zD : DD[2]
```

#### 454. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8767` → after: `L8767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8767) · [Before (L8767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8767)

```diff
-     for (const Am of (0, OT.g)(mm, /([\w$]+)\s*\(/g, OT.n)) {
+     for (const sD of (0, fz.f)(DD, /([\w$]+)\s*\(/g, fz.o)) {
```

#### 455. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8771` → after: `L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8771) · [Before (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8771)

```diff
-       am.has(xm) || hm.has(xm) || wm || "api" !== (null === (fm = this.byName.get(xm)) || void 0 === fm ? void 0 : fm.kind) || am.set(xm, `Line ${Tm+1} calls ${xm} without "api.", so it throws there. Did you mean api.${xm}?`)
+       KD.has(rD) || pD.has(rD) || LD || "api" !== (null === (wD = this.byName.get(rD)) || void 0 === wD ? void 0 : wD.kind) || KD.set(rD, `Line ${zD+1} calls ${rD} without "api.", so it throws there. Did you mean api.${rD}?`)
```

#### 456. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8780-L8781` → after: `L8780-L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8780-L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8780-L8781) · [Before (L8780-L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8780-L8781)

```diff
-     const Tm = this.find(mm.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((mm => "api" === mm.kind)).slice(0, 2).map((mm => `api.${mm.name}`));
-     return `api.${mm} doesn't exist.${Tm.length?` Did you mean ${Tm.join(" or ")}?`:""}`
+     const zD = this.find(DD.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((DD => "api" === DD.kind)).slice(0, 2).map((DD => `api.${DD.name}`));
+     return `api.${DD} doesn't exist.${zD.length?` Did you mean ${zD.join(" or ")}?`:""}`
```

#### 457. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8801` → after: `L8801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8801) · [Before (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8801)

```diff
-         Em = pm ? null === (Dm = new RegExp(`(?:^|[{,])\\s*${pm.replaceAll("$","\\$")}\\s*:\\s*${AD}`, "m").exec(mm)) || void 0 === Dm ? void 0 : Dm[1] : void 0,
+         UD = AD ? null === (cD = new RegExp(`(?:^|[{,])\\s*${AD.replaceAll("$","\\$")}\\s*:\\s*${sc}`, "m").exec(DD)) || void 0 === cD ? void 0 : cD[1] : void 0,
```

#### 458. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8803-L8804` → after: `L8803-L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8803-L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8803-L8804) · [Before (L8803-L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8803-L8804)

```diff
-         Om = null !== (im = null === (Rm = new RegExp(`\\?\\s*${AD}\\s*:\\s*${AD}$`).exec(hm)) || void 0 === Rm ? void 0 : Rm.slice(1)) && void 0 !== im ? im : [];
-       for (const mm of [null !== (Ym = null !== Em && void 0 !== Em ? Em : om) && void 0 !== Ym ? Ym : hm, ...Om]) {
+         ID = null !== (gD = null === (RD = new RegExp(`\\?\\s*${sc}\\s*:\\s*${sc}$`).exec(pD)) || void 0 === RD ? void 0 : RD.slice(1)) && void 0 !== gD ? gD : [];
+       for (const DD of [null !== (BD = null !== UD && void 0 !== UD ? UD : fD) && void 0 !== BD ? BD : pD, ...ID]) {
```

#### 459. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8812` → after: `L8812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8812) · [Before (L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8812)

```diff
-   return [...fm].map((mm => `"${mm}" isn't an item or block name.${RD(this.suggestNames(mm))}`))
+   return [...wD].map((DD => `"${DD}" isn't an item or block name.${Rc(this.suggestNames(DD))}`))
```

#### 460. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8827` → after: `L8827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8827) · [Before (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8827)

```diff
-       return `"${Tm}" isn't a block or item name, so comparing with it is never true. Did you mean "${fm}"?`
+       return `"${zD}" isn't a block or item name, so comparing with it is never true. Did you mean "${wD}"?`
```

#### 461. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8832-L8833` → after: `L8832-L8833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8832-L8833) · [Before (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8832-L8833)

```diff
-       fm = this.blockNames.has(Tm) || !this.itemAndBlockNames.includes(Tm) ? void 0 : [`Block of ${Tm}`, `${Tm} Block`].find((mm => this.blockNames.has(mm)));
-     !fm || mm.includes(`"${fm}"`) || mm.includes(`'${fm}'`) || xm.set(Tm, fm)
+       wD = this.blockNames.has(zD) || !this.itemAndBlockNames.includes(zD) ? void 0 : [`Block of ${zD}`, `${zD} Block`].find((DD => this.blockNames.has(DD)));
+     !wD || DD.includes(`"${wD}"`) || DD.includes(`'${wD}'`) || rD.set(zD, wD)
```

#### 462. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8837` → after: `L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8837) · [Before (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8837)

```diff
-     return `"${Tm}" is an item, not a block, so no block is ever called that. Did you mean "${fm}"?`
+     return `"${zD}" is an item, not a block, so no block is ever called that. Did you mean "${wD}"?`
```

#### 463. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8854-L8855` → after: `L8854-L8855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8854-L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8854-L8855) · [Before (L8854-L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8854-L8855)

```diff
-       } : hm.names.length > 0 || hm.isDecided ? hm : {
-         names: fm.length <= 2 ? fm : [],
+       } : pD.names.length > 0 || pD.isDecided ? pD : {
+         names: wD.length <= 2 ? wD : [],
```

#### 464. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8859` → after: `L8859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8859) · [Before (L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8859)

```diff
-     return `"${mm}" isn't a block or item name, so comparing a block with it is never true.${RD(Am)}`
+     return `"${DD}" isn't a block or item name, so comparing a block with it is never true.${Rc(sD)}`
```

#### 465. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8874-L8875` → after: `L8874-L8875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8874-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8874-L8875) · [Before (L8874-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8874-L8875)

```diff
-           name: null !== (Am = fm[1]) && void 0 !== Am ? Am : fm[2],
-           body: mm.slice(fm.index, null !== (am = null === (xm = Tm[hm + 1]) || void 0 === xm ? void 0 : xm.index) && void 0 !== am ? am : mm.length)
+           name: null !== (sD = wD[1]) && void 0 !== sD ? sD : wD[2],
+           body: DD.slice(wD.index, null !== (KD = null === (rD = zD[pD + 1]) || void 0 === rD ? void 0 : rD.index) && void 0 !== KD ? KD : DD.length)
```

#### 466. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8883` → after: `L8883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8883) · [Before (L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8883)

```diff
-         if (mm.text.includes(`"${hm}"`)) continue;
+         if (DD.text.includes(`"${pD}"`)) continue;
```

#### 467. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8885-L8886` → after: `L8885-L8886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8885-L8886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8885-L8886) · [Before (L8885-L8886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8885-L8886)

```diff
-           xm = am.length > 0 ? `Did you mean ${am.map((mm=>`"${mm}"`)).join(" or ")}?` : /Return false/i.test(mm.text) ? `To stop it, return false instead of "${hm}".` : "Check Show Docs for what it can return.";
-         Tm.add(`${fm} can't use "${hm}" to stop anything. ${xm}`)
+           rD = KD.length > 0 ? `Did you mean ${KD.map((DD=>`"${DD}"`)).join(" or ")}?` : /Return false/i.test(DD.text) ? `To stop it, return false instead of "${pD}".` : "Check Show Docs for what it can return.";
+         zD.add(`${wD} can't use "${pD}" to stop anything. ${rD}`)
```

#### 468. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8908` → after: `L8908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8908) · [Before (L8908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8908)

```diff
-     am = null !== (Tm = this.namesByLowerCase.get(fm)) && void 0 !== Tm ? Tm : this.namesByLowerCase.get(Am);
+     KD = null !== (zD = this.namesByLowerCase.get(wD)) && void 0 !== zD ? zD : this.namesByLowerCase.get(sD);
```

#### 469. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8940` → after: `L8940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8940) · [Before (L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8940)

```diff
-       mm && hm.set(mm, (null !== (fm = hm.get(mm)) && void 0 !== fm ? fm : 0) + Tm)
+       DD && pD.set(DD, (null !== (wD = pD.get(DD)) && void 0 !== wD ? wD : 0) + zD)
```

#### 470. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8946` → after: `L8946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8946) · [Before (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8946)

```diff
-   for (const pm of `${mm}\n${Tm}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const AD of `${DD}\n${zD}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 471. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8948` → after: `L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8948) · [Before (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8948)

```diff
-     Am(this.byName.get(null !== (wm = null !== (Dm = pm[1]) && void 0 !== Dm ? Dm : pm[2]) && void 0 !== wm ? wm : pm[3]), pm[1] || pm[2] ? 4 : 2)
+     sD(this.byName.get(null !== (LD = null !== (cD = AD[1]) && void 0 !== cD ? cD : AD[2]) && void 0 !== LD ? LD : AD[3]), AD[1] || AD[2] ? 4 : 2)
```

#### 472. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8950` → after: `L8950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8950) · [Before (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8950)

```diff
-   for (const pm of (0, OT.g)(Tm, /([A-Za-z_$][\w$]*)\s*\(/g, OT.n)) {
+   for (const AD of (0, fz.f)(zD, /([A-Za-z_$][\w$]*)\s*\(/g, fz.o)) {
```

#### 473. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8959-L8960` → after: `L8959-L8960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8959-L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8959-L8960) · [Before (L8959-L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8959-L8960)

```diff
-       const fm = 1 / Math.log2(2 + (null !== (Rm = this.wordCounts.get(Tm)) && void 0 !== Rm ? Rm : 0));
-       pm.nameWords.has(Tm) ? mm += 3 * fm : pm.textWords.has(Tm) && (mm += fm)
+       const wD = 1 / Math.log2(2 + (null !== (RD = this.wordCounts.get(zD)) && void 0 !== RD ? RD : 0));
+       AD.nameWords.has(zD) ? DD += 3 * wD : AD.textWords.has(zD) && (DD += wD)
```

#### 474. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8976` → after: `L8976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L8976) · [Before (L8976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L8976)

```diff
-   return null !== (Tm = null !== (fm = this.byName.get(hm)) && void 0 !== fm ? fm : this.sections.find((mm => mm.name.toLowerCase() === Am))) && void 0 !== Tm ? Tm : null
+   return null !== (zD = null !== (wD = this.byName.get(pD)) && void 0 !== wD ? wD : this.sections.find((DD => DD.name.toLowerCase() === sD))) && void 0 !== zD ? zD : null
```

#### 475. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9013` → after: `L9013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9013) · [Before (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9013)

```diff
-         hm = new RegExp(`(^|[^\\w$.])${fm}\\s*\\(`),
+         pD = new RegExp(`(^|[^\\w$.])${wD}\\s*\\(`),
```

#### 476. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9039` → after: `L9039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9039) · [Before (L9039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9039)

```diff
-         when: `in ${fm[1]}`,
+         when: `in ${wD[1]}`,
```

#### 477. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9046` → after: `L9046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9046) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9046)

```diff
-     wm = am && Tm ? ` ${am}` : "",
+     LD = KD && zD ? ` ${KD}` : "",
```

#### 478. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9050-L9051` → after: `L9050-L9051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9050-L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9050-L9051) · [Before (L9050-L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9050-L9051)

```diff
-     const mm = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (im = null === (Rm = Am[0]) || void 0 === Rm ? void 0 : Rm.trim()) && void 0 !== im ? im : ""),
-       Tm = null === (pm = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (Em = null === (om = Am[1]) || void 0 === om ? void 0 : om.trim()) && void 0 !== Em ? Em : "")) || void 0 === pm ? void 0 : pm[1],
+     const DD = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (gD = null === (RD = sD[0]) || void 0 === RD ? void 0 : RD.trim()) && void 0 !== gD ? gD : ""),
+       zD = null === (AD = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (UD = null === (fD = sD[1]) || void 0 === fD ? void 0 : fD.trim()) && void 0 !== UD ? UD : "")) || void 0 === AD ? void 0 : AD[1],
```

#### 479. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9054` → after: `L9054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9054) · [Before (L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9054)

```diff
-         return /^(a|an|the)\s/i.test(Tm) || !/^[a-z]/i.test(Tm) ? Tm : `${/^[aeiou]/i.test(Tm)?"an":"a"} ${Tm}`
+         return /^(a|an|the)\s/i.test(zD) || !/^[a-z]/i.test(zD) ? zD : `${/^[aeiou]/i.test(zD)?"an":"a"} ${zD}`
```

#### 480. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9056` → after: `L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9056) · [Before (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9056)

```diff
-     return fm && null !== mm && void 0 !== mm && mm[3] ? `api.${Dm[1]} needs ${fm}, but it got ${mm[3]}${wm}.` : mm ? `api.${Dm[1]} couldn't use its ${Om=Number(mm[1]),1===Om?"first":2===Om?"second":3===Om?"third":4===Om?"fourth":`#${Om}`} argument${wm}.${fm?` It needs ${fm}.`:"" … [truncated]
+     return wD && null !== DD && void 0 !== DD && DD[3] ? `api.${cD[1]} needs ${wD}, but it got ${DD[3]}${LD}.` : DD ? `api.${cD[1]} couldn't use its ${ID=Number(DD[1]),1===ID?"first":2===ID?"second":3===ID?"third":4===ID?"fourth":`#${ID}`} argument${LD}.${wD?` It needs ${wD}.`:"" … [truncated]
```

#### 481. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9060` → after: `L9060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9060) · [Before (L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9060)

```diff
-   if (Ym) return Ym[1] ? `${Ym[1]} isn't a function${wm}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${wm}. Check each name it calls is spelt exactly right.`;
+   if (BD) return BD[1] ? `${BD[1]} isn't a function${LD}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${LD}. Check each name it calls is spelt exactly right.`;
```

#### 482. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9062` → after: `L9062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9062) · [Before (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9062)

```diff
-   if (qm) return `${qm[1]} isn't defined${wm}. Check the spelling, or create it before using it.`;
+   if (GD) return `${GD[1]} isn't defined${LD}. Check the spelling, or create it before using it.`;
```

#### 483. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9066-L9067` → after: `L9066-L9067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9066-L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9066-L9067) · [Before (L9066-L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9066-L9067)

```diff
-     const mm = null !== (Vm = jm[1]) && void 0 !== Vm ? Vm : jm[3];
-     return `Your code tried to read${mm?` .${mm}`:" something"} from ${jm[2]}${wm}: a value it expected wasn't there.`
+     const DD = null !== (nD = hD[1]) && void 0 !== nD ? nD : hD[3];
+     return `Your code tried to read${DD?` .${DD}`:" something"} from ${hD[2]}${LD}: a value it expected wasn't there.`
```

#### 484. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9069` → after: `L9069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9069) · [Before (L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9069)

```diff
-   return `Your code hit an error${wm}: ${xm.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${LD}: ${rD.replace(/^\w*Error:\s*/,"")}`
```

#### 485. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9148` → after: `L9148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9148) · [Before (L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9148)

```diff
-   return mm.replaceAll(`"${Tm}"`, `"${fm}"`).replaceAll(`'${Tm}'`, `'${fm}'`)
+   return DD.replaceAll(`"${zD}"`, `"${wD}"`).replaceAll(`'${zD}'`, `'${wD}'`)
```

#### 486. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9152` → after: `L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9152) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9152)

```diff
-   const fm = mm => zm().isIdentifier(mm) ? mm.text === Tm : mm.elements.some((mm => !zm().isOmittedExpression(mm) && fm(mm.name))),
+   const wD = DD => VD().isIdentifier(DD) ? DD.text === zD : DD.elements.some((DD => !VD().isOmittedExpression(DD) && wD(DD.name))),
```

#### 487. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9165` → after: `L9165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9165) · [Before (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9165)

```diff
-       return (null === mm || void 0 === mm || null === (fm = mm.name) || void 0 === fm ? void 0 : fm.text) === Tm || void 0 !== hm && (zm().isNamespaceImport(hm) ? hm.name.text === Tm : hm.elements.some((mm => mm.name.text === Tm)))
+       return (null === DD || void 0 === DD || null === (wD = DD.name) || void 0 === wD ? void 0 : wD.text) === zD || void 0 !== pD && (VD().isNamespaceImport(pD) ? pD.name.text === zD : pD.elements.some((DD => DD.name.text === zD)))
```

#### 488. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9179` → after: `L9179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9179) · [Before (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9179)

```diff
-             text: `${fm}${Tm}${fm}`
+             text: `${wD}${zD}${wD}`
```

#### 489. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9191` → after: `L9191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9191) · [Before (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9191)

```diff
-                 edit: am(Am, zm().isShorthandPropertyAssignment(mm) ? `${hm}: ${fm}` : hm),
+                 edit: KD(sD, VD().isShorthandPropertyAssignment(DD) ? `${pD}: ${wD}` : pD),
```

#### 490. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9193` → after: `L9193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9193) · [Before (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9193)

```diff
-                 mO: wm
+                 Nf: LD
```

#### 491. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9206` → after: `L9206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9206) · [Before (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9206)

```diff
-         return Gf(mm, xm.flatMap((mm => mm.depth !== Tm || mm.mO ? [] : [mm.edit])))
+         return bw(DD, rD.flatMap((DD => DD.depth !== zD || DD.Nf ? [] : [DD.edit])))
```

#### 492. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9244` → after: `L9244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9244) · [Before (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9244)

```diff
-               text: zm().isShorthandPropertyAssignment(im) ? `${Tm}: ${fm}` : fm
+               text: VD().isShorthandPropertyAssignment(gD) ? `${zD}: ${wD}` : wD
```

#### 493. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9254-L9255` → after: `L9254-L9255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9254-L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9254-L9255) · [Before (L9254-L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9254-L9255)

```diff
-       const Tm = `(["'])${function(mm){return mm.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(fm)}\\1`;
-       return ("comparedBlock" === Am ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${Tm}`, `${Tm}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${Tm}`, `${Tm}\\s*[!=]==?`, `\\bcase\\s+${Tm}\\s*:`, `\\.includes\\(\\s*${Tm}\\s*\\)`]).reduce(((mm, Tm) => mm.replace(new RegExp(Tm, "g"), … [truncated]
+       const zD = `(["'])${function(DD){return DD.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(wD)}\\1`;
+       return ("comparedBlock" === sD ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${zD}`, `${zD}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${zD}`, `${zD}\\s*[!=]==?`, `\\bcase\\s+${zD}\\s*:`, `\\.includes\\(\\s*${zD}\\s*\\)`]).reduce(((DD, zD) => DD.replace(new RegExp(zD, "g"), … [truncated]
```

#### 494. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9265` → after: `L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9265) · [Before (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9265)

```diff
-   return "export" === mm.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "null" === mm.kind ? `The null given to ${mm.method} is gone.` : `"${mm.from}" is now "${mm.to}".`
+   return "export" === DD.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "null" === DD.kind ? `The null given to ${DD.method} is gone.` : `"${DD.from}" is now "${DD.to}".`
```

#### 495. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9267)

```diff
- var GD = fm(41516);
+ var dc = wD(41361);
```

#### 496. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9324` → after: `L9324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9324) · [Before (L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9324)

```diff
-       return Am ? `${hm} didn't accept your key: it may be wrong or deleted.` : `${hm} didn't accept your key: it may be wrong or deleted. Check it on ${hm}'s website.`;
+       return sD ? `${pD} didn't accept your key: it may be wrong or deleted.` : `${pD} didn't accept your key: it may be wrong or deleted. Check it on ${pD}'s website.`;
```

#### 497. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9326` → after: `L9326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9326) · [Before (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9326)

```diff
-       return Am ? `${hm} stopped your key for now: it has used all it can.` : `${hm} stopped your key for now: it has used all it can. Check it on ${hm}'s website.`;
+       return sD ? `${pD} stopped your key for now: it has used all it can.` : `${pD} stopped your key for now: it has used all it can. Check it on ${pD}'s website.`;
```

#### 498. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9328` → after: `L9328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9328) · [Before (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9328)

```diff
-       return `Too many requests to ${fm} right now. Wait a minute and try again.`;
+       return `Too many requests to ${wD} right now. Wait a minute and try again.`;
```

#### 499. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9330` → after: `L9330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9330) · [Before (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9330)

```diff
-       return `${hm} can't find ${fm}. Pick another model, or press Check for new models in AI settings.`;
+       return `${pD} can't find ${wD}. Pick another model, or press Check for new models in AI settings.`;
```

#### 500. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9332` → after: `L9332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9332) · [Before (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9332)

```diff
-       return `${fm} took too long to answer.`;
+       return `${wD} took too long to answer.`;
```

#### 501. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9334` → after: `L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9334) · [Before (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9334)

```diff
-       return Am ? `Couldn't reach ${hm}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${hm}. Check your internet and your key.`;
+       return sD ? `Couldn't reach ${pD}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${pD}. Check your internet and your key.`;
```

#### 502. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9336` → after: `L9336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9336) · [Before (L9336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9336)

```diff
-       return `${hm} doesn't work from where you are.`;
+       return `${pD} doesn't work from where you are.`;
```

#### 503. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9340` → after: `L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9340) · [Before (L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9340)

```diff
-       return `${fm} can't be used right now. Try again in a minute.`
+       return `${wD} can't be used right now. Try again in a minute.`
```

#### 504. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9352` → after: `L9352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9352) · [Before (L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9352)

```diff
-       return `Not answered: ${hm} didn't accept your key.`;
+       return `Not answered: ${pD} didn't accept your key.`;
```

#### 505. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9354` → after: `L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9354) · [Before (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9354)

```diff
-       return `Not answered: ${hm} couldn't find ${fm}.`;
+       return `Not answered: ${pD} couldn't find ${wD}.`;
```

#### 506. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9356` → after: `L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9356) · [Before (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9356)

```diff
-       return `Not answered: ${hm} stopped your key for now.`;
+       return `Not answered: ${pD} stopped your key for now.`;
```

#### 507. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9358` → after: `L9358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9358) · [Before (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9358)

```diff
-       return `Not answered: too many requests to ${fm}.`;
+       return `Not answered: too many requests to ${wD}.`;
```

#### 508. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9360` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9360) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9360)

```diff
-       return `Not answered: ${fm} took too long.`;
+       return `Not answered: ${wD} took too long.`;
```

#### 509. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9362` → after: `L9362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9362) · [Before (L9362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9362)

```diff
-       return `Not answered: couldn't reach ${hm}.`;
+       return `Not answered: couldn't reach ${pD}.`;
```

#### 510. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9364` → after: `L9364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9364) · [Before (L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9364)

```diff
-       return `Not answered: ${hm} doesn't work from where you are.`;
+       return `Not answered: ${pD} doesn't work from where you are.`;
```

#### 511. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9368` → after: `L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9368) · [Before (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9368)

```diff
-       return `Not answered: ${fm} couldn't be used.`
+       return `Not answered: ${wD} couldn't be used.`
```

#### 512. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9386` → after: `L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9386) · [Before (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9386)

```diff
-       ...GD.f,
+       ...dc.e,
```

#### 513. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9519` → after: `L9519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9519) · [Before (L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9519)

```diff
-       return "" === mm ? "no key needed" : mm.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === Tm ? `key \u2026${mm.slice(-4)}` : `${(null!==(fm=null===(hm=/^[a-zA-Z]+-/.exec(mm))||void 0===hm?void 0:hm[0])&&void 0!==fm?fm:mm.slice(0,4)).slice(0,6)}\u2026${mm.slice(-4)}`
+       return "" === DD ? "no key needed" : DD.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === zD ? `key \u2026${DD.slice(-4)}` : `${(null!==(wD=null===(pD=/^[a-zA-Z]+-/.exec(DD))||void 0===pD?void 0:pD[0])&&void 0!==wD?wD:DD.slice(0,4)).slice(0,6)}\u2026${DD.slice(-4)}`
```

#### 514. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9541` → after: `L9541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9541) · [Before (L9541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9541)

```diff
-         "aria-label": `Edit ${am} key`,
+         "aria-label": `Edit ${KD} key`,
```

#### 515. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9546` → after: `L9546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9546) · [Before (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9546)

```diff
-         "aria-label": `Rename ${am} key`,
+         "aria-label": `Rename ${KD} key`,
```

#### 516. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9567` → after: `L9567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9567) · [Before (L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9567)

```diff
-     jm = `${Em}-${null!==(Tm=null===Rm||void 0===Rm?void 0:Rm.keyId)&&void 0!==Tm?Tm:"botxd"}-${null!==(fm=null===Rm||void 0===Rm?void 0:Rm.modelId)&&void 0!==fm?fm:"botxd"}`.replace(/[^\w-]/g, "_"),
+     hD = `${UD}-${null!==(zD=null===RD||void 0===RD?void 0:RD.keyId)&&void 0!==zD?zD:"botxd"}-${null!==(wD=null===RD||void 0===RD?void 0:RD.modelId)&&void 0!==wD?wD:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 517. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9571-L9573` → after: `L9571-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9571-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9571-L9573) · [Before (L9571-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9571-L9573)

```diff
-     "data-key-id": null !== (Am = null === Rm || void 0 === Rm ? void 0 : Rm.keyId) && void 0 !== Am ? Am : "botxd",
-     "data-model-id": null !== (wm = null === Rm || void 0 === Rm ? void 0 : Rm.modelId) && void 0 !== wm ? wm : "botxd",
-     title: null !== Ym && void 0 !== Ym ? Ym : void 0,
+     "data-key-id": null !== (sD = null === RD || void 0 === RD ? void 0 : RD.keyId) && void 0 !== sD ? sD : "botxd",
+     "data-model-id": null !== (LD = null === RD || void 0 === RD ? void 0 : RD.modelId) && void 0 !== LD ? LD : "botxd",
+     title: null !== BD && void 0 !== BD ? BD : void 0,
```

#### 518. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9581` → after: `L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9581) · [Before (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9581)

```diff
-       "aria-describedby": im ? jm : void 0,
+       "aria-describedby": gD ? hD : void 0,
```

#### 519. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9608` → after: `L9608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9608) · [Before (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9608)

```diff
-     oN: Dm,
+     hT: cD,
```

#### 520. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9631)

```diff
-           at: null !== (fm = mm.usedAt) && void 0 !== fm ? fm : 0,
+           at: null !== (wD = DD.usedAt) && void 0 !== wD ? wD : 0,
```

#### 521. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9654` → after: `L9654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9654) · [Before (L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9654)

```diff
-     Sm = `${Tm}-model`,
+     TD = `${zD}-model`,
```

#### 522. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9667` → after: `L9667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9667) · [Before (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9667)

```diff
-       }, null !== (hm = null === fm || void 0 === fm ? void 0 : fm.modelId) && void 0 !== hm ? hm : "botxd")
+       }, null !== (pD = null === wD || void 0 === wD ? void 0 : wD.modelId) && void 0 !== pD ? pD : "botxd")
```

#### 523. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9675` → after: `L9675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9675) · [Before (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9675)

```diff
-       hint: null !== jm && void 0 !== jm ? jm : `Bloxd's better AI. ${qm.status?Sw(qm.status):""}`.trim(),
+       hint: null !== hD && void 0 !== hD ? hD : `Bloxd's better AI. ${GD.status?TL(GD.status):""}`.trim(),
```

#### 524. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9681` → after: `L9681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9681) · [Before (L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9681)

```diff
-         jw(null !== (mm = null === (Tm = qm.status) || void 0 === Tm ? void 0 : Tm.provider) && void 0 !== mm ? mm : "ovh") && Iw.Do()
+         nL(null !== (DD = null === (zD = GD.status) || void 0 === zD ? void 0 : zD.provider) && void 0 !== DD ? DD : "ovh") && OL.HU()
```

#### 525. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9686` → after: `L9686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9686) · [Before (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9686)

```diff
-           if (jw(null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.provider) && void 0 !== Tm ? Tm : "ovh")) return Iw.Do(), !0;
+           if (nL(null !== (zD = null === DD || void 0 === DD ? void 0 : DD.provider) && void 0 !== zD ? zD : "ovh")) return OL.HU(), !0;
```

#### 526. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9694` → after: `L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9694) · [Before (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9694)

```diff
-             }] = await Promise.all([Promise.resolve().then((() => fm(1354))), fm.e(355).then((() => fm(61361)))]), hm = mm.showPromptPopup({
+             }] = await Promise.all([Promise.resolve().then((() => wD(1355))), wD.e(355).then((() => wD(61060)))]), pD = DD.showPromptPopup({
```

#### 527. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9705` → after: `L9705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9705) · [Before (L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9705)

```diff
-             }(), Iw.Do(), !0)
+             }(), OL.HU(), !0)
```

#### 528. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9718-L9719` → after: `L9718-L9719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9718-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9718-L9719) · [Before (L9718-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9718-L9719)

```diff
-         Sm = jm ? null !== (Tm = mm.models.find((Tm => Tm.id === mm.usedModelId))) && void 0 !== Tm ? Tm : Tw(mm.models) : void 0,
-         Nm = null !== (fm = null === (hm = nm[mm.id]) || void 0 === hm ? void 0 : hm.trim().toLowerCase()) && void 0 !== fm ? fm : "",
+         TD = hD ? null !== (zD = DD.models.find((zD => zD.id === DD.usedModelId))) && void 0 !== zD ? zD : wL(DD.models) : void 0,
+         jD = null !== (wD = null === (pD = ED[DD.id]) || void 0 === pD ? void 0 : pD.trim().toLowerCase()) && void 0 !== wD ? wD : "",
```

#### 529. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9732` → after: `L9732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9732) · [Before (L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9732)

```diff
-             keyName: null !== (Am = mm.name) && void 0 !== Am ? Am : "",
+             keyName: null !== (sD = DD.name) && void 0 !== sD ? sD : "",
```

#### 530. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9748` → after: `L9748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9748) · [Before (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9748)

```diff
-             "aria-label": `Check ${qm} for new models`,
+             "aria-label": `Check ${GD} for new models`,
```

#### 531. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9756` → after: `L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9756) · [Before (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9756)

```diff
-             "aria-label": `Remove ${qm} key`,
+             "aria-label": `Remove ${GD} key`,
```

#### 532. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9764` → after: `L9764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9764) · [Before (L9764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9764)

```diff
-             "aria-label": `Remove ${qm} key?`,
+             "aria-label": `Remove ${GD} key?`,
```

#### 533. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9770` → after: `L9770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9770) · [Before (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9770)

```diff
-               "aria-label": `Yes, remove ${qm} key`,
+               "aria-label": `Yes, remove ${GD} key`,
```

#### 534. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9777` → after: `L9777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9777) · [Before (L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9777)

```diff
-               "aria-label": `No, keep ${qm} key`,
+               "aria-label": `No, keep ${GD} key`,
```

#### 535. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9791-L9793` → after: `L9791-L9793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9791-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9791-L9793) · [Before (L9791-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9791-L9793)

```diff
-           "aria-label": `Find a model from ${qm}`,
-           placeholder: `Find a model (${mm.models.length})`,
-           value: null !== (Om = nm[mm.id]) && void 0 !== Om ? Om : "",
+           "aria-label": `Find a model from ${GD}`,
+           placeholder: `Find a model (${DD.models.length})`,
+           value: null !== (ID = ED[DD.id]) && void 0 !== ID ? ID : "",
```

#### 536. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9809` → after: `L9809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9809) · [Before (L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9809)

```diff
-           "aria-label": `Show all ${qm} models`,
+           "aria-label": `Show all ${GD} models`,
```

#### 537. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9845` → after: `L9845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9845) · [Before (L9845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9845)

```diff
-         children: Tm ? Am : am
+         children: zD ? sD : KD
```

#### 538. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9965` → after: `L9965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L9965) · [Before (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L9965)

```diff
-           children: [1 === wm.length ? "Forget your key" : `Forget all ${wm.length} keys`, " in this browser?", (0, xm.jsx)("button", {
+           children: [1 === LD.length ? "Forget your key" : `Forget all ${LD.length} keys`, " in this browser?", (0, rD.jsx)("button", {
```

#### 539. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10029` → after: `L10029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10029) · [Before (L10029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10029)

```diff
-                 text: `${Tm} listed no models, so your models stay as they were.`
+                 text: `${zD} listed no models, so your models stay as they were.`
```

#### 540. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10035` → after: `L10035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10035) · [Before (L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10035)

```diff
-                 text: `${Tm}'s models are up to date.`
+                 text: `${zD}'s models are up to date.`
```

#### 541. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10049` → after: `L10049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10049) · [Before (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10049)

```diff
-         oN: mm => {
+         hT: DD => {
```

#### 542. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10104` → after: `L10104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10104) · [Before (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10104)

```diff
-         null === (fm = null !== hm && void 0 !== hm ? hm : wm.current) || void 0 === fm || fm.scrollIntoView({
+         null === (wD = null !== pD && void 0 !== pD ? pD : LD.current) || void 0 === wD || wD.scrollIntoView({
```

#### 543. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10124` → after: `L10124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10124) · [Before (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10124)

```diff
-         children: Dm ? `An API key works like a password for ${Dm.shortName}'s AI (it isn't your ${Dm.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: cD ? `An API key works like a password for ${cD.shortName}'s AI (it isn't your ${cD.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 544. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10126` → after: `L10126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10126) · [Before (L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10126)

```diff
-         children: ["You make it on ", Dm ? `${Dm.shortName}'s website` : (0, xm.jsx)(wi, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", cD ? `${cD.shortName}'s website` : (0, rD.jsx)(rg, {}), ", and see how much you've used or delete it there."]
```

#### 545. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10128` → after: `L10128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10128) · [Before (L10128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10128)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (Tm = null === Dm || void 0 === Dm ? void 0 : Dm.shortName) && void 0 !== Tm ? Tm : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (zD = null === cD || void 0 === cD ? void 0 : cD.shortName) && void 0 !== zD ? zD : "that company", ", never to Bloxd."]
```

#### 546. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10187` → after: `L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10187) · [Before (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10187)

```diff
-   } = iw(), [Em, om] = (0, hm.useState)(null !== (Tm = null === Dm || void 0 === Dm ? void 0 : Dm.provider) && void 0 !== Tm ? Tm : null), [Om, Ym] = (0, hm.useState)(!!Dm), [qm, jm] = (0, hm.useState)(""), Vm = null !== (fm = null === Dm || void 0 === Dm ? void 0 : Dm.key) && vo … [truncated]
+   } = RL(), [UD, fD] = (0, pD.useState)(null !== (zD = null === cD || void 0 === cD ? void 0 : cD.provider) && void 0 !== zD ? zD : null), [ID, BD] = (0, pD.useState)(!!cD), [GD, hD] = (0, pD.useState)(""), nD = null !== (wD = null === cD || void 0 === cD ? void 0 : cD.key) && vo … [truncated]
```

#### 547. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10189` → after: `L10189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10189) · [Before (L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10189)

```diff
-     return mm === (null === Dm || void 0 === Dm ? void 0 : Dm.provider) && ("custom" !== mm || (null !== (Tm = kx(Qm)) && void 0 !== Tm ? Tm : "") === (null !== (fm = Dm.baseUrl) && void 0 !== fm ? fm : ""))
+     return DD === (null === cD || void 0 === cD ? void 0 : cD.provider) && ("custom" !== DD || (null !== (zD = xr(JD)) && void 0 !== zD ? zD : "") === (null !== (wD = cD.baseUrl) && void 0 !== wD ? wD : ""))
```

#### 548. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10192-L10193` → after: `L10192-L10193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10192-L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10192-L10193) · [Before (L10192-L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10192-L10193)

```diff
-     return "" === Tm && "" !== Vm && Jm(mm) ? Vm : Tm
-   }, [Zm, km] = (0, hm.useState)(""), [bm, Sm] = (0, hm.useState)(null !== (am = null === Dm || void 0 === Dm ? void 0 : Dm.name) && void 0 !== am ? am : ""), [em, Nm] = (0, hm.useState)(!1), [Gm, Xm] = (0, hm.useState)(null), [Pm, Hm] = (0, hm.useState)(""), [ym, Cm] = (0, hm.us … [truncated]
+     return "" === zD && "" !== nD && QD(DD) ? nD : zD
+   }, [PD, CD] = (0, pD.useState)(""), [xD, TD] = (0, pD.useState)(null !== (KD = null === cD || void 0 === cD ? void 0 : cD.name) && void 0 !== KD ? KD : ""), [bD, jD] = (0, pD.useState)(!1), [dD, SD] = (0, pD.useState)(null), [iD, lD] = (0, pD.useState)(""), [WD, ND] = (0, pD.us … [truncated]
```

#### 549. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10224` → after: `L10224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10224) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10224)

```diff
-           baseUrl: "custom" === Em && null !== (mm = kx(Qm)) && void 0 !== mm ? mm : void 0,
+           baseUrl: "custom" === UD && null !== (DD = xr(JD)) && void 0 !== DD ? DD : void 0,
```

#### 550. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10231` → after: `L10231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10231) · [Before (L10231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10231)

```diff
-         const fm = null !== Em && void 0 !== Em ? Em : Zx(Tm),
+         const wD = null !== UD && void 0 !== UD ? UD : Cr(zD),
```

#### 551. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10246-L10247` → after: `L10246-L10247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10246-L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10246-L10247) · [Before (L10246-L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10246-L10247)

```diff
-             baseUrl: null !== Am && void 0 !== Am ? Am : void 0,
-             modelName: em ? Zm : void 0
+             baseUrl: null !== sD && void 0 !== sD ? sD : void 0,
+             modelName: bD ? PD : void 0
```

#### 552. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10253` → after: `L10253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10253) · [Before (L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10253)

```diff
-           Hm(null !== (xm = null === (wm = null !== im && void 0 !== im ? im : Tw(mm)) || void 0 === wm ? void 0 : wm.id) && void 0 !== xm ? xm : "")
+           lD(null !== (rD = null === (LD = null !== gD && void 0 !== gD ? gD : wL(DD)) || void 0 === LD ? void 0 : LD.id) && void 0 !== rD ? rD : "")
```

#### 553. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10259-L10260` → after: `L10259-L10260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10259-L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10259-L10260) · [Before (L10259-L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10259-L10260)

```diff
-           const xm = "badKey" !== Am || Om ? "" : ` If it isn't from ${nx[fm].shortName}, pick the company it's from.`;
-           sm(`${Nx(Am,fm)}${xm}`)
+           const rD = "badKey" !== sD || ID ? "" : ` If it isn't from ${Qr[wD].shortName}, pick the company it's from.`;
+           yD(`${dr(sD,wD)}${rD}`)
```

#### 554. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10270` → after: `L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10270) · [Before (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10270)

```diff
-         value: null !== Em && void 0 !== Em ? Em : "",
+         value: null !== UD && void 0 !== UD ? UD : "",
```

#### 555. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10298` → after: `L10298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10298) · [Before (L10298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10298)

```diff
-       }), (!Dm || Qm !== (null !== (wm = Dm.baseUrl) && void 0 !== wm ? wm : "")) && (0, xm.jsx)(ii, {})]
+       }), (!cD || JD !== (null !== (LD = cD.baseUrl) && void 0 !== LD ? LD : "")) && (0, rD.jsx)(cg, {})]
```

#### 556. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10370` → after: `L10370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10370) · [Before (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10370)

```diff
-           keyId: null !== Em && void 0 !== Em ? Em : "",
+           keyId: null !== UD && void 0 !== UD ? UD : "",
```

#### 557. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10394` → after: `L10394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10394) · [Before (L10394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10394)

```diff
-         placeholder: Em && "custom" !== Em ? `Like My ${nx[Em].shortName}` : "Like Home server",
+         placeholder: UD && "custom" !== UD ? `Like My ${Qr[UD].shortName}` : "Like Home server",
```

#### 558. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10420` → after: `L10420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10420) · [Before (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10420)

```diff
-         children: ym ? um ? "Testing the connection\u2026" : "Testing your key\u2026" : dm ? `Save and use ${dm.name}` : um ? "Test connection" : "Test key"
+         children: WD ? eD ? "Testing the connection\u2026" : "Testing your key\u2026" : tD ? `Save and use ${tD.name}` : eD ? "Test connection" : "Test key"
```

#### 559. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10425-L10427` → after: `L10425-L10427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10425-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10425-L10427) · [Before (L10425-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10425-L10427)

```diff
- var oi = fm(1208),
-   Oi = fm(36992),
-   Yi = fm(36986);
+ var Ag = wD(1200),
+   Ug = wD(36845),
+   fg = wD(36841);
```

#### 560. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10438-L10439` → after: `L10438-L10439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10438-L10439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10438-L10439) · [Before (L10438-L10439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10438-L10439)

```diff
-   } = (0, oi.A)();
-   return (0, xm.jsx)(Yi.e, {
+   } = (0, Ag.E)();
+   return (0, rD.jsx)(fg.h, {
```

#### 561. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10442` → after: `L10442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10442) · [Before (L10442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10442)

```diff
-     text: am(`codeEditorAiTutorial:${Tm}`),
+     text: KD(`codeEditorAiTutorial:${zD}`),
```

#### 562. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10490` → after: `L10490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10490) · [Before (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10490)

```diff
-   return mm.model.name.toLowerCase().startsWith(Tm.toLowerCase()) ? mm.model.name : `${Tm} \xb7 ${mm.model.name}`
+   return DD.model.name.toLowerCase().startsWith(zD.toLowerCase()) ? DD.model.name : `${zD} \xb7 ${DD.model.name}`
```

#### 563. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10540` → after: `L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10540) · [Before (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10540)

```diff
-     Im = Vm ? "Bot.xd (free) \xb7 once" : im ? Ii(im) : pm ? ow : "Bot.xd (free)";
+     MD = nD ? "Bot.xd (free) \xb7 once" : gD ? hg(gD) : AD ? IL : "Bot.xd (free)";
```

#### 564. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10552` → after: `L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10552) · [Before (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10552)

```diff
-       "aria-label": `AI model: ${Im}`,
+       "aria-label": `AI model: ${MD}`,
```

#### 565. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10570` → after: `L10570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10570) · [Before (L10570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10570)

```diff
-         title: `Allow AI to make edits to my code is ${fm?"on":"off"}, in AI settings`,
+         title: `Allow AI to make edits to my code is ${wD?"on":"off"}, in AI settings`,
```

#### 566. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10638` → after: `L10638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10638) · [Before (L10638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10638)

```diff
-       fm(null !== (Tm = mm.error) && void 0 !== Tm ? Tm : new Error("IndexedDB transaction failed"))
+       wD(null !== (zD = DD.error) && void 0 !== zD ? zD : new Error("IndexedDB transaction failed"))
```

#### 567. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10641` → after: `L10641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10641) · [Before (L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10641)

```diff
-       fm(null !== (Tm = mm.error) && void 0 !== Tm ? Tm : new Error("IndexedDB transaction aborted"))
+       wD(null !== (zD = DD.error) && void 0 !== zD ? zD : new Error("IndexedDB transaction aborted"))
```

#### 568. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10645` → after: `L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10645) · [Before (L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10645)

```diff
- var Ji = fm(37013);
+ var Jg = wD(36871);
```

#### 569. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10676` → after: `L10676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10676) · [Before (L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10676)

```diff
-           if (Tm) return mm.includes(`"${Tm}"`) ? `"${Tm}"` : mm.includes(Tm) ? Tm : void 0
+           if (zD) return DD.includes(`"${zD}"`) ? `"${zD}"` : DD.includes(zD) ? zD : void 0
```

#### 570. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10680` → after: `L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10680) · [Before (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10680)

```diff
-         className: am()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${mm.kind}`, hm && "WorldCodeAiDiff-marked"),
+         className: KD()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${DD.kind}`, pD && "WorldCodeAiDiff-marked"),
```

#### 571. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10743` → after: `L10743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10743) · [Before (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10743)

```diff
-   return Am(mm) === Am(Tm) ? hm : Am(mm) === Am(Tm - 864e5) ? `yesterday ${hm}` : function(mm, Tm) {
+   return sD(DD) === sD(zD) ? pD : sD(DD) === sD(zD - 864e5) ? `yesterday ${pD}` : function(DD, zD) {
```

#### 572. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10746` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10746) · [Before (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10746)

```diff
-     if (fm < 60) return `${fm} min ago`;
+     if (wD < 60) return `${wD} min ago`;
```

#### 573. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10748` → after: `L10748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10748) · [Before (L10748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10748)

```diff
-     if (hm < 24) return `${hm} h ago`;
+     if (pD < 24) return `${pD} h ago`;
```

#### 574. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10750` → after: `L10750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10750) · [Before (L10750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10750)

```diff
-     return 1 === Am ? "1 day ago" : `${Am} days ago`
+     return 1 === sD ? "1 day ago" : `${sD} days ago`
```

#### 575. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10757-L10758` → after: `L10757-L10758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10757-L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10757-L10758) · [Before (L10757-L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10757-L10758)

```diff
-     const am = null !== (hm = mm.files[fm]) && void 0 !== hm ? hm : "";
-     return (null !== (Am = Tm[fm]) && void 0 !== Am ? Am : "") === am ? [] : [{
+     const KD = null !== (pD = DD.files[wD]) && void 0 !== pD ? pD : "";
+     return (null !== (sD = zD[wD]) && void 0 !== sD ? sD : "") === KD ? [] : [{
```

#### 576. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10770` → after: `L10770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10770) · [Before (L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10770)

```diff
-   return `${(hm>Tm/2?fm.slice(0,hm):fm).replace(/[\s,;:.]+$/,"")}\u2026`
+   return `${(pD>zD/2?wD.slice(0,pD):wD).replace(/[\s,;:.]+$/,"")}\u2026`
```

#### 577. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10781` → after: `L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10781) · [Before (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10781)

```diff
-   const [im, Rm] = (0, hm.useState)(!1), [pm, Em] = (0, hm.useState)(!1), om = Tm.did ? `Before: ${Tm.did}` : Tm.label, Om = ei(om), Ym = Tm.did && Tm.label.startsWith('Before "') ? Tm.label.slice(7) : null, qm = null === Ym ? null : ei(Ym, 50), jm = null !== qm && null !== Ym && … [truncated]
+   const [gD, RD] = (0, pD.useState)(!1), [AD, UD] = (0, pD.useState)(!1), fD = zD.did ? `Before: ${zD.did}` : zD.label, ID = xg(fD), BD = zD.did && zD.label.startsWith('Before "') ? zD.label.slice(7) : null, GD = null === BD ? null : xg(BD, 50), hD = null !== GD && null !== BD && … [truncated]
```

#### 578. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10806-L10807` → after: `L10806-L10807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10806-L10807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10806-L10807) · [Before (L10806-L10807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10806-L10807)

```diff
-     const am = null !== (hm = Tm.files[mm]) && void 0 !== hm ? hm : "",
-       xm = null !== (Am = fm[mm]) && void 0 !== Am ? Am : "";
+     const KD = null !== (pD = zD.files[DD]) && void 0 !== pD ? pD : "",
+       rD = null !== (sD = wD[DD]) && void 0 !== sD ? sD : "";
```

#### 579. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10821` → after: `L10821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10821) · [Before (L10821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10821)

```diff
-         children: [pm || !Om ? om : Om, (Om || jm) && (0, xm.jsx)("button", {
+         children: [AD || !ID ? fD : ID, (ID || hD) && (0, rD.jsx)("button", {
```

#### 580. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10833` → after: `L10833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10833) · [Before (L10833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10833)

```diff
-           children: ["You asked: ", pm || !jm ? Ym : jm]
+           children: ["You asked: ", AD || !hD ? BD : hD]
```

#### 581. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10914` → after: `L10914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10914) · [Before (L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10914)

```diff
-     pI: Am,
+     ZJ: sD,
```

#### 582. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10938` → after: `L10938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L10938) · [Before (L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L10938)

```diff
-           "aria-label": `Delete note: ${mm}`,
+           "aria-label": `Delete note: ${DD}`,
```

#### 583. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11077` → after: `L11077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11077) · [Before (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11077)

```diff
-       }, `${Tm}:${mm}`)))
+       }, `${zD}:${DD}`)))
```

#### 584. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11080` → after: `L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11080) · [Before (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11080)

```diff
-       children: ["Apply ", fm - hm > 1 ? `steps ${hm+1} to ${fm}` : `step ${fm}`, " to your code and try it, then build step ", fm + 1, "."]
+       children: ["Apply ", wD - pD > 1 ? `steps ${pD+1} to ${wD}` : `step ${wD}`, " to your code and try it, then build step ", wD + 1, "."]
```

#### 585. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11082` → after: `L11082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11082) · [Before (L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11082)

```diff
-       ...GD.f,
+       ...dc.e,
```

#### 586. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11087` → after: `L11087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11087) · [Before (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11087)

```diff
-       children: hm < fm ? `Build step ${fm+1} anyway` : `Build step ${fm+1}`
+       children: pD < wD ? `Build step ${wD+1} anyway` : `Build step ${wD+1}`
```

#### 587. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11099` → after: `L11099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11099) · [Before (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11099)

```diff
-   return `${mm}\n\nYou asked me: "${Tm}" ${null===fm?"I don't mind: choose what works best.":`My answer: ${fm.replace(/\.$/,"")}.`} Build it now, without asking again.`
+   return `${DD}\n\nYou asked me: "${zD}" ${null===wD?"I don't mind: choose what works best.":`My answer: ${wD.replace(/\.$/,"")}.`} Build it now, without asking again.`
```

#### 588. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11118-L11119` → after: `L11118-L11119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11118-L11119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11118-L11119) · [Before (L11118-L11119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11118-L11119)

```diff
-           ...GD.f,
-           key: `${Tm}:${mm}`,
+           ...dc.e,
+           key: `${zD}:${DD}`,
```

#### 589. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11152` → after: `L11152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11152) · [Before (L11152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11152)

```diff
-         ...GD.f,
+         ...dc.e,
```

#### 590. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11325` → after: `L11325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11325) · [Before (L11325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11325)

```diff
-       Qm = null !== Im && void 0 !== Im ? Im : Am;
+       JD = null !== MD && void 0 !== MD ? MD : sD;
```

#### 591. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11329-L11331` → after: `L11329-L11331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11329-L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11329-L11331) · [Before (L11329-L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11329-L11331)

```diff
-       raw: null !== (Dm = null === Km || void 0 === Km ? void 0 : Km.text) && void 0 !== Dm ? Dm : "",
-       start: null !== (im = null === Km || void 0 === Km ? void 0 : Km.start) && void 0 !== im ? im : 0,
-       end: null !== (Rm = null === Km || void 0 === Km ? void 0 : Km.end) && void 0 !== Rm ? Rm : 0,
+       raw: null !== (cD = null === OD || void 0 === OD ? void 0 : OD.text) && void 0 !== cD ? cD : "",
+       start: null !== (gD = null === OD || void 0 === OD ? void 0 : OD.start) && void 0 !== gD ? gD : 0,
+       end: null !== (RD = null === OD || void 0 === OD ? void 0 : OD.end) && void 0 !== RD ? RD : 0,
```

#### 592. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11374` → after: `L11374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11374) · [Before (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11374)

```diff
-     am = fm, Am = `${xm=fm.includes(mm)&&!fm.includes(hm)?hm:mm}${am.slice(0,200).replace(/\\/g,"\\\\").replace('"'===xm?/"/g:/'/g,`\\${xm}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
+     KD = wD, sD = `${rD=wD.includes(DD)&&!wD.includes(pD)?pD:DD}${KD.slice(0,200).replace(/\\/g,"\\\\").replace('"'===rD?/"/g:/'/g,`\\${rD}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
```

#### 593. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11383)

```diff
-     const fm = Math.min(3, (null !== (Tm = String(mm).split(".")[1]) && void 0 !== Tm ? Tm : "").length);
+     const wD = Math.min(3, (null !== (zD = String(DD).split(".")[1]) && void 0 !== zD ? zD : "").length);
```

#### 594. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11398` → after: `L11398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11398) · [Before (L11398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11398)

```diff
-   return "boolean" === typeof mm ? mm ? "on" : "off" : "number" === typeof mm ? String(mm) : mm.length > 20 ? `\u201c${mm.slice(0,19)}\u2026\u201d` : `\u201c${mm}\u201d`
+   return "boolean" === typeof DD ? DD ? "on" : "off" : "number" === typeof DD ? String(DD) : DD.length > 20 ? `\u201c${DD.slice(0,19)}\u2026\u201d` : `\u201c${DD}\u201d`
```

#### 595. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11403` → after: `L11403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11403) · [Before (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11403)

```diff
-   if (0 === mm.length) return `Before ${Tm} settings`;
+   if (0 === DD.length) return `Before ${zD} settings`;
```

#### 596. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11405-L11407` → after: `L11405-L11407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11405-L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11405-L11407) · [Before (L11405-L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11405-L11407)

```diff
-     hm = mm.slice(0, fm).map((mm => `${mm.name} ${mm.from} \u2192 ${mm.to}`)),
-     Am = mm.length > fm ? ` and ${mm.length-fm} more` : "";
-   return `Before ${Tm} settings: ${hm.join(", ")}${Am}`
+     pD = DD.slice(0, wD).map((DD => `${DD.name} ${DD.from} \u2192 ${DD.to}`)),
+     sD = DD.length > wD ? ` and ${DD.length-wD} more` : "";
+   return `Before ${zD} settings: ${pD.join(", ")}${sD}`
```

#### 597. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11415` → after: `L11415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11415) · [Before (L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11415)

```diff
-     Tm.add(null !== (fm = null !== (hm = Am[1]) && void 0 !== hm ? hm : Am[2]) && void 0 !== fm ? fm : Am[3])
+     zD.add(null !== (wD = null !== (pD = sD[1]) && void 0 !== pD ? pD : sD[2]) && void 0 !== wD ? wD : sD[3])
```

#### 598. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11458` → after: `L11458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11458) · [Before (L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11458)

```diff
-     const am = null !== (Am = Wi.get(Tm)) && void 0 !== Am ? Am : [];
+     const KD = null !== (sD = Fg.get(zD)) && void 0 !== sD ? sD : [];
```

#### 599. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11510` → after: `L11510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11510) · [Before (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11510)

```diff
-   return null !== (Tm = hR.get(mm)) && void 0 !== Tm ? Tm : "CONFIG" === mm ? "Settings" : void 0
+   return null !== (zD = zR.get(DD)) && void 0 !== zD ? zD : "CONFIG" === DD ? "Settings" : void 0
```

#### 600. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11536)

```diff
-         name: void 0 === am ? null : null !== (Am = pR(am)) && void 0 !== Am ? Am : null,
+         name: void 0 === KD ? null : null !== (sD = gR(KD)) && void 0 !== sD ? sD : null,
```

#### 601. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11588` → after: `L11588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11588) · [Before (L11588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11588)

```diff
-   return wm.every((mm => wR(mm.removed) && wR(mm.added))) ? wm : [mm]
+   return LD.every((DD => KR(DD.removed) && KR(DD.added))) ? LD : [DD]
```

#### 602. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11640` → after: `L11640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11640) · [Before (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11640)

```diff
-   return hm ? null !== (Tm = null !== (fm = hm[1]) && void 0 !== fm ? fm : hm[2]) && void 0 !== Tm ? Tm : hm[3] : void 0
+   return pD ? null !== (zD = null !== (wD = pD[1]) && void 0 !== wD ? wD : pD[2]) && void 0 !== zD ? zD : pD[3] : void 0
```

#### 603. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11668` → after: `L11668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11668) · [Before (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11668)

```diff
-   return mm.length <= 1 ? null !== (Tm = mm[0]) && void 0 !== Tm ? Tm : "" : `${mm.slice(0,-1).join(", ")} and ${mm[mm.length-1]}`
+   return DD.length <= 1 ? null !== (zD = DD[0]) && void 0 !== zD ? zD : "" : `${DD.slice(0,-1).join(", ")} and ${DD[DD.length-1]}`
```

#### 604. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11683` → after: `L11683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11683) · [Before (L11683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11683)

```diff
-     return (0, OT.g)(Tm, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, OT.n).map((mm => mm[0])).filter((mm => !VR.has(mm)))
+     return (0, fz.f)(zD, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, fz.o).map((DD => DD[0])).filter((DD => !GR.has(DD)))
```

#### 605. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11689` → after: `L11689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11689) · [Before (L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11689)

```diff
-   const hm = (null !== (fm = mm.parts) && void 0 !== fm ? fm : []).map((mm => {
+   const pD = (null !== (wD = DD.parts) && void 0 !== wD ? wD : []).map((DD => {
```

#### 606. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11737` → after: `L11737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11737) · [Before (L11737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11737)

```diff
-               return fm ? [null !== (Tm = fm[1]) && void 0 !== Tm ? Tm : fm[2]] : []
+               return wD ? [null !== (zD = wD[1]) && void 0 !== zD ? zD : wD[2]] : []
```

#### 607. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11741` → after: `L11741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11741) · [Before (L11741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11741)

```diff
-               return pm.has(mm) ? `"${Tm}"` : Tm
+               return AD.has(DD) ? `"${zD}"` : zD
```

#### 608. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11749` → after: `L11749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11749) · [Before (L11749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11749)

```diff
-                   return null !== (Tm = Dm.get(mm)) && void 0 !== Tm ? Tm : mm
+                   return null !== (zD = cD.get(DD)) && void 0 !== zD ? zD : DD
```

#### 609. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11752` → after: `L11752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11752) · [Before (L11752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11752)

```diff
-               Tm = [am.length > 0 ? `${mm(am)} \u2014 changed` : "", xm.length > 0 ? `${mm(xm)} \u2014 added` : "", wm.length > 0 ? `${mm(wm)} \u2014 taken out` : ""].filter(Boolean),
+               zD = [KD.length > 0 ? `${DD(KD)} \u2014 changed` : "", rD.length > 0 ? `${DD(rD)} \u2014 added` : "", LD.length > 0 ? `${DD(LD)} \u2014 taken out` : ""].filter(Boolean),
```

#### 610. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11763` → after: `L11763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11763) · [Before (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11763)

```diff
-           const Om = [am.length > 0 ? `changes ${YR(am.map(Em))}` : "", xm.length > 0 ? `adds ${YR(xm.map(Em))}` : "", wm.length > 0 ? `takes out ${YR(wm.map(Em))}` : ""].filter(Boolean);
+           const ID = [KD.length > 0 ? `changes ${fR(KD.map(UD))}` : "", rD.length > 0 ? `adds ${fR(rD.map(UD))}` : "", LD.length > 0 ? `takes out ${fR(LD.map(UD))}` : ""].filter(Boolean);
```

#### 611. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11779` → after: `L11779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/90.js#L11779) · [Before (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/90.js#L11779)

```diff
-                 named: `${fm} \u2014 changed`,
+                 named: `${wD} \u2014 changed`,
```
