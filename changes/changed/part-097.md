# Changed — Bundle Modifications Report (Part 097 / 142)

- **Updated at**: `2026-11-25T16:44 JST`
- **Part**: `97 / 142` (**385** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 096](part-096.md) · [Part 098 →](part-098.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (dz8ef.98c5e741 → wp3j0a.a13381cf · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (973 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 209. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6035` → after: `L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6035) · [Before (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6035)

```diff
-       `}(uu,eu,fu)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
+       `}(GG,EG,YG)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
```

#### 210. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6038-L6039` → after: `L6038-L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6038-L6039) · [Before (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6038-L6039)

```diff
-     function wU(uu, Eu, ju) {
-       return Object.keys(uu).filter((uu => !ju || !(0, Yu.c)(uu))).sort(((uu, ju) => (ju === Eu ? 1 : 0) - (uu === Eu ? 1 : 0) || uu.localeCompare(ju)))
+     function XS(GG, bG, ZG) {
+       return Object.keys(GG).filter((GG => !ZG || !(0, hG.d)(GG))).sort(((GG, ZG) => (ZG === bG ? 1 : 0) - (GG === bG ? 1 : 0) || GG.localeCompare(ZG)))
```

#### 211. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6042-L6045` → after: `L6042-L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6042-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6042-L6045) · [Before (L6042-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6042-L6045)

```diff
-     function JU(uu, Eu, ju) {
-       var su;
-       const Uu = wU(uu, Eu, ju);
-       return null !== Eu && Uu.includes(Eu) ? Eu : null !== (su = Uu[0]) && void 0 !== su ? su : null
+     function uS(GG, bG, ZG) {
+       var wG;
+       const SG = XS(GG, bG, ZG);
+       return null !== bG && SG.includes(bG) ? bG : null !== (wG = SG[0]) && void 0 !== wG ? wG : null
```

#### 212. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6048-L6049` → after: `L6048-L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6048-L6049) · [Before (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6048-L6049)

```diff
-     function dU(uu) {
-       return uu.includes("index.ts") ? "index.ts" : "index.js"
+     function iS(GG) {
+       return GG.includes("index.ts") ? "index.ts" : "index.js"
```

#### 213. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6052-L6054` → after: `L6052-L6054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6052-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6052-L6054) · [Before (L6052-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6052-L6054)

```diff
-     function aU(uu) {
-       const Eu = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${dU(uu)}`;
-       return `Only ${Eu} runs by itself: another file runs when ${Eu} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${Eu}.\n`
+     function CS(GG) {
+       const bG = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${iS(GG)}`;
+       return `Only ${bG} runs by itself: another file runs when ${bG} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${bG}.\n`
```

#### 214. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6057-L6058` → after: `L6057-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6057-L6058) · [Before (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6057-L6058)

```diff
-     function PU(uu, Eu) {
-       var ju;
+     function WS(GG, bG) {
+       var ZG;
```

#### 215. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6060-L6065` → after: `L6060-L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6060-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6060-L6065) · [Before (L6060-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6060-L6065)

```diff
-         files: su,
-         activePath: Uu
-       } = uu, Zu = !0 === uu.codeBlock, Xu = wU(su, Uu, Zu);
-       if (0 === Xu.length || Xu.every((uu => "" === su[uu].trim()))) return Zu ? "There is no code yet: the code block is empty." : Xu.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-       const lu = null !== (ju = JU(su, Uu, Zu)) && void 0 !== ju ? ju : Xu[0];
-       return `${Xu.length>1?`Their files:\n${Xu.map((uu=>{const Eu=""===(ju=su[uu])?0:ju.replace(/\n$/,"").split("\n").length;var ju;return`- ${uu}: ${1===Eu?"1 line":`${Eu} lines`}${uu===lu?" (open in the editor, its code below)":""}`})).join("\n")}\n${Zu?"":aU(Xu)}\n`:""}${func … [truncated]
+         files: wG,
+         activePath: SG
+       } = GG, LG = !0 === GG.codeBlock, yG = XS(wG, SG, LG);
+       if (0 === yG.length || yG.every((GG => "" === wG[GG].trim()))) return LG ? "There is no code yet: the code block is empty." : yG.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const kG = null !== (ZG = uS(wG, SG, LG)) && void 0 !== ZG ? ZG : yG[0];
+       return `${yG.length>1?`Their files:\n${yG.map((GG=>{const bG=""===(ZG=wG[GG])?0:ZG.replace(/\n$/,"").split("\n").length;var ZG;return`- ${GG}: ${1===bG?"1 line":`${bG} lines`}${GG===kG?" (open in the editor, its code below)":""}`})).join("\n")}\n${LG?"":CS(yG)}\n`:""}${func … [truncated]
```

#### 216. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6068-L6069` → after: `L6068-L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6068-L6069) · [Before (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6068-L6069)

```diff
-     function oU(uu) {
-       var Eu, ju, su, Uu, Zu, Xu;
+     function mS(GG) {
+       var bG, ZG, wG, SG, LG, yG;
```

#### 217. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6071-L6086` → after: `L6071-L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6071-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6071-L6086) · [Before (L6071-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6071-L6086)

```diff
-         codeBlock: !0 === uu.codeBlock,
-         hasCode: "" !== (null !== (Eu = uu.files[null !== (ju = uu.activePath) && void 0 !== ju ? ju : ""]) && void 0 !== Eu ? Eu : "").trim(),
-         hasBigFile: Object.values(uu.files).some((uu => uu.length > 6e3)),
-         wantsExport: XU(uu.request),
-         canAsk: !0 === uu.canAsk,
-         canRemember: !0 === (null === (su = uu.about) || void 0 === su ? void 0 : su.canRemember),
-         isBigRequest: NE(uu.request),
-         canLookUp: !0 === uu.canLookUp,
-         hasOtherFiles: Object.keys(uu.files).length > 1,
-         hasErrors: uu.errors.length > 0,
-         canChangeWorldCode: !0 === uu.canChangeWorldCode,
-         hasWorldCodeFiles: Object.keys(uu.files).some(Yu.c),
-         addsToEntryFile: !0 === uu.addsToEntryFile,
-         offersPrefabs: (Uu = uu.request, Zu = uu.files, Xu = kU(uu), "never" !== Xu.offer && ("always" === Xu.offer || is(Uu, 1).length > 0 || NE(Uu) || !OU(Zu) && NU.test(Uu))),
-         listsPrefabs: kU(uu).categories,
-         looksUpDocs: !0 === uu.looksUpDocs
+         codeBlock: !0 === GG.codeBlock,
+         hasCode: "" !== (null !== (bG = GG.files[null !== (ZG = GG.activePath) && void 0 !== ZG ? ZG : ""]) && void 0 !== bG ? bG : "").trim(),
+         hasBigFile: Object.values(GG.files).some((GG => GG.length > 6e3)),
+         wantsExport: LS(GG.request),
+         canAsk: !0 === GG.canAsk,
+         canRemember: !0 === (null === (wG = GG.about) || void 0 === wG ? void 0 : wG.canRemember),
+         isBigRequest: Qb(GG.request),
+         canLookUp: !0 === GG.canLookUp,
+         hasOtherFiles: Object.keys(GG.files).length > 1,
+         hasErrors: GG.errors.length > 0,
+         canChangeWorldCode: !0 === GG.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(GG.files).some(hG.d),
+         addsToEntryFile: !0 === GG.addsToEntryFile,
+         offersPrefabs: (SG = GG.request, LG = GG.files, yG = IS(GG), "never" !== yG.offer && ("always" === yG.offer || Pw(SG, 1).length > 0 || Qb(SG) || !QS(LG) && fS.test(SG))),
+         listsPrefabs: IS(GG).categories,
+         looksUpDocs: !0 === GG.looksUpDocs
```

#### 218. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6090-L6092` → after: `L6090-L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6090-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6090-L6092) · [Before (L6090-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6090-L6092)

```diff
-     function kU(uu) {
-       var Eu;
-       return null !== (Eu = uu.prefabs) && void 0 !== Eu ? Eu : cU
+     function IS(GG) {
+       var bG;
+       return null !== (bG = GG.prefabs) && void 0 !== bG ? bG : pS
```

#### 219. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6095-L6103` → after: `L6095-L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6095-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6095-L6103) · [Before (L6095-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6095-L6103)

```diff
-     function mU(uu, Eu) {
-       return "deepseek" === Eu ? function(uu) {
-         const Eu = lU[uu ? "codeBlock" : "worldCode"];
-         return wE.filter((uu => Eu.has(uu.name)))
-       }(!0 === uu.codeBlock) : function(uu) {
-         const Eu = (uu.hasCode || uu.hasBigFile) && !uu.codeBlock || !0 === uu.hasWorldCodeFiles || !0 === uu.addsToEntryFile,
-           ju = !0 === uu.canLookUp,
-           su = uu.codeBlock && !0 === uu.canChangeWorldCode && !0 !== uu.hasWorldCodeFiles && ju,
-           Uu = {
+     function FS(GG, bG) {
+       return "deepseek" === bG ? function(GG) {
+         const bG = yS[GG ? "codeBlock" : "worldCode"];
+         return ub.filter((GG => bG.has(GG.name)))
+       }(!0 === GG.codeBlock) : function(GG) {
+         const bG = (GG.hasCode || GG.hasBigFile) && !GG.codeBlock || !0 === GG.hasWorldCodeFiles || !0 === GG.addsToEntryFile,
+           ZG = !0 === GG.canLookUp,
+           wG = GG.codeBlock && !0 === GG.canChangeWorldCode && !0 !== GG.hasWorldCodeFiles && ZG,
+           SG = {
```

#### 220. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6105-L6106` → after: `L6105-L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6105-L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6105-L6106) · [Before (L6105-L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6105-L6106)

```diff
-             edit_file: uu.hasBigFile,
-             replace_function: Eu,
+             edit_file: GG.hasBigFile,
+             replace_function: bG,
```

#### 221. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6108-L6125` → after: `L6108-L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6108-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6108-L6125) · [Before (L6108-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6108-L6125)

```diff
-             add_world_code: uu.codeBlock && !0 !== uu.hasWorldCodeFiles,
-             edit_code_in_place: uu.hasCode,
-             export_game: uu.wantsExport,
-             switch_to_world_code: uu.codeBlock,
-             ask_creator: uu.canAsk,
-             remember: !0 === uu.canRemember && !uu.codeBlock,
-             plan: !0 === uu.isBigRequest && uu.canAsk && !uu.codeBlock,
-             view_file: ju && !0 === uu.hasOtherFiles && !uu.codeBlock,
-             view_world_code: su,
-             view_chunk: ju,
-             view_game_state: ju,
-             get_docs: ju,
-             fetch_url: ju && !0 === uu.looksUpDocs,
-             find_names: ju,
-             view_errors: ju && !0 === uu.hasErrors,
-             use_prefab: !0 === uu.offersPrefabs && !uu.codeBlock,
- ... (2 more removed lines; see GitHub link above)
+             add_world_code: GG.codeBlock && !0 !== GG.hasWorldCodeFiles,
+             edit_code_in_place: GG.hasCode,
+             export_game: GG.wantsExport,
+             switch_to_world_code: GG.codeBlock,
+             ask_creator: GG.canAsk,
+             remember: !0 === GG.canRemember && !GG.codeBlock,
+             plan: !0 === GG.isBigRequest && GG.canAsk && !GG.codeBlock,
+             view_file: ZG && !0 === GG.hasOtherFiles && !GG.codeBlock,
+             view_world_code: wG,
+             view_chunk: ZG,
+             view_game_state: ZG,
+             get_docs: ZG,
+             fetch_url: ZG && !0 === GG.looksUpDocs,
+             find_names: ZG,
+             view_errors: ZG && !0 === GG.hasErrors,
+             use_prefab: !0 === GG.offersPrefabs && !GG.codeBlock,
+ ... (2 more added lines; see GitHub link above)
```

#### 222. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6127-L6130` → after: `L6127-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6127-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6127-L6130) · [Before (L6127-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6127-L6130)

```diff
-         let Zu = wE.filter((uu => Uu[uu.name]));
-         for (const Xu of ["remember", "plan"]) Zu.filter((uu => !JE(uu.name))).length > 7 && (Zu = Zu.filter((uu => uu.name !== Xu)));
-         return Zu
-       }(oU(uu))
+         let LG = ub.filter((GG => SG[GG.name]));
+         for (const yG of ["remember", "plan"]) LG.filter((GG => !ib(GG.name))).length > 7 && (LG = LG.filter((GG => GG.name !== yG)));
+         return LG
+       }(mS(GG))
```

#### 223. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6133-L6140` → after: `L6133-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6133-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6133-L6140) · [Before (L6133-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6133-L6140)

```diff
-     function vU(uu, Eu) {
-       var ju, su;
-       const Uu = oU(uu),
-         Zu = !0 === Uu.canLookUp,
-         Xu = (null !== (ju = null === (su = uu.lookups) || void 0 === su ? void 0 : su.length) && void 0 !== ju ? ju : 0) > 0,
-         lu = !0 === Uu.hasWorldCodeFiles,
-         qu = [Uu.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", Uu.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", Zu ? "" : Xu ? "You have looked things up as many times as you can: answer n … [truncated]
-       return qu.length > 0 ? `\n\nFor this request: ${qu.join(" ")}` : ""
+     function vS(GG, bG) {
+       var ZG, wG;
+       const SG = mS(GG),
+         LG = !0 === SG.canLookUp,
+         yG = (null !== (ZG = null === (wG = GG.lookups) || void 0 === wG ? void 0 : wG.length) && void 0 !== ZG ? ZG : 0) > 0,
+         kG = !0 === SG.hasWorldCodeFiles,
+         UG = [SG.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", SG.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", LG ? "" : yG ? "You have looked things up as many times as you can: answer n … [truncated]
+       return UG.length > 0 ? `\n\nFor this request: ${UG.join(" ")}` : ""
```

#### 224. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6143-L6145` → after: `L6143-L6145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6143-L6145) · [Before (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6143-L6145)

```diff
-     function KU(uu, Eu) {
-       var ju, su, Uu, Zu, Xu, lu;
-       let qu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YU,
+     function aS(GG, bG) {
+       var ZG, wG, SG, LG, yG, kG;
+       let UG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KS,
```

#### 225. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6147-L6148` → after: `L6147-L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6147-L6148) · [Before (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6147-L6148)

```diff
-           docsInTurn: fu = !1,
-           uh: Cu = !1
+           docsInTurn: YG = !1,
+           Ld: VG = !1
```

#### 226. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6150-L6182` → after: `L6150-L6182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6150-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6150-L6182) · [Before (L6150-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6150-L6182)

```diff
-       const bu = "deepseek" === qu.format,
-         cu = Object.values(Eu.files).join("\n"),
-         Nu = Eu.history.slice(-2).map((uu => uu.text)).join("\n"),
-         Ou = `${Eu.request}\n${Nu}\n${Eu.errors.join("\n")}`,
-         Yu = !0 === Eu.looksUpDocs,
-         hu = Yu && !0 === Eu.canLookUp ? [] : uu.find(Ou, cu, 12),
-         Du = uu.matchItemAndBlockNames(Ou, 12),
-         gu = !0 === Eu.codeBlock,
-         Mu = gu ? "myId" : "playerId",
-         eu = mU(Eu, qu.format),
-         Gu = eu.some((uu => "use_prefab" === uu.name)),
-         pu = !Gu || bu && !0 !== oU(Eu).offersPrefabs ? [] : function(uu, Eu, ju) {
-           if ("never" === ju.offer || "none" === ju.list) return [];
-           if ("all" === ju.list) return [...Ms];
-           const su = is(uu, 4);
-           if (OU(Eu) || !NU.test(uu) && !NE(uu)) return su;
- ... (17 more removed lines; see GitHub link above)
+       const pG = "deepseek" === UG.format,
+         fG = Object.values(bG.files).join("\n"),
+         QG = bG.history.slice(-2).map((GG => GG.text)).join("\n"),
+         KG = `${bG.request}\n${QG}\n${bG.errors.join("\n")}`,
+         hG = !0 === bG.looksUpDocs,
+         dG = hG && !0 === bG.canLookUp ? [] : GG.find(KG, fG, 12),
+         JG = GG.matchItemAndBlockNames(KG, 12),
+         rG = !0 === bG.codeBlock,
+         zG = rG ? "myId" : "playerId",
+         EG = FS(bG, UG.format),
+         oG = EG.some((GG => "use_prefab" === GG.name)),
+         XG = !oG || pG && !0 !== mS(bG).offersPrefabs ? [] : function(GG, bG, ZG) {
+           if ("never" === ZG.offer || "none" === ZG.list) return [];
+           if ("all" === ZG.list) return [...rw];
+           const wG = Pw(GG, 4);
+           if (QS(bG) || !fS.test(GG) && !Qb(GG)) return wG;
+ ... (17 more added lines; see GitHub link above)
```

#### 227. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6184` → after: `L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6184) · [Before (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6184)

```diff
-           content: fU([gu ? gU(Yu) : hU(Yu), ...Yu ? [] : [gu ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${uu.index("callback")}` : `## Callbacks (all of them)\n${uu.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: US([rG ? JS(hG) : hS(hG), ...hG ? [] : [rG ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${GG.index("callback")}` : `## Callbacks (all of them)\n${GG.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```

#### 228. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6191-L6196` → after: `L6191-L6196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6191-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6191-L6196) · [Before (L6191-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6191-L6196)

```diff
-             hasWorldCodeFiles: !0 === oU(Eu).hasWorldCodeFiles,
-             hasLookedUp: (null !== (ju = null === (su = Eu.lookups) || void 0 === su ? void 0 : su.length) && void 0 !== ju ? ju : 0) > 0,
-             movesToWorldCode: !0 === Eu.canChangeWorldCode,
-             listedPrefabs: pu,
-             guidesToPrefabs: !0 === kU(Eu).guide
-           })].filter((uu => "" !== uu)).join("\n\n"), eu, qu.format, qu.nativeTools)
+             hasWorldCodeFiles: !0 === mS(bG).hasWorldCodeFiles,
+             hasLookedUp: (null !== (ZG = null === (wG = bG.lookups) || void 0 === wG ? void 0 : wG.length) && void 0 !== ZG ? ZG : 0) > 0,
+             movesToWorldCode: !0 === bG.canChangeWorldCode,
+             listedPrefabs: XG,
+             guidesToPrefabs: !0 === IS(bG).guide
+           })].filter((GG => "" !== GG)).join("\n\n"), EG, UG.format, UG.nativeTools)
```

#### 229. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6198-L6201` → after: `L6198-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6198-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6198-L6201) · [Before (L6198-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6198-L6201)

```diff
-       if (!bu)
-         for (const iu of Eu.history) au.push({
-           role: iu.role,
-           content: iu.text
+       if (!pG)
+         for (const MG of bG.history) WG.push({
+           role: MG.role,
+           content: MG.text
```

#### 230. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6203-L6211` → after: `L6203-L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6203-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6203-L6211) · [Before (L6203-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6203-L6211)

```diff
-       const Pu = bu && !Cu && Eu.history.length > 0 ? `Earlier in this chat:\n${Eu.history.map((uu=>`${"user"===uu.role?"They asked":"You answered"}: ${uu.text}`)).join("\n")}\n\n` : "",
-         ou = null !== (Uu = Eu.about) && void 0 !== Uu && Uu.notes.length ? `AI notes (notes they kept):\n${Eu.about.notes.map((uu=>`- ${uu}`)).join("\n")}\n\n` : "",
-         ku = null !== (Zu = Eu.about) && void 0 !== Zu && Zu.outline ? `Outline of their code:\n${Eu.about.outline}\n\n` : "",
-         mu = Eu.errors.length > 0 ? `\n\nErrors their world showed recently:\n${Eu.errors.slice(-5).join("\n")}` : "",
-         vu = null === (Xu = Eu.failedEdits) || void 0 === Xu || !Xu.length || bu && Cu ? "" : `\n\nWhat happened to your last answer's changes:\n${function(uu,Eu){return uu.map((uu=>uj[Eu].editFailure(uu.tool,bU(uu)))).join("\n\n")}(Eu.failedEdits,qu.format)}`,
-         Ku = [...fu ? du : [], ...bu ? [wu, Ju] : []].filter((uu => "" !== uu)).map((uu => `${uu}\n\n`)).join(""),
-         Vu = null === (lu = Eu.lookups) || void 0 === lu || !lu.length || bu && Cu ? "" : `\n\nWhat you looked up for this request:\n${ru=Eu.lookups,Qu=qu.format,ru.map((uu=>uj[Qu].lookupResult(uu.tool,uu.about,uu.text))).join("\n\n")}`;
-       var ru, Qu;
-       return au.push({
+       const mG = pG && !VG && bG.history.length > 0 ? `Earlier in this chat:\n${bG.history.map((GG=>`${"user"===GG.role?"They asked":"You answered"}: ${GG.text}`)).join("\n")}\n\n` : "",
+         IG = null !== (SG = bG.about) && void 0 !== SG && SG.notes.length ? `AI notes (notes they kept):\n${bG.about.notes.map((GG=>`- ${GG}`)).join("\n")}\n\n` : "",
+         FG = null !== (LG = bG.about) && void 0 !== LG && LG.outline ? `Outline of their code:\n${bG.about.outline}\n\n` : "",
+         vG = bG.errors.length > 0 ? `\n\nErrors their world showed recently:\n${bG.errors.slice(-5).join("\n")}` : "",
+         aG = null === (yG = bG.failedEdits) || void 0 === yG || !yG.length || pG && VG ? "" : `\n\nWhat happened to your last answer's changes:\n${function(GG,bG){return GG.map((GG=>GZ[bG].editFailure(GG.tool,VS(GG)))).join("\n\n")}(bG.failedEdits,UG.format)}`,
+         cG = [...YG ? CG : [], ...pG ? [uG, iG] : []].filter((GG => "" !== GG)).map((GG => `${GG}\n\n`)).join(""),
+         lG = null === (kG = bG.lookups) || void 0 === kG || !kG.length || pG && VG ? "" : `\n\nWhat you looked up for this request:\n${jG=bG.lookups,PG=UG.format,jG.map((GG=>GZ[PG].lookupResult(GG.tool,GG.about,GG.text))).join("\n\n")}`;
+       var jG, PG;
+       return WG.push({
```

#### 231. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6214` → after: `L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6214) · [Before (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6214)

```diff
-       }), au
+       }), WG
```

#### 232. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6216` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6216) · [Before (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6216)

```diff
-     var VU = ju(39926);
+     var cS = ZG(40012);
```

#### 233. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6218-L6219` → after: `L6218-L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6218-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6218-L6219) · [Before (L6218-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6218-L6219)

```diff
-     function rU(uu) {
-       var Eu, ju, su, Uu, Zu, Xu;
+     function lS(GG) {
+       var bG, ZG, wG, SG, LG, yG;
```

#### 234. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6221-L6223` → after: `L6221-L6223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6221-L6223) · [Before (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6221-L6223)

```diff
-         args: lu
-       } = uu;
-       switch (uu.name) {
+         args: kG
+       } = GG;
+       switch (GG.name) {
```

#### 235. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6225` → after: `L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6225) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6225)

```diff
-           return null !== (Eu = lu.path) && void 0 !== Eu ? Eu : "a file";
+           return null !== (bG = kG.path) && void 0 !== bG ? bG : "a file";
```

#### 236. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6229` → after: `L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6229) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6229)

```diff
-           return lu.position ? `the blocks near ${null!==(ju=null===(su=(0,VU.g)(lu.position))||void 0===su?void 0:su.map(Math.floor).join(", "))&&void 0!==ju?ju:lu.position}` : "the blocks around you";
+           return kG.position ? `the blocks near ${null!==(ZG=null===(wG=(0,cS.g)(kG.position))||void 0===wG?void 0:wG.map(Math.floor).join(", "))&&void 0!==ZG?ZG:kG.position}` : "the blocks around you";
```

#### 237. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6233` → after: `L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6233) · [Before (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6233)

```diff
-           return lu.name ? `the docs for ${lu.name}` : `the list of ${iU(null!==(Uu=lu.list)&&void 0!==Uu?Uu:QU)}`;
+           return kG.name ? `the docs for ${kG.name}` : `the list of ${PS(null!==(SG=kG.list)&&void 0!==SG?SG:jS)}`;
```

#### 238. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6235-L6239` → after: `L6235-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6235-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6235-L6239) · [Before (L6235-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6235-L6239)

```diff
-           return function(uu) {
-             const Eu = void 0 === uu ? null : eu(uu);
-             if (null === Eu) return null !== uu && void 0 !== uu ? uu : "a docs page";
-             return Gu(Eu) ? "the list of docs pages" : `the docs page ${function(uu){const Eu=(0,Du.C)(uu);return null===Eu?uu:`${Eu.name}${null===Eu.part?"":`/${Eu.part}`}`}(Eu)}`
-           }(lu.url);
+           return function(GG) {
+             const bG = void 0 === GG ? null : EG(GG);
+             if (null === bG) return null !== GG && void 0 !== GG ? GG : "a docs page";
+             return oG(bG) ? "the list of docs pages" : `the docs page ${function(GG){const bG=(0,JG.t)(GG);return null===bG?GG:`${bG.name}${null===bG.part?"":`/${bG.part}`}`}(bG)}`
+           }(kG.url);
```

#### 239. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6241` → after: `L6241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6241) · [Before (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6241)

```diff
-           return `names for "${null!==(Zu=lu.words)&&void 0!==Zu?Zu:""}"`;
+           return `names for "${null!==(LG=kG.words)&&void 0!==LG?LG:""}"`;
```

#### 240. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6245` → after: `L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6245) · [Before (L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6245)

```diff
-           return lu.category ? `the ready-made ${lu.category} games` : "the ready-made games";
+           return kG.category ? `the ready-made ${kG.category} games` : "the ready-made games";
```

#### 241. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6247` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6247) · [Before (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6247)

```diff
-           return `the ready-made ${null!==(Xu=lu.name)&&void 0!==Xu?Xu:"game"}`
+           return `the ready-made ${null!==(yG=kG.name)&&void 0!==yG?yG:"game"}`
```

#### 242. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6250` → after: `L6250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6250) · [Before (L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6250)

```diff
-     const QU = "functions";
+     const jS = "functions";
```

#### 243. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6252-L6253` → after: `L6252-L6253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6252-L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6252-L6253) · [Before (L6252-L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6252-L6253)

```diff
-     function iU(uu) {
-       return uu.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
+     function PS(GG) {
+       return GG.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
```

#### 244. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6256-L6257` → after: `L6256-L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6256-L6257) · [Before (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6256-L6257)

```diff
-     function WU(uu) {
-       return "get_docs" === uu.name || "fetch_url" === uu.name
+     function MS(GG) {
+       return "get_docs" === GG.name || "fetch_url" === GG.name
```

#### 245. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6259-L6262` → after: `L6259-L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6259-L6262) · [Before (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6259-L6262)

```diff
-     async function SU(uu, Eu) {
-       var ju;
-       const su = rU(uu),
-         Uu = Eu => ({
+     async function AS(GG, bG) {
+       var ZG;
+       const wG = lS(GG),
+         SG = bG => ({
```

#### 246. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6264-L6266` → after: `L6264-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6264-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6264-L6266) · [Before (L6264-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6264-L6266)

```diff
-             tool: uu.name,
-             about: su,
-             text: Eu
+             tool: GG.name,
+             about: wG,
+             text: bG
```

#### 247. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6269` → after: `L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6269) · [Before (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6269)

```diff
-       switch (uu.name) {
+       switch (GG.name) {
```

#### 248. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6271` → after: `L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6271) · [Before (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6271)

```diff
-           return Uu((lu = uu.args.path, qu = Eu.files, void 0 === lu ? "No path was given: give the path of a file from the list." : Object.hasOwn(qu, lu) ? "" === qu[lu] ? `${lu} is empty.` : qu[lu] : `There is no file called ${lu}. Their files are: ${Object.keys(qu).join(", ")} … [truncated]
+           return SG((kG = GG.args.path, UG = bG.files, void 0 === kG ? "No path was given: give the path of a file from the list." : Object.hasOwn(UG, kG) ? "" === UG[kG] ? `${kG} is empty.` : UG[kG] : `There is no file called ${kG}. Their files are: ${Object.keys(UG).join(", ")} … [truncated]
```

#### 249. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6273-L6278` → after: `L6273-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6273-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6273-L6278) · [Before (L6273-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6273-L6278)

```diff
-           const uu = Eu.readWorldCode ? await Eu.readWorldCode() : null;
-           if (null === uu) return Uu("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
-           const ju = Object.keys(uu).sort(),
-             su = Object.fromEntries(ju.map((Eu => [`${Yu.i}${Eu}`, uu[Eu]]))),
-             Zu = ju.map((Eu => `${Yu.i}${Eu}:\n${""===uu[Eu]?"(empty)":uu[Eu]}`)).join("\n\n"),
-             Xu = ju.length > 1 ? `\n\n${aU(ju,Yu.i)}` : "";
+           const GG = bG.readWorldCode ? await bG.readWorldCode() : null;
+           if (null === GG) return SG("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
+           const ZG = Object.keys(GG).sort(),
+             wG = Object.fromEntries(ZG.map((bG => [`${hG.j}${bG}`, GG[bG]]))),
+             LG = ZG.map((bG => `${hG.j}${bG}:\n${""===GG[bG]?"(empty)":GG[bG]}`)).join("\n\n"),
+             yG = ZG.length > 1 ? `\n\n${CS(ZG,hG.j)}` : "";
```

#### 250. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6280-L6281` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6280-L6281) · [Before (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6280-L6281)

```diff
-             ...Uu("" === Zu ? `World Code has no code yet: ${Yu.i}index.js is empty.` : `${Zu}${Xu}`),
-             worldCodeFiles: su
+             ...SG("" === LG ? `World Code has no code yet: ${hG.j}index.js is empty.` : `${LG}${yG}`),
+             worldCodeFiles: wG
```

#### 251. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6285` → after: `L6285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6285) · [Before (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6285)

```diff
-           return Uu(await Eu.viewChunk((0, VU.g)(uu.args.position)));
+           return SG(await bG.viewChunk((0, cS.g)(GG.args.position)));
```

#### 252. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6287` → after: `L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6287) · [Before (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6287)

```diff
-           return Uu(await Eu.viewGameState());
+           return SG(await bG.viewGameState());
```

#### 253. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6289-L6292` → after: `L6289-L6292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6289-L6292) · [Before (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6289-L6292)

```diff
-           return Uu(function(uu, Eu, ju) {
-             if (void 0 === uu) {
-               const uu = (0, wu.c)(ME, iU(null !== Eu && void 0 !== Eu ? Eu : QU));
-               return void 0 === uu ? `There is no list called ${Eu}: ask for ${eE}.` : ju.index(uu)
+           return SG(function(GG, bG, ZG) {
+             if (void 0 === GG) {
+               const GG = (0, uG.c)(zb, PS(null !== bG && void 0 !== bG ? bG : jS));
+               return void 0 === GG ? `There is no list called ${bG}: ask for ${Eb}.` : ZG.index(GG)
```

#### 254. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6294-L6298` → after: `L6294-L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6294-L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6294-L6298) · [Before (L6294-L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6294-L6298)

```diff
-             const su = ju.section(uu);
-             if (su) return su.text;
-             const Uu = ju.find(uu, "", 3).map((uu => uu.name)).join(", ");
-             return `Nothing is called ${uu}.${""===Uu?"":` The closest names are: ${Uu}.`}`
-           }(uu.args.name, uu.args.list, Eu.docs));
+             const wG = ZG.section(GG);
+             if (wG) return wG.text;
+             const SG = ZG.find(GG, "", 3).map((GG => GG.name)).join(", ");
+             return `Nothing is called ${GG}.${""===SG?"":` The closest names are: ${SG}.`}`
+           }(GG.args.name, GG.args.list, bG.docs));
```

#### 255. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6300` → after: `L6300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6300) · [Before (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6300)

```diff
-           return Uu(await Eu.fetchDocsPage(null !== (ju = uu.args.url) && void 0 !== ju ? ju : ""));
+           return SG(await bG.fetchDocsPage(null !== (ZG = GG.args.url) && void 0 !== ZG ? ZG : ""));
```

#### 256. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6302-L6304` → after: `L6302-L6304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6302-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6302-L6304) · [Before (L6302-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6302-L6304)

```diff
-           var Zu, Xu;
-           const ju = Eu.docs.searchNames(null !== (Zu = uu.args.words) && void 0 !== Zu ? Zu : "", 20);
-           return Uu(ju.length > 0 ? ju.join(", ") : `No block, item or mob name has any of the words "${null!==(Xu=uu.args.words)&&void 0!==Xu?Xu:""}".`)
+           var LG, yG;
+           const ZG = bG.docs.searchNames(null !== (LG = GG.args.words) && void 0 !== LG ? LG : "", 20);
+           return SG(ZG.length > 0 ? ZG.join(", ") : `No block, item or mob name has any of the words "${null!==(yG=GG.args.words)&&void 0!==yG?yG:""}".`)
```

#### 257. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6307` → after: `L6307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6307) · [Before (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6307)

```diff
-           return Uu(Eu.errors.length > 0 ? Eu.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+           return SG(bG.errors.length > 0 ? bG.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
```

#### 258. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6309` → after: `L6309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6309) · [Before (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6309)

```diff
-           return Uu(rs(uu.args.category));
+           return SG(lw(GG.args.category));
```

#### 259. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6311-L6314` → after: `L6311-L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6311-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6311-L6314) · [Before (L6311-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6311-L6314)

```diff
-           return Uu(function(uu, Eu) {
-             const ju = void 0 === uu ? null : ps(uu);
-             return ju ? Qs(ju, Eu) : `There is no prefab called ${null!==uu&&void 0!==uu?uu:"that"}.\n${rs()}`
-           }(uu.args.name, !0 === Eu.showPrefabCode))
+           return SG(function(GG, bG) {
+             const ZG = void 0 === GG ? null : ow(GG);
+             return ZG ? jw(ZG, bG) : `There is no prefab called ${null!==GG&&void 0!==GG?GG:"that"}.\n${lw()}`
+           }(GG.args.name, !0 === bG.showPrefabCode))
```

#### 260. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6316` → after: `L6316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6316) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6316)

```diff
-       var lu, qu
+       var kG, UG
```

#### 261. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6318` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6318) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6318)

```diff
-     const IU = [
+     const sS = [
```

#### 262. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6344-L6401` → after: `L6344-L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6344-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6344-L6401) · [Before (L6344-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6344-L6401)

```diff
-     function FU(uu) {
-       let Eu = uu;
-       for (const [ju, su] of IU) Eu = Eu.replace(ju, (uu => uu.length > 1 && uu[0] !== uu[0].toLowerCase() && uu.slice(1) === uu.slice(1).toLowerCase() ? su[0].toUpperCase() + su.slice(1) : su));
-       return Eu
-     }
-     const BU = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       LU = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       tU = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       xU = 12e3,
-       TU = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function HU(uu) {
-       var Eu, ju, su;
-       const Uu = null === (Eu = /Safety:\s*(\w+)/.exec(uu)) || void 0 === Eu ? void 0 : Eu[1],
-         Zu = null !== (ju = null === (su = /Categories:\s*(.+)/.exec(uu)) || void 0 === su ? void 0 : su[1]) && void 0 !== ju ? ju : "";
-       return /PII/.test(Zu) ? "personalInfo" : "Unsafe" === Uu || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(Zu) ? "unsafe" : "ok"
- ... (42 more removed lines; see GitHub link above)
+     function qS(GG) {
+       let bG = GG;
+       for (const [ZG, wG] of sS) bG = bG.replace(ZG, (GG => GG.length > 1 && GG[0] !== GG[0].toLowerCase() && GG.slice(1) === GG.slice(1).toLowerCase() ? wG[0].toUpperCase() + wG.slice(1) : wG));
+       return bG
+     }
+     const nS = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       gS = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       eS = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       RS = 12e3,
+       TS = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function HS(GG) {
+       var bG, ZG, wG;
+       const SG = null === (bG = /Safety:\s*(\w+)/.exec(GG)) || void 0 === bG ? void 0 : bG[1],
+         LG = null !== (ZG = null === (wG = /Categories:\s*(.+)/.exec(GG)) || void 0 === wG ? void 0 : wG[1]) && void 0 !== ZG ? ZG : "";
+       return /PII/.test(LG) ? "personalInfo" : "Unsafe" === SG || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(LG) ? "unsafe" : "ok"
+ ... (42 more added lines; see GitHub link above)
```

#### 263. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6403-L6406` → after: `L6403-L6406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6403-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6403-L6406) · [Before (L6403-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6403-L6406)

```diff
-           if ("\n" === Eu) break;
-           if (ju) ju = "]" !== Eu;
-           else if ("[" === Eu) ju = !0;
-           else if ("/" === Eu) return su + 1
+           if ("\n" === bG) break;
+           if (ZG) ZG = "]" !== bG;
+           else if ("[" === bG) ZG = !0;
+           else if ("/" === bG) return wG + 1
```

#### 264. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6409-L6430` → after: `L6409-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6409-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6409-L6430) · [Before (L6409-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6409-L6430)

```diff
-       return Eu + 1
-     }
- 
-     function EZ(uu, Eu, ju, su) {
-       let Uu = Eu,
-         Zu = 0;
-       for (; Uu < uu.length;) {
-         const Eu = uu[Uu],
-           Xu = uu[Uu + 1];
-         if ("/" === Eu && "/" === Xu) {
-           const Eu = uu.indexOf("\n", Uu);
-           su.push(uu.slice(Uu + 2, -1 === Eu ? uu.length : Eu)), Uu = -1 === Eu ? uu.length : Eu
-         } else if ("/" === Eu && "*" === Xu) {
-           const Eu = uu.indexOf("*/", Uu + 2);
-           su.push(uu.slice(Uu + 2, -1 === Eu ? uu.length : Eu)), Uu = -1 === Eu ? uu.length : Eu + 2
-         } else if ("/" === Eu && RU(uu, Uu)) Uu = uZ(uu, Uu);
- ... (6 more removed lines; see GitHub link above)
+       return bG + 1
+     }
+ 
+     function GL(GG, bG, ZG, wG) {
+       let SG = bG,
+         LG = 0;
+       for (; SG < GG.length;) {
+         const bG = GG[SG],
+           yG = GG[SG + 1];
+         if ("/" === bG && "/" === yG) {
+           const bG = GG.indexOf("\n", SG);
+           wG.push(GG.slice(SG + 2, -1 === bG ? GG.length : bG)), SG = -1 === bG ? GG.length : bG
+         } else if ("/" === bG && "*" === yG) {
+           const bG = GG.indexOf("*/", SG + 2);
+           wG.push(GG.slice(SG + 2, -1 === bG ? GG.length : bG)), SG = -1 === bG ? GG.length : bG + 2
+         } else if ("/" === bG && xS(GG, SG)) SG = BS(GG, SG);
+ ... (6 more added lines; see GitHub link above)
```

#### 265. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6432-L6435` → after: `L6432-L6435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6432-L6435) · [Before (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6432-L6435)

```diff
-           if (ju && "{" === Eu) Zu++;
-           else if (ju && "}" === Eu) {
-             if (0 === Zu) return Uu + 1;
-             Zu--
+           if (ZG && "{" === bG) LG++;
+           else if (ZG && "}" === bG) {
+             if (0 === LG) return SG + 1;
+             LG--
```

#### 266. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6437` → after: `L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6437) · [Before (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6437)

```diff
-           Uu++
+           SG++
```

#### 267. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6440` → after: `L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6440) · [Before (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6440)

```diff
-       return Uu
+       return SG
```

#### 268. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6442-L6446` → after: `L6442-L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6442-L6446) · [Before (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6442-L6446)

```diff
-     const jZ = 4e5;
-     var sZ = ju(41745);
-     let UZ = [],
-       ZZ = 0,
-       XZ = null;
+     const bL = 4e5;
+     var ZL = ZG(41895);
+     let wL = [],
+       SL = 0,
+       LL = null;
```

#### 269. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6448-L6449` → after: `L6448-L6449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6448-L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6448-L6449) · [Before (L6448-L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6448-L6449)

```diff
-     function lZ(uu) {
-       return Math.ceil(uu.length / 4)
+     function yL(GG) {
+       return Math.ceil(GG.length / 4)
```

#### 270. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6452-L6453` → after: `L6452-L6453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6452-L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6452-L6453) · [Before (L6452-L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6452-L6453)

```diff
-     function qZ(uu) {
-       return "number" === typeof uu && Number.isInteger(uu) && uu >= 0
+     function kL(GG) {
+       return "number" === typeof GG && Number.isInteger(GG) && GG >= 0
```

#### 271. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6456-L6459` → after: `L6456-L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6456-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6456-L6459) · [Before (L6456-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6456-L6459)

```diff
-     function fZ(uu, Eu, ju) {
-       var su;
-       let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ! function(uu) {
+     function UL(GG, bG, ZG) {
+       var wG;
+       let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(GG) {
```

#### 272. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6461-L6464` → after: `L6461-L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6461-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6461-L6464) · [Before (L6461-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6461-L6464)

```diff
-         if (UZ.push(uu), UZ.length >= 40) return void bZ();
-         CZ()
-       }(null !== (su = function(uu) {
-         if (null === uu || "object" !== typeof uu) return null;
+         if (wL.push(GG), wL.length >= 40) return void VL();
+         YL()
+       }(null !== (wG = function(GG) {
+         if (null === GG || "object" !== typeof GG) return null;
```

#### 273. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6466-L6471` → after: `L6466-L6471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6466-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6466-L6471) · [Before (L6466-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6466-L6471)

```diff
-           prompt_tokens: Eu,
-           completion_tokens: ju,
-           prompt_tokens_details: su
-         } = uu;
-         if (!qZ(Eu) || !qZ(ju)) return null;
-         const Uu = null !== su && "object" === typeof su ? su.cached_tokens : void 0;
+           prompt_tokens: bG,
+           completion_tokens: ZG,
+           prompt_tokens_details: wG
+         } = GG;
+         if (!kL(bG) || !kL(ZG)) return null;
+         const SG = null !== wG && "object" === typeof wG ? wG.cached_tokens : void 0;
```

#### 274. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6473-L6475` → after: `L6473-L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6473-L6475) · [Before (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6473-L6475)

```diff
-           sent: Eu,
-           cached: qZ(Uu) ? Uu : 0,
-           received: ju
+           sent: bG,
+           cached: kL(SG) ? SG : 0,
+           received: ZG
```

#### 275. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6477-L6478` → after: `L6477-L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6477-L6478) · [Before (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6477-L6478)

```diff
-       }(uu)) && void 0 !== su ? su : {
-         sent: lZ(JSON.stringify(Eu)),
+       }(GG)) && void 0 !== wG ? wG : {
+         sent: yL(JSON.stringify(bG)),
```

#### 276. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6480` → after: `L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6480) · [Before (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6480)

```diff
-         received: lZ(ju) + Uu
+         received: yL(ZG) + SG
```

#### 277. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6484-L6486` → after: `L6484-L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6484-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6484-L6486) · [Before (L6484-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6484-L6486)

```diff
-     function CZ() {
-       XZ ??= setTimeout((() => {
-         bZ()
+     function YL() {
+       LL ??= setTimeout((() => {
+         VL()
```

#### 278. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6489-L6493` → after: `L6489-L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6489-L6493) · [Before (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6489-L6493)

```diff
-     async function bZ() {
-       null !== XZ && (clearTimeout(XZ), XZ = null);
-       const uu = UZ.slice(0, 40);
-       UZ = UZ.slice(40), UZ.length > 0 && (XZ = setTimeout((() => {
-         bZ()
+     async function VL() {
+       null !== LL && (clearTimeout(LL), LL = null);
+       const GG = wL.slice(0, 40);
+       wL = wL.slice(40), wL.length > 0 && (LL = setTimeout((() => {
+         VL()
```

#### 279. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6495-L6499` → after: `L6495-L6499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6495-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6495-L6499) · [Before (L6495-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6495-L6499)

```diff
-       const Eu = ZZ;
-       if (ZZ = 0, 0 !== uu.length || 0 !== Eu) try {
-         await (0, sZ.postToGameServer)("/ai-helper/usage", {
-           calls: uu,
-           pastes: Eu
+       const bG = SL;
+       if (SL = 0, 0 !== GG.length || 0 !== bG) try {
+         await (0, ZL.postToGameServer)("/ai-helper/usage", {
+           calls: GG,
+           pastes: bG
```

#### 280. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6503-L6504` → after: `L6503-L6504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6503-L6504) · [Before (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6503-L6504)

```diff
-     const cZ = 6e4;
-     const NZ = new class {
+     const pL = 6e4;
+     const fL = new class {
```

#### 281. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6508-L6510` → after: `L6508-L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6508-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6508-L6510) · [Before (L6508-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6508-L6510)

```diff
-       record(uu) {
-         let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         this.calls.set(uu, [...this.recent(uu, Eu), Eu])
+       record(GG) {
+         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(GG, [...this.recent(GG, bG), bG])
```

#### 282. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6512-L6516` → after: `L6512-L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6512-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6512-L6516) · [Before (L6512-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6512-L6516)

```diff
-       markFull(uu) {
-         var Eu;
-         let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
-           su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.fullUntil.set(uu, Math.max(null !== (Eu = this.fullUntil.get(uu)) && void 0 !== Eu ? Eu : 0, ju + Math.max(su, cZ)))
+       markFull(GG) {
+         var bG;
+         let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(GG, Math.max(null !== (bG = this.fullUntil.get(GG)) && void 0 !== bG ? bG : 0, ZG + Math.max(wG, pL)))
```

#### 283. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6518-L6520` → after: `L6518-L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6518-L6520) · [Before (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6518-L6520)

```diff
-       callsInLastMinute(uu) {
-         let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return this.recent(uu, Eu).length
+       callsInLastMinute(GG) {
+         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(GG, bG).length
```

#### 284. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6522-L6527` → after: `L6522-L6527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6522-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6522-L6527) · [Before (L6522-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6522-L6527)

```diff
-       freeAt(uu) {
-         var Eu;
-         let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const su = this.recent(uu, ju),
-           Uu = su.length < 2 ? ju : su[su.length - 2] + cZ;
-         return Math.max(Uu, null !== (Eu = this.fullUntil.get(uu)) && void 0 !== Eu ? Eu : 0, ju)
+       freeAt(GG) {
+         var bG;
+         let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const wG = this.recent(GG, ZG),
+           SG = wG.length < 2 ? ZG : wG[wG.length - 2] + pL;
+         return Math.max(SG, null !== (bG = this.fullUntil.get(GG)) && void 0 !== bG ? bG : 0, ZG)
```

#### 285. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6529-L6531` → after: `L6529-L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6529-L6531) · [Before (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6529-L6531)

```diff
-       firstFreeAt(uu) {
-         let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...uu.map((uu => this.freeAt(uu, Eu))))
+       firstFreeAt(GG) {
+         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...GG.map((GG => this.freeAt(GG, bG))))
```

#### 286. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6536-L6538` → after: `L6536-L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6536-L6538) · [Before (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6536-L6538)

```diff
-       recent(uu, Eu) {
-         var ju;
-         return (null !== (ju = this.calls.get(uu)) && void 0 !== ju ? ju : []).filter((uu => Eu - uu < cZ))
+       recent(GG, bG) {
+         var ZG;
+         return (null !== (ZG = this.calls.get(GG)) && void 0 !== ZG ? ZG : []).filter((GG => bG - GG < pL))
```

#### 287. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6542-L6543` → after: `L6542-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6542-L6543) · [Before (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6542-L6543)

```diff
-     function OZ(uu) {
-       return uu > 36e5
+     function QL(GG) {
+       return GG > 36e5
```

#### 288. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6546-L6549` → after: `L6546-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6546-L6549) · [Before (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6546-L6549)

```diff
-     function YZ(uu, Eu) {
-       var ju;
-       const su = null === (ju = uu.headers.get(Eu)) || void 0 === ju ? void 0 : ju.trim();
-       return void 0 !== su && /^\d+$/.test(su) ? Number(su) : null
+     function KL(GG, bG) {
+       var ZG;
+       const wG = null === (ZG = GG.headers.get(bG)) || void 0 === ZG ? void 0 : ZG.trim();
+       return void 0 !== wG && /^\d+$/.test(wG) ? Number(wG) : null
```

#### 289. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6552-L6555` → after: `L6552-L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6552-L6555) · [Before (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6552-L6555)

```diff
-     function hZ(uu) {
-       var Eu;
-       const ju = null !== (Eu = YZ(uu, "retry-after")) && void 0 !== Eu ? Eu : YZ(uu, "ratelimit-reset");
-       return null === ju ? null : 1e3 * ju
+     function hL(GG) {
+       var bG;
+       const ZG = null !== (bG = KL(GG, "retry-after")) && void 0 !== bG ? bG : KL(GG, "ratelimit-reset");
+       return null === ZG ? null : 1e3 * ZG
```

#### 290. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6558-L6561` → after: `L6558-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6558-L6561) · [Before (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6558-L6561)

```diff
-     function DZ(uu, Eu) {
-       var ju;
-       const su = null !== (ju = hZ(Eu)) && void 0 !== ju ? ju : 0;
-       (429 === Eu.status || OZ(su) && 0 === YZ(Eu, "ratelimit-remaining")) && NZ.markFull(uu, Date.now(), su)
+     function dL(GG, bG) {
+       var ZG;
+       const wG = null !== (ZG = hL(bG)) && void 0 !== ZG ? ZG : 0;
+       (429 === bG.status || QL(wG) && 0 === KL(bG, "ratelimit-remaining")) && fL.markFull(GG, Date.now(), wG)
```

#### 291. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6564-L6567` → after: `L6564-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6564-L6567) · [Before (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6564-L6567)

```diff
-     function gZ(uu) {
-       const Eu = Date.now(),
-         ju = NZ.freeAt(uu, Eu) - Eu;
-       return ju <= 0 ? null : OZ(ju) ? "unavailable" : "busy"
+     function JL(GG) {
+       const bG = Date.now(),
+         ZG = fL.freeAt(GG, bG) - bG;
+       return ZG <= 0 ? null : QL(ZG) ? "unavailable" : "busy"
```

#### 292. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6570-L6571` → after: `L6570-L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6570-L6571) · [Before (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6570-L6571)

```diff
-     function MZ(uu, Eu) {
-       return `${function(uu){var Eu;if("string"===typeof uu)return uu;if(429!==uu.status)return`http-${uu.status}`;if(OZ(null!==(Eu=hZ(uu))&&void 0!==Eu?Eu:0))return"yearly-limit";const ju=YZ(uu,"retry-after");return null===ju?"busy":`busy-ra${ju}`}(Eu)}__${uu.replace(/[^A-Za-z0- … [truncated]
+     function rL(GG, bG) {
+       return `${function(GG){var bG;if("string"===typeof GG)return GG;if(429!==GG.status)return`http-${GG.status}`;if(QL(null!==(bG=hL(GG))&&void 0!==bG?bG:0))return"yearly-limit";const ZG=KL(GG,"retry-after");return null===ZG?"busy":`busy-ra${ZG}`}(bG)}__${GG.replace(/[^A-Za-z0- … [truncated]
```

#### 293. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6573-L6575` → after: `L6573-L6575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6573-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6573-L6575) · [Before (L6573-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6573-L6575)

```diff
-     const eZ = new class {
-         constructor(uu) {
-           this.loadReporter = uu, this.reportedCodes = new Set
+     const zL = new class {
+         constructor(GG) {
+           this.loadReporter = GG, this.reportedCodes = new Set
```

#### 294. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6577-L6579` → after: `L6577-L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6577-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6577-L6579) · [Before (L6577-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6577-L6579)

```diff
-         HN(uu, Eu) {
-           const ju = MZ(uu, Eu);
-           "undefined" === typeof window || this.reportedCodes.has(ju) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(ju), this.loadReporter().then((Eu => {
+         NQ(GG, bG) {
+           const ZG = rL(GG, bG);
+           "undefined" === typeof window || this.reportedCodes.has(ZG) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(ZG), this.loadReporter().then((bG => {
```

#### 295. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6581-L6585` → after: `L6581-L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6581-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6581-L6585) · [Before (L6581-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6581-L6585)

```diff
-               reportCappedWasmFailure: su
-             } = Eu;
-             su("ai_helper_failed", `World Code AI: ${uu} failed`, ju)
-           })).catch((uu => {
-             console.error("World Code AI: couldn't report a failure", uu)
+               reportCappedWasmFailure: wG
+             } = bG;
+             wG("ai_helper_failed", `World Code AI: ${GG} failed`, ZG)
+           })).catch((GG => {
+             console.error("World Code AI: couldn't report a failure", GG)
```

#### 296. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6588-L6600` → after: `L6588-L6600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6588-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6588-L6600) · [Before (L6588-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6588-L6600)

```diff
-       }((() => ju.e(213).then((() => ju(36668))))),
-       GZ = /\n{3,}/,
-       pZ = /<tool_call\b|<function=/;
- 
-     function wZ(uu) {
-       const Eu = uu.trimStart(),
-         ju = GZ.exec(Eu),
-         su = pZ.exec(Eu);
-       if (null === ju || null !== su && su.index < ju.index) return null;
-       const Uu = Eu.slice(ju.index + ju[0].length);
-       return "" === Uu.trim() ? null : Uu
-     }
-     const JZ = [{
+       }((() => ZG.e(213).then((() => ZG(36586))))),
+       EL = /\n{3,}/,
+       oL = /<tool_call\b|<function=/;
+ 
+     function XL(GG) {
+       const bG = GG.trimStart(),
+         ZG = EL.exec(bG),
+         wG = oL.exec(bG);
+       if (null === ZG || null !== wG && wG.index < ZG.index) return null;
+       const SG = bG.slice(ZG.index + ZG[0].length);
+       return "" === SG.trim() ? null : SG
+     }
+     const uL = [{
```

#### 297. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6619` → after: `L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6619) · [Before (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6619)

```diff
-     const dZ = {
+     const iL = {
```

#### 298. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6626-L6627` → after: `L6626-L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6626-L6627) · [Before (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6626-L6627)

```diff
-     function aZ(uu) {
-       return [...JZ, dZ].find((Eu => Eu.name === uu))
+     function CL(GG) {
+       return [...uL, iL].find((bG => bG.name === GG))
```

#### 299. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6630-L6632` → after: `L6630-L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6630-L6632) · [Before (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6630-L6632)

```diff
-     function PZ(uu) {
-       var Eu, ju;
-       return null !== (Eu = null === (ju = aZ(uu)) || void 0 === ju ? void 0 : ju.callFormat) && void 0 !== Eu ? Eu : "simple"
+     function WL(GG) {
+       var bG, ZG;
+       return null !== (bG = null === (ZG = CL(GG)) || void 0 === ZG ? void 0 : ZG.callFormat) && void 0 !== bG ? bG : "simple"
```

#### 300. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6635-L6636` → after: `L6635-L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6635-L6636) · [Before (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6635-L6636)

```diff
-     function oZ(uu) {
-       var Eu;
+     function mL(GG) {
+       var bG;
```

#### 301. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6638-L6639` → after: `L6638-L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6638-L6639) · [Before (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6638-L6639)

```diff
-         format: null !== (Eu = uu.callFormat) && void 0 !== Eu ? Eu : "simple",
-         nativeTools: !0 === uu.nativeTools
+         format: null !== (bG = GG.callFormat) && void 0 !== bG ? bG : "simple",
+         nativeTools: !0 === GG.nativeTools
```

#### 302. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6643-L6644` → after: `L6643-L6644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6643-L6644) · [Before (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6643-L6644)

```diff
-     function kZ(uu, Eu) {
-       return "function" === typeof uu ? uu(Eu) : uu
+     function IL(GG, bG) {
+       return "function" === typeof GG ? GG(bG) : GG
```

#### 303. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6646-L6652` → after: `L6646-L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6646-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6646-L6652) · [Before (L6646-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6646-L6652)

```diff
-     const mZ = "TOO_COMPLEX",
-       vZ = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${mZ} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       KZ = 24e4,
-       VZ = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class rZ extends Error {
-       constructor(uu) {
-         super(`World Code AI ${uu}`), this.reason = uu
+     const FL = "TOO_COMPLEX",
+       vL = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${FL} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       aL = 24e4,
+       cL = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class lL extends Error {
+       constructor(GG) {
+         super(`World Code AI ${GG}`), this.reason = GG
```

#### 304. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6656-L6658` → after: `L6656-L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6656-L6658) · [Before (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6656-L6658)

```diff
-     function QZ(uu, Eu) {
-       var ju, su, Uu, Zu, Xu;
-       const lu = uu[null !== (ju = Eu.index) && void 0 !== ju ? ju : 0] ??= {
+     function jL(GG, bG) {
+       var ZG, wG, SG, LG, yG;
+       const kG = GG[null !== (ZG = bG.index) && void 0 !== ZG ? ZG : 0] ??= {
```

#### 305. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6662` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6662) · [Before (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6662)

```diff
-       lu.name += null !== (su = null === (Uu = Eu.function) || void 0 === Uu ? void 0 : Uu.name) && void 0 !== su ? su : "", lu.args += null !== (Zu = null === (Xu = Eu.function) || void 0 === Xu ? void 0 : Xu.arguments) && void 0 !== Zu ? Zu : ""
+       kG.name += null !== (wG = null === (SG = bG.function) || void 0 === SG ? void 0 : SG.name) && void 0 !== wG ? wG : "", kG.args += null !== (LG = null === (yG = bG.function) || void 0 === yG ? void 0 : yG.arguments) && void 0 !== LG ? LG : ""
```

#### 306. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6665-L6666` → after: `L6665-L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6665-L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6665-L6666) · [Before (L6665-L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6665-L6666)

```diff
-     function iZ(uu) {
-       return "mcp" === uu ? "simple" : uu
+     function PL(GG) {
+       return "mcp" === GG ? "simple" : GG
```

#### 307. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6669-L6671` → after: `L6669-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6669-L6671) · [Before (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6669-L6671)

```diff
-     function WZ(uu, Eu, ju, su) {
-       let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return SZ(uu, Eu, ju, iZ(su), Uu).answer
+     function ML(GG, bG, ZG, wG) {
+       let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return AL(GG, bG, ZG, PL(wG), SG).answer
```

#### 308. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6674-L6677` → after: `L6674-L6677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6674-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6674-L6677) · [Before (L6674-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6674-L6677)

```diff
-     function SZ(uu, Eu, ju, su, Uu) {
-       const Zu = ju.flatMap((uu => {
-         const Eu = cj(uu.name, uu.args);
-         return null === Eu ? [] : [qU(sj(su), Eu.name, Eu.args)]
+     function AL(GG, bG, ZG, wG, SG) {
+       const LG = ZG.flatMap((GG => {
+         const bG = fZ(GG.name, GG.args);
+         return null === bG ? [] : [kS(wZ(wG), bG.name, bG.args)]
```

#### 309. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6679-L6686` → after: `L6679-L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6679-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6679-L6686) · [Before (L6679-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6679-L6686)

```diff
-       let Xu = !1;
-       return 0 !== Zu.length || 0 !== Oj(uu, su).length || uu.includes("```") || (Zu.push(...Uu ? [] : function(uu, Eu) {
-         let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const su = new Map;
-         for (const lu of Nj(uu, Eu)) {
-           const uu = Object.values(lu.args).some((uu => void 0 !== uu && ju.includes(uu.trim())));
-           var Uu, Zu, Xu;
-           "export_game" === lu.name || "switch_to_world_code" === lu.name || JE(lu.name) || uu || su.set(`${lu.name} ${null!==(Uu=lu.args.path)&&void 0!==Uu?Uu:""} ${null!==(Zu=lu.args.search)&&void 0!==Zu?Zu:""} ${null!==(Xu=lu.args.name)&&void 0!==Xu?Xu:""}`, lu.source)
+       let yG = !1;
+       return 0 !== LG.length || 0 !== KZ(GG, wG).length || GG.includes("```") || (LG.push(...SG ? [] : function(GG, bG) {
+         let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const wG = new Map;
+         for (const kG of QZ(GG, bG)) {
+           const GG = Object.values(kG.args).some((GG => void 0 !== GG && ZG.includes(GG.trim())));
+           var SG, LG, yG;
+           "export_game" === kG.name || "switch_to_world_code" === kG.name || ib(kG.name) || GG || wG.set(`${kG.name} ${null!==(SG=kG.args.path)&&void 0!==SG?SG:""} ${null!==(LG=kG.args.search)&&void 0!==LG?LG:""} ${null!==(yG=kG.args.name)&&void 0!==yG?yG:""}`, kG.source)
```

#### 310. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6688-L6691` → after: `L6688-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6688-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6688-L6691) · [Before (L6688-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6688-L6691)

```diff
-         return [...new Set(su.values())]
-       }(Eu, su, eU)), Xu = Zu.length > 0), {
-         answer: [uu, ...Zu].join("\n\n").trim(),
-         hasCallsFromReasoning: Xu
+         return [...new Set(wG.values())]
+       }(bG, wG, zS)), yG = LG.length > 0), {
+         answer: [GG, ...LG].join("\n\n").trim(),
+         hasCallsFromReasoning: yG
```

#### 311. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6694-L6697` → after: `L6694-L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6694-L6697) · [Before (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6694-L6697)

```diff
-     async function IZ(uu, Eu) {
-       const ju = uu.getReader(),
-         su = new TextDecoder;
-       let Uu = "";
+     async function sL(GG, bG) {
+       const ZG = GG.getReader(),
+         wG = new TextDecoder;
+       let SG = "";
```

#### 312. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6700-L6704` → after: `L6700-L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6700-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6700-L6704) · [Before (L6700-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6700-L6704)

```diff
-           done: uu,
-           value: Zu
-         } = await ju.read();
-         if (uu) break;
-         Uu += su.decode(Zu, {
+           done: GG,
+           value: LG
+         } = await ZG.read();
+         if (GG) break;
+         SG += wG.decode(LG, {
```

#### 313. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6707-L6713` → after: `L6707-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6707-L6713) · [Before (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6707-L6713)

```diff
-         let Xu = Uu.indexOf("\n");
-         for (; - 1 !== Xu;) {
-           const uu = Uu.slice(0, Xu).trim();
-           if (Uu = Uu.slice(Xu + 1), Xu = Uu.indexOf("\n"), !uu.startsWith("data:")) continue;
-           const ju = uu.slice(5).trim();
-           if ("[DONE]" === ju) return;
-           let su;
+         let yG = SG.indexOf("\n");
+         for (; - 1 !== yG;) {
+           const GG = SG.slice(0, yG).trim();
+           if (SG = SG.slice(yG + 1), yG = SG.indexOf("\n"), !GG.startsWith("data:")) continue;
+           const ZG = GG.slice(5).trim();
+           if ("[DONE]" === ZG) return;
+           let wG;
```

#### 314. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6715` → after: `L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6715) · [Before (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6715)

```diff
-             su = JSON.parse(ju)
+             wG = JSON.parse(ZG)
```

#### 315. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6719` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6719) · [Before (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6719)

```diff
-           Eu(su)
+           bG(wG)
```

#### 316. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6724-L6725` → after: `L6724-L6725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6724-L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6724-L6725) · [Before (L6724-L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6724-L6725)

```diff
-     function FZ(uu) {
-       return uu.map((uu => ({
+     function qL(GG) {
+       return GG.map((GG => ({
```

#### 317. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6728-L6730` → after: `L6728-L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6728-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6728-L6730) · [Before (L6728-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6728-L6730)

```diff
-           name: uu.name,
-           description: uu.description,
-           parameters: uu.inputSchema
+           name: GG.name,
+           description: GG.description,
+           parameters: GG.inputSchema
```

#### 318. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6735-L6736` → after: `L6735-L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6735-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6735-L6736) · [Before (L6735-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6735-L6736)

```diff
-     function BZ(uu) {
-       return "object" === typeof uu
+     function nL(GG) {
+       return "object" === typeof GG
```

#### 319. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6738-L6743` → after: `L6738-L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6738-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6738-L6743) · [Before (L6738-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6738-L6743)

```diff
-     async function LZ(uu, Eu, ju, su) {
-       let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const Zu = gZ(uu.name);
-       if (null !== Zu) return Zu;
-       NZ.record(uu.name);
-       const Xu = await fetch(BU, {
+     async function gL(GG, bG, ZG, wG) {
+       let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const LG = JL(GG.name);
+       if (null !== LG) return LG;
+       fL.record(GG.name);
+       const yG = await fetch(nS, {
```

#### 320. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6749-L6750` → after: `L6749-L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6749-L6750) · [Before (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6749-L6750)

```diff
-           model: uu.name,
-           messages: Eu,
+           model: GG.name,
+           messages: bG,
```

#### 321. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6752-L6753` → after: `L6752-L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6752-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6752-L6753) · [Before (L6752-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6752-L6753)

```diff
-           temperature: uu.temperature,
-           reasoning_effort: uu.reasoningEffort,
+           temperature: GG.temperature,
+           reasoning_effort: GG.reasoningEffort,
```

#### 322. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6758-L6759` → after: `L6758-L6759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6758-L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6758-L6759) · [Before (L6758-L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6758-L6759)

```diff
-           ...uu.nativeTools && Uu.length > 0 ? {
-             tools: FZ(Uu)
+           ...GG.nativeTools && SG.length > 0 ? {
+             tools: qL(SG)
```

#### 323. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6764` → after: `L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6764) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6764)

```diff
-         signal: ju
+         signal: ZG
```

#### 324. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6766-L6774` → after: `L6766-L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6766-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6766-L6774) · [Before (L6766-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6766-L6774)

```diff
-       if (DZ(uu.name, Xu), 429 === Xu.status) return eZ.HN(uu.name, Xu), "unavailable" === gZ(uu.name) ? "unavailable" : "busy";
-       if (!Xu.ok || !Xu.body) return console.warn(`World Code AI: ${uu.name} answered ${Xu.status}`), eZ.HN(uu.name, Xu.ok ? "empty" : Xu), Xu.ok ? "failed" : 429 === (lu = Xu.status) ? "busy" : 400 === lu || 413 === lu ? "tooLarge" : 401 === lu || 403 === lu ? "turnedAway" : "fa … [truncated]
-       var lu;
-       let qu = "",
-         fu = "";
-       const Cu = [];
-       let bu = !1,
-         cu = !1,
-         Nu = null;
+       if (dL(GG.name, yG), 429 === yG.status) return zL.NQ(GG.name, yG), "unavailable" === JL(GG.name) ? "unavailable" : "busy";
+       if (!yG.ok || !yG.body) return console.warn(`World Code AI: ${GG.name} answered ${yG.status}`), zL.NQ(GG.name, yG.ok ? "empty" : yG), yG.ok ? "failed" : 429 === (kG = yG.status) ? "busy" : 400 === kG || 413 === kG ? "tooLarge" : 401 === kG || 403 === kG ? "turnedAway" : "fa … [truncated]
+       var kG;
+       let UG = "",
+         YG = "";
+       const VG = [];
+       let pG = !1,
+         fG = !1,
+         QG = null;
```

#### 325. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6776-L6782` → after: `L6776-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6776-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6776-L6782) · [Before (L6776-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6776-L6782)

```diff
-         await async function(uu, Eu, ju) {
-           await IZ(uu, (uu => {
-             var su;
-             const Uu = uu,
-               Zu = null === (su = Uu.choices) || void 0 === su ? void 0 : su[0];
-             var Xu, lu;
-             Zu && Eu(null !== (Xu = Zu.delta) && void 0 !== Xu ? Xu : {}, null !== (lu = Zu.finish_reason) && void 0 !== lu ? lu : null), Uu.usage && (null === ju || void 0 === ju || ju(Uu.usage))
+         await async function(GG, bG, ZG) {
+           await sL(GG, (GG => {
+             var wG;
+             const SG = GG,
+               LG = null === (wG = SG.choices) || void 0 === wG ? void 0 : wG[0];
+             var yG, kG;
+             LG && bG(null !== (yG = LG.delta) && void 0 !== yG ? yG : {}, null !== (kG = LG.finish_reason) && void 0 !== kG ? kG : null), SG.usage && (null === ZG || void 0 === ZG || ZG(SG.usage))
```

#### 326. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6784-L6789` → after: `L6784-L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6784-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6784-L6789) · [Before (L6784-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6784-L6789)

```diff
-         }(Xu.body, ((Eu, ju) => {
-           var Uu, Zu, Xu, lu;
-           bu ||= "length" === ju, fu += null !== (Uu = null !== (Zu = Eu.reasoning) && void 0 !== Zu ? Zu : Eu.reasoning_content) && void 0 !== Uu ? Uu : "", qu += null !== (Xu = Eu.content) && void 0 !== Xu ? Xu : "";
-           for (const uu of null !== (Nu = Eu.tool_calls) && void 0 !== Nu ? Nu : []) {
-             var Nu;
-             cu ||= "" !== fu && "" === qu.trim(), QZ(Cu, uu)
+         }(yG.body, ((bG, ZG) => {
+           var SG, LG, yG, kG;
+           pG ||= "length" === ZG, YG += null !== (SG = null !== (LG = bG.reasoning) && void 0 !== LG ? LG : bG.reasoning_content) && void 0 !== SG ? SG : "", UG += null !== (yG = bG.content) && void 0 !== yG ? yG : "";
+           for (const GG of null !== (QG = bG.tool_calls) && void 0 !== QG ? QG : []) {
+             var QG;
+             fG ||= "" !== YG && "" === UG.trim(), jL(VG, GG)
```

#### 327. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6791-L6796` → after: `L6791-L6796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6791-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6791-L6796) · [Before (L6791-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6791-L6796)

```diff
-           const Ou = uu.nativeTools && cu ? null !== (lu = wZ(qu)) && void 0 !== lu ? lu : "" : qu;
-           null === su || void 0 === su || su({
-             model: uu.name,
-             reasoningChars: fu.length,
-             answer: Ou,
-             isCalling: Cu.length > 0
+           const KG = GG.nativeTools && fG ? null !== (kG = XL(UG)) && void 0 !== kG ? kG : "" : UG;
+           null === wG || void 0 === wG || wG({
+             model: GG.name,
+             reasoningChars: YG.length,
+             answer: KG,
+             isCalling: VG.length > 0
```

#### 328. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6798-L6799` → after: `L6798-L6799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6798-L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6798-L6799) · [Before (L6798-L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6798-L6799)

```diff
-         }), (uu => {
-           Nu = uu
+         }), (GG => {
+           QG = GG
```

#### 329. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6802` → after: `L6802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6802) · [Before (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6802)

```diff
-         fZ(Nu, Eu, qu + fu, 20 * Cu.length)
+         UL(QG, bG, UG + YG, 20 * VG.length)
```

#### 330. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6804-L6821` → after: `L6804-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6804-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6804-L6821) · [Before (L6804-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6804-L6821)

```diff
-       const Ou = tZ(uu, qu, fu, Cu, bu, cu);
-       return null === Ou ? (eZ.HN(uu.name, "empty"), "failed") : Ou
-     }
- 
-     function tZ(uu, Eu, ju, su, Uu) {
-       var Zu;
-       let Xu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         lu = Eu;
-       var qu;
-       uu.nativeTools && Xu && (lu = null !== (qu = wZ(lu)) && void 0 !== qu ? qu : lu);
-       lu = lu.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const fu = SZ(lu, ju, su, null !== (Zu = uu.callFormat) && void 0 !== Zu ? Zu : "simple", Uu);
-       return "" === fu.answer ? null : {
-         model: uu.name,
-         answer: fu.answer,
-         reasoning: ju,
- ... (2 more removed lines; see GitHub link above)
+       const KG = eL(GG, UG, YG, VG, pG, fG);
+       return null === KG ? (zL.NQ(GG.name, "empty"), "failed") : KG
+     }
+ 
+     function eL(GG, bG, ZG, wG, SG) {
+       var LG;
+       let yG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         kG = bG;
+       var UG;
+       GG.nativeTools && yG && (kG = null !== (UG = XL(kG)) && void 0 !== UG ? UG : kG);
+       kG = kG.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const YG = AL(kG, ZG, wG, null !== (LG = GG.callFormat) && void 0 !== LG ? LG : "simple", SG);
+       return "" === YG.answer ? null : {
+         model: GG.name,
+         answer: YG.answer,
+         reasoning: ZG,
+ ... (2 more added lines; see GitHub link above)
```

#### 331. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6825-L6826` → after: `L6825-L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6825-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6825-L6826) · [Before (L6825-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6825-L6826)

```diff
-     function xZ(uu) {
-       return uu.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     function RL(GG) {
+       return GG.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 332. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6829-L6830` → after: `L6829-L6830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6829-L6830) · [Before (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6829-L6830)

```diff
-     function TZ(uu) {
-       return BZ(uu) && !uu.isCutShort
+     function TL(GG) {
+       return nL(GG) && !GG.isCutShort
```

#### 333. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6832-L6835` → after: `L6832-L6835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6832-L6835) · [Before (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6832-L6835)

```diff
-     async function HZ(uu, Eu, ju, su, Uu) {
-       const Zu = uu.map((() => new AbortController)),
-         Xu = () => {
-           for (const uu of Zu) uu.abort()
+     async function HL(GG, bG, ZG, wG, SG) {
+       const LG = GG.map((() => new AbortController)),
+         yG = () => {
+           for (const GG of LG) GG.abort()
```

#### 334. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6837` → after: `L6837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6837) · [Before (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6837)

```diff
-       null !== ju && void 0 !== ju && ju.aborted && Xu(), null === ju || void 0 === ju || ju.addEventListener("abort", Xu, {
+       null !== ZG && void 0 !== ZG && ZG.aborted && yG(), null === ZG || void 0 === ZG || ZG.addEventListener("abort", yG, {
```

#### 335. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6840-L6854` → after: `L6840-L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6840-L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6840-L6854) · [Before (L6840-L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6840-L6854)

```diff
-       const lu = uu.map((() => {})),
-         qu = uu.map((() => {}));
-       let fu = null;
-       const Cu = uu => void 0 !== uu && ("" !== xZ(uu.answer).trim() || !0 === uu.isCalling);
-       let bu = () => {};
-       uu.forEach(((uu, ju) => {
-         const Xu = (0, gu.d)(KZ, Zu[ju].signal);
-         LZ(uu, kZ(Eu, uu), Xu.signal, (uu => {
-           qu[ju] = uu, null === fu && Cu(uu) && (fu = ju), fu === ju && (null === su || void 0 === su || su(uu))
-         }), Uu).catch((Eu => {
-           if (Zu[ju].signal.aborted) return "failed";
-           const su = Xu.signal.aborted;
-           return console.warn(`World Code AI: ${uu.name} ${su?"took longer than 240 s":"couldn't be reached"}`, Eu), eZ.HN(uu.name, su ? "timeout" : "network"), su ? "timeout" : "failed"
-         })).then((uu => {
-           Xu.clear(), lu[ju] = uu, fu !== ju || TZ(uu) || (fu = null), bu()
+       const kG = GG.map((() => {})),
+         UG = GG.map((() => {}));
+       let YG = null;
+       const VG = GG => void 0 !== GG && ("" !== RL(GG.answer).trim() || !0 === GG.isCalling);
+       let pG = () => {};
+       GG.forEach(((GG, ZG) => {
+         const yG = (0, rG.e)(aL, LG[ZG].signal);
+         gL(GG, IL(bG, GG), yG.signal, (GG => {
+           UG[ZG] = GG, null === YG && VG(GG) && (YG = ZG), YG === ZG && (null === wG || void 0 === wG || wG(GG))
+         }), SG).catch((bG => {
+           if (LG[ZG].signal.aborted) return "failed";
+           const wG = yG.signal.aborted;
+           return console.warn(`World Code AI: ${GG.name} ${wG?"took longer than 240 s":"couldn't be reached"}`, bG), zL.NQ(GG.name, wG ? "timeout" : "network"), wG ? "timeout" : "failed"
+         })).then((GG => {
+           yG.clear(), kG[ZG] = GG, YG !== ZG || TL(GG) || (YG = null), pG()
```

#### 336. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6857-L6862` → after: `L6857-L6862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6857-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6857-L6862) · [Before (L6857-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6857-L6862)

```diff
-       const cu = () => {
-         var uu;
-         if (null !== fu) {
-           const uu = lu[fu];
-           return TZ(uu) ? {
-             reply: uu
+       const fG = () => {
+         var GG;
+         if (null !== YG) {
+           const GG = kG[YG];
+           return TL(GG) ? {
+             reply: GG
```

#### 337. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6865-L6867` → after: `L6865-L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6865-L6867) · [Before (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6865-L6867)

```diff
-         const Eu = lu.find(TZ);
-         if (Eu) return {
-           reply: Eu
+         const bG = kG.find(TL);
+         if (bG) return {
+           reply: bG
```

#### 338. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6869-L6870` → after: `L6869-L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6869-L6870) · [Before (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6869-L6870)

```diff
-         if (!lu.includes(void 0)) return {
-           reply: null !== (uu = lu.find(BZ)) && void 0 !== uu ? uu : null
+         if (!kG.includes(void 0)) return {
+           reply: null !== (GG = kG.find(nL)) && void 0 !== GG ? GG : null
```

#### 339. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6873-L6877` → after: `L6873-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6873-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6873-L6877) · [Before (L6873-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6873-L6877)

```diff
-           const uu = lu.findIndex(((uu, Eu) => void 0 === uu && Cu(qu[Eu])));
-           if (-1 !== uu) {
-             fu = uu;
-             const Eu = qu[uu];
-             Eu && (null === su || void 0 === su || su(Eu))
+           const GG = kG.findIndex(((GG, bG) => void 0 === GG && VG(UG[bG])));
+           if (-1 !== GG) {
+             YG = GG;
+             const bG = UG[GG];
+             bG && (null === wG || void 0 === wG || wG(bG))
```

#### 340. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6883-L6886` → after: `L6883-L6886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6883-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6883-L6886) · [Before (L6883-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6883-L6886)

```diff
-           if (null !== ju && void 0 !== ju && ju.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const uu = cu();
-           if (uu) {
-             const Eu = lu.filter((uu => "string" === typeof uu));
+           if (null !== ZG && void 0 !== ZG && ZG.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const GG = fG();
+           if (GG) {
+             const bG = kG.filter((GG => "string" === typeof GG));
```

#### 341. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6888-L6889` → after: `L6888-L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6888-L6889) · [Before (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6888-L6889)

```diff
-               reply: uu.reply,
-               failures: Eu
+               reply: GG.reply,
+               failures: bG
```

#### 342. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6892-L6893` → after: `L6892-L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6892-L6893) · [Before (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6892-L6893)

```diff
-           await new Promise((uu => {
-             bu = uu
+           await new Promise((GG => {
+             pG = GG
```

#### 343. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6897` → after: `L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6897) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6897)

```diff
-         null === ju || void 0 === ju || ju.removeEventListener("abort", Xu), Xu()
+         null === ZG || void 0 === ZG || ZG.removeEventListener("abort", yG), yG()
```

#### 344. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6901-L6916` → after: `L6901-L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6901-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6901-L6916) · [Before (L6901-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6901-L6916)

```diff
-     function AZ() {
-       let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       const Eu = NZ.firstFreeAt(JZ.map((uu => uu.name)), uu);
-       return OZ(Eu - uu) ? uu : Eu
-     }
-     async function nZ(uu) {
-       var Eu;
-       let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const su = Date.now(),
-         Uu = null !== (Eu = ju.models) && void 0 !== Eu ? Eu : JZ,
-         Zu = void 0 === ju.models ? function(uu, Eu) {
-           let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-           const su = uu.map((uu => ({
-               model: uu,
-               key: ju()
-             }))).sort(((uu, Eu) => uu.key - Eu.key)).map((uu => {
+     function tL() {
+       let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const bG = fL.firstFreeAt(uL.map((GG => GG.name)), GG);
+       return QL(bG - GG) ? GG : bG
+     }
+     async function DL(GG) {
+       var bG;
+       let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const wG = Date.now(),
+         SG = null !== (bG = ZG.models) && void 0 !== bG ? bG : uL,
+         LG = void 0 === ZG.models ? function(GG, bG) {
+           let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+           const wG = GG.map((GG => ({
+               model: GG,
+               key: ZG()
+             }))).sort(((GG, bG) => GG.key - bG.key)).map((GG => {
```

#### 345. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6918-L6920` → after: `L6918-L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6918-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6918-L6920) · [Before (L6918-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6918-L6920)

```diff
-                 model: Eu
-               } = uu;
-               return Eu
+                 model: bG
+               } = GG;
+               return bG
```

#### 346. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6922-L6933` → after: `L6922-L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6922-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6922-L6933) · [Before (L6922-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6922-L6933)

```diff
-             Uu = [...su.filter((uu => Eu(uu))), ...su.filter((uu => !Eu(uu)))],
-             Zu = [];
-           for (let Xu = 0; Xu < Uu.length; Xu += 2) Zu.push(Uu.slice(Xu, Xu + 2));
-           return Zu
-         }(Uu, (uu => NZ.freeAt(uu.name) <= su)) : Uu.map((uu => [uu])),
-         Xu = [];
-       for (const qu of Zu) {
-         const Eu = await HZ(qu, uu, ju.signal, ju.onProgress, ju.tools);
-         if (null !== Eu.reply) {
-           const Uu = qu.find((uu => {
-             var ju;
-             return uu.name === (null === (ju = Eu.reply) || void 0 === ju ? void 0 : ju.model)
+             SG = [...wG.filter((GG => bG(GG))), ...wG.filter((GG => !bG(GG)))],
+             LG = [];
+           for (let yG = 0; yG < SG.length; yG += 2) LG.push(SG.slice(yG, yG + 2));
+           return LG
+         }(SG, (GG => fL.freeAt(GG.name) <= wG)) : SG.map((GG => [GG])),
+         yG = [];
+       for (const UG of LG) {
+         const bG = await HL(UG, GG, ZG.signal, ZG.onProgress, ZG.tools);
+         if (null !== bG.reply) {
+           const SG = UG.find((GG => {
+             var ZG;
+             return GG.name === (null === (ZG = bG.reply) || void 0 === ZG ? void 0 : ZG.model)
```

#### 347. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6936-L6937` → after: `L6936-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6936-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6936-L6937) · [Before (L6936-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6936-L6937)

```diff
-             ...Uu && !1 !== ju.canNudge ? await RZ(Uu, kZ(uu, Uu), Eu.reply, ju.signal, ju.onProgress, ju.tools) : Eu.reply,
-             ms: Date.now() - su
+             ...SG && !1 !== ZG.canNudge ? await xL(SG, IL(GG, SG), bG.reply, ZG.signal, ZG.onProgress, ZG.tools) : bG.reply,
+             ms: Date.now() - wG
```

#### 348. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6940` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6940) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6940)

```diff
-         Xu.push(...Eu.failures)
+         yG.push(...bG.failures)
```

#### 349. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6942-L6943` → after: `L6942-L6943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6942-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6942-L6943) · [Before (L6942-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6942-L6943)

```diff
-       const lu = VZ.find((uu => Xu.includes(uu)));
-       throw new rZ(null !== lu && void 0 !== lu ? lu : "failed")
+       const kG = cL.find((GG => yG.includes(GG)));
+       throw new lL(null !== kG && void 0 !== kG ? kG : "failed")
```

#### 350. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6945` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6945) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6945)

```diff
-     const yZ = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const NL = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 351. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6947-L6949` → after: `L6947-L6949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6947-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6947-L6949) · [Before (L6947-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6947-L6949)

```diff
-     function zZ(uu) {
-       const Eu = uu.trim();
-       return Eu.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(Eu) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(Eu) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function OL(GG) {
+       const bG = GG.trim();
+       return bG.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(bG) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(bG) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 352. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6956` → after: `L6956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6956) · [Before (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6956)

```diff
-         }(ju, null !== (Xu = uu.callFormat) && void 0 !== Xu ? Xu : "simple")) return ju;
+         }(ZG, null !== (yG = GG.callFormat) && void 0 !== yG ? yG : "simple")) return ZG;
```

#### 353. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6964` → after: `L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6964) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6964)

```diff
-         fu = (0, gu.d)(lu, su);
+         YG = (0, rG.e)(kG, wG);
```

#### 354. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6967` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6967) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6967)

```diff
-         return BZ(Eu) && "" !== Eu.answer.trim() ? Eu : ju
+         return nL(bG) && "" !== bG.answer.trim() ? bG : ZG
```

#### 355. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6970` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L6970) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L6970)

```diff
-         return eZ.HN(uu.name, fu.signal.aborted ? "timeout" : "network"), ju
+         return zL.NQ(GG.name, YG.signal.aborted ? "timeout" : "network"), ZG
```

#### 356. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7005` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7005) · [Before (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7005)

```diff
-       const su = (0, gu.d)(2e4, ju);
+       const wG = (0, rG.e)(2e4, ZG);
```

#### 357. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7023-L7024` → after: `L7023-L7024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7023-L7024) · [Before (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7023-L7024)

```diff
-         if (DZ(uu, ju), 429 === ju.status) return eZ.HN(uu, ju), "busy";
-         if (!ju.ok) return eZ.HN(uu, ju), null;
+         if (dL(GG, ZG), 429 === ZG.status) return zL.NQ(GG, ZG), "busy";
+         if (!ZG.ok) return zL.NQ(GG, ZG), null;
```

#### 358. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7026` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7026) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7026)

```diff
-           fu = String(null !== (Uu = null === (Zu = qu.choices) || void 0 === Zu || null === (Xu = Zu[0]) || void 0 === Xu || null === (lu = Xu.message) || void 0 === lu ? void 0 : lu.content) && void 0 !== Uu ? Uu : "");
+           YG = String(null !== (SG = null === (LG = UG.choices) || void 0 === LG || null === (yG = LG[0]) || void 0 === yG || null === (kG = yG.message) || void 0 === kG ? void 0 : kG.content) && void 0 !== SG ? SG : "");
```

#### 359. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7030` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7030) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7030)

```diff
-           }(fu) ? fu : null
+           }(YG) ? YG : null
```

#### 360. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7033` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7033) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7033)

```diff
-         return eZ.HN(uu, su.signal.aborted ? "timeout" : "network"), null
+         return zL.NQ(GG, wG.signal.aborted ? "timeout" : "network"), null
```

#### 361. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7038` → after: `L7038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7038) · [Before (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7038)

```diff
-     var ZX = ju(31);
+     var Sy = ZG(29);
```

#### 362. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7042-L7043` → after: `L7042-L7043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7042-L7043) · [Before (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7042-L7043)

```diff
-       const uu = ZX.k.getItem(XX);
-       return null !== uu && "object" === typeof uu ? uu : {}
+       const GG = Sy.h.getItem(Ly);
+       return null !== GG && "object" === typeof GG ? GG : {}
```

#### 363. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7053` → after: `L7053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7053) · [Before (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7053)

```diff
-         return null === this.player ? null : null !== (uu = null !== (Eu = this.unsaved.get(this.player)) && void 0 !== Eu ? Eu : lX()[this.player]) && void 0 !== uu ? uu : null
+         return null === this.player ? null : null !== (GG = null !== (bG = this.unsaved.get(this.player)) && void 0 !== bG ? bG : yy()[this.player]) && void 0 !== GG ? GG : null
```

#### 364. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7064-L7065` → after: `L7064-L7065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7064-L7065) · [Before (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7064-L7065)

```diff
-           } = await Promise.resolve().then((() => ju(1183)));
-           return null !== (uu = null === (Eu = su.peekCurrentUserContext()) || void 0 === Eu ? void 0 : Eu.whamm) && void 0 !== uu ? uu : null
+           } = await Promise.resolve().then((() => ZG(1096)));
+           return null !== (GG = null === (bG = wG.peekCurrentUserContext()) || void 0 === bG ? void 0 : bG.whamm) && void 0 !== GG ? GG : null
```

#### 365. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7070` → after: `L7070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7070) · [Before (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7070)

```diff
-         null !== this.player && (ZX.k.setItem(XX, {
+         null !== this.player && (Sy.h.setItem(Ly, {
```

#### 366. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7093` → after: `L7093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7093) · [Before (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7093)

```diff
-       const ju = `\n[... ${uu.length-Eu} more characters cut]`;
+       const ZG = `\n[... ${GG.length-bG} more characters cut]`;
```

#### 367. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7098-L7099` → after: `L7098-L7099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7098-L7099) · [Before (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7098-L7099)

```diff
-     var hX = ju(656),
-       DX = ju(4549);
+     var hy = ZG(612),
+       dy = ZG(4405);
```

#### 368. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7121` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7121) · [Before (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7121)

```diff
-         clientVersion: String(hX.b),
+         clientVersion: String(hy.e),
```

#### 369. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7136` → after: `L7136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7136) · [Before (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7136)

```diff
-         this.HN = uu, this.chatId = (0, DX.b)(12), this.open = new Map
+         this.NQ = GG, this.chatId = (0, dy.d)(12), this.open = new Map
```

#### 370. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7140` → after: `L7140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7140) · [Before (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7140)

```diff
-         ju && (clearTimeout(ju.timer), Eu || (this.open.delete(uu), this.send(ju.HN)))
+         ZG && (clearTimeout(ZG.timer), bG || (this.open.delete(GG), this.send(ZG.NQ)))
```

#### 371. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7145` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7145) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7145)

```diff
-         if (su) return void(su.HN.responses.length < NX && su.HN.responses.push(eX(ju)));
+         if (wG) return void(wG.NQ.responses.length < fy && wG.NQ.responses.push(zy(ZG)));
```

#### 372. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7148` → after: `L7148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7148) · [Before (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7148)

```diff
-           HN: Uu
+           NQ: SG
```

#### 373. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7158` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7158) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7158)

```diff
-           this.open.delete(uu), this.send(Eu.HN)
+           this.open.delete(GG), this.send(bG.NQ)
```

#### 374. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7164` → after: `L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7164) · [Before (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7164)

```diff
-         })(uu) && this.HN(uu)
+         })(GG) && this.NQ(GG)
```

#### 375. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7179` → after: `L7179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7179) · [Before (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7179)

```diff
-             HN: Eu
+             NQ: bG
```

#### 376. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7190` → after: `L7190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7190) · [Before (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7190)

```diff
-       "yes" === uu && ju.length > 0 && PX(ju.map((uu => uu.HN)))
+       "yes" === GG && ZG.length > 0 && Wy(ZG.map((GG => GG.NQ)))
```

#### 377. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7193` → after: `L7193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7193) · [Before (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7193)

```diff
-       const Eu = Promise.resolve().then((() => ju(41745)));
+       const bG = Promise.resolve().then((() => ZG(41895)));
```

#### 378. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7203-L7204` → after: `L7203-L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7203-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7203-L7204) · [Before (L7203-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7203-L7204)

```diff
-     var oX = ju(349),
-       kX = ju(166);
+     var my = ZG(352),
+       Iy = ZG(140);
```

#### 379. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7261` → after: `L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7261) · [Before (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7261)

```diff
-       return "https:" !== Eu.protocol && ("http:" !== Eu.protocol || !ju) || Eu.username || Eu.password || Eu.search ? null : `${Eu.origin}${Eu.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== bG.protocol && ("http:" !== bG.protocol || !ZG) || bG.username || bG.password || bG.search ? null : `${bG.origin}${bG.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 380. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7270` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7270) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7270)

```diff
-         super(`AI key request: ${uu}`), this.problem = uu, this.retryAfterMs = Eu, this.status = ju, this.detail = su
+         super(`AI key request: ${GG}`), this.problem = GG, this.retryAfterMs = bG, this.status = ZG, this.detail = wG
```

#### 381. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7275` → after: `L7275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7275) · [Before (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7275)

```diff
-       return ("" === Eu ? uu : uu.split(Eu).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === bG ? GG : GG.split(bG).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 382. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7282` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7282) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7282)

```diff
-           return `${ju} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${ZG} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 383. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7286` → after: `L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7286) · [Before (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7286)

```diff
-           return `${ju} can't find that model. Check its name.`;
+           return `${ZG} can't find that model. Check its name.`;
```

#### 384. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7288` → after: `L7288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7288) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7288)

```diff
-           return "anthropic" === Eu ? "Claude didn't accept your key: check it, or make a new one." : "custom" === Eu ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === bG ? "Claude didn't accept your key: check it, or make a new one." : "custom" === bG ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 385. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7290` → after: `L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7290) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7290)

```diff
-           return "custom" === Eu ? "That server stopped your key for now: it has used all it can." : `${ju} stopped your key for now: it has used all it can. Check it on ${ju}'s website.`;
+           return "custom" === bG ? "That server stopped your key for now: it has used all it can." : `${ZG} stopped your key for now: it has used all it can. Check it on ${ZG}'s website.`;
```

#### 386. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7292` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7292) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7292)

```diff
-           return `${ju} doesn't work from where you are.`;
+           return `${ZG} doesn't work from where you are.`;
```

#### 387. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7296)

```diff
-           return `${ju} had a problem with that. Try again in a minute.`
+           return `${ZG} had a problem with that. Try again in a minute.`
```

#### 388. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7322` → after: `L7322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7322) · [Before (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7322)

```diff
-         }(Eu)) throw new Error(`AI key request to an unknown host for ${uu}`);
+         }(bG)) throw new Error(`AI key request to an unknown host for ${GG}`);
```

#### 389. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7331)

```diff
-         throw console.warn(`AI key request: ${uu} answered ${Uu.status}`), new WX(function(uu, Eu, ju) {
+         throw console.warn(`AI key request: ${GG} answered ${SG.status}`), new My(function(GG, bG, ZG) {
```

#### 390. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7338` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7338) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7338)

```diff
-           return Number.isFinite(ju) ? 1e3 * ju : Math.max(0, Date.parse(Eu) - Date.now()) || void 0
+           return Number.isFinite(ZG) ? 1e3 * ZG : Math.max(0, Date.parse(bG) - Date.now()) || void 0
```

#### 391. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7345` → after: `L7345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7345) · [Before (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7345)

```diff
-             ju = "string" === typeof Uu ? Uu : uu
+             ZG = "string" === typeof SG ? SG : GG
```

#### 392. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7359` → after: `L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7359) · [Before (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7359)

```diff
-       const su = (0, gu.d)(uu, Eu);
+       const wG = (0, rG.e)(GG, bG);
```

#### 393. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7394` → after: `L7394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7394) · [Before (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7394)

```diff
-         esu: Xu,
+         cwG: yG,
```

#### 394. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7402` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7402) · [Before (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7402)

```diff
-         const Xu = null !== (ju = null === (su = uu.match(/```/g)) || void 0 === su ? void 0 : su.length) && void 0 !== ju ? ju : 0,
+         const yG = null !== (ZG = null === (wG = GG.match(/```/g)) || void 0 === wG ? void 0 : wG.length) && void 0 !== ZG ? ZG : 0,
```

#### 395. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7415` → after: `L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7415) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7415)

```diff
-         written: lu ? bu : void 0,
+         written: kG ? pG : void 0,
```

#### 396. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7427` → after: `L7427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7427) · [Before (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7427)

```diff
-       const su = null !== (ju = Eu.tools) && void 0 !== ju ? ju : [];
+       const wG = null !== (ZG = bG.tools) && void 0 !== ZG ? ZG : [];
```

#### 397. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7478` → after: `L7478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7478) · [Before (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7478)

```diff
-             models: (null !== (Eu = (await ju.json()).data) && void 0 !== Eu ? Eu : []).map((uu => ({
+             models: (null !== (bG = (await ZG.json()).data) && void 0 !== bG ? bG : []).map((GG => ({
```

#### 398. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7505` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7505) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7505)

```diff
-           return await IZ(null !== (Uu = Zu.body) && void 0 !== Uu ? Uu : new ReadableStream, (Eu => {
+           return await sL(null !== (SG = LG.body) && void 0 !== SG ? SG : new ReadableStream, (bG => {
```

#### 399. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7510-L7511` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7510-L7511) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7510-L7511)

```diff
-             lu += null !== (Uu = null !== (Zu = null === Du || void 0 === Du || null === (bu = Du.delta) || void 0 === bu ? void 0 : bu.reasoning) && void 0 !== Zu ? Zu : null === Du || void 0 === Du || null === (cu = Du.delta) || void 0 === cu ? void 0 : cu.reasoning_content) && … [truncated]
-             for (const uu of null !== (gu = null === Du || void 0 === Du || null === (Mu = Du.delta) || void 0 === Mu ? void 0 : Mu.tool_calls) && void 0 !== gu ? gu : []) {
+             kG += null !== (SG = null !== (LG = null === JG || void 0 === JG || null === (pG = JG.delta) || void 0 === pG ? void 0 : pG.reasoning) && void 0 !== LG ? LG : null === JG || void 0 === JG || null === (fG = JG.delta) || void 0 === fG ? void 0 : fG.reasoning_content) && … [truncated]
+             for (const GG of null !== (rG = null === JG || void 0 === JG || null === (zG = JG.delta) || void 0 === zG ? void 0 : zG.tool_calls) && void 0 !== rG ? rG : []) {
```

#### 400. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7524` → after: `L7524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7524) · [Before (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7524)

```diff
-             esu: qu,
+             cwG: UG,
```

#### 401. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7544` → after: `L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7544) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7544)

```diff
-         return await TX(BX, uu, (async uu => xX("openrouter", `${mX.openrouter.baseUrl}/key`, {
+         return await Ty(ny, GG, (async GG => Ry("openrouter", `${Fy.openrouter.baseUrl}/key`, {
```

#### 402. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7565` → after: `L7565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7565) · [Before (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7565)

```diff
-             models: (null !== (Eu = (await ju.json()).data) && void 0 !== Eu ? Eu : []).map((uu => ({
+             models: (null !== (bG = (await ZG.json()).data) && void 0 !== bG ? bG : []).map((GG => ({
```

#### 403. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7598` → after: `L7598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7598) · [Before (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7598)

```diff
-           await IZ(null !== (Zu = Xu.body) && void 0 !== Zu ? Zu : new ReadableStream, (Eu => {
+           await sL(null !== (LG = yG.body) && void 0 !== LG ? LG : new ReadableStream, (bG => {
```

#### 404. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7603-L7604` → after: `L7603-L7604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7603-L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7603-L7604) · [Before (L7603-L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7603-L7604)

```diff
-             if ("content_block_start" === Zu.type && "tool_use" === (null === (su = Zu.content_block) || void 0 === su ? void 0 : su.type)) bu.set(null !== (Nu = Zu.index) && void 0 !== Nu ? Nu : bu.size, {
-               name: null !== (Ou = Zu.content_block.name) && void 0 !== Ou ? Ou : "",
+             if ("content_block_start" === LG.type && "tool_use" === (null === (wG = LG.content_block) || void 0 === wG ? void 0 : wG.type)) pG.set(null !== (QG = LG.index) && void 0 !== QG ? QG : pG.size, {
+               name: null !== (KG = LG.content_block.name) && void 0 !== KG ? KG : "",
```

#### 405. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7609-L7610` → after: `L7609-L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7609-L7610) · [Before (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7609-L7610)

```diff
-               lu += null !== (Yu = null === (hu = Zu.delta) || void 0 === hu ? void 0 : hu.text) && void 0 !== Yu ? Yu : "", qu += null !== (Du = null === (gu = Zu.delta) || void 0 === gu ? void 0 : gu.thinking) && void 0 !== Du ? Du : "";
-               const uu = bu.get(null !== (Mu = Zu.index) && void 0 !== Mu ? Mu : -1);
+               kG += null !== (hG = null === (dG = LG.delta) || void 0 === dG ? void 0 : dG.text) && void 0 !== hG ? hG : "", UG += null !== (JG = null === (rG = LG.delta) || void 0 === rG ? void 0 : rG.thinking) && void 0 !== JG ? JG : "";
+               const GG = pG.get(null !== (zG = LG.index) && void 0 !== zG ? zG : -1);
```

#### 406. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7612` → after: `L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7612) · [Before (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7612)

```diff
-               if (uu && "input_json_delta" === (null === (eu = Zu.delta) || void 0 === eu ? void 0 : eu.type)) uu.args += null !== (Gu = Zu.delta.partial_json) && void 0 !== Gu ? Gu : ""
+               if (GG && "input_json_delta" === (null === (EG = LG.delta) || void 0 === EG ? void 0 : EG.type)) GG.args += null !== (oG = LG.delta.partial_json) && void 0 !== oG ? oG : ""
```

#### 407. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7628` → after: `L7628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7628) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7628)

```diff
-             esu: fu,
+             cwG: YG,
```

#### 408. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7654` → after: `L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7654) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7654)

```diff
-             models: (null !== (Eu = (await ju.json()).models) && void 0 !== Eu ? Eu : []).filter((uu => {
+             models: (null !== (bG = (await ZG.json()).models) && void 0 !== bG ? bG : []).filter((GG => {
```

#### 409. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7677` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7677) · [Before (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7677)

```diff
-           const Xu = await xX("gemini", `${this.baseUrl}/models/${encodeURIComponent(uu)}:streamGenerateContent?alt=sse`, {
+           const yG = await Ry("gemini", `${this.baseUrl}/models/${encodeURIComponent(GG)}:streamGenerateContent?alt=sse`, {
```

#### 410. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7696` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7696) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7696)

```diff
-           return await IZ(null !== (Zu = Xu.body) && void 0 !== Zu ? Zu : new ReadableStream, (Eu => {
+           return await sL(null !== (LG = yG.body) && void 0 !== LG ? LG : new ReadableStream, (bG => {
```

#### 411. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7700)

```diff
-             for (const uu of null !== (Nu = null === cu || void 0 === cu || null === (Ou = cu.content) || void 0 === Ou ? void 0 : Ou.parts) && void 0 !== Nu ? Nu : []) {
+             for (const GG of null !== (QG = null === fG || void 0 === fG || null === (KG = fG.content) || void 0 === KG ? void 0 : KG.parts) && void 0 !== QG ? QG : []) {
```

#### 412. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7703-L7704` → after: `L7703-L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7703-L7704) · [Before (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7703-L7704)

```diff
-                 name: null !== (Yu = uu.functionCall.name) && void 0 !== Yu ? Yu : "",
-                 args: JSON.stringify(null !== (hu = uu.functionCall.args) && void 0 !== hu ? hu : {})
+                 name: null !== (hG = GG.functionCall.name) && void 0 !== hG ? hG : "",
+                 args: JSON.stringify(null !== (dG = GG.functionCall.args) && void 0 !== dG ? dG : {})
```

#### 413. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7708` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7708) · [Before (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7708)

```diff
-                 qu += null !== (Du = uu.text) && void 0 !== Du ? Du : ""
+                 UG += null !== (JG = GG.text) && void 0 !== JG ? JG : ""
```

#### 414. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7711` → after: `L7711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7711) · [Before (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7711)

```diff
-                 lu += null !== (gu = uu.text) && void 0 !== gu ? gu : ""
+                 kG += null !== (rG = GG.text) && void 0 !== rG ? rG : ""
```

#### 415. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7723` → after: `L7723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7723) · [Before (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7723)

```diff
-             esu: fu,
+             cwG: YG,
```

#### 416. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7748` → after: `L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7748) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7748)

```diff
-           return new zX("custom", null !== ju && void 0 !== ju ? ju : "", Eu)
+           return new Oy("custom", null !== ZG && void 0 !== ZG ? ZG : "", bG)
```

#### 417. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7876` → after: `L7876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7876) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7876)

```diff
-         name: null !== (su = null === Uu || void 0 === Uu ? void 0 : Uu.name) && void 0 !== su ? su : Eu,
+         name: null !== (wG = null === SG || void 0 === SG ? void 0 : SG.name) && void 0 !== wG ? wG : bG,
```

#### 418. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7900` → after: `L7900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7900) · [Before (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7900)

```diff
-       return null !== (Eu = uu.find((uu => "smart" === uu.tier))) && void 0 !== Eu ? Eu : uu[0]
+       return null !== (bG = GG.find((GG => "smart" === GG.tier))) && void 0 !== bG ? bG : GG[0]
```

#### 419. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7906` → after: `L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7906) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7906)

```diff
-       return null !== (Eu = uu.name) && void 0 !== Eu ? Eu : iX(uu.provider, uu.baseUrl, ju)
+       return null !== (bG = GG.name) && void 0 !== bG ? bG : Py(GG.provider, GG.baseUrl, ZG)
```

#### 420. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7923` → after: `L7923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7923) · [Before (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7923)

```diff
-         return new URL(null !== (Eu = uu.baseUrl) && void 0 !== Eu ? Eu : "").protocol.startsWith("http")
+         return new URL(null !== (bG = GG.baseUrl) && void 0 !== bG ? bG : "").protocol.startsWith("http")
```

#### 421. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7933` → after: `L7933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7933) · [Before (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7933)

```diff
-         return console.warn(`AI Helper: no ${uu}`, Eu), null
+         return console.warn(`AI Helper: no ${GG}`, bG), null
```

#### 422. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7945` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7945) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7945)

```diff
-         this.state = null !== su && void 0 !== su && su.remember ? null !== Uu && void 0 !== Uu && Uu.remember ? Uu : {
+         this.state = null !== wG && void 0 !== wG && wG.remember ? null !== SG && void 0 !== SG && SG.remember ? SG : {
```

#### 423. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7948` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7948) · [Before (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7948)

```diff
-         } : null !== (ju = null !== su && void 0 !== su ? su : Uu) && void 0 !== ju ? ju : cl, this.ownsRemembered = this.state.remember && null !== Uu
+         } : null !== (ZG = null !== wG && void 0 !== wG ? wG : SG) && void 0 !== ZG ? ZG : pk, this.ownsRemembered = this.state.remember && null !== SG
```

#### 424. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7965-L7966` → after: `L7965-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7965-L7966) · [Before (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7965-L7966)

```diff
-           lu = "custom" !== uu.provider ? uu.provider : null !== (su = null === Xu || void 0 === Xu ? void 0 : Xu.id) && void 0 !== su ? su : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           qu = void 0 === Eu ? fl(uu.models) : null !== (Uu = uu.models.find((uu => uu.id === Eu))) && void 0 !== Uu ? Uu : uu.models[0],
+           kG = "custom" !== GG.provider ? GG.provider : null !== (wG = null === yG || void 0 === yG ? void 0 : yG.id) && void 0 !== wG ? wG : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           UG = void 0 === bG ? Uk(GG.models) : null !== (SG = GG.models.find((GG => GG.id === bG))) && void 0 !== SG ? SG : GG.models[0],
```

#### 425. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7981` → after: `L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L7981) · [Before (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L7981)

```diff
-           Nu = cu ? this.state.keys.filter((uu => uu.id !== lu)).map((uu => uu.id === ju ? Cu : uu)) : bu ? [...this.state.keys, Cu] : this.state.keys.map((uu => uu.id === lu ? Cu : uu)),
+           QG = fG ? this.state.keys.filter((GG => GG.id !== kG)).map((GG => GG.id === ZG ? VG : GG)) : pG ? [...this.state.keys, VG] : this.state.keys.map((GG => GG.id === kG ? VG : GG)),
```

#### 426. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8000` → after: `L8000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8000) · [Before (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8000)

```diff
-             return "" === ju ? Uu : {
+             return "" === ZG ? SG : {
```

#### 427. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8095` → after: `L8095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8095) · [Before (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8095)

```diff
-           su = (null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.keys) && void 0 !== Eu ? Eu : []).filter((uu => this.state.keys.every((Eu => !Nl(Eu, uu)))));
+           wG = (null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.keys) && void 0 !== bG ? bG : []).filter((GG => this.state.keys.every((bG => !fk(bG, GG)))));
```

#### 428. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8139` → after: `L8139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8139) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8139)

```diff
-           return Array.isArray(Eu.keys) && Eu.keys.every(Ol) ? Eu : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(bG.keys) && bG.keys.every(Qk) ? bG : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 429. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8181` → after: `L8181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8181) · [Before (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8181)

```diff
-       const lu = null !== (ju = null === Xu || void 0 === Xu ? void 0 : Xu.trim()) && void 0 !== ju ? ju : "";
+       const kG = null !== (ZG = null === yG || void 0 === yG ? void 0 : yG.trim()) && void 0 !== ZG ? ZG : "";
```

#### 430. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8211` → after: `L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8211) · [Before (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8211)

```diff
-               return 0 !== (null !== (ju = null === (su = Eu.tools) || void 0 === su ? void 0 : su.length) && void 0 !== ju ? ju : 0) && uu instanceof WX && "failed" === uu.problem && (400 === uu.status || 404 === uu.status && /\btool/i.test(null !== (Uu = uu.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (ZG = null === (wG = bG.tools) || void 0 === wG ? void 0 : wG.length) && void 0 !== ZG ? ZG : 0) && GG instanceof My && "failed" === GG.problem && (400 === GG.status || 404 === GG.status && /\btool/i.test(null !== (SG = GG.detail) && void 0 != … [truncated]
```

#### 431. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8226` → after: `L8226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8226) · [Before (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8226)

```diff
-         return await (qu = Math.min(null !== (Xu = null !== (lu = bu.retryAfterMs) && void 0 !== lu ? lu : ju.retryWaitMs) && void 0 !== Xu ? Xu : 3e3, 2e4), fu = ju.signal, new Promise(((uu, Eu) => {
+         return await (UG = Math.min(null !== (yG = null !== (kG = pG.retryAfterMs) && void 0 !== kG ? kG : ZG.retryWaitMs) && void 0 !== yG ? yG : 3e3, 2e4), YG = ZG.signal, new Promise(((GG, bG) => {
```

#### 432. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8238` → after: `L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8238) · [Before (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8238)

```diff
-     var el = ju(3836);
+     var zk = ZG(3634);
```

#### 433. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8355)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${Wl((null!==(Eu=uu.availableFrom)&&void 0!==Eu?Eu:ju)-ju)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${Ak((null!==(bG=GG.availableFrom)&&void 0!==bG?bG:ZG)-ZG)} to go.`;
```

#### 434. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8357` → after: `L8357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8357) · [Before (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8357)

```diff
-           return uu.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(uu,Eu){const ju=Math.ceil((uu-Eu)/36e5);if(ju<=24)return ju<=1?"within the hour":`in ${ju} hours`;return`in ${Wl(uu-Eu)}`}(uu.resetsAt,ju)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return GG.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(GG,bG){const ZG=Math.ceil((GG-bG)/36e5);if(ZG<=24)return ZG<=1?"within the hour":`in ${ZG} hours`;return`in ${Ak(GG-bG)}`}(GG.resetsAt,ZG)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 435. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8388` → after: `L8388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8388) · [Before (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8388)

```diff
-       return `Usage left: ${uu.left}`
+       return `Usage left: ${GG.left}`
```

#### 436. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8392-L8393` → after: `L8392-L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8392-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8392-L8393) · [Before (L8392-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8392-L8393)

```diff
-       const Eu = Math.max(1, Math.ceil(uu / oX.h));
-       return 1 === Eu ? "1 day" : `${Eu} days`
+       const bG = Math.max(1, Math.ceil(GG / my.j));
+       return 1 === bG ? "1 day" : `${bG} days`
```

#### 437. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8398` → after: `L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8398) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8398)

```diff
-       if (ju) return `${ju} Bot.xd is answering instead.`;
+       if (ZG) return `${ZG} Bot.xd is answering instead.`;
```

#### 438. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8417` → after: `L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8417) · [Before (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8417)

```diff
-           return uu.messages.length > 12 || uu.messages.some((uu => uu.content.length > jZ)) || (null !== (Eu = null === (ju = uu.toolsJson) || void 0 === ju ? void 0 : ju.length) && void 0 !== Eu ? Eu : 0) > 1e5 || (null !== (su = null === (Uu = uu.request) || void 0 === Uu ? vo … [truncated]
+           return GG.messages.length > 12 || GG.messages.some((GG => GG.content.length > bL)) || (null !== (bG = null === (ZG = GG.toolsJson) || void 0 === ZG ? void 0 : ZG.length) && void 0 !== bG ? bG : 0) > 1e5 || (null !== (wG = null === (SG = GG.request) || void 0 === SG ? vo … [truncated]
```

#### 439. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8442-L8444` → after: `L8442-L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8442-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8442-L8444) · [Before (L8442-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8442-L8444)

```diff
-     var Bl = ju(24),
-       Ll = ju(22),
-       tl = ju(2374);
+     var gk = ZG(19),
+       ek = ZG(17),
+       Rk = ZG(2264);
```

#### 440. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8448` → after: `L8448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8448) · [Before (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8448)

```diff
-       xl ??= Promise.resolve().then((() => ju(2380))), xl.then((uu => {
+       Tk ??= Promise.resolve().then((() => ZG(2266))), Tk.then((GG => {
```

#### 441. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8470` → after: `L8470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8470) · [Before (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8470)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => ju(1405))), ju.e(359).then((() => ju(61525)))]);
+         }] = await Promise.all([Promise.resolve().then((() => ZG(1311))), ZG.e(359).then((() => ZG(61838)))]);
```

#### 442. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8477` → after: `L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8477) · [Before (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8477)

```diff
-                   Bl.h.TY("OpenStoreFromCodeEditor"), (0, tl.m)({
+                   gk.l.xh("OpenStoreFromCodeEditor"), (0, Rk.n)({
```

#### 443. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8482-L8483` → after: `L8482-L8483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8482-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8482-L8483) · [Before (L8482-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8482-L8483)

```diff
-                   const uu = Bl.h.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === Ll.d.get("openEverythingMenuName") && (Bl.h.unsubscribe(uu), Pl.refresh())
+                   const GG = gk.l.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === ek.e.get("openEverythingMenuName") && (gk.l.unsubscribe(GG), mk.refresh())
```

#### 444. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8666` → after: `L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8666) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8666)

```diff
-       return uu.length > 4 && uu.endsWith("ies") ? `${uu.slice(0,-3)}y` : uu.length > 3 && uu.endsWith("s") && !uu.endsWith("ss") ? uu.slice(0, -1) : uu
+       return GG.length > 4 && GG.endsWith("ies") ? `${GG.slice(0,-3)}y` : GG.length > 3 && GG.endsWith("s") && !GG.endsWith("ss") ? GG.slice(0, -1) : GG
```

#### 445. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8682` → after: `L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8682) · [Before (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8682)

```diff
-         Uu = Xq(Eu ? uu : (0, YE.u)(uu, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, YE.j, (() => "projectRequire"))),
+         SG = yU(bG ? GG : (0, hb.y)(GG, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, hb.r, (() => "projectRequire"))),
```

#### 446. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8685` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8685) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8685)

```diff
-         for (const Uu of (0, YE.e)(uu, /(global|window|document|process|require)\b\s*[.([]/g, YE.j)) su.has(Uu[1]) || Zu.has(Uu[1]) || (su.add(Uu[1]), ju.push(`Line ${Eu+1} uses "${Uu[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const SG of (0, hb.g)(GG, /(global|window|document|process|require)\b\s*[.([]/g, hb.r)) wG.has(SG[1]) || LG.has(SG[1]) || (wG.add(SG[1]), ZG.push(`Line ${bG+1} uses "${SG[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 447. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8700` → after: `L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8700) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8700)

```diff
-         const Nu = [null !== (Zu = Eu[su - 2]) && void 0 !== Zu ? Zu : "", null !== (Xu = Eu[su - 1]) && void 0 !== Xu ? Xu : "", uu.slice(0, fu)].join(" ");
+         const QG = [null !== (LG = bG[wG - 2]) && void 0 !== LG ? LG : "", null !== (yG = bG[wG - 1]) && void 0 !== yG ? yG : "", GG.slice(0, YG)].join(" ");
```

#### 448. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8702-L8703` → after: `L8702-L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8702-L8703) · [Before (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8702-L8703)

```diff
-         const Ou = null !== (lu = null === (qu = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(bu)) || void 0 === qu ? void 0 : qu[1]) && void 0 !== lu ? lu : "coins";
-         ju.push(`Line ${su+1} sets the saved "${Ou}" back to ${cu} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${Ou}") is null.`)
+         const KG = null !== (kG = null === (UG = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(pG)) || void 0 === UG ? void 0 : UG[1]) && void 0 !== kG ? kG : "coins";
+         ZG.push(`Line ${wG+1} sets the saved "${KG}" back to ${fG} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${KG}") is null.`)
```

#### 449. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8709` → after: `L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8709) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8709)

```diff
-       const su = null !== (Eu = null === (ju = uu.split("### Parameters:")[1]) || void 0 === ju ? void 0 : ju.split("###")[0]) && void 0 !== Eu ? Eu : "",
+       const wG = null !== (bG = null === (ZG = GG.split("### Parameters:")[1]) || void 0 === ZG ? void 0 : ZG.split("###")[0]) && void 0 !== bG ? bG : "",
```

#### 450. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8757-L8759` → after: `L8757-L8759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8757-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8757-L8759) · [Before (L8757-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8757-L8759)

```diff
-         Uu = `\\((?:[^()]*[\\s,])?${su}(?![\\w$])[^()]*\\)`,
-         Zu = new RegExp(`(?:const|let|var)\\s+${su}(?![\\w$])|${su}\\s*(?:\\+?=(?![=>])|=>)|${Uu}\\s*=>|function\\s*[\\w$]*\\s*${Uu}`, "g");
-       return 1 === (0, YE.e)(uu, Zu, YE.j).length ? null === (ju = new RegExp(`\\b(?:const|let|var)\\s+${su}\\s*=\\s*${bq}\\s*(?:;|//|$)`, "m").exec(uu)) || void 0 === ju ? void 0 : ju[1] : void 0
+         SG = `\\((?:[^()]*[\\s,])?${wG}(?![\\w$])[^()]*\\)`,
+         LG = new RegExp(`(?:const|let|var)\\s+${wG}(?![\\w$])|${wG}\\s*(?:\\+?=(?![=>])|=>)|${SG}\\s*=>|function\\s*[\\w$]*\\s*${SG}`, "g");
+       return 1 === (0, hb.g)(GG, LG, hb.r).length ? null === (ZG = new RegExp(`\\b(?:const|let|var)\\s+${wG}\\s*=\\s*${pU}\\s*(?:;|//|$)`, "m").exec(GG)) || void 0 === ZG ? void 0 : ZG[1] : void 0
```

#### 451. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8768-L8769` → after: `L8768-L8769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8768-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8768-L8769) · [Before (L8768-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8768-L8769)

```diff
-           su = -1 === ju ? Eu : Eu.slice(0, ju + 1);
-         return su.length > 110 ? `${su.slice(0,107)}...` : su
+           wG = -1 === ZG ? bG : bG.slice(0, ZG + 1);
+         return wG.length > 110 ? `${wG.slice(0,107)}...` : wG
```

#### 452. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8771` → after: `L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8771) · [Before (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8771)

```diff
-       return su = "api" === uu ? `api.${Eu}(${Cq(ju).join(", ")})${Uu?` \u2014 ${Uu}`:""}` : "callback" === uu ? `${Eu}(${Cq(ju).join(", ")})${Uu?` \u2014 ${Uu}`:""}` : "clientOption" === uu ? `${Eu}: ${function(uu){var Eu,ju;return null!==(Eu=null===(ju=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return wG = "api" === GG ? `api.${bG}(${VU(ZG).join(", ")})${SG?` \u2014 ${SG}`:""}` : "callback" === GG ? `${bG}(${VU(ZG).join(", ")})${SG?` \u2014 ${SG}`:""}` : "clientOption" === GG ? `${bG}: ${function(GG){var bG,ZG;return null!==(bG=null===(ZG=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 453. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8773` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8773) · [Before (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8773)

```diff
-         Eu.map((uu => `"${uu}"`)).join(" or ")
+         bG.map((GG => `"${GG}"`)).join(" or ")
```

#### 454. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8775` → after: `L8775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8775) · [Before (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8775)

```diff
-       The closest name is "${Eu[0]}", which may be something
+       The closest name is "${bG[0]}", which may be something
```

#### 455. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8777` → after: `L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8777) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8777)

```diff
-       `}function gq(uu){return uu.split("\n").slice(1).map((uu=>uu.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((uu=>""!==uu&&!uu.startsWith("#")))}class Mq{constructor(uu){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function rU(GG){return GG.split("\n").slice(1).map((GG=>GG.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((GG=>""!==GG&&!GG.startsWith("#")))}class zU{constructor(GG){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 456. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8781` → after: `L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8781) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8781)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();Eu.push({name:ju,text:Uu})}return Eu}(ju))Eu.push(Oq(uu,su,Uu))};ju("api",uu.apiReference),ju("callback",uu.callbacks),ju("clientOption",uu.clientOptions),ju("snippet",uu.snippets),ju("howTo",uu.howTo);const su=function(){const uu … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();bG.push({name:ZG,text:SG})}return bG}(ZG))bG.push(KU(GG,wG,SG))};ZG("api",GG.apiReference),ZG("callback",GG.callbacks),ZG("clientOption",GG.clientOptions),ZG("snippet",GG.snippets),ZG("howTo",GG.howTo);const wG=function(){const GG … [truncated]
```

#### 457. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8792-L8793` → after: `L8792-L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8792-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8792-L8793) · [Before (L8792-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8792-L8793)

```diff
-       n\ nUsage: \`${uu.signature}\`\n\n\`\`\`js\n${uu.example}\n\`\`\``)),
-   Eu = Ms.map((uu => `## ${uu.name}\nPrefab (${uu.kind}, ${uu.category}): put in with use_prefab. ${Qs(uu,!1)}`));
+       n\ nUsage: \`${GG.signature}\`\n\n\`\`\`js\n${GG.example}\n\`\`\``)),
+   bG = rw.map((GG => `## ${GG.name}\nPrefab (${GG.kind}, ${GG.category}): put in with use_prefab. ${jw(GG,!1)}`));
```

#### 458. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8795-L8796` → after: `L8795-L8796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8795-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8795-L8796) · [Before (L8795-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8795-L8796)

```diff
-     helpers: `# Ready-made functions\n\n${uu.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${Eu.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${GG.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${bG.join("\n\n")}\n`
```

#### 459. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8804` → after: `L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8804) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8804)

```diff
-     this.wordCounts.set(uu, (null !== (Uu = this.wordCounts.get(uu)) && void 0 !== Uu ? Uu : 0) + 1)
+     this.wordCounts.set(GG, (null !== (SG = this.wordCounts.get(GG)) && void 0 !== SG ? SG : 0) + 1)
```

#### 460. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8809` → after: `L8809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8809) · [Before (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8809)

```diff
-   const su = null !== (Eu = null === (ju = uu.split("## Mob Variations")[1]) || void 0 === ju ? void 0 : ju.split("```")[1]) && void 0 !== Eu ? Eu : "",
+   const wG = null !== (bG = null === (ZG = GG.split("## Mob Variations")[1]) || void 0 === ZG ? void 0 : ZG.split("```")[1]) && void 0 !== bG ? bG : "",
```

#### 461. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8832` → after: `L8832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8832) · [Before (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8832)

```diff
-       return null !== (Eu = uu[1]) && void 0 !== Eu ? Eu : uu[2]
+       return null !== (bG = GG[1]) && void 0 !== bG ? bG : GG[2]
```

#### 462. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8839` → after: `L8839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8839) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8839)

```diff
-     for (const Uu of (0, YE.e)(uu, /([\w$]+)\s*\(/g, YE.j)) {
+     for (const SG of (0, hb.g)(GG, /([\w$]+)\s*\(/g, hb.r)) {
```

#### 463. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8843` → after: `L8843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8843) · [Before (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8843)

```diff
-       Zu.has(Xu) || su.has(Xu) || lu || "api" !== (null === (ju = this.byName.get(Xu)) || void 0 === ju ? void 0 : ju.kind) || Zu.set(Xu, `Line ${Eu+1} calls ${Xu} without "api.", so it throws there. Did you mean api.${Xu}?`)
+       LG.has(yG) || wG.has(yG) || kG || "api" !== (null === (ZG = this.byName.get(yG)) || void 0 === ZG ? void 0 : ZG.kind) || LG.set(yG, `Line ${bG+1} calls ${yG} without "api.", so it throws there. Did you mean api.${yG}?`)
```

#### 464. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8852-L8853` → after: `L8852-L8853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8852-L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8852-L8853) · [Before (L8852-L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8852-L8853)

```diff
-     const Eu = this.find(uu.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((uu => "api" === uu.kind)).slice(0, 2).map((uu => `api.${uu.name}`));
-     return `api.${uu} doesn't exist.${Eu.length?` Did you mean ${Eu.join(" or ")}?`:""}`
+     const bG = this.find(GG.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((GG => "api" === GG.kind)).slice(0, 2).map((GG => `api.${GG.name}`));
+     return `api.${GG} doesn't exist.${bG.length?` Did you mean ${bG.join(" or ")}?`:""}`
```

#### 465. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8873` → after: `L8873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8873) · [Before (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8873)

```diff
-         cu = bu ? null === (qu = new RegExp(`(?:^|[{,])\\s*${bu.replaceAll("$","\\$")}\\s*:\\s*${bq}`, "m").exec(uu)) || void 0 === qu ? void 0 : qu[1] : void 0,
+         fG = pG ? null === (UG = new RegExp(`(?:^|[{,])\\s*${pG.replaceAll("$","\\$")}\\s*:\\s*${pU}`, "m").exec(GG)) || void 0 === UG ? void 0 : UG[1] : void 0,
```

#### 466. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8875-L8876` → after: `L8875-L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8875-L8876) · [Before (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8875-L8876)

```diff
-         Ou = null !== (fu = null === (Cu = new RegExp(`\\?\\s*${bq}\\s*:\\s*${bq}$`).exec(su)) || void 0 === Cu ? void 0 : Cu.slice(1)) && void 0 !== fu ? fu : [];
-       for (const uu of [null !== (Yu = null !== cu && void 0 !== cu ? cu : Nu) && void 0 !== Yu ? Yu : su, ...Ou]) {
+         KG = null !== (YG = null === (VG = new RegExp(`\\?\\s*${pU}\\s*:\\s*${pU}$`).exec(wG)) || void 0 === VG ? void 0 : VG.slice(1)) && void 0 !== YG ? YG : [];
+       for (const GG of [null !== (hG = null !== fG && void 0 !== fG ? fG : QG) && void 0 !== hG ? hG : wG, ...KG]) {
```

#### 467. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8884` → after: `L8884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8884) · [Before (L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8884)

```diff
-   return [...ju].map((uu => `"${uu}" isn't an item or block name.${Dq(this.suggestNames(uu))}`))
+   return [...ZG].map((GG => `"${GG}" isn't an item or block name.${JU(this.suggestNames(GG))}`))
```

#### 468. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8897` → after: `L8897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8897) · [Before (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8897)

```diff
-     return `"${Eu}" isn't an item or block name, so giving or selling it fails. Did you mean "${ju}"?`
+     return `"${bG}" isn't an item or block name, so giving or selling it fails. Did you mean "${ZG}"?`
```

#### 469. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8913` → after: `L8913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8913) · [Before (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8913)

```diff
-       return `"${Eu}" isn't a block or item name, so comparing with it is never true. Did you mean "${ju}"?`
+       return `"${bG}" isn't a block or item name, so comparing with it is never true. Did you mean "${ZG}"?`
```

#### 470. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8918-L8919` → after: `L8918-L8919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8918-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8918-L8919) · [Before (L8918-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8918-L8919)

```diff
-       ju = this.blockNames.has(Eu) || !this.itemAndBlockNames.includes(Eu) ? void 0 : [`Block of ${Eu}`, `${Eu} Block`].find((uu => this.blockNames.has(uu)));
-     !ju || uu.includes(`"${ju}"`) || uu.includes(`'${ju}'`) || Xu.set(Eu, ju)
+       ZG = this.blockNames.has(bG) || !this.itemAndBlockNames.includes(bG) ? void 0 : [`Block of ${bG}`, `${bG} Block`].find((GG => this.blockNames.has(GG)));
+     !ZG || GG.includes(`"${ZG}"`) || GG.includes(`'${ZG}'`) || yG.set(bG, ZG)
```

#### 471. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8923` → after: `L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8923) · [Before (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8923)

```diff
-     return `"${Eu}" is an item, not a block, so no block is ever called that. Did you mean "${ju}"?`
+     return `"${bG}" is an item, not a block, so no block is ever called that. Did you mean "${ZG}"?`
```

#### 472. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8940-L8941` → after: `L8940-L8941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8940-L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8940-L8941) · [Before (L8940-L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8940-L8941)

```diff
-       } : su.names.length > 0 || su.isDecided ? su : {
-         names: ju.length <= 2 ? ju : [],
+       } : wG.names.length > 0 || wG.isDecided ? wG : {
+         names: ZG.length <= 2 ? ZG : [],
```

#### 473. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8945` → after: `L8945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8945) · [Before (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8945)

```diff
-     return `"${uu}" isn't a block or item name, so comparing a block with it is never true.${Dq(Uu)}`
+     return `"${GG}" isn't a block or item name, so comparing a block with it is never true.${JU(SG)}`
```

#### 474. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8960-L8961` → after: `L8960-L8961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8960-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8960-L8961) · [Before (L8960-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8960-L8961)

```diff
-           name: null !== (Uu = ju[1]) && void 0 !== Uu ? Uu : ju[2],
-           body: uu.slice(ju.index, null !== (Zu = null === (Xu = Eu[su + 1]) || void 0 === Xu ? void 0 : Xu.index) && void 0 !== Zu ? Zu : uu.length)
+           name: null !== (SG = ZG[1]) && void 0 !== SG ? SG : ZG[2],
+           body: GG.slice(ZG.index, null !== (LG = null === (yG = bG[wG + 1]) || void 0 === yG ? void 0 : yG.index) && void 0 !== LG ? LG : GG.length)
```

#### 475. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8969` → after: `L8969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8969) · [Before (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8969)

```diff
-         if (uu.text.includes(`"${su}"`)) continue;
+         if (GG.text.includes(`"${wG}"`)) continue;
```

#### 476. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8971-L8972` → after: `L8971-L8972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8971-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8971-L8972) · [Before (L8971-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8971-L8972)

```diff
-           Xu = Zu.length > 0 ? `Did you mean ${Zu.map((uu=>`"${uu}"`)).join(" or ")}?` : /Return false/i.test(uu.text) ? `To stop it, return false instead of "${su}".` : "Check Show Docs for what it can return.";
-         Eu.add(`${ju} can't use "${su}" to stop anything. ${Xu}`)
+           yG = LG.length > 0 ? `Did you mean ${LG.map((GG=>`"${GG}"`)).join(" or ")}?` : /Return false/i.test(GG.text) ? `To stop it, return false instead of "${wG}".` : "Check Show Docs for what it can return.";
+         bG.add(`${ZG} can't use "${wG}" to stop anything. ${yG}`)
```

#### 477. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8982` → after: `L8982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8982) · [Before (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8982)

```diff
-     return !ju.some((uu => uu.startsWith(`${Eu} `)))
+     return !ZG.some((GG => GG.startsWith(`${bG} `)))
```

#### 478. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8998` → after: `L8998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L8998) · [Before (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L8998)

```diff
-     Zu = null !== (Eu = this.namesByLowerCase.get(ju)) && void 0 !== Eu ? Eu : this.namesByLowerCase.get(Uu);
+     LG = null !== (bG = this.namesByLowerCase.get(ZG)) && void 0 !== bG ? bG : this.namesByLowerCase.get(SG);
```

#### 479. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9030` → after: `L9030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9030) · [Before (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9030)

```diff
-       uu && su.set(uu, (null !== (ju = su.get(uu)) && void 0 !== ju ? ju : 0) + Eu)
+       GG && wG.set(GG, (null !== (ZG = wG.get(GG)) && void 0 !== ZG ? ZG : 0) + bG)
```

#### 480. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9036` → after: `L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9036) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9036)

```diff
-   for (const bu of `${uu}\n${Eu}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const pG of `${GG}\n${bG}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 481. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9038` → after: `L9038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9038) · [Before (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9038)

```diff
-     Uu(this.byName.get(null !== (lu = null !== (qu = bu[1]) && void 0 !== qu ? qu : bu[2]) && void 0 !== lu ? lu : bu[3]), bu[1] || bu[2] ? 4 : 2)
+     SG(this.byName.get(null !== (kG = null !== (UG = pG[1]) && void 0 !== UG ? UG : pG[2]) && void 0 !== kG ? kG : pG[3]), pG[1] || pG[2] ? 4 : 2)
```

#### 482. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9040` → after: `L9040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9040) · [Before (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9040)

```diff
-   for (const bu of (0, YE.e)(Eu, /([A-Za-z_$][\w$]*)\s*\(/g, YE.j)) {
+   for (const pG of (0, hb.g)(bG, /([A-Za-z_$][\w$]*)\s*\(/g, hb.r)) {
```

#### 483. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9049-L9050` → after: `L9049-L9050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9049-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9049-L9050) · [Before (L9049-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9049-L9050)

```diff
-       const ju = 1 / Math.log2(2 + (null !== (Cu = this.wordCounts.get(Eu)) && void 0 !== Cu ? Cu : 0));
-       bu.nameWords.has(Eu) ? uu += 3 * ju : bu.textWords.has(Eu) && (uu += ju)
+       const ZG = 1 / Math.log2(2 + (null !== (VG = this.wordCounts.get(bG)) && void 0 !== VG ? VG : 0));
+       pG.nameWords.has(bG) ? GG += 3 * ZG : pG.textWords.has(bG) && (GG += ZG)
```

#### 484. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9066` → after: `L9066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9066) · [Before (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9066)

```diff
-   return null !== (Eu = null !== (ju = this.byName.get(su)) && void 0 !== ju ? ju : this.sections.find((uu => uu.name.toLowerCase() === Uu))) && void 0 !== Eu ? Eu : null
+   return null !== (bG = null !== (ZG = this.byName.get(wG)) && void 0 !== ZG ? ZG : this.sections.find((GG => GG.name.toLowerCase() === SG))) && void 0 !== bG ? bG : null
```

#### 485. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9103` → after: `L9103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9103) · [Before (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9103)

```diff
-         su = new RegExp(`(^|[^\\w$.])${ju}\\s*\\(`),
+         wG = new RegExp(`(^|[^\\w$.])${ZG}\\s*\\(`),
```

#### 486. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9129` → after: `L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9129) · [Before (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9129)

```diff
-         when: `in ${ju[1]}`,
+         when: `in ${ZG[1]}`,
```

#### 487. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9136` → after: `L9136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9136) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9136)

```diff
-     lu = Zu && Eu ? ` ${Zu}` : "",
+     kG = LG && bG ? ` ${LG}` : "",
```

#### 488. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9140-L9141` → after: `L9140-L9141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9140-L9141) · [Before (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9140-L9141)

```diff
-     const uu = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (fu = null === (Cu = Uu[0]) || void 0 === Cu ? void 0 : Cu.trim()) && void 0 !== fu ? fu : ""),
-       Eu = null === (bu = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (cu = null === (Nu = Uu[1]) || void 0 === Nu ? void 0 : Nu.trim()) && void 0 !== cu ? cu : "")) || void 0 === bu ? void 0 : bu[1],
+     const GG = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (YG = null === (VG = SG[0]) || void 0 === VG ? void 0 : VG.trim()) && void 0 !== YG ? YG : ""),
+       bG = null === (pG = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (fG = null === (QG = SG[1]) || void 0 === QG ? void 0 : QG.trim()) && void 0 !== fG ? fG : "")) || void 0 === pG ? void 0 : pG[1],
```

#### 489. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9144` → after: `L9144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9144) · [Before (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9144)

```diff
-         return /^(a|an|the)\s/i.test(Eu) || !/^[a-z]/i.test(Eu) ? Eu : `${/^[aeiou]/i.test(Eu)?"an":"a"} ${Eu}`
+         return /^(a|an|the)\s/i.test(bG) || !/^[a-z]/i.test(bG) ? bG : `${/^[aeiou]/i.test(bG)?"an":"a"} ${bG}`
```

#### 490. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9146` → after: `L9146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9146) · [Before (L9146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9146)

```diff
-     return ju && null !== uu && void 0 !== uu && uu[3] ? `api.${qu[1]} needs ${ju}, but it got ${uu[3]}${lu}.` : uu ? `api.${qu[1]} couldn't use its ${Ou=Number(uu[1]),1===Ou?"first":2===Ou?"second":3===Ou?"third":4===Ou?"fourth":`#${Ou}`} argument${lu}.${ju?` It needs ${ju}.`:"" … [truncated]
+     return ZG && null !== GG && void 0 !== GG && GG[3] ? `api.${UG[1]} needs ${ZG}, but it got ${GG[3]}${kG}.` : GG ? `api.${UG[1]} couldn't use its ${KG=Number(GG[1]),1===KG?"first":2===KG?"second":3===KG?"third":4===KG?"fourth":`#${KG}`} argument${kG}.${ZG?` It needs ${ZG}.`:"" … [truncated]
```

#### 491. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9150` → after: `L9150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9150) · [Before (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9150)

```diff
-   if (Yu) return Yu[1] ? `${Yu[1]} isn't a function${lu}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${lu}. Check each name it calls is spelt exactly right.`;
+   if (hG) return hG[1] ? `${hG[1]} isn't a function${kG}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${kG}. Check each name it calls is spelt exactly right.`;
```

#### 492. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9152` → after: `L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9152) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9152)

```diff
-   if (hu) return `${hu[1]} isn't defined${lu}. Check the spelling, or create it before using it.`;
+   if (dG) return `${dG[1]} isn't defined${kG}. Check the spelling, or create it before using it.`;
```

#### 493. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9156-L9157` → after: `L9156-L9157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9156-L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9156-L9157) · [Before (L9156-L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9156-L9157)

```diff
-     const uu = null !== (gu = Du[1]) && void 0 !== gu ? gu : Du[3];
-     return `Your code tried to read${uu?` .${uu}`:" something"} from ${Du[2]}${lu}: a value it expected wasn't there.`
+     const GG = null !== (rG = JG[1]) && void 0 !== rG ? rG : JG[3];
+     return `Your code tried to read${GG?` .${GG}`:" something"} from ${JG[2]}${kG}: a value it expected wasn't there.`
```

#### 494. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9159` → after: `L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9159) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9159)

```diff
-   return `Your code hit an error${lu}: ${Xu.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${kG}: ${yG.replace(/^\w*Error:\s*/,"")}`
```

#### 495. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9245` → after: `L9245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9245) · [Before (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9245)

```diff
-   return uu.replaceAll(`"${Eu}"`, `"${ju}"`).replaceAll(`'${Eu}'`, `'${ju}'`)
+   return GG.replaceAll(`"${bG}"`, `"${ZG}"`).replaceAll(`'${bG}'`, `'${ZG}'`)
```

#### 496. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9249` → after: `L9249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9249) · [Before (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9249)

```diff
-   const ju = uu => du().isIdentifier(uu) ? uu.text === Eu : uu.elements.some((uu => !du().isOmittedExpression(uu) && ju(uu.name))),
+   const ZG = GG => CG().isIdentifier(GG) ? GG.text === bG : GG.elements.some((GG => !CG().isOmittedExpression(GG) && ZG(GG.name))),
```

#### 497. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9262` → after: `L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9262) · [Before (L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9262)

```diff
-       return (null === uu || void 0 === uu || null === (ju = uu.name) || void 0 === ju ? void 0 : ju.text) === Eu || void 0 !== su && (du().isNamespaceImport(su) ? su.name.text === Eu : su.elements.some((uu => uu.name.text === Eu)))
+       return (null === GG || void 0 === GG || null === (ZG = GG.name) || void 0 === ZG ? void 0 : ZG.text) === bG || void 0 !== wG && (CG().isNamespaceImport(wG) ? wG.name.text === bG : wG.elements.some((GG => GG.name.text === bG)))
```

#### 498. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9276` → after: `L9276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9276) · [Before (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9276)

```diff
-             text: `${ju}${Eu}${ju}`
+             text: `${ZG}${bG}${ZG}`
```

#### 499. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9288` → after: `L9288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9288) · [Before (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9288)

```diff
-                 edit: Zu(Uu, du().isShorthandPropertyAssignment(uu) ? `${su}: ${ju}` : su),
+                 edit: LG(SG, CG().isShorthandPropertyAssignment(GG) ? `${wG}: ${ZG}` : wG),
```

#### 500. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9290` → after: `L9290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9290) · [Before (L9290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9290)

```diff
-                 oN: lu
+                 vQ: kG
```

#### 501. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9303` → after: `L9303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9303) · [Before (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9303)

```diff
-         return vj(uu, Xu.flatMap((uu => uu.depth !== Eu || uu.oN ? [] : [uu.edit])))
+         return aZ(GG, yG.flatMap((GG => GG.depth !== bG || GG.vQ ? [] : [GG.edit])))
```

#### 502. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9328` → after: `L9328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9328) · [Before (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9328)

```diff
-           Eu && du().isIdentifier(Eu) ? (du().isVariableDeclaration(uu) && us(uu.initializer, su) ? Uu : Zu).add(Eu.text) : du().isIdentifier(uu) && Es(uu) && Zu.add(uu.text), du().forEachChild(uu, Xu)
+           bG && CG().isIdentifier(bG) ? (CG().isVariableDeclaration(GG) && Gw(GG.initializer, wG) ? SG : LG).add(bG.text) : CG().isIdentifier(GG) && bw(GG) && LG.add(GG.text), CG().forEachChild(GG, yG)
```

#### 503. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9337` → after: `L9337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9337) · [Before (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9337)

```diff
-           text: `{ customAttributes: ${Eu.getText(su)} }`
+           text: `{ customAttributes: ${bG.getText(wG)} }`
```

#### 504. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9360` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9360) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9360)

```diff
-               text: du().isShorthandPropertyAssignment(fu) ? `${Eu}: ${ju}` : ju
+               text: CG().isShorthandPropertyAssignment(YG) ? `${bG}: ${ZG}` : ZG
```

#### 505. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9370-L9371` → after: `L9370-L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9370-L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9370-L9371) · [Before (L9370-L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9370-L9371)

```diff
-       const Eu = `(["'])${function(uu){return uu.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(ju)}\\1`;
-       return ("comparedBlock" === Uu ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${Eu}`, `${Eu}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${Eu}`, `${Eu}\\s*[!=]==?`, `\\bcase\\s+${Eu}\\s*:`, `\\.includes\\(\\s*${Eu}\\s*\\)`]).reduce(((uu, Eu) => uu.replace(new RegExp(Eu, "g"), … [truncated]
+       const bG = `(["'])${function(GG){return GG.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(ZG)}\\1`;
+       return ("comparedBlock" === SG ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${bG}`, `${bG}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${bG}`, `${bG}\\s*[!=]==?`, `\\bcase\\s+${bG}\\s*:`, `\\.includes\\(\\s*${bG}\\s*\\)`]).reduce(((GG, bG) => GG.replace(new RegExp(bG, "g"), … [truncated]
```

#### 506. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9381` → after: `L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9381) · [Before (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9381)

```diff
-   return "export" === uu.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === uu.kind ? `The enchantment given to ${uu.method} is now in { customAttributes: ... }.` : "null" === uu.kind ? `The null given to ${uu.method} i … [truncated]
+   return "export" === GG.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === GG.kind ? `The enchantment given to ${GG.method} is now in { customAttributes: ... }.` : "null" === GG.kind ? `The null given to ${GG.method} i … [truncated]
```

#### 507. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9383)

```diff
- var Fq = ju(41728);
+ var nU = ZG(41876);
```

#### 508. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9443` → after: `L9443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9443) · [Before (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9443)

```diff
-       return Uu ? `${su} didn't accept your key: it may be wrong or deleted.` : `${su} didn't accept your key: it may be wrong or deleted. Check it on ${su}'s website.`;
+       return SG ? `${wG} didn't accept your key: it may be wrong or deleted.` : `${wG} didn't accept your key: it may be wrong or deleted. Check it on ${wG}'s website.`;
```

#### 509. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9445` → after: `L9445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9445) · [Before (L9445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9445)

```diff
-       return Uu ? `${su} stopped your key for now: it has used all it can.` : `${su} stopped your key for now: it has used all it can. Check it on ${su}'s website.`;
+       return SG ? `${wG} stopped your key for now: it has used all it can.` : `${wG} stopped your key for now: it has used all it can. Check it on ${wG}'s website.`;
```

#### 510. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9447)

```diff
-       return `Too many requests to ${ju} right now. Wait a minute and try again.`;
+       return `Too many requests to ${ZG} right now. Wait a minute and try again.`;
```

#### 511. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9449` → after: `L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9449) · [Before (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9449)

```diff
-       return `${su} can't find ${ju}. Pick another model, or press Check for new models in AI settings.`;
+       return `${wG} can't find ${ZG}. Pick another model, or press Check for new models in AI settings.`;
```

#### 512. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9451` → after: `L9451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9451) · [Before (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9451)

```diff
-       return `${ju} took too long to answer.`;
+       return `${ZG} took too long to answer.`;
```

#### 513. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9453` → after: `L9453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9453) · [Before (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9453)

```diff
-       return Uu ? `Couldn't reach ${su}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${su}. Check your internet and your key.`;
+       return SG ? `Couldn't reach ${wG}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${wG}. Check your internet and your key.`;
```

#### 514. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9455)

```diff
-       return `${su} doesn't work from where you are.`;
+       return `${wG} doesn't work from where you are.`;
```

#### 515. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9459` → after: `L9459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9459) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9459)

```diff
-       return `${ju} can't be used right now. Try again in a minute.`
+       return `${ZG} can't be used right now. Try again in a minute.`
```

#### 516. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9553` → after: `L9553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9553) · [Before (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9553)

```diff
-       }, Eu] = await Promise.all([Promise.resolve().then((() => ju(1405))), this.popup.notice()]), su = uu.showPromptPopup({
+       }, bG] = await Promise.all([Promise.resolve().then((() => ZG(1311))), this.popup.notice()]), wG = GG.showPromptPopup({
```

#### 517. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9641` → after: `L9641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9641) · [Before (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9641)

```diff
-       return "" === uu ? "no key needed" : uu.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === Eu ? `key \u2026${uu.slice(-4)}` : `${(null!==(ju=null===(su=/^[a-zA-Z]+-/.exec(uu))||void 0===su?void 0:su[0])&&void 0!==ju?ju:uu.slice(0,4)).slice(0,6)}\u2026${uu.slice(-4)}`
+       return "" === GG ? "no key needed" : GG.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === bG ? `key \u2026${GG.slice(-4)}` : `${(null!==(ZG=null===(wG=/^[a-zA-Z]+-/.exec(GG))||void 0===wG?void 0:wG[0])&&void 0!==ZG?ZG:GG.slice(0,4)).slice(0,6)}\u2026${GG.slice(-4)}`
```

#### 518. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9663` → after: `L9663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9663) · [Before (L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9663)

```diff
-         "aria-label": `Edit ${Zu} key`,
+         "aria-label": `Edit ${LG} key`,
```

#### 519. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9668` → after: `L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9668) · [Before (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9668)

```diff
-         "aria-label": `Rename ${Zu} key`,
+         "aria-label": `Rename ${LG} key`,
```

#### 520. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9689)

```diff
-     Du = `${cu}-${null!==(Eu=null===Cu||void 0===Cu?void 0:Cu.keyId)&&void 0!==Eu?Eu:"botxd"}-${null!==(ju=null===Cu||void 0===Cu?void 0:Cu.modelId)&&void 0!==ju?ju:"botxd"}`.replace(/[^\w-]/g, "_"),
+     JG = `${fG}-${null!==(bG=null===VG||void 0===VG?void 0:VG.keyId)&&void 0!==bG?bG:"botxd"}-${null!==(ZG=null===VG||void 0===VG?void 0:VG.modelId)&&void 0!==ZG?ZG:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 521. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9693-L9695` → after: `L9693-L9695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9693-L9695) · [Before (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9693-L9695)

```diff
-     "data-key-id": null !== (Uu = null === Cu || void 0 === Cu ? void 0 : Cu.keyId) && void 0 !== Uu ? Uu : "botxd",
-     "data-model-id": null !== (lu = null === Cu || void 0 === Cu ? void 0 : Cu.modelId) && void 0 !== lu ? lu : "botxd",
-     title: null !== Yu && void 0 !== Yu ? Yu : void 0,
+     "data-key-id": null !== (SG = null === VG || void 0 === VG ? void 0 : VG.keyId) && void 0 !== SG ? SG : "botxd",
+     "data-model-id": null !== (kG = null === VG || void 0 === VG ? void 0 : VG.modelId) && void 0 !== kG ? kG : "botxd",
+     title: null !== hG && void 0 !== hG ? hG : void 0,
```

#### 522. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9703` → after: `L9703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9703) · [Before (L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9703)

```diff
-       "aria-describedby": fu ? Du : void 0,
+       "aria-describedby": YG ? JG : void 0,
```

#### 523. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9730` → after: `L9730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9730) · [Before (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9730)

```diff
-     jK: lu,
+     MI: kG,
```

#### 524. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9753` → after: `L9753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9753) · [Before (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9753)

```diff
-           at: null !== (ju = uu.usedAt) && void 0 !== ju ? ju : 0,
+           at: null !== (ZG = GG.usedAt) && void 0 !== ZG ? ZG : 0,
```

#### 525. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9776` → after: `L9776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9776) · [Before (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9776)

```diff
-     ou = `${Eu}-model`,
+     IG = `${bG}-model`,
```

#### 526. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9789` → after: `L9789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9789) · [Before (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9789)

```diff
-       }, null !== (Uu = null === su || void 0 === su ? void 0 : su.modelId) && void 0 !== Uu ? Uu : "botxd")
+       }, null !== (SG = null === wG || void 0 === wG ? void 0 : wG.modelId) && void 0 !== SG ? SG : "botxd")
```

#### 527. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9797` → after: `L9797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9797) · [Before (L9797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9797)

```diff
-       hint: null !== hu && void 0 !== hu ? hu : `Bloxd's better AI. ${Yu.status?il(Yu.status):""}`.trim(),
+       hint: null !== dG && void 0 !== dG ? dG : `Bloxd's better AI. ${hG.status?Mk(hG.status):""}`.trim(),
```

#### 528. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9803` → after: `L9803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9803) · [Before (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9803)

```diff
-         dl(null !== (uu = null === (Eu = Yu.status) || void 0 === Eu ? void 0 : Eu.provider) && void 0 !== uu ? uu : "ovh") && Pl.Hc()
+         Ck(null !== (GG = null === (bG = hG.status) || void 0 === bG ? void 0 : bG.provider) && void 0 !== GG ? GG : "ovh") && mk.Df()
```

#### 529. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9808` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9808) · [Before (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9808)

```diff
-           if (dl(null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.provider) && void 0 !== Eu ? Eu : "ovh") || await lf.ask()) return Pl.Hc(), !0;
+           if (Ck(null !== (bG = null === GG || void 0 === GG ? void 0 : GG.provider) && void 0 !== bG ? bG : "ovh") || await kY.ask()) return mk.Df(), !0;
```

#### 530. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9819-L9820` → after: `L9819-L9820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9819-L9820) · [Before (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9819-L9820)

```diff
-         mu = ou ? null !== (Eu = uu.models.find((Eu => Eu.id === uu.usedModelId))) && void 0 !== Eu ? Eu : fl(uu.models) : void 0,
-         vu = null !== (ju = null === (su = Gu[uu.id]) || void 0 === su ? void 0 : su.trim().toLowerCase()) && void 0 !== ju ? ju : "",
+         vG = IG ? null !== (bG = GG.models.find((bG => bG.id === GG.usedModelId))) && void 0 !== bG ? bG : Uk(GG.models) : void 0,
+         aG = null !== (ZG = null === (wG = oG[GG.id]) || void 0 === wG ? void 0 : wG.trim().toLowerCase()) && void 0 !== ZG ? ZG : "",
```

#### 531. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9833` → after: `L9833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9833) · [Before (L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9833)

```diff
-             keyName: null !== (Nu = uu.name) && void 0 !== Nu ? Nu : "",
+             keyName: null !== (QG = GG.name) && void 0 !== QG ? QG : "",
```

#### 532. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9849` → after: `L9849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9849) · [Before (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9849)

```diff
-             "aria-label": `Check ${hu} for new models`,
+             "aria-label": `Check ${dG} for new models`,
```

#### 533. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9857` → after: `L9857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9857) · [Before (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9857)

```diff
-             "aria-label": `Remove ${hu} key`,
+             "aria-label": `Remove ${dG} key`,
```

#### 534. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9865` → after: `L9865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9865) · [Before (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9865)

```diff
-             "aria-label": `Remove ${hu} key?`,
+             "aria-label": `Remove ${dG} key?`,
```

#### 535. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9871` → after: `L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9871) · [Before (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9871)

```diff
-               "aria-label": `Yes, remove ${hu} key`,
+               "aria-label": `Yes, remove ${dG} key`,
```

#### 536. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9878` → after: `L9878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9878) · [Before (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9878)

```diff
-               "aria-label": `No, keep ${hu} key`,
+               "aria-label": `No, keep ${dG} key`,
```

#### 537. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9892-L9894` → after: `L9892-L9894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9892-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9892-L9894) · [Before (L9892-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9892-L9894)

```diff
-           "aria-label": `Find a model from ${hu}`,
-           placeholder: `Find a model (${uu.models.length})`,
-           value: null !== (Yu = Gu[uu.id]) && void 0 !== Yu ? Yu : "",
+           "aria-label": `Find a model from ${dG}`,
+           placeholder: `Find a model (${GG.models.length})`,
+           value: null !== (hG = oG[GG.id]) && void 0 !== hG ? hG : "",
```

#### 538. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9910` → after: `L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9910) · [Before (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9910)

```diff
-           "aria-label": `Show all ${hu} models`,
+           "aria-label": `Show all ${dG} models`,
```

#### 539. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9934` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9934) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9934)

```diff
-     } = await ju.e(125).then((() => ju(6732)));
+     } = await ZG.e(125).then((() => ZG(6524)));
```

#### 540. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9958` → after: `L9958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L9958) · [Before (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L9958)

```diff
-         children: Eu ? Uu : Zu
+         children: bG ? SG : LG
```

#### 541. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10078` → after: `L10078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10078) · [Before (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10078)

```diff
-           children: [1 === lu.length ? "Forget your key" : `Forget all ${lu.length} keys`, " in this browser?", (0, Xu.jsx)("button", {
+           children: [1 === kG.length ? "Forget your key" : `Forget all ${kG.length} keys`, " in this browser?", (0, yG.jsx)("button", {
```

#### 542. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10142` → after: `L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10142) · [Before (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10142)

```diff
-                 text: `${Eu} listed no models, so your models stay as they were.`
+                 text: `${bG} listed no models, so your models stay as they were.`
```

#### 543. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10148` → after: `L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10148) · [Before (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10148)

```diff
-                 text: `${Eu}'s models are up to date.`
+                 text: `${bG}'s models are up to date.`
```

#### 544. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10162` → after: `L10162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10162) · [Before (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10162)

```diff
-         jK: uu => {
+         MI: GG => {
```

#### 545. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10217` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10217) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10217)

```diff
-         null === (ju = null !== su && void 0 !== su ? su : lu.current) || void 0 === ju || ju.scrollIntoView({
+         null === (ZG = null !== wG && void 0 !== wG ? wG : kG.current) || void 0 === ZG || ZG.scrollIntoView({
```

#### 546. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10237)

```diff
-         children: qu ? `An API key works like a password for ${qu.shortName}'s AI (it isn't your ${qu.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: UG ? `An API key works like a password for ${UG.shortName}'s AI (it isn't your ${UG.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 547. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10239` → after: `L10239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10239) · [Before (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10239)

```diff
-         children: ["You make it on ", qu ? `${qu.shortName}'s website` : (0, Xu.jsx)(Yf, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", UG ? `${UG.shortName}'s website` : (0, yG.jsx)(KY, {}), ", and see how much you've used or delete it there."]
```

#### 548. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10241` → after: `L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10241) · [Before (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10241)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (Eu = null === qu || void 0 === qu ? void 0 : qu.shortName) && void 0 !== Eu ? Eu : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (bG = null === UG || void 0 === UG ? void 0 : UG.shortName) && void 0 !== bG ? bG : "that company", ", never to Bloxd."]
```

#### 549. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10300` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10300) · [Before (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10300)

```diff
-   } = Dl(), [cu, Nu] = (0, su.useState)(null !== (Eu = null === qu || void 0 === qu ? void 0 : qu.provider) && void 0 !== Eu ? Eu : null), [Ou, Yu] = (0, su.useState)(!!qu), [hu, Du] = (0, su.useState)(""), gu = null !== (ju = null === qu || void 0 === qu ? void 0 : qu.key) && vo … [truncated]
+   } = dk(), [fG, QG] = (0, wG.useState)(null !== (bG = null === UG || void 0 === UG ? void 0 : UG.provider) && void 0 !== bG ? bG : null), [KG, hG] = (0, wG.useState)(!!UG), [dG, JG] = (0, wG.useState)(""), rG = null !== (ZG = null === UG || void 0 === UG ? void 0 : UG.key) && vo … [truncated]
```

#### 550. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10302` → after: `L10302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10302) · [Before (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10302)

```diff
-     return uu === (null === qu || void 0 === qu ? void 0 : qu.provider) && ("custom" !== uu || (null !== (Eu = QX(Gu)) && void 0 !== Eu ? Eu : "") === (null !== (ju = qu.baseUrl) && void 0 !== ju ? ju : ""))
+     return GG === (null === UG || void 0 === UG ? void 0 : UG.provider) && ("custom" !== GG || (null !== (bG = jy(oG)) && void 0 !== bG ? bG : "") === (null !== (ZG = UG.baseUrl) && void 0 !== ZG ? ZG : ""))
```

#### 551. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10305-L10306` → after: `L10305-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10305-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10305-L10306) · [Before (L10305-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10305-L10306)

```diff
-     return "" === Eu && "" !== gu && wu(uu) ? gu : Eu
-   }, [au, Pu] = (0, su.useState)(""), [ou, ku] = (0, su.useState)(null !== (Zu = null === qu || void 0 === qu ? void 0 : qu.name) && void 0 !== Zu ? Zu : ""), [mu, vu] = (0, su.useState)(!1), [Ku, Vu] = (0, su.useState)(null), [ru, Qu] = (0, su.useState)(""), [iu, Wu] = (0, su.us … [truncated]
+     return "" === bG && "" !== rG && uG(GG) ? rG : bG
+   }, [WG, mG] = (0, wG.useState)(""), [IG, FG] = (0, wG.useState)(null !== (LG = null === UG || void 0 === UG ? void 0 : UG.name) && void 0 !== LG ? LG : ""), [vG, aG] = (0, wG.useState)(!1), [cG, lG] = (0, wG.useState)(null), [jG, PG] = (0, wG.useState)(""), [MG, AG] = (0, wG.us … [truncated]
```

#### 552. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10337` → after: `L10337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10337) · [Before (L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10337)

```diff
-           baseUrl: "custom" === cu && null !== (uu = QX(Gu)) && void 0 !== uu ? uu : void 0,
+           baseUrl: "custom" === fG && null !== (GG = jy(oG)) && void 0 !== GG ? GG : void 0,
```

#### 553. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10344` → after: `L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10344) · [Before (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10344)

```diff
-         const ju = null !== cu && void 0 !== cu ? cu : rX(Eu),
+         const ZG = null !== fG && void 0 !== fG ? fG : ly(bG),
```

#### 554. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10359-L10360` → after: `L10359-L10360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10359-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10359-L10360) · [Before (L10359-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10359-L10360)

```diff
-             baseUrl: null !== Uu && void 0 !== Uu ? Uu : void 0,
-             modelName: mu ? au : void 0
+             baseUrl: null !== SG && void 0 !== SG ? SG : void 0,
+             modelName: vG ? WG : void 0
```

#### 555. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10366` → after: `L10366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10366) · [Before (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10366)

```diff
-           Qu(null !== (Xu = null === (lu = null !== fu && void 0 !== fu ? fu : fl(uu)) || void 0 === lu ? void 0 : lu.id) && void 0 !== Xu ? Xu : "")
+           PG(null !== (yG = null === (kG = null !== YG && void 0 !== YG ? YG : Uk(GG)) || void 0 === kG ? void 0 : kG.id) && void 0 !== yG ? yG : "")
```

#### 556. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10372-L10373` → after: `L10372-L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10372-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10372-L10373) · [Before (L10372-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10372-L10373)

```diff
-           const Xu = "badKey" !== Uu || Ou ? "" : ` If it isn't from ${mX[ju].shortName}, pick the company it's from.`;
-           Iu(`${IX(Uu,ju)}${Xu}`)
+           const yG = "badKey" !== SG || KG ? "" : ` If it isn't from ${Fy[ZG].shortName}, pick the company it's from.`;
+           qG(`${sy(SG,ZG)}${yG}`)
```

#### 557. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10383` → after: `L10383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10383) · [Before (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10383)

```diff
-         value: null !== cu && void 0 !== cu ? cu : "",
+         value: null !== fG && void 0 !== fG ? fG : "",
```

#### 558. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10411` → after: `L10411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10411) · [Before (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10411)

```diff
-       }), (!qu || Gu !== (null !== (lu = qu.baseUrl) && void 0 !== lu ? lu : "")) && (0, Xu.jsx)(Df, {})]
+       }), (!UG || oG !== (null !== (kG = UG.baseUrl) && void 0 !== kG ? kG : "")) && (0, yG.jsx)(dY, {})]
```

#### 559. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10483` → after: `L10483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10483) · [Before (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10483)

```diff
-           keyId: null !== cu && void 0 !== cu ? cu : "",
+           keyId: null !== fG && void 0 !== fG ? fG : "",
```

#### 560. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10507` → after: `L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10507) · [Before (L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10507)

```diff
-         placeholder: cu && "custom" !== cu ? `Like My ${mX[cu].shortName}` : "Like Home server",
+         placeholder: fG && "custom" !== fG ? `Like My ${Fy[fG].shortName}` : "Like Home server",
```

#### 561. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10533` → after: `L10533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10533) · [Before (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10533)

```diff
-         children: iu ? Lu ? "Testing the connection\u2026" : "Testing your key\u2026" : Au ? `Save and use ${Au.name}` : Lu ? "Test connection" : "Test key"
+         children: MG ? eG ? "Testing the connection\u2026" : "Testing your key\u2026" : DG ? `Save and use ${DG.name}` : eG ? "Test connection" : "Test key"
```

#### 562. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10538-L10540` → after: `L10538-L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10538-L10540) · [Before (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10538-L10540)

```diff
- var ef = ju(1244),
-   Gf = ju(37284),
-   pf = ju(37282);
+ var zY = ZG(1151),
+   EY = ZG(37231),
+   oY = ZG(37224);
```

#### 563. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10551-L10552` → after: `L10551-L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10551-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10551-L10552) · [Before (L10551-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10551-L10552)

```diff
-   } = (0, ef.A)();
-   return (0, Xu.jsx)(pf.h, {
+   } = (0, zY.w)();
+   return (0, yG.jsx)(oY.i, {
```

#### 564. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10555` → after: `L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10555) · [Before (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10555)

```diff
-     text: Zu(`codeEditorAiTutorial:${Eu}`),
+     text: LG(`codeEditorAiTutorial:${bG}`),
```

#### 565. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10603` → after: `L10603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10603) · [Before (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10603)

```diff
-   return uu.model.name.toLowerCase().startsWith(Eu.toLowerCase()) ? uu.model.name : `${Eu} \xb7 ${uu.model.name}`
+   return GG.model.name.toLowerCase().startsWith(bG.toLowerCase()) ? GG.model.name : `${bG} \xb7 ${GG.model.name}`
```

#### 566. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10653` → after: `L10653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10653) · [Before (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10653)

```diff
-     Mu = gu ? "Bot.xd (free) \xb7 once" : fu ? af(fu) : bu ? Gl : "Bot.xd (free)";
+     zG = rG ? "Bot.xd (free) \xb7 once" : YG ? CY(YG) : pG ? Ek : "Bot.xd (free)";
```

#### 567. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10665` → after: `L10665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10665) · [Before (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10665)

```diff
-       "aria-label": `AI model: ${Mu}`,
+       "aria-label": `AI model: ${zG}`,
```

#### 568. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10683` → after: `L10683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10683) · [Before (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10683)

```diff
-         title: `Allow AI to make edits to my code is ${ju?"on":"off"}, in AI settings`,
+         title: `Allow AI to make edits to my code is ${ZG?"on":"off"}, in AI settings`,
```

#### 569. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10743` → after: `L10743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10743) · [Before (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10743)

```diff
- const of = "kv";
+ const mY = "kv";
```

#### 570. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10751` → after: `L10751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10751) · [Before (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10751)

```diff
-       ju(null !== (Eu = uu.error) && void 0 !== Eu ? Eu : new Error("IndexedDB transaction failed"))
+       ZG(null !== (bG = GG.error) && void 0 !== bG ? bG : new Error("IndexedDB transaction failed"))
```

#### 571. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10754` → after: `L10754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10754) · [Before (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10754)

```diff
-       ju(null !== (Eu = uu.error) && void 0 !== Eu ? Eu : new Error("IndexedDB transaction aborted"))
+       ZG(null !== (bG = GG.error) && void 0 !== bG ? bG : new Error("IndexedDB transaction aborted"))
```

#### 572. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10758` → after: `L10758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10758) · [Before (L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10758)

```diff
- var mf = ju(37308);
+ var FY = ZG(37261);
```

#### 573. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10789` → after: `L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10789) · [Before (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10789)

```diff
-           if (Eu) return uu.includes(`"${Eu}"`) ? `"${Eu}"` : uu.includes(Eu) ? Eu : void 0
+           if (bG) return GG.includes(`"${bG}"`) ? `"${bG}"` : GG.includes(bG) ? bG : void 0
```

#### 574. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10793` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10793) · [Before (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10793)

```diff
-         className: Zu()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${uu.kind}`, su && "WorldCodeAiDiff-marked"),
+         className: LG()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${GG.kind}`, wG && "WorldCodeAiDiff-marked"),
```

#### 575. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10856` → after: `L10856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10856) · [Before (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10856)

```diff
-   return Uu(uu) === Uu(Eu) ? su : Uu(uu) === Uu(Eu - 864e5) ? `yesterday ${su}` : function(uu, Eu) {
+   return SG(GG) === SG(bG) ? wG : SG(GG) === SG(bG - 864e5) ? `yesterday ${wG}` : function(GG, bG) {
```

#### 576. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10859` → after: `L10859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10859) · [Before (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10859)

```diff
-     if (ju < 60) return `${ju} min ago`;
+     if (ZG < 60) return `${ZG} min ago`;
```

#### 577. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10861` → after: `L10861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10861) · [Before (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10861)

```diff
-     if (su < 24) return `${su} h ago`;
+     if (wG < 24) return `${wG} h ago`;
```

#### 578. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10863` → after: `L10863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10863) · [Before (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10863)

```diff
-     return 1 === Uu ? "1 day ago" : `${Uu} days ago`
+     return 1 === SG ? "1 day ago" : `${SG} days ago`
```

#### 579. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10870-L10871` → after: `L10870-L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10870-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10870-L10871) · [Before (L10870-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10870-L10871)

```diff
-     const Zu = null !== (su = uu.files[ju]) && void 0 !== su ? su : "";
-     return (null !== (Uu = Eu[ju]) && void 0 !== Uu ? Uu : "") === Zu ? [] : [{
+     const LG = null !== (wG = GG.files[ZG]) && void 0 !== wG ? wG : "";
+     return (null !== (SG = bG[ZG]) && void 0 !== SG ? SG : "") === LG ? [] : [{
```

#### 580. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10883` → after: `L10883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10883) · [Before (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10883)

```diff
-   return `${(su>Eu/2?ju.slice(0,su):ju).replace(/[\s,;:.]+$/,"")}\u2026`
+   return `${(wG>bG/2?ZG.slice(0,wG):ZG).replace(/[\s,;:.]+$/,"")}\u2026`
```

#### 581. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10894` → after: `L10894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10894) · [Before (L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10894)

```diff
-   const [fu, Cu] = (0, su.useState)(!1), [bu, cu] = (0, su.useState)(!1), Nu = Eu.did ? `Before: ${Eu.did}` : Eu.label, Ou = Sf(Nu), Yu = Eu.did && Eu.label.startsWith('Before "') ? Eu.label.slice(7) : null, hu = null === Yu ? null : Sf(Yu, 50), Du = null !== hu && null !== Yu && … [truncated]
+   const [YG, VG] = (0, wG.useState)(!1), [pG, fG] = (0, wG.useState)(!1), QG = bG.did ? `Before: ${bG.did}` : bG.label, KG = MY(QG), hG = bG.did && bG.label.startsWith('Before "') ? bG.label.slice(7) : null, dG = null === hG ? null : MY(hG, 50), JG = null !== dG && null !== hG && … [truncated]
```

#### 582. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10919-L10920` → after: `L10919-L10920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10919-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10919-L10920) · [Before (L10919-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10919-L10920)

```diff
-     const Zu = null !== (su = Eu.files[uu]) && void 0 !== su ? su : "",
-       Xu = null !== (Uu = ju[uu]) && void 0 !== Uu ? Uu : "";
+     const LG = null !== (wG = bG.files[GG]) && void 0 !== wG ? wG : "",
+       yG = null !== (SG = ZG[GG]) && void 0 !== SG ? SG : "";
```

#### 583. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10934` → after: `L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10934) · [Before (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10934)

```diff
-         children: [bu || !Ou ? Nu : Ou, (Ou || Du) && (0, Xu.jsx)("button", {
+         children: [pG || !KG ? QG : KG, (KG || JG) && (0, yG.jsx)("button", {
```

#### 584. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10946` → after: `L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L10946) · [Before (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L10946)

```diff
-           children: ["You asked: ", bu || !Du ? Yu : Du]
+           children: ["You asked: ", pG || !JG ? hG : JG]
```

#### 585. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11027` → after: `L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11027) · [Before (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11027)

```diff
-     lG: Uu,
+     Kr: SG,
```

#### 586. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11051` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11051) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11051)

```diff
-           "aria-label": `Delete note: ${uu}`,
+           "aria-label": `Delete note: ${GG}`,
```

#### 587. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11190` → after: `L11190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11190) · [Before (L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11190)

```diff
-       }, `${Eu}:${uu}`)))
+       }, `${bG}:${GG}`)))
```

#### 588. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11193` → after: `L11193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11193) · [Before (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11193)

```diff
-       children: ["Apply ", ju - su > 1 ? `steps ${su+1} to ${ju}` : `step ${ju}`, " to your code and try it, then build step ", ju + 1, "."]
+       children: ["Apply ", ZG - wG > 1 ? `steps ${wG+1} to ${ZG}` : `step ${ZG}`, " to your code and try it, then build step ", ZG + 1, "."]
```

#### 589. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11200` → after: `L11200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11200) · [Before (L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11200)

```diff
-       children: su < ju ? `Build step ${ju+1} anyway` : `Build step ${ju+1}`
+       children: wG < ZG ? `Build step ${ZG+1} anyway` : `Build step ${ZG+1}`
```

#### 590. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11212` → after: `L11212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11212) · [Before (L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11212)

```diff
-   return `${uu}\n\nYou asked me: "${Eu}" ${null===ju?"I don't mind: choose what works best.":`My answer: ${ju.replace(/\.$/,"")}.`} Build it now, without asking again.`
+   return `${GG}\n\nYou asked me: "${bG}" ${null===ZG?"I don't mind: choose what works best.":`My answer: ${ZG.replace(/\.$/,"")}.`} Build it now, without asking again.`
```

#### 591. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11232` → after: `L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11232) · [Before (L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11232)

```diff
-           key: `${Eu}:${uu}`,
+           key: `${bG}:${GG}`,
```

#### 592. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11438` → after: `L11438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11438) · [Before (L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11438)

```diff
-       Gu = null !== Mu && void 0 !== Mu ? Mu : Uu;
+       oG = null !== zG && void 0 !== zG ? zG : SG;
```

#### 593. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11442-L11444` → after: `L11442-L11444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11442-L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/92.js#L11442-L11444) · [Before (L11442-L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/92.js#L11442-L11444)

```diff
-       raw: null !== (qu = null === eu || void 0 === eu ? void 0 : eu.text) && void 0 !== qu ? qu : "",
-       start: null !== (fu = null === eu || void 0 === eu ? void 0 : eu.start) && void 0 !== fu ? fu : 0,
-       end: null !== (Cu = null === eu || void 0 === eu ? void 0 : eu.end) && void 0 !== Cu ? Cu : 0,
+       raw: null !== (UG = null === EG || void 0 === EG ? void 0 : EG.text) && void 0 !== UG ? UG : "",
+       start: null !== (YG = null === EG || void 0 === EG ? void 0 : EG.start) && void 0 !== YG ? YG : 0,
+       end: null !== (VG = null === EG || void 0 === EG ? void 0 : EG.end) && void 0 !== VG ? VG : 0,
```
