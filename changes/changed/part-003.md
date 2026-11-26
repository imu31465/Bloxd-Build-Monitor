# Changed — Bundle Modifications Report (Part 003 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `3 / 99` (**362** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 002](part-002.md) · [Part 004 →](part-004.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/105.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/105.js` (966 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff)

#### 203. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6008-L6009` → after: `L6008-L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6008-L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6008-L6009) · [Before (L6008-L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6008-L6009)

```diff
-       const lM = rM ? JM.d : dM,
-         EM = rM ? `${JM.k}index.js` : lM,
+       const kU = XU ? aU.b : tU,
+         GU = XU ? `${aU.h}index.js` : kU,
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6013-L6028` → after: `L6013-L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6013-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6013-L6028) · [Before (L6013-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6013-L6028)

```diff
-         eM = GM("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${UM("edit … [truncated]
-         bM = GM("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
-         wM = GM("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
-         tM = GM("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${UM("edit_fil … [truncated]
-         gM = rM ? `2. Then give the whole new code with a write_file call, exactly like this:\n${UM("write_file",{path:lM,why:"what the change does",content:ES.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${UM("write_fi … [truncated]
-         uM = rM ? "" : ` If there is no code yet, write it in ${lM}.`,
-         RM = UM("switch_to_world_code", {}),
-         pM = rM ? nM ? `\n${GS}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
-         WM = mM && GM("use_prefab") && LM.length >= 2,
-         sM = WM ? LM.slice(0, 3).map((MM => MM.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
-         DM = WM ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
-         kM = GM("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
-         ZM = GM("plan") ? `\n${"deepseek"===iM?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
-         oM = null !== (SM = LM[0]) && void 0 !== SM ? SM : eO("parkour"),
-         fM = (null !== (jM = null === oM || void 0 === oM ? void 0 : oM.settings) && void 0 !== jM ? jM : []).slice(0, 2).map((MM => `${MM.key}: ${MM.value}`)).join("\n");
-       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
+         PU = ZU("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${BU("edit … [truncated]
+         WU = ZU("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
+         dU = ZU("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
+         LU = ZU("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${BU("edit_fil … [truncated]
+         eU = XU ? `2. Then give the whole new code with a write_file call, exactly like this:\n${BU("write_file",{path:kU,why:"what the change does",content:gy.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${BU("write_fi … [truncated]
+         CU = XU ? "" : ` If there is no code yet, write it in ${kU}.`,
+         wU = BU("switch_to_world_code", {}),
+         qU = XU ? oU ? `\n${Gy}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
+         OU = NU && ZU("use_prefab") && YU.length >= 2,
+         SU = OU ? YU.slice(0, 3).map((UU => UU.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
+         rU = OU ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
+         uU = ZU("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
+         fU = ZU("plan") ? `\n${"deepseek"===zU?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
+         iU = null !== (yU = YU[0]) && void 0 !== yU ? yU : Zc("parkour"),
+         HU = (null !== (QU = null === iU || void 0 === iU ? void 0 : iU.settings) && void 0 !== QU ? QU : []).slice(0, 2).map((UU => `${UU.key}: ${UU.value}`)).join("\n");
+       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6030` → after: `L6030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6030) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6030)

```diff
-         OM ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
+         cU ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6033` → after: `L6033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6033) · [Before (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6033)

```diff
-         jM.join("\n")
+         QU.join("\n")
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6035` → after: `L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6035) · [Before (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6035)

```diff
-       `}(MM,UM,QM)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
+       `}(UU,BU,DU)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6038-L6039` → after: `L6038-L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6038-L6039) · [Before (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6038-L6039)

```diff
-     function eS(MM, rM, iM) {
-       return Object.keys(MM).filter((MM => !iM || !(0, JM.f)(MM))).sort(((MM, iM) => (iM === rM ? 1 : 0) - (MM === rM ? 1 : 0) || MM.localeCompare(iM)))
+     function Zy(UU, XU, zU) {
+       return Object.keys(UU).filter((UU => !zU || !(0, aU.c)(UU))).sort(((UU, zU) => (zU === XU ? 1 : 0) - (UU === XU ? 1 : 0) || UU.localeCompare(zU)))
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6042-L6045` → after: `L6042-L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6042-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6042-L6045) · [Before (L6042-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6042-L6045)

```diff
-     function bS(MM, rM, iM) {
-       var OM;
-       const SM = eS(MM, rM, iM);
-       return null !== rM && SM.includes(rM) ? rM : null !== (OM = SM[0]) && void 0 !== OM ? OM : null
+     function Ry(UU, XU, zU) {
+       var cU;
+       const yU = Zy(UU, XU, zU);
+       return null !== XU && yU.includes(XU) ? XU : null !== (cU = yU[0]) && void 0 !== cU ? cU : null
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6048-L6049` → after: `L6048-L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6048-L6049) · [Before (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6048-L6049)

```diff
-     function wS(MM) {
-       return MM.includes("index.ts") ? "index.ts" : "index.js"
+     function Py(UU) {
+       return UU.includes("index.ts") ? "index.ts" : "index.js"
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6052-L6054` → after: `L6052-L6054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6052-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6052-L6054) · [Before (L6052-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6052-L6054)

```diff
-     function tS(MM) {
-       const rM = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${wS(MM)}`;
-       return `Only ${rM} runs by itself: another file runs when ${rM} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${rM}.\n`
+     function Wy(UU) {
+       const XU = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${Py(UU)}`;
+       return `Only ${XU} runs by itself: another file runs when ${XU} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${XU}.\n`
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6057-L6058` → after: `L6057-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6057-L6058) · [Before (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6057-L6058)

```diff
-     function gS(MM, rM) {
-       var iM;
+     function dy(UU, XU) {
+       var zU;
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6060-L6065` → after: `L6060-L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6060-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6060-L6065) · [Before (L6060-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6060-L6065)

```diff
-         files: OM,
-         activePath: SM
-       } = MM, jM = !0 === MM.codeBlock, aM = eS(OM, SM, jM);
-       if (0 === aM.length || aM.every((MM => "" === OM[MM].trim()))) return jM ? "There is no code yet: the code block is empty." : aM.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-       const PM = null !== (iM = bS(OM, SM, jM)) && void 0 !== iM ? iM : aM[0];
-       return `${aM.length>1?`Their files:\n${aM.map((MM=>{const rM=""===(iM=OM[MM])?0:iM.replace(/\n$/,"").split("\n").length;var iM;return`- ${MM}: ${1===rM?"1 line":`${rM} lines`}${MM===PM?" (open in the editor, its code below)":""}`})).join("\n")}\n${jM?"":tS(aM)}\n`:""}${func … [truncated]
+         files: cU,
+         activePath: yU
+       } = UU, QU = !0 === UU.codeBlock, AU = Zy(cU, yU, QU);
+       if (0 === AU.length || AU.every((UU => "" === cU[UU].trim()))) return QU ? "There is no code yet: the code block is empty." : AU.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const FU = null !== (zU = Ry(cU, yU, QU)) && void 0 !== zU ? zU : AU[0];
+       return `${AU.length>1?`Their files:\n${AU.map((UU=>{const XU=""===(zU=cU[UU])?0:zU.replace(/\n$/,"").split("\n").length;var zU;return`- ${UU}: ${1===XU?"1 line":`${XU} lines`}${UU===FU?" (open in the editor, its code below)":""}`})).join("\n")}\n${QU?"":Wy(AU)}\n`:""}${func … [truncated]
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6068-L6069` → after: `L6068-L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6068-L6069) · [Before (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6068-L6069)

```diff
-     function uS(MM) {
-       var rM, iM, OM, SM, jM, aM;
+     function Ly(UU) {
+       var XU, zU, cU, yU, QU, AU;
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6071-L6086` → after: `L6071-L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6071-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6071-L6086) · [Before (L6071-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6071-L6086)

```diff
-         codeBlock: !0 === MM.codeBlock,
-         hasCode: "" !== (null !== (rM = MM.files[null !== (iM = MM.activePath) && void 0 !== iM ? iM : ""]) && void 0 !== rM ? rM : "").trim(),
-         hasBigFile: Object.values(MM.files).some((MM => MM.length > 6e3)),
-         wantsExport: aS(MM.request),
-         canAsk: !0 === MM.canAsk,
-         canRemember: !0 === (null === (OM = MM.about) || void 0 === OM ? void 0 : OM.canRemember),
-         isBigRequest: Hr(MM.request),
-         canLookUp: !0 === MM.canLookUp,
-         hasOtherFiles: Object.keys(MM.files).length > 1,
-         hasErrors: MM.errors.length > 0,
-         canChangeWorldCode: !0 === MM.canChangeWorldCode,
-         hasWorldCodeFiles: Object.keys(MM.files).some(JM.f),
-         addsToEntryFile: !0 === MM.addsToEntryFile,
-         offersPrefabs: (SM = MM.request, jM = MM.files, aM = RS(MM), "never" !== aM.offer && ("always" === aM.offer || oO(SM, 1).length > 0 || Hr(SM) || !hS(jM) && HS.test(SM))),
-         listsPrefabs: RS(MM).categories,
-         looksUpDocs: !0 === MM.looksUpDocs
+         codeBlock: !0 === UU.codeBlock,
+         hasCode: "" !== (null !== (XU = UU.files[null !== (zU = UU.activePath) && void 0 !== zU ? zU : ""]) && void 0 !== XU ? XU : "").trim(),
+         hasBigFile: Object.values(UU.files).some((UU => UU.length > 6e3)),
+         wantsExport: yy(UU.request),
+         canAsk: !0 === UU.canAsk,
+         canRemember: !0 === (null === (cU = UU.about) || void 0 === cU ? void 0 : cU.canRemember),
+         isBigRequest: IX(UU.request),
+         canLookUp: !0 === UU.canLookUp,
+         hasOtherFiles: Object.keys(UU.files).length > 1,
+         hasErrors: UU.errors.length > 0,
+         canChangeWorldCode: !0 === UU.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(UU.files).some(aU.c),
+         addsToEntryFile: !0 === UU.addsToEntryFile,
+         offersPrefabs: (yU = UU.request, QU = UU.files, AU = ey(UU), "never" !== AU.offer && ("always" === AU.offer || uc(yU, 1).length > 0 || IX(yU) || !Ny(QU) && Yy.test(yU))),
+         listsPrefabs: ey(UU).categories,
+         looksUpDocs: !0 === UU.looksUpDocs
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6090-L6092` → after: `L6090-L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6090-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6090-L6092) · [Before (L6090-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6090-L6092)

```diff
-     function RS(MM) {
-       var rM;
-       return null !== (rM = MM.prefabs) && void 0 !== rM ? rM : mS
+     function ey(UU) {
+       var XU;
+       return null !== (XU = UU.prefabs) && void 0 !== XU ? XU : Ey
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6095-L6103` → after: `L6095-L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6095-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6095-L6103) · [Before (L6095-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6095-L6103)

```diff
-     function pS(MM, rM) {
-       return "deepseek" === rM ? function(MM) {
-         const rM = PS[MM ? "codeBlock" : "worldCode"];
-         return er.filter((MM => rM.has(MM.name)))
-       }(!0 === MM.codeBlock) : function(MM) {
-         const rM = (MM.hasCode || MM.hasBigFile) && !MM.codeBlock || !0 === MM.hasWorldCodeFiles || !0 === MM.addsToEntryFile,
-           iM = !0 === MM.canLookUp,
-           OM = MM.codeBlock && !0 === MM.canChangeWorldCode && !0 !== MM.hasWorldCodeFiles && iM,
-           SM = {
+     function Cy(UU, XU) {
+       return "deepseek" === XU ? function(UU) {
+         const XU = Qy[UU ? "codeBlock" : "worldCode"];
+         return PX.filter((UU => XU.has(UU.name)))
+       }(!0 === UU.codeBlock) : function(UU) {
+         const XU = (UU.hasCode || UU.hasBigFile) && !UU.codeBlock || !0 === UU.hasWorldCodeFiles || !0 === UU.addsToEntryFile,
+           zU = !0 === UU.canLookUp,
+           cU = UU.codeBlock && !0 === UU.canChangeWorldCode && !0 !== UU.hasWorldCodeFiles && zU,
+           yU = {
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6105-L6106` → after: `L6105-L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6105-L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6105-L6106) · [Before (L6105-L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6105-L6106)

```diff
-             edit_file: MM.hasBigFile,
-             replace_function: rM,
+             edit_file: UU.hasBigFile,
+             replace_function: XU,
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6108-L6125` → after: `L6108-L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6108-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6108-L6125) · [Before (L6108-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6108-L6125)

```diff
-             add_world_code: MM.codeBlock && !0 !== MM.hasWorldCodeFiles,
-             edit_code_in_place: MM.hasCode,
-             export_game: MM.wantsExport,
-             switch_to_world_code: MM.codeBlock,
-             ask_creator: MM.canAsk,
-             remember: !0 === MM.canRemember && !MM.codeBlock,
-             plan: !0 === MM.isBigRequest && MM.canAsk && !MM.codeBlock,
-             view_file: iM && !0 === MM.hasOtherFiles && !MM.codeBlock,
-             view_world_code: OM,
-             view_chunk: iM,
-             view_game_state: iM,
-             get_docs: iM,
-             fetch_url: iM && !0 === MM.looksUpDocs,
-             find_names: iM,
-             view_errors: iM && !0 === MM.hasErrors,
-             use_prefab: !0 === MM.offersPrefabs && !MM.codeBlock,
- ... (2 more removed lines; see GitHub link above)
+             add_world_code: UU.codeBlock && !0 !== UU.hasWorldCodeFiles,
+             edit_code_in_place: UU.hasCode,
+             export_game: UU.wantsExport,
+             switch_to_world_code: UU.codeBlock,
+             ask_creator: UU.canAsk,
+             remember: !0 === UU.canRemember && !UU.codeBlock,
+             plan: !0 === UU.isBigRequest && UU.canAsk && !UU.codeBlock,
+             view_file: zU && !0 === UU.hasOtherFiles && !UU.codeBlock,
+             view_world_code: cU,
+             view_chunk: zU,
+             view_game_state: zU,
+             get_docs: zU,
+             fetch_url: zU && !0 === UU.looksUpDocs,
+             find_names: zU,
+             view_errors: zU && !0 === UU.hasErrors,
+             use_prefab: !0 === UU.offersPrefabs && !UU.codeBlock,
+ ... (2 more added lines; see GitHub link above)
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6127-L6130` → after: `L6127-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6127-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6127-L6130) · [Before (L6127-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6127-L6130)

```diff
-         let jM = er.filter((MM => SM[MM.name]));
-         for (const aM of ["remember", "plan"]) jM.filter((MM => !br(MM.name))).length > 7 && (jM = jM.filter((MM => MM.name !== aM)));
-         return jM
-       }(uS(MM))
+         let QU = PX.filter((UU => yU[UU.name]));
+         for (const AU of ["remember", "plan"]) QU.filter((UU => !WX(UU.name))).length > 7 && (QU = QU.filter((UU => UU.name !== AU)));
+         return QU
+       }(Ly(UU))
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6133-L6140` → after: `L6133-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6133-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6133-L6140) · [Before (L6133-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6133-L6140)

```diff
-     function WS(MM, rM) {
-       var iM, OM;
-       const SM = uS(MM),
-         jM = !0 === SM.canLookUp,
-         aM = (null !== (iM = null === (OM = MM.lookups) || void 0 === OM ? void 0 : OM.length) && void 0 !== iM ? iM : 0) > 0,
-         PM = !0 === SM.hasWorldCodeFiles,
-         nM = [SM.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", SM.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", jM ? "" : aM ? "You have looked things up as many times as you can: answer n … [truncated]
-       return nM.length > 0 ? `\n\nFor this request: ${nM.join(" ")}` : ""
+     function wy(UU, XU) {
+       var zU, cU;
+       const yU = Ly(UU),
+         QU = !0 === yU.canLookUp,
+         AU = (null !== (zU = null === (cU = UU.lookups) || void 0 === cU ? void 0 : cU.length) && void 0 !== zU ? zU : 0) > 0,
+         FU = !0 === yU.hasWorldCodeFiles,
+         oU = [yU.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", yU.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", QU ? "" : AU ? "You have looked things up as many times as you can: answer n … [truncated]
+       return oU.length > 0 ? `\n\nFor this request: ${oU.join(" ")}` : ""
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6143-L6145` → after: `L6143-L6145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6143-L6145) · [Before (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6143-L6145)

```diff
-     function sS(MM, rM) {
-       var iM, OM, SM, jM, aM, PM;
-       let nM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JS,
+     function qy(UU, XU) {
+       var zU, cU, yU, QU, AU, FU;
+       let oU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Iy,
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6147-L6148` → after: `L6147-L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6147-L6148) · [Before (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6147-L6148)

```diff
-           docsInTurn: QM = !1,
-           yd: zM = !1
+           docsInTurn: DU = !1,
+           Yt: EU = !1
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6150-L6182` → after: `L6150-L6182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6150-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6150-L6182) · [Before (L6150-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6150-L6182)

```diff
-       const LM = "deepseek" === nM.format,
-         mM = Object.values(rM.files).join("\n"),
-         HM = rM.history.slice(-2).map((MM => MM.text)).join("\n"),
-         hM = `${rM.request}\n${HM}\n${rM.errors.join("\n")}`,
-         JM = !0 === rM.looksUpDocs,
-         dM = JM && !0 === rM.canLookUp ? [] : MM.find(hM, mM, 12),
-         yM = MM.matchItemAndBlockNames(hM, 12),
-         lM = !0 === rM.codeBlock,
-         EM = lM ? "myId" : "playerId",
-         UM = pS(rM, nM.format),
-         GM = UM.some((MM => "use_prefab" === MM.name)),
-         CM = !GM || LM && !0 !== uS(rM).offersPrefabs ? [] : function(MM, rM, iM) {
-           if ("never" === iM.offer || "none" === iM.list) return [];
-           if ("all" === iM.list) return [...UO];
-           const OM = oO(MM, 4);
-           if (hS(rM) || !HS.test(MM) && !Hr(MM)) return OM;
- ... (17 more removed lines; see GitHub link above)
+       const YU = "deepseek" === oU.format,
+         NU = Object.values(XU.files).join("\n"),
+         IU = XU.history.slice(-2).map((UU => UU.text)).join("\n"),
+         pU = `${XU.request}\n${IU}\n${XU.errors.join("\n")}`,
+         aU = !0 === XU.looksUpDocs,
+         tU = aU && !0 === XU.canLookUp ? [] : UU.find(pU, NU, 12),
+         gU = UU.matchItemAndBlockNames(pU, 12),
+         kU = !0 === XU.codeBlock,
+         GU = kU ? "myId" : "playerId",
+         BU = Cy(XU, oU.format),
+         ZU = BU.some((UU => "use_prefab" === UU.name)),
+         RU = !ZU || YU && !0 !== Ly(XU).offersPrefabs ? [] : function(UU, XU, zU) {
+           if ("never" === zU.offer || "none" === zU.list) return [];
+           if ("all" === zU.list) return [...kc];
+           const cU = uc(UU, 4);
+           if (Ny(XU) || !Yy.test(UU) && !IX(UU)) return cU;
+ ... (17 more added lines; see GitHub link above)
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6184` → after: `L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6184) · [Before (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6184)

```diff
-           content: QS([lM ? lS(JM) : dS(JM), ...JM ? [] : [lM ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${MM.index("callback")}` : `## Callbacks (all of them)\n${MM.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: Fy([kU ? ty(aU) : py(aU), ...aU ? [] : [kU ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${UU.index("callback")}` : `## Callbacks (all of them)\n${UU.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6191-L6196` → after: `L6191-L6196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6191-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6191-L6196) · [Before (L6191-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6191-L6196)

```diff
-             hasWorldCodeFiles: !0 === uS(rM).hasWorldCodeFiles,
-             hasLookedUp: (null !== (iM = null === (OM = rM.lookups) || void 0 === OM ? void 0 : OM.length) && void 0 !== iM ? iM : 0) > 0,
-             movesToWorldCode: !0 === rM.canChangeWorldCode,
-             listedPrefabs: CM,
-             guidesToPrefabs: !0 === RS(rM).guide
-           })].filter((MM => "" !== MM)).join("\n\n"), UM, nM.format, nM.nativeTools)
+             hasWorldCodeFiles: !0 === Ly(XU).hasWorldCodeFiles,
+             hasLookedUp: (null !== (zU = null === (cU = XU.lookups) || void 0 === cU ? void 0 : cU.length) && void 0 !== zU ? zU : 0) > 0,
+             movesToWorldCode: !0 === XU.canChangeWorldCode,
+             listedPrefabs: RU,
+             guidesToPrefabs: !0 === ey(XU).guide
+           })].filter((UU => "" !== UU)).join("\n\n"), BU, oU.format, oU.nativeTools)
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6198-L6201` → after: `L6198-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6198-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6198-L6201) · [Before (L6198-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6198-L6201)

```diff
-       if (!LM)
-         for (const oM of rM.history) tM.push({
-           role: oM.role,
-           content: oM.text
+       if (!YU)
+         for (const iU of XU.history) LU.push({
+           role: iU.role,
+           content: iU.text
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6203-L6211` → after: `L6203-L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6203-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6203-L6211) · [Before (L6203-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6203-L6211)

```diff
-       const gM = LM && !zM && rM.history.length > 0 ? `Earlier in this chat:\n${rM.history.map((MM=>`${"user"===MM.role?"They asked":"You answered"}: ${MM.text}`)).join("\n")}\n\n` : "",
-         uM = null !== (SM = rM.about) && void 0 !== SM && SM.notes.length ? `AI notes (notes they kept):\n${rM.about.notes.map((MM=>`- ${MM}`)).join("\n")}\n\n` : "",
-         RM = null !== (jM = rM.about) && void 0 !== jM && jM.outline ? `Outline of their code:\n${rM.about.outline}\n\n` : "",
-         pM = rM.errors.length > 0 ? `\n\nErrors their world showed recently:\n${rM.errors.slice(-5).join("\n")}` : "",
-         WM = null === (aM = rM.failedEdits) || void 0 === aM || !aM.length || LM && zM ? "" : `\n\nWhat happened to your last answer's changes:\n${function(MM,rM){return MM.map((MM=>Mi[rM].editFailure(MM.tool,LS(MM)))).join("\n\n")}(rM.failedEdits,nM.format)}`,
-         sM = [...QM ? wM : [], ...LM ? [eM, bM] : []].filter((MM => "" !== MM)).map((MM => `${MM}\n\n`)).join(""),
-         DM = null === (PM = rM.lookups) || void 0 === PM || !PM.length || LM && zM ? "" : `\n\nWhat you looked up for this request:\n${kM=rM.lookups,ZM=nM.format,kM.map((MM=>Mi[ZM].lookupResult(MM.tool,MM.about,MM.text))).join("\n\n")}`;
-       var kM, ZM;
-       return tM.push({
+       const eU = YU && !EU && XU.history.length > 0 ? `Earlier in this chat:\n${XU.history.map((UU=>`${"user"===UU.role?"They asked":"You answered"}: ${UU.text}`)).join("\n")}\n\n` : "",
+         CU = null !== (yU = XU.about) && void 0 !== yU && yU.notes.length ? `AI notes (notes they kept):\n${XU.about.notes.map((UU=>`- ${UU}`)).join("\n")}\n\n` : "",
+         wU = null !== (QU = XU.about) && void 0 !== QU && QU.outline ? `Outline of their code:\n${XU.about.outline}\n\n` : "",
+         qU = XU.errors.length > 0 ? `\n\nErrors their world showed recently:\n${XU.errors.slice(-5).join("\n")}` : "",
+         OU = null === (AU = XU.failedEdits) || void 0 === AU || !AU.length || YU && EU ? "" : `\n\nWhat happened to your last answer's changes:\n${function(UU,XU){return UU.map((UU=>Uz[XU].editFailure(UU.tool,Dy(UU)))).join("\n\n")}(XU.failedEdits,oU.format)}`,
+         SU = [...DU ? dU : [], ...YU ? [PU, WU] : []].filter((UU => "" !== UU)).map((UU => `${UU}\n\n`)).join(""),
+         rU = null === (FU = XU.lookups) || void 0 === FU || !FU.length || YU && EU ? "" : `\n\nWhat you looked up for this request:\n${uU=XU.lookups,fU=oU.format,uU.map((UU=>Uz[fU].lookupResult(UU.tool,UU.about,UU.text))).join("\n\n")}`;
+       var uU, fU;
+       return LU.push({
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6214` → after: `L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6214) · [Before (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6214)

```diff
-       }), tM
+       }), LU
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6216` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6216) · [Before (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6216)

```diff
-     var DS = iM(40757);
+     var Oy = zU(40521);
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6218-L6219` → after: `L6218-L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6218-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6218-L6219) · [Before (L6218-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6218-L6219)

```diff
-     function kS(MM) {
-       var rM, iM, OM, SM, jM, aM;
+     function Sy(UU) {
+       var XU, zU, cU, yU, QU, AU;
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6221-L6223` → after: `L6221-L6223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6221-L6223) · [Before (L6221-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6221-L6223)

```diff
-         args: PM
-       } = MM;
-       switch (MM.name) {
+         args: FU
+       } = UU;
+       switch (UU.name) {
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6225` → after: `L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6225) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6225)

```diff
-           return null !== (rM = PM.path) && void 0 !== rM ? rM : "a file";
+           return null !== (XU = FU.path) && void 0 !== XU ? XU : "a file";
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6229` → after: `L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6229) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6229)

```diff
-           return PM.position ? `the blocks near ${null!==(iM=null===(OM=(0,DS.f)(PM.position))||void 0===OM?void 0:OM.map(Math.floor).join(", "))&&void 0!==iM?iM:PM.position}` : "the blocks around you";
+           return FU.position ? `the blocks near ${null!==(zU=null===(cU=(0,Oy.f)(FU.position))||void 0===cU?void 0:cU.map(Math.floor).join(", "))&&void 0!==zU?zU:FU.position}` : "the blocks around you";
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6233` → after: `L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6233) · [Before (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6233)

```diff
-           return PM.name ? `the docs for ${PM.name}` : `the list of ${oS(null!==(SM=PM.list)&&void 0!==SM?SM:ZS)}`;
+           return FU.name ? `the docs for ${FU.name}` : `the list of ${uy(null!==(yU=FU.list)&&void 0!==yU?yU:ry)}`;
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6235-L6239` → after: `L6235-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6235-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6235-L6239) · [Before (L6235-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6235-L6239)

```diff
-           return function(MM) {
-             const rM = void 0 === MM ? null : UM(MM);
-             if (null === rM) return null !== MM && void 0 !== MM ? MM : "a docs page";
-             return GM(rM) ? "the list of docs pages" : `the docs page ${function(MM){const rM=(0,yM.y)(MM);return null===rM?MM:`${rM.name}${null===rM.part?"":`/${rM.part}`}`}(rM)}`
-           }(PM.url);
+           return function(UU) {
+             const XU = void 0 === UU ? null : BU(UU);
+             if (null === XU) return null !== UU && void 0 !== UU ? UU : "a docs page";
+             return ZU(XU) ? "the list of docs pages" : `the docs page ${function(UU){const XU=(0,gU.y)(UU);return null===XU?UU:`${XU.name}${null===XU.part?"":`/${XU.part}`}`}(XU)}`
+           }(FU.url);
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6241` → after: `L6241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6241) · [Before (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6241)

```diff
-           return `names for "${null!==(jM=PM.words)&&void 0!==jM?jM:""}"`;
+           return `names for "${null!==(QU=FU.words)&&void 0!==QU?QU:""}"`;
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6245` → after: `L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6245) · [Before (L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6245)

```diff
-           return PM.category ? `the ready-made ${PM.category} games` : "the ready-made games";
+           return FU.category ? `the ready-made ${FU.category} games` : "the ready-made games";
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6247` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6247) · [Before (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6247)

```diff
-           return `the ready-made ${null!==(aM=PM.name)&&void 0!==aM?aM:"game"}`
+           return `the ready-made ${null!==(AU=FU.name)&&void 0!==AU?AU:"game"}`
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6250` → after: `L6250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6250) · [Before (L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6250)

```diff
-     const ZS = "functions";
+     const ry = "functions";
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6252-L6253` → after: `L6252-L6253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6252-L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6252-L6253) · [Before (L6252-L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6252-L6253)

```diff
-     function oS(MM) {
-       return MM.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
+     function uy(UU) {
+       return UU.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6256-L6257` → after: `L6256-L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6256-L6257) · [Before (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6256-L6257)

```diff
-     function fS(MM) {
-       return "get_docs" === MM.name || "fetch_url" === MM.name
+     function fy(UU) {
+       return "get_docs" === UU.name || "fetch_url" === UU.name
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6259-L6262` → after: `L6259-L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6259-L6262) · [Before (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6259-L6262)

```diff
-     async function YS(MM, rM) {
-       var iM;
-       const OM = kS(MM),
-         SM = rM => ({
+     async function iy(UU, XU) {
+       var zU;
+       const cU = Sy(UU),
+         yU = XU => ({
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6264-L6266` → after: `L6264-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6264-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6264-L6266) · [Before (L6264-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6264-L6266)

```diff
-             tool: MM.name,
-             about: OM,
-             text: rM
+             tool: UU.name,
+             about: cU,
+             text: XU
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6269` → after: `L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6269) · [Before (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6269)

```diff
-       switch (MM.name) {
+       switch (UU.name) {
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6271` → after: `L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6271) · [Before (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6271)

```diff
-           return SM((PM = MM.args.path, nM = rM.files, void 0 === PM ? "No path was given: give the path of a file from the list." : Object.hasOwn(nM, PM) ? "" === nM[PM] ? `${PM} is empty.` : nM[PM] : `There is no file called ${PM}. Their files are: ${Object.keys(nM).join(", ")} … [truncated]
+           return yU((FU = UU.args.path, oU = XU.files, void 0 === FU ? "No path was given: give the path of a file from the list." : Object.hasOwn(oU, FU) ? "" === oU[FU] ? `${FU} is empty.` : oU[FU] : `There is no file called ${FU}. Their files are: ${Object.keys(oU).join(", ")} … [truncated]
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6273-L6278` → after: `L6273-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6273-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6273-L6278) · [Before (L6273-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6273-L6278)

```diff
-           const MM = rM.readWorldCode ? await rM.readWorldCode() : null;
-           if (null === MM) return SM("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
-           const iM = Object.keys(MM).sort(),
-             OM = Object.fromEntries(iM.map((rM => [`${JM.k}${rM}`, MM[rM]]))),
-             jM = iM.map((rM => `${JM.k}${rM}:\n${""===MM[rM]?"(empty)":MM[rM]}`)).join("\n\n"),
-             aM = iM.length > 1 ? `\n\n${tS(iM,JM.k)}` : "";
+           const UU = XU.readWorldCode ? await XU.readWorldCode() : null;
+           if (null === UU) return yU("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
+           const zU = Object.keys(UU).sort(),
+             cU = Object.fromEntries(zU.map((XU => [`${aU.h}${XU}`, UU[XU]]))),
+             QU = zU.map((XU => `${aU.h}${XU}:\n${""===UU[XU]?"(empty)":UU[XU]}`)).join("\n\n"),
+             AU = zU.length > 1 ? `\n\n${Wy(zU,aU.h)}` : "";
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6280-L6281` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6280-L6281) · [Before (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6280-L6281)

```diff
-             ...SM("" === jM ? `World Code has no code yet: ${JM.k}index.js is empty.` : `${jM}${aM}`),
-             worldCodeFiles: OM
+             ...yU("" === QU ? `World Code has no code yet: ${aU.h}index.js is empty.` : `${QU}${AU}`),
+             worldCodeFiles: cU
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6285` → after: `L6285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6285) · [Before (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6285)

```diff
-           return SM(await rM.viewChunk((0, DS.f)(MM.args.position)));
+           return yU(await XU.viewChunk((0, Oy.f)(UU.args.position)));
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6287` → after: `L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6287) · [Before (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6287)

```diff
-           return SM(await rM.viewGameState());
+           return yU(await XU.viewGameState());
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6289-L6292` → after: `L6289-L6292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6289-L6292) · [Before (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6289-L6292)

```diff
-           return SM(function(MM, rM, iM) {
-             if (void 0 === MM) {
-               const MM = (0, eM.d)(Er, oS(null !== rM && void 0 !== rM ? rM : ZS));
-               return void 0 === MM ? `There is no list called ${rM}: ask for ${Ur}.` : iM.index(MM)
+           return yU(function(UU, XU, zU) {
+             if (void 0 === UU) {
+               const UU = (0, PU.b)(GX, uy(null !== XU && void 0 !== XU ? XU : ry));
+               return void 0 === UU ? `There is no list called ${XU}: ask for ${BX}.` : zU.index(UU)
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6294-L6298` → after: `L6294-L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6294-L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6294-L6298) · [Before (L6294-L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6294-L6298)

```diff
-             const OM = iM.section(MM);
-             if (OM) return OM.text;
-             const SM = iM.find(MM, "", 3).map((MM => MM.name)).join(", ");
-             return `Nothing is called ${MM}.${""===SM?"":` The closest names are: ${SM}.`}`
-           }(MM.args.name, MM.args.list, rM.docs));
+             const cU = zU.section(UU);
+             if (cU) return cU.text;
+             const yU = zU.find(UU, "", 3).map((UU => UU.name)).join(", ");
+             return `Nothing is called ${UU}.${""===yU?"":` The closest names are: ${yU}.`}`
+           }(UU.args.name, UU.args.list, XU.docs));
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6300` → after: `L6300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6300) · [Before (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6300)

```diff
-           return SM(await rM.fetchDocsPage(null !== (iM = MM.args.url) && void 0 !== iM ? iM : ""));
+           return yU(await XU.fetchDocsPage(null !== (zU = UU.args.url) && void 0 !== zU ? zU : ""));
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6302-L6304` → after: `L6302-L6304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6302-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6302-L6304) · [Before (L6302-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6302-L6304)

```diff
-           var jM, aM;
-           const iM = rM.docs.searchNames(null !== (jM = MM.args.words) && void 0 !== jM ? jM : "", 20);
-           return SM(iM.length > 0 ? iM.join(", ") : `No block, item or mob name has any of the words "${null!==(aM=MM.args.words)&&void 0!==aM?aM:""}".`)
+           var QU, AU;
+           const zU = XU.docs.searchNames(null !== (QU = UU.args.words) && void 0 !== QU ? QU : "", 20);
+           return yU(zU.length > 0 ? zU.join(", ") : `No block, item or mob name has any of the words "${null!==(AU=UU.args.words)&&void 0!==AU?AU:""}".`)
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6307` → after: `L6307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6307) · [Before (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6307)

```diff
-           return SM(rM.errors.length > 0 ? rM.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+           return yU(XU.errors.length > 0 ? XU.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6309` → after: `L6309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6309) · [Before (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6309)

```diff
-           return SM(kO(MM.args.category));
+           return yU(Sc(UU.args.category));
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6311-L6314` → after: `L6311-L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6311-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6311-L6314) · [Before (L6311-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6311-L6314)

```diff
-           return SM(function(MM, rM) {
-             const iM = void 0 === MM ? null : eO(MM);
-             return iM ? ZO(iM, rM) : `There is no prefab called ${null!==MM&&void 0!==MM?MM:"that"}.\n${kO()}`
-           }(MM.args.name, !0 === rM.showPrefabCode))
+           return yU(function(UU, XU) {
+             const zU = void 0 === UU ? null : Zc(UU);
+             return zU ? rc(zU, XU) : `There is no prefab called ${null!==UU&&void 0!==UU?UU:"that"}.\n${Sc()}`
+           }(UU.args.name, !0 === XU.showPrefabCode))
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6316` → after: `L6316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6316) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6316)

```diff
-       var PM, nM
+       var FU, oU
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6318` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6318) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6318)

```diff
-     const NS = [
+     const Hy = [
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6344-L6401` → after: `L6344-L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6344-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6344-L6401) · [Before (L6344-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6344-L6401)

```diff
-     function AS(MM) {
-       let rM = MM;
-       for (const [iM, OM] of NS) rM = rM.replace(iM, (MM => MM.length > 1 && MM[0] !== MM[0].toLowerCase() && MM.slice(1) === MM.slice(1).toLowerCase() ? OM[0].toUpperCase() + OM.slice(1) : OM));
-       return rM
-     }
-     const xS = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       vS = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       FS = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       BS = 12e3,
-       XS = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function IS(MM) {
-       var rM, iM, OM;
-       const SM = null === (rM = /Safety:\s*(\w+)/.exec(MM)) || void 0 === rM ? void 0 : rM[1],
-         jM = null !== (iM = null === (OM = /Categories:\s*(.+)/.exec(MM)) || void 0 === OM ? void 0 : OM[1]) && void 0 !== iM ? iM : "";
-       return /PII/.test(jM) ? "personalInfo" : "Unsafe" === SM || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(jM) ? "unsafe" : "ok"
- ... (42 more removed lines; see GitHub link above)
+     function My(UU) {
+       let XU = UU;
+       for (const [zU, cU] of Hy) XU = XU.replace(zU, (UU => UU.length > 1 && UU[0] !== UU[0].toLowerCase() && UU.slice(1) === UU.slice(1).toLowerCase() ? cU[0].toUpperCase() + cU.slice(1) : cU));
+       return XU
+     }
+     const vy = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       Vy = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       sy = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       ny = 12e3,
+       my = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function ly(UU) {
+       var XU, zU, cU;
+       const yU = null === (XU = /Safety:\s*(\w+)/.exec(UU)) || void 0 === XU ? void 0 : XU[1],
+         QU = null !== (zU = null === (cU = /Categories:\s*(.+)/.exec(UU)) || void 0 === cU ? void 0 : cU[1]) && void 0 !== zU ? zU : "";
+       return /PII/.test(QU) ? "personalInfo" : "Unsafe" === yU || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(QU) ? "unsafe" : "ok"
+ ... (42 more added lines; see GitHub link above)
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6403-L6406` → after: `L6403-L6406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6403-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6403-L6406) · [Before (L6403-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6403-L6406)

```diff
-           if ("\n" === rM) break;
-           if (iM) iM = "]" !== rM;
-           else if ("[" === rM) iM = !0;
-           else if ("/" === rM) return OM + 1
+           if ("\n" === XU) break;
+           if (zU) zU = "]" !== XU;
+           else if ("[" === XU) zU = !0;
+           else if ("/" === XU) return cU + 1
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6409-L6430` → after: `L6409-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6409-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6409-L6430) · [Before (L6409-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6409-L6430)

```diff
-       return rM + 1
-     }
- 
-     function rj(MM, rM, iM, OM) {
-       let SM = rM,
-         jM = 0;
-       for (; SM < MM.length;) {
-         const rM = MM[SM],
-           aM = MM[SM + 1];
-         if ("/" === rM && "/" === aM) {
-           const rM = MM.indexOf("\n", SM);
-           OM.push(MM.slice(SM + 2, -1 === rM ? MM.length : rM)), SM = -1 === rM ? MM.length : rM
-         } else if ("/" === rM && "*" === aM) {
-           const rM = MM.indexOf("*/", SM + 2);
-           OM.push(MM.slice(SM + 2, -1 === rM ? MM.length : rM)), SM = -1 === rM ? MM.length : rM + 2
-         } else if ("/" === rM && cS(MM, SM)) SM = Mj(MM, SM);
- ... (6 more removed lines; see GitHub link above)
+       return XU + 1
+     }
+ 
+     function hy(UU, XU, zU, cU) {
+       let yU = XU,
+         QU = 0;
+       for (; yU < UU.length;) {
+         const XU = UU[yU],
+           AU = UU[yU + 1];
+         if ("/" === XU && "/" === AU) {
+           const XU = UU.indexOf("\n", yU);
+           cU.push(UU.slice(yU + 2, -1 === XU ? UU.length : XU)), yU = -1 === XU ? UU.length : XU
+         } else if ("/" === XU && "*" === AU) {
+           const XU = UU.indexOf("*/", yU + 2);
+           cU.push(UU.slice(yU + 2, -1 === XU ? UU.length : XU)), yU = -1 === XU ? UU.length : XU + 2
+         } else if ("/" === XU && by(UU, yU)) yU = Ty(UU, yU);
+ ... (6 more added lines; see GitHub link above)
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6432-L6435` → after: `L6432-L6435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6432-L6435) · [Before (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6432-L6435)

```diff
-           if (iM && "{" === rM) jM++;
-           else if (iM && "}" === rM) {
-             if (0 === jM) return SM + 1;
-             jM--
+           if (zU && "{" === XU) QU++;
+           else if (zU && "}" === XU) {
+             if (0 === QU) return yU + 1;
+             QU--
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6437` → after: `L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6437) · [Before (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6437)

```diff
-           SM++
+           yU++
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6440` → after: `L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6440) · [Before (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6440)

```diff
-       return SM
+       return yU
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6442-L6446` → after: `L6442-L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6442-L6446) · [Before (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6442-L6446)

```diff
-     const ij = 4e5;
-     var Oj = iM(44136);
-     let Sj = [],
-       jj = 0,
-       aj = null;
+     const UQ = 4e5;
+     var XQ = zU(44159);
+     let zQ = [],
+       cQ = 0,
+       yQ = null;
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6448-L6449` → after: `L6448-L6449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6448-L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6448-L6449) · [Before (L6448-L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6448-L6449)

```diff
-     function Pj(MM) {
-       return Math.ceil(MM.length / 4)
+     function QQ(UU) {
+       return Math.ceil(UU.length / 4)
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6452-L6453` → after: `L6452-L6453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6452-L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6452-L6453) · [Before (L6452-L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6452-L6453)

```diff
-     function nj(MM) {
-       return "number" === typeof MM && Number.isInteger(MM) && MM >= 0
+     function AQ(UU) {
+       return "number" === typeof UU && Number.isInteger(UU) && UU >= 0
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6456-L6459` → after: `L6456-L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6456-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6456-L6459) · [Before (L6456-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6456-L6459)

```diff
-     function Qj(MM, rM, iM) {
-       var OM;
-       let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ! function(MM) {
+     function FQ(UU, XU, zU) {
+       var cU;
+       let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(UU) {
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6461-L6464` → after: `L6461-L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6461-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6461-L6464) · [Before (L6461-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6461-L6464)

```diff
-         if (Sj.push(MM), Sj.length >= 40) return void Lj();
-         zj()
-       }(null !== (OM = function(MM) {
-         if (null === MM || "object" !== typeof MM) return null;
+         if (zQ.push(UU), zQ.length >= 40) return void DQ();
+         oQ()
+       }(null !== (cU = function(UU) {
+         if (null === UU || "object" !== typeof UU) return null;
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6466-L6471` → after: `L6466-L6471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6466-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6466-L6471) · [Before (L6466-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6466-L6471)

```diff
-           prompt_tokens: rM,
-           completion_tokens: iM,
-           prompt_tokens_details: OM
-         } = MM;
-         if (!nj(rM) || !nj(iM)) return null;
-         const SM = null !== OM && "object" === typeof OM ? OM.cached_tokens : void 0;
+           prompt_tokens: XU,
+           completion_tokens: zU,
+           prompt_tokens_details: cU
+         } = UU;
+         if (!AQ(XU) || !AQ(zU)) return null;
+         const yU = null !== cU && "object" === typeof cU ? cU.cached_tokens : void 0;
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6473-L6475` → after: `L6473-L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6473-L6475) · [Before (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6473-L6475)

```diff
-           sent: rM,
-           cached: nj(SM) ? SM : 0,
-           received: iM
+           sent: XU,
+           cached: AQ(yU) ? yU : 0,
+           received: zU
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6477-L6478` → after: `L6477-L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6477-L6478) · [Before (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6477-L6478)

```diff
-       }(MM)) && void 0 !== OM ? OM : {
-         sent: Pj(JSON.stringify(rM)),
+       }(UU)) && void 0 !== cU ? cU : {
+         sent: QQ(JSON.stringify(XU)),
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6480` → after: `L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6480) · [Before (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6480)

```diff
-         received: Pj(iM) + SM
+         received: QQ(zU) + yU
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6484-L6486` → after: `L6484-L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6484-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6484-L6486) · [Before (L6484-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6484-L6486)

```diff
-     function zj() {
-       aj ??= setTimeout((() => {
-         Lj()
+     function oQ() {
+       yQ ??= setTimeout((() => {
+         DQ()
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6489-L6493` → after: `L6489-L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6489-L6493) · [Before (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6489-L6493)

```diff
-     async function Lj() {
-       null !== aj && (clearTimeout(aj), aj = null);
-       const MM = Sj.slice(0, 40);
-       Sj = Sj.slice(40), Sj.length > 0 && (aj = setTimeout((() => {
-         Lj()
+     async function DQ() {
+       null !== yQ && (clearTimeout(yQ), yQ = null);
+       const UU = zQ.slice(0, 40);
+       zQ = zQ.slice(40), zQ.length > 0 && (yQ = setTimeout((() => {
+         DQ()
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6495-L6499` → after: `L6495-L6499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6495-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6495-L6499) · [Before (L6495-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6495-L6499)

```diff
-       const rM = jj;
-       if (jj = 0, 0 !== MM.length || 0 !== rM) try {
-         await (0, Oj.postToGameServer)("/ai-helper/usage", {
-           calls: MM,
-           pastes: rM
+       const XU = cQ;
+       if (cQ = 0, 0 !== UU.length || 0 !== XU) try {
+         await (0, XQ.postToGameServer)("/ai-helper/usage", {
+           calls: UU,
+           pastes: XU
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6503-L6504` → after: `L6503-L6504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6503-L6504) · [Before (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6503-L6504)

```diff
-     const mj = 6e4;
-     const Hj = new class {
+     const EQ = 6e4;
+     const YQ = new class {
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6508-L6510` → after: `L6508-L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6508-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6508-L6510) · [Before (L6508-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6508-L6510)

```diff
-       record(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         this.calls.set(MM, [...this.recent(MM, rM), rM])
+       record(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(UU, [...this.recent(UU, XU), XU])
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6512-L6516` → after: `L6512-L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6512-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6512-L6516) · [Before (L6512-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6512-L6516)

```diff
-       markFull(MM) {
-         var rM;
-         let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
-           OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.fullUntil.set(MM, Math.max(null !== (rM = this.fullUntil.get(MM)) && void 0 !== rM ? rM : 0, iM + Math.max(OM, mj)))
+       markFull(UU) {
+         var XU;
+         let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(UU, Math.max(null !== (XU = this.fullUntil.get(UU)) && void 0 !== XU ? XU : 0, zU + Math.max(cU, EQ)))
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6518-L6520` → after: `L6518-L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6518-L6520) · [Before (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6518-L6520)

```diff
-       callsInLastMinute(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return this.recent(MM, rM).length
+       callsInLastMinute(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(UU, XU).length
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6522-L6527` → after: `L6522-L6527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6522-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6522-L6527) · [Before (L6522-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6522-L6527)

```diff
-       freeAt(MM) {
-         var rM;
-         let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const OM = this.recent(MM, iM),
-           SM = OM.length < 2 ? iM : OM[OM.length - 2] + mj;
-         return Math.max(SM, null !== (rM = this.fullUntil.get(MM)) && void 0 !== rM ? rM : 0, iM)
+       freeAt(UU) {
+         var XU;
+         let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const cU = this.recent(UU, zU),
+           yU = cU.length < 2 ? zU : cU[cU.length - 2] + EQ;
+         return Math.max(yU, null !== (XU = this.fullUntil.get(UU)) && void 0 !== XU ? XU : 0, zU)
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6529-L6531` → after: `L6529-L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6529-L6531) · [Before (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6529-L6531)

```diff
-       firstFreeAt(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...MM.map((MM => this.freeAt(MM, rM))))
+       firstFreeAt(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...UU.map((UU => this.freeAt(UU, XU))))
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6536-L6538` → after: `L6536-L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6536-L6538) · [Before (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6536-L6538)

```diff
-       recent(MM, rM) {
-         var iM;
-         return (null !== (iM = this.calls.get(MM)) && void 0 !== iM ? iM : []).filter((MM => rM - MM < mj))
+       recent(UU, XU) {
+         var zU;
+         return (null !== (zU = this.calls.get(UU)) && void 0 !== zU ? zU : []).filter((UU => XU - UU < EQ))
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6542-L6543` → after: `L6542-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6542-L6543) · [Before (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6542-L6543)

```diff
-     function hj(MM) {
-       return MM > 36e5
+     function NQ(UU) {
+       return UU > 36e5
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6546-L6549` → after: `L6546-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6546-L6549) · [Before (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6546-L6549)

```diff
-     function Jj(MM, rM) {
-       var iM;
-       const OM = null === (iM = MM.headers.get(rM)) || void 0 === iM ? void 0 : iM.trim();
-       return void 0 !== OM && /^\d+$/.test(OM) ? Number(OM) : null
+     function IQ(UU, XU) {
+       var zU;
+       const cU = null === (zU = UU.headers.get(XU)) || void 0 === zU ? void 0 : zU.trim();
+       return void 0 !== cU && /^\d+$/.test(cU) ? Number(cU) : null
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6552-L6555` → after: `L6552-L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6552-L6555) · [Before (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6552-L6555)

```diff
-     function dj(MM) {
-       var rM;
-       const iM = null !== (rM = Jj(MM, "retry-after")) && void 0 !== rM ? rM : Jj(MM, "ratelimit-reset");
-       return null === iM ? null : 1e3 * iM
+     function pQ(UU) {
+       var XU;
+       const zU = null !== (XU = IQ(UU, "retry-after")) && void 0 !== XU ? XU : IQ(UU, "ratelimit-reset");
+       return null === zU ? null : 1e3 * zU
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6558-L6561` → after: `L6558-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6558-L6561) · [Before (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6558-L6561)

```diff
-     function yj(MM, rM) {
-       var iM;
-       const OM = null !== (iM = dj(rM)) && void 0 !== iM ? iM : 0;
-       (429 === rM.status || hj(OM) && 0 === Jj(rM, "ratelimit-remaining")) && Hj.markFull(MM, Date.now(), OM)
+     function aQ(UU, XU) {
+       var zU;
+       const cU = null !== (zU = pQ(XU)) && void 0 !== zU ? zU : 0;
+       (429 === XU.status || NQ(cU) && 0 === IQ(XU, "ratelimit-remaining")) && YQ.markFull(UU, Date.now(), cU)
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6564-L6567` → after: `L6564-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6564-L6567) · [Before (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6564-L6567)

```diff
-     function lj(MM) {
-       const rM = Date.now(),
-         iM = Hj.freeAt(MM, rM) - rM;
-       return iM <= 0 ? null : hj(iM) ? "unavailable" : "busy"
+     function tQ(UU) {
+       const XU = Date.now(),
+         zU = YQ.freeAt(UU, XU) - XU;
+       return zU <= 0 ? null : NQ(zU) ? "unavailable" : "busy"
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6570-L6571` → after: `L6570-L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6570-L6571) · [Before (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6570-L6571)

```diff
-     function Ej(MM, rM) {
-       return `${function(MM){var rM;if("string"===typeof MM)return MM;if(429!==MM.status)return`http-${MM.status}`;if(hj(null!==(rM=dj(MM))&&void 0!==rM?rM:0))return"yearly-limit";const iM=Jj(MM,"retry-after");return null===iM?"busy":`busy-ra${iM}`}(rM)}__${MM.replace(/[^A-Za-z0- … [truncated]
+     function gQ(UU, XU) {
+       return `${function(UU){var XU;if("string"===typeof UU)return UU;if(429!==UU.status)return`http-${UU.status}`;if(NQ(null!==(XU=pQ(UU))&&void 0!==XU?XU:0))return"yearly-limit";const zU=IQ(UU,"retry-after");return null===zU?"busy":`busy-ra${zU}`}(XU)}__${UU.replace(/[^A-Za-z0- … [truncated]
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6573-L6575` → after: `L6573-L6575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6573-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6573-L6575) · [Before (L6573-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6573-L6575)

```diff
-     const Uj = new class {
-         constructor(MM) {
-           this.loadReporter = MM, this.reportedCodes = new Set
+     const kQ = new class {
+         constructor(UU) {
+           this.loadReporter = UU, this.reportedCodes = new Set
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6577-L6579` → after: `L6577-L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6577-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6577-L6579) · [Before (L6577-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6577-L6579)

```diff
-         aL(MM, rM) {
-           const iM = Ej(MM, rM);
-           "undefined" === typeof window || this.reportedCodes.has(iM) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(iM), this.loadReporter().then((rM => {
+         oY(UU, XU) {
+           const zU = gQ(UU, XU);
+           "undefined" === typeof window || this.reportedCodes.has(zU) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(zU), this.loadReporter().then((XU => {
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6581-L6585` → after: `L6581-L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6581-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6581-L6585) · [Before (L6581-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6581-L6585)

```diff
-               reportCappedWasmFailure: OM
-             } = rM;
-             OM("ai_helper_failed", `World Code AI: ${MM} failed`, iM)
-           })).catch((MM => {
-             console.error("World Code AI: couldn't report a failure", MM)
+               reportCappedWasmFailure: cU
+             } = XU;
+             cU("ai_helper_failed", `World Code AI: ${UU} failed`, zU)
+           })).catch((UU => {
+             console.error("World Code AI: couldn't report a failure", UU)
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6588-L6600` → after: `L6588-L6600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6588-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6588-L6600) · [Before (L6588-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6588-L6600)

```diff
-       }((() => iM.e(218).then((() => iM(34877))))),
-       Gj = /\n{3,}/,
-       Cj = /<tool_call\b|<function=/;
- 
-     function ej(MM) {
-       const rM = MM.trimStart(),
-         iM = Gj.exec(rM),
-         OM = Cj.exec(rM);
-       if (null === iM || null !== OM && OM.index < iM.index) return null;
-       const SM = rM.slice(iM.index + iM[0].length);
-       return "" === SM.trim() ? null : SM
-     }
-     const bj = [{
+       }((() => zU.e(208).then((() => zU(34708))))),
+       GQ = /\n{3,}/,
+       BQ = /<tool_call\b|<function=/;
+ 
+     function ZQ(UU) {
+       const XU = UU.trimStart(),
+         zU = GQ.exec(XU),
+         cU = BQ.exec(XU);
+       if (null === zU || null !== cU && cU.index < zU.index) return null;
+       const yU = XU.slice(zU.index + zU[0].length);
+       return "" === yU.trim() ? null : yU
+     }
+     const RQ = [{
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6619` → after: `L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6619) · [Before (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6619)

```diff
-     const wj = {
+     const PQ = {
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6626-L6627` → after: `L6626-L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6626-L6627) · [Before (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6626-L6627)

```diff
-     function tj(MM) {
-       return [...bj, wj].find((rM => rM.name === MM))
+     function WQ(UU) {
+       return [...RQ, PQ].find((XU => XU.name === UU))
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6630-L6632` → after: `L6630-L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6630-L6632) · [Before (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6630-L6632)

```diff
-     function gj(MM) {
-       var rM, iM;
-       return null !== (rM = null === (iM = tj(MM)) || void 0 === iM ? void 0 : iM.callFormat) && void 0 !== rM ? rM : "simple"
+     function dQ(UU) {
+       var XU, zU;
+       return null !== (XU = null === (zU = WQ(UU)) || void 0 === zU ? void 0 : zU.callFormat) && void 0 !== XU ? XU : "simple"
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6635-L6636` → after: `L6635-L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6635-L6636) · [Before (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6635-L6636)

```diff
-     function uj(MM) {
-       var rM;
+     function LQ(UU) {
+       var XU;
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6638-L6639` → after: `L6638-L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6638-L6639) · [Before (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6638-L6639)

```diff
-         format: null !== (rM = MM.callFormat) && void 0 !== rM ? rM : "simple",
-         nativeTools: !0 === MM.nativeTools
+         format: null !== (XU = UU.callFormat) && void 0 !== XU ? XU : "simple",
+         nativeTools: !0 === UU.nativeTools
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6643-L6644` → after: `L6643-L6644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6643-L6644) · [Before (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6643-L6644)

```diff
-     function Rj(MM, rM) {
-       return "function" === typeof MM ? MM(rM) : MM
+     function eQ(UU, XU) {
+       return "function" === typeof UU ? UU(XU) : UU
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6646-L6652` → after: `L6646-L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6646-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6646-L6652) · [Before (L6646-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6646-L6652)

```diff
-     const pj = "TOO_COMPLEX",
-       Wj = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${pj} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       sj = 24e4,
-       Dj = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class kj extends Error {
-       constructor(MM) {
-         super(`World Code AI ${MM}`), this.reason = MM
+     const CQ = "TOO_COMPLEX",
+       wQ = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${CQ} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       qQ = 24e4,
+       OQ = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class SQ extends Error {
+       constructor(UU) {
+         super(`World Code AI ${UU}`), this.reason = UU
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6656-L6658` → after: `L6656-L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6656-L6658) · [Before (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6656-L6658)

```diff
-     function Zj(MM, rM) {
-       var iM, OM, SM, jM, aM;
-       const PM = MM[null !== (iM = rM.index) && void 0 !== iM ? iM : 0] ??= {
+     function rQ(UU, XU) {
+       var zU, cU, yU, QU, AU;
+       const FU = UU[null !== (zU = XU.index) && void 0 !== zU ? zU : 0] ??= {
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6662` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6662) · [Before (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6662)

```diff
-       PM.name += null !== (OM = null === (SM = rM.function) || void 0 === SM ? void 0 : SM.name) && void 0 !== OM ? OM : "", PM.args += null !== (jM = null === (aM = rM.function) || void 0 === aM ? void 0 : aM.arguments) && void 0 !== jM ? jM : ""
+       FU.name += null !== (cU = null === (yU = XU.function) || void 0 === yU ? void 0 : yU.name) && void 0 !== cU ? cU : "", FU.args += null !== (QU = null === (AU = XU.function) || void 0 === AU ? void 0 : AU.arguments) && void 0 !== QU ? QU : ""
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6665-L6666` → after: `L6665-L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6665-L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6665-L6666) · [Before (L6665-L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6665-L6666)

```diff
-     function oj(MM) {
-       return "mcp" === MM ? "simple" : MM
+     function uQ(UU) {
+       return "mcp" === UU ? "simple" : UU
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6669-L6671` → after: `L6669-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6669-L6671) · [Before (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6669-L6671)

```diff
-     function fj(MM, rM, iM, OM) {
-       let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return Yj(MM, rM, iM, oj(OM), SM).answer
+     function fQ(UU, XU, zU, cU) {
+       let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return iQ(UU, XU, zU, uQ(cU), yU).answer
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6674-L6677` → after: `L6674-L6677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6674-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6674-L6677) · [Before (L6674-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6674-L6677)

```diff
-     function Yj(MM, rM, iM, OM, SM) {
-       const jM = iM.flatMap((MM => {
-         const rM = mi(MM.name, MM.args);
-         return null === rM ? [] : [nS(Oi(OM), rM.name, rM.args)]
+     function iQ(UU, XU, zU, cU, yU) {
+       const QU = zU.flatMap((UU => {
+         const XU = Nz(UU.name, UU.args);
+         return null === XU ? [] : [Ay(cz(cU), XU.name, XU.args)]
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6679-L6686` → after: `L6679-L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6679-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6679-L6686) · [Before (L6679-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6679-L6686)

```diff
-       let aM = !1;
-       return 0 !== jM.length || 0 !== Ji(MM, OM).length || MM.includes("```") || (jM.push(...SM ? [] : function(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const OM = new Map;
-         for (const PM of Hi(MM, rM)) {
-           const MM = Object.values(PM.args).some((MM => void 0 !== MM && iM.includes(MM.trim())));
-           var SM, jM, aM;
-           "export_game" === PM.name || "switch_to_world_code" === PM.name || br(PM.name) || MM || OM.set(`${PM.name} ${null!==(SM=PM.args.path)&&void 0!==SM?SM:""} ${null!==(jM=PM.args.search)&&void 0!==jM?jM:""} ${null!==(aM=PM.args.name)&&void 0!==aM?aM:""}`, PM.source)
+       let AU = !1;
+       return 0 !== QU.length || 0 !== pz(UU, cU).length || UU.includes("```") || (QU.push(...yU ? [] : function(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const cU = new Map;
+         for (const FU of Iz(UU, XU)) {
+           const UU = Object.values(FU.args).some((UU => void 0 !== UU && zU.includes(UU.trim())));
+           var yU, QU, AU;
+           "export_game" === FU.name || "switch_to_world_code" === FU.name || WX(FU.name) || UU || cU.set(`${FU.name} ${null!==(yU=FU.args.path)&&void 0!==yU?yU:""} ${null!==(QU=FU.args.search)&&void 0!==QU?QU:""} ${null!==(AU=FU.args.name)&&void 0!==AU?AU:""}`, FU.source)
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6688-L6691` → after: `L6688-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6688-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6688-L6691) · [Before (L6688-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6688-L6691)

```diff
-         return [...new Set(OM.values())]
-       }(rM, OM, US)), aM = jM.length > 0), {
-         answer: [MM, ...jM].join("\n\n").trim(),
-         hasCallsFromReasoning: aM
+         return [...new Set(cU.values())]
+       }(XU, cU, ky)), AU = QU.length > 0), {
+         answer: [UU, ...QU].join("\n\n").trim(),
+         hasCallsFromReasoning: AU
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6694-L6697` → after: `L6694-L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6694-L6697) · [Before (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6694-L6697)

```diff
-     async function Nj(MM, rM) {
-       const iM = MM.getReader(),
-         OM = new TextDecoder;
-       let SM = "";
+     async function HQ(UU, XU) {
+       const zU = UU.getReader(),
+         cU = new TextDecoder;
+       let yU = "";
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6700-L6704` → after: `L6700-L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6700-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6700-L6704) · [Before (L6700-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6700-L6704)

```diff
-           done: MM,
-           value: jM
-         } = await iM.read();
-         if (MM) break;
-         SM += OM.decode(jM, {
+           done: UU,
+           value: QU
+         } = await zU.read();
+         if (UU) break;
+         yU += cU.decode(QU, {
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6707-L6713` → after: `L6707-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6707-L6713) · [Before (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6707-L6713)

```diff
-         let aM = SM.indexOf("\n");
-         for (; - 1 !== aM;) {
-           const MM = SM.slice(0, aM).trim();
-           if (SM = SM.slice(aM + 1), aM = SM.indexOf("\n"), !MM.startsWith("data:")) continue;
-           const iM = MM.slice(5).trim();
-           if ("[DONE]" === iM) return;
-           let OM;
+         let AU = yU.indexOf("\n");
+         for (; - 1 !== AU;) {
+           const UU = yU.slice(0, AU).trim();
+           if (yU = yU.slice(AU + 1), AU = yU.indexOf("\n"), !UU.startsWith("data:")) continue;
+           const zU = UU.slice(5).trim();
+           if ("[DONE]" === zU) return;
+           let cU;
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6715` → after: `L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6715) · [Before (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6715)

```diff
-             OM = JSON.parse(iM)
+             cU = JSON.parse(zU)
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6719` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6719) · [Before (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6719)

```diff
-           rM(OM)
+           XU(cU)
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6724-L6725` → after: `L6724-L6725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6724-L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6724-L6725) · [Before (L6724-L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6724-L6725)

```diff
-     function Aj(MM) {
-       return MM.map((MM => ({
+     function MQ(UU) {
+       return UU.map((UU => ({
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6728-L6730` → after: `L6728-L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6728-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6728-L6730) · [Before (L6728-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6728-L6730)

```diff
-           name: MM.name,
-           description: MM.description,
-           parameters: MM.inputSchema
+           name: UU.name,
+           description: UU.description,
+           parameters: UU.inputSchema
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6735-L6736` → after: `L6735-L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6735-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6735-L6736) · [Before (L6735-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6735-L6736)

```diff
-     function xj(MM) {
-       return "object" === typeof MM
+     function vQ(UU) {
+       return "object" === typeof UU
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6738-L6743` → after: `L6738-L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6738-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6738-L6743) · [Before (L6738-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6738-L6743)

```diff
-     async function vj(MM, rM, iM, OM) {
-       let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const jM = lj(MM.name);
-       if (null !== jM) return jM;
-       Hj.record(MM.name);
-       const aM = await fetch(xS, {
+     async function VQ(UU, XU, zU, cU) {
+       let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const QU = tQ(UU.name);
+       if (null !== QU) return QU;
+       YQ.record(UU.name);
+       const AU = await fetch(vy, {
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6749-L6750` → after: `L6749-L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6749-L6750) · [Before (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6749-L6750)

```diff
-           model: MM.name,
-           messages: rM,
+           model: UU.name,
+           messages: XU,
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6752-L6753` → after: `L6752-L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6752-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6752-L6753) · [Before (L6752-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6752-L6753)

```diff
-           temperature: MM.temperature,
-           reasoning_effort: MM.reasoningEffort,
+           temperature: UU.temperature,
+           reasoning_effort: UU.reasoningEffort,
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6758-L6759` → after: `L6758-L6759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6758-L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6758-L6759) · [Before (L6758-L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6758-L6759)

```diff
-           ...MM.nativeTools && SM.length > 0 ? {
-             tools: Aj(SM)
+           ...UU.nativeTools && yU.length > 0 ? {
+             tools: MQ(yU)
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6764` → after: `L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6764) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6764)

```diff
-         signal: iM
+         signal: zU
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6766-L6774` → after: `L6766-L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6766-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6766-L6774) · [Before (L6766-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6766-L6774)

```diff
-       if (yj(MM.name, aM), 429 === aM.status) return Uj.aL(MM.name, aM), "unavailable" === lj(MM.name) ? "unavailable" : "busy";
-       if (!aM.ok || !aM.body) return console.warn(`World Code AI: ${MM.name} answered ${aM.status}`), Uj.aL(MM.name, aM.ok ? "empty" : aM), aM.ok ? "failed" : 429 === (PM = aM.status) ? "busy" : 400 === PM || 413 === PM ? "tooLarge" : 401 === PM || 403 === PM ? "turnedAway" : "fa … [truncated]
-       var PM;
-       let nM = "",
-         QM = "";
-       const zM = [];
-       let LM = !1,
-         mM = !1,
-         HM = null;
+       if (aQ(UU.name, AU), 429 === AU.status) return kQ.oY(UU.name, AU), "unavailable" === tQ(UU.name) ? "unavailable" : "busy";
+       if (!AU.ok || !AU.body) return console.warn(`World Code AI: ${UU.name} answered ${AU.status}`), kQ.oY(UU.name, AU.ok ? "empty" : AU), AU.ok ? "failed" : 429 === (FU = AU.status) ? "busy" : 400 === FU || 413 === FU ? "tooLarge" : 401 === FU || 403 === FU ? "turnedAway" : "fa … [truncated]
+       var FU;
+       let oU = "",
+         DU = "";
+       const EU = [];
+       let YU = !1,
+         NU = !1,
+         IU = null;
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6776-L6782` → after: `L6776-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6776-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6776-L6782) · [Before (L6776-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6776-L6782)

```diff
-         await async function(MM, rM, iM) {
-           await Nj(MM, (MM => {
-             var OM;
-             const SM = MM,
-               jM = null === (OM = SM.choices) || void 0 === OM ? void 0 : OM[0];
-             var aM, PM;
-             jM && rM(null !== (aM = jM.delta) && void 0 !== aM ? aM : {}, null !== (PM = jM.finish_reason) && void 0 !== PM ? PM : null), SM.usage && (null === iM || void 0 === iM || iM(SM.usage))
+         await async function(UU, XU, zU) {
+           await HQ(UU, (UU => {
+             var cU;
+             const yU = UU,
+               QU = null === (cU = yU.choices) || void 0 === cU ? void 0 : cU[0];
+             var AU, FU;
+             QU && XU(null !== (AU = QU.delta) && void 0 !== AU ? AU : {}, null !== (FU = QU.finish_reason) && void 0 !== FU ? FU : null), yU.usage && (null === zU || void 0 === zU || zU(yU.usage))
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6784-L6789` → after: `L6784-L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6784-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6784-L6789) · [Before (L6784-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6784-L6789)

```diff
-         }(aM.body, ((rM, iM) => {
-           var SM, jM, aM, PM;
-           LM ||= "length" === iM, QM += null !== (SM = null !== (jM = rM.reasoning) && void 0 !== jM ? jM : rM.reasoning_content) && void 0 !== SM ? SM : "", nM += null !== (aM = rM.content) && void 0 !== aM ? aM : "";
-           for (const MM of null !== (HM = rM.tool_calls) && void 0 !== HM ? HM : []) {
-             var HM;
-             mM ||= "" !== QM && "" === nM.trim(), Zj(zM, MM)
+         }(AU.body, ((XU, zU) => {
+           var yU, QU, AU, FU;
+           YU ||= "length" === zU, DU += null !== (yU = null !== (QU = XU.reasoning) && void 0 !== QU ? QU : XU.reasoning_content) && void 0 !== yU ? yU : "", oU += null !== (AU = XU.content) && void 0 !== AU ? AU : "";
+           for (const UU of null !== (IU = XU.tool_calls) && void 0 !== IU ? IU : []) {
+             var IU;
+             NU ||= "" !== DU && "" === oU.trim(), rQ(EU, UU)
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6791-L6796` → after: `L6791-L6796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6791-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6791-L6796) · [Before (L6791-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6791-L6796)

```diff
-           const hM = MM.nativeTools && mM ? null !== (PM = ej(nM)) && void 0 !== PM ? PM : "" : nM;
-           null === OM || void 0 === OM || OM({
-             model: MM.name,
-             reasoningChars: QM.length,
-             answer: hM,
-             isCalling: zM.length > 0
+           const pU = UU.nativeTools && NU ? null !== (FU = ZQ(oU)) && void 0 !== FU ? FU : "" : oU;
+           null === cU || void 0 === cU || cU({
+             model: UU.name,
+             reasoningChars: DU.length,
+             answer: pU,
+             isCalling: EU.length > 0
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6798-L6799` → after: `L6798-L6799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6798-L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6798-L6799) · [Before (L6798-L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6798-L6799)

```diff
-         }), (MM => {
-           HM = MM
+         }), (UU => {
+           IU = UU
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6802` → after: `L6802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6802) · [Before (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6802)

```diff
-         Qj(HM, rM, nM + QM, 20 * zM.length)
+         FQ(IU, XU, oU + DU, 20 * EU.length)
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6804-L6821` → after: `L6804-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6804-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6804-L6821) · [Before (L6804-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6804-L6821)

```diff
-       const hM = Fj(MM, nM, QM, zM, LM, mM);
-       return null === hM ? (Uj.aL(MM.name, "empty"), "failed") : hM
-     }
- 
-     function Fj(MM, rM, iM, OM, SM) {
-       var jM;
-       let aM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         PM = rM;
-       var nM;
-       MM.nativeTools && aM && (PM = null !== (nM = ej(PM)) && void 0 !== nM ? nM : PM);
-       PM = PM.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const QM = Yj(PM, iM, OM, null !== (jM = MM.callFormat) && void 0 !== jM ? jM : "simple", SM);
-       return "" === QM.answer ? null : {
-         model: MM.name,
-         answer: QM.answer,
-         reasoning: iM,
- ... (2 more removed lines; see GitHub link above)
+       const pU = sQ(UU, oU, DU, EU, YU, NU);
+       return null === pU ? (kQ.oY(UU.name, "empty"), "failed") : pU
+     }
+ 
+     function sQ(UU, XU, zU, cU, yU) {
+       var QU;
+       let AU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         FU = XU;
+       var oU;
+       UU.nativeTools && AU && (FU = null !== (oU = ZQ(FU)) && void 0 !== oU ? oU : FU);
+       FU = FU.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const DU = iQ(FU, zU, cU, null !== (QU = UU.callFormat) && void 0 !== QU ? QU : "simple", yU);
+       return "" === DU.answer ? null : {
+         model: UU.name,
+         answer: DU.answer,
+         reasoning: zU,
+ ... (2 more added lines; see GitHub link above)
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6825-L6826` → after: `L6825-L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6825-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6825-L6826) · [Before (L6825-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6825-L6826)

```diff
-     function Bj(MM) {
-       return MM.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     function nQ(UU) {
+       return UU.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6829-L6830` → after: `L6829-L6830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6829-L6830) · [Before (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6829-L6830)

```diff
-     function Xj(MM) {
-       return xj(MM) && !MM.isCutShort
+     function mQ(UU) {
+       return vQ(UU) && !UU.isCutShort
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6832-L6835` → after: `L6832-L6835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6832-L6835) · [Before (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6832-L6835)

```diff
-     async function Ij(MM, rM, iM, OM, SM) {
-       const jM = MM.map((() => new AbortController)),
-         aM = () => {
-           for (const MM of jM) MM.abort()
+     async function lQ(UU, XU, zU, cU, yU) {
+       const QU = UU.map((() => new AbortController)),
+         AU = () => {
+           for (const UU of QU) UU.abort()
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6837` → after: `L6837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6837) · [Before (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6837)

```diff
-       null !== iM && void 0 !== iM && iM.aborted && aM(), null === iM || void 0 === iM || iM.addEventListener("abort", aM, {
+       null !== zU && void 0 !== zU && zU.aborted && AU(), null === zU || void 0 === zU || zU.addEventListener("abort", AU, {
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6840-L6854` → after: `L6840-L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6840-L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6840-L6854) · [Before (L6840-L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6840-L6854)

```diff
-       const PM = MM.map((() => {})),
-         nM = MM.map((() => {}));
-       let QM = null;
-       const zM = MM => void 0 !== MM && ("" !== Bj(MM.answer).trim() || !0 === MM.isCalling);
-       let LM = () => {};
-       MM.forEach(((MM, iM) => {
-         const aM = (0, lM.b)(sj, jM[iM].signal);
-         vj(MM, Rj(rM, MM), aM.signal, (MM => {
-           nM[iM] = MM, null === QM && zM(MM) && (QM = iM), QM === iM && (null === OM || void 0 === OM || OM(MM))
-         }), SM).catch((rM => {
-           if (jM[iM].signal.aborted) return "failed";
-           const OM = aM.signal.aborted;
-           return console.warn(`World Code AI: ${MM.name} ${OM?"took longer than 240 s":"couldn't be reached"}`, rM), Uj.aL(MM.name, OM ? "timeout" : "network"), OM ? "timeout" : "failed"
-         })).then((MM => {
-           aM.clear(), PM[iM] = MM, QM !== iM || Xj(MM) || (QM = null), LM()
+       const FU = UU.map((() => {})),
+         oU = UU.map((() => {}));
+       let DU = null;
+       const EU = UU => void 0 !== UU && ("" !== nQ(UU.answer).trim() || !0 === UU.isCalling);
+       let YU = () => {};
+       UU.forEach(((UU, zU) => {
+         const AU = (0, kU.b)(qQ, QU[zU].signal);
+         VQ(UU, eQ(XU, UU), AU.signal, (UU => {
+           oU[zU] = UU, null === DU && EU(UU) && (DU = zU), DU === zU && (null === cU || void 0 === cU || cU(UU))
+         }), yU).catch((XU => {
+           if (QU[zU].signal.aborted) return "failed";
+           const cU = AU.signal.aborted;
+           return console.warn(`World Code AI: ${UU.name} ${cU?"took longer than 240 s":"couldn't be reached"}`, XU), kQ.oY(UU.name, cU ? "timeout" : "network"), cU ? "timeout" : "failed"
+         })).then((UU => {
+           AU.clear(), FU[zU] = UU, DU !== zU || mQ(UU) || (DU = null), YU()
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6857-L6862` → after: `L6857-L6862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6857-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6857-L6862) · [Before (L6857-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6857-L6862)

```diff
-       const mM = () => {
-         var MM;
-         if (null !== QM) {
-           const MM = PM[QM];
-           return Xj(MM) ? {
-             reply: MM
+       const NU = () => {
+         var UU;
+         if (null !== DU) {
+           const UU = FU[DU];
+           return mQ(UU) ? {
+             reply: UU
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6865-L6867` → after: `L6865-L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6865-L6867) · [Before (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6865-L6867)

```diff
-         const rM = PM.find(Xj);
-         if (rM) return {
-           reply: rM
+         const XU = FU.find(mQ);
+         if (XU) return {
+           reply: XU
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6869-L6870` → after: `L6869-L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6869-L6870) · [Before (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6869-L6870)

```diff
-         if (!PM.includes(void 0)) return {
-           reply: null !== (MM = PM.find(xj)) && void 0 !== MM ? MM : null
+         if (!FU.includes(void 0)) return {
+           reply: null !== (UU = FU.find(vQ)) && void 0 !== UU ? UU : null
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6873-L6877` → after: `L6873-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6873-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6873-L6877) · [Before (L6873-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6873-L6877)

```diff
-           const MM = PM.findIndex(((MM, rM) => void 0 === MM && zM(nM[rM])));
-           if (-1 !== MM) {
-             QM = MM;
-             const rM = nM[MM];
-             rM && (null === OM || void 0 === OM || OM(rM))
+           const UU = FU.findIndex(((UU, XU) => void 0 === UU && EU(oU[XU])));
+           if (-1 !== UU) {
+             DU = UU;
+             const XU = oU[UU];
+             XU && (null === cU || void 0 === cU || cU(XU))
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6883-L6886` → after: `L6883-L6886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6883-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6883-L6886) · [Before (L6883-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6883-L6886)

```diff
-           if (null !== iM && void 0 !== iM && iM.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const MM = mM();
-           if (MM) {
-             const rM = PM.filter((MM => "string" === typeof MM));
+           if (null !== zU && void 0 !== zU && zU.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const UU = NU();
+           if (UU) {
+             const XU = FU.filter((UU => "string" === typeof UU));
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6888-L6889` → after: `L6888-L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6888-L6889) · [Before (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6888-L6889)

```diff
-               reply: MM.reply,
-               failures: rM
+               reply: UU.reply,
+               failures: XU
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6892-L6893` → after: `L6892-L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6892-L6893) · [Before (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6892-L6893)

```diff
-           await new Promise((MM => {
-             LM = MM
+           await new Promise((UU => {
+             YU = UU
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6897` → after: `L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6897) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6897)

```diff
-         null === iM || void 0 === iM || iM.removeEventListener("abort", aM), aM()
+         null === zU || void 0 === zU || zU.removeEventListener("abort", AU), AU()
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6901-L6916` → after: `L6901-L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6901-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6901-L6916) · [Before (L6901-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6901-L6916)

```diff
-     function Kj() {
-       let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       const rM = Hj.firstFreeAt(bj.map((MM => MM.name)), MM);
-       return hj(rM - MM) ? MM : rM
-     }
-     async function qj(MM) {
-       var rM;
-       let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const OM = Date.now(),
-         SM = null !== (rM = iM.models) && void 0 !== rM ? rM : bj,
-         jM = void 0 === iM.models ? function(MM, rM) {
-           let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-           const OM = MM.map((MM => ({
-               model: MM,
-               key: iM()
-             }))).sort(((MM, rM) => MM.key - rM.key)).map((MM => {
+     function xQ() {
+       let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const XU = YQ.firstFreeAt(RQ.map((UU => UU.name)), UU);
+       return NQ(XU - UU) ? UU : XU
+     }
+     async function JQ(UU) {
+       var XU;
+       let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const cU = Date.now(),
+         yU = null !== (XU = zU.models) && void 0 !== XU ? XU : RQ,
+         QU = void 0 === zU.models ? function(UU, XU) {
+           let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+           const cU = UU.map((UU => ({
+               model: UU,
+               key: zU()
+             }))).sort(((UU, XU) => UU.key - XU.key)).map((UU => {
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6918-L6920` → after: `L6918-L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6918-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6918-L6920) · [Before (L6918-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6918-L6920)

```diff
-                 model: rM
-               } = MM;
-               return rM
+                 model: XU
+               } = UU;
+               return XU
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6922-L6933` → after: `L6922-L6936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6922-L6936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6922-L6936) · [Before (L6922-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6922-L6933)

```diff
-             SM = [...OM.filter((MM => rM(MM))), ...OM.filter((MM => !rM(MM)))],
-             jM = [];
-           for (let aM = 0; aM < SM.length; aM += 2) jM.push(SM.slice(aM, aM + 2));
-           return jM
-         }(SM, (MM => Hj.freeAt(MM.name) <= OM)) : SM.map((MM => [MM])),
-         aM = [];
-       for (const nM of jM) {
-         const rM = await Ij(nM, MM, iM.signal, iM.onProgress, iM.tools);
-         if (null !== rM.reply) {
-           const SM = nM.find((MM => {
-             var iM;
-             return MM.name === (null === (iM = rM.reply) || void 0 === iM ? void 0 : iM.model)
+             yU = [],
+             QU = [];
+           for (const oU of cU) XU(oU) ? yU.push(oU) : QU.push(oU);
+           const AU = [...yU, ...QU],
+             FU = [];
+           for (let oU = 0; oU < AU.length; oU += 2) FU.push(AU.slice(oU, oU + 2));
+           return FU
+         }(yU, (UU => YQ.freeAt(UU.name, cU) <= cU)) : yU.map((UU => [UU])),
+         AU = [];
+       for (const oU of QU) {
+         const XU = await lQ(oU, UU, zU.signal, zU.onProgress, zU.tools);
+         if (null !== XU.reply) {
+           const yU = oU.find((UU => {
+             var zU;
+             return UU.name === (null === (zU = XU.reply) || void 0 === zU ? void 0 : zU.model)
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6936-L6937` → after: `L6939-L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6939-L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6939-L6940) · [Before (L6936-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6936-L6937)

```diff
-             ...SM && !1 !== iM.canNudge ? await cj(SM, Rj(MM, SM), rM.reply, iM.signal, iM.onProgress, iM.tools) : rM.reply,
-             ms: Date.now() - OM
+             ...yU && !1 !== zU.canNudge ? await bQ(yU, eQ(UU, yU), XU.reply, zU.signal, zU.onProgress, zU.tools) : XU.reply,
+             ms: Date.now() - cU
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6940` → after: `L6943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6943) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6940)

```diff
-         aM.push(...rM.failures)
+         AU.push(...XU.failures)
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6942-L6943` → after: `L6945-L6946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6945-L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6945-L6946) · [Before (L6942-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6942-L6943)

```diff
-       const PM = Dj.find((MM => aM.includes(MM)));
-       throw new kj(null !== PM && void 0 !== PM ? PM : "failed")
+       const FU = OQ.find((UU => AU.includes(UU)));
+       throw new SQ(null !== FU && void 0 !== FU ? FU : "failed")
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6945` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6948) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6945)

```diff
-     const Tj = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const jQ = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6947-L6949` → after: `L6950-L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6950-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6950-L6952) · [Before (L6947-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6947-L6949)

```diff
-     function Vj(MM) {
-       const rM = MM.trim();
-       return rM.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(rM) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(rM) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function KQ(UU) {
+       const XU = UU.trim();
+       return XU.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(XU) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(XU) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6956` → after: `L6959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6959) · [Before (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6956)

```diff
-         }(iM, null !== (aM = MM.callFormat) && void 0 !== aM ? aM : "simple")) return iM;
+         }(zU, null !== (AU = UU.callFormat) && void 0 !== AU ? AU : "simple")) return zU;
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6967` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6970) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6967)

```diff
-         return xj(rM) && "" !== rM.answer.trim() ? rM : iM
+         return vQ(XU) && "" !== XU.answer.trim() ? XU : zU
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L6970` → after: `L6973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L6973) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L6970)

```diff
-         return Uj.aL(MM.name, QM.signal.aborted ? "timeout" : "network"), iM
+         return kQ.oY(UU.name, DU.signal.aborted ? "timeout" : "network"), zU
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7023-L7024` → after: `L7026-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7026-L7027) · [Before (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7023-L7024)

```diff
-         if (yj(MM, iM), 429 === iM.status) return Uj.aL(MM, iM), "busy";
-         if (!iM.ok) return Uj.aL(MM, iM), null;
+         if (aQ(UU, zU), 429 === zU.status) return kQ.oY(UU, zU), "busy";
+         if (!zU.ok) return kQ.oY(UU, zU), null;
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7026` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7029) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7026)

```diff
-           QM = String(null !== (SM = null === (jM = nM.choices) || void 0 === jM || null === (aM = jM[0]) || void 0 === aM || null === (PM = aM.message) || void 0 === PM ? void 0 : PM.content) && void 0 !== SM ? SM : "");
+           DU = String(null !== (yU = null === (QU = oU.choices) || void 0 === QU || null === (AU = QU[0]) || void 0 === AU || null === (FU = AU.message) || void 0 === FU ? void 0 : FU.content) && void 0 !== yU ? yU : "");
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7030` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7033) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7030)

```diff
-           }(QM) ? QM : null
+           }(DU) ? DU : null
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7033` → after: `L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7036) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7033)

```diff
-         return Uj.aL(MM, OM.signal.aborted ? "timeout" : "network"), null
+         return kQ.oY(UU, cU.signal.aborted ? "timeout" : "network"), null
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7038` → after: `L7041-L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7041-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7041-L7042) · [Before (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7038)

```diff
-     var ja = iM(30);
+     var cA = zU(42),
+       yA = zU(37570);
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7042-L7043` → after: `L7046-L7047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7046-L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7046-L7047) · [Before (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7042-L7043)

```diff
-       const MM = ja.g.getItem(aa);
-       return null !== MM && "object" === typeof MM ? MM : {}
+       const UU = cA.k.getItem(QA);
+       return null !== UU && "object" === typeof UU ? UU : {}
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7053` → after: `L7057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7057) · [Before (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7053)

```diff
-         return null === this.player ? null : null !== (MM = null !== (rM = this.unsaved.get(this.player)) && void 0 !== rM ? rM : Pa()[this.player]) && void 0 !== MM ? MM : null
+         return null === this.player ? null : null !== (UU = null !== (XU = this.unsaved.get(this.player)) && void 0 !== XU ? XU : AA()[this.player]) && void 0 !== UU ? UU : null
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7064-L7065` → after: `L7068-L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7068-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7068-L7069) · [Before (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7064-L7065)

```diff
-           } = await Promise.resolve().then((() => iM(1144)));
-           return null !== (MM = null === (rM = OM.peekCurrentUserContext()) || void 0 === rM ? void 0 : rM.whamm) && void 0 !== MM ? MM : null
+           } = await Promise.resolve().then((() => zU(1131)));
+           return null !== (UU = null === (XU = cU.peekCurrentUserContext()) || void 0 === XU ? void 0 : XU.whamm) && void 0 !== UU ? UU : null
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7070` → after: `L7074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7074) · [Before (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7070)

```diff
-         null !== this.player && (ja.g.setItem(aa, {
+         null !== this.player && (cA.k.setItem(QA, {
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7093` → after: `L7097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7097) · [Before (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7093)

```diff
-       const iM = `\n[... ${MM.length-rM} more characters cut]`;
+       const zU = `\n[... ${UU.length-XU} more characters cut]`;
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7098-L7099` → after: `L7102-L7103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7102-L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7102-L7103) · [Before (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7098-L7099)

```diff
-     var da = iM(632),
-       ya = iM(4752);
+     var aA = zU(654),
+       tA = zU(4790);
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7121` → after: `L7125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7125) · [Before (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7121)

```diff
-         clientVersion: String(da.c),
+         clientVersion: String(aA.d),
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7136` → after: `L7140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7140) · [Before (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7136)

```diff
-         this.aL = MM, this.chatId = (0, ya.e)(12), this.open = new Map
+         this.oY = UU, this.chatId = (0, tA.e)(12), this.open = new Map
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7140` → after: `L7144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7144) · [Before (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7140)

```diff
-         iM && (clearTimeout(iM.timer), rM || (this.open.delete(MM), this.send(iM.aL)))
+         zU && (clearTimeout(zU.timer), XU || (this.open.delete(UU), this.send(zU.oY)))
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7145` → after: `L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7149) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7145)

```diff
-         if (OM) return void(OM.aL.responses.length < Ha && OM.aL.responses.push(Ua(iM)));
+         if (cU) return void(cU.oY.responses.length < NA && cU.oY.responses.push(GA(zU)));
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7148` → after: `L7152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7152) · [Before (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7148)

```diff
-           aL: SM
+           oY: yU
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7158` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7162) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7158)

```diff
-           this.open.delete(MM), this.send(rM.aL)
+           this.open.delete(UU), this.send(XU.oY)
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7164` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7168) · [Before (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7164)

```diff
-         })(MM) && this.aL(MM)
+         })(UU) && this.oY(UU)
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7179` → after: `L7183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7183) · [Before (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7179)

```diff
-             aL: rM
+             oY: XU
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7190` → after: `L7194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7194) · [Before (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7190)

```diff
-       "yes" === MM && iM.length > 0 && ga(iM.map((MM => MM.aL)))
+       "yes" === UU && zU.length > 0 && LA(zU.map((UU => UU.oY)))
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7193` → after: `L7197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7197) · [Before (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7193)

```diff
-       const rM = Promise.resolve().then((() => iM(44136)));
+       const XU = Promise.resolve().then((() => zU(44159)));
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7203-L7204` → after: `L7207-L7208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7207-L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7207-L7208) · [Before (L7203-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7203-L7204)

```diff
-     var ua = iM(332),
-       Ra = iM(143);
+     var eA = zU(344),
+       CA = zU(173);
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7261` → after: `L7265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7265) · [Before (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7261)

```diff
-       return "https:" !== rM.protocol && ("http:" !== rM.protocol || !iM) || rM.username || rM.password || rM.search ? null : `${rM.origin}${rM.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== XU.protocol && ("http:" !== XU.protocol || !zU) || XU.username || XU.password || XU.search ? null : `${XU.origin}${XU.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7270` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7274) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7270)

```diff
-         super(`AI key request: ${MM}`), this.problem = MM, this.retryAfterMs = rM, this.status = iM, this.detail = OM
+         super(`AI key request: ${UU}`), this.problem = UU, this.retryAfterMs = XU, this.status = zU, this.detail = cU
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7275` → after: `L7279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7279) · [Before (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7275)

```diff
-       return ("" === rM ? MM : MM.split(rM).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === XU ? UU : UU.split(XU).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7282` → after: `L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7286) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7282)

```diff
-           return `${iM} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${zU} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7286` → after: `L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7290) · [Before (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7286)

```diff
-           return `${iM} can't find that model. Check its name.`;
+           return `${zU} can't find that model. Check its name.`;
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7288` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7292) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7288)

```diff
-           return "anthropic" === rM ? "Claude didn't accept your key: check it, or make a new one." : "custom" === rM ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === XU ? "Claude didn't accept your key: check it, or make a new one." : "custom" === XU ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7290` → after: `L7294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7294) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7290)

```diff
-           return "custom" === rM ? "That server stopped your key for now: it has used all it can." : `${iM} stopped your key for now: it has used all it can. Check it on ${iM}'s website.`;
+           return "custom" === XU ? "That server stopped your key for now: it has used all it can." : `${zU} stopped your key for now: it has used all it can. Check it on ${zU}'s website.`;
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7292` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7296) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7292)

```diff
-           return `${iM} doesn't work from where you are.`;
+           return `${zU} doesn't work from where you are.`;
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7296` → after: `L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7300) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7296)

```diff
-           return `${iM} had a problem with that. Try again in a minute.`
+           return `${zU} had a problem with that. Try again in a minute.`
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7322` → after: `L7326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7326) · [Before (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7322)

```diff
-         }(rM)) throw new Error(`AI key request to an unknown host for ${MM}`);
+         }(XU)) throw new Error(`AI key request to an unknown host for ${UU}`);
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7331` → after: `L7335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7335) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7331)

```diff
-         throw console.warn(`AI key request: ${MM} answered ${SM.status}`), new fa(function(MM, rM, iM) {
+         throw console.warn(`AI key request: ${UU} answered ${yU.status}`), new iA(function(UU, XU, zU) {
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7338` → after: `L7342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7342) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7338)

```diff
-           return Number.isFinite(iM) ? 1e3 * iM : Math.max(0, Date.parse(rM) - Date.now()) || void 0
+           return Number.isFinite(zU) ? 1e3 * zU : Math.max(0, Date.parse(XU) - Date.now()) || void 0
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7345` → after: `L7349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7349) · [Before (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7345)

```diff
-             iM = "string" === typeof SM ? SM : MM
+             zU = "string" === typeof yU ? yU : UU
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7394` → after: `L7398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7398) · [Before (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7394)

```diff
-         lOM: aM,
+         FyU: AU,
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7402` → after: `L7406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7406) · [Before (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7402)

```diff
-         const aM = null !== (iM = null === (OM = MM.match(/```/g)) || void 0 === OM ? void 0 : OM.length) && void 0 !== iM ? iM : 0,
+         const AU = null !== (zU = null === (cU = UU.match(/```/g)) || void 0 === cU ? void 0 : cU.length) && void 0 !== zU ? zU : 0,
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7415` → after: `L7419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7419) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7415)

```diff
-         written: PM ? LM : void 0,
+         written: FU ? YU : void 0,
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7427` → after: `L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7431) · [Before (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7427)

```diff
-       const OM = null !== (iM = rM.tools) && void 0 !== iM ? iM : [];
+       const cU = null !== (zU = XU.tools) && void 0 !== zU ? zU : [];
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7478` → after: `L7482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7482) · [Before (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7478)

```diff
-             models: (null !== (rM = (await iM.json()).data) && void 0 !== rM ? rM : []).map((MM => ({
+             models: (null !== (XU = (await zU.json()).data) && void 0 !== XU ? XU : []).map((UU => ({
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7505` → after: `L7509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7509) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7505)

```diff
-           return await Nj(null !== (SM = jM.body) && void 0 !== SM ? SM : new ReadableStream, (rM => {
+           return await HQ(null !== (yU = QU.body) && void 0 !== yU ? yU : new ReadableStream, (XU => {
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7510-L7511` → after: `L7514-L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7514-L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7514-L7515) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7510-L7511)

```diff
-             PM += null !== (SM = null !== (jM = null === yM || void 0 === yM || null === (LM = yM.delta) || void 0 === LM ? void 0 : LM.reasoning) && void 0 !== jM ? jM : null === yM || void 0 === yM || null === (mM = yM.delta) || void 0 === mM ? void 0 : mM.reasoning_content) && … [truncated]
-             for (const MM of null !== (lM = null === yM || void 0 === yM || null === (EM = yM.delta) || void 0 === EM ? void 0 : EM.tool_calls) && void 0 !== lM ? lM : []) {
+             FU += null !== (yU = null !== (QU = null === gU || void 0 === gU || null === (YU = gU.delta) || void 0 === YU ? void 0 : YU.reasoning) && void 0 !== QU ? QU : null === gU || void 0 === gU || null === (NU = gU.delta) || void 0 === NU ? void 0 : NU.reasoning_content) && … [truncated]
+             for (const UU of null !== (kU = null === gU || void 0 === gU || null === (GU = gU.delta) || void 0 === GU ? void 0 : GU.tool_calls) && void 0 !== kU ? kU : []) {
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7524` → after: `L7528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7528) · [Before (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7524)

```diff
-             lOM: nM,
+             FyU: oU,
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7544` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7548) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7544)

```diff
-         return await Xa(xa, MM, (async MM => Ba("openrouter", `${pa.openrouter.baseUrl}/key`, {
+         return await lA(VA, UU, (async UU => mA("openrouter", `${wA.openrouter.baseUrl}/key`, {
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7565` → after: `L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7569) · [Before (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7565)

```diff
-             models: (null !== (rM = (await iM.json()).data) && void 0 !== rM ? rM : []).map((MM => ({
+             models: (null !== (XU = (await zU.json()).data) && void 0 !== XU ? XU : []).map((UU => ({
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7598` → after: `L7602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7602) · [Before (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7598)

```diff
-           await Nj(null !== (jM = aM.body) && void 0 !== jM ? jM : new ReadableStream, (rM => {
+           await HQ(null !== (QU = AU.body) && void 0 !== QU ? QU : new ReadableStream, (XU => {
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7603-L7604` → after: `L7607-L7608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7607-L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7607-L7608) · [Before (L7603-L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7603-L7604)

```diff
-             if ("content_block_start" === jM.type && "tool_use" === (null === (OM = jM.content_block) || void 0 === OM ? void 0 : OM.type)) LM.set(null !== (HM = jM.index) && void 0 !== HM ? HM : LM.size, {
-               name: null !== (hM = jM.content_block.name) && void 0 !== hM ? hM : "",
+             if ("content_block_start" === QU.type && "tool_use" === (null === (cU = QU.content_block) || void 0 === cU ? void 0 : cU.type)) YU.set(null !== (IU = QU.index) && void 0 !== IU ? IU : YU.size, {
+               name: null !== (pU = QU.content_block.name) && void 0 !== pU ? pU : "",
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7609-L7610` → after: `L7613-L7614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7613-L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7613-L7614) · [Before (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7609-L7610)

```diff
-               PM += null !== (JM = null === (dM = jM.delta) || void 0 === dM ? void 0 : dM.text) && void 0 !== JM ? JM : "", nM += null !== (yM = null === (lM = jM.delta) || void 0 === lM ? void 0 : lM.thinking) && void 0 !== yM ? yM : "";
-               const MM = LM.get(null !== (EM = jM.index) && void 0 !== EM ? EM : -1);
+               FU += null !== (aU = null === (tU = QU.delta) || void 0 === tU ? void 0 : tU.text) && void 0 !== aU ? aU : "", oU += null !== (gU = null === (kU = QU.delta) || void 0 === kU ? void 0 : kU.thinking) && void 0 !== gU ? gU : "";
+               const UU = YU.get(null !== (GU = QU.index) && void 0 !== GU ? GU : -1);
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7612` → after: `L7616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7616) · [Before (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7612)

```diff
-               if (MM && "input_json_delta" === (null === (UM = jM.delta) || void 0 === UM ? void 0 : UM.type)) MM.args += null !== (GM = jM.delta.partial_json) && void 0 !== GM ? GM : ""
+               if (UU && "input_json_delta" === (null === (BU = QU.delta) || void 0 === BU ? void 0 : BU.type)) UU.args += null !== (ZU = QU.delta.partial_json) && void 0 !== ZU ? ZU : ""
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7628` → after: `L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7632) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7628)

```diff
-             lOM: QM,
+             FyU: DU,
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7654` → after: `L7658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7658) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7654)

```diff
-             models: (null !== (rM = (await iM.json()).models) && void 0 !== rM ? rM : []).filter((MM => {
+             models: (null !== (XU = (await zU.json()).models) && void 0 !== XU ? XU : []).filter((UU => {
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7677` → after: `L7681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7681) · [Before (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7677)

```diff
-           const aM = await Ba("gemini", `${this.baseUrl}/models/${encodeURIComponent(MM)}:streamGenerateContent?alt=sse`, {
+           const AU = await mA("gemini", `${this.baseUrl}/models/${encodeURIComponent(UU)}:streamGenerateContent?alt=sse`, {
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7696` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7700) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7696)

```diff
-           return await Nj(null !== (jM = aM.body) && void 0 !== jM ? jM : new ReadableStream, (rM => {
+           return await HQ(null !== (QU = AU.body) && void 0 !== QU ? QU : new ReadableStream, (XU => {
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7700` → after: `L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7704) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7700)

```diff
-             for (const MM of null !== (HM = null === mM || void 0 === mM || null === (hM = mM.content) || void 0 === hM ? void 0 : hM.parts) && void 0 !== HM ? HM : []) {
+             for (const UU of null !== (IU = null === NU || void 0 === NU || null === (pU = NU.content) || void 0 === pU ? void 0 : pU.parts) && void 0 !== IU ? IU : []) {
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7703-L7704` → after: `L7707-L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7707-L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7707-L7708) · [Before (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7703-L7704)

```diff
-                 name: null !== (JM = MM.functionCall.name) && void 0 !== JM ? JM : "",
-                 args: JSON.stringify(null !== (dM = MM.functionCall.args) && void 0 !== dM ? dM : {})
+                 name: null !== (aU = UU.functionCall.name) && void 0 !== aU ? aU : "",
+                 args: JSON.stringify(null !== (tU = UU.functionCall.args) && void 0 !== tU ? tU : {})
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7708` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7712) · [Before (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7708)

```diff
-                 nM += null !== (yM = MM.text) && void 0 !== yM ? yM : ""
+                 oU += null !== (gU = UU.text) && void 0 !== gU ? gU : ""
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7711` → after: `L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7715) · [Before (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7711)

```diff
-                 PM += null !== (lM = MM.text) && void 0 !== lM ? lM : ""
+                 FU += null !== (kU = UU.text) && void 0 !== kU ? kU : ""
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7723` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7727) · [Before (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7723)

```diff
-             lOM: QM,
+             FyU: DU,
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7748` → after: `L7752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7752) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7748)

```diff
-           return new Va("custom", null !== iM && void 0 !== iM ? iM : "", rM)
+           return new bA("custom", null !== zU && void 0 !== zU ? zU : "", XU)
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7876` → after: `L7880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7880) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7876)

```diff
-         name: null !== (OM = null === SM || void 0 === SM ? void 0 : SM.name) && void 0 !== OM ? OM : rM,
+         name: null !== (cU = null === yU || void 0 === yU ? void 0 : yU.name) && void 0 !== cU ? cU : XU,
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7900` → after: `L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7904) · [Before (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7900)

```diff
-       return null !== (rM = MM.find((MM => "smart" === MM.tier))) && void 0 !== rM ? rM : MM[0]
+       return null !== (XU = UU.find((UU => "smart" === UU.tier))) && void 0 !== XU ? XU : UU[0]
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7906` → after: `L7910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7910) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7906)

```diff
-       return null !== (rM = MM.name) && void 0 !== rM ? rM : oa(MM.provider, MM.baseUrl, iM)
+       return null !== (XU = UU.name) && void 0 !== XU ? XU : fA(UU.provider, UU.baseUrl, zU)
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7923` → after: `L7927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7927) · [Before (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7923)

```diff
-         return new URL(null !== (rM = MM.baseUrl) && void 0 !== rM ? rM : "").protocol.startsWith("http")
+         return new URL(null !== (XU = UU.baseUrl) && void 0 !== XU ? XU : "").protocol.startsWith("http")
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7933` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7937) · [Before (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7933)

```diff
-         return console.warn(`AI Helper: no ${MM}`, rM), null
+         return console.warn(`AI Helper: no ${UU}`, XU), null
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7945` → after: `L7949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7949) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7945)

```diff
-         this.state = null !== OM && void 0 !== OM && OM.remember ? null !== SM && void 0 !== SM && SM.remember ? SM : {
+         this.state = null !== cU && void 0 !== cU && cU.remember ? null !== yU && void 0 !== yU && yU.remember ? yU : {
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7948` → after: `L7952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7952) · [Before (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7948)

```diff
-         } : null !== (iM = null !== OM && void 0 !== OM ? OM : SM) && void 0 !== iM ? iM : mP, this.ownsRemembered = this.state.remember && null !== SM
+         } : null !== (zU = null !== cU && void 0 !== cU ? cU : yU) && void 0 !== zU ? zU : YF, this.ownsRemembered = this.state.remember && null !== yU
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7965-L7966` → after: `L7969-L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7969-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7969-L7970) · [Before (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7965-L7966)

```diff
-           PM = "custom" !== MM.provider ? MM.provider : null !== (OM = null === aM || void 0 === aM ? void 0 : aM.id) && void 0 !== OM ? OM : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           nM = void 0 === rM ? QP(MM.models) : null !== (SM = MM.models.find((MM => MM.id === rM))) && void 0 !== SM ? SM : MM.models[0],
+           FU = "custom" !== UU.provider ? UU.provider : null !== (cU = null === AU || void 0 === AU ? void 0 : AU.id) && void 0 !== cU ? cU : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           oU = void 0 === XU ? oF(UU.models) : null !== (yU = UU.models.find((UU => UU.id === XU))) && void 0 !== yU ? yU : UU.models[0],
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L7981` → after: `L7985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L7985) · [Before (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L7981)

```diff
-           HM = mM ? this.state.keys.filter((MM => MM.id !== PM)).map((MM => MM.id === iM ? zM : MM)) : LM ? [...this.state.keys, zM] : this.state.keys.map((MM => MM.id === PM ? zM : MM)),
+           IU = NU ? this.state.keys.filter((UU => UU.id !== FU)).map((UU => UU.id === zU ? EU : UU)) : YU ? [...this.state.keys, EU] : this.state.keys.map((UU => UU.id === FU ? EU : UU)),
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8000` → after: `L8004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8004) · [Before (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8000)

```diff
-             return "" === iM ? SM : {
+             return "" === zU ? yU : {
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8095` → after: `L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8099) · [Before (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8095)

```diff
-           OM = (null !== (rM = null === iM || void 0 === iM ? void 0 : iM.keys) && void 0 !== rM ? rM : []).filter((MM => this.state.keys.every((rM => !HP(rM, MM)))));
+           cU = (null !== (XU = null === zU || void 0 === zU ? void 0 : zU.keys) && void 0 !== XU ? XU : []).filter((UU => this.state.keys.every((XU => !NF(XU, UU)))));
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8139` → after: `L8143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8143) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8139)

```diff
-           return Array.isArray(rM.keys) && rM.keys.every(hP) ? rM : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(XU.keys) && XU.keys.every(IF) ? XU : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8181` → after: `L8185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8185) · [Before (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8181)

```diff
-       const PM = null !== (iM = null === aM || void 0 === aM ? void 0 : aM.trim()) && void 0 !== iM ? iM : "";
+       const FU = null !== (zU = null === AU || void 0 === AU ? void 0 : AU.trim()) && void 0 !== zU ? zU : "";
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8211` → after: `L8215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8215) · [Before (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8211)

```diff
-               return 0 !== (null !== (iM = null === (OM = rM.tools) || void 0 === OM ? void 0 : OM.length) && void 0 !== iM ? iM : 0) && MM instanceof fa && "failed" === MM.problem && (400 === MM.status || 404 === MM.status && /\btool/i.test(null !== (SM = MM.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (zU = null === (cU = XU.tools) || void 0 === cU ? void 0 : cU.length) && void 0 !== zU ? zU : 0) && UU instanceof iA && "failed" === UU.problem && (400 === UU.status || 404 === UU.status && /\btool/i.test(null !== (yU = UU.detail) && void 0 != … [truncated]
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8226` → after: `L8230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8230) · [Before (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8226)

```diff
-         return await (nM = Math.min(null !== (aM = null !== (PM = LM.retryAfterMs) && void 0 !== PM ? PM : iM.retryWaitMs) && void 0 !== aM ? aM : 3e3, 2e4), QM = iM.signal, new Promise(((MM, rM) => {
+         return await (oU = Math.min(null !== (AU = null !== (FU = YU.retryAfterMs) && void 0 !== FU ? FU : zU.retryWaitMs) && void 0 !== AU ? AU : 3e3, 2e4), DU = zU.signal, new Promise(((UU, XU) => {
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8238` → after: `L8242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8242) · [Before (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8238)

```diff
-     var UP = iM(4004);
+     var GF = zU(3998);
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8355` → after: `L8359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8359) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8355)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${fP((null!==(rM=MM.availableFrom)&&void 0!==rM?rM:iM)-iM)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${iF((null!==(XU=UU.availableFrom)&&void 0!==XU?XU:zU)-zU)} to go.`;
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8357` → after: `L8361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8361) · [Before (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8357)

```diff
-           return MM.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(MM,rM){const iM=Math.ceil((MM-rM)/36e5);if(iM<=24)return iM<=1?"within the hour":`in ${iM} hours`;return`in ${fP(MM-rM)}`}(MM.resetsAt,iM)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return UU.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(UU,XU){const zU=Math.ceil((UU-XU)/36e5);if(zU<=24)return zU<=1?"within the hour":`in ${zU} hours`;return`in ${iF(UU-XU)}`}(UU.resetsAt,zU)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8388` → after: `L8392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8392) · [Before (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8388)

```diff
-       return `Usage left: ${MM.left}`
+       return `Usage left: ${UU.left}`
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8392-L8393` → after: `L8396-L8397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8396-L8397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8396-L8397) · [Before (L8392-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8392-L8393)

```diff
-       const rM = Math.max(1, Math.ceil(MM / ua.i));
-       return 1 === rM ? "1 day" : `${rM} days`
+       const XU = Math.max(1, Math.ceil(UU / eA.h));
+       return 1 === XU ? "1 day" : `${XU} days`
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8398` → after: `L8402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8402) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8398)

```diff
-       if (iM) return `${iM} Bot.xd is answering instead.`;
+       if (zU) return `${zU} Bot.xd is answering instead.`;
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8417` → after: `L8421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8421) · [Before (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8417)

```diff
-           return MM.messages.length > 12 || MM.messages.some((MM => MM.content.length > ij)) || (null !== (rM = null === (iM = MM.toolsJson) || void 0 === iM ? void 0 : iM.length) && void 0 !== rM ? rM : 0) > 1e5 || (null !== (OM = null === (SM = MM.request) || void 0 === SM ? vo … [truncated]
+           return UU.messages.length > 12 || UU.messages.some((UU => UU.content.length > UQ)) || (null !== (XU = null === (zU = UU.toolsJson) || void 0 === zU ? void 0 : zU.length) && void 0 !== XU ? XU : 0) > 1e5 || (null !== (cU = null === (yU = UU.request) || void 0 === yU ? vo … [truncated]
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8442-L8444` → after: `L8446-L8448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8446-L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8446-L8448) · [Before (L8442-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8442-L8444)

```diff
-     var xP = iM(22),
-       vP = iM(19),
-       FP = iM(2397);
+     var VF = zU(31),
+       sF = zU(27),
+       nF = zU(2381);
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8448` → after: `L8452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8452) · [Before (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8448)

```diff
-       BP ??= Promise.resolve().then((() => iM(2401))), BP.then((MM => {
+       mF ??= Promise.resolve().then((() => zU(2387))), mF.then((UU => {
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8470` → after: `L8474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8474) · [Before (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8470)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => iM(1429))), iM.e(663).then((() => iM(63929)))]);
+         }] = await Promise.all([Promise.resolve().then((() => zU(1410))), zU.e(660).then((() => zU(63977)))]);
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8477` → after: `L8481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8481) · [Before (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8477)

```diff
-                   xP.i.Tz("OpenStoreFromCodeEditor"), (0, FP.n)({
+                   VF.k.UY("OpenStoreFromCodeEditor"), (0, nF.l)({
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8482-L8483` → after: `L8486-L8487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8486-L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8486-L8487) · [Before (L8482-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8482-L8483)

```diff
-                   const MM = xP.i.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === vP.d.get("openEverythingMenuName") && (xP.i.unsubscribe(MM), gP.refresh())
+                   const UU = VF.k.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === sF.e.get("openEverythingMenuName") && (VF.k.unsubscribe(UU), LF.refresh())
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8487` → after: `L8491-L8492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8491-L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8491-L8492) · [Before (L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8487)

```diff
-           })
+           }),
+           middleScreenPopupContainerClassName: yA.b
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8666` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8671) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8666)

```diff
-       return MM.length > 4 && MM.endsWith("ies") ? `${MM.slice(0,-3)}y` : MM.length > 3 && MM.endsWith("s") && !MM.endsWith("ss") ? MM.slice(0, -1) : MM
+       return UU.length > 4 && UU.endsWith("ies") ? `${UU.slice(0,-3)}y` : UU.length > 3 && UU.endsWith("s") && !UU.endsWith("ss") ? UU.slice(0, -1) : UU
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8682` → after: `L8687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8687) · [Before (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8682)

```diff
-         SM = Pn(rM ? MM : (0, Jr.p)(MM, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, Jr.h, (() => "projectRequire"))),
+         yU = Qo(XU ? UU : (0, aX.z)(UU, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, aX.n, (() => "projectRequire"))),
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8685` → after: `L8690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8690) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8685)

```diff
-         for (const SM of (0, Jr.e)(MM, /(global|window|document|process|require)\b\s*[.([]/g, Jr.h)) OM.has(SM[1]) || jM.has(SM[1]) || (OM.add(SM[1]), iM.push(`Line ${rM+1} uses "${SM[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const yU of (0, aX.e)(UU, /(global|window|document|process|require)\b\s*[.([]/g, aX.n)) cU.has(yU[1]) || QU.has(yU[1]) || (cU.add(yU[1]), zU.push(`Line ${XU+1} uses "${yU[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8700` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8705) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8700)

```diff
-         const HM = [null !== (jM = rM[OM - 2]) && void 0 !== jM ? jM : "", null !== (aM = rM[OM - 1]) && void 0 !== aM ? aM : "", MM.slice(0, QM)].join(" ");
+         const IU = [null !== (QU = XU[cU - 2]) && void 0 !== QU ? QU : "", null !== (AU = XU[cU - 1]) && void 0 !== AU ? AU : "", UU.slice(0, DU)].join(" ");
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8702-L8703` → after: `L8707-L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8707-L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8707-L8708) · [Before (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8702-L8703)

```diff
-         const hM = null !== (PM = null === (nM = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(LM)) || void 0 === nM ? void 0 : nM[1]) && void 0 !== PM ? PM : "coins";
-         iM.push(`Line ${OM+1} sets the saved "${hM}" back to ${mM} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${hM}") is null.`)
+         const pU = null !== (FU = null === (oU = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(YU)) || void 0 === oU ? void 0 : oU[1]) && void 0 !== FU ? FU : "coins";
+         zU.push(`Line ${cU+1} sets the saved "${pU}" back to ${NU} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${pU}") is null.`)
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8709` → after: `L8714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8714) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8709)

```diff
-       const OM = null !== (rM = null === (iM = MM.split("### Parameters:")[1]) || void 0 === iM ? void 0 : iM.split("###")[0]) && void 0 !== rM ? rM : "",
+       const cU = null !== (XU = null === (zU = UU.split("### Parameters:")[1]) || void 0 === zU ? void 0 : zU.split("###")[0]) && void 0 !== XU ? XU : "",
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8757-L8759` → after: `L8762-L8764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8762-L8764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8762-L8764) · [Before (L8757-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8757-L8759)

```diff
-         SM = `\\((?:[^()]*[\\s,])?${OM}(?![\\w$])[^()]*\\)`,
-         jM = new RegExp(`(?:const|let|var)\\s+${OM}(?![\\w$])|${OM}\\s*(?:\\+?=(?![=>])|=>)|${SM}\\s*=>|function\\s*[\\w$]*\\s*${SM}`, "g");
-       return 1 === (0, Jr.e)(MM, jM, Jr.h).length ? null === (iM = new RegExp(`\\b(?:const|let|var)\\s+${OM}\\s*=\\s*${mn}\\s*(?:;|//|$)`, "m").exec(MM)) || void 0 === iM ? void 0 : iM[1] : void 0
+         yU = `\\((?:[^()]*[\\s,])?${cU}(?![\\w$])[^()]*\\)`,
+         QU = new RegExp(`(?:const|let|var)\\s+${cU}(?![\\w$])|${cU}\\s*(?:\\+?=(?![=>])|=>)|${yU}\\s*=>|function\\s*[\\w$]*\\s*${yU}`, "g");
+       return 1 === (0, aX.e)(UU, QU, aX.n).length ? null === (zU = new RegExp(`\\b(?:const|let|var)\\s+${cU}\\s*=\\s*${Eo}\\s*(?:;|//|$)`, "m").exec(UU)) || void 0 === zU ? void 0 : zU[1] : void 0
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8768-L8769` → after: `L8773-L8774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8773-L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8773-L8774) · [Before (L8768-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8768-L8769)

```diff
-           OM = -1 === iM ? rM : rM.slice(0, iM + 1);
-         return OM.length > 110 ? `${OM.slice(0,107)}...` : OM
+           cU = -1 === zU ? XU : XU.slice(0, zU + 1);
+         return cU.length > 110 ? `${cU.slice(0,107)}...` : cU
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8771` → after: `L8776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8776) · [Before (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8771)

```diff
-       return OM = "api" === MM ? `api.${rM}(${Ln(iM).join(", ")})${SM?` \u2014 ${SM}`:""}` : "callback" === MM ? `${rM}(${Ln(iM).join(", ")})${SM?` \u2014 ${SM}`:""}` : "clientOption" === MM ? `${rM}: ${function(MM){var rM,iM;return null!==(rM=null===(iM=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return cU = "api" === UU ? `api.${XU}(${Do(zU).join(", ")})${yU?` \u2014 ${yU}`:""}` : "callback" === UU ? `${XU}(${Do(zU).join(", ")})${yU?` \u2014 ${yU}`:""}` : "clientOption" === UU ? `${XU}: ${function(UU){var XU,zU;return null!==(XU=null===(zU=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8773` → after: `L8778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8778) · [Before (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8773)

```diff
-         rM.map((MM => `"${MM}"`)).join(" or ")
+         XU.map((UU => `"${UU}"`)).join(" or ")
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8775` → after: `L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8780) · [Before (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8775)

```diff
-       The closest name is "${rM[0]}", which may be something
+       The closest name is "${XU[0]}", which may be something
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8777` → after: `L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8782) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8777)

```diff
-       `}function Un(MM){return MM.split("\n").slice(1).map((MM=>MM.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((MM=>""!==MM&&!MM.startsWith("#")))}class Gn{constructor(MM){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function go(UU){return UU.split("\n").slice(1).map((UU=>UU.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((UU=>""!==UU&&!UU.startsWith("#")))}class ko{constructor(UU){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8781` → after: `L8786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8786) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8781)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();rM.push({name:iM,text:SM})}return rM}(iM))rM.push(Jn(MM,OM,SM))};iM("api",MM.apiReference),iM("callback",MM.callbacks),iM("clientOption",MM.clientOptions),iM("snippet",MM.snippets),iM("howTo",MM.howTo);const OM=function(){const MM … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();XU.push({name:zU,text:yU})}return XU}(zU))XU.push(Io(UU,cU,yU))};zU("api",UU.apiReference),zU("callback",UU.callbacks),zU("clientOption",UU.clientOptions),zU("snippet",UU.snippets),zU("howTo",UU.howTo);const cU=function(){const UU … [truncated]
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8792-L8793` → after: `L8797-L8798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8797-L8798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8797-L8798) · [Before (L8792-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8792-L8793)

```diff
-       n\ nUsage: \`${MM.signature}\`\n\n\`\`\`js\n${MM.example}\n\`\`\``)),
-   rM = UO.map((MM => `## ${MM.name}\nPrefab (${MM.kind}, ${MM.category}): put in with use_prefab. ${ZO(MM,!1)}`));
+       n\ nUsage: \`${UU.signature}\`\n\n\`\`\`js\n${UU.example}\n\`\`\``)),
+   XU = kc.map((UU => `## ${UU.name}\nPrefab (${UU.kind}, ${UU.category}): put in with use_prefab. ${rc(UU,!1)}`));
```

#### 454. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8795-L8796` → after: `L8800-L8801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8800-L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8800-L8801) · [Before (L8795-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8795-L8796)

```diff
-     helpers: `# Ready-made functions\n\n${MM.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${rM.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${UU.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${XU.join("\n\n")}\n`
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8804` → after: `L8809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8809) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8804)

```diff
-     this.wordCounts.set(MM, (null !== (SM = this.wordCounts.get(MM)) && void 0 !== SM ? SM : 0) + 1)
+     this.wordCounts.set(UU, (null !== (yU = this.wordCounts.get(UU)) && void 0 !== yU ? yU : 0) + 1)
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8809` → after: `L8814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8814) · [Before (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8809)

```diff
-   const OM = null !== (rM = null === (iM = MM.split("## Mob Variations")[1]) || void 0 === iM ? void 0 : iM.split("```")[1]) && void 0 !== rM ? rM : "",
+   const cU = null !== (XU = null === (zU = UU.split("## Mob Variations")[1]) || void 0 === zU ? void 0 : zU.split("```")[1]) && void 0 !== XU ? XU : "",
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8832` → after: `L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8837) · [Before (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8832)

```diff
-       return null !== (rM = MM[1]) && void 0 !== rM ? rM : MM[2]
+       return null !== (XU = UU[1]) && void 0 !== XU ? XU : UU[2]
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8839` → after: `L8844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8844) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8839)

```diff
-     for (const SM of (0, Jr.e)(MM, /([\w$]+)\s*\(/g, Jr.h)) {
+     for (const yU of (0, aX.e)(UU, /([\w$]+)\s*\(/g, aX.n)) {
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8843` → after: `L8848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8848) · [Before (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8843)

```diff
-       jM.has(aM) || OM.has(aM) || PM || "api" !== (null === (iM = this.byName.get(aM)) || void 0 === iM ? void 0 : iM.kind) || jM.set(aM, `Line ${rM+1} calls ${aM} without "api.", so it throws there. Did you mean api.${aM}?`)
+       QU.has(AU) || cU.has(AU) || FU || "api" !== (null === (zU = this.byName.get(AU)) || void 0 === zU ? void 0 : zU.kind) || QU.set(AU, `Line ${XU+1} calls ${AU} without "api.", so it throws there. Did you mean api.${AU}?`)
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8852-L8853` → after: `L8857-L8858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8857-L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8857-L8858) · [Before (L8852-L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8852-L8853)

```diff
-     const rM = this.find(MM.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((MM => "api" === MM.kind)).slice(0, 2).map((MM => `api.${MM.name}`));
-     return `api.${MM} doesn't exist.${rM.length?` Did you mean ${rM.join(" or ")}?`:""}`
+     const XU = this.find(UU.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((UU => "api" === UU.kind)).slice(0, 2).map((UU => `api.${UU.name}`));
+     return `api.${UU} doesn't exist.${XU.length?` Did you mean ${XU.join(" or ")}?`:""}`
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8873` → after: `L8878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8878) · [Before (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8873)

```diff
-         mM = LM ? null === (nM = new RegExp(`(?:^|[{,])\\s*${LM.replaceAll("$","\\$")}\\s*:\\s*${mn}`, "m").exec(MM)) || void 0 === nM ? void 0 : nM[1] : void 0,
+         NU = YU ? null === (oU = new RegExp(`(?:^|[{,])\\s*${YU.replaceAll("$","\\$")}\\s*:\\s*${Eo}`, "m").exec(UU)) || void 0 === oU ? void 0 : oU[1] : void 0,
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8875-L8876` → after: `L8880-L8881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8880-L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8880-L8881) · [Before (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8875-L8876)

```diff
-         hM = null !== (QM = null === (zM = new RegExp(`\\?\\s*${mn}\\s*:\\s*${mn}$`).exec(OM)) || void 0 === zM ? void 0 : zM.slice(1)) && void 0 !== QM ? QM : [];
-       for (const MM of [null !== (JM = null !== mM && void 0 !== mM ? mM : HM) && void 0 !== JM ? JM : OM, ...hM]) {
+         pU = null !== (DU = null === (EU = new RegExp(`\\?\\s*${Eo}\\s*:\\s*${Eo}$`).exec(cU)) || void 0 === EU ? void 0 : EU.slice(1)) && void 0 !== DU ? DU : [];
+       for (const UU of [null !== (aU = null !== NU && void 0 !== NU ? NU : IU) && void 0 !== aU ? aU : cU, ...pU]) {
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8884` → after: `L8889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8889) · [Before (L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8884)

```diff
-   return [...iM].map((MM => `"${MM}" isn't an item or block name.${En(this.suggestNames(MM))}`))
+   return [...zU].map((UU => `"${UU}" isn't an item or block name.${to(this.suggestNames(UU))}`))
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8897` → after: `L8902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8902) · [Before (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8897)

```diff
-     return `"${rM}" isn't an item or block name, so giving or selling it fails. Did you mean "${iM}"?`
+     return `"${XU}" isn't an item or block name, so giving or selling it fails. Did you mean "${zU}"?`
```

#### 465. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8913` → after: `L8918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8918) · [Before (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8913)

```diff
-       return `"${rM}" isn't a block or item name, so comparing with it is never true. Did you mean "${iM}"?`
+       return `"${XU}" isn't a block or item name, so comparing with it is never true. Did you mean "${zU}"?`
```

#### 466. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8918-L8919` → after: `L8923-L8924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8923-L8924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8923-L8924) · [Before (L8918-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8918-L8919)

```diff
-       iM = this.blockNames.has(rM) || !this.itemAndBlockNames.includes(rM) ? void 0 : [`Block of ${rM}`, `${rM} Block`].find((MM => this.blockNames.has(MM)));
-     !iM || MM.includes(`"${iM}"`) || MM.includes(`'${iM}'`) || aM.set(rM, iM)
+       zU = this.blockNames.has(XU) || !this.itemAndBlockNames.includes(XU) ? void 0 : [`Block of ${XU}`, `${XU} Block`].find((UU => this.blockNames.has(UU)));
+     !zU || UU.includes(`"${zU}"`) || UU.includes(`'${zU}'`) || AU.set(XU, zU)
```

#### 467. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8923` → after: `L8928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8928) · [Before (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8923)

```diff
-     return `"${rM}" is an item, not a block, so no block is ever called that. Did you mean "${iM}"?`
+     return `"${XU}" is an item, not a block, so no block is ever called that. Did you mean "${zU}"?`
```

#### 468. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8940-L8941` → after: `L8945-L8946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8945-L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8945-L8946) · [Before (L8940-L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8940-L8941)

```diff
-       } : OM.names.length > 0 || OM.isDecided ? OM : {
-         names: iM.length <= 2 ? iM : [],
+       } : cU.names.length > 0 || cU.isDecided ? cU : {
+         names: zU.length <= 2 ? zU : [],
```

#### 469. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8945` → after: `L8950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8950) · [Before (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8945)

```diff
-     return `"${MM}" isn't a block or item name, so comparing a block with it is never true.${En(SM)}`
+     return `"${UU}" isn't a block or item name, so comparing a block with it is never true.${to(yU)}`
```

#### 470. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8960-L8961` → after: `L8965-L8966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8965-L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8965-L8966) · [Before (L8960-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8960-L8961)

```diff
-           name: null !== (SM = iM[1]) && void 0 !== SM ? SM : iM[2],
-           body: MM.slice(iM.index, null !== (jM = null === (aM = rM[OM + 1]) || void 0 === aM ? void 0 : aM.index) && void 0 !== jM ? jM : MM.length)
+           name: null !== (yU = zU[1]) && void 0 !== yU ? yU : zU[2],
+           body: UU.slice(zU.index, null !== (QU = null === (AU = XU[cU + 1]) || void 0 === AU ? void 0 : AU.index) && void 0 !== QU ? QU : UU.length)
```

#### 471. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8969` → after: `L8974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8974) · [Before (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8969)

```diff
-         if (MM.text.includes(`"${OM}"`)) continue;
+         if (UU.text.includes(`"${cU}"`)) continue;
```

#### 472. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8971-L8972` → after: `L8976-L8977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8976-L8977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8976-L8977) · [Before (L8971-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8971-L8972)

```diff
-           aM = jM.length > 0 ? `Did you mean ${jM.map((MM=>`"${MM}"`)).join(" or ")}?` : /Return false/i.test(MM.text) ? `To stop it, return false instead of "${OM}".` : "Check Show Docs for what it can return.";
-         rM.add(`${iM} can't use "${OM}" to stop anything. ${aM}`)
+           AU = QU.length > 0 ? `Did you mean ${QU.map((UU=>`"${UU}"`)).join(" or ")}?` : /Return false/i.test(UU.text) ? `To stop it, return false instead of "${cU}".` : "Check Show Docs for what it can return.";
+         XU.add(`${zU} can't use "${cU}" to stop anything. ${AU}`)
```

#### 473. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8982` → after: `L8987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L8987) · [Before (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8982)

```diff
-     return !iM.some((MM => MM.startsWith(`${rM} `)))
+     return !zU.some((UU => UU.startsWith(`${XU} `)))
```

#### 474. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8998` → after: `L9003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9003) · [Before (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L8998)

```diff
-     jM = null !== (rM = this.namesByLowerCase.get(iM)) && void 0 !== rM ? rM : this.namesByLowerCase.get(SM);
+     QU = null !== (XU = this.namesByLowerCase.get(zU)) && void 0 !== XU ? XU : this.namesByLowerCase.get(yU);
```

#### 475. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9030` → after: `L9035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9035) · [Before (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9030)

```diff
-       MM && OM.set(MM, (null !== (iM = OM.get(MM)) && void 0 !== iM ? iM : 0) + rM)
+       UU && cU.set(UU, (null !== (zU = cU.get(UU)) && void 0 !== zU ? zU : 0) + XU)
```

#### 476. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9036` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9041) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9036)

```diff
-   for (const LM of `${MM}\n${rM}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const YU of `${UU}\n${XU}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 477. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9038` → after: `L9043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9043) · [Before (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9038)

```diff
-     SM(this.byName.get(null !== (PM = null !== (nM = LM[1]) && void 0 !== nM ? nM : LM[2]) && void 0 !== PM ? PM : LM[3]), LM[1] || LM[2] ? 4 : 2)
+     yU(this.byName.get(null !== (FU = null !== (oU = YU[1]) && void 0 !== oU ? oU : YU[2]) && void 0 !== FU ? FU : YU[3]), YU[1] || YU[2] ? 4 : 2)
```

#### 478. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9040` → after: `L9045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9045) · [Before (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9040)

```diff
-   for (const LM of (0, Jr.e)(rM, /([A-Za-z_$][\w$]*)\s*\(/g, Jr.h)) {
+   for (const YU of (0, aX.e)(XU, /([A-Za-z_$][\w$]*)\s*\(/g, aX.n)) {
```

#### 479. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9049-L9050` → after: `L9054-L9055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9054-L9055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9054-L9055) · [Before (L9049-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9049-L9050)

```diff
-       const iM = 1 / Math.log2(2 + (null !== (zM = this.wordCounts.get(rM)) && void 0 !== zM ? zM : 0));
-       LM.nameWords.has(rM) ? MM += 3 * iM : LM.textWords.has(rM) && (MM += iM)
+       const zU = 1 / Math.log2(2 + (null !== (EU = this.wordCounts.get(XU)) && void 0 !== EU ? EU : 0));
+       YU.nameWords.has(XU) ? UU += 3 * zU : YU.textWords.has(XU) && (UU += zU)
```

#### 480. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9066` → after: `L9071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9071) · [Before (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9066)

```diff
-   return null !== (rM = null !== (iM = this.byName.get(OM)) && void 0 !== iM ? iM : this.sections.find((MM => MM.name.toLowerCase() === SM))) && void 0 !== rM ? rM : null
+   return null !== (XU = null !== (zU = this.byName.get(cU)) && void 0 !== zU ? zU : this.sections.find((UU => UU.name.toLowerCase() === yU))) && void 0 !== XU ? XU : null
```

#### 481. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9103` → after: `L9108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9108) · [Before (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9103)

```diff
-         OM = new RegExp(`(^|[^\\w$.])${iM}\\s*\\(`),
+         cU = new RegExp(`(^|[^\\w$.])${zU}\\s*\\(`),
```

#### 482. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9129` → after: `L9134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9134) · [Before (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9129)

```diff
-         when: `in ${iM[1]}`,
+         when: `in ${zU[1]}`,
```

#### 483. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9136` → after: `L9141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9141) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9136)

```diff
-     PM = jM && rM ? ` ${jM}` : "",
+     FU = QU && XU ? ` ${QU}` : "",
```

#### 484. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9140-L9141` → after: `L9145-L9146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9145-L9146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9145-L9146) · [Before (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9140-L9141)

```diff
-     const MM = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (QM = null === (zM = SM[0]) || void 0 === zM ? void 0 : zM.trim()) && void 0 !== QM ? QM : ""),
-       rM = null === (LM = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (mM = null === (HM = SM[1]) || void 0 === HM ? void 0 : HM.trim()) && void 0 !== mM ? mM : "")) || void 0 === LM ? void 0 : LM[1],
+     const UU = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (DU = null === (EU = yU[0]) || void 0 === EU ? void 0 : EU.trim()) && void 0 !== DU ? DU : ""),
+       XU = null === (YU = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (NU = null === (IU = yU[1]) || void 0 === IU ? void 0 : IU.trim()) && void 0 !== NU ? NU : "")) || void 0 === YU ? void 0 : YU[1],
```

#### 485. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9144` → after: `L9149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9149) · [Before (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9144)

```diff
-         return /^(a|an|the)\s/i.test(rM) || !/^[a-z]/i.test(rM) ? rM : `${/^[aeiou]/i.test(rM)?"an":"a"} ${rM}`
+         return /^(a|an|the)\s/i.test(XU) || !/^[a-z]/i.test(XU) ? XU : `${/^[aeiou]/i.test(XU)?"an":"a"} ${XU}`
```

#### 486. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9146` → after: `L9151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9151) · [Before (L9146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9146)

```diff
-     return iM && null !== MM && void 0 !== MM && MM[3] ? `api.${nM[1]} needs ${iM}, but it got ${MM[3]}${PM}.` : MM ? `api.${nM[1]} couldn't use its ${hM=Number(MM[1]),1===hM?"first":2===hM?"second":3===hM?"third":4===hM?"fourth":`#${hM}`} argument${PM}.${iM?` It needs ${iM}.`:"" … [truncated]
+     return zU && null !== UU && void 0 !== UU && UU[3] ? `api.${oU[1]} needs ${zU}, but it got ${UU[3]}${FU}.` : UU ? `api.${oU[1]} couldn't use its ${pU=Number(UU[1]),1===pU?"first":2===pU?"second":3===pU?"third":4===pU?"fourth":`#${pU}`} argument${FU}.${zU?` It needs ${zU}.`:"" … [truncated]
```

#### 487. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9150` → after: `L9155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9155) · [Before (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9150)

```diff
-   if (JM) return JM[1] ? `${JM[1]} isn't a function${PM}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${PM}. Check each name it calls is spelt exactly right.`;
+   if (aU) return aU[1] ? `${aU[1]} isn't a function${FU}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${FU}. Check each name it calls is spelt exactly right.`;
```

#### 488. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9152` → after: `L9157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9157) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9152)

```diff
-   if (dM) return `${dM[1]} isn't defined${PM}. Check the spelling, or create it before using it.`;
+   if (tU) return `${tU[1]} isn't defined${FU}. Check the spelling, or create it before using it.`;
```

#### 489. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9156-L9157` → after: `L9161-L9162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9161-L9162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9161-L9162) · [Before (L9156-L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9156-L9157)

```diff
-     const MM = null !== (lM = yM[1]) && void 0 !== lM ? lM : yM[3];
-     return `Your code tried to read${MM?` .${MM}`:" something"} from ${yM[2]}${PM}: a value it expected wasn't there.`
+     const UU = null !== (kU = gU[1]) && void 0 !== kU ? kU : gU[3];
+     return `Your code tried to read${UU?` .${UU}`:" something"} from ${gU[2]}${FU}: a value it expected wasn't there.`
```

#### 490. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9159` → after: `L9164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9164) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9159)

```diff
-   return `Your code hit an error${PM}: ${aM.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${FU}: ${AU.replace(/^\w*Error:\s*/,"")}`
```

#### 491. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9245` → after: `L9250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9250) · [Before (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9245)

```diff
-   return MM.replaceAll(`"${rM}"`, `"${iM}"`).replaceAll(`'${rM}'`, `'${iM}'`)
+   return UU.replaceAll(`"${XU}"`, `"${zU}"`).replaceAll(`'${XU}'`, `'${zU}'`)
```

#### 492. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9249` → after: `L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9254) · [Before (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9249)

```diff
-   const iM = MM => wM().isIdentifier(MM) ? MM.text === rM : MM.elements.some((MM => !wM().isOmittedExpression(MM) && iM(MM.name))),
+   const zU = UU => dU().isIdentifier(UU) ? UU.text === XU : UU.elements.some((UU => !dU().isOmittedExpression(UU) && zU(UU.name))),
```

#### 493. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9262` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9267) · [Before (L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9262)

```diff
-       return (null === MM || void 0 === MM || null === (iM = MM.name) || void 0 === iM ? void 0 : iM.text) === rM || void 0 !== OM && (wM().isNamespaceImport(OM) ? OM.name.text === rM : OM.elements.some((MM => MM.name.text === rM)))
+       return (null === UU || void 0 === UU || null === (zU = UU.name) || void 0 === zU ? void 0 : zU.text) === XU || void 0 !== cU && (dU().isNamespaceImport(cU) ? cU.name.text === XU : cU.elements.some((UU => UU.name.text === XU)))
```

#### 494. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9276` → after: `L9281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9281) · [Before (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9276)

```diff
-             text: `${iM}${rM}${iM}`
+             text: `${zU}${XU}${zU}`
```

#### 495. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9288` → after: `L9293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9293) · [Before (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9288)

```diff
-                 edit: jM(SM, wM().isShorthandPropertyAssignment(MM) ? `${OM}: ${iM}` : OM),
+                 edit: QU(yU, dU().isShorthandPropertyAssignment(UU) ? `${cU}: ${zU}` : cU),
```

#### 496. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9290` → after: `L9295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9295) · [Before (L9290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9290)

```diff
-                 ML: PM
+                 cY: FU
```

#### 497. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9303` → after: `L9308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9308) · [Before (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9303)

```diff
-         return Di(MM, aM.flatMap((MM => MM.depth !== rM || MM.ML ? [] : [MM.edit])))
+         return Oz(UU, AU.flatMap((UU => UU.depth !== XU || UU.cY ? [] : [UU.edit])))
```

#### 498. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9328` → after: `L9333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9333) · [Before (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9328)

```diff
-           rM && wM().isIdentifier(rM) ? (wM().isVariableDeclaration(MM) && iO(MM.initializer, OM) ? SM : jM).add(rM.text) : wM().isIdentifier(MM) && OO(MM) && jM.add(MM.text), wM().forEachChild(MM, aM)
+           XU && dU().isIdentifier(XU) ? (dU().isVariableDeclaration(UU) && Uc(UU.initializer, cU) ? yU : QU).add(XU.text) : dU().isIdentifier(UU) && Xc(UU) && QU.add(UU.text), dU().forEachChild(UU, AU)
```

#### 499. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9337` → after: `L9342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9342) · [Before (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9337)

```diff
-           text: `{ customAttributes: ${rM.getText(OM)} }`
+           text: `{ customAttributes: ${XU.getText(cU)} }`
```

#### 500. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9360` → after: `L9365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9365) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9360)

```diff
-               text: wM().isShorthandPropertyAssignment(QM) ? `${rM}: ${iM}` : iM
+               text: dU().isShorthandPropertyAssignment(DU) ? `${XU}: ${zU}` : zU
```

#### 501. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9370-L9371` → after: `L9375-L9376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9375-L9376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9375-L9376) · [Before (L9370-L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9370-L9371)

```diff
-       const rM = `(["'])${function(MM){return MM.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(iM)}\\1`;
-       return ("comparedBlock" === SM ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${rM}`, `${rM}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${rM}`, `${rM}\\s*[!=]==?`, `\\bcase\\s+${rM}\\s*:`, `\\.includes\\(\\s*${rM}\\s*\\)`]).reduce(((MM, rM) => MM.replace(new RegExp(rM, "g"), … [truncated]
+       const XU = `(["'])${function(UU){return UU.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(zU)}\\1`;
+       return ("comparedBlock" === yU ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${XU}`, `${XU}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${XU}`, `${XU}\\s*[!=]==?`, `\\bcase\\s+${XU}\\s*:`, `\\.includes\\(\\s*${XU}\\s*\\)`]).reduce(((UU, XU) => UU.replace(new RegExp(XU, "g"), … [truncated]
```

#### 502. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9381` → after: `L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9386) · [Before (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9381)

```diff
-   return "export" === MM.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === MM.kind ? `The enchantment given to ${MM.method} is now in { customAttributes: ... }.` : "null" === MM.kind ? `The null given to ${MM.method} i … [truncated]
+   return "export" === UU.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === UU.kind ? `The enchantment given to ${UU.method} is now in { customAttributes: ... }.` : "null" === UU.kind ? `The null given to ${UU.method} i … [truncated]
```

#### 503. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9383` → after: `L9388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9388) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9383)

```diff
- var Fn = iM(44117);
+ var Vo = zU(44149);
```

#### 504. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9443` → after: `L9448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9448) · [Before (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9443)

```diff
-       return SM ? `${OM} didn't accept your key: it may be wrong or deleted.` : `${OM} didn't accept your key: it may be wrong or deleted. Check it on ${OM}'s website.`;
+       return yU ? `${cU} didn't accept your key: it may be wrong or deleted.` : `${cU} didn't accept your key: it may be wrong or deleted. Check it on ${cU}'s website.`;
```

#### 505. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9445` → after: `L9450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9450) · [Before (L9445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9445)

```diff
-       return SM ? `${OM} stopped your key for now: it has used all it can.` : `${OM} stopped your key for now: it has used all it can. Check it on ${OM}'s website.`;
+       return yU ? `${cU} stopped your key for now: it has used all it can.` : `${cU} stopped your key for now: it has used all it can. Check it on ${cU}'s website.`;
```

#### 506. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9447` → after: `L9452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9452) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9447)

```diff
-       return `Too many requests to ${iM} right now. Wait a minute and try again.`;
+       return `Too many requests to ${zU} right now. Wait a minute and try again.`;
```

#### 507. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9449` → after: `L9454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9454) · [Before (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9449)

```diff
-       return `${OM} can't find ${iM}. Pick another model, or press Check for new models in AI settings.`;
+       return `${cU} can't find ${zU}. Pick another model, or press Check for new models in AI settings.`;
```

#### 508. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9451` → after: `L9456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9456) · [Before (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9451)

```diff
-       return `${iM} took too long to answer.`;
+       return `${zU} took too long to answer.`;
```

#### 509. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9453` → after: `L9458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9458) · [Before (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9453)

```diff
-       return SM ? `Couldn't reach ${OM}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${OM}. Check your internet and your key.`;
+       return yU ? `Couldn't reach ${cU}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${cU}. Check your internet and your key.`;
```

#### 510. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9455` → after: `L9460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9460) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9455)

```diff
-       return `${OM} doesn't work from where you are.`;
+       return `${cU} doesn't work from where you are.`;
```

#### 511. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9459` → after: `L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9464) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9459)

```diff
-       return `${iM} can't be used right now. Try again in a minute.`
+       return `${zU} can't be used right now. Try again in a minute.`
```

#### 512. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9477` → after: `L9482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9482) · [Before (L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9477)

```diff
-       ...Fn.d,
+       ...Vo.f,
```

#### 513. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9553` → after: `L9558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9558) · [Before (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9553)

```diff
-       }, rM] = await Promise.all([Promise.resolve().then((() => iM(1429))), this.popup.notice()]), OM = MM.showPromptPopup({
+       }, XU] = await Promise.all([Promise.resolve().then((() => zU(1410))), this.popup.notice()]), cU = UU.showPromptPopup({
```

#### 514. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9557` → after: `L9562-L9563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9562-L9563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9562-L9563) · [Before (L9557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9557)

```diff
-         cancelText: "general:cancel"
+         cancelText: "general:cancel",
+         middleScreenPopupContainerClassName: yA.b
```

#### 515. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9641` → after: `L9647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9647) · [Before (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9641)

```diff
-       return "" === MM ? "no key needed" : MM.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === rM ? `key \u2026${MM.slice(-4)}` : `${(null!==(iM=null===(OM=/^[a-zA-Z]+-/.exec(MM))||void 0===OM?void 0:OM[0])&&void 0!==iM?iM:MM.slice(0,4)).slice(0,6)}\u2026${MM.slice(-4)}`
+       return "" === UU ? "no key needed" : UU.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === XU ? `key \u2026${UU.slice(-4)}` : `${(null!==(zU=null===(cU=/^[a-zA-Z]+-/.exec(UU))||void 0===cU?void 0:cU[0])&&void 0!==zU?zU:UU.slice(0,4)).slice(0,6)}\u2026${UU.slice(-4)}`
```

#### 516. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9663` → after: `L9669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9669) · [Before (L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9663)

```diff
-         "aria-label": `Edit ${jM} key`,
+         "aria-label": `Edit ${QU} key`,
```

#### 517. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9668` → after: `L9674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9674) · [Before (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9668)

```diff
-         "aria-label": `Rename ${jM} key`,
+         "aria-label": `Rename ${QU} key`,
```

#### 518. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9689` → after: `L9695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9695) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9689)

```diff
-     yM = `${mM}-${null!==(rM=null===zM||void 0===zM?void 0:zM.keyId)&&void 0!==rM?rM:"botxd"}-${null!==(iM=null===zM||void 0===zM?void 0:zM.modelId)&&void 0!==iM?iM:"botxd"}`.replace(/[^\w-]/g, "_"),
+     gU = `${NU}-${null!==(XU=null===EU||void 0===EU?void 0:EU.keyId)&&void 0!==XU?XU:"botxd"}-${null!==(zU=null===EU||void 0===EU?void 0:EU.modelId)&&void 0!==zU?zU:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 519. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9693-L9695` → after: `L9699-L9701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9699-L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9699-L9701) · [Before (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9693-L9695)

```diff
-     "data-key-id": null !== (SM = null === zM || void 0 === zM ? void 0 : zM.keyId) && void 0 !== SM ? SM : "botxd",
-     "data-model-id": null !== (PM = null === zM || void 0 === zM ? void 0 : zM.modelId) && void 0 !== PM ? PM : "botxd",
-     title: null !== JM && void 0 !== JM ? JM : void 0,
+     "data-key-id": null !== (yU = null === EU || void 0 === EU ? void 0 : EU.keyId) && void 0 !== yU ? yU : "botxd",
+     "data-model-id": null !== (FU = null === EU || void 0 === EU ? void 0 : EU.modelId) && void 0 !== FU ? FU : "botxd",
+     title: null !== aU && void 0 !== aU ? aU : void 0,
```

#### 520. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9703` → after: `L9709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9709) · [Before (L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9703)

```diff
-       "aria-describedby": QM ? yM : void 0,
+       "aria-describedby": DU ? gU : void 0,
```

#### 521. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9730` → after: `L9736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9736) · [Before (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9730)

```diff
-     vW: PM,
+     Cw: FU,
```

#### 522. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9753` → after: `L9759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9759) · [Before (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9753)

```diff
-           at: null !== (iM = MM.usedAt) && void 0 !== iM ? iM : 0,
+           at: null !== (zU = UU.usedAt) && void 0 !== zU ? zU : 0,
```

#### 523. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9776` → after: `L9782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9782) · [Before (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9776)

```diff
-     uM = `${rM}-model`,
+     CU = `${XU}-model`,
```

#### 524. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9789` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9795) · [Before (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9789)

```diff
-       }, null !== (SM = null === OM || void 0 === OM ? void 0 : OM.modelId) && void 0 !== SM ? SM : "botxd")
+       }, null !== (yU = null === cU || void 0 === cU ? void 0 : cU.modelId) && void 0 !== yU ? yU : "botxd")
```

#### 525. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9797` → after: `L9803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9803) · [Before (L9797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9797)

```diff
-       hint: null !== dM && void 0 !== dM ? dM : `Bloxd's better AI. ${JM.status?oP(JM.status):""}`.trim(),
+       hint: null !== tU && void 0 !== tU ? tU : `Bloxd's better AI. ${aU.status?fF(aU.status):""}`.trim(),
```

#### 526. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9803` → after: `L9809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9809) · [Before (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9803)

```diff
-         wP(null !== (MM = null === (rM = JM.status) || void 0 === rM ? void 0 : rM.provider) && void 0 !== MM ? MM : "ovh") && gP.LH()
+         WF(null !== (UU = null === (XU = aU.status) || void 0 === XU ? void 0 : XU.provider) && void 0 !== UU ? UU : "ovh") && LF.DI()
```

#### 527. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9808` → after: `L9814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9814) · [Before (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9808)

```diff
-           if (wP(null !== (rM = null === MM || void 0 === MM ? void 0 : MM.provider) && void 0 !== rM ? rM : "ovh") || await zQ.ask()) return gP.LH(), !0;
+           if (WF(null !== (XU = null === UU || void 0 === UU ? void 0 : UU.provider) && void 0 !== XU ? XU : "ovh") || await oD.ask()) return LF.DI(), !0;
```

#### 528. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9819-L9820` → after: `L9825-L9826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9825-L9826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9825-L9826) · [Before (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9819-L9820)

```diff
-         pM = uM ? null !== (rM = MM.models.find((rM => rM.id === MM.usedModelId))) && void 0 !== rM ? rM : QP(MM.models) : void 0,
-         WM = null !== (iM = null === (OM = GM[MM.id]) || void 0 === OM ? void 0 : OM.trim().toLowerCase()) && void 0 !== iM ? iM : "",
+         qU = CU ? null !== (XU = UU.models.find((XU => XU.id === UU.usedModelId))) && void 0 !== XU ? XU : oF(UU.models) : void 0,
+         OU = null !== (zU = null === (cU = ZU[UU.id]) || void 0 === cU ? void 0 : cU.trim().toLowerCase()) && void 0 !== zU ? zU : "",
```

#### 529. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9833` → after: `L9839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9839) · [Before (L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9833)

```diff
-             keyName: null !== (HM = MM.name) && void 0 !== HM ? HM : "",
+             keyName: null !== (IU = UU.name) && void 0 !== IU ? IU : "",
```

#### 530. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9849` → after: `L9855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9855) · [Before (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9849)

```diff
-             "aria-label": `Check ${dM} for new models`,
+             "aria-label": `Check ${tU} for new models`,
```

#### 531. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9857` → after: `L9863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9863) · [Before (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9857)

```diff
-             "aria-label": `Remove ${dM} key`,
+             "aria-label": `Remove ${tU} key`,
```

#### 532. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9865` → after: `L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9871) · [Before (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9865)

```diff
-             "aria-label": `Remove ${dM} key?`,
+             "aria-label": `Remove ${tU} key?`,
```

#### 533. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9871` → after: `L9877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9877) · [Before (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9871)

```diff
-               "aria-label": `Yes, remove ${dM} key`,
+               "aria-label": `Yes, remove ${tU} key`,
```

#### 534. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9878` → after: `L9884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9884) · [Before (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9878)

```diff
-               "aria-label": `No, keep ${dM} key`,
+               "aria-label": `No, keep ${tU} key`,
```

#### 535. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9892-L9894` → after: `L9898-L9900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9898-L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9898-L9900) · [Before (L9892-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9892-L9894)

```diff
-           "aria-label": `Find a model from ${dM}`,
-           placeholder: `Find a model (${MM.models.length})`,
-           value: null !== (JM = GM[MM.id]) && void 0 !== JM ? JM : "",
+           "aria-label": `Find a model from ${tU}`,
+           placeholder: `Find a model (${UU.models.length})`,
+           value: null !== (aU = ZU[UU.id]) && void 0 !== aU ? aU : "",
```

#### 536. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9910` → after: `L9916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9916) · [Before (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9910)

```diff
-           "aria-label": `Show all ${dM} models`,
+           "aria-label": `Show all ${tU} models`,
```

#### 537. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9934` → after: `L9940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9940) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9934)

```diff
-     } = await iM.e(138).then((() => iM(7023)));
+     } = await zU.e(136).then((() => zU(7123)));
```

#### 538. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L9958` → after: `L9964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR9964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L9964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L9964) · [Before (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L9958)

```diff
-         children: rM ? SM : jM
+         children: XU ? yU : QU
```

#### 539. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10078` → after: `L10084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10084) · [Before (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10078)

```diff
-           children: [1 === PM.length ? "Forget your key" : `Forget all ${PM.length} keys`, " in this browser?", (0, aM.jsx)("button", {
+           children: [1 === FU.length ? "Forget your key" : `Forget all ${FU.length} keys`, " in this browser?", (0, AU.jsx)("button", {
```

#### 540. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10142` → after: `L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10148) · [Before (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10142)

```diff
-                 text: `${rM} listed no models, so your models stay as they were.`
+                 text: `${XU} listed no models, so your models stay as they were.`
```

#### 541. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10148` → after: `L10154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10154) · [Before (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10148)

```diff
-                 text: `${rM}'s models are up to date.`
+                 text: `${XU}'s models are up to date.`
```

#### 542. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10162` → after: `L10168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10168) · [Before (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10162)

```diff
-         vW: MM => {
+         Cw: UU => {
```

#### 543. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10217` → after: `L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10223) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10217)

```diff
-         null === (iM = null !== OM && void 0 !== OM ? OM : PM.current) || void 0 === iM || iM.scrollIntoView({
+         null === (zU = null !== cU && void 0 !== cU ? cU : FU.current) || void 0 === zU || zU.scrollIntoView({
```

#### 544. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10237` → after: `L10243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10243) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10237)

```diff
-         children: nM ? `An API key works like a password for ${nM.shortName}'s AI (it isn't your ${nM.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: oU ? `An API key works like a password for ${oU.shortName}'s AI (it isn't your ${oU.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 545. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10239` → after: `L10245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10245) · [Before (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10239)

```diff
-         children: ["You make it on ", nM ? `${nM.shortName}'s website` : (0, aM.jsx)(yQ, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", oU ? `${oU.shortName}'s website` : (0, AU.jsx)(aD, {}), ", and see how much you've used or delete it there."]
```

#### 546. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10241` → after: `L10247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10247) · [Before (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10241)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (rM = null === nM || void 0 === nM ? void 0 : nM.shortName) && void 0 !== rM ? rM : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (XU = null === oU || void 0 === oU ? void 0 : oU.shortName) && void 0 !== XU ? XU : "that company", ", never to Bloxd."]
```

#### 547. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10300` → after: `L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10306) · [Before (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10300)

```diff
-   } = yP(), [mM, HM] = (0, OM.useState)(null !== (rM = null === nM || void 0 === nM ? void 0 : nM.provider) && void 0 !== rM ? rM : null), [hM, JM] = (0, OM.useState)(!!nM), [dM, yM] = (0, OM.useState)(""), lM = null !== (iM = null === nM || void 0 === nM ? void 0 : nM.key) && vo … [truncated]
+   } = tF(), [NU, IU] = (0, cU.useState)(null !== (XU = null === oU || void 0 === oU ? void 0 : oU.provider) && void 0 !== XU ? XU : null), [pU, aU] = (0, cU.useState)(!!oU), [tU, gU] = (0, cU.useState)(""), kU = null !== (zU = null === oU || void 0 === oU ? void 0 : oU.key) && vo … [truncated]
```

#### 548. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10302` → after: `L10308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10308) · [Before (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10302)

```diff
-     return MM === (null === nM || void 0 === nM ? void 0 : nM.provider) && ("custom" !== MM || (null !== (rM = Za(GM)) && void 0 !== rM ? rM : "") === (null !== (iM = nM.baseUrl) && void 0 !== iM ? iM : ""))
+     return UU === (null === oU || void 0 === oU ? void 0 : oU.provider) && ("custom" !== UU || (null !== (XU = uA(ZU)) && void 0 !== XU ? XU : "") === (null !== (zU = oU.baseUrl) && void 0 !== zU ? zU : ""))
```

#### 549. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10305-L10306` → after: `L10311-L10312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10311-L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10311-L10312) · [Before (L10305-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10305-L10306)

```diff
-     return "" === rM && "" !== lM && eM(MM) ? lM : rM
-   }, [tM, gM] = (0, OM.useState)(""), [uM, RM] = (0, OM.useState)(null !== (jM = null === nM || void 0 === nM ? void 0 : nM.name) && void 0 !== jM ? jM : ""), [pM, WM] = (0, OM.useState)(!1), [sM, DM] = (0, OM.useState)(null), [kM, ZM] = (0, OM.useState)(""), [oM, fM] = (0, OM.us … [truncated]
+     return "" === XU && "" !== kU && PU(UU) ? kU : XU
+   }, [LU, eU] = (0, cU.useState)(""), [CU, wU] = (0, cU.useState)(null !== (QU = null === oU || void 0 === oU ? void 0 : oU.name) && void 0 !== QU ? QU : ""), [qU, OU] = (0, cU.useState)(!1), [SU, rU] = (0, cU.useState)(null), [uU, fU] = (0, cU.useState)(""), [iU, HU] = (0, cU.us … [truncated]
```

#### 550. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10337` → after: `L10343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10343) · [Before (L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10337)

```diff
-           baseUrl: "custom" === mM && null !== (MM = Za(GM)) && void 0 !== MM ? MM : void 0,
+           baseUrl: "custom" === NU && null !== (UU = uA(ZU)) && void 0 !== UU ? UU : void 0,
```

#### 551. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10344` → after: `L10350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10350) · [Before (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10344)

```diff
-         const iM = null !== mM && void 0 !== mM ? mM : ka(rM),
+         const zU = null !== NU && void 0 !== NU ? NU : rA(XU),
```

#### 552. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10359-L10360` → after: `L10365-L10366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10365-L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10365-L10366) · [Before (L10359-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10359-L10360)

```diff
-             baseUrl: null !== SM && void 0 !== SM ? SM : void 0,
-             modelName: pM ? tM : void 0
+             baseUrl: null !== yU && void 0 !== yU ? yU : void 0,
+             modelName: qU ? LU : void 0
```

#### 553. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10366` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10372) · [Before (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10366)

```diff
-           ZM(null !== (aM = null === (PM = null !== QM && void 0 !== QM ? QM : QP(MM)) || void 0 === PM ? void 0 : PM.id) && void 0 !== aM ? aM : "")
+           fU(null !== (AU = null === (FU = null !== DU && void 0 !== DU ? DU : oF(UU)) || void 0 === FU ? void 0 : FU.id) && void 0 !== AU ? AU : "")
```

#### 554. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10372-L10373` → after: `L10378-L10379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10378-L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10378-L10379) · [Before (L10372-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10372-L10373)

```diff
-           const aM = "badKey" !== SM || hM ? "" : ` If it isn't from ${pa[iM].shortName}, pick the company it's from.`;
-           NM(`${Na(SM,iM)}${aM}`)
+           const AU = "badKey" !== yU || pU ? "" : ` If it isn't from ${wA[zU].shortName}, pick the company it's from.`;
+           vU(`${MA(yU,zU)}${AU}`)
```

#### 555. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10383` → after: `L10389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10389) · [Before (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10383)

```diff
-         value: null !== mM && void 0 !== mM ? mM : "",
+         value: null !== NU && void 0 !== NU ? NU : "",
```

#### 556. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10411` → after: `L10417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10417) · [Before (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10411)

```diff
-       }), (!nM || GM !== (null !== (PM = nM.baseUrl) && void 0 !== PM ? PM : "")) && (0, aM.jsx)(EQ, {})]
+       }), (!oU || ZU !== (null !== (FU = oU.baseUrl) && void 0 !== FU ? FU : "")) && (0, AU.jsx)(gD, {})]
```

#### 557. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10483` → after: `L10489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10489) · [Before (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10483)

```diff
-           keyId: null !== mM && void 0 !== mM ? mM : "",
+           keyId: null !== NU && void 0 !== NU ? NU : "",
```

#### 558. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10507` → after: `L10513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10513) · [Before (L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10507)

```diff
-         placeholder: mM && "custom" !== mM ? `Like My ${pa[mM].shortName}` : "Like Home server",
+         placeholder: NU && "custom" !== NU ? `Like My ${wA[NU].shortName}` : "Like Home server",
```

#### 559. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10533` → after: `L10539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10539) · [Before (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10533)

```diff
-         children: oM ? vM ? "Testing the connection\u2026" : "Testing your key\u2026" : KM ? `Save and use ${KM.name}` : vM ? "Test connection" : "Test key"
+         children: iU ? nU ? "Testing the connection\u2026" : "Testing your key\u2026" : jU ? `Save and use ${jU.name}` : nU ? "Test connection" : "Test key"
```

#### 560. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10538-L10540` → after: `L10544-L10546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10544-L10546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10544-L10546) · [Before (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10538-L10540)

```diff
- var CQ = iM(1188),
-   eQ = iM(37828),
-   bQ = iM(37821);
+ var BD = zU(1193),
+   ZD = zU(37612),
+   RD = zU(37604);
```

#### 561. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10551-L10552` → after: `L10557-L10558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10557-L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10557-L10558) · [Before (L10551-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10551-L10552)

```diff
-   } = (0, CQ.A)();
-   return (0, aM.jsx)(bQ.g, {
+   } = (0, BD.I)();
+   return (0, AU.jsx)(RD.h, {
```

#### 562. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10555` → after: `L10561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10561) · [Before (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10555)

```diff
-     text: jM(`codeEditorAiTutorial:${rM}`),
+     text: QU(`codeEditorAiTutorial:${XU}`),
```

#### 563. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10603` → after: `L10609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10609) · [Before (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10603)

```diff
-   return MM.model.name.toLowerCase().startsWith(rM.toLowerCase()) ? MM.model.name : `${rM} \xb7 ${MM.model.name}`
+   return UU.model.name.toLowerCase().startsWith(XU.toLowerCase()) ? UU.model.name : `${XU} \xb7 ${UU.model.name}`
```

#### 564. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10653` → after: `L10659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/105.js#L10659) · [Before (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/105.js#L10653)

```diff
-     EM = lM ? "Bot.xd (free) \xb7 once" : QM ? uQ(QM) : LM ? GP : "Bot.xd (free)";
+     GU = kU ? "Bot.xd (free) \xb7 once" : DU ? LD(DU) : YU ? BF : "Bot.xd (free)";
```
