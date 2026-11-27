# Changed — Bundle Modifications Report (Part 002 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `2 / 153` (**374** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 001](part-001.md) · [Part 003 →](part-003.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/105.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/105.js` (972 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8)

#### 192. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L5843` → after: `L5843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L5843) · [Before (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L5843)

```diff
-           JB[qB] = yY(jY(BB ? JB[qB] : JB[qB].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (uO = GB[qB]) && void 0 !== uO ? uO : "");
+           Je[Te] = oy(Jy(ee ? Je[Te] : Je[Te].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (Ai = He[Te]) && void 0 !== Ai ? Ai : "");
```

#### 193. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L5848` → after: `L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L5848) · [Before (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L5848)

```diff
-         const BB = RO(OD(BD(JB[qB])), WB(qB) ? DB : [], null !== (KO = GB[qB]) && void 0 !== KO ? KO : "");
+         const ee = Bi(yb(Hb(Je[Te])), Be(Te) ? be : [], null !== (Pi = He[Te]) && void 0 !== Pi ? Pi : "");
```

#### 194. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L5852-L5854` → after: `L5852-L5854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L5852-L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L5852-L5854) · [Before (L5852-L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L5852-L5854)

```diff
-         const BB = qB.problems.length > 0 ? ` Kept as it was: ${qB.problems.join("; ")}.` : "",
-           OB = qB.fixed.length > 0 ? ` Names changed to real ones: ${qB.fixed.join(", ")}.` : "";
-         pB += `\n\nThis uses the ready-made ${qB.title}.${OB}${BB}${qB.setup?` ${qB.setup}`:""}`
+         const ee = Te.problems.length > 0 ? ` Kept as it was: ${Te.problems.join("; ")}.` : "",
+           ie = Te.fixed.length > 0 ? ` Names changed to real ones: ${Te.fixed.join(", ")}.` : "";
+         fe += `\n\nThis uses the ready-made ${Te.title}.${ie}${ee}${Te.setup?` ${Te.setup}`:""}`
```

#### 195. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L5860` → after: `L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L5860) · [Before (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L5860)

