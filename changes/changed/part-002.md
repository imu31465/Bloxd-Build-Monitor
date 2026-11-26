# Changed — Bundle Modifications Report (Part 002 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `2 / 154` (**378** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 001](part-001.md) · [Part 003 →](part-003.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/105.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/105.js` (959 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8)

#### 202. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6014-L6029` → after: `L6014-L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6014-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6014-L6029) · [Before (L6014-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6014-L6029)

```diff
-         VH = TH("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${PH("edit … [truncated]
-         OH = TH("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
-         bH = TH("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
-         kH = TH("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${PH("edit_fil … [truncated]
-         mH = BH ? `2. Then give the whole new code with a write_file call, exactly like this:\n${PH("write_file",{path:xH,why:"what the change does",content:xr.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${PH("write_fi … [truncated]
-         oH = BH ? "" : ` If there is no code yet, write it in ${xH}.`,
-         IH = PH("switch_to_world_code", {}),
-         fH = BH ? zH ? `\n${Pr}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
-         lH = GH && TH("use_prefab") && XH.length >= 2,
-         KH = lH ? XH.slice(0, 3).map((HH => HH.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
-         cH = lH ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
-         eH = TH("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
-         qH = TH("plan") ? `\n${"deepseek"===LH?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
-         gH = null !== (rH = XH[0]) && void 0 !== rH ? rH : TA("parkour"),
-         NH = (null !== (SH = null === gH || void 0 === gH ? void 0 : gH.settings) && void 0 !== SH ? SH : []).slice(0, 2).map((HH => `${HH.key}: ${HH.value}`)).join("\n");
-       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
+         nB = VB("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${AB("edit … [truncated]
+         UB = VB("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
+         fB = VB("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
+         kB = VB("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${AB("edit_fil … [truncated]
+         dB = OB ? `2. Then give the whole new code with a write_file call, exactly like this:\n${AB("write_file",{path:RB,why:"what the change does",content:RD.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${AB("write_fi … [truncated]
+         KB = OB ? "" : ` If there is no code yet, write it in ${RB}.`,
+         uB = AB("switch_to_world_code", {}),
+         mB = OB ? yB ? `\n${AD}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
+         IB = zB && VB("use_prefab") && PB.length >= 2,
+         FB = IB ? PB.slice(0, 3).map((BB => BB.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
+         iB = IB ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
+         LB = VB("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
+         gB = VB("plan") ? `\n${"deepseek"===GB?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
+         rB = null !== (DB = PB[0]) && void 0 !== DB ? DB : VY("parkour"),
+         XB = (null !== (QB = null === rB || void 0 === rB ? void 0 : rB.settings) && void 0 !== QB ? QB : []).slice(0, 2).map((BB => `${BB.key}: ${BB.value}`)).join("\n");
+       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
```

#### 203. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6031` → after: `L6031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6031) · [Before (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6031)

```diff
-         AH ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
+         YB ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
```

#### 204. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6034` → after: `L6034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6034) · [Before (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6034)

```diff
-         SH.join("\n")
+         QB.join("\n")
```

#### 205. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6036` → after: `L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6036) · [Before (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6036)

```diff
-       `}(HH,PH,CH)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
+       `}(BB,AB,JB)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
```

#### 206. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6039-L6040` → after: `L6039-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6039-L6040) · [Before (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6039-L6040)

```diff
-     function Ur(HH, BH, LH) {
-       return Object.keys(HH).filter((HH => !LH || !(0, QH.f)(HH))).sort(((HH, LH) => (LH === BH ? 1 : 0) - (HH === BH ? 1 : 0) || HH.localeCompare(LH)))
+     function SD(BB, OB, GB) {
+       return Object.keys(BB).filter((BB => !GB || !(0, qB.f)(BB))).sort(((BB, GB) => (GB === OB ? 1 : 0) - (BB === OB ? 1 : 0) || BB.localeCompare(GB)))
```

#### 207. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6043-L6046` → after: `L6043-L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6043-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6043-L6046) · [Before (L6043-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6043-L6046)

```diff
-     function Vr(HH, BH, LH) {
-       var AH;
-       const rH = Ur(HH, BH, LH);
-       return null !== BH && rH.includes(BH) ? BH : null !== (AH = rH[0]) && void 0 !== AH ? AH : null
+     function nD(BB, OB, GB) {
+       var YB;
+       const DB = SD(BB, OB, GB);
+       return null !== OB && DB.includes(OB) ? OB : null !== (YB = DB[0]) && void 0 !== YB ? YB : null
```

#### 208. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6049-L6050` → after: `L6049-L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6049-L6050) · [Before (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6049-L6050)

```diff
-     function Or(HH) {
-       return HH.includes("index.ts") ? "index.ts" : "index.js"
+     function UD(BB) {
+       return BB.includes("index.ts") ? "index.ts" : "index.js"
```

#### 209. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6053-L6055` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6053-L6055) · [Before (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6053-L6055)

```diff
-     function br(HH) {
-       const BH = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${Or(HH)}`;
-       return `Only ${BH} runs by itself: another file runs when ${BH} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${BH}.\n`
+     function fD(BB) {
+       const OB = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${UD(BB)}`;
+       return `Only ${OB} runs by itself: another file runs when ${OB} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${OB}.\n`
```

#### 210. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6058-L6059` → after: `L6058-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6058-L6059) · [Before (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6058-L6059)

```diff
-     function kr(HH, BH) {
-       var LH;
+     function kD(BB, OB) {
+       var GB;
```

#### 211. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6061-L6066` → after: `L6061-L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6061-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6061-L6066) · [Before (L6061-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6061-L6066)

```diff
-         files: AH,
-         activePath: rH
-       } = HH, SH = !0 === HH.codeBlock, hH = Ur(AH, rH, SH);
-       if (0 === hH.length || hH.every((HH => "" === AH[HH].trim()))) return SH ? "There is no code yet: the code block is empty." : hH.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-       const tH = null !== (LH = Vr(AH, rH, SH)) && void 0 !== LH ? LH : hH[0];
-       return `${hH.length>1?`Their files:\n${hH.map((HH=>{const BH=""===(LH=AH[HH])?0:LH.replace(/\n$/,"").split("\n").length;var LH;return`- ${HH}: ${1===BH?"1 line":`${BH} lines`}${HH===tH?" (open in the editor, its code below)":""}`})).join("\n")}\n${SH?"":br(hH)}\n`:""}${func … [truncated]
+         files: YB,
+         activePath: DB
+       } = BB, QB = !0 === BB.codeBlock, oB = SD(YB, DB, QB);
+       if (0 === oB.length || oB.every((BB => "" === YB[BB].trim()))) return QB ? "There is no code yet: the code block is empty." : oB.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const jB = null !== (GB = nD(YB, DB, QB)) && void 0 !== GB ? GB : oB[0];
+       return `${oB.length>1?`Their files:\n${oB.map((BB=>{const OB=""===(GB=YB[BB])?0:GB.replace(/\n$/,"").split("\n").length;var GB;return`- ${BB}: ${1===OB?"1 line":`${OB} lines`}${BB===jB?" (open in the editor, its code below)":""}`})).join("\n")}\n${QB?"":fD(oB)}\n`:""}${func … [truncated]
```

#### 212. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6069-L6070` → after: `L6069-L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6069-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6069-L6070) · [Before (L6069-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6069-L6070)

```diff
-     function mr(HH) {
-       var BH, LH, AH, rH, SH, hH;
+     function dD(BB) {
+       var OB, GB, YB, DB, QB, oB;
```

#### 213. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6072-L6087` → after: `L6072-L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6072-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6072-L6087) · [Before (L6072-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6072-L6087)

```diff
-         codeBlock: !0 === HH.codeBlock,
-         hasCode: "" !== (null !== (BH = HH.files[null !== (LH = HH.activePath) && void 0 !== LH ? LH : ""]) && void 0 !== BH ? BH : "").trim(),
-         hasBigFile: Object.values(HH.files).some((HH => HH.length > 6e3)),
-         wantsExport: Sr(HH.request),
-         canAsk: !0 === HH.canAsk,
-         canRemember: !0 === (null === (AH = HH.about) || void 0 === AH ? void 0 : AH.canRemember),
-         isBigRequest: YB(HH.request),
-         canLookUp: !0 === HH.canLookUp,
-         hasOtherFiles: Object.keys(HH.files).length > 1,
-         hasErrors: HH.errors.length > 0,
-         canChangeWorldCode: !0 === HH.canChangeWorldCode,
-         hasWorldCodeFiles: Object.keys(HH.files).some(QH.f),
-         addsToEntryFile: !0 === HH.addsToEntryFile,
-         offersPrefabs: (rH = HH.request, SH = HH.files, hH = or(HH), "never" !== hH.offer && ("always" === hH.offer || eA(rH, 1).length > 0 || YB(rH) || !Yr(SH) && Gr.test(rH))),
-         listsPrefabs: or(HH).categories,
-         looksUpDocs: !0 === HH.looksUpDocs
+         codeBlock: !0 === BB.codeBlock,
+         hasCode: "" !== (null !== (OB = BB.files[null !== (GB = BB.activePath) && void 0 !== GB ? GB : ""]) && void 0 !== OB ? OB : "").trim(),
+         hasBigFile: Object.values(BB.files).some((BB => BB.length > 6e3)),
+         wantsExport: QD(BB.request),
+         canAsk: !0 === BB.canAsk,
+         canRemember: !0 === (null === (YB = BB.about) || void 0 === YB ? void 0 : YB.canRemember),
+         isBigRequest: lO(BB.request),
+         canLookUp: !0 === BB.canLookUp,
+         hasOtherFiles: Object.keys(BB.files).length > 1,
+         hasErrors: BB.errors.length > 0,
+         canChangeWorldCode: !0 === BB.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(BB.files).some(qB.f),
+         addsToEntryFile: !0 === BB.addsToEntryFile,
+         offersPrefabs: (DB = BB.request, QB = BB.files, oB = KD(BB), "never" !== oB.offer && ("always" === oB.offer || LY(DB, 1).length > 0 || lO(DB) || !lD(QB) && zD.test(DB))),
+         listsPrefabs: KD(BB).categories,
+         looksUpDocs: !0 === BB.looksUpDocs
```

#### 214. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6091-L6093` → after: `L6091-L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6091-L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6091-L6093) · [Before (L6091-L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6091-L6093)

```diff
-     function or(HH) {
-       var BH;
-       return null !== (BH = HH.prefabs) && void 0 !== BH ? BH : Xr
+     function KD(BB) {
+       var OB;
+       return null !== (OB = BB.prefabs) && void 0 !== OB ? OB : PD
```

#### 215. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6096-L6104` → after: `L6096-L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6096-L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6096-L6104) · [Before (L6096-L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6096-L6104)

```diff
-     function Ir(HH, BH) {
-       return "deepseek" === BH ? function(HH) {
-         const BH = hr[HH ? "codeBlock" : "worldCode"];
-         return VB.filter((HH => BH.has(HH.name)))
-       }(!0 === HH.codeBlock) : function(HH) {
-         const BH = (HH.hasCode || HH.hasBigFile) && !HH.codeBlock || !0 === HH.hasWorldCodeFiles || !0 === HH.addsToEntryFile,
-           LH = !0 === HH.canLookUp,
-           AH = HH.codeBlock && !0 === HH.canChangeWorldCode && !0 !== HH.hasWorldCodeFiles && LH,
-           rH = {
+     function uD(BB, OB) {
+       return "deepseek" === OB ? function(BB) {
+         const OB = oD[BB ? "codeBlock" : "worldCode"];
+         return nO.filter((BB => OB.has(BB.name)))
+       }(!0 === BB.codeBlock) : function(BB) {
+         const OB = (BB.hasCode || BB.hasBigFile) && !BB.codeBlock || !0 === BB.hasWorldCodeFiles || !0 === BB.addsToEntryFile,
+           GB = !0 === BB.canLookUp,
+           YB = BB.codeBlock && !0 === BB.canChangeWorldCode && !0 !== BB.hasWorldCodeFiles && GB,
+           DB = {
```

#### 216. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6106-L6107` → after: `L6106-L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6106-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6106-L6107) · [Before (L6106-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6106-L6107)

```diff
-             edit_file: HH.hasBigFile,
-             replace_function: BH,
+             edit_file: BB.hasBigFile,
+             replace_function: OB,
```

#### 217. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6109-L6126` → after: `L6109-L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6109-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6109-L6126) · [Before (L6109-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6109-L6126)

```diff
-             add_world_code: HH.codeBlock && !0 !== HH.hasWorldCodeFiles,
-             edit_code_in_place: HH.hasCode,
-             export_game: HH.wantsExport,
-             switch_to_world_code: HH.codeBlock,
-             ask_creator: HH.canAsk,
-             remember: !0 === HH.canRemember && !HH.codeBlock,
-             plan: !0 === HH.isBigRequest && HH.canAsk && !HH.codeBlock,
-             view_file: LH && !0 === HH.hasOtherFiles && !HH.codeBlock,
-             view_world_code: AH,
-             view_chunk: LH,
-             view_game_state: LH,
-             get_docs: LH,
-             fetch_url: LH && !0 === HH.looksUpDocs,
-             find_names: LH,
-             view_errors: LH && !0 === HH.hasErrors,
-             use_prefab: !0 === HH.offersPrefabs && !HH.codeBlock,
- ... (2 more removed lines; see GitHub link above)
+             add_world_code: BB.codeBlock && !0 !== BB.hasWorldCodeFiles,
+             edit_code_in_place: BB.hasCode,
+             export_game: BB.wantsExport,
+             switch_to_world_code: BB.codeBlock,
+             ask_creator: BB.canAsk,
+             remember: !0 === BB.canRemember && !BB.codeBlock,
+             plan: !0 === BB.isBigRequest && BB.canAsk && !BB.codeBlock,
+             view_file: GB && !0 === BB.hasOtherFiles && !BB.codeBlock,
+             view_world_code: YB,
+             view_chunk: GB,
+             view_game_state: GB,
+             get_docs: GB,
+             fetch_url: GB && !0 === BB.looksUpDocs,
+             find_names: GB,
+             view_errors: GB && !0 === BB.hasErrors,
+             use_prefab: !0 === BB.offersPrefabs && !BB.codeBlock,
+ ... (2 more added lines; see GitHub link above)
```

#### 218. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6128-L6131` → after: `L6128-L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6128-L6131) · [Before (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6128-L6131)

```diff
-         let SH = VB.filter((HH => rH[HH.name]));
-         for (const hH of ["remember", "plan"]) SH.filter((HH => !OB(HH.name))).length > 7 && (SH = SH.filter((HH => HH.name !== hH)));
-         return SH
-       }(mr(HH))
+         let QB = nO.filter((BB => DB[BB.name]));
+         for (const oB of ["remember", "plan"]) QB.filter((BB => !UO(BB.name))).length > 7 && (QB = QB.filter((BB => BB.name !== oB)));
+         return QB
+       }(dD(BB))
```

#### 219. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6134-L6141` → after: `L6134-L6141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6134-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6134-L6141) · [Before (L6134-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6134-L6141)

```diff
-     function fr(HH, BH) {
-       var LH, AH;
-       const rH = mr(HH),
-         SH = !0 === rH.canLookUp,
-         hH = (null !== (LH = null === (AH = HH.lookups) || void 0 === AH ? void 0 : AH.length) && void 0 !== LH ? LH : 0) > 0,
-         tH = !0 === rH.hasWorldCodeFiles,
-         zH = [rH.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", rH.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", SH ? "" : hH ? "You have looked things up as many times as you can: answer n … [truncated]
-       return zH.length > 0 ? `\n\nFor this request: ${zH.join(" ")}` : ""
+     function mD(BB, OB) {
+       var GB, YB;
+       const DB = dD(BB),
+         QB = !0 === DB.canLookUp,
+         oB = (null !== (GB = null === (YB = BB.lookups) || void 0 === YB ? void 0 : YB.length) && void 0 !== GB ? GB : 0) > 0,
+         jB = !0 === DB.hasWorldCodeFiles,
+         yB = [DB.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", DB.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", QB ? "" : oB ? "You have looked things up as many times as you can: answer n … [truncated]
+       return yB.length > 0 ? `\n\nFor this request: ${yB.join(" ")}` : ""
```

#### 220. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6144-L6146` → after: `L6144-L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6144-L6146) · [Before (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6144-L6146)

```diff
-     function lr(HH, BH) {
-       var LH, AH, rH, SH, hH, tH;
-       let zH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ur,
+     function ID(BB, OB) {
+       var GB, YB, DB, QB, oB, jB;
+       let yB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD,
```

#### 221. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6148-L6149` → after: `L6148-L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6148-L6149) · [Before (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6148-L6149)

```diff
-           docsInTurn: CH = !1,
-           XW: EH = !1
+           docsInTurn: JB = !1,
+           pZ: MB = !1
```

#### 222. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6151-L6183` → after: `L6151-L6183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6151-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6151-L6183) · [Before (L6151-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6151-L6183)

```diff
-       const XH = "deepseek" === zH.format,
-         GH = Object.values(BH.files).join("\n"),
-         YH = BH.history.slice(-2).map((HH => HH.text)).join("\n"),
-         uH = `${BH.request}\n${YH}\n${BH.errors.join("\n")}`,
-         QH = !0 === BH.looksUpDocs,
-         WH = QH && !0 === BH.canLookUp ? [] : HH.find(uH, GH, 12),
-         MH = HH.matchItemAndBlockNames(uH, 12),
-         xH = !0 === BH.codeBlock,
-         vH = xH ? "myId" : "playerId",
-         PH = Ir(BH, zH.format),
-         TH = PH.some((HH => "use_prefab" === HH.name)),
-         UH = !TH || XH && !0 !== mr(BH).offersPrefabs ? [] : function(HH, BH, LH) {
-           if ("never" === LH.offer || "none" === LH.list) return [];
-           if ("all" === LH.list) return [...xA];
-           const AH = eA(HH, 4);
-           if (Yr(BH) || !Gr.test(HH) && !YB(HH)) return AH;
- ... (17 more removed lines; see GitHub link above)
+       const PB = "deepseek" === yB.format,
+         zB = Object.values(OB.files).join("\n"),
+         lB = OB.history.slice(-2).map((BB => BB.text)).join("\n"),
+         pB = `${OB.request}\n${lB}\n${OB.errors.join("\n")}`,
+         qB = !0 === OB.looksUpDocs,
+         ZB = qB && !0 === OB.canLookUp ? [] : BB.find(pB, zB, 12),
+         NB = BB.matchItemAndBlockNames(pB, 12),
+         RB = !0 === OB.codeBlock,
+         WB = RB ? "myId" : "playerId",
+         AB = uD(OB, yB.format),
+         VB = AB.some((BB => "use_prefab" === BB.name)),
+         SB = !VB || PB && !0 !== dD(OB).offersPrefabs ? [] : function(BB, OB, GB) {
+           if ("never" === GB.offer || "none" === GB.list) return [];
+           if ("all" === GB.list) return [...RY];
+           const YB = LY(BB, 4);
+           if (lD(OB) || !zD.test(BB) && !lO(BB)) return YB;
+ ... (17 more added lines; see GitHub link above)
```

#### 223. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6185` → after: `L6185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6185) · [Before (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6185)

```diff
-           content: zr([xH ? Mr(QH) : Qr(QH), ...QH ? [] : [xH ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${HH.index("callback")}` : `## Callbacks (all of them)\n${HH.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: yD([RB ? ND(qB) : qD(qB), ...qB ? [] : [RB ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${BB.index("callback")}` : `## Callbacks (all of them)\n${BB.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```

#### 224. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6192-L6197` → after: `L6192-L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6192-L6197) · [Before (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6192-L6197)

```diff
-             hasWorldCodeFiles: !0 === mr(BH).hasWorldCodeFiles,
-             hasLookedUp: (null !== (LH = null === (AH = BH.lookups) || void 0 === AH ? void 0 : AH.length) && void 0 !== LH ? LH : 0) > 0,
-             movesToWorldCode: !0 === BH.canChangeWorldCode,
-             listedPrefabs: UH,
-             guidesToPrefabs: !0 === or(BH).guide
-           })].filter((HH => "" !== HH)).join("\n\n"), PH, zH.format, zH.nativeTools)
+             hasWorldCodeFiles: !0 === dD(OB).hasWorldCodeFiles,
+             hasLookedUp: (null !== (GB = null === (YB = OB.lookups) || void 0 === YB ? void 0 : YB.length) && void 0 !== GB ? GB : 0) > 0,
+             movesToWorldCode: !0 === OB.canChangeWorldCode,
+             listedPrefabs: SB,
+             guidesToPrefabs: !0 === KD(OB).guide
+           })].filter((BB => "" !== BB)).join("\n\n"), AB, yB.format, yB.nativeTools)
```

#### 225. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6199-L6202` → after: `L6199-L6202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6199-L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6199-L6202) · [Before (L6199-L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6199-L6202)

```diff
-       if (!XH)
-         for (const gH of BH.history) kH.push({
-           role: gH.role,
-           content: gH.text
+       if (!PB)
+         for (const rB of OB.history) kB.push({
+           role: rB.role,
+           content: rB.text
```

#### 226. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6204-L6212` → after: `L6204-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6204-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6204-L6212) · [Before (L6204-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6204-L6212)

```diff
-       const mH = XH && !EH && BH.history.length > 0 ? `Earlier in this chat:\n${BH.history.map((HH=>`${"user"===HH.role?"They asked":"You answered"}: ${HH.text}`)).join("\n")}\n\n` : "",
-         oH = null !== (rH = BH.about) && void 0 !== rH && rH.notes.length ? `AI notes (notes they kept):\n${BH.about.notes.map((HH=>`- ${HH}`)).join("\n")}\n\n` : "",
-         IH = null !== (SH = BH.about) && void 0 !== SH && SH.outline ? `Outline of their code:\n${BH.about.outline}\n\n` : "",
-         fH = BH.errors.length > 0 ? `\n\nErrors their world showed recently:\n${BH.errors.slice(-5).join("\n")}` : "",
-         lH = null === (hH = BH.failedEdits) || void 0 === hH || !hH.length || XH && EH ? "" : `\n\nWhat happened to your last answer's changes:\n${function(HH,BH){return HH.map((HH=>HL[BH].editFailure(HH.tool,Er(HH)))).join("\n\n")}(BH.failedEdits,zH.format)}`,
-         KH = [...CH ? bH : [], ...XH ? [VH, OH] : []].filter((HH => "" !== HH)).map((HH => `${HH}\n\n`)).join(""),
-         cH = null === (tH = BH.lookups) || void 0 === tH || !tH.length || XH && EH ? "" : `\n\nWhat you looked up for this request:\n${eH=BH.lookups,qH=zH.format,eH.map((HH=>HL[qH].lookupResult(HH.tool,HH.about,HH.text))).join("\n\n")}`;
-       var eH, qH;
-       return kH.push({
+       const dB = PB && !MB && OB.history.length > 0 ? `Earlier in this chat:\n${OB.history.map((BB=>`${"user"===BB.role?"They asked":"You answered"}: ${BB.text}`)).join("\n")}\n\n` : "",
+         KB = null !== (DB = OB.about) && void 0 !== DB && DB.notes.length ? `AI notes (notes they kept):\n${OB.about.notes.map((BB=>`- ${BB}`)).join("\n")}\n\n` : "",
+         uB = null !== (QB = OB.about) && void 0 !== QB && QB.outline ? `Outline of their code:\n${OB.about.outline}\n\n` : "",
+         mB = OB.errors.length > 0 ? `\n\nErrors their world showed recently:\n${OB.errors.slice(-5).join("\n")}` : "",
+         IB = null === (oB = OB.failedEdits) || void 0 === oB || !oB.length || PB && MB ? "" : `\n\nWhat happened to your last answer's changes:\n${function(BB,OB){return BB.map((BB=>BG[OB].editFailure(BB.tool,MD(BB)))).join("\n\n")}(OB.failedEdits,yB.format)}`,
+         FB = [...JB ? fB : [], ...PB ? [nB, UB] : []].filter((BB => "" !== BB)).map((BB => `${BB}\n\n`)).join(""),
+         iB = null === (jB = OB.lookups) || void 0 === jB || !jB.length || PB && MB ? "" : `\n\nWhat you looked up for this request:\n${LB=OB.lookups,gB=yB.format,LB.map((BB=>BG[gB].lookupResult(BB.tool,BB.about,BB.text))).join("\n\n")}`;
+       var LB, gB;
+       return kB.push({
```

#### 227. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6215` → after: `L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6215) · [Before (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6215)

```diff
-       }), kH
+       }), kB
```

#### 228. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6217` → after: `L6217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6217) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6217)

```diff
-     var Kr = LH(40679);
+     var FD = GB(40414);
```

#### 229. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6219-L6220` → after: `L6219-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6219-L6220) · [Before (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6219-L6220)

```diff
-     function cr(HH) {
-       var BH, LH, AH, rH, SH, hH;
+     function iD(BB) {
+       var OB, GB, YB, DB, QB, oB;
```

#### 230. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6222-L6224` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6222-L6224) · [Before (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6222-L6224)

```diff
-         args: tH
-       } = HH;
-       switch (HH.name) {
+         args: jB
+       } = BB;
+       switch (BB.name) {
```

#### 231. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6226` → after: `L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6226) · [Before (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6226)

```diff
-           return null !== (BH = tH.path) && void 0 !== BH ? BH : "a file";
+           return null !== (OB = jB.path) && void 0 !== OB ? OB : "a file";
```

#### 232. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6230` → after: `L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6230) · [Before (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6230)

```diff
-           return tH.position ? `the blocks near ${null!==(LH=null===(AH=(0,Kr.c)(tH.position))||void 0===AH?void 0:AH.map(Math.floor).join(", "))&&void 0!==LH?LH:tH.position}` : "the blocks around you";
+           return jB.position ? `the blocks near ${null!==(GB=null===(YB=(0,FD.c)(jB.position))||void 0===YB?void 0:YB.map(Math.floor).join(", "))&&void 0!==GB?GB:jB.position}` : "the blocks around you";
```

#### 233. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6234` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6234) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6234)

```diff
-           return tH.name ? `the docs for ${tH.name}` : `the list of ${qr(null!==(rH=tH.list)&&void 0!==rH?rH:er)}`;
+           return jB.name ? `the docs for ${jB.name}` : `the list of ${gD(null!==(DB=jB.list)&&void 0!==DB?DB:LD)}`;
```

#### 234. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6236-L6240` → after: `L6236-L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6236-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6236-L6240) · [Before (L6236-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6236-L6240)

```diff
-           return function(HH) {
-             const BH = void 0 === HH ? null : PH(HH);
-             if (null === BH) return null !== HH && void 0 !== HH ? HH : "a docs page";
-             return TH(BH) ? "the list of docs pages" : `the docs page ${function(HH){const BH=(0,MH.A)(HH);return null===BH?HH:`${BH.name}${null===BH.part?"":`/${BH.part}`}`}(BH)}`
-           }(tH.url);
+           return function(BB) {
+             const OB = void 0 === BB ? null : AB(BB);
+             if (null === OB) return null !== BB && void 0 !== BB ? BB : "a docs page";
+             return VB(OB) ? "the list of docs pages" : `the docs page ${function(BB){const OB=(0,NB.y)(BB);return null===OB?BB:`${OB.name}${null===OB.part?"":`/${OB.part}`}`}(OB)}`
+           }(jB.url);
```

#### 235. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6242` → after: `L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6242) · [Before (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6242)

```diff
-           return `names for "${null!==(SH=tH.words)&&void 0!==SH?SH:""}"`;
+           return `names for "${null!==(QB=jB.words)&&void 0!==QB?QB:""}"`;
```

#### 236. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6246` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6246) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6246)

```diff
-           return tH.category ? `the ready-made ${tH.category} games` : "the ready-made games";
+           return jB.category ? `the ready-made ${jB.category} games` : "the ready-made games";
```

#### 237. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6248` → after: `L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6248) · [Before (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6248)

```diff
-           return `the ready-made ${null!==(hH=tH.name)&&void 0!==hH?hH:"game"}`
+           return `the ready-made ${null!==(oB=jB.name)&&void 0!==oB?oB:"game"}`
```

#### 238. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6251` → after: `L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6251) · [Before (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6251)

```diff
-     const er = "functions";
+     const LD = "functions";
```

#### 239. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6253-L6254` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6253-L6254) · [Before (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6253-L6254)

```diff
-     function qr(HH) {
-       return HH.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
+     function gD(BB) {
+       return BB.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
```

#### 240. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6257-L6258` → after: `L6257-L6258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6257-L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6257-L6258) · [Before (L6257-L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6257-L6258)

```diff
-     function gr(HH) {
-       return "get_docs" === HH.name || "fetch_url" === HH.name
+     function rD(BB) {
+       return "get_docs" === BB.name || "fetch_url" === BB.name
```

#### 241. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6260-L6263` → after: `L6260-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6260-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6260-L6263) · [Before (L6260-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6260-L6263)

```diff
-     async function Nr(HH, BH) {
-       var LH;
-       const AH = cr(HH),
-         rH = BH => ({
+     async function XD(BB, OB) {
+       var GB;
+       const YB = iD(BB),
+         DB = OB => ({
```

#### 242. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6265-L6267` → after: `L6265-L6267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6265-L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6265-L6267) · [Before (L6265-L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6265-L6267)

```diff
-             tool: HH.name,
-             about: AH,
-             text: BH
+             tool: BB.name,
+             about: YB,
+             text: OB
```

#### 243. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6270` → after: `L6270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6270) · [Before (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6270)

```diff
-       switch (HH.name) {
+       switch (BB.name) {
```

#### 244. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6272` → after: `L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6272) · [Before (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6272)

```diff
-           return rH((tH = HH.args.path, zH = BH.files, void 0 === tH ? "No path was given: give the path of a file from the list." : Object.hasOwn(zH, tH) ? "" === zH[tH] ? `${tH} is empty.` : zH[tH] : `There is no file called ${tH}. Their files are: ${Object.keys(zH).join(", ")} … [truncated]
+           return DB((jB = BB.args.path, yB = OB.files, void 0 === jB ? "No path was given: give the path of a file from the list." : Object.hasOwn(yB, jB) ? "" === yB[jB] ? `${jB} is empty.` : yB[jB] : `There is no file called ${jB}. Their files are: ${Object.keys(yB).join(", ")} … [truncated]
```

#### 245. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6274-L6279` → after: `L6274-L6279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6274-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6274-L6279) · [Before (L6274-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6274-L6279)

```diff
-           const HH = BH.readWorldCode ? await BH.readWorldCode() : null;
-           if (null === HH) return rH("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
-           const LH = Object.keys(HH).sort(),
-             AH = Object.fromEntries(LH.map((BH => [`${QH.i}${BH}`, HH[BH]]))),
-             SH = LH.map((BH => `${QH.i}${BH}:\n${""===HH[BH]?"(empty)":HH[BH]}`)).join("\n\n"),
-             hH = LH.length > 1 ? `\n\n${br(LH,QH.i)}` : "";
+           const BB = OB.readWorldCode ? await OB.readWorldCode() : null;
+           if (null === BB) return DB("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
+           const GB = Object.keys(BB).sort(),
+             YB = Object.fromEntries(GB.map((OB => [`${qB.i}${OB}`, BB[OB]]))),
+             QB = GB.map((OB => `${qB.i}${OB}:\n${""===BB[OB]?"(empty)":BB[OB]}`)).join("\n\n"),
+             oB = GB.length > 1 ? `\n\n${fD(GB,qB.i)}` : "";
```

#### 246. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6281-L6282` → after: `L6281-L6282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6281-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6281-L6282) · [Before (L6281-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6281-L6282)

```diff
-             ...rH("" === SH ? `World Code has no code yet: ${QH.i}index.js is empty.` : `${SH}${hH}`),
-             worldCodeFiles: AH
+             ...DB("" === QB ? `World Code has no code yet: ${qB.i}index.js is empty.` : `${QB}${oB}`),
+             worldCodeFiles: YB
```

#### 247. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6286` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6286) · [Before (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6286)

```diff
-           return rH(await BH.viewChunk((0, Kr.c)(HH.args.position)));
+           return DB(await OB.viewChunk((0, FD.c)(BB.args.position)));
```

#### 248. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6288` → after: `L6288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6288) · [Before (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6288)

```diff
-           return rH(await BH.viewGameState());
+           return DB(await OB.viewGameState());
```

#### 249. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6290-L6293` → after: `L6290-L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6290-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6290-L6293) · [Before (L6290-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6290-L6293)

```diff
-           return rH(function(HH, BH, LH) {
-             if (void 0 === HH) {
-               const HH = (0, VH.d)(vB, qr(null !== BH && void 0 !== BH ? BH : er));
-               return void 0 === HH ? `There is no list called ${BH}: ask for ${PB}.` : LH.index(HH)
+           return DB(function(BB, OB, GB) {
+             if (void 0 === BB) {
+               const BB = (0, nB.c)(WO, gD(null !== OB && void 0 !== OB ? OB : LD));
+               return void 0 === BB ? `There is no list called ${OB}: ask for ${AO}.` : GB.index(BB)
```

#### 250. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6295-L6299` → after: `L6295-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6295-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6295-L6299) · [Before (L6295-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6295-L6299)

```diff
-             const AH = LH.section(HH);
-             if (AH) return AH.text;
-             const rH = LH.find(HH, "", 3).map((HH => HH.name)).join(", ");
-             return `Nothing is called ${HH}.${""===rH?"":` The closest names are: ${rH}.`}`
-           }(HH.args.name, HH.args.list, BH.docs));
+             const YB = GB.section(BB);
+             if (YB) return YB.text;
+             const DB = GB.find(BB, "", 3).map((BB => BB.name)).join(", ");
+             return `Nothing is called ${BB}.${""===DB?"":` The closest names are: ${DB}.`}`
+           }(BB.args.name, BB.args.list, OB.docs));
```

#### 251. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6301` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6301) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6301)

```diff
-           return rH(await BH.fetchDocsPage(null !== (LH = HH.args.url) && void 0 !== LH ? LH : ""));
+           return DB(await OB.fetchDocsPage(null !== (GB = BB.args.url) && void 0 !== GB ? GB : ""));
```

#### 252. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6303-L6305` → after: `L6303-L6305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6303-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6303-L6305) · [Before (L6303-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6303-L6305)

```diff
-           var SH, hH;
-           const LH = BH.docs.searchNames(null !== (SH = HH.args.words) && void 0 !== SH ? SH : "", 20);
-           return rH(LH.length > 0 ? LH.join(", ") : `No block, item or mob name has any of the words "${null!==(hH=HH.args.words)&&void 0!==hH?hH:""}".`)
+           var QB, oB;
+           const GB = OB.docs.searchNames(null !== (QB = BB.args.words) && void 0 !== QB ? QB : "", 20);
+           return DB(GB.length > 0 ? GB.join(", ") : `No block, item or mob name has any of the words "${null!==(oB=BB.args.words)&&void 0!==oB?oB:""}".`)
```

#### 253. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6308)

```diff
-           return rH(BH.errors.length > 0 ? BH.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+           return DB(OB.errors.length > 0 ? OB.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
```

#### 254. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6310` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6310) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6310)

```diff
-           return rH(KA(HH.args.category));
+           return DB(FY(BB.args.category));
```

#### 255. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6312-L6315` → after: `L6312-L6315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6312-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6312-L6315) · [Before (L6312-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6312-L6315)

```diff
-           return rH(function(HH, BH) {
-             const LH = void 0 === HH ? null : TA(HH);
-             return LH ? cA(LH, BH) : `There is no prefab called ${null!==HH&&void 0!==HH?HH:"that"}.\n${KA()}`
-           }(HH.args.name, !0 === BH.showPrefabCode))
+           return DB(function(BB, OB) {
+             const GB = void 0 === BB ? null : VY(BB);
+             return GB ? iY(GB, OB) : `There is no prefab called ${null!==BB&&void 0!==BB?BB:"that"}.\n${FY()}`
+           }(BB.args.name, !0 === OB.showPrefabCode))
```

#### 256. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6317` → after: `L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6317) · [Before (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6317)

```diff
-       var tH, zH
+       var jB, yB
```

#### 257. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6319` → after: `L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6319) · [Before (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6319)

```diff
-     const Rr = [
+     const wD = [
```

#### 258. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6345-L6402` → after: `L6345-L6402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6345-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6345-L6402) · [Before (L6345-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6345-L6402)

```diff
-     function jr(HH) {
-       let BH = HH;
-       for (const [LH, AH] of Rr) BH = BH.replace(LH, (HH => HH.length > 1 && HH[0] !== HH[0].toLowerCase() && HH.slice(1) === HH.slice(1).toLowerCase() ? AH[0].toUpperCase() + AH.slice(1) : AH));
-       return BH
-     }
-     const nr = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       Fr = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       Dr = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       wr = 12e3,
-       Zr = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function dr(HH) {
-       var BH, LH, AH;
-       const rH = null === (BH = /Safety:\s*(\w+)/.exec(HH)) || void 0 === BH ? void 0 : BH[1],
-         SH = null !== (LH = null === (AH = /Categories:\s*(.+)/.exec(HH)) || void 0 === AH ? void 0 : AH[1]) && void 0 !== LH ? LH : "";
-       return /PII/.test(SH) ? "personalInfo" : "Unsafe" === rH || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(SH) ? "unsafe" : "ok"
- ... (42 more removed lines; see GitHub link above)
+     function ED(BB) {
+       let OB = BB;
+       for (const [GB, YB] of wD) OB = OB.replace(GB, (BB => BB.length > 1 && BB[0] !== BB[0].toLowerCase() && BB.slice(1) === BB.slice(1).toLowerCase() ? YB[0].toUpperCase() + YB.slice(1) : YB));
+       return OB
+     }
+     const cD = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       hD = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       aD = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       eD = 12e3,
+       TD = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function bD(BB) {
+       var OB, GB, YB;
+       const DB = null === (OB = /Safety:\s*(\w+)/.exec(BB)) || void 0 === OB ? void 0 : OB[1],
+         QB = null !== (GB = null === (YB = /Categories:\s*(.+)/.exec(BB)) || void 0 === YB ? void 0 : YB[1]) && void 0 !== GB ? GB : "";
+       return /PII/.test(QB) ? "personalInfo" : "Unsafe" === DB || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(QB) ? "unsafe" : "ok"
+ ... (42 more added lines; see GitHub link above)
```

#### 259. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6404-L6407` → after: `L6404-L6407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6404-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6404-L6407) · [Before (L6404-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6404-L6407)

```diff
-           if ("\n" === BH) break;
-           if (LH) LH = "]" !== BH;
-           else if ("[" === BH) LH = !0;
-           else if ("/" === BH) return AH + 1
+           if ("\n" === OB) break;
+           if (GB) GB = "]" !== OB;
+           else if ("[" === OB) GB = !0;
+           else if ("/" === OB) return YB + 1
```

#### 260. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6410-L6431` → after: `L6410-L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6410-L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6410-L6431) · [Before (L6410-L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6410-L6431)

```diff
-       return BH + 1
-     }
- 
-     function HS(HH, BH, LH, AH) {
-       let rH = BH,
-         SH = 0;
-       for (; rH < HH.length;) {
-         const BH = HH[rH],
-           hH = HH[rH + 1];
-         if ("/" === BH && "/" === hH) {
-           const BH = HH.indexOf("\n", rH);
-           AH.push(HH.slice(rH + 2, -1 === BH ? HH.length : BH)), rH = -1 === BH ? HH.length : BH
-         } else if ("/" === BH && "*" === hH) {
-           const BH = HH.indexOf("*/", rH + 2);
-           AH.push(HH.slice(rH + 2, -1 === BH ? HH.length : BH)), rH = -1 === BH ? HH.length : BH + 2
-         } else if ("/" === BH && pr(HH, rH)) rH = yr(HH, rH);
- ... (6 more removed lines; see GitHub link above)
+       return OB + 1
+     }
+ 
+     function BQ(BB, OB, GB, YB) {
+       let DB = OB,
+         QB = 0;
+       for (; DB < BB.length;) {
+         const OB = BB[DB],
+           oB = BB[DB + 1];
+         if ("/" === OB && "/" === oB) {
+           const OB = BB.indexOf("\n", DB);
+           YB.push(BB.slice(DB + 2, -1 === OB ? BB.length : OB)), DB = -1 === OB ? BB.length : OB
+         } else if ("/" === OB && "*" === oB) {
+           const OB = BB.indexOf("*/", DB + 2);
+           YB.push(BB.slice(DB + 2, -1 === OB ? BB.length : OB)), DB = -1 === OB ? BB.length : OB + 2
+         } else if ("/" === OB && xD(BB, DB)) DB = tD(BB, DB);
+ ... (6 more added lines; see GitHub link above)
```

#### 261. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6433-L6436` → after: `L6433-L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6433-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6433-L6436) · [Before (L6433-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6433-L6436)

```diff
-           if (LH && "{" === BH) SH++;
-           else if (LH && "}" === BH) {
-             if (0 === SH) return rH + 1;
-             SH--
+           if (GB && "{" === OB) QB++;
+           else if (GB && "}" === OB) {
+             if (0 === QB) return DB + 1;
+             QB--
```

#### 262. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6438` → after: `L6438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6438) · [Before (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6438)

```diff
-           rH++
+           DB++
```

#### 263. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6441` → after: `L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6441) · [Before (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6441)

```diff
-       return rH
+       return DB
```

#### 264. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6443-L6447` → after: `L6443-L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6443-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6443-L6447) · [Before (L6443-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6443-L6447)

```diff
-     const BS = 4e5;
-     var LS = LH(44970);
-     let AS = [],
-       rS = 0,
-       SS = null;
+     const OQ = 4e5;
+     var GQ = GB(44631);
+     let YQ = [],
+       DQ = 0,
+       QQ = null;
```

#### 265. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6449-L6450` → after: `L6449-L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6449-L6450) · [Before (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6449-L6450)

```diff
-     function hS(HH) {
-       return Math.ceil(HH.length / 4)
+     function oQ(BB) {
+       return Math.ceil(BB.length / 4)
```

#### 266. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6453-L6454` → after: `L6453-L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6453-L6454) · [Before (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6453-L6454)

```diff
-     function tS(HH) {
-       return "number" === typeof HH && Number.isInteger(HH) && HH >= 0
+     function jQ(BB) {
+       return "number" === typeof BB && Number.isInteger(BB) && BB >= 0
```

#### 267. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6457-L6460` → after: `L6457-L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6457-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6457-L6460) · [Before (L6457-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6457-L6460)

```diff
-     function zS(HH, BH, LH) {
-       var AH;
-       let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ! function(HH) {
+     function yQ(BB, OB, GB) {
+       var YB;
+       let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(BB) {
```

#### 268. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6462-L6465` → after: `L6462-L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6462-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6462-L6465) · [Before (L6462-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6462-L6465)

```diff
-         if (AS.push(HH), AS.length >= 40) return void ES();
-         CS()
-       }(null !== (AH = function(HH) {
-         if (null === HH || "object" !== typeof HH) return null;
+         if (YQ.push(BB), YQ.length >= 40) return void MQ();
+         JQ()
+       }(null !== (YB = function(BB) {
+         if (null === BB || "object" !== typeof BB) return null;
```

#### 269. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6467-L6472` → after: `L6467-L6472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6467-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6467-L6472) · [Before (L6467-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6467-L6472)

```diff
-           prompt_tokens: BH,
-           completion_tokens: LH,
-           prompt_tokens_details: AH
-         } = HH;
-         if (!tS(BH) || !tS(LH)) return null;
-         const rH = null !== AH && "object" === typeof AH ? AH.cached_tokens : void 0;
+           prompt_tokens: OB,
+           completion_tokens: GB,
+           prompt_tokens_details: YB
+         } = BB;
+         if (!jQ(OB) || !jQ(GB)) return null;
+         const DB = null !== YB && "object" === typeof YB ? YB.cached_tokens : void 0;
```

#### 270. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6474-L6476` → after: `L6474-L6476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6474-L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6474-L6476) · [Before (L6474-L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6474-L6476)

```diff
-           sent: BH,
-           cached: tS(rH) ? rH : 0,
-           received: LH
+           sent: OB,
+           cached: jQ(DB) ? DB : 0,
+           received: GB
```

#### 271. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6478-L6479` → after: `L6478-L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6478-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6478-L6479) · [Before (L6478-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6478-L6479)

```diff
-       }(HH)) && void 0 !== AH ? AH : {
-         sent: hS(JSON.stringify(BH)),
+       }(BB)) && void 0 !== YB ? YB : {
+         sent: oQ(JSON.stringify(OB)),
```

#### 272. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6481` → after: `L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6481) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6481)

```diff
-         received: hS(LH) + rH
+         received: oQ(GB) + DB
```

#### 273. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6485-L6487` → after: `L6485-L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6485-L6487) · [Before (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6485-L6487)

```diff
-     function CS() {
-       SS ??= setTimeout((() => {
-         ES()
+     function JQ() {
+       QQ ??= setTimeout((() => {
+         MQ()
```

#### 274. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6490-L6494` → after: `L6490-L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6490-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6490-L6494) · [Before (L6490-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6490-L6494)

```diff
-     async function ES() {
-       null !== SS && (clearTimeout(SS), SS = null);
-       const HH = AS.slice(0, 40);
-       AS = AS.slice(40), AS.length > 0 && (SS = setTimeout((() => {
-         ES()
+     async function MQ() {
+       null !== QQ && (clearTimeout(QQ), QQ = null);
+       const BB = YQ.slice(0, 40);
+       YQ = YQ.slice(40), YQ.length > 0 && (QQ = setTimeout((() => {
+         MQ()
```

#### 275. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6496-L6500` → after: `L6496-L6500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6496-L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6496-L6500) · [Before (L6496-L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6496-L6500)

```diff
-       const BH = rS;
-       if (rS = 0, 0 !== HH.length || 0 !== BH) try {
-         await (0, LS.postToGameServer)("/ai-helper/usage", {
-           calls: HH,
-           pastes: BH
+       const OB = DQ;
+       if (DQ = 0, 0 !== BB.length || 0 !== OB) try {
+         await (0, GQ.postToGameServer)("/ai-helper/usage", {
+           calls: BB,
+           pastes: OB
```

#### 276. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6504-L6505` → after: `L6504-L6505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6504-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6504-L6505) · [Before (L6504-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6504-L6505)

```diff
-     const XS = 6e4;
-     const GS = new class {
+     const PQ = 6e4;
+     const zQ = new class {
```

#### 277. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6509-L6511` → after: `L6509-L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6509-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6509-L6511) · [Before (L6509-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6509-L6511)

```diff
-       record(HH) {
-         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         this.calls.set(HH, [...this.recent(HH, BH), BH])
+       record(BB) {
+         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(BB, [...this.recent(BB, OB), OB])
```

#### 278. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6513-L6517` → after: `L6513-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6513-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6513-L6517) · [Before (L6513-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6513-L6517)

```diff
-       markFull(HH) {
-         var BH;
-         let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
-           AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.fullUntil.set(HH, Math.max(null !== (BH = this.fullUntil.get(HH)) && void 0 !== BH ? BH : 0, LH + Math.max(AH, XS)))
+       markFull(BB) {
+         var OB;
+         let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(BB, Math.max(null !== (OB = this.fullUntil.get(BB)) && void 0 !== OB ? OB : 0, GB + Math.max(YB, PQ)))
```

#### 279. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6519-L6521` → after: `L6519-L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6519-L6521) · [Before (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6519-L6521)

```diff
-       callsInLastMinute(HH) {
-         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return this.recent(HH, BH).length
+       callsInLastMinute(BB) {
+         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(BB, OB).length
```

#### 280. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6523-L6528` → after: `L6523-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6523-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6523-L6528) · [Before (L6523-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6523-L6528)

```diff
-       freeAt(HH) {
-         var BH;
-         let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const AH = this.recent(HH, LH),
-           rH = AH.length < 2 ? LH : AH[AH.length - 2] + XS;
-         return Math.max(rH, null !== (BH = this.fullUntil.get(HH)) && void 0 !== BH ? BH : 0, LH)
+       freeAt(BB) {
+         var OB;
+         let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const YB = this.recent(BB, GB),
+           DB = YB.length < 2 ? GB : YB[YB.length - 2] + PQ;
+         return Math.max(DB, null !== (OB = this.fullUntil.get(BB)) && void 0 !== OB ? OB : 0, GB)
```

#### 281. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6530-L6532` → after: `L6530-L6532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6530-L6532) · [Before (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6530-L6532)

```diff
-       firstFreeAt(HH) {
-         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...HH.map((HH => this.freeAt(HH, BH))))
+       firstFreeAt(BB) {
+         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...BB.map((BB => this.freeAt(BB, OB))))
```

#### 282. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6537-L6539` → after: `L6537-L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6537-L6539) · [Before (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6537-L6539)

```diff
-       recent(HH, BH) {
-         var LH;
-         return (null !== (LH = this.calls.get(HH)) && void 0 !== LH ? LH : []).filter((HH => BH - HH < XS))
+       recent(BB, OB) {
+         var GB;
+         return (null !== (GB = this.calls.get(BB)) && void 0 !== GB ? GB : []).filter((BB => OB - BB < PQ))
```

#### 283. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6543-L6544` → after: `L6543-L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6543-L6544) · [Before (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6543-L6544)

```diff
-     function YS(HH) {
-       return HH > 36e5
+     function lQ(BB) {
+       return BB > 36e5
```

#### 284. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6547-L6550` → after: `L6547-L6550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6547-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6547-L6550) · [Before (L6547-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6547-L6550)

```diff
-     function uS(HH, BH) {
-       var LH;
-       const AH = null === (LH = HH.headers.get(BH)) || void 0 === LH ? void 0 : LH.trim();
-       return void 0 !== AH && /^\d+$/.test(AH) ? Number(AH) : null
+     function pQ(BB, OB) {
+       var GB;
+       const YB = null === (GB = BB.headers.get(OB)) || void 0 === GB ? void 0 : GB.trim();
+       return void 0 !== YB && /^\d+$/.test(YB) ? Number(YB) : null
```

#### 285. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6553-L6556` → after: `L6553-L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6553-L6556) · [Before (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6553-L6556)

```diff
-     function QS(HH) {
-       var BH;
-       const LH = null !== (BH = uS(HH, "retry-after")) && void 0 !== BH ? BH : uS(HH, "ratelimit-reset");
-       return null === LH ? null : 1e3 * LH
+     function qQ(BB) {
+       var OB;
+       const GB = null !== (OB = pQ(BB, "retry-after")) && void 0 !== OB ? OB : pQ(BB, "ratelimit-reset");
+       return null === GB ? null : 1e3 * GB
```

#### 286. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6559-L6562` → after: `L6559-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6559-L6562) · [Before (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6559-L6562)

```diff
-     function WS(HH, BH) {
-       var LH;
-       const AH = null !== (LH = QS(BH)) && void 0 !== LH ? LH : 0;
-       (429 === BH.status || YS(AH) && 0 === uS(BH, "ratelimit-remaining")) && GS.markFull(HH, Date.now(), AH)
+     function ZQ(BB, OB) {
+       var GB;
+       const YB = null !== (GB = qQ(OB)) && void 0 !== GB ? GB : 0;
+       (429 === OB.status || lQ(YB) && 0 === pQ(OB, "ratelimit-remaining")) && zQ.markFull(BB, Date.now(), YB)
```

#### 287. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6565-L6568` → after: `L6565-L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6565-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6565-L6568) · [Before (L6565-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6565-L6568)

```diff
-     function MS(HH) {
-       const BH = Date.now(),
-         LH = GS.freeAt(HH, BH) - BH;
-       return LH <= 0 ? null : YS(LH) ? "unavailable" : "busy"
+     function NQ(BB) {
+       const OB = Date.now(),
+         GB = zQ.freeAt(BB, OB) - OB;
+       return GB <= 0 ? null : lQ(GB) ? "unavailable" : "busy"
```

#### 288. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6571-L6572` → after: `L6571-L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6571-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6571-L6572) · [Before (L6571-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6571-L6572)

```diff
-     function xS(HH, BH) {
-       return `${function(HH){var BH;if("string"===typeof HH)return HH;if(429!==HH.status)return`http-${HH.status}`;if(YS(null!==(BH=QS(HH))&&void 0!==BH?BH:0))return"yearly-limit";const LH=uS(HH,"retry-after");return null===LH?"busy":`busy-ra${LH}`}(BH)}__${HH.replace(/[^A-Za-z0- … [truncated]
+     function RQ(BB, OB) {
+       return `${function(BB){var OB;if("string"===typeof BB)return BB;if(429!==BB.status)return`http-${BB.status}`;if(lQ(null!==(OB=qQ(BB))&&void 0!==OB?OB:0))return"yearly-limit";const GB=pQ(BB,"retry-after");return null===GB?"busy":`busy-ra${GB}`}(OB)}__${BB.replace(/[^A-Za-z0- … [truncated]
```

#### 289. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6574-L6576` → after: `L6574-L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6574-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6574-L6576) · [Before (L6574-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6574-L6576)

```diff
-     const vS = new class {
-         constructor(HH) {
-           this.loadReporter = HH, this.reportedCodes = new Set
+     const WQ = new class {
+         constructor(BB) {
+           this.loadReporter = BB, this.reportedCodes = new Set
```

#### 290. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6578-L6580` → after: `L6578-L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6578-L6580) · [Before (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6578-L6580)

```diff
-         XX(HH, BH) {
-           const LH = xS(HH, BH);
-           "undefined" === typeof window || this.reportedCodes.has(LH) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(LH), this.loadReporter().then((BH => {
+         jP(BB, OB) {
+           const GB = RQ(BB, OB);
+           "undefined" === typeof window || this.reportedCodes.has(GB) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(GB), this.loadReporter().then((OB => {
```

#### 291. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6582-L6586` → after: `L6582-L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6582-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6582-L6586) · [Before (L6582-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6582-L6586)

```diff
-               reportCappedWasmFailure: AH
-             } = BH;
-             AH("ai_helper_failed", `World Code AI: ${HH} failed`, LH)
-           })).catch((HH => {
-             console.error("World Code AI: couldn't report a failure", HH)
+               reportCappedWasmFailure: YB
+             } = OB;
+             YB("ai_helper_failed", `World Code AI: ${BB} failed`, GB)
+           })).catch((BB => {
+             console.error("World Code AI: couldn't report a failure", BB)
```

#### 292. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6589-L6601` → after: `L6589-L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6589-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6589-L6601) · [Before (L6589-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6589-L6601)

```diff
-       }((() => LH.e(212).then((() => LH(34821))))),
-       PS = /\n{3,}/,
-       TS = /<tool_call\b|<function=/;
- 
-     function US(HH) {
-       const BH = HH.trimStart(),
-         LH = PS.exec(BH),
-         AH = TS.exec(BH);
-       if (null === LH || null !== AH && AH.index < LH.index) return null;
-       const rH = BH.slice(LH.index + LH[0].length);
-       return "" === rH.trim() ? null : rH
-     }
-     const VS = [{
+       }((() => GB.e(212).then((() => GB(34626))))),
+       AQ = /\n{3,}/,
+       VQ = /<tool_call\b|<function=/;
+ 
+     function SQ(BB) {
+       const OB = BB.trimStart(),
+         GB = AQ.exec(OB),
+         YB = VQ.exec(OB);
+       if (null === GB || null !== YB && YB.index < GB.index) return null;
+       const DB = OB.slice(GB.index + GB[0].length);
+       return "" === DB.trim() ? null : DB
+     }
+     const nQ = [{
```

#### 293. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6620` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6620) · [Before (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6620)

```diff
-     const OS = {
+     const UQ = {
```

#### 294. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6627-L6628` → after: `L6627-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6627-L6628) · [Before (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6627-L6628)

```diff
-     function bS(HH) {
-       return [...VS, OS].find((BH => BH.name === HH))
+     function fQ(BB) {
+       return [...nQ, UQ].find((OB => OB.name === BB))
```

#### 295. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6631-L6633` → after: `L6631-L6633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6631-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6631-L6633) · [Before (L6631-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6631-L6633)

```diff
-     function kS(HH) {
-       var BH, LH;
-       return null !== (BH = null === (LH = bS(HH)) || void 0 === LH ? void 0 : LH.callFormat) && void 0 !== BH ? BH : "simple"
+     function kQ(BB) {
+       var OB, GB;
+       return null !== (OB = null === (GB = fQ(BB)) || void 0 === GB ? void 0 : GB.callFormat) && void 0 !== OB ? OB : "simple"
```

#### 296. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6636-L6637` → after: `L6636-L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6636-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6636-L6637) · [Before (L6636-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6636-L6637)

```diff
-     function mS(HH) {
-       var BH;
+     function dQ(BB) {
+       var OB;
```

#### 297. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6639-L6640` → after: `L6639-L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6639-L6640) · [Before (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6639-L6640)

```diff
-         format: null !== (BH = HH.callFormat) && void 0 !== BH ? BH : "simple",
-         nativeTools: !0 === HH.nativeTools
+         format: null !== (OB = BB.callFormat) && void 0 !== OB ? OB : "simple",
+         nativeTools: !0 === BB.nativeTools
```

#### 298. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6644-L6645` → after: `L6644-L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6644-L6645) · [Before (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6644-L6645)

```diff
-     function oS(HH, BH) {
-       return "function" === typeof HH ? HH(BH) : HH
+     function KQ(BB, OB) {
+       return "function" === typeof BB ? BB(OB) : BB
```

#### 299. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6647-L6653` → after: `L6647-L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6647-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6647-L6653) · [Before (L6647-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6647-L6653)

```diff
-     const IS = "TOO_COMPLEX",
-       fS = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${IS} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       lS = 24e4,
-       KS = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class cS extends Error {
-       constructor(HH) {
-         super(`World Code AI ${HH}`), this.reason = HH
+     const uQ = "TOO_COMPLEX",
+       mQ = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${uQ} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       IQ = 24e4,
+       FQ = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class iQ extends Error {
+       constructor(BB) {
+         super(`World Code AI ${BB}`), this.reason = BB
```

#### 300. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6657-L6659` → after: `L6657-L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6657-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6657-L6659) · [Before (L6657-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6657-L6659)

```diff
-     function eS(HH, BH) {
-       var LH, AH, rH, SH, hH;
-       const tH = HH[null !== (LH = BH.index) && void 0 !== LH ? LH : 0] ??= {
+     function LQ(BB, OB) {
+       var GB, YB, DB, QB, oB;
+       const jB = BB[null !== (GB = OB.index) && void 0 !== GB ? GB : 0] ??= {
```

#### 301. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6663)

```diff
-       tH.name += null !== (AH = null === (rH = BH.function) || void 0 === rH ? void 0 : rH.name) && void 0 !== AH ? AH : "", tH.args += null !== (SH = null === (hH = BH.function) || void 0 === hH ? void 0 : hH.arguments) && void 0 !== SH ? SH : ""
+       jB.name += null !== (YB = null === (DB = OB.function) || void 0 === DB ? void 0 : DB.name) && void 0 !== YB ? YB : "", jB.args += null !== (QB = null === (oB = OB.function) || void 0 === oB ? void 0 : oB.arguments) && void 0 !== QB ? QB : ""
```

#### 302. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6666-L6667` → after: `L6666-L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6666-L6667) · [Before (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6666-L6667)

```diff
-     function qS(HH) {
-       return "mcp" === HH ? "simple" : HH
+     function gQ(BB) {
+       return "mcp" === BB ? "simple" : BB
```

#### 303. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6670-L6672` → after: `L6670-L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6670-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6670-L6672) · [Before (L6670-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6670-L6672)

```diff
-     function gS(HH, BH, LH, AH) {
-       let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return NS(HH, BH, LH, qS(AH), rH).answer
+     function rQ(BB, OB, GB, YB) {
+       let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return XQ(BB, OB, GB, gQ(YB), DB).answer
```

#### 304. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6675-L6678` → after: `L6675-L6678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6675-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6675-L6678) · [Before (L6675-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6675-L6678)

```diff
-     function NS(HH, BH, LH, AH, rH) {
-       const SH = LH.flatMap((HH => {
-         const BH = GL(HH.name, HH.args);
-         return null === BH ? [] : [tr(AL(AH), BH.name, BH.args)]
+     function XQ(BB, OB, GB, YB, DB) {
+       const QB = GB.flatMap((BB => {
+         const OB = zG(BB.name, BB.args);
+         return null === OB ? [] : [jD(YG(YB), OB.name, OB.args)]
```

#### 305. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6680-L6687` → after: `L6680-L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6680-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6680-L6687) · [Before (L6680-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6680-L6687)

```diff
-       let hH = !1;
-       return 0 !== SH.length || 0 !== uL(HH, AH).length || HH.includes("```") || (SH.push(...rH ? [] : function(HH, BH) {
-         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const AH = new Map;
-         for (const tH of YL(HH, BH)) {
-           const HH = Object.values(tH.args).some((HH => void 0 !== HH && LH.includes(HH.trim())));
-           var rH, SH, hH;
-           "export_game" === tH.name || "switch_to_world_code" === tH.name || OB(tH.name) || HH || AH.set(`${tH.name} ${null!==(rH=tH.args.path)&&void 0!==rH?rH:""} ${null!==(SH=tH.args.search)&&void 0!==SH?SH:""} ${null!==(hH=tH.args.name)&&void 0!==hH?hH:""}`, tH.source)
+       let oB = !1;
+       return 0 !== QB.length || 0 !== pG(BB, YB).length || BB.includes("```") || (QB.push(...DB ? [] : function(BB, OB) {
+         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const YB = new Map;
+         for (const jB of lG(BB, OB)) {
+           const BB = Object.values(jB.args).some((BB => void 0 !== BB && GB.includes(BB.trim())));
+           var DB, QB, oB;
+           "export_game" === jB.name || "switch_to_world_code" === jB.name || UO(jB.name) || BB || YB.set(`${jB.name} ${null!==(DB=jB.args.path)&&void 0!==DB?DB:""} ${null!==(QB=jB.args.search)&&void 0!==QB?QB:""} ${null!==(oB=jB.args.name)&&void 0!==oB?oB:""}`, jB.source)
```

#### 306. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6689-L6692` → after: `L6689-L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6689-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6689-L6692) · [Before (L6689-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6689-L6692)

```diff
-         return [...new Set(AH.values())]
-       }(BH, AH, vr)), hH = SH.length > 0), {
-         answer: [HH, ...SH].join("\n\n").trim(),
-         hasCallsFromReasoning: hH
+         return [...new Set(YB.values())]
+       }(OB, YB, WD)), oB = QB.length > 0), {
+         answer: [BB, ...QB].join("\n\n").trim(),
+         hasCallsFromReasoning: oB
```

#### 307. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6695-L6698` → after: `L6695-L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6695-L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6695-L6698) · [Before (L6695-L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6695-L6698)

```diff
-     async function RS(HH, BH) {
-       const LH = HH.getReader(),
-         AH = new TextDecoder;
-       let rH = "";
+     async function wQ(BB, OB) {
+       const GB = BB.getReader(),
+         YB = new TextDecoder;
+       let DB = "";
```

#### 308. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6701-L6705` → after: `L6701-L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6701-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6701-L6705) · [Before (L6701-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6701-L6705)

```diff
-           done: HH,
-           value: SH
-         } = await LH.read();
-         if (HH) break;
-         rH += AH.decode(SH, {
+           done: BB,
+           value: QB
+         } = await GB.read();
+         if (BB) break;
+         DB += YB.decode(QB, {
```

#### 309. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6708-L6714` → after: `L6708-L6714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6708-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6708-L6714) · [Before (L6708-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6708-L6714)

```diff
-         let hH = rH.indexOf("\n");
-         for (; - 1 !== hH;) {
-           const HH = rH.slice(0, hH).trim();
-           if (rH = rH.slice(hH + 1), hH = rH.indexOf("\n"), !HH.startsWith("data:")) continue;
-           const LH = HH.slice(5).trim();
-           if ("[DONE]" === LH) return;
-           let AH;
+         let oB = DB.indexOf("\n");
+         for (; - 1 !== oB;) {
+           const BB = DB.slice(0, oB).trim();
+           if (DB = DB.slice(oB + 1), oB = DB.indexOf("\n"), !BB.startsWith("data:")) continue;
+           const GB = BB.slice(5).trim();
+           if ("[DONE]" === GB) return;
+           let YB;
```

#### 310. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6716` → after: `L6716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6716) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6716)

```diff
-             AH = JSON.parse(LH)
+             YB = JSON.parse(GB)
```

#### 311. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6720` → after: `L6720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6720) · [Before (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6720)

```diff
-           BH(AH)
+           OB(YB)
```

#### 312. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6725-L6726` → after: `L6725-L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6725-L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6725-L6726) · [Before (L6725-L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6725-L6726)

```diff
-     function jS(HH) {
-       return HH.map((HH => ({
+     function EQ(BB) {
+       return BB.map((BB => ({
```

#### 313. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6729-L6731` → after: `L6729-L6731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6729-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6729-L6731) · [Before (L6729-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6729-L6731)

```diff
-           name: HH.name,
-           description: HH.description,
-           parameters: HH.inputSchema
+           name: BB.name,
+           description: BB.description,
+           parameters: BB.inputSchema
```

#### 314. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6736-L6737` → after: `L6736-L6737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6736-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6736-L6737) · [Before (L6736-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6736-L6737)

```diff
-     function nS(HH) {
-       return "object" === typeof HH
+     function cQ(BB) {
+       return "object" === typeof BB
```

#### 315. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6739-L6744` → after: `L6739-L6744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6739-L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6739-L6744) · [Before (L6739-L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6739-L6744)

```diff
-     async function FS(HH, BH, LH, AH) {
-       let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const SH = MS(HH.name);
-       if (null !== SH) return SH;
-       GS.record(HH.name);
-       const hH = await fetch(nr, {
+     async function hQ(BB, OB, GB, YB) {
+       let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const QB = NQ(BB.name);
+       if (null !== QB) return QB;
+       zQ.record(BB.name);
+       const oB = await fetch(cD, {
```

#### 316. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6750-L6751` → after: `L6750-L6751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6750-L6751) · [Before (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6750-L6751)

```diff
-           model: HH.name,
-           messages: BH,
+           model: BB.name,
+           messages: OB,
```

#### 317. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6753-L6754` → after: `L6753-L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6753-L6754) · [Before (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6753-L6754)

```diff
-           temperature: HH.temperature,
-           reasoning_effort: HH.reasoningEffort,
+           temperature: BB.temperature,
+           reasoning_effort: BB.reasoningEffort,
```

#### 318. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6759-L6760` → after: `L6759-L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6759-L6760) · [Before (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6759-L6760)

```diff
-           ...HH.nativeTools && rH.length > 0 ? {
-             tools: jS(rH)
+           ...BB.nativeTools && DB.length > 0 ? {
+             tools: EQ(DB)
```

#### 319. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6765` → after: `L6765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6765) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6765)

```diff
-         signal: LH
+         signal: GB
```

#### 320. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6767-L6775` → after: `L6767-L6775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6767-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6767-L6775) · [Before (L6767-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6767-L6775)

```diff
-       if (WS(HH.name, hH), 429 === hH.status) return vS.XX(HH.name, hH), "unavailable" === MS(HH.name) ? "unavailable" : "busy";
-       if (!hH.ok || !hH.body) return console.warn(`World Code AI: ${HH.name} answered ${hH.status}`), vS.XX(HH.name, hH.ok ? "empty" : hH), hH.ok ? "failed" : 429 === (tH = hH.status) ? "busy" : 400 === tH || 413 === tH ? "tooLarge" : 401 === tH || 403 === tH ? "turnedAway" : "fa … [truncated]
-       var tH;
-       let zH = "",
-         CH = "";
-       const EH = [];
-       let XH = !1,
-         GH = !1,
-         YH = null;
+       if (ZQ(BB.name, oB), 429 === oB.status) return WQ.jP(BB.name, oB), "unavailable" === NQ(BB.name) ? "unavailable" : "busy";
+       if (!oB.ok || !oB.body) return console.warn(`World Code AI: ${BB.name} answered ${oB.status}`), WQ.jP(BB.name, oB.ok ? "empty" : oB), oB.ok ? "failed" : 429 === (jB = oB.status) ? "busy" : 400 === jB || 413 === jB ? "tooLarge" : 401 === jB || 403 === jB ? "turnedAway" : "fa … [truncated]
+       var jB;
+       let yB = "",
+         JB = "";
+       const MB = [];
+       let PB = !1,
+         zB = !1,
+         lB = null;
```

#### 321. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6777-L6783` → after: `L6777-L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6777-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6777-L6783) · [Before (L6777-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6777-L6783)

```diff
-         await async function(HH, BH, LH) {
-           await RS(HH, (HH => {
-             var AH;
-             const rH = HH,
-               SH = null === (AH = rH.choices) || void 0 === AH ? void 0 : AH[0];
-             var hH, tH;
-             SH && BH(null !== (hH = SH.delta) && void 0 !== hH ? hH : {}, null !== (tH = SH.finish_reason) && void 0 !== tH ? tH : null), rH.usage && (null === LH || void 0 === LH || LH(rH.usage))
+         await async function(BB, OB, GB) {
+           await wQ(BB, (BB => {
+             var YB;
+             const DB = BB,
+               QB = null === (YB = DB.choices) || void 0 === YB ? void 0 : YB[0];
+             var oB, jB;
+             QB && OB(null !== (oB = QB.delta) && void 0 !== oB ? oB : {}, null !== (jB = QB.finish_reason) && void 0 !== jB ? jB : null), DB.usage && (null === GB || void 0 === GB || GB(DB.usage))
```

#### 322. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6785-L6790` → after: `L6785-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6785-L6790) · [Before (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6785-L6790)

```diff
-         }(hH.body, ((BH, LH) => {
-           var rH, SH, hH, tH;
-           XH ||= "length" === LH, CH += null !== (rH = null !== (SH = BH.reasoning) && void 0 !== SH ? SH : BH.reasoning_content) && void 0 !== rH ? rH : "", zH += null !== (hH = BH.content) && void 0 !== hH ? hH : "";
-           for (const HH of null !== (YH = BH.tool_calls) && void 0 !== YH ? YH : []) {
-             var YH;
-             GH ||= "" !== CH && "" === zH.trim(), eS(EH, HH)
+         }(oB.body, ((OB, GB) => {
+           var DB, QB, oB, jB;
+           PB ||= "length" === GB, JB += null !== (DB = null !== (QB = OB.reasoning) && void 0 !== QB ? QB : OB.reasoning_content) && void 0 !== DB ? DB : "", yB += null !== (oB = OB.content) && void 0 !== oB ? oB : "";
+           for (const BB of null !== (lB = OB.tool_calls) && void 0 !== lB ? lB : []) {
+             var lB;
+             zB ||= "" !== JB && "" === yB.trim(), LQ(MB, BB)
```

#### 323. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6792-L6797` → after: `L6792-L6797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6792-L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6792-L6797) · [Before (L6792-L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6792-L6797)

```diff
-           const uH = HH.nativeTools && GH ? null !== (tH = US(zH)) && void 0 !== tH ? tH : "" : zH;
-           null === AH || void 0 === AH || AH({
-             model: HH.name,
-             reasoningChars: CH.length,
-             answer: uH,
-             isCalling: EH.length > 0
+           const pB = BB.nativeTools && zB ? null !== (jB = SQ(yB)) && void 0 !== jB ? jB : "" : yB;
+           null === YB || void 0 === YB || YB({
+             model: BB.name,
+             reasoningChars: JB.length,
+             answer: pB,
+             isCalling: MB.length > 0
```

#### 324. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6799-L6800` → after: `L6799-L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6799-L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6799-L6800) · [Before (L6799-L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6799-L6800)

```diff
-         }), (HH => {
-           YH = HH
+         }), (BB => {
+           lB = BB
```

#### 325. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6803` → after: `L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6803) · [Before (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6803)

```diff
-         zS(YH, BH, zH + CH, 20 * EH.length)
+         yQ(lB, OB, yB + JB, 20 * MB.length)
```

#### 326. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6805-L6822` → after: `L6805-L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6805-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6805-L6822) · [Before (L6805-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6805-L6822)

```diff
-       const uH = DS(HH, zH, CH, EH, XH, GH);
-       return null === uH ? (vS.XX(HH.name, "empty"), "failed") : uH
-     }
- 
-     function DS(HH, BH, LH, AH, rH) {
-       var SH;
-       let hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         tH = BH;
-       var zH;
-       HH.nativeTools && hH && (tH = null !== (zH = US(tH)) && void 0 !== zH ? zH : tH);
-       tH = tH.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const CH = NS(tH, LH, AH, null !== (SH = HH.callFormat) && void 0 !== SH ? SH : "simple", rH);
-       return "" === CH.answer ? null : {
-         model: HH.name,
-         answer: CH.answer,
-         reasoning: LH,
- ... (2 more removed lines; see GitHub link above)
+       const pB = aQ(BB, yB, JB, MB, PB, zB);
+       return null === pB ? (WQ.jP(BB.name, "empty"), "failed") : pB
+     }
+ 
+     function aQ(BB, OB, GB, YB, DB) {
+       var QB;
+       let oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         jB = OB;
+       var yB;
+       BB.nativeTools && oB && (jB = null !== (yB = SQ(jB)) && void 0 !== yB ? yB : jB);
+       jB = jB.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const JB = XQ(jB, GB, YB, null !== (QB = BB.callFormat) && void 0 !== QB ? QB : "simple", DB);
+       return "" === JB.answer ? null : {
+         model: BB.name,
+         answer: JB.answer,
+         reasoning: GB,
+ ... (2 more added lines; see GitHub link above)
```

#### 327. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6826-L6827` → after: `L6826-L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6826-L6827) · [Before (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6826-L6827)

```diff
-     function wS(HH) {
-       return HH.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     function eQ(BB) {
+       return BB.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 328. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6830-L6831` → after: `L6830-L6831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6830-L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6830-L6831) · [Before (L6830-L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6830-L6831)

```diff
-     function ZS(HH) {
-       return nS(HH) && !HH.isCutShort
+     function TQ(BB) {
+       return cQ(BB) && !BB.isCutShort
```

#### 329. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6833-L6836` → after: `L6833-L6836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6833-L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6833-L6836) · [Before (L6833-L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6833-L6836)

```diff
-     async function dS(HH, BH, LH, AH, rH) {
-       const SH = HH.map((() => new AbortController)),
-         hH = () => {
-           for (const HH of SH) HH.abort()
+     async function bQ(BB, OB, GB, YB, DB) {
+       const QB = BB.map((() => new AbortController)),
+         oB = () => {
+           for (const BB of QB) BB.abort()
```

#### 330. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6838` → after: `L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6838) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6838)

```diff
-       null !== LH && void 0 !== LH && LH.aborted && hH(), null === LH || void 0 === LH || LH.addEventListener("abort", hH, {
+       null !== GB && void 0 !== GB && GB.aborted && oB(), null === GB || void 0 === GB || GB.addEventListener("abort", oB, {
```

#### 331. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6841-L6855` → after: `L6841-L6855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6841-L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6841-L6855) · [Before (L6841-L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6841-L6855)

```diff
-       const tH = HH.map((() => {})),
-         zH = HH.map((() => {}));
-       let CH = null;
-       const EH = HH => void 0 !== HH && ("" !== wS(HH.answer).trim() || !0 === HH.isCalling);
-       let XH = () => {};
-       HH.forEach(((HH, LH) => {
-         const hH = (0, xH.d)(lS, SH[LH].signal);
-         FS(HH, oS(BH, HH), hH.signal, (HH => {
-           zH[LH] = HH, null === CH && EH(HH) && (CH = LH), CH === LH && (null === AH || void 0 === AH || AH(HH))
-         }), rH).catch((BH => {
-           if (SH[LH].signal.aborted) return "failed";
-           const AH = hH.signal.aborted;
-           return console.warn(`World Code AI: ${HH.name} ${AH?"took longer than 240 s":"couldn't be reached"}`, BH), vS.XX(HH.name, AH ? "timeout" : "network"), AH ? "timeout" : "failed"
-         })).then((HH => {
-           hH.clear(), tH[LH] = HH, CH !== LH || ZS(HH) || (CH = null), XH()
+       const jB = BB.map((() => {})),
+         yB = BB.map((() => {}));
+       let JB = null;
+       const MB = BB => void 0 !== BB && ("" !== eQ(BB.answer).trim() || !0 === BB.isCalling);
+       let PB = () => {};
+       BB.forEach(((BB, GB) => {
+         const oB = (0, RB.d)(IQ, QB[GB].signal);
+         hQ(BB, KQ(OB, BB), oB.signal, (BB => {
+           yB[GB] = BB, null === JB && MB(BB) && (JB = GB), JB === GB && (null === YB || void 0 === YB || YB(BB))
+         }), DB).catch((OB => {
+           if (QB[GB].signal.aborted) return "failed";
+           const YB = oB.signal.aborted;
+           return console.warn(`World Code AI: ${BB.name} ${YB?"took longer than 240 s":"couldn't be reached"}`, OB), WQ.jP(BB.name, YB ? "timeout" : "network"), YB ? "timeout" : "failed"
+         })).then((BB => {
+           oB.clear(), jB[GB] = BB, JB !== GB || TQ(BB) || (JB = null), PB()
```

#### 332. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6858-L6863` → after: `L6858-L6863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6858-L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6858-L6863) · [Before (L6858-L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6858-L6863)

```diff
-       const GH = () => {
-         var HH;
-         if (null !== CH) {
-           const HH = tH[CH];
-           return ZS(HH) ? {
-             reply: HH
+       const zB = () => {
+         var BB;
+         if (null !== JB) {
+           const BB = jB[JB];
+           return TQ(BB) ? {
+             reply: BB
```

#### 333. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6866-L6868` → after: `L6866-L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6866-L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6866-L6868) · [Before (L6866-L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6866-L6868)

```diff
-         const BH = tH.find(ZS);
-         if (BH) return {
-           reply: BH
+         const OB = jB.find(TQ);
+         if (OB) return {
+           reply: OB
```

#### 334. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6870-L6871` → after: `L6870-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6870-L6871) · [Before (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6870-L6871)

```diff
-         if (!tH.includes(void 0)) return {
-           reply: null !== (HH = tH.find(nS)) && void 0 !== HH ? HH : null
+         if (!jB.includes(void 0)) return {
+           reply: null !== (BB = jB.find(cQ)) && void 0 !== BB ? BB : null
```

#### 335. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6874-L6878` → after: `L6874-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6874-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6874-L6878) · [Before (L6874-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6874-L6878)

```diff
-           const HH = tH.findIndex(((HH, BH) => void 0 === HH && EH(zH[BH])));
-           if (-1 !== HH) {
-             CH = HH;
-             const BH = zH[HH];
-             BH && (null === AH || void 0 === AH || AH(BH))
+           const BB = jB.findIndex(((BB, OB) => void 0 === BB && MB(yB[OB])));
+           if (-1 !== BB) {
+             JB = BB;
+             const OB = yB[BB];
+             OB && (null === YB || void 0 === YB || YB(OB))
```

#### 336. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6884-L6887` → after: `L6884-L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6884-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6884-L6887) · [Before (L6884-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6884-L6887)

```diff
-           if (null !== LH && void 0 !== LH && LH.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const HH = GH();
-           if (HH) {
-             const BH = tH.filter((HH => "string" === typeof HH));
+           if (null !== GB && void 0 !== GB && GB.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const BB = zB();
+           if (BB) {
+             const OB = jB.filter((BB => "string" === typeof BB));
```

#### 337. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6889-L6890` → after: `L6889-L6890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6889-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6889-L6890) · [Before (L6889-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6889-L6890)

```diff
-               reply: HH.reply,
-               failures: BH
+               reply: BB.reply,
+               failures: OB
```

#### 338. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6893-L6894` → after: `L6893-L6894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6893-L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6893-L6894) · [Before (L6893-L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6893-L6894)

```diff
-           await new Promise((HH => {
-             XH = HH
+           await new Promise((BB => {
+             PB = BB
```

#### 339. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6898` → after: `L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6898) · [Before (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6898)

```diff
-         null === LH || void 0 === LH || LH.removeEventListener("abort", hH), hH()
+         null === GB || void 0 === GB || GB.removeEventListener("abort", oB), oB()
```

#### 340. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6902-L6917` → after: `L6902-L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6902-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6902-L6917) · [Before (L6902-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6902-L6917)

```diff
-     function aS() {
-       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       const BH = GS.firstFreeAt(VS.map((HH => HH.name)), HH);
-       return YS(BH - HH) ? HH : BH
-     }
-     async function sS(HH) {
-       var BH;
-       let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const AH = Date.now(),
-         rH = null !== (BH = LH.models) && void 0 !== BH ? BH : VS,
-         SH = void 0 === LH.models ? function(HH, BH) {
-           let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-           const AH = HH.map((HH => ({
-               model: HH,
-               key: LH()
-             }))).sort(((HH, BH) => HH.key - BH.key)).map((HH => {
+     function CQ() {
+       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const OB = zQ.firstFreeAt(nQ.map((BB => BB.name)), BB);
+       return lQ(OB - BB) ? BB : OB
+     }
+     async function HQ(BB) {
+       var OB;
+       let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const YB = Date.now(),
+         DB = null !== (OB = GB.models) && void 0 !== OB ? OB : nQ,
+         QB = void 0 === GB.models ? function(BB, OB) {
+           let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+           const YB = BB.map((BB => ({
+               model: BB,
+               key: GB()
+             }))).sort(((BB, OB) => BB.key - OB.key)).map((BB => {
```

#### 341. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6919-L6921` → after: `L6919-L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6919-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6919-L6921) · [Before (L6919-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6919-L6921)

```diff
-                 model: BH
-               } = HH;
-               return BH
+                 model: OB
+               } = BB;
+               return OB
```

#### 342. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6923-L6937` → after: `L6923-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6923-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6923-L6937) · [Before (L6923-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6923-L6937)

```diff
-             rH = [],
-             SH = [];
-           for (const zH of AH) BH(zH) ? rH.push(zH) : SH.push(zH);
-           const hH = [...rH, ...SH],
-             tH = [];
-           for (let zH = 0; zH < hH.length; zH += 2) tH.push(hH.slice(zH, zH + 2));
-           return tH
-         }(rH, (HH => GS.freeAt(HH.name, AH) <= AH)) : rH.map((HH => [HH])),
-         hH = [];
-       for (const zH of SH) {
-         const BH = await dS(zH, HH, LH.signal, LH.onProgress, LH.tools);
-         if (null !== BH.reply) {
-           const rH = zH.find((HH => {
-             var LH;
-             return HH.name === (null === (LH = BH.reply) || void 0 === LH ? void 0 : LH.model)
+             DB = [],
+             QB = [];
+           for (const yB of YB) OB(yB) ? DB.push(yB) : QB.push(yB);
+           const oB = [...DB, ...QB],
+             jB = [];
+           for (let yB = 0; yB < oB.length; yB += 2) jB.push(oB.slice(yB, yB + 2));
+           return jB
+         }(DB, (BB => zQ.freeAt(BB.name, YB) <= YB)) : DB.map((BB => [BB])),
+         oB = [];
+       for (const yB of QB) {
+         const OB = await bQ(yB, BB, GB.signal, GB.onProgress, GB.tools);
+         if (null !== OB.reply) {
+           const DB = yB.find((BB => {
+             var GB;
+             return BB.name === (null === (GB = OB.reply) || void 0 === GB ? void 0 : GB.model)
```

#### 343. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6940-L6941` → after: `L6940-L6941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6940-L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6940-L6941) · [Before (L6940-L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6940-L6941)

```diff
-             ...rH && !1 !== LH.canNudge ? await pS(rH, oS(HH, rH), BH.reply, LH.signal, LH.onProgress, LH.tools) : BH.reply,
-             ms: Date.now() - AH
+             ...DB && !1 !== GB.canNudge ? await xQ(DB, KQ(BB, DB), OB.reply, GB.signal, GB.onProgress, GB.tools) : OB.reply,
+             ms: Date.now() - YB
```

#### 344. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6944` → after: `L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6944) · [Before (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6944)

```diff
-         hH.push(...BH.failures)
+         oB.push(...OB.failures)
```

#### 345. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6946-L6947` → after: `L6946-L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6946-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6946-L6947) · [Before (L6946-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6946-L6947)

```diff
-       const tH = KS.find((HH => hH.includes(HH)));
-       throw new cS(null !== tH && void 0 !== tH ? tH : "failed")
+       const jB = FQ.find((BB => oB.includes(BB)));
+       throw new iQ(null !== jB && void 0 !== jB ? jB : "failed")
```

#### 346. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6949` → after: `L6949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6949) · [Before (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6949)

```diff
-     const JS = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const vQ = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 347. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6951-L6953` → after: `L6951-L6953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6951-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6951-L6953) · [Before (L6951-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6951-L6953)

```diff
-     function iS(HH) {
-       const BH = HH.trim();
-       return BH.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(BH) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(BH) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function sQ(BB) {
+       const OB = BB.trim();
+       return OB.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(OB) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(OB) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 348. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6960` → after: `L6960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6960) · [Before (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6960)

```diff
-         }(LH, null !== (hH = HH.callFormat) && void 0 !== hH ? hH : "simple")) return LH;
+         }(GB, null !== (oB = BB.callFormat) && void 0 !== oB ? oB : "simple")) return GB;
```

#### 349. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6971` → after: `L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6971) · [Before (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6971)

```diff
-         return nS(BH) && "" !== BH.answer.trim() ? BH : LH
+         return cQ(OB) && "" !== OB.answer.trim() ? OB : GB
```

#### 350. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6974` → after: `L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L6974) · [Before (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L6974)

```diff
-         return vS.XX(HH.name, CH.signal.aborted ? "timeout" : "network"), LH
+         return WQ.jP(BB.name, JB.signal.aborted ? "timeout" : "network"), GB
```

#### 351. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7027-L7028` → after: `L7027-L7028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7027-L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7027-L7028) · [Before (L7027-L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7027-L7028)

```diff
-         if (WS(HH, LH), 429 === LH.status) return vS.XX(HH, LH), "busy";
-         if (!LH.ok) return vS.XX(HH, LH), null;
+         if (ZQ(BB, GB), 429 === GB.status) return WQ.jP(BB, GB), "busy";
+         if (!GB.ok) return WQ.jP(BB, GB), null;
```

#### 352. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7030` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7030) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7030)

```diff
-           CH = String(null !== (rH = null === (SH = zH.choices) || void 0 === SH || null === (hH = SH[0]) || void 0 === hH || null === (tH = hH.message) || void 0 === tH ? void 0 : tH.content) && void 0 !== rH ? rH : "");
+           JB = String(null !== (DB = null === (QB = yB.choices) || void 0 === QB || null === (oB = QB[0]) || void 0 === oB || null === (jB = oB.message) || void 0 === jB ? void 0 : jB.content) && void 0 !== DB ? DB : "");
```

#### 353. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7034` → after: `L7034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7034) · [Before (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7034)

```diff
-           }(CH) ? CH : null
+           }(JB) ? JB : null
```

#### 354. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7037` → after: `L7037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7037) · [Before (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7037)

```diff
-         return vS.XX(HH, AH.signal.aborted ? "timeout" : "network"), null
+         return WQ.jP(BB, YB.signal.aborted ? "timeout" : "network"), null
```

#### 355. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7042-L7043` → after: `L7042-L7043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7042-L7043) · [Before (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7042-L7043)

```diff
-     var rh = LH(30),
-       Sh = LH(37716);
+     var Do = GB(31),
+       Qo = GB(37543);
```

#### 356. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7047-L7048` → after: `L7047-L7048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7047-L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7047-L7048) · [Before (L7047-L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7047-L7048)

```diff
-       const HH = rh.e.getItem(hh);
-       return null !== HH && "object" === typeof HH ? HH : {}
+       const BB = Do.g.getItem(oo);
+       return null !== BB && "object" === typeof BB ? BB : {}
```

#### 357. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7058` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7058) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7058)

```diff
-         return null === this.player ? null : null !== (HH = null !== (BH = this.unsaved.get(this.player)) && void 0 !== BH ? BH : th()[this.player]) && void 0 !== HH ? HH : null
+         return null === this.player ? null : null !== (BB = null !== (OB = this.unsaved.get(this.player)) && void 0 !== OB ? OB : jo()[this.player]) && void 0 !== BB ? BB : null
```

#### 358. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7069-L7070` → after: `L7069-L7070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7069-L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7069-L7070) · [Before (L7069-L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7069-L7070)

```diff
-           } = await Promise.resolve().then((() => LH(1070)));
-           return null !== (HH = null === (BH = AH.peekCurrentUserContext()) || void 0 === BH ? void 0 : BH.whamm) && void 0 !== HH ? HH : null
+           } = await Promise.resolve().then((() => GB(1121)));
+           return null !== (BB = null === (OB = YB.peekCurrentUserContext()) || void 0 === OB ? void 0 : OB.whamm) && void 0 !== BB ? BB : null
```

#### 359. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7075` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7075) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7075)

```diff
-         null !== this.player && (rh.e.setItem(hh, {
+         null !== this.player && (Do.g.setItem(oo, {
```

#### 360. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7098` → after: `L7098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7098) · [Before (L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7098)

```diff
-       const LH = `\n[... ${HH.length-BH} more characters cut]`;
+       const GB = `\n[... ${BB.length-OB} more characters cut]`;
```

#### 361. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7103-L7104` → after: `L7103-L7104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7103-L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7103-L7104) · [Before (L7103-L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7103-L7104)

```diff
-     var Wh = LH(625),
-       Mh = LH(4765);
+     var No = GB(645),
+       Ro = GB(4792);
```

#### 362. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7126` → after: `L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7126) · [Before (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7126)

```diff
-         clientVersion: String(Wh.d),
+         clientVersion: String(No.b),
```

#### 363. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7141` → after: `L7141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7141) · [Before (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7141)

```diff
-         this.XX = HH, this.chatId = (0, Mh.b)(12), this.open = new Map
+         this.jP = BB, this.chatId = (0, Ro.d)(12), this.open = new Map
```

#### 364. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7145` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7145) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7145)

```diff
-         LH && (clearTimeout(LH.timer), BH || (this.open.delete(HH), this.send(LH.XX)))
+         GB && (clearTimeout(GB.timer), OB || (this.open.delete(BB), this.send(GB.jP)))
```

#### 365. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7150` → after: `L7150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7150) · [Before (L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7150)

```diff
-         if (AH) return void(AH.XX.responses.length < Yh && AH.XX.responses.push(Ph(LH)));
+         if (YB) return void(YB.jP.responses.length < po && YB.jP.responses.push(Vo(GB)));
```

#### 366. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7153` → after: `L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7153) · [Before (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7153)

```diff
-           XX: rH
+           jP: DB
```

#### 367. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7163` → after: `L7163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7163) · [Before (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7163)

```diff
-           this.open.delete(HH), this.send(BH.XX)
+           this.open.delete(BB), this.send(OB.jP)
```

#### 368. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7169` → after: `L7169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7169) · [Before (L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7169)

```diff
-         })(HH) && this.XX(HH)
+         })(BB) && this.jP(BB)
```

#### 369. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7184` → after: `L7184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7184) · [Before (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7184)

```diff
-             XX: BH
+             jP: OB
```

#### 370. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7195` → after: `L7195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7195) · [Before (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7195)

```diff
-       "yes" === HH && LH.length > 0 && mh(LH.map((HH => HH.XX)))
+       "yes" === BB && GB.length > 0 && uo(GB.map((BB => BB.jP)))
```

#### 371. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7198` → after: `L7198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7198) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7198)

```diff
-       const BH = Promise.resolve().then((() => LH(44970)));
+       const OB = Promise.resolve().then((() => GB(44631)));
```

#### 372. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7208-L7209` → after: `L7208-L7209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7208-L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7208-L7209) · [Before (L7208-L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7208-L7209)

```diff
-     var oh = LH(317),
-       Ih = LH(152);
+     var mo = GB(353),
+       Io = GB(162);
```

#### 373. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7266` → after: `L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7266) · [Before (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7266)

```diff
-       return "https:" !== BH.protocol && ("http:" !== BH.protocol || !LH) || BH.username || BH.password || BH.search ? null : `${BH.origin}${BH.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== OB.protocol && ("http:" !== OB.protocol || !GB) || OB.username || OB.password || OB.search ? null : `${OB.origin}${OB.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 374. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7275` → after: `L7275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7275) · [Before (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7275)

```diff
-         super(`AI key request: ${HH}`), this.problem = HH, this.retryAfterMs = BH, this.status = LH, this.detail = AH
+         super(`AI key request: ${BB}`), this.problem = BB, this.retryAfterMs = OB, this.status = GB, this.detail = YB
```

#### 375. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7280` → after: `L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7280) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7280)

```diff
-       return ("" === BH ? HH : HH.split(BH).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === OB ? BB : BB.split(OB).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 376. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7287)

```diff
-           return `${LH} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${GB} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 377. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7291` → after: `L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7291) · [Before (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7291)

```diff
-           return `${LH} can't find that model. Check its name.`;
+           return `${GB} can't find that model. Check its name.`;
```

#### 378. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7293` → after: `L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7293) · [Before (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7293)

```diff
-           return "anthropic" === BH ? "Claude didn't accept your key: check it, or make a new one." : "custom" === BH ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === OB ? "Claude didn't accept your key: check it, or make a new one." : "custom" === OB ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 379. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7295` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7295) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7295)

```diff
-           return "custom" === BH ? "That server stopped your key for now: it has used all it can." : `${LH} stopped your key for now: it has used all it can. Check it on ${LH}'s website.`;
+           return "custom" === OB ? "That server stopped your key for now: it has used all it can." : `${GB} stopped your key for now: it has used all it can. Check it on ${GB}'s website.`;
```

#### 380. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7297` → after: `L7297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7297) · [Before (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7297)

```diff
-           return `${LH} doesn't work from where you are.`;
+           return `${GB} doesn't work from where you are.`;
```

#### 381. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7301` → after: `L7301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7301) · [Before (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7301)

```diff
-           return `${LH} had a problem with that. Try again in a minute.`
+           return `${GB} had a problem with that. Try again in a minute.`
```

#### 382. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7327` → after: `L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7327) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7327)

```diff
-         }(BH)) throw new Error(`AI key request to an unknown host for ${HH}`);
+         }(OB)) throw new Error(`AI key request to an unknown host for ${BB}`);
```

#### 383. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7336` → after: `L7336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7336) · [Before (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7336)

```diff
-         throw console.warn(`AI key request: ${HH} answered ${rH.status}`), new Nh(function(HH, BH, LH) {
+         throw console.warn(`AI key request: ${BB} answered ${DB.status}`), new Eo(function(BB, OB, GB) {
```

#### 384. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7343` → after: `L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7343) · [Before (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7343)

```diff
-           return Number.isFinite(LH) ? 1e3 * LH : Math.max(0, Date.parse(BH) - Date.now()) || void 0
+           return Number.isFinite(GB) ? 1e3 * GB : Math.max(0, Date.parse(OB) - Date.now()) || void 0
```

#### 385. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7350` → after: `L7350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7350) · [Before (L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7350)

```diff
-             LH = "string" === typeof rH ? rH : HH
+             GB = "string" === typeof DB ? DB : BB
```

#### 386. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7399` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7399) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7399)

```diff
-         UrH: hH,
+         FDB: oB,
```

#### 387. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7407` → after: `L7407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7407) · [Before (L7407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7407)

```diff
-         const hH = null !== (LH = null === (AH = HH.match(/```/g)) || void 0 === AH ? void 0 : AH.length) && void 0 !== LH ? LH : 0,
+         const oB = null !== (GB = null === (YB = BB.match(/```/g)) || void 0 === YB ? void 0 : YB.length) && void 0 !== GB ? GB : 0,
```

#### 388. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7420` → after: `L7420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7420) · [Before (L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7420)

```diff
-         written: tH ? XH : void 0,
+         written: jB ? PB : void 0,
```

#### 389. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7432` → after: `L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7432) · [Before (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7432)

```diff
-       const AH = null !== (LH = BH.tools) && void 0 !== LH ? LH : [];
+       const YB = null !== (GB = OB.tools) && void 0 !== GB ? GB : [];
```

#### 390. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7483` → after: `L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7483) · [Before (L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7483)

```diff
-             models: (null !== (BH = (await LH.json()).data) && void 0 !== BH ? BH : []).map((HH => ({
+             models: (null !== (OB = (await GB.json()).data) && void 0 !== OB ? OB : []).map((BB => ({
```

#### 391. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7510` → after: `L7510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7510) · [Before (L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7510)

```diff
-           return await RS(null !== (rH = SH.body) && void 0 !== rH ? rH : new ReadableStream, (BH => {
+           return await wQ(null !== (DB = QB.body) && void 0 !== DB ? DB : new ReadableStream, (OB => {
```

#### 392. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7515-L7516` → after: `L7515-L7516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7515-L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7515-L7516) · [Before (L7515-L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7515-L7516)

```diff
-             tH += null !== (rH = null !== (SH = null === MH || void 0 === MH || null === (XH = MH.delta) || void 0 === XH ? void 0 : XH.reasoning) && void 0 !== SH ? SH : null === MH || void 0 === MH || null === (GH = MH.delta) || void 0 === GH ? void 0 : GH.reasoning_content) && … [truncated]
-             for (const HH of null !== (xH = null === MH || void 0 === MH || null === (vH = MH.delta) || void 0 === vH ? void 0 : vH.tool_calls) && void 0 !== xH ? xH : []) {
+             jB += null !== (DB = null !== (QB = null === NB || void 0 === NB || null === (PB = NB.delta) || void 0 === PB ? void 0 : PB.reasoning) && void 0 !== QB ? QB : null === NB || void 0 === NB || null === (zB = NB.delta) || void 0 === zB ? void 0 : zB.reasoning_content) && … [truncated]
+             for (const BB of null !== (RB = null === NB || void 0 === NB || null === (WB = NB.delta) || void 0 === WB ? void 0 : WB.tool_calls) && void 0 !== RB ? RB : []) {
```

#### 393. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7529` → after: `L7529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7529) · [Before (L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7529)

```diff
-             UrH: zH,
+             FDB: yB,
```

#### 394. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7549` → after: `L7549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7549) · [Before (L7549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7549)

```diff
-         return await dh(Fh, HH, (async HH => Zh("openrouter", `${fh.openrouter.baseUrl}/key`, {
+         return await Ho(eo, BB, (async BB => Co("openrouter", `${Fo.openrouter.baseUrl}/key`, {
```

#### 395. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7570` → after: `L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7570) · [Before (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7570)

```diff
-             models: (null !== (BH = (await LH.json()).data) && void 0 !== BH ? BH : []).map((HH => ({
+             models: (null !== (OB = (await GB.json()).data) && void 0 !== OB ? OB : []).map((BB => ({
```

#### 396. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7603` → after: `L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7603) · [Before (L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7603)

```diff
-           await RS(null !== (SH = hH.body) && void 0 !== SH ? SH : new ReadableStream, (BH => {
+           await wQ(null !== (QB = oB.body) && void 0 !== QB ? QB : new ReadableStream, (OB => {
```

#### 397. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7608-L7609` → after: `L7608-L7609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7608-L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7608-L7609) · [Before (L7608-L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7608-L7609)

```diff
-             if ("content_block_start" === SH.type && "tool_use" === (null === (AH = SH.content_block) || void 0 === AH ? void 0 : AH.type)) XH.set(null !== (YH = SH.index) && void 0 !== YH ? YH : XH.size, {
-               name: null !== (uH = SH.content_block.name) && void 0 !== uH ? uH : "",
+             if ("content_block_start" === QB.type && "tool_use" === (null === (YB = QB.content_block) || void 0 === YB ? void 0 : YB.type)) PB.set(null !== (lB = QB.index) && void 0 !== lB ? lB : PB.size, {
+               name: null !== (pB = QB.content_block.name) && void 0 !== pB ? pB : "",
```

#### 398. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7614-L7615` → after: `L7614-L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7614-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7614-L7615) · [Before (L7614-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7614-L7615)

```diff
-               tH += null !== (QH = null === (WH = SH.delta) || void 0 === WH ? void 0 : WH.text) && void 0 !== QH ? QH : "", zH += null !== (MH = null === (xH = SH.delta) || void 0 === xH ? void 0 : xH.thinking) && void 0 !== MH ? MH : "";
-               const HH = XH.get(null !== (vH = SH.index) && void 0 !== vH ? vH : -1);
+               jB += null !== (qB = null === (ZB = QB.delta) || void 0 === ZB ? void 0 : ZB.text) && void 0 !== qB ? qB : "", yB += null !== (NB = null === (RB = QB.delta) || void 0 === RB ? void 0 : RB.thinking) && void 0 !== NB ? NB : "";
+               const BB = PB.get(null !== (WB = QB.index) && void 0 !== WB ? WB : -1);
```

#### 399. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7617` → after: `L7617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7617) · [Before (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7617)

```diff
-               if (HH && "input_json_delta" === (null === (PH = SH.delta) || void 0 === PH ? void 0 : PH.type)) HH.args += null !== (TH = SH.delta.partial_json) && void 0 !== TH ? TH : ""
+               if (BB && "input_json_delta" === (null === (AB = QB.delta) || void 0 === AB ? void 0 : AB.type)) BB.args += null !== (VB = QB.delta.partial_json) && void 0 !== VB ? VB : ""
```

#### 400. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7633` → after: `L7633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7633) · [Before (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7633)

```diff
-             UrH: CH,
+             FDB: JB,
```

#### 401. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7659` → after: `L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7659) · [Before (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7659)

```diff
-             models: (null !== (BH = (await LH.json()).models) && void 0 !== BH ? BH : []).filter((HH => {
+             models: (null !== (OB = (await GB.json()).models) && void 0 !== OB ? OB : []).filter((BB => {
```

#### 402. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7682)

```diff
-           const hH = await Zh("gemini", `${this.baseUrl}/models/${encodeURIComponent(HH)}:streamGenerateContent?alt=sse`, {
+           const oB = await Co("gemini", `${this.baseUrl}/models/${encodeURIComponent(BB)}:streamGenerateContent?alt=sse`, {
```

#### 403. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7701` → after: `L7701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7701) · [Before (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7701)

```diff
-           return await RS(null !== (SH = hH.body) && void 0 !== SH ? SH : new ReadableStream, (BH => {
+           return await wQ(null !== (QB = oB.body) && void 0 !== QB ? QB : new ReadableStream, (OB => {
```

#### 404. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7705` → after: `L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7705) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7705)

```diff
-             for (const HH of null !== (YH = null === GH || void 0 === GH || null === (uH = GH.content) || void 0 === uH ? void 0 : uH.parts) && void 0 !== YH ? YH : []) {
+             for (const BB of null !== (lB = null === zB || void 0 === zB || null === (pB = zB.content) || void 0 === pB ? void 0 : pB.parts) && void 0 !== lB ? lB : []) {
```

#### 405. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7708-L7709` → after: `L7708-L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7708-L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7708-L7709) · [Before (L7708-L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7708-L7709)

```diff
-                 name: null !== (QH = HH.functionCall.name) && void 0 !== QH ? QH : "",
-                 args: JSON.stringify(null !== (WH = HH.functionCall.args) && void 0 !== WH ? WH : {})
+                 name: null !== (qB = BB.functionCall.name) && void 0 !== qB ? qB : "",
+                 args: JSON.stringify(null !== (ZB = BB.functionCall.args) && void 0 !== ZB ? ZB : {})
```

#### 406. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7713` → after: `L7713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7713) · [Before (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7713)

```diff
-                 zH += null !== (MH = HH.text) && void 0 !== MH ? MH : ""
+                 yB += null !== (NB = BB.text) && void 0 !== NB ? NB : ""
```

#### 407. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7716` → after: `L7716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7716) · [Before (L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7716)

```diff
-                 tH += null !== (xH = HH.text) && void 0 !== xH ? xH : ""
+                 jB += null !== (RB = BB.text) && void 0 !== RB ? RB : ""
```

#### 408. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7728` → after: `L7728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7728) · [Before (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7728)

```diff
-             UrH: CH,
+             FDB: JB,
```

#### 409. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7753` → after: `L7753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7753) · [Before (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7753)

```diff
-           return new ph("custom", null !== LH && void 0 !== LH ? LH : "", BH)
+           return new Bj("custom", null !== GB && void 0 !== GB ? GB : "", OB)
```

#### 410. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7881` → after: `L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7881) · [Before (L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7881)

```diff
-         name: null !== (AH = null === rH || void 0 === rH ? void 0 : rH.name) && void 0 !== AH ? AH : BH,
+         name: null !== (YB = null === DB || void 0 === DB ? void 0 : DB.name) && void 0 !== YB ? YB : OB,
```

#### 411. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7905` → after: `L7905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7905) · [Before (L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7905)

```diff
-       return null !== (BH = HH.find((HH => "smart" === HH.tier))) && void 0 !== BH ? BH : HH[0]
+       return null !== (OB = BB.find((BB => "smart" === BB.tier))) && void 0 !== OB ? OB : BB[0]
```

#### 412. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7911` → after: `L7911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7911) · [Before (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7911)

```diff
-       return null !== (BH = HH.name) && void 0 !== BH ? BH : gh(HH.provider, HH.baseUrl, LH)
+       return null !== (OB = BB.name) && void 0 !== OB ? OB : wo(BB.provider, BB.baseUrl, GB)
```

#### 413. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7928` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7928) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7928)

```diff
-         return new URL(null !== (BH = HH.baseUrl) && void 0 !== BH ? BH : "").protocol.startsWith("http")
+         return new URL(null !== (OB = BB.baseUrl) && void 0 !== OB ? OB : "").protocol.startsWith("http")
```

#### 414. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7938` → after: `L7938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7938) · [Before (L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7938)

```diff
-         return console.warn(`AI Helper: no ${HH}`, BH), null
+         return console.warn(`AI Helper: no ${BB}`, OB), null
```

#### 415. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7950` → after: `L7950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7950) · [Before (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7950)

```diff
-         this.state = null !== AH && void 0 !== AH && AH.remember ? null !== rH && void 0 !== rH && rH.remember ? rH : {
+         this.state = null !== YB && void 0 !== YB && YB.remember ? null !== DB && void 0 !== DB && DB.remember ? DB : {
```

#### 416. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7953` → after: `L7953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7953) · [Before (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7953)

```diff
-         } : null !== (LH = null !== AH && void 0 !== AH ? AH : rH) && void 0 !== LH ? LH : Gt, this.ownsRemembered = this.state.remember && null !== rH
+         } : null !== (GB = null !== YB && void 0 !== YB ? YB : DB) && void 0 !== GB ? GB : pj, this.ownsRemembered = this.state.remember && null !== DB
```

#### 417. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7970-L7971` → after: `L7970-L7971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7970-L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7970-L7971) · [Before (L7970-L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7970-L7971)

```diff
-           tH = "custom" !== HH.provider ? HH.provider : null !== (AH = null === hH || void 0 === hH ? void 0 : hH.id) && void 0 !== AH ? AH : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           zH = void 0 === BH ? Ct(HH.models) : null !== (rH = HH.models.find((HH => HH.id === BH))) && void 0 !== rH ? rH : HH.models[0],
+           jB = "custom" !== BB.provider ? BB.provider : null !== (YB = null === oB || void 0 === oB ? void 0 : oB.id) && void 0 !== YB ? YB : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           yB = void 0 === OB ? Pj(BB.models) : null !== (DB = BB.models.find((BB => BB.id === OB))) && void 0 !== DB ? DB : BB.models[0],
```

#### 418. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7986` → after: `L7986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L7986) · [Before (L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L7986)

```diff
-           YH = GH ? this.state.keys.filter((HH => HH.id !== tH)).map((HH => HH.id === LH ? EH : HH)) : XH ? [...this.state.keys, EH] : this.state.keys.map((HH => HH.id === tH ? EH : HH)),
+           lB = zB ? this.state.keys.filter((BB => BB.id !== jB)).map((BB => BB.id === GB ? MB : BB)) : PB ? [...this.state.keys, MB] : this.state.keys.map((BB => BB.id === jB ? MB : BB)),
```

#### 419. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8005` → after: `L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8005) · [Before (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8005)

```diff
-             return "" === LH ? rH : {
+             return "" === GB ? DB : {
```

#### 420. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8100` → after: `L8100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8100) · [Before (L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8100)

```diff
-           AH = (null !== (BH = null === LH || void 0 === LH ? void 0 : LH.keys) && void 0 !== BH ? BH : []).filter((HH => this.state.keys.every((BH => !Yt(BH, HH)))));
+           YB = (null !== (OB = null === GB || void 0 === GB ? void 0 : GB.keys) && void 0 !== OB ? OB : []).filter((BB => this.state.keys.every((OB => !qj(OB, BB)))));
```

#### 421. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8144` → after: `L8144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8144) · [Before (L8144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8144)

```diff
-           return Array.isArray(BH.keys) && BH.keys.every(ut) ? BH : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(OB.keys) && OB.keys.every(Zj) ? OB : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 422. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8186` → after: `L8186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8186) · [Before (L8186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8186)

```diff
-       const tH = null !== (LH = null === hH || void 0 === hH ? void 0 : hH.trim()) && void 0 !== LH ? LH : "";
+       const jB = null !== (GB = null === oB || void 0 === oB ? void 0 : oB.trim()) && void 0 !== GB ? GB : "";
```

#### 423. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8216` → after: `L8216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8216) · [Before (L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8216)

```diff
-               return 0 !== (null !== (LH = null === (AH = BH.tools) || void 0 === AH ? void 0 : AH.length) && void 0 !== LH ? LH : 0) && HH instanceof Nh && "failed" === HH.problem && (400 === HH.status || 404 === HH.status && /\btool/i.test(null !== (rH = HH.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (GB = null === (YB = OB.tools) || void 0 === YB ? void 0 : YB.length) && void 0 !== GB ? GB : 0) && BB instanceof Eo && "failed" === BB.problem && (400 === BB.status || 404 === BB.status && /\btool/i.test(null !== (DB = BB.detail) && void 0 != … [truncated]
```

#### 424. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8231)

```diff
-         return await (zH = Math.min(null !== (hH = null !== (tH = XH.retryAfterMs) && void 0 !== tH ? tH : LH.retryWaitMs) && void 0 !== hH ? hH : 3e3, 2e4), CH = LH.signal, new Promise(((HH, BH) => {
+         return await (yB = Math.min(null !== (oB = null !== (jB = PB.retryAfterMs) && void 0 !== jB ? jB : GB.retryWaitMs) && void 0 !== oB ? oB : 3e3, 2e4), JB = GB.signal, new Promise(((BB, OB) => {
```

#### 425. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8243` → after: `L8243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8243) · [Before (L8243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8243)

```diff
-     var Pt = LH(3998);
+     var Sj = GB(4062);
```

#### 426. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8360` → after: `L8360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8360) · [Before (L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8360)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${Nt((null!==(BH=HH.availableFrom)&&void 0!==BH?BH:LH)-LH)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${Ej((null!==(OB=BB.availableFrom)&&void 0!==OB?OB:GB)-GB)} to go.`;
```

#### 427. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8362` → after: `L8362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8362) · [Before (L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8362)

```diff
-           return HH.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(HH,BH){const LH=Math.ceil((HH-BH)/36e5);if(LH<=24)return LH<=1?"within the hour":`in ${LH} hours`;return`in ${Nt(HH-BH)}`}(HH.resetsAt,LH)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return BB.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(BB,OB){const GB=Math.ceil((BB-OB)/36e5);if(GB<=24)return GB<=1?"within the hour":`in ${GB} hours`;return`in ${Ej(BB-OB)}`}(BB.resetsAt,GB)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 428. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8393` → after: `L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8393) · [Before (L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8393)

```diff
-       return `Usage left: ${HH.left}`
+       return `Usage left: ${BB.left}`
```

#### 429. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8397-L8398` → after: `L8397-L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8397-L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8397-L8398) · [Before (L8397-L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8397-L8398)

```diff
-       const BH = Math.max(1, Math.ceil(HH / oh.j));
-       return 1 === BH ? "1 day" : `${BH} days`
+       const OB = Math.max(1, Math.ceil(BB / mo.g));
+       return 1 === OB ? "1 day" : `${OB} days`
```

#### 430. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8403` → after: `L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8403) · [Before (L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8403)

```diff
-       if (LH) return `${LH} Bot.xd is answering instead.`;
+       if (GB) return `${GB} Bot.xd is answering instead.`;
```

#### 431. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8422` → after: `L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8422) · [Before (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8422)

```diff
-           return HH.messages.length > 12 || HH.messages.some((HH => HH.content.length > BS)) || (null !== (BH = null === (LH = HH.toolsJson) || void 0 === LH ? void 0 : LH.length) && void 0 !== BH ? BH : 0) > 1e5 || (null !== (AH = null === (rH = HH.request) || void 0 === rH ? vo … [truncated]
+           return BB.messages.length > 12 || BB.messages.some((BB => BB.content.length > OQ)) || (null !== (OB = null === (GB = BB.toolsJson) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : 0) > 1e5 || (null !== (YB = null === (DB = BB.request) || void 0 === DB ? vo … [truncated]
```

#### 432. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8429` → after: `L8429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8429) · [Before (L8429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8429)

```diff
-         if (BH instanceof Ih.e && 413 === BH.httpCode) return {
+         if (OB instanceof Io.d && 413 === OB.httpCode) return {
```

#### 433. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8447-L8449` → after: `L8447-L8449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8447-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8447-L8449) · [Before (L8447-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8447-L8449)

```diff
-     var Ft = LH(18),
-       Dt = LH(15),
-       wt = LH(2388);
+     var ej = GB(25),
+       Tj = GB(16),
+       bj = GB(2437);
```

#### 434. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8453` → after: `L8453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8453) · [Before (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8453)

```diff
-       Zt ??= Promise.resolve().then((() => LH(2397))), Zt.then((HH => {
+       Cj ??= Promise.resolve().then((() => GB(2444))), Cj.then((BB => {
```

#### 435. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8475` → after: `L8475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8475) · [Before (L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8475)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => LH(1352))), LH.e(663).then((() => LH(64126)))]);
+         }] = await Promise.all([Promise.resolve().then((() => GB(1400))), GB.e(663).then((() => GB(63904)))]);
```

#### 436. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8482` → after: `L8482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8482) · [Before (L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8482)

```diff
-                   Ft.k.AX("OpenStoreFromCodeEditor"), (0, wt.k)({
+                   ej.o.tM("OpenStoreFromCodeEditor"), (0, bj.p)({
```

#### 437. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8487-L8488` → after: `L8487-L8488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8487-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8487-L8488) · [Before (L8487-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8487-L8488)

```diff
-                   const HH = Ft.k.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === Dt.c.get("openEverythingMenuName") && (Ft.k.unsubscribe(HH), mt.refresh())
+                   const BB = ej.o.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === Tj.c.get("openEverythingMenuName") && (ej.o.unsubscribe(BB), uj.refresh())
```

#### 438. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8493` → after: `L8493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8493) · [Before (L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8493)

```diff
-           middleScreenPopupContainerClassName: Sh.c
+           middleScreenPopupContainerClassName: Qo.e
```

#### 439. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8672` → after: `L8672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8672) · [Before (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8672)

```diff
-       return HH.length > 4 && HH.endsWith("ies") ? `${HH.slice(0,-3)}y` : HH.length > 3 && HH.endsWith("s") && !HH.endsWith("ss") ? HH.slice(0, -1) : HH
+       return BB.length > 4 && BB.endsWith("ies") ? `${BB.slice(0,-3)}y` : BB.length > 3 && BB.endsWith("s") && !BB.endsWith("ss") ? BB.slice(0, -1) : BB
```

#### 440. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8688` → after: `L8688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8688) · [Before (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8688)

```diff
-         rH = tz(BH ? HH : (0, QB.o)(HH, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, QB.j, (() => "projectRequire"))),
+         DB = yy(OB ? BB : (0, qO.z)(BB, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, qO.p, (() => "projectRequire"))),
```

#### 441. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8691` → after: `L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8691) · [Before (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8691)

```diff
-         for (const rH of (0, QB.c)(HH, /(global|window|document|process|require)\b\s*[.([]/g, QB.j)) AH.has(rH[1]) || SH.has(rH[1]) || (AH.add(rH[1]), LH.push(`Line ${BH+1} uses "${rH[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const DB of (0, qO.f)(BB, /(global|window|document|process|require)\b\s*[.([]/g, qO.p)) YB.has(DB[1]) || QB.has(DB[1]) || (YB.add(DB[1]), GB.push(`Line ${OB+1} uses "${DB[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 442. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8706` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8706) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8706)

```diff
-         const YH = [null !== (SH = BH[AH - 2]) && void 0 !== SH ? SH : "", null !== (hH = BH[AH - 1]) && void 0 !== hH ? hH : "", HH.slice(0, CH)].join(" ");
+         const lB = [null !== (QB = OB[YB - 2]) && void 0 !== QB ? QB : "", null !== (oB = OB[YB - 1]) && void 0 !== oB ? oB : "", BB.slice(0, JB)].join(" ");
```

#### 443. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8708-L8709` → after: `L8708-L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8708-L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8708-L8709) · [Before (L8708-L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8708-L8709)

```diff
-         const uH = null !== (tH = null === (zH = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(XH)) || void 0 === zH ? void 0 : zH[1]) && void 0 !== tH ? tH : "coins";
-         LH.push(`Line ${AH+1} sets the saved "${uH}" back to ${GH} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${uH}") is null.`)
+         const pB = null !== (jB = null === (yB = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(PB)) || void 0 === yB ? void 0 : yB[1]) && void 0 !== jB ? jB : "coins";
+         GB.push(`Line ${YB+1} sets the saved "${pB}" back to ${zB} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${pB}") is null.`)
```

#### 444. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8715` → after: `L8715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8715) · [Before (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8715)

```diff
-       const AH = null !== (BH = null === (LH = HH.split("### Parameters:")[1]) || void 0 === LH ? void 0 : LH.split("###")[0]) && void 0 !== BH ? BH : "",
+       const YB = null !== (OB = null === (GB = BB.split("### Parameters:")[1]) || void 0 === GB ? void 0 : GB.split("###")[0]) && void 0 !== OB ? OB : "",
```

#### 445. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8763-L8765` → after: `L8763-L8765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8763-L8765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8763-L8765) · [Before (L8763-L8765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8763-L8765)

```diff
-         rH = `\\((?:[^()]*[\\s,])?${AH}(?![\\w$])[^()]*\\)`,
-         SH = new RegExp(`(?:const|let|var)\\s+${AH}(?![\\w$])|${AH}\\s*(?:\\+?=(?![=>])|=>)|${rH}\\s*=>|function\\s*[\\w$]*\\s*${rH}`, "g");
-       return 1 === (0, QB.c)(HH, SH, QB.j).length ? null === (LH = new RegExp(`\\b(?:const|let|var)\\s+${AH}\\s*=\\s*${Gz}\\s*(?:;|//|$)`, "m").exec(HH)) || void 0 === LH ? void 0 : LH[1] : void 0
+         DB = `\\((?:[^()]*[\\s,])?${YB}(?![\\w$])[^()]*\\)`,
+         QB = new RegExp(`(?:const|let|var)\\s+${YB}(?![\\w$])|${YB}\\s*(?:\\+?=(?![=>])|=>)|${DB}\\s*=>|function\\s*[\\w$]*\\s*${DB}`, "g");
+       return 1 === (0, qO.f)(BB, QB, qO.p).length ? null === (GB = new RegExp(`\\b(?:const|let|var)\\s+${YB}\\s*=\\s*${ly}\\s*(?:;|//|$)`, "m").exec(BB)) || void 0 === GB ? void 0 : GB[1] : void 0
```

#### 446. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8774-L8775` → after: `L8774-L8775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8774-L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8774-L8775) · [Before (L8774-L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8774-L8775)

```diff
-           AH = -1 === LH ? BH : BH.slice(0, LH + 1);
-         return AH.length > 110 ? `${AH.slice(0,107)}...` : AH
+           YB = -1 === GB ? OB : OB.slice(0, GB + 1);
+         return YB.length > 110 ? `${YB.slice(0,107)}...` : YB
```

#### 447. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8777` → after: `L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8777) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8777)

```diff
-       return AH = "api" === HH ? `api.${BH}(${Xz(LH).join(", ")})${rH?` \u2014 ${rH}`:""}` : "callback" === HH ? `${BH}(${Xz(LH).join(", ")})${rH?` \u2014 ${rH}`:""}` : "clientOption" === HH ? `${BH}: ${function(HH){var BH,LH;return null!==(BH=null===(LH=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return YB = "api" === BB ? `api.${OB}(${zy(GB).join(", ")})${DB?` \u2014 ${DB}`:""}` : "callback" === BB ? `${OB}(${zy(GB).join(", ")})${DB?` \u2014 ${DB}`:""}` : "clientOption" === BB ? `${OB}: ${function(BB){var OB,GB;return null!==(OB=null===(GB=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 448. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8779` → after: `L8779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8779) · [Before (L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8779)

```diff
-         BH.map((HH => `"${HH}"`)).join(" or ")
+         OB.map((BB => `"${BB}"`)).join(" or ")
```

#### 449. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8781` → after: `L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8781) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8781)

```diff
-       The closest name is "${BH[0]}", which may be something
+       The closest name is "${OB[0]}", which may be something
```

#### 450. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8783` → after: `L8783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8783) · [Before (L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8783)

```diff
-       `}function vz(HH){return HH.split("\n").slice(1).map((HH=>HH.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((HH=>""!==HH&&!HH.startsWith("#")))}class Pz{constructor(HH){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function Ay(BB){return BB.split("\n").slice(1).map((BB=>BB.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((BB=>""!==BB&&!BB.startsWith("#")))}class Vy{constructor(BB){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 451. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8787` → after: `L8787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8787) · [Before (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8787)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();BH.push({name:LH,text:rH})}return BH}(LH))BH.push(Qz(HH,AH,rH))};LH("api",HH.apiReference),LH("callback",HH.callbacks),LH("clientOption",HH.clientOptions),LH("snippet",HH.snippets),LH("howTo",HH.howTo);const AH=function(){const HH … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();OB.push({name:GB,text:DB})}return OB}(GB))OB.push(Zy(BB,YB,DB))};GB("api",BB.apiReference),GB("callback",BB.callbacks),GB("clientOption",BB.clientOptions),GB("snippet",BB.snippets),GB("howTo",BB.howTo);const YB=function(){const BB … [truncated]
```

#### 452. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8798-L8799` → after: `L8798-L8799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8798-L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8798-L8799) · [Before (L8798-L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8798-L8799)

```diff
-       n\ nUsage: \`${HH.signature}\`\n\n\`\`\`js\n${HH.example}\n\`\`\``)),
-   BH = xA.map((HH => `## ${HH.name}\nPrefab (${HH.kind}, ${HH.category}): put in with use_prefab. ${cA(HH,!1)}`));
+       n\ nUsage: \`${BB.signature}\`\n\n\`\`\`js\n${BB.example}\n\`\`\``)),
+   OB = RY.map((BB => `## ${BB.name}\nPrefab (${BB.kind}, ${BB.category}): put in with use_prefab. ${iY(BB,!1)}`));
```

#### 453. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8801-L8802` → after: `L8801-L8802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8801-L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8801-L8802) · [Before (L8801-L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8801-L8802)

```diff
-     helpers: `# Ready-made functions\n\n${HH.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${BH.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${BB.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${OB.join("\n\n")}\n`
```

#### 454. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8810` → after: `L8810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8810) · [Before (L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8810)

```diff
-     this.wordCounts.set(HH, (null !== (rH = this.wordCounts.get(HH)) && void 0 !== rH ? rH : 0) + 1)
+     this.wordCounts.set(BB, (null !== (DB = this.wordCounts.get(BB)) && void 0 !== DB ? DB : 0) + 1)
```

#### 455. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8815` → after: `L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8815) · [Before (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8815)

```diff
-   const AH = null !== (BH = null === (LH = HH.split("## Mob Variations")[1]) || void 0 === LH ? void 0 : LH.split("```")[1]) && void 0 !== BH ? BH : "",
+   const YB = null !== (OB = null === (GB = BB.split("## Mob Variations")[1]) || void 0 === GB ? void 0 : GB.split("```")[1]) && void 0 !== OB ? OB : "",
```

#### 456. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8838` → after: `L8838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8838) · [Before (L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8838)

```diff
-       return null !== (BH = HH[1]) && void 0 !== BH ? BH : HH[2]
+       return null !== (OB = BB[1]) && void 0 !== OB ? OB : BB[2]
```

#### 457. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8845` → after: `L8845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8845) · [Before (L8845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8845)

```diff
-     for (const rH of (0, QB.c)(HH, /([\w$]+)\s*\(/g, QB.j)) {
+     for (const DB of (0, qO.f)(BB, /([\w$]+)\s*\(/g, qO.p)) {
```

#### 458. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8849` → after: `L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8849) · [Before (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8849)

```diff
-       SH.has(hH) || AH.has(hH) || tH || "api" !== (null === (LH = this.byName.get(hH)) || void 0 === LH ? void 0 : LH.kind) || SH.set(hH, `Line ${BH+1} calls ${hH} without "api.", so it throws there. Did you mean api.${hH}?`)
+       QB.has(oB) || YB.has(oB) || jB || "api" !== (null === (GB = this.byName.get(oB)) || void 0 === GB ? void 0 : GB.kind) || QB.set(oB, `Line ${OB+1} calls ${oB} without "api.", so it throws there. Did you mean api.${oB}?`)
```

#### 459. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8858-L8859` → after: `L8858-L8859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8858-L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8858-L8859) · [Before (L8858-L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8858-L8859)

```diff
-     const BH = this.find(HH.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((HH => "api" === HH.kind)).slice(0, 2).map((HH => `api.${HH.name}`));
-     return `api.${HH} doesn't exist.${BH.length?` Did you mean ${BH.join(" or ")}?`:""}`
+     const OB = this.find(BB.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((BB => "api" === BB.kind)).slice(0, 2).map((BB => `api.${BB.name}`));
+     return `api.${BB} doesn't exist.${OB.length?` Did you mean ${OB.join(" or ")}?`:""}`
```

#### 460. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8879` → after: `L8879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8879) · [Before (L8879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8879)

```diff
-         GH = XH ? null === (zH = new RegExp(`(?:^|[{,])\\s*${XH.replaceAll("$","\\$")}\\s*:\\s*${Gz}`, "m").exec(HH)) || void 0 === zH ? void 0 : zH[1] : void 0,
+         zB = PB ? null === (yB = new RegExp(`(?:^|[{,])\\s*${PB.replaceAll("$","\\$")}\\s*:\\s*${ly}`, "m").exec(BB)) || void 0 === yB ? void 0 : yB[1] : void 0,
```

#### 461. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8881-L8882` → after: `L8881-L8882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8881-L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8881-L8882) · [Before (L8881-L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8881-L8882)

```diff
-         uH = null !== (CH = null === (EH = new RegExp(`\\?\\s*${Gz}\\s*:\\s*${Gz}$`).exec(AH)) || void 0 === EH ? void 0 : EH.slice(1)) && void 0 !== CH ? CH : [];
-       for (const HH of [null !== (QH = null !== GH && void 0 !== GH ? GH : YH) && void 0 !== QH ? QH : AH, ...uH]) {
+         pB = null !== (JB = null === (MB = new RegExp(`\\?\\s*${ly}\\s*:\\s*${ly}$`).exec(YB)) || void 0 === MB ? void 0 : MB.slice(1)) && void 0 !== JB ? JB : [];
+       for (const BB of [null !== (qB = null !== zB && void 0 !== zB ? zB : lB) && void 0 !== qB ? qB : YB, ...pB]) {
```

#### 462. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8890` → after: `L8890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8890) · [Before (L8890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8890)

```diff
-   return [...LH].map((HH => `"${HH}" isn't an item or block name.${xz(this.suggestNames(HH))}`))
+   return [...GB].map((BB => `"${BB}" isn't an item or block name.${Wy(this.suggestNames(BB))}`))
```

#### 463. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8903` → after: `L8903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8903) · [Before (L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8903)

```diff
-     return `"${BH}" isn't an item or block name, so giving or selling it fails. Did you mean "${LH}"?`
+     return `"${OB}" isn't an item or block name, so giving or selling it fails. Did you mean "${GB}"?`
```

#### 464. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8919` → after: `L8919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8919) · [Before (L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8919)

```diff
-       return `"${BH}" isn't a block or item name, so comparing with it is never true. Did you mean "${LH}"?`
+       return `"${OB}" isn't a block or item name, so comparing with it is never true. Did you mean "${GB}"?`
```

#### 465. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8924-L8925` → after: `L8924-L8925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8924-L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8924-L8925) · [Before (L8924-L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8924-L8925)

```diff
-       LH = this.blockNames.has(BH) || !this.itemAndBlockNames.includes(BH) ? void 0 : [`Block of ${BH}`, `${BH} Block`].find((HH => this.blockNames.has(HH)));
-     !LH || HH.includes(`"${LH}"`) || HH.includes(`'${LH}'`) || hH.set(BH, LH)
+       GB = this.blockNames.has(OB) || !this.itemAndBlockNames.includes(OB) ? void 0 : [`Block of ${OB}`, `${OB} Block`].find((BB => this.blockNames.has(BB)));
+     !GB || BB.includes(`"${GB}"`) || BB.includes(`'${GB}'`) || oB.set(OB, GB)
```

#### 466. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8929` → after: `L8929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8929) · [Before (L8929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8929)

```diff
-     return `"${BH}" is an item, not a block, so no block is ever called that. Did you mean "${LH}"?`
+     return `"${OB}" is an item, not a block, so no block is ever called that. Did you mean "${GB}"?`
```

#### 467. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8946-L8947` → after: `L8946-L8947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8946-L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8946-L8947) · [Before (L8946-L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8946-L8947)

```diff
-       } : AH.names.length > 0 || AH.isDecided ? AH : {
-         names: LH.length <= 2 ? LH : [],
+       } : YB.names.length > 0 || YB.isDecided ? YB : {
+         names: GB.length <= 2 ? GB : [],
```

#### 468. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8951` → after: `L8951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8951) · [Before (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8951)

```diff
-     return `"${HH}" isn't a block or item name, so comparing a block with it is never true.${xz(rH)}`
+     return `"${BB}" isn't a block or item name, so comparing a block with it is never true.${Wy(DB)}`
```

#### 469. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8966-L8967` → after: `L8966-L8967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8966-L8967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8966-L8967) · [Before (L8966-L8967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8966-L8967)

```diff
-           name: null !== (rH = LH[1]) && void 0 !== rH ? rH : LH[2],
-           body: HH.slice(LH.index, null !== (SH = null === (hH = BH[AH + 1]) || void 0 === hH ? void 0 : hH.index) && void 0 !== SH ? SH : HH.length)
+           name: null !== (DB = GB[1]) && void 0 !== DB ? DB : GB[2],
+           body: BB.slice(GB.index, null !== (QB = null === (oB = OB[YB + 1]) || void 0 === oB ? void 0 : oB.index) && void 0 !== QB ? QB : BB.length)
```

#### 470. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8975` → after: `L8975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8975) · [Before (L8975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8975)

```diff
-         if (HH.text.includes(`"${AH}"`)) continue;
+         if (BB.text.includes(`"${YB}"`)) continue;
```

#### 471. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8977-L8978` → after: `L8977-L8978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8977-L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8977-L8978) · [Before (L8977-L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8977-L8978)

```diff
-           hH = SH.length > 0 ? `Did you mean ${SH.map((HH=>`"${HH}"`)).join(" or ")}?` : /Return false/i.test(HH.text) ? `To stop it, return false instead of "${AH}".` : "Check Show Docs for what it can return.";
-         BH.add(`${LH} can't use "${AH}" to stop anything. ${hH}`)
+           oB = QB.length > 0 ? `Did you mean ${QB.map((BB=>`"${BB}"`)).join(" or ")}?` : /Return false/i.test(BB.text) ? `To stop it, return false instead of "${YB}".` : "Check Show Docs for what it can return.";
+         OB.add(`${GB} can't use "${YB}" to stop anything. ${oB}`)
```

#### 472. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8988` → after: `L8988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L8988) · [Before (L8988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L8988)

```diff
-     return !LH.some((HH => HH.startsWith(`${BH} `)))
+     return !GB.some((BB => BB.startsWith(`${OB} `)))
```

#### 473. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9004` → after: `L9004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9004) · [Before (L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9004)

```diff
-     SH = null !== (BH = this.namesByLowerCase.get(LH)) && void 0 !== BH ? BH : this.namesByLowerCase.get(rH);
+     QB = null !== (OB = this.namesByLowerCase.get(GB)) && void 0 !== OB ? OB : this.namesByLowerCase.get(DB);
```

#### 474. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9036` → after: `L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9036) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9036)

```diff
-       HH && AH.set(HH, (null !== (LH = AH.get(HH)) && void 0 !== LH ? LH : 0) + BH)
+       BB && YB.set(BB, (null !== (GB = YB.get(BB)) && void 0 !== GB ? GB : 0) + OB)
```

#### 475. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9042` → after: `L9042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9042) · [Before (L9042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9042)

```diff
-   for (const XH of `${HH}\n${BH}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const PB of `${BB}\n${OB}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 476. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9044` → after: `L9044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9044) · [Before (L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9044)

```diff
-     rH(this.byName.get(null !== (tH = null !== (zH = XH[1]) && void 0 !== zH ? zH : XH[2]) && void 0 !== tH ? tH : XH[3]), XH[1] || XH[2] ? 4 : 2)
+     DB(this.byName.get(null !== (jB = null !== (yB = PB[1]) && void 0 !== yB ? yB : PB[2]) && void 0 !== jB ? jB : PB[3]), PB[1] || PB[2] ? 4 : 2)
```

#### 477. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9046` → after: `L9046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9046) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9046)

```diff
-   for (const XH of (0, QB.c)(BH, /([A-Za-z_$][\w$]*)\s*\(/g, QB.j)) {
+   for (const PB of (0, qO.f)(OB, /([A-Za-z_$][\w$]*)\s*\(/g, qO.p)) {
```

#### 478. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9055-L9056` → after: `L9055-L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9055-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9055-L9056) · [Before (L9055-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9055-L9056)

```diff
-       const LH = 1 / Math.log2(2 + (null !== (EH = this.wordCounts.get(BH)) && void 0 !== EH ? EH : 0));
-       XH.nameWords.has(BH) ? HH += 3 * LH : XH.textWords.has(BH) && (HH += LH)
+       const GB = 1 / Math.log2(2 + (null !== (MB = this.wordCounts.get(OB)) && void 0 !== MB ? MB : 0));
+       PB.nameWords.has(OB) ? BB += 3 * GB : PB.textWords.has(OB) && (BB += GB)
```

#### 479. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9072` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9072) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9072)

```diff
-   return null !== (BH = null !== (LH = this.byName.get(AH)) && void 0 !== LH ? LH : this.sections.find((HH => HH.name.toLowerCase() === rH))) && void 0 !== BH ? BH : null
+   return null !== (OB = null !== (GB = this.byName.get(YB)) && void 0 !== GB ? GB : this.sections.find((BB => BB.name.toLowerCase() === DB))) && void 0 !== OB ? OB : null
```

#### 480. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9109` → after: `L9109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9109) · [Before (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9109)

```diff
-         AH = new RegExp(`(^|[^\\w$.])${LH}\\s*\\(`),
+         YB = new RegExp(`(^|[^\\w$.])${GB}\\s*\\(`),
```

#### 481. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9135)

```diff
-         when: `in ${LH[1]}`,
+         when: `in ${GB[1]}`,
```

#### 482. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9142` → after: `L9142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9142) · [Before (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9142)

```diff
-     tH = SH && BH ? ` ${SH}` : "",
+     jB = QB && OB ? ` ${QB}` : "",
```

#### 483. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9146-L9147` → after: `L9146-L9147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9146-L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9146-L9147) · [Before (L9146-L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9146-L9147)

```diff
-     const HH = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (CH = null === (EH = rH[0]) || void 0 === EH ? void 0 : EH.trim()) && void 0 !== CH ? CH : ""),
-       BH = null === (XH = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (GH = null === (YH = rH[1]) || void 0 === YH ? void 0 : YH.trim()) && void 0 !== GH ? GH : "")) || void 0 === XH ? void 0 : XH[1],
+     const BB = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (JB = null === (MB = DB[0]) || void 0 === MB ? void 0 : MB.trim()) && void 0 !== JB ? JB : ""),
+       OB = null === (PB = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (zB = null === (lB = DB[1]) || void 0 === lB ? void 0 : lB.trim()) && void 0 !== zB ? zB : "")) || void 0 === PB ? void 0 : PB[1],
```

#### 484. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9150` → after: `L9150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9150) · [Before (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9150)

```diff
-         return /^(a|an|the)\s/i.test(BH) || !/^[a-z]/i.test(BH) ? BH : `${/^[aeiou]/i.test(BH)?"an":"a"} ${BH}`
+         return /^(a|an|the)\s/i.test(OB) || !/^[a-z]/i.test(OB) ? OB : `${/^[aeiou]/i.test(OB)?"an":"a"} ${OB}`
```

#### 485. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9152` → after: `L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9152) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9152)

```diff
-     return LH && null !== HH && void 0 !== HH && HH[3] ? `api.${zH[1]} needs ${LH}, but it got ${HH[3]}${tH}.` : HH ? `api.${zH[1]} couldn't use its ${uH=Number(HH[1]),1===uH?"first":2===uH?"second":3===uH?"third":4===uH?"fourth":`#${uH}`} argument${tH}.${LH?` It needs ${LH}.`:"" … [truncated]
+     return GB && null !== BB && void 0 !== BB && BB[3] ? `api.${yB[1]} needs ${GB}, but it got ${BB[3]}${jB}.` : BB ? `api.${yB[1]} couldn't use its ${pB=Number(BB[1]),1===pB?"first":2===pB?"second":3===pB?"third":4===pB?"fourth":`#${pB}`} argument${jB}.${GB?` It needs ${GB}.`:"" … [truncated]
```

#### 486. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9156` → after: `L9156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9156) · [Before (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9156)

```diff
-   if (QH) return QH[1] ? `${QH[1]} isn't a function${tH}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${tH}. Check each name it calls is spelt exactly right.`;
+   if (qB) return qB[1] ? `${qB[1]} isn't a function${jB}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${jB}. Check each name it calls is spelt exactly right.`;
```

#### 487. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9158` → after: `L9158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9158) · [Before (L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9158)

```diff
-   if (WH) return `${WH[1]} isn't defined${tH}. Check the spelling, or create it before using it.`;
+   if (ZB) return `${ZB[1]} isn't defined${jB}. Check the spelling, or create it before using it.`;
```

#### 488. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9162-L9163` → after: `L9162-L9163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9162-L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9162-L9163) · [Before (L9162-L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9162-L9163)

```diff
-     const HH = null !== (xH = MH[1]) && void 0 !== xH ? xH : MH[3];
-     return `Your code tried to read${HH?` .${HH}`:" something"} from ${MH[2]}${tH}: a value it expected wasn't there.`
+     const BB = null !== (RB = NB[1]) && void 0 !== RB ? RB : NB[3];
+     return `Your code tried to read${BB?` .${BB}`:" something"} from ${NB[2]}${jB}: a value it expected wasn't there.`
```

#### 489. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9165` → after: `L9165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9165) · [Before (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9165)

```diff
-   return `Your code hit an error${tH}: ${hH.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${jB}: ${oB.replace(/^\w*Error:\s*/,"")}`
```

#### 490. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9251` → after: `L9251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9251) · [Before (L9251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9251)

```diff
-   return HH.replaceAll(`"${BH}"`, `"${LH}"`).replaceAll(`'${BH}'`, `'${LH}'`)
+   return BB.replaceAll(`"${OB}"`, `"${GB}"`).replaceAll(`'${OB}'`, `'${GB}'`)
```

#### 491. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9255` → after: `L9255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9255) · [Before (L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9255)

```diff
-   const LH = HH => bH().isIdentifier(HH) ? HH.text === BH : HH.elements.some((HH => !bH().isOmittedExpression(HH) && LH(HH.name))),
+   const GB = BB => fB().isIdentifier(BB) ? BB.text === OB : BB.elements.some((BB => !fB().isOmittedExpression(BB) && GB(BB.name))),
```

#### 492. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9268` → after: `L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9268) · [Before (L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9268)

```diff
-       return (null === HH || void 0 === HH || null === (LH = HH.name) || void 0 === LH ? void 0 : LH.text) === BH || void 0 !== AH && (bH().isNamespaceImport(AH) ? AH.name.text === BH : AH.elements.some((HH => HH.name.text === BH)))
+       return (null === BB || void 0 === BB || null === (GB = BB.name) || void 0 === GB ? void 0 : GB.text) === OB || void 0 !== YB && (fB().isNamespaceImport(YB) ? YB.name.text === OB : YB.elements.some((BB => BB.name.text === OB)))
```

#### 493. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9282` → after: `L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9282) · [Before (L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9282)

```diff
-             text: `${LH}${BH}${LH}`
+             text: `${GB}${OB}${GB}`
```

#### 494. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9294` → after: `L9294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9294) · [Before (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9294)

```diff
-                 edit: SH(rH, bH().isShorthandPropertyAssignment(HH) ? `${AH}: ${LH}` : AH),
+                 edit: QB(DB, fB().isShorthandPropertyAssignment(BB) ? `${YB}: ${GB}` : YB),
```

#### 495. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9296` → after: `L9296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9296) · [Before (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9296)

```diff
-                 hX: tH
+                 GP: jB
```

#### 496. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9309` → after: `L9309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9309) · [Before (L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9309)

```diff
-         return lL(HH, hH.flatMap((HH => HH.depth !== BH || HH.hX ? [] : [HH.edit])))
+         return IG(BB, oB.flatMap((BB => BB.depth !== OB || BB.GP ? [] : [BB.edit])))
```

#### 497. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9334` → after: `L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9334) · [Before (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9334)

```diff
-           BH && bH().isIdentifier(BH) ? (bH().isVariableDeclaration(HH) && HA(HH.initializer, AH) ? rH : SH).add(BH.text) : bH().isIdentifier(HH) && BA(HH) && SH.add(HH.text), bH().forEachChild(HH, hH)
+           OB && fB().isIdentifier(OB) ? (fB().isVariableDeclaration(BB) && BY(BB.initializer, YB) ? DB : QB).add(OB.text) : fB().isIdentifier(BB) && OY(BB) && QB.add(BB.text), fB().forEachChild(BB, oB)
```

#### 498. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9343` → after: `L9343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9343) · [Before (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9343)

```diff
-           text: `{ customAttributes: ${BH.getText(AH)} }`
+           text: `{ customAttributes: ${OB.getText(YB)} }`
```

#### 499. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9366` → after: `L9366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9366) · [Before (L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9366)

```diff
-               text: bH().isShorthandPropertyAssignment(CH) ? `${BH}: ${LH}` : LH
+               text: fB().isShorthandPropertyAssignment(JB) ? `${OB}: ${GB}` : GB
```

#### 500. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9376-L9377` → after: `L9376-L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9376-L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9376-L9377) · [Before (L9376-L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9376-L9377)

```diff
-       const BH = `(["'])${function(HH){return HH.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(LH)}\\1`;
-       return ("comparedBlock" === rH ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${BH}`, `${BH}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${BH}`, `${BH}\\s*[!=]==?`, `\\bcase\\s+${BH}\\s*:`, `\\.includes\\(\\s*${BH}\\s*\\)`]).reduce(((HH, BH) => HH.replace(new RegExp(BH, "g"), … [truncated]
+       const OB = `(["'])${function(BB){return BB.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(GB)}\\1`;
+       return ("comparedBlock" === DB ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${OB}`, `${OB}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${OB}`, `${OB}\\s*[!=]==?`, `\\bcase\\s+${OB}\\s*:`, `\\.includes\\(\\s*${OB}\\s*\\)`]).reduce(((BB, OB) => BB.replace(new RegExp(OB, "g"), … [truncated]
```

#### 501. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9387` → after: `L9387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9387) · [Before (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9387)

```diff
-   return "export" === HH.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === HH.kind ? `The enchantment given to ${HH.method} is now in { customAttributes: ... }.` : "null" === HH.kind ? `The null given to ${HH.method} i … [truncated]
+   return "export" === BB.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === BB.kind ? `The enchantment given to ${BB.method} is now in { customAttributes: ... }.` : "null" === BB.kind ? `The null given to ${BB.method} i … [truncated]
```

#### 502. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9389` → after: `L9389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9389) · [Before (L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9389)

```diff
- var Fz = LH(44952);
+ var ay = GB(44618);
```

#### 503. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9449` → after: `L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9449) · [Before (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9449)

```diff
-       return rH ? `${AH} didn't accept your key: it may be wrong or deleted.` : `${AH} didn't accept your key: it may be wrong or deleted. Check it on ${AH}'s website.`;
+       return DB ? `${YB} didn't accept your key: it may be wrong or deleted.` : `${YB} didn't accept your key: it may be wrong or deleted. Check it on ${YB}'s website.`;
```

#### 504. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9451` → after: `L9451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9451) · [Before (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9451)

```diff
-       return rH ? `${AH} stopped your key for now: it has used all it can.` : `${AH} stopped your key for now: it has used all it can. Check it on ${AH}'s website.`;
+       return DB ? `${YB} stopped your key for now: it has used all it can.` : `${YB} stopped your key for now: it has used all it can. Check it on ${YB}'s website.`;
```

#### 505. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9453` → after: `L9453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9453) · [Before (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9453)

```diff
-       return `Too many requests to ${LH} right now. Wait a minute and try again.`;
+       return `Too many requests to ${GB} right now. Wait a minute and try again.`;
```

#### 506. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9455)

```diff
-       return `${AH} can't find ${LH}. Pick another model, or press Check for new models in AI settings.`;
+       return `${YB} can't find ${GB}. Pick another model, or press Check for new models in AI settings.`;
```

#### 507. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9457` → after: `L9457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9457) · [Before (L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9457)

```diff
-       return `${LH} took too long to answer.`;
+       return `${GB} took too long to answer.`;
```

#### 508. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9459` → after: `L9459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9459) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9459)

```diff
-       return rH ? `Couldn't reach ${AH}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${AH}. Check your internet and your key.`;
+       return DB ? `Couldn't reach ${YB}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${YB}. Check your internet and your key.`;
```

#### 509. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9461` → after: `L9461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9461) · [Before (L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9461)

```diff
-       return `${AH} doesn't work from where you are.`;
+       return `${YB} doesn't work from where you are.`;
```

#### 510. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9465` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9465) · [Before (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9465)

```diff
-       return `${LH} can't be used right now. Try again in a minute.`
+       return `${GB} can't be used right now. Try again in a minute.`
```

#### 511. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9483)

```diff
-       ...Fz.e,
+       ...ay.h,
```

#### 512. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9559` → after: `L9559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9559) · [Before (L9559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9559)

```diff
-       }, BH] = await Promise.all([Promise.resolve().then((() => LH(1352))), this.popup.notice()]), AH = HH.showPromptPopup({
+       }, OB] = await Promise.all([Promise.resolve().then((() => GB(1400))), this.popup.notice()]), YB = BB.showPromptPopup({
```

#### 513. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9564` → after: `L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9564) · [Before (L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9564)

```diff
-         middleScreenPopupContainerClassName: Sh.c
+         middleScreenPopupContainerClassName: Qo.e
```

#### 514. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9648` → after: `L9648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9648) · [Before (L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9648)

```diff
-       return "" === HH ? "no key needed" : HH.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === BH ? `key \u2026${HH.slice(-4)}` : `${(null!==(LH=null===(AH=/^[a-zA-Z]+-/.exec(HH))||void 0===AH?void 0:AH[0])&&void 0!==LH?LH:HH.slice(0,4)).slice(0,6)}\u2026${HH.slice(-4)}`
+       return "" === BB ? "no key needed" : BB.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === OB ? `key \u2026${BB.slice(-4)}` : `${(null!==(GB=null===(YB=/^[a-zA-Z]+-/.exec(BB))||void 0===YB?void 0:YB[0])&&void 0!==GB?GB:BB.slice(0,4)).slice(0,6)}\u2026${BB.slice(-4)}`
```

#### 515. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9670` → after: `L9670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9670) · [Before (L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9670)

```diff
-         "aria-label": `Edit ${SH} key`,
+         "aria-label": `Edit ${QB} key`,
```

#### 516. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9675` → after: `L9675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9675) · [Before (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9675)

```diff
-         "aria-label": `Rename ${SH} key`,
+         "aria-label": `Rename ${QB} key`,
```

#### 517. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9696` → after: `L9696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9696) · [Before (L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9696)

```diff
-     MH = `${GH}-${null!==(BH=null===EH||void 0===EH?void 0:EH.keyId)&&void 0!==BH?BH:"botxd"}-${null!==(LH=null===EH||void 0===EH?void 0:EH.modelId)&&void 0!==LH?LH:"botxd"}`.replace(/[^\w-]/g, "_"),
+     NB = `${zB}-${null!==(OB=null===MB||void 0===MB?void 0:MB.keyId)&&void 0!==OB?OB:"botxd"}-${null!==(GB=null===MB||void 0===MB?void 0:MB.modelId)&&void 0!==GB?GB:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 518. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9700-L9702` → after: `L9700-L9702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9700-L9702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9700-L9702) · [Before (L9700-L9702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9700-L9702)

```diff
-     "data-key-id": null !== (rH = null === EH || void 0 === EH ? void 0 : EH.keyId) && void 0 !== rH ? rH : "botxd",
-     "data-model-id": null !== (tH = null === EH || void 0 === EH ? void 0 : EH.modelId) && void 0 !== tH ? tH : "botxd",
-     title: null !== QH && void 0 !== QH ? QH : void 0,
+     "data-key-id": null !== (DB = null === MB || void 0 === MB ? void 0 : MB.keyId) && void 0 !== DB ? DB : "botxd",
+     "data-model-id": null !== (jB = null === MB || void 0 === MB ? void 0 : MB.modelId) && void 0 !== jB ? jB : "botxd",
+     title: null !== qB && void 0 !== qB ? qB : void 0,
```

#### 519. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9710` → after: `L9710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9710) · [Before (L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9710)

```diff
-       "aria-describedby": CH ? MH : void 0,
+       "aria-describedby": JB ? NB : void 0,
```

#### 520. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9737` → after: `L9737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9737) · [Before (L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9737)

```diff
-     bq: tH,
+     Qm: jB,
```

#### 521. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9760` → after: `L9760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9760) · [Before (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9760)

```diff
-           at: null !== (LH = HH.usedAt) && void 0 !== LH ? LH : 0,
+           at: null !== (GB = BB.usedAt) && void 0 !== GB ? GB : 0,
```

#### 522. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9783` → after: `L9783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9783) · [Before (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9783)

```diff
-     oH = `${BH}-model`,
+     KB = `${OB}-model`,
```

#### 523. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9796` → after: `L9796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9796) · [Before (L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9796)

```diff
-       }, null !== (rH = null === AH || void 0 === AH ? void 0 : AH.modelId) && void 0 !== rH ? rH : "botxd")
+       }, null !== (DB = null === YB || void 0 === YB ? void 0 : YB.modelId) && void 0 !== DB ? DB : "botxd")
```

#### 524. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9804` → after: `L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9804) · [Before (L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9804)

```diff
-       hint: null !== WH && void 0 !== WH ? WH : `Bloxd's better AI. ${QH.status?gt(QH.status):""}`.trim(),
+       hint: null !== ZB && void 0 !== ZB ? ZB : `Bloxd's better AI. ${qB.status?wj(qB.status):""}`.trim(),
```

#### 525. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9810` → after: `L9810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9810) · [Before (L9810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9810)

```diff
-         bt(null !== (HH = null === (BH = QH.status) || void 0 === BH ? void 0 : BH.provider) && void 0 !== HH ? HH : "ovh") && mt.XY()
+         dj(null !== (BB = null === (OB = qB.status) || void 0 === OB ? void 0 : OB.provider) && void 0 !== BB ? BB : "ovh") && uj.pl()
```

#### 526. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9815` → after: `L9815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9815) · [Before (L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9815)

```diff
-           if (bt(null !== (BH = null === HH || void 0 === HH ? void 0 : HH.provider) && void 0 !== BH ? BH : "ovh") || await zC.ask()) return mt.XY(), !0;
+           if (dj(null !== (OB = null === BB || void 0 === BB ? void 0 : BB.provider) && void 0 !== OB ? OB : "ovh") || await JJ.ask()) return uj.pl(), !0;
```

#### 527. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9826-L9827` → after: `L9826-L9827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9826-L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9826-L9827) · [Before (L9826-L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9826-L9827)

```diff
-         fH = oH ? null !== (BH = HH.models.find((BH => BH.id === HH.usedModelId))) && void 0 !== BH ? BH : Ct(HH.models) : void 0,
-         lH = null !== (LH = null === (AH = TH[HH.id]) || void 0 === AH ? void 0 : AH.trim().toLowerCase()) && void 0 !== LH ? LH : "",
+         mB = KB ? null !== (OB = BB.models.find((OB => OB.id === BB.usedModelId))) && void 0 !== OB ? OB : Pj(BB.models) : void 0,
+         IB = null !== (GB = null === (YB = VB[BB.id]) || void 0 === YB ? void 0 : YB.trim().toLowerCase()) && void 0 !== GB ? GB : "",
```

#### 528. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9840` → after: `L9840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9840) · [Before (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9840)

```diff
-             keyName: null !== (YH = HH.name) && void 0 !== YH ? YH : "",
+             keyName: null !== (lB = BB.name) && void 0 !== lB ? lB : "",
```

#### 529. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9856` → after: `L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9856) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9856)

```diff
-             "aria-label": `Check ${WH} for new models`,
+             "aria-label": `Check ${ZB} for new models`,
```

#### 530. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9864` → after: `L9864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9864) · [Before (L9864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9864)

```diff
-             "aria-label": `Remove ${WH} key`,
+             "aria-label": `Remove ${ZB} key`,
```

#### 531. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9872` → after: `L9872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9872) · [Before (L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9872)

```diff
-             "aria-label": `Remove ${WH} key?`,
+             "aria-label": `Remove ${ZB} key?`,
```

#### 532. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9878` → after: `L9878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9878) · [Before (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9878)

```diff
-               "aria-label": `Yes, remove ${WH} key`,
+               "aria-label": `Yes, remove ${ZB} key`,
```

#### 533. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9885` → after: `L9885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9885) · [Before (L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9885)

```diff
-               "aria-label": `No, keep ${WH} key`,
+               "aria-label": `No, keep ${ZB} key`,
```

#### 534. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9899-L9901` → after: `L9899-L9901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9899-L9901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9899-L9901) · [Before (L9899-L9901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9899-L9901)

```diff
-           "aria-label": `Find a model from ${WH}`,
-           placeholder: `Find a model (${HH.models.length})`,
-           value: null !== (QH = TH[HH.id]) && void 0 !== QH ? QH : "",
+           "aria-label": `Find a model from ${ZB}`,
+           placeholder: `Find a model (${BB.models.length})`,
+           value: null !== (qB = VB[BB.id]) && void 0 !== qB ? qB : "",
```

#### 535. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9917` → after: `L9917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9917) · [Before (L9917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9917)

```diff
-           "aria-label": `Show all ${WH} models`,
+           "aria-label": `Show all ${ZB} models`,
```

#### 536. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9941` → after: `L9941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9941) · [Before (L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9941)

```diff
-     } = await LH.e(138).then((() => LH(7083)));
+     } = await GB.e(138).then((() => GB(7062)));
```

#### 537. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9965` → after: `L9965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L9965) · [Before (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L9965)

```diff
-         children: BH ? rH : SH
+         children: OB ? DB : QB
```

#### 538. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10085` → after: `L10085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10085) · [Before (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10085)

```diff
-           children: [1 === tH.length ? "Forget your key" : `Forget all ${tH.length} keys`, " in this browser?", (0, hH.jsx)("button", {
+           children: [1 === jB.length ? "Forget your key" : `Forget all ${jB.length} keys`, " in this browser?", (0, oB.jsx)("button", {
```

#### 539. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10149` → after: `L10149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10149) · [Before (L10149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10149)

```diff
-                 text: `${BH} listed no models, so your models stay as they were.`
+                 text: `${OB} listed no models, so your models stay as they were.`
```

#### 540. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10155` → after: `L10155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10155) · [Before (L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10155)

```diff
-                 text: `${BH}'s models are up to date.`
+                 text: `${OB}'s models are up to date.`
```

#### 541. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10169` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10169) · [Before (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10169)

```diff
-         bq: HH => {
+         Qm: BB => {
```

#### 542. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10224` → after: `L10224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10224) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10224)

```diff
-         null === (LH = null !== AH && void 0 !== AH ? AH : tH.current) || void 0 === LH || LH.scrollIntoView({
+         null === (GB = null !== YB && void 0 !== YB ? YB : jB.current) || void 0 === GB || GB.scrollIntoView({
```

#### 543. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10244)

```diff
-         children: zH ? `An API key works like a password for ${zH.shortName}'s AI (it isn't your ${zH.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: yB ? `An API key works like a password for ${yB.shortName}'s AI (it isn't your ${yB.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 544. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10246` → after: `L10246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10246) · [Before (L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10246)

```diff
-         children: ["You make it on ", zH ? `${zH.shortName}'s website` : (0, hH.jsx)(QC, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", yB ? `${yB.shortName}'s website` : (0, oB.jsx)(ZJ, {}), ", and see how much you've used or delete it there."]
```

#### 545. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10248` → after: `L10248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10248) · [Before (L10248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10248)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (BH = null === zH || void 0 === zH ? void 0 : zH.shortName) && void 0 !== BH ? BH : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (OB = null === yB || void 0 === yB ? void 0 : yB.shortName) && void 0 !== OB ? OB : "that company", ", never to Bloxd."]
```

#### 546. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10307` → after: `L10307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10307) · [Before (L10307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10307)

```diff
-   } = Mt(), [GH, YH] = (0, AH.useState)(null !== (BH = null === zH || void 0 === zH ? void 0 : zH.provider) && void 0 !== BH ? BH : null), [uH, QH] = (0, AH.useState)(!!zH), [WH, MH] = (0, AH.useState)(""), xH = null !== (LH = null === zH || void 0 === zH ? void 0 : zH.key) && vo … [truncated]
+   } = Wj(), [zB, lB] = (0, YB.useState)(null !== (OB = null === yB || void 0 === yB ? void 0 : yB.provider) && void 0 !== OB ? OB : null), [pB, qB] = (0, YB.useState)(!!yB), [ZB, NB] = (0, YB.useState)(""), RB = null !== (GB = null === yB || void 0 === yB ? void 0 : yB.key) && vo … [truncated]
```

#### 547. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10309` → after: `L10309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10309) · [Before (L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10309)

```diff
-     return HH === (null === zH || void 0 === zH ? void 0 : zH.provider) && ("custom" !== HH || (null !== (BH = qh(TH)) && void 0 !== BH ? BH : "") === (null !== (LH = zH.baseUrl) && void 0 !== LH ? LH : ""))
+     return BB === (null === yB || void 0 === yB ? void 0 : yB.provider) && ("custom" !== BB || (null !== (OB = Xo(VB)) && void 0 !== OB ? OB : "") === (null !== (GB = yB.baseUrl) && void 0 !== GB ? GB : ""))
```

#### 548. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10312-L10313` → after: `L10312-L10313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10312-L10313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10312-L10313) · [Before (L10312-L10313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10312-L10313)

```diff
-     return "" === BH && "" !== xH && VH(HH) ? xH : BH
-   }, [kH, mH] = (0, AH.useState)(""), [oH, IH] = (0, AH.useState)(null !== (SH = null === zH || void 0 === zH ? void 0 : zH.name) && void 0 !== SH ? SH : ""), [fH, lH] = (0, AH.useState)(!1), [KH, cH] = (0, AH.useState)(null), [eH, qH] = (0, AH.useState)(""), [gH, NH] = (0, AH.us … [truncated]
+     return "" === OB && "" !== RB && nB(BB) ? RB : OB
+   }, [kB, dB] = (0, YB.useState)(""), [KB, uB] = (0, YB.useState)(null !== (QB = null === yB || void 0 === yB ? void 0 : yB.name) && void 0 !== QB ? QB : ""), [mB, IB] = (0, YB.useState)(!1), [FB, iB] = (0, YB.useState)(null), [LB, gB] = (0, YB.useState)(""), [rB, XB] = (0, YB.us … [truncated]
```

#### 549. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10344` → after: `L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10344) · [Before (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10344)

```diff
-           baseUrl: "custom" === GH && null !== (HH = qh(TH)) && void 0 !== HH ? HH : void 0,
+           baseUrl: "custom" === zB && null !== (BB = Xo(VB)) && void 0 !== BB ? BB : void 0,
```

#### 550. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10351` → after: `L10351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10351) · [Before (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10351)

```diff
-         const LH = null !== GH && void 0 !== GH ? GH : eh(BH),
+         const GB = null !== zB && void 0 !== zB ? zB : ro(OB),
```

#### 551. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10366-L10367` → after: `L10366-L10367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10366-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10366-L10367) · [Before (L10366-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10366-L10367)

```diff
-             baseUrl: null !== rH && void 0 !== rH ? rH : void 0,
-             modelName: fH ? kH : void 0
+             baseUrl: null !== DB && void 0 !== DB ? DB : void 0,
+             modelName: mB ? kB : void 0
```

#### 552. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10373` → after: `L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10373) · [Before (L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10373)

```diff
-           qH(null !== (hH = null === (tH = null !== CH && void 0 !== CH ? CH : Ct(HH)) || void 0 === tH ? void 0 : tH.id) && void 0 !== hH ? hH : "")
+           gB(null !== (oB = null === (jB = null !== JB && void 0 !== JB ? JB : Pj(BB)) || void 0 === jB ? void 0 : jB.id) && void 0 !== oB ? oB : "")
```

#### 553. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10379-L10380` → after: `L10379-L10380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10379-L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10379-L10380) · [Before (L10379-L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10379-L10380)

```diff
-           const hH = "badKey" !== rH || uH ? "" : ` If it isn't from ${fh[LH].shortName}, pick the company it's from.`;
-           jH(`${jh(rH,LH)}${hH}`)
+           const oB = "badKey" !== DB || pB ? "" : ` If it isn't from ${Fo[GB].shortName}, pick the company it's from.`;
+           EB(`${ho(DB,GB)}${oB}`)
```

#### 554. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10390` → after: `L10390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10390) · [Before (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10390)

```diff
-         value: null !== GH && void 0 !== GH ? GH : "",
+         value: null !== zB && void 0 !== zB ? zB : "",
```

#### 555. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10418` → after: `L10418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10418) · [Before (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10418)

```diff
-       }), (!zH || TH !== (null !== (tH = zH.baseUrl) && void 0 !== tH ? tH : "")) && (0, hH.jsx)(MC, {})]
+       }), (!yB || VB !== (null !== (jB = yB.baseUrl) && void 0 !== jB ? jB : "")) && (0, oB.jsx)(RJ, {})]
```

#### 556. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10490` → after: `L10490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10490) · [Before (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10490)

```diff
-           keyId: null !== GH && void 0 !== GH ? GH : "",
+           keyId: null !== zB && void 0 !== zB ? zB : "",
```

#### 557. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10514` → after: `L10514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10514) · [Before (L10514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10514)

```diff
-         placeholder: GH && "custom" !== GH ? `Like My ${fh[GH].shortName}` : "Like Home server",
+         placeholder: zB && "custom" !== zB ? `Like My ${Fo[zB].shortName}` : "Like Home server",
```

#### 558. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10540` → after: `L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10540) · [Before (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10540)

```diff
-         children: gH ? DH ? "Testing the connection\u2026" : "Testing your key\u2026" : sH ? `Save and use ${sH.name}` : DH ? "Test connection" : "Test key"
+         children: rB ? aB ? "Testing the connection\u2026" : "Testing your key\u2026" : HB ? `Save and use ${HB.name}` : aB ? "Test connection" : "Test key"
```

#### 559. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10545-L10547` → after: `L10545-L10547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10545-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10545-L10547) · [Before (L10545-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10545-L10547)

```diff
- var PC = LH(1123),
-   TC = LH(37754),
-   UC = LH(37747);
+ var VJ = GB(1175),
+   SJ = GB(37576),
+   nJ = GB(37572);
```

#### 560. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10558-L10559` → after: `L10558-L10559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10558-L10559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10558-L10559) · [Before (L10558-L10559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10558-L10559)

```diff
-   } = (0, PC.B)();
-   return (0, hH.jsx)(UC.h, {
+   } = (0, VJ.H)();
+   return (0, oB.jsx)(nJ.j, {
```

#### 561. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10562` → after: `L10562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10562) · [Before (L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10562)

```diff
-     text: SH(`codeEditorAiTutorial:${BH}`),
+     text: QB(`codeEditorAiTutorial:${OB}`),
```

#### 562. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10610` → after: `L10610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10610) · [Before (L10610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10610)

```diff
-   return HH.model.name.toLowerCase().startsWith(BH.toLowerCase()) ? HH.model.name : `${BH} \xb7 ${HH.model.name}`
+   return BB.model.name.toLowerCase().startsWith(OB.toLowerCase()) ? BB.model.name : `${OB} \xb7 ${BB.model.name}`
```

#### 563. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10660` → after: `L10660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10660) · [Before (L10660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10660)

```diff
-     vH = xH ? "Bot.xd (free) \xb7 once" : CH ? kC(CH) : XH ? Tt : "Bot.xd (free)";
+     WB = RB ? "Bot.xd (free) \xb7 once" : JB ? dJ(JB) : PB ? nj : "Bot.xd (free)";
```

#### 564. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10672` → after: `L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10672) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10672)

```diff
-       "aria-label": `AI model: ${vH}`,
+       "aria-label": `AI model: ${WB}`,
```

#### 565. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10690` → after: `L10690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10690) · [Before (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10690)

```diff
-         title: `Allow AI to make edits to my code is ${LH?"on":"off"}, in AI settings`,
+         title: `Allow AI to make edits to my code is ${GB?"on":"off"}, in AI settings`,
```

#### 566. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10758` → after: `L10758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10758) · [Before (L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10758)

```diff
-       LH(null !== (BH = HH.error) && void 0 !== BH ? BH : new Error("IndexedDB transaction failed"))
+       GB(null !== (OB = BB.error) && void 0 !== OB ? OB : new Error("IndexedDB transaction failed"))
```

#### 567. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10761` → after: `L10761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10761) · [Before (L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10761)

```diff
-       LH(null !== (BH = HH.error) && void 0 !== BH ? BH : new Error("IndexedDB transaction aborted"))
+       GB(null !== (OB = BB.error) && void 0 !== OB ? OB : new Error("IndexedDB transaction aborted"))
```

#### 568. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10765` → after: `L10765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10765) · [Before (L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10765)

```diff
- var fC = LH(37779);
+ var IJ = GB(37608);
```

#### 569. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10796` → after: `L10796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10796) · [Before (L10796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10796)

```diff
-           if (BH) return HH.includes(`"${BH}"`) ? `"${BH}"` : HH.includes(BH) ? BH : void 0
+           if (OB) return BB.includes(`"${OB}"`) ? `"${OB}"` : BB.includes(OB) ? OB : void 0
```

#### 570. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10800` → after: `L10800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10800) · [Before (L10800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10800)

```diff
-         className: SH()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${HH.kind}`, AH && "WorldCodeAiDiff-marked"),
+         className: QB()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${BB.kind}`, YB && "WorldCodeAiDiff-marked"),
```

#### 571. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10863` → after: `L10863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10863) · [Before (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10863)

```diff
-   return rH(HH) === rH(BH) ? AH : rH(HH) === rH(BH - 864e5) ? `yesterday ${AH}` : function(HH, BH) {
+   return DB(BB) === DB(OB) ? YB : DB(BB) === DB(OB - 864e5) ? `yesterday ${YB}` : function(BB, OB) {
```

#### 572. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10866` → after: `L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10866) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10866)

```diff
-     if (LH < 60) return `${LH} min ago`;
+     if (GB < 60) return `${GB} min ago`;
```

#### 573. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10868` → after: `L10868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10868) · [Before (L10868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10868)

```diff
-     if (AH < 24) return `${AH} h ago`;
+     if (YB < 24) return `${YB} h ago`;
```

#### 574. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10870` → after: `L10870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10870) · [Before (L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10870)

```diff
-     return 1 === rH ? "1 day ago" : `${rH} days ago`
+     return 1 === DB ? "1 day ago" : `${DB} days ago`
```

#### 575. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10877-L10878` → after: `L10877-L10878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10877-L10878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10877-L10878) · [Before (L10877-L10878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10877-L10878)

```diff
-     const SH = null !== (AH = HH.files[LH]) && void 0 !== AH ? AH : "";
-     return (null !== (rH = BH[LH]) && void 0 !== rH ? rH : "") === SH ? [] : [{
+     const QB = null !== (YB = BB.files[GB]) && void 0 !== YB ? YB : "";
+     return (null !== (DB = OB[GB]) && void 0 !== DB ? DB : "") === QB ? [] : [{
```

#### 576. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10890` → after: `L10890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10890) · [Before (L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10890)

```diff
-   return `${(AH>BH/2?LH.slice(0,AH):LH).replace(/[\s,;:.]+$/,"")}\u2026`
+   return `${(YB>OB/2?GB.slice(0,YB):GB).replace(/[\s,;:.]+$/,"")}\u2026`
```

#### 577. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10901` → after: `L10901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10901) · [Before (L10901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10901)

```diff
-   const [CH, EH] = (0, AH.useState)(!1), [XH, GH] = (0, AH.useState)(!1), YH = BH.did ? `Before: ${BH.did}` : BH.label, uH = NC(YH), QH = BH.did && BH.label.startsWith('Before "') ? BH.label.slice(7) : null, WH = null === QH ? null : NC(QH, 50), MH = null !== WH && null !== QH && … [truncated]
+   const [JB, MB] = (0, YB.useState)(!1), [PB, zB] = (0, YB.useState)(!1), lB = OB.did ? `Before: ${OB.did}` : OB.label, pB = wJ(lB), qB = OB.did && OB.label.startsWith('Before "') ? OB.label.slice(7) : null, ZB = null === qB ? null : wJ(qB, 50), NB = null !== ZB && null !== qB && … [truncated]
```

#### 578. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10926-L10927` → after: `L10926-L10927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10926-L10927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10926-L10927) · [Before (L10926-L10927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10926-L10927)

```diff
-     const SH = null !== (AH = BH.files[HH]) && void 0 !== AH ? AH : "",
-       hH = null !== (rH = LH[HH]) && void 0 !== rH ? rH : "";
+     const QB = null !== (YB = OB.files[BB]) && void 0 !== YB ? YB : "",
+       oB = null !== (DB = GB[BB]) && void 0 !== DB ? DB : "";
```

#### 579. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10941` → after: `L10941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/105.js#L10941) · [Before (L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/105.js#L10941)

```diff
-         children: [XH || !uH ? YH : uH, (uH || MH) && (0, hH.jsx)("button", {
+         children: [PB || !pB ? lB : pB, (pB || NB) && (0, oB.jsx)("button", {
```