```diff
-         of KB) pB += `\n\nI renamed \`${qB}\` to \`${uB}\`, the name World Code calls.`;
+         of De) fe += `\n\nI renamed \`${Te}\` to \`${Pe}\`, the name World Code calls.`;
```

#### 196. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L5864` → after: `L5864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R5864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L5864) · [Before (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L5864)

```diff
-         const BB = null !== (FO = GB[qB]) && void 0 !== FO ? FO : "";
+         const ee = null !== (ai = He[Te]) && void 0 !== ai ? ai : "";
```

#### 197. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L5959` → after: `L5959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L5959) · [Before (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L5959)

```diff
-       const OB = null === BB.path ? BB.tool : `${BB.tool} ${BB.path}`;
+       const ie = null === ee.path ? ee.tool : `${ee.tool} ${ee.path}`;
```

#### 198. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L5961-L5966` → after: `L5961-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L5961-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L5961-L5966) · [Before (L5961-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L5961-L5966)

```diff
-       if ("prefab" === BB.reason) return `${OB}: ${null!==(GB=BB.detail)&&void 0!==GB?GB:"the prefab couldn't go in."} Nothing changed.`;
-       if ("missingArgs" === BB.reason) return `${OB}: the call was missing an argument it needs, so nothing changed.`;
-       if ("placeholder" === BB.reason) return "write_file" === BB.tool ? `${OB}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${OB}: the code had a line standing in for code left out ("// ... exi … [truncated]
-       if ("unread" === BB.reason) return `${OB}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==BB.path&&(0,qB.f)(BB.path)?"view_world_code":"view_file"} shows.`;
-       if ("brokenCode" === BB.reason) return `${OB}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
-       return `${OB}: search matched nothing in the file, so nothing changed. ${BB.closest?`The closest lines (${BB.closest.line}-${BB.closest.lastLine}) are:\n${BB.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${BB.functions.length>0?`, or use replace … [truncated]
+       if ("prefab" === ee.reason) return `${ie}: ${null!==(He=ee.detail)&&void 0!==He?He:"the prefab couldn't go in."} Nothing changed.`;
+       if ("missingArgs" === ee.reason) return `${ie}: the call was missing an argument it needs, so nothing changed.`;
+       if ("placeholder" === ee.reason) return "write_file" === ee.tool ? `${ie}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${ie}: the code had a line standing in for code left out ("// ... exi … [truncated]
+       if ("unread" === ee.reason) return `${ie}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==ee.path&&(0,Te.e)(ee.path)?"view_world_code":"view_file"} shows.`;
+       if ("brokenCode" === ee.reason) return `${ie}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+       return `${ie}: search matched nothing in the file, so nothing changed. ${ee.closest?`The closest lines (${ee.closest.line}-${ee.closest.lastLine}) are:\n${ee.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${ee.functions.length>0?`, or use replace … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L5983` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L5983) · [Before (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L5983)

```diff
-       qD = BB => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
+       Xb = ee => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
```

#### 200. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L5985` → after: `L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R5985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L5985) · [Before (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L5985)

```diff
-       ND = BB => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
+       Bb = ee => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
```

#### 201. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L5995` → after: `L5995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R5995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L5995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L5995) · [Before (L5995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L5995)

```diff
-     const AD = `You looked at World Code: its files are below, their paths starting ${qB.i}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${q … [truncated]
+     const Ob = `You looked at World Code: its files are below, their paths starting ${Te.i}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${T … [truncated]
```

#### 202. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6010` → after: `L6010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6010) · [Before (L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6010)

```diff
-         WB = OB ? `${qB.i}index.js` : RB,
+         Be = ie ? `${Te.i}index.js` : ze,
```

#### 203. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6014-L6029` → after: `L6014-L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6014-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6014-L6029) · [Before (L6014-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6014-L6029)

```diff
-         nB = VB("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${AB("edit … [truncated]
-         UB = VB("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
-         fB = VB("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
-         kB = VB("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${AB("edit_fil … [truncated]
-         dB = OB ? `2. Then give the whole new code with a write_file call, exactly like this:\n${AB("write_file",{path:RB,why:"what the change does",content:RD.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${AB("write_fi … [truncated]
-         KB = OB ? "" : ` If there is no code yet, write it in ${RB}.`,
-         uB = AB("switch_to_world_code", {}),
-         mB = OB ? yB ? `\n${AD}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
-         IB = zB && VB("use_prefab") && PB.length >= 2,
-         FB = IB ? PB.slice(0, 3).map((BB => BB.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
-         iB = IB ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
-         LB = VB("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
-         gB = VB("plan") ? `\n${"deepseek"===GB?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
-         rB = null !== (DB = PB[0]) && void 0 !== DB ? DB : VY("parkour"),
-         XB = (null !== (QB = null === rB || void 0 === rB ? void 0 : rB.settings) && void 0 !== QB ? QB : []).slice(0, 2).map((BB => `${BB.key}: ${BB.value}`)).join("\n");
-       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
+         de = ge("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${Ee("edit … [truncated]
+         We = ge("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
+         te = ge("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
+         Ze = ge("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${Ee("edit_fil … [truncated]
+         we = ie ? `2. Then give the whole new code with a write_file call, exactly like this:\n${Ee("write_file",{path:ze,why:"what the change does",content:Eb.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${Ee("write_fi … [truncated]
+         De = ie ? "" : ` If there is no code yet, write it in ${ze}.`,
+         Pe = Ee("switch_to_world_code", {}),
+         Ae = ie ? Fe ? `\n${Ob}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
+         Ye = ke && ge("use_prefab") && Re.length >= 2,
+         Ve = Ye ? Re.slice(0, 3).map((ee => ee.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
+         ae = Ye ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
+         ce = ge("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
+         xe = ge("plan") ? `\n${"deepseek"===He?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
+         Le = null !== (be = Re[0]) && void 0 !== be ? be : dy("parkour"),
+         Ce = (null !== (Me = null === Le || void 0 === Le ? void 0 : Le.settings) && void 0 !== Me ? Me : []).slice(0, 2).map((ee => `${ee.key}: ${ee.value}`)).join("\n");
+       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
```

#### 204. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6031` → after: `L6031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6031) · [Before (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6031)

```diff
-         YB ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
+         ye ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
```

#### 205. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6034` → after: `L6034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6034) · [Before (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6034)

```diff
-         QB.join("\n")
+         Me.join("\n")
```

#### 206. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6036` → after: `L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6036) · [Before (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6036)

```diff
-       `}(BB,AB,JB)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
+       `}(ee,Ee,Je)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
```

#### 207. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6039-L6040` → after: `L6039-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6039-L6040) · [Before (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6039-L6040)

```diff
-     function SD(BB, OB, GB) {
-       return Object.keys(BB).filter((BB => !GB || !(0, qB.f)(BB))).sort(((BB, GB) => (GB === OB ? 1 : 0) - (BB === OB ? 1 : 0) || BB.localeCompare(GB)))
+     function Wb(ee, ie, He) {
+       return Object.keys(ee).filter((ee => !He || !(0, Te.e)(ee))).sort(((ee, He) => (He === ie ? 1 : 0) - (ee === ie ? 1 : 0) || ee.localeCompare(He)))
```

#### 208. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6043-L6046` → after: `L6043-L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6043-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6043-L6046) · [Before (L6043-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6043-L6046)

```diff
-     function nD(BB, OB, GB) {
-       var YB;
-       const DB = SD(BB, OB, GB);
-       return null !== OB && DB.includes(OB) ? OB : null !== (YB = DB[0]) && void 0 !== YB ? YB : null
+     function tb(ee, ie, He) {
+       var ye;
+       const be = Wb(ee, ie, He);
+       return null !== ie && be.includes(ie) ? ie : null !== (ye = be[0]) && void 0 !== ye ? ye : null
```

#### 209. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6049-L6050` → after: `L6049-L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6049-L6050) · [Before (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6049-L6050)

```diff
-     function UD(BB) {
-       return BB.includes("index.ts") ? "index.ts" : "index.js"
+     function Zb(ee) {
+       return ee.includes("index.ts") ? "index.ts" : "index.js"
```

#### 210. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6053-L6055` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6053-L6055) · [Before (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6053-L6055)

```diff
-     function fD(BB) {
-       const OB = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${UD(BB)}`;
-       return `Only ${OB} runs by itself: another file runs when ${OB} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${OB}.\n`
+     function wb(ee) {
+       const ie = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${Zb(ee)}`;
+       return `Only ${ie} runs by itself: another file runs when ${ie} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${ie}.\n`
```

#### 211. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6058-L6059` → after: `L6058-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6058-L6059) · [Before (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6058-L6059)

```diff
-     function kD(BB, OB) {
-       var GB;
+     function Db(ee, ie) {
+       var He;
```

#### 212. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6061-L6066` → after: `L6061-L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6061-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6061-L6066) · [Before (L6061-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6061-L6066)

```diff
-         files: YB,
-         activePath: DB
-       } = BB, QB = !0 === BB.codeBlock, oB = SD(YB, DB, QB);
-       if (0 === oB.length || oB.every((BB => "" === YB[BB].trim()))) return QB ? "There is no code yet: the code block is empty." : oB.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-       const jB = null !== (GB = nD(YB, DB, QB)) && void 0 !== GB ? GB : oB[0];
-       return `${oB.length>1?`Their files:\n${oB.map((BB=>{const OB=""===(GB=YB[BB])?0:GB.replace(/\n$/,"").split("\n").length;var GB;return`- ${BB}: ${1===OB?"1 line":`${OB} lines`}${BB===jB?" (open in the editor, its code below)":""}`})).join("\n")}\n${QB?"":fD(oB)}\n`:""}${func … [truncated]
+         files: ye,
+         activePath: be
+       } = ee, Me = !0 === ee.codeBlock, Ke = Wb(ye, be, Me);
+       if (0 === Ke.length || Ke.every((ee => "" === ye[ee].trim()))) return Me ? "There is no code yet: the code block is empty." : Ke.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const Ue = null !== (He = tb(ye, be, Me)) && void 0 !== He ? He : Ke[0];
+       return `${Ke.length>1?`Their files:\n${Ke.map((ee=>{const ie=""===(He=ye[ee])?0:He.replace(/\n$/,"").split("\n").length;var He;return`- ${ee}: ${1===ie?"1 line":`${ie} lines`}${ee===Ue?" (open in the editor, its code below)":""}`})).join("\n")}\n${Me?"":wb(Ke)}\n`:""}${func … [truncated]
```

#### 213. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6069-L6070` → after: `L6069-L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6069-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6069-L6070) · [Before (L6069-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6069-L6070)

```diff
-     function dD(BB) {
-       var OB, GB, YB, DB, QB, oB;
+     function Pb(ee) {
+       var ie, He, ye, be, Me, Ke;
```

#### 214. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6072-L6087` → after: `L6072-L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6072-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6072-L6087) · [Before (L6072-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6072-L6087)

```diff
-         codeBlock: !0 === BB.codeBlock,
-         hasCode: "" !== (null !== (OB = BB.files[null !== (GB = BB.activePath) && void 0 !== GB ? GB : ""]) && void 0 !== OB ? OB : "").trim(),
-         hasBigFile: Object.values(BB.files).some((BB => BB.length > 6e3)),
-         wantsExport: QD(BB.request),
-         canAsk: !0 === BB.canAsk,
-         canRemember: !0 === (null === (YB = BB.about) || void 0 === YB ? void 0 : YB.canRemember),
-         isBigRequest: lO(BB.request),
-         canLookUp: !0 === BB.canLookUp,
-         hasOtherFiles: Object.keys(BB.files).length > 1,
-         hasErrors: BB.errors.length > 0,
-         canChangeWorldCode: !0 === BB.canChangeWorldCode,
-         hasWorldCodeFiles: Object.keys(BB.files).some(qB.f),
-         addsToEntryFile: !0 === BB.addsToEntryFile,
-         offersPrefabs: (DB = BB.request, QB = BB.files, oB = KD(BB), "never" !== oB.offer && ("always" === oB.offer || LY(DB, 1).length > 0 || lO(DB) || !lD(QB) && zD.test(DB))),
-         listsPrefabs: KD(BB).categories,
-         looksUpDocs: !0 === BB.looksUpDocs
+         codeBlock: !0 === ee.codeBlock,
+         hasCode: "" !== (null !== (ie = ee.files[null !== (He = ee.activePath) && void 0 !== He ? He : ""]) && void 0 !== ie ? ie : "").trim(),
+         hasBigFile: Object.values(ee.files).some((ee => ee.length > 6e3)),
+         wantsExport: Ub(ee.request),
+         canAsk: !0 === ee.canAsk,
+         canRemember: !0 === (null === (ye = ee.about) || void 0 === ye ? void 0 : ye.canRemember),
+         isBigRequest: qi(ee.request),
+         canLookUp: !0 === ee.canLookUp,
+         hasOtherFiles: Object.keys(ee.files).length > 1,
+         hasErrors: ee.errors.length > 0,
+         canChangeWorldCode: !0 === ee.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(ee.files).some(Te.e),
+         addsToEntryFile: !0 === ee.addsToEntryFile,
+         offersPrefabs: (be = ee.request, Me = ee.files, Ke = Ab(ee), "never" !== Ke.offer && ("always" === Ke.offer || Ly(be, 1).length > 0 || qi(be) || !Tb(Me) && fb.test(be))),
+         listsPrefabs: Ab(ee).categories,
+         looksUpDocs: !0 === ee.looksUpDocs
```

#### 215. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6091-L6093` → after: `L6091-L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6091-L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6091-L6093) · [Before (L6091-L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6091-L6093)

```diff
-     function KD(BB) {
-       var OB;
-       return null !== (OB = BB.prefabs) && void 0 !== OB ? OB : PD
+     function Ab(ee) {
+       var ie;
+       return null !== (ie = ee.prefabs) && void 0 !== ie ? ie : qb
```

#### 216. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6096-L6104` → after: `L6096-L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6096-L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6096-L6104) · [Before (L6096-L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6096-L6104)

```diff
-     function uD(BB, OB) {
-       return "deepseek" === OB ? function(BB) {
-         const OB = oD[BB ? "codeBlock" : "worldCode"];
-         return nO.filter((BB => OB.has(BB.name)))
-       }(!0 === BB.codeBlock) : function(BB) {
-         const OB = (BB.hasCode || BB.hasBigFile) && !BB.codeBlock || !0 === BB.hasWorldCodeFiles || !0 === BB.addsToEntryFile,
-           GB = !0 === BB.canLookUp,
-           YB = BB.codeBlock && !0 === BB.canChangeWorldCode && !0 !== BB.hasWorldCodeFiles && GB,
-           DB = {
+     function Yb(ee, ie) {
+       return "deepseek" === ie ? function(ee) {
+         const ie = Fb[ee ? "codeBlock" : "worldCode"];
+         return Wi.filter((ee => ie.has(ee.name)))
+       }(!0 === ee.codeBlock) : function(ee) {
+         const ie = (ee.hasCode || ee.hasBigFile) && !ee.codeBlock || !0 === ee.hasWorldCodeFiles || !0 === ee.addsToEntryFile,
+           He = !0 === ee.canLookUp,
+           ye = ee.codeBlock && !0 === ee.canChangeWorldCode && !0 !== ee.hasWorldCodeFiles && He,
+           be = {
```

#### 217. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6106-L6107` → after: `L6106-L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6106-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6106-L6107) · [Before (L6106-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6106-L6107)

```diff
-             edit_file: BB.hasBigFile,
-             replace_function: OB,
+             edit_file: ee.hasBigFile,
+             replace_function: ie,
```

#### 218. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6109-L6126` → after: `L6109-L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6109-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6109-L6126) · [Before (L6109-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6109-L6126)

```diff
-             add_world_code: BB.codeBlock && !0 !== BB.hasWorldCodeFiles,
-             edit_code_in_place: BB.hasCode,
-             export_game: BB.wantsExport,
-             switch_to_world_code: BB.codeBlock,
-             ask_creator: BB.canAsk,
-             remember: !0 === BB.canRemember && !BB.codeBlock,
-             plan: !0 === BB.isBigRequest && BB.canAsk && !BB.codeBlock,
-             view_file: GB && !0 === BB.hasOtherFiles && !BB.codeBlock,
-             view_world_code: YB,
-             view_chunk: GB,
-             view_game_state: GB,
-             get_docs: GB,
-             fetch_url: GB && !0 === BB.looksUpDocs,
-             find_names: GB,
-             view_errors: GB && !0 === BB.hasErrors,
-             use_prefab: !0 === BB.offersPrefabs && !BB.codeBlock,
- ... (2 more removed lines; see GitHub link above)
+             add_world_code: ee.codeBlock && !0 !== ee.hasWorldCodeFiles,
+             edit_code_in_place: ee.hasCode,
+             export_game: ee.wantsExport,
+             switch_to_world_code: ee.codeBlock,
+             ask_creator: ee.canAsk,
+             remember: !0 === ee.canRemember && !ee.codeBlock,
+             plan: !0 === ee.isBigRequest && ee.canAsk && !ee.codeBlock,
+             view_file: He && !0 === ee.hasOtherFiles && !ee.codeBlock,
+             view_world_code: ye,
+             view_chunk: He,
+             view_game_state: He,
+             get_docs: He,
+             fetch_url: He && !0 === ee.looksUpDocs,
+             find_names: He,
+             view_errors: He && !0 === ee.hasErrors,
+             use_prefab: !0 === ee.offersPrefabs && !ee.codeBlock,
+ ... (2 more added lines; see GitHub link above)
```

#### 219. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6128-L6131` → after: `L6128-L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6128-L6131) · [Before (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6128-L6131)

```diff
-         let QB = nO.filter((BB => DB[BB.name]));
-         for (const oB of ["remember", "plan"]) QB.filter((BB => !UO(BB.name))).length > 7 && (QB = QB.filter((BB => BB.name !== oB)));
-         return QB
-       }(dD(BB))
+         let Me = Wi.filter((ee => be[ee.name]));
+         for (const Ke of ["remember", "plan"]) Me.filter((ee => !ti(ee.name))).length > 7 && (Me = Me.filter((ee => ee.name !== Ke)));
+         return Me
+       }(Pb(ee))
```

#### 220. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6134-L6141` → after: `L6134-L6141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6134-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6134-L6141) · [Before (L6134-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6134-L6141)

```diff
-     function mD(BB, OB) {
-       var GB, YB;
-       const DB = dD(BB),
-         QB = !0 === DB.canLookUp,
-         oB = (null !== (GB = null === (YB = BB.lookups) || void 0 === YB ? void 0 : YB.length) && void 0 !== GB ? GB : 0) > 0,
-         jB = !0 === DB.hasWorldCodeFiles,
-         yB = [DB.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", DB.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", QB ? "" : oB ? "You have looked things up as many times as you can: answer n … [truncated]
-       return yB.length > 0 ? `\n\nFor this request: ${yB.join(" ")}` : ""
+     function Vb(ee, ie) {
+       var He, ye;
+       const be = Pb(ee),
+         Me = !0 === be.canLookUp,
+         Ke = (null !== (He = null === (ye = ee.lookups) || void 0 === ye ? void 0 : ye.length) && void 0 !== He ? He : 0) > 0,
+         Ue = !0 === be.hasWorldCodeFiles,
+         Fe = [be.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", be.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", Me ? "" : Ke ? "You have looked things up as many times as you can: answer n … [truncated]
+       return Fe.length > 0 ? `\n\nFor this request: ${Fe.join(" ")}` : ""
```

#### 221. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6144-L6146` → after: `L6144-L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6144-L6146) · [Before (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6144-L6146)

```diff
-     function ID(BB, OB) {
-       var GB, YB, DB, QB, oB, jB;
-       let yB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD,
+     function ab(ee, ie) {
+       var He, ye, be, Me, Ke, Ue;
+       let Fe = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pb,
```

#### 222. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6148-L6149` → after: `L6148-L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6148-L6149) · [Before (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6148-L6149)

```diff
-           docsInTurn: JB = !1,
-           pZ: MB = !1
+           docsInTurn: Je = !1,
+           dp: oe = !1
```

#### 223. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6151-L6183` → after: `L6151-L6183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6151-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6151-L6183) · [Before (L6151-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6151-L6183)

```diff
-       const PB = "deepseek" === yB.format,
-         zB = Object.values(OB.files).join("\n"),
-         lB = OB.history.slice(-2).map((BB => BB.text)).join("\n"),
-         pB = `${OB.request}\n${lB}\n${OB.errors.join("\n")}`,
-         qB = !0 === OB.looksUpDocs,
-         ZB = qB && !0 === OB.canLookUp ? [] : BB.find(pB, zB, 12),
-         NB = BB.matchItemAndBlockNames(pB, 12),
-         RB = !0 === OB.codeBlock,
-         WB = RB ? "myId" : "playerId",
-         AB = uD(OB, yB.format),
-         VB = AB.some((BB => "use_prefab" === BB.name)),
-         SB = !VB || PB && !0 !== dD(OB).offersPrefabs ? [] : function(BB, OB, GB) {
-           if ("never" === GB.offer || "none" === GB.list) return [];
-           if ("all" === GB.list) return [...RY];
-           const YB = LY(BB, 4);
-           if (lD(OB) || !zD.test(BB) && !lO(BB)) return YB;
- ... (17 more removed lines; see GitHub link above)
+       const Re = "deepseek" === Fe.format,
+         ke = Object.values(ie.files).join("\n"),
+         qe = ie.history.slice(-2).map((ee => ee.text)).join("\n"),
+         fe = `${ie.request}\n${qe}\n${ie.errors.join("\n")}`,
+         Te = !0 === ie.looksUpDocs,
+         pe = Te && !0 === ie.canLookUp ? [] : ee.find(fe, ke, 12),
+         Xe = ee.matchItemAndBlockNames(fe, 12),
+         ze = !0 === ie.codeBlock,
+         Be = ze ? "myId" : "playerId",
+         Ee = Yb(ie, Fe.format),
+         ge = Ee.some((ee => "use_prefab" === ee.name)),
+         Oe = !ge || Re && !0 !== Pb(ie).offersPrefabs ? [] : function(ee, ie, He) {
+           if ("never" === He.offer || "none" === He.list) return [];
+           if ("all" === He.list) return [...Ey];
+           const ye = Ly(ee, 4);
+           if (Tb(ie) || !fb.test(ee) && !qi(ee)) return ye;
+ ... (17 more added lines; see GitHub link above)
```

#### 224. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6185` → after: `L6185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6185) · [Before (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6185)

```diff
-           content: yD([RB ? ND(qB) : qD(qB), ...qB ? [] : [RB ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${BB.index("callback")}` : `## Callbacks (all of them)\n${BB.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: ob([ze ? Bb(Te) : Xb(Te), ...Te ? [] : [ze ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${ee.index("callback")}` : `## Callbacks (all of them)\n${ee.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```

#### 225. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6192-L6197` → after: `L6192-L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6192-L6197) · [Before (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6192-L6197)

```diff
-             hasWorldCodeFiles: !0 === dD(OB).hasWorldCodeFiles,
-             hasLookedUp: (null !== (GB = null === (YB = OB.lookups) || void 0 === YB ? void 0 : YB.length) && void 0 !== GB ? GB : 0) > 0,
-             movesToWorldCode: !0 === OB.canChangeWorldCode,
-             listedPrefabs: SB,
-             guidesToPrefabs: !0 === KD(OB).guide
-           })].filter((BB => "" !== BB)).join("\n\n"), AB, yB.format, yB.nativeTools)
+             hasWorldCodeFiles: !0 === Pb(ie).hasWorldCodeFiles,
+             hasLookedUp: (null !== (He = null === (ye = ie.lookups) || void 0 === ye ? void 0 : ye.length) && void 0 !== He ? He : 0) > 0,
+             movesToWorldCode: !0 === ie.canChangeWorldCode,
+             listedPrefabs: Oe,
+             guidesToPrefabs: !0 === Ab(ie).guide
+           })].filter((ee => "" !== ee)).join("\n\n"), Ee, Fe.format, Fe.nativeTools)
```

#### 226. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6199-L6202` → after: `L6199-L6202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6199-L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6199-L6202) · [Before (L6199-L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6199-L6202)

```diff
-       if (!PB)
-         for (const rB of OB.history) kB.push({
-           role: rB.role,
-           content: rB.text
+       if (!Re)
+         for (const Le of ie.history) Ze.push({
+           role: Le.role,
+           content: Le.text
```

#### 227. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6204-L6212` → after: `L6204-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6204-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6204-L6212) · [Before (L6204-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6204-L6212)

```diff
-       const dB = PB && !MB && OB.history.length > 0 ? `Earlier in this chat:\n${OB.history.map((BB=>`${"user"===BB.role?"They asked":"You answered"}: ${BB.text}`)).join("\n")}\n\n` : "",
-         KB = null !== (DB = OB.about) && void 0 !== DB && DB.notes.length ? `AI notes (notes they kept):\n${OB.about.notes.map((BB=>`- ${BB}`)).join("\n")}\n\n` : "",
-         uB = null !== (QB = OB.about) && void 0 !== QB && QB.outline ? `Outline of their code:\n${OB.about.outline}\n\n` : "",
-         mB = OB.errors.length > 0 ? `\n\nErrors their world showed recently:\n${OB.errors.slice(-5).join("\n")}` : "",
-         IB = null === (oB = OB.failedEdits) || void 0 === oB || !oB.length || PB && MB ? "" : `\n\nWhat happened to your last answer's changes:\n${function(BB,OB){return BB.map((BB=>BG[OB].editFailure(BB.tool,MD(BB)))).join("\n\n")}(OB.failedEdits,yB.format)}`,
-         FB = [...JB ? fB : [], ...PB ? [nB, UB] : []].filter((BB => "" !== BB)).map((BB => `${BB}\n\n`)).join(""),
-         iB = null === (jB = OB.lookups) || void 0 === jB || !jB.length || PB && MB ? "" : `\n\nWhat you looked up for this request:\n${LB=OB.lookups,gB=yB.format,LB.map((BB=>BG[gB].lookupResult(BB.tool,BB.about,BB.text))).join("\n\n")}`;
-       var LB, gB;
-       return kB.push({
+       const we = Re && !oe && ie.history.length > 0 ? `Earlier in this chat:\n${ie.history.map((ee=>`${"user"===ee.role?"They asked":"You answered"}: ${ee.text}`)).join("\n")}\n\n` : "",
+         De = null !== (be = ie.about) && void 0 !== be && be.notes.length ? `AI notes (notes they kept):\n${ie.about.notes.map((ee=>`- ${ee}`)).join("\n")}\n\n` : "",
+         Pe = null !== (Me = ie.about) && void 0 !== Me && Me.outline ? `Outline of their code:\n${ie.about.outline}\n\n` : "",
+         Ae = ie.errors.length > 0 ? `\n\nErrors their world showed recently:\n${ie.errors.slice(-5).join("\n")}` : "",
+         Ye = null === (Ke = ie.failedEdits) || void 0 === Ke || !Ke.length || Re && oe ? "" : `\n\nWhat happened to your last answer's changes:\n${function(ee,ie){return ee.map((ee=>HH[ie].editFailure(ee.tool,kb(ee)))).join("\n\n")}(ie.failedEdits,Fe.format)}`,
+         Ve = [...Je ? te : [], ...Re ? [de, We] : []].filter((ee => "" !== ee)).map((ee => `${ee}\n\n`)).join(""),
+         ae = null === (Ue = ie.lookups) || void 0 === Ue || !Ue.length || Re && oe ? "" : `\n\nWhat you looked up for this request:\n${ce=ie.lookups,xe=Fe.format,ce.map((ee=>HH[xe].lookupResult(ee.tool,ee.about,ee.text))).join("\n\n")}`;
+       var ce, xe;
+       return Ze.push({
```

#### 228. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6215` → after: `L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6215) · [Before (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6215)

```diff
-       }), kB
+       }), Ze
```

#### 229. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6217` → after: `L6217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6217) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6217)

```diff
-     var FD = GB(40414);
+     var cb = He(40521);
```

#### 230. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6219-L6220` → after: `L6219-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6219-L6220) · [Before (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6219-L6220)

```diff
-     function iD(BB) {
-       var OB, GB, YB, DB, QB, oB;
+     function xb(ee) {
+       var ie, He, ye, be, Me, Ke;
```

#### 231. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6222-L6224` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6222-L6224) · [Before (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6222-L6224)

```diff
-         args: jB
-       } = BB;
-       switch (BB.name) {
+         args: Ue
+       } = ee;
+       switch (ee.name) {
```

#### 232. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6226` → after: `L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6226) · [Before (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6226)

```diff
-           return null !== (OB = jB.path) && void 0 !== OB ? OB : "a file";
+           return null !== (ie = Ue.path) && void 0 !== ie ? ie : "a file";
```

#### 233. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6230` → after: `L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6230) · [Before (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6230)

```diff
-           return jB.position ? `the blocks near ${null!==(GB=null===(YB=(0,FD.c)(jB.position))||void 0===YB?void 0:YB.map(Math.floor).join(", "))&&void 0!==GB?GB:jB.position}` : "the blocks around you";
+           return Ue.position ? `the blocks near ${null!==(He=null===(ye=(0,cb.f)(Ue.position))||void 0===ye?void 0:ye.map(Math.floor).join(", "))&&void 0!==He?He:Ue.position}` : "the blocks around you";
```

#### 234. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6234` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6234) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6234)

```diff
-           return jB.name ? `the docs for ${jB.name}` : `the list of ${gD(null!==(DB=jB.list)&&void 0!==DB?DB:LD)}`;
+           return Ue.name ? `the docs for ${Ue.name}` : `the list of ${Cb(null!==(be=Ue.list)&&void 0!==be?be:Lb)}`;
```

#### 235. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6236-L6240` → after: `L6236-L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6236-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6236-L6240) · [Before (L6236-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6236-L6240)

```diff
-           return function(BB) {
-             const OB = void 0 === BB ? null : AB(BB);
-             if (null === OB) return null !== BB && void 0 !== BB ? BB : "a docs page";
-             return VB(OB) ? "the list of docs pages" : `the docs page ${function(BB){const OB=(0,NB.y)(BB);return null===OB?BB:`${OB.name}${null===OB.part?"":`/${OB.part}`}`}(OB)}`
-           }(jB.url);
+           return function(ee) {
+             const ie = void 0 === ee ? null : Ee(ee);
+             if (null === ie) return null !== ee && void 0 !== ee ? ee : "a docs page";
+             return ge(ie) ? "the list of docs pages" : `the docs page ${function(ee){const ie=(0,Xe.H)(ee);return null===ie?ee:`${ie.name}${null===ie.part?"":`/${ie.part}`}`}(ie)}`
+           }(Ue.url);
```

#### 236. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6242` → after: `L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6242) · [Before (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6242)

```diff
-           return `names for "${null!==(QB=jB.words)&&void 0!==QB?QB:""}"`;
+           return `names for "${null!==(Me=Ue.words)&&void 0!==Me?Me:""}"`;
```

#### 237. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6246` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6246) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6246)

```diff
-           return jB.category ? `the ready-made ${jB.category} games` : "the ready-made games";
+           return Ue.category ? `the ready-made ${Ue.category} games` : "the ready-made games";
```

#### 238. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6248` → after: `L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6248) · [Before (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6248)

```diff
-           return `the ready-made ${null!==(oB=jB.name)&&void 0!==oB?oB:"game"}`
+           return `the ready-made ${null!==(Ke=Ue.name)&&void 0!==Ke?Ke:"game"}`
```

#### 239. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6251` → after: `L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6251) · [Before (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6251)

```diff
-     const LD = "functions";
+     const Lb = "functions";
```

#### 240. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6253-L6254` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6253-L6254) · [Before (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6253-L6254)

```diff
-     function gD(BB) {
-       return BB.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
+     function Cb(ee) {
+       return ee.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
```

#### 241. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6257-L6258` → after: `L6257-L6258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6257-L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6257-L6258) · [Before (L6257-L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6257-L6258)

```diff
-     function rD(BB) {
-       return "get_docs" === BB.name || "fetch_url" === BB.name
+     function vb(ee) {
+       return "get_docs" === ee.name || "fetch_url" === ee.name
```

#### 242. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6260-L6263` → after: `L6260-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6260-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6260-L6263) · [Before (L6260-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6260-L6263)

```diff
-     async function XD(BB, OB) {
-       var GB;
-       const YB = iD(BB),
-         DB = OB => ({
+     async function ub(ee, ie) {
+       var He;
+       const ye = xb(ee),
+         be = ie => ({
```

#### 243. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6265-L6267` → after: `L6265-L6267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6265-L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6265-L6267) · [Before (L6265-L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6265-L6267)

```diff
-             tool: BB.name,
-             about: YB,
-             text: OB
+             tool: ee.name,
+             about: ye,
+             text: ie
```

#### 244. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6270` → after: `L6270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6270) · [Before (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6270)

```diff
-       switch (BB.name) {
+       switch (ee.name) {
```

#### 245. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6272` → after: `L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6272) · [Before (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6272)

```diff
-           return DB((jB = BB.args.path, yB = OB.files, void 0 === jB ? "No path was given: give the path of a file from the list." : Object.hasOwn(yB, jB) ? "" === yB[jB] ? `${jB} is empty.` : yB[jB] : `There is no file called ${jB}. Their files are: ${Object.keys(yB).join(", ")} … [truncated]
+           return be((Ue = ee.args.path, Fe = ie.files, void 0 === Ue ? "No path was given: give the path of a file from the list." : Object.hasOwn(Fe, Ue) ? "" === Fe[Ue] ? `${Ue} is empty.` : Fe[Ue] : `There is no file called ${Ue}. Their files are: ${Object.keys(Fe).join(", ")} … [truncated]
```

#### 246. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6274-L6279` → after: `L6274-L6279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6274-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6274-L6279) · [Before (L6274-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6274-L6279)

```diff
-           const BB = OB.readWorldCode ? await OB.readWorldCode() : null;
-           if (null === BB) return DB("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
-           const GB = Object.keys(BB).sort(),
-             YB = Object.fromEntries(GB.map((OB => [`${qB.i}${OB}`, BB[OB]]))),
-             QB = GB.map((OB => `${qB.i}${OB}:\n${""===BB[OB]?"(empty)":BB[OB]}`)).join("\n\n"),
-             oB = GB.length > 1 ? `\n\n${fD(GB,qB.i)}` : "";
+           const ee = ie.readWorldCode ? await ie.readWorldCode() : null;
+           if (null === ee) return be("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
+           const He = Object.keys(ee).sort(),
+             ye = Object.fromEntries(He.map((ie => [`${Te.i}${ie}`, ee[ie]]))),
+             Me = He.map((ie => `${Te.i}${ie}:\n${""===ee[ie]?"(empty)":ee[ie]}`)).join("\n\n"),
+             Ke = He.length > 1 ? `\n\n${wb(He,Te.i)}` : "";
```

#### 247. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6281-L6282` → after: `L6281-L6282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6281-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6281-L6282) · [Before (L6281-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6281-L6282)

```diff
-             ...DB("" === QB ? `World Code has no code yet: ${qB.i}index.js is empty.` : `${QB}${oB}`),
-             worldCodeFiles: YB
+             ...be("" === Me ? `World Code has no code yet: ${Te.i}index.js is empty.` : `${Me}${Ke}`),
+             worldCodeFiles: ye
```

#### 248. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6286` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6286) · [Before (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6286)

```diff
-           return DB(await OB.viewChunk((0, FD.c)(BB.args.position)));
+           return be(await ie.viewChunk((0, cb.f)(ee.args.position)));
```

#### 249. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6288` → after: `L6288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6288) · [Before (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6288)

```diff
-           return DB(await OB.viewGameState());
+           return be(await ie.viewGameState());
```

#### 250. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6290-L6293` → after: `L6290-L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6290-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6290-L6293) · [Before (L6290-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6290-L6293)

```diff
-           return DB(function(BB, OB, GB) {
-             if (void 0 === BB) {
-               const BB = (0, nB.c)(WO, gD(null !== OB && void 0 !== OB ? OB : LD));
-               return void 0 === BB ? `There is no list called ${OB}: ask for ${AO}.` : GB.index(BB)
+           return be(function(ee, ie, He) {
+             if (void 0 === ee) {
+               const ee = (0, de.b)(Ei, Cb(null !== ie && void 0 !== ie ? ie : Lb));
+               return void 0 === ee ? `There is no list called ${ie}: ask for ${gi}.` : He.index(ee)
```

#### 251. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6295-L6299` → after: `L6295-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6295-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6295-L6299) · [Before (L6295-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6295-L6299)

```diff
-             const YB = GB.section(BB);
-             if (YB) return YB.text;
-             const DB = GB.find(BB, "", 3).map((BB => BB.name)).join(", ");
-             return `Nothing is called ${BB}.${""===DB?"":` The closest names are: ${DB}.`}`
-           }(BB.args.name, BB.args.list, OB.docs));
+             const ye = He.section(ee);
+             if (ye) return ye.text;
+             const be = He.find(ee, "", 3).map((ee => ee.name)).join(", ");
+             return `Nothing is called ${ee}.${""===be?"":` The closest names are: ${be}.`}`
+           }(ee.args.name, ee.args.list, ie.docs));
```

#### 252. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6301` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6301) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6301)

```diff
-           return DB(await OB.fetchDocsPage(null !== (GB = BB.args.url) && void 0 !== GB ? GB : ""));
+           return be(await ie.fetchDocsPage(null !== (He = ee.args.url) && void 0 !== He ? He : ""));
```

#### 253. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6303-L6305` → after: `L6303-L6305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6303-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6303-L6305) · [Before (L6303-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6303-L6305)

```diff
-           var QB, oB;
-           const GB = OB.docs.searchNames(null !== (QB = BB.args.words) && void 0 !== QB ? QB : "", 20);
-           return DB(GB.length > 0 ? GB.join(", ") : `No block, item or mob name has any of the words "${null!==(oB=BB.args.words)&&void 0!==oB?oB:""}".`)
+           var Me, Ke;
+           const He = ie.docs.searchNames(null !== (Me = ee.args.words) && void 0 !== Me ? Me : "", 20);
+           return be(He.length > 0 ? He.join(", ") : `No block, item or mob name has any of the words "${null!==(Ke=ee.args.words)&&void 0!==Ke?Ke:""}".`)
```

#### 254. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6308)

```diff
-           return DB(OB.errors.length > 0 ? OB.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+           return be(ie.errors.length > 0 ? ie.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
```

#### 255. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6310` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6310) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6310)

```diff
-           return DB(FY(BB.args.category));
+           return be(cy(ee.args.category));
```

#### 256. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6312-L6315` → after: `L6312-L6315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6312-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6312-L6315) · [Before (L6312-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6312-L6315)

```diff
-           return DB(function(BB, OB) {
-             const GB = void 0 === BB ? null : VY(BB);
-             return GB ? iY(GB, OB) : `There is no prefab called ${null!==BB&&void 0!==BB?BB:"that"}.\n${FY()}`
-           }(BB.args.name, !0 === OB.showPrefabCode))
+           return be(function(ee, ie) {
+             const He = void 0 === ee ? null : dy(ee);
+             return He ? xy(He, ie) : `There is no prefab called ${null!==ee&&void 0!==ee?ee:"that"}.\n${cy()}`
+           }(ee.args.name, !0 === ie.showPrefabCode))
```

#### 257. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6317` → after: `L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6317) · [Before (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6317)

```diff
-       var jB, yB
+       var Ue, Fe
```

#### 258. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6319` → after: `L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6319) · [Before (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6319)

```diff
-     const wD = [
+     const mb = [
```

#### 259. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6345-L6402` → after: `L6345-L6402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6345-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6345-L6402) · [Before (L6345-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6345-L6402)

```diff
-     function ED(BB) {
-       let OB = BB;
-       for (const [GB, YB] of wD) OB = OB.replace(GB, (BB => BB.length > 1 && BB[0] !== BB[0].toLowerCase() && BB.slice(1) === BB.slice(1).toLowerCase() ? YB[0].toUpperCase() + YB.slice(1) : YB));
-       return OB
-     }
-     const cD = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       hD = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       aD = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       eD = 12e3,
-       TD = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function bD(BB) {
-       var OB, GB, YB;
-       const DB = null === (OB = /Safety:\s*(\w+)/.exec(BB)) || void 0 === OB ? void 0 : OB[1],
-         QB = null !== (GB = null === (YB = /Categories:\s*(.+)/.exec(BB)) || void 0 === YB ? void 0 : YB[1]) && void 0 !== GB ? GB : "";
-       return /PII/.test(QB) ? "personalInfo" : "Unsafe" === DB || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(QB) ? "unsafe" : "ok"
- ... (42 more removed lines; see GitHub link above)
+     function lb(ee) {
+       let ie = ee;
+       for (const [He, ye] of mb) ie = ie.replace(He, (ee => ee.length > 1 && ee[0] !== ee[0].toLowerCase() && ee.slice(1) === ee.slice(1).toLowerCase() ? ye[0].toUpperCase() + ye.slice(1) : ye));
+       return ie
+     }
+     const Sb = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       nb = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       jb = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       sb = 12e3,
+       Ib = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function hb(ee) {
+       var ie, He, ye;
+       const be = null === (ie = /Safety:\s*(\w+)/.exec(ee)) || void 0 === ie ? void 0 : ie[1],
+         Me = null !== (He = null === (ye = /Categories:\s*(.+)/.exec(ee)) || void 0 === ye ? void 0 : ye[1]) && void 0 !== He ? He : "";
+       return /PII/.test(Me) ? "personalInfo" : "Unsafe" === be || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(Me) ? "unsafe" : "ok"
+ ... (42 more added lines; see GitHub link above)
```

#### 260. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6404-L6407` → after: `L6404-L6407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6404-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6404-L6407) · [Before (L6404-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6404-L6407)

```diff
-           if ("\n" === OB) break;
-           if (GB) GB = "]" !== OB;
-           else if ("[" === OB) GB = !0;
-           else if ("/" === OB) return YB + 1
+           if ("\n" === ie) break;
+           if (He) He = "]" !== ie;
+           else if ("[" === ie) He = !0;
+           else if ("/" === ie) return ye + 1
```

#### 261. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6410-L6431` → after: `L6410-L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6410-L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6410-L6431) · [Before (L6410-L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6410-L6431)

```diff
-       return OB + 1
-     }
- 
-     function BQ(BB, OB, GB, YB) {
-       let DB = OB,
-         QB = 0;
-       for (; DB < BB.length;) {
-         const OB = BB[DB],
-           oB = BB[DB + 1];
-         if ("/" === OB && "/" === oB) {
-           const OB = BB.indexOf("\n", DB);
-           YB.push(BB.slice(DB + 2, -1 === OB ? BB.length : OB)), DB = -1 === OB ? BB.length : OB
-         } else if ("/" === OB && "*" === oB) {
-           const OB = BB.indexOf("*/", DB + 2);
-           YB.push(BB.slice(DB + 2, -1 === OB ? BB.length : OB)), DB = -1 === OB ? BB.length : OB + 2
-         } else if ("/" === OB && xD(BB, DB)) DB = tD(BB, DB);
- ... (6 more removed lines; see GitHub link above)
+       return ie + 1
+     }
+ 
+     function HM(ee, ie, He, ye) {
+       let be = ie,
+         Me = 0;
+       for (; be < ee.length;) {
+         const ie = ee[be],
+           Ke = ee[be + 1];
+         if ("/" === ie && "/" === Ke) {
+           const ie = ee.indexOf("\n", be);
+           ye.push(ee.slice(be + 2, -1 === ie ? ee.length : ie)), be = -1 === ie ? ee.length : ie
+         } else if ("/" === ie && "*" === Ke) {
+           const ie = ee.indexOf("*/", be + 2);
+           ye.push(ee.slice(be + 2, -1 === ie ? ee.length : ie)), be = -1 === ie ? ee.length : ie + 2
+         } else if ("/" === ie && eM(ee, be)) be = iM(ee, be);
+ ... (6 more added lines; see GitHub link above)
```

#### 262. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6433-L6436` → after: `L6433-L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6433-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6433-L6436) · [Before (L6433-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6433-L6436)

```diff
-           if (GB && "{" === OB) QB++;
-           else if (GB && "}" === OB) {
-             if (0 === QB) return DB + 1;
-             QB--
+           if (He && "{" === ie) Me++;
+           else if (He && "}" === ie) {
+             if (0 === Me) return be + 1;
+             Me--
```

#### 263. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6438` → after: `L6438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6438) · [Before (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6438)

```diff
-           DB++
+           be++
```

#### 264. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6441` → after: `L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6441) · [Before (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6441)

```diff
-       return DB
+       return be
```

#### 265. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6443-L6447` → after: `L6443-L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6443-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6443-L6447) · [Before (L6443-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6443-L6447)

```diff
-     const OQ = 4e5;
-     var GQ = GB(44631);
-     let YQ = [],
-       DQ = 0,
-       QQ = null;
+     const yM = 4e5;
+     var bM = He(44667);
+     let MM = [],
+       KM = 0,
+       UM = null;
```

#### 266. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6449-L6450` → after: `L6449-L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6449-L6450) · [Before (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6449-L6450)

```diff
-     function oQ(BB) {
-       return Math.ceil(BB.length / 4)
+     function FM(ee) {
+       return Math.ceil(ee.length / 4)
```

#### 267. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6453-L6454` → after: `L6453-L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6453-L6454) · [Before (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6453-L6454)

```diff
-     function jQ(BB) {
-       return "number" === typeof BB && Number.isInteger(BB) && BB >= 0
+     function JM(ee) {
+       return "number" === typeof ee && Number.isInteger(ee) && ee >= 0
```

#### 268. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6457-L6460` → after: `L6457-L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6457-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6457-L6460) · [Before (L6457-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6457-L6460)

```diff
-     function yQ(BB, OB, GB) {
-       var YB;
-       let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ! function(BB) {
+     function oM(ee, ie, He) {
+       var ye;
+       let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(ee) {
```

#### 269. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6462-L6465` → after: `L6462-L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6462-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6462-L6465) · [Before (L6462-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6462-L6465)

```diff
-         if (YQ.push(BB), YQ.length >= 40) return void MQ();
-         JQ()
-       }(null !== (YB = function(BB) {
-         if (null === BB || "object" !== typeof BB) return null;
+         if (MM.push(ee), MM.length >= 40) return void kM();
+         RM()
+       }(null !== (ye = function(ee) {
+         if (null === ee || "object" !== typeof ee) return null;
```

#### 270. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6467-L6472` → after: `L6467-L6472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6467-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6467-L6472) · [Before (L6467-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6467-L6472)

```diff
-           prompt_tokens: OB,
-           completion_tokens: GB,
-           prompt_tokens_details: YB
-         } = BB;
-         if (!jQ(OB) || !jQ(GB)) return null;
-         const DB = null !== YB && "object" === typeof YB ? YB.cached_tokens : void 0;
+           prompt_tokens: ie,
+           completion_tokens: He,
+           prompt_tokens_details: ye
+         } = ee;
+         if (!JM(ie) || !JM(He)) return null;
+         const be = null !== ye && "object" === typeof ye ? ye.cached_tokens : void 0;
```

#### 271. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6474-L6476` → after: `L6474-L6476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6474-L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6474-L6476) · [Before (L6474-L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6474-L6476)

```diff
-           sent: OB,
-           cached: jQ(DB) ? DB : 0,
-           received: GB
+           sent: ie,
+           cached: JM(be) ? be : 0,
+           received: He
```

#### 272. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6478-L6479` → after: `L6478-L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6478-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6478-L6479) · [Before (L6478-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6478-L6479)

```diff
-       }(BB)) && void 0 !== YB ? YB : {
-         sent: oQ(JSON.stringify(OB)),
+       }(ee)) && void 0 !== ye ? ye : {
+         sent: FM(JSON.stringify(ie)),
```

#### 273. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6481` → after: `L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6481) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6481)

```diff
-         received: oQ(GB) + DB
+         received: FM(He) + be
```

#### 274. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6485-L6487` → after: `L6485-L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6485-L6487) · [Before (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6485-L6487)

```diff
-     function JQ() {
-       QQ ??= setTimeout((() => {
-         MQ()
+     function RM() {
+       UM ??= setTimeout((() => {
+         kM()
```

#### 275. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6490-L6494` → after: `L6490-L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6490-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6490-L6494) · [Before (L6490-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6490-L6494)

```diff
-     async function MQ() {
-       null !== QQ && (clearTimeout(QQ), QQ = null);
-       const BB = YQ.slice(0, 40);
-       YQ = YQ.slice(40), YQ.length > 0 && (QQ = setTimeout((() => {
-         MQ()
+     async function kM() {
+       null !== UM && (clearTimeout(UM), UM = null);
+       const ee = MM.slice(0, 40);
+       MM = MM.slice(40), MM.length > 0 && (UM = setTimeout((() => {
+         kM()
```

#### 276. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6496-L6500` → after: `L6496-L6500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6496-L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6496-L6500) · [Before (L6496-L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6496-L6500)

```diff
-       const OB = DQ;
-       if (DQ = 0, 0 !== BB.length || 0 !== OB) try {
-         await (0, GQ.postToGameServer)("/ai-helper/usage", {
-           calls: BB,
-           pastes: OB
+       const ie = KM;
+       if (KM = 0, 0 !== ee.length || 0 !== ie) try {
+         await (0, bM.postToGameServer)("/ai-helper/usage", {
+           calls: ee,
+           pastes: ie
```

#### 277. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6504-L6505` → after: `L6504-L6505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6504-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6504-L6505) · [Before (L6504-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6504-L6505)

```diff
-     const PQ = 6e4;
-     const zQ = new class {
+     const qM = 6e4;
+     const fM = new class {
```

#### 278. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6509-L6511` → after: `L6509-L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6509-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6509-L6511) · [Before (L6509-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6509-L6511)

```diff
-       record(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         this.calls.set(BB, [...this.recent(BB, OB), OB])
+       record(ee) {
+         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(ee, [...this.recent(ee, ie), ie])
```

#### 279. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6513-L6517` → after: `L6513-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6513-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6513-L6517) · [Before (L6513-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6513-L6517)

```diff
-       markFull(BB) {
-         var OB;
-         let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
-           YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.fullUntil.set(BB, Math.max(null !== (OB = this.fullUntil.get(BB)) && void 0 !== OB ? OB : 0, GB + Math.max(YB, PQ)))
+       markFull(ee) {
+         var ie;
+         let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(ee, Math.max(null !== (ie = this.fullUntil.get(ee)) && void 0 !== ie ? ie : 0, He + Math.max(ye, qM)))
```

#### 280. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6519-L6521` → after: `L6519-L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6519-L6521) · [Before (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6519-L6521)

```diff
-       callsInLastMinute(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return this.recent(BB, OB).length
+       callsInLastMinute(ee) {
+         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(ee, ie).length
```

#### 281. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6523-L6528` → after: `L6523-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6523-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6523-L6528) · [Before (L6523-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6523-L6528)

```diff
-       freeAt(BB) {
-         var OB;
-         let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const YB = this.recent(BB, GB),
-           DB = YB.length < 2 ? GB : YB[YB.length - 2] + PQ;
-         return Math.max(DB, null !== (OB = this.fullUntil.get(BB)) && void 0 !== OB ? OB : 0, GB)
+       freeAt(ee) {
+         var ie;
+         let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const ye = this.recent(ee, He),
+           be = ye.length < 2 ? He : ye[ye.length - 2] + qM;
+         return Math.max(be, null !== (ie = this.fullUntil.get(ee)) && void 0 !== ie ? ie : 0, He)
```

#### 282. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6530-L6532` → after: `L6530-L6532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6530-L6532) · [Before (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6530-L6532)

```diff
-       firstFreeAt(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...BB.map((BB => this.freeAt(BB, OB))))
+       firstFreeAt(ee) {
+         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...ee.map((ee => this.freeAt(ee, ie))))
```

#### 283. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6537-L6539` → after: `L6537-L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6537-L6539) · [Before (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6537-L6539)

```diff
-       recent(BB, OB) {
-         var GB;
-         return (null !== (GB = this.calls.get(BB)) && void 0 !== GB ? GB : []).filter((BB => OB - BB < PQ))
+       recent(ee, ie) {
+         var He;
+         return (null !== (He = this.calls.get(ee)) && void 0 !== He ? He : []).filter((ee => ie - ee < qM))
```

#### 284. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6543-L6544` → after: `L6543-L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6543-L6544) · [Before (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6543-L6544)

```diff
-     function lQ(BB) {
-       return BB > 36e5
+     function TM(ee) {
+       return ee > 36e5
```

#### 285. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6547-L6550` → after: `L6547-L6550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6547-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6547-L6550) · [Before (L6547-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6547-L6550)

```diff
-     function pQ(BB, OB) {
-       var GB;
-       const YB = null === (GB = BB.headers.get(OB)) || void 0 === GB ? void 0 : GB.trim();
-       return void 0 !== YB && /^\d+$/.test(YB) ? Number(YB) : null
+     function pM(ee, ie) {
+       var He;
+       const ye = null === (He = ee.headers.get(ie)) || void 0 === He ? void 0 : He.trim();
+       return void 0 !== ye && /^\d+$/.test(ye) ? Number(ye) : null
```

#### 286. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6553-L6556` → after: `L6553-L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6553-L6556) · [Before (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6553-L6556)

```diff
-     function qQ(BB) {
-       var OB;
-       const GB = null !== (OB = pQ(BB, "retry-after")) && void 0 !== OB ? OB : pQ(BB, "ratelimit-reset");
-       return null === GB ? null : 1e3 * GB
+     function XM(ee) {
+       var ie;
+       const He = null !== (ie = pM(ee, "retry-after")) && void 0 !== ie ? ie : pM(ee, "ratelimit-reset");
+       return null === He ? null : 1e3 * He
```

#### 287. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6559-L6562` → after: `L6559-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6559-L6562) · [Before (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6559-L6562)

```diff
-     function ZQ(BB, OB) {
-       var GB;
-       const YB = null !== (GB = qQ(OB)) && void 0 !== GB ? GB : 0;
-       (429 === OB.status || lQ(YB) && 0 === pQ(OB, "ratelimit-remaining")) && zQ.markFull(BB, Date.now(), YB)
+     function zM(ee, ie) {
+       var He;
+       const ye = null !== (He = XM(ie)) && void 0 !== He ? He : 0;
+       (429 === ie.status || TM(ye) && 0 === pM(ie, "ratelimit-remaining")) && fM.markFull(ee, Date.now(), ye)
```

#### 288. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6565-L6568` → after: `L6565-L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6565-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6565-L6568) · [Before (L6565-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6565-L6568)

```diff
-     function NQ(BB) {
-       const OB = Date.now(),
-         GB = zQ.freeAt(BB, OB) - OB;
-       return GB <= 0 ? null : lQ(GB) ? "unavailable" : "busy"
+     function BM(ee) {
+       const ie = Date.now(),
+         He = fM.freeAt(ee, ie) - ie;
+       return He <= 0 ? null : TM(He) ? "unavailable" : "busy"
```

#### 289. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6571-L6572` → after: `L6571-L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6571-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6571-L6572) · [Before (L6571-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6571-L6572)

```diff
-     function RQ(BB, OB) {
-       return `${function(BB){var OB;if("string"===typeof BB)return BB;if(429!==BB.status)return`http-${BB.status}`;if(lQ(null!==(OB=qQ(BB))&&void 0!==OB?OB:0))return"yearly-limit";const GB=pQ(BB,"retry-after");return null===GB?"busy":`busy-ra${GB}`}(OB)}__${BB.replace(/[^A-Za-z0- … [truncated]
+     function EM(ee, ie) {
+       return `${function(ee){var ie;if("string"===typeof ee)return ee;if(429!==ee.status)return`http-${ee.status}`;if(TM(null!==(ie=XM(ee))&&void 0!==ie?ie:0))return"yearly-limit";const He=pM(ee,"retry-after");return null===He?"busy":`busy-ra${He}`}(ie)}__${ee.replace(/[^A-Za-z0- … [truncated]
```

#### 290. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6574-L6576` → after: `L6574-L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6574-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6574-L6576) · [Before (L6574-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6574-L6576)

```diff
-     const WQ = new class {
-         constructor(BB) {
-           this.loadReporter = BB, this.reportedCodes = new Set
+     const gM = new class {
+         constructor(ee) {
+           this.loadReporter = ee, this.reportedCodes = new Set
```

#### 291. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6578-L6580` → after: `L6578-L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6578-L6580) · [Before (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6578-L6580)

```diff
-         jP(BB, OB) {
-           const GB = RQ(BB, OB);
-           "undefined" === typeof window || this.reportedCodes.has(GB) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(GB), this.loadReporter().then((OB => {
+         RR(ee, ie) {
+           const He = EM(ee, ie);
+           "undefined" === typeof window || this.reportedCodes.has(He) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(He), this.loadReporter().then((ie => {
```

#### 292. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6582-L6586` → after: `L6582-L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6582-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6582-L6586) · [Before (L6582-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6582-L6586)

```diff
-               reportCappedWasmFailure: YB
-             } = OB;
-             YB("ai_helper_failed", `World Code AI: ${BB} failed`, GB)
-           })).catch((BB => {
-             console.error("World Code AI: couldn't report a failure", BB)
+               reportCappedWasmFailure: ye
+             } = ie;
+             ye("ai_helper_failed", `World Code AI: ${ee} failed`, He)
+           })).catch((ee => {
+             console.error("World Code AI: couldn't report a failure", ee)
```

#### 293. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6589-L6601` → after: `L6589-L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6589-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6589-L6601) · [Before (L6589-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6589-L6601)

```diff
-       }((() => GB.e(212).then((() => GB(34626))))),
-       AQ = /\n{3,}/,
-       VQ = /<tool_call\b|<function=/;
- 
-     function SQ(BB) {
-       const OB = BB.trimStart(),
-         GB = AQ.exec(OB),
-         YB = VQ.exec(OB);
-       if (null === GB || null !== YB && YB.index < GB.index) return null;
-       const DB = OB.slice(GB.index + GB[0].length);
-       return "" === DB.trim() ? null : DB
-     }
-     const nQ = [{
+       }((() => He.e(212).then((() => He(34708))))),
+       OM = /\n{3,}/,
+       dM = /<tool_call\b|<function=/;
+ 
+     function WM(ee) {
+       const ie = ee.trimStart(),
+         He = OM.exec(ie),
+         ye = dM.exec(ie);
+       if (null === He || null !== ye && ye.index < He.index) return null;
+       const be = ie.slice(He.index + He[0].length);
+       return "" === be.trim() ? null : be
+     }
+     const tM = [{
```

#### 294. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6620` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6620) · [Before (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6620)

```diff
-     const UQ = {
+     const ZM = {
```

#### 295. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6627-L6628` → after: `L6627-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6627-L6628) · [Before (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6627-L6628)

```diff
-     function fQ(BB) {
-       return [...nQ, UQ].find((OB => OB.name === BB))
+     function wM(ee) {
+       return [...tM, ZM].find((ie => ie.name === ee))
```

#### 296. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6631-L6633` → after: `L6631-L6633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6631-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6631-L6633) · [Before (L6631-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6631-L6633)

```diff
-     function kQ(BB) {
-       var OB, GB;
-       return null !== (OB = null === (GB = fQ(BB)) || void 0 === GB ? void 0 : GB.callFormat) && void 0 !== OB ? OB : "simple"
+     function DM(ee) {
+       var ie, He;
+       return null !== (ie = null === (He = wM(ee)) || void 0 === He ? void 0 : He.callFormat) && void 0 !== ie ? ie : "simple"
```

#### 297. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6636-L6637` → after: `L6636-L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6636-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6636-L6637) · [Before (L6636-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6636-L6637)

```diff
-     function dQ(BB) {
-       var OB;
+     function PM(ee) {
+       var ie;
```

#### 298. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6639-L6640` → after: `L6639-L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6639-L6640) · [Before (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6639-L6640)

```diff
-         format: null !== (OB = BB.callFormat) && void 0 !== OB ? OB : "simple",
-         nativeTools: !0 === BB.nativeTools
+         format: null !== (ie = ee.callFormat) && void 0 !== ie ? ie : "simple",
+         nativeTools: !0 === ee.nativeTools
```

#### 299. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6644-L6645` → after: `L6644-L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6644-L6645) · [Before (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6644-L6645)

```diff
-     function KQ(BB, OB) {
-       return "function" === typeof BB ? BB(OB) : BB
+     function AM(ee, ie) {
+       return "function" === typeof ee ? ee(ie) : ee
```

#### 300. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6647-L6653` → after: `L6647-L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6647-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6647-L6653) · [Before (L6647-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6647-L6653)

```diff
-     const uQ = "TOO_COMPLEX",
-       mQ = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${uQ} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       IQ = 24e4,
-       FQ = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class iQ extends Error {
-       constructor(BB) {
-         super(`World Code AI ${BB}`), this.reason = BB
+     const YM = "TOO_COMPLEX",
+       VM = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${YM} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       aM = 24e4,
+       cM = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class xM extends Error {
+       constructor(ee) {
+         super(`World Code AI ${ee}`), this.reason = ee
```

#### 301. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6657-L6659` → after: `L6657-L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6657-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6657-L6659) · [Before (L6657-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6657-L6659)

```diff
-     function LQ(BB, OB) {
-       var GB, YB, DB, QB, oB;
-       const jB = BB[null !== (GB = OB.index) && void 0 !== GB ? GB : 0] ??= {
+     function LM(ee, ie) {
+       var He, ye, be, Me, Ke;
+       const Ue = ee[null !== (He = ie.index) && void 0 !== He ? He : 0] ??= {
```

#### 302. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6663)

```diff
-       jB.name += null !== (YB = null === (DB = OB.function) || void 0 === DB ? void 0 : DB.name) && void 0 !== YB ? YB : "", jB.args += null !== (QB = null === (oB = OB.function) || void 0 === oB ? void 0 : oB.arguments) && void 0 !== QB ? QB : ""
+       Ue.name += null !== (ye = null === (be = ie.function) || void 0 === be ? void 0 : be.name) && void 0 !== ye ? ye : "", Ue.args += null !== (Me = null === (Ke = ie.function) || void 0 === Ke ? void 0 : Ke.arguments) && void 0 !== Me ? Me : ""
```

#### 303. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6666-L6667` → after: `L6666-L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6666-L6667) · [Before (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6666-L6667)

```diff
-     function gQ(BB) {
-       return "mcp" === BB ? "simple" : BB
+     function CM(ee) {
+       return "mcp" === ee ? "simple" : ee
```

#### 304. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6670-L6672` → after: `L6670-L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6670-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6670-L6672) · [Before (L6670-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6670-L6672)

```diff
-     function rQ(BB, OB, GB, YB) {
-       let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return XQ(BB, OB, GB, gQ(YB), DB).answer
+     function vM(ee, ie, He, ye) {
+       let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return uM(ee, ie, He, CM(ye), be).answer
```

#### 305. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6675-L6678` → after: `L6675-L6678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6675-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6675-L6678) · [Before (L6675-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6675-L6678)

```diff
-     function XQ(BB, OB, GB, YB, DB) {
-       const QB = GB.flatMap((BB => {
-         const OB = zG(BB.name, BB.args);
-         return null === OB ? [] : [jD(YG(YB), OB.name, OB.args)]
+     function uM(ee, ie, He, ye, be) {
+       const Me = He.flatMap((ee => {
+         const ie = fH(ee.name, ee.args);
+         return null === ie ? [] : [Jb(MH(ye), ie.name, ie.args)]
```

#### 306. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6680-L6687` → after: `L6680-L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6680-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6680-L6687) · [Before (L6680-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6680-L6687)

```diff
-       let oB = !1;
-       return 0 !== QB.length || 0 !== pG(BB, YB).length || BB.includes("```") || (QB.push(...DB ? [] : function(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const YB = new Map;
-         for (const jB of lG(BB, OB)) {
-           const BB = Object.values(jB.args).some((BB => void 0 !== BB && GB.includes(BB.trim())));
-           var DB, QB, oB;
-           "export_game" === jB.name || "switch_to_world_code" === jB.name || UO(jB.name) || BB || YB.set(`${jB.name} ${null!==(DB=jB.args.path)&&void 0!==DB?DB:""} ${null!==(QB=jB.args.search)&&void 0!==QB?QB:""} ${null!==(oB=jB.args.name)&&void 0!==oB?oB:""}`, jB.source)
+       let Ke = !1;
+       return 0 !== Me.length || 0 !== pH(ee, ye).length || ee.includes("```") || (Me.push(...be ? [] : function(ee, ie) {
+         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const ye = new Map;
+         for (const Ue of TH(ee, ie)) {
+           const ee = Object.values(Ue.args).some((ee => void 0 !== ee && He.includes(ee.trim())));
+           var be, Me, Ke;
+           "export_game" === Ue.name || "switch_to_world_code" === Ue.name || ti(Ue.name) || ee || ye.set(`${Ue.name} ${null!==(be=Ue.args.path)&&void 0!==be?be:""} ${null!==(Me=Ue.args.search)&&void 0!==Me?Me:""} ${null!==(Ke=Ue.args.name)&&void 0!==Ke?Ke:""}`, Ue.source)
```

#### 307. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6689-L6692` → after: `L6689-L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6689-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6689-L6692) · [Before (L6689-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6689-L6692)

```diff
-         return [...new Set(YB.values())]
-       }(OB, YB, WD)), oB = QB.length > 0), {
-         answer: [BB, ...QB].join("\n\n").trim(),
-         hasCallsFromReasoning: oB
+         return [...new Set(ye.values())]
+       }(ie, ye, gb)), Ke = Me.length > 0), {
+         answer: [ee, ...Me].join("\n\n").trim(),
+         hasCallsFromReasoning: Ke
```

#### 308. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6695-L6698` → after: `L6695-L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6695-L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6695-L6698) · [Before (L6695-L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6695-L6698)

```diff
-     async function wQ(BB, OB) {
-       const GB = BB.getReader(),
-         YB = new TextDecoder;
-       let DB = "";
+     async function mM(ee, ie) {
+       const He = ee.getReader(),
+         ye = new TextDecoder;
+       let be = "";
```

#### 309. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6701-L6705` → after: `L6701-L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6701-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6701-L6705) · [Before (L6701-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6701-L6705)

```diff
-           done: BB,
-           value: QB
-         } = await GB.read();
-         if (BB) break;
-         DB += YB.decode(QB, {
+           done: ee,
+           value: Me
+         } = await He.read();
+         if (ee) break;
+         be += ye.decode(Me, {
```

#### 310. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6708-L6714` → after: `L6708-L6714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6708-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6708-L6714) · [Before (L6708-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6708-L6714)

```diff
-         let oB = DB.indexOf("\n");
-         for (; - 1 !== oB;) {
-           const BB = DB.slice(0, oB).trim();
-           if (DB = DB.slice(oB + 1), oB = DB.indexOf("\n"), !BB.startsWith("data:")) continue;
-           const GB = BB.slice(5).trim();
-           if ("[DONE]" === GB) return;
-           let YB;
+         let Ke = be.indexOf("\n");
+         for (; - 1 !== Ke;) {
+           const ee = be.slice(0, Ke).trim();
+           if (be = be.slice(Ke + 1), Ke = be.indexOf("\n"), !ee.startsWith("data:")) continue;
+           const He = ee.slice(5).trim();
+           if ("[DONE]" === He) return;
+           let ye;
```

#### 311. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6716` → after: `L6716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6716) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6716)

```diff
-             YB = JSON.parse(GB)
+             ye = JSON.parse(He)
```

#### 312. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6720` → after: `L6720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6720) · [Before (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6720)

```diff
-           OB(YB)
+           ie(ye)
```

#### 313. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6725-L6726` → after: `L6725-L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6725-L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6725-L6726) · [Before (L6725-L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6725-L6726)

```diff
-     function EQ(BB) {
-       return BB.map((BB => ({
+     function lM(ee) {
+       return ee.map((ee => ({
```

#### 314. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6729-L6731` → after: `L6729-L6731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6729-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6729-L6731) · [Before (L6729-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6729-L6731)

```diff
-           name: BB.name,
-           description: BB.description,
-           parameters: BB.inputSchema
+           name: ee.name,
+           description: ee.description,
+           parameters: ee.inputSchema
```

#### 315. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6736-L6737` → after: `L6736-L6737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6736-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6736-L6737) · [Before (L6736-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6736-L6737)

```diff
-     function cQ(BB) {
-       return "object" === typeof BB
+     function SM(ee) {
+       return "object" === typeof ee
```

#### 316. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6739-L6744` → after: `L6739-L6744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6739-L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6739-L6744) · [Before (L6739-L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6739-L6744)

```diff
-     async function hQ(BB, OB, GB, YB) {
-       let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const QB = NQ(BB.name);
-       if (null !== QB) return QB;
-       zQ.record(BB.name);
-       const oB = await fetch(cD, {
+     async function nM(ee, ie, He, ye) {
+       let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const Me = BM(ee.name);
+       if (null !== Me) return Me;
+       fM.record(ee.name);
+       const Ke = await fetch(Sb, {
```

#### 317. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6750-L6751` → after: `L6750-L6751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6750-L6751) · [Before (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6750-L6751)

```diff
-           model: BB.name,
-           messages: OB,
+           model: ee.name,
+           messages: ie,
```

#### 318. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6753-L6754` → after: `L6753-L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6753-L6754) · [Before (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6753-L6754)

```diff
-           temperature: BB.temperature,
-           reasoning_effort: BB.reasoningEffort,
+           temperature: ee.temperature,
+           reasoning_effort: ee.reasoningEffort,
```

#### 319. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6759-L6760` → after: `L6759-L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6759-L6760) · [Before (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6759-L6760)

```diff
-           ...BB.nativeTools && DB.length > 0 ? {
-             tools: EQ(DB)
+           ...ee.nativeTools && be.length > 0 ? {
+             tools: lM(be)
```

#### 320. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6765` → after: `L6765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6765) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6765)

```diff
-         signal: GB
+         signal: He
```

#### 321. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6767-L6775` → after: `L6767-L6775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6767-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6767-L6775) · [Before (L6767-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6767-L6775)

```diff
-       if (ZQ(BB.name, oB), 429 === oB.status) return WQ.jP(BB.name, oB), "unavailable" === NQ(BB.name) ? "unavailable" : "busy";
-       if (!oB.ok || !oB.body) return console.warn(`World Code AI: ${BB.name} answered ${oB.status}`), WQ.jP(BB.name, oB.ok ? "empty" : oB), oB.ok ? "failed" : 429 === (jB = oB.status) ? "busy" : 400 === jB || 413 === jB ? "tooLarge" : 401 === jB || 403 === jB ? "turnedAway" : "fa … [truncated]
-       var jB;
-       let yB = "",
-         JB = "";
-       const MB = [];
-       let PB = !1,
-         zB = !1,
-         lB = null;
+       if (zM(ee.name, Ke), 429 === Ke.status) return gM.RR(ee.name, Ke), "unavailable" === BM(ee.name) ? "unavailable" : "busy";
+       if (!Ke.ok || !Ke.body) return console.warn(`World Code AI: ${ee.name} answered ${Ke.status}`), gM.RR(ee.name, Ke.ok ? "empty" : Ke), Ke.ok ? "failed" : 429 === (Ue = Ke.status) ? "busy" : 400 === Ue || 413 === Ue ? "tooLarge" : 401 === Ue || 403 === Ue ? "turnedAway" : "fa … [truncated]
+       var Ue;
+       let Fe = "",
+         Je = "";
+       const oe = [];
+       let Re = !1,
+         ke = !1,
+         qe = null;
```

#### 322. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6777-L6783` → after: `L6777-L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6777-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6777-L6783) · [Before (L6777-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6777-L6783)

```diff
-         await async function(BB, OB, GB) {
-           await wQ(BB, (BB => {
-             var YB;
-             const DB = BB,
-               QB = null === (YB = DB.choices) || void 0 === YB ? void 0 : YB[0];
-             var oB, jB;
-             QB && OB(null !== (oB = QB.delta) && void 0 !== oB ? oB : {}, null !== (jB = QB.finish_reason) && void 0 !== jB ? jB : null), DB.usage && (null === GB || void 0 === GB || GB(DB.usage))
+         await async function(ee, ie, He) {
+           await mM(ee, (ee => {
+             var ye;
+             const be = ee,
+               Me = null === (ye = be.choices) || void 0 === ye ? void 0 : ye[0];
+             var Ke, Ue;
+             Me && ie(null !== (Ke = Me.delta) && void 0 !== Ke ? Ke : {}, null !== (Ue = Me.finish_reason) && void 0 !== Ue ? Ue : null), be.usage && (null === He || void 0 === He || He(be.usage))
```

#### 323. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6785-L6790` → after: `L6785-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6785-L6790) · [Before (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6785-L6790)

```diff
-         }(oB.body, ((OB, GB) => {
-           var DB, QB, oB, jB;
-           PB ||= "length" === GB, JB += null !== (DB = null !== (QB = OB.reasoning) && void 0 !== QB ? QB : OB.reasoning_content) && void 0 !== DB ? DB : "", yB += null !== (oB = OB.content) && void 0 !== oB ? oB : "";
-           for (const BB of null !== (lB = OB.tool_calls) && void 0 !== lB ? lB : []) {
-             var lB;
-             zB ||= "" !== JB && "" === yB.trim(), LQ(MB, BB)
+         }(Ke.body, ((ie, He) => {
+           var be, Me, Ke, Ue;
+           Re ||= "length" === He, Je += null !== (be = null !== (Me = ie.reasoning) && void 0 !== Me ? Me : ie.reasoning_content) && void 0 !== be ? be : "", Fe += null !== (Ke = ie.content) && void 0 !== Ke ? Ke : "";
+           for (const ee of null !== (qe = ie.tool_calls) && void 0 !== qe ? qe : []) {
+             var qe;
+             ke ||= "" !== Je && "" === Fe.trim(), LM(oe, ee)
```

#### 324. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6792-L6797` → after: `L6792-L6797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6792-L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6792-L6797) · [Before (L6792-L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6792-L6797)

```diff
-           const pB = BB.nativeTools && zB ? null !== (jB = SQ(yB)) && void 0 !== jB ? jB : "" : yB;
-           null === YB || void 0 === YB || YB({
-             model: BB.name,
-             reasoningChars: JB.length,
-             answer: pB,
-             isCalling: MB.length > 0
+           const fe = ee.nativeTools && ke ? null !== (Ue = WM(Fe)) && void 0 !== Ue ? Ue : "" : Fe;
+           null === ye || void 0 === ye || ye({
+             model: ee.name,
+             reasoningChars: Je.length,
+             answer: fe,
+             isCalling: oe.length > 0
```

#### 325. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6799-L6800` → after: `L6799-L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6799-L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6799-L6800) · [Before (L6799-L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6799-L6800)

```diff
-         }), (BB => {
-           lB = BB
+         }), (ee => {
+           qe = ee
```

#### 326. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6803` → after: `L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6803) · [Before (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6803)

```diff
-         yQ(lB, OB, yB + JB, 20 * MB.length)
+         oM(qe, ie, Fe + Je, 20 * oe.length)
```

#### 327. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6805-L6822` → after: `L6805-L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6805-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6805-L6822) · [Before (L6805-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6805-L6822)

```diff
-       const pB = aQ(BB, yB, JB, MB, PB, zB);
-       return null === pB ? (WQ.jP(BB.name, "empty"), "failed") : pB
-     }
- 
-     function aQ(BB, OB, GB, YB, DB) {
-       var QB;
-       let oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         jB = OB;
-       var yB;
-       BB.nativeTools && oB && (jB = null !== (yB = SQ(jB)) && void 0 !== yB ? yB : jB);
-       jB = jB.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const JB = XQ(jB, GB, YB, null !== (QB = BB.callFormat) && void 0 !== QB ? QB : "simple", DB);
-       return "" === JB.answer ? null : {
-         model: BB.name,
-         answer: JB.answer,
-         reasoning: GB,
- ... (2 more removed lines; see GitHub link above)
+       const fe = jM(ee, Fe, Je, oe, Re, ke);
+       return null === fe ? (gM.RR(ee.name, "empty"), "failed") : fe
+     }
+ 
+     function jM(ee, ie, He, ye, be) {
+       var Me;
+       let Ke = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Ue = ie;
+       var Fe;
+       ee.nativeTools && Ke && (Ue = null !== (Fe = WM(Ue)) && void 0 !== Fe ? Fe : Ue);
+       Ue = Ue.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const Je = uM(Ue, He, ye, null !== (Me = ee.callFormat) && void 0 !== Me ? Me : "simple", be);
+       return "" === Je.answer ? null : {
+         model: ee.name,
+         answer: Je.answer,
+         reasoning: He,
+ ... (2 more added lines; see GitHub link above)
```

#### 328. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6826-L6827` → after: `L6826-L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6826-L6827) · [Before (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6826-L6827)

```diff
-     function eQ(BB) {
-       return BB.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     function sM(ee) {
+       return ee.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 329. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6830-L6831` → after: `L6830-L6831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6830-L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6830-L6831) · [Before (L6830-L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6830-L6831)

```diff
-     function TQ(BB) {
-       return cQ(BB) && !BB.isCutShort
+     function IM(ee) {
+       return SM(ee) && !ee.isCutShort
```

#### 330. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6833-L6836` → after: `L6833-L6836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6833-L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6833-L6836) · [Before (L6833-L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6833-L6836)

```diff
-     async function bQ(BB, OB, GB, YB, DB) {
-       const QB = BB.map((() => new AbortController)),
-         oB = () => {
-           for (const BB of QB) BB.abort()
+     async function hM(ee, ie, He, ye, be) {
+       const Me = ee.map((() => new AbortController)),
+         Ke = () => {
+           for (const ee of Me) ee.abort()
```

#### 331. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6838` → after: `L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6838) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6838)

```diff
-       null !== GB && void 0 !== GB && GB.aborted && oB(), null === GB || void 0 === GB || GB.addEventListener("abort", oB, {
+       null !== He && void 0 !== He && He.aborted && Ke(), null === He || void 0 === He || He.addEventListener("abort", Ke, {
```

#### 332. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6841-L6855` → after: `L6841-L6855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6841-L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6841-L6855) · [Before (L6841-L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6841-L6855)

```diff
-       const jB = BB.map((() => {})),
-         yB = BB.map((() => {}));
-       let JB = null;
-       const MB = BB => void 0 !== BB && ("" !== eQ(BB.answer).trim() || !0 === BB.isCalling);
-       let PB = () => {};
-       BB.forEach(((BB, GB) => {
-         const oB = (0, RB.d)(IQ, QB[GB].signal);
-         hQ(BB, KQ(OB, BB), oB.signal, (BB => {
-           yB[GB] = BB, null === JB && MB(BB) && (JB = GB), JB === GB && (null === YB || void 0 === YB || YB(BB))
-         }), DB).catch((OB => {
-           if (QB[GB].signal.aborted) return "failed";
-           const YB = oB.signal.aborted;
-           return console.warn(`World Code AI: ${BB.name} ${YB?"took longer than 240 s":"couldn't be reached"}`, OB), WQ.jP(BB.name, YB ? "timeout" : "network"), YB ? "timeout" : "failed"
-         })).then((BB => {
-           oB.clear(), jB[GB] = BB, JB !== GB || TQ(BB) || (JB = null), PB()
+       const Ue = ee.map((() => {})),
+         Fe = ee.map((() => {}));
+       let Je = null;
+       const oe = ee => void 0 !== ee && ("" !== sM(ee.answer).trim() || !0 === ee.isCalling);
+       let Re = () => {};
+       ee.forEach(((ee, He) => {
+         const Ke = (0, ze.e)(aM, Me[He].signal);
+         nM(ee, AM(ie, ee), Ke.signal, (ee => {
+           Fe[He] = ee, null === Je && oe(ee) && (Je = He), Je === He && (null === ye || void 0 === ye || ye(ee))
+         }), be).catch((ie => {
+           if (Me[He].signal.aborted) return "failed";
+           const ye = Ke.signal.aborted;
+           return console.warn(`World Code AI: ${ee.name} ${ye?"took longer than 240 s":"couldn't be reached"}`, ie), gM.RR(ee.name, ye ? "timeout" : "network"), ye ? "timeout" : "failed"
+         })).then((ee => {
+           Ke.clear(), Ue[He] = ee, Je !== He || IM(ee) || (Je = null), Re()
```

#### 333. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6858-L6863` → after: `L6858-L6863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6858-L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6858-L6863) · [Before (L6858-L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6858-L6863)

```diff
-       const zB = () => {
-         var BB;
-         if (null !== JB) {
-           const BB = jB[JB];
-           return TQ(BB) ? {
-             reply: BB
+       const ke = () => {
+         var ee;
+         if (null !== Je) {
+           const ee = Ue[Je];
+           return IM(ee) ? {
+             reply: ee
```

#### 334. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6866-L6868` → after: `L6866-L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6866-L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6866-L6868) · [Before (L6866-L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6866-L6868)

```diff
-         const OB = jB.find(TQ);
-         if (OB) return {
-           reply: OB
+         const ie = Ue.find(IM);
+         if (ie) return {
+           reply: ie
```

#### 335. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6870-L6871` → after: `L6870-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6870-L6871) · [Before (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6870-L6871)

```diff
-         if (!jB.includes(void 0)) return {
-           reply: null !== (BB = jB.find(cQ)) && void 0 !== BB ? BB : null
+         if (!Ue.includes(void 0)) return {
+           reply: null !== (ee = Ue.find(SM)) && void 0 !== ee ? ee : null
```

#### 336. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6874-L6878` → after: `L6874-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6874-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6874-L6878) · [Before (L6874-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6874-L6878)

```diff
-           const BB = jB.findIndex(((BB, OB) => void 0 === BB && MB(yB[OB])));
-           if (-1 !== BB) {
-             JB = BB;
-             const OB = yB[BB];
-             OB && (null === YB || void 0 === YB || YB(OB))
+           const ee = Ue.findIndex(((ee, ie) => void 0 === ee && oe(Fe[ie])));
+           if (-1 !== ee) {
+             Je = ee;
+             const ie = Fe[ee];
+             ie && (null === ye || void 0 === ye || ye(ie))
```

#### 337. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6884-L6887` → after: `L6884-L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6884-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6884-L6887) · [Before (L6884-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6884-L6887)

```diff
-           if (null !== GB && void 0 !== GB && GB.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const BB = zB();
-           if (BB) {
-             const OB = jB.filter((BB => "string" === typeof BB));
+           if (null !== He && void 0 !== He && He.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const ee = ke();
+           if (ee) {
+             const ie = Ue.filter((ee => "string" === typeof ee));
```

#### 338. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6889-L6890` → after: `L6889-L6890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6889-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6889-L6890) · [Before (L6889-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6889-L6890)

```diff
-               reply: BB.reply,
-               failures: OB
+               reply: ee.reply,
+               failures: ie
```

#### 339. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6893-L6894` → after: `L6893-L6894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6893-L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6893-L6894) · [Before (L6893-L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6893-L6894)

```diff
-           await new Promise((BB => {
-             PB = BB
+           await new Promise((ee => {
+             Re = ee
```

#### 340. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6898` → after: `L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6898) · [Before (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6898)

```diff
-         null === GB || void 0 === GB || GB.removeEventListener("abort", oB), oB()
+         null === He || void 0 === He || He.removeEventListener("abort", Ke), Ke()
```

#### 341. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6902-L6917` → after: `L6902-L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6902-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6902-L6917) · [Before (L6902-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6902-L6917)

```diff
-     function CQ() {
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       const OB = zQ.firstFreeAt(nQ.map((BB => BB.name)), BB);
-       return lQ(OB - BB) ? BB : OB
-     }
-     async function HQ(BB) {
-       var OB;
-       let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const YB = Date.now(),
-         DB = null !== (OB = GB.models) && void 0 !== OB ? OB : nQ,
-         QB = void 0 === GB.models ? function(BB, OB) {
-           let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-           const YB = BB.map((BB => ({
-               model: BB,
-               key: GB()
-             }))).sort(((BB, OB) => BB.key - OB.key)).map((BB => {
+     function NM() {
+       let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const ie = fM.firstFreeAt(tM.map((ee => ee.name)), ee);
+       return TM(ie - ee) ? ee : ie
+     }
+     async function GM(ee) {
+       var ie;
+       let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const ye = Date.now(),
+         be = null !== (ie = He.models) && void 0 !== ie ? ie : tM,
+         Me = void 0 === He.models ? function(ee, ie) {
+           let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+           const ye = ee.map((ee => ({
+               model: ee,
+               key: He()
+             }))).sort(((ee, ie) => ee.key - ie.key)).map((ee => {
```

#### 342. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6919-L6921` → after: `L6919-L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6919-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6919-L6921) · [Before (L6919-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6919-L6921)

```diff
-                 model: OB
-               } = BB;
-               return OB
+                 model: ie
+               } = ee;
+               return ie
```

#### 343. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6923-L6937` → after: `L6923-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6923-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6923-L6937) · [Before (L6923-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6923-L6937)

```diff
-             DB = [],
-             QB = [];
-           for (const yB of YB) OB(yB) ? DB.push(yB) : QB.push(yB);
-           const oB = [...DB, ...QB],
-             jB = [];
-           for (let yB = 0; yB < oB.length; yB += 2) jB.push(oB.slice(yB, yB + 2));
-           return jB
-         }(DB, (BB => zQ.freeAt(BB.name, YB) <= YB)) : DB.map((BB => [BB])),
-         oB = [];
-       for (const yB of QB) {
-         const OB = await bQ(yB, BB, GB.signal, GB.onProgress, GB.tools);
-         if (null !== OB.reply) {
-           const DB = yB.find((BB => {
-             var GB;
-             return BB.name === (null === (GB = OB.reply) || void 0 === GB ? void 0 : GB.model)
+             be = [],
+             Me = [];
+           for (const Fe of ye) ie(Fe) ? be.push(Fe) : Me.push(Fe);
+           const Ke = [...be, ...Me],
+             Ue = [];
+           for (let Fe = 0; Fe < Ke.length; Fe += 2) Ue.push(Ke.slice(Fe, Fe + 2));
+           return Ue
+         }(be, (ee => fM.freeAt(ee.name, ye) <= ye)) : be.map((ee => [ee])),
+         Ke = [];
+       for (const Fe of Me) {
+         const ie = await hM(Fe, ee, He.signal, He.onProgress, He.tools);
+         if (null !== ie.reply) {
+           const be = Fe.find((ee => {
+             var He;
+             return ee.name === (null === (He = ie.reply) || void 0 === He ? void 0 : He.model)
```

#### 344. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6940-L6941` → after: `L6940-L6941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6940-L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6940-L6941) · [Before (L6940-L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6940-L6941)

```diff
-             ...DB && !1 !== GB.canNudge ? await xQ(DB, KQ(BB, DB), OB.reply, GB.signal, GB.onProgress, GB.tools) : OB.reply,
-             ms: Date.now() - YB
+             ...be && !1 !== He.canNudge ? await eK(be, AM(ee, be), ie.reply, He.signal, He.onProgress, He.tools) : ie.reply,
+             ms: Date.now() - ye
```

#### 345. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6944` → after: `L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6944) · [Before (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6944)

```diff
-         oB.push(...OB.failures)
+         Ke.push(...ie.failures)
```

#### 346. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6946-L6947` → after: `L6946-L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6946-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6946-L6947) · [Before (L6946-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6946-L6947)

```diff
-       const jB = FQ.find((BB => oB.includes(BB)));
-       throw new iQ(null !== jB && void 0 !== jB ? jB : "failed")
+       const Ue = cM.find((ee => Ke.includes(ee)));
+       throw new xM(null !== Ue && void 0 !== Ue ? Ue : "failed")
```

#### 347. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6949` → after: `L6949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6949) · [Before (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6949)

```diff
-     const vQ = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const rM = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 348. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6951-L6953` → after: `L6951-L6953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6951-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6951-L6953) · [Before (L6951-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6951-L6953)

```diff
-     function sQ(BB) {
-       const OB = BB.trim();
-       return OB.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(OB) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(OB) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function QM(ee) {
+       const ie = ee.trim();
+       return ie.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(ie) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(ie) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 349. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6960` → after: `L6960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6960) · [Before (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6960)

```diff
-         }(GB, null !== (oB = BB.callFormat) && void 0 !== oB ? oB : "simple")) return GB;
+         }(He, null !== (Ke = ee.callFormat) && void 0 !== Ke ? Ke : "simple")) return He;
```

#### 350. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6968` → after: `L6968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6968) · [Before (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6968)

```diff
-         JB = (0, RB.d)(jB, YB);
+         Je = (0, ze.e)(Ue, ye);
```

#### 351. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6971` → after: `L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6971) · [Before (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6971)

```diff
-         return cQ(OB) && "" !== OB.answer.trim() ? OB : GB
+         return SM(ie) && "" !== ie.answer.trim() ? ie : He
```

#### 352. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6974` → after: `L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L6974) · [Before (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L6974)

```diff
-         return WQ.jP(BB.name, JB.signal.aborted ? "timeout" : "network"), GB
+         return gM.RR(ee.name, Je.signal.aborted ? "timeout" : "network"), He
```

#### 353. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7009` → after: `L7009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7009) · [Before (L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7009)

```diff
-       const YB = (0, RB.d)(2e4, GB);
+       const ye = (0, ze.e)(2e4, He);
```

#### 354. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7027-L7028` → after: `L7027-L7028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7027-L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7027-L7028) · [Before (L7027-L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7027-L7028)

```diff
-         if (ZQ(BB, GB), 429 === GB.status) return WQ.jP(BB, GB), "busy";
-         if (!GB.ok) return WQ.jP(BB, GB), null;
+         if (zM(ee, He), 429 === He.status) return gM.RR(ee, He), "busy";
+         if (!He.ok) return gM.RR(ee, He), null;
```

#### 355. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7030` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7030) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7030)

```diff
-           JB = String(null !== (DB = null === (QB = yB.choices) || void 0 === QB || null === (oB = QB[0]) || void 0 === oB || null === (jB = oB.message) || void 0 === jB ? void 0 : jB.content) && void 0 !== DB ? DB : "");
+           Je = String(null !== (be = null === (Me = Fe.choices) || void 0 === Me || null === (Ke = Me[0]) || void 0 === Ke || null === (Ue = Ke.message) || void 0 === Ue ? void 0 : Ue.content) && void 0 !== be ? be : "");
```

#### 356. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7034` → after: `L7034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7034) · [Before (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7034)

```diff
-           }(JB) ? JB : null
+           }(Je) ? Je : null
```

#### 357. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7037` → after: `L7037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7037) · [Before (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7037)

```diff
-         return WQ.jP(BB, YB.signal.aborted ? "timeout" : "network"), null
+         return gM.RR(ee, ye.signal.aborted ? "timeout" : "network"), null
```

#### 358. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7042-L7043` → after: `L7042-L7043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7042-L7043) · [Before (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7042-L7043)

```diff
-     var Do = GB(31),
-       Qo = GB(37543);
+     var KK = He(35),
+       UK = He(37682);
```

#### 359. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7047-L7048` → after: `L7047-L7048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7047-L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7047-L7048) · [Before (L7047-L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7047-L7048)

```diff
-       const BB = Do.g.getItem(oo);
-       return null !== BB && "object" === typeof BB ? BB : {}
+       const ee = KK.i.getItem(FK);
+       return null !== ee && "object" === typeof ee ? ee : {}
```

#### 360. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7058` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7058) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7058)

```diff
-         return null === this.player ? null : null !== (BB = null !== (OB = this.unsaved.get(this.player)) && void 0 !== OB ? OB : jo()[this.player]) && void 0 !== BB ? BB : null
+         return null === this.player ? null : null !== (ee = null !== (ie = this.unsaved.get(this.player)) && void 0 !== ie ? ie : JK()[this.player]) && void 0 !== ee ? ee : null
```

#### 361. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7069-L7070` → after: `L7069-L7070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7069-L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7069-L7070) · [Before (L7069-L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7069-L7070)

```diff
-           } = await Promise.resolve().then((() => GB(1121)));
-           return null !== (BB = null === (OB = YB.peekCurrentUserContext()) || void 0 === OB ? void 0 : OB.whamm) && void 0 !== BB ? BB : null
+           } = await Promise.resolve().then((() => He(1083)));
+           return null !== (ee = null === (ie = ye.peekCurrentUserContext()) || void 0 === ie ? void 0 : ie.whamm) && void 0 !== ee ? ee : null
```

#### 362. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7075` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7075) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7075)

```diff
-         null !== this.player && (Do.g.setItem(oo, {
+         null !== this.player && (KK.i.setItem(FK, {
```

#### 363. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7098` → after: `L7098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7098) · [Before (L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7098)

```diff
-       const GB = `\n[... ${BB.length-OB} more characters cut]`;
+       const He = `\n[... ${ee.length-ie} more characters cut]`;
```

#### 364. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7103-L7104` → after: `L7103-L7104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7103-L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7103-L7104) · [Before (L7103-L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7103-L7104)

```diff
-     var No = GB(645),
-       Ro = GB(4792);
+     var zK = He(618),
+       BK = He(4752);
```

#### 365. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7141` → after: `L7141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7141) · [Before (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7141)

```diff
-         this.jP = BB, this.chatId = (0, Ro.d)(12), this.open = new Map
+         this.RR = ee, this.chatId = (0, BK.e)(12), this.open = new Map
```

#### 366. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7145` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7145) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7145)

```diff
-         GB && (clearTimeout(GB.timer), OB || (this.open.delete(BB), this.send(GB.jP)))
+         He && (clearTimeout(He.timer), ie || (this.open.delete(ee), this.send(He.RR)))
```

#### 367. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7150` → after: `L7150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7150) · [Before (L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7150)

```diff
-         if (YB) return void(YB.jP.responses.length < po && YB.jP.responses.push(Vo(GB)));
+         if (ye) return void(ye.RR.responses.length < TK && ye.RR.responses.push(OK(He)));
```

#### 368. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7153` → after: `L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7153) · [Before (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7153)

```diff
-           jP: DB
+           RR: be
```

#### 369. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7163` → after: `L7163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7163) · [Before (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7163)

```diff
-           this.open.delete(BB), this.send(OB.jP)
+           this.open.delete(ee), this.send(ie.RR)
```

#### 370. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7169` → after: `L7169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7169) · [Before (L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7169)

```diff
-         })(BB) && this.jP(BB)
+         })(ee) && this.RR(ee)
```

#### 371. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7184` → after: `L7184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7184) · [Before (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7184)

```diff
-             jP: OB
+             RR: ie
```

#### 372. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7195` → after: `L7195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7195) · [Before (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7195)

```diff
-       "yes" === BB && GB.length > 0 && uo(GB.map((BB => BB.jP)))
+       "yes" === ee && He.length > 0 && PK(He.map((ee => ee.RR)))
```

#### 373. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7198` → after: `L7198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7198) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7198)

```diff
-       const OB = Promise.resolve().then((() => GB(44631)));
+       const ie = Promise.resolve().then((() => He(44667)));
```

#### 374. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7208-L7209` → after: `L7208-L7209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7208-L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7208-L7209) · [Before (L7208-L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7208-L7209)

```diff
-     var mo = GB(353),
-       Io = GB(162);
+     var AK = He(347),
+       YK = He(153);
```

#### 375. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7266` → after: `L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7266) · [Before (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7266)

```diff
-       return "https:" !== OB.protocol && ("http:" !== OB.protocol || !GB) || OB.username || OB.password || OB.search ? null : `${OB.origin}${OB.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== ie.protocol && ("http:" !== ie.protocol || !He) || ie.username || ie.password || ie.search ? null : `${ie.origin}${ie.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 376. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7275` → after: `L7275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7275) · [Before (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7275)

```diff
-         super(`AI key request: ${BB}`), this.problem = BB, this.retryAfterMs = OB, this.status = GB, this.detail = YB
+         super(`AI key request: ${ee}`), this.problem = ee, this.retryAfterMs = ie, this.status = He, this.detail = ye
```

#### 377. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7280` → after: `L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7280) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7280)

```diff
-       return ("" === OB ? BB : BB.split(OB).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === ie ? ee : ee.split(ie).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 378. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7287` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7287) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7287)

```diff
-           return `${GB} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${He} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 379. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7291` → after: `L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7291) · [Before (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7291)

```diff
-           return `${GB} can't find that model. Check its name.`;
+           return `${He} can't find that model. Check its name.`;
```

#### 380. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7293` → after: `L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7293) · [Before (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7293)

```diff
-           return "anthropic" === OB ? "Claude didn't accept your key: check it, or make a new one." : "custom" === OB ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === ie ? "Claude didn't accept your key: check it, or make a new one." : "custom" === ie ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 381. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7295` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7295) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7295)

```diff
-           return "custom" === OB ? "That server stopped your key for now: it has used all it can." : `${GB} stopped your key for now: it has used all it can. Check it on ${GB}'s website.`;
+           return "custom" === ie ? "That server stopped your key for now: it has used all it can." : `${He} stopped your key for now: it has used all it can. Check it on ${He}'s website.`;
```

#### 382. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7297` → after: `L7297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7297) · [Before (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7297)

```diff
-           return `${GB} doesn't work from where you are.`;
+           return `${He} doesn't work from where you are.`;
```

#### 383. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7301` → after: `L7301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7301) · [Before (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7301)

```diff
-           return `${GB} had a problem with that. Try again in a minute.`
+           return `${He} had a problem with that. Try again in a minute.`
```

#### 384. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7327` → after: `L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7327) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7327)

```diff
-         }(OB)) throw new Error(`AI key request to an unknown host for ${BB}`);
+         }(ie)) throw new Error(`AI key request to an unknown host for ${ee}`);
```

#### 385. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7336` → after: `L7336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7336) · [Before (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7336)

```diff
-         throw console.warn(`AI key request: ${BB} answered ${DB.status}`), new Eo(function(BB, OB, GB) {
+         throw console.warn(`AI key request: ${ee} answered ${be.status}`), new uK(function(ee, ie, He) {
```

#### 386. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7343` → after: `L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7343) · [Before (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7343)

```diff
-           return Number.isFinite(GB) ? 1e3 * GB : Math.max(0, Date.parse(OB) - Date.now()) || void 0
+           return Number.isFinite(He) ? 1e3 * He : Math.max(0, Date.parse(ie) - Date.now()) || void 0
```

#### 387. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7350` → after: `L7350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7350) · [Before (L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7350)

```diff
-             GB = "string" === typeof DB ? DB : BB
+             He = "string" === typeof be ? be : ee
```

#### 388. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7364` → after: `L7364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7364) · [Before (L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7364)

```diff
-       const YB = (0, RB.d)(BB, OB);
+       const ye = (0, ze.e)(ee, ie);
```

#### 389. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7399` → after: `L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7399) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7399)

```diff
-         FDB: oB,
+         yMe: Ke,
```

#### 390. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7407` → after: `L7407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7407) · [Before (L7407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7407)

```diff
-         const oB = null !== (GB = null === (YB = BB.match(/```/g)) || void 0 === YB ? void 0 : YB.length) && void 0 !== GB ? GB : 0,
+         const Ke = null !== (He = null === (ye = ee.match(/```/g)) || void 0 === ye ? void 0 : ye.length) && void 0 !== He ? He : 0,
```

#### 391. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7420` → after: `L7420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7420) · [Before (L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7420)

```diff
-         written: jB ? PB : void 0,
+         written: Ue ? Re : void 0,
```

#### 392. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7432` → after: `L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7432) · [Before (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7432)

```diff
-       const YB = null !== (GB = OB.tools) && void 0 !== GB ? GB : [];
+       const ye = null !== (He = ie.tools) && void 0 !== He ? He : [];
```

#### 393. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7483` → after: `L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7483) · [Before (L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7483)

```diff
-             models: (null !== (OB = (await GB.json()).data) && void 0 !== OB ? OB : []).map((BB => ({
+             models: (null !== (ie = (await He.json()).data) && void 0 !== ie ? ie : []).map((ee => ({
```

#### 394. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7510` → after: `L7510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7510) · [Before (L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7510)

```diff
-           return await wQ(null !== (DB = QB.body) && void 0 !== DB ? DB : new ReadableStream, (OB => {
+           return await mM(null !== (be = Me.body) && void 0 !== be ? be : new ReadableStream, (ie => {
```

#### 395. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7515-L7516` → after: `L7515-L7516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7515-L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7515-L7516) · [Before (L7515-L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7515-L7516)

```diff
-             jB += null !== (DB = null !== (QB = null === NB || void 0 === NB || null === (PB = NB.delta) || void 0 === PB ? void 0 : PB.reasoning) && void 0 !== QB ? QB : null === NB || void 0 === NB || null === (zB = NB.delta) || void 0 === zB ? void 0 : zB.reasoning_content) && … [truncated]
-             for (const BB of null !== (RB = null === NB || void 0 === NB || null === (WB = NB.delta) || void 0 === WB ? void 0 : WB.tool_calls) && void 0 !== RB ? RB : []) {
+             Ue += null !== (be = null !== (Me = null === Xe || void 0 === Xe || null === (Re = Xe.delta) || void 0 === Re ? void 0 : Re.reasoning) && void 0 !== Me ? Me : null === Xe || void 0 === Xe || null === (ke = Xe.delta) || void 0 === ke ? void 0 : ke.reasoning_content) && … [truncated]
+             for (const ee of null !== (ze = null === Xe || void 0 === Xe || null === (Be = Xe.delta) || void 0 === Be ? void 0 : Be.tool_calls) && void 0 !== ze ? ze : []) {
```

#### 396. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7529` → after: `L7529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7529) · [Before (L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7529)

```diff
-             FDB: yB,
+             yMe: Fe,
```

#### 397. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7549` → after: `L7549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7549) · [Before (L7549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7549)

```diff
-         return await Ho(eo, BB, (async BB => Co("openrouter", `${Fo.openrouter.baseUrl}/key`, {
+         return await hK(nK, ee, (async ee => IK("openrouter", `${VK.openrouter.baseUrl}/key`, {
```

#### 398. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7570` → after: `L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7570) · [Before (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7570)

```diff
-             models: (null !== (OB = (await GB.json()).data) && void 0 !== OB ? OB : []).map((BB => ({
+             models: (null !== (ie = (await He.json()).data) && void 0 !== ie ? ie : []).map((ee => ({
```

#### 399. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7603` → after: `L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7603) · [Before (L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7603)

```diff
-           await wQ(null !== (QB = oB.body) && void 0 !== QB ? QB : new ReadableStream, (OB => {
+           await mM(null !== (Me = Ke.body) && void 0 !== Me ? Me : new ReadableStream, (ie => {
```

#### 400. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7608-L7609` → after: `L7608-L7609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7608-L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7608-L7609) · [Before (L7608-L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7608-L7609)

```diff
-             if ("content_block_start" === QB.type && "tool_use" === (null === (YB = QB.content_block) || void 0 === YB ? void 0 : YB.type)) PB.set(null !== (lB = QB.index) && void 0 !== lB ? lB : PB.size, {
-               name: null !== (pB = QB.content_block.name) && void 0 !== pB ? pB : "",
+             if ("content_block_start" === Me.type && "tool_use" === (null === (ye = Me.content_block) || void 0 === ye ? void 0 : ye.type)) Re.set(null !== (qe = Me.index) && void 0 !== qe ? qe : Re.size, {
+               name: null !== (fe = Me.content_block.name) && void 0 !== fe ? fe : "",
```

#### 401. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7614-L7615` → after: `L7614-L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7614-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7614-L7615) · [Before (L7614-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7614-L7615)

```diff
-               jB += null !== (qB = null === (ZB = QB.delta) || void 0 === ZB ? void 0 : ZB.text) && void 0 !== qB ? qB : "", yB += null !== (NB = null === (RB = QB.delta) || void 0 === RB ? void 0 : RB.thinking) && void 0 !== NB ? NB : "";
-               const BB = PB.get(null !== (WB = QB.index) && void 0 !== WB ? WB : -1);
+               Ue += null !== (Te = null === (pe = Me.delta) || void 0 === pe ? void 0 : pe.text) && void 0 !== Te ? Te : "", Fe += null !== (Xe = null === (ze = Me.delta) || void 0 === ze ? void 0 : ze.thinking) && void 0 !== Xe ? Xe : "";
+               const ee = Re.get(null !== (Be = Me.index) && void 0 !== Be ? Be : -1);
```

#### 402. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7617` → after: `L7617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7617) · [Before (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7617)

```diff
-               if (BB && "input_json_delta" === (null === (AB = QB.delta) || void 0 === AB ? void 0 : AB.type)) BB.args += null !== (VB = QB.delta.partial_json) && void 0 !== VB ? VB : ""
+               if (ee && "input_json_delta" === (null === (Ee = Me.delta) || void 0 === Ee ? void 0 : Ee.type)) ee.args += null !== (ge = Me.delta.partial_json) && void 0 !== ge ? ge : ""
```

#### 403. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7633` → after: `L7633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7633) · [Before (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7633)

```diff
-             FDB: JB,
+             yMe: Je,
```

#### 404. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7659` → after: `L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7659) · [Before (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7659)

```diff
-             models: (null !== (OB = (await GB.json()).models) && void 0 !== OB ? OB : []).filter((BB => {
+             models: (null !== (ie = (await He.json()).models) && void 0 !== ie ? ie : []).filter((ee => {
```

#### 405. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7682)

```diff
-           const oB = await Co("gemini", `${this.baseUrl}/models/${encodeURIComponent(BB)}:streamGenerateContent?alt=sse`, {
+           const Ke = await IK("gemini", `${this.baseUrl}/models/${encodeURIComponent(ee)}:streamGenerateContent?alt=sse`, {
```

#### 406. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7701` → after: `L7701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7701) · [Before (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7701)

```diff
-           return await wQ(null !== (QB = oB.body) && void 0 !== QB ? QB : new ReadableStream, (OB => {
+           return await mM(null !== (Me = Ke.body) && void 0 !== Me ? Me : new ReadableStream, (ie => {
```

#### 407. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7705` → after: `L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7705) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7705)

```diff
-             for (const BB of null !== (lB = null === zB || void 0 === zB || null === (pB = zB.content) || void 0 === pB ? void 0 : pB.parts) && void 0 !== lB ? lB : []) {
+             for (const ee of null !== (qe = null === ke || void 0 === ke || null === (fe = ke.content) || void 0 === fe ? void 0 : fe.parts) && void 0 !== qe ? qe : []) {
```

#### 408. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7708-L7709` → after: `L7708-L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7708-L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7708-L7709) · [Before (L7708-L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7708-L7709)

```diff
-                 name: null !== (qB = BB.functionCall.name) && void 0 !== qB ? qB : "",
-                 args: JSON.stringify(null !== (ZB = BB.functionCall.args) && void 0 !== ZB ? ZB : {})
+                 name: null !== (Te = ee.functionCall.name) && void 0 !== Te ? Te : "",
+                 args: JSON.stringify(null !== (pe = ee.functionCall.args) && void 0 !== pe ? pe : {})
```

#### 409. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7713` → after: `L7713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7713) · [Before (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7713)

```diff
-                 yB += null !== (NB = BB.text) && void 0 !== NB ? NB : ""
+                 Fe += null !== (Xe = ee.text) && void 0 !== Xe ? Xe : ""
```

#### 410. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7716` → after: `L7716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7716) · [Before (L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7716)

```diff
-                 jB += null !== (RB = BB.text) && void 0 !== RB ? RB : ""
+                 Ue += null !== (ze = ee.text) && void 0 !== ze ? ze : ""
```

#### 411. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7728` → after: `L7728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7728) · [Before (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7728)

```diff
-             FDB: JB,
+             yMe: Je,
```

#### 412. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7753` → after: `L7753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7753) · [Before (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7753)

```diff
-           return new Bj("custom", null !== GB && void 0 !== GB ? GB : "", OB)
+           return new eU("custom", null !== He && void 0 !== He ? He : "", ie)
```

#### 413. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7881` → after: `L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7881) · [Before (L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7881)

```diff
-         name: null !== (YB = null === DB || void 0 === DB ? void 0 : DB.name) && void 0 !== YB ? YB : OB,
+         name: null !== (ye = null === be || void 0 === be ? void 0 : be.name) && void 0 !== ye ? ye : ie,
```

#### 414. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7905` → after: `L7905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7905) · [Before (L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7905)

```diff
-       return null !== (OB = BB.find((BB => "smart" === BB.tier))) && void 0 !== OB ? OB : BB[0]
+       return null !== (ie = ee.find((ee => "smart" === ee.tier))) && void 0 !== ie ? ie : ee[0]
```

#### 415. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7911` → after: `L7911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7911) · [Before (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7911)

```diff
-       return null !== (OB = BB.name) && void 0 !== OB ? OB : wo(BB.provider, BB.baseUrl, GB)
+       return null !== (ie = ee.name) && void 0 !== ie ? ie : vK(ee.provider, ee.baseUrl, He)
```

#### 416. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7928` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7928) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7928)

```diff
-         return new URL(null !== (OB = BB.baseUrl) && void 0 !== OB ? OB : "").protocol.startsWith("http")
+         return new URL(null !== (ie = ee.baseUrl) && void 0 !== ie ? ie : "").protocol.startsWith("http")
```

#### 417. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7938` → after: `L7938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7938) · [Before (L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7938)

```diff
-         return console.warn(`AI Helper: no ${BB}`, OB), null
+         return console.warn(`AI Helper: no ${ee}`, ie), null
```

#### 418. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7950` → after: `L7950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7950) · [Before (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7950)

```diff
-         this.state = null !== YB && void 0 !== YB && YB.remember ? null !== DB && void 0 !== DB && DB.remember ? DB : {
+         this.state = null !== ye && void 0 !== ye && ye.remember ? null !== be && void 0 !== be && be.remember ? be : {
```

#### 419. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7953` → after: `L7953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7953) · [Before (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7953)

```diff
-         } : null !== (GB = null !== YB && void 0 !== YB ? YB : DB) && void 0 !== GB ? GB : pj, this.ownsRemembered = this.state.remember && null !== DB
+         } : null !== (He = null !== ye && void 0 !== ye ? ye : be) && void 0 !== He ? He : fU, this.ownsRemembered = this.state.remember && null !== be
```

#### 420. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7970-L7971` → after: `L7970-L7971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7970-L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7970-L7971) · [Before (L7970-L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7970-L7971)

```diff
-           jB = "custom" !== BB.provider ? BB.provider : null !== (YB = null === oB || void 0 === oB ? void 0 : oB.id) && void 0 !== YB ? YB : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           yB = void 0 === OB ? Pj(BB.models) : null !== (DB = BB.models.find((BB => BB.id === OB))) && void 0 !== DB ? DB : BB.models[0],
+           Ue = "custom" !== ee.provider ? ee.provider : null !== (ye = null === Ke || void 0 === Ke ? void 0 : Ke.id) && void 0 !== ye ? ye : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           Fe = void 0 === ie ? RU(ee.models) : null !== (be = ee.models.find((ee => ee.id === ie))) && void 0 !== be ? be : ee.models[0],
```

#### 421. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L7986` → after: `L7986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R7986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L7986) · [Before (L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L7986)

```diff
-           lB = zB ? this.state.keys.filter((BB => BB.id !== jB)).map((BB => BB.id === GB ? MB : BB)) : PB ? [...this.state.keys, MB] : this.state.keys.map((BB => BB.id === jB ? MB : BB)),
+           qe = ke ? this.state.keys.filter((ee => ee.id !== Ue)).map((ee => ee.id === He ? oe : ee)) : Re ? [...this.state.keys, oe] : this.state.keys.map((ee => ee.id === Ue ? oe : ee)),
```

#### 422. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8005` → after: `L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8005) · [Before (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8005)

```diff
-             return "" === GB ? DB : {
+             return "" === He ? be : {
```

#### 423. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8100` → after: `L8100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8100) · [Before (L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8100)

```diff
-           YB = (null !== (OB = null === GB || void 0 === GB ? void 0 : GB.keys) && void 0 !== OB ? OB : []).filter((BB => this.state.keys.every((OB => !qj(OB, BB)))));
+           ye = (null !== (ie = null === He || void 0 === He ? void 0 : He.keys) && void 0 !== ie ? ie : []).filter((ee => this.state.keys.every((ie => !TU(ie, ee)))));
```

#### 424. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8144` → after: `L8144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8144) · [Before (L8144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8144)

```diff
-           return Array.isArray(OB.keys) && OB.keys.every(Zj) ? OB : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(ie.keys) && ie.keys.every(pU) ? ie : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 425. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8186` → after: `L8186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8186) · [Before (L8186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8186)

```diff
-       const jB = null !== (GB = null === oB || void 0 === oB ? void 0 : oB.trim()) && void 0 !== GB ? GB : "";
+       const Ue = null !== (He = null === Ke || void 0 === Ke ? void 0 : Ke.trim()) && void 0 !== He ? He : "";
```

#### 426. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8216` → after: `L8216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8216) · [Before (L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8216)

```diff
-               return 0 !== (null !== (GB = null === (YB = OB.tools) || void 0 === YB ? void 0 : YB.length) && void 0 !== GB ? GB : 0) && BB instanceof Eo && "failed" === BB.problem && (400 === BB.status || 404 === BB.status && /\btool/i.test(null !== (DB = BB.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (He = null === (ye = ie.tools) || void 0 === ye ? void 0 : ye.length) && void 0 !== He ? He : 0) && ee instanceof uK && "failed" === ee.problem && (400 === ee.status || 404 === ee.status && /\btool/i.test(null !== (be = ee.detail) && void 0 != … [truncated]
```

#### 427. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8231)

```diff
-         return await (yB = Math.min(null !== (oB = null !== (jB = PB.retryAfterMs) && void 0 !== jB ? jB : GB.retryWaitMs) && void 0 !== oB ? oB : 3e3, 2e4), JB = GB.signal, new Promise(((BB, OB) => {
+         return await (Fe = Math.min(null !== (Ke = null !== (Ue = Re.retryAfterMs) && void 0 !== Ue ? Ue : He.retryWaitMs) && void 0 !== Ke ? Ke : 3e3, 2e4), Je = He.signal, new Promise(((ee, ie) => {
```

#### 428. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8243` → after: `L8243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8243) · [Before (L8243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8243)

```diff
-     var Sj = GB(4062);
+     var OU = He(4012);
```

#### 429. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8360` → after: `L8360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8360) · [Before (L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8360)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${Ej((null!==(OB=BB.availableFrom)&&void 0!==OB?OB:GB)-GB)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${uU((null!==(ie=ee.availableFrom)&&void 0!==ie?ie:He)-He)} to go.`;
```

#### 430. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8362` → after: `L8362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8362) · [Before (L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8362)

```diff
-           return BB.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(BB,OB){const GB=Math.ceil((BB-OB)/36e5);if(GB<=24)return GB<=1?"within the hour":`in ${GB} hours`;return`in ${Ej(BB-OB)}`}(BB.resetsAt,GB)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return ee.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(ee,ie){const He=Math.ceil((ee-ie)/36e5);if(He<=24)return He<=1?"within the hour":`in ${He} hours`;return`in ${uU(ee-ie)}`}(ee.resetsAt,He)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 431. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8393` → after: `L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8393) · [Before (L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8393)

```diff
-       return `Usage left: ${BB.left}`
+       return `Usage left: ${ee.left}`
```

#### 432. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8397-L8398` → after: `L8397-L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8397-L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8397-L8398) · [Before (L8397-L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8397-L8398)

```diff
-       const OB = Math.max(1, Math.ceil(BB / mo.g));
-       return 1 === OB ? "1 day" : `${OB} days`
+       const ie = Math.max(1, Math.ceil(ee / AK.h));
+       return 1 === ie ? "1 day" : `${ie} days`
```

#### 433. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8403` → after: `L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8403) · [Before (L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8403)

```diff
-       if (GB) return `${GB} Bot.xd is answering instead.`;
+       if (He) return `${He} Bot.xd is answering instead.`;
```

#### 434. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8422` → after: `L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8422) · [Before (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8422)

```diff
-           return BB.messages.length > 12 || BB.messages.some((BB => BB.content.length > OQ)) || (null !== (OB = null === (GB = BB.toolsJson) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : 0) > 1e5 || (null !== (YB = null === (DB = BB.request) || void 0 === DB ? vo … [truncated]
+           return ee.messages.length > 12 || ee.messages.some((ee => ee.content.length > yM)) || (null !== (ie = null === (He = ee.toolsJson) || void 0 === He ? void 0 : He.length) && void 0 !== ie ? ie : 0) > 1e5 || (null !== (ye = null === (be = ee.request) || void 0 === be ? vo … [truncated]
```

#### 435. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8429` → after: `L8429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8429) · [Before (L8429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8429)

```diff
-         if (OB instanceof Io.d && 413 === OB.httpCode) return {
+         if (ie instanceof YK.b && 413 === ie.httpCode) return {
```

#### 436. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8447-L8449` → after: `L8447-L8449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8447-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8447-L8449) · [Before (L8447-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8447-L8449)

```diff
-     var ej = GB(25),
-       Tj = GB(16),
-       bj = GB(2437);
+     var nU = He(27),
+       jU = He(18),
+       sU = He(2326);
```

#### 437. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8453` → after: `L8453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8453) · [Before (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8453)

```diff
-       Cj ??= Promise.resolve().then((() => GB(2444))), Cj.then((BB => {
+       IU ??= Promise.resolve().then((() => He(2330))), IU.then((ee => {
```

#### 438. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8475` → after: `L8475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8475) · [Before (L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8475)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => GB(1400))), GB.e(663).then((() => GB(63904)))]);
+         }] = await Promise.all([Promise.resolve().then((() => He(1340))), He.e(663).then((() => He(63846)))]);
```

#### 439. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8482` → after: `L8482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8482) · [Before (L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8482)

```diff
-                   ej.o.tM("OpenStoreFromCodeEditor"), (0, bj.p)({
+                   nU.h.yR("OpenStoreFromCodeEditor"), (0, sU.r)({
```

#### 440. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8487-L8488` → after: `L8487-L8488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8487-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8487-L8488) · [Before (L8487-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8487-L8488)

```diff
-                   const BB = ej.o.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === Tj.c.get("openEverythingMenuName") && (ej.o.unsubscribe(BB), uj.refresh())
+                   const ee = nU.h.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === jU.e.get("openEverythingMenuName") && (nU.h.unsubscribe(ee), PU.refresh())
```

#### 441. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8493` → after: `L8493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8493) · [Before (L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8493)

```diff
-           middleScreenPopupContainerClassName: Qo.e
+           middleScreenPopupContainerClassName: UK.c
```

#### 442. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8672` → after: `L8672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8672) · [Before (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8672)

```diff
-       return BB.length > 4 && BB.endsWith("ies") ? `${BB.slice(0,-3)}y` : BB.length > 3 && BB.endsWith("s") && !BB.endsWith("ss") ? BB.slice(0, -1) : BB
+       return ee.length > 4 && ee.endsWith("ies") ? `${ee.slice(0,-3)}y` : ee.length > 3 && ee.endsWith("s") && !ee.endsWith("ss") ? ee.slice(0, -1) : ee
```

#### 443. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8688` → after: `L8688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8688) · [Before (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8688)

```diff
-         DB = yy(OB ? BB : (0, qO.z)(BB, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, qO.p, (() => "projectRequire"))),
+         be = FF(ie ? ee : (0, Ti.t)(ee, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, Ti.n, (() => "projectRequire"))),
```

#### 444. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8691` → after: `L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8691) · [Before (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8691)

```diff
-         for (const DB of (0, qO.f)(BB, /(global|window|document|process|require)\b\s*[.([]/g, qO.p)) YB.has(DB[1]) || QB.has(DB[1]) || (YB.add(DB[1]), GB.push(`Line ${OB+1} uses "${DB[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const be of (0, Ti.g)(ee, /(global|window|document|process|require)\b\s*[.([]/g, Ti.n)) ye.has(be[1]) || Me.has(be[1]) || (ye.add(be[1]), He.push(`Line ${ie+1} uses "${be[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 445. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8706` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8706) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8706)

```diff
-         const lB = [null !== (QB = OB[YB - 2]) && void 0 !== QB ? QB : "", null !== (oB = OB[YB - 1]) && void 0 !== oB ? oB : "", BB.slice(0, JB)].join(" ");
+         const qe = [null !== (Me = ie[ye - 2]) && void 0 !== Me ? Me : "", null !== (Ke = ie[ye - 1]) && void 0 !== Ke ? Ke : "", ee.slice(0, Je)].join(" ");
```

#### 446. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8708-L8709` → after: `L8708-L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8708-L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8708-L8709) · [Before (L8708-L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8708-L8709)

```diff
-         const pB = null !== (jB = null === (yB = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(PB)) || void 0 === yB ? void 0 : yB[1]) && void 0 !== jB ? jB : "coins";
-         GB.push(`Line ${YB+1} sets the saved "${pB}" back to ${zB} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${pB}") is null.`)
+         const fe = null !== (Ue = null === (Fe = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(Re)) || void 0 === Fe ? void 0 : Fe[1]) && void 0 !== Ue ? Ue : "coins";
+         He.push(`Line ${ye+1} sets the saved "${fe}" back to ${ke} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${fe}") is null.`)
```

#### 447. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8715` → after: `L8715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8715) · [Before (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8715)

```diff
-       const YB = null !== (OB = null === (GB = BB.split("### Parameters:")[1]) || void 0 === GB ? void 0 : GB.split("###")[0]) && void 0 !== OB ? OB : "",
+       const ye = null !== (ie = null === (He = ee.split("### Parameters:")[1]) || void 0 === He ? void 0 : He.split("###")[0]) && void 0 !== ie ? ie : "",
```

#### 448. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8763-L8765` → after: `L8763-L8765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8763-L8765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8763-L8765) · [Before (L8763-L8765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8763-L8765)

```diff
-         DB = `\\((?:[^()]*[\\s,])?${YB}(?![\\w$])[^()]*\\)`,
-         QB = new RegExp(`(?:const|let|var)\\s+${YB}(?![\\w$])|${YB}\\s*(?:\\+?=(?![=>])|=>)|${DB}\\s*=>|function\\s*[\\w$]*\\s*${DB}`, "g");
-       return 1 === (0, qO.f)(BB, QB, qO.p).length ? null === (GB = new RegExp(`\\b(?:const|let|var)\\s+${YB}\\s*=\\s*${ly}\\s*(?:;|//|$)`, "m").exec(BB)) || void 0 === GB ? void 0 : GB[1] : void 0
+         be = `\\((?:[^()]*[\\s,])?${ye}(?![\\w$])[^()]*\\)`,
+         Me = new RegExp(`(?:const|let|var)\\s+${ye}(?![\\w$])|${ye}\\s*(?:\\+?=(?![=>])|=>)|${be}\\s*=>|function\\s*[\\w$]*\\s*${be}`, "g");
+       return 1 === (0, Ti.g)(ee, Me, Ti.n).length ? null === (He = new RegExp(`\\b(?:const|let|var)\\s+${ye}\\s*=\\s*${qF}\\s*(?:;|//|$)`, "m").exec(ee)) || void 0 === He ? void 0 : He[1] : void 0
```

#### 449. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8774-L8775` → after: `L8774-L8775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8774-L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8774-L8775) · [Before (L8774-L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8774-L8775)

```diff
-           YB = -1 === GB ? OB : OB.slice(0, GB + 1);
-         return YB.length > 110 ? `${YB.slice(0,107)}...` : YB
+           ye = -1 === He ? ie : ie.slice(0, He + 1);
+         return ye.length > 110 ? `${ye.slice(0,107)}...` : ye
```

#### 450. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8777` → after: `L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8777) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8777)

```diff
-       return YB = "api" === BB ? `api.${OB}(${zy(GB).join(", ")})${DB?` \u2014 ${DB}`:""}` : "callback" === BB ? `${OB}(${zy(GB).join(", ")})${DB?` \u2014 ${DB}`:""}` : "clientOption" === BB ? `${OB}: ${function(BB){var OB,GB;return null!==(OB=null===(GB=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return ye = "api" === ee ? `api.${ie}(${kF(He).join(", ")})${be?` \u2014 ${be}`:""}` : "callback" === ee ? `${ie}(${kF(He).join(", ")})${be?` \u2014 ${be}`:""}` : "clientOption" === ee ? `${ie}: ${function(ee){var ie,He;return null!==(ie=null===(He=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 451. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8779` → after: `L8779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8779) · [Before (L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8779)

```diff
-         OB.map((BB => `"${BB}"`)).join(" or ")
+         ie.map((ee => `"${ee}"`)).join(" or ")
```

#### 452. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8781` → after: `L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8781) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8781)

```diff
-       The closest name is "${OB[0]}", which may be something
+       The closest name is "${ie[0]}", which may be something
```

#### 453. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8783` → after: `L8783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8783) · [Before (L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8783)

```diff
-       `}function Ay(BB){return BB.split("\n").slice(1).map((BB=>BB.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((BB=>""!==BB&&!BB.startsWith("#")))}class Vy{constructor(BB){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function EF(ee){return ee.split("\n").slice(1).map((ee=>ee.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((ee=>""!==ee&&!ee.startsWith("#")))}class gF{constructor(ee){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 454. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8787` → after: `L8787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8787) · [Before (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8787)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();OB.push({name:GB,text:DB})}return OB}(GB))OB.push(Zy(BB,YB,DB))};GB("api",BB.apiReference),GB("callback",BB.callbacks),GB("clientOption",BB.clientOptions),GB("snippet",BB.snippets),GB("howTo",BB.howTo);const YB=function(){const BB … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();ie.push({name:He,text:be})}return ie}(He))ie.push(pF(ee,ye,be))};He("api",ee.apiReference),He("callback",ee.callbacks),He("clientOption",ee.clientOptions),He("snippet",ee.snippets),He("howTo",ee.howTo);const ye=function(){const ee … [truncated]
```

#### 455. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8798-L8799` → after: `L8798-L8799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8798-L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8798-L8799) · [Before (L8798-L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8798-L8799)

```diff
-       n\ nUsage: \`${BB.signature}\`\n\n\`\`\`js\n${BB.example}\n\`\`\``)),
-   OB = RY.map((BB => `## ${BB.name}\nPrefab (${BB.kind}, ${BB.category}): put in with use_prefab. ${iY(BB,!1)}`));
+       n\ nUsage: \`${ee.signature}\`\n\n\`\`\`js\n${ee.example}\n\`\`\``)),
+   ie = Ey.map((ee => `## ${ee.name}\nPrefab (${ee.kind}, ${ee.category}): put in with use_prefab. ${xy(ee,!1)}`));
```

#### 456. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8801-L8802` → after: `L8801-L8802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8801-L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8801-L8802) · [Before (L8801-L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8801-L8802)

```diff
-     helpers: `# Ready-made functions\n\n${BB.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${OB.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${ee.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${ie.join("\n\n")}\n`
```

#### 457. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8810` → after: `L8810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8810) · [Before (L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8810)

```diff
-     this.wordCounts.set(BB, (null !== (DB = this.wordCounts.get(BB)) && void 0 !== DB ? DB : 0) + 1)
+     this.wordCounts.set(ee, (null !== (be = this.wordCounts.get(ee)) && void 0 !== be ? be : 0) + 1)
```

#### 458. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8815` → after: `L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8815) · [Before (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8815)

```diff
-   const YB = null !== (OB = null === (GB = BB.split("## Mob Variations")[1]) || void 0 === GB ? void 0 : GB.split("```")[1]) && void 0 !== OB ? OB : "",
+   const ye = null !== (ie = null === (He = ee.split("## Mob Variations")[1]) || void 0 === He ? void 0 : He.split("```")[1]) && void 0 !== ie ? ie : "",
```

#### 459. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8838` → after: `L8838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8838) · [Before (L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8838)

```diff
-       return null !== (OB = BB[1]) && void 0 !== OB ? OB : BB[2]
+       return null !== (ie = ee[1]) && void 0 !== ie ? ie : ee[2]
```

#### 460. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8845` → after: `L8845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8845) · [Before (L8845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8845)

```diff
-     for (const DB of (0, qO.f)(BB, /([\w$]+)\s*\(/g, qO.p)) {
+     for (const be of (0, Ti.g)(ee, /([\w$]+)\s*\(/g, Ti.n)) {
```

#### 461. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8849` → after: `L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8849) · [Before (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8849)

```diff
-       QB.has(oB) || YB.has(oB) || jB || "api" !== (null === (GB = this.byName.get(oB)) || void 0 === GB ? void 0 : GB.kind) || QB.set(oB, `Line ${OB+1} calls ${oB} without "api.", so it throws there. Did you mean api.${oB}?`)
+       Me.has(Ke) || ye.has(Ke) || Ue || "api" !== (null === (He = this.byName.get(Ke)) || void 0 === He ? void 0 : He.kind) || Me.set(Ke, `Line ${ie+1} calls ${Ke} without "api.", so it throws there. Did you mean api.${Ke}?`)
```

#### 462. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8858-L8859` → after: `L8858-L8859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8858-L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8858-L8859) · [Before (L8858-L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8858-L8859)

```diff
-     const OB = this.find(BB.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((BB => "api" === BB.kind)).slice(0, 2).map((BB => `api.${BB.name}`));
-     return `api.${BB} doesn't exist.${OB.length?` Did you mean ${OB.join(" or ")}?`:""}`
+     const ie = this.find(ee.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((ee => "api" === ee.kind)).slice(0, 2).map((ee => `api.${ee.name}`));
+     return `api.${ee} doesn't exist.${ie.length?` Did you mean ${ie.join(" or ")}?`:""}`
```

#### 463. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8879` → after: `L8879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8879) · [Before (L8879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8879)

```diff
-         zB = PB ? null === (yB = new RegExp(`(?:^|[{,])\\s*${PB.replaceAll("$","\\$")}\\s*:\\s*${ly}`, "m").exec(BB)) || void 0 === yB ? void 0 : yB[1] : void 0,
+         ke = Re ? null === (Fe = new RegExp(`(?:^|[{,])\\s*${Re.replaceAll("$","\\$")}\\s*:\\s*${qF}`, "m").exec(ee)) || void 0 === Fe ? void 0 : Fe[1] : void 0,
```

#### 464. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8881-L8882` → after: `L8881-L8882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8881-L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8881-L8882) · [Before (L8881-L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8881-L8882)

```diff
-         pB = null !== (JB = null === (MB = new RegExp(`\\?\\s*${ly}\\s*:\\s*${ly}$`).exec(YB)) || void 0 === MB ? void 0 : MB.slice(1)) && void 0 !== JB ? JB : [];
-       for (const BB of [null !== (qB = null !== zB && void 0 !== zB ? zB : lB) && void 0 !== qB ? qB : YB, ...pB]) {
+         fe = null !== (Je = null === (oe = new RegExp(`\\?\\s*${qF}\\s*:\\s*${qF}$`).exec(ye)) || void 0 === oe ? void 0 : oe.slice(1)) && void 0 !== Je ? Je : [];
+       for (const ee of [null !== (Te = null !== ke && void 0 !== ke ? ke : qe) && void 0 !== Te ? Te : ye, ...fe]) {
```

#### 465. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8890` → after: `L8890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8890) · [Before (L8890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8890)

```diff
-   return [...GB].map((BB => `"${BB}" isn't an item or block name.${Wy(this.suggestNames(BB))}`))
+   return [...He].map((ee => `"${ee}" isn't an item or block name.${BF(this.suggestNames(ee))}`))
```

#### 466. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8903` → after: `L8903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8903) · [Before (L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8903)

```diff
-     return `"${OB}" isn't an item or block name, so giving or selling it fails. Did you mean "${GB}"?`
+     return `"${ie}" isn't an item or block name, so giving or selling it fails. Did you mean "${He}"?`
```

#### 467. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8919` → after: `L8919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8919) · [Before (L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8919)

```diff
-       return `"${OB}" isn't a block or item name, so comparing with it is never true. Did you mean "${GB}"?`
+       return `"${ie}" isn't a block or item name, so comparing with it is never true. Did you mean "${He}"?`
```

#### 468. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8924-L8925` → after: `L8924-L8925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8924-L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8924-L8925) · [Before (L8924-L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8924-L8925)

```diff
-       GB = this.blockNames.has(OB) || !this.itemAndBlockNames.includes(OB) ? void 0 : [`Block of ${OB}`, `${OB} Block`].find((BB => this.blockNames.has(BB)));
-     !GB || BB.includes(`"${GB}"`) || BB.includes(`'${GB}'`) || oB.set(OB, GB)
+       He = this.blockNames.has(ie) || !this.itemAndBlockNames.includes(ie) ? void 0 : [`Block of ${ie}`, `${ie} Block`].find((ee => this.blockNames.has(ee)));
+     !He || ee.includes(`"${He}"`) || ee.includes(`'${He}'`) || Ke.set(ie, He)
```

#### 469. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8929` → after: `L8929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8929) · [Before (L8929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8929)

```diff
-     return `"${OB}" is an item, not a block, so no block is ever called that. Did you mean "${GB}"?`
+     return `"${ie}" is an item, not a block, so no block is ever called that. Did you mean "${He}"?`
```

#### 470. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8946-L8947` → after: `L8946-L8947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8946-L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8946-L8947) · [Before (L8946-L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8946-L8947)

```diff
-       } : YB.names.length > 0 || YB.isDecided ? YB : {
-         names: GB.length <= 2 ? GB : [],
+       } : ye.names.length > 0 || ye.isDecided ? ye : {
+         names: He.length <= 2 ? He : [],
```

#### 471. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8951` → after: `L8951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8951) · [Before (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8951)

```diff
-     return `"${BB}" isn't a block or item name, so comparing a block with it is never true.${Wy(DB)}`
+     return `"${ee}" isn't a block or item name, so comparing a block with it is never true.${BF(be)}`
```

#### 472. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8966-L8967` → after: `L8966-L8967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8966-L8967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8966-L8967) · [Before (L8966-L8967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8966-L8967)

```diff
-           name: null !== (DB = GB[1]) && void 0 !== DB ? DB : GB[2],
-           body: BB.slice(GB.index, null !== (QB = null === (oB = OB[YB + 1]) || void 0 === oB ? void 0 : oB.index) && void 0 !== QB ? QB : BB.length)
+           name: null !== (be = He[1]) && void 0 !== be ? be : He[2],
+           body: ee.slice(He.index, null !== (Me = null === (Ke = ie[ye + 1]) || void 0 === Ke ? void 0 : Ke.index) && void 0 !== Me ? Me : ee.length)
```

#### 473. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8975` → after: `L8975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8975) · [Before (L8975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8975)

```diff
-         if (BB.text.includes(`"${YB}"`)) continue;
+         if (ee.text.includes(`"${ye}"`)) continue;
```

#### 474. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8977-L8978` → after: `L8977-L8978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8977-L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8977-L8978) · [Before (L8977-L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8977-L8978)

```diff
-           oB = QB.length > 0 ? `Did you mean ${QB.map((BB=>`"${BB}"`)).join(" or ")}?` : /Return false/i.test(BB.text) ? `To stop it, return false instead of "${YB}".` : "Check Show Docs for what it can return.";
-         OB.add(`${GB} can't use "${YB}" to stop anything. ${oB}`)
+           Ke = Me.length > 0 ? `Did you mean ${Me.map((ee=>`"${ee}"`)).join(" or ")}?` : /Return false/i.test(ee.text) ? `To stop it, return false instead of "${ye}".` : "Check Show Docs for what it can return.";
+         ie.add(`${He} can't use "${ye}" to stop anything. ${Ke}`)
```

#### 475. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8988` → after: `L8988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R8988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L8988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L8988) · [Before (L8988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L8988)

```diff
-     return !GB.some((BB => BB.startsWith(`${OB} `)))
+     return !He.some((ee => ee.startsWith(`${ie} `)))
```

#### 476. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9004` → after: `L9004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9004) · [Before (L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9004)

```diff
-     QB = null !== (OB = this.namesByLowerCase.get(GB)) && void 0 !== OB ? OB : this.namesByLowerCase.get(DB);
+     Me = null !== (ie = this.namesByLowerCase.get(He)) && void 0 !== ie ? ie : this.namesByLowerCase.get(be);
```

#### 477. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9036` → after: `L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9036) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9036)

```diff
-       BB && YB.set(BB, (null !== (GB = YB.get(BB)) && void 0 !== GB ? GB : 0) + OB)
+       ee && ye.set(ee, (null !== (He = ye.get(ee)) && void 0 !== He ? He : 0) + ie)
```

#### 478. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9042` → after: `L9042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9042) · [Before (L9042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9042)

```diff
-   for (const PB of `${BB}\n${OB}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const Re of `${ee}\n${ie}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 479. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9044` → after: `L9044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9044) · [Before (L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9044)

```diff
-     DB(this.byName.get(null !== (jB = null !== (yB = PB[1]) && void 0 !== yB ? yB : PB[2]) && void 0 !== jB ? jB : PB[3]), PB[1] || PB[2] ? 4 : 2)
+     be(this.byName.get(null !== (Ue = null !== (Fe = Re[1]) && void 0 !== Fe ? Fe : Re[2]) && void 0 !== Ue ? Ue : Re[3]), Re[1] || Re[2] ? 4 : 2)
```

#### 480. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9046` → after: `L9046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9046) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9046)

```diff
-   for (const PB of (0, qO.f)(OB, /([A-Za-z_$][\w$]*)\s*\(/g, qO.p)) {
+   for (const Re of (0, Ti.g)(ie, /([A-Za-z_$][\w$]*)\s*\(/g, Ti.n)) {
```

#### 481. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9055-L9056` → after: `L9055-L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9055-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9055-L9056) · [Before (L9055-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9055-L9056)

```diff
-       const GB = 1 / Math.log2(2 + (null !== (MB = this.wordCounts.get(OB)) && void 0 !== MB ? MB : 0));
-       PB.nameWords.has(OB) ? BB += 3 * GB : PB.textWords.has(OB) && (BB += GB)
+       const He = 1 / Math.log2(2 + (null !== (oe = this.wordCounts.get(ie)) && void 0 !== oe ? oe : 0));
+       Re.nameWords.has(ie) ? ee += 3 * He : Re.textWords.has(ie) && (ee += He)
```

#### 482. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9072` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9072) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9072)

```diff
-   return null !== (OB = null !== (GB = this.byName.get(YB)) && void 0 !== GB ? GB : this.sections.find((BB => BB.name.toLowerCase() === DB))) && void 0 !== OB ? OB : null
+   return null !== (ie = null !== (He = this.byName.get(ye)) && void 0 !== He ? He : this.sections.find((ee => ee.name.toLowerCase() === be))) && void 0 !== ie ? ie : null
```

#### 483. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9109` → after: `L9109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9109) · [Before (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9109)

```diff
-         YB = new RegExp(`(^|[^\\w$.])${GB}\\s*\\(`),
+         ye = new RegExp(`(^|[^\\w$.])${He}\\s*\\(`),
```

#### 484. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9135)

```diff
-         when: `in ${GB[1]}`,
+         when: `in ${He[1]}`,
```

#### 485. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9142` → after: `L9142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9142) · [Before (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9142)

```diff
-     jB = QB && OB ? ` ${QB}` : "",
+     Ue = Me && ie ? ` ${Me}` : "",
```

#### 486. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9146-L9147` → after: `L9146-L9147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9146-L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9146-L9147) · [Before (L9146-L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9146-L9147)

```diff
-     const BB = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (JB = null === (MB = DB[0]) || void 0 === MB ? void 0 : MB.trim()) && void 0 !== JB ? JB : ""),
-       OB = null === (PB = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (zB = null === (lB = DB[1]) || void 0 === lB ? void 0 : lB.trim()) && void 0 !== zB ? zB : "")) || void 0 === PB ? void 0 : PB[1],
+     const ee = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (Je = null === (oe = be[0]) || void 0 === oe ? void 0 : oe.trim()) && void 0 !== Je ? Je : ""),
+       ie = null === (Re = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (ke = null === (qe = be[1]) || void 0 === qe ? void 0 : qe.trim()) && void 0 !== ke ? ke : "")) || void 0 === Re ? void 0 : Re[1],
```

#### 487. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9150` → after: `L9150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9150) · [Before (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9150)

```diff
-         return /^(a|an|the)\s/i.test(OB) || !/^[a-z]/i.test(OB) ? OB : `${/^[aeiou]/i.test(OB)?"an":"a"} ${OB}`
+         return /^(a|an|the)\s/i.test(ie) || !/^[a-z]/i.test(ie) ? ie : `${/^[aeiou]/i.test(ie)?"an":"a"} ${ie}`
```

#### 488. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9152` → after: `L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9152) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9152)

```diff
-     return GB && null !== BB && void 0 !== BB && BB[3] ? `api.${yB[1]} needs ${GB}, but it got ${BB[3]}${jB}.` : BB ? `api.${yB[1]} couldn't use its ${pB=Number(BB[1]),1===pB?"first":2===pB?"second":3===pB?"third":4===pB?"fourth":`#${pB}`} argument${jB}.${GB?` It needs ${GB}.`:"" … [truncated]
+     return He && null !== ee && void 0 !== ee && ee[3] ? `api.${Fe[1]} needs ${He}, but it got ${ee[3]}${Ue}.` : ee ? `api.${Fe[1]} couldn't use its ${fe=Number(ee[1]),1===fe?"first":2===fe?"second":3===fe?"third":4===fe?"fourth":`#${fe}`} argument${Ue}.${He?` It needs ${He}.`:"" … [truncated]
```

#### 489. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9156` → after: `L9156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9156) · [Before (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9156)

```diff
-   if (qB) return qB[1] ? `${qB[1]} isn't a function${jB}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${jB}. Check each name it calls is spelt exactly right.`;
+   if (Te) return Te[1] ? `${Te[1]} isn't a function${Ue}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${Ue}. Check each name it calls is spelt exactly right.`;
```

#### 490. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9158` → after: `L9158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9158) · [Before (L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9158)

```diff
-   if (ZB) return `${ZB[1]} isn't defined${jB}. Check the spelling, or create it before using it.`;
+   if (pe) return `${pe[1]} isn't defined${Ue}. Check the spelling, or create it before using it.`;
```

#### 491. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9162-L9163` → after: `L9162-L9163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9162-L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9162-L9163) · [Before (L9162-L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9162-L9163)

```diff
-     const BB = null !== (RB = NB[1]) && void 0 !== RB ? RB : NB[3];
-     return `Your code tried to read${BB?` .${BB}`:" something"} from ${NB[2]}${jB}: a value it expected wasn't there.`
+     const ee = null !== (ze = Xe[1]) && void 0 !== ze ? ze : Xe[3];
+     return `Your code tried to read${ee?` .${ee}`:" something"} from ${Xe[2]}${Ue}: a value it expected wasn't there.`
```

#### 492. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9165` → after: `L9165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9165) · [Before (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9165)

```diff
-   return `Your code hit an error${jB}: ${oB.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${Ue}: ${Ke.replace(/^\w*Error:\s*/,"")}`
```

#### 493. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9251` → after: `L9251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9251) · [Before (L9251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9251)

```diff
-   return BB.replaceAll(`"${OB}"`, `"${GB}"`).replaceAll(`'${OB}'`, `'${GB}'`)
+   return ee.replaceAll(`"${ie}"`, `"${He}"`).replaceAll(`'${ie}'`, `'${He}'`)
```

#### 494. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9255` → after: `L9255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9255) · [Before (L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9255)

```diff
-   const GB = BB => fB().isIdentifier(BB) ? BB.text === OB : BB.elements.some((BB => !fB().isOmittedExpression(BB) && GB(BB.name))),
+   const He = ee => te().isIdentifier(ee) ? ee.text === ie : ee.elements.some((ee => !te().isOmittedExpression(ee) && He(ee.name))),
```

#### 495. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9268` → after: `L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9268) · [Before (L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9268)

```diff
-       return (null === BB || void 0 === BB || null === (GB = BB.name) || void 0 === GB ? void 0 : GB.text) === OB || void 0 !== YB && (fB().isNamespaceImport(YB) ? YB.name.text === OB : YB.elements.some((BB => BB.name.text === OB)))
+       return (null === ee || void 0 === ee || null === (He = ee.name) || void 0 === He ? void 0 : He.text) === ie || void 0 !== ye && (te().isNamespaceImport(ye) ? ye.name.text === ie : ye.elements.some((ee => ee.name.text === ie)))
```

#### 496. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9282` → after: `L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9282) · [Before (L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9282)

```diff
-             text: `${GB}${OB}${GB}`
+             text: `${He}${ie}${He}`
```

#### 497. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9294` → after: `L9294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9294) · [Before (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9294)

```diff
-                 edit: QB(DB, fB().isShorthandPropertyAssignment(BB) ? `${YB}: ${GB}` : YB),
+                 edit: Me(be, te().isShorthandPropertyAssignment(ee) ? `${ye}: ${He}` : ye),
```

#### 498. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9296` → after: `L9296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9296) · [Before (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9296)

```diff
-                 GP: jB
+                 KR: Ue
```

#### 499. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9309` → after: `L9309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9309) · [Before (L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9309)

```diff
-         return IG(BB, oB.flatMap((BB => BB.depth !== OB || BB.GP ? [] : [BB.edit])))
+         return aH(ee, Ke.flatMap((ee => ee.depth !== ie || ee.KR ? [] : [ee.edit])))
```

#### 500. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9334` → after: `L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9334) · [Before (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9334)

```diff
-           OB && fB().isIdentifier(OB) ? (fB().isVariableDeclaration(BB) && BY(BB.initializer, YB) ? DB : QB).add(OB.text) : fB().isIdentifier(BB) && OY(BB) && QB.add(BB.text), fB().forEachChild(BB, oB)
+           ie && te().isIdentifier(ie) ? (te().isVariableDeclaration(ee) && Hy(ee.initializer, ye) ? be : Me).add(ie.text) : te().isIdentifier(ee) && yy(ee) && Me.add(ee.text), te().forEachChild(ee, Ke)
```

#### 501. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9343` → after: `L9343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9343) · [Before (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9343)

```diff
-           text: `{ customAttributes: ${OB.getText(YB)} }`
+           text: `{ customAttributes: ${ie.getText(ye)} }`
```

#### 502. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9366` → after: `L9366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9366) · [Before (L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9366)

```diff
-               text: fB().isShorthandPropertyAssignment(JB) ? `${OB}: ${GB}` : GB
+               text: te().isShorthandPropertyAssignment(Je) ? `${ie}: ${He}` : He
```

#### 503. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9376-L9377` → after: `L9376-L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9376-L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9376-L9377) · [Before (L9376-L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9376-L9377)

```diff
-       const OB = `(["'])${function(BB){return BB.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(GB)}\\1`;
-       return ("comparedBlock" === DB ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${OB}`, `${OB}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${OB}`, `${OB}\\s*[!=]==?`, `\\bcase\\s+${OB}\\s*:`, `\\.includes\\(\\s*${OB}\\s*\\)`]).reduce(((BB, OB) => BB.replace(new RegExp(OB, "g"), … [truncated]
+       const ie = `(["'])${function(ee){return ee.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(He)}\\1`;
+       return ("comparedBlock" === be ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${ie}`, `${ie}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${ie}`, `${ie}\\s*[!=]==?`, `\\bcase\\s+${ie}\\s*:`, `\\.includes\\(\\s*${ie}\\s*\\)`]).reduce(((ee, ie) => ee.replace(new RegExp(ie, "g"), … [truncated]
```

#### 504. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9387` → after: `L9387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9387) · [Before (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9387)

```diff
-   return "export" === BB.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === BB.kind ? `The enchantment given to ${BB.method} is now in { customAttributes: ... }.` : "null" === BB.kind ? `The null given to ${BB.method} i … [truncated]
+   return "export" === ee.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === ee.kind ? `The enchantment given to ${ee.method} is now in { customAttributes: ... }.` : "null" === ee.kind ? `The null given to ${ee.method} i … [truncated]
```

#### 505. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9389` → after: `L9389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9389) · [Before (L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9389)

```diff
- var ay = GB(44618);
+ var SF = He(44647);
```

#### 506. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9449` → after: `L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9449) · [Before (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9449)

```diff
-       return DB ? `${YB} didn't accept your key: it may be wrong or deleted.` : `${YB} didn't accept your key: it may be wrong or deleted. Check it on ${YB}'s website.`;
+       return be ? `${ye} didn't accept your key: it may be wrong or deleted.` : `${ye} didn't accept your key: it may be wrong or deleted. Check it on ${ye}'s website.`;
```

#### 507. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9451` → after: `L9451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9451) · [Before (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9451)

```diff
-       return DB ? `${YB} stopped your key for now: it has used all it can.` : `${YB} stopped your key for now: it has used all it can. Check it on ${YB}'s website.`;
+       return be ? `${ye} stopped your key for now: it has used all it can.` : `${ye} stopped your key for now: it has used all it can. Check it on ${ye}'s website.`;
```

#### 508. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9453` → after: `L9453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9453) · [Before (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9453)

```diff
-       return `Too many requests to ${GB} right now. Wait a minute and try again.`;
+       return `Too many requests to ${He} right now. Wait a minute and try again.`;
```

#### 509. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9455)

```diff
-       return `${YB} can't find ${GB}. Pick another model, or press Check for new models in AI settings.`;
+       return `${ye} can't find ${He}. Pick another model, or press Check for new models in AI settings.`;
```

#### 510. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9457` → after: `L9457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9457) · [Before (L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9457)

```diff
-       return `${GB} took too long to answer.`;
+       return `${He} took too long to answer.`;
```

#### 511. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9459` → after: `L9459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9459) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9459)

```diff
-       return DB ? `Couldn't reach ${YB}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${YB}. Check your internet and your key.`;
+       return be ? `Couldn't reach ${ye}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${ye}. Check your internet and your key.`;
```

#### 512. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9461` → after: `L9461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9461) · [Before (L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9461)

```diff
-       return `${YB} doesn't work from where you are.`;
+       return `${ye} doesn't work from where you are.`;
```

#### 513. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9465` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9465) · [Before (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9465)

```diff
-       return `${GB} can't be used right now. Try again in a minute.`
+       return `${He} can't be used right now. Try again in a minute.`
```

#### 514. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9483)

```diff
-       ...ay.h,
+       ...SF.d,
```

#### 515. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9559` → after: `L9559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9559) · [Before (L9559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9559)

```diff
-       }, OB] = await Promise.all([Promise.resolve().then((() => GB(1400))), this.popup.notice()]), YB = BB.showPromptPopup({
+       }, ie] = await Promise.all([Promise.resolve().then((() => He(1340))), this.popup.notice()]), ye = ee.showPromptPopup({
```

#### 516. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9564` → after: `L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9564) · [Before (L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9564)

```diff
-         middleScreenPopupContainerClassName: Qo.e
+         middleScreenPopupContainerClassName: UK.c
```

#### 517. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9648` → after: `L9648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9648) · [Before (L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9648)

```diff
-       return "" === BB ? "no key needed" : BB.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === OB ? `key \u2026${BB.slice(-4)}` : `${(null!==(GB=null===(YB=/^[a-zA-Z]+-/.exec(BB))||void 0===YB?void 0:YB[0])&&void 0!==GB?GB:BB.slice(0,4)).slice(0,6)}\u2026${BB.slice(-4)}`
+       return "" === ee ? "no key needed" : ee.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === ie ? `key \u2026${ee.slice(-4)}` : `${(null!==(He=null===(ye=/^[a-zA-Z]+-/.exec(ee))||void 0===ye?void 0:ye[0])&&void 0!==He?He:ee.slice(0,4)).slice(0,6)}\u2026${ee.slice(-4)}`
```

#### 518. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9670` → after: `L9670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9670) · [Before (L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9670)

```diff
-         "aria-label": `Edit ${QB} key`,
+         "aria-label": `Edit ${Me} key`,
```

#### 519. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9675` → after: `L9675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9675) · [Before (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9675)

```diff
-         "aria-label": `Rename ${QB} key`,
+         "aria-label": `Rename ${Me} key`,
```

#### 520. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9696` → after: `L9696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9696) · [Before (L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9696)

```diff
-     NB = `${zB}-${null!==(OB=null===MB||void 0===MB?void 0:MB.keyId)&&void 0!==OB?OB:"botxd"}-${null!==(GB=null===MB||void 0===MB?void 0:MB.modelId)&&void 0!==GB?GB:"botxd"}`.replace(/[^\w-]/g, "_"),
+     Xe = `${ke}-${null!==(ie=null===oe||void 0===oe?void 0:oe.keyId)&&void 0!==ie?ie:"botxd"}-${null!==(He=null===oe||void 0===oe?void 0:oe.modelId)&&void 0!==He?He:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 521. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9700-L9702` → after: `L9700-L9702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9700-L9702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9700-L9702) · [Before (L9700-L9702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9700-L9702)

```diff
-     "data-key-id": null !== (DB = null === MB || void 0 === MB ? void 0 : MB.keyId) && void 0 !== DB ? DB : "botxd",
-     "data-model-id": null !== (jB = null === MB || void 0 === MB ? void 0 : MB.modelId) && void 0 !== jB ? jB : "botxd",
-     title: null !== qB && void 0 !== qB ? qB : void 0,
+     "data-key-id": null !== (be = null === oe || void 0 === oe ? void 0 : oe.keyId) && void 0 !== be ? be : "botxd",
+     "data-model-id": null !== (Ue = null === oe || void 0 === oe ? void 0 : oe.modelId) && void 0 !== Ue ? Ue : "botxd",
+     title: null !== Te && void 0 !== Te ? Te : void 0,
```

#### 522. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9710` → after: `L9710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9710) · [Before (L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9710)

```diff
-       "aria-describedby": JB ? NB : void 0,
+       "aria-describedby": Je ? Xe : void 0,
```

#### 523. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9737` → after: `L9737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9737) · [Before (L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9737)

```diff
-     Qm: jB,
+     JV: Ue,
```

#### 524. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9760` → after: `L9760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9760) · [Before (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9760)

```diff
-           at: null !== (GB = BB.usedAt) && void 0 !== GB ? GB : 0,
+           at: null !== (He = ee.usedAt) && void 0 !== He ? He : 0,
```

#### 525. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9783` → after: `L9783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9783) · [Before (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9783)

```diff
-     KB = `${OB}-model`,
+     De = `${ie}-model`,
```

#### 526. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9796` → after: `L9796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9796) · [Before (L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9796)

```diff
-       }, null !== (DB = null === YB || void 0 === YB ? void 0 : YB.modelId) && void 0 !== DB ? DB : "botxd")
+       }, null !== (be = null === ye || void 0 === ye ? void 0 : ye.modelId) && void 0 !== be ? be : "botxd")
```

#### 527. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9804` → after: `L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9804) · [Before (L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9804)

```diff
-       hint: null !== ZB && void 0 !== ZB ? ZB : `Bloxd's better AI. ${qB.status?wj(qB.status):""}`.trim(),
+       hint: null !== pe && void 0 !== pe ? pe : `Bloxd's better AI. ${Te.status?vU(Te.status):""}`.trim(),
```

#### 528. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9810` → after: `L9810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9810) · [Before (L9810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9810)

```diff
-         dj(null !== (BB = null === (OB = qB.status) || void 0 === OB ? void 0 : OB.provider) && void 0 !== BB ? BB : "ovh") && uj.pl()
+         wU(null !== (ee = null === (ie = Te.status) || void 0 === ie ? void 0 : ie.provider) && void 0 !== ee ? ee : "ovh") && PU.tq()
```

#### 529. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9815` → after: `L9815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9815) · [Before (L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9815)

```diff
-           if (dj(null !== (OB = null === BB || void 0 === BB ? void 0 : BB.provider) && void 0 !== OB ? OB : "ovh") || await JJ.ask()) return uj.pl(), !0;
+           if (wU(null !== (ie = null === ee || void 0 === ee ? void 0 : ee.provider) && void 0 !== ie ? ie : "ovh") || await JJ.ask()) return PU.tq(), !0;
```

#### 530. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9826-L9827` → after: `L9826-L9827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9826-L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9826-L9827) · [Before (L9826-L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9826-L9827)

```diff
-         mB = KB ? null !== (OB = BB.models.find((OB => OB.id === BB.usedModelId))) && void 0 !== OB ? OB : Pj(BB.models) : void 0,
-         IB = null !== (GB = null === (YB = VB[BB.id]) || void 0 === YB ? void 0 : YB.trim().toLowerCase()) && void 0 !== GB ? GB : "",
+         Ae = De ? null !== (ie = ee.models.find((ie => ie.id === ee.usedModelId))) && void 0 !== ie ? ie : RU(ee.models) : void 0,
+         Ye = null !== (He = null === (ye = ge[ee.id]) || void 0 === ye ? void 0 : ye.trim().toLowerCase()) && void 0 !== He ? He : "",
```

#### 531. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9840` → after: `L9840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9840) · [Before (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9840)

```diff
-             keyName: null !== (lB = BB.name) && void 0 !== lB ? lB : "",
+             keyName: null !== (qe = ee.name) && void 0 !== qe ? qe : "",
```

#### 532. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9856` → after: `L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9856) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9856)

```diff
-             "aria-label": `Check ${ZB} for new models`,
+             "aria-label": `Check ${pe} for new models`,
```

#### 533. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9864` → after: `L9864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9864) · [Before (L9864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9864)

```diff
-             "aria-label": `Remove ${ZB} key`,
+             "aria-label": `Remove ${pe} key`,
```

#### 534. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9872` → after: `L9872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9872) · [Before (L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9872)

```diff
-             "aria-label": `Remove ${ZB} key?`,
+             "aria-label": `Remove ${pe} key?`,
```

#### 535. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9878` → after: `L9878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9878) · [Before (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9878)

```diff
-               "aria-label": `Yes, remove ${ZB} key`,
+               "aria-label": `Yes, remove ${pe} key`,
```

#### 536. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9885` → after: `L9885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9885) · [Before (L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9885)

```diff
-               "aria-label": `No, keep ${ZB} key`,
+               "aria-label": `No, keep ${pe} key`,
```

#### 537. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9899-L9901` → after: `L9899-L9901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9899-L9901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9899-L9901) · [Before (L9899-L9901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9899-L9901)

```diff
-           "aria-label": `Find a model from ${ZB}`,
-           placeholder: `Find a model (${BB.models.length})`,
-           value: null !== (qB = VB[BB.id]) && void 0 !== qB ? qB : "",
+           "aria-label": `Find a model from ${pe}`,
+           placeholder: `Find a model (${ee.models.length})`,
+           value: null !== (Te = ge[ee.id]) && void 0 !== Te ? Te : "",
```

#### 538. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9917` → after: `L9917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9917) · [Before (L9917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9917)

```diff
-           "aria-label": `Show all ${ZB} models`,
+           "aria-label": `Show all ${pe} models`,
```

#### 539. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9941` → after: `L9941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9941) · [Before (L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9941)

```diff
-     } = await GB.e(138).then((() => GB(7062)));
+     } = await He.e(138).then((() => He(7160)));
```

#### 540. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L9965` → after: `L9965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R9965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L9965) · [Before (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L9965)

```diff
-         children: OB ? DB : QB
+         children: ie ? be : Me
```

#### 541. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10085` → after: `L10085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10085) · [Before (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10085)

```diff
-           children: [1 === jB.length ? "Forget your key" : `Forget all ${jB.length} keys`, " in this browser?", (0, oB.jsx)("button", {
+           children: [1 === Ue.length ? "Forget your key" : `Forget all ${Ue.length} keys`, " in this browser?", (0, Ke.jsx)("button", {
```

#### 542. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10149` → after: `L10149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10149) · [Before (L10149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10149)

```diff
-                 text: `${OB} listed no models, so your models stay as they were.`
+                 text: `${ie} listed no models, so your models stay as they were.`
```

#### 543. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10155` → after: `L10155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10155) · [Before (L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10155)

```diff
-                 text: `${OB}'s models are up to date.`
+                 text: `${ie}'s models are up to date.`
```

#### 544. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10169` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10169) · [Before (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10169)

```diff
-         Qm: BB => {
+         JV: ee => {
```

#### 545. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10224` → after: `L10224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10224) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10224)

```diff
-         null === (GB = null !== YB && void 0 !== YB ? YB : jB.current) || void 0 === GB || GB.scrollIntoView({
+         null === (He = null !== ye && void 0 !== ye ? ye : Ue.current) || void 0 === He || He.scrollIntoView({
```

#### 546. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10244)

```diff
-         children: yB ? `An API key works like a password for ${yB.shortName}'s AI (it isn't your ${yB.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: Fe ? `An API key works like a password for ${Fe.shortName}'s AI (it isn't your ${Fe.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 547. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10246` → after: `L10246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10246) · [Before (L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10246)

```diff
-         children: ["You make it on ", yB ? `${yB.shortName}'s website` : (0, oB.jsx)(ZJ, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", Fe ? `${Fe.shortName}'s website` : (0, Ke.jsx)(pJ, {}), ", and see how much you've used or delete it there."]
```

#### 548. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10248` → after: `L10248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10248) · [Before (L10248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10248)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (OB = null === yB || void 0 === yB ? void 0 : yB.shortName) && void 0 !== OB ? OB : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (ie = null === Fe || void 0 === Fe ? void 0 : Fe.shortName) && void 0 !== ie ? ie : "that company", ", never to Bloxd."]
```

#### 549. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10307` → after: `L10307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10307) · [Before (L10307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10307)

```diff
-   } = Wj(), [zB, lB] = (0, YB.useState)(null !== (OB = null === yB || void 0 === yB ? void 0 : yB.provider) && void 0 !== OB ? OB : null), [pB, qB] = (0, YB.useState)(!!yB), [ZB, NB] = (0, YB.useState)(""), RB = null !== (GB = null === yB || void 0 === yB ? void 0 : yB.key) && vo … [truncated]
+   } = BU(), [ke, qe] = (0, ye.useState)(null !== (ie = null === Fe || void 0 === Fe ? void 0 : Fe.provider) && void 0 !== ie ? ie : null), [fe, Te] = (0, ye.useState)(!!Fe), [pe, Xe] = (0, ye.useState)(""), ze = null !== (He = null === Fe || void 0 === Fe ? void 0 : Fe.key) && vo … [truncated]
```

#### 550. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10309` → after: `L10309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10309) · [Before (L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10309)

```diff
-     return BB === (null === yB || void 0 === yB ? void 0 : yB.provider) && ("custom" !== BB || (null !== (OB = Xo(VB)) && void 0 !== OB ? OB : "") === (null !== (GB = yB.baseUrl) && void 0 !== GB ? GB : ""))
+     return ee === (null === Fe || void 0 === Fe ? void 0 : Fe.provider) && ("custom" !== ee || (null !== (ie = CK(ge)) && void 0 !== ie ? ie : "") === (null !== (He = Fe.baseUrl) && void 0 !== He ? He : ""))
```

#### 551. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10312-L10313` → after: `L10312-L10313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10312-L10313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10312-L10313) · [Before (L10312-L10313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10312-L10313)

```diff
-     return "" === OB && "" !== RB && nB(BB) ? RB : OB
-   }, [kB, dB] = (0, YB.useState)(""), [KB, uB] = (0, YB.useState)(null !== (QB = null === yB || void 0 === yB ? void 0 : yB.name) && void 0 !== QB ? QB : ""), [mB, IB] = (0, YB.useState)(!1), [FB, iB] = (0, YB.useState)(null), [LB, gB] = (0, YB.useState)(""), [rB, XB] = (0, YB.us … [truncated]
+     return "" === ie && "" !== ze && de(ee) ? ze : ie
+   }, [Ze, we] = (0, ye.useState)(""), [De, Pe] = (0, ye.useState)(null !== (Me = null === Fe || void 0 === Fe ? void 0 : Fe.name) && void 0 !== Me ? Me : ""), [Ae, Ye] = (0, ye.useState)(!1), [Ve, ae] = (0, ye.useState)(null), [ce, xe] = (0, ye.useState)(""), [Le, Ce] = (0, ye.us … [truncated]
```

#### 552. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10344` → after: `L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10344) · [Before (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10344)

```diff
-           baseUrl: "custom" === zB && null !== (BB = Xo(VB)) && void 0 !== BB ? BB : void 0,
+           baseUrl: "custom" === ke && null !== (ee = CK(ge)) && void 0 !== ee ? ee : void 0,
```

#### 553. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10351` → after: `L10351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10351) · [Before (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10351)

```diff
-         const GB = null !== zB && void 0 !== zB ? zB : ro(OB),
+         const He = null !== ke && void 0 !== ke ? ke : LK(ie),
```

#### 554. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10366-L10367` → after: `L10366-L10367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10366-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10366-L10367) · [Before (L10366-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10366-L10367)

```diff
-             baseUrl: null !== DB && void 0 !== DB ? DB : void 0,
-             modelName: mB ? kB : void 0
+             baseUrl: null !== be && void 0 !== be ? be : void 0,
+             modelName: Ae ? Ze : void 0
```

#### 555. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10373` → after: `L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10373) · [Before (L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10373)

```diff
-           gB(null !== (oB = null === (jB = null !== JB && void 0 !== JB ? JB : Pj(BB)) || void 0 === jB ? void 0 : jB.id) && void 0 !== oB ? oB : "")
+           xe(null !== (Ke = null === (Ue = null !== Je && void 0 !== Je ? Je : RU(ee)) || void 0 === Ue ? void 0 : Ue.id) && void 0 !== Ke ? Ke : "")
```

#### 556. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10379-L10380` → after: `L10379-L10380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10379-L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10379-L10380) · [Before (L10379-L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10379-L10380)

```diff
-           const oB = "badKey" !== DB || pB ? "" : ` If it isn't from ${Fo[GB].shortName}, pick the company it's from.`;
-           EB(`${ho(DB,GB)}${oB}`)
+           const Ke = "badKey" !== be || fe ? "" : ` If it isn't from ${VK[He].shortName}, pick the company it's from.`;
+           ue(`${lK(be,He)}${Ke}`)
```

#### 557. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10390` → after: `L10390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10390) · [Before (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10390)

```diff
-         value: null !== zB && void 0 !== zB ? zB : "",
+         value: null !== ke && void 0 !== ke ? ke : "",
```

#### 558. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10418` → after: `L10418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10418) · [Before (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10418)

```diff
-       }), (!yB || VB !== (null !== (jB = yB.baseUrl) && void 0 !== jB ? jB : "")) && (0, oB.jsx)(RJ, {})]
+       }), (!Fe || ge !== (null !== (Ue = Fe.baseUrl) && void 0 !== Ue ? Ue : "")) && (0, Ke.jsx)(zJ, {})]
```

#### 559. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10490` → after: `L10490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10490) · [Before (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10490)

```diff
-           keyId: null !== zB && void 0 !== zB ? zB : "",
+           keyId: null !== ke && void 0 !== ke ? ke : "",
```

#### 560. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10514` → after: `L10514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10514) · [Before (L10514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10514)

```diff
-         placeholder: zB && "custom" !== zB ? `Like My ${Fo[zB].shortName}` : "Like Home server",
+         placeholder: ke && "custom" !== ke ? `Like My ${VK[ke].shortName}` : "Like Home server",
```

#### 561. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10540` → after: `L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10540) · [Before (L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10540)

```diff
-         children: rB ? aB ? "Testing the connection\u2026" : "Testing your key\u2026" : HB ? `Save and use ${HB.name}` : aB ? "Test connection" : "Test key"
+         children: Le ? Se ? "Testing the connection\u2026" : "Testing your key\u2026" : he ? `Save and use ${he.name}` : Se ? "Test connection" : "Test key"
```

#### 562. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10545-L10547` → after: `L10545-L10547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10545-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10545-L10547) · [Before (L10545-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10545-L10547)

```diff
- var VJ = GB(1175),
-   SJ = GB(37576),
-   nJ = GB(37572);
+ var gJ = He(1127),
+   OJ = He(37716),
+   dJ = He(37708);
```

#### 563. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10558-L10559` → after: `L10558-L10559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10558-L10559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10558-L10559) · [Before (L10558-L10559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10558-L10559)

```diff
-   } = (0, VJ.H)();
-   return (0, oB.jsx)(nJ.j, {
+   } = (0, gJ.v)();
+   return (0, Ke.jsx)(dJ.h, {
```

#### 564. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10562` → after: `L10562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10562) · [Before (L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10562)

```diff
-     text: QB(`codeEditorAiTutorial:${OB}`),
+     text: Me(`codeEditorAiTutorial:${ie}`),
```

#### 565. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10610` → after: `L10610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/105.js#L10610) · [Before (L10610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/105.js#L10610)

```diff
-   return BB.model.name.toLowerCase().startsWith(OB.toLowerCase()) ? BB.model.name : `${OB} \xb7 ${BB.model.name}`
+   return ee.model.name.toLowerCase().startsWith(ie.toLowerCase()) ? ee.model.name : `${ie} \xb7 ${ee.model.name}`
```
